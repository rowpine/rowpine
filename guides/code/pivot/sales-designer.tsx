"use client"

// #region designer
import { pivotRowStyle, type PivotField, type PivotPreset } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { PivotDesigner } from "@/components/pivot-designer"
import { orders, type Order } from "../orders"

const usd = (v: unknown) =>
  typeof v === "number" ? `$${Math.round(v).toLocaleString("en-US")}` : ""

const fields: PivotField<Order>[] = [
  { field: "region", label: "Region", kind: "dimension", group: "Where" },
  { field: "country", label: "Country", kind: "dimension", group: "Where" },
  { field: "customer", label: "Customer", kind: "dimension", group: "Who" },
  { field: "product", label: "Product", kind: "dimension", group: "What" },
  { field: "quarter", label: "Quarter", kind: "dimension", group: "When" },
  { field: "amount", label: "Revenue", kind: "measure", group: "Numbers", format: usd },
  { field: "quantity", label: "Units", kind: "measure", group: "Numbers" },
]

const presets: PivotPreset[] = [
  {
    name: "Revenue by region and quarter",
    layout: {
      rows: ["region", "country"],
      cols: ["quarter"],
      values: [{ field: "amount", agg: "sum", label: "Revenue" }],
      filters: [],
    },
  },
  {
    name: "Units by product",
    layout: {
      rows: ["product"],
      cols: ["region"],
      values: [{ field: "quantity", agg: "sum", label: "Units" }],
      filters: [],
    },
  },
]

export function SalesDesigner() {
  return (
    <PivotDesigner
      data={orders}
      fields={fields}
      presets={presets}
      pivotOptions={{ numFmt: '"$"#,##0' }}
      actions={(pivot) => (
        <ExportMenu table={pivot.table} fileName="sales" rowStyle={pivotRowStyle} />
      )}
    />
  )
}
// #endregion designer
