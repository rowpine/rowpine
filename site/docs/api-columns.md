# Column settings (rowpine 1.0.4)

Per-column export settings, read from meta.rowpine on your TanStack column definitions.

## RowpineColumnMeta<TData = any> (type)

Per-column export settings, read from `columnDef.meta.rowpine`.
- `header` (optional): `string` Header text in the file. Default: the column's string header, else its id.
- `numFmt` (optional): `string` Excel number format, e.g. `'"$"#,##0.00'` or `'yyyy-mm-dd'`.
- `format` (optional): `((value: unknown, row: TData) => string)` Display text for PDF. CSV writes the raw value. Default: numbers and dates in the browser locale.
- `width` (optional): `number` Column width in px. Default: the column's TanStack size.
- `align` (optional): `"left" | "center" | "right"` Horizontal alignment. Default: right for numbers, left otherwise.
- `cellStyle` (optional): `((value: unknown, row: TData) => CellStyle | undefined)` Cell colors, e.g. for conditional formatting.
- `exclude` (optional): `boolean` Leave this column out of every export. Default: true for display columns
(no accessor, such as checkboxes and row actions), false otherwise.

## CellStyle (type)

Colors and weight for one cell or a whole row, in Excel and PDF exports. CSV ignores it.
- `fill` (optional): `string` Background color, '#rrggbb'. The Excel writer ignores other forms.
- `color` (optional): `string` Text color, '#rrggbb'. The Excel writer ignores other forms.
- `bold` (optional): `boolean` Bold text.
