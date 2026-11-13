import{A as e,C as t,D as n,E as r,F as i,G as a,H as o,I as s,L as c,M as l,N as u,R as d,S as ee,T as f,U as p,V as m,W as te,Y as ne,_ as h,a as re,b as g,c as ie,d as _,f as ae,g as oe,h as se,i as ce,j as le,l as ue,m as v,n as de,o as fe,p as pe,q as y,r as me,s as he,t as ge,u as _e,v as ve,w as ye,x as b,y as be,z as xe}from"./pivot-designer-Bm4wISix.js";var x=ne(a(),1);function Se(e){return Ce(e)||typeof e==`function`||we(e)}function Ce(e){return typeof e==`function`&&(()=>{let t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()}function we(e){return typeof e==`object`&&typeof e.$$typeof==`symbol`&&[`react.memo`,`react.forward_ref`].includes(e.$$typeof.description)}function Te(e,t){return e==null?null:Se(e)?x.createElement(e,t):e}function Ee(e){if(`cell`in e&&e.cell){let t=e.cell,n=t.column.columnDef,r=t,i=n;return r.getIsAggregated?.()?Te(i.aggregatedCell??n.cell,t.getContext()):r.getIsPlaceholder?.()?null:Te(n.cell,t.getContext())}return`header`in e&&e.header?Te(e.header.column.columnDef.header,e.header.getContext()):`footer`in e&&e.footer?Te(e.footer.column.columnDef.footer,e.footer.getContext()):null}function De({update:e,notify:t,unwatched:n}){return{link:r,unlink:i,propagate:a,checkDirty:o,shallowPropagate:s};function r(e,t,n){let r=t.depsTail;if(r!==void 0&&r.dep===e)return;let i=r===void 0?t.deps:r.nextDep;if(i!==void 0&&i.dep===e){i.version=n,t.depsTail=i;return}let a=e.subsTail;if(a!==void 0&&a.version===n&&a.sub===t)return;let o=t.depsTail=e.subsTail={version:n,dep:e,sub:t,prevDep:r,nextDep:i,prevSub:a,nextSub:void 0};i!==void 0&&(i.prevDep=o),r===void 0?t.deps=o:r.nextDep=o,a===void 0?e.subs=o:a.nextSub=o}function i(e,t=e.sub){let r=e.dep,i=e.prevDep,a=e.nextDep,o=e.nextSub,s=e.prevSub;return a===void 0?t.depsTail=i:a.prevDep=i,i===void 0?t.deps=a:i.nextDep=a,o===void 0?r.subsTail=s:o.prevSub=s,s===void 0?(r.subs=o)===void 0&&n(r):s.nextSub=o,a}function a(e){let n=e.nextSub,r;top:do{let i=e.sub,a=i.flags;if(a&60?a&12?a&4?!(a&48)&&c(e,i)?(i.flags=a|40,a&=1):a=0:i.flags=a&-9|32:a=0:i.flags=a|32,a&2&&t(i),a&1){let t=i.subs;if(t!==void 0){let i=(e=t).nextSub;i!==void 0&&(r={value:n,prev:r},n=i);continue}}if((e=n)!==void 0)n=e.nextSub;else{for(;r!==void 0;)if(e=r.value,r=r.prev,e!==void 0){n=e.nextSub;continue top}break}}while(1)}function o(t,n){let r,i=0,a=!1;top:do{let o=t.dep,c=o.flags;if(n.flags&16)a=!0;else if((c&17)==17){if(e(o)){let e=o.subs;e.nextSub!==void 0&&s(e),a=!0}}else if((c&33)==33){(t.nextSub!==void 0||t.prevSub!==void 0)&&(r={value:t,prev:r}),t=o.deps,n=o,++i;continue}if(!a){let e=t.nextDep;if(e!==void 0){t=e;continue}}for(;i--;){let i=n.subs,o=i.nextSub!==void 0;if(o?(t=r.value,r=r.prev):t=i,a){if(e(n)){o&&s(i),n=t.sub;continue}a=!1}else n.flags&=-33;n=t.sub;let c=t.nextDep;if(c!==void 0){t=c;continue top}}return a}while(1)}function s(e){do{let n=e.sub,r=n.flags;(r&48)==32&&(n.flags=r|16,(r&6)==2&&t(n))}while((e=e.nextSub)!==void 0)}function c(e,t){let n=t.depsTail;for(;n!==void 0;){if(n===e)return!0;n=n.prevDep}return!1}}function Oe(e,t,n){let r=typeof e==`object`,i=r?e:void 0;return{next:(r?e.next:e)?.bind(i),error:(r?e.error:t)?.bind(i),complete:(r?e.complete:n)?.bind(i)}}var ke=[],Ae=0,{link:je,unlink:Me,propagate:Ne,checkDirty:Pe,shallowPropagate:Fe}=De({update(e){return e._update()},notify(e){ke[Le++]=e,e.flags&=-3},unwatched(e){e.depsTail!==void 0&&(e.depsTail=void 0,e.flags=17,Be(e))}}),Ie=0,Le=0,S,Re=0;function ze(e){try{++Re,e()}finally{--Re||Ve()}}function Be(e){let t=e.depsTail,n=t===void 0?e.deps:t.nextDep;for(;n!==void 0;)n=Me(n,e)}function Ve(){if(!(Re>0)){for(;Ie<Le;){let e=ke[Ie];ke[Ie++]=void 0,e.notify()}Ie=0,Le=0}}function He(e,t){let n=typeof e==`function`,r=e,i={_snapshot:n?void 0:e,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:+!n,get(){return S!==void 0&&je(i,S,Ae),i._snapshot},subscribe(e){let t=Oe(e),n={current:!1},r=Ue(()=>{i.get(),n.current?(S=void 0,t.next?.(i._snapshot)):n.current=!0});return{unsubscribe:()=>{r.stop()}}},_update(e){let a=S,o=t?.compare??Object.is;if(n)S=i,++Ae,i.depsTail=void 0;else if(e===void 0)return!1;n&&(i.flags=5);try{let t=i._snapshot,a=typeof e==`function`?e(t):e===void 0&&n?r(t):e;return t===void 0||!o(t,a)?(i._snapshot=a,!0):!1}finally{S=a,n&&(i.flags&=-5),Be(i)}}};return n?(i.flags=17,i.get=function(){let e=i.flags;if(e&16||e&32&&Pe(i.deps,i)){if(i._update()){let e=i.subs;e!==void 0&&Fe(e)}}else e&32&&(i.flags=e&-33);return S!==void 0&&je(i,S,Ae),i._snapshot}):i.set=function(e){if(i._update(e)){let e=i.subs;e!==void 0&&(Ne(e),Fe(e),Ve())}},i}function Ue(e){let t=()=>{let t=S;S=n,++Ae,n.depsTail=void 0,n.flags=6;try{return e()}finally{S=t,n.flags&=-5,Be(n)}},n={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:6,notify(){let e=this.flags;e&16||e&32&&Pe(this.deps,this)?t():this.flags=2},stop(){this.flags=0,this.depsTail=void 0,Be(this)}};return t(),n}function We(e,t){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,r]of e)if(!t.has(n)||!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();let n=Ge(e);if(n.length!==Ge(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function Ge(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}var Ke=o();function qe(e,t){return e===t}function Je(e,t=e=>e,n){let r=n?.compare??qe,i=(0,x.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,x.useCallback)(()=>e.get(),[e]);return(0,Ke.useSyncExternalStoreWithSelector)(i,a,a,t,r)}function Ye(e){let t=Je(e.source,e.selector,{compare:We});return typeof e.children==`function`?e.children(t):e.children}function Xe(e){let t=e;return Object.defineProperty(e,"state",{get(){return e.get()}}),`set`in e&&(t.setState=e.set.bind(e)),t}function Ze(e){let{createAtom:t,batch:n}=e,r=t(0);return{createOptionsStore:!1,wrapExternalAtoms:!1,addSubscription:()=>{throw Error(`Feature not supported in current reactivity implementation`)},unmount:()=>{throw Error(`Feature not supported in current reactivity implementation`)},schedule:e.schedule??(e=>queueMicrotask(e)),batch:n,untrack:e=>e(),createReadonlyAtom:(e,n)=>{let i=n?.compare??Object.is,a=!1,o,s=()=>{let t=e();return a&&i(o,t)||(o=t,a=!0),o},c=t(()=>(r.get(),s()),{compare:i});return{get:s,subscribe:c.subscribe.bind(c)}},createWritableAtom:(e,n)=>t(e,{compare:n?.compare}),commit:()=>{r.set(e=>e+1)}}}function Qe(e,t=Object.is){let n=!1,r;return{get:e.get,markCommitted:e=>{r=e,n=!0},subscribe:i=>e.subscribe(e=>{n&&t(r,e)||i(e)})}}function $e(){return Ze({createAtom:He,batch:ze})}function C(e,t){return typeof e==`function`?e(t):e}function w(e){if(Array.isArray(e))return e.map(w);if(e&&typeof e==`object`){let t=Object.getPrototypeOf(e);if(t!==Object.prototype&&t!==null)return e;let n=t===null?T():{},r=Object.keys(e);for(let t=0;t<r.length;t++){let i=r[t];Object.defineProperty(n,i,{configurable:!0,enumerable:!0,value:w(e[i]),writable:!0})}return n}return e}function et(e,t){let n=Object.keys(t),r=e;for(let e=0;e<n.length;e++){let i=n[e];!i.startsWith(`_memo_`)&&i!==`_cellsCache`&&(r[i]=t[i])}return e}function T(){return Object.create(null)}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e,t){return n=>{(t.options.atoms?.[e]??t.baseAtoms[e]).set(e=>C(n,e))}}function tt(e){if(typeof e!=`object`||!e)return!1;if(Array.isArray(e))return!0;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function nt(e){return Reflect.ownKeys(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}var rt=3;function it(e,t){return at(e,t,rt)}function at(e,t,n){if(Object.is(e,t))return!0;if(n<=0||!tt(e)||!tt(t)||(Array.isArray(e)||Array.isArray(t))&&(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length))return!1;let r=nt(e),i=nt(t);if(r.length!==i.length)return!1;let a=e,o=t;for(let e=0;e<r.length;e++){let i=r[e];if(!Object.prototype.propertyIsEnumerable.call(t,i)||!at(a[i],o[i],n-1))return!1}return!0}function O(e,t,n,r=it){let i=`on${t.charAt(0).toUpperCase()}${t.slice(1)}Change`,a=e.options[i];a&&a(e=>{let t=C(n,e);return r(e,t)?e:t})}function ot(e){return e instanceof Function}function st(e,t){let n=[],r=e=>{e.forEach(e=>{n.push(e);let i=t(e);i.length&&r(i)})};return r(e),n}var ct=({fn:e,memoDeps:t,onAfterCompare:n,onAfterUpdate:r,onBeforeCompare:i,onBeforeUpdate:a})=>{let o=[],s;return c=>{i?.();let l=t?.(c),u=!l||l.length!==o?.length;if(!u&&l){for(let e=0;e<l.length;e++)if(l[e]!==o[e]){u=!0;break}}return n?.(u),u&&(o=l,a?.(),s=e(...l??[]),r?.(s)),s}};function lt(e){let t=!1;return()=>{t?e():t=!0}}function k({feature:e,fnName:t,objectId:n,onAfterUpdate:r,table:i,...a}){let o={onAfterUpdate:r?()=>{let{schedule:e,untrack:t}=i._reactivity;e(()=>t(()=>r()))}:void 0};return ct({...a,...o})}function ut(e,t=`_`){let[n,r]=e.replace(t,` `).split(` `);return{fnKey:r,fnName:`${n}.${r}`,parentName:n}}function A(e,t,n){for(let[r,{fn:i,memoDeps:a}]of Object.entries(n)){let{fnKey:n,fnName:o}=ut(r);t[n]=a?k({memoDeps:a,fn:i,fnName:o,table:t,feature:e}):i}}function j(e,t,n,r){for(let[i,{fn:a,memoDeps:o}]of Object.entries(r)){let{fnKey:r,fnName:s}=ut(i);if(o){let i=`_memo_${r}`;t[r]=function(...t){if(!this[i]){let t=this;this[i]=k({memoDeps:e=>o(t,e),fn:(...e)=>a(t,...e),fnName:s,objectId:t.id,table:n,feature:e})}return this[i](...t)}}else t[r]=function(...e){return a(this,...e)}}}function M(e,t,n,...r){return e[t]?.(...r)??n(e,...r)}function dt(e){return e.row.getValue(e.column.id)}function ft(e){return e.getValue()??e.table.options.renderFallbackValue}function pt(e){return{table:e.table,column:e.column,row:e.row,cell:e,getValue:()=>e.getValue(),renderValue:()=>e.renderValue()}}var mt={assignCellPrototype:(e,t)=>{j(`coreCellsFeature`,e,t,{cell_getValue:{fn:e=>dt(e)},cell_renderValue:{fn:e=>ft(e)},cell_getContext:{fn:e=>pt(e),memoDeps:e=>[e]}})}};function ht(e){if(!e._columnPrototype){e._columnPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignColumnPrototype?.(e._columnPrototype,e)}return e._columnPrototype}function gt(e,t,n,r){let i={...e.getDefaultColumnDef(),...t},a=i.accessorKey,o=a===void 0?void 0:String(a),s=i.id??o?.replaceAll(`.`,`_`)??(typeof i.header==`string`?i.header:void 0),c;if(i.accessorFn)c=i.accessorFn;else if(a!==void 0){if(typeof a==`string`&&a.includes(`.`)){let e=a.split(`.`);c=t=>{let n=t;for(let t=0;t<e.length;t++){let r=e[t];n=n?.[r]}return n}}else c=e=>e[i.accessorKey]}if(!s)throw Error();let l=ht(e),u=Object.create(l);u.accessorFn=c,u.columnDef=i,u.columns=[],u.depth=n,u.id=`${String(s)}`,u.parent=r;let d=e._columnInstanceInitFns;for(let e=0;e<d.length;e++)d[e](u);return u}function N(e){return e.getIsVisible?.()??!0}function P(e){return e.getVisibleLeafColumns?.()??e.getAllLeafColumns()}function _t(e){return e.getVisibleCells?.()??e.getAllCells()}function vt(e){return e.getVisibleCellsByColumnId?.()??e.getAllCellsByColumnId()}function yt(e,t){let n=e,r=t;return n.getOrderColumnsFn?.()(r)??n._orderGroupedColumns?.(r)??t}function bt(e,t,n,r){return e._orderByColumnPinning?.(t,n,r)??t}function F(e,t){return e.getPinnedVisibleLeafColumns?.(t)??(t&&t!==`center`?[]:P(e))}function xt(e){return e.getGlobalFilterFn?.()}function St(e){return e.getCanGlobalFilter?.()??!1}function Ct(e,t){return e._expandRows?.(t)??t}function wt(e){e.autoResetExpanded?.()}function Tt(e){e.autoResetPageIndex?.()}function Et(e){e.autoResetSorting?.()}function Dt(e){e.autoResetCellSelection?.()}function Ot(e){return e._aggregateColumnValue}function kt(e){return[e,...e.columns.flatMap(e=>e.getFlatColumns())]}function At(e){if(e.columns.length){let t=e.columns.flatMap(e=>e.getLeafColumns());return yt(e.table,t)}return[e]}function jt(e){return{header:e=>{let t=e.header.column.columnDef;return t.accessorKey?t.accessorKey:t.accessorFn?t.id:null},cell:e=>e.renderValue()?.toString?.()??null,...Object.values(e._features).reduce((e,t)=>Object.assign(e,t.getDefaultColumnDef?.()),{}),...e.options.defaultColumn}}function Mt(e,t,n,r=0){let i=Array(t.length);for(let a=0;a<t.length;a++){if(!(a in t))continue;let o=t[a],s=gt(e,o,r,n),c=o;s.columns=c.columns?Mt(e,c.columns,s,r+1):[],i[a]=s}return i}function Nt(e){return Mt(e,e.options.columns)}function Pt(e){return e.getAllColumns().flatMap(e=>e.getFlatColumns())}function Ft(e){let t=T(),n=e.getAllFlatColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function It(e){return yt(e,e.getAllColumns().flatMap(e=>e.getLeafColumns()))}function Lt(e){let t=T(),n=e.getAllLeafColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function Rt(e,t){return e.getAllFlatColumnsById()[t]}var zt={assignColumnPrototype:(e,t)=>{j(`coreColumnsFeature`,e,t,{column_getFlatColumns:{fn:e=>kt(e),memoDeps:e=>[e.table.options.columns]},column_getLeafColumns:{fn:e=>At(e),memoDeps:e=>[e.table.atoms.columnOrder?.get(),e.table.atoms.grouping?.get(),e.table.options.columns,e.table.options.groupedColumnMode]}})},constructTableAPIs:e=>{A(`coreColumnsFeature`,e,{table_getDefaultColumnDef:{fn:()=>jt(e),memoDeps:()=>[e.options.defaultColumn]},table_getAllColumns:{fn:()=>Nt(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumns:{fn:()=>Pt(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumnsById:{fn:()=>Ft(e),memoDeps:()=>[e.options.columns]},table_getAllLeafColumns:{fn:()=>It(e),memoDeps:()=>[e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getAllLeafColumnsById:{fn:()=>Lt(e),memoDeps:()=>[e.getAllLeafColumns()]},table_getColumn:{fn:t=>Rt(e,t)}})}};function Bt(e){if(!e._headerPrototype){e._headerPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignHeaderPrototype?.(e._headerPrototype,e)}return e._headerPrototype}function Vt(e,t,n){let r=Bt(e),i=Object.create(r);i.colSpan=0,i.column=t,i.depth=n.depth,i.headerGroup=null,i.id=n.id??t.id,i.index=n.index,i.isPlaceholder=!!n.isPlaceholder,i.placeholderId=n.placeholderId,i.rowSpan=0,i.subHeaders=[];let a=e._headerInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function Ht(e,t=1){let n=t;for(let r=0;r<e.length;r++){let i=e[r];N(i)&&i.columns.length&&(n=Math.max(n,Ht(i.columns,t+1)))}return n}function Ut(e,t){return e?`${e}_${t}`:String(t)}function Wt(e,t,n,r){let i=e??``;return t&&(i=i?`${i}_${t}`:String(t)),n&&(i=i?`${i}_${n}`:n),r&&(i=i?`${i}_${r}`:r),i}function Gt(e,t){let n=0;for(let r=0;r<e.length;r++)e[r].column===t&&n++;return n}function Kt(e,t,n,r,i,a){let o={depth:t,id:Ut(r,t),headers:[]},s=[];for(let i=0;i<e.length;i++){if(!(i in e))continue;let a=e[i],c=s[s.length-1],l=a.column.depth===o.depth,u,d=!1;if(l&&a.column.parent?u=a.column.parent:(u=a.column,d=!0),c&&c.column===u)c.subHeaders.push(a);else{let e=Vt(n,u,{id:Wt(r,t,u.id,a.id),isPlaceholder:d,placeholderId:d?String(Gt(s,u)):void 0,depth:t,index:s.length});e.subHeaders.push(a),s.push(e)}o.headers.push(a),a.headerGroup=o}for(let e=0;e<a.length;e++)a[e](o);i.push(o),t>0&&Kt(s,t-1,n,r,i,a)}function qt(e){for(let t=0;t<e.length;t++){let n=e[t];if(!N(n.column))continue;let r=0;if(n.subHeaders.length){qt(n.subHeaders);for(let e=0;e<n.subHeaders.length;e++){let t=n.subHeaders[e];N(t.column)&&(r+=t.colSpan)}}else r=1;if(n.colSpan=r,n.isPlaceholder&&n.subHeaders.length===1&&n.subHeaders[0].column===n.column){let e=1,t=n.subHeaders[0];for(;t;)t.rowSpan=0,e++,t=t.subHeaders.length===1&&t.subHeaders[0].column===n.column?t.subHeaders[0]:void 0;n.rowSpan=e}else n.rowSpan=1}}function Jt(e,t,n,r){let i=Ht(e),a=[],o=n._headerGroupInstanceInitFns,s=Array(t.length);for(let e=0;e<t.length;e++)e in t&&(s[e]=Vt(n,t[e],{depth:i,index:e}));return Kt(s,i-1,n,r,a,o),a.reverse(),qt(a[0]?.headers??[]),a}function Yt(e,t){for(let n=0;n<e.subHeaders.length;n++)Yt(e.subHeaders[n],t);t.push(e)}function Xt(e){let t=[];return Yt(e,t),t}function Zt(e){return{column:e.column,header:e,table:e.column.table}}function Qt(e){return Jt(e.getAllColumns(),bt(e,P(e),e=>e.id),e)}function $t(e){return[...e.getHeaderGroups()].reverse()}function en(e){let t=e.getHeaderGroups(),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function tn(e){let t=e.getHeaderGroups()[0]?.headers??[],n=[];for(let e=0;e<t.length;e++){let r=t[e].getLeafHeaders();for(let e=0;e<r.length;e++)n.push(r[e])}return n}var nn={assignHeaderPrototype:(e,t)=>{j(`coreHeadersFeature`,e,t,{header_getLeafHeaders:{fn:e=>Xt(e),memoDeps:e=>[e.column.table.options.columns]},header_getContext:{fn:e=>Zt(e),memoDeps:e=>[e.column.table.options.columns]}})},constructTableAPIs:e=>{A(`coreHeadersFeature`,e,{table_getHeaderGroups:{fn:()=>Qt(e),memoDeps:()=>[e.options.columns,e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.options.groupedColumnMode]},table_getFooterGroups:{fn:()=>$t(e),memoDeps:()=>[e.getHeaderGroups()]},table_getFlatHeaders:{fn:()=>en(e),memoDeps:()=>[e.getHeaderGroups()]},table_getLeafHeaders:{fn:()=>tn(e),memoDeps:()=>[e.getHeaderGroups()]}})}};function rn(e){if(!e._rowPrototype){e._rowPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignRowPrototype?.(e._rowPrototype,e)}return e._rowPrototype}var an=(e,t,n,r,i,a,o)=>{let s=rn(e),c=Object.create(s);c._displayIndexCache=-1,c._uniqueValuesCache=T(),c._valuesCache=T(),c.depth=i,c.id=t,c.index=r,c.original=n,c.parentId=o,c.subRows=a??[];let l=e._rowInstanceInitFns;for(let e=0;e<l.length;e++)l[e](c);return c};function on(){return e=>k({feature:`coreRowModelsFeature`,table:e,fnName:`table.getCoreRowModel`,memoDeps:()=>[e.options.data],fn:()=>cn(e,e.options.data),onAfterUpdate:lt(()=>{wt(e),Tt(e),Et(e),Dt(e)})})}function sn(e,t,n,r=0,i){let a=[];for(let o=0;o<n.length;o++){let s=n[o],c=an(e,e.getRowId(s,o,i),s,o,r,void 0,i?.id);t.flatRows.push(c),t.rowsById[c.id]=c,a.push(c),e.options.getSubRows&&(c.originalSubRows=e.options.getSubRows(s,o),c.originalSubRows?.length&&(c.subRows=sn(e,t,c.originalSubRows,r+1,c)))}return a}function cn(e,t){let n={rows:[],flatRows:[],rowsById:T()};return n.rows=sn(e,n,t),n}function ln(e){return e._rowModels.coreRowModel||(e._rowModels.coreRowModel=e.options.features.coreRowModel?.(e)??on()(e)),e._rowModels.coreRowModel()}function un(e){return e.getCoreRowModel()}function dn(e){return e._rowModels.filteredRowModel||(e._rowModels.filteredRowModel=e.options.features.filteredRowModel?.(e)),e.options.manualFiltering||!e._rowModels.filteredRowModel?e.getPreFilteredRowModel():e._rowModels.filteredRowModel()}function fn(e){return e.getFilteredRowModel()}function pn(e){return e._rowModels.groupedRowModel||(e._rowModels.groupedRowModel=e.options.features.groupedRowModel?.(e)),e.options.manualGrouping||!e._rowModels.groupedRowModel?e.getPreGroupedRowModel():e._rowModels.groupedRowModel()}function mn(e){return e.getGroupedRowModel()}function hn(e){return e._rowModels.sortedRowModel||(e._rowModels.sortedRowModel=e.options.features.sortedRowModel?.(e)),e.options.manualSorting||!e._rowModels.sortedRowModel?e.getPreSortedRowModel():e._rowModels.sortedRowModel()}function gn(e){return e.getSortedRowModel()}function _n(e){return e._rowModels.expandedRowModel||(e._rowModels.expandedRowModel=e.options.features.expandedRowModel?.(e)),e.options.manualExpanding||!e._rowModels.expandedRowModel?e.getPreExpandedRowModel():e._rowModels.expandedRowModel()}function vn(e){return e.getExpandedRowModel()}function yn(e){return e._rowModels.paginatedRowModel||(e._rowModels.paginatedRowModel=e.options.features.paginatedRowModel?.(e)),e.options.manualPagination||!e._rowModels.paginatedRowModel?e.getPrePaginatedRowModel():e._rowModels.paginatedRowModel()}function bn(e){return e.getPaginatedRowModel()}var xn={constructTableAPIs:e=>{A(`coreRowModelsFeature`,e,{table_getCoreRowModel:{fn:()=>ln(e)},table_getPreFilteredRowModel:{fn:()=>un(e)},table_getFilteredRowModel:{fn:()=>dn(e)},table_getPreGroupedRowModel:{fn:()=>fn(e)},table_getGroupedRowModel:{fn:()=>pn(e)},table_getPreSortedRowModel:{fn:()=>mn(e)},table_getSortedRowModel:{fn:()=>hn(e)},table_getPreExpandedRowModel:{fn:()=>gn(e)},table_getExpandedRowModel:{fn:()=>_n(e)},table_getPrePaginatedRowModel:{fn:()=>vn(e)},table_getPaginatedRowModel:{fn:()=>yn(e)},table_getRowModel:{fn:()=>bn(e)}})}};function Sn(e){if(!e._cellPrototype){e._cellPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignCellPrototype?.(e._cellPrototype,e)}return e._cellPrototype}function Cn(e,t,n){let r=Sn(n),i=Object.create(r);i.column=e,i.id=`${t.id}_${e.id}`,i.row=t;let a=n._cellInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function wn(e){let t=e.table.getRowsInDisplayOrder(),n=e._displayIndexCache;return t[n]===e?n:-1}function Tn(e){let t=e.getPrePaginatedRowModel(),n=e.options.paginateExpandedRows===!1?Ct(e,t).rows:t.rows;for(let e=0;e<n.length;e++)n[e]._displayIndexCache=e;return n}function En(e,t){if(E(e._valuesCache,t))return e._valuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return e._valuesCache[t]=n.accessorFn(e.original,e.index),e._valuesCache[t]}function Dn(e,t){if(E(e._uniqueValuesCache,t))return e._uniqueValuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return n.columnDef.getUniqueValues?(e._uniqueValuesCache[t]=n.columnDef.getUniqueValues(e.original,e.index),e._uniqueValuesCache[t]):(e._uniqueValuesCache[t]=[e.getValue(t)],e._uniqueValuesCache[t])}function On(e,t){return e.getValue(t)??e.table.options.renderFallbackValue}function kn(e){return st(e.subRows,e=>e.subRows)}function An(e){let t=e.getCoreRowModel().flatRows,n=0;for(let e=0;e<t.length;e++)n=Math.max(n,t[e].depth);return n}function jn(e){if(e.parentId)return e.table.getCoreRowModel().rowsById[e.parentId]??e.table.getRow(e.parentId,!0)}function Mn(e){let t=[],n=e;for(;;){let e=n.getParentRow();if(!e)break;t.push(e),n=e}return t.reverse()}function Nn(e){let t=e.table.getAllLeafColumns(),n=e._cellsCache;n||=e._cellsCache=new WeakMap;let r=Array(t.length);for(let i=0;i<t.length;i++){let a=t[i],o=n.get(a);o||(o=Cn(a,e,e.table),n.set(a,o)),r[i]=o}return r}function Pn(e){let t=T(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];t[r.column.id]=r}return t}function Fn(e,t,n,r){return t.options.getRowId?.(e,n,r)??(r?`${r.id}.${n}`:String(n))}function In(e,t,n){let r=(n?e.getPrePaginatedRowModel():e.getRowModel()).rowsById[t];if(!r&&(r=e.getCoreRowModel().rowsById[t],!r))throw Error();return r}var Ln={assignRowPrototype:(e,t)=>{j(`coreRowsFeature`,e,t,{row_getDisplayIndex:{fn:e=>wn(e)},row_getAllCellsByColumnId:{fn:e=>Pn(e),memoDeps:e=>[e.getAllCells()]},row_getAllCells:{fn:e=>Nn(e),memoDeps:e=>[e.table.getAllLeafColumns()]},row_getLeafRows:{fn:e=>kn(e),memoDeps:e=>[e.subRows]},row_getParentRow:{fn:e=>jn(e)},row_getParentRows:{fn:e=>Mn(e)},row_getUniqueValues:{fn:(e,t)=>Dn(e,t)},row_getValue:{fn:(e,t)=>En(e,t)},row_renderValue:{fn:(e,t)=>On(e,t)}})},constructTableAPIs:e=>{A(`coreRowsFeature`,e,{table_getRowsInDisplayOrder:{fn:()=>Tn(e),memoDeps:()=>[e.getPrePaginatedRowModel().rows,e.options.paginateExpandedRows,e.options.paginateExpandedRows===!1?e.atoms.expanded?.get():void 0]},table_getRowId:{fn:(t,n,r)=>Fn(t,e,n,r)},table_getRow:{fn:(t,n)=>In(e,t,n)},table_getMaxSubRowDepth:{fn:()=>An(e),memoDeps:()=>[e.getCoreRowModel()]}})}};function Rn(e,t,n=(e,t)=>e===t){let r=t===void 0?e.options.state:t;e._reactivity.batch(()=>{if(r)for(let t in r){let i=e.baseAtoms[t];if(!i)continue;let a=r[t],o=a===void 0?e.initialState[t]:a;n(e._reactivity.untrack(()=>i.get()),o)||i.set(()=>o)}})}function zn(e,t,n=(e,t)=>e===t){e._reactivity.batch(()=>{Rn(e,t,n),e._reactivity.commit?.()})}function Bn(e){let t=w(e.initialState);e._reactivity.batch(()=>{let n=Object.keys(t);for(let r=0;r<n.length;r++){let i=n[r];e.baseAtoms[i].set(t[i])}});let n=Object.values(e._features);for(let t=0;t<n.length;t++)n[t].resetTableInstanceData?.(e)}function Vn(e,t){let{features:n,atoms:r,initialState:i}=e.options;if(!e.options.mergeOptions)return{...e.options,...t,features:n,atoms:r,initialState:i};let a=e.options.mergeOptions(e.options,t),o={...Object.getOwnPropertyDescriptors(a)};return Object.defineProperties(Object.create(Object.getPrototypeOf(a)),{...o,features:{value:n,enumerable:!0,configurable:!0,writable:!0},atoms:{value:r,enumerable:!0,configurable:!0,writable:!0},initialState:{value:i,enumerable:!0,configurable:!0,writable:!0}})}function Hn(e,t,n){let r=Vn(e,C(t,e.options));e.optionsStore?e.optionsStore.set(()=>r):e.options=r,n?.syncExternalState!==!1&&zn(e,r.state??null)}var Un={coreCellsFeature:mt,coreColumnsFeature:zt,coreHeadersFeature:nn,coreRowModelsFeature:xn,coreRowsFeature:Ln,coreTablesFeature:{constructTableAPIs:e=>{A(`coreTablesFeature`,e,{table_reset:{fn:()=>Bn(e)},table_setOptions:{fn:t=>Hn(e,t)}})}}};function I(){return{accessor:(e,t)=>typeof e==`function`?{...t,accessorFn:e}:{...t,accessorKey:e},columns:e=>e,display:e=>e,group:e=>e}}function Wn(){return{}}function Gn(e){return e}function Kn(e,t={}){return Object.values(e).forEach(e=>{t=e.getInitialState?.(t)??t}),w(t)}function qn(e){let t=e.features.coreReactivityFeature,{aggregationFns:n,columnMeta:r,coreRowModel:i,expandedRowModel:a,facetedMinMaxValues:o,facetedRowModel:s,facetedUniqueValues:c,filterFns:l,filterMeta:u,filteredRowModel:d,groupedRowModel:ee,paginatedRowModel:f,sortFns:p,sortedRowModel:m,tableMeta:te,...ne}=e.features,h={_cellInstanceInitFns:[],_columnInstanceInitFns:[],_features:{...Un,...ne},_headerGroupInstanceInitFns:[],_headerInstanceInitFns:[],_reactivity:t,_rowInstanceInitFns:[],_rowModelFns:{aggregationFns:n,filterFns:l,sortFns:p},_rowModels:{},atoms:{},baseAtoms:{}},re=Object.values(h._features),g={...re.reduce((e,t)=>Object.assign(e,t.getDefaultTableOptions?.(h)),{}),...e};if(t.wrapExternalAtoms&&g.atoms)for(let[e,n]of Object.entries(g.atoms)){let r=n,i=t.createWritableAtom(r.get(),{debugName:`externalAtom/${e}`});g.atoms[e]=i;let a=!1,o=r.subscribe(e=>{a||i.set(e)}),s=i.subscribe(e=>{a=!0,r.set(e),a=!1});t.addSubscription(o),t.addSubscription(s)}t.createOptionsStore?(h.optionsStore=t.createWritableAtom(g,{debugName:`table/optionsStore`}),Object.defineProperty(h,"options",{configurable:!0,enumerable:!0,get(){return h.optionsStore.get()},set(e){h.optionsStore.set(()=>e)}})):h.options=g,h.initialState=Kn(h._features,h.options.initialState);let ie=Object.keys(h.initialState);for(let e=0;e<ie.length;e++){let n=ie[e];h.baseAtoms[n]=t.createWritableAtom(h.initialState[n],{debugName:`table/baseAtoms/${n}`}),h.atoms[n]=t.createReadonlyAtom(()=>{let e=h.options,t=e.atoms?.[n],r=t?t.get():h.baseAtoms[n].get();if(t)return r;let i=e.state;if(i&&E(i,n)){let e=i[n];return e===void 0?h.initialState[n]:e}return r},{debugName:`table/atoms/${n}`})}Rn(h),h.store=Xe(t.createReadonlyAtom(()=>{let e={};for(let t=0;t<ie.length;t++){let n=ie[t];e[n]=h.atoms[n].get()}return e},{compare:We,debugName:`table/store`}));for(let e=0;e<re.length;e++){let t=re[e];t.initTableInstanceData?.(h),t.initCellInstanceData&&h._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)),t.initColumnInstanceData&&h._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)),t.initHeaderGroupInstanceData&&h._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)),t.initHeaderInstanceData&&h._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)),t.initRowInstanceData&&h._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)),t.constructTableAPIs?.(h)}return h}function Jn(e){return!!e&&typeof e==`object`&&`aggregate`in e}function Yn(e){return!!e&&typeof e==`object`&&`id`in e&&`aggregationFn`in e}function Xn(e){return e===void 0||Number.isNaN(e)?0:Math.max(0,Math.floor(e))}function Zn(e,t,n,r,i){if(e.subRows.length&&t<n)for(let a=0;a<e.subRows.length;a++)Zn(e.subRows[a],t+1,n,r,i);else r.has(e.id)||(r.add(e.id),i.push(e))}function Qn(e,t,n,r){if(e.subRows.length&&t<n)for(let i=0;i<e.subRows.length;i++)Qn(e.subRows[i],t+1,n,r);else r.push(e)}function $n(e,t=0){let n=[],r=new Set,i=Xn(t);for(let t=0;t<e.length;t++)Zn(e[t],0,i,r,n);return n}function er(e,t=0){let n=Xn(t),r=!1;if(n>0){for(let t=0;t<e.length;t++)if(e[t].subRows.length){r=!0;break}}if(!r)return e;let i=[];for(let t=0;t<e.length;t++)Qn(e[t],0,n,i);return i}function tr(e){if(typeof e==`number`)return`sum`;if(e instanceof Date&&!Number.isNaN(e.getTime()))return`extent`}function nr(e){let t=e.table.getCoreRowModel().flatRows[0]?.getValue(e.id),n=tr(t);if(n)return e.table._rowModelFns.aggregationFns?.[n]}function rr(e,t){return Jn(t)?t:t===`auto`?nr(e):e.table._rowModelFns.aggregationFns?.[t]}function ir(e){let t=e.columnDef.aggregationFn,n=e.table._rowModelFns.aggregationFns,r=e.table.getCoreRowModel(),i=e._resolvedAggregationFnsCache;if(i&&i.option===t&&i.registry===n&&i.coreRowModel===r)return i.value;let a=i=>(e._resolvedAggregationFnsCache={coreRowModel:r,option:t,registry:n,value:i},i);if(t==null)return a([]);if(!Array.isArray(t))return a([{aggregationFn:rr(e,t),id:typeof t==`string`?t:void 0}]);let o=T();for(let e=0;e<t.length;e++){let n=t[e],r=typeof n==`string`?n:Yn(n)?n.id:void 0;r!==void 0&&(o[r]=(o[r]??0)+1)}let s=[];for(let n=0;n<t.length;n++){let r=t[n],i=typeof r==`string`?r:Yn(r)?r.id:void 0;if(i===void 0){s.push({aggregationFn:void 0,id:void 0});continue}if(o[i]>1){s.push({aggregationFn:void 0,id:i});continue}let a=Yn(r)?r.aggregationFn:r;s.push({aggregationFn:rr(e,a),id:i})}return a(s)}function ar(e,t,n){if(!t)return e;if(n&&e&&typeof e==`object`)return E(e,n)?e[n]:void 0}function or(e){let{subRows:t,column:n,groupingRow:r,rows:i,uniqueRows:a}=e,o=n,s=Xn(e.maxDepth??o.columnDef.maxAggregationDepth),c=a?er(i,s):$n(i,s),l=ir(o),u=Array.isArray(o.columnDef.aggregationFn),d=!!t?.length&&t.every(e=>!!e.groupingColumnId&&e.groupingColumnId!==n.id),ee=e=>e.getValue(n.id),f=e=>{let i=e.aggregationFn;if(!i)return;let a={...t?{subRows:t}:{},column:n,columnId:n.id,getValue:ee,...r?{groupingRow:r}:{},maxDepth:s,rows:c,table:n.table};return d&&i.merge?i.merge({...a,subRowResults:t.map(t=>ar(t.getValue(n.id),u,e.id)),subRows:t}):i.aggregate(a)};if(!u)return l[0]?f(l[0]):void 0;let p=T();for(let e=0;e<l.length;e++){let t=l[e];t.id!==void 0&&(p[t.id]=f(t))}return p}function sr(e,t){let n=t?.rows,r=Xn(t?.maxDepth??e.columnDef.maxAggregationDepth),i=e.columnDef.getAggregationValue?.({column:e,maxDepth:r,rows:n,table:e.table});if(i)return i.value;if(e.table.options.manualAggregation)return;if(n!==void 0)return or({column:e,maxDepth:r,rows:n});let a=e.table.getPreGroupedRowModel(),o=e._aggregationValueCache,s=e.table._rowModelFns.aggregationFns,c=e.columnDef.aggregationFn;if(o&&o.dependency===a&&o.maxDepth===r&&o.registry===s&&o.aggregationFnOption===c)return o.value;let l=or({column:e,maxDepth:r,rows:a.rows,uniqueRows:!0});return e._aggregationValueCache={aggregationFnOption:c,dependency:a,maxDepth:r,registry:s,value:l},l}function cr(e){let t=e.row.groupingColumnId;return!t||t===e.column.id||(e.column.table.atoms.grouping?.get?.())?.includes(e.column.id)?!1:ir(e.column).some(e=>!!e.aggregationFn)}function lr(e,t){return e==null?null:Array.isArray(t)&&typeof e==`object`?Object.keys(e).map(t=>`${t}: ${String(e[t])}`).join(`, `):String(e)}var ur={getDefaultColumnDef:()=>({aggregatedCell:({column:e,getValue:t})=>lr(t(),e.columnDef.aggregationFn),aggregationFn:`auto`,maxAggregationDepth:0}),getDefaultTableOptions:()=>({manualAggregation:!1}),assignCellPrototype:(e,t)=>{j(`rowAggregationFeature`,e,t,{cell_getIsAggregated:{fn:e=>cr(e)}})},assignColumnPrototype:(e,t)=>{j(`rowAggregationFeature`,e,t,{column_getAggregationFns:{fn:e=>ir(e)},column_getAggregationValue:{fn:(e,t)=>sr(e,t)},column_getAutoAggregationFn:{fn:e=>nr(e),memoDeps:e=>[e.table.getCoreRowModel(),e.table._rowModelFns.aggregationFns]}})},initColumnInstanceData:e=>{e._aggregationValueCache=void 0,e._resolvedAggregationFnsCache=void 0},constructTableAPIs:e=>{A(`rowAggregationFeature`,e,{table__aggregateColumnValue:{fn:or}})}};function dr(){return[]}function fr(e){let t=e.table._rowModelFns.filterFns,n=e.table.getCoreRowModel().flatRows,r;for(let t=0;t<n.length;t++){let i=n[t].getValue(e.id);if(i!=null){r=i;break}}let i;return i=typeof r==`string`?`includesString`:typeof r==`number`?`inNumberRange`:typeof r==`boolean`?`equals`:Array.isArray(r)?`arrIncludes`:Object.prototype.toString.call(r)===`[object Date]`?`inDateRange`:typeof r==`object`&&r?`equals`:`weakEquals`,t?.[i]}function pr(e){let t=null,n=e.table._rowModelFns.filterFns;return t=ot(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn===`auto`?fr(e):n?.[e.columnDef.filterFn],t??void 0}function mr(e){return(e.columnDef.enableColumnFilter??!0)&&(e.table.options.enableColumnFilters??!0)&&(e.table.options.enableFilters??!0)&&!!e.accessorFn}function hr(e){return _r(e)>-1}function gr(e){return e.table.atoms.columnFilters?.get()?.find(t=>t.id===e.id)?.value}function _r(e){return e.table.atoms.columnFilters?.get()?.findIndex(t=>t.id===e.id)??-1}function vr(e,t){yr(e.table,n=>{let r=pr(e),i=n.find(t=>t.id===e.id),a=C(t,i?i.value:void 0);if(xr(r,a,e))return n.filter(t=>t.id!==e.id);let o={id:e.id,value:a};return i?n.map(t=>t.id===e.id?o:t):n.length?[...n,o]:[o]})}function yr(e,t){let n=e.getAllLeafColumnsById();O(e,`columnFilters`,e=>C(t,e).filter(e=>{let t=n[e.id];return!(t&&xr(pr(t),e.value,t))}))}function br(e,t){yr(e,t?[]:w(e.initialState.columnFilters??[]))}function xr(e,t,n){return t===void 0?!0:e?.autoRemove?!!e.autoRemove(t,n):typeof t==`string`&&!t}var Sr={getInitialState:e=>({columnFilters:dr(),...e}),getDefaultColumnDef:()=>({filterFn:`auto`}),getDefaultTableOptions:e=>({onColumnFiltersChange:D(`columnFilters`,e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),assignColumnPrototype:(e,t)=>{j(`columnFilteringFeature`,e,t,{column_getAutoFilterFn:{fn:e=>fr(e)},column_getFilterFn:{fn:e=>pr(e)},column_getCanFilter:{fn:e=>mr(e)},column_getIsFiltered:{fn:e=>hr(e)},column_getFilterValue:{fn:e=>gr(e)},column_getFilterIndex:{fn:e=>_r(e)},column_setFilterValue:{fn:(e,t)=>vr(e,t)}})},initRowInstanceData:e=>{e.columnFilters=T(),e.columnFiltersMeta=T()},constructTableAPIs:e=>{A(`columnFilteringFeature`,e,{table_setColumnFilters:{fn:t=>yr(e,t)},table_resetColumnFilters:{fn:t=>br(e,t)}})}};function Cr(e,t){let n=e.atoms.grouping?.get()??[],{groupedColumnMode:r}=e.options;if(!n.length||!r)return t;let i=t.filter(e=>!n.includes(e.id));if(r===`remove`)return i;let a=new Map;for(let e=0;e<t.length;e++){let n=t[e];a.set(n.id,n)}let o=[];for(let e=0;e<n.length;e++){let t=a.get(n[e]);t&&o.push(t)}return[...o,...i]}function wr(){return[]}function Tr(e){Ar(e.table,t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id])}function Er(e){return(e.columnDef.enableGrouping??!0)&&(e.table.options.enableGrouping??!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)}function Dr(e){return!!e.table.atoms.grouping?.get()?.includes(e.id)}function Or(e){return e.table.atoms.grouping?.get()?.indexOf(e.id)??-1}function kr(e){let t=Er(e);return()=>{t&&Tr(e)}}function Ar(e,t){O(e,`grouping`,t)}function jr(e,t){Ar(e,t?[]:w(e.initialState.grouping??[]))}function Mr(e){return!!e.groupingColumnId}function Nr(e,t){if(e._groupingValuesCache&&E(e._groupingValuesCache,t))return e._groupingValuesCache[t];let n=e.table.getColumn(t);return n.columnDef.getGroupingValue?(e._groupingValuesCache&&(e._groupingValuesCache[t]=n.columnDef.getGroupingValue(e.original,e.index,e)),e._groupingValuesCache?.[t]):e.getValue(t)}function Pr(e){let t=e.row;return Dr(e.column)&&e.column.id===t.groupingColumnId}function Fr(e){return!Pr(e)&&Dr(e.column)}var Ir={getInitialState:e=>({grouping:wr(),...e}),getDefaultTableOptions:e=>({onGroupingChange:D(`grouping`,e),groupedColumnMode:`reorder`}),assignCellPrototype:(e,t)=>{j(`columnGroupingFeature`,e,t,{cell_getIsGrouped:{fn:e=>Pr(e)},cell_getIsPlaceholder:{fn:e=>Fr(e)}})},assignColumnPrototype:(e,t)=>{j(`columnGroupingFeature`,e,t,{column_toggleGrouping:{fn:e=>Tr(e)},column_getCanGroup:{fn:e=>Er(e)},column_getIsGrouped:{fn:e=>Dr(e)},column_getGroupedIndex:{fn:e=>Or(e)},column_getToggleGroupingHandler:{fn:e=>kr(e)}})},assignRowPrototype:(e,t)=>{j(`columnGroupingFeature`,e,t,{row_getIsGrouped:{fn:e=>Mr(e)},row_getGroupingValue:{fn:(e,t)=>Nr(e,t)}})},initRowInstanceData:e=>{e._groupingValuesCache=T()},constructTableAPIs:e=>{A(`columnGroupingFeature`,e,{table_setGrouping:{fn:t=>Ar(e,t)},table_resetGrouping:{fn:t=>jr(e,t)},table__orderGroupedColumns:{fn:t=>Cr(e,t)}})}};function L(){return{start:[],end:[]}}function Lr(e,t){let n=e.getLeafColumns(),r=[];for(let e=0;e<n.length;e++){let t=n[e].id;t&&r.push(t)}Wr(e.table,e=>t===`end`?{start:e.start.filter(e=>!r.includes(e)),end:[...e.end.filter(e=>!r.includes(e)),...r]}:t===`start`?{start:[...e.start.filter(e=>!r.includes(e)),...r],end:e.end.filter(e=>!r.includes(e))}:{start:e.start.filter(e=>!r.includes(e)),end:e.end.filter(e=>!r.includes(e))})}function Rr(e){return e.getLeafColumns().some(t=>(t.columnDef.enablePinning??!0)&&(e.table.options.enableColumnPinning??!0))}function zr(e){let t=e.getLeafColumns(),{start:n,end:r}=e.table.atoms.columnPinning?.get()??L();for(let e=0;e<t.length;e++)if(n.includes(t[e].id))return`start`;for(let e=0;e<t.length;e++)if(r.includes(t[e].id))return`end`;return!1}function Br(e){let t=zr(e);return t?e.table.atoms.columnPinning?.get()?.[t].indexOf(e.id)??-1:0}function Vr(e){let t=_t(e),{start:n,end:r}=e.table.atoms.columnPinning?.get()??L();if(!n.length&&!r.length)return t;let i=[...n,...r];return t.filter(e=>!i.includes(e.column.id))}function Hr(e){let{start:t}=e.table.atoms.columnPinning?.get()??L();if(!t.length)return[];let n=vt(e),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&(i.position=`start`,r.push(i))}return r}function Ur(e){let{end:t}=e.table.atoms.columnPinning?.get()??L();if(!t.length)return[];let n=vt(e),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&(i.position=`end`,r.push(i))}return r}function Wr(e,t){O(e,`columnPinning`,t)}function Gr(e,t){Wr(e,t?L():w(e.initialState.columnPinning??L()))}function Kr(e,t){let n=e.atoms.columnPinning?.get();return t?!!n?.[t].length:!!(n?.start.length||n?.end.length)}function R(e){let t=e.getAllColumns(),n=e.getAllLeafColumnsById(),{start:r}=e.atoms.columnPinning?.get()??L(),i=[];for(let e=0;e<r.length;e++){let t=n[r[e]];t&&N(t)&&i.push(t)}return Jt(t,i,e,`start`)}function qr(e){let t=e.getAllColumns(),n=e.getAllLeafColumnsById(),{end:r}=e.atoms.columnPinning?.get()??L(),i=[];for(let e=0;e<r.length;e++){let t=n[r[e]];t&&N(t)&&i.push(t)}return Jt(t,i,e,`end`)}function z(e){let t=e.getAllColumns(),n=P(e),{start:r,end:i}=e.atoms.columnPinning?.get()??L();if(r.length||i.length){let e=[...r,...i];n=n.filter(t=>!e.includes(t.id))}return Jt(t,n,e,`center`)}function Jr(e){return[...M(e,`getStartHeaderGroups`,R)].reverse()}function Yr(e){return[...M(e,`getEndHeaderGroups`,qr)].reverse()}function Xr(e){return[...M(e,`getCenterHeaderGroups`,z)].reverse()}function Zr(e){let t=M(e,`getStartHeaderGroups`,R),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Qr(e){let t=M(e,`getEndHeaderGroups`,qr),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function $r(e){let t=M(e,`getCenterHeaderGroups`,z),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function ei(e){return M(e,`getStartFlatHeaders`,Zr).filter(e=>!e.subHeaders.length)}function ti(e){return M(e,`getEndFlatHeaders`,Qr).filter(e=>!e.subHeaders.length)}function ni(e){return M(e,`getCenterFlatHeaders`,$r).filter(e=>!e.subHeaders.length)}function ri(e){let{start:t}=e.atoms.columnPinning?.get()??L(),n=e.getAllLeafColumnsById(),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&r.push(i)}return r}function ii(e){let{end:t}=e.atoms.columnPinning?.get()??L(),n=e.getAllLeafColumnsById(),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&r.push(i)}return r}function ai(e){let{start:t,end:n}=e.atoms.columnPinning?.get()??L();if(!t.length&&!n.length)return e.getAllLeafColumns();let r=[...t,...n];return e.getAllLeafColumns().filter(e=>!r.includes(e.id))}function oi(e,t){return t?t===`start`?M(e,`getStartLeafColumns`,ri):t===`end`?M(e,`getEndLeafColumns`,ii):M(e,`getCenterLeafColumns`,ai):e.getAllLeafColumns()}function si(e){return M(e,`getStartLeafColumns`,ri).filter(e=>N(e))}function ci(e){return M(e,`getEndLeafColumns`,ii).filter(e=>N(e))}function li(e){return M(e,`getCenterLeafColumns`,ai).filter(e=>N(e))}function ui(e,t){return t?t===`start`?M(e,`getStartVisibleLeafColumns`,si):t===`end`?M(e,`getEndVisibleLeafColumns`,ci):M(e,`getCenterVisibleLeafColumns`,li):P(e)}function di(e,t,n,r){let i=e.atoms.columnPinning?.get();if(!i||!i.start.length&&!i.end.length)return t;let{start:a,end:o}=i,s=r?.();if(!s){s=T();for(let e=0;e<t.length;e++)s[n(t[e])]=t[e]}let c=[];for(let e=0;e<a.length;e++){let t=s[a[e]];t&&c.push(t)}for(let e=0;e<t.length;e++){let r=n(t[e]);!a.includes(r)&&!o.includes(r)&&c.push(t[e])}for(let e=0;e<o.length;e++){let t=s[o[e]];t&&c.push(t)}return c}var fi={getInitialState:e=>({columnPinning:{...L(),...e.columnPinning},...e}),getDefaultTableOptions:e=>({onColumnPinningChange:D(`columnPinning`,e)}),assignColumnPrototype:(e,t)=>{j(`columnPinningFeature`,e,t,{column_pin:{fn:(e,t)=>Lr(e,t)},column_getCanPin:{fn:e=>Rr(e)},column_getPinnedIndex:{fn:e=>Br(e)},column_getIsPinned:{fn:e=>zr(e)}})},assignRowPrototype:(e,t)=>{j(`columnPinningFeature`,e,t,{row_getCenterVisibleCells:{fn:e=>Vr(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get(),e.table.atoms.columnVisibility?.get()]},row_getStartVisibleCells:{fn:e=>Hr(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get()?.start,e.table.atoms.columnVisibility?.get()]},row_getEndVisibleCells:{fn:e=>Ur(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get()?.end,e.table.atoms.columnVisibility?.get()]}})},constructTableAPIs:e=>{A(`columnPinningFeature`,e,{table_setColumnPinning:{fn:t=>Wr(e,t)},table_resetColumnPinning:{fn:t=>Gr(e,t)},table_getIsSomeColumnsPinned:{fn:t=>Kr(e,t)},table__orderByColumnPinning:{fn:(t,n,r)=>di(e,t,n,r)},table_getStartHeaderGroups:{fn:()=>R(e),memoDeps:()=>[e.getAllColumns(),P(e),e.atoms.columnPinning?.get()?.start,e.atoms.columnOrder?.get()]},table_getCenterHeaderGroups:{fn:()=>z(e),memoDeps:()=>[e.getAllColumns(),P(e),e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get()]},table_getEndHeaderGroups:{fn:()=>qr(e),memoDeps:()=>[e.getAllColumns(),P(e),e.atoms.columnPinning?.get()?.end,e.atoms.columnOrder?.get()]},table_getStartFooterGroups:{fn:()=>Jr(e),memoDeps:()=>[M(e,`getStartHeaderGroups`,R)]},table_getCenterFooterGroups:{fn:()=>Xr(e),memoDeps:()=>[M(e,`getCenterHeaderGroups`,z)]},table_getEndFooterGroups:{fn:()=>Yr(e),memoDeps:()=>[M(e,`getEndHeaderGroups`,qr)]},table_getStartFlatHeaders:{fn:()=>Zr(e),memoDeps:()=>[M(e,`getStartHeaderGroups`,R)]},table_getEndFlatHeaders:{fn:()=>Qr(e),memoDeps:()=>[M(e,`getEndHeaderGroups`,qr)]},table_getCenterFlatHeaders:{fn:()=>$r(e),memoDeps:()=>[M(e,`getCenterHeaderGroups`,z)]},table_getStartLeafHeaders:{fn:()=>ei(e),memoDeps:()=>[M(e,`getStartHeaderGroups`,R)]},table_getEndLeafHeaders:{fn:()=>ti(e),memoDeps:()=>[M(e,`getEndHeaderGroups`,qr)]},table_getCenterLeafHeaders:{fn:()=>ni(e),memoDeps:()=>[M(e,`getCenterHeaderGroups`,z)]},table_getStartLeafColumns:{fn:()=>ri(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getEndLeafColumns:{fn:()=>ii(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getCenterLeafColumns:{fn:()=>ai(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getPinnedLeafColumns:{fn:t=>oi(e,t)},table_getStartVisibleLeafColumns:{fn:()=>si(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getCenterVisibleLeafColumns:{fn:()=>li(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getEndVisibleLeafColumns:{fn:()=>ci(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getPinnedVisibleLeafColumns:{fn:t=>ui(e,t)}})}};function pi(){return T()}function mi(){return{size:150,minSize:20,maxSize:2**53-1}}function hi(e){let t=mi(),n=e.table.atoms.columnSizing?.get(),r=n&&E(n,e.id)?n[e.id]:void 0;return Math.min(Math.max(e.columnDef.minSize??t.minSize,r??e.columnDef.size??t.size),e.columnDef.maxSize??t.maxSize)}function gi(e){let t=T(),n=T(),r=Array(e.length),i=0;for(let n=0;n<e.length;n++){let a=e[n],o=M(a,`getSize`,hi);r[n]=o,t[a.id]=i,i+=o}let a=0;for(let t=e.length-1;t>=0;t--)n[e[t].id]=a,a+=r[t];return{starts:t,afters:n}}function _i(e){return{all:gi(F(e)),center:gi(F(e,`center`)),start:gi(F(e,`start`)),end:gi(F(e,`end`))}}function vi(e){return e===`start`?`start`:e===`end`?`end`:e===`center`?`center`:`all`}function yi(e,t){return M(e.table,`getColumnOffsets`,_i)[vi(t)].starts[e.id]??0}function bi(e,t){return M(e.table,`getColumnOffsets`,_i)[vi(t)].afters[e.id]??0}function xi(e){Ti(e.table,t=>{let n=T(),r=Object.keys(t);for(let i=0;i<r.length;i++){let a=r[i];a!==e.id&&(n[a]=t[a])}return n})}function Si(e){if(!e.subHeaders.length)return hi(e.column);let t=0;for(let n=0;n<e.subHeaders.length;n++)t+=Si(e.subHeaders[n]);return t}function Ci(e){return Si(e)}function wi(e){if(e.index>0){let t=e.headerGroup?.headers[e.index-1];if(t)return M(t,`getStart`,wi)+M(t,`getSize`,Ci)}return 0}function Ti(e,t){e.options.onColumnSizingChange?.(t)}function Ei(e,t){Ti(e,t?T():Object.assign(T(),w(e.initialState.columnSizing??{})))}function Di(e){let t=0;for(let n=0;n<e.length;n++)t+=M(e[n],`getSize`,hi);return t}function Oi(e){return e.getHeaderGroups()[0]?.headers.reduce((e,t)=>e+Ci(t),0)??0}function ki(e){return Di(F(e,`start`))}function Ai(e){return Di(F(e,`center`))}function ji(e){return Di(F(e,`end`))}var Mi={getInitialState:e=>({columnSizing:pi(),...e}),getDefaultColumnDef:()=>mi(),getDefaultTableOptions:e=>({onColumnSizingChange:D(`columnSizing`,e)}),assignColumnPrototype:(e,t)=>{j(`columnSizingFeature`,e,t,{column_getSize:{fn:e=>hi(e),memoDeps:e=>[t.options.columns,t.atoms.columnSizing?.get()?.[e.id]]},column_getStart:{fn:(e,t)=>yi(e,t)},column_getAfter:{fn:(e,t)=>bi(e,t)},column_resetSize:{fn:e=>xi(e)}})},assignHeaderPrototype:(e,t)=>{j(`columnSizingFeature`,e,t,{header_getSize:{fn:e=>Ci(e),memoDeps:e=>[t.options.columns,e.column.columns.length>0?t.atoms.columnSizing?.get():t.atoms.columnSizing?.get()?.[e.column.id]]},header_getStart:{fn:e=>wi(e),memoDeps:()=>[t.options.columns,t.atoms.columnSizing?.get(),t.atoms.columnOrder?.get(),t.atoms.columnPinning?.get(),t.atoms.columnVisibility?.get(),t.atoms.grouping?.get(),t.options.groupedColumnMode]}})},constructTableAPIs:e=>{A(`columnSizingFeature`,e,{table_getColumnOffsets:{fn:()=>_i(e),memoDeps:()=>[e.options.columns,e.atoms.columnSizing?.get(),e.atoms.columnOrder?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_setColumnSizing:{fn:t=>Ti(e,t)},table_resetColumnSizing:{fn:t=>Ei(e,t)},table_getTotalSize:{fn:()=>Oi(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getStartTotalSize:{fn:()=>ki(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getCenterTotalSize:{fn:()=>Ai(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getEndTotalSize:{fn:()=>ji(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]}})}};function Ni(){return T()}function Pi(e,t){Fi(e)&&Vi(e.table,n=>{let r=Object.assign(T(),n),i=t??!M(e,`getIsVisible`,B),a=e.getLeafColumns();for(let e=0;e<a.length;e++){let t=a[e];Fi(t)&&(r[t.id]=i)}return r})}function B(e){let t=e.table.atoms.columnVisibility?.get();if(!t)return!0;let n=e.columns;return n.length?n.some(e=>M(e,`getIsVisible`,B)):(E(t,e.id)?t[e.id]:void 0)??!0}function Fi(e){return(e.columnDef.enableHiding??!0)&&(e.table.options.enableHiding??!0)}function Ii(e){return t=>{Pi(e,t.target.checked)}}function Li(e){let t=e.getAllCells(),n=[];for(let e=0;e<t.length;e++){let r=t[e];M(r.column,`getIsVisible`,B)&&n.push(r)}return bt(e.table,n,e=>e.column.id,()=>M(e,`getVisibleCellsByColumnId`,Ri))}function Ri(e){let t=T(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];M(r.column,`getIsVisible`,B)&&(t[r.column.id]=r)}return t}function zi(e){return e.getAllFlatColumns().filter(e=>M(e,`getIsVisible`,B))}function Bi(e){return e.getAllLeafColumns().filter(e=>M(e,`getIsVisible`,B))}function Vi(e,t){O(e,`columnVisibility`,t)}function Hi(e,t){Vi(e,t?T():Object.assign(T(),w(e.initialState.columnVisibility??{})))}function Ui(e,t){t??=!Wi(e);let n=T(),r=e.getAllLeafColumns();for(let e=0;e<r.length;e++){let i=r[e];n[i.id]=t||!Fi(i)}Vi(e,n)}function Wi(e){return!e.getAllLeafColumns().some(e=>!M(e,`getIsVisible`,B))}function Gi(e){return e.getAllLeafColumns().some(e=>M(e,`getIsVisible`,B))}function Ki(e){return t=>{Ui(e,t.target.checked)}}var qi={getInitialState:e=>({columnVisibility:Ni(),...e}),getDefaultTableOptions:e=>({onColumnVisibilityChange:D(`columnVisibility`,e)}),assignColumnPrototype:(e,t)=>{j(`columnVisibilityFeature`,e,t,{column_getIsVisible:{fn:e=>B(e),memoDeps:e=>[t.options.columns,t.atoms.columnVisibility?.get(),e.columns]},column_getCanHide:{fn:e=>Fi(e)},column_getToggleVisibilityHandler:{fn:e=>Ii(e)},column_toggleVisibility:{fn:(e,t)=>Pi(e,t)}})},assignRowPrototype:(e,t)=>{j(`columnVisibilityFeature`,e,t,{row_getVisibleCells:{fn:e=>Li(e),memoDeps:e=>[e.getAllCells(),t.atoms.columnPinning?.get(),t.atoms.columnVisibility?.get()]},row_getVisibleCellsByColumnId:{fn:e=>Ri(e),memoDeps:e=>[e.getAllCells(),t.atoms.columnVisibility?.get()]}})},constructTableAPIs:e=>{A(`columnVisibilityFeature`,e,{table_getVisibleFlatColumns:{fn:()=>zi(e),memoDeps:()=>[e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getVisibleLeafColumns:{fn:()=>Bi(e),memoDeps:()=>[e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_setColumnVisibility:{fn:t=>Vi(e,t)},table_resetColumnVisibility:{fn:t=>Hi(e,t)},table_toggleAllColumnsVisible:{fn:t=>Ui(e,t)},table_getIsAllColumnsVisible:{fn:()=>Wi(e)},table_getIsSomeColumnsVisible:{fn:()=>Gi(e)},table_getToggleAllColumnsVisibilityHandler:{fn:()=>Ki(e)}})}};function Ji(e){let t=Object.assign((e,n,r,i)=>{let a=e.getValue(n),o=t.resolveDataValue?t.resolveDataValue(a):a;return t.filter(o,r,e,n,i)},e);return t}var Yi=Ji({filter:(e,t)=>!!e?.includes(t),autoRemove:e=>Xi(e),resolveFilterValue:e=>String(e).toLowerCase(),resolveDataValue:e=>e==null?void 0:String(e).toLowerCase()});function Xi(e){return e==null||e===``}function Zi(e){return(e.columnDef.enableGlobalFilter??!0)&&(e.table.options.enableGlobalFilter??!0)&&(e.table.options.enableFilters??!0)&&(e.table.options.getColumnCanGlobalFilter?.(e)??!0)&&!!e.accessorFn}function Qi(){return Yi}function $i(e){let{globalFilterFn:t}=e.options,n=e._rowModelFns.filterFns;return ot(t)?t:t===`auto`?Qi():n?.[t]}function ea(e,t){e.options.onGlobalFilterChange?.(t)}function ta(e,t){ea(e,t?void 0:w(e.initialState.globalFilter))}var na={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultTableOptions:e=>({onGlobalFilterChange:D(`globalFilter`,e),globalFilterFn:`auto`,getColumnCanGlobalFilter:t=>{if(`enableGlobalFilter`in t.columnDef&&t.columnDef.enableGlobalFilter===!0)return!0;let n=e.getCoreRowModel().flatRows.find(e=>e.getAllCellsByColumnId()[t.id]?.getValue()!=null)?.getAllCellsByColumnId()[t.id]?.getValue();return typeof n==`string`||typeof n==`number`}}),assignColumnPrototype:(e,t)=>{j(`globalFilteringFeature`,e,t,{column_getCanGlobalFilter:{fn:e=>Zi(e)}})},constructTableAPIs:e=>{A(`globalFilteringFeature`,e,{table_getGlobalAutoFilterFn:{fn:()=>Qi()},table_getGlobalFilterFn:{fn:()=>$i(e)},table_setGlobalFilter:{fn:t=>ea(e,t)},table_resetGlobalFilter:{fn:t=>ta(e,t)}})}};function ra(){return T()}function ia(e){e.atoms.expanded&&(e.options.autoResetAll??e.options.autoResetExpanded??!e.options.manualExpanding)&&e._reactivity.schedule(()=>sa(e))}function aa(e,t){e.options.onExpandedChange?.(t)}function oa(e,t){let n=e.atoms.expanded?.get()??{};if(t??!da(e)){if(n===!0||!ca(e))return;aa(e,!0)}else{if(n!==!0&&!Object.keys(n).length)return;aa(e,T())}}function sa(e,t){let n=e.initialState.expanded;O(e,`expanded`,t?T():n===!0||Object.assign(T(),w(n??{})))}function ca(e){return e.getPrePaginatedRowModel().flatRows.some(e=>V(e))}function la(e){return t=>{oa(e)}}function ua(e){let t=e.atoms.expanded?.get()??{};return t===!0||Object.values(t).some(Boolean)}function da(e){let t=e.atoms.expanded?.get()??{};if(t===!0)return!0;if(!Object.keys(t).length)return!1;let n=e.getRowModel().flatRows.filter(e=>V(e));return!(!n.length||n.some(e=>!ma(e)))}function fa(e){let t=0,n=e.atoms.expanded?.get();return(n===!0?Object.values(e.getRowModel().rowsById).filter(e=>V(e)).map(e=>e.id):Object.keys(n??{})).forEach(e=>{let n=e.split(`.`);t=Math.max(t,n.length)}),t}function pa(e,t){let n=e.table.atoms.expanded?.get()??{},r=n===!0||ha(n,e.id),i=t??!r;i!==r&&(!i||V(e))&&aa(e.table,t=>{let n=t===!0||ha(t,e.id),r=T();if(t===!0?Object.values(e.table.getRowModel().rowsById).forEach(e=>{V(e)&&(r[e.id]=!0)}):r=Object.assign(T(),t),!n&&i)return r[e.id]=!0,r;if(n&&!i){let t=T(),n=Object.keys(r);for(let i=0;i<n.length;i++){let a=n[i];a!==e.id&&r[a]&&(t[a]=!0)}return t}return t})}function ma(e){let t=e.table.atoms.expanded?.get()??{};return!!(e.table.options.getIsRowExpanded?.(e)??(t===!0||ha(t,e.id)))}function ha(e,t){return!!(e&&e!==!0&&E(e,t)&&e[t])}function V(e){return e.table.options.getRowCanExpand?.(e)??((e.table.options.enableExpanding??!0)&&!!e.subRows.length)}function ga(e){let t=!0,n=e;for(;t&&n.parentId;)n=e.table.getRow(n.parentId,!0),t=ma(n);return t}function _a(e){let t=V(e);return()=>{t&&pa(e)}}function va(){return e=>{let t=e;return k({feature:`rowExpandingFeature`,table:t,fnName:`table.getExpandedRowModel`,memoDeps:()=>[t.atoms.expanded?.get(),t.getPreExpandedRowModel(),t.options.paginateExpandedRows,t.options.manualPagination],fn:()=>ya(t)})}}function ya(e){let t=e.getPreExpandedRowModel(),n=e.atoms.expanded?.get();return!t.rows.length||n!==!0&&!Object.keys(n??{}).length||!e.options.paginateExpandedRows&&!e.options.manualPagination?t:ba(t)}function ba(e){let t=[],n=e=>{t.push(e),e.subRows.length&&ma(e)&&e.subRows.forEach(n)};return e.rows.forEach(n),{rows:t,flatRows:e.flatRows,rowsById:e.rowsById}}var xa={getInitialState:e=>({expanded:ra(),...e}),getDefaultTableOptions:e=>({onExpandedChange:D(`expanded`,e),paginateExpandedRows:!0}),assignRowPrototype:(e,t)=>{j(`rowExpandingFeature`,e,t,{row_toggleExpanded:{fn:(e,t)=>pa(e,t)},row_getIsExpanded:{fn:e=>ma(e)},row_getCanExpand:{fn:e=>V(e)},row_getIsAllParentsExpanded:{fn:e=>ga(e)},row_getToggleExpandedHandler:{fn:e=>_a(e)}})},constructTableAPIs:e=>{A(`rowExpandingFeature`,e,{table_autoResetExpanded:{fn:()=>ia(e)},table_setExpanded:{fn:t=>aa(e,t)},table_toggleAllRowsExpanded:{fn:t=>oa(e,t)},table_resetExpanded:{fn:t=>sa(e,t)},table_getCanSomeRowsExpand:{fn:()=>ca(e)},table_getToggleAllRowsExpandedHandler:{fn:()=>la(e)},table_getIsSomeRowsExpanded:{fn:()=>ua(e)},table_getIsAllRowsExpanded:{fn:()=>da(e)},table_getExpandedDepth:{fn:()=>fa(e)},table__expandRows:{fn:ba}})}},H=0,Sa=10;function Ca(){return{pageIndex:H,pageSize:Sa}}function wa(e){if(e.options.autoResetAll??e.options.autoResetPageIndex??!e.options.manualPagination){if((e.atoms.pagination?.get()?.pageIndex??H)===H)return;Oa(e,!0)}}function Ta(e,t){O(e,`pagination`,t)}function Ea(e,t){Ta(e,t?Ca():w(e.initialState.pagination??Ca()))}function Da(e,t){Ta(e,n=>{let r=C(t,n.pageIndex),i=e.options.pageCount===void 0||e.options.pageCount===-1?2**53-1:e.options.pageCount-1;return r=Math.max(0,Math.min(r,i)),{...n,pageIndex:r}})}function Oa(e,t){Da(e,t?H:e.initialState.pagination?.pageIndex??H)}function ka(e,t){Aa(e,t?Sa:e.initialState.pagination?.pageSize??Sa)}function Aa(e,t){Ta(e,e=>{let n=Math.max(1,C(t,e.pageSize)),r=e.pageSize===1/0?0:e.pageSize*e.pageIndex,i=n===1/0?0:Math.floor(r/n);return{...e,pageIndex:i,pageSize:n}})}function ja(e){let t=za(e),n=[];return t&&t>0&&(n=[...Array(t)].fill(null).map((e,t)=>t)),n}function Ma(e){return(e.atoms.pagination?.get()?.pageIndex??0)>0}function Na(e){let t=e.atoms.pagination?.get()?.pageIndex??H,n=za(e);return n===-1||n!==0&&t<n-1}function Pa(e){let t=e.atoms.pagination?.get()?.pageIndex??H,n=za(e);return Number.isFinite(n)&&n>0&&t<n-1}function Fa(e){return Da(e,e=>e-1)}function Ia(e){return Da(e,e=>e+1)}function La(e){return Da(e,0)}function Ra(e){let t=za(e);if(!(!Number.isFinite(t)||t<=0))return Da(e,t-1)}function za(e){let t=e.options.pageCount;if(t!=null)return t;let n=Ba(e),r=e.atoms.pagination?.get()?.pageSize??Sa;return r===1/0&&Number.isFinite(n)&&n>0?1:Math.ceil(n/r)}function Ba(e){return e.options.rowCount??e.getPrePaginatedRowModel().rows.length}var Va={getInitialState:e=>({...e,pagination:{...Ca(),...e.pagination}}),getDefaultTableOptions:e=>({onPaginationChange:D(`pagination`,e)}),constructTableAPIs:e=>{A(`rowPaginationFeature`,e,{table_autoResetPageIndex:{fn:()=>wa(e)},table_setPagination:{fn:t=>Ta(e,t)},table_resetPagination:{fn:t=>Ea(e,t)},table_setPageIndex:{fn:t=>Da(e,t)},table_resetPageIndex:{fn:t=>Oa(e,t)},table_setPageSize:{fn:t=>Aa(e,t)},table_getPageCount:{fn:()=>za(e)},table_resetPageSize:{fn:t=>ka(e,t)},table_getPageOptions:{fn:()=>ja(e)},table_getCanPreviousPage:{fn:()=>Ma(e)},table_getCanNextPage:{fn:()=>Na(e)},table_getCanLastPage:{fn:()=>Pa(e)},table_previousPage:{fn:()=>Fa(e)},table_nextPage:{fn:()=>Ia(e)},table_firstPage:{fn:()=>La(e)},table_lastPage:{fn:()=>Ra(e)},table_getRowCount:{fn:()=>Ba(e)}})}};function Ha(){return T()}function Ua(e,t){e.options.onRowSelectionChange?.(t)}function Wa(e,t){e._lastSelectedRowId=null,Ua(e,t?T():Object.assign(T(),w(e.initialState.rowSelection??{})))}function Ga(e,t,n){e._lastSelectedRowId=null,Ua(e,r=>{if(t=t===void 0?!M(e,`getIsAllRowsSelected`,Qa):t,n?.deselectAll&&!t)return T();let i=Object.assign(T(),r),a=e.getPreGroupedRowModel().flatRows;if(t){let e=new Map;a.forEach(t=>{po(t,e)&&(i[t.id]=!0)})}else a.forEach(e=>{U(e)&&delete i[e.id]});return i})}function Ka(e,t,n){e._lastSelectedRowId=null,Ua(e,r=>{let i=t===void 0?!M(e,`getIsAllPageRowsSelected`,$a):t;if(n?.deselectAll&&!i)return T();let a=Object.assign(T(),r);return e.getRowModel().rows.forEach(t=>{fo(a,t.id,i,!0,e,!0)}),a})}function qa(e){return e.getCoreRowModel()}function Ja(e){let t=e.getCoreRowModel();return M(e,`getIsSomeRowsSelected`,eo)?go(t,e):{rows:[],flatRows:[],rowsById:T()}}function Ya(e){let t=e.getFilteredRowModel();return M(e,`getIsSomeRowsSelected`,eo)?go(t,e):{rows:[],flatRows:[],rowsById:T()}}function Xa(e){let t=e.getSortedRowModel();return M(e,`getIsSomeRowsSelected`,eo)?go(t,e):{rows:[],flatRows:[],rowsById:T()}}function Za(e){return Object.keys(e.atoms.rowSelection?.get()??{})}function Qa(e){let t=e.getFilteredRowModel().flatRows,n=e.atoms.rowSelection?.get()??{},r=!!(t.length&&Object.keys(n).length);if(r){let e=new Map;t.some(t=>!_o(t,n)&&po(t,e))&&(r=!1)}return r}function $a(e){let t=e.getPaginatedRowModel().flatRows,n=e.atoms.rowSelection?.get()??{},r=new Map,i=!1;for(let e=0;e<t.length;e++){let a=t[e];if(_o(a,n))!i&&po(a,r)&&(i=!0);else if(po(a,r))return!1}return i}function eo(e){return M(e,`getSelectedRowIds`,Za).length>0}function to(e){return e.getPaginatedRowModel().flatRows.filter(e=>U(e)).some(e=>ao(e)||M(e,`getIsSomeSelected`,oo))}function no(e){return t=>{Ga(e,t.target.checked)}}function ro(e){return t=>{Ka(e,t.target.checked)}}function io(e,t,n){let r=ao(e);Ua(e.table,i=>{t=t===void 0?!r:t;let a=Object.assign(T(),i);return fo(a,e.id,t,(n?.selectChildren??!0)&&W(e),e.table),!t&&n?.deselectParents&&mo(a,e),a})}function ao(e){return _o(e,e.table.atoms.rowSelection?.get()??{})}function oo(e){return vo(e)===`some`}function so(e){return vo(e)===`all`}function U(e){let t=e.table.options;return typeof t.enableRowSelection==`function`?t.enableRowSelection(e):t.enableRowSelection??!0}function co(e){let t=e.table.options;return typeof t.enableSubRowSelection==`function`?t.enableSubRowSelection(e):t.enableSubRowSelection??!0}function W(e){let t=e.table.options;return typeof t.enableMultiRowSelection==`function`?t.enableMultiRowSelection(e):t.enableMultiRowSelection??!0}function lo(e,t){let n=U(e);return r=>{if(!n)return;let i=r,a=e.table,o=i.target.checked,s=a._lastSelectedRowId;a.options.enableRowRangeSelection!==!1&&s!==null&&W(e)&&(a.options.isRowRangeSelectionEvent?.(r)??!1)&&uo(e,s,o,t)||io(e,o,t),a._lastSelectedRowId=e.id}}function uo(e,t,n,r){let i=r?.selectChildren??!0,a=e.table,o=a.getRowsInDisplayOrder(),s=a.getPrePaginatedRowModel().rowsById[t]??a.getCoreRowModel().rowsById[t];if(!s)return!1;let c=s.getDisplayIndex(),l=e.getDisplayIndex(),u=o[c],d=o[l];if(c<0||l<0||c>=o.length||l>=o.length||u?.id!==s.id||d?.id!==e.id||!W(s)||!W(e))return!1;let ee=Math.min(c,l),f=Math.max(c,l);return Ua(a,e=>{let t=Object.assign(T(),e);for(let e=ee;e<=f;e++){let s=o[e];U(s)&&W(s)&&(fo(t,s.id,n,i,a),!n&&r?.deselectParents&&mo(t,s))}return t}),!0}function fo(e,t,n,r,i,a){let o=i.getRow(t,!0);n?(W(o)||Object.keys(e).forEach(t=>delete e[t]),U(o)&&(e[t]=!0)):(!a||U(o))&&delete e[t],r&&o.subRows.length&&co(o)&&o.subRows.forEach(t=>fo(e,t.id,n,r,i,a))}function po(e,t){if(!U(e))return!1;let n=e.table;if(n.options.enableSubRowSelection===!0)return!0;let r=e.parentId;if(r===void 0)return!0;let i=t.get(r);if(i!==void 0)return i;let a=n.getCoreRowModel().rowsById,o=[],s=!0,c=r;for(;c!==void 0;){let e=t.get(c);if(e!==void 0){s=e;break}o.push(c);let r=a[c]??n.getRow(c,!0);if(!co(r)){s=!1;break}c=r.parentId}return o.forEach(e=>t.set(e,s)),s}function mo(e,t){let n=t.table.getCoreRowModel().rowsById,r=t.parentId;for(;r!==void 0;)delete e[r],r=(n[r]??t.table.getRow(r,!0)).parentId}function ho(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=_o(o,t);if(s&&(n.push(o),r[o.id]=o),o.subRows.length){let e=ho(o.subRows,t,n,r);if(s){let t=Object.create(Object.getPrototypeOf(o));et(t,o),t.subRows=e,i.push(t)}}else s&&i.push(o)}return i}function go(e,t){let n=[],r=T(),i=t.atoms.rowSelection?.get()??{};return{rows:ho(e.rows,i,n,r),flatRows:n,rowsById:r}}function _o(e,t){return!!(E(t,e.id)&&t[e.id])}function vo(e){if(!e.subRows.length)return!1;let t=e.table.atoms.rowSelection?.get()??{},n=!1,r=!0,i=!1;for(let a=0;a<e.subRows.length;a++){let o=e.subRows[a];if(n&&!r)break;if(U(o)&&(i=!0,_o(o,t)?n=!0:r=!1),o.subRows.length){let e=vo(o);e===`all`?(n=!0,i=!0):e===`some`?(n=!0,r=!1,i=!0):r=!1}}return i?r?`all`:n?`some`:!1:!1}var yo={initTableInstanceData:e=>{e._lastSelectedRowId=null},resetTableInstanceData:e=>{e._lastSelectedRowId=null},getInitialState:e=>({rowSelection:Ha(),...e}),getDefaultTableOptions:e=>({onRowSelectionChange:D(`rowSelection`,e),enableRowSelection:!0,enableMultiRowSelection:!0,enableRowRangeSelection:!0,enableSubRowSelection:!0,isRowRangeSelectionEvent:e=>{let t=e;return!!(t.shiftKey||t.nativeEvent?.shiftKey)}}),assignRowPrototype:(e,t)=>{j(`rowSelectionFeature`,e,t,{row_toggleSelected:{fn:(e,t,n)=>io(e,t,n)},row_getIsSelected:{fn:e=>ao(e)},row_getIsSomeSelected:{fn:e=>oo(e),memoDeps:e=>[e.subRows,e.table.atoms.rowSelection?.get(),e.table.options.enableRowSelection]},row_getIsAllSubRowsSelected:{fn:e=>so(e),memoDeps:e=>[e.subRows,e.table.atoms.rowSelection?.get(),e.table.options.enableRowSelection]},row_getCanSelect:{fn:e=>U(e)},row_getCanSelectSubRows:{fn:e=>co(e)},row_getCanMultiSelect:{fn:e=>W(e)},row_getToggleSelectedHandler:{fn:(e,t)=>lo(e,t)}})},constructTableAPIs:e=>{A(`rowSelectionFeature`,e,{table_setRowSelection:{fn:t=>Ua(e,t)},table_resetRowSelection:{fn:t=>Wa(e,t)},table_toggleAllRowsSelected:{fn:(t,n)=>Ga(e,t,n)},table_toggleAllPageRowsSelected:{fn:(t,n)=>Ka(e,t,n)},table_getPreSelectedRowModel:{fn:()=>qa(e)},table_getSelectedRowModel:{fn:()=>Ja(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getCoreRowModel()]},table_getFilteredSelectedRowModel:{fn:()=>Ya(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getFilteredRowModel()]},table_getGroupedSelectedRowModel:{fn:()=>Xa(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getSortedRowModel()]},table_getSelectedRowIds:{fn:()=>Za(e),memoDeps:()=>[e.atoms.rowSelection?.get()]},table_getIsAllRowsSelected:{fn:()=>Qa(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getFilteredRowModel(),e.options.enableRowSelection,e.options.enableSubRowSelection]},table_getIsAllPageRowsSelected:{fn:()=>$a(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getPaginatedRowModel(),e.options.enableRowSelection,e.options.enableSubRowSelection]},table_getIsSomeRowsSelected:{fn:()=>eo(e),memoDeps:()=>[e.atoms.rowSelection?.get()]},table_getIsSomePageRowsSelected:{fn:()=>to(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getPaginatedRowModel(),e.options.enableRowSelection]},table_getToggleAllRowsSelectedHandler:{fn:()=>no(e)},table_getToggleAllPageRowsSelectedHandler:{fn:()=>ro(e)}})}},bo=/([0-9]+)/gm;function xo(e){let t=Object.assign((e,n,r)=>{let i=e.getValue(r),a=n.getValue(r),o=t.resolveDataValue;return o&&(i=o(i),a=o(a)),t.sort(i,a,e,n,r)},e);return t}var So=xo({resolveDataValue:e=>Do(e).toLowerCase(),sort:(e,t)=>Oo(e,t)}),Co=xo({resolveDataValue:e=>Eo(e),sort:(e,t)=>e>t?1:e<t?-1:0}),wo=xo({sort:(e,t)=>To(e,t)});function To(e,t){return e===t?0:e>t?1:-1}function Eo(e){return e instanceof Date?e.getTime():e}function Do(e){return typeof e==`number`?isNaN(e)||e===1/0||e===-1/0?``:String(e):typeof e==`string`?e:``}function Oo(e,t){let n=0,r=0,i=e.length,a=t.length;for(;n<i&&r<a;){let i=ko(e.charCodeAt(n)),a=ko(t.charCodeAt(r)),o=Ao(e,n,i),s=Ao(t,r,a);if(!i&&!a){let i=jo(e,n,o,t,r,s);if(i)return i;n=o,r=s;continue}if(i!==a)return i?1:-1;let c=Mo(e,n,o,t,r,s);if(c)return c;n=o,r=s}return Po(e,n)-Po(t,r)}function ko(e){return e>=48&&e<=57}function Ao(e,t,n){let r=t+1;for(;r<e.length&&ko(e.charCodeAt(r))===n;)r++;return r}function jo(e,t,n,r,i,a){let o=n-t,s=a-i,c=o<s?o:s;for(let n=0;n<c;n++){let a=e.charCodeAt(t+n),o=r.charCodeAt(i+n);if(a>o)return 1;if(o>a)return-1}return o>s?1:s>o?-1:0}function Mo(e,t,n,r,i,a){let o=t;for(;o<n&&e.charCodeAt(o)===48;)o++;let s=i;for(;s<a&&r.charCodeAt(s)===48;)s++;let c=n-o,l=a-s;if(c===0&&l===0)return 0;if(c<=15&&l<=15){let t=No(e,o,n),i=No(r,s,a);return t>i?1:i>t?-1:0}let u=parseInt(e.slice(t,n),10),d=parseInt(r.slice(i,a),10);return u>d?1:d>u?-1:0}function No(e,t,n){let r=0;for(let i=t;i<n;i++)r=r*10+e.charCodeAt(i)-48;return r}function Po(e,t){let n=0,r=t;for(;r<e.length;)n++,r=Ao(e,r,ko(e.charCodeAt(r)));return n}function Fo(){return[]}function Io(e,t){O(e,`sorting`,t)}function Lo(e,t){Io(e,t?[]:w(e.initialState.sorting??[]))}function Ro(e){e.atoms.sorting&&(e.options.autoResetAll??e.options.autoResetSorting??!1)&&Lo(e)}function zo(e){let t=e.table._rowModelFns.sortFns,n=e.table.getFilteredRowModel().flatRows.slice(0,10),r,i=!1;for(let t=0;t<n.length;t++){let a=n[t].getValue(e.id);if(Object.prototype.toString.call(a)===`[object Date]`){r=`datetime`;break}if(typeof a==`string`&&(i=!0,a.split(bo).length>1)){r=`alphanumeric`;break}}if(!r&&i&&(r=`text`),r){let e=t?.[r];if(e||r===`alphanumeric`&&(e=t?.text),e)return e}return wo}function Bo(e){let t=e.table.getFilteredRowModel().flatRows.slice(0,10);for(let n=0;n<t.length;n++){let r=t[n].getValue(e.id);if(r!=null)return typeof r==`string`?`asc`:`desc`}return`desc`}function Vo(e){let t=e.table._rowModelFns.sortFns;return ot(e.columnDef.sortFn)?e.columnDef.sortFn:e.columnDef.sortFn===`auto`?zo(e):t?.[e.columnDef.sortFn]??wo}function Ho(e,t,n){let r=Wo(e,n&&Ko(e)),i=t!==void 0;Io(e.table,a=>{let o=a.findIndex(t=>t.id===e.id),s=o===-1?void 0:a[o],c=[],l,u=i?t:r===`desc`,d=!!(a.length&&Ko(e)&&n);return l=d?s?`toggle`:`add`:s?`toggle`:`replace`,l===`toggle`&&(i||r||(l=`remove`)),l===`add`?(c=[...a,{id:e.id,desc:u}],c.splice(0,c.length-(e.table.options.maxMultiSortColCount??2**53-1))):c=l===`toggle`?d?a.map(t=>t.id===e.id?{...t,desc:u}:t):[{id:e.id,desc:u}]:l===`remove`?d?a.filter(t=>t.id!==e.id):[]:[{id:e.id,desc:u}],c})}function Uo(e){return e.columnDef.sortDescFirst??e.table.options.sortDescFirst??Bo(e)===`desc`?`desc`:`asc`}function Wo(e,t){let n=Uo(e),r=qo(e);return r?r!==n&&(e.table.options.enableSortingRemoval??!0)&&(!t||(e.table.options.enableMultiRemove??!0))?!1:r===`desc`?`asc`:`desc`:n}function Go(e){return(e.columnDef.enableSorting??!0)&&(e.table.options.enableSorting??!0)&&!!e.accessorFn}function Ko(e){return e.columnDef.enableMultiSort??e.table.options.enableMultiSort??!!e.accessorFn}function qo(e){let t=e.table.atoms.sorting?.get()?.find(t=>t.id===e.id);return t?t.desc?`desc`:`asc`:!1}function Jo(e){return e.table.atoms.sorting?.get()?.findIndex(t=>t.id===e.id)??-1}function Yo(e){Io(e.table,t=>t.length?t.filter(t=>t.id!==e.id):[])}function Xo(e){let t=Go(e);return n=>{t&&Ho(e,void 0,Ko(e)?e.table.options.isMultiSortEvent?.(n):!1)}}var Zo={getInitialState(e){return{sorting:Fo(),...e}},getDefaultColumnDef(){return{sortFn:`auto`,sortUndefined:1}},getDefaultTableOptions(e){return{autoResetSorting:!1,onSortingChange:D(`sorting`,e),isMultiSortEvent:e=>e.shiftKey}},assignColumnPrototype(e,t){j(`rowSortingFeature`,e,t,{column_getAutoSortFn:{fn:e=>zo(e)},column_getAutoSortDir:{fn:e=>Bo(e)},column_getSortFn:{fn:e=>Vo(e)},column_toggleSorting:{fn:(e,t,n)=>Ho(e,t,n)},column_getFirstSortDir:{fn:e=>Uo(e)},column_getNextSortingOrder:{fn:(e,t)=>Wo(e,t)},column_getCanSort:{fn:e=>Go(e)},column_getCanMultiSort:{fn:e=>Ko(e)},column_getIsSorted:{fn:e=>qo(e)},column_getSortIndex:{fn:e=>Jo(e)},column_clearSorting:{fn:e=>Yo(e)},column_getToggleSortingHandler:{fn:e=>Xo(e)}})},constructTableAPIs(e){A(`rowSortingFeature`,e,{table_autoResetSorting:{fn:()=>Ro(e)},table_setSorting:{fn:t=>Io(e,t)},table_resetSorting:{fn:t=>Lo(e,t)}})}};function Qo(e){return e}function $o(e){return typeof e==`number`}var es=Qo({aggregate:e=>{let t=e.rows,n=0;for(let r=0;r<t.length;r++){let i=e.getValue(t[r]);n+=typeof i==`number`?i:0}return n},merge:({subRowResults:e})=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n];$o(r)&&(t+=r)}return t}}),ts=Qo({aggregate:e=>{let t=e.rows,n=0,r=0;for(let i=0;i<t.length;i++){let a=e.getValue(t[i]);if(a==null)continue;let o=typeof a==`number`?a:+a;Number.isNaN(o)||(n++,r+=o)}return n?r/n:void 0}}),ns=Qo({aggregate:({rows:e})=>e.length,merge:({subRowResults:e})=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n];$o(r)&&(t+=r)}return t}});function rs(e,t,n){return n.options.filterFromLeafRows?is(e,t,n):as(e,t,n)}function is(e,t,n){let r=[],i=T(),a=n.options.maxLeafRowFilterDepth??100,o=(e,r=0)=>{let i=[];for(let s of e){let e=an(n,s.id,s.original,s.index,s.depth,void 0,s.parentId);e.columnFilters=s.columnFilters,e.columnFiltersMeta=s.columnFiltersMeta,s.subRows.length&&r<a?(e.subRows=o(s.subRows,r+1),(e.subRows.length||t(e))&&i.push(e)):t(e)&&(e.subRows=s.subRows,i.push(e))}return i},s=o(e);return os(s,r,i),{rows:s,flatRows:r,rowsById:i}}function as(e,t,n){let r=[],i=T(),a=n.options.maxLeafRowFilterDepth??100,o=(e,s=0)=>{let c=[];for(let l of e)if(t(l)){if(l.subRows.length&&s<a){let e=an(n,l.id,l.original,l.index,l.depth,void 0,l.parentId),t=l;e.columnFilters=t.columnFilters,e.columnFiltersMeta=t.columnFiltersMeta,c.push(e),r.push(e),i[e.id]=e,e.subRows=o(l.subRows,s+1)}else c.push(l),r.push(l),i[l.id]=l,l.subRows.length&&s>=a&&os(l.subRows,r,i)}return c};return{rows:o(e),flatRows:r,rowsById:i}}function os(e,t,n){for(let r of e)t.push(r),n[r.id]=r,r.subRows.length&&os(r.subRows,t,n)}function ss(){return e=>{let t=e;return k({feature:`columnFilteringFeature`,table:t,fnName:`table.getFilteredRowModel`,memoDeps:()=>[t.getPreFilteredRowModel(),t.atoms.columnFilters?.get(),t.atoms.globalFilter?.get()],fn:()=>cs(t),onAfterUpdate:lt(()=>Tt(t))})}}function cs(e){let t=e.getPreFilteredRowModel(),n=e.atoms.columnFilters?.get(),r=e.atoms.globalFilter?.get(),i=r!=null&&r!==``;if(!t.rows.length||!n?.length&&!i){let e=t.flatRows;for(let t=0;t<e.length;t++){let n=e[t];n.columnFilters=T(),n.columnFiltersMeta=T()}return t}let a=[],o=[];n?.forEach(t=>{let n=Rt(e,t.id);if(!n)return;let r=pr(n);r&&a.push({id:t.id,filterFn:r,resolvedValue:r.resolveFilterValue?.(t.value)??t.value})});let s=n?.map(e=>e.id)??[];if(i){let t=xt(e),n=t?e.getAllLeafColumns().filter(St):[];t&&n.length&&(s.push(`__global__`),n.forEach(e=>{o.push({id:e.id,filterFn:t,resolvedValue:t.resolveFilterValue?.(r)??r})}))}let c=t.flatRows;for(let e=0;e<c.length;e++){let t=c[e];if(t.columnFilters=T(),t.columnFiltersMeta=T(),a.length)for(let e=0;e<a.length;e++){let n=a[e],r=n.id;t.columnFilters[r]=n.filterFn(t,r,n.resolvedValue,e=>{t.columnFiltersMeta||=T(),t.columnFiltersMeta[r]=e})}if(o.length){for(let e=0;e<o.length;e++){let n=o[e],r=n.id;if(n.filterFn(t,r,n.resolvedValue,e=>{t.columnFiltersMeta||=T(),t.columnFiltersMeta[r]=e})){t.columnFilters.__global__=!0;break}}t.columnFilters.__global__!==!0&&(t.columnFilters.__global__=!1)}}return rs(t.rows,e=>{for(let t=0;t<s.length;t++)if(e.columnFilters[s[t]]===!1)return!1;return!0},e)}function ls(){return e=>{let t=e,n=!1,r,i;return k({feature:`columnGroupingFeature`,table:t,fnName:`table.getGroupedRowModel`,memoDeps:()=>[t.atoms.grouping?.get(),t.getPreGroupedRowModel(),t.options.columns],fn:()=>us(t),onAfterUpdate:()=>{let e=t.atoms.grouping?.get(),a=t.getPreGroupedRowModel(),o=n&&(e!==r||a!==i);r=e,i=a,n=!0,o&&(wt(t),Tt(t))}})}}function us(e){let t=e.getPreGroupedRowModel(),n=e.atoms.grouping?.get();if(!t.rows.length||!n?.length)return ds(t.rows,0,void 0),t;let r=n.filter(t=>Rt(e,t)),i=[],a=T(),o=(t,n=0,s)=>{if(n>=r.length)return t.map(e=>(e.depth=n,i.push(e),a[e.id]=e,e.subRows.length&&(e.subRows=o(e.subRows,n+1,e.id)),e));let c=r[n],l=fs(e,t,c);return Array.from(l.entries()).map(([t,l],u)=>{let d=`${c}:${t}`;d=s?`${s}>${d}`:d;let ee=i.length;i.push(void 0);let f=o(l,n+1,d);f.forEach(e=>{e.parentId=d});let p=er(l,1/0),m=an(e,d,p[0].original,u,n,void 0,s);return Object.assign(m,{groupingColumnId:c,groupingValue:t,subRows:f,leafRows:p,getValue:t=>{let i=r.indexOf(t);if(i!==-1&&i<=n)return E(m._valuesCache,t)||l[0]&&(m._valuesCache[t]=l[0].getValue(t)??void 0),m._valuesCache[t];let a=m._aggregationValuesCache;if(a&&E(a,t))return a[t];let o=Ot(e),s=e.getColumn(t);if(!o||typeof s.getAggregationFns!=`function`)return;let c=m._aggregationValuesCache??=T();return c[t]=o({subRows:f,column:s,groupingRow:m,rows:l,uniqueRows:!0}),c[t]}}),i[ee]=m,a[d]=m,m})};return{rows:o(t.rows,0),flatRows:i,rowsById:a}}function ds(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.depth=t,i.parentId=n,i.subRows.length&&ds(i.subRows,t+1,i.id)}}function fs(e,t,n){let r=new Map,i=Rt(e,n)?.columnDef.getGroupingValue;for(let e=0;e<t.length;e++){let a=t[e],o;if(i){let e=a._groupingValuesCache;e&&E(e,n)?o=e[n]:e&&(o=e[n]=i(a.original,a.index,a))}else o=a.getValue(n);let s=`${o}`,c=r.get(s);c?c.push(a):r.set(s,[a])}return r}function ps(){return e=>{let t=e;return k({feature:`rowPaginationFeature`,table:t,fnName:`table.getPaginatedRowModel`,memoDeps:()=>[t.getPrePaginatedRowModel(),t.atoms.pagination?.get(),t.options.paginateExpandedRows?void 0:t.atoms.expanded?.get()],fn:()=>ms(t)})}}function ms(e){let t=e.getPrePaginatedRowModel(),n=e.atoms.pagination?.get();if(!t.rows.length)return t;let{pageSize:r,pageIndex:i}=n??Ca(),{rows:a,flatRows:o,rowsById:s}=t,c=a;if(r!==1/0||i!==0){let e=r*i,t=e+r;c=a.slice(e,t)}let l;l=e.options.paginateExpandedRows?{rows:c,flatRows:o,rowsById:s}:Ct(e,{rows:c,flatRows:o,rowsById:s}),l.flatRows=[];let u=new Set,d=e=>{u.has(e.id)||(u.add(e.id),l.flatRows.push(e),e.subRows.length&&e.subRows.forEach(d))};return l.rows.forEach(d),l}function hs(){return e=>{let t=e;return k({feature:`rowSortingFeature`,table:t,fnName:`table.getSortedRowModel`,memoDeps:()=>[t.atoms.sorting?.get(),t.getPreSortedRowModel()],fn:()=>gs(t),onAfterUpdate:lt(()=>Tt(t))})}}function gs(e){let t=e.getPreSortedRowModel(),n=e.atoms.sorting?.get();if(!t.rows.length||!n?.length)return t;let r=[],i=n.filter(t=>{let n=e.getColumn(t.id);return n?Go(n):!1});if(!i.length)return t;let a=[];for(let t=0;t<i.length;t++){let n=i[t],r=e.getColumn(n.id);r&&a.push({id:n.id,desc:n.desc,sortUndefined:r.columnDef.sortUndefined,invertSorting:r.columnDef.invertSorting,sortFn:Vo(r)})}let o=(e,t)=>{for(let n=0;n<a.length;n++){let r=a[n],i=r.sortUndefined,o=r.desc,s=0;if(i){let n=e.getValue(r.id),a=t.getValue(r.id),o=n===void 0,c=a===void 0;if(o&&c)continue;if(o||c){if(i===`first`)return o?-1:1;if(i===`last`)return o?1:-1;s=o?i:-i}}if(s===0&&(s=r.sortFn(e,t,r.id)),s!==0)return o&&(s*=-1),r.invertSorting&&(s*=-1),s}return e.index-t.index},s=e=>{let t=e.slice();t.sort(o);let n=!1;for(let i=0;i<t.length;i++){let a=t[i];a!==e[i]&&(n=!0);let o=r.length;if(r.push(a),a.subRows.length){let e=s(a.subRows);if(e.changed){let s=Object.create(Object.getPrototypeOf(a));et(s,a),s.subRows=e.rows,t[i]=s,r[o]=s,n=!0}}}return{rows:t,changed:n}};return{rows:s(t.rows).rows,flatRows:r,rowsById:t.rowsById}}var _s=typeof window>`u`?x.useEffect:x.useLayoutEffect;function G(e,t){let[{table:n,rootSource:r}]=(0,x.useState)(()=>{let t=qn({...e,features:{coreReactivityFeature:$e(),...e.features}});return t.Subscribe=(e=>Ye({...e,source:e.source??t.store})),t.FlexRender=Ee,{table:t,rootSource:Qe(t.store,We)}}),i=n;Hn(i,t=>({...t,...e}),{syncExternalState:!1});let a=i.options.state,o=r.get(),s=Je(r,t,{compare:We});return _s(()=>{r.markCommitted(o),zn(i,a??null,We)}),(0,x.useMemo)(()=>({...n,options:e,state:s}),[n,e,s])}var vs={name:`arrow-down`,size:24,node:[[`path`,{d:`M12 5v14`,key:`s699le`}],[`path`,{d:`m19 12-7 7-7-7`,key:`1idqje`}]]};vs.node;var ys=m(vs),bs={name:`arrow-up`,size:24,node:[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]};bs.node;var xs=m(bs),Ss={name:`save`,size:24,node:[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]};Ss.node;var Cs=m(Ss),ws={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]};ws.node;var Ts=m(ws),Es=te(),K=p();function q({table:e,numeric:t=[],tree:n=!1,paging:i=!0}){let a=new Set(t);return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsx)(`div`,{className:`overflow-x-auto rounded-md border`,children:(0,K.jsxs)(re,{children:[(0,K.jsx)(ue,{children:e.getHeaderGroups().map(t=>(0,K.jsx)(_e,{children:t.headers.map(t=>{let n=t.column.getIsSorted();return(0,K.jsx)(ie,{colSpan:t.colSpan,style:{width:t.getSize()},className:r(a.has(t.column.id)&&`text-right`),children:t.isPlaceholder?null:t.column.getCanSort()?(0,K.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1 hover:text-foreground`,onClick:t.column.getToggleSortingHandler(),children:[(0,K.jsx)(e.FlexRender,{header:t}),n===`asc`?(0,K.jsx)(xs,{className:`size-3.5`}):n===`desc`?(0,K.jsx)(ys,{className:`size-3.5`}):null]}):(0,K.jsx)(e.FlexRender,{header:t})},t.id)})},t.id))}),(0,K.jsx)(fe,{children:e.getRowModel().rows.map(t=>{let i=[...t.getStartVisibleCells(),...t.getCenterVisibleCells(),...t.getEndVisibleCells()],o=i.find(e=>e.column.id!==`select`)?.id;return(0,K.jsx)(_e,{"data-state":t.getIsSelected()?`selected`:void 0,className:r((t.getIsGrouped()||n&&t.subRows.length>0)&&`bg-muted/40 font-medium`),children:i.map(i=>(0,K.jsx)(he,{className:r(a.has(i.column.id)&&`text-right tabular-nums`),children:i.getIsGrouped()?(0,K.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1`,onClick:t.getToggleExpandedHandler(),children:[t.getIsExpanded()?(0,K.jsx)(xe,{className:`size-4`}):(0,K.jsx)(d,{className:`size-4`}),(0,K.jsx)(e.FlexRender,{cell:i}),` (`,t.subRows.length,`)`]}):i.getIsPlaceholder()?null:n&&i.id===o?(0,K.jsxs)(`span`,{className:`inline-flex items-center gap-1`,style:{paddingLeft:t.depth*18},children:[t.getCanExpand()?(0,K.jsx)(`button`,{type:`button`,onClick:t.getToggleExpandedHandler(),"aria-label":`Toggle row`,children:t.getIsExpanded()?(0,K.jsx)(xe,{className:`size-4`}):(0,K.jsx)(d,{className:`size-4`})}):(0,K.jsx)(`span`,{className:`w-4`}),(0,K.jsx)(e.FlexRender,{cell:i})]}):(0,K.jsx)(e.FlexRender,{cell:i})},i.id))},t.id)})})]})}),i&&(0,K.jsxs)(`div`,{className:`flex items-center justify-end gap-2 text-sm text-muted-foreground`,children:[(0,K.jsxs)(`span`,{children:[`Page `,e.state.pagination.pageIndex+1,` of `,Math.max(1,e.getPageCount())]}),(0,K.jsx)(b,{variant:`outline`,size:`sm`,onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:`Previous`}),(0,K.jsx)(b,{variant:`outline`,size:`sm`,onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:`Next`})]})]})}var J=Gn({columnVisibilityFeature:qi,columnPinningFeature:fi,columnSizingFeature:Mi,columnFilteringFeature:Sr,globalFilteringFeature:na,columnGroupingFeature:Ir,rowAggregationFeature:ur,rowSortingFeature:Zo,rowExpandingFeature:xa,rowSelectionFeature:yo,rowPaginationFeature:Va,filteredRowModel:ss(),groupedRowModel:ls(),sortedRowModel:hs(),expandedRowModel:va(),paginatedRowModel:ps(),filterFns:{includesString:Yi},sortFns:{alphanumeric:So,basic:wo,datetime:Co},aggregationFns:{sum:es,mean:ts,count:ns},columnMeta:Wn()}),Y=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}),X=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),Ds=y({default:()=>js,meta:()=>Os}),Os={title:`Export menu on a data table`,description:`A shadcn data table with search, sorting and paging, and an Export menu for Excel, PDF and CSV. The file holds every row that passes the search, in the current sort, not just the visible page.`},ks=_(),Z=I(),As=Z.columns([Z.accessor(`id`,{header:`Order`,size:80}),Z.accessor(`customer`,{header:`Customer`,size:190}),Z.accessor(`product`,{header:`Product`,size:150}),Z.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`yyyy-mm-dd`,format:e=>X.format(e)}}}),Z.accessor(`amount`,{header:`Amount`,cell:e=>Y.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>Y.format(e)}}}),Z.accessor(`status`,{header:`Status`,size:100})]);function js(){let[e,t]=x.useState(``),n=G({features:J,columns:As,data:ks,globalFilterFn:`includesString`,state:{globalFilter:e},onGlobalFilterChange:t,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(pe,{placeholder:`Search orders...`,value:e,onChange:e=>t(e.target.value),className:`h-8 w-64`}),(0,K.jsx)(v,{table:n,fileName:`orders`,pdfTitle:`Orders`,className:`ml-auto`})]}),(0,K.jsx)(q,{table:n,numeric:[`amount`]})]})}var Ms=y({default:()=>Is,meta:()=>Ns}),Ns={title:`Grouped rows to Excel outlines`,description:`Group by region and product. Excel gets one outline level per grouping, so the groups collapse in Excel too, and the group totals are SUBTOTAL formulas over the rows below them.`},Ps=_(),Q=I(),Fs=Q.columns([Q.accessor(`region`,{header:`Region`,size:170}),Q.accessor(`product`,{header:`Product`,size:170}),Q.accessor(`customer`,{header:`Customer`,size:190}),Q.accessor(`quantity`,{header:`Qty`,aggregationFn:`sum`}),Q.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>Y.format(e.getValue()),aggregatedCell:e=>Y.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>Y.format(e)}}}),Q.accessor(`amount`,{id:`average`,header:`Avg order`,aggregationFn:`mean`,cell:e=>Y.format(e.getValue()),aggregatedCell:e=>Y.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>Y.format(e)}}})]);function Is(){let e=G({features:J,columns:Fs,data:Ps,initialState:{grouping:[`region`,`product`],expanded:!0,pagination:{pageIndex:0,pageSize:15}}}),t=e.state.grouping.includes(`product`);return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(b,{variant:`outline`,size:`sm`,onClick:()=>e.setGrouping(t?[`region`]:[`region`,`product`]),children:t?`Group by region only`:`Also group by product`}),(0,K.jsx)(b,{variant:`outline`,size:`sm`,onClick:()=>e.toggleAllRowsExpanded(),children:e.getIsAllRowsExpanded()?`Collapse all`:`Expand all`}),(0,K.jsx)(v,{table:e,fileName:`orders-by-region`,pdfTitle:`Orders by region`,className:`ml-auto`})]}),(0,K.jsx)(q,{table:e,numeric:[`quantity`,`amount`,`average`]})]})}var Ls=y({default:()=>Vs,meta:()=>Rs}),Rs={title:`Hidden, pinned and excluded columns`,description:`The file has the columns on screen, in screen order. Hidden columns stay out, pinned columns become frozen panes in Excel, and a column marked exclude never goes to a file.`},zs=_(),$=I(),Bs=$.columns([$.accessor(`customer`,{header:`Customer`,size:190}),$.accessor(`country`,{header:`Country`}),$.accessor(`product`,{header:`Product`,size:150}),$.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`yyyy-mm-dd`}}}),$.accessor(`amount`,{header:`Amount`,cell:e=>Y.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),$.accessor(`status`,{header:`Status`}),$.accessor(`id`,{header:`Internal id`,meta:{rowpine:{exclude:!0}}})]);function Vs(){let e=G({features:J,columns:Bs,data:zs,initialState:{columnPinning:{start:[`customer`],end:[]},columnVisibility:{country:!1},pagination:{pageIndex:0,pageSize:10}}});return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsxs)(se,{children:[(0,K.jsxs)(g,{className:ee({variant:`outline`,size:`sm`}),children:[(0,K.jsx)(c,{}),`Columns`]}),(0,K.jsxs)(h,{align:`start`,className:`w-48`,children:[(0,K.jsxs)(ve,{children:[(0,K.jsx)(be,{children:`Show`}),e.getAllLeafColumns().map(e=>(0,K.jsx)(oe,{checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t),children:String(e.columnDef.header)},e.id))]}),(0,K.jsxs)(ve,{children:[(0,K.jsx)(be,{children:`Pin to the start`}),e.getAllLeafColumns().map(e=>(0,K.jsx)(oe,{checked:e.getIsPinned()===`start`,onCheckedChange:t=>e.pin(t?`start`:!1),children:String(e.columnDef.header)},e.id))]})]})]}),(0,K.jsx)(v,{table:e,fileName:`orders-columns`,className:`ml-auto`})]}),(0,K.jsx)(q,{table:e,numeric:[`amount`]})]})}var Hs=y({default:()=>qs,meta:()=>Us}),Us={title:`Export only the selected rows`,description:`Tick some rows and the Export menu offers "Selected rows only". The selection column itself is marked exclude, so it never reaches the file.`},Ws=_(),Gs=I(),Ks=Gs.columns([Gs.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},header:({table:e})=>(0,K.jsx)(ce,{checked:e.getIsAllPageRowsSelected(),indeterminate:e.getIsSomePageRowsSelected()&&!e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":`Select page`}),cell:({row:e})=>(0,K.jsx)(ce,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`})}),Gs.accessor(`id`,{header:`Order`,size:80}),Gs.accessor(`customer`,{header:`Customer`,size:190}),Gs.accessor(`product`,{header:`Product`}),Gs.accessor(`amount`,{header:`Amount`,cell:e=>Y.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}})]);function qs(){let e=G({features:J,columns:Ks,data:Ws,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:10},rowSelection:{1001:!0,1004:!0,1007:!0}}}),t=Object.keys(e.state.rowSelection).length;return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-muted-foreground`,children:[t,` selected`,(0,K.jsx)(v,{table:e,fileName:`selected-orders`,className:`ml-auto`})]}),(0,K.jsx)(q,{table:e,numeric:[`amount`]})]})}function Js(e){return ye(e.defaultTagName??`div`,e,e)}var Ys=t(`group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!`,{variants:{variant:{default:`bg-primary text-primary-foreground [a]:hover:bg-primary/80`,secondary:`bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80`,destructive:`bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20`,outline:`border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground`,ghost:`hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50`,link:`text-primary underline-offset-4 hover:underline`}},defaultVariants:{variant:`default`}});function Xs({className:e,variant:t=`default`,render:n,...i}){return Js({defaultTagName:`span`,props:f({className:r(Ys({variant:t}),e)},i),render:n,state:{slot:`badge`,variant:t}})}var Zs=y({default:()=>ac,meta:()=>Qs}),Qs={title:`Number formats and cell colors`,description:`meta.rowpine.numFmt gives Excel a real number format, so amounts stay numbers you can sum. format sets the text for PDF and cellStyle colors cells in both files, the same rule the screen uses.`},$s=_().map((e,t)=>({...e,margin:t*37%45/100-.05})),ec=new Intl.NumberFormat(`en-US`,{style:`percent`,maximumFractionDigits:1}),tc=e=>e===`Overdue`?{color:`#b91c1c`,bold:!0}:e===`Open`?{color:`#a16207`}:void 0,nc=e=>e<0?`#fee2e2`:e>=.3?`#dcfce7`:void 0,rc=I(),ic=rc.columns([rc.accessor(`customer`,{header:`Customer`,size:190}),rc.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`d mmm yyyy`,format:e=>X.format(e)}}}),rc.accessor(`amount`,{header:`Amount`,cell:e=>Y.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>Y.format(e)}}}),rc.accessor(`margin`,{header:`Margin`,cell:e=>(0,K.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:{background:nc(e.getValue())},children:ec.format(e.getValue())}),meta:{rowpine:{numFmt:`0.0%`,format:e=>ec.format(e),cellStyle:e=>({fill:nc(e)})}}}),rc.accessor(`status`,{header:`Status`,cell:e=>(0,K.jsx)(Xs,{variant:e.getValue()===`Overdue`?`destructive`:`secondary`,children:e.getValue()}),meta:{rowpine:{cellStyle:tc}}})]);function ac(){let e=G({features:J,columns:ic,data:$s,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsx)(`div`,{className:`flex justify-end`,children:(0,K.jsx)(v,{table:e,fileName:`orders-formatted`,pdfTitle:`Orders`})}),(0,K.jsx)(q,{table:e,numeric:[`amount`,`margin`]})]})}var oc=y({default:()=>uc,meta:()=>sc}),sc={title:`Tree data`,description:`Rows nested with getSubRows export as Excel outline levels, one per depth, so the hierarchy collapses in Excel. Parent rows are bold in Excel and PDF.`},cc=I(),lc=cc.columns([cc.accessor(`name`,{header:`Unit`,size:240}),cc.accessor(`lead`,{header:`Lead`,size:170}),cc.accessor(`headcount`,{header:`Headcount`}),cc.accessor(`budget`,{header:`Budget`,cell:e=>Y.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>Y.format(e)}}})]);function uc(){let e=G({features:J,columns:lc,data:ae,getSubRows:e=>e.subRows,initialState:{expanded:!0}});return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(b,{variant:`outline`,size:`sm`,onClick:()=>e.toggleAllRowsExpanded(),children:e.getIsAllRowsExpanded()?`Collapse all`:`Expand all`}),(0,K.jsx)(v,{table:e,fileName:`org-budget`,pdfTitle:`Budget by unit`,className:`ml-auto`})]}),(0,K.jsx)(q,{table:e,numeric:[`headcount`,`budget`],tree:!0,paging:!1})]})}var dc=y({default:()=>gc,meta:()=>fc}),fc={title:`A PDF report from your own button`,description:`Call exportPdf directly to set the page: size, orientation, a title and subtitle, a strip of headline numbers, a watermark and the header color. Rows are grouped by status, as on screen.`},pc=_(),mc=I(),hc=mc.columns([mc.accessor(`status`,{header:`Status`,size:110}),mc.accessor(`customer`,{header:`Customer`,size:190}),mc.accessor(`product`,{header:`Product`}),mc.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?X.format(e.getValue()):null,meta:{rowpine:{format:e=>X.format(e)}}}),mc.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>Y.format(e.getValue()),aggregatedCell:e=>Y.format(e.getValue()),meta:{rowpine:{format:e=>Y.format(e)}}})]);function gc(){let[e,t]=x.useState(`A4`),[n,r]=x.useState(!1),i=G({features:J,columns:hc,data:pc,initialState:{grouping:[`status`],expanded:!0,pagination:{pageIndex:0,pageSize:12}}}),a=pc.reduce((e,t)=>e+t.amount,0),o=pc.filter(e=>e.status===`Overdue`);async function c(){await le(i,{fileName:`receivables`,title:`Receivables`,subtitle:`${pc.length} orders, January to September 2026`,pageSize:e,pageOrientation:n?`landscape`:`portrait`,headerColor:`#1f3d2e`,kpis:[{label:`Invoiced`,value:Y.format(a)},{label:`Overdue`,value:Y.format(o.reduce((e,t)=>e+t.amount,0)),delta:`${o.length} orders`,color:`#b91c1c`}],watermark:`DRAFT`})}return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[(0,K.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Page`,(0,K.jsx)(`select`,{value:e,onChange:e=>t(e.target.value),className:`h-8 rounded-md border bg-background px-2`,children:[`A4`,`LETTER`,`LEGAL`,`A3`].map(e=>(0,K.jsx)(`option`,{children:e},e))})]}),(0,K.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),`Landscape`]}),(0,K.jsxs)(b,{size:`sm`,className:`ml-auto`,onClick:()=>void c(),children:[(0,K.jsx)(s,{}),`Download PDF`]})]}),(0,K.jsx)(q,{table:i,numeric:[`amount`]})]})}var _c=y({default:()=>xc,meta:()=>vc}),vc={title:`A pivot table from code`,description:`usePivot turns flat orders into products down and quarters across, with two measures side by side: units sold and the average order value. Groups expand and collapse, and the pivot exports like any table.`},yc=_(),bc={rows:[`product`,`region`],cols:[`quarter`],values:[{field:`quantity`,agg:`sum`,label:`Units`},{field:`amount`,agg:`avg`,label:`Avg order`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``}]};function xc(){let t=me(yc,bc),[n,r]=x.useState(new Set);return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsx)(`div`,{className:`flex justify-end`,children:(0,K.jsx)(v,{table:t.table,fileName:`units-by-product`,pdfTitle:`Units by product`,rowStyle:e})}),(0,K.jsx)(de,{pivot:t,collapsed:n,onCollapsedChange:r})]})}var Sc=y({default:()=>Oc,meta:()=>Cc}),Cc={title:`Pivot designer`,description:`Users build their own pivot: drag fields into Rows, Columns, Values and Filters, change aggregations from a chip's menu, filter values, load a preset, and switch totals on and off.`},wc=_(),Tc=[{field:`region`,label:`Region`,kind:`dimension`,group:`Where`},{field:`country`,label:`Country`,kind:`dimension`,group:`Where`},{field:`customer`,label:`Customer`,kind:`dimension`,group:`Who`},{field:`product`,label:`Product`,kind:`dimension`,group:`What`},{field:`status`,label:`Status`,kind:`dimension`,group:`What`},{field:`quarter`,label:`Quarter`,kind:`dimension`,group:`When`},{field:`amount`,label:`Amount`,kind:`measure`,group:`Numbers`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`quantity`,label:`Units`,kind:`measure`,group:`Numbers`}],Ec=[{name:`Revenue by region and quarter`,layout:{rows:[`region`,`country`],cols:[`quarter`],values:[{field:`amount`,agg:`sum`,label:`Sum of Amount`}],filters:[]}},{name:`Overdue by customer`,layout:{rows:[`customer`],cols:[],values:[{field:`amount`,agg:`sum`,label:`Sum of Amount`},{field:`amount`,agg:`count`,label:`Count of Amount`}],filters:[{field:`status`,allowed:[`Overdue`]}]}}],Dc={numFmt:`"$"#,##0`};function Oc(){return(0,K.jsx)(ge,{data:wc,fields:Tc,presets:Ec,pivotOptions:Dc,actions:t=>(0,K.jsx)(v,{table:t.table,fileName:`pivot`,pdfTitle:`Sales pivot`,rowStyle:e})})}var kc=y({default:()=>Fc,meta:()=>Ac}),Ac={title:`Saved views`,description:`The designer's layout is plain JSON. Keep it in state, save named views to localStorage, offer them back as presets, and export the current pivot from your own buttons.`},jc=_(),Mc=[{field:`region`,label:`Region`,kind:`dimension`},{field:`product`,label:`Product`,kind:`dimension`},{field:`status`,label:`Status`,kind:`dimension`},{field:`quarter`,label:`Quarter`,kind:`dimension`},{field:`amount`,label:`Amount`,kind:`measure`},{field:`quantity`,label:`Units`,kind:`measure`}],Nc=`rowpine-example-views`;function Pc(){try{return JSON.parse(localStorage.getItem(Nc)??`[]`)}catch{return[]}}function Fc(){let[t,r]=x.useState(()=>u(Mc)),[i,a]=x.useState(Pc),[o,s]=x.useState(``),c=x.useRef(null),d=x.useCallback(e=>{c.current=e},[]),ee=e=>{a(e);try{localStorage.setItem(Nc,JSON.stringify(e))}catch{}};return(0,K.jsxs)(`div`,{className:`grid gap-3`,children:[(0,K.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,K.jsx)(pe,{placeholder:`Name this view...`,value:o,onChange:e=>s(e.target.value),className:`h-8 w-56`}),(0,K.jsxs)(b,{size:`sm`,variant:`outline`,disabled:!o.trim(),onClick:()=>{ee([...i.filter(e=>e.name!==o.trim()),{name:o.trim(),layout:t}]),s(``)},children:[(0,K.jsx)(Cs,{}),`Save view`]}),i.length>0&&(0,K.jsxs)(b,{size:`sm`,variant:`ghost`,onClick:()=>ee([]),children:[(0,K.jsx)(Ts,{}),`Forget saved views`]}),(0,K.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,K.jsx)(b,{size:`sm`,variant:`outline`,onClick:()=>c.current&&void n(c.current.table,{fileName:`view`}),children:`CSV`}),(0,K.jsx)(b,{size:`sm`,onClick:()=>c.current&&void l(c.current.table,{fileName:`view`,rowStyle:e}),children:`Excel`})]})]}),(0,K.jsx)(ge,{data:jc,fields:Mc,layout:t,onLayoutChange:r,presets:i,onPivotChange:d}),(0,K.jsxs)(`details`,{className:`text-sm`,children:[(0,K.jsx)(`summary`,{className:`cursor-pointer text-muted-foreground`,children:`Current layout as JSON`}),(0,K.jsx)(`pre`,{className:`mt-2 overflow-x-auto rounded-md bg-muted p-3 text-xs`,children:JSON.stringify(t,null,2)})]})]})}var Ic=`import * as React from "react"
import { createColumnHelper, useTable } from "@tanstack/react-table"

import { ExportMenu } from "@/components/export-menu"
import { Input } from "@/components/ui/input"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { day, features, money } from "@/lib/table"

export const meta = {
  title: "Export menu on a data table",
  description: "A shadcn data table with search, sorting and paging, and an Export menu for Excel, PDF and CSV. The file holds every row that passes the search, in the current sort, not just the visible page.",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.accessor("id", { header: "Order", size: 80 }),
  helper.accessor("customer", { header: "Customer", size: 190 }),
  helper.accessor("product", { header: "Product", size: 150 }),
  helper.accessor("date", {
    header: "Date",
    sortFn: "datetime",
    cell: (c) => day.format(c.getValue()),
    meta: { rowpine: { numFmt: "yyyy-mm-dd", format: (v) => day.format(v as Date) } },
  }),
  helper.accessor("amount", {
    header: "Amount",
    cell: (c) => money.format(c.getValue()),
    meta: { rowpine: { numFmt: '"$"#,##0.00', format: (v) => money.format(v as number) } },
  }),
  helper.accessor("status", { header: "Status", size: 100 }),
])

export default function ExportMenuExample() {
  const [globalFilter, setGlobalFilter] = React.useState("")
  const table = useTable({
    features,
    columns,
    data,
    globalFilterFn: "includesString",
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
  })

  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search orders..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="h-8 w-64"
        />
        <ExportMenu table={table} fileName="orders" pdfTitle="Orders" className="ml-auto" />
      </div>
      <DataTable table={table} numeric={["amount"]} />
    </div>
  )
}
`,Lc=`import { createColumnHelper, useTable } from "@tanstack/react-table"

import { ExportMenu } from "@/components/export-menu"
import { Button } from "@/components/ui/button"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { features, money } from "@/lib/table"

export const meta = {
  title: "Grouped rows to Excel outlines",
  description: "Group by region and product. Excel gets one outline level per grouping, so the groups collapse in Excel too, and the group totals are SUBTOTAL formulas over the rows below them.",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.accessor("region", { header: "Region", size: 170 }),
  helper.accessor("product", { header: "Product", size: 170 }),
  helper.accessor("customer", { header: "Customer", size: 190 }),
  helper.accessor("quantity", { header: "Qty", aggregationFn: "sum" }),
  helper.accessor("amount", {
    header: "Amount",
    aggregationFn: "sum",
    cell: (c) => money.format(c.getValue()),
    aggregatedCell: (c) => money.format(c.getValue() as number),
    meta: { rowpine: { numFmt: '"$"#,##0.00', format: (v) => money.format(v as number) } },
  }),
  helper.accessor("amount", {
    id: "average",
    header: "Avg order",
    aggregationFn: "mean",
    cell: (c) => money.format(c.getValue()),
    aggregatedCell: (c) => money.format(c.getValue() as number),
    meta: { rowpine: { numFmt: '"$"#,##0.00', format: (v) => money.format(v as number) } },
  }),
])

export default function GroupedExport() {
  const table = useTable({
    features,
    columns,
    data,
    initialState: { grouping: ["region", "product"], expanded: true, pagination: { pageIndex: 0, pageSize: 15 } },
  })
  const grouping = table.state.grouping
  const byProduct = grouping.includes("product")

  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => table.setGrouping(byProduct ? ["region"] : ["region", "product"])}>
          {byProduct ? "Group by region only" : "Also group by product"}
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.toggleAllRowsExpanded()}>
          {table.getIsAllRowsExpanded() ? "Collapse all" : "Expand all"}
        </Button>
        <ExportMenu table={table} fileName="orders-by-region" pdfTitle="Orders by region" className="ml-auto" />
      </div>
      <DataTable table={table} numeric={["quantity", "amount", "average"]} />
    </div>
  )
}
`,Rc=`import { createColumnHelper, useTable } from "@tanstack/react-table"
import { Columns3 } from "lucide-react"

import { ExportMenu } from "@/components/export-menu"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { day, features, money } from "@/lib/table"

export const meta = {
  title: "Hidden, pinned and excluded columns",
  description: "The file has the columns on screen, in screen order. Hidden columns stay out, pinned columns become frozen panes in Excel, and a column marked exclude never goes to a file.",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.accessor("customer", { header: "Customer", size: 190 }),
  helper.accessor("country", { header: "Country" }),
  helper.accessor("product", { header: "Product", size: 150 }),
  helper.accessor("date", {
    header: "Date",
    sortFn: "datetime",
    cell: (c) => day.format(c.getValue()),
    meta: { rowpine: { numFmt: "yyyy-mm-dd" } },
  }),
  helper.accessor("amount", {
    header: "Amount",
    cell: (c) => money.format(c.getValue()),
    meta: { rowpine: { numFmt: '"$"#,##0.00' } },
  }),
  helper.accessor("status", { header: "Status" }),
  // An internal column the app shows but files must not carry.
  helper.accessor("id", { header: "Internal id", meta: { rowpine: { exclude: true } } }),
])

export default function ColumnsExample() {
  const table = useTable({
    features,
    columns,
    data,
    initialState: {
      columnPinning: { start: ["customer"], end: [] },
      columnVisibility: { country: false },
      pagination: { pageIndex: 0, pageSize: 10 },
    },
  })

  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className={buttonVariants({ variant: "outline", size: "sm" })}>
            <Columns3 />
            Columns
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Show</DropdownMenuLabel>
              {table.getAllLeafColumns().map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(on) => column.toggleVisibility(!!on)}
                >
                  {String(column.columnDef.header)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Pin to the start</DropdownMenuLabel>
              {table.getAllLeafColumns().map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsPinned() === "start"}
                  onCheckedChange={(on) => column.pin(on ? "start" : false)}
                >
                  {String(column.columnDef.header)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <ExportMenu table={table} fileName="orders-columns" className="ml-auto" />
      </div>
      <DataTable table={table} numeric={["amount"]} />
    </div>
  )
}
`,zc=`import { createColumnHelper, useTable } from "@tanstack/react-table"

import { ExportMenu } from "@/components/export-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { features, money } from "@/lib/table"

export const meta = {
  title: "Export only the selected rows",
  description: "Tick some rows and the Export menu offers \\"Selected rows only\\". The selection column itself is marked exclude, so it never reaches the file.",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.display({
    id: "select",
    size: 36,
    meta: { rowpine: { exclude: true } },
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()}
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Select page"
      />
    ),
    cell: ({ row }) => (
      <Checkbox checked={row.getIsSelected()} onCheckedChange={(v) => row.toggleSelected(!!v)} aria-label="Select row" />
    ),
  }),
  helper.accessor("id", { header: "Order", size: 80 }),
  helper.accessor("customer", { header: "Customer", size: 190 }),
  helper.accessor("product", { header: "Product" }),
  helper.accessor("amount", {
    header: "Amount",
    cell: (c) => money.format(c.getValue()),
    meta: { rowpine: { numFmt: '"$"#,##0.00' } },
  }),
])

export default function SelectedRows() {
  const table = useTable({
    features,
    columns,
    data,
    getRowId: (r) => r.id,
    initialState: { pagination: { pageIndex: 0, pageSize: 10 }, rowSelection: { "1001": true, "1004": true, "1007": true } },
  })
  const count = Object.keys(table.state.rowSelection).length

  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {count} selected
        <ExportMenu table={table} fileName="selected-orders" className="ml-auto" />
      </div>
      <DataTable table={table} numeric={["amount"]} />
    </div>
  )
}
`,Bc=`import { createColumnHelper, useTable } from "@tanstack/react-table"

import { ExportMenu } from "@/components/export-menu"
import { Badge } from "@/components/ui/badge"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { day, features, money } from "@/lib/table"

export const meta = {
  title: "Number formats and cell colors",
  description: "meta.rowpine.numFmt gives Excel a real number format, so amounts stay numbers you can sum. format sets the text for PDF and cellStyle colors cells in both files, the same rule the screen uses.",
}

type Row = Order & { margin: number }
const data: Row[] = makeOrders().map((o, i) => ({ ...o, margin: ((i * 37) % 45) / 100 - 0.05 }))
const pct = new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 1 })

// One rule for screen and files.
const statusColor = (s: unknown) =>
  s === "Overdue" ? { color: "#b91c1c", bold: true } : s === "Open" ? { color: "#a16207" } : undefined
const marginFill = (m: number) => (m < 0 ? "#fee2e2" : m >= 0.3 ? "#dcfce7" : undefined)

const helper = createColumnHelper<typeof features, Row>()
const columns = helper.columns([
  helper.accessor("customer", { header: "Customer", size: 190 }),
  helper.accessor("date", {
    header: "Date",
    sortFn: "datetime",
    cell: (c) => day.format(c.getValue()),
    meta: { rowpine: { numFmt: "d mmm yyyy", format: (v) => day.format(v as Date) } },
  }),
  helper.accessor("amount", {
    header: "Amount",
    cell: (c) => money.format(c.getValue()),
    meta: { rowpine: { numFmt: '"$"#,##0.00', format: (v) => money.format(v as number) } },
  }),
  helper.accessor("margin", {
    header: "Margin",
    cell: (c) => (
      <span className="rounded px-1.5 py-0.5" style={{ background: marginFill(c.getValue()) }}>
        {pct.format(c.getValue())}
      </span>
    ),
    meta: {
      rowpine: {
        numFmt: "0.0%",
        format: (v) => pct.format(v as number),
        cellStyle: (v) => ({ fill: marginFill(v as number) }),
      },
    },
  }),
  helper.accessor("status", {
    header: "Status",
    cell: (c) => <Badge variant={c.getValue() === "Overdue" ? "destructive" : "secondary"}>{c.getValue()}</Badge>,
    meta: { rowpine: { cellStyle: statusColor } },
  }),
])

export default function FormatsColors() {
  const table = useTable({ features, columns, data, initialState: { pagination: { pageIndex: 0, pageSize: 10 } } })
  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <ExportMenu table={table} fileName="orders-formatted" pdfTitle="Orders" />
      </div>
      <DataTable table={table} numeric={["amount", "margin"]} />
    </div>
  )
}
`,Vc=`import { createColumnHelper, useTable } from "@tanstack/react-table"

import { ExportMenu } from "@/components/export-menu"
import { Button } from "@/components/ui/button"
import { org, type Unit } from "@/data"
import { DataTable } from "@/lib/data-table"
import { features, money } from "@/lib/table"

export const meta = {
  title: "Tree data",
  description: "Rows nested with getSubRows export as Excel outline levels, one per depth, so the hierarchy collapses in Excel. Parent rows are bold in Excel and PDF.",
}

const helper = createColumnHelper<typeof features, Unit>()
const columns = helper.columns([
  helper.accessor("name", { header: "Unit", size: 240 }),
  helper.accessor("lead", { header: "Lead", size: 170 }),
  helper.accessor("headcount", { header: "Headcount" }),
  helper.accessor("budget", {
    header: "Budget",
    cell: (c) => money.format(c.getValue()),
    meta: { rowpine: { numFmt: '"$"#,##0', format: (v) => money.format(v as number) } },
  }),
])

export default function TreeData() {
  const table = useTable({
    features,
    columns,
    data: org,
    getSubRows: (u) => u.subRows,
    initialState: { expanded: true },
  })
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => table.toggleAllRowsExpanded()}>
          {table.getIsAllRowsExpanded() ? "Collapse all" : "Expand all"}
        </Button>
        <ExportMenu table={table} fileName="org-budget" pdfTitle="Budget by unit" className="ml-auto" />
      </div>
      <DataTable table={table} numeric={["headcount", "budget"]} tree paging={false} />
    </div>
  )
}
`,Hc=`import * as React from "react"
import { createColumnHelper, useTable } from "@tanstack/react-table"
import { FileText } from "lucide-react"
import { exportPdf, type PdfPageSize } from "rowpine"

import { Button } from "@/components/ui/button"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { day, features, money } from "@/lib/table"

export const meta = {
  title: "A PDF report from your own button",
  description: "Call exportPdf directly to set the page: size, orientation, a title and subtitle, a strip of headline numbers, a watermark and the header color. Rows are grouped by status, as on screen.",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.accessor("status", { header: "Status", size: 110 }),
  helper.accessor("customer", { header: "Customer", size: 190 }),
  helper.accessor("product", { header: "Product" }),
  helper.accessor("date", {
    header: "Date",
    // Group rows have no date: leave the cell empty instead of formatting nothing.
    cell: (c) => (c.getValue() ? day.format(c.getValue()) : null),
    meta: { rowpine: { format: (v) => day.format(v as Date) } },
  }),
  helper.accessor("amount", {
    header: "Amount",
    aggregationFn: "sum",
    cell: (c) => money.format(c.getValue()),
    aggregatedCell: (c) => money.format(c.getValue() as number),
    meta: { rowpine: { format: (v) => money.format(v as number) } },
  }),
])

export default function PdfReport() {
  const [pageSize, setPageSize] = React.useState<PdfPageSize>("A4")
  const [landscape, setLandscape] = React.useState(false)
  const table = useTable({
    features,
    columns,
    data,
    initialState: { grouping: ["status"], expanded: true, pagination: { pageIndex: 0, pageSize: 12 } },
  })

  const total = data.reduce((n, o) => n + o.amount, 0)
  const overdue = data.filter((o) => o.status === "Overdue")

  async function download() {
    await exportPdf(table, {
      fileName: "receivables",
      title: "Receivables",
      subtitle: \`\${data.length} orders, January to September 2026\`,
      pageSize,
      pageOrientation: landscape ? "landscape" : "portrait",
      headerColor: "#1f3d2e",
      kpis: [
        { label: "Invoiced", value: money.format(total) },
        { label: "Overdue", value: money.format(overdue.reduce((n, o) => n + o.amount, 0)), delta: \`\${overdue.length} orders\`, color: "#b91c1c" },
      ],
      watermark: "DRAFT",
    })
  }

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <label className="flex items-center gap-2">
          Page
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value as PdfPageSize)}
            className="h-8 rounded-md border bg-background px-2"
          >
            {(["A4", "LETTER", "LEGAL", "A3"] as const).map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={landscape} onChange={(e) => setLandscape(e.target.checked)} />
          Landscape
        </label>
        <Button size="sm" className="ml-auto" onClick={() => void download()}>
          <FileText />
          Download PDF
        </Button>
      </div>
      <DataTable table={table} numeric={["amount"]} />
    </div>
  )
}
`,Uc=`import * as React from "react"
import { pivotRowStyle, type PivotConfig } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { PivotTable, usePivot } from "@/components/pivot-table"
import { makeOrders, type Order } from "@/data"

export const meta = {
  title: "A pivot table from code",
  description: "usePivot turns flat orders into products down and quarters across, with two measures side by side: units sold and the average order value. Groups expand and collapse, and the pivot exports like any table.",
}

const data = makeOrders()
const usd = (v: unknown) => (typeof v === "number" ? \`$\${Math.round(v).toLocaleString("en-US")}\` : "")

// Keep the config stable (module scope or useMemo): usePivot recomputes when it changes.
const config: PivotConfig<Order> = {
  rows: ["product", "region"],
  cols: ["quarter"],
  values: [
    { field: "quantity", agg: "sum", label: "Units" },
    { field: "amount", agg: "avg", label: "Avg order", format: usd },
  ],
}

export default function PivotFromCode() {
  const pivot = usePivot(data, config)
  const [collapsed, setCollapsed] = React.useState<Set<string>>(new Set())
  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <ExportMenu table={pivot.table} fileName="units-by-product" pdfTitle="Units by product" rowStyle={pivotRowStyle} />
      </div>
      <PivotTable pivot={pivot} collapsed={collapsed} onCollapsedChange={setCollapsed} />
    </div>
  )
}
`,Wc=`import { pivotRowStyle, type PivotField, type PivotPreset } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { PivotDesigner } from "@/components/pivot-designer"
import { makeOrders, type Order } from "@/data"

export const meta = {
  title: "Pivot designer",
  description: "Users build their own pivot: drag fields into Rows, Columns, Values and Filters, change aggregations from a chip's menu, filter values, load a preset, and switch totals on and off.",
}

const data = makeOrders()
const usd = (v: unknown) => (typeof v === "number" ? \`$\${Math.round(v).toLocaleString("en-US")}\` : "")

const fields: PivotField<Order>[] = [
  { field: "region", label: "Region", kind: "dimension", group: "Where" },
  { field: "country", label: "Country", kind: "dimension", group: "Where" },
  { field: "customer", label: "Customer", kind: "dimension", group: "Who" },
  { field: "product", label: "Product", kind: "dimension", group: "What" },
  { field: "status", label: "Status", kind: "dimension", group: "What" },
  { field: "quarter", label: "Quarter", kind: "dimension", group: "When" },
  { field: "amount", label: "Amount", kind: "measure", group: "Numbers", format: usd },
  { field: "quantity", label: "Units", kind: "measure", group: "Numbers" },
]

const presets: PivotPreset[] = [
  {
    name: "Revenue by region and quarter",
    layout: { rows: ["region", "country"], cols: ["quarter"], values: [{ field: "amount", agg: "sum", label: "Sum of Amount" }], filters: [] },
  },
  {
    name: "Overdue by customer",
    layout: {
      rows: ["customer"],
      cols: [],
      values: [
        { field: "amount", agg: "sum", label: "Sum of Amount" },
        { field: "amount", agg: "count", label: "Count of Amount" },
      ],
      filters: [{ field: "status", allowed: ["Overdue"] }],
    },
  },
]

const pivotOptions = { numFmt: '"$"#,##0' }

export default function PivotDesignerExample() {
  return (
    <PivotDesigner
      data={data}
      fields={fields}
      presets={presets}
      pivotOptions={pivotOptions}
      actions={(pivot) => <ExportMenu table={pivot.table} fileName="pivot" pdfTitle="Sales pivot" rowStyle={pivotRowStyle} />}
    />
  )
}
`,Gc=`import * as React from "react"
import { Save, Trash2 } from "lucide-react"
import {
  defaultLayoutFor,
  exportCsv,
  exportXlsx,
  pivotRowStyle,
  type PivotField,
  type PivotLayout,
  type PivotPreset,
  type PivotTable,
} from "rowpine"

import { PivotDesigner } from "@/components/pivot-designer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { makeOrders, type Order } from "@/data"

export const meta = {
  title: "Saved views",
  description: "The designer's layout is plain JSON. Keep it in state, save named views to localStorage, offer them back as presets, and export the current pivot from your own buttons.",
}

const data = makeOrders()
const fields: PivotField<Order>[] = [
  { field: "region", label: "Region", kind: "dimension" },
  { field: "product", label: "Product", kind: "dimension" },
  { field: "status", label: "Status", kind: "dimension" },
  { field: "quarter", label: "Quarter", kind: "dimension" },
  { field: "amount", label: "Amount", kind: "measure" },
  { field: "quantity", label: "Units", kind: "measure" },
]
const KEY = "rowpine-example-views"

function loadViews(): PivotPreset[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]") as PivotPreset[]
  } catch {
    return []
  }
}

export default function SavedViews() {
  const [layout, setLayout] = React.useState<PivotLayout>(() => defaultLayoutFor(fields))
  const [views, setViews] = React.useState<PivotPreset[]>(loadViews)
  const [name, setName] = React.useState("")
  const pivotRef = React.useRef<PivotTable | null>(null)
  const onPivotChange = React.useCallback((p: PivotTable | null) => {
    pivotRef.current = p
  }, [])

  const store = (next: PivotPreset[]) => {
    setViews(next)
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch {
      // Private windows can refuse storage; the views still work for this session.
    }
  }

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Input placeholder="Name this view..." value={name} onChange={(e) => setName(e.target.value)} className="h-8 w-56" />
        <Button
          size="sm"
          variant="outline"
          disabled={!name.trim()}
          onClick={() => {
            store([...views.filter((v) => v.name !== name.trim()), { name: name.trim(), layout }])
            setName("")
          }}
        >
          <Save />
          Save view
        </Button>
        {views.length > 0 && (
          <Button size="sm" variant="ghost" onClick={() => store([])}>
            <Trash2 />
            Forget saved views
          </Button>
        )}
        <div className="ml-auto flex gap-2">
          <Button size="sm" variant="outline" onClick={() => pivotRef.current && void exportCsv(pivotRef.current.table, { fileName: "view" })}>
            CSV
          </Button>
          <Button size="sm" onClick={() => pivotRef.current && void exportXlsx(pivotRef.current.table, { fileName: "view", rowStyle: pivotRowStyle })}>
            Excel
          </Button>
        </div>
      </div>
      <PivotDesigner
        data={data}
        fields={fields}
        layout={layout}
        onLayoutChange={setLayout}
        presets={views}
        onPivotChange={onPivotChange}
      />
      <details className="text-sm">
        <summary className="cursor-pointer text-muted-foreground">Current layout as JSON</summary>
        <pre className="mt-2 overflow-x-auto rounded-md bg-muted p-3 text-xs">{JSON.stringify(layout, null, 2)}</pre>
      </details>
    </div>
  )
}
`;i(void 0);var Kc=Object.assign({"./examples/01-export-menu.tsx":Ds,"./examples/02-grouped-export.tsx":Ms,"./examples/03-columns.tsx":Ls,"./examples/04-selected-rows.tsx":Hs,"./examples/05-formats-colors.tsx":Zs,"./examples/06-tree-data.tsx":oc,"./examples/07-pdf-report.tsx":dc,"./examples/08-pivot-table.tsx":_c,"./examples/09-pivot-designer.tsx":Sc,"./examples/10-saved-layouts.tsx":kc}),qc=Object.assign({"./examples/01-export-menu.tsx":Ic,"./examples/02-grouped-export.tsx":Lc,"./examples/03-columns.tsx":Rc,"./examples/04-selected-rows.tsx":zc,"./examples/05-formats-colors.tsx":Bc,"./examples/06-tree-data.tsx":Vc,"./examples/07-pdf-report.tsx":Hc,"./examples/08-pivot-table.tsx":Uc,"./examples/09-pivot-designer.tsx":Wc,"./examples/10-saved-layouts.tsx":Gc}),Jc=Object.entries(Kc).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({slug:e.replace(`./examples/`,``).replace(`.tsx`,``),title:t.meta.title,description:t.meta.description,Component:t.default,source:qc[e]??``}));function Yc(){let e=()=>window.location.hash.replace(/^#\/?/,``)||Jc[0].slug,[t,n]=x.useState(e);return x.useEffect(()=>{let t=()=>n(e());return window.addEventListener(`hashchange`,t),()=>window.removeEventListener(`hashchange`,t)},[]),t}function Xc(){let e=Yc(),t=Jc.find(t=>t.slug===e)??Jc[0];return x.useEffect(()=>{document.title=`${t.title} - Rowpine examples`},[t]),(0,K.jsxs)(`div`,{className:`mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[15rem_1fr]`,children:[(0,K.jsxs)(`nav`,{className:`grid content-start gap-1 md:sticky md:top-6 md:self-start`,"aria-label":`Examples`,children:[(0,K.jsx)(`a`,{href:`../`,className:`mb-2 font-semibold`,children:`Rowpine examples`}),Jc.map((e,n)=>(0,K.jsxs)(`a`,{href:`#/${e.slug}`,className:r(`rounded-md px-2 py-1.5 text-sm hover:bg-muted`,e.slug===t.slug?`bg-muted font-medium`:`text-muted-foreground`),children:[n+1,`. `,e.title]},e.slug))]}),(0,K.jsxs)(`main`,{className:`grid min-w-0 content-start gap-4`,"data-example":t.slug,children:[(0,K.jsxs)(`header`,{className:`grid gap-1`,children:[(0,K.jsx)(`h1`,{className:`text-2xl font-semibold`,children:t.title}),(0,K.jsx)(`p`,{className:`max-w-3xl text-muted-foreground`,children:t.description})]}),(0,K.jsx)(t.Component,{},t.slug),(0,K.jsxs)(`details`,{className:`rounded-md border`,children:[(0,K.jsx)(`summary`,{className:`cursor-pointer px-3 py-2 text-sm font-medium`,children:`Source`}),(0,K.jsx)(`pre`,{className:`overflow-x-auto border-t bg-muted/40 p-3 text-xs leading-relaxed`,children:t.source})]})]})]})}(0,Es.createRoot)(document.getElementById(`root`)).render((0,K.jsx)(x.StrictMode,{children:(0,K.jsx)(Xc,{})}));