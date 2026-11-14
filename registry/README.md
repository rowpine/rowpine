# Rowpine shadcn registry

The source of the components `npx shadcn add` installs from `https://rowpine.com/r/{name}.json`:

| Item | Files | What it is |
|---|---|---|
| `export-menu` | `rowpine/export-menu.tsx` | An Export menu (Excel, PDF, CSV) for any TanStack table |
| `pivot` | `rowpine/pivot-table.tsx`, `rowpine/pivot-designer.tsx` | A pivot table with collapsible groups, and the pivot designer |

These files are MIT licensed (see [LICENSE](LICENSE)). They use the `rowpine` npm package for the file writers and the pivot: CSV export is free, while Excel, PDF and pivots run without a key with a notice line in the files, and need a license for production use ([pricing](https://rowpine.com/pricing.html)).

`../registry.json` is the registry index; the built items are in `../site/r/`.
