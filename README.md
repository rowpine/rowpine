# Rowpine

Excel and PDF export for TanStack Table and shadcn/ui data tables.

Rowpine writes the table the way your users see it: groups as Excel outline rows, aggregates as formulas, only the filtered rows, hidden columns left out, pinned columns as frozen panes, and dates and numbers as typed cells with their formats. You don't write a column mapping.

**Status:** in development. Nothing is published to npm or the shadcn registry yet. Watch this repo to hear about the first release.

## Planned install

```bash
npx shadcn add @rowpine/export
```

```tsx
<ExportMenu table={table} fileName="orders" />
```

The API may change before the first release.

## Pricing

CSV export is free. Excel and PDF export are a one-time license per developer that includes a year of updates.

## Website

https://rowpine.github.io/rowpine/ (source in [`site/`](site/), deployed by [`.github/workflows/pages.yml`](.github/workflows/pages.yml)).

TanStack Table and shadcn/ui are separate projects and are not affiliated with Rowpine.
