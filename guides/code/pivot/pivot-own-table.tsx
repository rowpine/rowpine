"use client"

// #region own
import * as React from "react"
import {
  createExpandedRowModel,
  rowExpandingFeature,
  tableFeatures,
  useTable,
  type ColumnDef,
} from "@tanstack/react-table"
import { createPivot, type PivotTreeRow } from "rowpine"

import { orders } from "../orders"

const features = tableFeatures({
  rowExpandingFeature,
  expandedRowModel: createExpandedRowModel(),
})

export function useRevenuePivotTable() {
  // rows nested through subRows, plus TanStack column definitions
  const pivot = React.useMemo(
    () =>
      createPivot(orders, {
        rows: ["region", "country"],
        cols: ["quarter"],
        values: [{ field: "amount", agg: "sum", label: "Revenue" }],
      }),
    []
  )

  return useTable({
    features,
    data: pivot.data,
    // Plain column objects (id, header, accessorFn, columns); give them v9's type.
    columns: pivot.columns as unknown as ColumnDef<typeof features, PivotTreeRow>[],
    getSubRows: (row) => row.subRows,
    initialState: { expanded: true },
  })
}
// #endregion own
