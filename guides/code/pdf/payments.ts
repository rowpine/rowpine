import type { Payment } from "./columns"

const statuses: Payment["status"][] = ["success", "processing", "success", "failed", "pending", "success"]
const names = ["ken", "abe", "monserrat", "silas", "carmella", "jason", "maria", "devon", "lena", "omar", "yuki", "priya"]
const hosts = ["example.com", "gmail.com", "hotmail.com", "yahoo.com"]

// 60 payments, the same on every run.
export const payments: Payment[] = Array.from({ length: 60 }, (_, i) => ({
  id: (0x728ed52f + i * 7919).toString(16),
  amount: ((i * 37) % 900) + 45 + ((i * 13) % 100) / 100,
  status: statuses[i % statuses.length],
  email: `${names[i % names.length]}${i}@${hosts[i % hosts.length]}`,
}))
