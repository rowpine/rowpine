# Components (rowpine 1.0.2)

The shadcn registry items: an export menu, a pivot table and a pivot designer. Their source is in your project after npx shadcn add.

## ExportMenu (component)

A dropdown button that exports the table to Excel, PDF or CSV and saves the
file. While an export runs the button reads "Exporting..." and further picks
are ignored. A "Selected rows only" checkbox appears when the table has
selected rows, or as `allowSelectedOnly` says.
```ts
ExportMenu(
  { table, fileName, pdfTitle, formats, rowStyle, allowSelectedOnly, onError, label, className, theme, pdfOptions, xlsxOptions, }: ExportMenuProps,
) => any
```
- `__0`: `ExportMenuProps` See `ExportMenuProps`.
- returns `any`

## ExportMenuProps (type)

Props of `ExportMenu`.
- `table`: `TableLike` A TanStack table (v8 or v9), or `pivot.table` from createPivot.
- `fileName` (optional): `string` File name without extension.
- `pdfTitle` (optional): `string` Title printed at the top of the PDF.
- `formats` (optional): `Format[]` Which formats to offer. Default all three.
- `rowStyle` (optional): `((original: unknown) => CellStyle | undefined)` Style whole rows, e.g. `pivotRowStyle` for pivots.
- `allowSelectedOnly` (optional): `boolean` Offer "Selected rows only". Default: when the table has a selection.
- `onError` (optional): `((error: unknown) => void)` Called when an export fails. Default: console.error.
- `label` (optional): `string` Button text. Default 'Export'.
- `className` (optional): `string` Classes added to the trigger button.
- `theme` (optional): `"page" | "none"` Colors for the Excel and PDF files. "page" (default) reads your shadcn/ui
theme, so the files look like the table; "none" keeps rowpine's defaults.
- `pdfOptions` (optional): `PdfTableExportOptions` More PDF options, such as `pageSize` or `kpis`. They win over the theme colors.
- `xlsxOptions` (optional): `XlsxExportOptions` More Excel options, such as `sheetName`. They win over the theme colors.

## PivotTable (component)

A pivot as a shadcn Table: header groups span their columns, rows with
children get an expand and collapse button, and empty value cells show '-'.
```ts
PivotTable(
  { pivot, collapsed, onCollapsedChange, defaultCollapsed, className }: PivotTableProps,
) => any
```
- `__0`: `PivotTableProps` See `PivotTableProps`.
- returns `any`

## PivotTableProps (type)

Props of `PivotTable`.
- `pivot`: `PivotModel` The pivot to show, from usePivot or createPivot.
- `collapsed` (optional): `any` Collapsed group ids, to control expansion from outside.
- `onCollapsedChange` (optional): `((collapsed: Set<string>) => void)` Called with the new set of collapsed ids when a row is expanded or
collapsed. When given, the table does not keep its own state, so pass
`collapsed` with it.
- `defaultCollapsed` (optional): `boolean` Start with every group collapsed when uncontrolled. Default false.
- `className` (optional): `string` Classes added to the bordered wrapper.

## usePivot (hook)

Pivot `data` with `config`; recomputes only when either changes.
```ts
usePivot<TData>(
  data: ReadonlyArray<TData>,
  config: PivotConfig<TData>,
  options?: ToColumnsOptions,
) => PivotModel
```
- `data`: `readonly TData[]` Source rows. A new array on each render rebuilds the pivot.
- `config`: `PivotConfig<TData>` The pivot config. Keep the same object between renders (a constant or useMemo); a new one rebuilds the pivot.
- `options` (optional): `ToColumnsOptions` Settings for every value column, such as an Excel number format. Same rule as `config`.
- returns `PivotModel`

## PivotDesigner (component)

An Excel-style pivot designer: field list, four wells, and the pivot it builds.
Uncontrolled, it starts from `defaultLayoutFor`.
```ts
PivotDesigner<TData>(
  { data, fields, layout: controlled, onLayoutChange, presets, aggregators, pivotOptions, actions, onPivotChange, className, }: PivotDesignerProps<TData>,
) => any
```
- `__0`: `PivotDesignerProps<TData>` See `PivotDesignerProps`.
- returns `any`

## PivotDesignerProps<TData> (type)

Props of `PivotDesigner`.
- `data`: `readonly TData[]` Source rows. The filter value lists are read from all of them.
- `fields`: `readonly PivotField<TData>[]` The fields offered in the field list. `kind` decides which wells take each one.
- `layout` (optional): `PivotLayout` The layout, to control it. Store it as JSON to save a user's view.
- `onLayoutChange` (optional): `((layout: PivotLayout) => void)` Called with each new layout. Without `layout` the designer also keeps the layout itself.
- `presets` (optional): `readonly PivotPreset[]` Saved layouts offered in the Presets menu.
- `aggregators` (optional): `readonly PivotAggregatorId[]` Aggregations offered on value chips. Default all.
- `pivotOptions` (optional): `ToColumnsOptions` Column options for the pivot, e.g. an Excel number format.
- `actions` (optional): `((pivot: PivotModel) => React.ReactNode)` Extra toolbar content, given the current pivot (e.g. an ExportMenu).
- `onPivotChange` (optional): `((pivot: PivotModel | null) => void)` Called with each new pivot.
- `className` (optional): `string` Classes added to the outer container.
