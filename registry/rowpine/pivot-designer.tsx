"use client"

import * as React from "react"
import {
  Check,
  ChevronsDownUp,
  ChevronsUpDown,
  Columns3,
  Filter,
  GripVertical,
  MoreHorizontal,
  RotateCcw,
  Rows3,
  Search,
  Settings2,
  Sigma,
} from "lucide-react"
import {
  addToWell,
  AGG_LABEL,
  ALL_AGGREGATORS,
  clearWell,
  defaultLayoutFor,
  distinctValues,
  isFieldInLayout,
  KIND_WELLS,
  pivotFromLayout,
  removeFromWell,
  setAggregatorAt,
  setFilterAllowed,
  toggleField,
  WELL_LABEL,
  type PivotAggregatorId,
  type PivotField,
  type PivotLayout,
  type PivotPreset,
  type PivotTable as PivotModel,
  type ToColumnsOptions,
  type Well,
} from "rowpine"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { expandableIds, PivotTable } from "@/components/pivot-table"

/** Props of `PivotDesigner`. */
export type PivotDesignerProps<TData> = {
  /** Source rows. The filter value lists are read from all of them. */
  data: ReadonlyArray<TData>
  /** The fields offered in the field list. `kind` decides which wells take each one. */
  fields: ReadonlyArray<PivotField<TData>>
  /** The layout, to control it. Store it as JSON to save a user's view. */
  layout?: PivotLayout
  /** Called with each new layout. Without `layout` the designer also keeps the layout itself. */
  onLayoutChange?: (layout: PivotLayout) => void
  /** Saved layouts offered in the Presets menu. */
  presets?: ReadonlyArray<PivotPreset>
  /** Aggregations offered on value chips. Default all. */
  aggregators?: ReadonlyArray<PivotAggregatorId>
  /** Column options for the pivot, e.g. an Excel number format. */
  pivotOptions?: ToColumnsOptions
  /** Extra toolbar content, given the current pivot (e.g. an ExportMenu). */
  actions?: (pivot: PivotModel) => React.ReactNode
  /** Called with each new pivot. */
  onPivotChange?: (pivot: PivotModel | null) => void
  /** Classes added to the outer container. */
  className?: string
}

type Drag = { field: string; from: Well | "list"; index?: number }

const WELL_ICON: Record<Well, React.ComponentType<{ className?: string }>> = {
  filters: Filter,
  cols: Columns3,
  rows: Rows3,
  values: Sigma,
}

const ghost = (extra?: string) => cn(buttonVariants({ variant: "ghost", size: "sm" }), extra)
const outline = (extra?: string) => cn(buttonVariants({ variant: "outline", size: "sm" }), extra)

function FilterValues({
  values,
  allowed,
  onChange,
}: {
  values: string[]
  allowed: string[] | null
  onChange: (allowed: string[] | null) => void
}) {
  const [query, setQuery] = React.useState("")
  const pass = new Set(allowed ?? values)
  const shown = values.filter((v) => v.toLowerCase().includes(query.trim().toLowerCase()))
  const set = (v: string, on: boolean) => {
    const next = new Set(pass)
    if (on) next.add(v)
    else next.delete(v)
    onChange(next.size === values.length ? null : values.filter((x) => next.has(x)))
  }
  return (
    <div className="grid gap-2">
      <Input placeholder="Search values..." value={query} onChange={(e) => setQuery(e.target.value)} className="h-8" />
      <div className="flex gap-2 text-xs">
        <button type="button" className="text-primary hover:underline" onClick={() => onChange(null)}>
          Select all
        </button>
        <button type="button" className="text-primary hover:underline" onClick={() => onChange([])}>
          Clear
        </button>
        <span className="ml-auto text-muted-foreground">
          {pass.size} of {values.length}
        </span>
      </div>
      <div className="grid max-h-56 gap-1 overflow-y-auto pr-1">
        {shown.map((v) => (
          <label key={v} className="flex cursor-pointer items-center gap-2 rounded px-1 py-0.5 text-sm hover:bg-muted">
            <Checkbox checked={pass.has(v)} onCheckedChange={(on) => set(v, on === true)} />
            <span className="truncate">{v}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

/**
 * An Excel-style pivot designer: field list, four wells, and the pivot it builds.
 * Uncontrolled, it starts from `defaultLayoutFor`.
 * @param props See `PivotDesignerProps`.
 */
export function PivotDesigner<TData>({
  data,
  fields,
  layout: controlled,
  onLayoutChange,
  presets,
  aggregators = ALL_AGGREGATORS,
  pivotOptions,
  actions,
  onPivotChange,
  className,
}: PivotDesignerProps<TData>) {
  const [own, setOwn] = React.useState<PivotLayout>(() => controlled ?? defaultLayoutFor(fields))
  const layout = controlled ?? own
  const emit = (next: PivotLayout) => {
    if (!controlled) setOwn(next)
    onLayoutChange?.(next)
  }

  const pivot = React.useMemo(() => pivotFromLayout(data, layout, fields, pivotOptions), [data, layout, fields, pivotOptions])
  React.useEffect(() => onPivotChange?.(pivot), [pivot, onPivotChange])

  const [collapsed, setCollapsed] = React.useState<Set<string>>(() => new Set())
  const [search, setSearch] = React.useState("")
  const [drag, setDrag] = React.useState<Drag | null>(null)
  const [over, setOver] = React.useState<Well | "list" | null>(null)
  const [filterOpen, setFilterOpen] = React.useState<string | null>(null)

  const labelOf = (field: string) => fields.find((f) => f.field === field)?.label ?? field
  const kindOf = (field: string) => fields.find((f) => f.field === field)?.kind ?? "dimension"

  const add = (field: string, well: Well, sourceIndex?: number) => {
    emit(addToWell(layout, fields, field, well, Infinity, sourceIndex))
    // A new filter passes everything until values are picked: open the picker.
    if (well === "filters") setFilterOpen(field)
  }

  // ---- drag and drop -------------------------------------------------
  const dragProps = (d: Drag) => ({
    draggable: true,
    onDragStart: (e: React.DragEvent) => {
      setDrag(d)
      e.dataTransfer.effectAllowed = "move"
      e.dataTransfer.setData("text/plain", d.field)
    },
    onDragEnd: () => {
      setDrag(null)
      setOver(null)
    },
  })
  const dropProps = (target: Well | "list") => ({
    onDragOver: (e: React.DragEvent) => {
      if (!drag) return
      if (target !== "list" && !KIND_WELLS[kindOf(drag.field)].includes(target)) return
      e.preventDefault()
      e.dataTransfer.dropEffect = "move"
      setOver(target)
    },
    onDragLeave: () => setOver(null),
    onDrop: (e: React.DragEvent) => {
      e.preventDefault()
      setOver(null)
      if (!drag) return
      if (target === "list") {
        if (drag.from !== "list") emit(removeFromWell(layout, drag.field, drag.from, drag.index))
      } else {
        add(drag.field, target, drag.from === "values" ? drag.index : undefined)
      }
      setDrag(null)
    },
  })

  // ---- field list ----------------------------------------------------
  const q = search.trim().toLowerCase()
  const groups = new Map<string, PivotField<TData>[]>()
  for (const f of fields) {
    if (q && !f.label.toLowerCase().includes(q)) continue
    const g = f.group ?? ""
    groups.set(g, [...(groups.get(g) ?? []), f])
  }

  const chipMenu = (well: Well, field: string, index?: number) => {
    const targets = KIND_WELLS[kindOf(field)].filter((w) => w !== well)
    const current = index !== undefined ? layout.values[index]?.agg : undefined
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-sm p-0.5 text-muted-foreground hover:text-foreground" aria-label={`Options for ${labelOf(field)}`}>
          <MoreHorizontal className="size-3.5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          {well === "values" && index !== undefined && (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Sigma />
                Aggregate
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {aggregators
                  .filter((a) => kindOf(field) === "measure" || a === "count" || a === "countDistinct")
                  .map((a) => (
                    // A plain item closes the menu on pick in both bases; checkbox items stay open in Base UI.
                    <DropdownMenuItem key={a} onClick={() => emit(setAggregatorAt(layout, fields, index, a))}>
                      <Check className={cn(a !== current && "invisible")} />
                      {AGG_LABEL[a]}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
          {targets.length > 0 && (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Move to</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {targets.map((w) => (
                  <DropdownMenuItem key={w} onClick={() => add(field, w, well === "values" ? index : undefined)}>
                    {WELL_LABEL[w]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
          {well === "filters" && <DropdownMenuItem onClick={() => setFilterOpen(field)}>Edit filter...</DropdownMenuItem>}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => emit(removeFromWell(layout, field, well, index))}>Remove</DropdownMenuItem>
          <DropdownMenuItem onClick={() => emit(clearWell(layout, well))}>Clear {WELL_LABEL[well]}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  const chip = (well: Well, field: string, index?: number) => {
    const value = index !== undefined ? layout.values[index] : undefined
    const filter = well === "filters" ? layout.filters.find((f) => f.field === field) : undefined
    const text = value ? (value.label ?? `${AGG_LABEL[value.agg]} of ${labelOf(field)}`) : labelOf(field)
    return (
      <div
        key={`${well}-${field}-${index ?? ""}`}
        {...dragProps({ field, from: well, index })}
        className="flex h-7 cursor-grab items-center gap-1 rounded-md border bg-background pl-1 pr-0.5 text-xs shadow-xs active:cursor-grabbing"
      >
        <GripVertical className="size-3 text-muted-foreground" />
        <span className="max-w-40 truncate">{text}</span>
        {filter && (
          <Popover open={filterOpen === field} onOpenChange={(o) => setFilterOpen(o ? field : null)}>
            <PopoverTrigger
              className={cn("rounded-sm p-0.5 hover:text-foreground", filter.allowed ? "text-primary" : "text-muted-foreground")}
              aria-label={`Filter ${labelOf(field)}`}
            >
              <Filter className="size-3.5" />
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64">
              <FilterValues
                values={distinctValues(data, field)}
                allowed={filter.allowed}
                onChange={(allowed) => emit(setFilterAllowed(layout, field, allowed))}
              />
            </PopoverContent>
          </Popover>
        )}
        {chipMenu(well, field, index)}
      </div>
    )
  }

  const well = (w: Well) => {
    const Icon = WELL_ICON[w]
    const items =
      w === "values"
        ? layout.values.map((v, i) => chip("values", v.field, i))
        : w === "filters"
          ? layout.filters.map((f) => chip("filters", f.field))
          : layout[w].map((f) => chip(w, f))
    return (
      <div
        {...dropProps(w)}
        data-well={w}
        className={cn("grid content-start gap-1.5 rounded-md border border-dashed p-2", over === w && "border-primary bg-primary/5")}
      >
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Icon className="size-3.5" />
          {WELL_LABEL[w]}
        </div>
        <div className="flex min-h-7 flex-wrap gap-1.5">
          {items.length ? items : <span className="self-center text-xs text-muted-foreground">Drag fields here</span>}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("grid gap-3 md:grid-cols-[13rem_1fr]", className)}>
      {/* Field list */}
      <aside
        {...dropProps("list")}
        className={cn("grid content-start gap-2 self-start rounded-md border p-2 md:sticky md:top-4", over === "list" && "border-primary bg-primary/5")}
        aria-label="Pivot fields"
      >
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search fields..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-8 pl-7" />
        </div>
        {[...groups].map(([group, items]) => (
          <div key={group || "_"} className="grid gap-0.5">
            {group && <div className="px-1 pt-1 text-xs font-medium text-muted-foreground">{group}</div>}
            {items.map((f) => (
              <div
                key={f.field}
                {...dragProps({ field: f.field, from: "list" })}
                className="group flex cursor-grab items-center gap-2 rounded px-1 py-1 text-sm hover:bg-muted active:cursor-grabbing"
              >
                <Checkbox
                  checked={isFieldInLayout(layout, f.field)}
                  onCheckedChange={() => emit(toggleField(layout, fields, f.field))}
                  aria-label={`Use ${f.label}`}
                />
                <span className="flex-1 truncate">{f.label}</span>
                {f.kind === "measure" && <Sigma className="size-3.5 text-muted-foreground" />}
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className="rounded-sm p-0.5 text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-foreground focus-visible:opacity-100"
                    aria-label={`Add ${f.label}`}
                  >
                    <MoreHorizontal className="size-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {KIND_WELLS[f.kind].map((w) => (
                      <DropdownMenuItem key={w} onClick={() => add(f.field, w)}>
                        Add to {WELL_LABEL[w]}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        ))}
      </aside>

      <div className="grid min-w-0 content-start gap-3">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {presets && presets.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger className={outline()}>Presets</DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Saved layouts</DropdownMenuLabel>
                  {presets.map((p) => (
                    <DropdownMenuItem key={p.name} onClick={() => emit(structuredClone(p.layout))}>
                      {p.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger className={outline()}>
              <Settings2 />
              Totals
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuCheckboxItem checked={!layout.hideSubtotals} onCheckedChange={(on) => emit({ ...layout, hideSubtotals: !on })}>
                Subtotals
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={!layout.hideGrandTotals} onCheckedChange={(on) => emit({ ...layout, hideGrandTotals: !on })}>
                Grand totals
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button type="button" className={ghost()} onClick={() => setCollapsed(new Set())} disabled={!pivot}>
            <ChevronsUpDown />
            Expand all
          </button>
          <button type="button" className={ghost()} onClick={() => pivot && setCollapsed(expandableIds(pivot))} disabled={!pivot}>
            <ChevronsDownUp />
            Collapse all
          </button>
          <button type="button" className={ghost()} onClick={() => emit(defaultLayoutFor(fields))}>
            <RotateCcw />
            Reset
          </button>
          {pivot && actions && <div className="ml-auto">{actions(pivot)}</div>}
        </div>

        {/* Wells */}
        <div className="grid gap-2 sm:grid-cols-2">
          {well("filters")}
          {well("cols")}
          {well("rows")}
          {well("values")}
        </div>

        {/* Pivot */}
        {pivot ? (
          <PivotTable pivot={pivot} collapsed={collapsed} onCollapsedChange={setCollapsed} className="overflow-x-auto" />
        ) : (
          <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
            Add a field to Values to build the pivot.
          </div>
        )}
      </div>
    </div>
  )
}
