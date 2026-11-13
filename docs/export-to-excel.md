---
title: Export to Excel
section: Excel
order: 6
image: export-to-excel.png
alt: An exported orders sheet with a frozen header and a date cell selected
example: 01-export-menu
---
`exportXlsx` writes a real .xlsx workbook, not a CSV renamed. What you get in Excel:

- Numbers and dates are typed cells, so they sort, filter and sum. A `Date` value becomes an Excel date; the image shows one selected.
- The header row is bold and frozen.
- Column widths follow the widths on screen.
- Hidden columns are left out, pinned columns are frozen, groups become outline rows with `SUBTOTAL` formulas.

```ts
import { exportXlsx } from "rowpine"

await exportXlsx(table, { fileName: "orders", sheetName: "Orders" })
```

| Option | What it does |
|---|---|
| `sheetName` | Worksheet name. Default `Sheet1`. |
| `groupFill` | Fill of group rows. Default `#eef2f0`. |

Plus the shared options: `fileName`, `rows`, `rowStyle`, `download`.

## Dates stored as strings

A date only becomes an Excel date when the cell value is a `Date`. If your data has ISO strings, convert them in the accessor (`accessorFn: (r) => new Date(r.date)`), or they export as text.
