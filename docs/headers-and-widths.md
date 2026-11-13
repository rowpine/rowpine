---
title: Headers and column widths
section: Excel
order: 16
image: headers-and-widths.png
alt: An exported pivot whose headers read Q1 / Units and Q1 / Avg order
example: 08-pivot-table
---
The header row is built from your column definitions:

- A string `header` is used as is.
- A function `header` cannot be written to a file, so set `meta.rowpine.header`; otherwise the column id is used.
- Columns inside header groups get the group names joined with ` / `. In the image, the pivot's `Units` column under the `Q1` group becomes `Q1 / Units`. One header row keeps the sheet easy to filter and sort.

Column widths come from TanStack's column sizes (`size` in the column definition, or the width after the user resizes). Set `meta.rowpine.width` (pixels) to give the file a different width than the screen.
