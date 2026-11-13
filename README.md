# Rowpine

Pivot tables and Excel and PDF export for TanStack Table and shadcn/ui data tables.

TanStack Table can group rows, but it has no pivot, and exporting means writing your own column mapping. Rowpine adds both and works from the table instance you already have.

- **Pivot:** several fields on each axis, several measures, sum, average, min, max, count, distinct count, first, last or your own function, subtotals, grand totals, collapsible groups.
- **Export:** writes the table the way your users see it. Groups become Excel outline rows, aggregates become formulas, only filtered rows go out, hidden columns stay out, pinned columns become frozen panes, and dates and numbers are typed cells with their formats.

## Install

```bash
npm install rowpine
npx shadcn add https://rowpine.com/r/export-menu.json
npx shadcn add https://rowpine.com/r/pivot.json
```

```tsx
const pivot = usePivot(rows, {
  rows: ['region'],
  cols: ['quarter'],
  values: [{ field: 'amount', agg: 'sum' }],
})

<ExportMenu table={table} fileName="orders" />
```


## Pricing

CSV export is free. Pivoting and Excel and PDF export come in one Pro license: $149 per developer or $499 for a team of up to 10, one-time, with a year of updates. See [pricing](https://rowpine.com/pricing.html).

## Docs and examples

- [Help topics](https://rowpine.com/docs/): 30 pages, sources in [`docs/`](docs/), each with an image from a real export or a running example.
- [Demos](https://rowpine.com/examples/): 5 use-case demos that play themselves and 16 feature examples, each with its source.

## Website

https://rowpine.com/ (source in [`site/`](site/), deployed by [`.github/workflows/pages.yml`](.github/workflows/pages.yml)).

```bash
npm install
npm run build:docs   # docs/*.md -> site/docs/*.html, a .md copy of each, and the docs list in site/llms.txt
npm run check        # every local link, image and script on every page resolves
```

`site/examples/` is the build of the examples app, and `site/docs/img/` comes from `scripts/capture-docs.cjs`; both live in the private repo.

TanStack Table and shadcn/ui are separate projects and are not affiliated with Rowpine.
