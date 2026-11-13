#!/usr/bin/env node
// Serve site/ under /rowpine/ (as GitHub Pages does) and check every local
// link, image and script on every HTML page resolves.
//   node scripts/check-site.mjs [--serve]   (--serve keeps the server up on :5360)
import { createServer } from 'node:http'
import { readFile, readdir } from 'node:fs/promises'
import { join, extname, dirname, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const site = join(dirname(fileURLToPath(import.meta.url)), '..', 'site')
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.md': 'text/markdown', '.txt': 'text/plain', '.woff2': 'font/woff2' }
const PORT = 5360

const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  if (!p.startsWith('/rowpine/')) return res.writeHead(404).end()
  p = normalize(p.slice('/rowpine/'.length))
  if (p === '.' || p.endsWith('/') || p.endsWith('\\')) p = join(p, 'index.html')
  try {
    const body = await readFile(join(site, p))
    res.writeHead(200, { 'content-type': TYPES[extname(p)] ?? 'application/octet-stream' }).end(body)
  } catch {
    res.writeHead(404).end('not found')
  }
}).listen(PORT)

async function htmlFiles(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...(await htmlFiles(p)))
    else if (e.name.endsWith('.html')) out.push(p)
  }
  return out
}

const pages = await htmlFiles(site)
const bad = []
let checked = 0
for (const file of pages) {
  const rel = file.slice(site.length + 1).replace(/\\/g, '/')
  const pageUrl = new URL(`http://localhost:${PORT}/rowpine/${rel}`)
  const html = await readFile(file, 'utf8')
  for (const [, ref] of html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(ref)) continue
    const url = new URL(ref, pageUrl)
    let r
    // Retry a dropped connection; a reset is the local server, not a broken link.
    for (let attempt = 0; ; attempt++) {
      try { r = await fetch(url); break } catch (e) { if (attempt === 2) throw e }
    }
    checked++
    if (!r.ok) bad.push(`${rel}: ${ref} -> ${r.status}`)
  }
}
console.log(`${pages.length} pages, ${checked} local references, ${bad.length} broken`)
for (const b of bad) console.log('  ' + b)
if (!process.argv.includes('--serve')) server.close()
else console.log(`serving http://localhost:${PORT}/rowpine/`)
process.exitCode = bad.length ? 1 : 0
