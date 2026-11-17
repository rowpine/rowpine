---
title: shadcn data table export to PDF
description: Add PDF export to the shadcn/ui data table from the payments example, then turn it into a report with a title, headline numbers and a watermark.
short: An export menu on the shadcn payments table, then a PDF report with a title, headline numbers and page setup.
image: pdf-report.png
alt: A PDF report titled Payments with Collected and Failed totals above a table of payments
date: 2026-11-15
order: 3
section: PDF
---
The shadcn/ui [Data Table guide](https://ui.shadcn.com/docs/components/data-table) builds a payments table with TanStack Table: sorting, an email filter, a column toggle, row selection and pagination. It stops before export. This guide picks up there and adds:

- an Export menu with PDF, Excel and CSV;
- a "Download report" button that prints a title, headline numbers and a watermark above the table.

![A PDF report titled Payments with Collected and Failed totals above a table of payments](img/pdf-report.png "The report: title, subtitle, two headline numbers, and every payment on Letter pages with the header repeated.")

The files and names match the shadcn guide: `data-table-features.ts`, `columns.tsx`, `data-table.tsx` and the page. The shadcn guide uses TanStack Table v9, and so does this one; [v8 notes](#on-tanstack-table-v8) are at the end.

## Install

```bash
npm install rowpine
npx shadcn add @rowpine/export-menu
```

`rowpine` builds the files in the browser. The export menu lands in `components/export-menu.tsx` as source, styled by your theme.

## Let columns carry export settings

Rowpine reads per-column settings from `meta.rowpine`. Add one line to the features object from the shadcn guide so TypeScript knows about them:

<!-- code: pdf/data-table-features.ts#features title="data-table-features.ts" -->

The rest of the file is the shadcn guide's, unchanged.

## Set up the amount column

Most columns export as they are. `status` and `email` have string headers and plain values, and the select and actions columns are display columns with no accessor, so Rowpine leaves them out of the file on its own.

**The amount column** has a JSX header, which cannot be printed, and a cell that formats the number in JSX. Give the file a header and the text to print:

<!-- code: pdf/columns.tsx#amount title="columns.tsx" -->

**The status column** is optional. Its values are lowercase; `format` capitalizes them in the PDF and `cellStyle` prints failed payments in bold red:

<!-- code: pdf/columns.tsx#status -->

`format` only changes the text in the PDF and CSV. The table on screen renders as before.

## Add the export menu

In `data-table.tsx`, import the menu and put it in the toolbar next to the Columns button:

```tsx title="data-table.tsx"
import { ExportMenu } from "@/components/export-menu"

// in the toolbar, after the Columns dropdown
<ExportMenu table={table} fileName="payments" pdfTitle="Payments" />
```

![The data table toolbar with an Export menu open, offering Excel, PDF and CSV](img/pdf-menu.png "The Export menu in the toolbar.")

Pick PDF and the browser saves `payments.pdf`. What it holds:

- **Every filtered row, not just the page.** The table shows 10 payments per page; the PDF has all 60. Type in the email filter first and the PDF has only the matches, in the current sort.
- **The visible columns, in order.** Hide a column with the Columns menu and it leaves the PDF too.
- **Selected rows, when asked.** Once rows are selected, the menu shows a "Selected rows only" option.
- **Your table's colors.** The menu reads your shadcn theme, so the PDF has the same plain header, row lines and muted group rows as the table on screen.
- **Pages that read on paper.** The header row repeats on every page, and the footer has the date and "Page 1 of 2".

## Turn it into a report

A report needs more than the table. `exportPdf` takes the same table plus options for the page. Give `DataTable` an optional `report` prop and a button that uses it:

<!-- code: pdf/data-table.tsx#imports title="data-table.tsx" -->

<!-- code: pdf/data-table.tsx#props -->

```tsx
// in the toolbar
{report && (
  <Button variant="outline" onClick={() => exportPdf(table, { ...exportThemeFromPage().pdf, ...report })}>
    <FileText />
    Download report
  </Button>
)}
```

The page decides what goes on top. Here, the total collected and the failed payments, computed from the data:

<!-- code: pdf/page.tsx#page title="page.tsx" -->

![The data table with a Download report button and an Export menu in the toolbar](img/pdf-table.png "The toolbar with both: the menu for quick exports, and the report button.")

| Option | What it does |
|---|---|
| `title`, `subtitle` | Text above the table. The title is also the PDF's document title. |
| `kpis` | A row of boxes: `label`, `value`, and an optional `delta` line in `color`. |
| `watermark` | Large faint text on every page, or `{ text, color, opacity }`. |
| `pageSize` | `A4` (default), `A3`, `A5`, `LETTER` or `LEGAL`. |
| `pageOrientation` | `portrait` or `landscape`. Tables with more than 8 columns turn landscape on their own. |
| `headerColor` | Fill of the header row. Default none, as in the table. |
| `logo` | An image data URL above the title. |
| `rows` | `"all"` (default), `"page"` or `"selected"`. |

`exportThemeFromPage()` gives the report the same colors as the table, as the menu does. Because the button passes the live table, the report also follows the screen: type in the email filter and the report lists only the matches.

## Wide tables and other languages

Past 8 columns the page turns landscape, the text shrinks down to three quarters of its size if needed, and after that the columns split across pages with the first column repeated. `fit` and `repeatColumns` change this; see [PDF page setup](../docs/pdf-page-setup.html).

The default font, Roboto, has no Chinese, Japanese, Korean, Arabic, Hebrew, Thai or Indic letters. For those, pass a font that covers them: [Export to PDF](../docs/export-to-pdf.html#languages) shows how.

## On TanStack Table v8

Older versions of the shadcn guide used `useReactTable`. Rowpine reads that table the same way: pass it to `ExportMenu` or `exportPdf` unchanged. The one difference is typing `meta.rowpine`, which v8 does through module augmentation:

<!-- code: excel/orders-table-v8.tsx#augment title="tanstack.d.ts" -->

## If TypeScript rejects the table

With `rowpine` 1.0.1 and earlier, a v9 table without the grouping feature, like the shadcn one, fails to type-check with "not assignable to type TableLike", and checkbox and actions columns need `meta: { rowpine: { exclude: true } }`. Version 1.0.2 fixes both:

```bash
npm install rowpine@latest
```

## License

CSV export is free. PDF and Excel run without a key, with one notice line in each file; a [license](../pricing.html) removes it and is a one-time payment per developer with a year of updates. For a longer report, see the [Month-end PDF demo](../examples/#/demo/month-end-pdf): receivables grouped by status, headline numbers, Letter landscape.
