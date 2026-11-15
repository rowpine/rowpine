"use client"

import * as React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import {
  createPivot,
  type PivotColumnDef,
  type PivotConfig,
  type PivotTable as PivotModel,
  type PivotTreeRow,
  type ToColumnsOptions,
} from "rowpine"

import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Pivot `data` with `config`; recomputes only when either changes.
 * @param data Source rows. A new array on each render rebuilds the pivot.
 * @param config The pivot config. Keep the same object between renders (a constant or useMemo); a new one rebuilds the pivot.
 * @param options Settings for every value column, such as an Excel number format. Same rule as `config`.
 */
export function usePivot<TData>(
  data: ReadonlyArray<TData>,
  config: PivotConfig<TData>,
  options?: ToColumnsOptions
): PivotModel {
  return React.useMemo(() => createPivot(data, config, options), [data, config, options])
}

/** Ids of every row that has children: pass to `collapsed` to collapse all. */
export function expandableIds(pivot: PivotModel): Set<string> {
  const ids = new Set<string>()
  const walk = (rows: PivotTreeRow[]) =>
    rows.forEach((r) => {
      if (r.subRows?.length) {
        ids.add(r.__pivotId)
        walk(r.subRows)
      }
    })
  walk(pivot.data)
  return ids
}

type HeaderCell = { key: string; label: string; colSpan: number; rowSpan: number; isTotal: boolean; isRowHeader: boolean }

/** The column tree as header rows, with spans, like a spreadsheet pivot. */
function headerRows(columns: PivotColumnDef[]): HeaderCell[][] {
  const depthOf = (c: PivotColumnDef): number => ("columns" in c ? 1 + Math.max(...c.columns.map(depthOf)) : 1)
  const depth = Math.max(...columns.map(depthOf))
  const rows: HeaderCell[][] = Array.from({ length: depth }, () => [])
  const width = (c: PivotColumnDef): number => ("columns" in c ? c.columns.reduce((n, k) => n + width(k), 0) : 1)
  const place = (c: PivotColumnDef, level: number) => {
    const leaf = !("columns" in c)
    rows[level]!.push({
      key: c.id,
      label: c.header,
      colSpan: width(c),
      rowSpan: leaf ? depth - level : 1,
      isTotal: c.meta.pivot.isTotal,
      isRowHeader: c.meta.pivot.isRowHeader,
    })
    if (!leaf) c.columns.forEach((k) => place(k, level + 1))
  }
  columns.forEach((c) => place(c, 0))
  return rows
}

function leafColumns(columns: PivotColumnDef[]): Extract<PivotColumnDef, { accessorFn: unknown }>[] {
  return columns.flatMap((c) => ("columns" in c ? leafColumns(c.columns) : [c]))
}

/** Props of `PivotTable`. */
export type PivotTableProps = {
  /** The pivot to show, from usePivot or createPivot. */
  pivot: PivotModel
  /** Collapsed group ids, to control expansion from outside. */
  collapsed?: Set<string>
  /**
   * Called with the new set of collapsed ids when a row is expanded or
   * collapsed. When given, the table does not keep its own state, so pass
   * `collapsed` with it.
   */
  onCollapsedChange?: (collapsed: Set<string>) => void
  /** Start with every group collapsed when uncontrolled. Default false. */
  defaultCollapsed?: boolean
  /** Classes added to the bordered wrapper. */
  className?: string
}

/**
 * A pivot as a shadcn Table: header groups span their columns, rows with
 * children get an expand and collapse button, and empty value cells show '-'.
 * @param props See `PivotTableProps`.
 */
export function PivotTable({ pivot, collapsed, onCollapsedChange, defaultCollapsed = false, className }: PivotTableProps) {
  const [own, setOwn] = React.useState<Set<string>>(() => (defaultCollapsed ? expandableIds(pivot) : new Set()))
  const shut = collapsed ?? own
  const setShut = (next: Set<string>) => (onCollapsedChange ? onCollapsedChange(next) : setOwn(next))
  const toggle = (id: string) => {
    const next = new Set(shut)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setShut(next)
  }

  const headers = React.useMemo(() => headerRows(pivot.columns), [pivot.columns])
  const leaves = React.useMemo(() => leafColumns(pivot.columns), [pivot.columns])

  const visible: Array<{ row: PivotTreeRow; depth: number }> = []
  const walk = (rows: PivotTreeRow[], depth: number) => {
    for (const row of rows) {
      visible.push({ row, depth })
      if (row.subRows?.length && !shut.has(row.__pivotId)) walk(row.subRows, depth + 1)
    }
  }
  walk(pivot.data, 0)

  return (
    <div className={cn("rounded-md border", className)}>
      <Table>
        <TableHeader>
          {headers.map((cells, level) => (
            <TableRow key={level}>
              {cells.map((h) => (
                <TableHead
                  key={h.key}
                  colSpan={h.colSpan}
                  rowSpan={h.rowSpan}
                  className={cn(
                    "border-l first:border-l-0",
                    h.isRowHeader ? "text-left" : "text-right",
                    h.colSpan > 1 && "text-center",
                    h.isTotal && "bg-muted/50"
                  )}
                >
                  {h.label}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {visible.map(({ row, depth }) => {
            const kind = row.__pivotKind
            const strong = kind === "group" || kind === "grandTotal"
            const open = !shut.has(row.__pivotId)
            return (
              <TableRow
                key={row.__pivotId}
                className={cn(kind === "group" && "bg-muted/30", kind === "grandTotal" && "border-t-2 bg-muted/50")}
              >
                {leaves.map((col) => {
                  if (col.meta.pivot.isRowHeader) {
                    return (
                      <TableCell key={col.id} className={cn("whitespace-nowrap", strong && "font-medium")}>
                        <span className="inline-flex items-center gap-1" style={{ paddingLeft: depth * 16 }}>
                          {row.subRows?.length ? (
                            <button
                              type="button"
                              onClick={() => toggle(row.__pivotId)}
                              className="-ml-1 rounded p-0.5 text-muted-foreground hover:text-foreground"
                              aria-expanded={open}
                              aria-label={`${open ? "Collapse" : "Expand"} ${row.__pivotLabel}`}
                            >
                              {open ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
                            </button>
                          ) : (
                            depth > 0 && <span className="w-4" />
                          )}
                          {row.__pivotLabel}
                        </span>
                      </TableCell>
                    )
                  }
                  const value = col.accessorFn(row)
                  const text = col.meta.rowpine.format ? col.meta.rowpine.format(value, row) : String(value ?? "")
                  return (
                    <TableCell
                      key={col.id}
                      className={cn(
                        "border-l text-right tabular-nums",
                        strong && "font-medium",
                        col.meta.pivot.isTotal && "bg-muted/50",
                        value == null && "text-muted-foreground"
                      )}
                    >
                      {value == null ? "-" : text}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
