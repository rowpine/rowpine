// #region page
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { payments } from "./payments"

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })

export default function PaymentsPage() {
  const total = payments.reduce((sum, p) => sum + p.amount, 0)
  const failed = payments.filter((p) => p.status === "failed")

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={payments}
        report={{
          fileName: "payments-report",
          title: "Payments",
          subtitle: `${payments.length} payments, November 2026`,
          kpis: [
            { label: "Collected", value: usd.format(total) },
            {
              label: "Failed",
              value: usd.format(failed.reduce((sum, p) => sum + p.amount, 0)),
              delta: `${failed.length} payments`,
              color: "#b91c1c",
            },
          ],
          pageSize: "LETTER",
          headerColor: "#18181b",
          watermark: "INTERNAL",
        }}
      />
    </div>
  )
}
// #endregion page
