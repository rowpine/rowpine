"use client"

import * as React from "react"
import { ChevronDown, Download, FileSpreadsheet, FileText, Sheet } from "lucide-react"
import {
  exportCsv,
  exportPdf,
  exportThemeFromPage,
  exportXlsx,
  type CellStyle,
  type PdfTableExportOptions,
  type RowScope,
  type TableLike,
  type XlsxExportOptions,
} from "rowpine"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Format = "csv" | "xlsx" | "pdf"

/** Props of `ExportMenu`. */
export type ExportMenuProps = {
  /** A TanStack table (v8 or v9), or `pivot.table` from createPivot. */
  table: TableLike
  /** File name without extension. */
  fileName?: string
  /** Title printed at the top of the PDF. */
  pdfTitle?: string
  /** Which formats to offer. Default all three. */
  formats?: Format[]
  /** Style whole rows, e.g. `pivotRowStyle` for pivots. */
  rowStyle?: (original: unknown) => CellStyle | undefined
  /** Offer "Selected rows only". Default: when the table has a selection. */
  allowSelectedOnly?: boolean
  /** Called when an export fails. Default: console.error. */
  onError?: (error: unknown) => void
  /** Button text. Default 'Export'. */
  label?: string
  /** Classes added to the trigger button. */
  className?: string
  /**
   * Colors for the Excel and PDF files. "page" (default) reads your shadcn/ui
   * theme, so the files look like the table; "none" keeps rowpine's defaults.
   */
  theme?: "page" | "none"
  /** More PDF options, such as `pageSize` or `kpis`. They win over the theme colors. */
  pdfOptions?: PdfTableExportOptions
  /** More Excel options, such as `sheetName`. They win over the theme colors. */
  xlsxOptions?: XlsxExportOptions
}

const ITEMS: Record<Format, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  xlsx: { label: "Excel (.xlsx)", icon: FileSpreadsheet },
  pdf: { label: "PDF", icon: FileText },
  csv: { label: "CSV", icon: Sheet },
}

/**
 * A dropdown button that exports the table to Excel, PDF or CSV and saves the
 * file. While an export runs the button reads "Exporting..." and further picks
 * are ignored. A "Selected rows only" checkbox appears when the table has
 * selected rows, or as `allowSelectedOnly` says.
 * @param props See `ExportMenuProps`.
 */
export function ExportMenu({
  table,
  fileName = "export",
  pdfTitle,
  formats = ["xlsx", "pdf", "csv"],
  rowStyle,
  allowSelectedOnly,
  onError = (e) => console.error(e),
  label = "Export",
  className,
  theme = "page",
  pdfOptions,
  xlsxOptions,
}: ExportMenuProps) {
  const [busy, setBusy] = React.useState<Format | null>(null)
  const [selectedOnly, setSelectedOnly] = React.useState(false)
  const selectedCount = table.getSelectedRowModel?.().rows.length ?? 0
  const showSelected = allowSelectedOnly ?? selectedCount > 0
  const rows: RowScope = showSelected && selectedOnly && selectedCount > 0 ? "selected" : "all"

  async function run(format: Format) {
    if (busy) return
    setBusy(format)
    try {
      const colors = theme === "page" ? exportThemeFromPage() : { pdf: {}, xlsx: {} }
      if (format === "xlsx") await exportXlsx(table, { ...colors.xlsx, fileName, rows, rowStyle, ...xlsxOptions })
      else if (format === "pdf") await exportPdf(table, { ...colors.pdf, fileName, rows, rowStyle, title: pdfTitle, ...pdfOptions })
      else await exportCsv(table, { fileName, rows })
    } catch (error) {
      onError(error)
    } finally {
      setBusy(null)
    }
  }

  return (
    <DropdownMenu>
      {/* No asChild: the trigger is the button, which works with both the Radix and the Base UI menus. */}
      <DropdownMenuTrigger
        className={cn(buttonVariants({ variant: "outline", size: "sm" }), className)}
        // Not disabled while busy: the menu returns focus to its trigger on close, and a disabled one cannot take it.
        aria-busy={busy !== null}
      >
        <Download />
        {busy ? "Exporting..." : label}
        <ChevronDown className="opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Export as</DropdownMenuLabel>
          {formats.map((f) => {
            const { label, icon: Icon } = ITEMS[f]
            return (
              <DropdownMenuItem key={f} onClick={() => void run(f)}>
                <Icon />
                {label}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
        {showSelected && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={selectedOnly} onCheckedChange={(v) => setSelectedOnly(v === true)}>
              Selected rows only ({selectedCount})
            </DropdownMenuCheckboxItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
