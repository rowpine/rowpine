# Export functions (rowpine 1.0.2)

Write a TanStack table to Excel, PDF or CSV, the options each export takes, and the colors from your theme.

## exportXlsx (function)

Export the table to an .xlsx file. Returns the file as a Blob. Without a
valid license key it still exports, adds the unlicensed notice line below
the data, and logs a console warning once per page load.
```ts
exportXlsx(table: TableLike, opts?: XlsxExportOptions) => Promise<Blob>
```
- `table`: `TableLike` A TanStack table (v8 or v9), or `pivot.table` from createPivot.
- `opts` (optional): `XlsxExportOptions` Export options. Default: every row, saved as 'export.xlsx'.
- returns `Promise<Blob>`

## exportPdf (function)

Export the table to a PDF file. Returns the file as a Blob. Loads pdfmake
and its fonts on first use. Without a valid license key it still exports,
prints the unlicensed notice line below the table, and logs a console
warning once per page load.
```ts
exportPdf(table: TableLike, opts?: PdfTableExportOptions) => Promise<Blob>
```
- `table`: `TableLike` A TanStack table (v8 or v9), or `pivot.table` from createPivot.
- `opts` (optional): `PdfTableExportOptions` Export options. Default: every row on A4, saved as 'export.pdf'.
- returns `Promise<Blob>`

## exportCsv (function)

Export the table to a CSV file. Returns the file as a Blob. Free: no
license check.
```ts
exportCsv(table: TableLike, opts?: CsvExportOptions) => Promise<Blob>
```
- `table`: `TableLike` A TanStack table (v8 or v9), or `pivot.table` from createPivot.
- `opts` (optional): `CsvExportOptions` Export options. Default: every row, saved as 'export.csv'.
- returns `Promise<Blob>`

## tableToCsv (function)

The table as CSV text: a header line, then one line per data row. Group
rows are left out. Lines end with CRLF. No byte order mark and no file.
```ts
tableToCsv(table: TableLike, opts?: CsvExportOptions) => string
```
- `table`: `TableLike` A TanStack table (v8 or v9), or `pivot.table` from createPivot.
- `opts` (optional): `CsvExportOptions` Which rows to write and the field separator. Default: every row, ','.
- returns `string`

## XlsxExportOptions (type)

Options for `exportXlsx` and the workbook model functions.
- `rows` (optional): `RowScope` Which rows to export. Default 'all'.
- `rowStyle` (optional): `((original: unknown) => CellStyle | undefined)` Style a whole row (e.g. bold totals). Called with the row's original data.
- `fileName` (optional): `string` File name for the download. '.xlsx' is added unless the name ends with it. Default 'export'.
- `sheetName` (optional): `string` Worksheet name. Default 'Sheet1'.
- `groupFill` (optional): `string` Fill color of group rows. Default '#f4f4f5', the muted gray of a shadcn/ui table.
- `download` (optional): `boolean` Save the file in the browser. Default true.

## PdfTableExportOptions (type)

Options for `exportPdf`: which rows to read, the PDF page and look, and the file.
- `rows` (optional): `RowScope` Which rows to export. Default 'all'.
- `rowStyle` (optional): `((original: unknown) => CellStyle | undefined)` Style a whole row (e.g. bold totals). Called with the row's original data.
- `pageSize` (optional): `PdfPageSize` Paper size. Default 'A4'.
- `pageOrientation` (optional): `"portrait" | "landscape"` Default: 'landscape' when there are more columns than `autoLandscapeThreshold`, else 'portrait'.
- `margins` (optional): `[number, number, number, number]` [left, top, right, bottom] in pt. Default [28, 34, 28, 34].
- `title` (optional): `string` Document title rendered above the table.
- `subtitle` (optional): `string` Smaller line under the title.
- `logo` (optional): `string` Logo as a data URL, rendered top-left above the title.
- `logoWidth` (optional): `number` Logo width in pt (height auto). Default 90.
- `fontSize` (optional): `number` Base font size in pt. Default 8.
- `headerColor` (optional): `string` Header row fill color. Default: none, as a shadcn/ui table header.
- `headerTextColor` (optional): `string` Header row text color. Default '#18181b'.
- `zebra` (optional): `boolean` Stripe alternate rows. Default false, as a shadcn/ui table.
- `zebraColor` (optional): `string` Stripe fill color. Default '#fafafa'.
- `repeatHeader` (optional): `boolean` Repeat the header row on every page. Default true.
- `showPageNumbers` (optional): `boolean` Show the "Page X of Y" + date footer. Default true.
- `columnWidths` (optional): `"*" | "auto" | (number | "*" | "auto")[]` Column widths: '*' (fill, default), 'auto', or an explicit array of
pt numbers / 'auto' / '*' per column.
- `autoLandscapeThreshold` (optional): `number` Switch to landscape automatically when column count exceeds this (and no
explicit orientation was set). Default 8.
- `groupColor` (optional): `string` Group header row fill color. Default '#f4f4f5'.
- `groupTextColor` (optional): `string` Group header row text color. Default '#18181b'.
- `subtotalColor` (optional): `string` Fill of group rows and their totals. Default '#f4f4f5'.
- `charts` (optional): `readonly PdfChartImage[]` Charts to print with the table, as image data URLs, each with an
optional title and caption. Printed at the content width unless `width`
(pt) says otherwise.
- `chartsPosition` (optional): `"above" | "below"` Where the charts go: above the table (default) or below it.
- `kpis` (optional): `readonly PdfKpi[]` A strip of headline numbers above the table: a label, the value, and an
optional delta line in its own colour ("+4.2%" in green).
- `kpiColor` (optional): `string` KPI box fill. Default '#f4f4f5'.
- `textColor` (optional): `string` Body text colour. Default black.
- `borderColor` (optional): `string` Table line colour. Default '#e4e4e7'.
- `verticalLines` (optional): `boolean` Draw lines between columns, not only between rows and around the table. Default false, as a shadcn/ui table.
- `fit` (optional): `"auto" | "shrink" | "split" | "none"` What to do when the columns do not fit across the page.
- `'auto'` (default): shrink the table text, down to three quarters of
  `fontSize`; past that, split the columns over several pages.
- `'shrink'`: only shrink, down to 4 pt.
- `'split'`: only split.
- `'none'`: leave it to pdfmake, which lets a wide table run off the page.
- `repeatColumns` (optional): `number` When the columns are split over pages, how many leading columns repeat on every page. Default 1.
- `grandTotal` (optional): `boolean` **Deprecated.** Has no effect: exports add no total row. Kept so existing code still compiles.
- `labels` (optional): `{ page?: (page: number, pages: number) => string; date?: (now: Date) => string; subtotal?: (group: string) => string; total?: string; }` The words the PDF prints itself, for another language or house style:
the page footer, the footer date, a group's subtotal label, and the total
row's label.
- `watermark` (optional): `string | { text: string; color?: string; opacity?: number; }` Text printed large and faint across every page: "DRAFT", "CONFIDENTIAL".
- `author` (optional): `string` Author recorded in the PDF's document properties.
- `font` (optional): `PdfFont` A font to print with instead of Roboto, which has no Chinese, Japanese,
Korean, Arabic, Hebrew, Thai or Indic characters (they print as empty
boxes). Each file is the font's base64 data or a URL pdfmake can fetch.
It must cover Latin too: the whole document uses it.
- `fileName` (optional): `string` File name for the download. '.pdf' is added unless the name ends with it. Default 'export'.
- `download` (optional): `boolean` Save the file in the browser. Default true.

## PdfExportOptions (type)

Page setup and look of a PDF export. Sizes are in pt.
- `pageSize` (optional): `PdfPageSize` Paper size. Default 'A4'.
- `pageOrientation` (optional): `"portrait" | "landscape"` Default: 'landscape' when there are more columns than `autoLandscapeThreshold`, else 'portrait'.
- `margins` (optional): `[number, number, number, number]` [left, top, right, bottom] in pt. Default [28, 34, 28, 34].
- `title` (optional): `string` Document title rendered above the table.
- `subtitle` (optional): `string` Smaller line under the title.
- `logo` (optional): `string` Logo as a data URL, rendered top-left above the title.
- `logoWidth` (optional): `number` Logo width in pt (height auto). Default 90.
- `fontSize` (optional): `number` Base font size in pt. Default 8.
- `headerColor` (optional): `string` Header row fill color. Default: none, as a shadcn/ui table header.
- `headerTextColor` (optional): `string` Header row text color. Default '#18181b'.
- `zebra` (optional): `boolean` Stripe alternate rows. Default false, as a shadcn/ui table.
- `zebraColor` (optional): `string` Stripe fill color. Default '#fafafa'.
- `repeatHeader` (optional): `boolean` Repeat the header row on every page. Default true.
- `showPageNumbers` (optional): `boolean` Show the "Page X of Y" + date footer. Default true.
- `columnWidths` (optional): `"*" | "auto" | (number | "*" | "auto")[]` Column widths: '*' (fill, default), 'auto', or an explicit array of
pt numbers / 'auto' / '*' per column.
- `autoLandscapeThreshold` (optional): `number` Switch to landscape automatically when column count exceeds this (and no
explicit orientation was set). Default 8.
- `groupColor` (optional): `string` Group header row fill color. Default '#f4f4f5'.
- `groupTextColor` (optional): `string` Group header row text color. Default '#18181b'.
- `subtotalColor` (optional): `string` Fill of group rows and their totals. Default '#f4f4f5'.
- `charts` (optional): `readonly PdfChartImage[]` Charts to print with the table, as image data URLs, each with an
optional title and caption. Printed at the content width unless `width`
(pt) says otherwise.
- `chartsPosition` (optional): `"above" | "below"` Where the charts go: above the table (default) or below it.
- `kpis` (optional): `readonly PdfKpi[]` A strip of headline numbers above the table: a label, the value, and an
optional delta line in its own colour ("+4.2%" in green).
- `kpiColor` (optional): `string` KPI box fill. Default '#f4f4f5'.
- `textColor` (optional): `string` Body text colour. Default black.
- `borderColor` (optional): `string` Table line colour. Default '#e4e4e7'.
- `verticalLines` (optional): `boolean` Draw lines between columns, not only between rows and around the table. Default false, as a shadcn/ui table.
- `fit` (optional): `"auto" | "shrink" | "split" | "none"` What to do when the columns do not fit across the page.
- `'auto'` (default): shrink the table text, down to three quarters of
  `fontSize`; past that, split the columns over several pages.
- `'shrink'`: only shrink, down to 4 pt.
- `'split'`: only split.
- `'none'`: leave it to pdfmake, which lets a wide table run off the page.
- `repeatColumns` (optional): `number` When the columns are split over pages, how many leading columns repeat on every page. Default 1.
- `grandTotal` (optional): `boolean` **Deprecated.** Has no effect: exports add no total row. Kept so existing code still compiles.
- `labels` (optional): `{ page?: (page: number, pages: number) => string; date?: (now: Date) => string; subtotal?: (group: string) => string; total?: string; }` The words the PDF prints itself, for another language or house style:
the page footer, the footer date, a group's subtotal label, and the total
row's label.
- `watermark` (optional): `string | { text: string; color?: string; opacity?: number; }` Text printed large and faint across every page: "DRAFT", "CONFIDENTIAL".
- `author` (optional): `string` Author recorded in the PDF's document properties.
- `font` (optional): `PdfFont` A font to print with instead of Roboto, which has no Chinese, Japanese,
Korean, Arabic, Hebrew, Thai or Indic characters (they print as empty
boxes). Each file is the font's base64 data or a URL pdfmake can fetch.
It must cover Latin too: the whole document uses it.

## CsvExportOptions (type)

Options for `exportCsv` and `tableToCsv`.
- `rows` (optional): `RowScope` Which rows to export. Default 'all'.
- `rowStyle` (optional): `((original: unknown) => CellStyle | undefined)` Style a whole row (e.g. bold totals). Called with the row's original data.
- `fileName` (optional): `string` File name for the download. '.csv' is added unless the name ends with it. Default 'export'.
- `delimiter` (optional): `string` Field separator. Default ','.
- `bom` (optional): `boolean` Start the file with a UTF-8 byte order mark so Excel reads accents. Default true.
- `download` (optional): `boolean` Save the file in the browser. Default true.

## RowScope (type)

Which rows to export.
```ts
type RowScope = 'all' /** Only the rows on the current page. */ | 'page' /** Only the selected rows. */ | 'selected'
```

## PdfPageSize (type)

Paper sizes the PDF export supports.
```ts
type PdfPageSize = 'A4' | 'A3' | 'A5' | 'LETTER' | 'LEGAL'
```

## PdfFont (type)

A TrueType / OpenType font for the PDF. Missing styles fall back to `normal`.
- `name`: `string` Name the font is registered under in pdfmake. The whole document is set in it.
- `normal`: `string` Regular style: base64 font data, or a URL (http:, https:, blob:, data:, or a path starting with /, ./ or ../).
- `bold` (optional): `string` Bold style, base64 or a URL. Default: `normal`.
- `italics` (optional): `string` Italic style, base64 or a URL. Default: `normal`.
- `bolditalics` (optional): `string` Bold italic style, base64 or a URL. Default: `bold`, else `normal`.

## saveBlob (function)

Save a Blob as a file in the browser. Does nothing outside one.
```ts
saveBlob(blob: Blob, fileName: string) => void
```
- `blob`: `Blob` The file contents.
- `fileName`: `string` Name the browser saves the file under, used as given.
- returns `void`

## exportThemeFromPage (function)

Read the shadcn/ui theme colors (`--background`, `--foreground`, `--muted`,
`--border`) from the page and return them as export colors. Returns no
colors outside a browser, when a variable is missing, or for a dark theme.
`ExportMenu` does this for you; call it when you export from your own buttons.
```ts
exportThemeFromPage(element?: Element) => ExportTheme
```
- `element` (optional): `Element` Where to read the variables. Default: the document's root element.
- returns `ExportTheme`

## exportThemeFrom (function)

The export colors for a set of theme colors. Pure.
A dark theme returns no colors: files print on white, so the light defaults fit better.
```ts
exportThemeFrom(colors: ThemeColors | null) => ExportTheme
```
- `colors`: `ThemeColors | null` The page's background, foreground, muted and border colors, as hex.
- returns `ExportTheme`

## ExportTheme (type)

Colors for `exportPdf` and `exportXlsx`, read from the page. Spread them into the options.
- `pdf`: `Pick<PdfExportOptions, "headerTextColor" | "textColor" | "groupColor" | "groupTextColor" | "subtotalColor" | "kpiColor" | "borderColor">` PDF colors: header and body text, group rows, lines and headline-number boxes.
- `xlsx`: `{ groupFill?: string; }` Excel colors: the group row fill.

## ThemeColors (type)

The theme colors this reads, as hex.
- `background`: `string`
- `foreground`: `string`
- `muted`: `string`
- `border`: `string`

## luminance (function)

Relative luminance of a #rrggbb color, 0 (black) to 1 (white).
```ts
luminance(hex: string) => number
```
- `hex`: `string`
- returns `number`
