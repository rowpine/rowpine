---
title: Column settings for exports
section: Getting started
order: 4
image: column-settings.png
alt: A table with formatted dates, amounts, colored margins and status badges
example: 05-formats-colors
---
Per-column export settings go in the column's `meta.rowpine`. Your table renders as before; Rowpine reads these only when it writes a file.

```ts
helper.accessor("amount", {
  header: "Amount",
  cell: (c) => money.format(c.getValue()),
  meta: {
    rowpine: {
      numFmt: '"$"#,##0.00',
      format: (v) => money.format(v as number),
      cellStyle: (v) => ((v as number) < 0 ? { color: "#b91c1c" } : undefined),
    },
  },
})
```

| Key | Used by | What it does |
|---|---|---|
| `header` | all | Header text in the file. Default: the column's string `header`, else its id. |
| `numFmt` | Excel | Excel number format. See [number and date formats](number-and-date-formats.html). |
| `format` | PDF | Text for a value. Default: numbers and dates in the browser's locale. |
| `cellStyle` | Excel, PDF | `{ fill, color, bold }` for a cell. See [cell colors](cell-colors.html). |
| `width` | Excel | Width in pixels. Default: the column's TanStack size. |
| `align` | Excel, PDF | `left`, `center` or `right`. Default: right for numbers. |
| `exclude` | all | Never export this column. |

With TanStack v9, type `meta` by adding a column meta slot to your features:

```ts
import type { RowpineColumnMeta } from "rowpine"

const features = tableFeatures({
  // ...your features
  columnMeta: metaHelper<{ rowpine?: RowpineColumnMeta<Order> }>(),
})
```

With v8, add `rowpine?: RowpineColumnMeta<TData>` to the `ColumnMeta` interface through module augmentation.
