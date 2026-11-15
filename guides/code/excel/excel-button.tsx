"use client"

// #region button
import { exportXlsx, type TableLike } from "rowpine"

import { Button } from "@/components/ui/button"

export function ExcelButton({ table }: { table: TableLike }) {
  return (
    <Button
      variant="outline"
      onClick={() => exportXlsx(table, { fileName: "orders", sheetName: "Orders" })}
    >
      Download Excel
    </Button>
  )
}
// #endregion button
