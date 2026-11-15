"use client"

// #region pivot
import { pivotRowStyle, type PivotConfig } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { PivotTable, usePivot } from "@/components/pivot-table"
import { orders, type Order } from "../orders"

const usd = (v: unknown) =>
  typeof v === "number" ? `$${Math.round(v).toLocaleString("en-US")}` : ""

// Module scope keeps the config stable; usePivot recomputes when it changes.
const config: PivotConfig<Order> = {
  rows: ["region", "country"],
  cols: ["quarter"],
  values: [{ field: "amount", agg: "sum", label: "Revenue", format: usd }],
  rowHeader: "Region / Country",
}

export function SalesPivot() {
  const pivot = usePivot(orders, config, { numFmt: '"$"#,##0' })

  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <ExportMenu table={pivot.table} fileName="revenue" pdfTitle="Revenue" rowStyle={pivotRowStyle} />
      </div>
      <PivotTable pivot={pivot} />
    </div>
  )
}
// #endregion pivot
