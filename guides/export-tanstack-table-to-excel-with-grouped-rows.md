---
title: Export TanStack Table to Excel with grouped rows
description: Group a TanStack Table by two columns and export it to a real .xlsx file where the groups are Excel outline levels and the group totals are SUBTOTAL formulas.
short: Groups become Excel outline levels and group totals become SUBTOTAL formulas, from the table you already render.
image: excel-file.png
alt: An exported workbook with Europe and its products as outline levels and a SUBTOTAL formula in the formula bar
date: 2026-11-15
order: 1
section: Excel
---
A grouped TanStack table is easy to read on screen: regions, products under them, a total on each group row. Export it with a CSV button and all of that is gone. The file has flat rows, no totals, and amounts stored as text.

This guide builds a table grouped by region and product, adds an Export menu, and gets you an Excel file that keeps the structure:

- each grouping level is an Excel outline level, so users collapse a region with Excel's own buttons;
- group totals are `SUBTOTAL` formulas, so they update when someone edits a number;
- amounts stay numbers with a currency format, so they sort and sum.

![An exported workbook with Europe and its products as outline levels and a SUBTOTAL formula in the formula bar](img/excel-file.png "The exported file. Europe's total in E2 is =SUBTOTAL(9,E3:E14), and the bars on the left are Excel outline levels.")

The code uses TanStack Table v9 and shadcn/ui. The [last section](#tanstack-table-v8) shows the v8 version.

## Install

You need a React project with shadcn/ui and TanStack Table. Rowpine is the package that reads the table and writes the file; the export menu is a shadcn registry item, so its source lands in your project.

```bash
npm install rowpine @tanstack/react-table
npx shadcn add table
npx shadcn add https://rowpine.com/r/export-menu.json
```

## The data

Any array of objects works. This guide uses orders with a region, a product, a customer, a quantity and an amount:

```ts title="orders.ts"
export type Order = {
  id: string
  region: string
  country: string
  customer: string
  product: string
  quarter: string
  quantity: number
  amount: number
}

export const orders: Order[] = [
  { id: "1001", region: "Europe", country: "Germany", customer: "Brandt GmbH", product: "Standing desk", quarter: "Q1", quantity: 6, amount: 4432.76 },
  { id: "1002", region: "Europe", country: "Germany", customer: "Kessler Werke", product: "Desk lamp", quarter: "Q1", quantity: 14, amount: 807.28 },
  // ...
]
```

## Register the grouping features

TanStack Table v9 only includes the features you register. Grouping needs three of them: `columnGroupingFeature` to group, `rowAggregationFeature` to compute the group totals, and `rowExpandingFeature` with the expanded row model to show the rows under each group. `columnVisibilityFeature` gives rows `getVisibleCells()` for rendering.

<!-- code: excel/orders-table.tsx#imports title="orders-table.tsx" -->

<!-- code: excel/orders-table.tsx#features -->

The last line, `columnMeta`, is optional. It types `meta.rowpine` on your columns, where Rowpine reads its export settings.

## Define columns with aggregations

A column's `aggregationFn` decides what its group rows show. Rowpine turns it into the matching Excel function, so the file computes the same total the screen shows:

<!-- code: excel/orders-table.tsx#columns -->

| `aggregationFn` | Formula in Excel |
|---|---|
| `sum` | `SUBTOTAL(9, ...)` |
| `mean` | `SUBTOTAL(1, ...)` |
| `min` | `SUBTOTAL(5, ...)` |
| `max` | `SUBTOTAL(4, ...)` |
| anything else | the value TanStack computed |

`numFmt` is an Excel number format. The cell holds the number `4432.76` and Excel shows `$4,432.76`. Without it, the number is written plain; it is still a number either way, so it sorts and sums.

## Group the table and add the menu

`initialState.grouping` sets the grouping columns, outermost first. `expanded: true` opens every group. The export menu takes the table instance and nothing else:

<!-- code: excel/orders-table.tsx#component -->

![The orders table grouped by region and product, with an Export button above it](img/excel-table.png "The table on screen: Europe and its products, with the group totals in bold.")

The menu offers Excel, PDF and CSV. Pick Excel and the browser saves `orders.xlsx`.

![The Export menu open with Excel, PDF and CSV](img/excel-menu.png "The export menu, installed from the shadcn registry. Its source is in components/export-menu.tsx.")

## What lands in the file

Open the file in Excel:

- **Outline levels.** The rows under each region are at outline level 1 and the orders under each product at level 2. Excel draws the bars and minus buttons on the left; clicking one collapses the group.
- **Group rows above their rows,** bold, on a light fill, as on screen. A grouped-by value appears once, on its group row, so the order rows leave the Region and Product cells empty.
- **Formulas, not pasted numbers.** Europe's amount is `=SUBTOTAL(9,E3:E14)`. The range includes the product group rows inside Europe, and `SUBTOTAL` skips other `SUBTOTAL` cells, so nothing is counted twice. Each formula is saved with its result, so previews that do not recalculate still show the right total.
- **Every row.** The file holds every row that passes the table's filters, in the current sort, on every page. Groups collapsed on screen are exported in full; collapsing is a view setting, and the user can collapse them again in Excel.

> The group totals in the file are computed by Excel from the rows below them. If your users edit a quantity or amount in the sheet, the region and product totals follow.

## Export from your own button

The menu is optional. `exportXlsx` takes the same table and returns a promise:

<!-- code: excel/excel-button.tsx#button title="excel-button.tsx" -->

Useful options:

| Option | What it does |
|---|---|
| `fileName` | File name without the extension. |
| `sheetName` | Worksheet name. Default `Sheet1`. |
| `rows` | `"all"` (default), `"page"` for the current page only, or `"selected"` for selected rows. |
| `groupFill` | Fill color of the group rows. The export menu uses your theme's muted color. |
| `download` | `false` to get the `Blob` back without saving it, for example to upload it. |

## TanStack Table v8

Rowpine reads v8 tables too. The setup differs in two places: row models are table options, and column meta is typed through module augmentation.

<!-- code: excel/orders-table-v8.tsx#v8 title="orders-table-v8.tsx" -->

The file is the same: two outline levels and the same `SUBTOTAL` formulas.

## When something looks wrong

**A group row has an empty cell where a total should be.** The column has no numeric `aggregationFn`. Columns without one are left empty on group rows, the same as on screen.

**The header in the file is a column id.** The column's `header` is a function or JSX, which cannot be written to a file. Set `meta.rowpine.header` to the text you want.

**A column should stay on screen only.** Add `meta: { rowpine: { exclude: true } }` to it, for example an internal id. Checkbox and actions columns need nothing: columns without an accessor are left out on their own.

**Dates are text in Excel.** Only `Date` values become Excel dates. If your data has ISO strings, convert them in the accessor, `accessorFn: (r) => new Date(r.date)`, and set `numFmt: "yyyy-mm-dd"`.

## License

CSV export is free. Excel, PDF and pivot tables run without a key, with one notice line in each file; a [license](../pricing.html) removes it and is a one-time payment per developer with a year of updates. The live [Orders to Excel demo](../examples/#/demo/orders-to-excel) shows the same export with sorting, hidden columns and pinned columns.
