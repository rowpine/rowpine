"use client"

// #region v8
import {
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  getGroupedRowModel,
  useReactTable,
  type RowData,
} from "@tanstack/react-table"
import type { RowpineColumnMeta } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { orders, type Order } from "../orders"

// #region augment
// v8 types column meta through module augmentation.
declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    rowpine?: RowpineColumnMeta<TData>
  }
}
// #endregion augment

const helper = createColumnHelper<Order>()
const columns = [
  helper.accessor("region", { header: "Region" }),
  helper.accessor("product", { header: "Product" }),
  helper.accessor("customer", { header: "Customer" }),
  helper.accessor("quantity", { header: "Qty", aggregationFn: "sum" }),
  helper.accessor("amount", {
    header: "Amount",
    aggregationFn: "sum",
    meta: { rowpine: { numFmt: '"$"#,##0.00' } },
  }),
]

export function OrdersTableV8() {
  const table = useReactTable({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    initialState: { grouping: ["region", "product"], expanded: true },
  })

  return (
    <div>
      <ExportMenu table={table} fileName="orders" />
      {/* your table markup, unchanged */}
    </div>
  )
}
// #endregion v8
