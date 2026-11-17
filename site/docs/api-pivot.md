# Pivot (rowpine 1.0.4)

Build a pivot from flat rows: the config, the measures, and the result you render or export.

## createPivot (function)

Pivot `data` and return rows and columns ready for TanStack Table.
Without a license key it still runs and logs a notice once.
```ts
createPivot<TData>(
  data: ReadonlyArray<TData>,
  config: PivotConfig<TData>,
  opts?: ToColumnsOptions,
) => PivotTable
```
- `data`: `readonly TData[]` Flat source rows. Not changed.
- `config`: `PivotConfig<TData>` Row fields, column fields and measures. Throws when `values` is empty or names an unknown aggregator.
- `opts` (optional): `ToColumnsOptions` Settings for every value column, such as an Excel number format.
- returns `PivotTable`

## PivotConfig<TData> (type)

A pivot definition: the row axis, the column axis, and the measures at their intersections.
- `rows`: `readonly (keyof TData & string)[]` Outer-most first. Each entry becomes one level of row grouping.
- `cols`: `readonly (keyof TData & string)[]` Outer-most first. Each entry becomes one level of column grouping.
- `values`: `readonly PivotValueConfig<TData>[]` One or more measures aggregated under each column-axis leaf.
- `rowHeader` (optional): `string` Header of the first column. Default: the row fields joined with ` / `.
- `grandTotalRow` (optional): `boolean` Grand-total row at the bottom. Default `true`.
- `grandTotalCol` (optional): `boolean` Grand-total column on the right. Default `true`.
- `rowSubtotals` (optional): `boolean` Group rows carry their subtotals. When false, group rows stay (they still expand and collapse) but show no numbers. Default `true`.
- `colSort` (optional): `((a: unknown, b: unknown, level: number) => number)` Optional sort for column-axis values per dim level (defaults to alpha).
- `rowSort` (optional): `((a: unknown, b: unknown, level: number) => number)` Optional sort for row-axis values per dim level (defaults to alpha).

## PivotValueConfig<TData> (type)

One measure: the field to aggregate and how to aggregate it.
- `field`: `keyof TData & string` Row field whose values get aggregated.
- `agg`: `PivotAggregatorId | PivotAggregator` Built-in aggregator id, or a custom reducer.
- `label` (optional): `string` Display name in the column header. Defaults to `${field} (${agg})`.
- `format` (optional): `((value: unknown) => string)` Turns a value cell into display text. Default: numbers with grouping separators.

## PivotAggregatorId (type)

Built-in pivot measures, named in `PivotValueConfig`.
```ts
type PivotAggregatorId = 'sum' | 'avg' | 'min' | 'max' | 'count' | 'countDistinct' | 'first' | 'last'
```

## PivotAggregator (type)

A custom measure: reduce the values under one cell to the number to display.
```ts
type PivotAggregator = (values: ReadonlyArray<unknown>) => unknown
```

## ToColumnsOptions (type)

Options for the generated value columns.
- `numFmt` (optional): `string` Excel number format for every value column, e.g. `'#,##0.00'`.

## PivotTable (type)

What `createPivot` returns: the pivot as TanStack data and columns, and as a table the exporters read.
- `data`: `PivotTreeRow[]` Rows for `useReactTable({ data })`, with `getSubRows: (r) => r.subRows`.
- `columns`: `PivotColumnDef[]` Columns for `useReactTable({ columns })`.
- `rows`: `PivotRow[]` The flat rows, as the engine produced them.
- `table`: `TableLike` The pivot as a table the exporters read: `exportXlsx(pivot.table)`.

## PivotTreeRow (type)

A pivot row with its children attached.
- `__pivotId`: `string` Unique id built from the row's path of values. The grand-total row is 'row__grand_total'.
- `__pivotKind`: `PivotRowKind` 'group' (holds the group's subtotals unless `rowSubtotals` is false), 'leaf' or 'grandTotal'.
- `__pivotDepth`: `number` Level on the row axis: 1 under the first row field, 2 under the second, and so on. 0 on the grand-total row and on the single row of a pivot with no row fields.
- `__pivotLabel`: `string` Text of the first column: the row's value on the row axis, 'Grand total' on the grand-total row, '(All)' on the single row of a pivot with no row fields.
- `__pivotParentId`: `string | null` `__pivotId` of the group row this row sits under, or null at the top level.
- `__pivotExpandable`: `boolean` True on group rows, which always have rows under them.
- `subRows` (optional): `PivotTreeRow[]` The rows under this one. Absent on rows with none.

## PivotColumnDef (type)

A generated column: an accessor leaf or a header group. Fits TanStack's `ColumnDef<PivotTreeRow>`.
```ts
type PivotColumnDef = { id: string; header: string; accessorFn: (row: PivotTreeRow) => unknown; /** Value columns: the cell text, from the measure's `format` or a default number format. */ cell?: (ctx: { getValue(): unknown; }) => string; size?: number; meta: PivotColumnMeta; } | { id: string; header: string; columns: PivotColumnDef[]; meta: PivotColumnMeta; }
```

## PivotColumnMeta (type)

Metadata on every generated column.
- `rowpine`: `RowpineColumnMeta<PivotTreeRow>` Export settings: the row-header column carries its header; value columns carry `numFmt`, `format` and right alignment.
- `pivot`: `{ isRowHeader: boolean; isTotal: boolean; measure?: number; }` Where the column sits in the pivot: the row-header column, a grand-total column, and the measure index into `config.values` for a value leaf.

## pivotRowStyle (function)

Bold group, subtotal and grand-total rows in exports. Pass as `rowStyle`.
```ts
pivotRowStyle(original: unknown) => { bold?: boolean; } | undefined
```
- `original`: `unknown` A row's original data: a `PivotTreeRow`.
- returns `{ bold?: boolean; } | undefined`

## pivotAggregators (constant)

Public registry of built-in aggregators. Useful for surfacing the
available options in a pivot designer UI.
Type: `Record<PivotAggregatorId, PivotAggregator>`

## createPivotModel (function)

Build a pivot table from flat rows: cross the row axis with the column axis,
aggregate each intersection, and return rows plus the generated column tree.
No license check.
```ts
createPivotModel<TData>(
  data: ReadonlyArray<TData>,
  config: PivotConfig<TData>,
) => PivotResult
```
- `data`: `readonly TData[]` Flat source rows. Not changed.
- `config`: `PivotConfig<TData>` Row fields, column fields and measures. Throws when `values` is empty or names an unknown aggregator.
- returns `PivotResult`

## PivotResult (type)

A built pivot: the rows to display, and the generated columns for its column axis.
- `rows`: `PivotRow[]` Every pivot row, flat, in display order: each group row before its rows, the grand-total row last.
- `columns`: `PivotColumn[]` The column tree: the row-header column, the value columns, then the 'Total' group when there is one.

## PivotRow (type)

Shape of one entry in `result.rows`. The first-column label lives at
`__pivotLabel`; every value cell lives at the column id matching the
leaf column generated for its (col-path × measure).

`__pivotParentId` is the `__pivotId` of the row's row-axis parent
(or `null` for top-level groups, the grand-total row, and the one
synthetic "All" row when no row dims are configured). Use it with
`filterCollapsedPivotRows` to hide leaves whose ancestor is
collapsed - that's how expandable pivots are built on top of the
model.

`__pivotExpandable` is `true` for `group` rows that have at least
one descendant. A renderer uses this to decide whether to show a
chevron next to the label.
- `__pivotId`: `string` Unique id built from the row's path of values. The grand-total row is 'row__grand_total'.
- `__pivotKind`: `PivotRowKind` 'group' (holds the group's subtotals unless `rowSubtotals` is false), 'leaf' or 'grandTotal'.
- `__pivotDepth`: `number` Level on the row axis: 1 under the first row field, 2 under the second, and so on. 0 on the grand-total row and on the single row of a pivot with no row fields.
- `__pivotLabel`: `string` Text of the first column: the row's value on the row axis, 'Grand total' on the grand-total row, '(All)' on the single row of a pivot with no row fields.
- `__pivotParentId`: `string | null` `__pivotId` of the group row this row sits under, or null at the top level.
- `__pivotExpandable`: `boolean` True on group rows, which always have rows under them.

## PivotRowKind (type)

What a pivot row represents: a group row (which carries the group's subtotals),
a leaf, or the grand total. The engine does not emit `subtotal`; it is kept
in the type so existing code that checks for it still compiles.
```ts
type PivotRowKind = 'group' | 'subtotal' | 'leaf' | 'grandTotal'
```

## PivotColumn (type)

One generated column. A leaf has a `measure`; a header group has `columns`.
- `id`: `string` Column id. A value leaf's id is the key of its cell in each `PivotRow`; the first column is '__pivotRowHeader'.
- `header`: `string` Header text: the measure's label on a value leaf, the column-axis value on a header group ('(blank)' for null), 'Total' on the grand-total group.
- `columns` (optional): `PivotColumn[]` Child columns, for a column-axis header group.
- `measure` (optional): `number` Index into `config.values`, for a value leaf.
- `format` (optional): `((value: unknown) => string)` The measure's formatter, for a value leaf.
- `width` (optional): `number` Suggested width in px.
- `isRowHeader` (optional): `boolean` True for the first column, which holds each row's label.
- `isTotal` (optional): `boolean` True for the grand-total column group and its leaves.

## filterCollapsedPivotRows (function)

Filter a `result.rows` array down to only the rows the user should
see given the current expansion state. A row stays in the output if
its entire ancestor chain (via `__pivotParentId`) is in `expandedIds`.

Pass `true` to bypass filtering (everything visible - the default
shape `createPivotModel` already returns). Pass an empty array /
empty Set to collapse every group to its subtotal row.

The result is a new array; the input is not mutated.
```ts
filterCollapsedPivotRows(
  rows: ReadonlyArray<PivotRow>,
  expandedIds: ReadonlyArray<string> | Set<string> | true,
) => PivotRow[]
```
- `rows`: `readonly PivotRow[]` Rows as `createPivotModel` returns them.
- `expandedIds`: `any` Ids of the expanded group rows, or `true` to keep every row.
- returns `PivotRow[]`

## pivotAsTable (function)

A pivot as a read-only table for the exporters, with no TanStack instance
behind it, so exporting a pivot works the same under any TanStack version.
It holds every row, nested by `subRows`; collapsing groups on screen does not change it.
```ts
pivotAsTable(data: PivotTreeRow[], columns: PivotColumnDef[]) => TableLike
```
- `data`: `PivotTreeRow[]` Nested rows from `pivotToTree`.
- `columns`: `PivotColumnDef[]` Column definitions from `toTanStackColumns`.
- returns `TableLike`

## pivotToTree (function)

Nest flat pivot rows under their parents. The grand-total row stays last.
The rows are copied; the input is not changed.
```ts
pivotToTree(rows: ReadonlyArray<PivotRow>) => PivotTreeRow[]
```
- `rows`: `readonly PivotRow[]` Flat rows from `createPivotModel`, each parent before its children.
- returns `PivotTreeRow[]`

## toTanStackColumns (function)

Turn a pivot's column tree into TanStack column definitions. Value columns
format with the measure's `format`, else numbers in the browser locale
with at most two decimals, and null as an empty string.
```ts
toTanStackColumns(
  columns: ReadonlyArray<PivotColumn>,
  opts?: ToColumnsOptions,
) => PivotColumnDef[]
```
- `columns`: `readonly PivotColumn[]` The column tree from `createPivotModel`.
- `opts` (optional): `ToColumnsOptions` Settings for every value column.
- returns `PivotColumnDef[]`
