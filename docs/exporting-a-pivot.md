---
title: Export a pivot
section: Pivot
order: 30
image: exporting-a-pivot.png
alt: An exported pivot with regions and countries down and quarters across, with bold totals
example: 09-pivot-designer
---
A pivot exports like any table. `pivot.table` is a table view of the pivot for the exporters:

```tsx
import { pivotRowStyle } from "rowpine"

<ExportMenu table={pivot.table} fileName="sales-pivot" rowStyle={pivotRowStyle} />

// or from code
await exportXlsx(pivot.table, { rowStyle: pivotRowStyle })
```

`pivotRowStyle` makes group, subtotal and grand total rows bold.

In Excel, row groups become outline levels (the bars on the left of the image) and the column headers join the column groups with the measure: `Q1 / Sum of Amount`. The cells are numbers with the `numFmt` from `pivotOptions` (or the third argument of `createPivot`), so they can be summed and charted.

The file holds every row, including groups collapsed on screen, and only the rows the designer's filters let through.
