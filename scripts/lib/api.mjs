// The API reference, read from the type definitions of the installed rowpine
// package (node_modules/rowpine/dist) and of the registry components, with the
// TypeScript compiler. Nothing here is typed by hand: names, signatures,
// properties and their comments all come from the published .d.ts files.
import ts from 'typescript'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/** Pages of the reference and the exports on each, in order. */
export const API_PAGES = [
  {
    slug: 'api-export',
    title: 'Export functions',
    lead: 'Write a TanStack table to Excel, PDF or CSV, and the options each export takes.',
    names: ['exportXlsx', 'exportPdf', 'exportCsv', 'tableToCsv', 'XlsxExportOptions', 'PdfTableExportOptions', 'PdfExportOptions', 'CsvExportOptions', 'RowScope', 'PdfPageSize', 'PdfFont', 'saveBlob'],
  },
  {
    slug: 'api-columns',
    title: 'Column settings',
    lead: 'Per-column export settings, read from meta.rowpine on your TanStack column definitions.',
    names: ['RowpineColumnMeta', 'CellStyle'],
  },
  {
    slug: 'api-pivot',
    title: 'Pivot',
    lead: 'Build a pivot from flat rows: the config, the measures, and the result you render or export.',
    names: ['createPivot', 'PivotConfig', 'PivotValueConfig', 'PivotAggregatorId', 'PivotAggregator', 'ToColumnsOptions', 'PivotTable', 'PivotTreeRow', 'PivotColumnDef', 'PivotColumnMeta', 'pivotRowStyle', 'pivotAggregators', 'createPivotModel', 'PivotResult', 'PivotRow', 'PivotRowKind', 'PivotColumn', 'filterCollapsedPivotRows', 'pivotAsTable', 'pivotToTree', 'toTanStackColumns'],
  },
  {
    slug: 'api-designer',
    title: 'Pivot designer state',
    lead: 'The fields, layouts and presets behind the pivot designer, and the pure functions that change a layout.',
    names: ['PivotField', 'PivotLayout', 'PivotPreset', 'PivotValueChip', 'PivotFilterChip', 'Well', 'EMPTY_LAYOUT', 'ALL_AGGREGATORS', 'AGG_LABEL', 'KIND_WELLS', 'WELL_LABEL', 'defaultLayoutFor', 'defaultWellFor', 'layoutToConfig', 'pivotFromLayout', 'applyLayoutFilters', 'addToWell', 'removeFromWell', 'clearWell', 'toggleField', 'isFieldInLayout', 'setAggregatorAt', 'setFilterAllowed', 'distinctValues'],
  },
  {
    slug: 'api-license',
    title: 'License',
    lead: 'Set the license key and read what it covers. The check runs in the browser and makes no network calls.',
    names: ['setLicenseKey', 'getLicenseStatus', 'LicenseStatus', 'LicensePayload'],
  },
  {
    slug: 'api-advanced',
    title: 'Low-level API',
    lead: 'The pieces the exporters are built from: reading a table into a sheet, and building files without saving them.',
    names: ['readTable', 'TableLike', 'ColumnLike', 'RowLike', 'Sheet', 'SheetColumn', 'SheetRow', 'tableToXlsxModel', 'sheetToXlsxModel', 'buildXlsxParts', 'XlsxModel', 'XlsxCell', 'sheetToPdfParams'],
  },
]

const COMPONENTS = [
  { file: 'export-menu.tsx', names: ['ExportMenu', 'ExportMenuProps'] },
  { file: 'pivot-table.tsx', names: ['PivotTable', 'PivotTableProps', 'usePivot'] },
  { file: 'pivot-designer.tsx', names: ['PivotDesigner', 'PivotDesignerProps'] },
]

const FLAGS = ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope | ts.TypeFormatFlags.WriteArrowStyleSignature

// `{@link X}` and `{@link X | label}` become code spans; the page renderer links known names.
const links = (s) => s.replace(/\{@link\s+([^}\s|]+)(?:\s*\|\s*([^}]+))?\}/g, (_, name, label) => `\`${(label ?? name).trim()}\``)

/** A symbol's description, with a `@deprecated` tag (which is not part of the description) put in front. */
function describeSymbol(sym, checker) {
  const text = links(ts.displayPartsToString(sym.getDocumentationComment(checker)).trim())
  const dep = sym.getJsDocTags(checker).find((t) => t.name === 'deprecated')
  if (!dep) return text
  const why = links(ts.displayPartsToString(dep.text ?? []).trim())
  return [`**Deprecated.**${why ? ` ${why}` : ''}`, text].filter(Boolean).join(' ')
}

function docOf(sym, checker) {
  const tags = sym.getJsDocTags(checker).map((t) => ({ name: t.name, text: links(ts.displayPartsToString(t.text ?? []).trim()) }))
  return { text: describeSymbol(sym, checker), tags }
}

function describe(sym, checker) {
  const decl = sym.declarations?.[0]
  if (!decl) return null
  const name = sym.getName()
  const doc = docOf(sym, checker)
  if (ts.isFunctionDeclaration(decl) || (ts.isVariableDeclaration(decl) && checker.getSignaturesOfType(checker.getTypeOfSymbolAtLocation(sym, decl), ts.SignatureKind.Call).length && /^[a-z]/.test(name) && !/^[A-Z_]+$/.test(name))) {
    const type = checker.getTypeOfSymbolAtLocation(sym, decl)
    const sigs = checker.getSignaturesOfType(type, ts.SignatureKind.Call)
    const isComponent = /^[A-Z]/.test(name)
    return {
      name,
      kind: isComponent ? 'component' : name.startsWith('use') ? 'hook' : 'function',
      doc,
      signatures: sigs.map((s) => {
        const sdoc = links(ts.displayPartsToString(s.getDocumentationComment(checker)).trim())
        return {
          text: `${name}${checker.signatureToString(s, decl, FLAGS)}`.replace(/\): /, '): ').replace(/^(\w+)\(/, '$1('),
          doc: sdoc,
          params: s.getParameters().map((p) => {
            const pd = p.declarations?.[0]
            return {
              name: p.getName(),
              type: checker.typeToString(checker.getTypeOfSymbolAtLocation(p, pd ?? decl), pd, FLAGS),
              optional: !!(pd && ts.isParameter(pd) && (pd.questionToken || pd.initializer)),
              doc: describeSymbol(p, checker),
            }
          }),
          returns: checker.typeToString(s.getReturnType(), decl, FLAGS),
        }
      }),
    }
  }
  if (ts.isVariableDeclaration(decl)) {
    return { name, kind: 'constant', doc, type: checker.typeToString(checker.getTypeOfSymbolAtLocation(sym, decl), decl, FLAGS) }
  }
  if (ts.isTypeAliasDeclaration(decl) || ts.isInterfaceDeclaration(decl)) {
    const type = checker.getDeclaredTypeOfSymbol(sym)
    const isObject = ts.isInterfaceDeclaration(decl) || (!type.isUnion() && (type.flags & ts.TypeFlags.Object || type.isIntersection()) && checker.getPropertiesOfType(type).length > 0 && !checker.getSignaturesOfType(type, ts.SignatureKind.Call).length)
    if (isObject) {
      const props = checker.getPropertiesOfType(type).map((p) => {
        const pd = p.declarations?.[0]
        return {
          name: p.getName(),
          optional: !!(p.flags & ts.SymbolFlags.Optional),
          type: checker.typeToString(checker.getTypeOfSymbolAtLocation(p, pd ?? decl), pd ?? decl, FLAGS).replace(/ \| undefined$/, ''),
          doc: describeSymbol(p, checker),
        }
      })
      const generics = decl.typeParameters?.length ? `<${decl.typeParameters.map((t) => t.getText()).join(', ')}>` : ''
      return { name, kind: ts.isInterfaceDeclaration(decl) ? 'interface' : 'type', doc, generics, props }
    }
    // A union, a function type and the like: show its definition.
    const body = ts.isTypeAliasDeclaration(decl) ? decl.type.getText().replace(/\s+/g, ' ') : checker.typeToString(type, decl, FLAGS)
    const generics = decl.typeParameters?.length ? `<${decl.typeParameters.map((t) => t.getText()).join(', ')}>` : ''
    return { name, kind: 'type', doc, definition: `type ${name}${generics} = ${body}` }
  }
  return null
}

function exportsOf(file, compilerOptions) {
  const program = ts.createProgram([file], compilerOptions)
  const checker = program.getTypeChecker()
  const sf = program.getSourceFile(file)
  const mod = checker.getSymbolAtLocation(sf)
  const out = new Map()
  for (let sym of checker.getExportsOfModule(mod)) {
    const name = sym.getName()
    if (sym.flags & ts.SymbolFlags.Alias) sym = checker.getAliasedSymbol(sym)
    const d = describe(sym, checker)
    if (d) out.set(name, { ...d, name })
  }
  return out
}

/** The whole reference: pages of entries, the version, and the components. */
export function readApi(root) {
  const pkgDir = join(root, 'node_modules', 'rowpine')
  const version = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf8')).version
  const all = exportsOf(join(pkgDir, 'dist', 'index.d.ts'), { strict: true })
  const placed = new Set(API_PAGES.flatMap((p) => p.names))
  const missing = [...all.keys()].filter((n) => !placed.has(n))
  if (missing.length) throw new Error(`api: exports not on any page: ${missing.join(', ')}`)
  const pages = API_PAGES.map((p) => ({
    ...p,
    entries: p.names.map((n) => {
      const e = all.get(n)
      if (!e) throw new Error(`api: ${n} is not exported by rowpine ${version}`)
      return e
    }),
  }))

  // Registry components: their props come from the source files in registry/rowpine.
  const comp = []
  for (const c of COMPONENTS) {
    const file = join(root, 'registry', 'rowpine', c.file)
    const found = exportsOf(file, { strict: true, jsx: ts.JsxEmit.Preserve, baseUrl: root, paths: { rowpine: [join(pkgDir, 'dist', 'index.d.ts')] }, noResolve: false })
    for (const n of c.names) {
      const e = found.get(n)
      if (!e) throw new Error(`api: ${c.file} does not export ${n}`)
      comp.push({ ...e, file: c.file })
    }
  }
  pages.push({
    slug: 'api-components',
    title: 'Components',
    lead: 'The shadcn registry items: an export menu, a pivot table and a pivot designer. Their source is in your project after npx shadcn add.',
    entries: comp,
  })
  return { version, pages }
}
