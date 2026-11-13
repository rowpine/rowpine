import{i as e,n as t}from"./rolldown-runtime-COiEfhsA.js";import{$ as n,A as r,B as i,C as a,D as o,E as s,F as c,G as l,I as u,J as d,L as f,M as p,N as m,O as h,P as ee,Q as te,R as g,S as ne,T as re,U as _,V as ie,W as ae,X as v,Y as y,Z as oe,_ as se,a as ce,b as le,c as ue,d as de,et as fe,f as pe,g as me,h as he,i as b,it as ge,j as _e,k as x,l as ve,m as ye,n as be,nt as xe,o as Se,p as Ce,q as we,r as Te,rt as Ee,s as De,t as Oe,tt as ke,u as Ae,v as je,w as Me,x as S,y as Ne,z as Pe}from"./data-DAZiQP0S.js";import{t as Fe}from"./jszip.min-CpWa2PVO.js";var Ie={name:`arrow-down`,size:24,node:[[`path`,{d:`M12 5v14`,key:`s699le`}],[`path`,{d:`m19 12-7 7-7-7`,key:`1idqje`}]]};Ie.node;var Le=_(Ie),Re={name:`arrow-up`,size:24,node:[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]};Re.node;var ze=_(Re),Be={name:`book-open`,size:24,node:[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]};Be.node;var Ve=_(Be),He={name:`code-xml`,size:24,node:[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]],aliases:[`code-2`]};He.node;var Ue=_(He),We={name:`pause`,size:24,node:[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]};We.node;var Ge=_(We),Ke={name:`play`,size:24,node:[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]};Ke.node;var qe=_(Ke),Je={name:`save`,size:24,node:[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]};Je.node;var Ye=_(Je),Xe={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]};Xe.node;var Ze=_(Xe),Qe={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};Qe.node;var $e=_(Qe),et=xe(),C=e(ge(),1),tt=e(Fe(),1),w=_e(),T=(e,t)=>RegExp(`\\b${t}="([^"]*)"`).exec(e)?.[1],nt=e=>e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&amp;/g,`&`),rt=e=>[...e].reduce((e,t)=>e*26+t.charCodeAt(0)-64,0)-1,it=e=>{let t=``;for(let n=e;n>=0;n=Math.floor(n/26)-1)t=String.fromCharCode(65+n%26)+t;return t},at=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function ot(e,t){if(!t)return String(Number.isInteger(e)?e:Math.round(e*1e6)/1e6);if(/y/.test(t)&&/d/.test(t)){let n=new Date(Math.round(e*864e5)+Date.UTC(1899,11,30)),r=n.getUTCFullYear(),i=n.getUTCMonth(),a=n.getUTCDate();return t===`yyyy-mm-dd`?`${r}-${String(i+1).padStart(2,`0`)}-${String(a).padStart(2,`0`)}`:`${a} ${at[i]} ${r}`}let n=t.includes(`%`),r=n?e*100:e,i=(/0\.(0+)/.exec(t)?.[1]??``).length,a=Math.abs(r).toLocaleString(`en-US`,{minimumFractionDigits:i,maximumFractionDigits:i,useGrouping:t.includes(`,`)});return a=(/^"([^"]*)"/.exec(t)?.[1]??``)+a+(n?`%`:``),r<0?`-`+a:a}async function st(e){let t=await tt.default.loadAsync(await e.arrayBuffer()),n=await t.file(`xl/worksheets/sheet1.xml`).async(`string`),r=await t.file(`xl/styles.xml`).async(`string`),i=new Map([...r.matchAll(/<numFmt [^>]*\/>/g)].map(([e])=>[T(e,`numFmtId`),nt(T(e,`formatCode`)??``)])),a=[...(/<fonts[^>]*>([\s\S]*?)<\/fonts>/.exec(r)?.[1]??``).matchAll(/<font>([\s\S]*?)<\/font>/g)].map(([,e])=>({bold:e.includes(`<b/>`),color:/<color rgb="FF([0-9A-F]{6})"/.exec(e)?.[1]})),o=[...(/<fills[^>]*>([\s\S]*?)<\/fills>/.exec(r)?.[1]??``).matchAll(/<fill>([\s\S]*?)<\/fill>/g)].map(([,e])=>/<fgColor rgb="FF([0-9A-F]{6})"/.exec(e)?.[1]),s=[...(/<cellXfs[^>]*>([\s\S]*?)<\/cellXfs>/.exec(r)?.[1]??``).matchAll(/<xf [^>]*?(?:\/>|>[\s\S]*?<\/xf>)/g)].map(([e])=>({numFmt:i.get(T(e,`numFmtId`)),font:a[Number(T(e,`fontId`)??0)],fill:o[Number(T(e,`fillId`)??0)]})),c=/<pane [^>]*\/>/.exec(n)?.[0],l=[];for(let[,e,t]of n.matchAll(/<row ([^>]*)>([\s\S]*?)<\/row>/g)){let n=[];for(let[e]of t.matchAll(/<c [^>]*?(?:\/>|>[\s\S]*?<\/c>)/g)){let t=T(e,`r`),r=s[Number(T(e,`s`)??0)],i=T(e,`t`),a=/<v>([\s\S]*?)<\/v>/.exec(e)?.[1],o=``,c=!1;i===`inlineStr`?o=nt(/<t[^>]*>([\s\S]*?)<\/t>/.exec(e)?.[1]??``):i===`b`?o=a===`1`?`TRUE`:`FALSE`:a!==void 0&&(c=!0,o=ot(Number(a),r?.numFmt));let l=/<f>([\s\S]*?)<\/f>/.exec(e)?.[1];n.push({col:rt(/^[A-Z]+/.exec(t)[0]),ref:t,text:o,numeric:c,formula:l&&nt(l),bold:r?.font?.bold,color:r?.font?.color,fill:r?.fill})}l.push({r:Number(T(e,`r`)),level:Number(T(e,`outlineLevel`)??0),cells:n})}return{rows:l,widths:[...n.matchAll(/<col [^>]*\/>/g)].map(([e])=>Number(T(e,`width`))),xSplit:Number((c&&T(c,`xSplit`))??0),ySplit:Number((c&&T(c,`ySplit`))??0),maxLevel:Number(T(n,`outlineLevelRow`)??0)}}function ct({sheet:e,select:t}){let[n,r]=C.useState(()=>e.rows.flatMap(e=>e.cells).find(e=>t?e.ref===t:!!e.formula)),i=Math.max(e.widths.length,...e.rows.map(e=>Math.max(0,...e.cells.map(e=>e.col+1)))),a=e=>Math.round((e||9)*7+10);return(0,w.jsxs)(`div`,{className:`overflow-auto bg-white text-[13px] text-black`,style:{fontFamily:`Calibri, "Segoe UI", Arial, sans-serif`},children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-3 border-b border-[#d4d4d4] px-2 py-1 font-mono text-xs`,children:[(0,w.jsx)(`span`,{className:`min-w-12 border-r border-[#d4d4d4] pr-2`,children:n?.ref??``}),(0,w.jsx)(`i`,{className:`text-[#666]`,children:`fx`}),(0,w.jsx)(`span`,{className:`truncate`,children:n?n.formula?`=${n.formula}`:n.text:``})]}),(0,w.jsxs)(`table`,{className:`border-collapse`,style:{tableLayout:`fixed`},children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[e.maxLevel>0&&(0,w.jsx)(`th`,{className:`w-10 border border-[#e1e1e1] bg-[#f3f3f3]`}),(0,w.jsx)(`th`,{className:`w-9 border border-[#e1e1e1] bg-[#f3f3f3]`}),Array.from({length:i},(t,n)=>(0,w.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#f3f3f3] text-xs font-normal text-[#555]`,style:{width:a(e.widths[n]),borderRightColor:n===e.xSplit-1?`#6b6b6b`:void 0,borderRightWidth:n===e.xSplit-1?2:void 0},children:it(n)},n))]})}),(0,w.jsx)(`tbody`,{children:e.rows.map((t,a)=>{let o=e.rows[a+1],s=o&&o.level>t.level,c=new Map(t.cells.map(e=>[e.col,e])),l=t.r===e.ySplit;return(0,w.jsxs)(`tr`,{children:[e.maxLevel>0&&(0,w.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#fafafa] px-0.5`,children:(0,w.jsxs)(`div`,{className:`flex h-5 items-center`,children:[Array.from({length:e.maxLevel},(e,n)=>(0,w.jsx)(`i`,{className:n<t.level?`ml-1.5 h-5 w-2 shrink-0 border-l-2 border-[#888]`:`h-5 w-3.5 shrink-0`},n)),s&&(0,w.jsx)(`b`,{className:`ml-0.5 grid size-3 shrink-0 place-items-center border border-[#888] bg-white text-[10px] leading-none`,children:`-`})]})}),(0,w.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#f3f3f3] px-1 text-right text-xs font-normal text-[#555]`,style:l?{borderBottom:`2px solid #6b6b6b`}:void 0,children:t.r}),Array.from({length:i},(t,i)=>{let a=c.get(i);return(0,w.jsx)(`td`,{onClick:()=>a&&r(a),className:`h-5 cursor-cell overflow-hidden border border-[#e1e1e1] px-1.5 whitespace-nowrap`,style:{background:a?.fill?`#${a.fill}`:void 0,fontWeight:a?.bold?700:void 0,color:a?.color?`#${a.color}`:void 0,textAlign:a?.numeric?`right`:`left`,outline:a&&n?.ref===a.ref?`2px solid #1f6e43`:void 0,outlineOffset:-2,borderRight:i===e.xSplit-1?`2px solid #6b6b6b`:void 0,borderBottom:l?`2px solid #6b6b6b`:void 0},children:a?.text},i)})]},t.r)})})]})]})}function lt({blob:e}){let t=C.useRef(null),[n,r]=C.useState(`loading`);return C.useEffect(()=>{let n=!1;return(async()=>{try{let i=await ke(()=>import(`./pdf-YwugTw7Y.js`),[],import.meta.url),a=await ke(()=>import(`./pdf.worker.min-BPK52Uye.js`),[],import.meta.url);i.GlobalWorkerOptions.workerSrc=a.default;let o=await i.getDocument({data:new Uint8Array(await e.arrayBuffer())}).promise,s=t.current;if(!s||n)return;s.replaceChildren();let c=s.clientWidth-32;for(let e=1;e<=Math.min(o.numPages,3);e++){let t=await o.getPage(e),r=c/t.getViewport({scale:1}).width,i=t.getViewport({scale:r*(window.devicePixelRatio||1)}),a=document.createElement(`canvas`);if(a.width=i.width,a.height=i.height,a.style.width=`${c}px`,a.className=`mx-auto mb-4 block bg-white shadow-md`,s.appendChild(a),await t.render({canvas:a,viewport:i}).promise,n)return}if(o.numPages>3){let e=document.createElement(`p`);e.className=`pb-4 text-center text-xs text-[#555]`,e.textContent=`${o.numPages-3} more pages in the file`,s.appendChild(e)}r(`ready`)}catch{n||r(`failed`)}})(),()=>{n=!0}},[e]),(0,w.jsxs)(`div`,{className:`max-h-[460px] overflow-auto bg-[#e5e7eb] pt-4`,children:[n===`loading`&&(0,w.jsx)(`p`,{className:`p-6 text-center text-sm text-[#555]`,children:`Drawing the pages...`}),n===`failed`&&(0,w.jsx)(`p`,{className:`p-6 text-center text-sm text-[#555]`,children:`This browser cannot draw the PDF here. Use Download it.`}),(0,w.jsx)(`div`,{ref:t,className:`px-4`})]})}function ut({file:e,onClose:t}){let[n,r]=C.useState(null);return C.useEffect(()=>{e.kind===`xlsx`&&st(e.blob).then(r)},[e]),(0,w.jsxs)(`div`,{className:`overflow-hidden rounded-lg border shadow-2xl`,"data-preview":e.kind,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2 text-sm text-white ${e.kind===`xlsx`?`bg-[#1f6e43]`:`bg-[#9f1d1d]`}`,children:[(0,w.jsx)(`span`,{className:`font-semibold`,children:e.name}),e.note&&(0,w.jsx)(`span`,{className:`hidden text-white/80 sm:inline`,children:e.note}),(0,w.jsxs)(`button`,{type:`button`,onClick:()=>te(e.blob,e.name),className:`ml-auto inline-flex items-center gap-1 rounded px-2 py-1 hover:bg-white/15`,children:[(0,w.jsx)(g,{className:`size-4`}),` Download it`]}),(0,w.jsx)(`button`,{type:`button`,onClick:t,className:`rounded p-1 hover:bg-white/15`,"aria-label":`Close the file`,children:(0,w.jsx)($e,{className:`size-4`})})]}),e.kind===`xlsx`?n?(0,w.jsx)(`div`,{className:`max-h-[420px] overflow-auto`,children:(0,w.jsx)(ct,{sheet:n,select:e.select})}):(0,w.jsx)(`div`,{className:`p-6 text-sm`,children:`Opening the file...`}):(0,w.jsx)(lt,{blob:e.blob})]})}function E(e,t,n){return e?[...e.querySelectorAll(t)].find(e=>e.textContent?.trim().includes(n))??null:null}var D=()=>new Promise(e=>setTimeout(e,60));function O({rootRef:e,preview:t,onClosePreview:n,children:r}){return(0,w.jsxs)(`div`,{ref:e,className:`relative`,children:[r,t&&(0,w.jsx)(`div`,{className:`absolute inset-x-2 top-10 z-20 sm:inset-x-6`,children:(0,w.jsx)(ut,{file:t,onClose:n})})]})}var dt=e(Ee(),1),ft=e=>typeof e==`string`?document.querySelector(e):e()??null;function pt(e,t){return new Promise(n=>{if(e<=0||t.cancelled)return n();let r=window.setTimeout(n,e),i=window.setInterval(()=>{t.cancelled&&(window.clearTimeout(r),window.clearInterval(i),n())},50);window.setTimeout(()=>window.clearInterval(i),e+60)})}function k({steps:e,reset:t,readTime:n=2600}){let[r,i]=C.useState(0),[a,o]=C.useState(!0),[s,l]=C.useState(!1),[d,f]=C.useState(null),p=C.useRef({cancelled:!1}),m=C.useRef(a);m.current=a;let h=C.useCallback((e,t)=>{let n=async n=>{if(t||e.cancelled)return;let r=ft(n);if(!r)return;let i=r.getBoundingClientRect();f({x:i.left+window.scrollX+Math.min(i.width/2,40),y:i.top+window.scrollY+i.height/2,clicking:!1}),await pt(750,e)};return{point:n,click:async r=>{await n(r),t||e.cancelled||(f(e=>e&&{...e,clicking:!0}),await pt(280,e),f(e=>e&&{...e,clicking:!1}))},wait:n=>t?Promise.resolve():pt(n,e)}},[]),ee=C.useCallback(async(r,a)=>{p.current.cancelled=!0;let s={cancelled:!1};p.current=s,l(!1),t(),await pt(30,s);let c=h(s,!0);for(let t=0;t<r;t++)await e[t].run(c),await pt(20,s);let u=h(s,!1);for(let t=r;t<e.length;t++){if(s.cancelled||(i(t),!a&&t>r))return;for(;!m.current&&!s.cancelled;)await pt(100,s);for(await e[t].run(u),await pt(n,s);!m.current&&!s.cancelled;)await pt(100,s)}s.cancelled||(l(!0),o(!1),f(null))},[h,n,t,e]);C.useEffect(()=>(ee(0,!0),()=>{p.current.cancelled=!0}),[]);let te=e=>{o(!0),ee(e,!0)};return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex gap-1`,role:`tablist`,"aria-label":`Demo steps`,children:e.map((e,t)=>(0,w.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":t===r,"aria-label":`Step ${t+1}: ${e.caption}`,onClick:()=>te(t),className:`h-6 flex-1 cursor-pointer py-2.5`,children:(0,w.jsx)(`span`,{className:c(`block h-1 rounded-full transition-colors`,t<r||s?`bg-[#1f5b40]`:t===r?`bg-[#3fae73]`:`bg-muted`)})},t))}),(0,w.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,w.jsx)(`button`,{type:`button`,onClick:()=>s?te(0):o(e=>!e),className:`grid size-9 shrink-0 place-items-center rounded-md bg-[#17452f] text-white hover:bg-[#1f5b40]`,"aria-label":s?`Play again`:a?`Pause`:`Play`,children:s?(0,w.jsx)(u,{className:`size-4`}):a?(0,w.jsx)(Ge,{className:`size-4`}):(0,w.jsx)(qe,{className:`size-4`})}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>te(0),className:`grid size-9 shrink-0 place-items-center rounded-md border hover:bg-muted`,"aria-label":`Restart`,children:(0,w.jsx)(u,{className:`size-4`})}),(0,w.jsxs)(`div`,{className:`min-w-0 text-sm`,"aria-live":`polite`,children:[(0,w.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`Step `,r+1,` of `,e.length]}),(0,w.jsx)(`div`,{className:`font-medium`,children:e[r]?.caption})]})]}),d&&(0,dt.createPortal)((0,w.jsxs)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute z-[60] transition-[left,top] duration-700 ease-in-out`,style:{left:d.x,top:d.y},children:[d.clicking&&(0,w.jsx)(`span`,{className:`absolute -top-4 -left-4 size-8 animate-ping rounded-full bg-[#3fae73]/60`}),(0,w.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,className:`drop-shadow-md`,children:(0,w.jsx)(`path`,{d:`M4 2l15 9-6.5 1.5L16 20l-3 1.5-3.5-7.5L4 19z`,fill:`#17452f`,stroke:`#fff`,strokeWidth:`1.5`})})]}),document.body)]})}var mt=t({default:()=>yt,meta:()=>ht}),ht={title:`Sales pivot`,description:`A sales manager builds a pivot of the quarter's orders: regions and countries down the side, quarters across, overdue orders only, and takes it to Excel.`,docs:`pivot-designer.html`},gt=b(),_t=[{field:`region`,label:`Region`,kind:`dimension`,group:`Where`},{field:`country`,label:`Country`,kind:`dimension`,group:`Where`},{field:`customer`,label:`Customer`,kind:`dimension`,group:`Who`},{field:`product`,label:`Product`,kind:`dimension`,group:`What`},{field:`status`,label:`Status`,kind:`dimension`,group:`What`},{field:`quarter`,label:`Quarter`,kind:`dimension`,group:`When`},{field:`amount`,label:`Amount`,kind:`measure`,group:`Numbers`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`quantity`,label:`Units`,kind:`measure`,group:`Numbers`}],vt={numFmt:`"$"#,##0`};function yt(){let[e,t]=C.useState(()=>oe(_t)),[r,i]=C.useState(null),a=C.useRef(null),o=C.useRef(null),s=C.useCallback(e=>{o.current=e},[]),c=e=>()=>E(a.current,`aside[aria-label="Pivot fields"] [draggable="true"]`,e),l=e=>()=>a.current?.querySelector(`[data-well="${e}"]`),u=C.useMemo(()=>[{caption:`120 orders as a pivot: regions down the side, the total of each region's orders in the cells.`,run:e=>e.point(()=>a.current?.querySelector(`table`))},{caption:`Drag Quarter into Columns. Each region spreads across the quarters, with a total on the right.`,run:async e=>{await e.click(c(`Quarter`)),await e.point(l(`cols`)),t(e=>n(e,_t,`quarter`,`cols`))}},{caption:`Add Country to Rows. Every region opens into its countries and keeps its subtotal.`,run:async e=>{await e.click(c(`Country`)),await e.point(l(`rows`)),t(e=>e.rows.includes(`country`)?e:n(e,_t,`country`,`rows`))}},{caption:`Switch Sum to Average from the value's menu. Every cell is worked out again from the orders behind it.`,run:async e=>{await e.click(()=>a.current?.querySelector(`[data-well="values"] button[aria-label="Options for Amount"]`)),t(e=>we(e,_t,0,`avg`))}},{caption:`Put Status in Filters and keep only Overdue. The pivot now shows the money that is late.`,run:async e=>{await e.click(c(`Status`)),await e.point(l(`filters`)),t(e=>{let t=n(e,_t,`status`,`filters`);return{...t,filters:t.filters.map(e=>e.field===`status`?{...e,allowed:[`Overdue`]}:e)}})}},{caption:`Export to Excel. Regions become outline rows you can collapse, and every cell is a number you can sum.`,run:async e=>{if(await e.click(()=>E(a.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D(),!o.current)return;let t=await v(o.current.table,{download:!1,rowStyle:d});i({blob:t,name:`overdue-by-region.xlsx`,kind:`xlsx`,select:`B3`,note:`the exported file`})}}],[]),f=C.useCallback(()=>{t(oe(_t)),i(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:u,reset:f}),(0,w.jsx)(O,{rootRef:a,preview:r,onClosePreview:()=>i(null),children:(0,w.jsx)(Ae,{data:gt,fields:_t,layout:e,onLayoutChange:t,pivotOptions:vt,onPivotChange:s,actions:e=>(0,w.jsx)(S,{table:e.table,fileName:`sales-pivot`,rowStyle:d})})})]})}function bt(e){return xt(e)||typeof e==`function`||St(e)}function xt(e){return typeof e==`function`&&(()=>{let t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()}function St(e){return typeof e==`object`&&typeof e.$$typeof==`symbol`&&[`react.memo`,`react.forward_ref`].includes(e.$$typeof.description)}function Ct(e,t){return e==null?null:bt(e)?C.createElement(e,t):e}function wt(e){if(`cell`in e&&e.cell){let t=e.cell,n=t.column.columnDef,r=t,i=n;return r.getIsAggregated?.()?Ct(i.aggregatedCell??n.cell,t.getContext()):r.getIsPlaceholder?.()?null:Ct(n.cell,t.getContext())}return`header`in e&&e.header?Ct(e.header.column.columnDef.header,e.header.getContext()):`footer`in e&&e.footer?Ct(e.footer.column.columnDef.footer,e.footer.getContext()):null}function Tt({update:e,notify:t,unwatched:n}){return{link:r,unlink:i,propagate:a,checkDirty:o,shallowPropagate:s};function r(e,t,n){let r=t.depsTail;if(r!==void 0&&r.dep===e)return;let i=r===void 0?t.deps:r.nextDep;if(i!==void 0&&i.dep===e){i.version=n,t.depsTail=i;return}let a=e.subsTail;if(a!==void 0&&a.version===n&&a.sub===t)return;let o=t.depsTail=e.subsTail={version:n,dep:e,sub:t,prevDep:r,nextDep:i,prevSub:a,nextSub:void 0};i!==void 0&&(i.prevDep=o),r===void 0?t.deps=o:r.nextDep=o,a===void 0?e.subs=o:a.nextSub=o}function i(e,t=e.sub){let r=e.dep,i=e.prevDep,a=e.nextDep,o=e.nextSub,s=e.prevSub;return a===void 0?t.depsTail=i:a.prevDep=i,i===void 0?t.deps=a:i.nextDep=a,o===void 0?r.subsTail=s:o.prevSub=s,s===void 0?(r.subs=o)===void 0&&n(r):s.nextSub=o,a}function a(e){let n=e.nextSub,r;top:do{let i=e.sub,a=i.flags;if(a&60?a&12?a&4?!(a&48)&&c(e,i)?(i.flags=a|40,a&=1):a=0:i.flags=a&-9|32:a=0:i.flags=a|32,a&2&&t(i),a&1){let t=i.subs;if(t!==void 0){let i=(e=t).nextSub;i!==void 0&&(r={value:n,prev:r},n=i);continue}}if((e=n)!==void 0)n=e.nextSub;else{for(;r!==void 0;)if(e=r.value,r=r.prev,e!==void 0){n=e.nextSub;continue top}break}}while(1)}function o(t,n){let r,i=0,a=!1;top:do{let o=t.dep,c=o.flags;if(n.flags&16)a=!0;else if((c&17)==17){if(e(o)){let e=o.subs;e.nextSub!==void 0&&s(e),a=!0}}else if((c&33)==33){(t.nextSub!==void 0||t.prevSub!==void 0)&&(r={value:t,prev:r}),t=o.deps,n=o,++i;continue}if(!a){let e=t.nextDep;if(e!==void 0){t=e;continue}}for(;i--;){let i=n.subs,o=i.nextSub!==void 0;if(o?(t=r.value,r=r.prev):t=i,a){if(e(n)){o&&s(i),n=t.sub;continue}a=!1}else n.flags&=-33;n=t.sub;let c=t.nextDep;if(c!==void 0){t=c;continue top}}return a}while(1)}function s(e){do{let n=e.sub,r=n.flags;(r&48)==32&&(n.flags=r|16,(r&6)==2&&t(n))}while((e=e.nextSub)!==void 0)}function c(e,t){let n=t.depsTail;for(;n!==void 0;){if(n===e)return!0;n=n.prevDep}return!1}}function Et(e,t,n){let r=typeof e==`object`,i=r?e:void 0;return{next:(r?e.next:e)?.bind(i),error:(r?e.error:t)?.bind(i),complete:(r?e.complete:n)?.bind(i)}}var Dt=[],Ot=0,{link:kt,unlink:At,propagate:jt,checkDirty:Mt,shallowPropagate:Nt}=Tt({update(e){return e._update()},notify(e){Dt[Ft++]=e,e.flags&=-3},unwatched(e){e.depsTail!==void 0&&(e.depsTail=void 0,e.flags=17,Rt(e))}}),Pt=0,Ft=0,A,It=0;function Lt(e){try{++It,e()}finally{--It||zt()}}function Rt(e){let t=e.depsTail,n=t===void 0?e.deps:t.nextDep;for(;n!==void 0;)n=At(n,e)}function zt(){if(!(It>0)){for(;Pt<Ft;){let e=Dt[Pt];Dt[Pt++]=void 0,e.notify()}Pt=0,Ft=0}}function Bt(e,t){let n=typeof e==`function`,r=e,i={_snapshot:n?void 0:e,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:+!n,get(){return A!==void 0&&kt(i,A,Ot),i._snapshot},subscribe(e){let t=Et(e),n={current:!1},r=Vt(()=>{i.get(),n.current?(A=void 0,t.next?.(i._snapshot)):n.current=!0});return{unsubscribe:()=>{r.stop()}}},_update(e){let a=A,o=t?.compare??Object.is;if(n)A=i,++Ot,i.depsTail=void 0;else if(e===void 0)return!1;n&&(i.flags=5);try{let t=i._snapshot,a=typeof e==`function`?e(t):e===void 0&&n?r(t):e;return t===void 0||!o(t,a)?(i._snapshot=a,!0):!1}finally{A=a,n&&(i.flags&=-5),Rt(i)}}};return n?(i.flags=17,i.get=function(){let e=i.flags;if(e&16||e&32&&Mt(i.deps,i)){if(i._update()){let e=i.subs;e!==void 0&&Nt(e)}}else e&32&&(i.flags=e&-33);return A!==void 0&&kt(i,A,Ot),i._snapshot}):i.set=function(e){if(i._update(e)){let e=i.subs;e!==void 0&&(jt(e),Nt(e),zt())}},i}function Vt(e){let t=()=>{let t=A;A=n,++Ot,n.depsTail=void 0,n.flags=6;try{return e()}finally{A=t,n.flags&=-5,Rt(n)}},n={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:6,notify(){let e=this.flags;e&16||e&32&&Mt(this.deps,this)?t():this.flags=2},stop(){this.flags=0,this.depsTail=void 0,Rt(this)}};return t(),n}function Ht(e,t){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,r]of e)if(!t.has(n)||!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();let n=Ut(e);if(n.length!==Ut(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function Ut(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}var Wt=h();function Gt(e,t){return e===t}function Kt(e,t=e=>e,n){let r=n?.compare??Gt,i=(0,C.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,C.useCallback)(()=>e.get(),[e]);return(0,Wt.useSyncExternalStoreWithSelector)(i,a,a,t,r)}function qt(e){let t=Kt(e.source,e.selector,{compare:Ht});return typeof e.children==`function`?e.children(t):e.children}function Jt(e){let t=e;return Object.defineProperty(e,"state",{get(){return e.get()}}),`set`in e&&(t.setState=e.set.bind(e)),t}function Yt(e){let{createAtom:t,batch:n}=e,r=t(0);return{createOptionsStore:!1,wrapExternalAtoms:!1,addSubscription:()=>{throw Error(`Feature not supported in current reactivity implementation`)},unmount:()=>{throw Error(`Feature not supported in current reactivity implementation`)},schedule:e.schedule??(e=>queueMicrotask(e)),batch:n,untrack:e=>e(),createReadonlyAtom:(e,n)=>{let i=n?.compare??Object.is,a=!1,o,s=()=>{let t=e();return a&&i(o,t)||(o=t,a=!0),o},c=t(()=>(r.get(),s()),{compare:i});return{get:s,subscribe:c.subscribe.bind(c)}},createWritableAtom:(e,n)=>t(e,{compare:n?.compare}),commit:()=>{r.set(e=>e+1)}}}function Xt(e,t=Object.is){let n=!1,r;return{get:e.get,markCommitted:e=>{r=e,n=!0},subscribe:i=>e.subscribe(e=>{n&&t(r,e)||i(e)})}}function Zt(){return Yt({createAtom:Bt,batch:Lt})}function Qt(e,t){return typeof e==`function`?e(t):e}function j(e){if(Array.isArray(e))return e.map(j);if(e&&typeof e==`object`){let t=Object.getPrototypeOf(e);if(t!==Object.prototype&&t!==null)return e;let n=t===null?M():{},r=Object.keys(e);for(let t=0;t<r.length;t++){let i=r[t];Object.defineProperty(n,i,{configurable:!0,enumerable:!0,value:j(e[i]),writable:!0})}return n}return e}function $t(e,t){let n=Object.keys(t),r=e;for(let e=0;e<n.length;e++){let i=n[e];!i.startsWith(`_memo_`)&&i!==`_cellsCache`&&(r[i]=t[i])}return e}function M(){return Object.create(null)}function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function P(e,t){return n=>{(t.options.atoms?.[e]??t.baseAtoms[e]).set(e=>Qt(n,e))}}function en(e){if(typeof e!=`object`||!e)return!1;if(Array.isArray(e))return!0;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function tn(e){return Reflect.ownKeys(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}var nn=3;function rn(e,t){return an(e,t,nn)}function an(e,t,n){if(Object.is(e,t))return!0;if(n<=0||!en(e)||!en(t)||(Array.isArray(e)||Array.isArray(t))&&(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length))return!1;let r=tn(e),i=tn(t);if(r.length!==i.length)return!1;let a=e,o=t;for(let e=0;e<r.length;e++){let i=r[e];if(!Object.prototype.propertyIsEnumerable.call(t,i)||!an(a[i],o[i],n-1))return!1}return!0}function on(e,t,n,r=rn){let i=`on${t.charAt(0).toUpperCase()}${t.slice(1)}Change`,a=e.options[i];a&&a(e=>{let t=Qt(n,e);return r(e,t)?e:t})}function sn(e){return e instanceof Function}function cn(e,t){let n=[],r=e=>{e.forEach(e=>{n.push(e);let i=t(e);i.length&&r(i)})};return r(e),n}var ln=({fn:e,memoDeps:t,onAfterCompare:n,onAfterUpdate:r,onBeforeCompare:i,onBeforeUpdate:a})=>{let o=[],s;return c=>{i?.();let l=t?.(c),u=!l||l.length!==o?.length;if(!u&&l){for(let e=0;e<l.length;e++)if(l[e]!==o[e]){u=!0;break}}return n?.(u),u&&(o=l,a?.(),s=e(...l??[]),r?.(s)),s}};function un(e){let t=!1;return()=>{t?e():t=!0}}function F({feature:e,fnName:t,objectId:n,onAfterUpdate:r,table:i,...a}){let o={onAfterUpdate:r?()=>{let{schedule:e,untrack:t}=i._reactivity;e(()=>t(()=>r()))}:void 0};return ln({...a,...o})}function dn(e,t=`_`){let[n,r]=e.replace(t,` `).split(` `);return{fnKey:r,fnName:`${n}.${r}`,parentName:n}}function I(e,t,n){for(let[r,{fn:i,memoDeps:a}]of Object.entries(n)){let{fnKey:n,fnName:o}=dn(r);t[n]=a?F({memoDeps:a,fn:i,fnName:o,table:t,feature:e}):i}}function L(e,t,n,r){for(let[i,{fn:a,memoDeps:o}]of Object.entries(r)){let{fnKey:r,fnName:s}=dn(i);if(o){let i=`_memo_${r}`;t[r]=function(...t){if(!this[i]){let t=this;this[i]=F({memoDeps:e=>o(t,e),fn:(...e)=>a(t,...e),fnName:s,objectId:t.id,table:n,feature:e})}return this[i](...t)}}else t[r]=function(...e){return a(this,...e)}}}function R(e,t,n,...r){return e[t]?.(...r)??n(e,...r)}function fn(e){return e.row.getValue(e.column.id)}function pn(e){return e.getValue()??e.table.options.renderFallbackValue}function mn(e){return{table:e.table,column:e.column,row:e.row,cell:e,getValue:()=>e.getValue(),renderValue:()=>e.renderValue()}}var hn={assignCellPrototype:(e,t)=>{L(`coreCellsFeature`,e,t,{cell_getValue:{fn:e=>fn(e)},cell_renderValue:{fn:e=>pn(e)},cell_getContext:{fn:e=>mn(e),memoDeps:e=>[e]}})}};function gn(e){if(!e._columnPrototype){e._columnPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignColumnPrototype?.(e._columnPrototype,e)}return e._columnPrototype}function _n(e,t,n,r){let i={...e.getDefaultColumnDef(),...t},a=i.accessorKey,o=a===void 0?void 0:String(a),s=i.id??o?.replaceAll(`.`,`_`)??(typeof i.header==`string`?i.header:void 0),c;if(i.accessorFn)c=i.accessorFn;else if(a!==void 0){if(typeof a==`string`&&a.includes(`.`)){let e=a.split(`.`);c=t=>{let n=t;for(let t=0;t<e.length;t++){let r=e[t];n=n?.[r]}return n}}else c=e=>e[i.accessorKey]}if(!s)throw Error();let l=gn(e),u=Object.create(l);u.accessorFn=c,u.columnDef=i,u.columns=[],u.depth=n,u.id=`${String(s)}`,u.parent=r;let d=e._columnInstanceInitFns;for(let e=0;e<d.length;e++)d[e](u);return u}function z(e){return e.getIsVisible?.()??!0}function vn(e){return e.getVisibleLeafColumns?.()??e.getAllLeafColumns()}function yn(e){return e.getVisibleCells?.()??e.getAllCells()}function bn(e){return e.getVisibleCellsByColumnId?.()??e.getAllCellsByColumnId()}function xn(e,t){let n=e,r=t;return n.getOrderColumnsFn?.()(r)??n._orderGroupedColumns?.(r)??t}function Sn(e,t,n,r){return e._orderByColumnPinning?.(t,n,r)??t}function Cn(e,t){return e.getPinnedVisibleLeafColumns?.(t)??(t&&t!==`center`?[]:vn(e))}function wn(e){return e.getGlobalFilterFn?.()}function Tn(e){return e.getCanGlobalFilter?.()??!1}function En(e,t){return e._expandRows?.(t)??t}function Dn(e){e.autoResetExpanded?.()}function On(e){e.autoResetPageIndex?.()}function kn(e){e.autoResetSorting?.()}function An(e){e.autoResetCellSelection?.()}function jn(e){return e._aggregateColumnValue}function Mn(e){return[e,...e.columns.flatMap(e=>e.getFlatColumns())]}function Nn(e){if(e.columns.length){let t=e.columns.flatMap(e=>e.getLeafColumns());return xn(e.table,t)}return[e]}function Pn(e){return{header:e=>{let t=e.header.column.columnDef;return t.accessorKey?t.accessorKey:t.accessorFn?t.id:null},cell:e=>e.renderValue()?.toString?.()??null,...Object.values(e._features).reduce((e,t)=>Object.assign(e,t.getDefaultColumnDef?.()),{}),...e.options.defaultColumn}}function Fn(e,t,n,r=0){let i=Array(t.length);for(let a=0;a<t.length;a++){if(!(a in t))continue;let o=t[a],s=_n(e,o,r,n),c=o;s.columns=c.columns?Fn(e,c.columns,s,r+1):[],i[a]=s}return i}function In(e){return Fn(e,e.options.columns)}function Ln(e){return e.getAllColumns().flatMap(e=>e.getFlatColumns())}function Rn(e){let t=M(),n=e.getAllFlatColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function zn(e){return xn(e,e.getAllColumns().flatMap(e=>e.getLeafColumns()))}function Bn(e){let t=M(),n=e.getAllLeafColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function Vn(e,t){return e.getAllFlatColumnsById()[t]}var Hn={assignColumnPrototype:(e,t)=>{L(`coreColumnsFeature`,e,t,{column_getFlatColumns:{fn:e=>Mn(e),memoDeps:e=>[e.table.options.columns]},column_getLeafColumns:{fn:e=>Nn(e),memoDeps:e=>[e.table.atoms.columnOrder?.get(),e.table.atoms.grouping?.get(),e.table.options.columns,e.table.options.groupedColumnMode]}})},constructTableAPIs:e=>{I(`coreColumnsFeature`,e,{table_getDefaultColumnDef:{fn:()=>Pn(e),memoDeps:()=>[e.options.defaultColumn]},table_getAllColumns:{fn:()=>In(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumns:{fn:()=>Ln(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumnsById:{fn:()=>Rn(e),memoDeps:()=>[e.options.columns]},table_getAllLeafColumns:{fn:()=>zn(e),memoDeps:()=>[e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getAllLeafColumnsById:{fn:()=>Bn(e),memoDeps:()=>[e.getAllLeafColumns()]},table_getColumn:{fn:t=>Vn(e,t)}})}};function Un(e){if(!e._headerPrototype){e._headerPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignHeaderPrototype?.(e._headerPrototype,e)}return e._headerPrototype}function Wn(e,t,n){let r=Un(e),i=Object.create(r);i.colSpan=0,i.column=t,i.depth=n.depth,i.headerGroup=null,i.id=n.id??t.id,i.index=n.index,i.isPlaceholder=!!n.isPlaceholder,i.placeholderId=n.placeholderId,i.rowSpan=0,i.subHeaders=[];let a=e._headerInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function Gn(e,t=1){let n=t;for(let r=0;r<e.length;r++){let i=e[r];z(i)&&i.columns.length&&(n=Math.max(n,Gn(i.columns,t+1)))}return n}function Kn(e,t){return e?`${e}_${t}`:String(t)}function qn(e,t,n,r){let i=e??``;return t&&(i=i?`${i}_${t}`:String(t)),n&&(i=i?`${i}_${n}`:n),r&&(i=i?`${i}_${r}`:r),i}function Jn(e,t){let n=0;for(let r=0;r<e.length;r++)e[r].column===t&&n++;return n}function Yn(e,t,n,r,i,a){let o={depth:t,id:Kn(r,t),headers:[]},s=[];for(let i=0;i<e.length;i++){if(!(i in e))continue;let a=e[i],c=s[s.length-1],l=a.column.depth===o.depth,u,d=!1;if(l&&a.column.parent?u=a.column.parent:(u=a.column,d=!0),c&&c.column===u)c.subHeaders.push(a);else{let e=Wn(n,u,{id:qn(r,t,u.id,a.id),isPlaceholder:d,placeholderId:d?String(Jn(s,u)):void 0,depth:t,index:s.length});e.subHeaders.push(a),s.push(e)}o.headers.push(a),a.headerGroup=o}for(let e=0;e<a.length;e++)a[e](o);i.push(o),t>0&&Yn(s,t-1,n,r,i,a)}function Xn(e){for(let t=0;t<e.length;t++){let n=e[t];if(!z(n.column))continue;let r=0;if(n.subHeaders.length){Xn(n.subHeaders);for(let e=0;e<n.subHeaders.length;e++){let t=n.subHeaders[e];z(t.column)&&(r+=t.colSpan)}}else r=1;if(n.colSpan=r,n.isPlaceholder&&n.subHeaders.length===1&&n.subHeaders[0].column===n.column){let e=1,t=n.subHeaders[0];for(;t;)t.rowSpan=0,e++,t=t.subHeaders.length===1&&t.subHeaders[0].column===n.column?t.subHeaders[0]:void 0;n.rowSpan=e}else n.rowSpan=1}}function Zn(e,t,n,r){let i=Gn(e),a=[],o=n._headerGroupInstanceInitFns,s=Array(t.length);for(let e=0;e<t.length;e++)e in t&&(s[e]=Wn(n,t[e],{depth:i,index:e}));return Yn(s,i-1,n,r,a,o),a.reverse(),Xn(a[0]?.headers??[]),a}function Qn(e,t){for(let n=0;n<e.subHeaders.length;n++)Qn(e.subHeaders[n],t);t.push(e)}function $n(e){let t=[];return Qn(e,t),t}function er(e){return{column:e.column,header:e,table:e.column.table}}function tr(e){return Zn(e.getAllColumns(),Sn(e,vn(e),e=>e.id),e)}function nr(e){return[...e.getHeaderGroups()].reverse()}function rr(e){let t=e.getHeaderGroups(),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function ir(e){let t=e.getHeaderGroups()[0]?.headers??[],n=[];for(let e=0;e<t.length;e++){let r=t[e].getLeafHeaders();for(let e=0;e<r.length;e++)n.push(r[e])}return n}var ar={assignHeaderPrototype:(e,t)=>{L(`coreHeadersFeature`,e,t,{header_getLeafHeaders:{fn:e=>$n(e),memoDeps:e=>[e.column.table.options.columns]},header_getContext:{fn:e=>er(e),memoDeps:e=>[e.column.table.options.columns]}})},constructTableAPIs:e=>{I(`coreHeadersFeature`,e,{table_getHeaderGroups:{fn:()=>tr(e),memoDeps:()=>[e.options.columns,e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.options.groupedColumnMode]},table_getFooterGroups:{fn:()=>nr(e),memoDeps:()=>[e.getHeaderGroups()]},table_getFlatHeaders:{fn:()=>rr(e),memoDeps:()=>[e.getHeaderGroups()]},table_getLeafHeaders:{fn:()=>ir(e),memoDeps:()=>[e.getHeaderGroups()]}})}};function or(e){if(!e._rowPrototype){e._rowPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignRowPrototype?.(e._rowPrototype,e)}return e._rowPrototype}var sr=(e,t,n,r,i,a,o)=>{let s=or(e),c=Object.create(s);c._displayIndexCache=-1,c._uniqueValuesCache=M(),c._valuesCache=M(),c.depth=i,c.id=t,c.index=r,c.original=n,c.parentId=o,c.subRows=a??[];let l=e._rowInstanceInitFns;for(let e=0;e<l.length;e++)l[e](c);return c};function cr(){return e=>F({feature:`coreRowModelsFeature`,table:e,fnName:`table.getCoreRowModel`,memoDeps:()=>[e.options.data],fn:()=>ur(e,e.options.data),onAfterUpdate:un(()=>{Dn(e),On(e),kn(e),An(e)})})}function lr(e,t,n,r=0,i){let a=[];for(let o=0;o<n.length;o++){let s=n[o],c=sr(e,e.getRowId(s,o,i),s,o,r,void 0,i?.id);t.flatRows.push(c),t.rowsById[c.id]=c,a.push(c),e.options.getSubRows&&(c.originalSubRows=e.options.getSubRows(s,o),c.originalSubRows?.length&&(c.subRows=lr(e,t,c.originalSubRows,r+1,c)))}return a}function ur(e,t){let n={rows:[],flatRows:[],rowsById:M()};return n.rows=lr(e,n,t),n}function dr(e){return e._rowModels.coreRowModel||(e._rowModels.coreRowModel=e.options.features.coreRowModel?.(e)??cr()(e)),e._rowModels.coreRowModel()}function fr(e){return e.getCoreRowModel()}function pr(e){return e._rowModels.filteredRowModel||(e._rowModels.filteredRowModel=e.options.features.filteredRowModel?.(e)),e.options.manualFiltering||!e._rowModels.filteredRowModel?e.getPreFilteredRowModel():e._rowModels.filteredRowModel()}function mr(e){return e.getFilteredRowModel()}function hr(e){return e._rowModels.groupedRowModel||(e._rowModels.groupedRowModel=e.options.features.groupedRowModel?.(e)),e.options.manualGrouping||!e._rowModels.groupedRowModel?e.getPreGroupedRowModel():e._rowModels.groupedRowModel()}function gr(e){return e.getGroupedRowModel()}function _r(e){return e._rowModels.sortedRowModel||(e._rowModels.sortedRowModel=e.options.features.sortedRowModel?.(e)),e.options.manualSorting||!e._rowModels.sortedRowModel?e.getPreSortedRowModel():e._rowModels.sortedRowModel()}function vr(e){return e.getSortedRowModel()}function yr(e){return e._rowModels.expandedRowModel||(e._rowModels.expandedRowModel=e.options.features.expandedRowModel?.(e)),e.options.manualExpanding||!e._rowModels.expandedRowModel?e.getPreExpandedRowModel():e._rowModels.expandedRowModel()}function br(e){return e.getExpandedRowModel()}function xr(e){return e._rowModels.paginatedRowModel||(e._rowModels.paginatedRowModel=e.options.features.paginatedRowModel?.(e)),e.options.manualPagination||!e._rowModels.paginatedRowModel?e.getPrePaginatedRowModel():e._rowModels.paginatedRowModel()}function Sr(e){return e.getPaginatedRowModel()}var Cr={constructTableAPIs:e=>{I(`coreRowModelsFeature`,e,{table_getCoreRowModel:{fn:()=>dr(e)},table_getPreFilteredRowModel:{fn:()=>fr(e)},table_getFilteredRowModel:{fn:()=>pr(e)},table_getPreGroupedRowModel:{fn:()=>mr(e)},table_getGroupedRowModel:{fn:()=>hr(e)},table_getPreSortedRowModel:{fn:()=>gr(e)},table_getSortedRowModel:{fn:()=>_r(e)},table_getPreExpandedRowModel:{fn:()=>vr(e)},table_getExpandedRowModel:{fn:()=>yr(e)},table_getPrePaginatedRowModel:{fn:()=>br(e)},table_getPaginatedRowModel:{fn:()=>xr(e)},table_getRowModel:{fn:()=>Sr(e)}})}};function wr(e){if(!e._cellPrototype){e._cellPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignCellPrototype?.(e._cellPrototype,e)}return e._cellPrototype}function Tr(e,t,n){let r=wr(n),i=Object.create(r);i.column=e,i.id=`${t.id}_${e.id}`,i.row=t;let a=n._cellInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function Er(e){let t=e.table.getRowsInDisplayOrder(),n=e._displayIndexCache;return t[n]===e?n:-1}function Dr(e){let t=e.getPrePaginatedRowModel(),n=e.options.paginateExpandedRows===!1?En(e,t).rows:t.rows;for(let e=0;e<n.length;e++)n[e]._displayIndexCache=e;return n}function Or(e,t){if(N(e._valuesCache,t))return e._valuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return e._valuesCache[t]=n.accessorFn(e.original,e.index),e._valuesCache[t]}function kr(e,t){if(N(e._uniqueValuesCache,t))return e._uniqueValuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return n.columnDef.getUniqueValues?(e._uniqueValuesCache[t]=n.columnDef.getUniqueValues(e.original,e.index),e._uniqueValuesCache[t]):(e._uniqueValuesCache[t]=[e.getValue(t)],e._uniqueValuesCache[t])}function Ar(e,t){return e.getValue(t)??e.table.options.renderFallbackValue}function jr(e){return cn(e.subRows,e=>e.subRows)}function Mr(e){let t=e.getCoreRowModel().flatRows,n=0;for(let e=0;e<t.length;e++)n=Math.max(n,t[e].depth);return n}function Nr(e){if(e.parentId)return e.table.getCoreRowModel().rowsById[e.parentId]??e.table.getRow(e.parentId,!0)}function Pr(e){let t=[],n=e;for(;;){let e=n.getParentRow();if(!e)break;t.push(e),n=e}return t.reverse()}function Fr(e){let t=e.table.getAllLeafColumns(),n=e._cellsCache;n||=e._cellsCache=new WeakMap;let r=Array(t.length);for(let i=0;i<t.length;i++){let a=t[i],o=n.get(a);o||(o=Tr(a,e,e.table),n.set(a,o)),r[i]=o}return r}function Ir(e){let t=M(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];t[r.column.id]=r}return t}function Lr(e,t,n,r){return t.options.getRowId?.(e,n,r)??(r?`${r.id}.${n}`:String(n))}function Rr(e,t,n){let r=(n?e.getPrePaginatedRowModel():e.getRowModel()).rowsById[t];if(!r&&(r=e.getCoreRowModel().rowsById[t],!r))throw Error();return r}var zr={assignRowPrototype:(e,t)=>{L(`coreRowsFeature`,e,t,{row_getDisplayIndex:{fn:e=>Er(e)},row_getAllCellsByColumnId:{fn:e=>Ir(e),memoDeps:e=>[e.getAllCells()]},row_getAllCells:{fn:e=>Fr(e),memoDeps:e=>[e.table.getAllLeafColumns()]},row_getLeafRows:{fn:e=>jr(e),memoDeps:e=>[e.subRows]},row_getParentRow:{fn:e=>Nr(e)},row_getParentRows:{fn:e=>Pr(e)},row_getUniqueValues:{fn:(e,t)=>kr(e,t)},row_getValue:{fn:(e,t)=>Or(e,t)},row_renderValue:{fn:(e,t)=>Ar(e,t)}})},constructTableAPIs:e=>{I(`coreRowsFeature`,e,{table_getRowsInDisplayOrder:{fn:()=>Dr(e),memoDeps:()=>[e.getPrePaginatedRowModel().rows,e.options.paginateExpandedRows,e.options.paginateExpandedRows===!1?e.atoms.expanded?.get():void 0]},table_getRowId:{fn:(t,n,r)=>Lr(t,e,n,r)},table_getRow:{fn:(t,n)=>Rr(e,t,n)},table_getMaxSubRowDepth:{fn:()=>Mr(e),memoDeps:()=>[e.getCoreRowModel()]}})}};function Br(e,t,n=(e,t)=>e===t){let r=t===void 0?e.options.state:t;e._reactivity.batch(()=>{if(r)for(let t in r){let i=e.baseAtoms[t];if(!i)continue;let a=r[t],o=a===void 0?e.initialState[t]:a;n(e._reactivity.untrack(()=>i.get()),o)||i.set(()=>o)}})}function Vr(e,t,n=(e,t)=>e===t){e._reactivity.batch(()=>{Br(e,t,n),e._reactivity.commit?.()})}function Hr(e){let t=j(e.initialState);e._reactivity.batch(()=>{let n=Object.keys(t);for(let r=0;r<n.length;r++){let i=n[r];e.baseAtoms[i].set(t[i])}});let n=Object.values(e._features);for(let t=0;t<n.length;t++)n[t].resetTableInstanceData?.(e)}function Ur(e,t){let{features:n,atoms:r,initialState:i}=e.options;if(!e.options.mergeOptions)return{...e.options,...t,features:n,atoms:r,initialState:i};let a=e.options.mergeOptions(e.options,t),o={...Object.getOwnPropertyDescriptors(a)};return Object.defineProperties(Object.create(Object.getPrototypeOf(a)),{...o,features:{value:n,enumerable:!0,configurable:!0,writable:!0},atoms:{value:r,enumerable:!0,configurable:!0,writable:!0},initialState:{value:i,enumerable:!0,configurable:!0,writable:!0}})}function Wr(e,t,n){let r=Ur(e,Qt(t,e.options));e.optionsStore?e.optionsStore.set(()=>r):e.options=r,n?.syncExternalState!==!1&&Vr(e,r.state??null)}var Gr={coreCellsFeature:hn,coreColumnsFeature:Hn,coreHeadersFeature:ar,coreRowModelsFeature:Cr,coreRowsFeature:zr,coreTablesFeature:{constructTableAPIs:e=>{I(`coreTablesFeature`,e,{table_reset:{fn:()=>Hr(e)},table_setOptions:{fn:t=>Wr(e,t)}})}}};function B(){return{accessor:(e,t)=>typeof e==`function`?{...t,accessorFn:e}:{...t,accessorKey:e},columns:e=>e,display:e=>e,group:e=>e}}function Kr(){return{}}function qr(e){return e}function Jr(e,t={}){return Object.values(e).forEach(e=>{t=e.getInitialState?.(t)??t}),j(t)}function Yr(e){let t=e.features.coreReactivityFeature,{aggregationFns:n,columnMeta:r,coreRowModel:i,expandedRowModel:a,facetedMinMaxValues:o,facetedRowModel:s,facetedUniqueValues:c,filterFns:l,filterMeta:u,filteredRowModel:d,groupedRowModel:f,paginatedRowModel:p,sortFns:m,sortedRowModel:h,tableMeta:ee,...te}=e.features,g={_cellInstanceInitFns:[],_columnInstanceInitFns:[],_features:{...Gr,...te},_headerGroupInstanceInitFns:[],_headerInstanceInitFns:[],_reactivity:t,_rowInstanceInitFns:[],_rowModelFns:{aggregationFns:n,filterFns:l,sortFns:m},_rowModels:{},atoms:{},baseAtoms:{}},ne=Object.values(g._features),re={...ne.reduce((e,t)=>Object.assign(e,t.getDefaultTableOptions?.(g)),{}),...e};if(t.wrapExternalAtoms&&re.atoms)for(let[e,n]of Object.entries(re.atoms)){let r=n,i=t.createWritableAtom(r.get(),{debugName:`externalAtom/${e}`});re.atoms[e]=i;let a=!1,o=r.subscribe(e=>{a||i.set(e)}),s=i.subscribe(e=>{a=!0,r.set(e),a=!1});t.addSubscription(o),t.addSubscription(s)}t.createOptionsStore?(g.optionsStore=t.createWritableAtom(re,{debugName:`table/optionsStore`}),Object.defineProperty(g,"options",{configurable:!0,enumerable:!0,get(){return g.optionsStore.get()},set(e){g.optionsStore.set(()=>e)}})):g.options=re,g.initialState=Jr(g._features,g.options.initialState);let _=Object.keys(g.initialState);for(let e=0;e<_.length;e++){let n=_[e];g.baseAtoms[n]=t.createWritableAtom(g.initialState[n],{debugName:`table/baseAtoms/${n}`}),g.atoms[n]=t.createReadonlyAtom(()=>{let e=g.options,t=e.atoms?.[n],r=t?t.get():g.baseAtoms[n].get();if(t)return r;let i=e.state;if(i&&N(i,n)){let e=i[n];return e===void 0?g.initialState[n]:e}return r},{debugName:`table/atoms/${n}`})}Br(g),g.store=Jt(t.createReadonlyAtom(()=>{let e={};for(let t=0;t<_.length;t++){let n=_[t];e[n]=g.atoms[n].get()}return e},{compare:Ht,debugName:`table/store`}));for(let e=0;e<ne.length;e++){let t=ne[e];t.initTableInstanceData?.(g),t.initCellInstanceData&&g._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)),t.initColumnInstanceData&&g._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)),t.initHeaderGroupInstanceData&&g._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)),t.initHeaderInstanceData&&g._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)),t.initRowInstanceData&&g._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)),t.constructTableAPIs?.(g)}return g}function Xr(e){return!!e&&typeof e==`object`&&`aggregate`in e}function Zr(e){return!!e&&typeof e==`object`&&`id`in e&&`aggregationFn`in e}function Qr(e){return e===void 0||Number.isNaN(e)?0:Math.max(0,Math.floor(e))}function $r(e,t,n,r,i){if(e.subRows.length&&t<n)for(let a=0;a<e.subRows.length;a++)$r(e.subRows[a],t+1,n,r,i);else r.has(e.id)||(r.add(e.id),i.push(e))}function ei(e,t,n,r){if(e.subRows.length&&t<n)for(let i=0;i<e.subRows.length;i++)ei(e.subRows[i],t+1,n,r);else r.push(e)}function ti(e,t=0){let n=[],r=new Set,i=Qr(t);for(let t=0;t<e.length;t++)$r(e[t],0,i,r,n);return n}function ni(e,t=0){let n=Qr(t),r=!1;if(n>0){for(let t=0;t<e.length;t++)if(e[t].subRows.length){r=!0;break}}if(!r)return e;let i=[];for(let t=0;t<e.length;t++)ei(e[t],0,n,i);return i}function ri(e){if(typeof e==`number`)return`sum`;if(e instanceof Date&&!Number.isNaN(e.getTime()))return`extent`}function ii(e){let t=e.table.getCoreRowModel().flatRows[0]?.getValue(e.id),n=ri(t);if(n)return e.table._rowModelFns.aggregationFns?.[n]}function ai(e,t){return Xr(t)?t:t===`auto`?ii(e):e.table._rowModelFns.aggregationFns?.[t]}function oi(e){let t=e.columnDef.aggregationFn,n=e.table._rowModelFns.aggregationFns,r=e.table.getCoreRowModel(),i=e._resolvedAggregationFnsCache;if(i&&i.option===t&&i.registry===n&&i.coreRowModel===r)return i.value;let a=i=>(e._resolvedAggregationFnsCache={coreRowModel:r,option:t,registry:n,value:i},i);if(t==null)return a([]);if(!Array.isArray(t))return a([{aggregationFn:ai(e,t),id:typeof t==`string`?t:void 0}]);let o=M();for(let e=0;e<t.length;e++){let n=t[e],r=typeof n==`string`?n:Zr(n)?n.id:void 0;r!==void 0&&(o[r]=(o[r]??0)+1)}let s=[];for(let n=0;n<t.length;n++){let r=t[n],i=typeof r==`string`?r:Zr(r)?r.id:void 0;if(i===void 0){s.push({aggregationFn:void 0,id:void 0});continue}if(o[i]>1){s.push({aggregationFn:void 0,id:i});continue}let a=Zr(r)?r.aggregationFn:r;s.push({aggregationFn:ai(e,a),id:i})}return a(s)}function si(e,t,n){if(!t)return e;if(n&&e&&typeof e==`object`)return N(e,n)?e[n]:void 0}function ci(e){let{subRows:t,column:n,groupingRow:r,rows:i,uniqueRows:a}=e,o=n,s=Qr(e.maxDepth??o.columnDef.maxAggregationDepth),c=a?ni(i,s):ti(i,s),l=oi(o),u=Array.isArray(o.columnDef.aggregationFn),d=!!t?.length&&t.every(e=>!!e.groupingColumnId&&e.groupingColumnId!==n.id),f=e=>e.getValue(n.id),p=e=>{let i=e.aggregationFn;if(!i)return;let a={...t?{subRows:t}:{},column:n,columnId:n.id,getValue:f,...r?{groupingRow:r}:{},maxDepth:s,rows:c,table:n.table};return d&&i.merge?i.merge({...a,subRowResults:t.map(t=>si(t.getValue(n.id),u,e.id)),subRows:t}):i.aggregate(a)};if(!u)return l[0]?p(l[0]):void 0;let m=M();for(let e=0;e<l.length;e++){let t=l[e];t.id!==void 0&&(m[t.id]=p(t))}return m}function li(e,t){let n=t?.rows,r=Qr(t?.maxDepth??e.columnDef.maxAggregationDepth),i=e.columnDef.getAggregationValue?.({column:e,maxDepth:r,rows:n,table:e.table});if(i)return i.value;if(e.table.options.manualAggregation)return;if(n!==void 0)return ci({column:e,maxDepth:r,rows:n});let a=e.table.getPreGroupedRowModel(),o=e._aggregationValueCache,s=e.table._rowModelFns.aggregationFns,c=e.columnDef.aggregationFn;if(o&&o.dependency===a&&o.maxDepth===r&&o.registry===s&&o.aggregationFnOption===c)return o.value;let l=ci({column:e,maxDepth:r,rows:a.rows,uniqueRows:!0});return e._aggregationValueCache={aggregationFnOption:c,dependency:a,maxDepth:r,registry:s,value:l},l}function ui(e){let t=e.row.groupingColumnId;return!t||t===e.column.id||(e.column.table.atoms.grouping?.get?.())?.includes(e.column.id)?!1:oi(e.column).some(e=>!!e.aggregationFn)}function di(e,t){return e==null?null:Array.isArray(t)&&typeof e==`object`?Object.keys(e).map(t=>`${t}: ${String(e[t])}`).join(`, `):String(e)}var fi={getDefaultColumnDef:()=>({aggregatedCell:({column:e,getValue:t})=>di(t(),e.columnDef.aggregationFn),aggregationFn:`auto`,maxAggregationDepth:0}),getDefaultTableOptions:()=>({manualAggregation:!1}),assignCellPrototype:(e,t)=>{L(`rowAggregationFeature`,e,t,{cell_getIsAggregated:{fn:e=>ui(e)}})},assignColumnPrototype:(e,t)=>{L(`rowAggregationFeature`,e,t,{column_getAggregationFns:{fn:e=>oi(e)},column_getAggregationValue:{fn:(e,t)=>li(e,t)},column_getAutoAggregationFn:{fn:e=>ii(e),memoDeps:e=>[e.table.getCoreRowModel(),e.table._rowModelFns.aggregationFns]}})},initColumnInstanceData:e=>{e._aggregationValueCache=void 0,e._resolvedAggregationFnsCache=void 0},constructTableAPIs:e=>{I(`rowAggregationFeature`,e,{table__aggregateColumnValue:{fn:ci}})}};function pi(){return[]}function mi(e){let t=e.table._rowModelFns.filterFns,n=e.table.getCoreRowModel().flatRows,r;for(let t=0;t<n.length;t++){let i=n[t].getValue(e.id);if(i!=null){r=i;break}}let i;return i=typeof r==`string`?`includesString`:typeof r==`number`?`inNumberRange`:typeof r==`boolean`?`equals`:Array.isArray(r)?`arrIncludes`:Object.prototype.toString.call(r)===`[object Date]`?`inDateRange`:typeof r==`object`&&r?`equals`:`weakEquals`,t?.[i]}function hi(e){let t=null,n=e.table._rowModelFns.filterFns;return t=sn(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn===`auto`?mi(e):n?.[e.columnDef.filterFn],t??void 0}function gi(e){return(e.columnDef.enableColumnFilter??!0)&&(e.table.options.enableColumnFilters??!0)&&(e.table.options.enableFilters??!0)&&!!e.accessorFn}function _i(e){return yi(e)>-1}function vi(e){return e.table.atoms.columnFilters?.get()?.find(t=>t.id===e.id)?.value}function yi(e){return e.table.atoms.columnFilters?.get()?.findIndex(t=>t.id===e.id)??-1}function bi(e,t){xi(e.table,n=>{let r=hi(e),i=n.find(t=>t.id===e.id),a=Qt(t,i?i.value:void 0);if(Ci(r,a,e))return n.filter(t=>t.id!==e.id);let o={id:e.id,value:a};return i?n.map(t=>t.id===e.id?o:t):n.length?[...n,o]:[o]})}function xi(e,t){let n=e.getAllLeafColumnsById();on(e,`columnFilters`,e=>Qt(t,e).filter(e=>{let t=n[e.id];return!(t&&Ci(hi(t),e.value,t))}))}function Si(e,t){xi(e,t?[]:j(e.initialState.columnFilters??[]))}function Ci(e,t,n){return t===void 0?!0:e?.autoRemove?!!e.autoRemove(t,n):typeof t==`string`&&!t}var wi={getInitialState:e=>({columnFilters:pi(),...e}),getDefaultColumnDef:()=>({filterFn:`auto`}),getDefaultTableOptions:e=>({onColumnFiltersChange:P(`columnFilters`,e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),assignColumnPrototype:(e,t)=>{L(`columnFilteringFeature`,e,t,{column_getAutoFilterFn:{fn:e=>mi(e)},column_getFilterFn:{fn:e=>hi(e)},column_getCanFilter:{fn:e=>gi(e)},column_getIsFiltered:{fn:e=>_i(e)},column_getFilterValue:{fn:e=>vi(e)},column_getFilterIndex:{fn:e=>yi(e)},column_setFilterValue:{fn:(e,t)=>bi(e,t)}})},initRowInstanceData:e=>{e.columnFilters=M(),e.columnFiltersMeta=M()},constructTableAPIs:e=>{I(`columnFilteringFeature`,e,{table_setColumnFilters:{fn:t=>xi(e,t)},table_resetColumnFilters:{fn:t=>Si(e,t)}})}};function Ti(e,t){let n=e.atoms.grouping?.get()??[],{groupedColumnMode:r}=e.options;if(!n.length||!r)return t;let i=t.filter(e=>!n.includes(e.id));if(r===`remove`)return i;let a=new Map;for(let e=0;e<t.length;e++){let n=t[e];a.set(n.id,n)}let o=[];for(let e=0;e<n.length;e++){let t=a.get(n[e]);t&&o.push(t)}return[...o,...i]}function Ei(){return[]}function Di(e){Mi(e.table,t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id])}function Oi(e){return(e.columnDef.enableGrouping??!0)&&(e.table.options.enableGrouping??!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)}function ki(e){return!!e.table.atoms.grouping?.get()?.includes(e.id)}function Ai(e){return e.table.atoms.grouping?.get()?.indexOf(e.id)??-1}function ji(e){let t=Oi(e);return()=>{t&&Di(e)}}function Mi(e,t){on(e,`grouping`,t)}function Ni(e,t){Mi(e,t?[]:j(e.initialState.grouping??[]))}function Pi(e){return!!e.groupingColumnId}function Fi(e,t){if(e._groupingValuesCache&&N(e._groupingValuesCache,t))return e._groupingValuesCache[t];let n=e.table.getColumn(t);return n.columnDef.getGroupingValue?(e._groupingValuesCache&&(e._groupingValuesCache[t]=n.columnDef.getGroupingValue(e.original,e.index,e)),e._groupingValuesCache?.[t]):e.getValue(t)}function Ii(e){let t=e.row;return ki(e.column)&&e.column.id===t.groupingColumnId}function Li(e){return!Ii(e)&&ki(e.column)}var Ri={getInitialState:e=>({grouping:Ei(),...e}),getDefaultTableOptions:e=>({onGroupingChange:P(`grouping`,e),groupedColumnMode:`reorder`}),assignCellPrototype:(e,t)=>{L(`columnGroupingFeature`,e,t,{cell_getIsGrouped:{fn:e=>Ii(e)},cell_getIsPlaceholder:{fn:e=>Li(e)}})},assignColumnPrototype:(e,t)=>{L(`columnGroupingFeature`,e,t,{column_toggleGrouping:{fn:e=>Di(e)},column_getCanGroup:{fn:e=>Oi(e)},column_getIsGrouped:{fn:e=>ki(e)},column_getGroupedIndex:{fn:e=>Ai(e)},column_getToggleGroupingHandler:{fn:e=>ji(e)}})},assignRowPrototype:(e,t)=>{L(`columnGroupingFeature`,e,t,{row_getIsGrouped:{fn:e=>Pi(e)},row_getGroupingValue:{fn:(e,t)=>Fi(e,t)}})},initRowInstanceData:e=>{e._groupingValuesCache=M()},constructTableAPIs:e=>{I(`columnGroupingFeature`,e,{table_setGrouping:{fn:t=>Mi(e,t)},table_resetGrouping:{fn:t=>Ni(e,t)},table__orderGroupedColumns:{fn:t=>Ti(e,t)}})}};function V(){return{start:[],end:[]}}function zi(e,t){let n=e.getLeafColumns(),r=[];for(let e=0;e<n.length;e++){let t=n[e].id;t&&r.push(t)}Ki(e.table,e=>t===`end`?{start:e.start.filter(e=>!r.includes(e)),end:[...e.end.filter(e=>!r.includes(e)),...r]}:t===`start`?{start:[...e.start.filter(e=>!r.includes(e)),...r],end:e.end.filter(e=>!r.includes(e))}:{start:e.start.filter(e=>!r.includes(e)),end:e.end.filter(e=>!r.includes(e))})}function Bi(e){return e.getLeafColumns().some(t=>(t.columnDef.enablePinning??!0)&&(e.table.options.enableColumnPinning??!0))}function Vi(e){let t=e.getLeafColumns(),{start:n,end:r}=e.table.atoms.columnPinning?.get()??V();for(let e=0;e<t.length;e++)if(n.includes(t[e].id))return`start`;for(let e=0;e<t.length;e++)if(r.includes(t[e].id))return`end`;return!1}function Hi(e){let t=Vi(e);return t?e.table.atoms.columnPinning?.get()?.[t].indexOf(e.id)??-1:0}function Ui(e){let t=yn(e),{start:n,end:r}=e.table.atoms.columnPinning?.get()??V();if(!n.length&&!r.length)return t;let i=[...n,...r];return t.filter(e=>!i.includes(e.column.id))}function Wi(e){let{start:t}=e.table.atoms.columnPinning?.get()??V();if(!t.length)return[];let n=bn(e),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&(i.position=`start`,r.push(i))}return r}function Gi(e){let{end:t}=e.table.atoms.columnPinning?.get()??V();if(!t.length)return[];let n=bn(e),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&(i.position=`end`,r.push(i))}return r}function Ki(e,t){on(e,`columnPinning`,t)}function qi(e,t){Ki(e,t?V():j(e.initialState.columnPinning??V()))}function Ji(e,t){let n=e.atoms.columnPinning?.get();return t?!!n?.[t].length:!!(n?.start.length||n?.end.length)}function Yi(e){let t=e.getAllColumns(),n=e.getAllLeafColumnsById(),{start:r}=e.atoms.columnPinning?.get()??V(),i=[];for(let e=0;e<r.length;e++){let t=n[r[e]];t&&z(t)&&i.push(t)}return Zn(t,i,e,`start`)}function Xi(e){let t=e.getAllColumns(),n=e.getAllLeafColumnsById(),{end:r}=e.atoms.columnPinning?.get()??V(),i=[];for(let e=0;e<r.length;e++){let t=n[r[e]];t&&z(t)&&i.push(t)}return Zn(t,i,e,`end`)}function Zi(e){let t=e.getAllColumns(),n=vn(e),{start:r,end:i}=e.atoms.columnPinning?.get()??V();if(r.length||i.length){let e=[...r,...i];n=n.filter(t=>!e.includes(t.id))}return Zn(t,n,e,`center`)}function Qi(e){return[...R(e,`getStartHeaderGroups`,Yi)].reverse()}function $i(e){return[...R(e,`getEndHeaderGroups`,Xi)].reverse()}function ea(e){return[...R(e,`getCenterHeaderGroups`,Zi)].reverse()}function ta(e){let t=R(e,`getStartHeaderGroups`,Yi),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function na(e){let t=R(e,`getEndHeaderGroups`,Xi),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function ra(e){let t=R(e,`getCenterHeaderGroups`,Zi),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function ia(e){return R(e,`getStartFlatHeaders`,ta).filter(e=>!e.subHeaders.length)}function aa(e){return R(e,`getEndFlatHeaders`,na).filter(e=>!e.subHeaders.length)}function oa(e){return R(e,`getCenterFlatHeaders`,ra).filter(e=>!e.subHeaders.length)}function sa(e){let{start:t}=e.atoms.columnPinning?.get()??V(),n=e.getAllLeafColumnsById(),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&r.push(i)}return r}function ca(e){let{end:t}=e.atoms.columnPinning?.get()??V(),n=e.getAllLeafColumnsById(),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&r.push(i)}return r}function la(e){let{start:t,end:n}=e.atoms.columnPinning?.get()??V();if(!t.length&&!n.length)return e.getAllLeafColumns();let r=[...t,...n];return e.getAllLeafColumns().filter(e=>!r.includes(e.id))}function ua(e,t){return t?t===`start`?R(e,`getStartLeafColumns`,sa):t===`end`?R(e,`getEndLeafColumns`,ca):R(e,`getCenterLeafColumns`,la):e.getAllLeafColumns()}function da(e){return R(e,`getStartLeafColumns`,sa).filter(e=>z(e))}function fa(e){return R(e,`getEndLeafColumns`,ca).filter(e=>z(e))}function pa(e){return R(e,`getCenterLeafColumns`,la).filter(e=>z(e))}function ma(e,t){return t?t===`start`?R(e,`getStartVisibleLeafColumns`,da):t===`end`?R(e,`getEndVisibleLeafColumns`,fa):R(e,`getCenterVisibleLeafColumns`,pa):vn(e)}function ha(e,t,n,r){let i=e.atoms.columnPinning?.get();if(!i||!i.start.length&&!i.end.length)return t;let{start:a,end:o}=i,s=r?.();if(!s){s=M();for(let e=0;e<t.length;e++)s[n(t[e])]=t[e]}let c=[];for(let e=0;e<a.length;e++){let t=s[a[e]];t&&c.push(t)}for(let e=0;e<t.length;e++){let r=n(t[e]);!a.includes(r)&&!o.includes(r)&&c.push(t[e])}for(let e=0;e<o.length;e++){let t=s[o[e]];t&&c.push(t)}return c}var ga={getInitialState:e=>({columnPinning:{...V(),...e.columnPinning},...e}),getDefaultTableOptions:e=>({onColumnPinningChange:P(`columnPinning`,e)}),assignColumnPrototype:(e,t)=>{L(`columnPinningFeature`,e,t,{column_pin:{fn:(e,t)=>zi(e,t)},column_getCanPin:{fn:e=>Bi(e)},column_getPinnedIndex:{fn:e=>Hi(e)},column_getIsPinned:{fn:e=>Vi(e)}})},assignRowPrototype:(e,t)=>{L(`columnPinningFeature`,e,t,{row_getCenterVisibleCells:{fn:e=>Ui(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get(),e.table.atoms.columnVisibility?.get()]},row_getStartVisibleCells:{fn:e=>Wi(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get()?.start,e.table.atoms.columnVisibility?.get()]},row_getEndVisibleCells:{fn:e=>Gi(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get()?.end,e.table.atoms.columnVisibility?.get()]}})},constructTableAPIs:e=>{I(`columnPinningFeature`,e,{table_setColumnPinning:{fn:t=>Ki(e,t)},table_resetColumnPinning:{fn:t=>qi(e,t)},table_getIsSomeColumnsPinned:{fn:t=>Ji(e,t)},table__orderByColumnPinning:{fn:(t,n,r)=>ha(e,t,n,r)},table_getStartHeaderGroups:{fn:()=>Yi(e),memoDeps:()=>[e.getAllColumns(),vn(e),e.atoms.columnPinning?.get()?.start,e.atoms.columnOrder?.get()]},table_getCenterHeaderGroups:{fn:()=>Zi(e),memoDeps:()=>[e.getAllColumns(),vn(e),e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get()]},table_getEndHeaderGroups:{fn:()=>Xi(e),memoDeps:()=>[e.getAllColumns(),vn(e),e.atoms.columnPinning?.get()?.end,e.atoms.columnOrder?.get()]},table_getStartFooterGroups:{fn:()=>Qi(e),memoDeps:()=>[R(e,`getStartHeaderGroups`,Yi)]},table_getCenterFooterGroups:{fn:()=>ea(e),memoDeps:()=>[R(e,`getCenterHeaderGroups`,Zi)]},table_getEndFooterGroups:{fn:()=>$i(e),memoDeps:()=>[R(e,`getEndHeaderGroups`,Xi)]},table_getStartFlatHeaders:{fn:()=>ta(e),memoDeps:()=>[R(e,`getStartHeaderGroups`,Yi)]},table_getEndFlatHeaders:{fn:()=>na(e),memoDeps:()=>[R(e,`getEndHeaderGroups`,Xi)]},table_getCenterFlatHeaders:{fn:()=>ra(e),memoDeps:()=>[R(e,`getCenterHeaderGroups`,Zi)]},table_getStartLeafHeaders:{fn:()=>ia(e),memoDeps:()=>[R(e,`getStartHeaderGroups`,Yi)]},table_getEndLeafHeaders:{fn:()=>aa(e),memoDeps:()=>[R(e,`getEndHeaderGroups`,Xi)]},table_getCenterLeafHeaders:{fn:()=>oa(e),memoDeps:()=>[R(e,`getCenterHeaderGroups`,Zi)]},table_getStartLeafColumns:{fn:()=>sa(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getEndLeafColumns:{fn:()=>ca(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getCenterLeafColumns:{fn:()=>la(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getPinnedLeafColumns:{fn:t=>ua(e,t)},table_getStartVisibleLeafColumns:{fn:()=>da(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getCenterVisibleLeafColumns:{fn:()=>pa(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getEndVisibleLeafColumns:{fn:()=>fa(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getPinnedVisibleLeafColumns:{fn:t=>ma(e,t)}})}};function _a(){return M()}function va(){return{size:150,minSize:20,maxSize:2**53-1}}function ya(e){let t=va(),n=e.table.atoms.columnSizing?.get(),r=n&&N(n,e.id)?n[e.id]:void 0;return Math.min(Math.max(e.columnDef.minSize??t.minSize,r??e.columnDef.size??t.size),e.columnDef.maxSize??t.maxSize)}function ba(e){let t=M(),n=M(),r=Array(e.length),i=0;for(let n=0;n<e.length;n++){let a=e[n],o=R(a,`getSize`,ya);r[n]=o,t[a.id]=i,i+=o}let a=0;for(let t=e.length-1;t>=0;t--)n[e[t].id]=a,a+=r[t];return{starts:t,afters:n}}function xa(e){return{all:ba(Cn(e)),center:ba(Cn(e,`center`)),start:ba(Cn(e,`start`)),end:ba(Cn(e,`end`))}}function Sa(e){return e===`start`?`start`:e===`end`?`end`:e===`center`?`center`:`all`}function Ca(e,t){return R(e.table,`getColumnOffsets`,xa)[Sa(t)].starts[e.id]??0}function wa(e,t){return R(e.table,`getColumnOffsets`,xa)[Sa(t)].afters[e.id]??0}function Ta(e){ka(e.table,t=>{let n=M(),r=Object.keys(t);for(let i=0;i<r.length;i++){let a=r[i];a!==e.id&&(n[a]=t[a])}return n})}function Ea(e){if(!e.subHeaders.length)return ya(e.column);let t=0;for(let n=0;n<e.subHeaders.length;n++)t+=Ea(e.subHeaders[n]);return t}function Da(e){return Ea(e)}function Oa(e){if(e.index>0){let t=e.headerGroup?.headers[e.index-1];if(t)return R(t,`getStart`,Oa)+R(t,`getSize`,Da)}return 0}function ka(e,t){e.options.onColumnSizingChange?.(t)}function Aa(e,t){ka(e,t?M():Object.assign(M(),j(e.initialState.columnSizing??{})))}function ja(e){let t=0;for(let n=0;n<e.length;n++)t+=R(e[n],`getSize`,ya);return t}function Ma(e){return e.getHeaderGroups()[0]?.headers.reduce((e,t)=>e+Da(t),0)??0}function Na(e){return ja(Cn(e,`start`))}function Pa(e){return ja(Cn(e,`center`))}function Fa(e){return ja(Cn(e,`end`))}var Ia={getInitialState:e=>({columnSizing:_a(),...e}),getDefaultColumnDef:()=>va(),getDefaultTableOptions:e=>({onColumnSizingChange:P(`columnSizing`,e)}),assignColumnPrototype:(e,t)=>{L(`columnSizingFeature`,e,t,{column_getSize:{fn:e=>ya(e),memoDeps:e=>[t.options.columns,t.atoms.columnSizing?.get()?.[e.id]]},column_getStart:{fn:(e,t)=>Ca(e,t)},column_getAfter:{fn:(e,t)=>wa(e,t)},column_resetSize:{fn:e=>Ta(e)}})},assignHeaderPrototype:(e,t)=>{L(`columnSizingFeature`,e,t,{header_getSize:{fn:e=>Da(e),memoDeps:e=>[t.options.columns,e.column.columns.length>0?t.atoms.columnSizing?.get():t.atoms.columnSizing?.get()?.[e.column.id]]},header_getStart:{fn:e=>Oa(e),memoDeps:()=>[t.options.columns,t.atoms.columnSizing?.get(),t.atoms.columnOrder?.get(),t.atoms.columnPinning?.get(),t.atoms.columnVisibility?.get(),t.atoms.grouping?.get(),t.options.groupedColumnMode]}})},constructTableAPIs:e=>{I(`columnSizingFeature`,e,{table_getColumnOffsets:{fn:()=>xa(e),memoDeps:()=>[e.options.columns,e.atoms.columnSizing?.get(),e.atoms.columnOrder?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_setColumnSizing:{fn:t=>ka(e,t)},table_resetColumnSizing:{fn:t=>Aa(e,t)},table_getTotalSize:{fn:()=>Ma(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getStartTotalSize:{fn:()=>Na(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getCenterTotalSize:{fn:()=>Pa(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getEndTotalSize:{fn:()=>Fa(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]}})}};function La(){return M()}function Ra(e,t){za(e)&&Ga(e.table,n=>{let r=Object.assign(M(),n),i=t??!R(e,`getIsVisible`,H),a=e.getLeafColumns();for(let e=0;e<a.length;e++){let t=a[e];za(t)&&(r[t.id]=i)}return r})}function H(e){let t=e.table.atoms.columnVisibility?.get();if(!t)return!0;let n=e.columns;return n.length?n.some(e=>R(e,`getIsVisible`,H)):(N(t,e.id)?t[e.id]:void 0)??!0}function za(e){return(e.columnDef.enableHiding??!0)&&(e.table.options.enableHiding??!0)}function Ba(e){return t=>{Ra(e,t.target.checked)}}function Va(e){let t=e.getAllCells(),n=[];for(let e=0;e<t.length;e++){let r=t[e];R(r.column,`getIsVisible`,H)&&n.push(r)}return Sn(e.table,n,e=>e.column.id,()=>R(e,`getVisibleCellsByColumnId`,Ha))}function Ha(e){let t=M(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];R(r.column,`getIsVisible`,H)&&(t[r.column.id]=r)}return t}function Ua(e){return e.getAllFlatColumns().filter(e=>R(e,`getIsVisible`,H))}function Wa(e){return e.getAllLeafColumns().filter(e=>R(e,`getIsVisible`,H))}function Ga(e,t){on(e,`columnVisibility`,t)}function Ka(e,t){Ga(e,t?M():Object.assign(M(),j(e.initialState.columnVisibility??{})))}function qa(e,t){t??=!Ja(e);let n=M(),r=e.getAllLeafColumns();for(let e=0;e<r.length;e++){let i=r[e];n[i.id]=t||!za(i)}Ga(e,n)}function Ja(e){return!e.getAllLeafColumns().some(e=>!R(e,`getIsVisible`,H))}function Ya(e){return e.getAllLeafColumns().some(e=>R(e,`getIsVisible`,H))}function Xa(e){return t=>{qa(e,t.target.checked)}}var Za={getInitialState:e=>({columnVisibility:La(),...e}),getDefaultTableOptions:e=>({onColumnVisibilityChange:P(`columnVisibility`,e)}),assignColumnPrototype:(e,t)=>{L(`columnVisibilityFeature`,e,t,{column_getIsVisible:{fn:e=>H(e),memoDeps:e=>[t.options.columns,t.atoms.columnVisibility?.get(),e.columns]},column_getCanHide:{fn:e=>za(e)},column_getToggleVisibilityHandler:{fn:e=>Ba(e)},column_toggleVisibility:{fn:(e,t)=>Ra(e,t)}})},assignRowPrototype:(e,t)=>{L(`columnVisibilityFeature`,e,t,{row_getVisibleCells:{fn:e=>Va(e),memoDeps:e=>[e.getAllCells(),t.atoms.columnPinning?.get(),t.atoms.columnVisibility?.get()]},row_getVisibleCellsByColumnId:{fn:e=>Ha(e),memoDeps:e=>[e.getAllCells(),t.atoms.columnVisibility?.get()]}})},constructTableAPIs:e=>{I(`columnVisibilityFeature`,e,{table_getVisibleFlatColumns:{fn:()=>Ua(e),memoDeps:()=>[e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getVisibleLeafColumns:{fn:()=>Wa(e),memoDeps:()=>[e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_setColumnVisibility:{fn:t=>Ga(e,t)},table_resetColumnVisibility:{fn:t=>Ka(e,t)},table_toggleAllColumnsVisible:{fn:t=>qa(e,t)},table_getIsAllColumnsVisible:{fn:()=>Ja(e)},table_getIsSomeColumnsVisible:{fn:()=>Ya(e)},table_getToggleAllColumnsVisibilityHandler:{fn:()=>Xa(e)}})}};function Qa(e){let t=Object.assign((e,n,r,i)=>{let a=e.getValue(n),o=t.resolveDataValue?t.resolveDataValue(a):a;return t.filter(o,r,e,n,i)},e);return t}var $a=Qa({filter:(e,t)=>!!e?.includes(t),autoRemove:e=>eo(e),resolveFilterValue:e=>String(e).toLowerCase(),resolveDataValue:e=>e==null?void 0:String(e).toLowerCase()});function eo(e){return e==null||e===``}function to(e){return(e.columnDef.enableGlobalFilter??!0)&&(e.table.options.enableGlobalFilter??!0)&&(e.table.options.enableFilters??!0)&&(e.table.options.getColumnCanGlobalFilter?.(e)??!0)&&!!e.accessorFn}function no(){return $a}function ro(e){let{globalFilterFn:t}=e.options,n=e._rowModelFns.filterFns;return sn(t)?t:t===`auto`?no():n?.[t]}function io(e,t){e.options.onGlobalFilterChange?.(t)}function ao(e,t){io(e,t?void 0:j(e.initialState.globalFilter))}var oo={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultTableOptions:e=>({onGlobalFilterChange:P(`globalFilter`,e),globalFilterFn:`auto`,getColumnCanGlobalFilter:t=>{if(`enableGlobalFilter`in t.columnDef&&t.columnDef.enableGlobalFilter===!0)return!0;let n=e.getCoreRowModel().flatRows.find(e=>e.getAllCellsByColumnId()[t.id]?.getValue()!=null)?.getAllCellsByColumnId()[t.id]?.getValue();return typeof n==`string`||typeof n==`number`}}),assignColumnPrototype:(e,t)=>{L(`globalFilteringFeature`,e,t,{column_getCanGlobalFilter:{fn:e=>to(e)}})},constructTableAPIs:e=>{I(`globalFilteringFeature`,e,{table_getGlobalAutoFilterFn:{fn:()=>no()},table_getGlobalFilterFn:{fn:()=>ro(e)},table_setGlobalFilter:{fn:t=>io(e,t)},table_resetGlobalFilter:{fn:t=>ao(e,t)}})}};function so(){return M()}function co(e){e.atoms.expanded&&(e.options.autoResetAll??e.options.autoResetExpanded??!e.options.manualExpanding)&&e._reactivity.schedule(()=>fo(e))}function lo(e,t){e.options.onExpandedChange?.(t)}function uo(e,t){let n=e.atoms.expanded?.get()??{};if(t??!go(e)){if(n===!0||!po(e))return;lo(e,!0)}else{if(n!==!0&&!Object.keys(n).length)return;lo(e,M())}}function fo(e,t){let n=e.initialState.expanded;on(e,`expanded`,t?M():n===!0||Object.assign(M(),j(n??{})))}function po(e){return e.getPrePaginatedRowModel().flatRows.some(e=>xo(e))}function mo(e){return t=>{uo(e)}}function ho(e){let t=e.atoms.expanded?.get()??{};return t===!0||Object.values(t).some(Boolean)}function go(e){let t=e.atoms.expanded?.get()??{};if(t===!0)return!0;if(!Object.keys(t).length)return!1;let n=e.getRowModel().flatRows.filter(e=>xo(e));return!(!n.length||n.some(e=>!yo(e)))}function _o(e){let t=0,n=e.atoms.expanded?.get();return(n===!0?Object.values(e.getRowModel().rowsById).filter(e=>xo(e)).map(e=>e.id):Object.keys(n??{})).forEach(e=>{let n=e.split(`.`);t=Math.max(t,n.length)}),t}function vo(e,t){let n=e.table.atoms.expanded?.get()??{},r=n===!0||bo(n,e.id),i=t??!r;i!==r&&(!i||xo(e))&&lo(e.table,t=>{let n=t===!0||bo(t,e.id),r=M();if(t===!0?Object.values(e.table.getRowModel().rowsById).forEach(e=>{xo(e)&&(r[e.id]=!0)}):r=Object.assign(M(),t),!n&&i)return r[e.id]=!0,r;if(n&&!i){let t=M(),n=Object.keys(r);for(let i=0;i<n.length;i++){let a=n[i];a!==e.id&&r[a]&&(t[a]=!0)}return t}return t})}function yo(e){let t=e.table.atoms.expanded?.get()??{};return!!(e.table.options.getIsRowExpanded?.(e)??(t===!0||bo(t,e.id)))}function bo(e,t){return!!(e&&e!==!0&&N(e,t)&&e[t])}function xo(e){return e.table.options.getRowCanExpand?.(e)??((e.table.options.enableExpanding??!0)&&!!e.subRows.length)}function So(e){let t=!0,n=e;for(;t&&n.parentId;)n=e.table.getRow(n.parentId,!0),t=yo(n);return t}function Co(e){let t=xo(e);return()=>{t&&vo(e)}}function wo(){return e=>{let t=e;return F({feature:`rowExpandingFeature`,table:t,fnName:`table.getExpandedRowModel`,memoDeps:()=>[t.atoms.expanded?.get(),t.getPreExpandedRowModel(),t.options.paginateExpandedRows,t.options.manualPagination],fn:()=>To(t)})}}function To(e){let t=e.getPreExpandedRowModel(),n=e.atoms.expanded?.get();return!t.rows.length||n!==!0&&!Object.keys(n??{}).length||!e.options.paginateExpandedRows&&!e.options.manualPagination?t:Eo(t)}function Eo(e){let t=[],n=e=>{t.push(e),e.subRows.length&&yo(e)&&e.subRows.forEach(n)};return e.rows.forEach(n),{rows:t,flatRows:e.flatRows,rowsById:e.rowsById}}var Do={getInitialState:e=>({expanded:so(),...e}),getDefaultTableOptions:e=>({onExpandedChange:P(`expanded`,e),paginateExpandedRows:!0}),assignRowPrototype:(e,t)=>{L(`rowExpandingFeature`,e,t,{row_toggleExpanded:{fn:(e,t)=>vo(e,t)},row_getIsExpanded:{fn:e=>yo(e)},row_getCanExpand:{fn:e=>xo(e)},row_getIsAllParentsExpanded:{fn:e=>So(e)},row_getToggleExpandedHandler:{fn:e=>Co(e)}})},constructTableAPIs:e=>{I(`rowExpandingFeature`,e,{table_autoResetExpanded:{fn:()=>co(e)},table_setExpanded:{fn:t=>lo(e,t)},table_toggleAllRowsExpanded:{fn:t=>uo(e,t)},table_resetExpanded:{fn:t=>fo(e,t)},table_getCanSomeRowsExpand:{fn:()=>po(e)},table_getToggleAllRowsExpandedHandler:{fn:()=>mo(e)},table_getIsSomeRowsExpanded:{fn:()=>ho(e)},table_getIsAllRowsExpanded:{fn:()=>go(e)},table_getExpandedDepth:{fn:()=>_o(e)},table__expandRows:{fn:Eo}})}},Oo=0,ko=10;function Ao(){return{pageIndex:Oo,pageSize:ko}}function jo(e){if(e.options.autoResetAll??e.options.autoResetPageIndex??!e.options.manualPagination){if((e.atoms.pagination?.get()?.pageIndex??Oo)===Oo)return;Fo(e,!0)}}function Mo(e,t){on(e,`pagination`,t)}function No(e,t){Mo(e,t?Ao():j(e.initialState.pagination??Ao()))}function Po(e,t){Mo(e,n=>{let r=Qt(t,n.pageIndex),i=e.options.pageCount===void 0||e.options.pageCount===-1?2**53-1:e.options.pageCount-1;return r=Math.max(0,Math.min(r,i)),{...n,pageIndex:r}})}function Fo(e,t){Po(e,t?Oo:e.initialState.pagination?.pageIndex??Oo)}function Io(e,t){Lo(e,t?ko:e.initialState.pagination?.pageSize??ko)}function Lo(e,t){Mo(e,e=>{let n=Math.max(1,Qt(t,e.pageSize)),r=e.pageSize===1/0?0:e.pageSize*e.pageIndex,i=n===1/0?0:Math.floor(r/n);return{...e,pageIndex:i,pageSize:n}})}function Ro(e){let t=Ko(e),n=[];return t&&t>0&&(n=[...Array(t)].fill(null).map((e,t)=>t)),n}function zo(e){return(e.atoms.pagination?.get()?.pageIndex??0)>0}function Bo(e){let t=e.atoms.pagination?.get()?.pageIndex??Oo,n=Ko(e);return n===-1||n!==0&&t<n-1}function Vo(e){let t=e.atoms.pagination?.get()?.pageIndex??Oo,n=Ko(e);return Number.isFinite(n)&&n>0&&t<n-1}function Ho(e){return Po(e,e=>e-1)}function Uo(e){return Po(e,e=>e+1)}function Wo(e){return Po(e,0)}function Go(e){let t=Ko(e);if(!(!Number.isFinite(t)||t<=0))return Po(e,t-1)}function Ko(e){let t=e.options.pageCount;if(t!=null)return t;let n=qo(e),r=e.atoms.pagination?.get()?.pageSize??ko;return r===1/0&&Number.isFinite(n)&&n>0?1:Math.ceil(n/r)}function qo(e){return e.options.rowCount??e.getPrePaginatedRowModel().rows.length}var Jo={getInitialState:e=>({...e,pagination:{...Ao(),...e.pagination}}),getDefaultTableOptions:e=>({onPaginationChange:P(`pagination`,e)}),constructTableAPIs:e=>{I(`rowPaginationFeature`,e,{table_autoResetPageIndex:{fn:()=>jo(e)},table_setPagination:{fn:t=>Mo(e,t)},table_resetPagination:{fn:t=>No(e,t)},table_setPageIndex:{fn:t=>Po(e,t)},table_resetPageIndex:{fn:t=>Fo(e,t)},table_setPageSize:{fn:t=>Lo(e,t)},table_getPageCount:{fn:()=>Ko(e)},table_resetPageSize:{fn:t=>Io(e,t)},table_getPageOptions:{fn:()=>Ro(e)},table_getCanPreviousPage:{fn:()=>zo(e)},table_getCanNextPage:{fn:()=>Bo(e)},table_getCanLastPage:{fn:()=>Vo(e)},table_previousPage:{fn:()=>Ho(e)},table_nextPage:{fn:()=>Uo(e)},table_firstPage:{fn:()=>Wo(e)},table_lastPage:{fn:()=>Go(e)},table_getRowCount:{fn:()=>qo(e)}})}};function Yo(){return M()}function Xo(e,t){e.options.onRowSelectionChange?.(t)}function Zo(e,t){e._lastSelectedRowId=null,Xo(e,t?M():Object.assign(M(),j(e.initialState.rowSelection??{})))}function Qo(e,t,n){e._lastSelectedRowId=null,Xo(e,r=>{if(t=t===void 0?!R(e,`getIsAllRowsSelected`,as):t,n?.deselectAll&&!t)return M();let i=Object.assign(M(),r),a=e.getPreGroupedRowModel().flatRows;if(t){let e=new Map;a.forEach(t=>{bs(t,e)&&(i[t.id]=!0)})}else a.forEach(e=>{U(e)&&delete i[e.id]});return i})}function $o(e,t,n){e._lastSelectedRowId=null,Xo(e,r=>{let i=t===void 0?!R(e,`getIsAllPageRowsSelected`,os):t;if(n?.deselectAll&&!i)return M();let a=Object.assign(M(),r);return e.getRowModel().rows.forEach(t=>{ys(a,t.id,i,!0,e,!0)}),a})}function es(e){return e.getCoreRowModel()}function ts(e){let t=e.getCoreRowModel();return R(e,`getIsSomeRowsSelected`,ss)?Cs(t,e):{rows:[],flatRows:[],rowsById:M()}}function ns(e){let t=e.getFilteredRowModel();return R(e,`getIsSomeRowsSelected`,ss)?Cs(t,e):{rows:[],flatRows:[],rowsById:M()}}function rs(e){let t=e.getSortedRowModel();return R(e,`getIsSomeRowsSelected`,ss)?Cs(t,e):{rows:[],flatRows:[],rowsById:M()}}function is(e){return Object.keys(e.atoms.rowSelection?.get()??{})}function as(e){let t=e.getFilteredRowModel().flatRows,n=e.atoms.rowSelection?.get()??{},r=!!(t.length&&Object.keys(n).length);if(r){let e=new Map;t.some(t=>!ws(t,n)&&bs(t,e))&&(r=!1)}return r}function os(e){let t=e.getPaginatedRowModel().flatRows,n=e.atoms.rowSelection?.get()??{},r=new Map,i=!1;for(let e=0;e<t.length;e++){let a=t[e];if(ws(a,n))!i&&bs(a,r)&&(i=!0);else if(bs(a,r))return!1}return i}function ss(e){return R(e,`getSelectedRowIds`,is).length>0}function cs(e){return e.getPaginatedRowModel().flatRows.filter(e=>U(e)).some(e=>fs(e)||R(e,`getIsSomeSelected`,ps))}function ls(e){return t=>{Qo(e,t.target.checked)}}function us(e){return t=>{$o(e,t.target.checked)}}function ds(e,t,n){let r=fs(e);Xo(e.table,i=>{t=t===void 0?!r:t;let a=Object.assign(M(),i);return ys(a,e.id,t,(n?.selectChildren??!0)&&gs(e),e.table),!t&&n?.deselectParents&&xs(a,e),a})}function fs(e){return ws(e,e.table.atoms.rowSelection?.get()??{})}function ps(e){return Ts(e)===`some`}function ms(e){return Ts(e)===`all`}function U(e){let t=e.table.options;return typeof t.enableRowSelection==`function`?t.enableRowSelection(e):t.enableRowSelection??!0}function hs(e){let t=e.table.options;return typeof t.enableSubRowSelection==`function`?t.enableSubRowSelection(e):t.enableSubRowSelection??!0}function gs(e){let t=e.table.options;return typeof t.enableMultiRowSelection==`function`?t.enableMultiRowSelection(e):t.enableMultiRowSelection??!0}function _s(e,t){let n=U(e);return r=>{if(!n)return;let i=r,a=e.table,o=i.target.checked,s=a._lastSelectedRowId;a.options.enableRowRangeSelection!==!1&&s!==null&&gs(e)&&(a.options.isRowRangeSelectionEvent?.(r)??!1)&&vs(e,s,o,t)||ds(e,o,t),a._lastSelectedRowId=e.id}}function vs(e,t,n,r){let i=r?.selectChildren??!0,a=e.table,o=a.getRowsInDisplayOrder(),s=a.getPrePaginatedRowModel().rowsById[t]??a.getCoreRowModel().rowsById[t];if(!s)return!1;let c=s.getDisplayIndex(),l=e.getDisplayIndex(),u=o[c],d=o[l];if(c<0||l<0||c>=o.length||l>=o.length||u?.id!==s.id||d?.id!==e.id||!gs(s)||!gs(e))return!1;let f=Math.min(c,l),p=Math.max(c,l);return Xo(a,e=>{let t=Object.assign(M(),e);for(let e=f;e<=p;e++){let s=o[e];U(s)&&gs(s)&&(ys(t,s.id,n,i,a),!n&&r?.deselectParents&&xs(t,s))}return t}),!0}function ys(e,t,n,r,i,a){let o=i.getRow(t,!0);n?(gs(o)||Object.keys(e).forEach(t=>delete e[t]),U(o)&&(e[t]=!0)):(!a||U(o))&&delete e[t],r&&o.subRows.length&&hs(o)&&o.subRows.forEach(t=>ys(e,t.id,n,r,i,a))}function bs(e,t){if(!U(e))return!1;let n=e.table;if(n.options.enableSubRowSelection===!0)return!0;let r=e.parentId;if(r===void 0)return!0;let i=t.get(r);if(i!==void 0)return i;let a=n.getCoreRowModel().rowsById,o=[],s=!0,c=r;for(;c!==void 0;){let e=t.get(c);if(e!==void 0){s=e;break}o.push(c);let r=a[c]??n.getRow(c,!0);if(!hs(r)){s=!1;break}c=r.parentId}return o.forEach(e=>t.set(e,s)),s}function xs(e,t){let n=t.table.getCoreRowModel().rowsById,r=t.parentId;for(;r!==void 0;)delete e[r],r=(n[r]??t.table.getRow(r,!0)).parentId}function Ss(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=ws(o,t);if(s&&(n.push(o),r[o.id]=o),o.subRows.length){let e=Ss(o.subRows,t,n,r);if(s){let t=Object.create(Object.getPrototypeOf(o));$t(t,o),t.subRows=e,i.push(t)}}else s&&i.push(o)}return i}function Cs(e,t){let n=[],r=M(),i=t.atoms.rowSelection?.get()??{};return{rows:Ss(e.rows,i,n,r),flatRows:n,rowsById:r}}function ws(e,t){return!!(N(t,e.id)&&t[e.id])}function Ts(e){if(!e.subRows.length)return!1;let t=e.table.atoms.rowSelection?.get()??{},n=!1,r=!0,i=!1;for(let a=0;a<e.subRows.length;a++){let o=e.subRows[a];if(n&&!r)break;if(U(o)&&(i=!0,ws(o,t)?n=!0:r=!1),o.subRows.length){let e=Ts(o);e===`all`?(n=!0,i=!0):e===`some`?(n=!0,r=!1,i=!0):r=!1}}return i?r?`all`:n?`some`:!1:!1}var Es={initTableInstanceData:e=>{e._lastSelectedRowId=null},resetTableInstanceData:e=>{e._lastSelectedRowId=null},getInitialState:e=>({rowSelection:Yo(),...e}),getDefaultTableOptions:e=>({onRowSelectionChange:P(`rowSelection`,e),enableRowSelection:!0,enableMultiRowSelection:!0,enableRowRangeSelection:!0,enableSubRowSelection:!0,isRowRangeSelectionEvent:e=>{let t=e;return!!(t.shiftKey||t.nativeEvent?.shiftKey)}}),assignRowPrototype:(e,t)=>{L(`rowSelectionFeature`,e,t,{row_toggleSelected:{fn:(e,t,n)=>ds(e,t,n)},row_getIsSelected:{fn:e=>fs(e)},row_getIsSomeSelected:{fn:e=>ps(e),memoDeps:e=>[e.subRows,e.table.atoms.rowSelection?.get(),e.table.options.enableRowSelection]},row_getIsAllSubRowsSelected:{fn:e=>ms(e),memoDeps:e=>[e.subRows,e.table.atoms.rowSelection?.get(),e.table.options.enableRowSelection]},row_getCanSelect:{fn:e=>U(e)},row_getCanSelectSubRows:{fn:e=>hs(e)},row_getCanMultiSelect:{fn:e=>gs(e)},row_getToggleSelectedHandler:{fn:(e,t)=>_s(e,t)}})},constructTableAPIs:e=>{I(`rowSelectionFeature`,e,{table_setRowSelection:{fn:t=>Xo(e,t)},table_resetRowSelection:{fn:t=>Zo(e,t)},table_toggleAllRowsSelected:{fn:(t,n)=>Qo(e,t,n)},table_toggleAllPageRowsSelected:{fn:(t,n)=>$o(e,t,n)},table_getPreSelectedRowModel:{fn:()=>es(e)},table_getSelectedRowModel:{fn:()=>ts(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getCoreRowModel()]},table_getFilteredSelectedRowModel:{fn:()=>ns(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getFilteredRowModel()]},table_getGroupedSelectedRowModel:{fn:()=>rs(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getSortedRowModel()]},table_getSelectedRowIds:{fn:()=>is(e),memoDeps:()=>[e.atoms.rowSelection?.get()]},table_getIsAllRowsSelected:{fn:()=>as(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getFilteredRowModel(),e.options.enableRowSelection,e.options.enableSubRowSelection]},table_getIsAllPageRowsSelected:{fn:()=>os(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getPaginatedRowModel(),e.options.enableRowSelection,e.options.enableSubRowSelection]},table_getIsSomeRowsSelected:{fn:()=>ss(e),memoDeps:()=>[e.atoms.rowSelection?.get()]},table_getIsSomePageRowsSelected:{fn:()=>cs(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getPaginatedRowModel(),e.options.enableRowSelection]},table_getToggleAllRowsSelectedHandler:{fn:()=>ls(e)},table_getToggleAllPageRowsSelectedHandler:{fn:()=>us(e)}})}},Ds=/([0-9]+)/gm;function Os(e){let t=Object.assign((e,n,r)=>{let i=e.getValue(r),a=n.getValue(r),o=t.resolveDataValue;return o&&(i=o(i),a=o(a)),t.sort(i,a,e,n,r)},e);return t}var ks=Os({resolveDataValue:e=>Ps(e).toLowerCase(),sort:(e,t)=>Fs(e,t)}),As=Os({resolveDataValue:e=>Ns(e),sort:(e,t)=>e>t?1:e<t?-1:0}),js=Os({sort:(e,t)=>Ms(e,t)});function Ms(e,t){return e===t?0:e>t?1:-1}function Ns(e){return e instanceof Date?e.getTime():e}function Ps(e){return typeof e==`number`?isNaN(e)||e===1/0||e===-1/0?``:String(e):typeof e==`string`?e:``}function Fs(e,t){let n=0,r=0,i=e.length,a=t.length;for(;n<i&&r<a;){let i=Is(e.charCodeAt(n)),a=Is(t.charCodeAt(r)),o=Ls(e,n,i),s=Ls(t,r,a);if(!i&&!a){let i=Rs(e,n,o,t,r,s);if(i)return i;n=o,r=s;continue}if(i!==a)return i?1:-1;let c=zs(e,n,o,t,r,s);if(c)return c;n=o,r=s}return Vs(e,n)-Vs(t,r)}function Is(e){return e>=48&&e<=57}function Ls(e,t,n){let r=t+1;for(;r<e.length&&Is(e.charCodeAt(r))===n;)r++;return r}function Rs(e,t,n,r,i,a){let o=n-t,s=a-i,c=o<s?o:s;for(let n=0;n<c;n++){let a=e.charCodeAt(t+n),o=r.charCodeAt(i+n);if(a>o)return 1;if(o>a)return-1}return o>s?1:s>o?-1:0}function zs(e,t,n,r,i,a){let o=t;for(;o<n&&e.charCodeAt(o)===48;)o++;let s=i;for(;s<a&&r.charCodeAt(s)===48;)s++;let c=n-o,l=a-s;if(c===0&&l===0)return 0;if(c<=15&&l<=15){let t=Bs(e,o,n),i=Bs(r,s,a);return t>i?1:i>t?-1:0}let u=parseInt(e.slice(t,n),10),d=parseInt(r.slice(i,a),10);return u>d?1:d>u?-1:0}function Bs(e,t,n){let r=0;for(let i=t;i<n;i++)r=r*10+e.charCodeAt(i)-48;return r}function Vs(e,t){let n=0,r=t;for(;r<e.length;)n++,r=Ls(e,r,Is(e.charCodeAt(r)));return n}function Hs(){return[]}function Us(e,t){on(e,`sorting`,t)}function Ws(e,t){Us(e,t?[]:j(e.initialState.sorting??[]))}function Gs(e){e.atoms.sorting&&(e.options.autoResetAll??e.options.autoResetSorting??!1)&&Ws(e)}function Ks(e){let t=e.table._rowModelFns.sortFns,n=e.table.getFilteredRowModel().flatRows.slice(0,10),r,i=!1;for(let t=0;t<n.length;t++){let a=n[t].getValue(e.id);if(Object.prototype.toString.call(a)===`[object Date]`){r=`datetime`;break}if(typeof a==`string`&&(i=!0,a.split(Ds).length>1)){r=`alphanumeric`;break}}if(!r&&i&&(r=`text`),r){let e=t?.[r];if(e||r===`alphanumeric`&&(e=t?.text),e)return e}return js}function qs(e){let t=e.table.getFilteredRowModel().flatRows.slice(0,10);for(let n=0;n<t.length;n++){let r=t[n].getValue(e.id);if(r!=null)return typeof r==`string`?`asc`:`desc`}return`desc`}function Js(e){let t=e.table._rowModelFns.sortFns;return sn(e.columnDef.sortFn)?e.columnDef.sortFn:e.columnDef.sortFn===`auto`?Ks(e):t?.[e.columnDef.sortFn]??js}function Ys(e,t,n){let r=Zs(e,n&&$s(e)),i=t!==void 0;Us(e.table,a=>{let o=a.findIndex(t=>t.id===e.id),s=o===-1?void 0:a[o],c=[],l,u=i?t:r===`desc`,d=!!(a.length&&$s(e)&&n);return l=d?s?`toggle`:`add`:s?`toggle`:`replace`,l===`toggle`&&(i||r||(l=`remove`)),l===`add`?(c=[...a,{id:e.id,desc:u}],c.splice(0,c.length-(e.table.options.maxMultiSortColCount??2**53-1))):c=l===`toggle`?d?a.map(t=>t.id===e.id?{...t,desc:u}:t):[{id:e.id,desc:u}]:l===`remove`?d?a.filter(t=>t.id!==e.id):[]:[{id:e.id,desc:u}],c})}function Xs(e){return e.columnDef.sortDescFirst??e.table.options.sortDescFirst??qs(e)===`desc`?`desc`:`asc`}function Zs(e,t){let n=Xs(e),r=ec(e);return r?r!==n&&(e.table.options.enableSortingRemoval??!0)&&(!t||(e.table.options.enableMultiRemove??!0))?!1:r===`desc`?`asc`:`desc`:n}function Qs(e){return(e.columnDef.enableSorting??!0)&&(e.table.options.enableSorting??!0)&&!!e.accessorFn}function $s(e){return e.columnDef.enableMultiSort??e.table.options.enableMultiSort??!!e.accessorFn}function ec(e){let t=e.table.atoms.sorting?.get()?.find(t=>t.id===e.id);return t?t.desc?`desc`:`asc`:!1}function tc(e){return e.table.atoms.sorting?.get()?.findIndex(t=>t.id===e.id)??-1}function nc(e){Us(e.table,t=>t.length?t.filter(t=>t.id!==e.id):[])}function rc(e){let t=Qs(e);return n=>{t&&Ys(e,void 0,$s(e)?e.table.options.isMultiSortEvent?.(n):!1)}}var ic={getInitialState(e){return{sorting:Hs(),...e}},getDefaultColumnDef(){return{sortFn:`auto`,sortUndefined:1}},getDefaultTableOptions(e){return{autoResetSorting:!1,onSortingChange:P(`sorting`,e),isMultiSortEvent:e=>e.shiftKey}},assignColumnPrototype(e,t){L(`rowSortingFeature`,e,t,{column_getAutoSortFn:{fn:e=>Ks(e)},column_getAutoSortDir:{fn:e=>qs(e)},column_getSortFn:{fn:e=>Js(e)},column_toggleSorting:{fn:(e,t,n)=>Ys(e,t,n)},column_getFirstSortDir:{fn:e=>Xs(e)},column_getNextSortingOrder:{fn:(e,t)=>Zs(e,t)},column_getCanSort:{fn:e=>Qs(e)},column_getCanMultiSort:{fn:e=>$s(e)},column_getIsSorted:{fn:e=>ec(e)},column_getSortIndex:{fn:e=>tc(e)},column_clearSorting:{fn:e=>nc(e)},column_getToggleSortingHandler:{fn:e=>rc(e)}})},constructTableAPIs(e){I(`rowSortingFeature`,e,{table_autoResetSorting:{fn:()=>Gs(e)},table_setSorting:{fn:t=>Us(e,t)},table_resetSorting:{fn:t=>Ws(e,t)}})}};function ac(e){return e}function oc(e){return typeof e==`number`}var sc=ac({aggregate:e=>{let t=e.rows,n=0;for(let r=0;r<t.length;r++){let i=e.getValue(t[r]);n+=typeof i==`number`?i:0}return n},merge:({subRowResults:e})=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n];oc(r)&&(t+=r)}return t}}),cc=ac({aggregate:e=>{let t=e.rows,n=0,r=0;for(let i=0;i<t.length;i++){let a=e.getValue(t[i]);if(a==null)continue;let o=typeof a==`number`?a:+a;Number.isNaN(o)||(n++,r+=o)}return n?r/n:void 0}}),lc=ac({aggregate:({rows:e})=>e.length,merge:({subRowResults:e})=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n];oc(r)&&(t+=r)}return t}});function uc(e,t,n){return n.options.filterFromLeafRows?dc(e,t,n):fc(e,t,n)}function dc(e,t,n){let r=[],i=M(),a=n.options.maxLeafRowFilterDepth??100,o=(e,r=0)=>{let i=[];for(let s of e){let e=sr(n,s.id,s.original,s.index,s.depth,void 0,s.parentId);e.columnFilters=s.columnFilters,e.columnFiltersMeta=s.columnFiltersMeta,s.subRows.length&&r<a?(e.subRows=o(s.subRows,r+1),(e.subRows.length||t(e))&&i.push(e)):t(e)&&(e.subRows=s.subRows,i.push(e))}return i},s=o(e);return pc(s,r,i),{rows:s,flatRows:r,rowsById:i}}function fc(e,t,n){let r=[],i=M(),a=n.options.maxLeafRowFilterDepth??100,o=(e,s=0)=>{let c=[];for(let l of e)if(t(l)){if(l.subRows.length&&s<a){let e=sr(n,l.id,l.original,l.index,l.depth,void 0,l.parentId),t=l;e.columnFilters=t.columnFilters,e.columnFiltersMeta=t.columnFiltersMeta,c.push(e),r.push(e),i[e.id]=e,e.subRows=o(l.subRows,s+1)}else c.push(l),r.push(l),i[l.id]=l,l.subRows.length&&s>=a&&pc(l.subRows,r,i)}return c};return{rows:o(e),flatRows:r,rowsById:i}}function pc(e,t,n){for(let r of e)t.push(r),n[r.id]=r,r.subRows.length&&pc(r.subRows,t,n)}function mc(){return e=>{let t=e;return F({feature:`columnFilteringFeature`,table:t,fnName:`table.getFilteredRowModel`,memoDeps:()=>[t.getPreFilteredRowModel(),t.atoms.columnFilters?.get(),t.atoms.globalFilter?.get()],fn:()=>hc(t),onAfterUpdate:un(()=>On(t))})}}function hc(e){let t=e.getPreFilteredRowModel(),n=e.atoms.columnFilters?.get(),r=e.atoms.globalFilter?.get(),i=r!=null&&r!==``;if(!t.rows.length||!n?.length&&!i){let e=t.flatRows;for(let t=0;t<e.length;t++){let n=e[t];n.columnFilters=M(),n.columnFiltersMeta=M()}return t}let a=[],o=[];n?.forEach(t=>{let n=Vn(e,t.id);if(!n)return;let r=hi(n);r&&a.push({id:t.id,filterFn:r,resolvedValue:r.resolveFilterValue?.(t.value)??t.value})});let s=n?.map(e=>e.id)??[];if(i){let t=wn(e),n=t?e.getAllLeafColumns().filter(Tn):[];t&&n.length&&(s.push(`__global__`),n.forEach(e=>{o.push({id:e.id,filterFn:t,resolvedValue:t.resolveFilterValue?.(r)??r})}))}let c=t.flatRows;for(let e=0;e<c.length;e++){let t=c[e];if(t.columnFilters=M(),t.columnFiltersMeta=M(),a.length)for(let e=0;e<a.length;e++){let n=a[e],r=n.id;t.columnFilters[r]=n.filterFn(t,r,n.resolvedValue,e=>{t.columnFiltersMeta||=M(),t.columnFiltersMeta[r]=e})}if(o.length){for(let e=0;e<o.length;e++){let n=o[e],r=n.id;if(n.filterFn(t,r,n.resolvedValue,e=>{t.columnFiltersMeta||=M(),t.columnFiltersMeta[r]=e})){t.columnFilters.__global__=!0;break}}t.columnFilters.__global__!==!0&&(t.columnFilters.__global__=!1)}}return uc(t.rows,e=>{for(let t=0;t<s.length;t++)if(e.columnFilters[s[t]]===!1)return!1;return!0},e)}function gc(){return e=>{let t=e,n=!1,r,i;return F({feature:`columnGroupingFeature`,table:t,fnName:`table.getGroupedRowModel`,memoDeps:()=>[t.atoms.grouping?.get(),t.getPreGroupedRowModel(),t.options.columns],fn:()=>_c(t),onAfterUpdate:()=>{let e=t.atoms.grouping?.get(),a=t.getPreGroupedRowModel(),o=n&&(e!==r||a!==i);r=e,i=a,n=!0,o&&(Dn(t),On(t))}})}}function _c(e){let t=e.getPreGroupedRowModel(),n=e.atoms.grouping?.get();if(!t.rows.length||!n?.length)return vc(t.rows,0,void 0),t;let r=n.filter(t=>Vn(e,t)),i=[],a=M(),o=(t,n=0,s)=>{if(n>=r.length)return t.map(e=>(e.depth=n,i.push(e),a[e.id]=e,e.subRows.length&&(e.subRows=o(e.subRows,n+1,e.id)),e));let c=r[n],l=yc(e,t,c);return Array.from(l.entries()).map(([t,l],u)=>{let d=`${c}:${t}`;d=s?`${s}>${d}`:d;let f=i.length;i.push(void 0);let p=o(l,n+1,d);p.forEach(e=>{e.parentId=d});let m=ni(l,1/0),h=sr(e,d,m[0].original,u,n,void 0,s);return Object.assign(h,{groupingColumnId:c,groupingValue:t,subRows:p,leafRows:m,getValue:t=>{let i=r.indexOf(t);if(i!==-1&&i<=n)return N(h._valuesCache,t)||l[0]&&(h._valuesCache[t]=l[0].getValue(t)??void 0),h._valuesCache[t];let a=h._aggregationValuesCache;if(a&&N(a,t))return a[t];let o=jn(e),s=e.getColumn(t);if(!o||typeof s.getAggregationFns!=`function`)return;let c=h._aggregationValuesCache??=M();return c[t]=o({subRows:p,column:s,groupingRow:h,rows:l,uniqueRows:!0}),c[t]}}),i[f]=h,a[d]=h,h})};return{rows:o(t.rows,0),flatRows:i,rowsById:a}}function vc(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.depth=t,i.parentId=n,i.subRows.length&&vc(i.subRows,t+1,i.id)}}function yc(e,t,n){let r=new Map,i=Vn(e,n)?.columnDef.getGroupingValue;for(let e=0;e<t.length;e++){let a=t[e],o;if(i){let e=a._groupingValuesCache;e&&N(e,n)?o=e[n]:e&&(o=e[n]=i(a.original,a.index,a))}else o=a.getValue(n);let s=`${o}`,c=r.get(s);c?c.push(a):r.set(s,[a])}return r}function bc(){return e=>{let t=e;return F({feature:`rowPaginationFeature`,table:t,fnName:`table.getPaginatedRowModel`,memoDeps:()=>[t.getPrePaginatedRowModel(),t.atoms.pagination?.get(),t.options.paginateExpandedRows?void 0:t.atoms.expanded?.get()],fn:()=>xc(t)})}}function xc(e){let t=e.getPrePaginatedRowModel(),n=e.atoms.pagination?.get();if(!t.rows.length)return t;let{pageSize:r,pageIndex:i}=n??Ao(),{rows:a,flatRows:o,rowsById:s}=t,c=a;if(r!==1/0||i!==0){let e=r*i,t=e+r;c=a.slice(e,t)}let l;l=e.options.paginateExpandedRows?{rows:c,flatRows:o,rowsById:s}:En(e,{rows:c,flatRows:o,rowsById:s}),l.flatRows=[];let u=new Set,d=e=>{u.has(e.id)||(u.add(e.id),l.flatRows.push(e),e.subRows.length&&e.subRows.forEach(d))};return l.rows.forEach(d),l}function Sc(){return e=>{let t=e;return F({feature:`rowSortingFeature`,table:t,fnName:`table.getSortedRowModel`,memoDeps:()=>[t.atoms.sorting?.get(),t.getPreSortedRowModel()],fn:()=>Cc(t),onAfterUpdate:un(()=>On(t))})}}function Cc(e){let t=e.getPreSortedRowModel(),n=e.atoms.sorting?.get();if(!t.rows.length||!n?.length)return t;let r=[],i=n.filter(t=>{let n=e.getColumn(t.id);return n?Qs(n):!1});if(!i.length)return t;let a=[];for(let t=0;t<i.length;t++){let n=i[t],r=e.getColumn(n.id);r&&a.push({id:n.id,desc:n.desc,sortUndefined:r.columnDef.sortUndefined,invertSorting:r.columnDef.invertSorting,sortFn:Js(r)})}let o=(e,t)=>{for(let n=0;n<a.length;n++){let r=a[n],i=r.sortUndefined,o=r.desc,s=0;if(i){let n=e.getValue(r.id),a=t.getValue(r.id),o=n===void 0,c=a===void 0;if(o&&c)continue;if(o||c){if(i===`first`)return o?-1:1;if(i===`last`)return o?1:-1;s=o?i:-i}}if(s===0&&(s=r.sortFn(e,t,r.id)),s!==0)return o&&(s*=-1),r.invertSorting&&(s*=-1),s}return e.index-t.index},s=e=>{let t=e.slice();t.sort(o);let n=!1;for(let i=0;i<t.length;i++){let a=t[i];a!==e[i]&&(n=!0);let o=r.length;if(r.push(a),a.subRows.length){let e=s(a.subRows);if(e.changed){let s=Object.create(Object.getPrototypeOf(a));$t(s,a),s.subRows=e.rows,t[i]=s,r[o]=s,n=!0}}}return{rows:t,changed:n}};return{rows:s(t.rows).rows,flatRows:r,rowsById:t.rowsById}}var wc=typeof window>`u`?C.useEffect:C.useLayoutEffect;function W(e,t){let[{table:n,rootSource:r}]=(0,C.useState)(()=>{let t=Yr({...e,features:{coreReactivityFeature:Zt(),...e.features}});return t.Subscribe=(e=>qt({...e,source:e.source??t.store})),t.FlexRender=wt,{table:t,rootSource:Xt(t.store,Ht)}}),i=n;Wr(i,t=>({...t,...e}),{syncExternalState:!1});let a=i.options.state,o=r.get(),s=Kt(r,t,{compare:Ht});return wc(()=>{r.markCommitted(o),Vr(i,a??null,Ht)}),(0,C.useMemo)(()=>({...n,options:e,state:s}),[n,e,s])}function G({table:e,numeric:t=[],tree:n=!1,paging:r=!0}){let a=new Set(t);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`overflow-x-auto rounded-md border`,children:(0,w.jsxs)(Ce,{children:[(0,w.jsx)(se,{children:e.getHeaderGroups().map(t=>(0,w.jsx)(je,{children:t.headers.map(t=>{let n=t.column.getIsSorted();return(0,w.jsx)(me,{colSpan:t.colSpan,style:{width:t.getSize()},className:c(a.has(t.column.id)&&`text-right`),children:t.isPlaceholder?null:t.column.getCanSort()?(0,w.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1 hover:text-foreground`,onClick:t.column.getToggleSortingHandler(),children:[(0,w.jsx)(e.FlexRender,{header:t}),n===`asc`?(0,w.jsx)(ze,{className:`size-3.5`}):n===`desc`?(0,w.jsx)(Le,{className:`size-3.5`}):null]}):(0,w.jsx)(e.FlexRender,{header:t})},t.id)})},t.id))}),(0,w.jsx)(ye,{children:e.getRowModel().rows.map(t=>{let r=[...t.getStartVisibleCells(),...t.getCenterVisibleCells(),...t.getEndVisibleCells()],o=r.find(e=>e.column.id!==`select`)?.id;return(0,w.jsx)(je,{"data-state":t.getIsSelected()?`selected`:void 0,className:c((t.getIsGrouped()||n&&t.subRows.length>0)&&`bg-muted/40 font-medium`),children:r.map(r=>(0,w.jsx)(he,{className:c(a.has(r.column.id)&&`text-right tabular-nums`),children:r.getIsGrouped()?(0,w.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1`,onClick:t.getToggleExpandedHandler(),children:[t.getIsExpanded()?(0,w.jsx)(ie,{className:`size-4`}):(0,w.jsx)(i,{className:`size-4`}),(0,w.jsx)(e.FlexRender,{cell:r}),` (`,t.subRows.length,`)`]}):r.getIsPlaceholder()?null:n&&r.id===o?(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,style:{paddingLeft:t.depth*18},children:[t.getCanExpand()?(0,w.jsx)(`button`,{type:`button`,onClick:t.getToggleExpandedHandler(),"aria-label":`Toggle row`,children:t.getIsExpanded()?(0,w.jsx)(ie,{className:`size-4`}):(0,w.jsx)(i,{className:`size-4`})}):(0,w.jsx)(`span`,{className:`w-4`}),(0,w.jsx)(e.FlexRender,{cell:r})]}):(0,w.jsx)(e.FlexRender,{cell:r})},r.id))},t.id)})})]})}),r&&(0,w.jsxs)(`div`,{className:`flex items-center justify-end gap-2 text-sm text-muted-foreground`,children:[(0,w.jsxs)(`span`,{children:[`Page `,e.state.pagination.pageIndex+1,` of `,Math.max(1,e.getPageCount())]}),(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:`Previous`}),(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:`Next`})]})]})}var K=qr({columnVisibilityFeature:Za,columnPinningFeature:ga,columnSizingFeature:Ia,columnFilteringFeature:wi,globalFilteringFeature:oo,columnGroupingFeature:Ri,rowAggregationFeature:fi,rowSortingFeature:ic,rowExpandingFeature:Do,rowSelectionFeature:Es,rowPaginationFeature:Jo,filteredRowModel:mc(),groupedRowModel:gc(),sortedRowModel:Sc(),expandedRowModel:wo(),paginatedRowModel:bc(),filterFns:{includesString:$a},sortFns:{alphanumeric:ks,basic:js,datetime:As},aggregationFns:{sum:sc,mean:cc,count:lc},columnMeta:Kr()}),q=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}),J=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),Tc=t({default:()=>kc,meta:()=>Ec}),Ec={title:`Orders to Excel`,description:`An operations team sorts and groups the order book, tidies the columns, and exports it. The file opens the way the table looked, with live totals.`,docs:`grouped-rows-as-outlines.html`},Dc=b(),Y=B(),Oc=Y.columns([Y.accessor(`region`,{header:`Region`,size:150}),Y.accessor(`customer`,{header:`Customer`,size:180}),Y.accessor(`product`,{header:`Product`,size:140}),Y.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>e.getValue()?J.format(e.getValue()):null,meta:{rowpine:{numFmt:`yyyy-mm-dd`}}}),Y.accessor(`quantity`,{header:`Qty`,aggregationFn:`sum`}),Y.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),Y.accessor(`status`,{header:`Status`})]);function kc(){let[e,t]=C.useState(null),n=C.useRef(null),r=W({features:K,columns:Oc,data:Dc,initialState:{pagination:{pageIndex:0,pageSize:10}}}),i=C.useRef(r);i.current=r;let a=e=>()=>E(n.current,`button`,e),o=C.useMemo(()=>[{caption:`The order book in a TanStack table, styled with shadcn/ui: 120 orders, ten to a page.`,run:e=>e.point(()=>n.current?.querySelector(`table`))},{caption:`Sort by amount, largest first.`,run:async e=>{await e.click(()=>E(n.current,`th button`,`Amount`)),i.current.setSorting([{id:`amount`,desc:!0}])}},{caption:`Group by region. Each group shows its order count, units and total.`,run:async e=>{await e.click(a(`Group by region`)),i.current.setGrouping([`region`]),await D(),i.current.setExpanded(!0)}},{caption:`Hide Status and pin Customer to the left.`,run:async e=>{await e.click(a(`Hide status`)),i.current.setColumnVisibility({status:!1}),await e.click(a(`Pin customer`)),i.current.setColumnPinning({start:[`customer`],end:[]})}},{caption:`Export to Excel. Every order goes, not just this page: regions as outline rows, totals as SUBTOTAL formulas, Customer frozen, Status left out.`,run:async e=>{await e.click(()=>E(n.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D();let r=await v(i.current,{download:!1});t({blob:r,name:`orders.xlsx`,kind:`xlsx`,note:`click any cell to see its value or formula`})}}],[]),s=C.useCallback(()=>{let e=i.current;e.setSorting([]),e.setGrouping([]),e.setColumnVisibility({}),e.setColumnPinning({start:[],end:[]}),e.setPageIndex(0),t(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:o,reset:s}),(0,w.jsx)(O,{rootRef:n,preview:e,onClosePreview:()=>t(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>r.setGrouping(r.state.grouping.length?[]:[`region`]),children:`Group by region`}),(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>r.getColumn(`status`)?.toggleVisibility(),children:`Hide status`}),(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>r.getColumn(`customer`)?.pin(!r.getColumn(`customer`)?.getIsPinned()&&`start`),children:`Pin customer`}),(0,w.jsx)(S,{table:r,fileName:`orders`,pdfTitle:`Orders`,className:`ml-auto`})]}),(0,w.jsx)(G,{table:r,numeric:[`quantity`,`amount`]})]})})]})}var Ac=t({default:()=>Lc,meta:()=>jc}),jc={title:`Month-end PDF`,description:`Finance turns the receivables table into the PDF that goes to the board: grouped by status, headline numbers on top, Letter landscape, marked DRAFT.`,docs:`pdf-title-kpis-watermark.html`},Mc=b(),Nc=B(),Pc=Nc.columns([Nc.accessor(`status`,{header:`Status`,size:120}),Nc.accessor(`customer`,{header:`Customer`,size:190}),Nc.accessor(`product`,{header:`Product`}),Nc.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?J.format(e.getValue()):null,meta:{rowpine:{format:e=>J.format(e)}}}),Nc.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{format:e=>q.format(e)}}})]),Fc=Mc.reduce((e,t)=>e+t.amount,0),Ic=Mc.filter(e=>e.status===`Overdue`);function Lc(){let[e,t]=C.useState(null),[n,r]=C.useState(`A4`),[i,a]=C.useState(!1),[o,s]=C.useState(!1),c=C.useRef(null),l=W({features:K,columns:Pc,data:Mc,initialState:{pagination:{pageIndex:0,pageSize:10}}}),u=C.useRef({table:l,pageSize:n,landscape:i,extras:o});u.current={table:l,pageSize:n,landscape:i,extras:o};let d=async()=>{let{table:e,pageSize:t,landscape:n,extras:r}=u.current;return await y(e,{download:!1,title:`Receivables`,subtitle:`January to September 2026`,pageSize:t,pageOrientation:n?`landscape`:`portrait`,headerColor:`#1f3d2e`,...r?{kpis:[{label:`Invoiced`,value:q.format(Fc)},{label:`Overdue`,value:q.format(Ic.reduce((e,t)=>e+t.amount,0)),delta:`${Ic.length} orders`,color:`#b91c1c`}],watermark:`DRAFT`}:{}})},p=C.useMemo(()=>[{caption:`The receivables: 120 orders with their status and amount.`,run:e=>e.point(()=>c.current?.querySelector(`table`))},{caption:`Group by status. TanStack adds up each group, and the PDF prints those totals.`,run:async e=>{await e.click(()=>E(c.current,`button`,`Group by status`)),u.current.table.setGrouping([`status`]),await D(),u.current.table.setExpanded(!0)}},{caption:`Letter, landscape: the board prints on US paper.`,run:async e=>{await e.click(()=>c.current?.querySelector(`select`)),r(`LETTER`),await e.click(()=>c.current?.querySelector(`input[name="landscape"]`)),a(!0)}},{caption:`Add the headline numbers and a DRAFT watermark.`,run:async e=>{await e.click(()=>c.current?.querySelector(`input[name="extras"]`)),s(!0)}},{caption:`Create the PDF: title, headline numbers, groups with their totals, page numbers, the header row on every page.`,run:async e=>{await e.click(()=>E(c.current,`button`,`Create PDF`)),await D(),t({blob:await d(),name:`receivables.pdf`,kind:`pdf`})}}],[]),m=C.useCallback(()=>{u.current.table.setGrouping([]),u.current.table.setPageIndex(0),r(`A4`),a(!1),s(!1),t(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:p,reset:m}),(0,w.jsx)(O,{rootRef:c,preview:e,onClosePreview:()=>t(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-sm`,children:[(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>l.setGrouping(l.state.grouping.length?[]:[`status`]),children:`Group by status`}),(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Page`,(0,w.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),className:`h-8 rounded-md border bg-background px-2`,children:[`A4`,`LETTER`,`LEGAL`].map(e=>(0,w.jsx)(`option`,{children:e},e))})]}),(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`checkbox`,name:`landscape`,checked:i,onChange:e=>a(e.target.checked)}),`Landscape`]}),(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`checkbox`,name:`extras`,checked:o,onChange:e=>s(e.target.checked)}),`Headline numbers and watermark`]}),(0,w.jsxs)(x,{size:`sm`,className:`ml-auto`,onClick:async()=>t({blob:await d(),name:`receivables.pdf`,kind:`pdf`}),children:[(0,w.jsx)(f,{}),`Create PDF`]})]}),(0,w.jsx)(G,{table:l,numeric:[`amount`]})]})})]})}var Rc=t({default:()=>Uc,meta:()=>zc}),zc={title:`Budget by department`,description:`A controller reviews spend against budget across departments and teams, flags the overspend in red, and sends the tree to Excel and PDF with its levels intact.`,docs:`tree-data.html`},Bc=B(),Vc=e=>e.actual-e.budget;function Hc(e){let t=t=>e&&t>0?{fill:`#fee2e2`,color:`#991b1b`,bold:!0}:void 0;return Bc.columns([Bc.accessor(`name`,{header:`Unit`,size:230}),Bc.accessor(`lead`,{header:`Lead`,size:160}),Bc.accessor(`budget`,{header:`Budget`,cell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>q.format(e)}}}),Bc.accessor(`actual`,{header:`Actual`,cell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>q.format(e)}}}),Bc.accessor(Vc,{id:`variance`,header:`Over / under`,cell:e=>{let n=t(e.getValue());return(0,w.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:n?{background:n.fill,color:n.color,fontWeight:600}:void 0,children:q.format(e.getValue())})},meta:{rowpine:{numFmt:`"$"#,##0;[Red]-"$"#,##0`,format:e=>q.format(e),cellStyle:t}}})])}function Uc(){let[e,t]=C.useState(null),[n,r]=C.useState(!1),i=C.useMemo(()=>Hc(n),[n]),a=C.useRef(null),o=W({features:K,columns:i,data:Oe,getSubRows:e=>e.subRows,initialState:{expanded:!0}}),s=C.useRef(o);s.current=o;let c=C.useMemo(()=>[{caption:`Departments and their teams, nested with getSubRows. Parents carry the totals of their teams.`,run:e=>e.point(()=>a.current?.querySelector(`table`))},{caption:`Collapse Sales to read it as one line.`,run:async e=>{await e.click(()=>E(a.current,`tr`,`Sales`)?.querySelector(`button[aria-label="Toggle row"]`)),s.current.setExpanded({0:!0,"0.2":!0,1:!1})}},{caption:`Flag the overspend. Teams over budget turn red, and the same rule colors the cells in the files.`,run:async e=>{await e.click(()=>E(a.current,`button`,`Flag overspend`)),r(!0)}},{caption:`Export to Excel: one outline level per depth, parents in bold, the red cells kept. Collapsed or not, every team is in the file.`,run:async e=>{await e.click(()=>E(a.current,`button`,`Excel`)),await D(),t({blob:await v(s.current,{download:!1}),name:`budget.xlsx`,kind:`xlsx`,note:`budget vs actual`})}},{caption:`And to PDF, with the tree indented and the same colors.`,run:async e=>{await e.click(()=>E(a.current,`button`,`PDF`)),await D(),t({blob:await y(s.current,{download:!1,title:`Budget by department`}),name:`budget.pdf`,kind:`pdf`})}}],[]),l=C.useCallback(()=>{s.current.setExpanded(!0),r(!1),t(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:c,reset:l}),(0,w.jsx)(O,{rootRef:a,preview:e,onClosePreview:()=>t(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(x,{variant:n?`secondary`:`outline`,size:`sm`,onClick:()=>r(e=>!e),children:`Flag overspend`}),(0,w.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:async()=>t({blob:await v(o,{download:!1}),name:`budget.xlsx`,kind:`xlsx`}),children:`Excel`}),(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:async()=>t({blob:await y(o,{download:!1,title:`Budget by department`}),name:`budget.pdf`,kind:`pdf`}),children:`PDF`})]})]}),(0,w.jsx)(G,{table:o,numeric:[`budget`,`actual`,`variance`],tree:!0,paging:!1})]})})]})}var Wc=t({default:()=>Yc,meta:()=>Gc}),Gc={title:`Support tickets`,description:`A support lead counts the open tickets by team and priority, adds how long they take, and prints the page for the weekly review.`,docs:`aggregations.html`},Kc=De(),qc=[{field:`team`,label:`Team`,kind:`dimension`},{field:`priority`,label:`Priority`,kind:`dimension`},{field:`status`,label:`Status`,kind:`dimension`},{field:`channel`,label:`Channel`,kind:`dimension`},{field:`customer`,label:`Customer`,kind:`dimension`},{field:`id`,label:`Tickets`,kind:`measure`,defaultAgg:`count`},{field:`hours`,label:`Hours to resolve`,kind:`measure`,defaultAgg:`avg`,format:e=>typeof e==`number`?e.toFixed(1):``}],Jc={rows:[`team`],cols:[],values:[{field:`id`,agg:`count`,label:`Count of Tickets`}],filters:[]};function Yc(){let[e,t]=C.useState(Jc),[r,i]=C.useState(null),a=C.useRef(null),o=C.useRef(null),s=C.useCallback(e=>{o.current=e},[]),c=e=>()=>E(a.current,`aside[aria-label="Pivot fields"] [draggable="true"]`,e),l=e=>()=>a.current?.querySelector(`[data-well="${e}"]`),u=C.useMemo(()=>[{caption:`500 tickets, counted by team.`,run:e=>e.point(()=>a.current?.querySelector(`table`))},{caption:`Priority across the top: where the urgent work sits.`,run:async e=>{await e.click(c(`Priority`)),await e.point(l(`cols`)),t(e=>n(e,qc,`priority`,`cols`))}},{caption:`Leave out what is solved: Status in Filters, only Open and Pending.`,run:async e=>{await e.click(c(`Status`)),await e.point(l(`filters`)),t(e=>{let t=n(e,qc,`status`,`filters`);return{...t,filters:t.filters.map(e=>e.field===`status`?{...e,allowed:[`Open`,`Pending`]}:e)}})}},{caption:`Add the average hours to resolve next to the count. Two measures sit side by side under each priority.`,run:async e=>{await e.click(c(`Hours to resolve`)),await e.point(l(`values`)),t(e=>e.values.some(e=>e.field===`hours`)?e:n(e,qc,`hours`,`values`))}},{caption:`Print it for the weekly review: a landscape PDF with the totals in bold.`,run:async e=>{if(await e.click(()=>E(a.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D(),!o.current)return;let t=await y(o.current.table,{download:!1,title:`Open tickets by team and priority`,pageOrientation:`landscape`,rowStyle:d});i({blob:t,name:`open-tickets.pdf`,kind:`pdf`})}}],[]),f=C.useCallback(()=>{t(Jc),i(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:u,reset:f}),(0,w.jsx)(O,{rootRef:a,preview:r,onClosePreview:()=>i(null),children:(0,w.jsx)(Ae,{data:Kc,fields:qc,layout:e,onLayoutChange:t,onPivotChange:s,actions:e=>(0,w.jsx)(S,{table:e.table,fileName:`tickets`,pdfTitle:`Tickets`,rowStyle:d})})})]})}var Xc=t({default:()=>tl,meta:()=>Zc}),Zc={title:`Inventory reorder list`,description:`A buyer looks at stock in five warehouses, flags the items below their reorder point, keeps only those, and sends the reorder list to Excel.`,docs:`cell-colors.html`},Qc=Se(),$c=Qc.filter(e=>e.onHand<e.reorderAt),X=B();function el(e){let t=(t,n)=>e&&n.onHand<n.reorderAt?{fill:`#fee2e2`,color:`#991b1b`,bold:!0}:void 0;return X.columns([X.accessor(`warehouse`,{header:`Warehouse`,size:140}),X.accessor(`sku`,{header:`SKU`,size:100}),X.accessor(`item`,{header:`Item`,size:150}),X.accessor(`category`,{header:`Category`,size:120}),X.accessor(`onHand`,{header:`On hand`,aggregationFn:`sum`,cell:e=>{let n=t(e.getValue(),e.row.original);return(0,w.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:n?{background:n.fill,color:n.color,fontWeight:600}:void 0,children:e.getValue()})},meta:{rowpine:{cellStyle:t}}}),X.accessor(e=>String(e.reorderAt),{id:`reorderAt`,header:`Reorder at`,meta:{rowpine:{align:`right`}}}),X.accessor(`value`,{header:`Stock value`,aggregationFn:`sum`,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`}}})])}function tl(){let[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,a]=C.useState(null),o=C.useMemo(()=>el(e),[e]),s=C.useRef(null),c=W({features:K,columns:o,data:n?$c:Qc,initialState:{pagination:{pageIndex:0,pageSize:12}}}),l=C.useRef(c);l.current=c;let u=C.useMemo(()=>[{caption:`Stock of ${Qc.length} lines in five warehouses.`,run:e=>e.point(()=>s.current?.querySelector(`table`))},{caption:`Group by warehouse. Each warehouse shows its units on hand and the value of its stock.`,run:async e=>{await e.click(()=>E(s.current,`button`,`Group by warehouse`)),l.current.setGrouping([`warehouse`]),await D(),l.current.setExpanded(!0)}},{caption:`Flag the items below their reorder point. The same rule colors the cells in the file.`,run:async e=>{await e.click(()=>E(s.current,`button`,`Flag low stock`)),t(!0)}},{caption:`Keep only those: ${$c.length} lines to reorder.`,run:async e=>{await e.click(()=>E(s.current,`button`,`Low stock only`)),r(!0),await D(),l.current.setExpanded(!0)}},{caption:`Export the reorder list to Excel: grouped by warehouse, red cells kept, stock value as a SUBTOTAL per warehouse.`,run:async e=>{await e.click(()=>E(s.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D(),a({blob:await v(l.current,{download:!1}),name:`reorder-list.xlsx`,kind:`xlsx`})}}],[]),d=C.useCallback(()=>{l.current.setGrouping([]),l.current.setPageIndex(0),t(!1),r(!1),a(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:u,reset:d}),(0,w.jsx)(O,{rootRef:s,preview:i,onClosePreview:()=>a(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>c.setGrouping(c.state.grouping.length?[]:[`warehouse`]),children:`Group by warehouse`}),(0,w.jsx)(x,{variant:e?`secondary`:`outline`,size:`sm`,onClick:()=>t(e=>!e),children:`Flag low stock`}),(0,w.jsx)(x,{variant:n?`secondary`:`outline`,size:`sm`,onClick:()=>r(e=>!e),children:`Low stock only`}),(0,w.jsx)(S,{table:c,fileName:`reorder-list`,className:`ml-auto`})]}),(0,w.jsx)(G,{table:c,numeric:[`onHand`,`reorderAt`,`value`]})]})})]})}var nl=t({default:()=>ul,meta:()=>rl}),rl={title:`Timesheet to invoice`,description:`A project manager picks one client's billable hours out of two weeks of time entries and sends them as a PDF that backs up the invoice.`,docs:`which-rows-are-exported.html`},il=ue(),al=`Halvorsen AS`,Z=B(),ol=Z.columns([Z.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},cell:({row:e})=>e.getIsGrouped()?null:(0,w.jsx)(le,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select entry`})}),Z.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?J.format(e.getValue()):null,meta:{rowpine:{format:e=>J.format(e)}}}),Z.accessor(`person`,{header:`Person`,size:140}),Z.accessor(`client`,{header:`Client`,size:150}),Z.accessor(`project`,{header:`Project`,size:170}),Z.accessor(`task`,{header:`Task`}),Z.accessor(`hours`,{header:`Hours`,aggregationFn:`sum`}),Z.accessor(`billable`,{header:`Billable`,cell:e=>e.getValue()?`Yes`:`No`}),Z.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{format:e=>q.format(e)}}})]),sl=Object.fromEntries(il.filter(e=>e.client===al&&e.billable).map(e=>[e.id,!0])),cl=il.filter(e=>sl[e.id]).reduce((e,t)=>e+t.hours,0),ll=il.filter(e=>sl[e.id]).reduce((e,t)=>e+t.amount,0);function ul(){let[e,t]=C.useState(null),n=C.useRef(null),r=W({features:K,columns:ol,data:il,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:12}}}),i=C.useRef(r);i.current=r;let a=()=>y(i.current,{download:!1,rows:`selected`,title:`${al}: billable hours`,subtitle:`1 to 12 September 2026`,kpis:[{label:`Hours`,value:cl.toLocaleString(`en-US`)},{label:`Amount`,value:q.format(ll)}]}),o=C.useMemo(()=>[{caption:`Two weeks of time entries: ${il.length} of them, four people, three clients.`,run:e=>e.point(()=>n.current?.querySelector(`table`))},{caption:`Select ${al}'s billable entries.`,run:async e=>{await e.click(()=>E(n.current,`button`,`Select billable`)),i.current.setRowSelection(sl)}},{caption:`Group by project to check the hours add up before they go out.`,run:async e=>{await e.click(()=>E(n.current,`button`,`Group by project`)),i.current.setGrouping([`project`]),await D(),i.current.setExpanded(!0)}},{caption:`Export only the selected rows to PDF, with the hours and the amount on top. The other clients stay out.`,run:async e=>{await e.click(()=>E(n.current,`button`,`PDF of selected`)),await D(),t({blob:await a(),name:`halvorsen-hours.pdf`,kind:`pdf`})}}],[]),s=C.useCallback(()=>{i.current.setRowSelection({}),i.current.setGrouping([]),i.current.setPageIndex(0),t(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:o,reset:s}),(0,w.jsx)(O,{rootRef:n,preview:e,onClosePreview:()=>t(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[(0,w.jsxs)(x,{variant:`outline`,size:`sm`,onClick:()=>r.setRowSelection(sl),children:[`Select billable for `,al]}),(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>r.setGrouping(r.state.grouping.length?[]:[`project`]),children:`Group by project`}),(0,w.jsxs)(`span`,{className:`text-muted-foreground`,children:[Object.keys(r.state.rowSelection).length,` selected`]}),(0,w.jsxs)(x,{size:`sm`,className:`ml-auto`,onClick:async()=>t({blob:await a(),name:`halvorsen-hours.pdf`,kind:`pdf`}),children:[(0,w.jsx)(f,{}),`PDF of selected`]})]}),(0,w.jsx)(G,{table:r,numeric:[`hours`,`amount`]})]})})]})}var dl=t({default:()=>_l,meta:()=>fl}),fl={title:`Marketing spend`,description:`A marketing lead lays six months of spend against signups by channel, switches to a saved view of the campaigns, and sends the numbers to finance.`,docs:`presets-and-saved-views.html`},pl=Te(),ml=[{field:`channel`,label:`Channel`,kind:`dimension`},{field:`campaign`,label:`Campaign`,kind:`dimension`},{field:`month`,label:`Month`,kind:`dimension`},{field:`spend`,label:`Spend`,kind:`measure`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`clicks`,label:`Clicks`,kind:`measure`},{field:`signups`,label:`Signups`,kind:`measure`}],hl={rows:[`channel`],cols:[],values:[{field:`spend`,agg:`sum`,label:`Sum of Spend`}],filters:[]},gl=[{name:`Paid campaigns, spend and signups`,layout:{rows:[`channel`,`campaign`],cols:[],values:[{field:`spend`,agg:`sum`,label:`Spend`},{field:`signups`,agg:`sum`,label:`Signups`}],filters:[{field:`channel`,allowed:[`Display`,`Search`,`Social`]}]}}];function _l(){let[e,t]=C.useState(hl),[r,i]=C.useState(null),a=C.useRef(null),o=C.useRef(null),s=C.useCallback(e=>{o.current=e},[]),c=e=>()=>E(a.current,`aside[aria-label="Pivot fields"] [draggable="true"]`,e),l=e=>()=>a.current?.querySelector(`[data-well="${e}"]`),u=C.useMemo(()=>({numFmt:`#,##0`}),[]),f=C.useMemo(()=>[{caption:`Six months of spend across five channels.`,run:e=>e.point(()=>a.current?.querySelector(`table`))},{caption:`Month across the top: where the money went, month by month.`,run:async e=>{await e.click(c(`Month`)),await e.point(l(`cols`)),t(e=>n(e,ml,`month`,`cols`))}},{caption:`Add signups next to spend, so each month shows what the money bought.`,run:async e=>{await e.click(c(`Signups`)),await e.point(l(`values`)),t(e=>e.values.some(e=>e.field===`signups`)?e:n(e,ml,`signups`,`values`))}},{caption:`Load a saved view: paid campaigns only, by campaign, spend and signups for the half year.`,run:async e=>{await e.click(()=>E(a.current,`[data-slot="dropdown-menu-trigger"]`,`Presets`)),t(structuredClone(gl[0].layout))}},{caption:`Send it to finance as Excel: channels as outline rows over their campaigns, numbers they can work with.`,run:async e=>{await e.click(()=>E(a.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D(),o.current&&i({blob:await v(o.current.table,{download:!1,rowStyle:d}),name:`paid-campaigns.xlsx`,kind:`xlsx`})}}],[]),p=C.useCallback(()=>{t(hl),i(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:f,reset:p}),(0,w.jsx)(O,{rootRef:a,preview:r,onClosePreview:()=>i(null),children:(0,w.jsx)(Ae,{data:pl,fields:ml,layout:e,onLayoutChange:t,presets:gl,pivotOptions:u,onPivotChange:s,actions:e=>(0,w.jsx)(S,{table:e.table,fileName:`marketing`,rowStyle:d})})})]})}var vl=t({default:()=>El,meta:()=>yl}),yl={title:`Sales commissions`,description:`Sales operations works out each rep's commission per quarter with a tiered rule written as a custom aggregation, then hands the sheet to payroll.`,docs:`aggregations.html`},bl=be(),xl=e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``,Sl=e=>{let t=e.reduce((e,t)=>e+Number(t||0),0);return Math.min(t,5e4)*.05+Math.max(0,t-5e4)*.08},Cl={rows:[`region`,`rep`],cols:[`quarter`],values:[{field:`amount`,agg:`sum`,label:`Closed`,format:xl}]},wl={rows:[`region`,`rep`],cols:[`quarter`],values:[{field:`amount`,agg:`sum`,label:`Closed`,format:xl},{field:`amount`,agg:Sl,label:`Commission`,format:xl}]},Tl={numFmt:`"$"#,##0`};function El(){let[e,t]=C.useState(!1),[n,r]=C.useState(new Set),[i,a]=C.useState(null),o=pe(bl,e?wl:Cl,Tl),s=C.useRef(o);s.current=o;let c=C.useRef(null),l=C.useMemo(()=>[{caption:`${bl.length} closed deals: what each rep closed per quarter, by region.`,run:e=>e.point(()=>c.current?.querySelector(`table`))},{caption:`Add the commission: 5% on the first $50,000 a quarter, 8% above it. It is a custom aggregation over each cell's deals.`,run:async e=>{await e.click(()=>E(c.current,`button`,`Show commission`)),t(!0)}},{caption:`Region rows add up their reps, and the tier is applied to each rep's quarter, not to the region's total.`,run:e=>e.point(()=>E(c.current,`tr`,`Europe`))},{caption:`Collapse Asia Pacific to focus on the larger regions.`,run:async e=>{await e.click(()=>c.current?.querySelector(`button[aria-label="Collapse Asia Pacific"], button[aria-label="Expand Asia Pacific"]`)),r(new Set([`group__0:Asia Pacific`]))}},{caption:`Hand it to payroll as Excel: every rep, collapsed or not, with closed amounts and commission side by side.`,run:async e=>{await e.click(()=>E(c.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D(),a({blob:await v(s.current.table,{download:!1,rowStyle:d}),name:`commissions.xlsx`,kind:`xlsx`})}}],[]),u=C.useCallback(()=>{t(!1),r(new Set),a(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:l,reset:u}),(0,w.jsx)(O,{rootRef:c,preview:i,onClosePreview:()=>a(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(x,{variant:e?`secondary`:`outline`,size:`sm`,onClick:()=>t(e=>!e),children:`Show commission`}),(0,w.jsx)(S,{table:o.table,fileName:`commissions`,rowStyle:d,className:`ml-auto`})]}),(0,w.jsx)(de,{pivot:o,collapsed:n,onCollapsedChange:r,className:`overflow-x-auto`})]})})]})}var Dl=t({default:()=>Ml,meta:()=>Ol}),Ol={title:`Carrier scorecard`,description:`Logistics groups a month of shipments by carrier, marks the late ones, and prints a 14-column scorecard that still fits the page.`,docs:`pdf-page-setup.html`},kl=ce(),Q=B(),Al=(e,t)=>Q.accessor(e,{header:t,size:100,cell:e=>e.getValue()?J.format(e.getValue()):null,meta:{rowpine:{format:e=>J.format(e)}}});function jl(e){let t=t=>e&&typeof t==`number`&&t>0?{color:`#b91c1c`,bold:!0}:void 0;return Q.columns([Q.accessor(`carrier`,{header:`Carrier`,size:140}),Q.accessor(`id`,{header:`Shipment`,size:90}),Q.accessor(`origin`,{header:`From`,size:90}),Q.accessor(`destination`,{header:`To`,size:90}),Q.accessor(`mode`,{header:`Mode`,size:70}),Al(`shipped`,`Shipped`),Al(`promised`,`Promised`),Al(`delivered`,`Delivered`),Q.accessor(`daysLate`,{header:`Days late`,size:80,aggregationFn:`mean`,cell:e=>(0,w.jsx)(`span`,{style:t(e.getValue())?{color:`#b91c1c`,fontWeight:600}:void 0,children:e.getValue()}),aggregatedCell:e=>e.getValue().toFixed(1),meta:{rowpine:{format:e=>Number.isInteger(e)?String(e):e.toFixed(1),cellStyle:t}}}),Q.accessor(`pallets`,{header:`Pallets`,size:70,aggregationFn:`sum`}),Q.accessor(`weightKg`,{header:`Weight kg`,size:90,aggregationFn:`sum`}),Q.accessor(`cost`,{header:`Cost`,size:90,aggregationFn:`sum`,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{format:e=>q.format(e)}}}),Q.accessor(`claims`,{header:`Claims`,size:70,aggregationFn:`sum`}),Q.accessor(`status`,{header:`Status`,size:80})])}function Ml(){let[e,t]=C.useState(!1),[n,r]=C.useState(null),i=C.useMemo(()=>jl(e),[e]),a=C.useRef(null),o=W({features:K,columns:i,data:kl,initialState:{pagination:{pageIndex:0,pageSize:10}}}),s=C.useRef(o);s.current=o;let c=()=>y(s.current,{download:!1,title:`Carrier scorecard`,subtitle:`Shipments in August 2026`}),l=C.useMemo(()=>[{caption:`${kl.length} shipments in August, 14 columns each.`,run:e=>e.point(()=>a.current?.querySelector(`table`))},{caption:`Group by carrier: average days late, total pallets, weight, cost and claims per carrier.`,run:async e=>{await e.click(()=>E(a.current,`button`,`Group by carrier`)),s.current.setGrouping([`carrier`]),await D(),s.current.setExpanded(!0)}},{caption:`Mark the late deliveries in red.`,run:async e=>{await e.click(()=>E(a.current,`button`,`Mark late`)),t(!0)}},{caption:`Print it. Fourteen columns do not fit a portrait page, so the page turns and the type shrinks until every column prints.`,run:async e=>{await e.click(()=>E(a.current,`button`,`Scorecard PDF`)),await D(),r({blob:await c(),name:`carrier-scorecard.pdf`,kind:`pdf`})}}],[]),u=C.useCallback(()=>{s.current.setGrouping([]),s.current.setPageIndex(0),t(!1),r(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(k,{steps:l,reset:u}),(0,w.jsx)(O,{rootRef:a,preview:n,onClosePreview:()=>r(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>o.setGrouping(o.state.grouping.length?[]:[`carrier`]),children:`Group by carrier`}),(0,w.jsx)(x,{variant:e?`secondary`:`outline`,size:`sm`,onClick:()=>t(e=>!e),children:`Mark late`}),(0,w.jsxs)(x,{size:`sm`,className:`ml-auto`,onClick:async()=>r({blob:await c(),name:`carrier-scorecard.pdf`,kind:`pdf`}),children:[(0,w.jsx)(f,{}),`Scorecard PDF`]})]}),(0,w.jsx)(G,{table:o,numeric:[`daysLate`,`pallets`,`weightKg`,`cost`,`claims`]})]})})]})}var Nl=`import * as React from "react"
import {
  addToWell,
  defaultLayoutFor,
  exportXlsx,
  pivotRowStyle,
  setAggregatorAt,
  type PivotField,
  type PivotLayout,
  type PivotTable,
} from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { PivotDesigner } from "@/components/pivot-designer"
import { makeOrders, type Order } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"

export const meta = {
  title: "Sales pivot",
  description: "A sales manager builds a pivot of the quarter's orders: regions and countries down the side, quarters across, overdue orders only, and takes it to Excel.",
  docs: "pivot-designer.html",
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
const pivotOptions = { numFmt: '"$"#,##0' }

export default function SalesPivot() {
  const [layout, setLayout] = React.useState<PivotLayout>(() => defaultLayoutFor(fields))
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const root = React.useRef<HTMLDivElement>(null)
  const pivot = React.useRef<PivotTable | null>(null)
  const onPivotChange = React.useCallback((p: PivotTable | null) => {
    pivot.current = p
  }, [])
  const field = (label: string) => () => byText(root.current, 'aside[aria-label="Pivot fields"] [draggable="true"]', label)
  const well = (w: string) => () => root.current?.querySelector(\`[data-well="\${w}"]\`)

  const steps = React.useMemo<DemoStep[]>(
    () => [
      {
        caption: "120 orders as a pivot: regions down the side, the total of each region's orders in the cells.",
        run: (p) => p.point(() => root.current?.querySelector("table")),
      },
      {
        caption: "Drag Quarter into Columns. Each region spreads across the quarters, with a total on the right.",
        run: async (p) => {
          await p.click(field("Quarter"))
          await p.point(well("cols"))
          setLayout((l) => addToWell(l, fields, "quarter", "cols"))
        },
      },
      {
        caption: "Add Country to Rows. Every region opens into its countries and keeps its subtotal.",
        run: async (p) => {
          await p.click(field("Country"))
          await p.point(well("rows"))
          setLayout((l) => (l.rows.includes("country") ? l : addToWell(l, fields, "country", "rows")))
        },
      },
      {
        caption: "Switch Sum to Average from the value's menu. Every cell is worked out again from the orders behind it.",
        run: async (p) => {
          await p.click(() => root.current?.querySelector('[data-well="values"] button[aria-label="Options for Amount"]'))
          setLayout((l) => setAggregatorAt(l, fields, 0, "avg"))
        },
      },
      {
        caption: "Put Status in Filters and keep only Overdue. The pivot now shows the money that is late.",
        run: async (p) => {
          await p.click(field("Status"))
          await p.point(well("filters"))
          setLayout((l) => {
            const n = addToWell(l, fields, "status", "filters")
            return { ...n, filters: n.filters.map((f) => (f.field === "status" ? { ...f, allowed: ["Overdue"] } : f)) }
          })
        },
      },
      {
        caption: "Export to Excel. Regions become outline rows you can collapse, and every cell is a number you can sum.",
        run: async (p) => {
          await p.click(() => byText(root.current, '[data-slot="dropdown-menu-trigger"]', "Export"))
          await settle()
          if (!pivot.current) return
          const blob = await exportXlsx(pivot.current.table, { download: false, rowStyle: pivotRowStyle })
          setPreview({ blob, name: "overdue-by-region.xlsx", kind: "xlsx", select: "B3", note: "the exported file" })
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const reset = React.useCallback(() => {
    setLayout(defaultLayoutFor(fields))
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <PivotDesigner
          data={data}
          fields={fields}
          layout={layout}
          onLayoutChange={setLayout}
          pivotOptions={pivotOptions}
          onPivotChange={onPivotChange}
          actions={(p) => <ExportMenu table={p.table} fileName="sales-pivot" rowStyle={pivotRowStyle} />}
        />
      </DemoFrame>
    </div>
  )
}
`,Pl=`import * as React from "react"
import { createColumnHelper, useTable } from "@tanstack/react-table"
import { exportXlsx } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { Button } from "@/components/ui/button"
import { makeOrders, type Order } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"
import { DataTable } from "@/lib/data-table"
import { day, features, money } from "@/lib/table"

export const meta = {
  title: "Orders to Excel",
  description: "An operations team sorts and groups the order book, tidies the columns, and exports it. The file opens the way the table looked, with live totals.",
  docs: "grouped-rows-as-outlines.html",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.accessor("region", { header: "Region", size: 150 }),
  helper.accessor("customer", { header: "Customer", size: 180 }),
  helper.accessor("product", { header: "Product", size: 140 }),
  helper.accessor("date", {
    header: "Date",
    sortFn: "datetime",
    cell: (c) => (c.getValue() ? day.format(c.getValue()) : null),
    meta: { rowpine: { numFmt: "yyyy-mm-dd" } },
  }),
  helper.accessor("quantity", { header: "Qty", aggregationFn: "sum" }),
  helper.accessor("amount", {
    header: "Amount",
    aggregationFn: "sum",
    cell: (c) => money.format(c.getValue()),
    aggregatedCell: (c) => money.format(c.getValue() as number),
    meta: { rowpine: { numFmt: '"$"#,##0.00' } },
  }),
  helper.accessor("status", { header: "Status" }),
])

export default function OrdersToExcel() {
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const root = React.useRef<HTMLDivElement>(null)
  const table = useTable({ features, columns, data, initialState: { pagination: { pageIndex: 0, pageSize: 10 } } })
  const tableRef = React.useRef(table)
  tableRef.current = table
  const button = (text: string) => () => byText(root.current, "button", text)

  const steps = React.useMemo<DemoStep[]>(
    () => [
      {
        caption: "The order book in a TanStack table, styled with shadcn/ui: 120 orders, ten to a page.",
        run: (p) => p.point(() => root.current?.querySelector("table")),
      },
      {
        caption: "Sort by amount, largest first.",
        run: async (p) => {
          await p.click(() => byText(root.current, "th button", "Amount"))
          tableRef.current.setSorting([{ id: "amount", desc: true }])
        },
      },
      {
        caption: "Group by region. Each group shows its order count, units and total.",
        run: async (p) => {
          await p.click(button("Group by region"))
          tableRef.current.setGrouping(["region"])
          // Changing the grouping resets expansion, so expand once it has applied.
          await settle()
          tableRef.current.setExpanded(true)
        },
      },
      {
        caption: "Hide Status and pin Customer to the left.",
        run: async (p) => {
          await p.click(button("Hide status"))
          tableRef.current.setColumnVisibility({ status: false })
          await p.click(button("Pin customer"))
          tableRef.current.setColumnPinning({ start: ["customer"], end: [] })
        },
      },
      {
        caption: "Export to Excel. Every order goes, not just this page: regions as outline rows, totals as SUBTOTAL formulas, Customer frozen, Status left out.",
        run: async (p) => {
          await p.click(() => byText(root.current, '[data-slot="dropdown-menu-trigger"]', "Export"))
          await settle()
          const blob = await exportXlsx(tableRef.current, { download: false })
          setPreview({ blob, name: "orders.xlsx", kind: "xlsx", note: "click any cell to see its value or formula" })
        },
      },
    ],
    []
  )
  const reset = React.useCallback(() => {
    const t = tableRef.current
    t.setSorting([])
    t.setGrouping([])
    t.setColumnVisibility({})
    t.setColumnPinning({ start: [], end: [] })
    t.setPageIndex(0)
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <div className="grid gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => table.setGrouping(table.state.grouping.length ? [] : ["region"])}>
              Group by region
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.getColumn("status")?.toggleVisibility()}>
              Hide status
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.getColumn("customer")?.pin(table.getColumn("customer")?.getIsPinned() ? false : "start")}>
              Pin customer
            </Button>
            <ExportMenu table={table} fileName="orders" pdfTitle="Orders" className="ml-auto" />
          </div>
          <DataTable table={table} numeric={["quantity", "amount"]} />
        </div>
      </DemoFrame>
    </div>
  )
}
`,Fl=`import * as React from "react"
import { createColumnHelper, useTable } from "@tanstack/react-table"
import { FileText } from "lucide-react"
import { exportPdf, type PdfPageSize } from "rowpine"

import { Button } from "@/components/ui/button"
import { makeOrders, type Order } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"
import { DataTable } from "@/lib/data-table"
import { day, features, money } from "@/lib/table"

export const meta = {
  title: "Month-end PDF",
  description: "Finance turns the receivables table into the PDF that goes to the board: grouped by status, headline numbers on top, Letter landscape, marked DRAFT.",
  docs: "pdf-title-kpis-watermark.html",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.accessor("status", { header: "Status", size: 120 }),
  helper.accessor("customer", { header: "Customer", size: 190 }),
  helper.accessor("product", { header: "Product" }),
  helper.accessor("date", {
    header: "Date",
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

const total = data.reduce((n, o) => n + o.amount, 0)
const overdue = data.filter((o) => o.status === "Overdue")

export default function MonthEndPdf() {
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const [pageSize, setPageSize] = React.useState<PdfPageSize>("A4")
  const [landscape, setLandscape] = React.useState(false)
  const [extras, setExtras] = React.useState(false)
  const root = React.useRef<HTMLDivElement>(null)
  const table = useTable({ features, columns, data, initialState: { pagination: { pageIndex: 0, pageSize: 10 } } })
  const ref = React.useRef({ table, pageSize, landscape, extras })
  ref.current = { table, pageSize, landscape, extras }

  const create = async () => {
    const { table, pageSize, landscape, extras } = ref.current
    const blob = await exportPdf(table, {
      download: false,
      title: "Receivables",
      subtitle: "January to September 2026",
      pageSize,
      pageOrientation: landscape ? "landscape" : "portrait",
      headerColor: "#1f3d2e",
      ...(extras
        ? {
            kpis: [
              { label: "Invoiced", value: money.format(total) },
              { label: "Overdue", value: money.format(overdue.reduce((n, o) => n + o.amount, 0)), delta: \`\${overdue.length} orders\`, color: "#b91c1c" },
            ],
            watermark: "DRAFT",
          }
        : {}),
    })
    return blob
  }

  const steps = React.useMemo<DemoStep[]>(
    () => [
      {
        caption: "The receivables: 120 orders with their status and amount.",
        run: (p) => p.point(() => root.current?.querySelector("table")),
      },
      {
        caption: "Group by status. TanStack adds up each group, and the PDF prints those totals.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Group by status"))
          ref.current.table.setGrouping(["status"])
          // Changing the grouping resets expansion, so expand once it has applied.
          await settle()
          ref.current.table.setExpanded(true)
        },
      },
      {
        caption: "Letter, landscape: the board prints on US paper.",
        run: async (p) => {
          await p.click(() => root.current?.querySelector("select"))
          setPageSize("LETTER")
          await p.click(() => root.current?.querySelector('input[name="landscape"]'))
          setLandscape(true)
        },
      },
      {
        caption: "Add the headline numbers and a DRAFT watermark.",
        run: async (p) => {
          await p.click(() => root.current?.querySelector('input[name="extras"]'))
          setExtras(true)
        },
      },
      {
        caption: "Create the PDF: title, headline numbers, groups with their totals, page numbers, the header row on every page.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Create PDF"))
          await settle()
          setPreview({ blob: await create(), name: "receivables.pdf", kind: "pdf" })
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const reset = React.useCallback(() => {
    ref.current.table.setGrouping([])
    ref.current.table.setPageIndex(0)
    setPageSize("A4")
    setLandscape(false)
    setExtras(false)
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <div className="grid gap-3">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Button variant="outline" size="sm" onClick={() => table.setGrouping(table.state.grouping.length ? [] : ["status"])}>
              Group by status
            </Button>
            <label className="flex items-center gap-2">
              Page
              <select value={pageSize} onChange={(e) => setPageSize(e.target.value as PdfPageSize)} className="h-8 rounded-md border bg-background px-2">
                {(["A4", "LETTER", "LEGAL"] as const).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="landscape" checked={landscape} onChange={(e) => setLandscape(e.target.checked)} />
              Landscape
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="extras" checked={extras} onChange={(e) => setExtras(e.target.checked)} />
              Headline numbers and watermark
            </label>
            <Button size="sm" className="ml-auto" onClick={async () => setPreview({ blob: await create(), name: "receivables.pdf", kind: "pdf" })}>
              <FileText />
              Create PDF
            </Button>
          </div>
          <DataTable table={table} numeric={["amount"]} />
        </div>
      </DemoFrame>
    </div>
  )
}
`,Il=`import * as React from "react"
import { createColumnHelper, useTable } from "@tanstack/react-table"
import { exportPdf, exportXlsx } from "rowpine"

import { Button } from "@/components/ui/button"
import { budget, type BudgetUnit } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"
import { DataTable } from "@/lib/data-table"
import { features, money } from "@/lib/table"

export const meta = {
  title: "Budget by department",
  description: "A controller reviews spend against budget across departments and teams, flags the overspend in red, and sends the tree to Excel and PDF with its levels intact.",
  docs: "tree-data.html",
}

const helper = createColumnHelper<typeof features, BudgetUnit>()
const variance = (u: BudgetUnit) => u.actual - u.budget

function makeColumns(highlight: boolean) {
  const over = (v: unknown) => (highlight && (v as number) > 0 ? { fill: "#fee2e2", color: "#991b1b", bold: true } : undefined)
  return helper.columns([
    helper.accessor("name", { header: "Unit", size: 230 }),
    helper.accessor("lead", { header: "Lead", size: 160 }),
    helper.accessor("budget", { header: "Budget", cell: (c) => money.format(c.getValue()), meta: { rowpine: { numFmt: '"$"#,##0', format: (v) => money.format(v as number) } } }),
    helper.accessor("actual", { header: "Actual", cell: (c) => money.format(c.getValue()), meta: { rowpine: { numFmt: '"$"#,##0', format: (v) => money.format(v as number) } } }),
    helper.accessor(variance, {
      id: "variance",
      header: "Over / under",
      cell: (c) => {
        const s = over(c.getValue())
        return (
          <span className="rounded px-1.5 py-0.5" style={s ? { background: s.fill, color: s.color, fontWeight: 600 } : undefined}>
            {money.format(c.getValue())}
          </span>
        )
      },
      meta: { rowpine: { numFmt: '"$"#,##0;[Red]-"$"#,##0', format: (v) => money.format(v as number), cellStyle: over } },
    }),
  ])
}

export default function BudgetTree() {
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const [highlight, setHighlight] = React.useState(false)
  const columns = React.useMemo(() => makeColumns(highlight), [highlight])
  const root = React.useRef<HTMLDivElement>(null)
  const table = useTable({ features, columns, data: budget, getSubRows: (u) => u.subRows, initialState: { expanded: true } })
  const tableRef = React.useRef(table)
  tableRef.current = table

  const steps = React.useMemo<DemoStep[]>(
    () => [
      {
        caption: "Departments and their teams, nested with getSubRows. Parents carry the totals of their teams.",
        run: (p) => p.point(() => root.current?.querySelector("table")),
      },
      {
        caption: "Collapse Sales to read it as one line.",
        run: async (p) => {
          const row = () => byText(root.current, "tr", "Sales")?.querySelector('button[aria-label="Toggle row"]')
          await p.click(row)
          tableRef.current.setExpanded({ "0": true, "0.2": true, "1": false })
        },
      },
      {
        caption: "Flag the overspend. Teams over budget turn red, and the same rule colors the cells in the files.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Flag overspend"))
          setHighlight(true)
        },
      },
      {
        caption: "Export to Excel: one outline level per depth, parents in bold, the red cells kept. Collapsed or not, every team is in the file.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Excel"))
          await settle()
          setPreview({ blob: await exportXlsx(tableRef.current, { download: false }), name: "budget.xlsx", kind: "xlsx", note: "budget vs actual" })
        },
      },
      {
        caption: "And to PDF, with the tree indented and the same colors.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "PDF"))
          await settle()
          setPreview({ blob: await exportPdf(tableRef.current, { download: false, title: "Budget by department" }), name: "budget.pdf", kind: "pdf" })
        },
      },
    ],
    []
  )
  const reset = React.useCallback(() => {
    tableRef.current.setExpanded(true)
    setHighlight(false)
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <div className="grid gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant={highlight ? "secondary" : "outline"} size="sm" onClick={() => setHighlight((h) => !h)}>
              Flag overspend
            </Button>
            <div className="ml-auto flex gap-2">
              <Button variant="outline" size="sm" onClick={async () => setPreview({ blob: await exportXlsx(table, { download: false }), name: "budget.xlsx", kind: "xlsx" })}>
                Excel
              </Button>
              <Button variant="outline" size="sm" onClick={async () => setPreview({ blob: await exportPdf(table, { download: false, title: "Budget by department" }), name: "budget.pdf", kind: "pdf" })}>
                PDF
              </Button>
            </div>
          </div>
          <DataTable table={table} numeric={["budget", "actual", "variance"]} tree paging={false} />
        </div>
      </DemoFrame>
    </div>
  )
}
`,Ll=`import * as React from "react"
import { addToWell, exportPdf, pivotRowStyle, type PivotField, type PivotLayout, type PivotTable } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { PivotDesigner } from "@/components/pivot-designer"
import { makeTickets, type Ticket } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"

export const meta = {
  title: "Support tickets",
  description: "A support lead counts the open tickets by team and priority, adds how long they take, and prints the page for the weekly review.",
  docs: "aggregations.html",
}

const data = makeTickets()
const fields: PivotField<Ticket>[] = [
  { field: "team", label: "Team", kind: "dimension" },
  { field: "priority", label: "Priority", kind: "dimension" },
  { field: "status", label: "Status", kind: "dimension" },
  { field: "channel", label: "Channel", kind: "dimension" },
  { field: "customer", label: "Customer", kind: "dimension" },
  { field: "id", label: "Tickets", kind: "measure", defaultAgg: "count" },
  { field: "hours", label: "Hours to resolve", kind: "measure", defaultAgg: "avg", format: (v) => (typeof v === "number" ? v.toFixed(1) : "") },
]
const start: PivotLayout = { rows: ["team"], cols: [], values: [{ field: "id", agg: "count", label: "Count of Tickets" }], filters: [] }

export default function SupportTickets() {
  const [layout, setLayout] = React.useState<PivotLayout>(start)
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const root = React.useRef<HTMLDivElement>(null)
  const pivot = React.useRef<PivotTable | null>(null)
  const onPivotChange = React.useCallback((p: PivotTable | null) => {
    pivot.current = p
  }, [])
  const field = (label: string) => () => byText(root.current, 'aside[aria-label="Pivot fields"] [draggable="true"]', label)
  const well = (w: string) => () => root.current?.querySelector(\`[data-well="\${w}"]\`)

  const steps = React.useMemo<DemoStep[]>(
    () => [
      {
        caption: "500 tickets, counted by team.",
        run: (p) => p.point(() => root.current?.querySelector("table")),
      },
      {
        caption: "Priority across the top: where the urgent work sits.",
        run: async (p) => {
          await p.click(field("Priority"))
          await p.point(well("cols"))
          setLayout((l) => addToWell(l, fields, "priority", "cols"))
        },
      },
      {
        caption: "Leave out what is solved: Status in Filters, only Open and Pending.",
        run: async (p) => {
          await p.click(field("Status"))
          await p.point(well("filters"))
          setLayout((l) => {
            const n = addToWell(l, fields, "status", "filters")
            return { ...n, filters: n.filters.map((f) => (f.field === "status" ? { ...f, allowed: ["Open", "Pending"] } : f)) }
          })
        },
      },
      {
        caption: "Add the average hours to resolve next to the count. Two measures sit side by side under each priority.",
        run: async (p) => {
          await p.click(field("Hours to resolve"))
          await p.point(well("values"))
          setLayout((l) => (l.values.some((v) => v.field === "hours") ? l : addToWell(l, fields, "hours", "values")))
        },
      },
      {
        caption: "Print it for the weekly review: a landscape PDF with the totals in bold.",
        run: async (p) => {
          await p.click(() => byText(root.current, '[data-slot="dropdown-menu-trigger"]', "Export"))
          await settle()
          if (!pivot.current) return
          const blob = await exportPdf(pivot.current.table, {
            download: false,
            title: "Open tickets by team and priority",
            pageOrientation: "landscape",
            rowStyle: pivotRowStyle,
          })
          setPreview({ blob, name: "open-tickets.pdf", kind: "pdf" })
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const reset = React.useCallback(() => {
    setLayout(start)
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <PivotDesigner
          data={data}
          fields={fields}
          layout={layout}
          onLayoutChange={setLayout}
          onPivotChange={onPivotChange}
          actions={(p) => <ExportMenu table={p.table} fileName="tickets" pdfTitle="Tickets" rowStyle={pivotRowStyle} />}
        />
      </DemoFrame>
    </div>
  )
}
`,Rl=`import * as React from "react"
import { createColumnHelper, useTable } from "@tanstack/react-table"
import { exportXlsx } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { Button } from "@/components/ui/button"
import { makeStock, type StockItem } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"
import { DataTable } from "@/lib/data-table"
import { features, money } from "@/lib/table"

export const meta = {
  title: "Inventory reorder list",
  description: "A buyer looks at stock in five warehouses, flags the items below their reorder point, keeps only those, and sends the reorder list to Excel.",
  docs: "cell-colors.html",
}

const all = makeStock()
const low = all.filter((s) => s.onHand < s.reorderAt)
const helper = createColumnHelper<typeof features, StockItem>()

function makeColumns(flag: boolean) {
  const short = (_v: unknown, row: StockItem) => (flag && row.onHand < row.reorderAt ? { fill: "#fee2e2", color: "#991b1b", bold: true } : undefined)
  return helper.columns([
    helper.accessor("warehouse", { header: "Warehouse", size: 140 }),
    helper.accessor("sku", { header: "SKU", size: 100 }),
    helper.accessor("item", { header: "Item", size: 150 }),
    helper.accessor("category", { header: "Category", size: 120 }),
    helper.accessor("onHand", {
      header: "On hand",
      aggregationFn: "sum",
      cell: (c) => {
        const s = short(c.getValue(), c.row.original)
        return <span className="rounded px-1.5 py-0.5" style={s ? { background: s.fill, color: s.color, fontWeight: 600 } : undefined}>{c.getValue()}</span>
      },
      meta: { rowpine: { cellStyle: short as never } },
    }),
    // A threshold, not an amount: as text it is not added up on warehouse rows.
    helper.accessor((r) => String(r.reorderAt), { id: "reorderAt", header: "Reorder at", meta: { rowpine: { align: "right" } } }),
    helper.accessor("value", {
      header: "Stock value",
      aggregationFn: "sum",
      cell: (c) => money.format(c.getValue()),
      aggregatedCell: (c) => money.format(c.getValue() as number),
      meta: { rowpine: { numFmt: '"$"#,##0' } },
    }),
  ])
}

export default function InventoryReorder() {
  const [flag, setFlag] = React.useState(false)
  const [lowOnly, setLowOnly] = React.useState(false)
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const columns = React.useMemo(() => makeColumns(flag), [flag])
  const root = React.useRef<HTMLDivElement>(null)
  const table = useTable({ features, columns, data: lowOnly ? low : all, initialState: { pagination: { pageIndex: 0, pageSize: 12 } } })
  const t = React.useRef(table)
  t.current = table

  const steps = React.useMemo<DemoStep[]>(
    () => [
      { caption: \`Stock of \${all.length} lines in five warehouses.\`, run: (p) => p.point(() => root.current?.querySelector("table")) },
      {
        caption: "Group by warehouse. Each warehouse shows its units on hand and the value of its stock.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Group by warehouse"))
          t.current.setGrouping(["warehouse"])
          await settle()
          t.current.setExpanded(true)
        },
      },
      {
        caption: "Flag the items below their reorder point. The same rule colors the cells in the file.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Flag low stock"))
          setFlag(true)
        },
      },
      {
        caption: \`Keep only those: \${low.length} lines to reorder.\`,
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Low stock only"))
          setLowOnly(true)
          await settle()
          t.current.setExpanded(true)
        },
      },
      {
        caption: "Export the reorder list to Excel: grouped by warehouse, red cells kept, stock value as a SUBTOTAL per warehouse.",
        run: async (p) => {
          await p.click(() => byText(root.current, '[data-slot="dropdown-menu-trigger"]', "Export"))
          await settle()
          setPreview({ blob: await exportXlsx(t.current, { download: false }), name: "reorder-list.xlsx", kind: "xlsx" })
        },
      },
    ],
    []
  )
  const reset = React.useCallback(() => {
    t.current.setGrouping([])
    t.current.setPageIndex(0)
    setFlag(false)
    setLowOnly(false)
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <div className="grid gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => table.setGrouping(table.state.grouping.length ? [] : ["warehouse"])}>Group by warehouse</Button>
            <Button variant={flag ? "secondary" : "outline"} size="sm" onClick={() => setFlag((f) => !f)}>Flag low stock</Button>
            <Button variant={lowOnly ? "secondary" : "outline"} size="sm" onClick={() => setLowOnly((l) => !l)}>Low stock only</Button>
            <ExportMenu table={table} fileName="reorder-list" className="ml-auto" />
          </div>
          <DataTable table={table} numeric={["onHand", "reorderAt", "value"]} />
        </div>
      </DemoFrame>
    </div>
  )
}
`,zl=`import * as React from "react"
import { createColumnHelper, useTable, type RowSelectionState } from "@tanstack/react-table"
import { FileText } from "lucide-react"
import { exportPdf } from "rowpine"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { makeTimesheet, type TimeEntry } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"
import { DataTable } from "@/lib/data-table"
import { day, features, money } from "@/lib/table"

export const meta = {
  title: "Timesheet to invoice",
  description: "A project manager picks one client's billable hours out of two weeks of time entries and sends them as a PDF that backs up the invoice.",
  docs: "which-rows-are-exported.html",
}

const data = makeTimesheet()
const CLIENT = "Halvorsen AS"
const helper = createColumnHelper<typeof features, TimeEntry>()
const columns = helper.columns([
  helper.display({
    id: "select",
    size: 36,
    meta: { rowpine: { exclude: true } },
    cell: ({ row }) => (row.getIsGrouped() ? null : <Checkbox checked={row.getIsSelected()} onCheckedChange={(v) => row.toggleSelected(!!v)} aria-label="Select entry" />),
  }),
  helper.accessor("date", { header: "Date", cell: (c) => (c.getValue() ? day.format(c.getValue()) : null), meta: { rowpine: { format: (v) => day.format(v as Date) } } }),
  helper.accessor("person", { header: "Person", size: 140 }),
  helper.accessor("client", { header: "Client", size: 150 }),
  helper.accessor("project", { header: "Project", size: 170 }),
  helper.accessor("task", { header: "Task" }),
  helper.accessor("hours", { header: "Hours", aggregationFn: "sum" }),
  helper.accessor("billable", { header: "Billable", cell: (c) => (c.getValue() ? "Yes" : "No") }),
  helper.accessor("amount", {
    header: "Amount",
    aggregationFn: "sum",
    cell: (c) => money.format(c.getValue()),
    aggregatedCell: (c) => money.format(c.getValue() as number),
    meta: { rowpine: { format: (v) => money.format(v as number) } },
  }),
])
// v9 selection state is { [rowId]: true }.
const billableIds: RowSelectionState = Object.fromEntries(data.filter((e) => e.client === CLIENT && e.billable).map((e) => [e.id, true as const]))
const hours = data.filter((e) => billableIds[e.id]).reduce((n, e) => n + e.hours, 0)
const amount = data.filter((e) => billableIds[e.id]).reduce((n, e) => n + e.amount, 0)

export default function TimesheetInvoice() {
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const root = React.useRef<HTMLDivElement>(null)
  const table = useTable({ features, columns, data, getRowId: (e) => e.id, initialState: { pagination: { pageIndex: 0, pageSize: 12 } } })
  const t = React.useRef(table)
  t.current = table
  const pdf = () =>
    exportPdf(t.current, {
      download: false,
      rows: "selected",
      title: \`\${CLIENT}: billable hours\`,
      subtitle: "1 to 12 September 2026",
      kpis: [
        { label: "Hours", value: hours.toLocaleString("en-US") },
        { label: "Amount", value: money.format(amount) },
      ],
    })

  const steps = React.useMemo<DemoStep[]>(
    () => [
      { caption: \`Two weeks of time entries: \${data.length} of them, four people, three clients.\`, run: (p) => p.point(() => root.current?.querySelector("table")) },
      {
        caption: \`Select \${CLIENT}'s billable entries.\`,
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Select billable"))
          t.current.setRowSelection(billableIds)
        },
      },
      {
        caption: "Group by project to check the hours add up before they go out.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Group by project"))
          t.current.setGrouping(["project"])
          await settle()
          t.current.setExpanded(true)
        },
      },
      {
        caption: "Export only the selected rows to PDF, with the hours and the amount on top. The other clients stay out.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "PDF of selected"))
          await settle()
          setPreview({ blob: await pdf(), name: "halvorsen-hours.pdf", kind: "pdf" })
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const reset = React.useCallback(() => {
    t.current.setRowSelection({})
    t.current.setGrouping([])
    t.current.setPageIndex(0)
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <div className="grid gap-3">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Button variant="outline" size="sm" onClick={() => table.setRowSelection(billableIds)}>Select billable for {CLIENT}</Button>
            <Button variant="outline" size="sm" onClick={() => table.setGrouping(table.state.grouping.length ? [] : ["project"])}>Group by project</Button>
            <span className="text-muted-foreground">{Object.keys(table.state.rowSelection).length} selected</span>
            <Button size="sm" className="ml-auto" onClick={async () => setPreview({ blob: await pdf(), name: "halvorsen-hours.pdf", kind: "pdf" })}>
              <FileText />
              PDF of selected
            </Button>
          </div>
          <DataTable table={table} numeric={["hours", "amount"]} />
        </div>
      </DemoFrame>
    </div>
  )
}
`,Bl=`import * as React from "react"
import { addToWell, exportXlsx, pivotRowStyle, type PivotField, type PivotLayout, type PivotPreset, type PivotTable } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { PivotDesigner } from "@/components/pivot-designer"
import { makeMarketing, type CampaignMonth } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"

export const meta = {
  title: "Marketing spend",
  description: "A marketing lead lays six months of spend against signups by channel, switches to a saved view of the campaigns, and sends the numbers to finance.",
  docs: "presets-and-saved-views.html",
}

const data = makeMarketing()
const usd = (v: unknown) => (typeof v === "number" ? \`$\${Math.round(v).toLocaleString("en-US")}\` : "")
const fields: PivotField<CampaignMonth>[] = [
  { field: "channel", label: "Channel", kind: "dimension" },
  { field: "campaign", label: "Campaign", kind: "dimension" },
  { field: "month", label: "Month", kind: "dimension" },
  { field: "spend", label: "Spend", kind: "measure", format: usd },
  { field: "clicks", label: "Clicks", kind: "measure" },
  { field: "signups", label: "Signups", kind: "measure" },
]
const start: PivotLayout = { rows: ["channel"], cols: [], values: [{ field: "spend", agg: "sum", label: "Sum of Spend" }], filters: [] }
const presets: PivotPreset[] = [
  {
    name: "Paid campaigns, spend and signups",
    layout: {
      rows: ["channel", "campaign"],
      cols: [],
      values: [{ field: "spend", agg: "sum", label: "Spend" }, { field: "signups", agg: "sum", label: "Signups" }],
      filters: [{ field: "channel", allowed: ["Display", "Search", "Social"] }],
    },
  },
]

export default function MarketingSpend() {
  const [layout, setLayout] = React.useState<PivotLayout>(start)
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const root = React.useRef<HTMLDivElement>(null)
  const pivot = React.useRef<PivotTable | null>(null)
  const onPivotChange = React.useCallback((p: PivotTable | null) => {
    pivot.current = p
  }, [])
  const field = (label: string) => () => byText(root.current, 'aside[aria-label="Pivot fields"] [draggable="true"]', label)
  const well = (w: string) => () => root.current?.querySelector(\`[data-well="\${w}"]\`)
  const pivotOptions = React.useMemo(() => ({ numFmt: "#,##0" }), [])

  const steps = React.useMemo<DemoStep[]>(
    () => [
      { caption: "Six months of spend across five channels.", run: (p) => p.point(() => root.current?.querySelector("table")) },
      {
        caption: "Month across the top: where the money went, month by month.",
        run: async (p) => {
          await p.click(field("Month"))
          await p.point(well("cols"))
          setLayout((l) => addToWell(l, fields, "month", "cols"))
        },
      },
      {
        caption: "Add signups next to spend, so each month shows what the money bought.",
        run: async (p) => {
          await p.click(field("Signups"))
          await p.point(well("values"))
          setLayout((l) => (l.values.some((v) => v.field === "signups") ? l : addToWell(l, fields, "signups", "values")))
        },
      },
      {
        caption: "Load a saved view: paid campaigns only, by campaign, spend and signups for the half year.",
        run: async (p) => {
          await p.click(() => byText(root.current, '[data-slot="dropdown-menu-trigger"]', "Presets"))
          setLayout(structuredClone(presets[0]!.layout))
        },
      },
      {
        caption: "Send it to finance as Excel: channels as outline rows over their campaigns, numbers they can work with.",
        run: async (p) => {
          await p.click(() => byText(root.current, '[data-slot="dropdown-menu-trigger"]', "Export"))
          await settle()
          if (!pivot.current) return
          setPreview({ blob: await exportXlsx(pivot.current.table, { download: false, rowStyle: pivotRowStyle }), name: "paid-campaigns.xlsx", kind: "xlsx" })
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const reset = React.useCallback(() => {
    setLayout(start)
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <PivotDesigner
          data={data}
          fields={fields}
          layout={layout}
          onLayoutChange={setLayout}
          presets={presets}
          pivotOptions={pivotOptions}
          onPivotChange={onPivotChange}
          actions={(p) => <ExportMenu table={p.table} fileName="marketing" rowStyle={pivotRowStyle} />}
        />
      </DemoFrame>
    </div>
  )
}
`,Vl=`import * as React from "react"
import { exportXlsx, pivotRowStyle, type PivotConfig } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { Button } from "@/components/ui/button"
import { PivotTable, usePivot } from "@/components/pivot-table"
import { makeDeals, type Deal } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"

export const meta = {
  title: "Sales commissions",
  description: "Sales operations works out each rep's commission per quarter with a tiered rule written as a custom aggregation, then hands the sheet to payroll.",
  docs: "aggregations.html",
}

const data = makeDeals()
const usd = (v: unknown) => (typeof v === "number" ? \`$\${Math.round(v).toLocaleString("en-US")}\` : "")

// 5% on the first $50,000 a rep closes in a quarter, 8% above it.
const commission = (values: readonly unknown[]) => {
  const total = values.reduce<number>((n, v) => n + Number(v || 0), 0)
  return Math.min(total, 50_000) * 0.05 + Math.max(0, total - 50_000) * 0.08
}

const byAmount: PivotConfig<Deal> = { rows: ["region", "rep"], cols: ["quarter"], values: [{ field: "amount", agg: "sum", label: "Closed", format: usd }] }
const byCommission: PivotConfig<Deal> = {
  rows: ["region", "rep"],
  cols: ["quarter"],
  values: [
    { field: "amount", agg: "sum", label: "Closed", format: usd },
    { field: "amount", agg: commission, label: "Commission", format: usd },
  ],
}
const options = { numFmt: '"$"#,##0' }

export default function SalesCommissions() {
  const [withCommission, setWithCommission] = React.useState(false)
  const [collapsed, setCollapsed] = React.useState<Set<string>>(new Set())
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const pivot = usePivot(data, withCommission ? byCommission : byAmount, options)
  const p = React.useRef(pivot)
  p.current = pivot
  const root = React.useRef<HTMLDivElement>(null)

  const steps = React.useMemo<DemoStep[]>(
    () => [
      { caption: \`\${data.length} closed deals: what each rep closed per quarter, by region.\`, run: (api) => api.point(() => root.current?.querySelector("table")) },
      {
        caption: "Add the commission: 5% on the first $50,000 a quarter, 8% above it. It is a custom aggregation over each cell's deals.",
        run: async (api) => {
          await api.click(() => byText(root.current, "button", "Show commission"))
          setWithCommission(true)
        },
      },
      {
        caption: "Region rows add up their reps, and the tier is applied to each rep's quarter, not to the region's total.",
        run: (api) => api.point(() => byText(root.current, "tr", "Europe")),
      },
      {
        caption: "Collapse Asia Pacific to focus on the larger regions.",
        run: async (api) => {
          await api.click(() => root.current?.querySelector('button[aria-label="Collapse Asia Pacific"], button[aria-label="Expand Asia Pacific"]'))
          setCollapsed(new Set(["group__0:Asia Pacific"]))
        },
      },
      {
        caption: "Hand it to payroll as Excel: every rep, collapsed or not, with closed amounts and commission side by side.",
        run: async (api) => {
          await api.click(() => byText(root.current, '[data-slot="dropdown-menu-trigger"]', "Export"))
          await settle()
          setPreview({ blob: await exportXlsx(p.current.table, { download: false, rowStyle: pivotRowStyle }), name: "commissions.xlsx", kind: "xlsx" })
        },
      },
    ],
    []
  )
  const reset = React.useCallback(() => {
    setWithCommission(false)
    setCollapsed(new Set())
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <Button variant={withCommission ? "secondary" : "outline"} size="sm" onClick={() => setWithCommission((c) => !c)}>
              Show commission
            </Button>
            <ExportMenu table={pivot.table} fileName="commissions" rowStyle={pivotRowStyle} className="ml-auto" />
          </div>
          <PivotTable pivot={pivot} collapsed={collapsed} onCollapsedChange={setCollapsed} className="overflow-x-auto" />
        </div>
      </DemoFrame>
    </div>
  )
}
`,Hl=`import * as React from "react"
import { createColumnHelper, useTable } from "@tanstack/react-table"
import { FileText } from "lucide-react"
import { exportPdf } from "rowpine"

import { Button } from "@/components/ui/button"
import { makeShipments, type Shipment } from "@/data"
import { byText, DemoFrame, settle } from "@/demos/frame"
import type { PreviewFile } from "@/demos/file-preview"
import { DemoPlayer, type DemoStep } from "@/demos/player"
import { DataTable } from "@/lib/data-table"
import { day, features, money } from "@/lib/table"

export const meta = {
  title: "Carrier scorecard",
  description: "Logistics groups a month of shipments by carrier, marks the late ones, and prints a 14-column scorecard that still fits the page.",
  docs: "pdf-page-setup.html",
}

const data = makeShipments()
const helper = createColumnHelper<typeof features, Shipment>()
const date = (id: "shipped" | "promised" | "delivered", header: string) =>
  helper.accessor(id, { header, size: 100, cell: (c) => (c.getValue() ? day.format(c.getValue()) : null), meta: { rowpine: { format: (v) => day.format(v as Date) } } })

function makeColumns(flag: boolean) {
  const late = (v: unknown) => (flag && typeof v === "number" && v > 0 ? { color: "#b91c1c", bold: true } : undefined)
  return helper.columns([
    helper.accessor("carrier", { header: "Carrier", size: 140 }),
    helper.accessor("id", { header: "Shipment", size: 90 }),
    helper.accessor("origin", { header: "From", size: 90 }),
    helper.accessor("destination", { header: "To", size: 90 }),
    helper.accessor("mode", { header: "Mode", size: 70 }),
    date("shipped", "Shipped"),
    date("promised", "Promised"),
    date("delivered", "Delivered"),
    helper.accessor("daysLate", {
      header: "Days late",
      size: 80,
      aggregationFn: "mean",
      cell: (c) => <span style={late(c.getValue()) ? { color: "#b91c1c", fontWeight: 600 } : undefined}>{c.getValue()}</span>,
      aggregatedCell: (c) => (c.getValue() as number).toFixed(1),
      meta: { rowpine: { format: (v) => (Number.isInteger(v) ? String(v) : (v as number).toFixed(1)), cellStyle: late } },
    }),
    helper.accessor("pallets", { header: "Pallets", size: 70, aggregationFn: "sum" }),
    helper.accessor("weightKg", { header: "Weight kg", size: 90, aggregationFn: "sum" }),
    helper.accessor("cost", {
      header: "Cost",
      size: 90,
      aggregationFn: "sum",
      cell: (c) => money.format(c.getValue()),
      aggregatedCell: (c) => money.format(c.getValue() as number),
      meta: { rowpine: { format: (v) => money.format(v as number) } },
    }),
    helper.accessor("claims", { header: "Claims", size: 70, aggregationFn: "sum" }),
    helper.accessor("status", { header: "Status", size: 80 }),
  ])
}

export default function CarrierScorecard() {
  const [flag, setFlag] = React.useState(false)
  const [preview, setPreview] = React.useState<PreviewFile | null>(null)
  const columns = React.useMemo(() => makeColumns(flag), [flag])
  const root = React.useRef<HTMLDivElement>(null)
  const table = useTable({ features, columns, data, initialState: { pagination: { pageIndex: 0, pageSize: 10 } } })
  const t = React.useRef(table)
  t.current = table
  const pdf = () => exportPdf(t.current, { download: false, title: "Carrier scorecard", subtitle: "Shipments in August 2026" })

  const steps = React.useMemo<DemoStep[]>(
    () => [
      { caption: \`\${data.length} shipments in August, 14 columns each.\`, run: (p) => p.point(() => root.current?.querySelector("table")) },
      {
        caption: "Group by carrier: average days late, total pallets, weight, cost and claims per carrier.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Group by carrier"))
          t.current.setGrouping(["carrier"])
          await settle()
          t.current.setExpanded(true)
        },
      },
      {
        caption: "Mark the late deliveries in red.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Mark late"))
          setFlag(true)
        },
      },
      {
        caption: "Print it. Fourteen columns do not fit a portrait page, so the page turns and the type shrinks until every column prints.",
        run: async (p) => {
          await p.click(() => byText(root.current, "button", "Scorecard PDF"))
          await settle()
          setPreview({ blob: await pdf(), name: "carrier-scorecard.pdf", kind: "pdf" })
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const reset = React.useCallback(() => {
    t.current.setGrouping([])
    t.current.setPageIndex(0)
    setFlag(false)
    setPreview(null)
  }, [])

  return (
    <div className="grid gap-4">
      <DemoPlayer steps={steps} reset={reset} />
      <DemoFrame rootRef={root} preview={preview} onClosePreview={() => setPreview(null)}>
        <div className="grid gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => table.setGrouping(table.state.grouping.length ? [] : ["carrier"])}>Group by carrier</Button>
            <Button variant={flag ? "secondary" : "outline"} size="sm" onClick={() => setFlag((f) => !f)}>Mark late</Button>
            <Button size="sm" className="ml-auto" onClick={async () => setPreview({ blob: await pdf(), name: "carrier-scorecard.pdf", kind: "pdf" })}>
              <FileText />
              Scorecard PDF
            </Button>
          </div>
          <DataTable table={table} numeric={["daysLate", "pallets", "weightKg", "cost", "claims"]} />
        </div>
      </DemoFrame>
    </div>
  )
}
`,Ul=t({default:()=>Jl,meta:()=>Wl}),Wl={title:`Export menu on a data table`,description:`A shadcn data table with search, sorting and paging, and an Export menu for Excel, PDF and CSV. The file holds every row that passes the search, in the current sort, not just the visible page.`},Gl=b(),Kl=B(),ql=Kl.columns([Kl.accessor(`id`,{header:`Order`,size:80}),Kl.accessor(`customer`,{header:`Customer`,size:190}),Kl.accessor(`product`,{header:`Product`,size:150}),Kl.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>J.format(e.getValue()),meta:{rowpine:{numFmt:`yyyy-mm-dd`,format:e=>J.format(e)}}}),Kl.accessor(`amount`,{header:`Amount`,cell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>q.format(e)}}}),Kl.accessor(`status`,{header:`Status`,size:100})]);function Jl(){let[e,t]=C.useState(``),n=W({features:K,columns:ql,data:Gl,globalFilterFn:`includesString`,state:{globalFilter:e},onGlobalFilterChange:t,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(Ne,{placeholder:`Search orders...`,value:e,onChange:e=>t(e.target.value),className:`h-8 w-64`}),(0,w.jsx)(S,{table:n,fileName:`orders`,pdfTitle:`Orders`,className:`ml-auto`})]}),(0,w.jsx)(G,{table:n,numeric:[`amount`]})]})}var Yl=t({default:()=>eu,meta:()=>Xl}),Xl={title:`Grouped rows to Excel outlines`,description:`Group by region and product. Excel gets one outline level per grouping, so the groups collapse in Excel too, and the group totals are SUBTOTAL formulas over the rows below them.`},Zl=b(),Ql=B(),$l=Ql.columns([Ql.accessor(`region`,{header:`Region`,size:170}),Ql.accessor(`product`,{header:`Product`,size:170}),Ql.accessor(`customer`,{header:`Customer`,size:190}),Ql.accessor(`quantity`,{header:`Qty`,aggregationFn:`sum`}),Ql.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>q.format(e)}}}),Ql.accessor(`amount`,{id:`average`,header:`Avg order`,aggregationFn:`mean`,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>q.format(e)}}})]);function eu(){let e=W({features:K,columns:$l,data:Zl,initialState:{grouping:[`region`,`product`],expanded:!0,pagination:{pageIndex:0,pageSize:15}}}),t=e.state.grouping.includes(`product`);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>e.setGrouping(t?[`region`]:[`region`,`product`]),children:t?`Group by region only`:`Also group by product`}),(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>e.toggleAllRowsExpanded(),children:e.getIsAllRowsExpanded()?`Collapse all`:`Expand all`}),(0,w.jsx)(S,{table:e,fileName:`orders-by-region`,pdfTitle:`Orders by region`,className:`ml-auto`})]}),(0,w.jsx)(G,{table:e,numeric:[`quantity`,`amount`,`average`]})]})}var tu=t({default:()=>au,meta:()=>nu}),nu={title:`Hidden, pinned and excluded columns`,description:`The file has the columns on screen, in screen order. Hidden columns stay out, pinned columns become frozen panes in Excel, and a column marked exclude never goes to a file.`},ru=b(),$=B(),iu=$.columns([$.accessor(`customer`,{header:`Customer`,size:190}),$.accessor(`country`,{header:`Country`}),$.accessor(`product`,{header:`Product`,size:150}),$.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>J.format(e.getValue()),meta:{rowpine:{numFmt:`yyyy-mm-dd`}}}),$.accessor(`amount`,{header:`Amount`,cell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),$.accessor(`status`,{header:`Status`}),$.accessor(`id`,{header:`Internal id`,meta:{rowpine:{exclude:!0}}})]);function au(){let e=W({features:K,columns:iu,data:ru,initialState:{columnPinning:{start:[`customer`],end:[]},columnVisibility:{country:!1},pagination:{pageIndex:0,pageSize:10}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsxs)(ne,{children:[(0,w.jsxs)(o,{className:r({variant:`outline`,size:`sm`}),children:[(0,w.jsx)(Pe,{}),`Columns`]}),(0,w.jsxs)(Me,{align:`start`,className:`w-48`,children:[(0,w.jsxs)(re,{children:[(0,w.jsx)(s,{children:`Show`}),e.getAllLeafColumns().map(e=>(0,w.jsx)(a,{checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t),children:String(e.columnDef.header)},e.id))]}),(0,w.jsxs)(re,{children:[(0,w.jsx)(s,{children:`Pin to the start`}),e.getAllLeafColumns().map(e=>(0,w.jsx)(a,{checked:e.getIsPinned()===`start`,onCheckedChange:t=>e.pin(t?`start`:!1),children:String(e.columnDef.header)},e.id))]})]})]}),(0,w.jsx)(S,{table:e,fileName:`orders-columns`,className:`ml-auto`})]}),(0,w.jsx)(G,{table:e,numeric:[`amount`]})]})}var ou=t({default:()=>du,meta:()=>su}),su={title:`Export only the selected rows`,description:`Tick some rows and the Export menu offers "Selected rows only". The selection column itself is marked exclude, so it never reaches the file.`},cu=b(),lu=B(),uu=lu.columns([lu.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},header:({table:e})=>(0,w.jsx)(le,{checked:e.getIsAllPageRowsSelected(),indeterminate:e.getIsSomePageRowsSelected()&&!e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":`Select page`}),cell:({row:e})=>(0,w.jsx)(le,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`})}),lu.accessor(`id`,{header:`Order`,size:80}),lu.accessor(`customer`,{header:`Customer`,size:190}),lu.accessor(`product`,{header:`Product`}),lu.accessor(`amount`,{header:`Amount`,cell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}})]);function du(){let e=W({features:K,columns:uu,data:cu,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:10},rowSelection:{1001:!0,1004:!0,1007:!0}}}),t=Object.keys(e.state.rowSelection).length;return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-muted-foreground`,children:[t,` selected`,(0,w.jsx)(S,{table:e,fileName:`selected-orders`,className:`ml-auto`})]}),(0,w.jsx)(G,{table:e,numeric:[`amount`]})]})}function fu(e){return m(e.defaultTagName??`div`,e,e)}var pu=p(`group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!`,{variants:{variant:{default:`bg-primary text-primary-foreground [a]:hover:bg-primary/80`,secondary:`bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80`,destructive:`bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20`,outline:`border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground`,ghost:`hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50`,link:`text-primary underline-offset-4 hover:underline`}},defaultVariants:{variant:`default`}});function mu({className:e,variant:t=`default`,render:n,...r}){return fu({defaultTagName:`span`,props:ee({className:c(pu({variant:t}),e)},r),render:n,state:{slot:`badge`,variant:t}})}var hu=t({default:()=>Cu,meta:()=>gu}),gu={title:`Number formats and cell colors`,description:`meta.rowpine.numFmt gives Excel a real number format, so amounts stay numbers you can sum. format sets the text for PDF and cellStyle colors cells in both files, the same rule the screen uses.`},_u=b().map((e,t)=>({...e,margin:t*37%45/100-.05})),vu=new Intl.NumberFormat(`en-US`,{style:`percent`,maximumFractionDigits:1}),yu=e=>e===`Overdue`?{color:`#b91c1c`,bold:!0}:e===`Open`?{color:`#a16207`}:void 0,bu=e=>e<0?`#fee2e2`:e>=.3?`#dcfce7`:void 0,xu=B(),Su=xu.columns([xu.accessor(`customer`,{header:`Customer`,size:190}),xu.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>J.format(e.getValue()),meta:{rowpine:{numFmt:`d mmm yyyy`,format:e=>J.format(e)}}}),xu.accessor(`amount`,{header:`Amount`,cell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>q.format(e)}}}),xu.accessor(`margin`,{header:`Margin`,cell:e=>(0,w.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:{background:bu(e.getValue())},children:vu.format(e.getValue())}),meta:{rowpine:{numFmt:`0.0%`,format:e=>vu.format(e),cellStyle:e=>({fill:bu(e)})}}}),xu.accessor(`status`,{header:`Status`,cell:e=>(0,w.jsx)(mu,{variant:e.getValue()===`Overdue`?`destructive`:`secondary`,children:e.getValue()}),meta:{rowpine:{cellStyle:yu}}})]);function Cu(){let e=W({features:K,columns:Su,data:_u,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(S,{table:e,fileName:`orders-formatted`,pdfTitle:`Orders`})}),(0,w.jsx)(G,{table:e,numeric:[`amount`,`margin`]})]})}var wu=t({default:()=>Ou,meta:()=>Tu}),Tu={title:`Tree data`,description:`Rows nested with getSubRows export as Excel outline levels, one per depth, so the hierarchy collapses in Excel. Parent rows are bold in Excel and PDF.`},Eu=B(),Du=Eu.columns([Eu.accessor(`name`,{header:`Unit`,size:240}),Eu.accessor(`lead`,{header:`Lead`,size:170}),Eu.accessor(`headcount`,{header:`Headcount`}),Eu.accessor(`budget`,{header:`Budget`,cell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>q.format(e)}}})]);function Ou(){let e=W({features:K,columns:Du,data:ve,getSubRows:e=>e.subRows,initialState:{expanded:!0}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(x,{variant:`outline`,size:`sm`,onClick:()=>e.toggleAllRowsExpanded(),children:e.getIsAllRowsExpanded()?`Collapse all`:`Expand all`}),(0,w.jsx)(S,{table:e,fileName:`org-budget`,pdfTitle:`Budget by unit`,className:`ml-auto`})]}),(0,w.jsx)(G,{table:e,numeric:[`headcount`,`budget`],tree:!0,paging:!1})]})}var ku=t({default:()=>Pu,meta:()=>Au}),Au={title:`A PDF report from your own button`,description:`Call exportPdf directly to set the page: size, orientation, a title and subtitle, a strip of headline numbers, a watermark and the header color. Rows are grouped by status, as on screen.`},ju=b(),Mu=B(),Nu=Mu.columns([Mu.accessor(`status`,{header:`Status`,size:110}),Mu.accessor(`customer`,{header:`Customer`,size:190}),Mu.accessor(`product`,{header:`Product`}),Mu.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?J.format(e.getValue()):null,meta:{rowpine:{format:e=>J.format(e)}}}),Mu.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{format:e=>q.format(e)}}})]);function Pu(){let[e,t]=C.useState(`A4`),[n,r]=C.useState(!1),i=W({features:K,columns:Nu,data:ju,initialState:{grouping:[`status`],expanded:!0,pagination:{pageIndex:0,pageSize:12}}}),a=ju.reduce((e,t)=>e+t.amount,0),o=ju.filter(e=>e.status===`Overdue`);async function s(){await y(i,{fileName:`receivables`,title:`Receivables`,subtitle:`${ju.length} orders, January to September 2026`,pageSize:e,pageOrientation:n?`landscape`:`portrait`,headerColor:`#1f3d2e`,kpis:[{label:`Invoiced`,value:q.format(a)},{label:`Overdue`,value:q.format(o.reduce((e,t)=>e+t.amount,0)),delta:`${o.length} orders`,color:`#b91c1c`}],watermark:`DRAFT`})}return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Page`,(0,w.jsx)(`select`,{value:e,onChange:e=>t(e.target.value),className:`h-8 rounded-md border bg-background px-2`,children:[`A4`,`LETTER`,`LEGAL`,`A3`].map(e=>(0,w.jsx)(`option`,{children:e},e))})]}),(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),`Landscape`]}),(0,w.jsxs)(x,{size:`sm`,className:`ml-auto`,onClick:()=>void s(),children:[(0,w.jsx)(f,{}),`Download PDF`]})]}),(0,w.jsx)(G,{table:i,numeric:[`amount`]})]})}var Fu=t({default:()=>zu,meta:()=>Iu}),Iu={title:`A pivot table from code`,description:`usePivot turns flat orders into products down and quarters across, with two measures side by side: units sold and the average order value. Groups expand and collapse, and the pivot exports like any table.`},Lu=b(),Ru={rows:[`product`,`region`],cols:[`quarter`],values:[{field:`quantity`,agg:`sum`,label:`Units`},{field:`amount`,agg:`avg`,label:`Avg order`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``}]};function zu(){let e=pe(Lu,Ru),[t,n]=C.useState(new Set);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(S,{table:e.table,fileName:`units-by-product`,pdfTitle:`Units by product`,rowStyle:d})}),(0,w.jsx)(de,{pivot:e,collapsed:t,onCollapsedChange:n})]})}var Bu=t({default:()=>Ku,meta:()=>Vu}),Vu={title:`Pivot designer`,description:`Users build their own pivot: drag fields into Rows, Columns, Values and Filters, change aggregations from a chip's menu, filter values, load a preset, and switch totals on and off.`},Hu=b(),Uu=[{field:`region`,label:`Region`,kind:`dimension`,group:`Where`},{field:`country`,label:`Country`,kind:`dimension`,group:`Where`},{field:`customer`,label:`Customer`,kind:`dimension`,group:`Who`},{field:`product`,label:`Product`,kind:`dimension`,group:`What`},{field:`status`,label:`Status`,kind:`dimension`,group:`What`},{field:`quarter`,label:`Quarter`,kind:`dimension`,group:`When`},{field:`amount`,label:`Amount`,kind:`measure`,group:`Numbers`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`quantity`,label:`Units`,kind:`measure`,group:`Numbers`}],Wu=[{name:`Revenue by region and quarter`,layout:{rows:[`region`,`country`],cols:[`quarter`],values:[{field:`amount`,agg:`sum`,label:`Sum of Amount`}],filters:[]}},{name:`Overdue by customer`,layout:{rows:[`customer`],cols:[],values:[{field:`amount`,agg:`sum`,label:`Sum of Amount`},{field:`amount`,agg:`count`,label:`Count of Amount`}],filters:[{field:`status`,allowed:[`Overdue`]}]}}],Gu={numFmt:`"$"#,##0`};function Ku(){return(0,w.jsx)(Ae,{data:Hu,fields:Uu,presets:Wu,pivotOptions:Gu,actions:e=>(0,w.jsx)(S,{table:e.table,fileName:`pivot`,pdfTitle:`Sales pivot`,rowStyle:d})})}var qu=t({default:()=>$u,meta:()=>Ju}),Ju={title:`Saved views`,description:`The designer's layout is plain JSON. Keep it in state, save named views to localStorage, offer them back as presets, and export the current pivot from your own buttons.`},Yu=b(),Xu=[{field:`region`,label:`Region`,kind:`dimension`},{field:`product`,label:`Product`,kind:`dimension`},{field:`status`,label:`Status`,kind:`dimension`},{field:`quarter`,label:`Quarter`,kind:`dimension`},{field:`amount`,label:`Amount`,kind:`measure`},{field:`quantity`,label:`Units`,kind:`measure`}],Zu=`rowpine-example-views`;function Qu(){try{return JSON.parse(localStorage.getItem(Zu)??`[]`)}catch{return[]}}function $u(){let[e,t]=C.useState(()=>oe(Xu)),[n,r]=C.useState(Qu),[i,a]=C.useState(``),o=C.useRef(null),s=C.useCallback(e=>{o.current=e},[]),c=e=>{r(e);try{localStorage.setItem(Zu,JSON.stringify(e))}catch{}};return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(Ne,{placeholder:`Name this view...`,value:i,onChange:e=>a(e.target.value),className:`h-8 w-56`}),(0,w.jsxs)(x,{size:`sm`,variant:`outline`,disabled:!i.trim(),onClick:()=>{c([...n.filter(e=>e.name!==i.trim()),{name:i.trim(),layout:e}]),a(``)},children:[(0,w.jsx)(Ye,{}),`Save view`]}),n.length>0&&(0,w.jsxs)(x,{size:`sm`,variant:`ghost`,onClick:()=>c([]),children:[(0,w.jsx)(Ze,{}),`Forget saved views`]}),(0,w.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,w.jsx)(x,{size:`sm`,variant:`outline`,onClick:()=>o.current&&void l(o.current.table,{fileName:`view`}),children:`CSV`}),(0,w.jsx)(x,{size:`sm`,onClick:()=>o.current&&void v(o.current.table,{fileName:`view`,rowStyle:d}),children:`Excel`})]})]}),(0,w.jsx)(Ae,{data:Yu,fields:Xu,layout:e,onLayoutChange:t,presets:n,onPivotChange:s}),(0,w.jsxs)(`details`,{className:`text-sm`,children:[(0,w.jsx)(`summary`,{className:`cursor-pointer text-muted-foreground`,children:`Current layout as JSON`}),(0,w.jsx)(`pre`,{className:`mt-2 overflow-x-auto rounded-md bg-muted p-3 text-xs`,children:JSON.stringify(e,null,2)})]})]})}var ed=t({default:()=>id,meta:()=>td}),td={title:`Your own aggregation`,description:`An aggregation can be any function of the values in a cell. Here the median order sits next to the built-in count of distinct customers.`},nd=b(),rd={rows:[`product`],cols:[`quarter`],values:[{field:`amount`,agg:e=>{let t=e.map(Number).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t);if(!t.length)return null;let n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},label:`Median order`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`customer`,agg:`countDistinct`,label:`Customers`}]};function id(){let e=pe(nd,rd);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(S,{table:e.table,fileName:`median-orders`,rowStyle:d})}),(0,w.jsx)(de,{pivot:e})]})}var ad=t({default:()=>ld,meta:()=>od}),od={title:`A pivot in your own TanStack table`,description:`createPivot returns rows nested through subRows and TanStack column definitions. Render them with the table you already have; sorting, expanding and export all work on it.`},sd=b(),cd=e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``;function ld(){let e=C.useMemo(()=>ae(sd,{rows:[`region`,`country`],cols:[`status`],values:[{field:`amount`,agg:`sum`,label:`Amount`,format:cd}]},{numFmt:`"$"#,##0`}),[]),t=e.columns,n=W({features:K,columns:t,data:e.data,getSubRows:e=>e.subRows,initialState:{expanded:!0}}),r=C.useMemo(()=>n.getAllLeafColumns().map(e=>e.id).filter(e=>e!==`__pivotRowHeader`),[n]);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(S,{table:n,fileName:`pivot-tanstack`,rowStyle:d})}),(0,w.jsx)(G,{table:n,numeric:r,tree:!0,paging:!1})]})}var ud=t({default:()=>gd,meta:()=>dd}),dd={title:`Sum, average, min and max in Excel`,description:`Each TanStack aggregation becomes its own Excel formula on the group rows: SUBTOTAL 9 for sum, 1 for average, 5 for min and 4 for max. Edit an order in Excel and every one updates.`},fd=b(),pd=B(),md=(e,t,n)=>pd.accessor(`amount`,{id:e,header:t,aggregationFn:n,cell:e=>q.format(e.getValue()),aggregatedCell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),hd=pd.columns([pd.accessor(`product`,{header:`Product`,size:170}),pd.accessor(`customer`,{header:`Customer`,size:190}),md(`sum`,`Total`,`sum`),md(`mean`,`Average`,`mean`),md(`min`,`Smallest`,`min`),md(`max`,`Largest`,`max`)]);function gd(){let e=W({features:K,columns:hd,data:fd,initialState:{grouping:[`product`],expanded:{},pagination:{pageIndex:0,pageSize:20}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(S,{table:e,fileName:`aggregations`,formats:[`xlsx`,`csv`]})}),(0,w.jsx)(G,{table:e,numeric:[`sum`,`mean`,`min`,`max`]})]})}var _d=t({default:()=>Sd,meta:()=>vd}),vd={title:`All rows, this page, or the selection`,description:`The rows option picks what goes in the file: every filtered row on every page, only the page on screen, or only the selected rows. The count beside each choice is what you will get.`},yd=b(),bd=B(),xd=bd.columns([bd.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},cell:({row:e})=>(0,w.jsx)(le,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`})}),bd.accessor(`id`,{header:`Order`,size:80}),bd.accessor(`customer`,{header:`Customer`,size:190}),bd.accessor(`product`,{header:`Product`}),bd.accessor(`amount`,{header:`Amount`,cell:e=>q.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}})]);function Sd(){let[e,t]=C.useState(`all`),n=W({features:K,columns:xd,data:yd,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:8},rowSelection:{1002:!0,1005:!0}}}),r={all:n.getPrePaginatedRowModel().rows.length,page:n.getRowModel().rows.length,selected:Object.keys(n.state.rowSelection).length};return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-sm`,children:[[`all`,`page`,`selected`].map(n=>(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`radio`,name:`rows`,checked:e===n,onChange:()=>t(n)}),n===`all`?`All rows`:n===`page`?`This page`:`Selected`,` (`,r[n],`)`]},n)),(0,w.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,w.jsx)(x,{size:`sm`,variant:`outline`,onClick:()=>void l(n,{fileName:`orders-${e}`,rows:e}),children:`CSV`}),(0,w.jsx)(x,{size:`sm`,onClick:()=>void v(n,{fileName:`orders-${e}`,rows:e}),children:`Excel`})]})]}),(0,w.jsx)(G,{table:n,numeric:[`amount`]})]})}var Cd=t({default:()=>Od,meta:()=>wd}),wd={title:`A wide table in a PDF`,description:`Eighteen columns do not fit a page. Rowpine turns the page, shrinks the type down to three quarters, and past that splits the columns over pages with the first one repeated. Pick the behaviour and compare.`},Td=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],Ed=[`Halvorsen AS`,`Brandt GmbH`,`Maison Duret`,`Lakeshore Supply`,`Redwood Tools`,`Kitano Trading`,`Harbor & Pine`,`Maple Freight`,`Southern Cross Parts`,`Fjord Logistics`].map((e,t)=>{let n={account:e,owner:[`Ines`,`Tomas`,`Aiko`,`Ravi`][t%4],region:[`Europe`,`North America`,`Asia Pacific`][t%3],total:0};return Td.forEach((e,r)=>{n[e]=1e3+(t*37+r*53)%90*100,n.total+=n[e]}),n}),Dd=[{accessorKey:`account`,header:`Account`,size:170},{accessorKey:`owner`,header:`Owner`},{accessorKey:`region`,header:`Region`},...Td.map(e=>({accessorKey:e,header:e,size:80,cell:e=>q.format(e.getValue())})),{accessorKey:`total`,header:`Total`,cell:e=>q.format(e.getValue())}];function Od(){let[e,t]=C.useState(`auto`),n=W({features:K,columns:Dd,data:Ed});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-sm`,children:[[`auto`,`shrink`,`split`].map(n=>(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`radio`,name:`fit`,checked:e===n,onChange:()=>t(n)}),n===`auto`?`Shrink, then split (default)`:n===`shrink`?`Only shrink`:`Only split`]},n)),(0,w.jsxs)(x,{size:`sm`,className:`ml-auto`,onClick:()=>void y(n,{fileName:`accounts-${e}`,title:`Monthly revenue by account`,fit:e}),children:[(0,w.jsx)(f,{}),`Download PDF`]})]}),(0,w.jsx)(G,{table:n,numeric:[...Td,`total`],paging:!1})]})}var kd=t({default:()=>Ld,meta:()=>Ad}),Ad={title:`A PDF in another language`,description:`Headers come from your columns, numbers and dates from your formatters, and the words the PDF writes itself (the page footer and its date) from labels. This one is German.`},jd=b(40),Md=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),Nd=new Intl.DateTimeFormat(`de-DE`,{day:`2-digit`,month:`2-digit`,year:`numeric`}),Pd={Paid:`Bezahlt`,Open:`Offen`,Overdue:`Überfällig`},Fd=B(),Id=Fd.columns([Fd.accessor(`id`,{header:`Auftrag`,size:90}),Fd.accessor(`customer`,{header:`Kunde`,size:190}),Fd.accessor(`date`,{header:`Datum`,cell:e=>Nd.format(e.getValue()),meta:{rowpine:{format:e=>Nd.format(e)}}}),Fd.accessor(`amount`,{header:`Betrag`,cell:e=>Md.format(e.getValue()),meta:{rowpine:{format:e=>Md.format(e)}}}),Fd.accessor(`status`,{header:`Status`,cell:e=>Pd[e.getValue()],meta:{rowpine:{format:e=>Pd[e]}}})]);function Ld(){let e=W({features:K,columns:Id,data:jd,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsxs)(x,{size:`sm`,onClick:()=>void y(e,{fileName:`auftraege`,title:`Aufträge`,subtitle:`Januar bis September 2026`,labels:{page:(e,t)=>`Seite ${e} von ${t}`,date:e=>Nd.format(e)}}),children:[(0,w.jsx)(f,{}),`PDF herunterladen`]})}),(0,w.jsx)(G,{table:e,numeric:[`amount`]})]})}var Rd=`import * as React from "react"
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
`,zd=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Bd=`import { createColumnHelper, useTable } from "@tanstack/react-table"
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
`,Vd=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Hd=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Ud=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Wd=`import * as React from "react"
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
`,Gd=`import * as React from "react"
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
`,Kd=`import { pivotRowStyle, type PivotField, type PivotPreset } from "rowpine"

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
`,qd=`import * as React from "react"
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
`,Jd=`import { pivotRowStyle, type PivotConfig } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { PivotTable, usePivot } from "@/components/pivot-table"
import { makeOrders, type Order } from "@/data"

export const meta = {
  title: "Your own aggregation",
  description: "An aggregation can be any function of the values in a cell. Here the median order sits next to the built-in count of distinct customers.",
}

const data = makeOrders()
const usd = (v: unknown) => (typeof v === "number" ? \`$\${Math.round(v).toLocaleString("en-US")}\` : "")

// Gets the amounts that fall in one cell; returns the number to show.
const median = (values: readonly unknown[]) => {
  const n = values.map(Number).filter((v) => !Number.isNaN(v)).sort((a, b) => a - b)
  if (!n.length) return null
  const mid = Math.floor(n.length / 2)
  return n.length % 2 ? n[mid]! : (n[mid - 1]! + n[mid]!) / 2
}

const config: PivotConfig<Order> = {
  rows: ["product"],
  cols: ["quarter"],
  values: [
    { field: "amount", agg: median, label: "Median order", format: usd },
    { field: "customer", agg: "countDistinct", label: "Customers" },
  ],
}

export default function CustomAggregation() {
  const pivot = usePivot(data, config)
  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <ExportMenu table={pivot.table} fileName="median-orders" rowStyle={pivotRowStyle} />
      </div>
      <PivotTable pivot={pivot} />
    </div>
  )
}
`,Yd=`import * as React from "react"
import { useTable, type ColumnDef } from "@tanstack/react-table"
import { createPivot, pivotRowStyle, type PivotTreeRow } from "rowpine"

import { ExportMenu } from "@/components/export-menu"
import { makeOrders } from "@/data"
import { DataTable } from "@/lib/data-table"
import { features } from "@/lib/table"

export const meta = {
  title: "A pivot in your own TanStack table",
  description: "createPivot returns rows nested through subRows and TanStack column definitions. Render them with the table you already have; sorting, expanding and export all work on it.",
}

const data = makeOrders()
const usd = (v: unknown) => (typeof v === "number" ? \`$\${Math.round(v).toLocaleString("en-US")}\` : "")

export default function PivotInTanStack() {
  const pivot = React.useMemo(
    () =>
      createPivot(
        data,
        { rows: ["region", "country"], cols: ["status"], values: [{ field: "amount", agg: "sum", label: "Amount", format: usd }] },
        { numFmt: '"$"#,##0' }
      ),
    []
  )
  // The generated definitions are plain accessor and group columns; TanStack takes them as they are.
  const columns = pivot.columns as unknown as ColumnDef<typeof features, PivotTreeRow>[]
  const table = useTable({
    features,
    columns,
    data: pivot.data,
    getSubRows: (r) => r.subRows,
    initialState: { expanded: true },
  })
  const leafIds = React.useMemo(() => table.getAllLeafColumns().map((c) => c.id).filter((id) => id !== "__pivotRowHeader"), [table])

  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <ExportMenu table={table} fileName="pivot-tanstack" rowStyle={pivotRowStyle} />
      </div>
      <DataTable table={table} numeric={leafIds} tree paging={false} />
    </div>
  )
}
`,Xd=`import { createColumnHelper, useTable } from "@tanstack/react-table"

import { ExportMenu } from "@/components/export-menu"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { features, money } from "@/lib/table"

export const meta = {
  title: "Sum, average, min and max in Excel",
  description: "Each TanStack aggregation becomes its own Excel formula on the group rows: SUBTOTAL 9 for sum, 1 for average, 5 for min and 4 for max. Edit an order in Excel and every one updates.",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const amount = (id: string, header: string, aggregationFn: "sum" | "mean" | "min" | "max") =>
  helper.accessor("amount", {
    id,
    header,
    aggregationFn: aggregationFn as never,
    cell: (c) => money.format(c.getValue()),
    aggregatedCell: (c) => money.format(c.getValue() as number),
    meta: { rowpine: { numFmt: '"$"#,##0.00' } },
  })

const columns = helper.columns([
  helper.accessor("product", { header: "Product", size: 170 }),
  helper.accessor("customer", { header: "Customer", size: 190 }),
  amount("sum", "Total", "sum"),
  amount("mean", "Average", "mean"),
  amount("min", "Smallest", "min"),
  amount("max", "Largest", "max"),
])

export default function AggregationsToExcel() {
  const table = useTable({
    features,
    columns,
    data,
    initialState: { grouping: ["product"], expanded: {}, pagination: { pageIndex: 0, pageSize: 20 } },
  })
  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <ExportMenu table={table} fileName="aggregations" formats={["xlsx", "csv"]} />
      </div>
      <DataTable table={table} numeric={["sum", "mean", "min", "max"]} />
    </div>
  )
}
`,Zd=`import * as React from "react"
import { createColumnHelper, useTable } from "@tanstack/react-table"
import { exportCsv, exportXlsx, type RowScope } from "rowpine"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { features, money } from "@/lib/table"

export const meta = {
  title: "All rows, this page, or the selection",
  description: "The rows option picks what goes in the file: every filtered row on every page, only the page on screen, or only the selected rows. The count beside each choice is what you will get.",
}

const data = makeOrders()
const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.display({
    id: "select",
    size: 36,
    meta: { rowpine: { exclude: true } },
    cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(v) => row.toggleSelected(!!v)} aria-label="Select row" />,
  }),
  helper.accessor("id", { header: "Order", size: 80 }),
  helper.accessor("customer", { header: "Customer", size: 190 }),
  helper.accessor("product", { header: "Product" }),
  helper.accessor("amount", { header: "Amount", cell: (c) => money.format(c.getValue()), meta: { rowpine: { numFmt: '"$"#,##0.00' } } }),
])

export default function RowsOption() {
  const [rows, setRows] = React.useState<RowScope>("all")
  const table = useTable({
    features,
    columns,
    data,
    getRowId: (r) => r.id,
    initialState: { pagination: { pageIndex: 0, pageSize: 8 }, rowSelection: { "1002": true, "1005": true } },
  })
  const counts: Record<RowScope, number> = {
    all: table.getPrePaginatedRowModel().rows.length,
    page: table.getRowModel().rows.length,
    selected: Object.keys(table.state.rowSelection).length,
  }
  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center gap-4 text-sm">
        {(["all", "page", "selected"] as const).map((r) => (
          <label key={r} className="flex items-center gap-2">
            <input type="radio" name="rows" checked={rows === r} onChange={() => setRows(r)} />
            {r === "all" ? "All rows" : r === "page" ? "This page" : "Selected"} ({counts[r]})
          </label>
        ))}
        <div className="ml-auto flex gap-2">
          <Button size="sm" variant="outline" onClick={() => void exportCsv(table, { fileName: \`orders-\${rows}\`, rows })}>
            CSV
          </Button>
          <Button size="sm" onClick={() => void exportXlsx(table, { fileName: \`orders-\${rows}\`, rows })}>
            Excel
          </Button>
        </div>
      </div>
      <DataTable table={table} numeric={["amount"]} />
    </div>
  )
}
`,Qd=`import * as React from "react"
import { useTable, type ColumnDef } from "@tanstack/react-table"
import { FileText } from "lucide-react"
import { exportPdf } from "rowpine"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/lib/data-table"
import { features, money } from "@/lib/table"

export const meta = {
  title: "A wide table in a PDF",
  description: "Eighteen columns do not fit a page. Rowpine turns the page, shrinks the type down to three quarters, and past that splits the columns over pages with the first one repeated. Pick the behaviour and compare.",
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
type Row = { account: string; owner: string; region: string; total: number } & Record<string, number | string>
const accounts = ["Halvorsen AS", "Brandt GmbH", "Maison Duret", "Lakeshore Supply", "Redwood Tools", "Kitano Trading", "Harbor & Pine", "Maple Freight", "Southern Cross Parts", "Fjord Logistics"]
const data: Row[] = accounts.map((account, i) => {
  const row: Row = { account, owner: ["Ines", "Tomas", "Aiko", "Ravi"][i % 4]!, region: ["Europe", "North America", "Asia Pacific"][i % 3]!, total: 0 }
  MONTHS.forEach((m, k) => {
    row[m] = 1000 + ((i * 37 + k * 53) % 90) * 100
    row.total += row[m] as number
  })
  return row
})
const columns: ColumnDef<typeof features, Row>[] = [
  { accessorKey: "account", header: "Account", size: 170 },
  { accessorKey: "owner", header: "Owner" },
  { accessorKey: "region", header: "Region" },
  ...MONTHS.map((m) => ({ accessorKey: m, header: m, size: 80, cell: (c: { getValue: () => unknown }) => money.format(c.getValue() as number) })),
  { accessorKey: "total", header: "Total", cell: (c) => money.format(c.getValue() as number) },
] as ColumnDef<typeof features, Row>[]

export default function WidePdf() {
  const [fit, setFit] = React.useState<"auto" | "shrink" | "split">("auto")
  const table = useTable({ features, columns, data })
  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center gap-4 text-sm">
        {(["auto", "shrink", "split"] as const).map((f) => (
          <label key={f} className="flex items-center gap-2">
            <input type="radio" name="fit" checked={fit === f} onChange={() => setFit(f)} />
            {f === "auto" ? "Shrink, then split (default)" : f === "shrink" ? "Only shrink" : "Only split"}
          </label>
        ))}
        <Button size="sm" className="ml-auto" onClick={() => void exportPdf(table, { fileName: \`accounts-\${fit}\`, title: "Monthly revenue by account", fit })}>
          <FileText />
          Download PDF
        </Button>
      </div>
      <DataTable table={table} numeric={[...MONTHS, "total"]} paging={false} />
    </div>
  )
}
`,$d=`import { createColumnHelper, useTable } from "@tanstack/react-table"
import { FileText } from "lucide-react"
import { exportPdf } from "rowpine"

import { Button } from "@/components/ui/button"
import { makeOrders, type Order } from "@/data"
import { DataTable } from "@/lib/data-table"
import { features } from "@/lib/table"

export const meta = {
  title: "A PDF in another language",
  description: "Headers come from your columns, numbers and dates from your formatters, and the words the PDF writes itself (the page footer and its date) from labels. This one is German.",
}

const data = makeOrders(40)
const eur = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
const datum = new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })
const status: Record<Order["status"], string> = { Paid: "Bezahlt", Open: "Offen", Overdue: "Überfällig" }

const helper = createColumnHelper<typeof features, Order>()
const columns = helper.columns([
  helper.accessor("id", { header: "Auftrag", size: 90 }),
  helper.accessor("customer", { header: "Kunde", size: 190 }),
  helper.accessor("date", { header: "Datum", cell: (c) => datum.format(c.getValue()), meta: { rowpine: { format: (v) => datum.format(v as Date) } } }),
  helper.accessor("amount", { header: "Betrag", cell: (c) => eur.format(c.getValue()), meta: { rowpine: { format: (v) => eur.format(v as number) } } }),
  helper.accessor("status", { header: "Status", cell: (c) => status[c.getValue()], meta: { rowpine: { format: (v) => status[v as Order["status"]] } } }),
])

export default function PdfLabels() {
  const table = useTable({ features, columns, data, initialState: { pagination: { pageIndex: 0, pageSize: 10 } } })
  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={() =>
            void exportPdf(table, {
              fileName: "auftraege",
              title: "Aufträge",
              subtitle: "Januar bis September 2026",
              labels: { page: (p, n) => \`Seite \${p} von \${n}\`, date: (d) => datum.format(d) },
            })
          }
        >
          <FileText />
          PDF herunterladen
        </Button>
      </div>
      <DataTable table={table} numeric={["amount"]} />
    </div>
  )
}
`;fe(void 0);function ef(e,t,n){return Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,r])=>{let i=e.replace(/^.*\//,``).replace(`.tsx`,``);return{...r.meta,docs:r.meta.docs??nf[i],slug:i,route:n===`use`?`demo/${i.replace(/^\d+-/,``)}`:i,Component:r.default,source:t[e]??``,kind:n}})}var tf=ef(Object.assign({"./usecases/01-sales-pivot.tsx":mt,"./usecases/02-orders-to-excel.tsx":Tc,"./usecases/03-month-end-pdf.tsx":Ac,"./usecases/04-budget-tree.tsx":Rc,"./usecases/05-support-tickets.tsx":Wc,"./usecases/06-inventory-reorder.tsx":Xc,"./usecases/07-timesheet-invoice.tsx":nl,"./usecases/08-marketing-spend.tsx":dl,"./usecases/09-sales-commissions.tsx":vl,"./usecases/10-carrier-scorecard.tsx":Dl}),Object.assign({"./usecases/01-sales-pivot.tsx":Nl,"./usecases/02-orders-to-excel.tsx":Pl,"./usecases/03-month-end-pdf.tsx":Fl,"./usecases/04-budget-tree.tsx":Il,"./usecases/05-support-tickets.tsx":Ll,"./usecases/06-inventory-reorder.tsx":Rl,"./usecases/07-timesheet-invoice.tsx":zl,"./usecases/08-marketing-spend.tsx":Bl,"./usecases/09-sales-commissions.tsx":Vl,"./usecases/10-carrier-scorecard.tsx":Hl}),`use`),nf={"01-export-menu":`add-an-export-menu.html`,"02-grouped-export":`grouped-rows-as-outlines.html`,"03-columns":`hidden-and-excluded-columns.html`,"04-selected-rows":`which-rows-are-exported.html`,"05-formats-colors":`cell-colors.html`,"06-tree-data":`tree-data.html`,"07-pdf-report":`pdf-title-kpis-watermark.html`,"08-pivot-table":`pivot-basics.html`,"09-pivot-designer":`pivot-designer.html`,"10-saved-layouts":`presets-and-saved-views.html`,"11-custom-aggregation":`aggregations.html`,"12-pivot-in-tanstack":`pivot-basics.html`,"13-aggregations-to-excel":`subtotal-formulas.html`,"14-rows-option":`which-rows-are-exported.html`,"15-wide-pdf":`pdf-page-setup.html`,"16-pdf-labels":`pdf-page-setup.html`},rf=ef(Object.assign({"./examples/01-export-menu.tsx":Ul,"./examples/02-grouped-export.tsx":Yl,"./examples/03-columns.tsx":tu,"./examples/04-selected-rows.tsx":ou,"./examples/05-formats-colors.tsx":hu,"./examples/06-tree-data.tsx":wu,"./examples/07-pdf-report.tsx":ku,"./examples/08-pivot-table.tsx":Fu,"./examples/09-pivot-designer.tsx":Bu,"./examples/10-saved-layouts.tsx":qu,"./examples/11-custom-aggregation.tsx":ed,"./examples/12-pivot-in-tanstack.tsx":ad,"./examples/13-aggregations-to-excel.tsx":ud,"./examples/14-rows-option.tsx":_d,"./examples/15-wide-pdf.tsx":Cd,"./examples/16-pdf-labels.tsx":kd}),Object.assign({"./examples/01-export-menu.tsx":Rd,"./examples/02-grouped-export.tsx":zd,"./examples/03-columns.tsx":Bd,"./examples/04-selected-rows.tsx":Vd,"./examples/05-formats-colors.tsx":Hd,"./examples/06-tree-data.tsx":Ud,"./examples/07-pdf-report.tsx":Wd,"./examples/08-pivot-table.tsx":Gd,"./examples/09-pivot-designer.tsx":Kd,"./examples/10-saved-layouts.tsx":qd,"./examples/11-custom-aggregation.tsx":Jd,"./examples/12-pivot-in-tanstack.tsx":Yd,"./examples/13-aggregations-to-excel.tsx":Xd,"./examples/14-rows-option.tsx":Zd,"./examples/15-wide-pdf.tsx":Qd,"./examples/16-pdf-labels.tsx":$d}),`feature`),af=[...tf,...rf];function of(){let e=()=>window.location.hash.replace(/^#\/?/,``)||tf[0].route,[t,n]=C.useState(e);return C.useEffect(()=>{let t=()=>n(e());return window.addEventListener(`hashchange`,t),()=>window.removeEventListener(`hashchange`,t)},[]),t}function sf(){let e=of(),t=af.find(t=>t.route===e)??tf[0],[n,r]=C.useState(t.kind),[i,a]=C.useState(!1);C.useEffect(()=>{document.title=`${t.title} - Rowpine demos`,r(t.kind),a(!1)},[t]);let o=n===`use`?tf:rf;return(0,w.jsxs)(`div`,{className:`min-h-screen bg-background`,children:[(0,w.jsx)(`header`,{className:`border-b`,children:(0,w.jsxs)(`div`,{className:`mx-auto flex h-14 max-w-7xl items-center gap-3 px-4`,children:[(0,w.jsxs)(`a`,{href:`../`,className:`flex items-center gap-2 font-bold`,children:[(0,w.jsx)(`span`,{className:`grid size-7 place-items-center rounded-md bg-[#1f5b40]`,children:(0,w.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`size-4 text-white`,"aria-hidden":!0,children:(0,w.jsx)(`path`,{fill:`currentColor`,d:`M12 2 6.5 9h3L5 15h4.5L4 21h7v1h2v-1h7l-5.5-6H19l-4.5-6h3z`})})}),`Rowpine`]}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Demos`}),(0,w.jsxs)(`nav`,{className:`ml-auto flex gap-1 text-sm`,children:[(0,w.jsx)(`a`,{href:`../docs/`,className:`rounded-md px-3 py-1.5 hover:bg-muted`,children:`Docs`}),(0,w.jsx)(`a`,{href:`../pricing.html`,className:`rounded-md px-3 py-1.5 hover:bg-muted`,children:`Pricing`})]})]})}),(0,w.jsxs)(`div`,{className:`mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[16rem_1fr]`,children:[(0,w.jsxs)(`nav`,{className:`grid content-start gap-3 md:sticky md:top-6 md:self-start`,"aria-label":`Demos`,children:[(0,w.jsx)(`div`,{className:`grid grid-cols-2 gap-1 rounded-lg bg-muted p-1 text-sm`,role:`tablist`,children:[`use`,`feature`].map(e=>(0,w.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":n===e,onClick:()=>r(e),className:c(`rounded-md px-2 py-1.5 font-medium`,n===e?`bg-background shadow-sm`:`text-muted-foreground`),children:[e===`use`?`Use cases`:`Features`,` `,(0,w.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`(`,e===`use`?tf.length:rf.length,`)`]})]},e))}),(0,w.jsx)(`div`,{className:`grid gap-0.5 border-l`,children:o.map(e=>(0,w.jsx)(`a`,{href:`#/${e.route}`,className:c(`-ml-px border-l-2 px-3 py-1.5 text-sm`,e.route===t.route?`border-[#1f5b40] font-medium`:`border-transparent text-muted-foreground hover:text-foreground`),children:e.title},e.route))})]}),(0,w.jsxs)(`main`,{className:`grid min-w-0 content-start gap-4`,"data-example":t.slug,children:[(0,w.jsxs)(`header`,{className:`flex flex-wrap items-start gap-4`,children:[(0,w.jsxs)(`div`,{className:`grid min-w-0 flex-1 gap-1`,children:[(0,w.jsx)(`h1`,{className:`text-2xl font-semibold`,children:t.title}),(0,w.jsx)(`p`,{className:`max-w-3xl text-muted-foreground`,children:t.description})]}),(0,w.jsxs)(`div`,{className:`flex gap-2`,children:[t.docs&&(0,w.jsxs)(`a`,{href:`../docs/${t.docs}`,className:`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm hover:bg-muted`,children:[(0,w.jsx)(Ve,{className:`size-4`}),` Read the docs`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:()=>a(e=>!e),className:`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm hover:bg-muted`,"aria-expanded":i,children:[(0,w.jsx)(Ue,{className:`size-4`}),` Source code`]})]})]}),i&&(0,w.jsx)(`pre`,{className:`max-h-[480px] overflow-auto rounded-md border bg-muted/40 p-3 text-xs leading-relaxed`,children:t.source}),(0,w.jsx)(t.Component,{},t.route)]})]})]})}(0,et.createRoot)(document.getElementById(`root`)).render((0,w.jsx)(C.StrictMode,{children:(0,w.jsx)(sf,{})}));