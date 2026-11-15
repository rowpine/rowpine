"use client"

// #region imports
import {
  aggregationFn_sum,
  columnGroupingFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createExpandedRowModel,
  createGroupedRowModel,
  metaHelper,
  rowAggregationFeature,
  rowExpandingFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table"
import { ChevronDown, ChevronRight } from "lucide-react"
import type { RowpineColumnMeta } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { orders, type Order } from "../orders"
// #endregion imports

// #region features
const features = tableFeatures({
  columnVisibilityFeature,
  columnGroupingFeature,
  rowAggregationFeature,
  rowExpandingFeature,
  groupedRowModel: createGroupedRowModel(),
  expandedRowModel: createExpandedRowModel(),
  aggregationFns: { sum: aggregationFn_sum },
  // Types `meta.rowpine` on your columns.
  columnMeta: metaHelper<{ rowpine?: RowpineColumnMeta<Order> }>(),
})
// #endregion features

// #region columns
const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
const helper = createColumnHelper<typeof features, Order>()

const columns = helper.columns([
  helper.accessor("region", { header: "Region" }),
  helper.accessor("product", { header: "Product" }),
  helper.accessor("customer", { header: "Customer" }),
  helper.accessor("quantity", { header: "Qty", aggregationFn: "sum" }),
  helper.accessor("amount", {
    header: "Amount",
    aggregationFn: "sum",
    cell: (c) => usd.format(c.getValue()),
    aggregatedCell: (c) => usd.format(c.getValue() as number),
    // An Excel number format: the cell stays a number, shown as dollars.
    meta: { rowpine: { numFmt: '"$"#,##0.00' } },
  }),
])
// #endregion columns

// #region component
export function OrdersTable() {
  const table = useTable({
    features,
    columns,
    data: orders,
    initialState: { grouping: ["region", "product"], expanded: true },
  })

  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <ExportMenu table={table} fileName="orders" pdfTitle="Orders" />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead key={header.id}>
                    <table.FlexRender header={header} />
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className={row.getIsGrouped() ? "bg-muted/50 font-medium" : undefined}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.getIsGrouped() ? (
                      <button type="button" onClick={row.getToggleExpandedHandler()} className="inline-flex items-center gap-1">
                        {row.getIsExpanded() ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
                        <table.FlexRender cell={cell} /> ({row.subRows.length})
                      </button>
                    ) : cell.getIsPlaceholder() ? null : (
                      <table.FlexRender cell={cell} />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
// #endregion component
