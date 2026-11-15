// Code blocks: a small highlighter for tsx, ts and bash, a copy button, and
// regions pasted from the tested sources in guides/code.
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { esc } from './text.mjs'

const REGION = /^\s*(?:\/\/|\{\/\*)\s*#(end)?region\b\s*([\w-]*)/

/** The lines between `// #region name` and `// #endregion name` (or the whole file). */
export function region(dir, file, name) {
  const lines = readFileSync(join(dir, file), 'utf8').replace(/\r\n/g, '\n').split('\n')
  let from = 0, to = lines.length
  if (name) {
    from = lines.findIndex((l) => { const m = REGION.exec(l); return m && !m[1] && m[2] === name })
    to = lines.findIndex((l, i) => { const m = REGION.exec(l); return i > from && m && m[1] && m[2] === name })
    if (from < 0 || to < 0) throw new Error(`${file}: no region ${name}`)
    from++
  }
  const picked = lines.slice(from, to).filter((l) => !REGION.test(l))
  const indent = Math.min(...picked.filter((l) => l.trim()).map((l) => /^ */.exec(l)[0].length))
  return picked.map((l) => l.slice(indent)).join('\n').replace(/"\.\.\/orders"/g, '"./orders"').replace(/^\n+|\n+$/g, '')
}

const TOKENS = {
  bash: /(#[^\n]*)|("(?:[^"\\]|\\.)*"|'[^']*')|(\b(?:npm|npx|pnpm|yarn)\b)/g,
  code: /(\/\/[^\n]*|\{\/\*[\s\S]*?\*\/\}|\/\*[\s\S]*?\*\/)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b(?:import|from|export|default|const|let|function|return|await|async|type|interface|declare|module|extends|as|typeof|keyof|readonly|new|if|else|true|false|null|undefined|void)\b)|((?<![\w$])<\/?[A-Z][\w.]*|\b[A-Z][\w]*(?=\())/g,
}

export function highlight(code, lang) {
  const tokens = lang === 'bash' ? TOKENS.bash : TOKENS.code
  let html = '', last = 0
  for (const m of code.matchAll(tokens)) {
    html += esc(code.slice(last, m.index))
    const cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : 't'
    html += `<span class="${cls}">${esc(m[0])}</span>`
    last = m.index + m[0].length
  }
  return html + esc(code.slice(last))
}

export function codeBlock(code, lang = 'tsx', title) {
  const label = title ?? (lang === 'bash' ? 'Terminal' : lang)
  return `<div class="editor"><div class="editor-bar"><span class="on">${esc(label)}</span><button type="button" class="copy" aria-label="Copy code">Copy</button></div><pre class="code"><code>${highlight(code, lang)}</code></pre></div>`
}

/**
 * Markdown with code: `<!-- code: file#region title="x" -->` markers and fenced
 * blocks become highlighted blocks. Returns the Markdown with placeholders and
 * a function that puts the blocks back into the rendered HTML.
 */
export function extractCode(md, codeDir) {
  const blocks = []
  const keep = (html) => { blocks.push(html); return `\n\nCODEBLOCK${blocks.length - 1}\n\n` }
  let text = md.replace(/<!--\s*code:\s*([^#\s]+)(?:#([\w-]+))?(?:\s+title="([^"]*)")?\s*-->/g, (_, file, name, title) =>
    keep(codeBlock(region(codeDir, file, name), file.endsWith('.ts') ? 'ts' : 'tsx', title)))
  text = text.replace(/```(\w+)?(?: title="([^"]*)")?\n([\s\S]*?)```/g, (_, lang = 'tsx', title, code) => keep(codeBlock(code.replace(/\n$/, ''), lang, title)))
  return { text, restore: (html) => html.replace(/<p>CODEBLOCK(\d+)<\/p>/g, (_, i) => blocks[Number(i)]) }
}

/** The Markdown with every code marker replaced by its fenced code, for the .md copies. */
export function inlineCode(md, codeDir) {
  return md.replace(/<!--\s*code:\s*([^#\s]+)(?:#([\w-]+))?(?:\s+title="([^"]*)")?\s*-->/g, (_, file, name, title) =>
    `\`\`\`${file.endsWith('.ts') ? 'ts' : 'tsx'}${title ? ` title="${title}"` : ''}\n${region(codeDir, file, name)}\n\`\`\``)
}
