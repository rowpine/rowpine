---
title: Support
section: Resources
order: 103
description: Where to ask a question or report a bug, and what to include so it can be answered the first time.
---
Questions and bug reports are answered by the engineers who write Rowpine.

## Before you write

- Search the docs, guides and API reference with <kbd>Ctrl K</kbd> (<kbd>⌘K</kbd> on a Mac).
- Read [troubleshooting](troubleshooting.html) for the problems people run into most.
- Check the [changelog](changelog.html): your problem may be fixed in a newer version.

## Where to write

| For | Where |
|---|---|
| Bugs and questions about using Rowpine | [GitHub issues](https://github.com/rowpine/rowpine/issues). Anyone can read them, so leave out private data. |
| Licenses, purchases, invoices and anything private | [info@jqwidgets.com](mailto:info@jqwidgets.com?subject=Rowpine) |
| Security vulnerabilities | The [security page](../security.html) says how to report one. Do not open a public issue. |

Never post a license key in an issue. It identifies your company and anyone can copy it.

## What to include

A report with these is usually answered without a round of questions:

- The `rowpine` version: `npm ls rowpine` prints it.
- The TanStack Table version (`npm ls @tanstack/react-table`) and whether your shadcn/ui project uses Base UI or Radix.
- The table setup: the features you register (v9) or the row models you pass (v8), and the column definitions involved.
- What you did, what you expected, and what happened instead.
- For a wrong file, the exported file or a screenshot of it, with private data removed.
- Any message from the browser console.
