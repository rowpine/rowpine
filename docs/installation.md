---
title: Installation
section: Getting started
order: 1
image: installation.png
alt: A shadcn data table of orders with an Export button above it
example: 01-export-menu
---
Rowpine has two parts. The `rowpine` npm package does the work: it reads your TanStack table and writes the files, and it builds pivots. The UI (an export menu, a pivot table and a pivot designer) comes from the shadcn registry, so its source lands in your project and picks up your theme.

```bash
npm install rowpine
npx shadcn add @rowpine/export-menu
npx shadcn add @rowpine/pivot
```

`export-menu` installs `components/export-menu.tsx`. `pivot` installs `components/pivot-table.tsx` and `components/pivot-designer.tsx`. Both pull in the shadcn components they use (button, dropdown-menu, table, popover and so on) if you do not have them yet.

Rowpine is listed in the [shadcn registry directory](https://ui.shadcn.com/docs/directory), so the CLI finds `@rowpine` without any setup in `components.json`. If an older shadcn CLI does not recognize the name, use the full URL instead: `npx shadcn add https://rowpine.com/r/export-menu.json` (and `pivot.json`).

## Requirements

- React 18 or 19 and a shadcn/ui project. Both shadcn bases work: Base UI, the default for new projects, and Radix.
- TanStack Table v8 (`useReactTable`) or v9 (`useTable`). Rowpine reads the table you pass it and does not add TanStack as a dependency, so installing it never changes your TanStack version.

The Excel writer (JSZip) and the PDF writer (pdfmake) load the first time someone exports, so they do not add to your initial bundle.

## Next

Add the [export menu](add-an-export-menu.html) to a table, then set your [license key](license-keys.html).
