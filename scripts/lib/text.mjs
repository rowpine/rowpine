// Small text helpers shared by the docs, guides and search builders.
import { execFileSync } from 'node:child_process'

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const slugify = (s) =>
  String(s).toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const plain = (html) =>
  String(html).replace(/<pre[\s\S]*?<\/pre>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim()

/** Tables get a scrolling wrapper, so they fill the column and scroll on a phone. */
export const wrapTables = (html) => html.replace(/<table>/g, '<div class="tw"><table>').replace(/<\/table>/g, '</table></div>')

/** Headings get ids and a hover link, and are returned for the table of contents. */
export function withIds(html) {
  const toc = []
  const seen = new Map()
  const out = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_, n, text) => {
    let id = slugify(text)
    const k = seen.get(id) ?? 0
    seen.set(id, k + 1)
    if (k) id += `-${k}`
    toc.push({ level: Number(n), id, text: plain(text) })
    return `<h${n} id="${id}">${text}<a class="anchor" href="#${id}" aria-label="Link to this section">#</a></h${n}>`
  })
  return { html: out, toc }
}

/** The opening paragraph, cut at a sentence end, for descriptions. */
export function firstSentence(md) {
  const para = md.replace(/```[\s\S]*?```/g, '').replace(/<!--[\s\S]*?-->/g, '').replace(/[`*_\[\]]/g, '').replace(/\(([^)]*\.html[^)]*)\)/g, '').split(/\n\n/).find((p) => p.trim() && !p.startsWith('|') && !p.startsWith('-') && !p.startsWith('!'))?.replace(/\s+/g, ' ').trim() ?? ''
  if (para.length <= 200) return para
  const cut = para.slice(0, 200)
  const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(': '))
  return end > 60 ? cut.slice(0, end + 1) : cut.slice(0, cut.lastIndexOf(' ')) + '...'
}

/** The date a file last changed in git, or today when it has uncommitted changes. */
export function gitDate(root, file) {
  try {
    const dirty = execFileSync('git', ['status', '--porcelain', '--', file], { cwd: root }).toString().trim()
    if (dirty) return new Date().toISOString().slice(0, 10)
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { cwd: root }).toString().trim() || new Date().toISOString().slice(0, 10)
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

export const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

export function frontMatter(raw, file) {
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw.replace(/\r\n/g, '\n'))
  if (!m) throw new Error(`${file}: no front matter`)
  const meta = Object.fromEntries(m[1].split('\n').map((l) => [l.slice(0, l.indexOf(':')).trim(), l.slice(l.indexOf(':') + 1).trim()]))
  return { meta, body: m[2].trim() }
}
