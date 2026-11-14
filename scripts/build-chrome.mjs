#!/usr/bin/env node
// Write the shared header and footer (scripts/chrome.mjs) into the static pages
// in site/, between <!-- header -->...<!-- /header --> and
// <!-- footer -->...<!-- /footer -->. The page names its nav item with
// <!-- header current=pricing -->.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { header, footer } from './chrome.mjs'

const site = join(dirname(fileURLToPath(import.meta.url)), '..', 'site')
let changed = 0
for (const name of readdirSync(site).filter((f) => f.endsWith('.html'))) {
  const file = join(site, name)
  const before = readFileSync(file, 'utf8')
  const after = before
    .replace(/<!-- header(?: current=(\w+))? -->[\s\S]*?<!-- \/header -->/, (_, current) =>
      `<!-- header${current ? ` current=${current}` : ''} -->\n${header({ current })}\n<!-- /header -->`)
    .replace(/<!-- footer -->[\s\S]*?<!-- \/footer -->/, () => `<!-- footer -->\n${footer()}\n<!-- /footer -->`)
  if (after !== before) {
    writeFileSync(file, after)
    changed++
    console.log('updated', name)
  }
}
console.log(changed ? `${changed} page(s) updated` : 'all pages current')
