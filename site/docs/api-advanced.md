# Low-level API (rowpine 1.0.2)

The pieces the exporters are built from: reading a table into a sheet, and building files without saving them.

## readTable (function)

Read a TanStack table into a sheet: the visible exported columns in screen
order, and the rows `opts.rows` picks.
```ts
readTable(table: TableLike, opts?: ReadOptions) => Sheet
```
- `table`: `TableLike` A TanStack table (v8 or v9), or `pivot.table` from createPivot.
- `opts` (optional): `ReadOptions` Which rows to read, and an optional `rowStyle`. Default: every row.
- returns `Sheet`

## TableLike (interface)

The parts of a TanStack table the exporters read.
- `getAllLeafColumns`: `() => ColumnLike[]` TanStack `table.getAllLeafColumns()`. The exported columns when the table has no visibility or pinning methods.
- `getVisibleLeafColumns` (optional): `(() => ColumnLike[])` TanStack `table.getVisibleLeafColumns()`. The exported columns, in order, when the table has no pinning methods.
- `getLeftVisibleLeafColumns` (optional): `(() => ColumnLike[])` TanStack v8 `table.getLeftVisibleLeafColumns()`. Exported first; the Excel export freezes them.
- `getRightVisibleLeafColumns` (optional): `(() => ColumnLike[])` TanStack v8 `table.getRightVisibleLeafColumns()`. Exported last.
- `getStartVisibleLeafColumns` (optional): `(() => ColumnLike[])` TanStack v9 `table.getStartVisibleLeafColumns()`. Used in place of the left columns when present.
- `getEndVisibleLeafColumns` (optional): `(() => ColumnLike[])` TanStack v9 `table.getEndVisibleLeafColumns()`. Used in place of the right columns when present.
- `getCenterVisibleLeafColumns` (optional): `(() => ColumnLike[])` TanStack `table.getCenterVisibleLeafColumns()`. The unpinned columns, exported between the pinned ones.
- `getCoreRowModel`: `() => RowModelLike` TanStack `table.getCoreRowModel()`. The rows for `rows: 'all'` when the table has no filtered, grouped or sorted model.
- `getFilteredRowModel` (optional): `(() => RowModelLike)` TanStack `table.getFilteredRowModel()`. The rows for `rows: 'all'` when there is no grouped or sorted model.
- `getGroupedRowModel` (optional): `(() => RowModelLike)` TanStack `table.getGroupedRowModel()`. The rows for `rows: 'all'` when there is no sorted model.
- `getSortedRowModel` (optional): `(() => RowModelLike)` TanStack `table.getSortedRowModel()`. The rows for `rows: 'all'` when present.
- `getRowModel`: `() => RowModelLike` TanStack `table.getRowModel()`. The rows for `rows: 'page'`.
- `getSelectedRowModel` (optional): `(() => RowModelLike)` TanStack `table.getSelectedRowModel()` (row selection feature). The rows for `rows: 'selected'`; without it nothing is selected.
- `getState` (optional): `(() => object)` v8 state.
- `store` (optional): `{ readonly state: object; }` v9 state.
- `state` (optional): `object` v9 React: the selected state.

## ColumnLike (interface)

The parts of a TanStack column the exporters read.
- `id`: `string` TanStack `column.id`. Used as the column key when reading row values.
- `columnDef`: `{ header?: unknown; meta?: unknown; aggregationFn?: unknown; accessorFn?: unknown; accessorKey?: unknown; }` TanStack `column.columnDef`. The exporters read its string `header`,
`meta.rowpine`, a string `aggregationFn` (for Excel SUBTOTAL formulas),
and `accessorFn` / `accessorKey` to tell data columns from display columns.
- `accessorFn` (optional): `unknown` TanStack sets this on columns with an accessor.
- `parent` (optional): `ColumnLike` TanStack `column.parent`. String headers of parent groups are joined to the leaf header with ' / '.
- `getSize` (optional): `(() => number)` TanStack `column.getSize()`. The exported width in px when `meta.rowpine.width` is not set; 150 when neither exists.

## RowLike (interface)

The parts of a TanStack row the exporters read.
- `id`: `string` TanStack `row.id`.
- `depth`: `number` TanStack `row.depth`. The nesting level of each row when exporting the current page.
- `original`: `unknown` TanStack `row.original`. Passed to `rowStyle`, `format` and `cellStyle`.
- `subRows`: `RowLike[]` TanStack `row.subRows`. Walked to export groups and tree rows under their parent.
- `groupingColumnId` (optional): `string` TanStack `row.groupingColumnId`. On a group row, the column that shows the group label.
- `groupingValue` (optional): `unknown` TanStack `row.groupingValue`. On a group row, the label text.
- `getValue`: `(columnId: string) => unknown` TanStack `row.getValue(columnId)`. The raw value written for each exported column.
- `getIsGrouped` (optional): `(() => boolean)` TanStack `row.getIsGrouped()` (grouping feature). True marks a group row; without the method no row is a group.

## Sheet (type)

A table read into plain data by `readTable`. Every exporter writes from one.
- `columns`: `SheetColumn[]` The exported columns in screen order: pinned start columns, the rest, pinned end columns.
- `rows`: `SheetRow[]` The exported rows, in output order.
- `freezeColumns`: `number` Leading columns pinned left on screen.

## SheetColumn (type)

One exported column of a `Sheet`, with its `meta.rowpine` settings resolved.
- `id`: `string` The TanStack column id.
- `header`: `string` Header text: `meta.rowpine.header`, else the string header, else the id, after any parent group headers joined with ' / '.
- `width`: `number` Width in px: `meta.rowpine.width`, else the column's TanStack size, else 150.
- `align`: `"left" | "center" | "right"` `meta.rowpine.align`. Undefined writes no alignment to Excel, and the PDF aligns numbers right.
- `numFmt` (optional): `string` `meta.rowpine.numFmt`: the Excel number format.
- `format` (optional): `((value: unknown, row: unknown) => string)` `meta.rowpine.format`: display text for the PDF.
- `cellStyle` (optional): `((value: unknown, row: unknown) => CellStyle | undefined)` `meta.rowpine.cellStyle`: colors for data cells.
- `subtotal` (optional): `"auto" | SubtotalAgg` The column's aggregation when it maps to SUBTOTAL; `auto` resolves per value.

## SheetRow (type)

One exported row of a `Sheet`. Rows are in output order, each parent followed by its descendants.
- `kind`: `"group" | "data"` `group` is a TanStack grouped row; `data` is anything else.
- `depth`: `number` Nesting depth: 0 for top-level rows.
- `values`: `unknown[]` Raw values, aligned with the columns. Group rows hold aggregates.
- `blank`: `boolean[]` Which values to leave blank on screen-shaped output (grouped-by cells of leaf rows).
- `labelAt` (optional): `number` Index of the column showing a group row's label, and the label.
- `label` (optional): `string` A group row's label: the grouping value as text.
- `descendants`: `number` How many sheet rows directly follow this one as its descendants.
- `hasChildren`: `boolean` True when the row has child rows (a group, or a parent in tree data).
- `original`: `unknown` The TanStack row's `original` data.
- `style` (optional): `CellStyle` What `rowStyle` returned for this row.

## tableToXlsxModel (function)

The workbook model for a table. Pure apart from reading the table.
```ts
tableToXlsxModel(
  table: TableLike,
  opts?: XlsxExportOptions,
  notes?: string[],
) => XlsxModel
```
- `table`: `TableLike` A TanStack table (v8 or v9), or `pivot.table` from createPivot.
- `opts` (optional): `XlsxExportOptions` Which rows to read, the sheet name and the group row fill.
- `notes` (optional): `string[]` Text lines written below the data, after one empty row.
- returns `XlsxModel`

## sheetToXlsxModel (function)

The workbook model for a sheet. Pure: no zip, no license check.
```ts
sheetToXlsxModel(sheet: Sheet, opts?: XlsxExportOptions, notes?: string[]) => XlsxModel
```
- `sheet`: `Sheet` A sheet from `readTable`.
- `opts` (optional): `XlsxExportOptions` Sheet name and group row fill. `rows`, `fileName` and `download` are not read here.
- `notes` (optional): `string[]` Text lines written below the data, after one empty row.
- returns `XlsxModel`

## buildXlsxParts (function)

Build the OOXML package parts for a single-sheet workbook. Returns a map of
`path -> xml string` ready to be zipped by `packageXlsx`.
```ts
buildXlsxParts(model: XlsxModel) => Record<string, string>
```
- `model`: `XlsxModel` The workbook to write.
- returns `Record<string, string>`

## XlsxModel (type)

A single-sheet workbook as data: what `buildXlsxParts` writes.
- `sheetName`: `string` Worksheet name. Characters Excel forbids in a sheet name become spaces, the name is cut to 31 characters, and an empty result becomes 'Sheet1'.
- `header`: `readonly string[]` Header labels (row 1).
- `rows`: `readonly (readonly XlsxCell[])[]` Data rows (each an array of cells, column-aligned with `header`).
- `widths` (optional): `readonly number[]` Per-column widths in pixels (optional).
- `freezeHeader` (optional): `boolean` Freeze the header row.
- `freezeColumns` (optional): `number` Freeze this many leading columns.
- `condFormats` (optional): `readonly XlsxCondFormat[]` Native column conditional formatting (data bars / color scales).
- `table` (optional): `XlsxTableSpec` Wrap the data in a native Excel Table.
- `outline` (optional): `readonly number[]` Outline level per data row (0 = top level), aligned with `rows`. Rows
with a level above 0 form groups Excel can collapse; the summary row sits
above its detail rows, as on screen.
- `notes` (optional): `readonly string[]` Plain text lines written below the data, after one empty row.

## XlsxCell (type)

One worksheet cell, already resolved by the caller.
- `t`: `"n" | "d" | "s" | "b"` 'n' number, 'd' date, 's' string, 'b' boolean.
- `value`: `string | number | boolean | Date | null` The value. Without a formula, null, undefined and '' write an empty cell. A 'd' value that is not a Date is parsed; 'YYYY-MM-DD' is that local day.
- `formula` (optional): `string` A formula without the leading '=', e.g. `SUBTOTAL(9,C3:C9)`. `value` is
written as its cached result, so viewers that do not recalculate still
show the number.
- `numFmt` (optional): `string` Excel number-format code (for 'n' / 'd').
- `align` (optional): `"left" | "center" | "right"` Horizontal alignment. 'left' writes no alignment, the same as leaving it out.
- `fill` (optional): `string` Background fill hex (e.g. '#fee2e2').
- `color` (optional): `string` Font color hex.
- `bold` (optional): `boolean` Bold text.
- `link` (optional): `string` Hyperlink URL.

## sheetToPdfParams (function)

The pdfmake document parameters for a sheet. Pure.
```ts
sheetToPdfParams(
  sheet: Sheet,
  opts?: PdfTableExportOptions,
  notes?: string[],
  now?: Date,
) => PdfDocParams
```
- `sheet`: `Sheet` A sheet from `readTable`.
- `opts` (optional): `PdfTableExportOptions` PDF options, passed through to the document. `rows`, `fileName` and `download` are not read here.
- `notes` (optional): `string[]` Text lines printed below the table in small grey type.
- `now` (optional): `Date` The date in the page footer and the document properties. Default: the current time.
- returns `PdfDocParams`
