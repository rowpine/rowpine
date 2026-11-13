# Rowpine

Pivot tables and Excel and PDF export for TanStack Table and shadcn/ui data tables.

TanStack Table can group rows, but it has no pivot, and exporting means writing your own column mapping. Rowpine adds both and works from the table instance you already have.

- **Pivot:** several fields on each axis, several measures, sum, average, min, max, count, distinct count, first, last or your own function, subtotals, grand totals, collapsible groups.
- **Export:** writes the table the way your users see it. Groups become Excel outline rows, aggregates become formulas, only filtered rows go out, hidden columns stay out, pinned columns become frozen panes, and dates and numbers are typed cells with their formats.

**Status:** in development. Nothing is published to npm or the shadcn registry yet. Watch this repo to hear about the first release.

## Planned install

```bash
npx shadcn add @rowpine/pivot @rowpine/export
```

```tsx
const pivot = usePivot(rows, {
  rows: ['region'],
  cols: ['quarter'],
  values: [{ field: 'amount', agg: 'sum' }],
})

<ExportMenu table={table} fileName="orders" />
```

The API may change before the first release.

## Pricing

CSV export is free. Pivoting and Excel and PDF export come in one Pro license: a one-time payment per developer that includes a year of updates.

## Website

https://rowpine.github.io/rowpine/ (source in [`site/`](site/), deployed by [`.github/workflows/pages.yml`](.github/workflows/pages.yml)).

TanStack Table and shadcn/ui are separate projects and are not affiliated with Rowpine.
