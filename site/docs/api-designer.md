# Pivot designer state (rowpine 1.0.3)

The fields, layouts and presets behind the pivot designer, and the pure functions that change a layout.

## PivotField<T = Record<string, unknown>> (type)

One field the designer offers. Dimensions land in Rows by default; measures in Values.
- `field`: `keyof T & string` Key of the field in each data row.
- `label`: `string` Name shown in the field list and on chips.
- `kind`: `"dimension" | "measure"` 'dimension' may go to Rows, Columns or Filters; 'measure' to Values or Filters.
- `group` (optional): `string` Optional group heading in the field list, e.g. 'Customer'.
- `format` (optional): `((value: unknown) => string)` Display text for this field's values when it is a measure.
- `defaultAgg` (optional): `PivotAggregatorId` Aggregation used when the field is added to Values. Default 'sum' for measures.

## PivotLayout (type)

The whole designer state, as plain JSON.
- `rows`: `string[]` Fields in the Rows well, outer-most first.
- `cols`: `string[]` Fields in the Columns well, outer-most first.
- `values`: `PivotValueChip[]` Chips in the Values well, in column order.
- `filters`: `PivotFilterChip[]` Chips in the Filters well.
- `hideSubtotals` (optional): `boolean` Show no numbers on group rows. The group rows stay and still expand and collapse.
- `hideGrandTotals` (optional): `boolean` Hide the grand-total row and column.

## PivotPreset (type)

A saved layout offered in the designer's Presets menu.
- `name`: `string` Name shown in the Presets menu.
- `layout`: `PivotLayout` The layout applied when the preset is picked.

## PivotValueChip (type)

A chip in the Values well.
- `field`: `string` The field it aggregates.
- `agg`: `PivotAggregatorId` How it aggregates the field.
- `label` (optional): `string` Column header. The designer functions set it to e.g. 'Sum of Amount'; when missing, the pivot uses that form.

## PivotFilterChip (type)

A chip in the Filters well. `allowed: null` lets every value through.
- `field`: `string` The field it filters on.
- `allowed`: `string[] | null` Values that pass, compared as text (`String(value)`). An empty array lets nothing through.

## Well (type)

One of the designer's four wells.
```ts
type Well = 'rows' | 'cols' | 'values' | 'filters'
```

## EMPTY_LAYOUT (constant)

A layout with every well empty.
Type: `PivotLayout`

## ALL_AGGREGATORS (constant)

Every built-in aggregator id, in the order the designer lists them.
Type: `PivotAggregatorId[]`

## AGG_LABEL (constant)

Display name of each aggregator, e.g. 'Average' for 'avg'. Value chip labels are built from it.
Type: `Record<PivotAggregatorId, string>`

## KIND_WELLS (constant)

Which wells each kind of field may go to.
Type: `Record<"dimension" | "measure", Well[]>`

## WELL_LABEL (constant)

Display name of each well: 'Rows', 'Columns', 'Values', 'Filters'.
Type: `Record<Well, string>`

## defaultLayoutFor (function)

First dimension in Rows, first measure in Values (with its `defaultAgg`, else 'sum').
```ts
defaultLayoutFor<T>(fields: ReadonlyArray<PivotField<T>>) => PivotLayout
```
- `fields`: `readonly PivotField<T>[]` The fields the designer offers.
- returns `PivotLayout`

## defaultWellFor (function)

The well a field goes to when added without one: Values for a measure, Rows otherwise.
```ts
defaultWellFor(field: Pick<PivotField, "kind">) => Well
```
- `field`: `Pick<PivotField<Record<string, unknown>>, "kind">` The field, or anything with its `kind`.
- returns `Well`

## layoutToConfig (function)

The engine config for a layout. Value labels come from the chips, and a
measure's `format` is used except on count and distinct count.
`hideSubtotals` and `hideGrandTotals` turn off the matching config switches.
```ts
layoutToConfig<T>(
  layout: PivotLayout,
  fields: ReadonlyArray<PivotField<T>>,
) => PivotConfig<T>
```
- `layout`: `PivotLayout` The layout.
- `fields`: `readonly PivotField<T>[]` The fields the designer offers, for labels and formats.
- returns `PivotConfig<T>`

## pivotFromLayout (function)

Filter, pivot and label in one step. Returns null when the layout has no
values yet, which a UI shows as an empty state. Runs `createPivot`, so
without a license key it logs a notice once.
```ts
pivotFromLayout<T>(
  data: ReadonlyArray<T>,
  layout: PivotLayout,
  fields: ReadonlyArray<PivotField<T>>,
  opts?: ToColumnsOptions,
) => PivotTable | null
```
- `data`: `readonly T[]` The source rows. Not changed.
- `layout`: `PivotLayout` The layout to build.
- `fields`: `readonly PivotField<T>[]` The fields the designer offers. Their labels name the row-header column.
- `opts` (optional): `ToColumnsOptions` Settings for every value column, such as an Excel number format.
- returns `PivotTable | null`

## applyLayoutFilters (function)

The rows that pass the layout's filters. Returns a new array.
```ts
applyLayoutFilters<T>(data: ReadonlyArray<T>, layout: PivotLayout) => T[]
```
- `data`: `readonly T[]` The source rows. Not changed.
- `layout`: `PivotLayout` The layout whose Filters well applies.
- returns `T[]`

## addToWell (function)

Add a field to a well at `index` (default: the end). In Rows, Columns and
Filters a field appears at most once, so adding it moves it. In Values the
same field may appear with different aggregations (sum and average of one
amount), but not twice with the same one. `sourceIndex` is the chip's
position in Values when it is being moved out of that well.
Returns the layout unchanged when `field` is not in `fields`.
```ts
addToWell<T>(
  layout: PivotLayout,
  fields: ReadonlyArray<PivotField<T>>,
  field: string,
  well: Well,
  index?: number,
  sourceIndex?: number,
) => PivotLayout
```
- `layout`: `PivotLayout` The current layout. Not changed.
- `fields`: `readonly PivotField<T>[]` The fields the designer offers.
- `field`: `string` Key of the field to add.
- `well`: `Well` The well to add it to.
- `index` (optional): `number` Position in the well. Default: the end.
- `sourceIndex` (optional): `number` When moving a chip out of Values, its position there. A chip moved within Values keeps its aggregation.
- returns `PivotLayout`

## removeFromWell (function)

Remove a field from a well. In Values, `valueIndex` picks the one chip.
```ts
removeFromWell(
  layout: PivotLayout,
  field: string,
  well: Well,
  valueIndex?: number,
) => PivotLayout
```
- `layout`: `PivotLayout` The current layout. Not changed.
- `field`: `string` Key of the field to remove.
- `well`: `Well` The well to remove it from.
- `valueIndex` (optional): `number` In Values, the chip's position. Without it every chip of the field is removed.
- returns `PivotLayout`

## clearWell (function)

Empty one well.
```ts
clearWell(layout: PivotLayout, well: Well) => PivotLayout
```
- `layout`: `PivotLayout` The current layout. Not changed.
- `well`: `Well` The well to empty.
- returns `PivotLayout`

## toggleField (function)

Field-list checkbox: take the field out of every well, or add it to its default well.
```ts
toggleField<T>(
  layout: PivotLayout,
  fields: ReadonlyArray<PivotField<T>>,
  field: string,
) => PivotLayout
```
- `layout`: `PivotLayout` The current layout. Not changed.
- `fields`: `readonly PivotField<T>[]` The fields the designer offers. A field not in it leaves the layout unchanged.
- `field`: `string` Key of the field to toggle.
- returns `PivotLayout`

## isFieldInLayout (function)

True when the field is in any well.
```ts
isFieldInLayout(layout: PivotLayout, field: string) => boolean
```
- `layout`: `PivotLayout` The current layout.
- `field`: `string` The field key.
- returns `boolean`

## setAggregatorAt (function)

Change a value chip's aggregation. A change that would duplicate another chip removes this one.
The chip's label is rebuilt from the new aggregation.
```ts
setAggregatorAt<T>(
  layout: PivotLayout,
  fields: ReadonlyArray<PivotField<T>>,
  index: number,
  agg: PivotAggregatorId,
) => PivotLayout
```
- `layout`: `PivotLayout` The current layout. Not changed.
- `fields`: `readonly PivotField<T>[]` The fields the designer offers, for the label.
- `index`: `number` The chip's position in Values. Out of range leaves the layout unchanged.
- `agg`: `PivotAggregatorId` The new aggregation.
- returns `PivotLayout`

## setFilterAllowed (function)

Set which values of a filter field pass. `null` lets everything through.
```ts
setFilterAllowed(
  layout: PivotLayout,
  field: string,
  allowed: string[] | null,
) => PivotLayout
```
- `layout`: `PivotLayout` The current layout. Not changed.
- `field`: `string` Key of a field in the Filters well. Any other field has no effect.
- `allowed`: `string[] | null` The values that pass, as text, or null for all.
- returns `PivotLayout`

## distinctValues (function)

Every distinct value of a field in the full data, as text, sorted.
```ts
distinctValues<T>(data: ReadonlyArray<T>, field: string) => string[]
```
- `data`: `readonly T[]` The source rows.
- `field`: `string` The field key.
- returns `string[]`
