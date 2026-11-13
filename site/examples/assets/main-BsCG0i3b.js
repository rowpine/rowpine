import{i as e,n as t}from"./rolldown-runtime-COiEfhsA.js";import{$ as n,A as r,B as i,C as a,D as o,E as s,F as c,G as l,H as u,I as d,J as f,K as p,M as m,N as h,O as ee,P as te,Q as g,R as _,S as ne,T as re,U as v,W as y,X as ie,Y as ae,Z as oe,_ as se,a as ce,b as le,c as ue,d as de,f as fe,g as b,h as pe,i as me,j as he,k as ge,l as _e,m as ve,n as x,o as ye,p as be,q as xe,r as Se,s as Ce,t as we,u as Te,v as Ee,w as S,x as De,y as Oe,z as ke}from"./data-DQsHNIUC.js";import{t as Ae}from"./jszip.min-CpWa2PVO.js";var je={name:`arrow-down`,size:24,node:[[`path`,{d:`M12 5v14`,key:`s699le`}],[`path`,{d:`m19 12-7 7-7-7`,key:`1idqje`}]]};je.node;var Me=_(je),Ne={name:`arrow-up`,size:24,node:[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]};Ne.node;var Pe=_(Ne),Fe={name:`book-open`,size:24,node:[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]};Fe.node;var Ie=_(Fe),Le={name:`code-xml`,size:24,node:[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]],aliases:[`code-2`]};Le.node;var Re=_(Le),ze={name:`pause`,size:24,node:[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]};ze.node;var Be=_(ze),Ve={name:`play`,size:24,node:[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]};Ve.node;var He=_(Ve),Ue={name:`save`,size:24,node:[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]};Ue.node;var We=_(Ue),Ge={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]};Ge.node;var Ke=_(Ge),qe={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};qe.node;var Je=_(qe),Ye=oe(),C=e(n(),1),Xe=e(Ae(),1),w=s(),T=(e,t)=>RegExp(`\\b${t}="([^"]*)"`).exec(e)?.[1],Ze=e=>e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&amp;/g,`&`),Qe=e=>[...e].reduce((e,t)=>e*26+t.charCodeAt(0)-64,0)-1,$e=e=>{let t=``;for(let n=e;n>=0;n=Math.floor(n/26)-1)t=String.fromCharCode(65+n%26)+t;return t},et=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function tt(e,t){if(!t)return String(Number.isInteger(e)?e:Math.round(e*1e6)/1e6);if(/y/.test(t)&&/d/.test(t)){let n=new Date(Math.round(e*864e5)+Date.UTC(1899,11,30)),r=n.getUTCFullYear(),i=n.getUTCMonth(),a=n.getUTCDate();return t===`yyyy-mm-dd`?`${r}-${String(i+1).padStart(2,`0`)}-${String(a).padStart(2,`0`)}`:`${a} ${et[i]} ${r}`}let n=t.includes(`%`),r=n?e*100:e,i=(/0\.(0+)/.exec(t)?.[1]??``).length,a=Math.abs(r).toLocaleString(`en-US`,{minimumFractionDigits:i,maximumFractionDigits:i,useGrouping:t.includes(`,`)});return a=(/^"([^"]*)"/.exec(t)?.[1]??``)+a+(n?`%`:``),r<0?`-`+a:a}async function nt(e){let t=await Xe.default.loadAsync(await e.arrayBuffer()),n=await t.file(`xl/worksheets/sheet1.xml`).async(`string`),r=await t.file(`xl/styles.xml`).async(`string`),i=new Map([...r.matchAll(/<numFmt [^>]*\/>/g)].map(([e])=>[T(e,`numFmtId`),Ze(T(e,`formatCode`)??``)])),a=[...(/<fonts[^>]*>([\s\S]*?)<\/fonts>/.exec(r)?.[1]??``).matchAll(/<font>([\s\S]*?)<\/font>/g)].map(([,e])=>({bold:e.includes(`<b/>`),color:/<color rgb="FF([0-9A-F]{6})"/.exec(e)?.[1]})),o=[...(/<fills[^>]*>([\s\S]*?)<\/fills>/.exec(r)?.[1]??``).matchAll(/<fill>([\s\S]*?)<\/fill>/g)].map(([,e])=>/<fgColor rgb="FF([0-9A-F]{6})"/.exec(e)?.[1]),s=[...(/<cellXfs[^>]*>([\s\S]*?)<\/cellXfs>/.exec(r)?.[1]??``).matchAll(/<xf [^>]*?(?:\/>|>[\s\S]*?<\/xf>)/g)].map(([e])=>({numFmt:i.get(T(e,`numFmtId`)),font:a[Number(T(e,`fontId`)??0)],fill:o[Number(T(e,`fillId`)??0)]})),c=/<pane [^>]*\/>/.exec(n)?.[0],l=[];for(let[,e,t]of n.matchAll(/<row ([^>]*)>([\s\S]*?)<\/row>/g)){let n=[];for(let[e]of t.matchAll(/<c [^>]*?(?:\/>|>[\s\S]*?<\/c>)/g)){let t=T(e,`r`),r=s[Number(T(e,`s`)??0)],i=T(e,`t`),a=/<v>([\s\S]*?)<\/v>/.exec(e)?.[1],o=``,c=!1;i===`inlineStr`?o=Ze(/<t[^>]*>([\s\S]*?)<\/t>/.exec(e)?.[1]??``):i===`b`?o=a===`1`?`TRUE`:`FALSE`:a!==void 0&&(c=!0,o=tt(Number(a),r?.numFmt));let l=/<f>([\s\S]*?)<\/f>/.exec(e)?.[1];n.push({col:Qe(/^[A-Z]+/.exec(t)[0]),ref:t,text:o,numeric:c,formula:l&&Ze(l),bold:r?.font?.bold,color:r?.font?.color,fill:r?.fill})}l.push({r:Number(T(e,`r`)),level:Number(T(e,`outlineLevel`)??0),cells:n})}return{rows:l,widths:[...n.matchAll(/<col [^>]*\/>/g)].map(([e])=>Number(T(e,`width`))),xSplit:Number((c&&T(c,`xSplit`))??0),ySplit:Number((c&&T(c,`ySplit`))??0),maxLevel:Number(T(n,`outlineLevelRow`)??0)}}function rt({sheet:e,select:t}){let[n,r]=C.useState(()=>e.rows.flatMap(e=>e.cells).find(e=>t?e.ref===t:!!e.formula)),i=Math.max(e.widths.length,...e.rows.map(e=>Math.max(0,...e.cells.map(e=>e.col+1)))),a=e=>Math.round((e||9)*7+10);return(0,w.jsxs)(`div`,{className:`overflow-auto bg-white text-[13px] text-black`,style:{fontFamily:`Calibri, "Segoe UI", Arial, sans-serif`},children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-3 border-b border-[#d4d4d4] px-2 py-1 font-mono text-xs`,children:[(0,w.jsx)(`span`,{className:`min-w-12 border-r border-[#d4d4d4] pr-2`,children:n?.ref??``}),(0,w.jsx)(`i`,{className:`text-[#666]`,children:`fx`}),(0,w.jsx)(`span`,{className:`truncate`,children:n?n.formula?`=${n.formula}`:n.text:``})]}),(0,w.jsxs)(`table`,{className:`border-collapse`,style:{tableLayout:`fixed`},children:[(0,w.jsx)(`thead`,{children:(0,w.jsxs)(`tr`,{children:[e.maxLevel>0&&(0,w.jsx)(`th`,{className:`w-10 border border-[#e1e1e1] bg-[#f3f3f3]`}),(0,w.jsx)(`th`,{className:`w-9 border border-[#e1e1e1] bg-[#f3f3f3]`}),Array.from({length:i},(t,n)=>(0,w.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#f3f3f3] text-xs font-normal text-[#555]`,style:{width:a(e.widths[n]),borderRightColor:n===e.xSplit-1?`#6b6b6b`:void 0,borderRightWidth:n===e.xSplit-1?2:void 0},children:$e(n)},n))]})}),(0,w.jsx)(`tbody`,{children:e.rows.map((t,a)=>{let o=e.rows[a+1],s=o&&o.level>t.level,c=new Map(t.cells.map(e=>[e.col,e])),l=t.r===e.ySplit;return(0,w.jsxs)(`tr`,{children:[e.maxLevel>0&&(0,w.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#fafafa] px-0.5`,children:(0,w.jsxs)(`div`,{className:`flex h-5 items-center`,children:[Array.from({length:e.maxLevel},(e,n)=>(0,w.jsx)(`i`,{className:n<t.level?`ml-1.5 h-5 w-2 shrink-0 border-l-2 border-[#888]`:`h-5 w-3.5 shrink-0`},n)),s&&(0,w.jsx)(`b`,{className:`ml-0.5 grid size-3 shrink-0 place-items-center border border-[#888] bg-white text-[10px] leading-none`,children:`-`})]})}),(0,w.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#f3f3f3] px-1 text-right text-xs font-normal text-[#555]`,style:l?{borderBottom:`2px solid #6b6b6b`}:void 0,children:t.r}),Array.from({length:i},(t,i)=>{let a=c.get(i);return(0,w.jsx)(`td`,{onClick:()=>a&&r(a),className:`h-5 cursor-cell overflow-hidden border border-[#e1e1e1] px-1.5 whitespace-nowrap`,style:{background:a?.fill?`#${a.fill}`:void 0,fontWeight:a?.bold?700:void 0,color:a?.color?`#${a.color}`:void 0,textAlign:a?.numeric?`right`:`left`,outline:a&&n?.ref===a.ref?`2px solid #1f6e43`:void 0,outlineOffset:-2,borderRight:i===e.xSplit-1?`2px solid #6b6b6b`:void 0,borderBottom:l?`2px solid #6b6b6b`:void 0},children:a?.text},i)})]},t.r)})})]})]})}function it({blob:e}){let t=C.useRef(null),[n,r]=C.useState(`loading`);return C.useEffect(()=>{let n=!1;return(async()=>{try{let i=await ie(()=>import(`./pdf-YwugTw7Y.js`),[],import.meta.url),a=await ie(()=>import(`./pdf.worker.min-BPK52Uye.js`),[],import.meta.url);i.GlobalWorkerOptions.workerSrc=a.default;let o=await i.getDocument({data:new Uint8Array(await e.arrayBuffer())}).promise,s=t.current;if(!s||n)return;s.replaceChildren();let c=s.clientWidth-32;for(let e=1;e<=Math.min(o.numPages,3);e++){let t=await o.getPage(e),r=c/t.getViewport({scale:1}).width,i=t.getViewport({scale:r*(window.devicePixelRatio||1)}),a=document.createElement(`canvas`);if(a.width=i.width,a.height=i.height,a.style.width=`${c}px`,a.className=`mx-auto mb-4 block bg-white shadow-md`,s.appendChild(a),await t.render({canvas:a,viewport:i}).promise,n)return}if(o.numPages>3){let e=document.createElement(`p`);e.className=`pb-4 text-center text-xs text-[#555]`,e.textContent=`${o.numPages-3} more pages in the file`,s.appendChild(e)}r(`ready`)}catch{n||r(`failed`)}})(),()=>{n=!0}},[e]),(0,w.jsxs)(`div`,{className:`max-h-[460px] overflow-auto bg-[#e5e7eb] pt-4`,children:[n===`loading`&&(0,w.jsx)(`p`,{className:`p-6 text-center text-sm text-[#555]`,children:`Drawing the pages...`}),n===`failed`&&(0,w.jsx)(`p`,{className:`p-6 text-center text-sm text-[#555]`,children:`This browser cannot draw the PDF here. Use Download it.`}),(0,w.jsx)(`div`,{ref:t,className:`px-4`})]})}function at({file:e,onClose:t}){let[n,r]=C.useState(null);return C.useEffect(()=>{e.kind===`xlsx`&&nt(e.blob).then(r)},[e]),(0,w.jsxs)(`div`,{className:`overflow-hidden rounded-lg border shadow-2xl`,"data-preview":e.kind,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2 text-sm text-white ${e.kind===`xlsx`?`bg-[#1f6e43]`:`bg-[#9f1d1d]`}`,children:[(0,w.jsx)(`span`,{className:`font-semibold`,children:e.name}),e.note&&(0,w.jsx)(`span`,{className:`hidden text-white/80 sm:inline`,children:e.note}),(0,w.jsxs)(`button`,{type:`button`,onClick:()=>xe(e.blob,e.name),className:`ml-auto inline-flex items-center gap-1 rounded px-2 py-1 hover:bg-white/15`,children:[(0,w.jsx)(h,{className:`size-4`}),` Download it`]}),(0,w.jsx)(`button`,{type:`button`,onClick:t,className:`rounded p-1 hover:bg-white/15`,"aria-label":`Close the file`,children:(0,w.jsx)(Je,{className:`size-4`})})]}),e.kind===`xlsx`?n?(0,w.jsx)(`div`,{className:`max-h-[420px] overflow-auto`,children:(0,w.jsx)(rt,{sheet:n,select:e.select})}):(0,w.jsx)(`div`,{className:`p-6 text-sm`,children:`Opening the file...`}):(0,w.jsx)(it,{blob:e.blob})]})}function E(e,t,n){return e?[...e.querySelectorAll(t)].find(e=>e.textContent?.trim().includes(n))??null:null}var D=()=>new Promise(e=>setTimeout(e,60));function ot({rootRef:e,preview:t,onClosePreview:n,children:r}){return(0,w.jsxs)(`div`,{ref:e,className:`relative`,children:[r,t&&(0,w.jsx)(`div`,{className:`absolute inset-x-2 top-10 z-20 sm:inset-x-6`,children:(0,w.jsx)(at,{file:t,onClose:n})})]})}var st=e(g(),1),ct=e=>typeof e==`string`?document.querySelector(e):e()??null;function O(e,t){return new Promise(n=>{if(e<=0||t.cancelled)return n();let r=window.setTimeout(n,e),i=window.setInterval(()=>{t.cancelled&&(window.clearTimeout(r),window.clearInterval(i),n())},50);window.setTimeout(()=>window.clearInterval(i),e+60)})}function lt({steps:e,reset:t,readTime:n=2600}){let[i,a]=C.useState(0),[o,s]=C.useState(!0),[c,l]=C.useState(!1),[u,d]=C.useState(null),f=C.useRef({cancelled:!1}),p=C.useRef(o);p.current=o;let m=C.useCallback((e,t)=>{let n=async n=>{if(t||e.cancelled)return;let r=ct(n);if(!r)return;let i=r.getBoundingClientRect();d({x:i.left+window.scrollX+Math.min(i.width/2,40),y:i.top+window.scrollY+i.height/2,clicking:!1}),await O(750,e)};return{point:n,click:async r=>{await n(r),t||e.cancelled||(d(e=>e&&{...e,clicking:!0}),await O(280,e),d(e=>e&&{...e,clicking:!1}))},wait:n=>t?Promise.resolve():O(n,e)}},[]),h=C.useCallback(async(r,i)=>{f.current.cancelled=!0;let o={cancelled:!1};f.current=o,l(!1),t(),await O(30,o);let c=m(o,!0);for(let t=0;t<r;t++)await e[t].run(c),await O(20,o);let u=m(o,!1);for(let t=r;t<e.length;t++){if(o.cancelled||(a(t),!i&&t>r))return;for(;!p.current&&!o.cancelled;)await O(100,o);for(await e[t].run(u),await O(n,o);!p.current&&!o.cancelled;)await O(100,o)}o.cancelled||(l(!0),s(!1),d(null))},[m,n,t,e]);C.useEffect(()=>(h(0,!0),()=>{f.current.cancelled=!0}),[]);let ee=e=>{s(!0),h(e,!0)};return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex gap-1`,role:`tablist`,"aria-label":`Demo steps`,children:e.map((e,t)=>(0,w.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":t===i,"aria-label":`Step ${t+1}: ${e.caption}`,onClick:()=>ee(t),className:`h-6 flex-1 cursor-pointer py-2.5`,children:(0,w.jsx)(`span`,{className:r(`block h-1 rounded-full transition-colors`,t<i||c?`bg-[#1f5b40]`:t===i?`bg-[#3fae73]`:`bg-muted`)})},t))}),(0,w.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,w.jsx)(`button`,{type:`button`,onClick:()=>c?ee(0):s(e=>!e),className:`grid size-9 shrink-0 place-items-center rounded-md bg-[#17452f] text-white hover:bg-[#1f5b40]`,"aria-label":c?`Play again`:o?`Pause`:`Play`,children:c?(0,w.jsx)(he,{className:`size-4`}):o?(0,w.jsx)(Be,{className:`size-4`}):(0,w.jsx)(He,{className:`size-4`})}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>ee(0),className:`grid size-9 shrink-0 place-items-center rounded-md border hover:bg-muted`,"aria-label":`Restart`,children:(0,w.jsx)(he,{className:`size-4`})}),(0,w.jsxs)(`div`,{className:`min-w-0 text-sm`,"aria-live":`polite`,children:[(0,w.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`Step `,i+1,` of `,e.length]}),(0,w.jsx)(`div`,{className:`font-medium`,children:e[i]?.caption})]})]}),u&&(0,st.createPortal)((0,w.jsxs)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute z-[60] transition-[left,top] duration-700 ease-in-out`,style:{left:u.x,top:u.y},children:[u.clicking&&(0,w.jsx)(`span`,{className:`absolute -top-4 -left-4 size-8 animate-ping rounded-full bg-[#3fae73]/60`}),(0,w.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,className:`drop-shadow-md`,children:(0,w.jsx)(`path`,{d:`M4 2l15 9-6.5 1.5L16 20l-3 1.5-3.5-7.5L4 19z`,fill:`#17452f`,stroke:`#fff`,strokeWidth:`1.5`})})]}),document.body)]})}var ut=t({default:()=>mt,meta:()=>dt}),dt={title:`Sales pivot`,description:`A sales manager builds a pivot of the quarter's orders: regions and countries down the side, quarters across, overdue orders only, and takes it to Excel.`,docs:`pivot-designer.html`},ft=x(),k=[{field:`region`,label:`Region`,kind:`dimension`,group:`Where`},{field:`country`,label:`Country`,kind:`dimension`,group:`Where`},{field:`customer`,label:`Customer`,kind:`dimension`,group:`Who`},{field:`product`,label:`Product`,kind:`dimension`,group:`What`},{field:`status`,label:`Status`,kind:`dimension`,group:`What`},{field:`quarter`,label:`Quarter`,kind:`dimension`,group:`When`},{field:`amount`,label:`Amount`,kind:`measure`,group:`Numbers`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`quantity`,label:`Units`,kind:`measure`,group:`Numbers`}],pt={numFmt:`"$"#,##0`};function mt(){let[e,t]=C.useState(()=>p(k)),[n,r]=C.useState(null),i=C.useRef(null),a=C.useRef(null),o=C.useCallback(e=>{a.current=e},[]),s=e=>()=>E(i.current,`aside[aria-label="Pivot fields"] [draggable="true"]`,e),c=e=>()=>i.current?.querySelector(`[data-well="${e}"]`),d=C.useMemo(()=>[{caption:`120 orders as a pivot: regions down the side, the total of each region's orders in the cells.`,run:e=>e.point(()=>i.current?.querySelector(`table`))},{caption:`Drag Quarter into Columns. Each region spreads across the quarters, with a total on the right.`,run:async e=>{await e.click(s(`Quarter`)),await e.point(c(`cols`)),t(e=>f(e,k,`quarter`,`cols`))}},{caption:`Add Country to Rows. Every region opens into its countries and keeps its subtotal.`,run:async e=>{await e.click(s(`Country`)),await e.point(c(`rows`)),t(e=>e.rows.includes(`country`)?e:f(e,k,`country`,`rows`))}},{caption:`Switch Sum to Average from the value's menu. Every cell is worked out again from the orders behind it.`,run:async e=>{await e.click(()=>i.current?.querySelector(`[data-well="values"] button[aria-label="Options for Amount"]`)),t(e=>u(e,k,0,`avg`))}},{caption:`Put Status in Filters and keep only Overdue. The pivot now shows the money that is late.`,run:async e=>{await e.click(s(`Status`)),await e.point(c(`filters`)),t(e=>{let t=f(e,k,`status`,`filters`);return{...t,filters:t.filters.map(e=>e.field===`status`?{...e,allowed:[`Overdue`]}:e)}})}},{caption:`Export to Excel. Regions become outline rows you can collapse, and every cell is a number you can sum.`,run:async e=>{if(await e.click(()=>E(i.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D(),!a.current)return;let t=await l(a.current.table,{download:!1,rowStyle:v});r({blob:t,name:`overdue-by-region.xlsx`,kind:`xlsx`,select:`B3`,note:`the exported file`})}}],[]),m=C.useCallback(()=>{t(p(k)),r(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(lt,{steps:d,reset:m}),(0,w.jsx)(ot,{rootRef:i,preview:n,onClosePreview:()=>r(null),children:(0,w.jsx)(ce,{data:ft,fields:k,layout:e,onLayoutChange:t,pivotOptions:pt,onPivotChange:o,actions:e=>(0,w.jsx)(b,{table:e.table,fileName:`sales-pivot`,rowStyle:v})})})]})}function ht(e){return gt(e)||typeof e==`function`||_t(e)}function gt(e){return typeof e==`function`&&(()=>{let t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()}function _t(e){return typeof e==`object`&&typeof e.$$typeof==`symbol`&&[`react.memo`,`react.forward_ref`].includes(e.$$typeof.description)}function vt(e,t){return e==null?null:ht(e)?C.createElement(e,t):e}function yt(e){if(`cell`in e&&e.cell){let t=e.cell,n=t.column.columnDef,r=t,i=n;return r.getIsAggregated?.()?vt(i.aggregatedCell??n.cell,t.getContext()):r.getIsPlaceholder?.()?null:vt(n.cell,t.getContext())}return`header`in e&&e.header?vt(e.header.column.columnDef.header,e.header.getContext()):`footer`in e&&e.footer?vt(e.footer.column.columnDef.footer,e.footer.getContext()):null}function bt({update:e,notify:t,unwatched:n}){return{link:r,unlink:i,propagate:a,checkDirty:o,shallowPropagate:s};function r(e,t,n){let r=t.depsTail;if(r!==void 0&&r.dep===e)return;let i=r===void 0?t.deps:r.nextDep;if(i!==void 0&&i.dep===e){i.version=n,t.depsTail=i;return}let a=e.subsTail;if(a!==void 0&&a.version===n&&a.sub===t)return;let o=t.depsTail=e.subsTail={version:n,dep:e,sub:t,prevDep:r,nextDep:i,prevSub:a,nextSub:void 0};i!==void 0&&(i.prevDep=o),r===void 0?t.deps=o:r.nextDep=o,a===void 0?e.subs=o:a.nextSub=o}function i(e,t=e.sub){let r=e.dep,i=e.prevDep,a=e.nextDep,o=e.nextSub,s=e.prevSub;return a===void 0?t.depsTail=i:a.prevDep=i,i===void 0?t.deps=a:i.nextDep=a,o===void 0?r.subsTail=s:o.prevSub=s,s===void 0?(r.subs=o)===void 0&&n(r):s.nextSub=o,a}function a(e){let n=e.nextSub,r;top:do{let i=e.sub,a=i.flags;if(a&60?a&12?a&4?!(a&48)&&c(e,i)?(i.flags=a|40,a&=1):a=0:i.flags=a&-9|32:a=0:i.flags=a|32,a&2&&t(i),a&1){let t=i.subs;if(t!==void 0){let i=(e=t).nextSub;i!==void 0&&(r={value:n,prev:r},n=i);continue}}if((e=n)!==void 0)n=e.nextSub;else{for(;r!==void 0;)if(e=r.value,r=r.prev,e!==void 0){n=e.nextSub;continue top}break}}while(1)}function o(t,n){let r,i=0,a=!1;top:do{let o=t.dep,c=o.flags;if(n.flags&16)a=!0;else if((c&17)==17){if(e(o)){let e=o.subs;e.nextSub!==void 0&&s(e),a=!0}}else if((c&33)==33){(t.nextSub!==void 0||t.prevSub!==void 0)&&(r={value:t,prev:r}),t=o.deps,n=o,++i;continue}if(!a){let e=t.nextDep;if(e!==void 0){t=e;continue}}for(;i--;){let i=n.subs,o=i.nextSub!==void 0;if(o?(t=r.value,r=r.prev):t=i,a){if(e(n)){o&&s(i),n=t.sub;continue}a=!1}else n.flags&=-33;n=t.sub;let c=t.nextDep;if(c!==void 0){t=c;continue top}}return a}while(1)}function s(e){do{let n=e.sub,r=n.flags;(r&48)==32&&(n.flags=r|16,(r&6)==2&&t(n))}while((e=e.nextSub)!==void 0)}function c(e,t){let n=t.depsTail;for(;n!==void 0;){if(n===e)return!0;n=n.prevDep}return!1}}function xt(e,t,n){let r=typeof e==`object`,i=r?e:void 0;return{next:(r?e.next:e)?.bind(i),error:(r?e.error:t)?.bind(i),complete:(r?e.complete:n)?.bind(i)}}var St=[],Ct=0,{link:wt,unlink:Tt,propagate:Et,checkDirty:Dt,shallowPropagate:Ot}=bt({update(e){return e._update()},notify(e){St[At++]=e,e.flags&=-3},unwatched(e){e.depsTail!==void 0&&(e.depsTail=void 0,e.flags=17,Nt(e))}}),kt=0,At=0,A,jt=0;function Mt(e){try{++jt,e()}finally{--jt||Pt()}}function Nt(e){let t=e.depsTail,n=t===void 0?e.deps:t.nextDep;for(;n!==void 0;)n=Tt(n,e)}function Pt(){if(!(jt>0)){for(;kt<At;){let e=St[kt];St[kt++]=void 0,e.notify()}kt=0,At=0}}function Ft(e,t){let n=typeof e==`function`,r=e,i={_snapshot:n?void 0:e,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:+!n,get(){return A!==void 0&&wt(i,A,Ct),i._snapshot},subscribe(e){let t=xt(e),n={current:!1},r=It(()=>{i.get(),n.current?(A=void 0,t.next?.(i._snapshot)):n.current=!0});return{unsubscribe:()=>{r.stop()}}},_update(e){let a=A,o=t?.compare??Object.is;if(n)A=i,++Ct,i.depsTail=void 0;else if(e===void 0)return!1;n&&(i.flags=5);try{let t=i._snapshot,a=typeof e==`function`?e(t):e===void 0&&n?r(t):e;return t===void 0||!o(t,a)?(i._snapshot=a,!0):!1}finally{A=a,n&&(i.flags&=-5),Nt(i)}}};return n?(i.flags=17,i.get=function(){let e=i.flags;if(e&16||e&32&&Dt(i.deps,i)){if(i._update()){let e=i.subs;e!==void 0&&Ot(e)}}else e&32&&(i.flags=e&-33);return A!==void 0&&wt(i,A,Ct),i._snapshot}):i.set=function(e){if(i._update(e)){let e=i.subs;e!==void 0&&(Et(e),Ot(e),Pt())}},i}function It(e){let t=()=>{let t=A;A=n,++Ct,n.depsTail=void 0,n.flags=6;try{return e()}finally{A=t,n.flags&=-5,Nt(n)}},n={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:6,notify(){let e=this.flags;e&16||e&32&&Dt(this.deps,this)?t():this.flags=2},stop(){this.flags=0,this.depsTail=void 0,Nt(this)}};return t(),n}function Lt(e,t){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,r]of e)if(!t.has(n)||!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();let n=Rt(e);if(n.length!==Rt(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function Rt(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}var zt=a();function Bt(e,t){return e===t}function Vt(e,t=e=>e,n){let r=n?.compare??Bt,i=(0,C.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,C.useCallback)(()=>e.get(),[e]);return(0,zt.useSyncExternalStoreWithSelector)(i,a,a,t,r)}function Ht(e){let t=Vt(e.source,e.selector,{compare:Lt});return typeof e.children==`function`?e.children(t):e.children}function Ut(e){let t=e;return Object.defineProperty(e,"state",{get(){return e.get()}}),`set`in e&&(t.setState=e.set.bind(e)),t}function Wt(e){let{createAtom:t,batch:n}=e,r=t(0);return{createOptionsStore:!1,wrapExternalAtoms:!1,addSubscription:()=>{throw Error(`Feature not supported in current reactivity implementation`)},unmount:()=>{throw Error(`Feature not supported in current reactivity implementation`)},schedule:e.schedule??(e=>queueMicrotask(e)),batch:n,untrack:e=>e(),createReadonlyAtom:(e,n)=>{let i=n?.compare??Object.is,a=!1,o,s=()=>{let t=e();return a&&i(o,t)||(o=t,a=!0),o},c=t(()=>(r.get(),s()),{compare:i});return{get:s,subscribe:c.subscribe.bind(c)}},createWritableAtom:(e,n)=>t(e,{compare:n?.compare}),commit:()=>{r.set(e=>e+1)}}}function Gt(e,t=Object.is){let n=!1,r;return{get:e.get,markCommitted:e=>{r=e,n=!0},subscribe:i=>e.subscribe(e=>{n&&t(r,e)||i(e)})}}function Kt(){return Wt({createAtom:Ft,batch:Mt})}function qt(e,t){return typeof e==`function`?e(t):e}function j(e){if(Array.isArray(e))return e.map(j);if(e&&typeof e==`object`){let t=Object.getPrototypeOf(e);if(t!==Object.prototype&&t!==null)return e;let n=t===null?M():{},r=Object.keys(e);for(let t=0;t<r.length;t++){let i=r[t];Object.defineProperty(n,i,{configurable:!0,enumerable:!0,value:j(e[i]),writable:!0})}return n}return e}function Jt(e,t){let n=Object.keys(t),r=e;for(let e=0;e<n.length;e++){let i=n[e];!i.startsWith(`_memo_`)&&i!==`_cellsCache`&&(r[i]=t[i])}return e}function M(){return Object.create(null)}function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function P(e,t){return n=>{(t.options.atoms?.[e]??t.baseAtoms[e]).set(e=>qt(n,e))}}function Yt(e){if(typeof e!=`object`||!e)return!1;if(Array.isArray(e))return!0;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Xt(e){return Reflect.ownKeys(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}var Zt=3;function Qt(e,t){return $t(e,t,Zt)}function $t(e,t,n){if(Object.is(e,t))return!0;if(n<=0||!Yt(e)||!Yt(t)||(Array.isArray(e)||Array.isArray(t))&&(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length))return!1;let r=Xt(e),i=Xt(t);if(r.length!==i.length)return!1;let a=e,o=t;for(let e=0;e<r.length;e++){let i=r[e];if(!Object.prototype.propertyIsEnumerable.call(t,i)||!$t(a[i],o[i],n-1))return!1}return!0}function F(e,t,n,r=Qt){let i=`on${t.charAt(0).toUpperCase()}${t.slice(1)}Change`,a=e.options[i];a&&a(e=>{let t=qt(n,e);return r(e,t)?e:t})}function en(e){return e instanceof Function}function tn(e,t){let n=[],r=e=>{e.forEach(e=>{n.push(e);let i=t(e);i.length&&r(i)})};return r(e),n}var nn=({fn:e,memoDeps:t,onAfterCompare:n,onAfterUpdate:r,onBeforeCompare:i,onBeforeUpdate:a})=>{let o=[],s;return c=>{i?.();let l=t?.(c),u=!l||l.length!==o?.length;if(!u&&l){for(let e=0;e<l.length;e++)if(l[e]!==o[e]){u=!0;break}}return n?.(u),u&&(o=l,a?.(),s=e(...l??[]),r?.(s)),s}};function rn(e){let t=!1;return()=>{t?e():t=!0}}function I({feature:e,fnName:t,objectId:n,onAfterUpdate:r,table:i,...a}){let o={onAfterUpdate:r?()=>{let{schedule:e,untrack:t}=i._reactivity;e(()=>t(()=>r()))}:void 0};return nn({...a,...o})}function an(e,t=`_`){let[n,r]=e.replace(t,` `).split(` `);return{fnKey:r,fnName:`${n}.${r}`,parentName:n}}function L(e,t,n){for(let[r,{fn:i,memoDeps:a}]of Object.entries(n)){let{fnKey:n,fnName:o}=an(r);t[n]=a?I({memoDeps:a,fn:i,fnName:o,table:t,feature:e}):i}}function R(e,t,n,r){for(let[i,{fn:a,memoDeps:o}]of Object.entries(r)){let{fnKey:r,fnName:s}=an(i);if(o){let i=`_memo_${r}`;t[r]=function(...t){if(!this[i]){let t=this;this[i]=I({memoDeps:e=>o(t,e),fn:(...e)=>a(t,...e),fnName:s,objectId:t.id,table:n,feature:e})}return this[i](...t)}}else t[r]=function(...e){return a(this,...e)}}}function z(e,t,n,...r){return e[t]?.(...r)??n(e,...r)}function on(e){return e.row.getValue(e.column.id)}function sn(e){return e.getValue()??e.table.options.renderFallbackValue}function cn(e){return{table:e.table,column:e.column,row:e.row,cell:e,getValue:()=>e.getValue(),renderValue:()=>e.renderValue()}}var ln={assignCellPrototype:(e,t)=>{R(`coreCellsFeature`,e,t,{cell_getValue:{fn:e=>on(e)},cell_renderValue:{fn:e=>sn(e)},cell_getContext:{fn:e=>cn(e),memoDeps:e=>[e]}})}};function un(e){if(!e._columnPrototype){e._columnPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignColumnPrototype?.(e._columnPrototype,e)}return e._columnPrototype}function dn(e,t,n,r){let i={...e.getDefaultColumnDef(),...t},a=i.accessorKey,o=a===void 0?void 0:String(a),s=i.id??o?.replaceAll(`.`,`_`)??(typeof i.header==`string`?i.header:void 0),c;if(i.accessorFn)c=i.accessorFn;else if(a!==void 0){if(typeof a==`string`&&a.includes(`.`)){let e=a.split(`.`);c=t=>{let n=t;for(let t=0;t<e.length;t++){let r=e[t];n=n?.[r]}return n}}else c=e=>e[i.accessorKey]}if(!s)throw Error();let l=un(e),u=Object.create(l);u.accessorFn=c,u.columnDef=i,u.columns=[],u.depth=n,u.id=`${String(s)}`,u.parent=r;let d=e._columnInstanceInitFns;for(let e=0;e<d.length;e++)d[e](u);return u}function B(e){return e.getIsVisible?.()??!0}function V(e){return e.getVisibleLeafColumns?.()??e.getAllLeafColumns()}function fn(e){return e.getVisibleCells?.()??e.getAllCells()}function pn(e){return e.getVisibleCellsByColumnId?.()??e.getAllCellsByColumnId()}function mn(e,t){let n=e,r=t;return n.getOrderColumnsFn?.()(r)??n._orderGroupedColumns?.(r)??t}function hn(e,t,n,r){return e._orderByColumnPinning?.(t,n,r)??t}function H(e,t){return e.getPinnedVisibleLeafColumns?.(t)??(t&&t!==`center`?[]:V(e))}function gn(e){return e.getGlobalFilterFn?.()}function _n(e){return e.getCanGlobalFilter?.()??!1}function vn(e,t){return e._expandRows?.(t)??t}function yn(e){e.autoResetExpanded?.()}function bn(e){e.autoResetPageIndex?.()}function xn(e){e.autoResetSorting?.()}function Sn(e){e.autoResetCellSelection?.()}function Cn(e){return e._aggregateColumnValue}function wn(e){return[e,...e.columns.flatMap(e=>e.getFlatColumns())]}function Tn(e){if(e.columns.length){let t=e.columns.flatMap(e=>e.getLeafColumns());return mn(e.table,t)}return[e]}function En(e){return{header:e=>{let t=e.header.column.columnDef;return t.accessorKey?t.accessorKey:t.accessorFn?t.id:null},cell:e=>e.renderValue()?.toString?.()??null,...Object.values(e._features).reduce((e,t)=>Object.assign(e,t.getDefaultColumnDef?.()),{}),...e.options.defaultColumn}}function Dn(e,t,n,r=0){let i=Array(t.length);for(let a=0;a<t.length;a++){if(!(a in t))continue;let o=t[a],s=dn(e,o,r,n),c=o;s.columns=c.columns?Dn(e,c.columns,s,r+1):[],i[a]=s}return i}function On(e){return Dn(e,e.options.columns)}function kn(e){return e.getAllColumns().flatMap(e=>e.getFlatColumns())}function An(e){let t=M(),n=e.getAllFlatColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function jn(e){return mn(e,e.getAllColumns().flatMap(e=>e.getLeafColumns()))}function Mn(e){let t=M(),n=e.getAllLeafColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function Nn(e,t){return e.getAllFlatColumnsById()[t]}var Pn={assignColumnPrototype:(e,t)=>{R(`coreColumnsFeature`,e,t,{column_getFlatColumns:{fn:e=>wn(e),memoDeps:e=>[e.table.options.columns]},column_getLeafColumns:{fn:e=>Tn(e),memoDeps:e=>[e.table.atoms.columnOrder?.get(),e.table.atoms.grouping?.get(),e.table.options.columns,e.table.options.groupedColumnMode]}})},constructTableAPIs:e=>{L(`coreColumnsFeature`,e,{table_getDefaultColumnDef:{fn:()=>En(e),memoDeps:()=>[e.options.defaultColumn]},table_getAllColumns:{fn:()=>On(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumns:{fn:()=>kn(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumnsById:{fn:()=>An(e),memoDeps:()=>[e.options.columns]},table_getAllLeafColumns:{fn:()=>jn(e),memoDeps:()=>[e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getAllLeafColumnsById:{fn:()=>Mn(e),memoDeps:()=>[e.getAllLeafColumns()]},table_getColumn:{fn:t=>Nn(e,t)}})}};function Fn(e){if(!e._headerPrototype){e._headerPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignHeaderPrototype?.(e._headerPrototype,e)}return e._headerPrototype}function In(e,t,n){let r=Fn(e),i=Object.create(r);i.colSpan=0,i.column=t,i.depth=n.depth,i.headerGroup=null,i.id=n.id??t.id,i.index=n.index,i.isPlaceholder=!!n.isPlaceholder,i.placeholderId=n.placeholderId,i.rowSpan=0,i.subHeaders=[];let a=e._headerInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function Ln(e,t=1){let n=t;for(let r=0;r<e.length;r++){let i=e[r];B(i)&&i.columns.length&&(n=Math.max(n,Ln(i.columns,t+1)))}return n}function Rn(e,t){return e?`${e}_${t}`:String(t)}function zn(e,t,n,r){let i=e??``;return t&&(i=i?`${i}_${t}`:String(t)),n&&(i=i?`${i}_${n}`:n),r&&(i=i?`${i}_${r}`:r),i}function Bn(e,t){let n=0;for(let r=0;r<e.length;r++)e[r].column===t&&n++;return n}function Vn(e,t,n,r,i,a){let o={depth:t,id:Rn(r,t),headers:[]},s=[];for(let i=0;i<e.length;i++){if(!(i in e))continue;let a=e[i],c=s[s.length-1],l=a.column.depth===o.depth,u,d=!1;if(l&&a.column.parent?u=a.column.parent:(u=a.column,d=!0),c&&c.column===u)c.subHeaders.push(a);else{let e=In(n,u,{id:zn(r,t,u.id,a.id),isPlaceholder:d,placeholderId:d?String(Bn(s,u)):void 0,depth:t,index:s.length});e.subHeaders.push(a),s.push(e)}o.headers.push(a),a.headerGroup=o}for(let e=0;e<a.length;e++)a[e](o);i.push(o),t>0&&Vn(s,t-1,n,r,i,a)}function Hn(e){for(let t=0;t<e.length;t++){let n=e[t];if(!B(n.column))continue;let r=0;if(n.subHeaders.length){Hn(n.subHeaders);for(let e=0;e<n.subHeaders.length;e++){let t=n.subHeaders[e];B(t.column)&&(r+=t.colSpan)}}else r=1;if(n.colSpan=r,n.isPlaceholder&&n.subHeaders.length===1&&n.subHeaders[0].column===n.column){let e=1,t=n.subHeaders[0];for(;t;)t.rowSpan=0,e++,t=t.subHeaders.length===1&&t.subHeaders[0].column===n.column?t.subHeaders[0]:void 0;n.rowSpan=e}else n.rowSpan=1}}function Un(e,t,n,r){let i=Ln(e),a=[],o=n._headerGroupInstanceInitFns,s=Array(t.length);for(let e=0;e<t.length;e++)e in t&&(s[e]=In(n,t[e],{depth:i,index:e}));return Vn(s,i-1,n,r,a,o),a.reverse(),Hn(a[0]?.headers??[]),a}function Wn(e,t){for(let n=0;n<e.subHeaders.length;n++)Wn(e.subHeaders[n],t);t.push(e)}function Gn(e){let t=[];return Wn(e,t),t}function Kn(e){return{column:e.column,header:e,table:e.column.table}}function qn(e){return Un(e.getAllColumns(),hn(e,V(e),e=>e.id),e)}function Jn(e){return[...e.getHeaderGroups()].reverse()}function Yn(e){let t=e.getHeaderGroups(),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Xn(e){let t=e.getHeaderGroups()[0]?.headers??[],n=[];for(let e=0;e<t.length;e++){let r=t[e].getLeafHeaders();for(let e=0;e<r.length;e++)n.push(r[e])}return n}var Zn={assignHeaderPrototype:(e,t)=>{R(`coreHeadersFeature`,e,t,{header_getLeafHeaders:{fn:e=>Gn(e),memoDeps:e=>[e.column.table.options.columns]},header_getContext:{fn:e=>Kn(e),memoDeps:e=>[e.column.table.options.columns]}})},constructTableAPIs:e=>{L(`coreHeadersFeature`,e,{table_getHeaderGroups:{fn:()=>qn(e),memoDeps:()=>[e.options.columns,e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.options.groupedColumnMode]},table_getFooterGroups:{fn:()=>Jn(e),memoDeps:()=>[e.getHeaderGroups()]},table_getFlatHeaders:{fn:()=>Yn(e),memoDeps:()=>[e.getHeaderGroups()]},table_getLeafHeaders:{fn:()=>Xn(e),memoDeps:()=>[e.getHeaderGroups()]}})}};function Qn(e){if(!e._rowPrototype){e._rowPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignRowPrototype?.(e._rowPrototype,e)}return e._rowPrototype}var $n=(e,t,n,r,i,a,o)=>{let s=Qn(e),c=Object.create(s);c._displayIndexCache=-1,c._uniqueValuesCache=M(),c._valuesCache=M(),c.depth=i,c.id=t,c.index=r,c.original=n,c.parentId=o,c.subRows=a??[];let l=e._rowInstanceInitFns;for(let e=0;e<l.length;e++)l[e](c);return c};function er(){return e=>I({feature:`coreRowModelsFeature`,table:e,fnName:`table.getCoreRowModel`,memoDeps:()=>[e.options.data],fn:()=>nr(e,e.options.data),onAfterUpdate:rn(()=>{yn(e),bn(e),xn(e),Sn(e)})})}function tr(e,t,n,r=0,i){let a=[];for(let o=0;o<n.length;o++){let s=n[o],c=$n(e,e.getRowId(s,o,i),s,o,r,void 0,i?.id);t.flatRows.push(c),t.rowsById[c.id]=c,a.push(c),e.options.getSubRows&&(c.originalSubRows=e.options.getSubRows(s,o),c.originalSubRows?.length&&(c.subRows=tr(e,t,c.originalSubRows,r+1,c)))}return a}function nr(e,t){let n={rows:[],flatRows:[],rowsById:M()};return n.rows=tr(e,n,t),n}function rr(e){return e._rowModels.coreRowModel||(e._rowModels.coreRowModel=e.options.features.coreRowModel?.(e)??er()(e)),e._rowModels.coreRowModel()}function ir(e){return e.getCoreRowModel()}function ar(e){return e._rowModels.filteredRowModel||(e._rowModels.filteredRowModel=e.options.features.filteredRowModel?.(e)),e.options.manualFiltering||!e._rowModels.filteredRowModel?e.getPreFilteredRowModel():e._rowModels.filteredRowModel()}function or(e){return e.getFilteredRowModel()}function sr(e){return e._rowModels.groupedRowModel||(e._rowModels.groupedRowModel=e.options.features.groupedRowModel?.(e)),e.options.manualGrouping||!e._rowModels.groupedRowModel?e.getPreGroupedRowModel():e._rowModels.groupedRowModel()}function cr(e){return e.getGroupedRowModel()}function lr(e){return e._rowModels.sortedRowModel||(e._rowModels.sortedRowModel=e.options.features.sortedRowModel?.(e)),e.options.manualSorting||!e._rowModels.sortedRowModel?e.getPreSortedRowModel():e._rowModels.sortedRowModel()}function ur(e){return e.getSortedRowModel()}function dr(e){return e._rowModels.expandedRowModel||(e._rowModels.expandedRowModel=e.options.features.expandedRowModel?.(e)),e.options.manualExpanding||!e._rowModels.expandedRowModel?e.getPreExpandedRowModel():e._rowModels.expandedRowModel()}function fr(e){return e.getExpandedRowModel()}function pr(e){return e._rowModels.paginatedRowModel||(e._rowModels.paginatedRowModel=e.options.features.paginatedRowModel?.(e)),e.options.manualPagination||!e._rowModels.paginatedRowModel?e.getPrePaginatedRowModel():e._rowModels.paginatedRowModel()}function mr(e){return e.getPaginatedRowModel()}var hr={constructTableAPIs:e=>{L(`coreRowModelsFeature`,e,{table_getCoreRowModel:{fn:()=>rr(e)},table_getPreFilteredRowModel:{fn:()=>ir(e)},table_getFilteredRowModel:{fn:()=>ar(e)},table_getPreGroupedRowModel:{fn:()=>or(e)},table_getGroupedRowModel:{fn:()=>sr(e)},table_getPreSortedRowModel:{fn:()=>cr(e)},table_getSortedRowModel:{fn:()=>lr(e)},table_getPreExpandedRowModel:{fn:()=>ur(e)},table_getExpandedRowModel:{fn:()=>dr(e)},table_getPrePaginatedRowModel:{fn:()=>fr(e)},table_getPaginatedRowModel:{fn:()=>pr(e)},table_getRowModel:{fn:()=>mr(e)}})}};function gr(e){if(!e._cellPrototype){e._cellPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignCellPrototype?.(e._cellPrototype,e)}return e._cellPrototype}function _r(e,t,n){let r=gr(n),i=Object.create(r);i.column=e,i.id=`${t.id}_${e.id}`,i.row=t;let a=n._cellInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function vr(e){let t=e.table.getRowsInDisplayOrder(),n=e._displayIndexCache;return t[n]===e?n:-1}function yr(e){let t=e.getPrePaginatedRowModel(),n=e.options.paginateExpandedRows===!1?vn(e,t).rows:t.rows;for(let e=0;e<n.length;e++)n[e]._displayIndexCache=e;return n}function br(e,t){if(N(e._valuesCache,t))return e._valuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return e._valuesCache[t]=n.accessorFn(e.original,e.index),e._valuesCache[t]}function xr(e,t){if(N(e._uniqueValuesCache,t))return e._uniqueValuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return n.columnDef.getUniqueValues?(e._uniqueValuesCache[t]=n.columnDef.getUniqueValues(e.original,e.index),e._uniqueValuesCache[t]):(e._uniqueValuesCache[t]=[e.getValue(t)],e._uniqueValuesCache[t])}function Sr(e,t){return e.getValue(t)??e.table.options.renderFallbackValue}function Cr(e){return tn(e.subRows,e=>e.subRows)}function wr(e){let t=e.getCoreRowModel().flatRows,n=0;for(let e=0;e<t.length;e++)n=Math.max(n,t[e].depth);return n}function Tr(e){if(e.parentId)return e.table.getCoreRowModel().rowsById[e.parentId]??e.table.getRow(e.parentId,!0)}function Er(e){let t=[],n=e;for(;;){let e=n.getParentRow();if(!e)break;t.push(e),n=e}return t.reverse()}function Dr(e){let t=e.table.getAllLeafColumns(),n=e._cellsCache;n||=e._cellsCache=new WeakMap;let r=Array(t.length);for(let i=0;i<t.length;i++){let a=t[i],o=n.get(a);o||(o=_r(a,e,e.table),n.set(a,o)),r[i]=o}return r}function Or(e){let t=M(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];t[r.column.id]=r}return t}function kr(e,t,n,r){return t.options.getRowId?.(e,n,r)??(r?`${r.id}.${n}`:String(n))}function Ar(e,t,n){let r=(n?e.getPrePaginatedRowModel():e.getRowModel()).rowsById[t];if(!r&&(r=e.getCoreRowModel().rowsById[t],!r))throw Error();return r}var jr={assignRowPrototype:(e,t)=>{R(`coreRowsFeature`,e,t,{row_getDisplayIndex:{fn:e=>vr(e)},row_getAllCellsByColumnId:{fn:e=>Or(e),memoDeps:e=>[e.getAllCells()]},row_getAllCells:{fn:e=>Dr(e),memoDeps:e=>[e.table.getAllLeafColumns()]},row_getLeafRows:{fn:e=>Cr(e),memoDeps:e=>[e.subRows]},row_getParentRow:{fn:e=>Tr(e)},row_getParentRows:{fn:e=>Er(e)},row_getUniqueValues:{fn:(e,t)=>xr(e,t)},row_getValue:{fn:(e,t)=>br(e,t)},row_renderValue:{fn:(e,t)=>Sr(e,t)}})},constructTableAPIs:e=>{L(`coreRowsFeature`,e,{table_getRowsInDisplayOrder:{fn:()=>yr(e),memoDeps:()=>[e.getPrePaginatedRowModel().rows,e.options.paginateExpandedRows,e.options.paginateExpandedRows===!1?e.atoms.expanded?.get():void 0]},table_getRowId:{fn:(t,n,r)=>kr(t,e,n,r)},table_getRow:{fn:(t,n)=>Ar(e,t,n)},table_getMaxSubRowDepth:{fn:()=>wr(e),memoDeps:()=>[e.getCoreRowModel()]}})}};function Mr(e,t,n=(e,t)=>e===t){let r=t===void 0?e.options.state:t;e._reactivity.batch(()=>{if(r)for(let t in r){let i=e.baseAtoms[t];if(!i)continue;let a=r[t],o=a===void 0?e.initialState[t]:a;n(e._reactivity.untrack(()=>i.get()),o)||i.set(()=>o)}})}function Nr(e,t,n=(e,t)=>e===t){e._reactivity.batch(()=>{Mr(e,t,n),e._reactivity.commit?.()})}function Pr(e){let t=j(e.initialState);e._reactivity.batch(()=>{let n=Object.keys(t);for(let r=0;r<n.length;r++){let i=n[r];e.baseAtoms[i].set(t[i])}});let n=Object.values(e._features);for(let t=0;t<n.length;t++)n[t].resetTableInstanceData?.(e)}function Fr(e,t){let{features:n,atoms:r,initialState:i}=e.options;if(!e.options.mergeOptions)return{...e.options,...t,features:n,atoms:r,initialState:i};let a=e.options.mergeOptions(e.options,t),o={...Object.getOwnPropertyDescriptors(a)};return Object.defineProperties(Object.create(Object.getPrototypeOf(a)),{...o,features:{value:n,enumerable:!0,configurable:!0,writable:!0},atoms:{value:r,enumerable:!0,configurable:!0,writable:!0},initialState:{value:i,enumerable:!0,configurable:!0,writable:!0}})}function Ir(e,t,n){let r=Fr(e,qt(t,e.options));e.optionsStore?e.optionsStore.set(()=>r):e.options=r,n?.syncExternalState!==!1&&Nr(e,r.state??null)}var Lr={coreCellsFeature:ln,coreColumnsFeature:Pn,coreHeadersFeature:Zn,coreRowModelsFeature:hr,coreRowsFeature:jr,coreTablesFeature:{constructTableAPIs:e=>{L(`coreTablesFeature`,e,{table_reset:{fn:()=>Pr(e)},table_setOptions:{fn:t=>Ir(e,t)}})}}};function U(){return{accessor:(e,t)=>typeof e==`function`?{...t,accessorFn:e}:{...t,accessorKey:e},columns:e=>e,display:e=>e,group:e=>e}}function Rr(){return{}}function zr(e){return e}function Br(e,t={}){return Object.values(e).forEach(e=>{t=e.getInitialState?.(t)??t}),j(t)}function Vr(e){let t=e.features.coreReactivityFeature,{aggregationFns:n,columnMeta:r,coreRowModel:i,expandedRowModel:a,facetedMinMaxValues:o,facetedRowModel:s,facetedUniqueValues:c,filterFns:l,filterMeta:u,filteredRowModel:d,groupedRowModel:f,paginatedRowModel:p,sortFns:m,sortedRowModel:h,tableMeta:ee,...te}=e.features,g={_cellInstanceInitFns:[],_columnInstanceInitFns:[],_features:{...Lr,...te},_headerGroupInstanceInitFns:[],_headerInstanceInitFns:[],_reactivity:t,_rowInstanceInitFns:[],_rowModelFns:{aggregationFns:n,filterFns:l,sortFns:m},_rowModels:{},atoms:{},baseAtoms:{}},_=Object.values(g._features),ne={..._.reduce((e,t)=>Object.assign(e,t.getDefaultTableOptions?.(g)),{}),...e};if(t.wrapExternalAtoms&&ne.atoms)for(let[e,n]of Object.entries(ne.atoms)){let r=n,i=t.createWritableAtom(r.get(),{debugName:`externalAtom/${e}`});ne.atoms[e]=i;let a=!1,o=r.subscribe(e=>{a||i.set(e)}),s=i.subscribe(e=>{a=!0,r.set(e),a=!1});t.addSubscription(o),t.addSubscription(s)}t.createOptionsStore?(g.optionsStore=t.createWritableAtom(ne,{debugName:`table/optionsStore`}),Object.defineProperty(g,"options",{configurable:!0,enumerable:!0,get(){return g.optionsStore.get()},set(e){g.optionsStore.set(()=>e)}})):g.options=ne,g.initialState=Br(g._features,g.options.initialState);let re=Object.keys(g.initialState);for(let e=0;e<re.length;e++){let n=re[e];g.baseAtoms[n]=t.createWritableAtom(g.initialState[n],{debugName:`table/baseAtoms/${n}`}),g.atoms[n]=t.createReadonlyAtom(()=>{let e=g.options,t=e.atoms?.[n],r=t?t.get():g.baseAtoms[n].get();if(t)return r;let i=e.state;if(i&&N(i,n)){let e=i[n];return e===void 0?g.initialState[n]:e}return r},{debugName:`table/atoms/${n}`})}Mr(g),g.store=Ut(t.createReadonlyAtom(()=>{let e={};for(let t=0;t<re.length;t++){let n=re[t];e[n]=g.atoms[n].get()}return e},{compare:Lt,debugName:`table/store`}));for(let e=0;e<_.length;e++){let t=_[e];t.initTableInstanceData?.(g),t.initCellInstanceData&&g._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)),t.initColumnInstanceData&&g._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)),t.initHeaderGroupInstanceData&&g._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)),t.initHeaderInstanceData&&g._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)),t.initRowInstanceData&&g._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)),t.constructTableAPIs?.(g)}return g}function Hr(e){return!!e&&typeof e==`object`&&`aggregate`in e}function Ur(e){return!!e&&typeof e==`object`&&`id`in e&&`aggregationFn`in e}function Wr(e){return e===void 0||Number.isNaN(e)?0:Math.max(0,Math.floor(e))}function Gr(e,t,n,r,i){if(e.subRows.length&&t<n)for(let a=0;a<e.subRows.length;a++)Gr(e.subRows[a],t+1,n,r,i);else r.has(e.id)||(r.add(e.id),i.push(e))}function Kr(e,t,n,r){if(e.subRows.length&&t<n)for(let i=0;i<e.subRows.length;i++)Kr(e.subRows[i],t+1,n,r);else r.push(e)}function qr(e,t=0){let n=[],r=new Set,i=Wr(t);for(let t=0;t<e.length;t++)Gr(e[t],0,i,r,n);return n}function Jr(e,t=0){let n=Wr(t),r=!1;if(n>0){for(let t=0;t<e.length;t++)if(e[t].subRows.length){r=!0;break}}if(!r)return e;let i=[];for(let t=0;t<e.length;t++)Kr(e[t],0,n,i);return i}function Yr(e){if(typeof e==`number`)return`sum`;if(e instanceof Date&&!Number.isNaN(e.getTime()))return`extent`}function Xr(e){let t=e.table.getCoreRowModel().flatRows[0]?.getValue(e.id),n=Yr(t);if(n)return e.table._rowModelFns.aggregationFns?.[n]}function Zr(e,t){return Hr(t)?t:t===`auto`?Xr(e):e.table._rowModelFns.aggregationFns?.[t]}function Qr(e){let t=e.columnDef.aggregationFn,n=e.table._rowModelFns.aggregationFns,r=e.table.getCoreRowModel(),i=e._resolvedAggregationFnsCache;if(i&&i.option===t&&i.registry===n&&i.coreRowModel===r)return i.value;let a=i=>(e._resolvedAggregationFnsCache={coreRowModel:r,option:t,registry:n,value:i},i);if(t==null)return a([]);if(!Array.isArray(t))return a([{aggregationFn:Zr(e,t),id:typeof t==`string`?t:void 0}]);let o=M();for(let e=0;e<t.length;e++){let n=t[e],r=typeof n==`string`?n:Ur(n)?n.id:void 0;r!==void 0&&(o[r]=(o[r]??0)+1)}let s=[];for(let n=0;n<t.length;n++){let r=t[n],i=typeof r==`string`?r:Ur(r)?r.id:void 0;if(i===void 0){s.push({aggregationFn:void 0,id:void 0});continue}if(o[i]>1){s.push({aggregationFn:void 0,id:i});continue}let a=Ur(r)?r.aggregationFn:r;s.push({aggregationFn:Zr(e,a),id:i})}return a(s)}function $r(e,t,n){if(!t)return e;if(n&&e&&typeof e==`object`)return N(e,n)?e[n]:void 0}function ei(e){let{subRows:t,column:n,groupingRow:r,rows:i,uniqueRows:a}=e,o=n,s=Wr(e.maxDepth??o.columnDef.maxAggregationDepth),c=a?Jr(i,s):qr(i,s),l=Qr(o),u=Array.isArray(o.columnDef.aggregationFn),d=!!t?.length&&t.every(e=>!!e.groupingColumnId&&e.groupingColumnId!==n.id),f=e=>e.getValue(n.id),p=e=>{let i=e.aggregationFn;if(!i)return;let a={...t?{subRows:t}:{},column:n,columnId:n.id,getValue:f,...r?{groupingRow:r}:{},maxDepth:s,rows:c,table:n.table};return d&&i.merge?i.merge({...a,subRowResults:t.map(t=>$r(t.getValue(n.id),u,e.id)),subRows:t}):i.aggregate(a)};if(!u)return l[0]?p(l[0]):void 0;let m=M();for(let e=0;e<l.length;e++){let t=l[e];t.id!==void 0&&(m[t.id]=p(t))}return m}function ti(e,t){let n=t?.rows,r=Wr(t?.maxDepth??e.columnDef.maxAggregationDepth),i=e.columnDef.getAggregationValue?.({column:e,maxDepth:r,rows:n,table:e.table});if(i)return i.value;if(e.table.options.manualAggregation)return;if(n!==void 0)return ei({column:e,maxDepth:r,rows:n});let a=e.table.getPreGroupedRowModel(),o=e._aggregationValueCache,s=e.table._rowModelFns.aggregationFns,c=e.columnDef.aggregationFn;if(o&&o.dependency===a&&o.maxDepth===r&&o.registry===s&&o.aggregationFnOption===c)return o.value;let l=ei({column:e,maxDepth:r,rows:a.rows,uniqueRows:!0});return e._aggregationValueCache={aggregationFnOption:c,dependency:a,maxDepth:r,registry:s,value:l},l}function ni(e){let t=e.row.groupingColumnId;return!t||t===e.column.id||(e.column.table.atoms.grouping?.get?.())?.includes(e.column.id)?!1:Qr(e.column).some(e=>!!e.aggregationFn)}function ri(e,t){return e==null?null:Array.isArray(t)&&typeof e==`object`?Object.keys(e).map(t=>`${t}: ${String(e[t])}`).join(`, `):String(e)}var ii={getDefaultColumnDef:()=>({aggregatedCell:({column:e,getValue:t})=>ri(t(),e.columnDef.aggregationFn),aggregationFn:`auto`,maxAggregationDepth:0}),getDefaultTableOptions:()=>({manualAggregation:!1}),assignCellPrototype:(e,t)=>{R(`rowAggregationFeature`,e,t,{cell_getIsAggregated:{fn:e=>ni(e)}})},assignColumnPrototype:(e,t)=>{R(`rowAggregationFeature`,e,t,{column_getAggregationFns:{fn:e=>Qr(e)},column_getAggregationValue:{fn:(e,t)=>ti(e,t)},column_getAutoAggregationFn:{fn:e=>Xr(e),memoDeps:e=>[e.table.getCoreRowModel(),e.table._rowModelFns.aggregationFns]}})},initColumnInstanceData:e=>{e._aggregationValueCache=void 0,e._resolvedAggregationFnsCache=void 0},constructTableAPIs:e=>{L(`rowAggregationFeature`,e,{table__aggregateColumnValue:{fn:ei}})}};function ai(){return[]}function oi(e){let t=e.table._rowModelFns.filterFns,n=e.table.getCoreRowModel().flatRows,r;for(let t=0;t<n.length;t++){let i=n[t].getValue(e.id);if(i!=null){r=i;break}}let i;return i=typeof r==`string`?`includesString`:typeof r==`number`?`inNumberRange`:typeof r==`boolean`?`equals`:Array.isArray(r)?`arrIncludes`:Object.prototype.toString.call(r)===`[object Date]`?`inDateRange`:typeof r==`object`&&r?`equals`:`weakEquals`,t?.[i]}function si(e){let t=null,n=e.table._rowModelFns.filterFns;return t=en(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn===`auto`?oi(e):n?.[e.columnDef.filterFn],t??void 0}function ci(e){return(e.columnDef.enableColumnFilter??!0)&&(e.table.options.enableColumnFilters??!0)&&(e.table.options.enableFilters??!0)&&!!e.accessorFn}function li(e){return di(e)>-1}function ui(e){return e.table.atoms.columnFilters?.get()?.find(t=>t.id===e.id)?.value}function di(e){return e.table.atoms.columnFilters?.get()?.findIndex(t=>t.id===e.id)??-1}function fi(e,t){pi(e.table,n=>{let r=si(e),i=n.find(t=>t.id===e.id),a=qt(t,i?i.value:void 0);if(hi(r,a,e))return n.filter(t=>t.id!==e.id);let o={id:e.id,value:a};return i?n.map(t=>t.id===e.id?o:t):n.length?[...n,o]:[o]})}function pi(e,t){let n=e.getAllLeafColumnsById();F(e,`columnFilters`,e=>qt(t,e).filter(e=>{let t=n[e.id];return!(t&&hi(si(t),e.value,t))}))}function mi(e,t){pi(e,t?[]:j(e.initialState.columnFilters??[]))}function hi(e,t,n){return t===void 0?!0:e?.autoRemove?!!e.autoRemove(t,n):typeof t==`string`&&!t}var gi={getInitialState:e=>({columnFilters:ai(),...e}),getDefaultColumnDef:()=>({filterFn:`auto`}),getDefaultTableOptions:e=>({onColumnFiltersChange:P(`columnFilters`,e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),assignColumnPrototype:(e,t)=>{R(`columnFilteringFeature`,e,t,{column_getAutoFilterFn:{fn:e=>oi(e)},column_getFilterFn:{fn:e=>si(e)},column_getCanFilter:{fn:e=>ci(e)},column_getIsFiltered:{fn:e=>li(e)},column_getFilterValue:{fn:e=>ui(e)},column_getFilterIndex:{fn:e=>di(e)},column_setFilterValue:{fn:(e,t)=>fi(e,t)}})},initRowInstanceData:e=>{e.columnFilters=M(),e.columnFiltersMeta=M()},constructTableAPIs:e=>{L(`columnFilteringFeature`,e,{table_setColumnFilters:{fn:t=>pi(e,t)},table_resetColumnFilters:{fn:t=>mi(e,t)}})}};function _i(e,t){let n=e.atoms.grouping?.get()??[],{groupedColumnMode:r}=e.options;if(!n.length||!r)return t;let i=t.filter(e=>!n.includes(e.id));if(r===`remove`)return i;let a=new Map;for(let e=0;e<t.length;e++){let n=t[e];a.set(n.id,n)}let o=[];for(let e=0;e<n.length;e++){let t=a.get(n[e]);t&&o.push(t)}return[...o,...i]}function vi(){return[]}function yi(e){wi(e.table,t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id])}function bi(e){return(e.columnDef.enableGrouping??!0)&&(e.table.options.enableGrouping??!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)}function xi(e){return!!e.table.atoms.grouping?.get()?.includes(e.id)}function Si(e){return e.table.atoms.grouping?.get()?.indexOf(e.id)??-1}function Ci(e){let t=bi(e);return()=>{t&&yi(e)}}function wi(e,t){F(e,`grouping`,t)}function Ti(e,t){wi(e,t?[]:j(e.initialState.grouping??[]))}function Ei(e){return!!e.groupingColumnId}function Di(e,t){if(e._groupingValuesCache&&N(e._groupingValuesCache,t))return e._groupingValuesCache[t];let n=e.table.getColumn(t);return n.columnDef.getGroupingValue?(e._groupingValuesCache&&(e._groupingValuesCache[t]=n.columnDef.getGroupingValue(e.original,e.index,e)),e._groupingValuesCache?.[t]):e.getValue(t)}function Oi(e){let t=e.row;return xi(e.column)&&e.column.id===t.groupingColumnId}function ki(e){return!Oi(e)&&xi(e.column)}var Ai={getInitialState:e=>({grouping:vi(),...e}),getDefaultTableOptions:e=>({onGroupingChange:P(`grouping`,e),groupedColumnMode:`reorder`}),assignCellPrototype:(e,t)=>{R(`columnGroupingFeature`,e,t,{cell_getIsGrouped:{fn:e=>Oi(e)},cell_getIsPlaceholder:{fn:e=>ki(e)}})},assignColumnPrototype:(e,t)=>{R(`columnGroupingFeature`,e,t,{column_toggleGrouping:{fn:e=>yi(e)},column_getCanGroup:{fn:e=>bi(e)},column_getIsGrouped:{fn:e=>xi(e)},column_getGroupedIndex:{fn:e=>Si(e)},column_getToggleGroupingHandler:{fn:e=>Ci(e)}})},assignRowPrototype:(e,t)=>{R(`columnGroupingFeature`,e,t,{row_getIsGrouped:{fn:e=>Ei(e)},row_getGroupingValue:{fn:(e,t)=>Di(e,t)}})},initRowInstanceData:e=>{e._groupingValuesCache=M()},constructTableAPIs:e=>{L(`columnGroupingFeature`,e,{table_setGrouping:{fn:t=>wi(e,t)},table_resetGrouping:{fn:t=>Ti(e,t)},table__orderGroupedColumns:{fn:t=>_i(e,t)}})}};function W(){return{start:[],end:[]}}function ji(e,t){let n=e.getLeafColumns(),r=[];for(let e=0;e<n.length;e++){let t=n[e].id;t&&r.push(t)}Ri(e.table,e=>t===`end`?{start:e.start.filter(e=>!r.includes(e)),end:[...e.end.filter(e=>!r.includes(e)),...r]}:t===`start`?{start:[...e.start.filter(e=>!r.includes(e)),...r],end:e.end.filter(e=>!r.includes(e))}:{start:e.start.filter(e=>!r.includes(e)),end:e.end.filter(e=>!r.includes(e))})}function Mi(e){return e.getLeafColumns().some(t=>(t.columnDef.enablePinning??!0)&&(e.table.options.enableColumnPinning??!0))}function Ni(e){let t=e.getLeafColumns(),{start:n,end:r}=e.table.atoms.columnPinning?.get()??W();for(let e=0;e<t.length;e++)if(n.includes(t[e].id))return`start`;for(let e=0;e<t.length;e++)if(r.includes(t[e].id))return`end`;return!1}function Pi(e){let t=Ni(e);return t?e.table.atoms.columnPinning?.get()?.[t].indexOf(e.id)??-1:0}function Fi(e){let t=fn(e),{start:n,end:r}=e.table.atoms.columnPinning?.get()??W();if(!n.length&&!r.length)return t;let i=[...n,...r];return t.filter(e=>!i.includes(e.column.id))}function Ii(e){let{start:t}=e.table.atoms.columnPinning?.get()??W();if(!t.length)return[];let n=pn(e),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&(i.position=`start`,r.push(i))}return r}function Li(e){let{end:t}=e.table.atoms.columnPinning?.get()??W();if(!t.length)return[];let n=pn(e),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&(i.position=`end`,r.push(i))}return r}function Ri(e,t){F(e,`columnPinning`,t)}function zi(e,t){Ri(e,t?W():j(e.initialState.columnPinning??W()))}function Bi(e,t){let n=e.atoms.columnPinning?.get();return t?!!n?.[t].length:!!(n?.start.length||n?.end.length)}function Vi(e){let t=e.getAllColumns(),n=e.getAllLeafColumnsById(),{start:r}=e.atoms.columnPinning?.get()??W(),i=[];for(let e=0;e<r.length;e++){let t=n[r[e]];t&&B(t)&&i.push(t)}return Un(t,i,e,`start`)}function Hi(e){let t=e.getAllColumns(),n=e.getAllLeafColumnsById(),{end:r}=e.atoms.columnPinning?.get()??W(),i=[];for(let e=0;e<r.length;e++){let t=n[r[e]];t&&B(t)&&i.push(t)}return Un(t,i,e,`end`)}function Ui(e){let t=e.getAllColumns(),n=V(e),{start:r,end:i}=e.atoms.columnPinning?.get()??W();if(r.length||i.length){let e=[...r,...i];n=n.filter(t=>!e.includes(t.id))}return Un(t,n,e,`center`)}function Wi(e){return[...z(e,`getStartHeaderGroups`,Vi)].reverse()}function Gi(e){return[...z(e,`getEndHeaderGroups`,Hi)].reverse()}function Ki(e){return[...z(e,`getCenterHeaderGroups`,Ui)].reverse()}function qi(e){let t=z(e,`getStartHeaderGroups`,Vi),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Ji(e){let t=z(e,`getEndHeaderGroups`,Hi),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Yi(e){let t=z(e,`getCenterHeaderGroups`,Ui),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Xi(e){return z(e,`getStartFlatHeaders`,qi).filter(e=>!e.subHeaders.length)}function Zi(e){return z(e,`getEndFlatHeaders`,Ji).filter(e=>!e.subHeaders.length)}function Qi(e){return z(e,`getCenterFlatHeaders`,Yi).filter(e=>!e.subHeaders.length)}function $i(e){let{start:t}=e.atoms.columnPinning?.get()??W(),n=e.getAllLeafColumnsById(),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&r.push(i)}return r}function ea(e){let{end:t}=e.atoms.columnPinning?.get()??W(),n=e.getAllLeafColumnsById(),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&r.push(i)}return r}function ta(e){let{start:t,end:n}=e.atoms.columnPinning?.get()??W();if(!t.length&&!n.length)return e.getAllLeafColumns();let r=[...t,...n];return e.getAllLeafColumns().filter(e=>!r.includes(e.id))}function na(e,t){return t?t===`start`?z(e,`getStartLeafColumns`,$i):t===`end`?z(e,`getEndLeafColumns`,ea):z(e,`getCenterLeafColumns`,ta):e.getAllLeafColumns()}function ra(e){return z(e,`getStartLeafColumns`,$i).filter(e=>B(e))}function ia(e){return z(e,`getEndLeafColumns`,ea).filter(e=>B(e))}function aa(e){return z(e,`getCenterLeafColumns`,ta).filter(e=>B(e))}function oa(e,t){return t?t===`start`?z(e,`getStartVisibleLeafColumns`,ra):t===`end`?z(e,`getEndVisibleLeafColumns`,ia):z(e,`getCenterVisibleLeafColumns`,aa):V(e)}function sa(e,t,n,r){let i=e.atoms.columnPinning?.get();if(!i||!i.start.length&&!i.end.length)return t;let{start:a,end:o}=i,s=r?.();if(!s){s=M();for(let e=0;e<t.length;e++)s[n(t[e])]=t[e]}let c=[];for(let e=0;e<a.length;e++){let t=s[a[e]];t&&c.push(t)}for(let e=0;e<t.length;e++){let r=n(t[e]);!a.includes(r)&&!o.includes(r)&&c.push(t[e])}for(let e=0;e<o.length;e++){let t=s[o[e]];t&&c.push(t)}return c}var ca={getInitialState:e=>({columnPinning:{...W(),...e.columnPinning},...e}),getDefaultTableOptions:e=>({onColumnPinningChange:P(`columnPinning`,e)}),assignColumnPrototype:(e,t)=>{R(`columnPinningFeature`,e,t,{column_pin:{fn:(e,t)=>ji(e,t)},column_getCanPin:{fn:e=>Mi(e)},column_getPinnedIndex:{fn:e=>Pi(e)},column_getIsPinned:{fn:e=>Ni(e)}})},assignRowPrototype:(e,t)=>{R(`columnPinningFeature`,e,t,{row_getCenterVisibleCells:{fn:e=>Fi(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get(),e.table.atoms.columnVisibility?.get()]},row_getStartVisibleCells:{fn:e=>Ii(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get()?.start,e.table.atoms.columnVisibility?.get()]},row_getEndVisibleCells:{fn:e=>Li(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get()?.end,e.table.atoms.columnVisibility?.get()]}})},constructTableAPIs:e=>{L(`columnPinningFeature`,e,{table_setColumnPinning:{fn:t=>Ri(e,t)},table_resetColumnPinning:{fn:t=>zi(e,t)},table_getIsSomeColumnsPinned:{fn:t=>Bi(e,t)},table__orderByColumnPinning:{fn:(t,n,r)=>sa(e,t,n,r)},table_getStartHeaderGroups:{fn:()=>Vi(e),memoDeps:()=>[e.getAllColumns(),V(e),e.atoms.columnPinning?.get()?.start,e.atoms.columnOrder?.get()]},table_getCenterHeaderGroups:{fn:()=>Ui(e),memoDeps:()=>[e.getAllColumns(),V(e),e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get()]},table_getEndHeaderGroups:{fn:()=>Hi(e),memoDeps:()=>[e.getAllColumns(),V(e),e.atoms.columnPinning?.get()?.end,e.atoms.columnOrder?.get()]},table_getStartFooterGroups:{fn:()=>Wi(e),memoDeps:()=>[z(e,`getStartHeaderGroups`,Vi)]},table_getCenterFooterGroups:{fn:()=>Ki(e),memoDeps:()=>[z(e,`getCenterHeaderGroups`,Ui)]},table_getEndFooterGroups:{fn:()=>Gi(e),memoDeps:()=>[z(e,`getEndHeaderGroups`,Hi)]},table_getStartFlatHeaders:{fn:()=>qi(e),memoDeps:()=>[z(e,`getStartHeaderGroups`,Vi)]},table_getEndFlatHeaders:{fn:()=>Ji(e),memoDeps:()=>[z(e,`getEndHeaderGroups`,Hi)]},table_getCenterFlatHeaders:{fn:()=>Yi(e),memoDeps:()=>[z(e,`getCenterHeaderGroups`,Ui)]},table_getStartLeafHeaders:{fn:()=>Xi(e),memoDeps:()=>[z(e,`getStartHeaderGroups`,Vi)]},table_getEndLeafHeaders:{fn:()=>Zi(e),memoDeps:()=>[z(e,`getEndHeaderGroups`,Hi)]},table_getCenterLeafHeaders:{fn:()=>Qi(e),memoDeps:()=>[z(e,`getCenterHeaderGroups`,Ui)]},table_getStartLeafColumns:{fn:()=>$i(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getEndLeafColumns:{fn:()=>ea(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getCenterLeafColumns:{fn:()=>ta(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getPinnedLeafColumns:{fn:t=>na(e,t)},table_getStartVisibleLeafColumns:{fn:()=>ra(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getCenterVisibleLeafColumns:{fn:()=>aa(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getEndVisibleLeafColumns:{fn:()=>ia(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getPinnedVisibleLeafColumns:{fn:t=>oa(e,t)}})}};function la(){return M()}function ua(){return{size:150,minSize:20,maxSize:2**53-1}}function da(e){let t=ua(),n=e.table.atoms.columnSizing?.get(),r=n&&N(n,e.id)?n[e.id]:void 0;return Math.min(Math.max(e.columnDef.minSize??t.minSize,r??e.columnDef.size??t.size),e.columnDef.maxSize??t.maxSize)}function fa(e){let t=M(),n=M(),r=Array(e.length),i=0;for(let n=0;n<e.length;n++){let a=e[n],o=z(a,`getSize`,da);r[n]=o,t[a.id]=i,i+=o}let a=0;for(let t=e.length-1;t>=0;t--)n[e[t].id]=a,a+=r[t];return{starts:t,afters:n}}function pa(e){return{all:fa(H(e)),center:fa(H(e,`center`)),start:fa(H(e,`start`)),end:fa(H(e,`end`))}}function ma(e){return e===`start`?`start`:e===`end`?`end`:e===`center`?`center`:`all`}function ha(e,t){return z(e.table,`getColumnOffsets`,pa)[ma(t)].starts[e.id]??0}function ga(e,t){return z(e.table,`getColumnOffsets`,pa)[ma(t)].afters[e.id]??0}function _a(e){xa(e.table,t=>{let n=M(),r=Object.keys(t);for(let i=0;i<r.length;i++){let a=r[i];a!==e.id&&(n[a]=t[a])}return n})}function va(e){if(!e.subHeaders.length)return da(e.column);let t=0;for(let n=0;n<e.subHeaders.length;n++)t+=va(e.subHeaders[n]);return t}function ya(e){return va(e)}function ba(e){if(e.index>0){let t=e.headerGroup?.headers[e.index-1];if(t)return z(t,`getStart`,ba)+z(t,`getSize`,ya)}return 0}function xa(e,t){e.options.onColumnSizingChange?.(t)}function Sa(e,t){xa(e,t?M():Object.assign(M(),j(e.initialState.columnSizing??{})))}function Ca(e){let t=0;for(let n=0;n<e.length;n++)t+=z(e[n],`getSize`,da);return t}function wa(e){return e.getHeaderGroups()[0]?.headers.reduce((e,t)=>e+ya(t),0)??0}function Ta(e){return Ca(H(e,`start`))}function Ea(e){return Ca(H(e,`center`))}function Da(e){return Ca(H(e,`end`))}var Oa={getInitialState:e=>({columnSizing:la(),...e}),getDefaultColumnDef:()=>ua(),getDefaultTableOptions:e=>({onColumnSizingChange:P(`columnSizing`,e)}),assignColumnPrototype:(e,t)=>{R(`columnSizingFeature`,e,t,{column_getSize:{fn:e=>da(e),memoDeps:e=>[t.options.columns,t.atoms.columnSizing?.get()?.[e.id]]},column_getStart:{fn:(e,t)=>ha(e,t)},column_getAfter:{fn:(e,t)=>ga(e,t)},column_resetSize:{fn:e=>_a(e)}})},assignHeaderPrototype:(e,t)=>{R(`columnSizingFeature`,e,t,{header_getSize:{fn:e=>ya(e),memoDeps:e=>[t.options.columns,e.column.columns.length>0?t.atoms.columnSizing?.get():t.atoms.columnSizing?.get()?.[e.column.id]]},header_getStart:{fn:e=>ba(e),memoDeps:()=>[t.options.columns,t.atoms.columnSizing?.get(),t.atoms.columnOrder?.get(),t.atoms.columnPinning?.get(),t.atoms.columnVisibility?.get(),t.atoms.grouping?.get(),t.options.groupedColumnMode]}})},constructTableAPIs:e=>{L(`columnSizingFeature`,e,{table_getColumnOffsets:{fn:()=>pa(e),memoDeps:()=>[e.options.columns,e.atoms.columnSizing?.get(),e.atoms.columnOrder?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_setColumnSizing:{fn:t=>xa(e,t)},table_resetColumnSizing:{fn:t=>Sa(e,t)},table_getTotalSize:{fn:()=>wa(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getStartTotalSize:{fn:()=>Ta(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getCenterTotalSize:{fn:()=>Ea(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getEndTotalSize:{fn:()=>Da(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]}})}};function ka(){return M()}function Aa(e,t){ja(e)&&La(e.table,n=>{let r=Object.assign(M(),n),i=t??!z(e,`getIsVisible`,G),a=e.getLeafColumns();for(let e=0;e<a.length;e++){let t=a[e];ja(t)&&(r[t.id]=i)}return r})}function G(e){let t=e.table.atoms.columnVisibility?.get();if(!t)return!0;let n=e.columns;return n.length?n.some(e=>z(e,`getIsVisible`,G)):(N(t,e.id)?t[e.id]:void 0)??!0}function ja(e){return(e.columnDef.enableHiding??!0)&&(e.table.options.enableHiding??!0)}function Ma(e){return t=>{Aa(e,t.target.checked)}}function Na(e){let t=e.getAllCells(),n=[];for(let e=0;e<t.length;e++){let r=t[e];z(r.column,`getIsVisible`,G)&&n.push(r)}return hn(e.table,n,e=>e.column.id,()=>z(e,`getVisibleCellsByColumnId`,Pa))}function Pa(e){let t=M(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];z(r.column,`getIsVisible`,G)&&(t[r.column.id]=r)}return t}function Fa(e){return e.getAllFlatColumns().filter(e=>z(e,`getIsVisible`,G))}function Ia(e){return e.getAllLeafColumns().filter(e=>z(e,`getIsVisible`,G))}function La(e,t){F(e,`columnVisibility`,t)}function Ra(e,t){La(e,t?M():Object.assign(M(),j(e.initialState.columnVisibility??{})))}function za(e,t){t??=!Ba(e);let n=M(),r=e.getAllLeafColumns();for(let e=0;e<r.length;e++){let i=r[e];n[i.id]=t||!ja(i)}La(e,n)}function Ba(e){return!e.getAllLeafColumns().some(e=>!z(e,`getIsVisible`,G))}function Va(e){return e.getAllLeafColumns().some(e=>z(e,`getIsVisible`,G))}function Ha(e){return t=>{za(e,t.target.checked)}}var Ua={getInitialState:e=>({columnVisibility:ka(),...e}),getDefaultTableOptions:e=>({onColumnVisibilityChange:P(`columnVisibility`,e)}),assignColumnPrototype:(e,t)=>{R(`columnVisibilityFeature`,e,t,{column_getIsVisible:{fn:e=>G(e),memoDeps:e=>[t.options.columns,t.atoms.columnVisibility?.get(),e.columns]},column_getCanHide:{fn:e=>ja(e)},column_getToggleVisibilityHandler:{fn:e=>Ma(e)},column_toggleVisibility:{fn:(e,t)=>Aa(e,t)}})},assignRowPrototype:(e,t)=>{R(`columnVisibilityFeature`,e,t,{row_getVisibleCells:{fn:e=>Na(e),memoDeps:e=>[e.getAllCells(),t.atoms.columnPinning?.get(),t.atoms.columnVisibility?.get()]},row_getVisibleCellsByColumnId:{fn:e=>Pa(e),memoDeps:e=>[e.getAllCells(),t.atoms.columnVisibility?.get()]}})},constructTableAPIs:e=>{L(`columnVisibilityFeature`,e,{table_getVisibleFlatColumns:{fn:()=>Fa(e),memoDeps:()=>[e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getVisibleLeafColumns:{fn:()=>Ia(e),memoDeps:()=>[e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_setColumnVisibility:{fn:t=>La(e,t)},table_resetColumnVisibility:{fn:t=>Ra(e,t)},table_toggleAllColumnsVisible:{fn:t=>za(e,t)},table_getIsAllColumnsVisible:{fn:()=>Ba(e)},table_getIsSomeColumnsVisible:{fn:()=>Va(e)},table_getToggleAllColumnsVisibilityHandler:{fn:()=>Ha(e)}})}};function Wa(e){let t=Object.assign((e,n,r,i)=>{let a=e.getValue(n),o=t.resolveDataValue?t.resolveDataValue(a):a;return t.filter(o,r,e,n,i)},e);return t}var Ga=Wa({filter:(e,t)=>!!e?.includes(t),autoRemove:e=>Ka(e),resolveFilterValue:e=>String(e).toLowerCase(),resolveDataValue:e=>e==null?void 0:String(e).toLowerCase()});function Ka(e){return e==null||e===``}function qa(e){return(e.columnDef.enableGlobalFilter??!0)&&(e.table.options.enableGlobalFilter??!0)&&(e.table.options.enableFilters??!0)&&(e.table.options.getColumnCanGlobalFilter?.(e)??!0)&&!!e.accessorFn}function Ja(){return Ga}function Ya(e){let{globalFilterFn:t}=e.options,n=e._rowModelFns.filterFns;return en(t)?t:t===`auto`?Ja():n?.[t]}function Xa(e,t){e.options.onGlobalFilterChange?.(t)}function Za(e,t){Xa(e,t?void 0:j(e.initialState.globalFilter))}var Qa={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultTableOptions:e=>({onGlobalFilterChange:P(`globalFilter`,e),globalFilterFn:`auto`,getColumnCanGlobalFilter:t=>{if(`enableGlobalFilter`in t.columnDef&&t.columnDef.enableGlobalFilter===!0)return!0;let n=e.getCoreRowModel().flatRows.find(e=>e.getAllCellsByColumnId()[t.id]?.getValue()!=null)?.getAllCellsByColumnId()[t.id]?.getValue();return typeof n==`string`||typeof n==`number`}}),assignColumnPrototype:(e,t)=>{R(`globalFilteringFeature`,e,t,{column_getCanGlobalFilter:{fn:e=>qa(e)}})},constructTableAPIs:e=>{L(`globalFilteringFeature`,e,{table_getGlobalAutoFilterFn:{fn:()=>Ja()},table_getGlobalFilterFn:{fn:()=>Ya(e)},table_setGlobalFilter:{fn:t=>Xa(e,t)},table_resetGlobalFilter:{fn:t=>Za(e,t)}})}};function $a(){return M()}function eo(e){e.atoms.expanded&&(e.options.autoResetAll??e.options.autoResetExpanded??!e.options.manualExpanding)&&e._reactivity.schedule(()=>ro(e))}function to(e,t){e.options.onExpandedChange?.(t)}function no(e,t){let n=e.atoms.expanded?.get()??{};if(t??!so(e)){if(n===!0||!io(e))return;to(e,!0)}else{if(n!==!0&&!Object.keys(n).length)return;to(e,M())}}function ro(e,t){let n=e.initialState.expanded;F(e,`expanded`,t?M():n===!0||Object.assign(M(),j(n??{})))}function io(e){return e.getPrePaginatedRowModel().flatRows.some(e=>po(e))}function ao(e){return t=>{no(e)}}function oo(e){let t=e.atoms.expanded?.get()??{};return t===!0||Object.values(t).some(Boolean)}function so(e){let t=e.atoms.expanded?.get()??{};if(t===!0)return!0;if(!Object.keys(t).length)return!1;let n=e.getRowModel().flatRows.filter(e=>po(e));return!(!n.length||n.some(e=>!uo(e)))}function co(e){let t=0,n=e.atoms.expanded?.get();return(n===!0?Object.values(e.getRowModel().rowsById).filter(e=>po(e)).map(e=>e.id):Object.keys(n??{})).forEach(e=>{let n=e.split(`.`);t=Math.max(t,n.length)}),t}function lo(e,t){let n=e.table.atoms.expanded?.get()??{},r=n===!0||fo(n,e.id),i=t??!r;i!==r&&(!i||po(e))&&to(e.table,t=>{let n=t===!0||fo(t,e.id),r=M();if(t===!0?Object.values(e.table.getRowModel().rowsById).forEach(e=>{po(e)&&(r[e.id]=!0)}):r=Object.assign(M(),t),!n&&i)return r[e.id]=!0,r;if(n&&!i){let t=M(),n=Object.keys(r);for(let i=0;i<n.length;i++){let a=n[i];a!==e.id&&r[a]&&(t[a]=!0)}return t}return t})}function uo(e){let t=e.table.atoms.expanded?.get()??{};return!!(e.table.options.getIsRowExpanded?.(e)??(t===!0||fo(t,e.id)))}function fo(e,t){return!!(e&&e!==!0&&N(e,t)&&e[t])}function po(e){return e.table.options.getRowCanExpand?.(e)??((e.table.options.enableExpanding??!0)&&!!e.subRows.length)}function mo(e){let t=!0,n=e;for(;t&&n.parentId;)n=e.table.getRow(n.parentId,!0),t=uo(n);return t}function ho(e){let t=po(e);return()=>{t&&lo(e)}}function go(){return e=>{let t=e;return I({feature:`rowExpandingFeature`,table:t,fnName:`table.getExpandedRowModel`,memoDeps:()=>[t.atoms.expanded?.get(),t.getPreExpandedRowModel(),t.options.paginateExpandedRows,t.options.manualPagination],fn:()=>_o(t)})}}function _o(e){let t=e.getPreExpandedRowModel(),n=e.atoms.expanded?.get();return!t.rows.length||n!==!0&&!Object.keys(n??{}).length||!e.options.paginateExpandedRows&&!e.options.manualPagination?t:vo(t)}function vo(e){let t=[],n=e=>{t.push(e),e.subRows.length&&uo(e)&&e.subRows.forEach(n)};return e.rows.forEach(n),{rows:t,flatRows:e.flatRows,rowsById:e.rowsById}}var yo={getInitialState:e=>({expanded:$a(),...e}),getDefaultTableOptions:e=>({onExpandedChange:P(`expanded`,e),paginateExpandedRows:!0}),assignRowPrototype:(e,t)=>{R(`rowExpandingFeature`,e,t,{row_toggleExpanded:{fn:(e,t)=>lo(e,t)},row_getIsExpanded:{fn:e=>uo(e)},row_getCanExpand:{fn:e=>po(e)},row_getIsAllParentsExpanded:{fn:e=>mo(e)},row_getToggleExpandedHandler:{fn:e=>ho(e)}})},constructTableAPIs:e=>{L(`rowExpandingFeature`,e,{table_autoResetExpanded:{fn:()=>eo(e)},table_setExpanded:{fn:t=>to(e,t)},table_toggleAllRowsExpanded:{fn:t=>no(e,t)},table_resetExpanded:{fn:t=>ro(e,t)},table_getCanSomeRowsExpand:{fn:()=>io(e)},table_getToggleAllRowsExpandedHandler:{fn:()=>ao(e)},table_getIsSomeRowsExpanded:{fn:()=>oo(e)},table_getIsAllRowsExpanded:{fn:()=>so(e)},table_getExpandedDepth:{fn:()=>co(e)},table__expandRows:{fn:vo}})}},bo=0,xo=10;function So(){return{pageIndex:bo,pageSize:xo}}function Co(e){if(e.options.autoResetAll??e.options.autoResetPageIndex??!e.options.manualPagination){if((e.atoms.pagination?.get()?.pageIndex??bo)===bo)return;Do(e,!0)}}function wo(e,t){F(e,`pagination`,t)}function To(e,t){wo(e,t?So():j(e.initialState.pagination??So()))}function Eo(e,t){wo(e,n=>{let r=qt(t,n.pageIndex),i=e.options.pageCount===void 0||e.options.pageCount===-1?2**53-1:e.options.pageCount-1;return r=Math.max(0,Math.min(r,i)),{...n,pageIndex:r}})}function Do(e,t){Eo(e,t?bo:e.initialState.pagination?.pageIndex??bo)}function Oo(e,t){ko(e,t?xo:e.initialState.pagination?.pageSize??xo)}function ko(e,t){wo(e,e=>{let n=Math.max(1,qt(t,e.pageSize)),r=e.pageSize===1/0?0:e.pageSize*e.pageIndex,i=n===1/0?0:Math.floor(r/n);return{...e,pageIndex:i,pageSize:n}})}function Ao(e){let t=Ro(e),n=[];return t&&t>0&&(n=[...Array(t)].fill(null).map((e,t)=>t)),n}function jo(e){return(e.atoms.pagination?.get()?.pageIndex??0)>0}function Mo(e){let t=e.atoms.pagination?.get()?.pageIndex??bo,n=Ro(e);return n===-1||n!==0&&t<n-1}function No(e){let t=e.atoms.pagination?.get()?.pageIndex??bo,n=Ro(e);return Number.isFinite(n)&&n>0&&t<n-1}function Po(e){return Eo(e,e=>e-1)}function Fo(e){return Eo(e,e=>e+1)}function Io(e){return Eo(e,0)}function Lo(e){let t=Ro(e);if(!(!Number.isFinite(t)||t<=0))return Eo(e,t-1)}function Ro(e){let t=e.options.pageCount;if(t!=null)return t;let n=zo(e),r=e.atoms.pagination?.get()?.pageSize??xo;return r===1/0&&Number.isFinite(n)&&n>0?1:Math.ceil(n/r)}function zo(e){return e.options.rowCount??e.getPrePaginatedRowModel().rows.length}var Bo={getInitialState:e=>({...e,pagination:{...So(),...e.pagination}}),getDefaultTableOptions:e=>({onPaginationChange:P(`pagination`,e)}),constructTableAPIs:e=>{L(`rowPaginationFeature`,e,{table_autoResetPageIndex:{fn:()=>Co(e)},table_setPagination:{fn:t=>wo(e,t)},table_resetPagination:{fn:t=>To(e,t)},table_setPageIndex:{fn:t=>Eo(e,t)},table_resetPageIndex:{fn:t=>Do(e,t)},table_setPageSize:{fn:t=>ko(e,t)},table_getPageCount:{fn:()=>Ro(e)},table_resetPageSize:{fn:t=>Oo(e,t)},table_getPageOptions:{fn:()=>Ao(e)},table_getCanPreviousPage:{fn:()=>jo(e)},table_getCanNextPage:{fn:()=>Mo(e)},table_getCanLastPage:{fn:()=>No(e)},table_previousPage:{fn:()=>Po(e)},table_nextPage:{fn:()=>Fo(e)},table_firstPage:{fn:()=>Io(e)},table_lastPage:{fn:()=>Lo(e)},table_getRowCount:{fn:()=>zo(e)}})}};function Vo(){return M()}function Ho(e,t){e.options.onRowSelectionChange?.(t)}function Uo(e,t){e._lastSelectedRowId=null,Ho(e,t?M():Object.assign(M(),j(e.initialState.rowSelection??{})))}function Wo(e,t,n){e._lastSelectedRowId=null,Ho(e,r=>{if(t=t===void 0?!z(e,`getIsAllRowsSelected`,Zo):t,n?.deselectAll&&!t)return M();let i=Object.assign(M(),r),a=e.getPreGroupedRowModel().flatRows;if(t){let e=new Map;a.forEach(t=>{fs(t,e)&&(i[t.id]=!0)})}else a.forEach(e=>{K(e)&&delete i[e.id]});return i})}function Go(e,t,n){e._lastSelectedRowId=null,Ho(e,r=>{let i=t===void 0?!z(e,`getIsAllPageRowsSelected`,Qo):t;if(n?.deselectAll&&!i)return M();let a=Object.assign(M(),r);return e.getRowModel().rows.forEach(t=>{ds(a,t.id,i,!0,e,!0)}),a})}function Ko(e){return e.getCoreRowModel()}function qo(e){let t=e.getCoreRowModel();return z(e,`getIsSomeRowsSelected`,$o)?hs(t,e):{rows:[],flatRows:[],rowsById:M()}}function Jo(e){let t=e.getFilteredRowModel();return z(e,`getIsSomeRowsSelected`,$o)?hs(t,e):{rows:[],flatRows:[],rowsById:M()}}function Yo(e){let t=e.getSortedRowModel();return z(e,`getIsSomeRowsSelected`,$o)?hs(t,e):{rows:[],flatRows:[],rowsById:M()}}function Xo(e){return Object.keys(e.atoms.rowSelection?.get()??{})}function Zo(e){let t=e.getFilteredRowModel().flatRows,n=e.atoms.rowSelection?.get()??{},r=!!(t.length&&Object.keys(n).length);if(r){let e=new Map;t.some(t=>!gs(t,n)&&fs(t,e))&&(r=!1)}return r}function Qo(e){let t=e.getPaginatedRowModel().flatRows,n=e.atoms.rowSelection?.get()??{},r=new Map,i=!1;for(let e=0;e<t.length;e++){let a=t[e];if(gs(a,n))!i&&fs(a,r)&&(i=!0);else if(fs(a,r))return!1}return i}function $o(e){return z(e,`getSelectedRowIds`,Xo).length>0}function es(e){return e.getPaginatedRowModel().flatRows.filter(e=>K(e)).some(e=>is(e)||z(e,`getIsSomeSelected`,as))}function ts(e){return t=>{Wo(e,t.target.checked)}}function ns(e){return t=>{Go(e,t.target.checked)}}function rs(e,t,n){let r=is(e);Ho(e.table,i=>{t=t===void 0?!r:t;let a=Object.assign(M(),i);return ds(a,e.id,t,(n?.selectChildren??!0)&&cs(e),e.table),!t&&n?.deselectParents&&ps(a,e),a})}function is(e){return gs(e,e.table.atoms.rowSelection?.get()??{})}function as(e){return _s(e)===`some`}function os(e){return _s(e)===`all`}function K(e){let t=e.table.options;return typeof t.enableRowSelection==`function`?t.enableRowSelection(e):t.enableRowSelection??!0}function ss(e){let t=e.table.options;return typeof t.enableSubRowSelection==`function`?t.enableSubRowSelection(e):t.enableSubRowSelection??!0}function cs(e){let t=e.table.options;return typeof t.enableMultiRowSelection==`function`?t.enableMultiRowSelection(e):t.enableMultiRowSelection??!0}function ls(e,t){let n=K(e);return r=>{if(!n)return;let i=r,a=e.table,o=i.target.checked,s=a._lastSelectedRowId;a.options.enableRowRangeSelection!==!1&&s!==null&&cs(e)&&(a.options.isRowRangeSelectionEvent?.(r)??!1)&&us(e,s,o,t)||rs(e,o,t),a._lastSelectedRowId=e.id}}function us(e,t,n,r){let i=r?.selectChildren??!0,a=e.table,o=a.getRowsInDisplayOrder(),s=a.getPrePaginatedRowModel().rowsById[t]??a.getCoreRowModel().rowsById[t];if(!s)return!1;let c=s.getDisplayIndex(),l=e.getDisplayIndex(),u=o[c],d=o[l];if(c<0||l<0||c>=o.length||l>=o.length||u?.id!==s.id||d?.id!==e.id||!cs(s)||!cs(e))return!1;let f=Math.min(c,l),p=Math.max(c,l);return Ho(a,e=>{let t=Object.assign(M(),e);for(let e=f;e<=p;e++){let s=o[e];K(s)&&cs(s)&&(ds(t,s.id,n,i,a),!n&&r?.deselectParents&&ps(t,s))}return t}),!0}function ds(e,t,n,r,i,a){let o=i.getRow(t,!0);n?(cs(o)||Object.keys(e).forEach(t=>delete e[t]),K(o)&&(e[t]=!0)):(!a||K(o))&&delete e[t],r&&o.subRows.length&&ss(o)&&o.subRows.forEach(t=>ds(e,t.id,n,r,i,a))}function fs(e,t){if(!K(e))return!1;let n=e.table;if(n.options.enableSubRowSelection===!0)return!0;let r=e.parentId;if(r===void 0)return!0;let i=t.get(r);if(i!==void 0)return i;let a=n.getCoreRowModel().rowsById,o=[],s=!0,c=r;for(;c!==void 0;){let e=t.get(c);if(e!==void 0){s=e;break}o.push(c);let r=a[c]??n.getRow(c,!0);if(!ss(r)){s=!1;break}c=r.parentId}return o.forEach(e=>t.set(e,s)),s}function ps(e,t){let n=t.table.getCoreRowModel().rowsById,r=t.parentId;for(;r!==void 0;)delete e[r],r=(n[r]??t.table.getRow(r,!0)).parentId}function ms(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=gs(o,t);if(s&&(n.push(o),r[o.id]=o),o.subRows.length){let e=ms(o.subRows,t,n,r);if(s){let t=Object.create(Object.getPrototypeOf(o));Jt(t,o),t.subRows=e,i.push(t)}}else s&&i.push(o)}return i}function hs(e,t){let n=[],r=M(),i=t.atoms.rowSelection?.get()??{};return{rows:ms(e.rows,i,n,r),flatRows:n,rowsById:r}}function gs(e,t){return!!(N(t,e.id)&&t[e.id])}function _s(e){if(!e.subRows.length)return!1;let t=e.table.atoms.rowSelection?.get()??{},n=!1,r=!0,i=!1;for(let a=0;a<e.subRows.length;a++){let o=e.subRows[a];if(n&&!r)break;if(K(o)&&(i=!0,gs(o,t)?n=!0:r=!1),o.subRows.length){let e=_s(o);e===`all`?(n=!0,i=!0):e===`some`?(n=!0,r=!1,i=!0):r=!1}}return i?r?`all`:n?`some`:!1:!1}var vs={initTableInstanceData:e=>{e._lastSelectedRowId=null},resetTableInstanceData:e=>{e._lastSelectedRowId=null},getInitialState:e=>({rowSelection:Vo(),...e}),getDefaultTableOptions:e=>({onRowSelectionChange:P(`rowSelection`,e),enableRowSelection:!0,enableMultiRowSelection:!0,enableRowRangeSelection:!0,enableSubRowSelection:!0,isRowRangeSelectionEvent:e=>{let t=e;return!!(t.shiftKey||t.nativeEvent?.shiftKey)}}),assignRowPrototype:(e,t)=>{R(`rowSelectionFeature`,e,t,{row_toggleSelected:{fn:(e,t,n)=>rs(e,t,n)},row_getIsSelected:{fn:e=>is(e)},row_getIsSomeSelected:{fn:e=>as(e),memoDeps:e=>[e.subRows,e.table.atoms.rowSelection?.get(),e.table.options.enableRowSelection]},row_getIsAllSubRowsSelected:{fn:e=>os(e),memoDeps:e=>[e.subRows,e.table.atoms.rowSelection?.get(),e.table.options.enableRowSelection]},row_getCanSelect:{fn:e=>K(e)},row_getCanSelectSubRows:{fn:e=>ss(e)},row_getCanMultiSelect:{fn:e=>cs(e)},row_getToggleSelectedHandler:{fn:(e,t)=>ls(e,t)}})},constructTableAPIs:e=>{L(`rowSelectionFeature`,e,{table_setRowSelection:{fn:t=>Ho(e,t)},table_resetRowSelection:{fn:t=>Uo(e,t)},table_toggleAllRowsSelected:{fn:(t,n)=>Wo(e,t,n)},table_toggleAllPageRowsSelected:{fn:(t,n)=>Go(e,t,n)},table_getPreSelectedRowModel:{fn:()=>Ko(e)},table_getSelectedRowModel:{fn:()=>qo(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getCoreRowModel()]},table_getFilteredSelectedRowModel:{fn:()=>Jo(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getFilteredRowModel()]},table_getGroupedSelectedRowModel:{fn:()=>Yo(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getSortedRowModel()]},table_getSelectedRowIds:{fn:()=>Xo(e),memoDeps:()=>[e.atoms.rowSelection?.get()]},table_getIsAllRowsSelected:{fn:()=>Zo(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getFilteredRowModel(),e.options.enableRowSelection,e.options.enableSubRowSelection]},table_getIsAllPageRowsSelected:{fn:()=>Qo(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getPaginatedRowModel(),e.options.enableRowSelection,e.options.enableSubRowSelection]},table_getIsSomeRowsSelected:{fn:()=>$o(e),memoDeps:()=>[e.atoms.rowSelection?.get()]},table_getIsSomePageRowsSelected:{fn:()=>es(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getPaginatedRowModel(),e.options.enableRowSelection]},table_getToggleAllRowsSelectedHandler:{fn:()=>ts(e)},table_getToggleAllPageRowsSelectedHandler:{fn:()=>ns(e)}})}},ys=/([0-9]+)/gm;function bs(e){let t=Object.assign((e,n,r)=>{let i=e.getValue(r),a=n.getValue(r),o=t.resolveDataValue;return o&&(i=o(i),a=o(a)),t.sort(i,a,e,n,r)},e);return t}var xs=bs({resolveDataValue:e=>Es(e).toLowerCase(),sort:(e,t)=>Ds(e,t)}),Ss=bs({resolveDataValue:e=>Ts(e),sort:(e,t)=>e>t?1:e<t?-1:0}),Cs=bs({sort:(e,t)=>ws(e,t)});function ws(e,t){return e===t?0:e>t?1:-1}function Ts(e){return e instanceof Date?e.getTime():e}function Es(e){return typeof e==`number`?isNaN(e)||e===1/0||e===-1/0?``:String(e):typeof e==`string`?e:``}function Ds(e,t){let n=0,r=0,i=e.length,a=t.length;for(;n<i&&r<a;){let i=Os(e.charCodeAt(n)),a=Os(t.charCodeAt(r)),o=ks(e,n,i),s=ks(t,r,a);if(!i&&!a){let i=As(e,n,o,t,r,s);if(i)return i;n=o,r=s;continue}if(i!==a)return i?1:-1;let c=js(e,n,o,t,r,s);if(c)return c;n=o,r=s}return Ns(e,n)-Ns(t,r)}function Os(e){return e>=48&&e<=57}function ks(e,t,n){let r=t+1;for(;r<e.length&&Os(e.charCodeAt(r))===n;)r++;return r}function As(e,t,n,r,i,a){let o=n-t,s=a-i,c=o<s?o:s;for(let n=0;n<c;n++){let a=e.charCodeAt(t+n),o=r.charCodeAt(i+n);if(a>o)return 1;if(o>a)return-1}return o>s?1:s>o?-1:0}function js(e,t,n,r,i,a){let o=t;for(;o<n&&e.charCodeAt(o)===48;)o++;let s=i;for(;s<a&&r.charCodeAt(s)===48;)s++;let c=n-o,l=a-s;if(c===0&&l===0)return 0;if(c<=15&&l<=15){let t=Ms(e,o,n),i=Ms(r,s,a);return t>i?1:i>t?-1:0}let u=parseInt(e.slice(t,n),10),d=parseInt(r.slice(i,a),10);return u>d?1:d>u?-1:0}function Ms(e,t,n){let r=0;for(let i=t;i<n;i++)r=r*10+e.charCodeAt(i)-48;return r}function Ns(e,t){let n=0,r=t;for(;r<e.length;)n++,r=ks(e,r,Os(e.charCodeAt(r)));return n}function Ps(){return[]}function Fs(e,t){F(e,`sorting`,t)}function Is(e,t){Fs(e,t?[]:j(e.initialState.sorting??[]))}function Ls(e){e.atoms.sorting&&(e.options.autoResetAll??e.options.autoResetSorting??!1)&&Is(e)}function Rs(e){let t=e.table._rowModelFns.sortFns,n=e.table.getFilteredRowModel().flatRows.slice(0,10),r,i=!1;for(let t=0;t<n.length;t++){let a=n[t].getValue(e.id);if(Object.prototype.toString.call(a)===`[object Date]`){r=`datetime`;break}if(typeof a==`string`&&(i=!0,a.split(ys).length>1)){r=`alphanumeric`;break}}if(!r&&i&&(r=`text`),r){let e=t?.[r];if(e||r===`alphanumeric`&&(e=t?.text),e)return e}return Cs}function zs(e){let t=e.table.getFilteredRowModel().flatRows.slice(0,10);for(let n=0;n<t.length;n++){let r=t[n].getValue(e.id);if(r!=null)return typeof r==`string`?`asc`:`desc`}return`desc`}function Bs(e){let t=e.table._rowModelFns.sortFns;return en(e.columnDef.sortFn)?e.columnDef.sortFn:e.columnDef.sortFn===`auto`?Rs(e):t?.[e.columnDef.sortFn]??Cs}function Vs(e,t,n){let r=Us(e,n&&Gs(e)),i=t!==void 0;Fs(e.table,a=>{let o=a.findIndex(t=>t.id===e.id),s=o===-1?void 0:a[o],c=[],l,u=i?t:r===`desc`,d=!!(a.length&&Gs(e)&&n);return l=d?s?`toggle`:`add`:s?`toggle`:`replace`,l===`toggle`&&(i||r||(l=`remove`)),l===`add`?(c=[...a,{id:e.id,desc:u}],c.splice(0,c.length-(e.table.options.maxMultiSortColCount??2**53-1))):c=l===`toggle`?d?a.map(t=>t.id===e.id?{...t,desc:u}:t):[{id:e.id,desc:u}]:l===`remove`?d?a.filter(t=>t.id!==e.id):[]:[{id:e.id,desc:u}],c})}function Hs(e){return e.columnDef.sortDescFirst??e.table.options.sortDescFirst??zs(e)===`desc`?`desc`:`asc`}function Us(e,t){let n=Hs(e),r=Ks(e);return r?r!==n&&(e.table.options.enableSortingRemoval??!0)&&(!t||(e.table.options.enableMultiRemove??!0))?!1:r===`desc`?`asc`:`desc`:n}function Ws(e){return(e.columnDef.enableSorting??!0)&&(e.table.options.enableSorting??!0)&&!!e.accessorFn}function Gs(e){return e.columnDef.enableMultiSort??e.table.options.enableMultiSort??!!e.accessorFn}function Ks(e){let t=e.table.atoms.sorting?.get()?.find(t=>t.id===e.id);return t?t.desc?`desc`:`asc`:!1}function qs(e){return e.table.atoms.sorting?.get()?.findIndex(t=>t.id===e.id)??-1}function Js(e){Fs(e.table,t=>t.length?t.filter(t=>t.id!==e.id):[])}function Ys(e){let t=Ws(e);return n=>{t&&Vs(e,void 0,Gs(e)?e.table.options.isMultiSortEvent?.(n):!1)}}var Xs={getInitialState(e){return{sorting:Ps(),...e}},getDefaultColumnDef(){return{sortFn:`auto`,sortUndefined:1}},getDefaultTableOptions(e){return{autoResetSorting:!1,onSortingChange:P(`sorting`,e),isMultiSortEvent:e=>e.shiftKey}},assignColumnPrototype(e,t){R(`rowSortingFeature`,e,t,{column_getAutoSortFn:{fn:e=>Rs(e)},column_getAutoSortDir:{fn:e=>zs(e)},column_getSortFn:{fn:e=>Bs(e)},column_toggleSorting:{fn:(e,t,n)=>Vs(e,t,n)},column_getFirstSortDir:{fn:e=>Hs(e)},column_getNextSortingOrder:{fn:(e,t)=>Us(e,t)},column_getCanSort:{fn:e=>Ws(e)},column_getCanMultiSort:{fn:e=>Gs(e)},column_getIsSorted:{fn:e=>Ks(e)},column_getSortIndex:{fn:e=>qs(e)},column_clearSorting:{fn:e=>Js(e)},column_getToggleSortingHandler:{fn:e=>Ys(e)}})},constructTableAPIs(e){L(`rowSortingFeature`,e,{table_autoResetSorting:{fn:()=>Ls(e)},table_setSorting:{fn:t=>Fs(e,t)},table_resetSorting:{fn:t=>Is(e,t)}})}};function Zs(e){return e}function Qs(e){return typeof e==`number`}var $s=Zs({aggregate:e=>{let t=e.rows,n=0;for(let r=0;r<t.length;r++){let i=e.getValue(t[r]);n+=typeof i==`number`?i:0}return n},merge:({subRowResults:e})=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n];Qs(r)&&(t+=r)}return t}}),ec=Zs({aggregate:e=>{let t=e.rows,n=0,r=0;for(let i=0;i<t.length;i++){let a=e.getValue(t[i]);if(a==null)continue;let o=typeof a==`number`?a:+a;Number.isNaN(o)||(n++,r+=o)}return n?r/n:void 0}}),tc=Zs({aggregate:({rows:e})=>e.length,merge:({subRowResults:e})=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n];Qs(r)&&(t+=r)}return t}});function nc(e,t,n){return n.options.filterFromLeafRows?rc(e,t,n):ic(e,t,n)}function rc(e,t,n){let r=[],i=M(),a=n.options.maxLeafRowFilterDepth??100,o=(e,r=0)=>{let i=[];for(let s of e){let e=$n(n,s.id,s.original,s.index,s.depth,void 0,s.parentId);e.columnFilters=s.columnFilters,e.columnFiltersMeta=s.columnFiltersMeta,s.subRows.length&&r<a?(e.subRows=o(s.subRows,r+1),(e.subRows.length||t(e))&&i.push(e)):t(e)&&(e.subRows=s.subRows,i.push(e))}return i},s=o(e);return ac(s,r,i),{rows:s,flatRows:r,rowsById:i}}function ic(e,t,n){let r=[],i=M(),a=n.options.maxLeafRowFilterDepth??100,o=(e,s=0)=>{let c=[];for(let l of e)if(t(l)){if(l.subRows.length&&s<a){let e=$n(n,l.id,l.original,l.index,l.depth,void 0,l.parentId),t=l;e.columnFilters=t.columnFilters,e.columnFiltersMeta=t.columnFiltersMeta,c.push(e),r.push(e),i[e.id]=e,e.subRows=o(l.subRows,s+1)}else c.push(l),r.push(l),i[l.id]=l,l.subRows.length&&s>=a&&ac(l.subRows,r,i)}return c};return{rows:o(e),flatRows:r,rowsById:i}}function ac(e,t,n){for(let r of e)t.push(r),n[r.id]=r,r.subRows.length&&ac(r.subRows,t,n)}function oc(){return e=>{let t=e;return I({feature:`columnFilteringFeature`,table:t,fnName:`table.getFilteredRowModel`,memoDeps:()=>[t.getPreFilteredRowModel(),t.atoms.columnFilters?.get(),t.atoms.globalFilter?.get()],fn:()=>sc(t),onAfterUpdate:rn(()=>bn(t))})}}function sc(e){let t=e.getPreFilteredRowModel(),n=e.atoms.columnFilters?.get(),r=e.atoms.globalFilter?.get(),i=r!=null&&r!==``;if(!t.rows.length||!n?.length&&!i){let e=t.flatRows;for(let t=0;t<e.length;t++){let n=e[t];n.columnFilters=M(),n.columnFiltersMeta=M()}return t}let a=[],o=[];n?.forEach(t=>{let n=Nn(e,t.id);if(!n)return;let r=si(n);r&&a.push({id:t.id,filterFn:r,resolvedValue:r.resolveFilterValue?.(t.value)??t.value})});let s=n?.map(e=>e.id)??[];if(i){let t=gn(e),n=t?e.getAllLeafColumns().filter(_n):[];t&&n.length&&(s.push(`__global__`),n.forEach(e=>{o.push({id:e.id,filterFn:t,resolvedValue:t.resolveFilterValue?.(r)??r})}))}let c=t.flatRows;for(let e=0;e<c.length;e++){let t=c[e];if(t.columnFilters=M(),t.columnFiltersMeta=M(),a.length)for(let e=0;e<a.length;e++){let n=a[e],r=n.id;t.columnFilters[r]=n.filterFn(t,r,n.resolvedValue,e=>{t.columnFiltersMeta||=M(),t.columnFiltersMeta[r]=e})}if(o.length){for(let e=0;e<o.length;e++){let n=o[e],r=n.id;if(n.filterFn(t,r,n.resolvedValue,e=>{t.columnFiltersMeta||=M(),t.columnFiltersMeta[r]=e})){t.columnFilters.__global__=!0;break}}t.columnFilters.__global__!==!0&&(t.columnFilters.__global__=!1)}}return nc(t.rows,e=>{for(let t=0;t<s.length;t++)if(e.columnFilters[s[t]]===!1)return!1;return!0},e)}function cc(){return e=>{let t=e,n=!1,r,i;return I({feature:`columnGroupingFeature`,table:t,fnName:`table.getGroupedRowModel`,memoDeps:()=>[t.atoms.grouping?.get(),t.getPreGroupedRowModel(),t.options.columns],fn:()=>lc(t),onAfterUpdate:()=>{let e=t.atoms.grouping?.get(),a=t.getPreGroupedRowModel(),o=n&&(e!==r||a!==i);r=e,i=a,n=!0,o&&(yn(t),bn(t))}})}}function lc(e){let t=e.getPreGroupedRowModel(),n=e.atoms.grouping?.get();if(!t.rows.length||!n?.length)return uc(t.rows,0,void 0),t;let r=n.filter(t=>Nn(e,t)),i=[],a=M(),o=(t,n=0,s)=>{if(n>=r.length)return t.map(e=>(e.depth=n,i.push(e),a[e.id]=e,e.subRows.length&&(e.subRows=o(e.subRows,n+1,e.id)),e));let c=r[n],l=dc(e,t,c);return Array.from(l.entries()).map(([t,l],u)=>{let d=`${c}:${t}`;d=s?`${s}>${d}`:d;let f=i.length;i.push(void 0);let p=o(l,n+1,d);p.forEach(e=>{e.parentId=d});let m=Jr(l,1/0),h=$n(e,d,m[0].original,u,n,void 0,s);return Object.assign(h,{groupingColumnId:c,groupingValue:t,subRows:p,leafRows:m,getValue:t=>{let i=r.indexOf(t);if(i!==-1&&i<=n)return N(h._valuesCache,t)||l[0]&&(h._valuesCache[t]=l[0].getValue(t)??void 0),h._valuesCache[t];let a=h._aggregationValuesCache;if(a&&N(a,t))return a[t];let o=Cn(e),s=e.getColumn(t);if(!o||typeof s.getAggregationFns!=`function`)return;let c=h._aggregationValuesCache??=M();return c[t]=o({subRows:p,column:s,groupingRow:h,rows:l,uniqueRows:!0}),c[t]}}),i[f]=h,a[d]=h,h})};return{rows:o(t.rows,0),flatRows:i,rowsById:a}}function uc(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.depth=t,i.parentId=n,i.subRows.length&&uc(i.subRows,t+1,i.id)}}function dc(e,t,n){let r=new Map,i=Nn(e,n)?.columnDef.getGroupingValue;for(let e=0;e<t.length;e++){let a=t[e],o;if(i){let e=a._groupingValuesCache;e&&N(e,n)?o=e[n]:e&&(o=e[n]=i(a.original,a.index,a))}else o=a.getValue(n);let s=`${o}`,c=r.get(s);c?c.push(a):r.set(s,[a])}return r}function fc(){return e=>{let t=e;return I({feature:`rowPaginationFeature`,table:t,fnName:`table.getPaginatedRowModel`,memoDeps:()=>[t.getPrePaginatedRowModel(),t.atoms.pagination?.get(),t.options.paginateExpandedRows?void 0:t.atoms.expanded?.get()],fn:()=>pc(t)})}}function pc(e){let t=e.getPrePaginatedRowModel(),n=e.atoms.pagination?.get();if(!t.rows.length)return t;let{pageSize:r,pageIndex:i}=n??So(),{rows:a,flatRows:o,rowsById:s}=t,c=a;if(r!==1/0||i!==0){let e=r*i,t=e+r;c=a.slice(e,t)}let l;l=e.options.paginateExpandedRows?{rows:c,flatRows:o,rowsById:s}:vn(e,{rows:c,flatRows:o,rowsById:s}),l.flatRows=[];let u=new Set,d=e=>{u.has(e.id)||(u.add(e.id),l.flatRows.push(e),e.subRows.length&&e.subRows.forEach(d))};return l.rows.forEach(d),l}function mc(){return e=>{let t=e;return I({feature:`rowSortingFeature`,table:t,fnName:`table.getSortedRowModel`,memoDeps:()=>[t.atoms.sorting?.get(),t.getPreSortedRowModel()],fn:()=>hc(t),onAfterUpdate:rn(()=>bn(t))})}}function hc(e){let t=e.getPreSortedRowModel(),n=e.atoms.sorting?.get();if(!t.rows.length||!n?.length)return t;let r=[],i=n.filter(t=>{let n=e.getColumn(t.id);return n?Ws(n):!1});if(!i.length)return t;let a=[];for(let t=0;t<i.length;t++){let n=i[t],r=e.getColumn(n.id);r&&a.push({id:n.id,desc:n.desc,sortUndefined:r.columnDef.sortUndefined,invertSorting:r.columnDef.invertSorting,sortFn:Bs(r)})}let o=(e,t)=>{for(let n=0;n<a.length;n++){let r=a[n],i=r.sortUndefined,o=r.desc,s=0;if(i){let n=e.getValue(r.id),a=t.getValue(r.id),o=n===void 0,c=a===void 0;if(o&&c)continue;if(o||c){if(i===`first`)return o?-1:1;if(i===`last`)return o?1:-1;s=o?i:-i}}if(s===0&&(s=r.sortFn(e,t,r.id)),s!==0)return o&&(s*=-1),r.invertSorting&&(s*=-1),s}return e.index-t.index},s=e=>{let t=e.slice();t.sort(o);let n=!1;for(let i=0;i<t.length;i++){let a=t[i];a!==e[i]&&(n=!0);let o=r.length;if(r.push(a),a.subRows.length){let e=s(a.subRows);if(e.changed){let s=Object.create(Object.getPrototypeOf(a));Jt(s,a),s.subRows=e.rows,t[i]=s,r[o]=s,n=!0}}}return{rows:t,changed:n}};return{rows:s(t.rows).rows,flatRows:r,rowsById:t.rowsById}}var gc=typeof window>`u`?C.useEffect:C.useLayoutEffect;function q(e,t){let[{table:n,rootSource:r}]=(0,C.useState)(()=>{let t=Vr({...e,features:{coreReactivityFeature:Kt(),...e.features}});return t.Subscribe=(e=>Ht({...e,source:e.source??t.store})),t.FlexRender=yt,{table:t,rootSource:Gt(t.store,Lt)}}),i=n;Ir(i,t=>({...t,...e}),{syncExternalState:!1});let a=i.options.state,o=r.get(),s=Vt(r,t,{compare:Lt});return gc(()=>{r.markCommitted(o),Nr(i,a??null,Lt)}),(0,C.useMemo)(()=>({...n,options:e,state:s}),[n,e,s])}function J({table:e,numeric:t=[],tree:n=!1,paging:i=!0}){let a=new Set(t);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`overflow-x-auto rounded-md border`,children:(0,w.jsxs)(ue,{children:[(0,w.jsx)(fe,{children:e.getHeaderGroups().map(t=>(0,w.jsx)(be,{children:t.headers.map(t=>{let n=t.column.getIsSorted();return(0,w.jsx)(de,{colSpan:t.colSpan,style:{width:t.getSize()},className:r(a.has(t.column.id)&&`text-right`),children:t.isPlaceholder?null:t.column.getCanSort()?(0,w.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1 hover:text-foreground`,onClick:t.column.getToggleSortingHandler(),children:[(0,w.jsx)(e.FlexRender,{header:t}),n===`asc`?(0,w.jsx)(Pe,{className:`size-3.5`}):n===`desc`?(0,w.jsx)(Me,{className:`size-3.5`}):null]}):(0,w.jsx)(e.FlexRender,{header:t})},t.id)})},t.id))}),(0,w.jsx)(_e,{children:e.getRowModel().rows.map(t=>{let i=[...t.getStartVisibleCells(),...t.getCenterVisibleCells(),...t.getEndVisibleCells()],o=i.find(e=>e.column.id!==`select`)?.id;return(0,w.jsx)(be,{"data-state":t.getIsSelected()?`selected`:void 0,className:r((t.getIsGrouped()||n&&t.subRows.length>0)&&`bg-muted/40 font-medium`),children:i.map(i=>(0,w.jsx)(Te,{className:r(a.has(i.column.id)&&`text-right tabular-nums`),children:i.getIsGrouped()?(0,w.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1`,onClick:t.getToggleExpandedHandler(),children:[t.getIsExpanded()?(0,w.jsx)(d,{className:`size-4`}):(0,w.jsx)(c,{className:`size-4`}),(0,w.jsx)(e.FlexRender,{cell:i}),` (`,t.subRows.length,`)`]}):i.getIsPlaceholder()?null:n&&i.id===o?(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,style:{paddingLeft:t.depth*18},children:[t.getCanExpand()?(0,w.jsx)(`button`,{type:`button`,onClick:t.getToggleExpandedHandler(),"aria-label":`Toggle row`,children:t.getIsExpanded()?(0,w.jsx)(d,{className:`size-4`}):(0,w.jsx)(c,{className:`size-4`})}):(0,w.jsx)(`span`,{className:`w-4`}),(0,w.jsx)(e.FlexRender,{cell:i})]}):(0,w.jsx)(e.FlexRender,{cell:i})},i.id))},t.id)})})]})}),i&&(0,w.jsxs)(`div`,{className:`flex items-center justify-end gap-2 text-sm text-muted-foreground`,children:[(0,w.jsxs)(`span`,{children:[`Page `,e.state.pagination.pageIndex+1,` of `,Math.max(1,e.getPageCount())]}),(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:`Previous`}),(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:`Next`})]})]})}var Y=zr({columnVisibilityFeature:Ua,columnPinningFeature:ca,columnSizingFeature:Oa,columnFilteringFeature:gi,globalFilteringFeature:Qa,columnGroupingFeature:Ai,rowAggregationFeature:ii,rowSortingFeature:Xs,rowExpandingFeature:yo,rowSelectionFeature:vs,rowPaginationFeature:Bo,filteredRowModel:oc(),groupedRowModel:cc(),sortedRowModel:mc(),expandedRowModel:go(),paginatedRowModel:fc(),filterFns:{includesString:Ga},sortFns:{alphanumeric:xs,basic:Cs,datetime:Ss},aggregationFns:{sum:$s,mean:ec,count:tc},columnMeta:Rr()}),X=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}),Z=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),_c=t({default:()=>xc,meta:()=>vc}),vc={title:`Orders to Excel`,description:`An operations team sorts and groups the order book, tidies the columns, and exports it. The file opens the way the table looked, with live totals.`,docs:`grouped-rows-as-outlines.html`},yc=x(),Q=U(),bc=Q.columns([Q.accessor(`region`,{header:`Region`,size:150}),Q.accessor(`customer`,{header:`Customer`,size:180}),Q.accessor(`product`,{header:`Product`,size:140}),Q.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>e.getValue()?Z.format(e.getValue()):null,meta:{rowpine:{numFmt:`yyyy-mm-dd`}}}),Q.accessor(`quantity`,{header:`Qty`,aggregationFn:`sum`}),Q.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>X.format(e.getValue()),aggregatedCell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),Q.accessor(`status`,{header:`Status`})]);function xc(){let[e,t]=C.useState(null),n=C.useRef(null),r=q({features:Y,columns:bc,data:yc,initialState:{pagination:{pageIndex:0,pageSize:10}}}),i=C.useRef(r);i.current=r;let a=e=>()=>E(n.current,`button`,e),o=C.useMemo(()=>[{caption:`The order book in a TanStack table, styled with shadcn/ui: 120 orders, ten to a page.`,run:e=>e.point(()=>n.current?.querySelector(`table`))},{caption:`Sort by amount, largest first.`,run:async e=>{await e.click(()=>E(n.current,`th button`,`Amount`)),i.current.setSorting([{id:`amount`,desc:!0}])}},{caption:`Group by region. Each group shows its order count, units and total.`,run:async e=>{await e.click(a(`Group by region`)),i.current.setGrouping([`region`]),await D(),i.current.setExpanded(!0)}},{caption:`Hide Status and pin Customer to the left.`,run:async e=>{await e.click(a(`Hide status`)),i.current.setColumnVisibility({status:!1}),await e.click(a(`Pin customer`)),i.current.setColumnPinning({start:[`customer`],end:[]})}},{caption:`Export to Excel. Every order goes, not just this page: regions as outline rows, totals as SUBTOTAL formulas, Customer frozen, Status left out.`,run:async e=>{await e.click(()=>E(n.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D();let r=await l(i.current,{download:!1});t({blob:r,name:`orders.xlsx`,kind:`xlsx`,note:`click any cell to see its value or formula`})}}],[]),s=C.useCallback(()=>{let e=i.current;e.setSorting([]),e.setGrouping([]),e.setColumnVisibility({}),e.setColumnPinning({start:[],end:[]}),e.setPageIndex(0),t(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(lt,{steps:o,reset:s}),(0,w.jsx)(ot,{rootRef:n,preview:e,onClosePreview:()=>t(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>r.setGrouping(r.state.grouping.length?[]:[`region`]),children:`Group by region`}),(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>r.getColumn(`status`)?.toggleVisibility(),children:`Hide status`}),(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>r.getColumn(`customer`)?.pin(!r.getColumn(`customer`)?.getIsPinned()&&`start`),children:`Pin customer`}),(0,w.jsx)(b,{table:r,fileName:`orders`,pdfTitle:`Orders`,className:`ml-auto`})]}),(0,w.jsx)(J,{table:r,numeric:[`quantity`,`amount`]})]})})]})}var Sc=t({default:()=>kc,meta:()=>Cc}),Cc={title:`Month-end PDF`,description:`Finance turns the receivables table into the PDF that goes to the board: grouped by status, headline numbers on top, Letter landscape, marked DRAFT.`,docs:`pdf-title-kpis-watermark.html`},wc=x(),Tc=U(),Ec=Tc.columns([Tc.accessor(`status`,{header:`Status`,size:120}),Tc.accessor(`customer`,{header:`Customer`,size:190}),Tc.accessor(`product`,{header:`Product`}),Tc.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?Z.format(e.getValue()):null,meta:{rowpine:{format:e=>Z.format(e)}}}),Tc.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>X.format(e.getValue()),aggregatedCell:e=>X.format(e.getValue()),meta:{rowpine:{format:e=>X.format(e)}}})]),Dc=wc.reduce((e,t)=>e+t.amount,0),Oc=wc.filter(e=>e.status===`Overdue`);function kc(){let[e,t]=C.useState(null),[n,r]=C.useState(`A4`),[i,a]=C.useState(!1),[o,s]=C.useState(!1),c=C.useRef(null),l=q({features:Y,columns:Ec,data:wc,initialState:{pagination:{pageIndex:0,pageSize:10}}}),u=C.useRef({table:l,pageSize:n,landscape:i,extras:o});u.current={table:l,pageSize:n,landscape:i,extras:o};let d=async()=>{let{table:e,pageSize:t,landscape:n,extras:r}=u.current;return await y(e,{download:!1,title:`Receivables`,subtitle:`January to September 2026`,pageSize:t,pageOrientation:n?`landscape`:`portrait`,headerColor:`#1f3d2e`,...r?{kpis:[{label:`Invoiced`,value:X.format(Dc)},{label:`Overdue`,value:X.format(Oc.reduce((e,t)=>e+t.amount,0)),delta:`${Oc.length} orders`,color:`#b91c1c`}],watermark:`DRAFT`}:{}})},f=C.useMemo(()=>[{caption:`The receivables: 120 orders with their status and amount.`,run:e=>e.point(()=>c.current?.querySelector(`table`))},{caption:`Group by status. TanStack adds up each group, and the PDF prints those totals.`,run:async e=>{await e.click(()=>E(c.current,`button`,`Group by status`)),u.current.table.setGrouping([`status`]),await D(),u.current.table.setExpanded(!0)}},{caption:`Letter, landscape: the board prints on US paper.`,run:async e=>{await e.click(()=>c.current?.querySelector(`select`)),r(`LETTER`),await e.click(()=>c.current?.querySelector(`input[name="landscape"]`)),a(!0)}},{caption:`Add the headline numbers and a DRAFT watermark.`,run:async e=>{await e.click(()=>c.current?.querySelector(`input[name="extras"]`)),s(!0)}},{caption:`Create the PDF: title, headline numbers, groups with their totals, page numbers, the header row on every page.`,run:async e=>{await e.click(()=>E(c.current,`button`,`Create PDF`)),await D(),t({blob:await d(),name:`receivables.pdf`,kind:`pdf`})}}],[]),p=C.useCallback(()=>{u.current.table.setGrouping([]),u.current.table.setPageIndex(0),r(`A4`),a(!1),s(!1),t(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(lt,{steps:f,reset:p}),(0,w.jsx)(ot,{rootRef:c,preview:e,onClosePreview:()=>t(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-sm`,children:[(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>l.setGrouping(l.state.grouping.length?[]:[`status`]),children:`Group by status`}),(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Page`,(0,w.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),className:`h-8 rounded-md border bg-background px-2`,children:[`A4`,`LETTER`,`LEGAL`].map(e=>(0,w.jsx)(`option`,{children:e},e))})]}),(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`checkbox`,name:`landscape`,checked:i,onChange:e=>a(e.target.checked)}),`Landscape`]}),(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`checkbox`,name:`extras`,checked:o,onChange:e=>s(e.target.checked)}),`Headline numbers and watermark`]}),(0,w.jsxs)(S,{size:`sm`,className:`ml-auto`,onClick:async()=>t({blob:await d(),name:`receivables.pdf`,kind:`pdf`}),children:[(0,w.jsx)(m,{}),`Create PDF`]})]}),(0,w.jsx)(J,{table:l,numeric:[`amount`]})]})})]})}var Ac=t({default:()=>Fc,meta:()=>jc}),jc={title:`Budget by department`,description:`A controller reviews spend against budget across departments and teams, flags the overspend in red, and sends the tree to Excel and PDF with its levels intact.`,docs:`tree-data.html`},Mc=U(),Nc=e=>e.actual-e.budget;function Pc(e){let t=t=>e&&t>0?{fill:`#fee2e2`,color:`#991b1b`,bold:!0}:void 0;return Mc.columns([Mc.accessor(`name`,{header:`Unit`,size:230}),Mc.accessor(`lead`,{header:`Lead`,size:160}),Mc.accessor(`budget`,{header:`Budget`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>X.format(e)}}}),Mc.accessor(`actual`,{header:`Actual`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>X.format(e)}}}),Mc.accessor(Nc,{id:`variance`,header:`Over / under`,cell:e=>{let n=t(e.getValue());return(0,w.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:n?{background:n.fill,color:n.color,fontWeight:600}:void 0,children:X.format(e.getValue())})},meta:{rowpine:{numFmt:`"$"#,##0;[Red]-"$"#,##0`,format:e=>X.format(e),cellStyle:t}}})])}function Fc(){let[e,t]=C.useState(null),[n,r]=C.useState(!1),i=C.useMemo(()=>Pc(n),[n]),a=C.useRef(null),o=q({features:Y,columns:i,data:we,getSubRows:e=>e.subRows,initialState:{expanded:!0}}),s=C.useRef(o);s.current=o;let c=C.useMemo(()=>[{caption:`Departments and their teams, nested with getSubRows. Parents carry the totals of their teams.`,run:e=>e.point(()=>a.current?.querySelector(`table`))},{caption:`Collapse Sales to read it as one line.`,run:async e=>{await e.click(()=>E(a.current,`tr`,`Sales`)?.querySelector(`button[aria-label="Toggle row"]`)),s.current.setExpanded({0:!0,"0.2":!0,1:!1})}},{caption:`Flag the overspend. Teams over budget turn red, and the same rule colors the cells in the files.`,run:async e=>{await e.click(()=>E(a.current,`button`,`Flag overspend`)),r(!0)}},{caption:`Export to Excel: one outline level per depth, parents in bold, the red cells kept. Collapsed or not, every team is in the file.`,run:async e=>{await e.click(()=>E(a.current,`button`,`Excel`)),await D(),t({blob:await l(s.current,{download:!1}),name:`budget.xlsx`,kind:`xlsx`,note:`budget vs actual`})}},{caption:`And to PDF, with the tree indented and the same colors.`,run:async e=>{await e.click(()=>E(a.current,`button`,`PDF`)),await D(),t({blob:await y(s.current,{download:!1,title:`Budget by department`}),name:`budget.pdf`,kind:`pdf`})}}],[]),u=C.useCallback(()=>{s.current.setExpanded(!0),r(!1),t(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(lt,{steps:c,reset:u}),(0,w.jsx)(ot,{rootRef:a,preview:e,onClosePreview:()=>t(null),children:(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(S,{variant:n?`secondary`:`outline`,size:`sm`,onClick:()=>r(e=>!e),children:`Flag overspend`}),(0,w.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:async()=>t({blob:await l(o,{download:!1}),name:`budget.xlsx`,kind:`xlsx`}),children:`Excel`}),(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:async()=>t({blob:await y(o,{download:!1,title:`Budget by department`}),name:`budget.pdf`,kind:`pdf`}),children:`PDF`})]})]}),(0,w.jsx)(J,{table:o,numeric:[`budget`,`actual`,`variance`],tree:!0,paging:!1})]})})]})}var Ic=t({default:()=>Vc,meta:()=>Lc}),Lc={title:`Support tickets`,description:`A support lead counts the open tickets by team and priority, adds how long they take, and prints the page for the weekly review.`,docs:`aggregations.html`},Rc=Se(),zc=[{field:`team`,label:`Team`,kind:`dimension`},{field:`priority`,label:`Priority`,kind:`dimension`},{field:`status`,label:`Status`,kind:`dimension`},{field:`channel`,label:`Channel`,kind:`dimension`},{field:`customer`,label:`Customer`,kind:`dimension`},{field:`id`,label:`Tickets`,kind:`measure`,defaultAgg:`count`},{field:`hours`,label:`Hours to resolve`,kind:`measure`,defaultAgg:`avg`,format:e=>typeof e==`number`?e.toFixed(1):``}],Bc={rows:[`team`],cols:[],values:[{field:`id`,agg:`count`,label:`Count of Tickets`}],filters:[]};function Vc(){let[e,t]=C.useState(Bc),[n,r]=C.useState(null),i=C.useRef(null),a=C.useRef(null),o=C.useCallback(e=>{a.current=e},[]),s=e=>()=>E(i.current,`aside[aria-label="Pivot fields"] [draggable="true"]`,e),c=e=>()=>i.current?.querySelector(`[data-well="${e}"]`),l=C.useMemo(()=>[{caption:`500 tickets, counted by team.`,run:e=>e.point(()=>i.current?.querySelector(`table`))},{caption:`Priority across the top: where the urgent work sits.`,run:async e=>{await e.click(s(`Priority`)),await e.point(c(`cols`)),t(e=>f(e,zc,`priority`,`cols`))}},{caption:`Leave out what is solved: Status in Filters, only Open and Pending.`,run:async e=>{await e.click(s(`Status`)),await e.point(c(`filters`)),t(e=>{let t=f(e,zc,`status`,`filters`);return{...t,filters:t.filters.map(e=>e.field===`status`?{...e,allowed:[`Open`,`Pending`]}:e)}})}},{caption:`Add the average hours to resolve next to the count. Two measures sit side by side under each priority.`,run:async e=>{await e.click(s(`Hours to resolve`)),await e.point(c(`values`)),t(e=>e.values.some(e=>e.field===`hours`)?e:f(e,zc,`hours`,`values`))}},{caption:`Print it for the weekly review: a landscape PDF with the totals in bold.`,run:async e=>{if(await e.click(()=>E(i.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await D(),!a.current)return;let t=await y(a.current.table,{download:!1,title:`Open tickets by team and priority`,pageOrientation:`landscape`,rowStyle:v});r({blob:t,name:`open-tickets.pdf`,kind:`pdf`})}}],[]),u=C.useCallback(()=>{t(Bc),r(null)},[]);return(0,w.jsxs)(`div`,{className:`grid gap-4`,children:[(0,w.jsx)(lt,{steps:l,reset:u}),(0,w.jsx)(ot,{rootRef:i,preview:n,onClosePreview:()=>r(null),children:(0,w.jsx)(ce,{data:Rc,fields:zc,layout:e,onLayoutChange:t,onPivotChange:o,actions:e=>(0,w.jsx)(b,{table:e.table,fileName:`tickets`,pdfTitle:`Tickets`,rowStyle:v})})})]})}var Hc=`import * as React from "react"
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
`,Uc=`import * as React from "react"
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
`,Wc=`import * as React from "react"
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
`,Gc=`import * as React from "react"
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
`,Kc=`import * as React from "react"
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
`,qc=t({default:()=>Qc,meta:()=>Jc}),Jc={title:`Export menu on a data table`,description:`A shadcn data table with search, sorting and paging, and an Export menu for Excel, PDF and CSV. The file holds every row that passes the search, in the current sort, not just the visible page.`},Yc=x(),Xc=U(),Zc=Xc.columns([Xc.accessor(`id`,{header:`Order`,size:80}),Xc.accessor(`customer`,{header:`Customer`,size:190}),Xc.accessor(`product`,{header:`Product`,size:150}),Xc.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>Z.format(e.getValue()),meta:{rowpine:{numFmt:`yyyy-mm-dd`,format:e=>Z.format(e)}}}),Xc.accessor(`amount`,{header:`Amount`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>X.format(e)}}}),Xc.accessor(`status`,{header:`Status`,size:100})]);function Qc(){let[e,t]=C.useState(``),n=q({features:Y,columns:Zc,data:Yc,globalFilterFn:`includesString`,state:{globalFilter:e},onGlobalFilterChange:t,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(ve,{placeholder:`Search orders...`,value:e,onChange:e=>t(e.target.value),className:`h-8 w-64`}),(0,w.jsx)(b,{table:n,fileName:`orders`,pdfTitle:`Orders`,className:`ml-auto`})]}),(0,w.jsx)(J,{table:n,numeric:[`amount`]})]})}var $c=t({default:()=>il,meta:()=>el}),el={title:`Grouped rows to Excel outlines`,description:`Group by region and product. Excel gets one outline level per grouping, so the groups collapse in Excel too, and the group totals are SUBTOTAL formulas over the rows below them.`},tl=x(),nl=U(),rl=nl.columns([nl.accessor(`region`,{header:`Region`,size:170}),nl.accessor(`product`,{header:`Product`,size:170}),nl.accessor(`customer`,{header:`Customer`,size:190}),nl.accessor(`quantity`,{header:`Qty`,aggregationFn:`sum`}),nl.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>X.format(e.getValue()),aggregatedCell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>X.format(e)}}}),nl.accessor(`amount`,{id:`average`,header:`Avg order`,aggregationFn:`mean`,cell:e=>X.format(e.getValue()),aggregatedCell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>X.format(e)}}})]);function il(){let e=q({features:Y,columns:rl,data:tl,initialState:{grouping:[`region`,`product`],expanded:!0,pagination:{pageIndex:0,pageSize:15}}}),t=e.state.grouping.includes(`product`);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>e.setGrouping(t?[`region`]:[`region`,`product`]),children:t?`Group by region only`:`Also group by product`}),(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>e.toggleAllRowsExpanded(),children:e.getIsAllRowsExpanded()?`Collapse all`:`Expand all`}),(0,w.jsx)(b,{table:e,fileName:`orders-by-region`,pdfTitle:`Orders by region`,className:`ml-auto`})]}),(0,w.jsx)(J,{table:e,numeric:[`quantity`,`amount`,`average`]})]})}var al=t({default:()=>ll,meta:()=>ol}),ol={title:`Hidden, pinned and excluded columns`,description:`The file has the columns on screen, in screen order. Hidden columns stay out, pinned columns become frozen panes in Excel, and a column marked exclude never goes to a file.`},sl=x(),$=U(),cl=$.columns([$.accessor(`customer`,{header:`Customer`,size:190}),$.accessor(`country`,{header:`Country`}),$.accessor(`product`,{header:`Product`,size:150}),$.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>Z.format(e.getValue()),meta:{rowpine:{numFmt:`yyyy-mm-dd`}}}),$.accessor(`amount`,{header:`Amount`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),$.accessor(`status`,{header:`Status`}),$.accessor(`id`,{header:`Internal id`,meta:{rowpine:{exclude:!0}}})]);function ll(){let e=q({features:Y,columns:cl,data:sl,initialState:{columnPinning:{start:[`customer`],end:[]},columnVisibility:{country:!1},pagination:{pageIndex:0,pageSize:10}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsxs)(se,{children:[(0,w.jsxs)(ne,{className:re({variant:`outline`,size:`sm`}),children:[(0,w.jsx)(te,{}),`Columns`]}),(0,w.jsxs)(Oe,{align:`start`,className:`w-48`,children:[(0,w.jsxs)(le,{children:[(0,w.jsx)(De,{children:`Show`}),e.getAllLeafColumns().map(e=>(0,w.jsx)(Ee,{checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t),children:String(e.columnDef.header)},e.id))]}),(0,w.jsxs)(le,{children:[(0,w.jsx)(De,{children:`Pin to the start`}),e.getAllLeafColumns().map(e=>(0,w.jsx)(Ee,{checked:e.getIsPinned()===`start`,onCheckedChange:t=>e.pin(t?`start`:!1),children:String(e.columnDef.header)},e.id))]})]})]}),(0,w.jsx)(b,{table:e,fileName:`orders-columns`,className:`ml-auto`})]}),(0,w.jsx)(J,{table:e,numeric:[`amount`]})]})}var ul=t({default:()=>hl,meta:()=>dl}),dl={title:`Export only the selected rows`,description:`Tick some rows and the Export menu offers "Selected rows only". The selection column itself is marked exclude, so it never reaches the file.`},fl=x(),pl=U(),ml=pl.columns([pl.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},header:({table:e})=>(0,w.jsx)(pe,{checked:e.getIsAllPageRowsSelected(),indeterminate:e.getIsSomePageRowsSelected()&&!e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":`Select page`}),cell:({row:e})=>(0,w.jsx)(pe,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`})}),pl.accessor(`id`,{header:`Order`,size:80}),pl.accessor(`customer`,{header:`Customer`,size:190}),pl.accessor(`product`,{header:`Product`}),pl.accessor(`amount`,{header:`Amount`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}})]);function hl(){let e=q({features:Y,columns:ml,data:fl,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:10},rowSelection:{1001:!0,1004:!0,1007:!0}}}),t=Object.keys(e.state.rowSelection).length;return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-muted-foreground`,children:[t,` selected`,(0,w.jsx)(b,{table:e,fileName:`selected-orders`,className:`ml-auto`})]}),(0,w.jsx)(J,{table:e,numeric:[`amount`]})]})}function gl(e){return ee(e.defaultTagName??`div`,e,e)}var _l=o(`group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!`,{variants:{variant:{default:`bg-primary text-primary-foreground [a]:hover:bg-primary/80`,secondary:`bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80`,destructive:`bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20`,outline:`border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground`,ghost:`hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50`,link:`text-primary underline-offset-4 hover:underline`}},defaultVariants:{variant:`default`}});function vl({className:e,variant:t=`default`,render:n,...i}){return gl({defaultTagName:`span`,props:ge({className:r(_l({variant:t}),e)},i),render:n,state:{slot:`badge`,variant:t}})}var yl=t({default:()=>Dl,meta:()=>bl}),bl={title:`Number formats and cell colors`,description:`meta.rowpine.numFmt gives Excel a real number format, so amounts stay numbers you can sum. format sets the text for PDF and cellStyle colors cells in both files, the same rule the screen uses.`},xl=x().map((e,t)=>({...e,margin:t*37%45/100-.05})),Sl=new Intl.NumberFormat(`en-US`,{style:`percent`,maximumFractionDigits:1}),Cl=e=>e===`Overdue`?{color:`#b91c1c`,bold:!0}:e===`Open`?{color:`#a16207`}:void 0,wl=e=>e<0?`#fee2e2`:e>=.3?`#dcfce7`:void 0,Tl=U(),El=Tl.columns([Tl.accessor(`customer`,{header:`Customer`,size:190}),Tl.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>Z.format(e.getValue()),meta:{rowpine:{numFmt:`d mmm yyyy`,format:e=>Z.format(e)}}}),Tl.accessor(`amount`,{header:`Amount`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>X.format(e)}}}),Tl.accessor(`margin`,{header:`Margin`,cell:e=>(0,w.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:{background:wl(e.getValue())},children:Sl.format(e.getValue())}),meta:{rowpine:{numFmt:`0.0%`,format:e=>Sl.format(e),cellStyle:e=>({fill:wl(e)})}}}),Tl.accessor(`status`,{header:`Status`,cell:e=>(0,w.jsx)(vl,{variant:e.getValue()===`Overdue`?`destructive`:`secondary`,children:e.getValue()}),meta:{rowpine:{cellStyle:Cl}}})]);function Dl(){let e=q({features:Y,columns:El,data:xl,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(b,{table:e,fileName:`orders-formatted`,pdfTitle:`Orders`})}),(0,w.jsx)(J,{table:e,numeric:[`amount`,`margin`]})]})}var Ol=t({default:()=>Ml,meta:()=>kl}),kl={title:`Tree data`,description:`Rows nested with getSubRows export as Excel outline levels, one per depth, so the hierarchy collapses in Excel. Parent rows are bold in Excel and PDF.`},Al=U(),jl=Al.columns([Al.accessor(`name`,{header:`Unit`,size:240}),Al.accessor(`lead`,{header:`Lead`,size:170}),Al.accessor(`headcount`,{header:`Headcount`}),Al.accessor(`budget`,{header:`Budget`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>X.format(e)}}})]);function Ml(){let e=q({features:Y,columns:jl,data:me,getSubRows:e=>e.subRows,initialState:{expanded:!0}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(S,{variant:`outline`,size:`sm`,onClick:()=>e.toggleAllRowsExpanded(),children:e.getIsAllRowsExpanded()?`Collapse all`:`Expand all`}),(0,w.jsx)(b,{table:e,fileName:`org-budget`,pdfTitle:`Budget by unit`,className:`ml-auto`})]}),(0,w.jsx)(J,{table:e,numeric:[`headcount`,`budget`],tree:!0,paging:!1})]})}var Nl=t({default:()=>Rl,meta:()=>Pl}),Pl={title:`A PDF report from your own button`,description:`Call exportPdf directly to set the page: size, orientation, a title and subtitle, a strip of headline numbers, a watermark and the header color. Rows are grouped by status, as on screen.`},Fl=x(),Il=U(),Ll=Il.columns([Il.accessor(`status`,{header:`Status`,size:110}),Il.accessor(`customer`,{header:`Customer`,size:190}),Il.accessor(`product`,{header:`Product`}),Il.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?Z.format(e.getValue()):null,meta:{rowpine:{format:e=>Z.format(e)}}}),Il.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>X.format(e.getValue()),aggregatedCell:e=>X.format(e.getValue()),meta:{rowpine:{format:e=>X.format(e)}}})]);function Rl(){let[e,t]=C.useState(`A4`),[n,r]=C.useState(!1),i=q({features:Y,columns:Ll,data:Fl,initialState:{grouping:[`status`],expanded:!0,pagination:{pageIndex:0,pageSize:12}}}),a=Fl.reduce((e,t)=>e+t.amount,0),o=Fl.filter(e=>e.status===`Overdue`);async function s(){await y(i,{fileName:`receivables`,title:`Receivables`,subtitle:`${Fl.length} orders, January to September 2026`,pageSize:e,pageOrientation:n?`landscape`:`portrait`,headerColor:`#1f3d2e`,kpis:[{label:`Invoiced`,value:X.format(a)},{label:`Overdue`,value:X.format(o.reduce((e,t)=>e+t.amount,0)),delta:`${o.length} orders`,color:`#b91c1c`}],watermark:`DRAFT`})}return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Page`,(0,w.jsx)(`select`,{value:e,onChange:e=>t(e.target.value),className:`h-8 rounded-md border bg-background px-2`,children:[`A4`,`LETTER`,`LEGAL`,`A3`].map(e=>(0,w.jsx)(`option`,{children:e},e))})]}),(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),`Landscape`]}),(0,w.jsxs)(S,{size:`sm`,className:`ml-auto`,onClick:()=>void s(),children:[(0,w.jsx)(m,{}),`Download PDF`]})]}),(0,w.jsx)(J,{table:i,numeric:[`amount`]})]})}var zl=t({default:()=>Ul,meta:()=>Bl}),Bl={title:`A pivot table from code`,description:`usePivot turns flat orders into products down and quarters across, with two measures side by side: units sold and the average order value. Groups expand and collapse, and the pivot exports like any table.`},Vl=x(),Hl={rows:[`product`,`region`],cols:[`quarter`],values:[{field:`quantity`,agg:`sum`,label:`Units`},{field:`amount`,agg:`avg`,label:`Avg order`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``}]};function Ul(){let e=Ce(Vl,Hl),[t,n]=C.useState(new Set);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(b,{table:e.table,fileName:`units-by-product`,pdfTitle:`Units by product`,rowStyle:v})}),(0,w.jsx)(ye,{pivot:e,collapsed:t,onCollapsedChange:n})]})}var Wl=t({default:()=>Xl,meta:()=>Gl}),Gl={title:`Pivot designer`,description:`Users build their own pivot: drag fields into Rows, Columns, Values and Filters, change aggregations from a chip's menu, filter values, load a preset, and switch totals on and off.`},Kl=x(),ql=[{field:`region`,label:`Region`,kind:`dimension`,group:`Where`},{field:`country`,label:`Country`,kind:`dimension`,group:`Where`},{field:`customer`,label:`Customer`,kind:`dimension`,group:`Who`},{field:`product`,label:`Product`,kind:`dimension`,group:`What`},{field:`status`,label:`Status`,kind:`dimension`,group:`What`},{field:`quarter`,label:`Quarter`,kind:`dimension`,group:`When`},{field:`amount`,label:`Amount`,kind:`measure`,group:`Numbers`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`quantity`,label:`Units`,kind:`measure`,group:`Numbers`}],Jl=[{name:`Revenue by region and quarter`,layout:{rows:[`region`,`country`],cols:[`quarter`],values:[{field:`amount`,agg:`sum`,label:`Sum of Amount`}],filters:[]}},{name:`Overdue by customer`,layout:{rows:[`customer`],cols:[],values:[{field:`amount`,agg:`sum`,label:`Sum of Amount`},{field:`amount`,agg:`count`,label:`Count of Amount`}],filters:[{field:`status`,allowed:[`Overdue`]}]}}],Yl={numFmt:`"$"#,##0`};function Xl(){return(0,w.jsx)(ce,{data:Kl,fields:ql,presets:Jl,pivotOptions:Yl,actions:e=>(0,w.jsx)(b,{table:e.table,fileName:`pivot`,pdfTitle:`Sales pivot`,rowStyle:v})})}var Zl=t({default:()=>ru,meta:()=>Ql}),Ql={title:`Saved views`,description:`The designer's layout is plain JSON. Keep it in state, save named views to localStorage, offer them back as presets, and export the current pivot from your own buttons.`},$l=x(),eu=[{field:`region`,label:`Region`,kind:`dimension`},{field:`product`,label:`Product`,kind:`dimension`},{field:`status`,label:`Status`,kind:`dimension`},{field:`quarter`,label:`Quarter`,kind:`dimension`},{field:`amount`,label:`Amount`,kind:`measure`},{field:`quantity`,label:`Units`,kind:`measure`}],tu=`rowpine-example-views`;function nu(){try{return JSON.parse(localStorage.getItem(tu)??`[]`)}catch{return[]}}function ru(){let[e,t]=C.useState(()=>p(eu)),[n,r]=C.useState(nu),[a,o]=C.useState(``),s=C.useRef(null),c=C.useCallback(e=>{s.current=e},[]),u=e=>{r(e);try{localStorage.setItem(tu,JSON.stringify(e))}catch{}};return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,w.jsx)(ve,{placeholder:`Name this view...`,value:a,onChange:e=>o(e.target.value),className:`h-8 w-56`}),(0,w.jsxs)(S,{size:`sm`,variant:`outline`,disabled:!a.trim(),onClick:()=>{u([...n.filter(e=>e.name!==a.trim()),{name:a.trim(),layout:e}]),o(``)},children:[(0,w.jsx)(We,{}),`Save view`]}),n.length>0&&(0,w.jsxs)(S,{size:`sm`,variant:`ghost`,onClick:()=>u([]),children:[(0,w.jsx)(Ke,{}),`Forget saved views`]}),(0,w.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,w.jsx)(S,{size:`sm`,variant:`outline`,onClick:()=>s.current&&void i(s.current.table,{fileName:`view`}),children:`CSV`}),(0,w.jsx)(S,{size:`sm`,onClick:()=>s.current&&void l(s.current.table,{fileName:`view`,rowStyle:v}),children:`Excel`})]})]}),(0,w.jsx)(ce,{data:$l,fields:eu,layout:e,onLayoutChange:t,presets:n,onPivotChange:c}),(0,w.jsxs)(`details`,{className:`text-sm`,children:[(0,w.jsx)(`summary`,{className:`cursor-pointer text-muted-foreground`,children:`Current layout as JSON`}),(0,w.jsx)(`pre`,{className:`mt-2 overflow-x-auto rounded-md bg-muted p-3 text-xs`,children:JSON.stringify(e,null,2)})]})]})}var iu=t({default:()=>cu,meta:()=>au}),au={title:`Your own aggregation`,description:`An aggregation can be any function of the values in a cell. Here the median order sits next to the built-in count of distinct customers.`},ou=x(),su={rows:[`product`],cols:[`quarter`],values:[{field:`amount`,agg:e=>{let t=e.map(Number).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t);if(!t.length)return null;let n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},label:`Median order`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`customer`,agg:`countDistinct`,label:`Customers`}]};function cu(){let e=Ce(ou,su);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(b,{table:e.table,fileName:`median-orders`,rowStyle:v})}),(0,w.jsx)(ye,{pivot:e})]})}var lu=t({default:()=>pu,meta:()=>uu}),uu={title:`A pivot in your own TanStack table`,description:`createPivot returns rows nested through subRows and TanStack column definitions. Render them with the table you already have; sorting, expanding and export all work on it.`},du=x(),fu=e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``;function pu(){let e=C.useMemo(()=>ke(du,{rows:[`region`,`country`],cols:[`status`],values:[{field:`amount`,agg:`sum`,label:`Amount`,format:fu}]},{numFmt:`"$"#,##0`}),[]),t=e.columns,n=q({features:Y,columns:t,data:e.data,getSubRows:e=>e.subRows,initialState:{expanded:!0}}),r=C.useMemo(()=>n.getAllLeafColumns().map(e=>e.id).filter(e=>e!==`__pivotRowHeader`),[n]);return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(b,{table:n,fileName:`pivot-tanstack`,rowStyle:v})}),(0,w.jsx)(J,{table:n,numeric:r,tree:!0,paging:!1})]})}var mu=t({default:()=>bu,meta:()=>hu}),hu={title:`Sum, average, min and max in Excel`,description:`Each TanStack aggregation becomes its own Excel formula on the group rows: SUBTOTAL 9 for sum, 1 for average, 5 for min and 4 for max. Edit an order in Excel and every one updates.`},gu=x(),_u=U(),vu=(e,t,n)=>_u.accessor(`amount`,{id:e,header:t,aggregationFn:n,cell:e=>X.format(e.getValue()),aggregatedCell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),yu=_u.columns([_u.accessor(`product`,{header:`Product`,size:170}),_u.accessor(`customer`,{header:`Customer`,size:190}),vu(`sum`,`Total`,`sum`),vu(`mean`,`Average`,`mean`),vu(`min`,`Smallest`,`min`),vu(`max`,`Largest`,`max`)]);function bu(){let e=q({features:Y,columns:yu,data:gu,initialState:{grouping:[`product`],expanded:{},pagination:{pageIndex:0,pageSize:20}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsx)(b,{table:e,fileName:`aggregations`,formats:[`xlsx`,`csv`]})}),(0,w.jsx)(J,{table:e,numeric:[`sum`,`mean`,`min`,`max`]})]})}var xu=t({default:()=>Eu,meta:()=>Su}),Su={title:`All rows, this page, or the selection`,description:`The rows option picks what goes in the file: every filtered row on every page, only the page on screen, or only the selected rows. The count beside each choice is what you will get.`},Cu=x(),wu=U(),Tu=wu.columns([wu.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},cell:({row:e})=>(0,w.jsx)(pe,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`})}),wu.accessor(`id`,{header:`Order`,size:80}),wu.accessor(`customer`,{header:`Customer`,size:190}),wu.accessor(`product`,{header:`Product`}),wu.accessor(`amount`,{header:`Amount`,cell:e=>X.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}})]);function Eu(){let[e,t]=C.useState(`all`),n=q({features:Y,columns:Tu,data:Cu,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:8},rowSelection:{1002:!0,1005:!0}}}),r={all:n.getPrePaginatedRowModel().rows.length,page:n.getRowModel().rows.length,selected:Object.keys(n.state.rowSelection).length};return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-sm`,children:[[`all`,`page`,`selected`].map(n=>(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`radio`,name:`rows`,checked:e===n,onChange:()=>t(n)}),n===`all`?`All rows`:n===`page`?`This page`:`Selected`,` (`,r[n],`)`]},n)),(0,w.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,w.jsx)(S,{size:`sm`,variant:`outline`,onClick:()=>void i(n,{fileName:`orders-${e}`,rows:e}),children:`CSV`}),(0,w.jsx)(S,{size:`sm`,onClick:()=>void l(n,{fileName:`orders-${e}`,rows:e}),children:`Excel`})]})]}),(0,w.jsx)(J,{table:n,numeric:[`amount`]})]})}var Du=t({default:()=>Mu,meta:()=>Ou}),Ou={title:`A wide table in a PDF`,description:`Eighteen columns do not fit a page. Rowpine turns the page, shrinks the type down to three quarters, and past that splits the columns over pages with the first one repeated. Pick the behaviour and compare.`},ku=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],Au=[`Halvorsen AS`,`Brandt GmbH`,`Maison Duret`,`Lakeshore Supply`,`Redwood Tools`,`Kitano Trading`,`Harbor & Pine`,`Maple Freight`,`Southern Cross Parts`,`Fjord Logistics`].map((e,t)=>{let n={account:e,owner:[`Ines`,`Tomas`,`Aiko`,`Ravi`][t%4],region:[`Europe`,`North America`,`Asia Pacific`][t%3],total:0};return ku.forEach((e,r)=>{n[e]=1e3+(t*37+r*53)%90*100,n.total+=n[e]}),n}),ju=[{accessorKey:`account`,header:`Account`,size:170},{accessorKey:`owner`,header:`Owner`},{accessorKey:`region`,header:`Region`},...ku.map(e=>({accessorKey:e,header:e,size:80,cell:e=>X.format(e.getValue())})),{accessorKey:`total`,header:`Total`,cell:e=>X.format(e.getValue())}];function Mu(){let[e,t]=C.useState(`auto`),n=q({features:Y,columns:ju,data:Au});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-sm`,children:[[`auto`,`shrink`,`split`].map(n=>(0,w.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`input`,{type:`radio`,name:`fit`,checked:e===n,onChange:()=>t(n)}),n===`auto`?`Shrink, then split (default)`:n===`shrink`?`Only shrink`:`Only split`]},n)),(0,w.jsxs)(S,{size:`sm`,className:`ml-auto`,onClick:()=>void y(n,{fileName:`accounts-${e}`,title:`Monthly revenue by account`,fit:e}),children:[(0,w.jsx)(m,{}),`Download PDF`]})]}),(0,w.jsx)(J,{table:n,numeric:[...ku,`total`],paging:!1})]})}var Nu=t({default:()=>Vu,meta:()=>Pu}),Pu={title:`A PDF in another language`,description:`Headers come from your columns, numbers and dates from your formatters, and the words the PDF writes itself (the page footer and its date) from labels. This one is German.`},Fu=x(40),Iu=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),Lu=new Intl.DateTimeFormat(`de-DE`,{day:`2-digit`,month:`2-digit`,year:`numeric`}),Ru={Paid:`Bezahlt`,Open:`Offen`,Overdue:`Überfällig`},zu=U(),Bu=zu.columns([zu.accessor(`id`,{header:`Auftrag`,size:90}),zu.accessor(`customer`,{header:`Kunde`,size:190}),zu.accessor(`date`,{header:`Datum`,cell:e=>Lu.format(e.getValue()),meta:{rowpine:{format:e=>Lu.format(e)}}}),zu.accessor(`amount`,{header:`Betrag`,cell:e=>Iu.format(e.getValue()),meta:{rowpine:{format:e=>Iu.format(e)}}}),zu.accessor(`status`,{header:`Status`,cell:e=>Ru[e.getValue()],meta:{rowpine:{format:e=>Ru[e]}}})]);function Vu(){let e=q({features:Y,columns:Bu,data:Fu,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`div`,{className:`flex justify-end`,children:(0,w.jsxs)(S,{size:`sm`,onClick:()=>void y(e,{fileName:`auftraege`,title:`Aufträge`,subtitle:`Januar bis September 2026`,labels:{page:(e,t)=>`Seite ${e} von ${t}`,date:e=>Lu.format(e)}}),children:[(0,w.jsx)(m,{}),`PDF herunterladen`]})}),(0,w.jsx)(J,{table:e,numeric:[`amount`]})]})}var Hu=`import * as React from "react"
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
`,Uu=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Wu=`import { createColumnHelper, useTable } from "@tanstack/react-table"
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
`,Gu=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Ku=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,qu=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Ju=`import * as React from "react"
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
`,Yu=`import * as React from "react"
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
`,Xu=`import { pivotRowStyle, type PivotField, type PivotPreset } from "rowpine"

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
`,Zu=`import * as React from "react"
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
`,Qu=`import { pivotRowStyle, type PivotConfig } from "rowpine"

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
`,$u=`import * as React from "react"
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
`,ed=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,td=`import * as React from "react"
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
`,nd=`import * as React from "react"
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
`,rd=`import { createColumnHelper, useTable } from "@tanstack/react-table"
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
`;ae(void 0);function id(e,t,n){return Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,r])=>{let i=e.replace(/^.*\//,``).replace(`.tsx`,``);return{...r.meta,docs:r.meta.docs??od[i],slug:i,route:n===`use`?`demo/${i.replace(/^\d+-/,``)}`:i,Component:r.default,source:t[e]??``,kind:n}})}var ad=id(Object.assign({"./usecases/01-sales-pivot.tsx":ut,"./usecases/02-orders-to-excel.tsx":_c,"./usecases/03-month-end-pdf.tsx":Sc,"./usecases/04-budget-tree.tsx":Ac,"./usecases/05-support-tickets.tsx":Ic}),Object.assign({"./usecases/01-sales-pivot.tsx":Hc,"./usecases/02-orders-to-excel.tsx":Uc,"./usecases/03-month-end-pdf.tsx":Wc,"./usecases/04-budget-tree.tsx":Gc,"./usecases/05-support-tickets.tsx":Kc}),`use`),od={"01-export-menu":`add-an-export-menu.html`,"02-grouped-export":`grouped-rows-as-outlines.html`,"03-columns":`hidden-and-excluded-columns.html`,"04-selected-rows":`which-rows-are-exported.html`,"05-formats-colors":`cell-colors.html`,"06-tree-data":`tree-data.html`,"07-pdf-report":`pdf-title-kpis-watermark.html`,"08-pivot-table":`pivot-basics.html`,"09-pivot-designer":`pivot-designer.html`,"10-saved-layouts":`presets-and-saved-views.html`,"11-custom-aggregation":`aggregations.html`,"12-pivot-in-tanstack":`pivot-basics.html`,"13-aggregations-to-excel":`subtotal-formulas.html`,"14-rows-option":`which-rows-are-exported.html`,"15-wide-pdf":`pdf-page-setup.html`,"16-pdf-labels":`pdf-page-setup.html`},sd=id(Object.assign({"./examples/01-export-menu.tsx":qc,"./examples/02-grouped-export.tsx":$c,"./examples/03-columns.tsx":al,"./examples/04-selected-rows.tsx":ul,"./examples/05-formats-colors.tsx":yl,"./examples/06-tree-data.tsx":Ol,"./examples/07-pdf-report.tsx":Nl,"./examples/08-pivot-table.tsx":zl,"./examples/09-pivot-designer.tsx":Wl,"./examples/10-saved-layouts.tsx":Zl,"./examples/11-custom-aggregation.tsx":iu,"./examples/12-pivot-in-tanstack.tsx":lu,"./examples/13-aggregations-to-excel.tsx":mu,"./examples/14-rows-option.tsx":xu,"./examples/15-wide-pdf.tsx":Du,"./examples/16-pdf-labels.tsx":Nu}),Object.assign({"./examples/01-export-menu.tsx":Hu,"./examples/02-grouped-export.tsx":Uu,"./examples/03-columns.tsx":Wu,"./examples/04-selected-rows.tsx":Gu,"./examples/05-formats-colors.tsx":Ku,"./examples/06-tree-data.tsx":qu,"./examples/07-pdf-report.tsx":Ju,"./examples/08-pivot-table.tsx":Yu,"./examples/09-pivot-designer.tsx":Xu,"./examples/10-saved-layouts.tsx":Zu,"./examples/11-custom-aggregation.tsx":Qu,"./examples/12-pivot-in-tanstack.tsx":$u,"./examples/13-aggregations-to-excel.tsx":ed,"./examples/14-rows-option.tsx":td,"./examples/15-wide-pdf.tsx":nd,"./examples/16-pdf-labels.tsx":rd}),`feature`),cd=[...ad,...sd];function ld(){let e=()=>window.location.hash.replace(/^#\/?/,``)||ad[0].route,[t,n]=C.useState(e);return C.useEffect(()=>{let t=()=>n(e());return window.addEventListener(`hashchange`,t),()=>window.removeEventListener(`hashchange`,t)},[]),t}function ud(){let e=ld(),t=cd.find(t=>t.route===e)??ad[0],[n,i]=C.useState(t.kind),[a,o]=C.useState(!1);C.useEffect(()=>{document.title=`${t.title} - Rowpine demos`,i(t.kind),o(!1)},[t]);let s=n===`use`?ad:sd;return(0,w.jsxs)(`div`,{className:`min-h-screen bg-background`,children:[(0,w.jsx)(`header`,{className:`border-b`,children:(0,w.jsxs)(`div`,{className:`mx-auto flex h-14 max-w-7xl items-center gap-3 px-4`,children:[(0,w.jsxs)(`a`,{href:`../`,className:`flex items-center gap-2 font-bold`,children:[(0,w.jsx)(`span`,{className:`grid size-7 place-items-center rounded-md bg-[#1f5b40]`,children:(0,w.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`size-4 text-white`,"aria-hidden":!0,children:(0,w.jsx)(`path`,{fill:`currentColor`,d:`M12 2 6.5 9h3L5 15h4.5L4 21h7v1h2v-1h7l-5.5-6H19l-4.5-6h3z`})})}),`Rowpine`]}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Demos`}),(0,w.jsxs)(`nav`,{className:`ml-auto flex gap-1 text-sm`,children:[(0,w.jsx)(`a`,{href:`../docs/`,className:`rounded-md px-3 py-1.5 hover:bg-muted`,children:`Docs`}),(0,w.jsx)(`a`,{href:`../pricing.html`,className:`rounded-md px-3 py-1.5 hover:bg-muted`,children:`Pricing`})]})]})}),(0,w.jsxs)(`div`,{className:`mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[16rem_1fr]`,children:[(0,w.jsxs)(`nav`,{className:`grid content-start gap-3 md:sticky md:top-6 md:self-start`,"aria-label":`Demos`,children:[(0,w.jsx)(`div`,{className:`grid grid-cols-2 gap-1 rounded-lg bg-muted p-1 text-sm`,role:`tablist`,children:[`use`,`feature`].map(e=>(0,w.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":n===e,onClick:()=>i(e),className:r(`rounded-md px-2 py-1.5 font-medium`,n===e?`bg-background shadow-sm`:`text-muted-foreground`),children:[e===`use`?`Use cases`:`Features`,` `,(0,w.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`(`,e===`use`?ad.length:sd.length,`)`]})]},e))}),(0,w.jsx)(`div`,{className:`grid gap-0.5 border-l`,children:s.map(e=>(0,w.jsx)(`a`,{href:`#/${e.route}`,className:r(`-ml-px border-l-2 px-3 py-1.5 text-sm`,e.route===t.route?`border-[#1f5b40] font-medium`:`border-transparent text-muted-foreground hover:text-foreground`),children:e.title},e.route))})]}),(0,w.jsxs)(`main`,{className:`grid min-w-0 content-start gap-4`,"data-example":t.slug,children:[(0,w.jsxs)(`header`,{className:`flex flex-wrap items-start gap-4`,children:[(0,w.jsxs)(`div`,{className:`grid min-w-0 flex-1 gap-1`,children:[(0,w.jsx)(`h1`,{className:`text-2xl font-semibold`,children:t.title}),(0,w.jsx)(`p`,{className:`max-w-3xl text-muted-foreground`,children:t.description})]}),(0,w.jsxs)(`div`,{className:`flex gap-2`,children:[t.docs&&(0,w.jsxs)(`a`,{href:`../docs/${t.docs}`,className:`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm hover:bg-muted`,children:[(0,w.jsx)(Ie,{className:`size-4`}),` Read the docs`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:()=>o(e=>!e),className:`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm hover:bg-muted`,"aria-expanded":a,children:[(0,w.jsx)(Re,{className:`size-4`}),` Source code`]})]})]}),a&&(0,w.jsx)(`pre`,{className:`max-h-[480px] overflow-auto rounded-md border bg-muted/40 p-3 text-xs leading-relaxed`,children:t.source}),(0,w.jsx)(t.Component,{},t.route)]})]})]})}(0,Ye.createRoot)(document.getElementById(`root`)).render((0,w.jsx)(C.StrictMode,{children:(0,w.jsx)(ud,{})}));