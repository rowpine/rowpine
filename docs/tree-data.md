---
title: Tree data
section: Excel
order: 14
image: tree-data.png
alt: An org chart table with expandable units, leads, headcount and budgets
example: 06-tree-data
---
Rows nested with `getSubRows` export with their hierarchy.

```ts
const table = useTable({
  features,
  columns,
  data: org,
  getSubRows: (unit) => unit.subRows,
  initialState: { expanded: true },
})
```

Every row is exported, expanded or not, in tree order: a parent, then its children, then the next parent. In Excel each depth is an [outline level](tree-data-in-excel.html), and in the PDF the first column is indented by depth.

Parent rows are bold in both files. Their values are whatever your data holds for them; Rowpine does not add formulas to tree rows, because a parent's number is not always the sum of its children.
