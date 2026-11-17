---
title: Changelog
section: Resources
order: 101
description: What changed in each version of the rowpine package.
---
Every version of the `rowpine` npm package, newest first. The components from the shadcn registry are source in your project and change only when you add them again.

## 1.0.4

Released 2026-11-17.

- **Fixed:** the console warning without a license key linked to a homepage section that no longer exists. It links to the [pricing page](../pricing.html) now.
- **Changed:** `LicenseInfo.plan` can be `"indie"`, for keys from the [Indie license](../pricing.html).
- **Changed:** the package README installs the components with `npx shadcn add @rowpine/export-menu` and `@rowpine/pivot`. Rowpine is in the [shadcn registry directory](https://ui.shadcn.com/docs/directory), so no setup in `components.json` is needed.

## 1.0.3

Released 2026-11-15.

- **Fixed:** a pivot from `createPivot` rendered in your own TanStack table showed raw numbers, such as `4701.349999999999`. The value columns now carry a `cell` that formats them with the measure's `format`, or rounds to two decimals with thousands separators. The `PivotTable` component and the exports were not affected.

## 1.0.2

Released 2026-11-15.

- **Fixed:** a TanStack Table v9 table without the grouping feature, such as the [shadcn/ui data table](../guides/shadcn-data-table-export-to-pdf.html), failed to type-check when passed to `ExportMenu` or an export function, with "not assignable to type TableLike". It runs and type-checks now.
- **Changed:** display columns, the ones without an accessor such as selection checkboxes and row actions, are left out of exports by default. Set `meta.rowpine.exclude: false` on one to keep it. See [hidden and excluded columns](hidden-and-excluded-columns.html).
- **Added:** `rowHeader` on the pivot config, the header of the pivot's first column. It defaulted to the row fields joined with ` / ` and could not be changed. See [pivot basics](pivot-basics.html).
- **Changed:** PDF and Excel files look like a shadcn/ui table. PDF: no header fill (it was dark slate), no stripes (`zebra: true` brings them back), lines between rows but not between columns (`verticalLines: true`), group rows in muted gray. Excel: group rows in muted gray (they were green). See [colors](export-to-pdf.html#colors).
- **Added:** `exportThemeFromPage()` reads your shadcn/ui theme from the page and returns matching PDF and Excel colors. The export menu uses it; turn it off with `theme="none"`. The menu also takes `pdfOptions` and `xlsxOptions`. Run `npx shadcn add https://rowpine.com/r/export-menu.json` again to get the new menu.
- **Docs:** every exported function, option and type has a description, shown in your editor and in the [API reference](api-export.html).
- **Deprecated:** the PDF options `grandTotal`, `labels.subtotal` and `labels.total`. They never had an effect; they stay in the types so existing code compiles.

## 1.0.1

Released 2026-11-14.

- The final license text: copyright jQWidgets LTD. See the [license](../license.html).
- `require("rowpine/package.json")` works: `package.json` is in the package's exports.

## 1.0.0

Released 2026-11-14.

- The first stable version. The code is the same as 0.1.0; the npm README gained pictures and links.

## 0.1.0

Released 2026-11-13.

- Excel, PDF and CSV export from TanStack Table v8 and v9 tables: grouped rows as Excel outline levels, group totals as `SUBTOTAL` formulas, pinned columns as frozen panes, number formats and cell colors.
- The pivot engine and the pivot designer state.
- The export menu, the pivot table and the pivot designer in the shadcn registry.
