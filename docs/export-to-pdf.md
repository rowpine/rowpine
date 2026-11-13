---
title: Export to PDF
section: PDF
order: 17
image: export-to-pdf.png
alt: The first page of an exported orders PDF with a dark header row and striped rows
example: 01-export-menu
---
`exportPdf` lays the table out on pages: the header row repeats on every page, rows are striped, and the footer shows the date and "Page X of Y".

```ts
import { exportPdf } from "rowpine"

await exportPdf(table, { fileName: "orders", title: "Orders" })
```

Wide tables fit the page: with more than 8 columns the page turns landscape, the text shrinks down to three quarters of its size if needed, and past that the columns split over several pages with the first column repeated. `fit` and `repeatColumns` change this; see [page setup](pdf-page-setup.html).

Cell text comes from each column's `meta.rowpine.format`, else numbers and dates in the browser's locale. See [number and date formats](number-and-date-formats.html).

## Languages

The default font, Roboto, has no Chinese, Japanese, Korean, Arabic, Hebrew, Thai or Indic letters. For those, pass a font that covers them and Latin:

```ts
await exportPdf(table, {
  font: { name: "Noto", normal: notoRegularBase64, bold: notoBoldBase64 },
})
```

Each file is the font's base64 data or a URL.
