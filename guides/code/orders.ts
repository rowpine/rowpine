export type Order = {
  id: string
  region: string
  country: string
  customer: string
  product: string
  quarter: string
  quantity: number
  amount: number
}

export const orders: Order[] = [
  { id: "1001", region: "Europe", country: "Germany", customer: "Brandt GmbH", product: "Standing desk", quarter: "Q1", quantity: 6, amount: 4432.76 },
  { id: "1002", region: "Europe", country: "Germany", customer: "Kessler Werke", product: "Desk lamp", quarter: "Q1", quantity: 14, amount: 807.28 },
  { id: "1003", region: "Europe", country: "Norway", customer: "Halvorsen AS", product: "Desk chair", quarter: "Q2", quantity: 9, amount: 2344.74 },
  { id: "1004", region: "Europe", country: "Norway", customer: "Fjord Logistics", product: "Standing desk", quarter: "Q2", quantity: 3, amount: 2216.38 },
  { id: "1005", region: "Europe", country: "France", customer: "Maison Duret", product: "Desk lamp", quarter: "Q3", quantity: 11, amount: 665.08 },
  { id: "1006", region: "Europe", country: "France", customer: "Maison Duret", product: "Desk chair", quarter: "Q3", quantity: 4, amount: 1042.16 },
  { id: "1007", region: "Europe", country: "Germany", customer: "Brandt GmbH", product: "Monitor arm", quarter: "Q4", quantity: 20, amount: 1610.4 },
  { id: "1008", region: "Europe", country: "Norway", customer: "Halvorsen AS", product: "Standing desk", quarter: "Q4", quantity: 5, amount: 3693.95 },
  { id: "1009", region: "North America", country: "United States", customer: "Redwood Tools", product: "Standing desk", quarter: "Q1", quantity: 9, amount: 6518.14 },
  { id: "1010", region: "North America", country: "Canada", customer: "Lakeshore Supply", product: "Desk chair", quarter: "Q1", quantity: 3, amount: 899.12 },
  { id: "1011", region: "North America", country: "United States", customer: "Harbor & Pine", product: "Desk lamp", quarter: "Q2", quantity: 25, amount: 1441.5 },
  { id: "1012", region: "North America", country: "Canada", customer: "Maple Freight", product: "Monitor arm", quarter: "Q2", quantity: 12, amount: 966.24 },
  { id: "1013", region: "North America", country: "United States", customer: "Redwood Tools", product: "Desk chair", quarter: "Q3", quantity: 8, amount: 2084.32 },
  { id: "1014", region: "North America", country: "Canada", customer: "Lakeshore Supply", product: "Standing desk", quarter: "Q3", quantity: 2, amount: 1477.58 },
  { id: "1015", region: "North America", country: "United States", customer: "Harbor & Pine", product: "Monitor arm", quarter: "Q4", quantity: 16, amount: 1288.32 },
  { id: "1016", region: "North America", country: "Canada", customer: "Maple Freight", product: "Desk lamp", quarter: "Q4", quantity: 30, amount: 1729.8 },
  { id: "1017", region: "Asia Pacific", country: "Japan", customer: "Kitano Trading", product: "Desk chair", quarter: "Q1", quantity: 7, amount: 1823.71 },
  { id: "1018", region: "Asia Pacific", country: "Australia", customer: "Southern Cross Parts", product: "Desk lamp", quarter: "Q1", quantity: 18, amount: 1037.52 },
  { id: "1019", region: "Asia Pacific", country: "Japan", customer: "Kitano Trading", product: "Standing desk", quarter: "Q2", quantity: 4, amount: 2955.16 },
  { id: "1020", region: "Asia Pacific", country: "Australia", customer: "Southern Cross Parts", product: "Monitor arm", quarter: "Q3", quantity: 10, amount: 805.2 },
  { id: "1021", region: "Asia Pacific", country: "Japan", customer: "Kitano Trading", product: "Desk lamp", quarter: "Q3", quantity: 22, amount: 1267.86 },
  { id: "1022", region: "Asia Pacific", country: "Australia", customer: "Southern Cross Parts", product: "Desk chair", quarter: "Q4", quantity: 5, amount: 1302.65 },
]
