# Troubleshooting

The problems people run into most, and what to change. If yours is not here, write to [support@jqwidgets.com](mailto:support@jqwidgets.com?subject=Rowpine) with the version from `package.json` and what you expected.

## TypeScript says the table is not assignable to TableLike

With `rowpine` 1.0.1 and earlier, a TanStack v9 table without the grouping feature, such as the shadcn/ui data table, fails to type-check. Update:

```bash
npm install rowpine@latest
```

## Files carry a notice line

Excel and PDF files made without a valid license key have one notice line, and the console shows a message once. `getLicenseStatus()` resolves to the reason:

```ts
import { getLicenseStatus } from "rowpine"

console.log(await getLicenseStatus())
// { licensed: false, reason: "missing" | "malformed" | "invalid" | "updates-ended", ... }
```

| `reason` | What to do |
|---|---|
| `missing` | Call `setLicenseKey(key)` before the first export. See [license keys](license-keys.html). |
| `malformed`, `invalid` | The key was changed or cut off in transit. Copy it again from the email, as one line. |
| `updates-ended` | This version was built after your year of updates ended. Keep the version you have, or renew updates. |

## The header in the file is a column id

The column's `header` is a function or JSX, which cannot be written to a file. Set the text in `meta.rowpine.header`:

```tsx
helper.accessor("amount", {
  header: () => <div className="text-right">Amount</div>,
  meta: { rowpine: { header: "Amount" } },
})
```

## A group row has an empty cell

Only columns with a numeric `aggregationFn` have a total on group rows, in the table and in the file. Add one, for example `aggregationFn: "sum"`. See [group totals as SUBTOTAL formulas](subtotal-formulas.html).

## Dates are text in Excel

Only `Date` values become Excel dates. If your data holds ISO strings, convert them in the accessor and give the column a format:

```ts
helper.accessor((r) => new Date(r.date), {
  id: "date",
  header: "Date",
  meta: { rowpine: { numFmt: "yyyy-mm-dd" } },
})
```

## The file has more rows than the screen

That is the default: an export holds every row that passes the filters, on every page. Pass `rows: "page"` for the current page only, or `rows: "selected"` for the selection. See [which rows are exported](which-rows-are-exported.html).

## A checkbox or actions column is in the file

From 1.0.2, columns without an accessor are left out on their own. On 1.0.1 and earlier, add `meta: { rowpine: { exclude: true } }` to them, or update.

## Chinese, Japanese or Arabic text is missing from the PDF

The default PDF font, Roboto, has no letters for those scripts. Pass a font that covers them with the `font` option. See [export to PDF](export-to-pdf.html#languages).

## A wide table is split across PDF pages

Past 8 columns the page turns landscape and the text shrinks to fit; after that, columns split across pages with the first column repeated. Change it with `fit`, `pageOrientation` and `repeatColumns`. See [PDF page setup](pdf-page-setup.html).

## Nothing happens when I click Export

`ExportMenu` reports a failed export to `onError`, which defaults to `console.error`. Open the browser console for the message, or pass your own handler to show it to the user.
