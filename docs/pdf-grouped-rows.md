---
title: Groups in a PDF
section: PDF
order: 20
image: pdf-grouped-rows.png
alt: A PDF with bold region and product group rows above their orders
example: 02-grouped-export
---
Grouped tables print their group rows bold on a light fill, with their aggregates, above the rows they group. Nested groups and tree rows are indented in the first column, one step per level.

The aggregate text uses the column's `format`, so a summed amount looks like the amounts under it:

```ts
helper.accessor("amount", {
  aggregationFn: "sum",
  aggregatedCell: (c) => money.format(c.getValue() as number),
  meta: { rowpine: { format: (v) => money.format(v as number) } },
})
```

Set the group row fill with `subtotalColor`:

```ts
await exportPdf(table, { subtotalColor: "#eef2f0" })
```
