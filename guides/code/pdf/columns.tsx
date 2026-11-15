"use client"

import { createColumnHelper } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { type DataTableFeatures } from "./data-table-features"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
const columnHelper = createColumnHelper<DataTableFeatures, Payment>()

export const columns = columnHelper.columns([
  // #region select
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    // Checkboxes are not data: keep this column out of the PDF.
    meta: { rowpine: { exclude: true } },
  }),
  // #endregion select
  columnHelper.accessor("status", {
    header: "Status",
    // #region status
    meta: {
      rowpine: {
        format: (v) => String(v).charAt(0).toUpperCase() + String(v).slice(1),
        cellStyle: (v) => (v === "failed" ? { color: "#b91c1c", bold: true } : undefined),
      },
    },
    // #endregion status
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  // #region amount
  columnHelper.accessor("amount", {
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const formatted = usd.format(row.getValue("amount"))
      return <div className="text-right font-medium">{formatted}</div>
    },
    meta: {
      rowpine: {
        header: "Amount", // the header above is JSX, so name it for the file
        format: (v) => usd.format(v as number), // the text the PDF prints
      },
    },
  }),
  // #endregion amount
  // #region actions
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="ghost" className="h-8 w-8 p-0" />}>
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    meta: { rowpine: { exclude: true } },
  }),
  // #endregion actions
])
