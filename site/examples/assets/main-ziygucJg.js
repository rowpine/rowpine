import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,I as c,J as l,K as u,L as d,M as f,N as p,O as m,P as h,Q as g,R as _,S as v,T as y,U as b,V as x,W as S,X as C,Y as w,Z as T,_ as E,a as D,at as O,b as k,c as A,ct as j,d as M,et as ee,f as N,g as P,h as F,i as I,it as L,j as R,k as z,l as te,m as ne,n as re,nt as ie,o as ae,ot as B,p as oe,r as se,rt as ce,s as le,st as ue,t as de,tt as fe,u as pe,v as me,w as he,x as V,y as ge,z as _e}from"./data-DCMGBwgN.js";var ve={name:`arrow-down`,size:24,node:[[`path`,{d:`M12 5v14`,key:`s699le`}],[`path`,{d:`m19 12-7 7-7-7`,key:`1idqje`}]]};ve.node;var ye=b(ve),be={name:`arrow-up`,size:24,node:[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]};be.node;var xe=b(be),Se={name:`book-open`,size:24,node:[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]};Se.node;var Ce=b(Se),we={name:`code-xml`,size:24,node:[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]],aliases:[`code-2`]};we.node;var Te=b(we),Ee={name:`pause`,size:24,node:[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]};Ee.node;var De=b(Ee),Oe={name:`play`,size:24,node:[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]};Oe.node;var ke=b(Oe),Ae={name:`save`,size:24,node:[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]};Ae.node;var je=b(Ae),Me={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]};Me.node;var Ne=b(Me),Pe={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};Pe.node;var Fe=b(Pe),Ie=O(((e,t)=>{(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof ue==`function`&&ue;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var l=Error(`Cannot find module '`+o+`'`);throw l.code=`MODULE_NOT_FOUND`,l}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return i(n||e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var a=typeof ue==`function`&&ue,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.2`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){if(typeof e==`string`)return`string`;var t=Object.prototype.toString.call(e);return t===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&t===`[object Uint8Array]`?`uint8array`:r.arraybuffer&&t===`[object ArrayBuffer]`?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(t){return r.blob&&(t instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(t))!==-1)?Blob.prototype.arrayBuffer===void 0?typeof FileReader<`u`?new o.Promise(function(e,n){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(t)}):o.Promise.reject(Error(e+` is a Blob, but we have no way of reading it.`)):t.arrayBuffer():t}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){for(var e=0,t;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary;if((n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,s.input=typeof e==`string`?a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?new Uint8Array(e):e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.result=this.options.to===`string`?this.chunks.join(``):i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,p.input=typeof e==`string`?a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?new Uint8Array(e):e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.result=this.options.to===`string`?this.chunks.join(``):i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){for(var t=r=0,n=e.length,r,i,a,o;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e,a=e>>>16&65535,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function ee(e){return(e<<1)-(4<e?9:0)}function N(e){for(var t=e.length;0<=--t;)e[t]=0}function P(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function F(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,P(e.strm)}function I(e,t){e.pending_buf[e.pending++]=t}function L(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function R(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function z(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function te(e,t){for(var n,r;;){if(e.lookahead<T){if(z(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=R(e,n)),e.match_length>=C){if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask}else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(F(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(F(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(F(e,!1),e.strm.avail_out===0)?O:k}function ne(e,t){for(var n,r,i;;){if(e.lookahead<T){if(z(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=R(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(F(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&F(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(F(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(F(e,!1),e.strm.avail_out===0)?O:k}function re(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function ie(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),N(this.dyn_ltree),N(this.dyn_dtree),N(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),N(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),N(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ae(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function B(e){var t=ae(e);return t===d&&function(e){e.window_size=2*e.w_size,N(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function oe(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new ie;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,B(e)}r=[new re(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(z(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,F(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(F(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(F(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(F(e,!1),e.strm.avail_out),O)}),new re(4,4,8,4,te),new re(4,5,16,8,te),new re(4,6,32,32,te),new re(4,4,16,16,ne),new re(8,16,32,32,ne),new re(8,16,128,128,ne),new re(8,32,128,256,ne),new re(32,128,258,1024,ne),new re(32,258,258,4096,ne)],n.deflateInit=function(e,t){return oe(e,t,g,15,8,0)},n.deflateInit2=oe,n.deflateReset=B,n.deflateResetKeep=ae,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E){if(i.wrap===2)e.adler=0,I(i,31),I(i,139),I(i,8),i.gzhead?(I(i,+!!i.gzhead.text+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),I(i,255&i.gzhead.time),I(i,i.gzhead.time>>8&255),I(i,i.gzhead.time>>16&255),I(i,i.gzhead.time>>24&255),I(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),I(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(I(i,255&i.gzhead.extra.length),I(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(I(i,0),I(i,0),I(i,0),I(i,0),I(i,0),I(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),I(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,L(i,p),i.strstart!==0&&(L(i,e.adler>>>16),L(i,65535&e.adler)),e.adler=1}}if(i.status===69){if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),P(e),o=i.pending,i.pending!==i.pending_buf_size));)I(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73}if(i.status===73){if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),P(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,I(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91}if(i.status===91){if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),P(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,I(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103}if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&P(e),i.pending+2<=i.pending_buf_size&&(I(i,255&e.adler),I(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(P(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&ee(t)<=ee(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(z(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(F(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(F(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(F(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(z(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(F(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(F(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(F(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(N(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),P(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(I(i,255&e.adler),I(i,e.adler>>8&255),I(i,e.adler>>16&255),I(i,e.adler>>24&255),I(i,255&e.total_in),I(i,e.total_in>>8&255),I(i,e.total_in>>16&255),I(i,e.total_in>>24&255)):(L(i,e.adler>>>16),L(i,65535&e.adler)),P(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(N(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,z(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,z(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,ee,N,P,F,I,L,R=0,z=new r.Buf8(4),te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,F=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){z[n.check=0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,P=8+(15&(b>>>=4)),n.wbits===0)n.wbits=P;else if(P>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<P,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,z[2]=b>>>16&255,z[3]=b>>>24&255,n.check=a(n.check,z,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(z[0]=255&b,z[1]=b>>>8&255,n.check=a(n.check,z,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(P=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,P)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;P=p[g+E++],n.head&&P&&n.length<65536&&(n.head.name+=String.fromCharCode(P)),P&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,P)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;P=p[g+E++],n.head&&P&&n.length<65536&&(n.head.comment+=String.fromCharCode(P)),P&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,P)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[te[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[te[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,I={bits:n.lenbits},F=s(0,n.lens,0,19,n.lencode,0,n.work,I),n.lenbits=I.bits,F){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(R=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&R,!((k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(L=k+2;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}P=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(L=k+3;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,P=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(L=k+7;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,P=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=P}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,I={bits:n.lenbits},F=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,I),n.lenbits=I.bits,F){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,I={bits:n.distbits},F=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,I),n.distbits=I.bits,F){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(R=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&R,!((k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,ee=A,N=j;A=(R=n.lencode[N+((b&(1<<M+ee)-1)>>M)])>>>16&255,j=65535&R,!(M+(k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(L=n.extra;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(R=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&R,!((k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,ee=A,N=j;A=(R=n.distcode[N+((b&(1<<M+ee)-1)>>M)])>>>16&255,j=65535&R,!(M+(k=R>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(L=n.extra;x<L;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(0|n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:F=1;break e;case 30:F=-3;break e;case 31:return-4;default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&F===u&&(F=-5),F)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,ee=null,N=0,P=new r.Buf16(16),F=new r.Buf16(16),I=null,L=0;for(C=0;C<=15;C++)P[C]=0;for(w=0;w<c;w++)P[t[n+w]]++;for(D=S,E=15;1<=E&&P[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&P[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=P[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(F[1]=0,C=1;C<15;C++)F[C+1]=F[C]+P[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[F[t[n+w]]++]=w);if(v=e===0?(ee=I=d,19):e===1?(ee=i,N-=257,I=a,L-=257,256):(ee=o,I=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=I[L+d[w]],ee[N+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--P[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=P[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,ee=Array(d);function N(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function P(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function F(e){return e<256?D[e]:D[256+(e>>>7)]}function I(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function L(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,I(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function R(e,t,n){L(e,n[2*t],n[2*t+1])}function z(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function te(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=z(a[s]++,s))}}function ne(e){for(var t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function re(e){8<e.bi_valid?I(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ie(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function ae(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&ie(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!ie(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function B(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?R(e,i,t):(R(e,(a=O[i])+l+1,t),(o=x[a])!==0&&L(e,i-=k[a],o),R(e,a=F(--r),n),(o=S[a])!==0&&L(e,r-=ee[a],o)),s<e.last_lit;);R(e,_,t)}function oe(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)ae(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],ae(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,ae(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),te(a,l,e.bl_count)}function se(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function ce(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;R(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(R(e,y,e.bl_tree),L(e,s-3,3)):(R(e,b,e.bl_tree),L(e,s-11,7)):(i!==a&&(R(e,i,e.bl_tree),s--),R(e,v,e.bl_tree),L(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(ee);var le=!1;function ue(e,t,n,i){L(e,(s<<1)+ +!!i,3),function(e,t,n,i){re(e),I(e,n),I(e,~n),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){le||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(ee[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(ee[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(te(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=z(e,5);A=new N(T,x,l+1,u,m),j=new N(E,S,0,d,m),M=new N([],C,0,f,g)}(),!0),e.l_desc=new P(e.dyn_ltree,A),e.d_desc=new P(e.dyn_dtree,j),e.bl_desc=new P(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,ne(e)},n._tr_stored_block=ue,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),oe(e,e.l_desc),oe(e,e.d_desc),c=function(e){var t;for(se(e,e.dyn_ltree,e.l_desc.max_code),se(e,e.dyn_dtree,e.d_desc.max_code),oe(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?ue(e,t,n,r):e.strategy===4||s===o?(L(e,2+ +!!r,3),B(e,T,E)):(L(e,4+ +!!r,3),function(e,t,n,r){var i;for(L(e,t-257,5),L(e,n-1,5),L(e,r-4,4),i=0;i<r;i++)L(e,e.bl_tree[2*w[i]+1],3);ce(e,e.dyn_ltree,t-1),ce(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),B(e,e.dyn_ltree,e.dyn_dtree)),ne(e),r&&re(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*F(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){L(e,2,3),R(e,_,T),function(e){e.bi_valid===16?(I(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})})),Le=ie(),H=j(L(),1),Re=j(Ie(),1),U=R(),ze=(e,t)=>RegExp(`\\b${t}="([^"]*)"`).exec(e)?.[1],Be=e=>e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&apos;/g,`'`).replace(/&amp;/g,`&`),Ve=e=>[...e].reduce((e,t)=>e*26+t.charCodeAt(0)-64,0)-1,He=e=>{let t=``;for(let n=e;n>=0;n=Math.floor(n/26)-1)t=String.fromCharCode(65+n%26)+t;return t},Ue=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function We(e,t){if(!t)return String(Number.isInteger(e)?e:Math.round(e*1e6)/1e6);if(/y/.test(t)&&/d/.test(t)){let n=new Date(Math.round(e*864e5)+Date.UTC(1899,11,30)),r=n.getUTCFullYear(),i=n.getUTCMonth(),a=n.getUTCDate();return t===`yyyy-mm-dd`?`${r}-${String(i+1).padStart(2,`0`)}-${String(a).padStart(2,`0`)}`:`${a} ${Ue[i]} ${r}`}let n=t.includes(`%`),r=n?e*100:e,i=(/0\.(0+)/.exec(t)?.[1]??``).length,a=Math.abs(r).toLocaleString(`en-US`,{minimumFractionDigits:i,maximumFractionDigits:i,useGrouping:t.includes(`,`)});return a=(/^"([^"]*)"/.exec(t)?.[1]??``)+a+(n?`%`:``),r<0?`-`+a:a}async function Ge(e){let t=await Re.default.loadAsync(await e.arrayBuffer()),n=await t.file(`xl/worksheets/sheet1.xml`).async(`string`),r=await t.file(`xl/styles.xml`).async(`string`),i=new Map([...r.matchAll(/<numFmt [^>]*\/>/g)].map(([e])=>[ze(e,`numFmtId`),Be(ze(e,`formatCode`)??``)])),a=[...(/<fonts[^>]*>([\s\S]*?)<\/fonts>/.exec(r)?.[1]??``).matchAll(/<font>([\s\S]*?)<\/font>/g)].map(([,e])=>({bold:e.includes(`<b/>`),color:/<color rgb="FF([0-9A-F]{6})"/.exec(e)?.[1]})),o=[...(/<fills[^>]*>([\s\S]*?)<\/fills>/.exec(r)?.[1]??``).matchAll(/<fill>([\s\S]*?)<\/fill>/g)].map(([,e])=>/<fgColor rgb="FF([0-9A-F]{6})"/.exec(e)?.[1]),s=[...(/<cellXfs[^>]*>([\s\S]*?)<\/cellXfs>/.exec(r)?.[1]??``).matchAll(/<xf [^>]*?(?:\/>|>[\s\S]*?<\/xf>)/g)].map(([e])=>({numFmt:i.get(ze(e,`numFmtId`)),font:a[Number(ze(e,`fontId`)??0)],fill:o[Number(ze(e,`fillId`)??0)]})),c=/<pane [^>]*\/>/.exec(n)?.[0],l=[];for(let[,e,t]of n.matchAll(/<row ([^>]*)>([\s\S]*?)<\/row>/g)){let n=[];for(let[e]of t.matchAll(/<c [^>]*?(?:\/>|>[\s\S]*?<\/c>)/g)){let t=ze(e,`r`),r=s[Number(ze(e,`s`)??0)],i=ze(e,`t`),a=/<v>([\s\S]*?)<\/v>/.exec(e)?.[1],o=``,c=!1;i===`inlineStr`?o=Be(/<t[^>]*>([\s\S]*?)<\/t>/.exec(e)?.[1]??``):i===`b`?o=a===`1`?`TRUE`:`FALSE`:a!==void 0&&(c=!0,o=We(Number(a),r?.numFmt));let l=/<f>([\s\S]*?)<\/f>/.exec(e)?.[1];n.push({col:Ve(/^[A-Z]+/.exec(t)[0]),ref:t,text:o,numeric:c,formula:l&&Be(l),bold:r?.font?.bold,color:r?.font?.color,fill:r?.fill})}l.push({r:Number(ze(e,`r`)),level:Number(ze(e,`outlineLevel`)??0),cells:n})}return{rows:l,widths:[...n.matchAll(/<col [^>]*\/>/g)].map(([e])=>Number(ze(e,`width`))),xSplit:Number((c&&ze(c,`xSplit`))??0),ySplit:Number((c&&ze(c,`ySplit`))??0),maxLevel:Number(ze(n,`outlineLevelRow`)??0)}}function Ke({sheet:e,select:t}){let[n,r]=H.useState(()=>e.rows.flatMap(e=>e.cells).find(e=>t?e.ref===t:!!e.formula)),i=Math.max(e.widths.length,...e.rows.map(e=>Math.max(0,...e.cells.map(e=>e.col+1)))),a=e=>Math.round((e||9)*7+10);return(0,U.jsxs)(`div`,{className:`overflow-auto bg-white text-[13px] text-black`,style:{fontFamily:`Calibri, "Segoe UI", Arial, sans-serif`},children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-3 border-b border-[#d4d4d4] px-2 py-1 font-mono text-xs`,children:[(0,U.jsx)(`span`,{className:`min-w-12 border-r border-[#d4d4d4] pr-2`,children:n?.ref??``}),(0,U.jsx)(`i`,{className:`text-[#666]`,children:`fx`}),(0,U.jsx)(`span`,{className:`truncate`,children:n?n.formula?`=${n.formula}`:n.text:``})]}),(0,U.jsxs)(`table`,{className:`border-collapse`,style:{tableLayout:`fixed`},children:[(0,U.jsx)(`thead`,{children:(0,U.jsxs)(`tr`,{children:[e.maxLevel>0&&(0,U.jsx)(`th`,{className:`w-10 border border-[#e1e1e1] bg-[#f3f3f3]`}),(0,U.jsx)(`th`,{className:`w-9 border border-[#e1e1e1] bg-[#f3f3f3]`}),Array.from({length:i},(t,n)=>(0,U.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#f3f3f3] text-xs font-normal text-[#555]`,style:{width:a(e.widths[n]),borderRightColor:n===e.xSplit-1?`#6b6b6b`:void 0,borderRightWidth:n===e.xSplit-1?2:void 0},children:He(n)},n))]})}),(0,U.jsx)(`tbody`,{children:e.rows.map((t,a)=>{let o=e.rows[a+1],s=o&&o.level>t.level,c=new Map(t.cells.map(e=>[e.col,e])),l=t.r===e.ySplit;return(0,U.jsxs)(`tr`,{children:[e.maxLevel>0&&(0,U.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#fafafa] px-0.5`,children:(0,U.jsxs)(`div`,{className:`flex h-5 items-center`,children:[Array.from({length:e.maxLevel},(e,n)=>(0,U.jsx)(`i`,{className:n<t.level?`ml-1.5 h-5 w-2 shrink-0 border-l-2 border-[#888]`:`h-5 w-3.5 shrink-0`},n)),s&&(0,U.jsx)(`b`,{className:`ml-0.5 grid size-3 shrink-0 place-items-center border border-[#888] bg-white text-[10px] leading-none`,children:`-`})]})}),(0,U.jsx)(`th`,{className:`h-5 border border-[#e1e1e1] bg-[#f3f3f3] px-1 text-right text-xs font-normal text-[#555]`,style:l?{borderBottom:`2px solid #6b6b6b`}:void 0,children:t.r}),Array.from({length:i},(t,i)=>{let a=c.get(i);return(0,U.jsx)(`td`,{onClick:()=>a&&r(a),className:`h-5 cursor-cell overflow-hidden border border-[#e1e1e1] px-1.5 whitespace-nowrap`,style:{background:a?.fill?`#${a.fill}`:void 0,fontWeight:a?.bold?700:void 0,color:a?.color?`#${a.color}`:void 0,textAlign:a?.numeric?`right`:`left`,outline:a&&n?.ref===a.ref?`2px solid #1f6e43`:void 0,outlineOffset:-2,borderRight:i===e.xSplit-1?`2px solid #6b6b6b`:void 0,borderBottom:l?`2px solid #6b6b6b`:void 0},children:a?.text},i)})]},t.r)})})]})]})}function qe({blob:e}){let t=H.useRef(null),[n,r]=H.useState(`loading`);return H.useEffect(()=>{let n=!1;return(async()=>{try{let i=await fe(()=>import(`./pdf-YwugTw7Y.js`),[],import.meta.url),a=await fe(()=>import(`./pdf.worker.min-BPK52Uye.js`),[],import.meta.url);i.GlobalWorkerOptions.workerSrc=a.default;let o=await i.getDocument({data:new Uint8Array(await e.arrayBuffer())}).promise,s=t.current;if(!s||n)return;s.replaceChildren();let c=s.clientWidth-32;for(let e=1;e<=Math.min(o.numPages,3);e++){let t=await o.getPage(e),r=c/t.getViewport({scale:1}).width,i=t.getViewport({scale:r*(window.devicePixelRatio||1)}),a=document.createElement(`canvas`);if(a.width=i.width,a.height=i.height,a.style.width=`${c}px`,a.className=`mx-auto mb-4 block bg-white shadow-md`,s.appendChild(a),await t.render({canvas:a,viewport:i}).promise,n)return}if(o.numPages>3){let e=document.createElement(`p`);e.className=`pb-4 text-center text-xs text-[#555]`,e.textContent=`${o.numPages-3} more pages in the file`,s.appendChild(e)}r(`ready`)}catch{n||r(`failed`)}})(),()=>{n=!0}},[e]),(0,U.jsxs)(`div`,{className:`max-h-[460px] overflow-auto bg-[#e5e7eb] pt-4`,children:[n===`loading`&&(0,U.jsx)(`p`,{className:`p-6 text-center text-sm text-[#555]`,children:`Drawing the pages...`}),n===`failed`&&(0,U.jsx)(`p`,{className:`p-6 text-center text-sm text-[#555]`,children:`This browser cannot draw the PDF here. Use Download it.`}),(0,U.jsx)(`div`,{ref:t,className:`px-4`})]})}function Je({file:t,onClose:n}){let[r,i]=H.useState(null);return H.useEffect(()=>{t.kind===`xlsx`&&Ge(t.blob).then(i)},[t]),(0,U.jsxs)(`div`,{className:`overflow-hidden rounded-lg border shadow-2xl`,"data-preview":t.kind,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2 text-sm text-white ${t.kind===`xlsx`?`bg-[#1f6e43]`:`bg-[#9f1d1d]`}`,children:[(0,U.jsx)(`span`,{className:`font-semibold`,children:t.name}),t.note&&(0,U.jsx)(`span`,{className:`hidden text-white/80 sm:inline`,children:t.note}),(0,U.jsxs)(`button`,{type:`button`,onClick:()=>e(t.blob,t.name),className:`ml-auto inline-flex items-center gap-1 rounded px-2 py-1 hover:bg-white/15`,children:[(0,U.jsx)(_,{className:`size-4`}),` Download it`]}),(0,U.jsx)(`button`,{type:`button`,onClick:n,className:`rounded p-1 hover:bg-white/15`,"aria-label":`Close the file`,children:(0,U.jsx)(Fe,{className:`size-4`})})]}),t.kind===`xlsx`?r?(0,U.jsx)(`div`,{className:`max-h-[420px] overflow-auto`,children:(0,U.jsx)(Ke,{sheet:r,select:t.select})}):(0,U.jsx)(`div`,{className:`p-6 text-sm`,children:`Opening the file...`}):(0,U.jsx)(qe,{blob:t.blob})]})}function W(e,t,n){return e?[...e.querySelectorAll(t)].find(e=>e.textContent?.trim().includes(n))??null:null}var G=()=>new Promise(e=>setTimeout(e,60));function Ye({rootRef:e,preview:t,onClosePreview:n,children:r}){return(0,U.jsxs)(`div`,{ref:e,className:`relative`,children:[r,t&&(0,U.jsx)(`div`,{className:`absolute inset-x-2 top-10 z-20 sm:inset-x-6`,children:(0,U.jsx)(Je,{file:t,onClose:n})})]})}var Xe=j(ce(),1),Ze=e=>typeof e==`string`?document.querySelector(e):e()??null;function Qe(e,t){return new Promise(n=>{if(e<=0||t.cancelled)return n();let r=window.setTimeout(n,e),i=window.setInterval(()=>{t.cancelled&&(window.clearTimeout(r),window.clearInterval(i),n())},50);window.setTimeout(()=>window.clearInterval(i),e+60)})}function $e({steps:e,reset:t,readTime:n=2600}){let[r,i]=H.useState(0),[a,s]=H.useState(!0),[l,u]=H.useState(!1),[d,f]=H.useState(null),p=H.useRef({cancelled:!1}),m=H.useRef(a);m.current=a;let h=H.useCallback((e,t)=>{let n=async n=>{if(t||e.cancelled)return;let r=Ze(n);if(!r)return;let i=r.getBoundingClientRect();f({x:i.left+window.scrollX+Math.min(i.width/2,40),y:i.top+window.scrollY+i.height/2,clicking:!1}),await Qe(750,e)};return{point:n,click:async r=>{await n(r),t||e.cancelled||(f(e=>e&&{...e,clicking:!0}),await Qe(280,e),f(e=>e&&{...e,clicking:!1}))},wait:n=>t?Promise.resolve():Qe(n,e)}},[]),g=H.useCallback(async(r,a)=>{p.current.cancelled=!0;let o={cancelled:!1};p.current=o,u(!1),t(),await Qe(30,o);let c=h(o,!0);for(let t=0;t<r;t++)await e[t].run(c),await Qe(20,o);let l=h(o,!1);for(let t=r;t<e.length;t++){if(o.cancelled||(i(t),!a&&t>r))return;for(;!m.current&&!o.cancelled;)await Qe(100,o);for(await e[t].run(l),await Qe(n,o);!m.current&&!o.cancelled;)await Qe(100,o)}o.cancelled||(u(!0),s(!1),f(null))},[h,n,t,e]);H.useEffect(()=>(g(0,!0),()=>{p.current.cancelled=!0}),[]);let _=e=>{s(!0),g(e,!0)};return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(`div`,{className:`flex gap-1`,role:`tablist`,"aria-label":`Demo steps`,children:e.map((e,t)=>(0,U.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":t===r,"aria-label":`Step ${t+1}: ${e.caption}`,onClick:()=>_(t),className:`h-6 flex-1 cursor-pointer py-2.5`,children:(0,U.jsx)(`span`,{className:o(`block h-1 rounded-full transition-colors`,t<r||l?`bg-[#1f5b40]`:t===r?`bg-[#3fae73]`:`bg-muted`)})},t))}),(0,U.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,U.jsx)(`button`,{type:`button`,onClick:()=>l?_(0):s(e=>!e),className:`grid size-9 shrink-0 place-items-center rounded-md bg-[#17452f] text-white hover:bg-[#1f5b40]`,"aria-label":l?`Play again`:a?`Pause`:`Play`,children:l?(0,U.jsx)(c,{className:`size-4`}):a?(0,U.jsx)(De,{className:`size-4`}):(0,U.jsx)(ke,{className:`size-4`})}),(0,U.jsx)(`button`,{type:`button`,onClick:()=>_(0),className:`grid size-9 shrink-0 place-items-center rounded-md border hover:bg-muted`,"aria-label":`Restart`,children:(0,U.jsx)(c,{className:`size-4`})}),(0,U.jsxs)(`div`,{className:`min-w-0 text-sm`,"aria-live":`polite`,children:[(0,U.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`Step `,r+1,` of `,e.length]}),(0,U.jsx)(`div`,{className:`font-medium`,children:e[r]?.caption})]})]}),d&&(0,Xe.createPortal)((0,U.jsxs)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute z-[60] transition-[left,top] duration-700 ease-in-out`,style:{left:d.x,top:d.y},children:[d.clicking&&(0,U.jsx)(`span`,{className:`absolute -top-4 -left-4 size-8 animate-ping rounded-full bg-[#3fae73]/60`}),(0,U.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,className:`drop-shadow-md`,children:(0,U.jsx)(`path`,{d:`M4 2l15 9-6.5 1.5L16 20l-3 1.5-3.5-7.5L4 19z`,fill:`#17452f`,stroke:`#fff`,strokeWidth:`1.5`})})]}),document.body)]})}var et=B({default:()=>at,meta:()=>tt}),tt={title:`Sales pivot`,description:`A sales manager builds a pivot of the quarter's orders: regions and countries down the side, quarters across, overdue orders only, and takes it to Excel.`,docs:`pivot-designer.html`},nt=I(),rt=[{field:`region`,label:`Region`,kind:`dimension`,group:`Where`},{field:`country`,label:`Country`,kind:`dimension`,group:`Where`},{field:`customer`,label:`Customer`,kind:`dimension`,group:`Who`},{field:`product`,label:`Product`,kind:`dimension`,group:`What`},{field:`status`,label:`Status`,kind:`dimension`,group:`What`},{field:`quarter`,label:`Quarter`,kind:`dimension`,group:`When`},{field:`amount`,label:`Amount`,kind:`measure`,group:`Numbers`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`quantity`,label:`Units`,kind:`measure`,group:`Numbers`}],it={numFmt:`"$"#,##0`};function at(){let[e,t]=H.useState(()=>S(rt)),[n,r]=H.useState(null),i=H.useRef(null),a=H.useRef(null),o=H.useCallback(e=>{a.current=e},[]),s=e=>()=>W(i.current,`aside[aria-label="Pivot fields"] [draggable="true"]`,e),c=e=>()=>i.current?.querySelector(`[data-well="${e}"]`),d=H.useMemo(()=>[{caption:`120 orders as a pivot: regions down the side, the total of each region's orders in the cells.`,run:e=>e.point(()=>i.current?.querySelector(`table`))},{caption:`Drag Quarter into Columns. Each region spreads across the quarters, with a total on the right.`,run:async e=>{await e.click(s(`Quarter`)),await e.point(c(`cols`)),t(e=>T(e,rt,`quarter`,`cols`))}},{caption:`Add Country to Rows. Every region opens into its countries and keeps its subtotal.`,run:async e=>{await e.click(s(`Country`)),await e.point(c(`rows`)),t(e=>e.rows.includes(`country`)?e:T(e,rt,`country`,`rows`))}},{caption:`Switch Sum to Average from the value's menu. Every cell is worked out again from the orders behind it.`,run:async e=>{await e.click(()=>i.current?.querySelector(`[data-well="values"] button[aria-label="Options for Amount"]`)),t(e=>l(e,rt,0,`avg`))}},{caption:`Put Status in Filters and keep only Overdue. The pivot now shows the money that is late.`,run:async e=>{await e.click(s(`Status`)),await e.point(c(`filters`)),t(e=>{let t=T(e,rt,`status`,`filters`);return{...t,filters:t.filters.map(e=>e.field===`status`?{...e,allowed:[`Overdue`]}:e)}})}},{caption:`Export to Excel. Regions become outline rows you can collapse, and every cell is a number you can sum.`,run:async e=>{if(await e.click(()=>W(i.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await G(),!a.current)return;let t=await g(a.current.table,{download:!1,rowStyle:u});r({blob:t,name:`overdue-by-region.xlsx`,kind:`xlsx`,select:`B3`,note:`the exported file`})}}],[]),f=H.useCallback(()=>{t(S(rt)),r(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:d,reset:f}),(0,U.jsx)(Ye,{rootRef:i,preview:n,onClosePreview:()=>r(null),children:(0,U.jsx)(pe,{data:nt,fields:rt,layout:e,onLayoutChange:t,pivotOptions:it,onPivotChange:o,actions:e=>(0,U.jsx)(V,{table:e.table,fileName:`sales-pivot`,rowStyle:u})})})]})}function ot(e){return st(e)||typeof e==`function`||ct(e)}function st(e){return typeof e==`function`&&(()=>{let t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()}function ct(e){return typeof e==`object`&&typeof e.$$typeof==`symbol`&&[`react.memo`,`react.forward_ref`].includes(e.$$typeof.description)}function lt(e,t){return e==null?null:ot(e)?H.createElement(e,t):e}function ut(e){if(`cell`in e&&e.cell){let t=e.cell,n=t.column.columnDef,r=t,i=n;return r.getIsAggregated?.()?lt(i.aggregatedCell??n.cell,t.getContext()):r.getIsPlaceholder?.()?null:lt(n.cell,t.getContext())}return`header`in e&&e.header?lt(e.header.column.columnDef.header,e.header.getContext()):`footer`in e&&e.footer?lt(e.footer.column.columnDef.footer,e.footer.getContext()):null}function dt({update:e,notify:t,unwatched:n}){return{link:r,unlink:i,propagate:a,checkDirty:o,shallowPropagate:s};function r(e,t,n){let r=t.depsTail;if(r!==void 0&&r.dep===e)return;let i=r===void 0?t.deps:r.nextDep;if(i!==void 0&&i.dep===e){i.version=n,t.depsTail=i;return}let a=e.subsTail;if(a!==void 0&&a.version===n&&a.sub===t)return;let o=t.depsTail=e.subsTail={version:n,dep:e,sub:t,prevDep:r,nextDep:i,prevSub:a,nextSub:void 0};i!==void 0&&(i.prevDep=o),r===void 0?t.deps=o:r.nextDep=o,a===void 0?e.subs=o:a.nextSub=o}function i(e,t=e.sub){let r=e.dep,i=e.prevDep,a=e.nextDep,o=e.nextSub,s=e.prevSub;return a===void 0?t.depsTail=i:a.prevDep=i,i===void 0?t.deps=a:i.nextDep=a,o===void 0?r.subsTail=s:o.prevSub=s,s===void 0?(r.subs=o)===void 0&&n(r):s.nextSub=o,a}function a(e){let n=e.nextSub,r;top:do{let i=e.sub,a=i.flags;if(a&60?a&12?a&4?!(a&48)&&c(e,i)?(i.flags=a|40,a&=1):a=0:i.flags=a&-9|32:a=0:i.flags=a|32,a&2&&t(i),a&1){let t=i.subs;if(t!==void 0){let i=(e=t).nextSub;i!==void 0&&(r={value:n,prev:r},n=i);continue}}if((e=n)!==void 0)n=e.nextSub;else{for(;r!==void 0;)if(e=r.value,r=r.prev,e!==void 0){n=e.nextSub;continue top}break}}while(1)}function o(t,n){let r,i=0,a=!1;top:do{let o=t.dep,c=o.flags;if(n.flags&16)a=!0;else if((c&17)==17){if(e(o)){let e=o.subs;e.nextSub!==void 0&&s(e),a=!0}}else if((c&33)==33){(t.nextSub!==void 0||t.prevSub!==void 0)&&(r={value:t,prev:r}),t=o.deps,n=o,++i;continue}if(!a){let e=t.nextDep;if(e!==void 0){t=e;continue}}for(;i--;){let i=n.subs,o=i.nextSub!==void 0;if(o?(t=r.value,r=r.prev):t=i,a){if(e(n)){o&&s(i),n=t.sub;continue}a=!1}else n.flags&=-33;n=t.sub;let c=t.nextDep;if(c!==void 0){t=c;continue top}}return a}while(1)}function s(e){do{let n=e.sub,r=n.flags;(r&48)==32&&(n.flags=r|16,(r&6)==2&&t(n))}while((e=e.nextSub)!==void 0)}function c(e,t){let n=t.depsTail;for(;n!==void 0;){if(n===e)return!0;n=n.prevDep}return!1}}function ft(e,t,n){let r=typeof e==`object`,i=r?e:void 0;return{next:(r?e.next:e)?.bind(i),error:(r?e.error:t)?.bind(i),complete:(r?e.complete:n)?.bind(i)}}var pt=[],mt=0,{link:ht,unlink:gt,propagate:_t,checkDirty:vt,shallowPropagate:yt}=dt({update(e){return e._update()},notify(e){pt[xt++]=e,e.flags&=-3},unwatched(e){e.depsTail!==void 0&&(e.depsTail=void 0,e.flags=17,Tt(e))}}),bt=0,xt=0,St,Ct=0;function wt(e){try{++Ct,e()}finally{--Ct||Et()}}function Tt(e){let t=e.depsTail,n=t===void 0?e.deps:t.nextDep;for(;n!==void 0;)n=gt(n,e)}function Et(){if(!(Ct>0)){for(;bt<xt;){let e=pt[bt];pt[bt++]=void 0,e.notify()}bt=0,xt=0}}function Dt(e,t){let n=typeof e==`function`,r=e,i={_snapshot:n?void 0:e,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:+!n,get(){return St!==void 0&&ht(i,St,mt),i._snapshot},subscribe(e){let t=ft(e),n={current:!1},r=Ot(()=>{i.get(),n.current?(St=void 0,t.next?.(i._snapshot)):n.current=!0});return{unsubscribe:()=>{r.stop()}}},_update(e){let a=St,o=t?.compare??Object.is;if(n)St=i,++mt,i.depsTail=void 0;else if(e===void 0)return!1;n&&(i.flags=5);try{let t=i._snapshot,a=typeof e==`function`?e(t):e===void 0&&n?r(t):e;return t===void 0||!o(t,a)?(i._snapshot=a,!0):!1}finally{St=a,n&&(i.flags&=-5),Tt(i)}}};return n?(i.flags=17,i.get=function(){let e=i.flags;if(e&16||e&32&&vt(i.deps,i)){if(i._update()){let e=i.subs;e!==void 0&&yt(e)}}else e&32&&(i.flags=e&-33);return St!==void 0&&ht(i,St,mt),i._snapshot}):i.set=function(e){if(i._update(e)){let e=i.subs;e!==void 0&&(_t(e),yt(e),Et())}},i}function Ot(e){let t=()=>{let t=St;St=n,++mt,n.depsTail=void 0,n.flags=6;try{return e()}finally{St=t,n.flags&=-5,Tt(n)}},n={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:6,notify(){let e=this.flags;e&16||e&32&&vt(this.deps,this)?t():this.flags=2},stop(){this.flags=0,this.depsTail=void 0,Tt(this)}};return t(),n}function kt(e,t){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,r]of e)if(!t.has(n)||!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();let n=At(e);if(n.length!==At(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function At(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}var jt=m();function Mt(e,t){return e===t}function Nt(e,t=e=>e,n){let r=n?.compare??Mt,i=(0,H.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,H.useCallback)(()=>e.get(),[e]);return(0,jt.useSyncExternalStoreWithSelector)(i,a,a,t,r)}function Pt(e){let t=Nt(e.source,e.selector,{compare:kt});return typeof e.children==`function`?e.children(t):e.children}function Ft(e){let t=e;return Object.defineProperty(e,"state",{get(){return e.get()}}),`set`in e&&(t.setState=e.set.bind(e)),t}function It(e){let{createAtom:t,batch:n}=e,r=t(0);return{createOptionsStore:!1,wrapExternalAtoms:!1,addSubscription:()=>{throw Error(`Feature not supported in current reactivity implementation`)},unmount:()=>{throw Error(`Feature not supported in current reactivity implementation`)},schedule:e.schedule??(e=>queueMicrotask(e)),batch:n,untrack:e=>e(),createReadonlyAtom:(e,n)=>{let i=n?.compare??Object.is,a=!1,o,s=()=>{let t=e();return a&&i(o,t)||(o=t,a=!0),o},c=t(()=>(r.get(),s()),{compare:i});return{get:s,subscribe:c.subscribe.bind(c)}},createWritableAtom:(e,n)=>t(e,{compare:n?.compare}),commit:()=>{r.set(e=>e+1)}}}function Lt(e,t=Object.is){let n=!1,r;return{get:e.get,markCommitted:e=>{r=e,n=!0},subscribe:i=>e.subscribe(e=>{n&&t(r,e)||i(e)})}}function Rt(){return It({createAtom:Dt,batch:wt})}function zt(e,t){return typeof e==`function`?e(t):e}function Bt(e){if(Array.isArray(e))return e.map(Bt);if(e&&typeof e==`object`){let t=Object.getPrototypeOf(e);if(t!==Object.prototype&&t!==null)return e;let n=t===null?K():{},r=Object.keys(e);for(let t=0;t<r.length;t++){let i=r[t];Object.defineProperty(n,i,{configurable:!0,enumerable:!0,value:Bt(e[i]),writable:!0})}return n}return e}function Vt(e,t){let n=Object.keys(t),r=e;for(let e=0;e<n.length;e++){let i=n[e];!i.startsWith(`_memo_`)&&i!==`_cellsCache`&&(r[i]=t[i])}return e}function K(){return Object.create(null)}function Ht(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ut(e,t){return n=>{(t.options.atoms?.[e]??t.baseAtoms[e]).set(e=>zt(n,e))}}function Wt(e){if(typeof e!=`object`||!e)return!1;if(Array.isArray(e))return!0;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Gt(e){return Reflect.ownKeys(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}var Kt=3;function qt(e,t){return Jt(e,t,Kt)}function Jt(e,t,n){if(Object.is(e,t))return!0;if(n<=0||!Wt(e)||!Wt(t)||(Array.isArray(e)||Array.isArray(t))&&(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length))return!1;let r=Gt(e),i=Gt(t);if(r.length!==i.length)return!1;let a=e,o=t;for(let e=0;e<r.length;e++){let i=r[e];if(!Object.prototype.propertyIsEnumerable.call(t,i)||!Jt(a[i],o[i],n-1))return!1}return!0}function Yt(e,t,n,r=qt){let i=`on${t.charAt(0).toUpperCase()}${t.slice(1)}Change`,a=e.options[i];a&&a(e=>{let t=zt(n,e);return r(e,t)?e:t})}function Xt(e){return e instanceof Function}function Zt(e,t){let n=[],r=e=>{e.forEach(e=>{n.push(e);let i=t(e);i.length&&r(i)})};return r(e),n}var Qt=({fn:e,memoDeps:t,onAfterCompare:n,onAfterUpdate:r,onBeforeCompare:i,onBeforeUpdate:a})=>{let o=[],s;return c=>{i?.();let l=t?.(c),u=!l||l.length!==o?.length;if(!u&&l){for(let e=0;e<l.length;e++)if(l[e]!==o[e]){u=!0;break}}return n?.(u),u&&(o=l,a?.(),s=e(...l??[]),r?.(s)),s}};function $t(e){let t=!1;return()=>{t?e():t=!0}}function en({feature:e,fnName:t,objectId:n,onAfterUpdate:r,table:i,...a}){let o={onAfterUpdate:r?()=>{let{schedule:e,untrack:t}=i._reactivity;e(()=>t(()=>r()))}:void 0};return Qt({...a,...o})}function tn(e,t=`_`){let[n,r]=e.replace(t,` `).split(` `);return{fnKey:r,fnName:`${n}.${r}`,parentName:n}}function q(e,t,n){for(let[r,{fn:i,memoDeps:a}]of Object.entries(n)){let{fnKey:n,fnName:o}=tn(r);t[n]=a?en({memoDeps:a,fn:i,fnName:o,table:t,feature:e}):i}}function J(e,t,n,r){for(let[i,{fn:a,memoDeps:o}]of Object.entries(r)){let{fnKey:r,fnName:s}=tn(i);if(o){let i=`_memo_${r}`;t[r]=function(...t){if(!this[i]){let t=this;this[i]=en({memoDeps:e=>o(t,e),fn:(...e)=>a(t,...e),fnName:s,objectId:t.id,table:n,feature:e})}return this[i](...t)}}else t[r]=function(...e){return a(this,...e)}}}function Y(e,t,n,...r){return e[t]?.(...r)??n(e,...r)}function nn(e){return e.row.getValue(e.column.id)}function rn(e){return e.getValue()??e.table.options.renderFallbackValue}function an(e){return{table:e.table,column:e.column,row:e.row,cell:e,getValue:()=>e.getValue(),renderValue:()=>e.renderValue()}}var on={assignCellPrototype:(e,t)=>{J(`coreCellsFeature`,e,t,{cell_getValue:{fn:e=>nn(e)},cell_renderValue:{fn:e=>rn(e)},cell_getContext:{fn:e=>an(e),memoDeps:e=>[e]}})}};function sn(e){if(!e._columnPrototype){e._columnPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignColumnPrototype?.(e._columnPrototype,e)}return e._columnPrototype}function cn(e,t,n,r){let i={...e.getDefaultColumnDef(),...t},a=i.accessorKey,o=a===void 0?void 0:String(a),s=i.id??o?.replaceAll(`.`,`_`)??(typeof i.header==`string`?i.header:void 0),c;if(i.accessorFn)c=i.accessorFn;else if(a!==void 0){if(typeof a==`string`&&a.includes(`.`)){let e=a.split(`.`);c=t=>{let n=t;for(let t=0;t<e.length;t++){let r=e[t];n=n?.[r]}return n}}else c=e=>e[i.accessorKey]}if(!s)throw Error();let l=sn(e),u=Object.create(l);u.accessorFn=c,u.columnDef=i,u.columns=[],u.depth=n,u.id=`${String(s)}`,u.parent=r;let d=e._columnInstanceInitFns;for(let e=0;e<d.length;e++)d[e](u);return u}function ln(e){return e.getIsVisible?.()??!0}function un(e){return e.getVisibleLeafColumns?.()??e.getAllLeafColumns()}function dn(e){return e.getVisibleCells?.()??e.getAllCells()}function fn(e){return e.getVisibleCellsByColumnId?.()??e.getAllCellsByColumnId()}function pn(e,t){let n=e,r=t;return n.getOrderColumnsFn?.()(r)??n._orderGroupedColumns?.(r)??t}function mn(e,t,n,r){return e._orderByColumnPinning?.(t,n,r)??t}function hn(e,t){return e.getPinnedVisibleLeafColumns?.(t)??(t&&t!==`center`?[]:un(e))}function gn(e){return e.getGlobalFilterFn?.()}function _n(e){return e.getCanGlobalFilter?.()??!1}function vn(e,t){return e._expandRows?.(t)??t}function yn(e){e.autoResetExpanded?.()}function bn(e){e.autoResetPageIndex?.()}function xn(e){e.autoResetSorting?.()}function Sn(e){e.autoResetCellSelection?.()}function Cn(e){return e._aggregateColumnValue}function wn(e){return[e,...e.columns.flatMap(e=>e.getFlatColumns())]}function Tn(e){if(e.columns.length){let t=e.columns.flatMap(e=>e.getLeafColumns());return pn(e.table,t)}return[e]}function En(e){return{header:e=>{let t=e.header.column.columnDef;return t.accessorKey?t.accessorKey:t.accessorFn?t.id:null},cell:e=>e.renderValue()?.toString?.()??null,...Object.values(e._features).reduce((e,t)=>Object.assign(e,t.getDefaultColumnDef?.()),{}),...e.options.defaultColumn}}function Dn(e,t,n,r=0){let i=Array(t.length);for(let a=0;a<t.length;a++){if(!(a in t))continue;let o=t[a],s=cn(e,o,r,n),c=o;s.columns=c.columns?Dn(e,c.columns,s,r+1):[],i[a]=s}return i}function On(e){return Dn(e,e.options.columns)}function kn(e){return e.getAllColumns().flatMap(e=>e.getFlatColumns())}function An(e){let t=K(),n=e.getAllFlatColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function jn(e){return pn(e,e.getAllColumns().flatMap(e=>e.getLeafColumns()))}function Mn(e){let t=K(),n=e.getAllLeafColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function Nn(e,t){return e.getAllFlatColumnsById()[t]}var Pn={assignColumnPrototype:(e,t)=>{J(`coreColumnsFeature`,e,t,{column_getFlatColumns:{fn:e=>wn(e),memoDeps:e=>[e.table.options.columns]},column_getLeafColumns:{fn:e=>Tn(e),memoDeps:e=>[e.table.atoms.columnOrder?.get(),e.table.atoms.grouping?.get(),e.table.options.columns,e.table.options.groupedColumnMode]}})},constructTableAPIs:e=>{q(`coreColumnsFeature`,e,{table_getDefaultColumnDef:{fn:()=>En(e),memoDeps:()=>[e.options.defaultColumn]},table_getAllColumns:{fn:()=>On(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumns:{fn:()=>kn(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumnsById:{fn:()=>An(e),memoDeps:()=>[e.options.columns]},table_getAllLeafColumns:{fn:()=>jn(e),memoDeps:()=>[e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getAllLeafColumnsById:{fn:()=>Mn(e),memoDeps:()=>[e.getAllLeafColumns()]},table_getColumn:{fn:t=>Nn(e,t)}})}};function Fn(e){if(!e._headerPrototype){e._headerPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignHeaderPrototype?.(e._headerPrototype,e)}return e._headerPrototype}function In(e,t,n){let r=Fn(e),i=Object.create(r);i.colSpan=0,i.column=t,i.depth=n.depth,i.headerGroup=null,i.id=n.id??t.id,i.index=n.index,i.isPlaceholder=!!n.isPlaceholder,i.placeholderId=n.placeholderId,i.rowSpan=0,i.subHeaders=[];let a=e._headerInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function Ln(e,t=1){let n=t;for(let r=0;r<e.length;r++){let i=e[r];ln(i)&&i.columns.length&&(n=Math.max(n,Ln(i.columns,t+1)))}return n}function Rn(e,t){return e?`${e}_${t}`:String(t)}function zn(e,t,n,r){let i=e??``;return t&&(i=i?`${i}_${t}`:String(t)),n&&(i=i?`${i}_${n}`:n),r&&(i=i?`${i}_${r}`:r),i}function Bn(e,t){let n=0;for(let r=0;r<e.length;r++)e[r].column===t&&n++;return n}function Vn(e,t,n,r,i,a){let o={depth:t,id:Rn(r,t),headers:[]},s=[];for(let i=0;i<e.length;i++){if(!(i in e))continue;let a=e[i],c=s[s.length-1],l=a.column.depth===o.depth,u,d=!1;if(l&&a.column.parent?u=a.column.parent:(u=a.column,d=!0),c&&c.column===u)c.subHeaders.push(a);else{let e=In(n,u,{id:zn(r,t,u.id,a.id),isPlaceholder:d,placeholderId:d?String(Bn(s,u)):void 0,depth:t,index:s.length});e.subHeaders.push(a),s.push(e)}o.headers.push(a),a.headerGroup=o}for(let e=0;e<a.length;e++)a[e](o);i.push(o),t>0&&Vn(s,t-1,n,r,i,a)}function Hn(e){for(let t=0;t<e.length;t++){let n=e[t];if(!ln(n.column))continue;let r=0;if(n.subHeaders.length){Hn(n.subHeaders);for(let e=0;e<n.subHeaders.length;e++){let t=n.subHeaders[e];ln(t.column)&&(r+=t.colSpan)}}else r=1;if(n.colSpan=r,n.isPlaceholder&&n.subHeaders.length===1&&n.subHeaders[0].column===n.column){let e=1,t=n.subHeaders[0];for(;t;)t.rowSpan=0,e++,t=t.subHeaders.length===1&&t.subHeaders[0].column===n.column?t.subHeaders[0]:void 0;n.rowSpan=e}else n.rowSpan=1}}function Un(e,t,n,r){let i=Ln(e),a=[],o=n._headerGroupInstanceInitFns,s=Array(t.length);for(let e=0;e<t.length;e++)e in t&&(s[e]=In(n,t[e],{depth:i,index:e}));return Vn(s,i-1,n,r,a,o),a.reverse(),Hn(a[0]?.headers??[]),a}function Wn(e,t){for(let n=0;n<e.subHeaders.length;n++)Wn(e.subHeaders[n],t);t.push(e)}function Gn(e){let t=[];return Wn(e,t),t}function Kn(e){return{column:e.column,header:e,table:e.column.table}}function qn(e){return Un(e.getAllColumns(),mn(e,un(e),e=>e.id),e)}function Jn(e){return[...e.getHeaderGroups()].reverse()}function Yn(e){let t=e.getHeaderGroups(),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Xn(e){let t=e.getHeaderGroups()[0]?.headers??[],n=[];for(let e=0;e<t.length;e++){let r=t[e].getLeafHeaders();for(let e=0;e<r.length;e++)n.push(r[e])}return n}var Zn={assignHeaderPrototype:(e,t)=>{J(`coreHeadersFeature`,e,t,{header_getLeafHeaders:{fn:e=>Gn(e),memoDeps:e=>[e.column.table.options.columns]},header_getContext:{fn:e=>Kn(e),memoDeps:e=>[e.column.table.options.columns]}})},constructTableAPIs:e=>{q(`coreHeadersFeature`,e,{table_getHeaderGroups:{fn:()=>qn(e),memoDeps:()=>[e.options.columns,e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.options.groupedColumnMode]},table_getFooterGroups:{fn:()=>Jn(e),memoDeps:()=>[e.getHeaderGroups()]},table_getFlatHeaders:{fn:()=>Yn(e),memoDeps:()=>[e.getHeaderGroups()]},table_getLeafHeaders:{fn:()=>Xn(e),memoDeps:()=>[e.getHeaderGroups()]}})}};function Qn(e){if(!e._rowPrototype){e._rowPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignRowPrototype?.(e._rowPrototype,e)}return e._rowPrototype}var $n=(e,t,n,r,i,a,o)=>{let s=Qn(e),c=Object.create(s);c._displayIndexCache=-1,c._uniqueValuesCache=K(),c._valuesCache=K(),c.depth=i,c.id=t,c.index=r,c.original=n,c.parentId=o,c.subRows=a??[];let l=e._rowInstanceInitFns;for(let e=0;e<l.length;e++)l[e](c);return c};function er(){return e=>en({feature:`coreRowModelsFeature`,table:e,fnName:`table.getCoreRowModel`,memoDeps:()=>[e.options.data],fn:()=>nr(e,e.options.data),onAfterUpdate:$t(()=>{yn(e),bn(e),xn(e),Sn(e)})})}function tr(e,t,n,r=0,i){let a=[];for(let o=0;o<n.length;o++){let s=n[o],c=$n(e,e.getRowId(s,o,i),s,o,r,void 0,i?.id);t.flatRows.push(c),t.rowsById[c.id]=c,a.push(c),e.options.getSubRows&&(c.originalSubRows=e.options.getSubRows(s,o),c.originalSubRows?.length&&(c.subRows=tr(e,t,c.originalSubRows,r+1,c)))}return a}function nr(e,t){let n={rows:[],flatRows:[],rowsById:K()};return n.rows=tr(e,n,t),n}function rr(e){return e._rowModels.coreRowModel||(e._rowModels.coreRowModel=e.options.features.coreRowModel?.(e)??er()(e)),e._rowModels.coreRowModel()}function ir(e){return e.getCoreRowModel()}function ar(e){return e._rowModels.filteredRowModel||(e._rowModels.filteredRowModel=e.options.features.filteredRowModel?.(e)),e.options.manualFiltering||!e._rowModels.filteredRowModel?e.getPreFilteredRowModel():e._rowModels.filteredRowModel()}function or(e){return e.getFilteredRowModel()}function sr(e){return e._rowModels.groupedRowModel||(e._rowModels.groupedRowModel=e.options.features.groupedRowModel?.(e)),e.options.manualGrouping||!e._rowModels.groupedRowModel?e.getPreGroupedRowModel():e._rowModels.groupedRowModel()}function cr(e){return e.getGroupedRowModel()}function lr(e){return e._rowModels.sortedRowModel||(e._rowModels.sortedRowModel=e.options.features.sortedRowModel?.(e)),e.options.manualSorting||!e._rowModels.sortedRowModel?e.getPreSortedRowModel():e._rowModels.sortedRowModel()}function ur(e){return e.getSortedRowModel()}function dr(e){return e._rowModels.expandedRowModel||(e._rowModels.expandedRowModel=e.options.features.expandedRowModel?.(e)),e.options.manualExpanding||!e._rowModels.expandedRowModel?e.getPreExpandedRowModel():e._rowModels.expandedRowModel()}function fr(e){return e.getExpandedRowModel()}function pr(e){return e._rowModels.paginatedRowModel||(e._rowModels.paginatedRowModel=e.options.features.paginatedRowModel?.(e)),e.options.manualPagination||!e._rowModels.paginatedRowModel?e.getPrePaginatedRowModel():e._rowModels.paginatedRowModel()}function mr(e){return e.getPaginatedRowModel()}var hr={constructTableAPIs:e=>{q(`coreRowModelsFeature`,e,{table_getCoreRowModel:{fn:()=>rr(e)},table_getPreFilteredRowModel:{fn:()=>ir(e)},table_getFilteredRowModel:{fn:()=>ar(e)},table_getPreGroupedRowModel:{fn:()=>or(e)},table_getGroupedRowModel:{fn:()=>sr(e)},table_getPreSortedRowModel:{fn:()=>cr(e)},table_getSortedRowModel:{fn:()=>lr(e)},table_getPreExpandedRowModel:{fn:()=>ur(e)},table_getExpandedRowModel:{fn:()=>dr(e)},table_getPrePaginatedRowModel:{fn:()=>fr(e)},table_getPaginatedRowModel:{fn:()=>pr(e)},table_getRowModel:{fn:()=>mr(e)}})}};function gr(e){if(!e._cellPrototype){e._cellPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignCellPrototype?.(e._cellPrototype,e)}return e._cellPrototype}function _r(e,t,n){let r=gr(n),i=Object.create(r);i.column=e,i.id=`${t.id}_${e.id}`,i.row=t;let a=n._cellInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function vr(e){let t=e.table.getRowsInDisplayOrder(),n=e._displayIndexCache;return t[n]===e?n:-1}function yr(e){let t=e.getPrePaginatedRowModel(),n=e.options.paginateExpandedRows===!1?vn(e,t).rows:t.rows;for(let e=0;e<n.length;e++)n[e]._displayIndexCache=e;return n}function br(e,t){if(Ht(e._valuesCache,t))return e._valuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return e._valuesCache[t]=n.accessorFn(e.original,e.index),e._valuesCache[t]}function xr(e,t){if(Ht(e._uniqueValuesCache,t))return e._uniqueValuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return n.columnDef.getUniqueValues?(e._uniqueValuesCache[t]=n.columnDef.getUniqueValues(e.original,e.index),e._uniqueValuesCache[t]):(e._uniqueValuesCache[t]=[e.getValue(t)],e._uniqueValuesCache[t])}function Sr(e,t){return e.getValue(t)??e.table.options.renderFallbackValue}function Cr(e){return Zt(e.subRows,e=>e.subRows)}function wr(e){let t=e.getCoreRowModel().flatRows,n=0;for(let e=0;e<t.length;e++)n=Math.max(n,t[e].depth);return n}function Tr(e){if(e.parentId)return e.table.getCoreRowModel().rowsById[e.parentId]??e.table.getRow(e.parentId,!0)}function Er(e){let t=[],n=e;for(;;){let e=n.getParentRow();if(!e)break;t.push(e),n=e}return t.reverse()}function Dr(e){let t=e.table.getAllLeafColumns(),n=e._cellsCache;n||=e._cellsCache=new WeakMap;let r=Array(t.length);for(let i=0;i<t.length;i++){let a=t[i],o=n.get(a);o||(o=_r(a,e,e.table),n.set(a,o)),r[i]=o}return r}function Or(e){let t=K(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];t[r.column.id]=r}return t}function kr(e,t,n,r){return t.options.getRowId?.(e,n,r)??(r?`${r.id}.${n}`:String(n))}function Ar(e,t,n){let r=(n?e.getPrePaginatedRowModel():e.getRowModel()).rowsById[t];if(!r&&(r=e.getCoreRowModel().rowsById[t],!r))throw Error();return r}var jr={assignRowPrototype:(e,t)=>{J(`coreRowsFeature`,e,t,{row_getDisplayIndex:{fn:e=>vr(e)},row_getAllCellsByColumnId:{fn:e=>Or(e),memoDeps:e=>[e.getAllCells()]},row_getAllCells:{fn:e=>Dr(e),memoDeps:e=>[e.table.getAllLeafColumns()]},row_getLeafRows:{fn:e=>Cr(e),memoDeps:e=>[e.subRows]},row_getParentRow:{fn:e=>Tr(e)},row_getParentRows:{fn:e=>Er(e)},row_getUniqueValues:{fn:(e,t)=>xr(e,t)},row_getValue:{fn:(e,t)=>br(e,t)},row_renderValue:{fn:(e,t)=>Sr(e,t)}})},constructTableAPIs:e=>{q(`coreRowsFeature`,e,{table_getRowsInDisplayOrder:{fn:()=>yr(e),memoDeps:()=>[e.getPrePaginatedRowModel().rows,e.options.paginateExpandedRows,e.options.paginateExpandedRows===!1?e.atoms.expanded?.get():void 0]},table_getRowId:{fn:(t,n,r)=>kr(t,e,n,r)},table_getRow:{fn:(t,n)=>Ar(e,t,n)},table_getMaxSubRowDepth:{fn:()=>wr(e),memoDeps:()=>[e.getCoreRowModel()]}})}};function Mr(e,t,n=(e,t)=>e===t){let r=t===void 0?e.options.state:t;e._reactivity.batch(()=>{if(r)for(let t in r){let i=e.baseAtoms[t];if(!i)continue;let a=r[t],o=a===void 0?e.initialState[t]:a;n(e._reactivity.untrack(()=>i.get()),o)||i.set(()=>o)}})}function Nr(e,t,n=(e,t)=>e===t){e._reactivity.batch(()=>{Mr(e,t,n),e._reactivity.commit?.()})}function Pr(e){let t=Bt(e.initialState);e._reactivity.batch(()=>{let n=Object.keys(t);for(let r=0;r<n.length;r++){let i=n[r];e.baseAtoms[i].set(t[i])}});let n=Object.values(e._features);for(let t=0;t<n.length;t++)n[t].resetTableInstanceData?.(e)}function Fr(e,t){let{features:n,atoms:r,initialState:i}=e.options;if(!e.options.mergeOptions)return{...e.options,...t,features:n,atoms:r,initialState:i};let a=e.options.mergeOptions(e.options,t),o={...Object.getOwnPropertyDescriptors(a)};return Object.defineProperties(Object.create(Object.getPrototypeOf(a)),{...o,features:{value:n,enumerable:!0,configurable:!0,writable:!0},atoms:{value:r,enumerable:!0,configurable:!0,writable:!0},initialState:{value:i,enumerable:!0,configurable:!0,writable:!0}})}function Ir(e,t,n){let r=Fr(e,zt(t,e.options));e.optionsStore?e.optionsStore.set(()=>r):e.options=r,n?.syncExternalState!==!1&&Nr(e,r.state??null)}var Lr={coreCellsFeature:on,coreColumnsFeature:Pn,coreHeadersFeature:Zn,coreRowModelsFeature:hr,coreRowsFeature:jr,coreTablesFeature:{constructTableAPIs:e=>{q(`coreTablesFeature`,e,{table_reset:{fn:()=>Pr(e)},table_setOptions:{fn:t=>Ir(e,t)}})}}};function Rr(){return{accessor:(e,t)=>typeof e==`function`?{...t,accessorFn:e}:{...t,accessorKey:e},columns:e=>e,display:e=>e,group:e=>e}}function zr(){return{}}function Br(e){return e}function Vr(e,t={}){return Object.values(e).forEach(e=>{t=e.getInitialState?.(t)??t}),Bt(t)}function Hr(e){let t=e.features.coreReactivityFeature,{aggregationFns:n,columnMeta:r,coreRowModel:i,expandedRowModel:a,facetedMinMaxValues:o,facetedRowModel:s,facetedUniqueValues:c,filterFns:l,filterMeta:u,filteredRowModel:d,groupedRowModel:f,paginatedRowModel:p,sortFns:m,sortedRowModel:h,tableMeta:g,..._}=e.features,v={_cellInstanceInitFns:[],_columnInstanceInitFns:[],_features:{...Lr,..._},_headerGroupInstanceInitFns:[],_headerInstanceInitFns:[],_reactivity:t,_rowInstanceInitFns:[],_rowModelFns:{aggregationFns:n,filterFns:l,sortFns:m},_rowModels:{},atoms:{},baseAtoms:{}},y=Object.values(v._features),b={...y.reduce((e,t)=>Object.assign(e,t.getDefaultTableOptions?.(v)),{}),...e};if(t.wrapExternalAtoms&&b.atoms)for(let[e,n]of Object.entries(b.atoms)){let r=n,i=t.createWritableAtom(r.get(),{debugName:`externalAtom/${e}`});b.atoms[e]=i;let a=!1,o=r.subscribe(e=>{a||i.set(e)}),s=i.subscribe(e=>{a=!0,r.set(e),a=!1});t.addSubscription(o),t.addSubscription(s)}t.createOptionsStore?(v.optionsStore=t.createWritableAtom(b,{debugName:`table/optionsStore`}),Object.defineProperty(v,"options",{configurable:!0,enumerable:!0,get(){return v.optionsStore.get()},set(e){v.optionsStore.set(()=>e)}})):v.options=b,v.initialState=Vr(v._features,v.options.initialState);let x=Object.keys(v.initialState);for(let e=0;e<x.length;e++){let n=x[e];v.baseAtoms[n]=t.createWritableAtom(v.initialState[n],{debugName:`table/baseAtoms/${n}`}),v.atoms[n]=t.createReadonlyAtom(()=>{let e=v.options,t=e.atoms?.[n],r=t?t.get():v.baseAtoms[n].get();if(t)return r;let i=e.state;if(i&&Ht(i,n)){let e=i[n];return e===void 0?v.initialState[n]:e}return r},{debugName:`table/atoms/${n}`})}Mr(v),v.store=Ft(t.createReadonlyAtom(()=>{let e={};for(let t=0;t<x.length;t++){let n=x[t];e[n]=v.atoms[n].get()}return e},{compare:kt,debugName:`table/store`}));for(let e=0;e<y.length;e++){let t=y[e];t.initTableInstanceData?.(v),t.initCellInstanceData&&v._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)),t.initColumnInstanceData&&v._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)),t.initHeaderGroupInstanceData&&v._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)),t.initHeaderInstanceData&&v._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)),t.initRowInstanceData&&v._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)),t.constructTableAPIs?.(v)}return v}function Ur(e){return!!e&&typeof e==`object`&&`aggregate`in e}function Wr(e){return!!e&&typeof e==`object`&&`id`in e&&`aggregationFn`in e}function Gr(e){return e===void 0||Number.isNaN(e)?0:Math.max(0,Math.floor(e))}function Kr(e,t,n,r,i){if(e.subRows.length&&t<n)for(let a=0;a<e.subRows.length;a++)Kr(e.subRows[a],t+1,n,r,i);else r.has(e.id)||(r.add(e.id),i.push(e))}function qr(e,t,n,r){if(e.subRows.length&&t<n)for(let i=0;i<e.subRows.length;i++)qr(e.subRows[i],t+1,n,r);else r.push(e)}function Jr(e,t=0){let n=[],r=new Set,i=Gr(t);for(let t=0;t<e.length;t++)Kr(e[t],0,i,r,n);return n}function Yr(e,t=0){let n=Gr(t),r=!1;if(n>0){for(let t=0;t<e.length;t++)if(e[t].subRows.length){r=!0;break}}if(!r)return e;let i=[];for(let t=0;t<e.length;t++)qr(e[t],0,n,i);return i}function Xr(e){if(typeof e==`number`)return`sum`;if(e instanceof Date&&!Number.isNaN(e.getTime()))return`extent`}function Zr(e){let t=e.table.getCoreRowModel().flatRows[0]?.getValue(e.id),n=Xr(t);if(n)return e.table._rowModelFns.aggregationFns?.[n]}function Qr(e,t){return Ur(t)?t:t===`auto`?Zr(e):e.table._rowModelFns.aggregationFns?.[t]}function $r(e){let t=e.columnDef.aggregationFn,n=e.table._rowModelFns.aggregationFns,r=e.table.getCoreRowModel(),i=e._resolvedAggregationFnsCache;if(i&&i.option===t&&i.registry===n&&i.coreRowModel===r)return i.value;let a=i=>(e._resolvedAggregationFnsCache={coreRowModel:r,option:t,registry:n,value:i},i);if(t==null)return a([]);if(!Array.isArray(t))return a([{aggregationFn:Qr(e,t),id:typeof t==`string`?t:void 0}]);let o=K();for(let e=0;e<t.length;e++){let n=t[e],r=typeof n==`string`?n:Wr(n)?n.id:void 0;r!==void 0&&(o[r]=(o[r]??0)+1)}let s=[];for(let n=0;n<t.length;n++){let r=t[n],i=typeof r==`string`?r:Wr(r)?r.id:void 0;if(i===void 0){s.push({aggregationFn:void 0,id:void 0});continue}if(o[i]>1){s.push({aggregationFn:void 0,id:i});continue}let a=Wr(r)?r.aggregationFn:r;s.push({aggregationFn:Qr(e,a),id:i})}return a(s)}function ei(e,t,n){if(!t)return e;if(n&&e&&typeof e==`object`)return Ht(e,n)?e[n]:void 0}function ti(e){let{subRows:t,column:n,groupingRow:r,rows:i,uniqueRows:a}=e,o=n,s=Gr(e.maxDepth??o.columnDef.maxAggregationDepth),c=a?Yr(i,s):Jr(i,s),l=$r(o),u=Array.isArray(o.columnDef.aggregationFn),d=!!t?.length&&t.every(e=>!!e.groupingColumnId&&e.groupingColumnId!==n.id),f=e=>e.getValue(n.id),p=e=>{let i=e.aggregationFn;if(!i)return;let a={...t?{subRows:t}:{},column:n,columnId:n.id,getValue:f,...r?{groupingRow:r}:{},maxDepth:s,rows:c,table:n.table};return d&&i.merge?i.merge({...a,subRowResults:t.map(t=>ei(t.getValue(n.id),u,e.id)),subRows:t}):i.aggregate(a)};if(!u)return l[0]?p(l[0]):void 0;let m=K();for(let e=0;e<l.length;e++){let t=l[e];t.id!==void 0&&(m[t.id]=p(t))}return m}function ni(e,t){let n=t?.rows,r=Gr(t?.maxDepth??e.columnDef.maxAggregationDepth),i=e.columnDef.getAggregationValue?.({column:e,maxDepth:r,rows:n,table:e.table});if(i)return i.value;if(e.table.options.manualAggregation)return;if(n!==void 0)return ti({column:e,maxDepth:r,rows:n});let a=e.table.getPreGroupedRowModel(),o=e._aggregationValueCache,s=e.table._rowModelFns.aggregationFns,c=e.columnDef.aggregationFn;if(o&&o.dependency===a&&o.maxDepth===r&&o.registry===s&&o.aggregationFnOption===c)return o.value;let l=ti({column:e,maxDepth:r,rows:a.rows,uniqueRows:!0});return e._aggregationValueCache={aggregationFnOption:c,dependency:a,maxDepth:r,registry:s,value:l},l}function ri(e){let t=e.row.groupingColumnId;return!t||t===e.column.id||(e.column.table.atoms.grouping?.get?.())?.includes(e.column.id)?!1:$r(e.column).some(e=>!!e.aggregationFn)}function ii(e,t){return e==null?null:Array.isArray(t)&&typeof e==`object`?Object.keys(e).map(t=>`${t}: ${String(e[t])}`).join(`, `):String(e)}var ai={getDefaultColumnDef:()=>({aggregatedCell:({column:e,getValue:t})=>ii(t(),e.columnDef.aggregationFn),aggregationFn:`auto`,maxAggregationDepth:0}),getDefaultTableOptions:()=>({manualAggregation:!1}),assignCellPrototype:(e,t)=>{J(`rowAggregationFeature`,e,t,{cell_getIsAggregated:{fn:e=>ri(e)}})},assignColumnPrototype:(e,t)=>{J(`rowAggregationFeature`,e,t,{column_getAggregationFns:{fn:e=>$r(e)},column_getAggregationValue:{fn:(e,t)=>ni(e,t)},column_getAutoAggregationFn:{fn:e=>Zr(e),memoDeps:e=>[e.table.getCoreRowModel(),e.table._rowModelFns.aggregationFns]}})},initColumnInstanceData:e=>{e._aggregationValueCache=void 0,e._resolvedAggregationFnsCache=void 0},constructTableAPIs:e=>{q(`rowAggregationFeature`,e,{table__aggregateColumnValue:{fn:ti}})}};function oi(){return[]}function si(e){let t=e.table._rowModelFns.filterFns,n=e.table.getCoreRowModel().flatRows,r;for(let t=0;t<n.length;t++){let i=n[t].getValue(e.id);if(i!=null){r=i;break}}let i;return i=typeof r==`string`?`includesString`:typeof r==`number`?`inNumberRange`:typeof r==`boolean`?`equals`:Array.isArray(r)?`arrIncludes`:Object.prototype.toString.call(r)===`[object Date]`?`inDateRange`:typeof r==`object`&&r?`equals`:`weakEquals`,t?.[i]}function ci(e){let t=null,n=e.table._rowModelFns.filterFns;return t=Xt(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn===`auto`?si(e):n?.[e.columnDef.filterFn],t??void 0}function li(e){return(e.columnDef.enableColumnFilter??!0)&&(e.table.options.enableColumnFilters??!0)&&(e.table.options.enableFilters??!0)&&!!e.accessorFn}function ui(e){return fi(e)>-1}function di(e){return e.table.atoms.columnFilters?.get()?.find(t=>t.id===e.id)?.value}function fi(e){return e.table.atoms.columnFilters?.get()?.findIndex(t=>t.id===e.id)??-1}function pi(e,t){mi(e.table,n=>{let r=ci(e),i=n.find(t=>t.id===e.id),a=zt(t,i?i.value:void 0);if(gi(r,a,e))return n.filter(t=>t.id!==e.id);let o={id:e.id,value:a};return i?n.map(t=>t.id===e.id?o:t):n.length?[...n,o]:[o]})}function mi(e,t){let n=e.getAllLeafColumnsById();Yt(e,`columnFilters`,e=>zt(t,e).filter(e=>{let t=n[e.id];return!(t&&gi(ci(t),e.value,t))}))}function hi(e,t){mi(e,t?[]:Bt(e.initialState.columnFilters??[]))}function gi(e,t,n){return t===void 0?!0:e?.autoRemove?!!e.autoRemove(t,n):typeof t==`string`&&!t}var _i={getInitialState:e=>({columnFilters:oi(),...e}),getDefaultColumnDef:()=>({filterFn:`auto`}),getDefaultTableOptions:e=>({onColumnFiltersChange:Ut(`columnFilters`,e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),assignColumnPrototype:(e,t)=>{J(`columnFilteringFeature`,e,t,{column_getAutoFilterFn:{fn:e=>si(e)},column_getFilterFn:{fn:e=>ci(e)},column_getCanFilter:{fn:e=>li(e)},column_getIsFiltered:{fn:e=>ui(e)},column_getFilterValue:{fn:e=>di(e)},column_getFilterIndex:{fn:e=>fi(e)},column_setFilterValue:{fn:(e,t)=>pi(e,t)}})},initRowInstanceData:e=>{e.columnFilters=K(),e.columnFiltersMeta=K()},constructTableAPIs:e=>{q(`columnFilteringFeature`,e,{table_setColumnFilters:{fn:t=>mi(e,t)},table_resetColumnFilters:{fn:t=>hi(e,t)}})}};function vi(e,t){let n=e.atoms.grouping?.get()??[],{groupedColumnMode:r}=e.options;if(!n.length||!r)return t;let i=t.filter(e=>!n.includes(e.id));if(r===`remove`)return i;let a=new Map;for(let e=0;e<t.length;e++){let n=t[e];a.set(n.id,n)}let o=[];for(let e=0;e<n.length;e++){let t=a.get(n[e]);t&&o.push(t)}return[...o,...i]}function yi(){return[]}function bi(e){Ti(e.table,t=>t.includes(e.id)?t.filter(t=>t!==e.id):[...t,e.id])}function xi(e){return(e.columnDef.enableGrouping??!0)&&(e.table.options.enableGrouping??!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)}function Si(e){return!!e.table.atoms.grouping?.get()?.includes(e.id)}function Ci(e){return e.table.atoms.grouping?.get()?.indexOf(e.id)??-1}function wi(e){let t=xi(e);return()=>{t&&bi(e)}}function Ti(e,t){Yt(e,`grouping`,t)}function Ei(e,t){Ti(e,t?[]:Bt(e.initialState.grouping??[]))}function Di(e){return!!e.groupingColumnId}function Oi(e,t){if(e._groupingValuesCache&&Ht(e._groupingValuesCache,t))return e._groupingValuesCache[t];let n=e.table.getColumn(t);return n.columnDef.getGroupingValue?(e._groupingValuesCache&&(e._groupingValuesCache[t]=n.columnDef.getGroupingValue(e.original,e.index,e)),e._groupingValuesCache?.[t]):e.getValue(t)}function ki(e){let t=e.row;return Si(e.column)&&e.column.id===t.groupingColumnId}function Ai(e){return!ki(e)&&Si(e.column)}var ji={getInitialState:e=>({grouping:yi(),...e}),getDefaultTableOptions:e=>({onGroupingChange:Ut(`grouping`,e),groupedColumnMode:`reorder`}),assignCellPrototype:(e,t)=>{J(`columnGroupingFeature`,e,t,{cell_getIsGrouped:{fn:e=>ki(e)},cell_getIsPlaceholder:{fn:e=>Ai(e)}})},assignColumnPrototype:(e,t)=>{J(`columnGroupingFeature`,e,t,{column_toggleGrouping:{fn:e=>bi(e)},column_getCanGroup:{fn:e=>xi(e)},column_getIsGrouped:{fn:e=>Si(e)},column_getGroupedIndex:{fn:e=>Ci(e)},column_getToggleGroupingHandler:{fn:e=>wi(e)}})},assignRowPrototype:(e,t)=>{J(`columnGroupingFeature`,e,t,{row_getIsGrouped:{fn:e=>Di(e)},row_getGroupingValue:{fn:(e,t)=>Oi(e,t)}})},initRowInstanceData:e=>{e._groupingValuesCache=K()},constructTableAPIs:e=>{q(`columnGroupingFeature`,e,{table_setGrouping:{fn:t=>Ti(e,t)},table_resetGrouping:{fn:t=>Ei(e,t)},table__orderGroupedColumns:{fn:t=>vi(e,t)}})}};function Mi(){return{start:[],end:[]}}function Ni(e,t){let n=e.getLeafColumns(),r=[];for(let e=0;e<n.length;e++){let t=n[e].id;t&&r.push(t)}Bi(e.table,e=>t===`end`?{start:e.start.filter(e=>!r.includes(e)),end:[...e.end.filter(e=>!r.includes(e)),...r]}:t===`start`?{start:[...e.start.filter(e=>!r.includes(e)),...r],end:e.end.filter(e=>!r.includes(e))}:{start:e.start.filter(e=>!r.includes(e)),end:e.end.filter(e=>!r.includes(e))})}function Pi(e){return e.getLeafColumns().some(t=>(t.columnDef.enablePinning??!0)&&(e.table.options.enableColumnPinning??!0))}function Fi(e){let t=e.getLeafColumns(),{start:n,end:r}=e.table.atoms.columnPinning?.get()??Mi();for(let e=0;e<t.length;e++)if(n.includes(t[e].id))return`start`;for(let e=0;e<t.length;e++)if(r.includes(t[e].id))return`end`;return!1}function Ii(e){let t=Fi(e);return t?e.table.atoms.columnPinning?.get()?.[t].indexOf(e.id)??-1:0}function Li(e){let t=dn(e),{start:n,end:r}=e.table.atoms.columnPinning?.get()??Mi();if(!n.length&&!r.length)return t;let i=[...n,...r];return t.filter(e=>!i.includes(e.column.id))}function Ri(e){let{start:t}=e.table.atoms.columnPinning?.get()??Mi();if(!t.length)return[];let n=fn(e),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&(i.position=`start`,r.push(i))}return r}function zi(e){let{end:t}=e.table.atoms.columnPinning?.get()??Mi();if(!t.length)return[];let n=fn(e),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&(i.position=`end`,r.push(i))}return r}function Bi(e,t){Yt(e,`columnPinning`,t)}function Vi(e,t){Bi(e,t?Mi():Bt(e.initialState.columnPinning??Mi()))}function Hi(e,t){let n=e.atoms.columnPinning?.get();return t?!!n?.[t].length:!!(n?.start.length||n?.end.length)}function Ui(e){let t=e.getAllColumns(),n=e.getAllLeafColumnsById(),{start:r}=e.atoms.columnPinning?.get()??Mi(),i=[];for(let e=0;e<r.length;e++){let t=n[r[e]];t&&ln(t)&&i.push(t)}return Un(t,i,e,`start`)}function Wi(e){let t=e.getAllColumns(),n=e.getAllLeafColumnsById(),{end:r}=e.atoms.columnPinning?.get()??Mi(),i=[];for(let e=0;e<r.length;e++){let t=n[r[e]];t&&ln(t)&&i.push(t)}return Un(t,i,e,`end`)}function Gi(e){let t=e.getAllColumns(),n=un(e),{start:r,end:i}=e.atoms.columnPinning?.get()??Mi();if(r.length||i.length){let e=[...r,...i];n=n.filter(t=>!e.includes(t.id))}return Un(t,n,e,`center`)}function Ki(e){return[...Y(e,`getStartHeaderGroups`,Ui)].reverse()}function qi(e){return[...Y(e,`getEndHeaderGroups`,Wi)].reverse()}function Ji(e){return[...Y(e,`getCenterHeaderGroups`,Gi)].reverse()}function Yi(e){let t=Y(e,`getStartHeaderGroups`,Ui),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Xi(e){let t=Y(e,`getEndHeaderGroups`,Wi),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Zi(e){let t=Y(e,`getCenterHeaderGroups`,Gi),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Qi(e){return Y(e,`getStartFlatHeaders`,Yi).filter(e=>!e.subHeaders.length)}function $i(e){return Y(e,`getEndFlatHeaders`,Xi).filter(e=>!e.subHeaders.length)}function ea(e){return Y(e,`getCenterFlatHeaders`,Zi).filter(e=>!e.subHeaders.length)}function ta(e){let{start:t}=e.atoms.columnPinning?.get()??Mi(),n=e.getAllLeafColumnsById(),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&r.push(i)}return r}function na(e){let{end:t}=e.atoms.columnPinning?.get()??Mi(),n=e.getAllLeafColumnsById(),r=[];for(let e=0;e<t.length;e++){let i=n[t[e]];i&&r.push(i)}return r}function ra(e){let{start:t,end:n}=e.atoms.columnPinning?.get()??Mi();if(!t.length&&!n.length)return e.getAllLeafColumns();let r=[...t,...n];return e.getAllLeafColumns().filter(e=>!r.includes(e.id))}function ia(e,t){return t?t===`start`?Y(e,`getStartLeafColumns`,ta):t===`end`?Y(e,`getEndLeafColumns`,na):Y(e,`getCenterLeafColumns`,ra):e.getAllLeafColumns()}function aa(e){return Y(e,`getStartLeafColumns`,ta).filter(e=>ln(e))}function oa(e){return Y(e,`getEndLeafColumns`,na).filter(e=>ln(e))}function sa(e){return Y(e,`getCenterLeafColumns`,ra).filter(e=>ln(e))}function ca(e,t){return t?t===`start`?Y(e,`getStartVisibleLeafColumns`,aa):t===`end`?Y(e,`getEndVisibleLeafColumns`,oa):Y(e,`getCenterVisibleLeafColumns`,sa):un(e)}function la(e,t,n,r){let i=e.atoms.columnPinning?.get();if(!i||!i.start.length&&!i.end.length)return t;let{start:a,end:o}=i,s=r?.();if(!s){s=K();for(let e=0;e<t.length;e++)s[n(t[e])]=t[e]}let c=[];for(let e=0;e<a.length;e++){let t=s[a[e]];t&&c.push(t)}for(let e=0;e<t.length;e++){let r=n(t[e]);!a.includes(r)&&!o.includes(r)&&c.push(t[e])}for(let e=0;e<o.length;e++){let t=s[o[e]];t&&c.push(t)}return c}var ua={getInitialState:e=>({columnPinning:{...Mi(),...e.columnPinning},...e}),getDefaultTableOptions:e=>({onColumnPinningChange:Ut(`columnPinning`,e)}),assignColumnPrototype:(e,t)=>{J(`columnPinningFeature`,e,t,{column_pin:{fn:(e,t)=>Ni(e,t)},column_getCanPin:{fn:e=>Pi(e)},column_getPinnedIndex:{fn:e=>Ii(e)},column_getIsPinned:{fn:e=>Fi(e)}})},assignRowPrototype:(e,t)=>{J(`columnPinningFeature`,e,t,{row_getCenterVisibleCells:{fn:e=>Li(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get(),e.table.atoms.columnVisibility?.get()]},row_getStartVisibleCells:{fn:e=>Ri(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get()?.start,e.table.atoms.columnVisibility?.get()]},row_getEndVisibleCells:{fn:e=>zi(e),memoDeps:e=>[e.getAllCells(),e.table.atoms.columnPinning?.get()?.end,e.table.atoms.columnVisibility?.get()]}})},constructTableAPIs:e=>{q(`columnPinningFeature`,e,{table_setColumnPinning:{fn:t=>Bi(e,t)},table_resetColumnPinning:{fn:t=>Vi(e,t)},table_getIsSomeColumnsPinned:{fn:t=>Hi(e,t)},table__orderByColumnPinning:{fn:(t,n,r)=>la(e,t,n,r)},table_getStartHeaderGroups:{fn:()=>Ui(e),memoDeps:()=>[e.getAllColumns(),un(e),e.atoms.columnPinning?.get()?.start,e.atoms.columnOrder?.get()]},table_getCenterHeaderGroups:{fn:()=>Gi(e),memoDeps:()=>[e.getAllColumns(),un(e),e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get()]},table_getEndHeaderGroups:{fn:()=>Wi(e),memoDeps:()=>[e.getAllColumns(),un(e),e.atoms.columnPinning?.get()?.end,e.atoms.columnOrder?.get()]},table_getStartFooterGroups:{fn:()=>Ki(e),memoDeps:()=>[Y(e,`getStartHeaderGroups`,Ui)]},table_getCenterFooterGroups:{fn:()=>Ji(e),memoDeps:()=>[Y(e,`getCenterHeaderGroups`,Gi)]},table_getEndFooterGroups:{fn:()=>qi(e),memoDeps:()=>[Y(e,`getEndHeaderGroups`,Wi)]},table_getStartFlatHeaders:{fn:()=>Yi(e),memoDeps:()=>[Y(e,`getStartHeaderGroups`,Ui)]},table_getEndFlatHeaders:{fn:()=>Xi(e),memoDeps:()=>[Y(e,`getEndHeaderGroups`,Wi)]},table_getCenterFlatHeaders:{fn:()=>Zi(e),memoDeps:()=>[Y(e,`getCenterHeaderGroups`,Gi)]},table_getStartLeafHeaders:{fn:()=>Qi(e),memoDeps:()=>[Y(e,`getStartHeaderGroups`,Ui)]},table_getEndLeafHeaders:{fn:()=>$i(e),memoDeps:()=>[Y(e,`getEndHeaderGroups`,Wi)]},table_getCenterLeafHeaders:{fn:()=>ea(e),memoDeps:()=>[Y(e,`getCenterHeaderGroups`,Gi)]},table_getStartLeafColumns:{fn:()=>ta(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getEndLeafColumns:{fn:()=>na(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getCenterLeafColumns:{fn:()=>ra(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getPinnedLeafColumns:{fn:t=>ia(e,t)},table_getStartVisibleLeafColumns:{fn:()=>aa(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getCenterVisibleLeafColumns:{fn:()=>sa(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getEndVisibleLeafColumns:{fn:()=>oa(e),memoDeps:()=>[e.options.columns,e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_getPinnedVisibleLeafColumns:{fn:t=>ca(e,t)}})}};function da(){return K()}function fa(){return{size:150,minSize:20,maxSize:2**53-1}}function pa(e){let t=fa(),n=e.table.atoms.columnSizing?.get(),r=n&&Ht(n,e.id)?n[e.id]:void 0;return Math.min(Math.max(e.columnDef.minSize??t.minSize,r??e.columnDef.size??t.size),e.columnDef.maxSize??t.maxSize)}function ma(e){let t=K(),n=K(),r=Array(e.length),i=0;for(let n=0;n<e.length;n++){let a=e[n],o=Y(a,`getSize`,pa);r[n]=o,t[a.id]=i,i+=o}let a=0;for(let t=e.length-1;t>=0;t--)n[e[t].id]=a,a+=r[t];return{starts:t,afters:n}}function ha(e){return{all:ma(hn(e)),center:ma(hn(e,`center`)),start:ma(hn(e,`start`)),end:ma(hn(e,`end`))}}function ga(e){return e===`start`?`start`:e===`end`?`end`:e===`center`?`center`:`all`}function _a(e,t){return Y(e.table,`getColumnOffsets`,ha)[ga(t)].starts[e.id]??0}function va(e,t){return Y(e.table,`getColumnOffsets`,ha)[ga(t)].afters[e.id]??0}function ya(e){Ca(e.table,t=>{let n=K(),r=Object.keys(t);for(let i=0;i<r.length;i++){let a=r[i];a!==e.id&&(n[a]=t[a])}return n})}function ba(e){if(!e.subHeaders.length)return pa(e.column);let t=0;for(let n=0;n<e.subHeaders.length;n++)t+=ba(e.subHeaders[n]);return t}function xa(e){return ba(e)}function Sa(e){if(e.index>0){let t=e.headerGroup?.headers[e.index-1];if(t)return Y(t,`getStart`,Sa)+Y(t,`getSize`,xa)}return 0}function Ca(e,t){e.options.onColumnSizingChange?.(t)}function wa(e,t){Ca(e,t?K():Object.assign(K(),Bt(e.initialState.columnSizing??{})))}function Ta(e){let t=0;for(let n=0;n<e.length;n++)t+=Y(e[n],`getSize`,pa);return t}function Ea(e){return e.getHeaderGroups()[0]?.headers.reduce((e,t)=>e+xa(t),0)??0}function Da(e){return Ta(hn(e,`start`))}function Oa(e){return Ta(hn(e,`center`))}function ka(e){return Ta(hn(e,`end`))}var Aa={getInitialState:e=>({columnSizing:da(),...e}),getDefaultColumnDef:()=>fa(),getDefaultTableOptions:e=>({onColumnSizingChange:Ut(`columnSizing`,e)}),assignColumnPrototype:(e,t)=>{J(`columnSizingFeature`,e,t,{column_getSize:{fn:e=>pa(e),memoDeps:e=>[t.options.columns,t.atoms.columnSizing?.get()?.[e.id]]},column_getStart:{fn:(e,t)=>_a(e,t)},column_getAfter:{fn:(e,t)=>va(e,t)},column_resetSize:{fn:e=>ya(e)}})},assignHeaderPrototype:(e,t)=>{J(`columnSizingFeature`,e,t,{header_getSize:{fn:e=>xa(e),memoDeps:e=>[t.options.columns,e.column.columns.length>0?t.atoms.columnSizing?.get():t.atoms.columnSizing?.get()?.[e.column.id]]},header_getStart:{fn:e=>Sa(e),memoDeps:()=>[t.options.columns,t.atoms.columnSizing?.get(),t.atoms.columnOrder?.get(),t.atoms.columnPinning?.get(),t.atoms.columnVisibility?.get(),t.atoms.grouping?.get(),t.options.groupedColumnMode]}})},constructTableAPIs:e=>{q(`columnSizingFeature`,e,{table_getColumnOffsets:{fn:()=>ha(e),memoDeps:()=>[e.options.columns,e.atoms.columnSizing?.get(),e.atoms.columnOrder?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.atoms.grouping?.get(),e.options.groupedColumnMode]},table_setColumnSizing:{fn:t=>Ca(e,t)},table_resetColumnSizing:{fn:t=>wa(e,t)},table_getTotalSize:{fn:()=>Ea(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getStartTotalSize:{fn:()=>Da(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getCenterTotalSize:{fn:()=>Oa(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]},table_getEndTotalSize:{fn:()=>ka(e),memoDeps:()=>[e.atoms.columnSizing?.get(),e.getHeaderGroups()]}})}};function ja(){return K()}function Ma(e,t){Pa(e)&&Ba(e.table,n=>{let r=Object.assign(K(),n),i=t??!Y(e,`getIsVisible`,Na),a=e.getLeafColumns();for(let e=0;e<a.length;e++){let t=a[e];Pa(t)&&(r[t.id]=i)}return r})}function Na(e){let t=e.table.atoms.columnVisibility?.get();if(!t)return!0;let n=e.columns;return n.length?n.some(e=>Y(e,`getIsVisible`,Na)):(Ht(t,e.id)?t[e.id]:void 0)??!0}function Pa(e){return(e.columnDef.enableHiding??!0)&&(e.table.options.enableHiding??!0)}function Fa(e){return t=>{Ma(e,t.target.checked)}}function Ia(e){let t=e.getAllCells(),n=[];for(let e=0;e<t.length;e++){let r=t[e];Y(r.column,`getIsVisible`,Na)&&n.push(r)}return mn(e.table,n,e=>e.column.id,()=>Y(e,`getVisibleCellsByColumnId`,La))}function La(e){let t=K(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];Y(r.column,`getIsVisible`,Na)&&(t[r.column.id]=r)}return t}function Ra(e){return e.getAllFlatColumns().filter(e=>Y(e,`getIsVisible`,Na))}function za(e){return e.getAllLeafColumns().filter(e=>Y(e,`getIsVisible`,Na))}function Ba(e,t){Yt(e,`columnVisibility`,t)}function Va(e,t){Ba(e,t?K():Object.assign(K(),Bt(e.initialState.columnVisibility??{})))}function Ha(e,t){t??=!Ua(e);let n=K(),r=e.getAllLeafColumns();for(let e=0;e<r.length;e++){let i=r[e];n[i.id]=t||!Pa(i)}Ba(e,n)}function Ua(e){return!e.getAllLeafColumns().some(e=>!Y(e,`getIsVisible`,Na))}function Wa(e){return e.getAllLeafColumns().some(e=>Y(e,`getIsVisible`,Na))}function Ga(e){return t=>{Ha(e,t.target.checked)}}var Ka={getInitialState:e=>({columnVisibility:ja(),...e}),getDefaultTableOptions:e=>({onColumnVisibilityChange:Ut(`columnVisibility`,e)}),assignColumnPrototype:(e,t)=>{J(`columnVisibilityFeature`,e,t,{column_getIsVisible:{fn:e=>Na(e),memoDeps:e=>[t.options.columns,t.atoms.columnVisibility?.get(),e.columns]},column_getCanHide:{fn:e=>Pa(e)},column_getToggleVisibilityHandler:{fn:e=>Fa(e)},column_toggleVisibility:{fn:(e,t)=>Ma(e,t)}})},assignRowPrototype:(e,t)=>{J(`columnVisibilityFeature`,e,t,{row_getVisibleCells:{fn:e=>Ia(e),memoDeps:e=>[e.getAllCells(),t.atoms.columnPinning?.get(),t.atoms.columnVisibility?.get()]},row_getVisibleCellsByColumnId:{fn:e=>La(e),memoDeps:e=>[e.getAllCells(),t.atoms.columnVisibility?.get()]}})},constructTableAPIs:e=>{q(`columnVisibilityFeature`,e,{table_getVisibleFlatColumns:{fn:()=>Ra(e),memoDeps:()=>[e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getVisibleLeafColumns:{fn:()=>za(e),memoDeps:()=>[e.atoms.columnVisibility?.get(),e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_setColumnVisibility:{fn:t=>Ba(e,t)},table_resetColumnVisibility:{fn:t=>Va(e,t)},table_toggleAllColumnsVisible:{fn:t=>Ha(e,t)},table_getIsAllColumnsVisible:{fn:()=>Ua(e)},table_getIsSomeColumnsVisible:{fn:()=>Wa(e)},table_getToggleAllColumnsVisibilityHandler:{fn:()=>Ga(e)}})}};function qa(e){let t=Object.assign((e,n,r,i)=>{let a=e.getValue(n),o=t.resolveDataValue?t.resolveDataValue(a):a;return t.filter(o,r,e,n,i)},e);return t}var Ja=qa({filter:(e,t)=>!!e?.includes(t),autoRemove:e=>Ya(e),resolveFilterValue:e=>String(e).toLowerCase(),resolveDataValue:e=>e==null?void 0:String(e).toLowerCase()});function Ya(e){return e==null||e===``}function Xa(e){return(e.columnDef.enableGlobalFilter??!0)&&(e.table.options.enableGlobalFilter??!0)&&(e.table.options.enableFilters??!0)&&(e.table.options.getColumnCanGlobalFilter?.(e)??!0)&&!!e.accessorFn}function Za(){return Ja}function Qa(e){let{globalFilterFn:t}=e.options,n=e._rowModelFns.filterFns;return Xt(t)?t:t===`auto`?Za():n?.[t]}function $a(e,t){e.options.onGlobalFilterChange?.(t)}function eo(e,t){$a(e,t?void 0:Bt(e.initialState.globalFilter))}var to={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultTableOptions:e=>({onGlobalFilterChange:Ut(`globalFilter`,e),globalFilterFn:`auto`,getColumnCanGlobalFilter:t=>{if(`enableGlobalFilter`in t.columnDef&&t.columnDef.enableGlobalFilter===!0)return!0;let n=e.getCoreRowModel().flatRows.find(e=>e.getAllCellsByColumnId()[t.id]?.getValue()!=null)?.getAllCellsByColumnId()[t.id]?.getValue();return typeof n==`string`||typeof n==`number`}}),assignColumnPrototype:(e,t)=>{J(`globalFilteringFeature`,e,t,{column_getCanGlobalFilter:{fn:e=>Xa(e)}})},constructTableAPIs:e=>{q(`globalFilteringFeature`,e,{table_getGlobalAutoFilterFn:{fn:()=>Za()},table_getGlobalFilterFn:{fn:()=>Qa(e)},table_setGlobalFilter:{fn:t=>$a(e,t)},table_resetGlobalFilter:{fn:t=>eo(e,t)}})}};function no(){return K()}function ro(e){e.atoms.expanded&&(e.options.autoResetAll??e.options.autoResetExpanded??!e.options.manualExpanding)&&e._reactivity.schedule(()=>oo(e))}function io(e,t){e.options.onExpandedChange?.(t)}function ao(e,t){let n=e.atoms.expanded?.get()??{};if(t??!uo(e)){if(n===!0||!so(e))return;io(e,!0)}else{if(n!==!0&&!Object.keys(n).length)return;io(e,K())}}function oo(e,t){let n=e.initialState.expanded;Yt(e,`expanded`,t?K():n===!0||Object.assign(K(),Bt(n??{})))}function so(e){return e.getPrePaginatedRowModel().flatRows.some(e=>go(e))}function co(e){return t=>{ao(e)}}function lo(e){let t=e.atoms.expanded?.get()??{};return t===!0||Object.values(t).some(Boolean)}function uo(e){let t=e.atoms.expanded?.get()??{};if(t===!0)return!0;if(!Object.keys(t).length)return!1;let n=e.getRowModel().flatRows.filter(e=>go(e));return!(!n.length||n.some(e=>!mo(e)))}function fo(e){let t=0,n=e.atoms.expanded?.get();return(n===!0?Object.values(e.getRowModel().rowsById).filter(e=>go(e)).map(e=>e.id):Object.keys(n??{})).forEach(e=>{let n=e.split(`.`);t=Math.max(t,n.length)}),t}function po(e,t){let n=e.table.atoms.expanded?.get()??{},r=n===!0||ho(n,e.id),i=t??!r;i!==r&&(!i||go(e))&&io(e.table,t=>{let n=t===!0||ho(t,e.id),r=K();if(t===!0?Object.values(e.table.getRowModel().rowsById).forEach(e=>{go(e)&&(r[e.id]=!0)}):r=Object.assign(K(),t),!n&&i)return r[e.id]=!0,r;if(n&&!i){let t=K(),n=Object.keys(r);for(let i=0;i<n.length;i++){let a=n[i];a!==e.id&&r[a]&&(t[a]=!0)}return t}return t})}function mo(e){let t=e.table.atoms.expanded?.get()??{};return!!(e.table.options.getIsRowExpanded?.(e)??(t===!0||ho(t,e.id)))}function ho(e,t){return!!(e&&e!==!0&&Ht(e,t)&&e[t])}function go(e){return e.table.options.getRowCanExpand?.(e)??((e.table.options.enableExpanding??!0)&&!!e.subRows.length)}function _o(e){let t=!0,n=e;for(;t&&n.parentId;)n=e.table.getRow(n.parentId,!0),t=mo(n);return t}function vo(e){let t=go(e);return()=>{t&&po(e)}}function yo(){return e=>{let t=e;return en({feature:`rowExpandingFeature`,table:t,fnName:`table.getExpandedRowModel`,memoDeps:()=>[t.atoms.expanded?.get(),t.getPreExpandedRowModel(),t.options.paginateExpandedRows,t.options.manualPagination],fn:()=>bo(t)})}}function bo(e){let t=e.getPreExpandedRowModel(),n=e.atoms.expanded?.get();return!t.rows.length||n!==!0&&!Object.keys(n??{}).length||!e.options.paginateExpandedRows&&!e.options.manualPagination?t:xo(t)}function xo(e){let t=[],n=e=>{t.push(e),e.subRows.length&&mo(e)&&e.subRows.forEach(n)};return e.rows.forEach(n),{rows:t,flatRows:e.flatRows,rowsById:e.rowsById}}var So={getInitialState:e=>({expanded:no(),...e}),getDefaultTableOptions:e=>({onExpandedChange:Ut(`expanded`,e),paginateExpandedRows:!0}),assignRowPrototype:(e,t)=>{J(`rowExpandingFeature`,e,t,{row_toggleExpanded:{fn:(e,t)=>po(e,t)},row_getIsExpanded:{fn:e=>mo(e)},row_getCanExpand:{fn:e=>go(e)},row_getIsAllParentsExpanded:{fn:e=>_o(e)},row_getToggleExpandedHandler:{fn:e=>vo(e)}})},constructTableAPIs:e=>{q(`rowExpandingFeature`,e,{table_autoResetExpanded:{fn:()=>ro(e)},table_setExpanded:{fn:t=>io(e,t)},table_toggleAllRowsExpanded:{fn:t=>ao(e,t)},table_resetExpanded:{fn:t=>oo(e,t)},table_getCanSomeRowsExpand:{fn:()=>so(e)},table_getToggleAllRowsExpandedHandler:{fn:()=>co(e)},table_getIsSomeRowsExpanded:{fn:()=>lo(e)},table_getIsAllRowsExpanded:{fn:()=>uo(e)},table_getExpandedDepth:{fn:()=>fo(e)},table__expandRows:{fn:xo}})}},Co=0,wo=10;function To(){return{pageIndex:Co,pageSize:wo}}function Eo(e){if(e.options.autoResetAll??e.options.autoResetPageIndex??!e.options.manualPagination){if((e.atoms.pagination?.get()?.pageIndex??Co)===Co)return;Ao(e,!0)}}function Do(e,t){Yt(e,`pagination`,t)}function Oo(e,t){Do(e,t?To():Bt(e.initialState.pagination??To()))}function ko(e,t){Do(e,n=>{let r=zt(t,n.pageIndex),i=e.options.pageCount===void 0||e.options.pageCount===-1?2**53-1:e.options.pageCount-1;return r=Math.max(0,Math.min(r,i)),{...n,pageIndex:r}})}function Ao(e,t){ko(e,t?Co:e.initialState.pagination?.pageIndex??Co)}function jo(e,t){Mo(e,t?wo:e.initialState.pagination?.pageSize??wo)}function Mo(e,t){Do(e,e=>{let n=Math.max(1,zt(t,e.pageSize)),r=e.pageSize===1/0?0:e.pageSize*e.pageIndex,i=n===1/0?0:Math.floor(r/n);return{...e,pageIndex:i,pageSize:n}})}function No(e){let t=Vo(e),n=[];return t&&t>0&&(n=[...Array(t)].fill(null).map((e,t)=>t)),n}function Po(e){return(e.atoms.pagination?.get()?.pageIndex??0)>0}function Fo(e){let t=e.atoms.pagination?.get()?.pageIndex??Co,n=Vo(e);return n===-1||n!==0&&t<n-1}function Io(e){let t=e.atoms.pagination?.get()?.pageIndex??Co,n=Vo(e);return Number.isFinite(n)&&n>0&&t<n-1}function Lo(e){return ko(e,e=>e-1)}function Ro(e){return ko(e,e=>e+1)}function zo(e){return ko(e,0)}function Bo(e){let t=Vo(e);if(!(!Number.isFinite(t)||t<=0))return ko(e,t-1)}function Vo(e){let t=e.options.pageCount;if(t!=null)return t;let n=Ho(e),r=e.atoms.pagination?.get()?.pageSize??wo;return r===1/0&&Number.isFinite(n)&&n>0?1:Math.ceil(n/r)}function Ho(e){return e.options.rowCount??e.getPrePaginatedRowModel().rows.length}var Uo={getInitialState:e=>({...e,pagination:{...To(),...e.pagination}}),getDefaultTableOptions:e=>({onPaginationChange:Ut(`pagination`,e)}),constructTableAPIs:e=>{q(`rowPaginationFeature`,e,{table_autoResetPageIndex:{fn:()=>Eo(e)},table_setPagination:{fn:t=>Do(e,t)},table_resetPagination:{fn:t=>Oo(e,t)},table_setPageIndex:{fn:t=>ko(e,t)},table_resetPageIndex:{fn:t=>Ao(e,t)},table_setPageSize:{fn:t=>Mo(e,t)},table_getPageCount:{fn:()=>Vo(e)},table_resetPageSize:{fn:t=>jo(e,t)},table_getPageOptions:{fn:()=>No(e)},table_getCanPreviousPage:{fn:()=>Po(e)},table_getCanNextPage:{fn:()=>Fo(e)},table_getCanLastPage:{fn:()=>Io(e)},table_previousPage:{fn:()=>Lo(e)},table_nextPage:{fn:()=>Ro(e)},table_firstPage:{fn:()=>zo(e)},table_lastPage:{fn:()=>Bo(e)},table_getRowCount:{fn:()=>Ho(e)}})}};function Wo(){return K()}function Go(e,t){e.options.onRowSelectionChange?.(t)}function Ko(e,t){e._lastSelectedRowId=null,Go(e,t?K():Object.assign(K(),Bt(e.initialState.rowSelection??{})))}function qo(e,t,n){e._lastSelectedRowId=null,Go(e,r=>{if(t=t===void 0?!Y(e,`getIsAllRowsSelected`,es):t,n?.deselectAll&&!t)return K();let i=Object.assign(K(),r),a=e.getPreGroupedRowModel().flatRows;if(t){let e=new Map;a.forEach(t=>{gs(t,e)&&(i[t.id]=!0)})}else a.forEach(e=>{us(e)&&delete i[e.id]});return i})}function Jo(e,t,n){e._lastSelectedRowId=null,Go(e,r=>{let i=t===void 0?!Y(e,`getIsAllPageRowsSelected`,ts):t;if(n?.deselectAll&&!i)return K();let a=Object.assign(K(),r);return e.getRowModel().rows.forEach(t=>{hs(a,t.id,i,!0,e,!0)}),a})}function Yo(e){return e.getCoreRowModel()}function Xo(e){let t=e.getCoreRowModel();return Y(e,`getIsSomeRowsSelected`,ns)?ys(t,e):{rows:[],flatRows:[],rowsById:K()}}function Zo(e){let t=e.getFilteredRowModel();return Y(e,`getIsSomeRowsSelected`,ns)?ys(t,e):{rows:[],flatRows:[],rowsById:K()}}function Qo(e){let t=e.getSortedRowModel();return Y(e,`getIsSomeRowsSelected`,ns)?ys(t,e):{rows:[],flatRows:[],rowsById:K()}}function $o(e){return Object.keys(e.atoms.rowSelection?.get()??{})}function es(e){let t=e.getFilteredRowModel().flatRows,n=e.atoms.rowSelection?.get()??{},r=!!(t.length&&Object.keys(n).length);if(r){let e=new Map;t.some(t=>!bs(t,n)&&gs(t,e))&&(r=!1)}return r}function ts(e){let t=e.getPaginatedRowModel().flatRows,n=e.atoms.rowSelection?.get()??{},r=new Map,i=!1;for(let e=0;e<t.length;e++){let a=t[e];if(bs(a,n))!i&&gs(a,r)&&(i=!0);else if(gs(a,r))return!1}return i}function ns(e){return Y(e,`getSelectedRowIds`,$o).length>0}function rs(e){return e.getPaginatedRowModel().flatRows.filter(e=>us(e)).some(e=>ss(e)||Y(e,`getIsSomeSelected`,cs))}function is(e){return t=>{qo(e,t.target.checked)}}function as(e){return t=>{Jo(e,t.target.checked)}}function os(e,t,n){let r=ss(e);Go(e.table,i=>{t=t===void 0?!r:t;let a=Object.assign(K(),i);return hs(a,e.id,t,(n?.selectChildren??!0)&&fs(e),e.table),!t&&n?.deselectParents&&_s(a,e),a})}function ss(e){return bs(e,e.table.atoms.rowSelection?.get()??{})}function cs(e){return xs(e)===`some`}function ls(e){return xs(e)===`all`}function us(e){let t=e.table.options;return typeof t.enableRowSelection==`function`?t.enableRowSelection(e):t.enableRowSelection??!0}function ds(e){let t=e.table.options;return typeof t.enableSubRowSelection==`function`?t.enableSubRowSelection(e):t.enableSubRowSelection??!0}function fs(e){let t=e.table.options;return typeof t.enableMultiRowSelection==`function`?t.enableMultiRowSelection(e):t.enableMultiRowSelection??!0}function ps(e,t){let n=us(e);return r=>{if(!n)return;let i=r,a=e.table,o=i.target.checked,s=a._lastSelectedRowId;a.options.enableRowRangeSelection!==!1&&s!==null&&fs(e)&&(a.options.isRowRangeSelectionEvent?.(r)??!1)&&ms(e,s,o,t)||os(e,o,t),a._lastSelectedRowId=e.id}}function ms(e,t,n,r){let i=r?.selectChildren??!0,a=e.table,o=a.getRowsInDisplayOrder(),s=a.getPrePaginatedRowModel().rowsById[t]??a.getCoreRowModel().rowsById[t];if(!s)return!1;let c=s.getDisplayIndex(),l=e.getDisplayIndex(),u=o[c],d=o[l];if(c<0||l<0||c>=o.length||l>=o.length||u?.id!==s.id||d?.id!==e.id||!fs(s)||!fs(e))return!1;let f=Math.min(c,l),p=Math.max(c,l);return Go(a,e=>{let t=Object.assign(K(),e);for(let e=f;e<=p;e++){let s=o[e];us(s)&&fs(s)&&(hs(t,s.id,n,i,a),!n&&r?.deselectParents&&_s(t,s))}return t}),!0}function hs(e,t,n,r,i,a){let o=i.getRow(t,!0);n?(fs(o)||Object.keys(e).forEach(t=>delete e[t]),us(o)&&(e[t]=!0)):(!a||us(o))&&delete e[t],r&&o.subRows.length&&ds(o)&&o.subRows.forEach(t=>hs(e,t.id,n,r,i,a))}function gs(e,t){if(!us(e))return!1;let n=e.table;if(n.options.enableSubRowSelection===!0)return!0;let r=e.parentId;if(r===void 0)return!0;let i=t.get(r);if(i!==void 0)return i;let a=n.getCoreRowModel().rowsById,o=[],s=!0,c=r;for(;c!==void 0;){let e=t.get(c);if(e!==void 0){s=e;break}o.push(c);let r=a[c]??n.getRow(c,!0);if(!ds(r)){s=!1;break}c=r.parentId}return o.forEach(e=>t.set(e,s)),s}function _s(e,t){let n=t.table.getCoreRowModel().rowsById,r=t.parentId;for(;r!==void 0;)delete e[r],r=(n[r]??t.table.getRow(r,!0)).parentId}function vs(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=bs(o,t);if(s&&(n.push(o),r[o.id]=o),o.subRows.length){let e=vs(o.subRows,t,n,r);if(s){let t=Object.create(Object.getPrototypeOf(o));Vt(t,o),t.subRows=e,i.push(t)}}else s&&i.push(o)}return i}function ys(e,t){let n=[],r=K(),i=t.atoms.rowSelection?.get()??{};return{rows:vs(e.rows,i,n,r),flatRows:n,rowsById:r}}function bs(e,t){return!!(Ht(t,e.id)&&t[e.id])}function xs(e){if(!e.subRows.length)return!1;let t=e.table.atoms.rowSelection?.get()??{},n=!1,r=!0,i=!1;for(let a=0;a<e.subRows.length;a++){let o=e.subRows[a];if(n&&!r)break;if(us(o)&&(i=!0,bs(o,t)?n=!0:r=!1),o.subRows.length){let e=xs(o);e===`all`?(n=!0,i=!0):e===`some`?(n=!0,r=!1,i=!0):r=!1}}return i?r?`all`:n?`some`:!1:!1}var Ss={initTableInstanceData:e=>{e._lastSelectedRowId=null},resetTableInstanceData:e=>{e._lastSelectedRowId=null},getInitialState:e=>({rowSelection:Wo(),...e}),getDefaultTableOptions:e=>({onRowSelectionChange:Ut(`rowSelection`,e),enableRowSelection:!0,enableMultiRowSelection:!0,enableRowRangeSelection:!0,enableSubRowSelection:!0,isRowRangeSelectionEvent:e=>{let t=e;return!!(t.shiftKey||t.nativeEvent?.shiftKey)}}),assignRowPrototype:(e,t)=>{J(`rowSelectionFeature`,e,t,{row_toggleSelected:{fn:(e,t,n)=>os(e,t,n)},row_getIsSelected:{fn:e=>ss(e)},row_getIsSomeSelected:{fn:e=>cs(e),memoDeps:e=>[e.subRows,e.table.atoms.rowSelection?.get(),e.table.options.enableRowSelection]},row_getIsAllSubRowsSelected:{fn:e=>ls(e),memoDeps:e=>[e.subRows,e.table.atoms.rowSelection?.get(),e.table.options.enableRowSelection]},row_getCanSelect:{fn:e=>us(e)},row_getCanSelectSubRows:{fn:e=>ds(e)},row_getCanMultiSelect:{fn:e=>fs(e)},row_getToggleSelectedHandler:{fn:(e,t)=>ps(e,t)}})},constructTableAPIs:e=>{q(`rowSelectionFeature`,e,{table_setRowSelection:{fn:t=>Go(e,t)},table_resetRowSelection:{fn:t=>Ko(e,t)},table_toggleAllRowsSelected:{fn:(t,n)=>qo(e,t,n)},table_toggleAllPageRowsSelected:{fn:(t,n)=>Jo(e,t,n)},table_getPreSelectedRowModel:{fn:()=>Yo(e)},table_getSelectedRowModel:{fn:()=>Xo(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getCoreRowModel()]},table_getFilteredSelectedRowModel:{fn:()=>Zo(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getFilteredRowModel()]},table_getGroupedSelectedRowModel:{fn:()=>Qo(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getSortedRowModel()]},table_getSelectedRowIds:{fn:()=>$o(e),memoDeps:()=>[e.atoms.rowSelection?.get()]},table_getIsAllRowsSelected:{fn:()=>es(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getFilteredRowModel(),e.options.enableRowSelection,e.options.enableSubRowSelection]},table_getIsAllPageRowsSelected:{fn:()=>ts(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getPaginatedRowModel(),e.options.enableRowSelection,e.options.enableSubRowSelection]},table_getIsSomeRowsSelected:{fn:()=>ns(e),memoDeps:()=>[e.atoms.rowSelection?.get()]},table_getIsSomePageRowsSelected:{fn:()=>rs(e),memoDeps:()=>[e.atoms.rowSelection?.get(),e.getPaginatedRowModel(),e.options.enableRowSelection]},table_getToggleAllRowsSelectedHandler:{fn:()=>is(e)},table_getToggleAllPageRowsSelectedHandler:{fn:()=>as(e)}})}},Cs=/([0-9]+)/gm;function ws(e){let t=Object.assign((e,n,r)=>{let i=e.getValue(r),a=n.getValue(r),o=t.resolveDataValue;return o&&(i=o(i),a=o(a)),t.sort(i,a,e,n,r)},e);return t}var Ts=ws({resolveDataValue:e=>As(e).toLowerCase(),sort:(e,t)=>js(e,t)}),Es=ws({resolveDataValue:e=>ks(e),sort:(e,t)=>e>t?1:e<t?-1:0}),Ds=ws({sort:(e,t)=>Os(e,t)});function Os(e,t){return e===t?0:e>t?1:-1}function ks(e){return e instanceof Date?e.getTime():e}function As(e){return typeof e==`number`?isNaN(e)||e===1/0||e===-1/0?``:String(e):typeof e==`string`?e:``}function js(e,t){let n=0,r=0,i=e.length,a=t.length;for(;n<i&&r<a;){let i=Ms(e.charCodeAt(n)),a=Ms(t.charCodeAt(r)),o=Ns(e,n,i),s=Ns(t,r,a);if(!i&&!a){let i=Ps(e,n,o,t,r,s);if(i)return i;n=o,r=s;continue}if(i!==a)return i?1:-1;let c=Fs(e,n,o,t,r,s);if(c)return c;n=o,r=s}return Ls(e,n)-Ls(t,r)}function Ms(e){return e>=48&&e<=57}function Ns(e,t,n){let r=t+1;for(;r<e.length&&Ms(e.charCodeAt(r))===n;)r++;return r}function Ps(e,t,n,r,i,a){let o=n-t,s=a-i,c=o<s?o:s;for(let n=0;n<c;n++){let a=e.charCodeAt(t+n),o=r.charCodeAt(i+n);if(a>o)return 1;if(o>a)return-1}return o>s?1:s>o?-1:0}function Fs(e,t,n,r,i,a){let o=t;for(;o<n&&e.charCodeAt(o)===48;)o++;let s=i;for(;s<a&&r.charCodeAt(s)===48;)s++;let c=n-o,l=a-s;if(c===0&&l===0)return 0;if(c<=15&&l<=15){let t=Is(e,o,n),i=Is(r,s,a);return t>i?1:i>t?-1:0}let u=parseInt(e.slice(t,n),10),d=parseInt(r.slice(i,a),10);return u>d?1:d>u?-1:0}function Is(e,t,n){let r=0;for(let i=t;i<n;i++)r=r*10+e.charCodeAt(i)-48;return r}function Ls(e,t){let n=0,r=t;for(;r<e.length;)n++,r=Ns(e,r,Ms(e.charCodeAt(r)));return n}function Rs(){return[]}function zs(e,t){Yt(e,`sorting`,t)}function Bs(e,t){zs(e,t?[]:Bt(e.initialState.sorting??[]))}function Vs(e){e.atoms.sorting&&(e.options.autoResetAll??e.options.autoResetSorting??!1)&&Bs(e)}function Hs(e){let t=e.table._rowModelFns.sortFns,n=e.table.getFilteredRowModel().flatRows.slice(0,10),r,i=!1;for(let t=0;t<n.length;t++){let a=n[t].getValue(e.id);if(Object.prototype.toString.call(a)===`[object Date]`){r=`datetime`;break}if(typeof a==`string`&&(i=!0,a.split(Cs).length>1)){r=`alphanumeric`;break}}if(!r&&i&&(r=`text`),r){let e=t?.[r];if(e||r===`alphanumeric`&&(e=t?.text),e)return e}return Ds}function Us(e){let t=e.table.getFilteredRowModel().flatRows.slice(0,10);for(let n=0;n<t.length;n++){let r=t[n].getValue(e.id);if(r!=null)return typeof r==`string`?`asc`:`desc`}return`desc`}function Ws(e){let t=e.table._rowModelFns.sortFns;return Xt(e.columnDef.sortFn)?e.columnDef.sortFn:e.columnDef.sortFn===`auto`?Hs(e):t?.[e.columnDef.sortFn]??Ds}function Gs(e,t,n){let r=qs(e,n&&Ys(e)),i=t!==void 0;zs(e.table,a=>{let o=a.findIndex(t=>t.id===e.id),s=o===-1?void 0:a[o],c=[],l,u=i?t:r===`desc`,d=!!(a.length&&Ys(e)&&n);return l=d?s?`toggle`:`add`:s?`toggle`:`replace`,l===`toggle`&&(i||r||(l=`remove`)),l===`add`?(c=[...a,{id:e.id,desc:u}],c.splice(0,c.length-(e.table.options.maxMultiSortColCount??2**53-1))):c=l===`toggle`?d?a.map(t=>t.id===e.id?{...t,desc:u}:t):[{id:e.id,desc:u}]:l===`remove`?d?a.filter(t=>t.id!==e.id):[]:[{id:e.id,desc:u}],c})}function Ks(e){return e.columnDef.sortDescFirst??e.table.options.sortDescFirst??Us(e)===`desc`?`desc`:`asc`}function qs(e,t){let n=Ks(e),r=Xs(e);return r?r!==n&&(e.table.options.enableSortingRemoval??!0)&&(!t||(e.table.options.enableMultiRemove??!0))?!1:r===`desc`?`asc`:`desc`:n}function Js(e){return(e.columnDef.enableSorting??!0)&&(e.table.options.enableSorting??!0)&&!!e.accessorFn}function Ys(e){return e.columnDef.enableMultiSort??e.table.options.enableMultiSort??!!e.accessorFn}function Xs(e){let t=e.table.atoms.sorting?.get()?.find(t=>t.id===e.id);return t?t.desc?`desc`:`asc`:!1}function Zs(e){return e.table.atoms.sorting?.get()?.findIndex(t=>t.id===e.id)??-1}function Qs(e){zs(e.table,t=>t.length?t.filter(t=>t.id!==e.id):[])}function $s(e){let t=Js(e);return n=>{t&&Gs(e,void 0,Ys(e)?e.table.options.isMultiSortEvent?.(n):!1)}}var ec={getInitialState(e){return{sorting:Rs(),...e}},getDefaultColumnDef(){return{sortFn:`auto`,sortUndefined:1}},getDefaultTableOptions(e){return{autoResetSorting:!1,onSortingChange:Ut(`sorting`,e),isMultiSortEvent:e=>e.shiftKey}},assignColumnPrototype(e,t){J(`rowSortingFeature`,e,t,{column_getAutoSortFn:{fn:e=>Hs(e)},column_getAutoSortDir:{fn:e=>Us(e)},column_getSortFn:{fn:e=>Ws(e)},column_toggleSorting:{fn:(e,t,n)=>Gs(e,t,n)},column_getFirstSortDir:{fn:e=>Ks(e)},column_getNextSortingOrder:{fn:(e,t)=>qs(e,t)},column_getCanSort:{fn:e=>Js(e)},column_getCanMultiSort:{fn:e=>Ys(e)},column_getIsSorted:{fn:e=>Xs(e)},column_getSortIndex:{fn:e=>Zs(e)},column_clearSorting:{fn:e=>Qs(e)},column_getToggleSortingHandler:{fn:e=>$s(e)}})},constructTableAPIs(e){q(`rowSortingFeature`,e,{table_autoResetSorting:{fn:()=>Vs(e)},table_setSorting:{fn:t=>zs(e,t)},table_resetSorting:{fn:t=>Bs(e,t)}})}};function tc(e){return e}function nc(e){return typeof e==`number`}var rc=tc({aggregate:e=>{let t=e.rows,n=0;for(let r=0;r<t.length;r++){let i=e.getValue(t[r]);n+=typeof i==`number`?i:0}return n},merge:({subRowResults:e})=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n];nc(r)&&(t+=r)}return t}}),ic=tc({aggregate:e=>{let t=e.rows,n=0,r=0;for(let i=0;i<t.length;i++){let a=e.getValue(t[i]);if(a==null)continue;let o=typeof a==`number`?a:+a;Number.isNaN(o)||(n++,r+=o)}return n?r/n:void 0}}),ac=tc({aggregate:({rows:e})=>e.length,merge:({subRowResults:e})=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n];nc(r)&&(t+=r)}return t}});function oc(e,t,n){return n.options.filterFromLeafRows?sc(e,t,n):cc(e,t,n)}function sc(e,t,n){let r=[],i=K(),a=n.options.maxLeafRowFilterDepth??100,o=(e,r=0)=>{let i=[];for(let s of e){let e=$n(n,s.id,s.original,s.index,s.depth,void 0,s.parentId);e.columnFilters=s.columnFilters,e.columnFiltersMeta=s.columnFiltersMeta,s.subRows.length&&r<a?(e.subRows=o(s.subRows,r+1),(e.subRows.length||t(e))&&i.push(e)):t(e)&&(e.subRows=s.subRows,i.push(e))}return i},s=o(e);return lc(s,r,i),{rows:s,flatRows:r,rowsById:i}}function cc(e,t,n){let r=[],i=K(),a=n.options.maxLeafRowFilterDepth??100,o=(e,s=0)=>{let c=[];for(let l of e)if(t(l)){if(l.subRows.length&&s<a){let e=$n(n,l.id,l.original,l.index,l.depth,void 0,l.parentId),t=l;e.columnFilters=t.columnFilters,e.columnFiltersMeta=t.columnFiltersMeta,c.push(e),r.push(e),i[e.id]=e,e.subRows=o(l.subRows,s+1)}else c.push(l),r.push(l),i[l.id]=l,l.subRows.length&&s>=a&&lc(l.subRows,r,i)}return c};return{rows:o(e),flatRows:r,rowsById:i}}function lc(e,t,n){for(let r of e)t.push(r),n[r.id]=r,r.subRows.length&&lc(r.subRows,t,n)}function uc(){return e=>{let t=e;return en({feature:`columnFilteringFeature`,table:t,fnName:`table.getFilteredRowModel`,memoDeps:()=>[t.getPreFilteredRowModel(),t.atoms.columnFilters?.get(),t.atoms.globalFilter?.get()],fn:()=>dc(t),onAfterUpdate:$t(()=>bn(t))})}}function dc(e){let t=e.getPreFilteredRowModel(),n=e.atoms.columnFilters?.get(),r=e.atoms.globalFilter?.get(),i=r!=null&&r!==``;if(!t.rows.length||!n?.length&&!i){let e=t.flatRows;for(let t=0;t<e.length;t++){let n=e[t];n.columnFilters=K(),n.columnFiltersMeta=K()}return t}let a=[],o=[];n?.forEach(t=>{let n=Nn(e,t.id);if(!n)return;let r=ci(n);r&&a.push({id:t.id,filterFn:r,resolvedValue:r.resolveFilterValue?.(t.value)??t.value})});let s=n?.map(e=>e.id)??[];if(i){let t=gn(e),n=t?e.getAllLeafColumns().filter(_n):[];t&&n.length&&(s.push(`__global__`),n.forEach(e=>{o.push({id:e.id,filterFn:t,resolvedValue:t.resolveFilterValue?.(r)??r})}))}let c=t.flatRows;for(let e=0;e<c.length;e++){let t=c[e];if(t.columnFilters=K(),t.columnFiltersMeta=K(),a.length)for(let e=0;e<a.length;e++){let n=a[e],r=n.id;t.columnFilters[r]=n.filterFn(t,r,n.resolvedValue,e=>{t.columnFiltersMeta||=K(),t.columnFiltersMeta[r]=e})}if(o.length){for(let e=0;e<o.length;e++){let n=o[e],r=n.id;if(n.filterFn(t,r,n.resolvedValue,e=>{t.columnFiltersMeta||=K(),t.columnFiltersMeta[r]=e})){t.columnFilters.__global__=!0;break}}t.columnFilters.__global__!==!0&&(t.columnFilters.__global__=!1)}}return oc(t.rows,e=>{for(let t=0;t<s.length;t++)if(e.columnFilters[s[t]]===!1)return!1;return!0},e)}function fc(){return e=>{let t=e,n=!1,r,i;return en({feature:`columnGroupingFeature`,table:t,fnName:`table.getGroupedRowModel`,memoDeps:()=>[t.atoms.grouping?.get(),t.getPreGroupedRowModel(),t.options.columns],fn:()=>pc(t),onAfterUpdate:()=>{let e=t.atoms.grouping?.get(),a=t.getPreGroupedRowModel(),o=n&&(e!==r||a!==i);r=e,i=a,n=!0,o&&(yn(t),bn(t))}})}}function pc(e){let t=e.getPreGroupedRowModel(),n=e.atoms.grouping?.get();if(!t.rows.length||!n?.length)return mc(t.rows,0,void 0),t;let r=n.filter(t=>Nn(e,t)),i=[],a=K(),o=(t,n=0,s)=>{if(n>=r.length)return t.map(e=>(e.depth=n,i.push(e),a[e.id]=e,e.subRows.length&&(e.subRows=o(e.subRows,n+1,e.id)),e));let c=r[n],l=hc(e,t,c);return Array.from(l.entries()).map(([t,l],u)=>{let d=`${c}:${t}`;d=s?`${s}>${d}`:d;let f=i.length;i.push(void 0);let p=o(l,n+1,d);p.forEach(e=>{e.parentId=d});let m=Yr(l,1/0),h=$n(e,d,m[0].original,u,n,void 0,s);return Object.assign(h,{groupingColumnId:c,groupingValue:t,subRows:p,leafRows:m,getValue:t=>{let i=r.indexOf(t);if(i!==-1&&i<=n)return Ht(h._valuesCache,t)||l[0]&&(h._valuesCache[t]=l[0].getValue(t)??void 0),h._valuesCache[t];let a=h._aggregationValuesCache;if(a&&Ht(a,t))return a[t];let o=Cn(e),s=e.getColumn(t);if(!o||typeof s.getAggregationFns!=`function`)return;let c=h._aggregationValuesCache??=K();return c[t]=o({subRows:p,column:s,groupingRow:h,rows:l,uniqueRows:!0}),c[t]}}),i[f]=h,a[d]=h,h})};return{rows:o(t.rows,0),flatRows:i,rowsById:a}}function mc(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.depth=t,i.parentId=n,i.subRows.length&&mc(i.subRows,t+1,i.id)}}function hc(e,t,n){let r=new Map,i=Nn(e,n)?.columnDef.getGroupingValue;for(let e=0;e<t.length;e++){let a=t[e],o;if(i){let e=a._groupingValuesCache;e&&Ht(e,n)?o=e[n]:e&&(o=e[n]=i(a.original,a.index,a))}else o=a.getValue(n);let s=`${o}`,c=r.get(s);c?c.push(a):r.set(s,[a])}return r}function gc(){return e=>{let t=e;return en({feature:`rowPaginationFeature`,table:t,fnName:`table.getPaginatedRowModel`,memoDeps:()=>[t.getPrePaginatedRowModel(),t.atoms.pagination?.get(),t.options.paginateExpandedRows?void 0:t.atoms.expanded?.get()],fn:()=>_c(t)})}}function _c(e){let t=e.getPrePaginatedRowModel(),n=e.atoms.pagination?.get();if(!t.rows.length)return t;let{pageSize:r,pageIndex:i}=n??To(),{rows:a,flatRows:o,rowsById:s}=t,c=a;if(r!==1/0||i!==0){let e=r*i,t=e+r;c=a.slice(e,t)}let l;l=e.options.paginateExpandedRows?{rows:c,flatRows:o,rowsById:s}:vn(e,{rows:c,flatRows:o,rowsById:s}),l.flatRows=[];let u=new Set,d=e=>{u.has(e.id)||(u.add(e.id),l.flatRows.push(e),e.subRows.length&&e.subRows.forEach(d))};return l.rows.forEach(d),l}function vc(){return e=>{let t=e;return en({feature:`rowSortingFeature`,table:t,fnName:`table.getSortedRowModel`,memoDeps:()=>[t.atoms.sorting?.get(),t.getPreSortedRowModel()],fn:()=>yc(t),onAfterUpdate:$t(()=>bn(t))})}}function yc(e){let t=e.getPreSortedRowModel(),n=e.atoms.sorting?.get();if(!t.rows.length||!n?.length)return t;let r=[],i=n.filter(t=>{let n=e.getColumn(t.id);return n?Js(n):!1});if(!i.length)return t;let a=[];for(let t=0;t<i.length;t++){let n=i[t],r=e.getColumn(n.id);r&&a.push({id:n.id,desc:n.desc,sortUndefined:r.columnDef.sortUndefined,invertSorting:r.columnDef.invertSorting,sortFn:Ws(r)})}let o=(e,t)=>{for(let n=0;n<a.length;n++){let r=a[n],i=r.sortUndefined,o=r.desc,s=0;if(i){let n=e.getValue(r.id),a=t.getValue(r.id),o=n===void 0,c=a===void 0;if(o&&c)continue;if(o||c){if(i===`first`)return o?-1:1;if(i===`last`)return o?1:-1;s=o?i:-i}}if(s===0&&(s=r.sortFn(e,t,r.id)),s!==0)return o&&(s*=-1),r.invertSorting&&(s*=-1),s}return e.index-t.index},s=e=>{let t=e.slice();t.sort(o);let n=!1;for(let i=0;i<t.length;i++){let a=t[i];a!==e[i]&&(n=!0);let o=r.length;if(r.push(a),a.subRows.length){let e=s(a.subRows);if(e.changed){let s=Object.create(Object.getPrototypeOf(a));Vt(s,a),s.subRows=e.rows,t[i]=s,r[o]=s,n=!0}}}return{rows:t,changed:n}};return{rows:s(t.rows).rows,flatRows:r,rowsById:t.rowsById}}var bc=typeof window>`u`?H.useEffect:H.useLayoutEffect;function X(e,t){let[{table:n,rootSource:r}]=(0,H.useState)(()=>{let t=Hr({...e,features:{coreReactivityFeature:Rt(),...e.features}});return t.Subscribe=(e=>Pt({...e,source:e.source??t.store})),t.FlexRender=ut,{table:t,rootSource:Lt(t.store,kt)}}),i=n;Ir(i,t=>({...t,...e}),{syncExternalState:!1});let a=i.options.state,o=r.get(),s=Nt(r,t,{compare:kt});return bc(()=>{r.markCommitted(o),Nr(i,a??null,kt)}),(0,H.useMemo)(()=>({...n,options:e,state:s}),[n,e,s])}function Z({table:e,numeric:t=[],tree:r=!1,paging:i=!0}){let a=new Set(t);return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(`div`,{className:`overflow-x-auto rounded-md border`,children:(0,U.jsxs)(oe,{children:[(0,U.jsx)(E,{children:e.getHeaderGroups().map(t=>(0,U.jsx)(me,{children:t.headers.map(t=>{let n=t.column.getIsSorted();return(0,U.jsx)(P,{colSpan:t.colSpan,style:{width:t.getSize()},className:o(a.has(t.column.id)&&`text-right`),children:t.isPlaceholder?null:t.column.getCanSort()?(0,U.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1 hover:text-foreground`,onClick:t.column.getToggleSortingHandler(),children:[(0,U.jsx)(e.FlexRender,{header:t}),n===`asc`?(0,U.jsx)(xe,{className:`size-3.5`}):n===`desc`?(0,U.jsx)(ye,{className:`size-3.5`}):null]}):(0,U.jsx)(e.FlexRender,{header:t})},t.id)})},t.id))}),(0,U.jsx)(ne,{children:e.getRowModel().rows.map(t=>{let i=[...t.getStartVisibleCells(),...t.getCenterVisibleCells(),...t.getEndVisibleCells()],s=i.find(e=>e.column.id!==`select`)?.id;return(0,U.jsx)(me,{"data-state":t.getIsSelected()?`selected`:void 0,className:o((t.getIsGrouped()||r&&t.subRows.length>0)&&`bg-muted/40 font-medium`),children:i.map(i=>(0,U.jsx)(F,{className:o(a.has(i.column.id)&&`text-right tabular-nums`),children:i.getIsGrouped()?(0,U.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1`,onClick:t.getToggleExpandedHandler(),children:[t.getIsExpanded()?(0,U.jsx)(x,{className:`size-4`}):(0,U.jsx)(n,{className:`size-4`}),(0,U.jsx)(e.FlexRender,{cell:i}),` (`,t.subRows.length,`)`]}):i.getIsPlaceholder()?null:r&&i.id===s?(0,U.jsxs)(`span`,{className:`inline-flex items-center gap-1`,style:{paddingLeft:t.depth*18},children:[t.getCanExpand()?(0,U.jsx)(`button`,{type:`button`,onClick:t.getToggleExpandedHandler(),"aria-label":`Toggle row`,children:t.getIsExpanded()?(0,U.jsx)(x,{className:`size-4`}):(0,U.jsx)(n,{className:`size-4`})}):(0,U.jsx)(`span`,{className:`w-4`}),(0,U.jsx)(e.FlexRender,{cell:i})]}):(0,U.jsx)(e.FlexRender,{cell:i})},i.id))},t.id)})})]})}),i&&(0,U.jsxs)(`div`,{className:`flex items-center justify-end gap-2 text-sm text-muted-foreground`,children:[(0,U.jsxs)(`span`,{children:[`Page `,e.state.pagination.pageIndex+1,` of `,Math.max(1,e.getPageCount())]}),(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:`Previous`}),(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:`Next`})]})]})}var Q=Br({columnVisibilityFeature:Ka,columnPinningFeature:ua,columnSizingFeature:Aa,columnFilteringFeature:_i,globalFilteringFeature:to,columnGroupingFeature:ji,rowAggregationFeature:ai,rowSortingFeature:ec,rowExpandingFeature:So,rowSelectionFeature:Ss,rowPaginationFeature:Uo,filteredRowModel:uc(),groupedRowModel:fc(),sortedRowModel:vc(),expandedRowModel:yo(),paginatedRowModel:gc(),filterFns:{includesString:Ja},sortFns:{alphanumeric:Ts,basic:Ds,datetime:Es},aggregationFns:{sum:rc,mean:ic,count:ac},columnMeta:zr()}),$=new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}),xc=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),Sc=B({default:()=>Dc,meta:()=>Cc}),Cc={title:`Orders to Excel`,description:`An operations team sorts and groups the order book, tidies the columns, and exports it. The file opens the way the table looked, with live totals.`,docs:`grouped-rows-as-outlines.html`},wc=I(),Tc=Rr(),Ec=Tc.columns([Tc.accessor(`region`,{header:`Region`,size:150}),Tc.accessor(`customer`,{header:`Customer`,size:180}),Tc.accessor(`product`,{header:`Product`,size:140}),Tc.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>e.getValue()?xc.format(e.getValue()):null,meta:{rowpine:{numFmt:`yyyy-mm-dd`}}}),Tc.accessor(`quantity`,{header:`Qty`,aggregationFn:`sum`}),Tc.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),Tc.accessor(`status`,{header:`Status`})]);function Dc(){let[e,t]=H.useState(null),n=H.useRef(null),r=X({features:Q,columns:Ec,data:wc,initialState:{pagination:{pageIndex:0,pageSize:10}}}),i=H.useRef(r);i.current=r;let a=e=>()=>W(n.current,`button`,e),o=H.useMemo(()=>[{caption:`The order book in a TanStack table, styled with shadcn/ui: 120 orders, ten to a page.`,run:e=>e.point(()=>n.current?.querySelector(`table`))},{caption:`Sort by amount, largest first.`,run:async e=>{await e.click(()=>W(n.current,`th button`,`Amount`)),i.current.setSorting([{id:`amount`,desc:!0}])}},{caption:`Group by region. Each group shows its order count, units and total.`,run:async e=>{await e.click(a(`Group by region`)),i.current.setGrouping([`region`]),await G(),i.current.setExpanded(!0)}},{caption:`Hide Status and pin Customer to the left.`,run:async e=>{await e.click(a(`Hide status`)),i.current.setColumnVisibility({status:!1}),await e.click(a(`Pin customer`)),i.current.setColumnPinning({start:[`customer`],end:[]})}},{caption:`Export to Excel. Every order goes, not just this page: regions as outline rows, totals as SUBTOTAL formulas, Customer frozen, Status left out.`,run:async e=>{await e.click(()=>W(n.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await G();let r=await g(i.current,{download:!1});t({blob:r,name:`orders.xlsx`,kind:`xlsx`,note:`click any cell to see its value or formula`})}}],[]),s=H.useCallback(()=>{let e=i.current;e.setSorting([]),e.setGrouping([]),e.setColumnVisibility({}),e.setColumnPinning({start:[],end:[]}),e.setPageIndex(0),t(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:o,reset:s}),(0,U.jsx)(Ye,{rootRef:n,preview:e,onClosePreview:()=>t(null),children:(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>r.setGrouping(r.state.grouping.length?[]:[`region`]),children:`Group by region`}),(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>r.getColumn(`status`)?.toggleVisibility(),children:`Hide status`}),(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>r.getColumn(`customer`)?.pin(!r.getColumn(`customer`)?.getIsPinned()&&`start`),children:`Pin customer`}),(0,U.jsx)(V,{table:r,fileName:`orders`,pdfTitle:`Orders`,className:`ml-auto`})]}),(0,U.jsx)(Z,{table:r,numeric:[`quantity`,`amount`]})]})})]})}var Oc=B({default:()=>Fc,meta:()=>kc}),kc={title:`Month-end PDF`,description:`Finance turns the receivables table into the PDF that goes to the board: grouped by status, headline numbers on top, Letter landscape, marked DRAFT.`,docs:`pdf-title-kpis-watermark.html`},Ac=I(),jc=Rr(),Mc=jc.columns([jc.accessor(`status`,{header:`Status`,size:120}),jc.accessor(`customer`,{header:`Customer`,size:190}),jc.accessor(`product`,{header:`Product`}),jc.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?xc.format(e.getValue()):null,meta:{rowpine:{format:e=>xc.format(e)}}}),jc.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{format:e=>$.format(e)}}})]),Nc=Ac.reduce((e,t)=>e+t.amount,0),Pc=Ac.filter(e=>e.status===`Overdue`);function Fc(){let[e,t]=H.useState(null),[n,r]=H.useState(`A4`),[i,a]=H.useState(!1),[o,s]=H.useState(!1),c=H.useRef(null),l=X({features:Q,columns:Mc,data:Ac,initialState:{pagination:{pageIndex:0,pageSize:10}}}),u=H.useRef({table:l,pageSize:n,landscape:i,extras:o});u.current={table:l,pageSize:n,landscape:i,extras:o};let f=async()=>{let{table:e,pageSize:t,landscape:n,extras:r}=u.current;return await w(e,{download:!1,title:`Receivables`,subtitle:`January to September 2026`,pageSize:t,pageOrientation:n?`landscape`:`portrait`,headerColor:`#1f3d2e`,...r?{kpis:[{label:`Invoiced`,value:$.format(Nc)},{label:`Overdue`,value:$.format(Pc.reduce((e,t)=>e+t.amount,0)),delta:`${Pc.length} orders`,color:`#b91c1c`}],watermark:`DRAFT`}:{}})},p=H.useMemo(()=>[{caption:`The receivables: 120 orders with their status and amount.`,run:e=>e.point(()=>c.current?.querySelector(`table`))},{caption:`Group by status. TanStack adds up each group, and the PDF prints those totals.`,run:async e=>{await e.click(()=>W(c.current,`button`,`Group by status`)),u.current.table.setGrouping([`status`]),await G(),u.current.table.setExpanded(!0)}},{caption:`Letter, landscape: the board prints on US paper.`,run:async e=>{await e.click(()=>c.current?.querySelector(`select`)),r(`LETTER`),await e.click(()=>c.current?.querySelector(`input[name="landscape"]`)),a(!0)}},{caption:`Add the headline numbers and a DRAFT watermark.`,run:async e=>{await e.click(()=>c.current?.querySelector(`input[name="extras"]`)),s(!0)}},{caption:`Create the PDF: title, headline numbers, groups with their totals, page numbers, the header row on every page.`,run:async e=>{await e.click(()=>W(c.current,`button`,`Create PDF`)),await G(),t({blob:await f(),name:`receivables.pdf`,kind:`pdf`})}}],[]),m=H.useCallback(()=>{u.current.table.setGrouping([]),u.current.table.setPageIndex(0),r(`A4`),a(!1),s(!1),t(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:p,reset:m}),(0,U.jsx)(Ye,{rootRef:c,preview:e,onClosePreview:()=>t(null),children:(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-sm`,children:[(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>l.setGrouping(l.state.grouping.length?[]:[`status`]),children:`Group by status`}),(0,U.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Page`,(0,U.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),className:`h-8 rounded-md border bg-background px-2`,children:[`A4`,`LETTER`,`LEGAL`].map(e=>(0,U.jsx)(`option`,{children:e},e))})]}),(0,U.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(`input`,{type:`checkbox`,name:`landscape`,checked:i,onChange:e=>a(e.target.checked)}),`Landscape`]}),(0,U.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(`input`,{type:`checkbox`,name:`extras`,checked:o,onChange:e=>s(e.target.checked)}),`Headline numbers and watermark`]}),(0,U.jsxs)(z,{size:`sm`,className:`ml-auto`,onClick:async()=>t({blob:await f(),name:`receivables.pdf`,kind:`pdf`}),children:[(0,U.jsx)(d,{}),`Create PDF`]})]}),(0,U.jsx)(Z,{table:l,numeric:[`amount`]})]})})]})}var Ic=B({default:()=>Vc,meta:()=>Lc}),Lc={title:`Budget by department`,description:`A controller reviews spend against budget across departments and teams, flags the overspend in red, and sends the tree to Excel and PDF with its levels intact.`,docs:`tree-data.html`},Rc=Rr(),zc=e=>e.actual-e.budget;function Bc(e){let t=t=>e&&t>0?{fill:`#fee2e2`,color:`#991b1b`,bold:!0}:void 0;return Rc.columns([Rc.accessor(`name`,{header:`Unit`,size:230}),Rc.accessor(`lead`,{header:`Lead`,size:160}),Rc.accessor(`budget`,{header:`Budget`,cell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>$.format(e)}}}),Rc.accessor(`actual`,{header:`Actual`,cell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>$.format(e)}}}),Rc.accessor(zc,{id:`variance`,header:`Over / under`,cell:e=>{let n=t(e.getValue());return(0,U.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:n?{background:n.fill,color:n.color,fontWeight:600}:void 0,children:$.format(e.getValue())})},meta:{rowpine:{numFmt:`"$"#,##0;[Red]-"$"#,##0`,format:e=>$.format(e),cellStyle:t}}})])}function Vc(){let[e,t]=H.useState(null),[n,r]=H.useState(!1),i=H.useMemo(()=>Bc(n),[n]),a=H.useRef(null),o=X({features:Q,columns:i,data:de,getSubRows:e=>e.subRows,initialState:{expanded:!0}}),s=H.useRef(o);s.current=o;let c=H.useMemo(()=>[{caption:`Departments and their teams, nested with getSubRows. Parents carry the totals of their teams.`,run:e=>e.point(()=>a.current?.querySelector(`table`))},{caption:`Collapse Sales to read it as one line.`,run:async e=>{await e.click(()=>W(a.current,`tr`,`Sales`)?.querySelector(`button[aria-label="Toggle row"]`)),s.current.setExpanded({0:!0,"0.2":!0,1:!1})}},{caption:`Flag the overspend. Teams over budget turn red, and the same rule colors the cells in the files.`,run:async e=>{await e.click(()=>W(a.current,`button`,`Flag overspend`)),r(!0)}},{caption:`Export to Excel: one outline level per depth, parents in bold, the red cells kept. Collapsed or not, every team is in the file.`,run:async e=>{await e.click(()=>W(a.current,`button`,`Excel`)),await G(),t({blob:await g(s.current,{download:!1}),name:`budget.xlsx`,kind:`xlsx`,note:`budget vs actual`})}},{caption:`And to PDF, with the tree indented and the same colors.`,run:async e=>{await e.click(()=>W(a.current,`button`,`PDF`)),await G(),t({blob:await w(s.current,{download:!1,title:`Budget by department`}),name:`budget.pdf`,kind:`pdf`})}}],[]),l=H.useCallback(()=>{s.current.setExpanded(!0),r(!1),t(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:c,reset:l}),(0,U.jsx)(Ye,{rootRef:a,preview:e,onClosePreview:()=>t(null),children:(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,U.jsx)(z,{variant:n?`secondary`:`outline`,size:`sm`,onClick:()=>r(e=>!e),children:`Flag overspend`}),(0,U.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:async()=>t({blob:await g(o,{download:!1}),name:`budget.xlsx`,kind:`xlsx`}),children:`Excel`}),(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:async()=>t({blob:await w(o,{download:!1,title:`Budget by department`}),name:`budget.pdf`,kind:`pdf`}),children:`PDF`})]})]}),(0,U.jsx)(Z,{table:o,numeric:[`budget`,`actual`,`variance`],tree:!0,paging:!1})]})})]})}var Hc=B({default:()=>qc,meta:()=>Uc}),Uc={title:`Support tickets`,description:`A support lead counts the open tickets by team and priority, adds how long they take, and prints the page for the weekly review.`,docs:`aggregations.html`},Wc=le(),Gc=[{field:`team`,label:`Team`,kind:`dimension`},{field:`priority`,label:`Priority`,kind:`dimension`},{field:`status`,label:`Status`,kind:`dimension`},{field:`channel`,label:`Channel`,kind:`dimension`},{field:`customer`,label:`Customer`,kind:`dimension`},{field:`id`,label:`Tickets`,kind:`measure`,defaultAgg:`count`},{field:`hours`,label:`Hours to resolve`,kind:`measure`,defaultAgg:`avg`,format:e=>typeof e==`number`?e.toFixed(1):``}],Kc={rows:[`team`],cols:[],values:[{field:`id`,agg:`count`,label:`Count of Tickets`}],filters:[]};function qc(){let[e,t]=H.useState(Kc),[n,r]=H.useState(null),i=H.useRef(null),a=H.useRef(null),o=H.useCallback(e=>{a.current=e},[]),s=e=>()=>W(i.current,`aside[aria-label="Pivot fields"] [draggable="true"]`,e),c=e=>()=>i.current?.querySelector(`[data-well="${e}"]`),l=H.useMemo(()=>[{caption:`500 tickets, counted by team.`,run:e=>e.point(()=>i.current?.querySelector(`table`))},{caption:`Priority across the top: where the urgent work sits.`,run:async e=>{await e.click(s(`Priority`)),await e.point(c(`cols`)),t(e=>T(e,Gc,`priority`,`cols`))}},{caption:`Leave out what is solved: Status in Filters, only Open and Pending.`,run:async e=>{await e.click(s(`Status`)),await e.point(c(`filters`)),t(e=>{let t=T(e,Gc,`status`,`filters`);return{...t,filters:t.filters.map(e=>e.field===`status`?{...e,allowed:[`Open`,`Pending`]}:e)}})}},{caption:`Add the average hours to resolve next to the count. Two measures sit side by side under each priority.`,run:async e=>{await e.click(s(`Hours to resolve`)),await e.point(c(`values`)),t(e=>e.values.some(e=>e.field===`hours`)?e:T(e,Gc,`hours`,`values`))}},{caption:`Print it for the weekly review: a landscape PDF with the totals in bold.`,run:async e=>{if(await e.click(()=>W(i.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await G(),!a.current)return;let t=await w(a.current.table,{download:!1,title:`Open tickets by team and priority`,pageOrientation:`landscape`,rowStyle:u});r({blob:t,name:`open-tickets.pdf`,kind:`pdf`})}}],[]),d=H.useCallback(()=>{t(Kc),r(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:l,reset:d}),(0,U.jsx)(Ye,{rootRef:i,preview:n,onClosePreview:()=>r(null),children:(0,U.jsx)(pe,{data:Wc,fields:Gc,layout:e,onLayoutChange:t,onPivotChange:o,actions:e=>(0,U.jsx)(V,{table:e.table,fileName:`tickets`,pdfTitle:`Tickets`,rowStyle:u})})})]})}var Jc=B({default:()=>el,meta:()=>Yc}),Yc={title:`Inventory reorder list`,description:`A buyer looks at stock in five warehouses, flags the items below their reorder point, keeps only those, and sends the reorder list to Excel.`,docs:`cell-colors.html`},Xc=ae(),Zc=Xc.filter(e=>e.onHand<e.reorderAt),Qc=Rr();function $c(e){let t=(t,n)=>e&&n.onHand<n.reorderAt?{fill:`#fee2e2`,color:`#991b1b`,bold:!0}:void 0;return Qc.columns([Qc.accessor(`warehouse`,{header:`Warehouse`,size:140}),Qc.accessor(`sku`,{header:`SKU`,size:100}),Qc.accessor(`item`,{header:`Item`,size:150}),Qc.accessor(`category`,{header:`Category`,size:120}),Qc.accessor(`onHand`,{header:`On hand`,aggregationFn:`sum`,cell:e=>{let n=t(e.getValue(),e.row.original);return(0,U.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:n?{background:n.fill,color:n.color,fontWeight:600}:void 0,children:e.getValue()})},meta:{rowpine:{cellStyle:t}}}),Qc.accessor(e=>String(e.reorderAt),{id:`reorderAt`,header:`Reorder at`,meta:{rowpine:{align:`right`}}}),Qc.accessor(`value`,{header:`Stock value`,aggregationFn:`sum`,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`}}})])}function el(){let[e,t]=H.useState(!1),[n,r]=H.useState(!1),[i,a]=H.useState(null),o=H.useMemo(()=>$c(e),[e]),s=H.useRef(null),c=X({features:Q,columns:o,data:n?Zc:Xc,initialState:{pagination:{pageIndex:0,pageSize:12}}}),l=H.useRef(c);l.current=c;let u=H.useMemo(()=>[{caption:`Stock of ${Xc.length} lines in five warehouses.`,run:e=>e.point(()=>s.current?.querySelector(`table`))},{caption:`Group by warehouse. Each warehouse shows its units on hand and the value of its stock.`,run:async e=>{await e.click(()=>W(s.current,`button`,`Group by warehouse`)),l.current.setGrouping([`warehouse`]),await G(),l.current.setExpanded(!0)}},{caption:`Flag the items below their reorder point. The same rule colors the cells in the file.`,run:async e=>{await e.click(()=>W(s.current,`button`,`Flag low stock`)),t(!0)}},{caption:`Keep only those: ${Zc.length} lines to reorder.`,run:async e=>{await e.click(()=>W(s.current,`button`,`Low stock only`)),r(!0),await G(),l.current.setExpanded(!0)}},{caption:`Export the reorder list to Excel: grouped by warehouse, red cells kept, stock value as a SUBTOTAL per warehouse.`,run:async e=>{await e.click(()=>W(s.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await G(),a({blob:await g(l.current,{download:!1}),name:`reorder-list.xlsx`,kind:`xlsx`})}}],[]),d=H.useCallback(()=>{l.current.setGrouping([]),l.current.setPageIndex(0),t(!1),r(!1),a(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:u,reset:d}),(0,U.jsx)(Ye,{rootRef:s,preview:i,onClosePreview:()=>a(null),children:(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>c.setGrouping(c.state.grouping.length?[]:[`warehouse`]),children:`Group by warehouse`}),(0,U.jsx)(z,{variant:e?`secondary`:`outline`,size:`sm`,onClick:()=>t(e=>!e),children:`Flag low stock`}),(0,U.jsx)(z,{variant:n?`secondary`:`outline`,size:`sm`,onClick:()=>r(e=>!e),children:`Low stock only`}),(0,U.jsx)(V,{table:c,fileName:`reorder-list`,className:`ml-auto`})]}),(0,U.jsx)(Z,{table:c,numeric:[`onHand`,`reorderAt`,`value`]})]})})]})}var tl=B({default:()=>ul,meta:()=>nl}),nl={title:`Timesheet to invoice`,description:`A project manager picks one client's billable hours out of two weeks of time entries and sends them as a PDF that backs up the invoice.`,docs:`which-rows-are-exported.html`},rl=A(),il=`Halvorsen AS`,al=Rr(),ol=al.columns([al.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},cell:({row:e})=>e.getIsGrouped()?null:(0,U.jsx)(k,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select entry`})}),al.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?xc.format(e.getValue()):null,meta:{rowpine:{format:e=>xc.format(e)}}}),al.accessor(`person`,{header:`Person`,size:140}),al.accessor(`client`,{header:`Client`,size:150}),al.accessor(`project`,{header:`Project`,size:170}),al.accessor(`task`,{header:`Task`}),al.accessor(`hours`,{header:`Hours`,aggregationFn:`sum`}),al.accessor(`billable`,{header:`Billable`,cell:e=>e.getValue()?`Yes`:`No`}),al.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{format:e=>$.format(e)}}})]),sl=Object.fromEntries(rl.filter(e=>e.client===il&&e.billable).map(e=>[e.id,!0])),cl=rl.filter(e=>sl[e.id]).reduce((e,t)=>e+t.hours,0),ll=rl.filter(e=>sl[e.id]).reduce((e,t)=>e+t.amount,0);function ul(){let[e,t]=H.useState(null),n=H.useRef(null),r=X({features:Q,columns:ol,data:rl,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:12}}}),i=H.useRef(r);i.current=r;let a=()=>w(i.current,{download:!1,rows:`selected`,title:`${il}: billable hours`,subtitle:`1 to 12 September 2026`,kpis:[{label:`Hours`,value:cl.toLocaleString(`en-US`)},{label:`Amount`,value:$.format(ll)}]}),o=H.useMemo(()=>[{caption:`Two weeks of time entries: ${rl.length} of them, four people, three clients.`,run:e=>e.point(()=>n.current?.querySelector(`table`))},{caption:`Select ${il}'s billable entries.`,run:async e=>{await e.click(()=>W(n.current,`button`,`Select billable`)),i.current.setRowSelection(sl)}},{caption:`Group by project to check the hours add up before they go out.`,run:async e=>{await e.click(()=>W(n.current,`button`,`Group by project`)),i.current.setGrouping([`project`]),await G(),i.current.setExpanded(!0)}},{caption:`Export only the selected rows to PDF, with the hours and the amount on top. The other clients stay out.`,run:async e=>{await e.click(()=>W(n.current,`button`,`PDF of selected`)),await G(),t({blob:await a(),name:`halvorsen-hours.pdf`,kind:`pdf`})}}],[]),s=H.useCallback(()=>{i.current.setRowSelection({}),i.current.setGrouping([]),i.current.setPageIndex(0),t(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:o,reset:s}),(0,U.jsx)(Ye,{rootRef:n,preview:e,onClosePreview:()=>t(null),children:(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[(0,U.jsxs)(z,{variant:`outline`,size:`sm`,onClick:()=>r.setRowSelection(sl),children:[`Select billable for `,il]}),(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>r.setGrouping(r.state.grouping.length?[]:[`project`]),children:`Group by project`}),(0,U.jsxs)(`span`,{className:`text-muted-foreground`,children:[Object.keys(r.state.rowSelection).length,` selected`]}),(0,U.jsxs)(z,{size:`sm`,className:`ml-auto`,onClick:async()=>t({blob:await a(),name:`halvorsen-hours.pdf`,kind:`pdf`}),children:[(0,U.jsx)(d,{}),`PDF of selected`]})]}),(0,U.jsx)(Z,{table:r,numeric:[`hours`,`amount`]})]})})]})}var dl=B({default:()=>_l,meta:()=>fl}),fl={title:`Marketing spend`,description:`A marketing lead lays six months of spend against signups by channel, switches to a saved view of the campaigns, and sends the numbers to finance.`,docs:`presets-and-saved-views.html`},pl=se(),ml=[{field:`channel`,label:`Channel`,kind:`dimension`},{field:`campaign`,label:`Campaign`,kind:`dimension`},{field:`month`,label:`Month`,kind:`dimension`},{field:`spend`,label:`Spend`,kind:`measure`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`clicks`,label:`Clicks`,kind:`measure`},{field:`signups`,label:`Signups`,kind:`measure`}],hl={rows:[`channel`],cols:[],values:[{field:`spend`,agg:`sum`,label:`Sum of Spend`}],filters:[]},gl=[{name:`Paid campaigns, spend and signups`,layout:{rows:[`channel`,`campaign`],cols:[],values:[{field:`spend`,agg:`sum`,label:`Spend`},{field:`signups`,agg:`sum`,label:`Signups`}],filters:[{field:`channel`,allowed:[`Display`,`Search`,`Social`]}]}}];function _l(){let[e,t]=H.useState(hl),[n,r]=H.useState(null),i=H.useRef(null),a=H.useRef(null),o=H.useCallback(e=>{a.current=e},[]),s=e=>()=>W(i.current,`aside[aria-label="Pivot fields"] [draggable="true"]`,e),c=e=>()=>i.current?.querySelector(`[data-well="${e}"]`),l=H.useMemo(()=>({numFmt:`#,##0`}),[]),d=H.useMemo(()=>[{caption:`Six months of spend across five channels.`,run:e=>e.point(()=>i.current?.querySelector(`table`))},{caption:`Month across the top: where the money went, month by month.`,run:async e=>{await e.click(s(`Month`)),await e.point(c(`cols`)),t(e=>T(e,ml,`month`,`cols`))}},{caption:`Add signups next to spend, so each month shows what the money bought.`,run:async e=>{await e.click(s(`Signups`)),await e.point(c(`values`)),t(e=>e.values.some(e=>e.field===`signups`)?e:T(e,ml,`signups`,`values`))}},{caption:`Load a saved view: paid campaigns only, by campaign, spend and signups for the half year.`,run:async e=>{await e.click(()=>W(i.current,`[data-slot="dropdown-menu-trigger"]`,`Presets`)),t(structuredClone(gl[0].layout))}},{caption:`Send it to finance as Excel: channels as outline rows over their campaigns, numbers they can work with.`,run:async e=>{await e.click(()=>W(i.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await G(),a.current&&r({blob:await g(a.current.table,{download:!1,rowStyle:u}),name:`paid-campaigns.xlsx`,kind:`xlsx`})}}],[]),f=H.useCallback(()=>{t(hl),r(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:d,reset:f}),(0,U.jsx)(Ye,{rootRef:i,preview:n,onClosePreview:()=>r(null),children:(0,U.jsx)(pe,{data:pl,fields:ml,layout:e,onLayoutChange:t,presets:gl,pivotOptions:l,onPivotChange:o,actions:e=>(0,U.jsx)(V,{table:e.table,fileName:`marketing`,rowStyle:u})})})]})}var vl=B({default:()=>El,meta:()=>yl}),yl={title:`Sales commissions`,description:`Sales operations works out each rep's commission per quarter with a tiered rule written as a custom aggregation, then hands the sheet to payroll.`,docs:`aggregations.html`},bl=re(),xl=e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``,Sl=e=>{let t=e.reduce((e,t)=>e+Number(t||0),0);return Math.min(t,5e4)*.05+Math.max(0,t-5e4)*.08},Cl={rows:[`region`,`rep`],cols:[`quarter`],values:[{field:`amount`,agg:`sum`,label:`Closed`,format:xl}]},wl={rows:[`region`,`rep`],cols:[`quarter`],values:[{field:`amount`,agg:`sum`,label:`Closed`,format:xl},{field:`amount`,agg:Sl,label:`Commission`,format:xl}]},Tl={numFmt:`"$"#,##0`};function El(){let[e,t]=H.useState(!1),[n,r]=H.useState(new Set),[i,a]=H.useState(null),o=N(bl,e?wl:Cl,Tl),s=H.useRef(o);s.current=o;let c=H.useRef(null),l=H.useMemo(()=>[{caption:`${bl.length} closed deals: what each rep closed per quarter, by region.`,run:e=>e.point(()=>c.current?.querySelector(`table`))},{caption:`Add the commission: 5% on the first $50,000 a quarter, 8% above it. It is a custom aggregation over each cell's deals.`,run:async e=>{await e.click(()=>W(c.current,`button`,`Show commission`)),t(!0)}},{caption:`Region rows add up their reps, and the tier is applied to each rep's quarter, not to the region's total.`,run:e=>e.point(()=>W(c.current,`tr`,`Europe`))},{caption:`Collapse Asia Pacific to focus on the larger regions.`,run:async e=>{await e.click(()=>c.current?.querySelector(`button[aria-label="Collapse Asia Pacific"], button[aria-label="Expand Asia Pacific"]`)),r(new Set([`group__0:Asia Pacific`]))}},{caption:`Hand it to payroll as Excel: every rep, collapsed or not, with closed amounts and commission side by side.`,run:async e=>{await e.click(()=>W(c.current,`[data-slot="dropdown-menu-trigger"]`,`Export`)),await G(),a({blob:await g(s.current.table,{download:!1,rowStyle:u}),name:`commissions.xlsx`,kind:`xlsx`})}}],[]),d=H.useCallback(()=>{t(!1),r(new Set),a(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:l,reset:d}),(0,U.jsx)(Ye,{rootRef:c,preview:i,onClosePreview:()=>a(null),children:(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(z,{variant:e?`secondary`:`outline`,size:`sm`,onClick:()=>t(e=>!e),children:`Show commission`}),(0,U.jsx)(V,{table:o.table,fileName:`commissions`,rowStyle:u,className:`ml-auto`})]}),(0,U.jsx)(M,{pivot:o,collapsed:n,onCollapsedChange:r,className:`overflow-x-auto`})]})})]})}var Dl=B({default:()=>Nl,meta:()=>Ol}),Ol={title:`Carrier scorecard`,description:`Logistics groups a month of shipments by carrier, marks the late ones, and prints a 14-column scorecard that still fits the page.`,docs:`pdf-page-setup.html`},kl=D(),Al=Rr(),jl=(e,t)=>Al.accessor(e,{header:t,size:100,cell:e=>e.getValue()?xc.format(e.getValue()):null,meta:{rowpine:{format:e=>xc.format(e)}}});function Ml(e){let t=t=>e&&typeof t==`number`&&t>0?{color:`#b91c1c`,bold:!0}:void 0;return Al.columns([Al.accessor(`carrier`,{header:`Carrier`,size:140}),Al.accessor(`id`,{header:`Shipment`,size:90}),Al.accessor(`origin`,{header:`From`,size:90}),Al.accessor(`destination`,{header:`To`,size:90}),Al.accessor(`mode`,{header:`Mode`,size:70}),jl(`shipped`,`Shipped`),jl(`promised`,`Promised`),jl(`delivered`,`Delivered`),Al.accessor(`daysLate`,{header:`Days late`,size:80,aggregationFn:`mean`,cell:e=>(0,U.jsx)(`span`,{style:t(e.getValue())?{color:`#b91c1c`,fontWeight:600}:void 0,children:e.getValue()}),aggregatedCell:e=>e.getValue().toFixed(1),meta:{rowpine:{format:e=>Number.isInteger(e)?String(e):e.toFixed(1),cellStyle:t}}}),Al.accessor(`pallets`,{header:`Pallets`,size:70,aggregationFn:`sum`}),Al.accessor(`weightKg`,{header:`Weight kg`,size:90,aggregationFn:`sum`}),Al.accessor(`cost`,{header:`Cost`,size:90,aggregationFn:`sum`,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{format:e=>$.format(e)}}}),Al.accessor(`claims`,{header:`Claims`,size:70,aggregationFn:`sum`}),Al.accessor(`status`,{header:`Status`,size:80})])}function Nl(){let[e,t]=H.useState(!1),[n,r]=H.useState(null),i=H.useMemo(()=>Ml(e),[e]),a=H.useRef(null),o=X({features:Q,columns:i,data:kl,initialState:{pagination:{pageIndex:0,pageSize:10}}}),s=H.useRef(o);s.current=o;let c=()=>w(s.current,{download:!1,title:`Carrier scorecard`,subtitle:`Shipments in August 2026`}),l=H.useMemo(()=>[{caption:`${kl.length} shipments in August, 14 columns each.`,run:e=>e.point(()=>a.current?.querySelector(`table`))},{caption:`Group by carrier: average days late, total pallets, weight, cost and claims per carrier.`,run:async e=>{await e.click(()=>W(a.current,`button`,`Group by carrier`)),s.current.setGrouping([`carrier`]),await G(),s.current.setExpanded(!0)}},{caption:`Mark the late deliveries in red.`,run:async e=>{await e.click(()=>W(a.current,`button`,`Mark late`)),t(!0)}},{caption:`Print it. Fourteen columns do not fit a portrait page, so the page turns and the type shrinks until every column prints.`,run:async e=>{await e.click(()=>W(a.current,`button`,`Scorecard PDF`)),await G(),r({blob:await c(),name:`carrier-scorecard.pdf`,kind:`pdf`})}}],[]),u=H.useCallback(()=>{s.current.setGrouping([]),s.current.setPageIndex(0),t(!1),r(null)},[]);return(0,U.jsxs)(`div`,{className:`grid gap-4`,children:[(0,U.jsx)($e,{steps:l,reset:u}),(0,U.jsx)(Ye,{rootRef:a,preview:n,onClosePreview:()=>r(null),children:(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>o.setGrouping(o.state.grouping.length?[]:[`carrier`]),children:`Group by carrier`}),(0,U.jsx)(z,{variant:e?`secondary`:`outline`,size:`sm`,onClick:()=>t(e=>!e),children:`Mark late`}),(0,U.jsxs)(z,{size:`sm`,className:`ml-auto`,onClick:async()=>r({blob:await c(),name:`carrier-scorecard.pdf`,kind:`pdf`}),children:[(0,U.jsx)(d,{}),`Scorecard PDF`]})]}),(0,U.jsx)(Z,{table:o,numeric:[`daysLate`,`pallets`,`weightKg`,`cost`,`claims`]})]})})]})}var Pl=`import * as React from "react"
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
`,Fl=`import * as React from "react"
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
`,Il=`import * as React from "react"
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
`,Ll=`import * as React from "react"
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
`,Rl=`import * as React from "react"
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
`,zl=`import * as React from "react"
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
`,Bl=`import * as React from "react"
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
`,Vl=`import * as React from "react"
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
`,Hl=`import * as React from "react"
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
`,Ul=`import * as React from "react"
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
`,Wl=B({default:()=>Yl,meta:()=>Gl}),Gl={title:`Export menu on a data table`,description:`A shadcn data table with search, sorting and paging, and an Export menu for Excel, PDF and CSV. The file holds every row that passes the search, in the current sort, not just the visible page.`},Kl=I(),ql=Rr(),Jl=ql.columns([ql.accessor(`id`,{header:`Order`,size:80}),ql.accessor(`customer`,{header:`Customer`,size:190}),ql.accessor(`product`,{header:`Product`,size:150}),ql.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>xc.format(e.getValue()),meta:{rowpine:{numFmt:`yyyy-mm-dd`,format:e=>xc.format(e)}}}),ql.accessor(`amount`,{header:`Amount`,cell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>$.format(e)}}}),ql.accessor(`status`,{header:`Status`,size:100})]);function Yl(){let[e,t]=H.useState(``),n=X({features:Q,columns:Jl,data:Kl,globalFilterFn:`includesString`,state:{globalFilter:e},onGlobalFilterChange:t,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(ge,{placeholder:`Search orders...`,value:e,onChange:e=>t(e.target.value),className:`h-8 w-64`}),(0,U.jsx)(V,{table:n,fileName:`orders`,pdfTitle:`Orders`,className:`ml-auto`})]}),(0,U.jsx)(Z,{table:n,numeric:[`amount`]})]})}var Xl=B({default:()=>tu,meta:()=>Zl}),Zl={title:`Grouped rows to Excel outlines`,description:`Group by region and product. Excel gets one outline level per grouping, so the groups collapse in Excel too, and the group totals are SUBTOTAL formulas over the rows below them.`},Ql=I(),$l=Rr(),eu=$l.columns([$l.accessor(`region`,{header:`Region`,size:170}),$l.accessor(`product`,{header:`Product`,size:170}),$l.accessor(`customer`,{header:`Customer`,size:190}),$l.accessor(`quantity`,{header:`Qty`,aggregationFn:`sum`}),$l.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>$.format(e)}}}),$l.accessor(`amount`,{id:`average`,header:`Avg order`,aggregationFn:`mean`,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>$.format(e)}}})]);function tu(){let e=X({features:Q,columns:eu,data:Ql,initialState:{grouping:[`region`,`product`],expanded:!0,pagination:{pageIndex:0,pageSize:15}}}),t=e.state.grouping.includes(`product`);return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>e.setGrouping(t?[`region`]:[`region`,`product`]),children:t?`Group by region only`:`Also group by product`}),(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>e.toggleAllRowsExpanded(),children:e.getIsAllRowsExpanded()?`Collapse all`:`Expand all`}),(0,U.jsx)(V,{table:e,fileName:`orders-by-region`,pdfTitle:`Orders by region`,className:`ml-auto`})]}),(0,U.jsx)(Z,{table:e,numeric:[`quantity`,`amount`,`average`]})]})}var nu=B({default:()=>su,meta:()=>ru}),ru={title:`Hidden, pinned and excluded columns`,description:`The file has the columns on screen, in screen order. Hidden columns stay out, pinned columns become frozen panes in Excel, and a column marked exclude never goes to a file.`},iu=I(),au=Rr(),ou=au.columns([au.accessor(`customer`,{header:`Customer`,size:190}),au.accessor(`country`,{header:`Country`}),au.accessor(`product`,{header:`Product`,size:150}),au.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>xc.format(e.getValue()),meta:{rowpine:{numFmt:`yyyy-mm-dd`}}}),au.accessor(`amount`,{header:`Amount`,cell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),au.accessor(`status`,{header:`Status`}),au.accessor(`id`,{header:`Internal id`,meta:{rowpine:{exclude:!0}}})]);function su(){let e=X({features:Q,columns:ou,data:iu,initialState:{columnPinning:{start:[`customer`],end:[]},columnVisibility:{country:!1},pagination:{pageIndex:0,pageSize:10}}});return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,U.jsxs)(v,{children:[(0,U.jsxs)(i,{className:t({variant:`outline`,size:`sm`}),children:[(0,U.jsx)(_e,{}),`Columns`]}),(0,U.jsxs)(he,{align:`start`,className:`w-48`,children:[(0,U.jsxs)(y,{children:[(0,U.jsx)(a,{children:`Show`}),e.getAllLeafColumns().map(e=>(0,U.jsx)(r,{checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t),children:String(e.columnDef.header)},e.id))]}),(0,U.jsxs)(y,{children:[(0,U.jsx)(a,{children:`Pin to the start`}),e.getAllLeafColumns().map(e=>(0,U.jsx)(r,{checked:e.getIsPinned()===`start`,onCheckedChange:t=>e.pin(t?`start`:!1),children:String(e.columnDef.header)},e.id))]})]})]}),(0,U.jsx)(V,{table:e,fileName:`orders-columns`,className:`ml-auto`})]}),(0,U.jsx)(Z,{table:e,numeric:[`amount`]})]})}var cu=B({default:()=>pu,meta:()=>lu}),lu={title:`Export only the selected rows`,description:`Tick some rows and the Export menu offers "Selected rows only". The selection column itself is marked exclude, so it never reaches the file.`},uu=I(),du=Rr(),fu=du.columns([du.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},header:({table:e})=>(0,U.jsx)(k,{checked:e.getIsAllPageRowsSelected(),indeterminate:e.getIsSomePageRowsSelected()&&!e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":`Select page`}),cell:({row:e})=>(0,U.jsx)(k,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`})}),du.accessor(`id`,{header:`Order`,size:80}),du.accessor(`customer`,{header:`Customer`,size:190}),du.accessor(`product`,{header:`Product`}),du.accessor(`amount`,{header:`Amount`,cell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}})]);function pu(){let e=X({features:Q,columns:fu,data:uu,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:10},rowSelection:{1001:!0,1004:!0,1007:!0}}}),t=Object.keys(e.state.rowSelection).length;return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-muted-foreground`,children:[t,` selected`,(0,U.jsx)(V,{table:e,fileName:`selected-orders`,className:`ml-auto`})]}),(0,U.jsx)(Z,{table:e,numeric:[`amount`]})]})}function mu(e){return p(e.defaultTagName??`div`,e,e)}var hu=f(`group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!`,{variants:{variant:{default:`bg-primary text-primary-foreground [a]:hover:bg-primary/80`,secondary:`bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80`,destructive:`bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20`,outline:`border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground`,ghost:`hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50`,link:`text-primary underline-offset-4 hover:underline`}},defaultVariants:{variant:`default`}});function gu({className:e,variant:t=`default`,render:n,...r}){return mu({defaultTagName:`span`,props:h({className:o(hu({variant:t}),e)},r),render:n,state:{slot:`badge`,variant:t}})}var _u=B({default:()=>Tu,meta:()=>vu}),vu={title:`Number formats and cell colors`,description:`meta.rowpine.numFmt gives Excel a real number format, so amounts stay numbers you can sum. format sets the text for PDF and cellStyle colors cells in both files, the same rule the screen uses.`},yu=I().map((e,t)=>({...e,margin:t*37%45/100-.05})),bu=new Intl.NumberFormat(`en-US`,{style:`percent`,maximumFractionDigits:1}),xu=e=>e===`Overdue`?{color:`#b91c1c`,bold:!0}:e===`Open`?{color:`#a16207`}:void 0,Su=e=>e<0?`#fee2e2`:e>=.3?`#dcfce7`:void 0,Cu=Rr(),wu=Cu.columns([Cu.accessor(`customer`,{header:`Customer`,size:190}),Cu.accessor(`date`,{header:`Date`,sortFn:`datetime`,cell:e=>xc.format(e.getValue()),meta:{rowpine:{numFmt:`d mmm yyyy`,format:e=>xc.format(e)}}}),Cu.accessor(`amount`,{header:`Amount`,cell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`,format:e=>$.format(e)}}}),Cu.accessor(`margin`,{header:`Margin`,cell:e=>(0,U.jsx)(`span`,{className:`rounded px-1.5 py-0.5`,style:{background:Su(e.getValue())},children:bu.format(e.getValue())}),meta:{rowpine:{numFmt:`0.0%`,format:e=>bu.format(e),cellStyle:e=>({fill:Su(e)})}}}),Cu.accessor(`status`,{header:`Status`,cell:e=>(0,U.jsx)(gu,{variant:e.getValue()===`Overdue`?`destructive`:`secondary`,children:e.getValue()}),meta:{rowpine:{cellStyle:xu}}})]);function Tu(){let e=X({features:Q,columns:wu,data:yu,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(`div`,{className:`flex justify-end`,children:(0,U.jsx)(V,{table:e,fileName:`orders-formatted`,pdfTitle:`Orders`})}),(0,U.jsx)(Z,{table:e,numeric:[`amount`,`margin`]})]})}var Eu=B({default:()=>Au,meta:()=>Du}),Du={title:`Tree data`,description:`Rows nested with getSubRows export as Excel outline levels, one per depth, so the hierarchy collapses in Excel. Parent rows are bold in Excel and PDF.`},Ou=Rr(),ku=Ou.columns([Ou.accessor(`name`,{header:`Unit`,size:240}),Ou.accessor(`lead`,{header:`Lead`,size:170}),Ou.accessor(`headcount`,{header:`Headcount`}),Ou.accessor(`budget`,{header:`Budget`,cell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0`,format:e=>$.format(e)}}})]);function Au(){let e=X({features:Q,columns:ku,data:te,getSubRows:e=>e.subRows,initialState:{expanded:!0}});return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(z,{variant:`outline`,size:`sm`,onClick:()=>e.toggleAllRowsExpanded(),children:e.getIsAllRowsExpanded()?`Collapse all`:`Expand all`}),(0,U.jsx)(V,{table:e,fileName:`org-budget`,pdfTitle:`Budget by unit`,className:`ml-auto`})]}),(0,U.jsx)(Z,{table:e,numeric:[`headcount`,`budget`],tree:!0,paging:!1})]})}var ju=B({default:()=>Iu,meta:()=>Mu}),Mu={title:`A PDF report from your own button`,description:`Call exportPdf directly to set the page: size, orientation, a title and subtitle, a strip of headline numbers, a watermark and the header color. Rows are grouped by status, as on screen.`},Nu=I(),Pu=Rr(),Fu=Pu.columns([Pu.accessor(`status`,{header:`Status`,size:110}),Pu.accessor(`customer`,{header:`Customer`,size:190}),Pu.accessor(`product`,{header:`Product`}),Pu.accessor(`date`,{header:`Date`,cell:e=>e.getValue()?xc.format(e.getValue()):null,meta:{rowpine:{format:e=>xc.format(e)}}}),Pu.accessor(`amount`,{header:`Amount`,aggregationFn:`sum`,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{format:e=>$.format(e)}}})]);function Iu(){let[e,t]=H.useState(`A4`),[n,r]=H.useState(!1),i=X({features:Q,columns:Fu,data:Nu,initialState:{grouping:[`status`],expanded:!0,pagination:{pageIndex:0,pageSize:12}}}),a=Nu.reduce((e,t)=>e+t.amount,0),o=Nu.filter(e=>e.status===`Overdue`);async function s(){await w(i,{fileName:`receivables`,title:`Receivables`,subtitle:`${Nu.length} orders, January to September 2026`,pageSize:e,pageOrientation:n?`landscape`:`portrait`,headerColor:`#1f3d2e`,kpis:[{label:`Invoiced`,value:$.format(a)},{label:`Overdue`,value:$.format(o.reduce((e,t)=>e+t.amount,0)),delta:`${o.length} orders`,color:`#b91c1c`}],watermark:`DRAFT`})}return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[(0,U.jsxs)(`label`,{className:`flex items-center gap-2`,children:[`Page`,(0,U.jsx)(`select`,{value:e,onChange:e=>t(e.target.value),className:`h-8 rounded-md border bg-background px-2`,children:[`A4`,`LETTER`,`LEGAL`,`A3`].map(e=>(0,U.jsx)(`option`,{children:e},e))})]}),(0,U.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>r(e.target.checked)}),`Landscape`]}),(0,U.jsxs)(z,{size:`sm`,className:`ml-auto`,onClick:()=>void s(),children:[(0,U.jsx)(d,{}),`Download PDF`]})]}),(0,U.jsx)(Z,{table:i,numeric:[`amount`]})]})}var Lu=B({default:()=>Vu,meta:()=>Ru}),Ru={title:`A pivot table from code`,description:`usePivot turns flat orders into products down and quarters across, with two measures side by side: units sold and the average order value. Groups expand and collapse, and the pivot exports like any table.`},zu=I(),Bu={rows:[`product`,`region`],cols:[`quarter`],values:[{field:`quantity`,agg:`sum`,label:`Units`},{field:`amount`,agg:`avg`,label:`Avg order`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``}]};function Vu(){let e=N(zu,Bu),[t,n]=H.useState(new Set);return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(`div`,{className:`flex justify-end`,children:(0,U.jsx)(V,{table:e.table,fileName:`units-by-product`,pdfTitle:`Units by product`,rowStyle:u})}),(0,U.jsx)(M,{pivot:e,collapsed:t,onCollapsedChange:n})]})}var Hu=B({default:()=>Ju,meta:()=>Uu}),Uu={title:`Pivot designer`,description:`Users build their own pivot: drag fields into Rows, Columns, Values and Filters, change aggregations from a chip's menu, filter values, load a preset, and switch totals on and off.`},Wu=I(),Gu=[{field:`region`,label:`Region`,kind:`dimension`,group:`Where`},{field:`country`,label:`Country`,kind:`dimension`,group:`Where`},{field:`customer`,label:`Customer`,kind:`dimension`,group:`Who`},{field:`product`,label:`Product`,kind:`dimension`,group:`What`},{field:`status`,label:`Status`,kind:`dimension`,group:`What`},{field:`quarter`,label:`Quarter`,kind:`dimension`,group:`When`},{field:`amount`,label:`Amount`,kind:`measure`,group:`Numbers`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`quantity`,label:`Units`,kind:`measure`,group:`Numbers`}],Ku=[{name:`Revenue by region and quarter`,layout:{rows:[`region`,`country`],cols:[`quarter`],values:[{field:`amount`,agg:`sum`,label:`Sum of Amount`}],filters:[]}},{name:`Overdue by customer`,layout:{rows:[`customer`],cols:[],values:[{field:`amount`,agg:`sum`,label:`Sum of Amount`},{field:`amount`,agg:`count`,label:`Count of Amount`}],filters:[{field:`status`,allowed:[`Overdue`]}]}}],qu={numFmt:`"$"#,##0`};function Ju(){return(0,U.jsx)(pe,{data:Wu,fields:Gu,presets:Ku,pivotOptions:qu,actions:e=>(0,U.jsx)(V,{table:e.table,fileName:`pivot`,pdfTitle:`Sales pivot`,rowStyle:u})})}var Yu=B({default:()=>td,meta:()=>Xu}),Xu={title:`Saved views`,description:`The designer's layout is plain JSON. Keep it in state, save named views to localStorage, offer them back as presets, and export the current pivot from your own buttons.`},Zu=I(),Qu=[{field:`region`,label:`Region`,kind:`dimension`},{field:`product`,label:`Product`,kind:`dimension`},{field:`status`,label:`Status`,kind:`dimension`},{field:`quarter`,label:`Quarter`,kind:`dimension`},{field:`amount`,label:`Amount`,kind:`measure`},{field:`quantity`,label:`Units`,kind:`measure`}],$u=`rowpine-example-views`;function ed(){try{return JSON.parse(localStorage.getItem($u)??`[]`)}catch{return[]}}function td(){let[e,t]=H.useState(()=>S(Qu)),[n,r]=H.useState(ed),[i,a]=H.useState(``),o=H.useRef(null),c=H.useCallback(e=>{o.current=e},[]),l=e=>{r(e);try{localStorage.setItem($u,JSON.stringify(e))}catch{}};return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,U.jsx)(ge,{placeholder:`Name this view...`,value:i,onChange:e=>a(e.target.value),className:`h-8 w-56`}),(0,U.jsxs)(z,{size:`sm`,variant:`outline`,disabled:!i.trim(),onClick:()=>{l([...n.filter(e=>e.name!==i.trim()),{name:i.trim(),layout:e}]),a(``)},children:[(0,U.jsx)(je,{}),`Save view`]}),n.length>0&&(0,U.jsxs)(z,{size:`sm`,variant:`ghost`,onClick:()=>l([]),children:[(0,U.jsx)(Ne,{}),`Forget saved views`]}),(0,U.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,U.jsx)(z,{size:`sm`,variant:`outline`,onClick:()=>o.current&&void s(o.current.table,{fileName:`view`}),children:`CSV`}),(0,U.jsx)(z,{size:`sm`,onClick:()=>o.current&&void g(o.current.table,{fileName:`view`,rowStyle:u}),children:`Excel`})]})]}),(0,U.jsx)(pe,{data:Zu,fields:Qu,layout:e,onLayoutChange:t,presets:n,onPivotChange:c}),(0,U.jsxs)(`details`,{className:`text-sm`,children:[(0,U.jsx)(`summary`,{className:`cursor-pointer text-muted-foreground`,children:`Current layout as JSON`}),(0,U.jsx)(`pre`,{className:`mt-2 overflow-x-auto rounded-md bg-muted p-3 text-xs`,children:JSON.stringify(e,null,2)})]})]})}var nd=B({default:()=>od,meta:()=>rd}),rd={title:`Your own aggregation`,description:`An aggregation can be any function of the values in a cell. Here the median order sits next to the built-in count of distinct customers.`},id=I(),ad={rows:[`product`],cols:[`quarter`],values:[{field:`amount`,agg:e=>{let t=e.map(Number).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t);if(!t.length)return null;let n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2},label:`Median order`,format:e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``},{field:`customer`,agg:`countDistinct`,label:`Customers`}]};function od(){let e=N(id,ad);return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(`div`,{className:`flex justify-end`,children:(0,U.jsx)(V,{table:e.table,fileName:`median-orders`,rowStyle:u})}),(0,U.jsx)(M,{pivot:e})]})}var sd=B({default:()=>dd,meta:()=>cd}),cd={title:`A pivot in your own TanStack table`,description:`createPivot returns rows nested through subRows and TanStack column definitions. Render them with the table you already have; sorting, expanding and export all work on it.`},ld=I(),ud=e=>typeof e==`number`?`$${Math.round(e).toLocaleString(`en-US`)}`:``;function dd(){let e=H.useMemo(()=>ee(ld,{rows:[`region`,`country`],cols:[`status`],values:[{field:`amount`,agg:`sum`,label:`Amount`,format:ud}],rowHeader:`Region / Country`},{numFmt:`"$"#,##0`}),[]),t=e.columns,n=X({features:Q,columns:t,data:e.data,getSubRows:e=>e.subRows,initialState:{expanded:!0}}),r=H.useMemo(()=>n.getAllLeafColumns().map(e=>e.id).filter(e=>e!==`__pivotRowHeader`),[n]);return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(`div`,{className:`flex justify-end`,children:(0,U.jsx)(V,{table:n,fileName:`pivot-tanstack`,rowStyle:u})}),(0,U.jsx)(Z,{table:n,numeric:r,tree:!0,paging:!1})]})}var fd=B({default:()=>vd,meta:()=>pd}),pd={title:`Sum, average, min and max in Excel`,description:`Each TanStack aggregation becomes its own Excel formula on the group rows: SUBTOTAL 9 for sum, 1 for average, 5 for min and 4 for max. Edit an order in Excel and every one updates.`},md=I(),hd=Rr(),gd=(e,t,n)=>hd.accessor(`amount`,{id:e,header:t,aggregationFn:n,cell:e=>$.format(e.getValue()),aggregatedCell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}}),_d=hd.columns([hd.accessor(`product`,{header:`Product`,size:170}),hd.accessor(`customer`,{header:`Customer`,size:190}),gd(`sum`,`Total`,`sum`),gd(`mean`,`Average`,`mean`),gd(`min`,`Smallest`,`min`),gd(`max`,`Largest`,`max`)]);function vd(){let e=X({features:Q,columns:_d,data:md,initialState:{grouping:[`product`],expanded:{},pagination:{pageIndex:0,pageSize:20}}});return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(`div`,{className:`flex justify-end`,children:(0,U.jsx)(V,{table:e,fileName:`aggregations`,formats:[`xlsx`,`csv`]})}),(0,U.jsx)(Z,{table:e,numeric:[`sum`,`mean`,`min`,`max`]})]})}var yd=B({default:()=>wd,meta:()=>bd}),bd={title:`All rows, this page, or the selection`,description:`The rows option picks what goes in the file: every filtered row on every page, only the page on screen, or only the selected rows. The count beside each choice is what you will get.`},xd=I(),Sd=Rr(),Cd=Sd.columns([Sd.display({id:`select`,size:36,meta:{rowpine:{exclude:!0}},cell:({row:e})=>(0,U.jsx)(k,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":`Select row`})}),Sd.accessor(`id`,{header:`Order`,size:80}),Sd.accessor(`customer`,{header:`Customer`,size:190}),Sd.accessor(`product`,{header:`Product`}),Sd.accessor(`amount`,{header:`Amount`,cell:e=>$.format(e.getValue()),meta:{rowpine:{numFmt:`"$"#,##0.00`}}})]);function wd(){let[e,t]=H.useState(`all`),n=X({features:Q,columns:Cd,data:xd,getRowId:e=>e.id,initialState:{pagination:{pageIndex:0,pageSize:8},rowSelection:{1002:!0,1005:!0}}}),r={all:n.getPrePaginatedRowModel().rows.length,page:n.getRowModel().rows.length,selected:Object.keys(n.state.rowSelection).length};return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-sm`,children:[[`all`,`page`,`selected`].map(n=>(0,U.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(`input`,{type:`radio`,name:`rows`,checked:e===n,onChange:()=>t(n)}),n===`all`?`All rows`:n===`page`?`This page`:`Selected`,` (`,r[n],`)`]},n)),(0,U.jsxs)(`div`,{className:`ml-auto flex gap-2`,children:[(0,U.jsx)(z,{size:`sm`,variant:`outline`,onClick:()=>void s(n,{fileName:`orders-${e}`,rows:e}),children:`CSV`}),(0,U.jsx)(z,{size:`sm`,onClick:()=>void g(n,{fileName:`orders-${e}`,rows:e}),children:`Excel`})]})]}),(0,U.jsx)(Z,{table:n,numeric:[`amount`]})]})}var Td=B({default:()=>Ad,meta:()=>Ed}),Ed={title:`A wide table in a PDF`,description:`Eighteen columns do not fit a page. Rowpine turns the page, shrinks the type down to three quarters, and past that splits the columns over pages with the first one repeated. Pick the behaviour and compare.`},Dd=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],Od=[`Halvorsen AS`,`Brandt GmbH`,`Maison Duret`,`Lakeshore Supply`,`Redwood Tools`,`Kitano Trading`,`Harbor & Pine`,`Maple Freight`,`Southern Cross Parts`,`Fjord Logistics`].map((e,t)=>{let n={account:e,owner:[`Ines`,`Tomas`,`Aiko`,`Ravi`][t%4],region:[`Europe`,`North America`,`Asia Pacific`][t%3],total:0};return Dd.forEach((e,r)=>{n[e]=1e3+(t*37+r*53)%90*100,n.total+=n[e]}),n}),kd=[{accessorKey:`account`,header:`Account`,size:170},{accessorKey:`owner`,header:`Owner`},{accessorKey:`region`,header:`Region`},...Dd.map(e=>({accessorKey:e,header:e,size:80,cell:e=>$.format(e.getValue())})),{accessorKey:`total`,header:`Total`,cell:e=>$.format(e.getValue())}];function Ad(){let[e,t]=H.useState(`auto`),n=X({features:Q,columns:kd,data:Od});return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 text-sm`,children:[[`auto`,`shrink`,`split`].map(n=>(0,U.jsxs)(`label`,{className:`flex items-center gap-2`,children:[(0,U.jsx)(`input`,{type:`radio`,name:`fit`,checked:e===n,onChange:()=>t(n)}),n===`auto`?`Shrink, then split (default)`:n===`shrink`?`Only shrink`:`Only split`]},n)),(0,U.jsxs)(z,{size:`sm`,className:`ml-auto`,onClick:()=>void w(n,{fileName:`accounts-${e}`,title:`Monthly revenue by account`,fit:e}),children:[(0,U.jsx)(d,{}),`Download PDF`]})]}),(0,U.jsx)(Z,{table:n,numeric:[...Dd,`total`],paging:!1})]})}var jd=B({default:()=>zd,meta:()=>Md}),Md={title:`A PDF in another language`,description:`Headers come from your columns, numbers and dates from your formatters, and the words the PDF writes itself (the page footer and its date) from labels. This one is German.`},Nd=I(40),Pd=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),Fd=new Intl.DateTimeFormat(`de-DE`,{day:`2-digit`,month:`2-digit`,year:`numeric`}),Id={Paid:`Bezahlt`,Open:`Offen`,Overdue:`Überfällig`},Ld=Rr(),Rd=Ld.columns([Ld.accessor(`id`,{header:`Auftrag`,size:90}),Ld.accessor(`customer`,{header:`Kunde`,size:190}),Ld.accessor(`date`,{header:`Datum`,cell:e=>Fd.format(e.getValue()),meta:{rowpine:{format:e=>Fd.format(e)}}}),Ld.accessor(`amount`,{header:`Betrag`,cell:e=>Pd.format(e.getValue()),meta:{rowpine:{format:e=>Pd.format(e)}}}),Ld.accessor(`status`,{header:`Status`,cell:e=>Id[e.getValue()],meta:{rowpine:{format:e=>Id[e]}}})]);function zd(){let e=X({features:Q,columns:Rd,data:Nd,initialState:{pagination:{pageIndex:0,pageSize:10}}});return(0,U.jsxs)(`div`,{className:`grid gap-3`,children:[(0,U.jsx)(`div`,{className:`flex justify-end`,children:(0,U.jsxs)(z,{size:`sm`,onClick:()=>void w(e,{fileName:`auftraege`,title:`Aufträge`,subtitle:`Januar bis September 2026`,labels:{page:(e,t)=>`Seite ${e} von ${t}`,date:e=>Fd.format(e)}}),children:[(0,U.jsx)(d,{}),`PDF herunterladen`]})}),(0,U.jsx)(Z,{table:e,numeric:[`amount`]})]})}var Bd=`import * as React from "react"
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
`,Vd=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Hd=`import { createColumnHelper, useTable } from "@tanstack/react-table"
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
`,Ud=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Wd=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Gd=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,Kd=`import * as React from "react"
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
`,qd=`import * as React from "react"
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
`,Jd=`import { pivotRowStyle, type PivotField, type PivotPreset } from "rowpine"

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
`,Yd=`import * as React from "react"
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
`,Xd=`import { pivotRowStyle, type PivotConfig } from "rowpine"

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
`,Zd=`import * as React from "react"
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
        { rows: ["region", "country"], cols: ["status"], values: [{ field: "amount", agg: "sum", label: "Amount", format: usd }], rowHeader: "Region / Country" },
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
`,Qd=`import { createColumnHelper, useTable } from "@tanstack/react-table"

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
`,$d=`import * as React from "react"
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
`,ef=`import * as React from "react"
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
`,tf=`import { createColumnHelper, useTable } from "@tanstack/react-table"
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
`;C(void 0);function nf(e,t,n){return Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,r])=>{let i=e.replace(/^.*\//,``).replace(`.tsx`,``);return{...r.meta,docs:r.meta.docs??af[i],slug:i,route:n===`use`?`demo/${i.replace(/^\d+-/,``)}`:i,Component:r.default,source:t[e]??``,kind:n}})}var rf=nf(Object.assign({"./usecases/01-sales-pivot.tsx":et,"./usecases/02-orders-to-excel.tsx":Sc,"./usecases/03-month-end-pdf.tsx":Oc,"./usecases/04-budget-tree.tsx":Ic,"./usecases/05-support-tickets.tsx":Hc,"./usecases/06-inventory-reorder.tsx":Jc,"./usecases/07-timesheet-invoice.tsx":tl,"./usecases/08-marketing-spend.tsx":dl,"./usecases/09-sales-commissions.tsx":vl,"./usecases/10-carrier-scorecard.tsx":Dl}),Object.assign({"./usecases/01-sales-pivot.tsx":Pl,"./usecases/02-orders-to-excel.tsx":Fl,"./usecases/03-month-end-pdf.tsx":Il,"./usecases/04-budget-tree.tsx":Ll,"./usecases/05-support-tickets.tsx":Rl,"./usecases/06-inventory-reorder.tsx":zl,"./usecases/07-timesheet-invoice.tsx":Bl,"./usecases/08-marketing-spend.tsx":Vl,"./usecases/09-sales-commissions.tsx":Hl,"./usecases/10-carrier-scorecard.tsx":Ul}),`use`),af={"01-export-menu":`add-an-export-menu.html`,"02-grouped-export":`grouped-rows-as-outlines.html`,"03-columns":`hidden-and-excluded-columns.html`,"04-selected-rows":`which-rows-are-exported.html`,"05-formats-colors":`cell-colors.html`,"06-tree-data":`tree-data.html`,"07-pdf-report":`pdf-title-kpis-watermark.html`,"08-pivot-table":`pivot-basics.html`,"09-pivot-designer":`pivot-designer.html`,"10-saved-layouts":`presets-and-saved-views.html`,"11-custom-aggregation":`aggregations.html`,"12-pivot-in-tanstack":`pivot-basics.html`,"13-aggregations-to-excel":`subtotal-formulas.html`,"14-rows-option":`which-rows-are-exported.html`,"15-wide-pdf":`pdf-page-setup.html`,"16-pdf-labels":`pdf-page-setup.html`},of=nf(Object.assign({"./examples/01-export-menu.tsx":Wl,"./examples/02-grouped-export.tsx":Xl,"./examples/03-columns.tsx":nu,"./examples/04-selected-rows.tsx":cu,"./examples/05-formats-colors.tsx":_u,"./examples/06-tree-data.tsx":Eu,"./examples/07-pdf-report.tsx":ju,"./examples/08-pivot-table.tsx":Lu,"./examples/09-pivot-designer.tsx":Hu,"./examples/10-saved-layouts.tsx":Yu,"./examples/11-custom-aggregation.tsx":nd,"./examples/12-pivot-in-tanstack.tsx":sd,"./examples/13-aggregations-to-excel.tsx":fd,"./examples/14-rows-option.tsx":yd,"./examples/15-wide-pdf.tsx":Td,"./examples/16-pdf-labels.tsx":jd}),Object.assign({"./examples/01-export-menu.tsx":Bd,"./examples/02-grouped-export.tsx":Vd,"./examples/03-columns.tsx":Hd,"./examples/04-selected-rows.tsx":Ud,"./examples/05-formats-colors.tsx":Wd,"./examples/06-tree-data.tsx":Gd,"./examples/07-pdf-report.tsx":Kd,"./examples/08-pivot-table.tsx":qd,"./examples/09-pivot-designer.tsx":Jd,"./examples/10-saved-layouts.tsx":Yd,"./examples/11-custom-aggregation.tsx":Xd,"./examples/12-pivot-in-tanstack.tsx":Zd,"./examples/13-aggregations-to-excel.tsx":Qd,"./examples/14-rows-option.tsx":$d,"./examples/15-wide-pdf.tsx":ef,"./examples/16-pdf-labels.tsx":tf}),`feature`),sf=[...rf,...of];function cf(){let e=()=>window.location.hash.replace(/^#\/?/,``)||rf[0].route,[t,n]=H.useState(e);return H.useEffect(()=>{let t=()=>n(e());return window.addEventListener(`hashchange`,t),()=>window.removeEventListener(`hashchange`,t)},[]),t}function lf(){let e=cf(),t=sf.find(t=>t.route===e)??rf[0],[n,r]=H.useState(t.kind),[i,a]=H.useState(!1);H.useEffect(()=>{document.title=`${t.title} - Rowpine demos`,r(t.kind),a(!1)},[t]);let s=n===`use`?rf:of;return(0,U.jsxs)(`div`,{className:`min-h-screen bg-background`,children:[(0,U.jsx)(`header`,{className:`border-b`,children:(0,U.jsxs)(`div`,{className:`mx-auto flex h-14 max-w-7xl items-center gap-3 px-4`,children:[(0,U.jsxs)(`a`,{href:`../`,className:`flex items-center gap-2 font-bold`,children:[(0,U.jsx)(`span`,{className:`grid size-7 place-items-center rounded-md bg-[#1f5b40]`,children:(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`size-4 text-white`,"aria-hidden":!0,children:(0,U.jsx)(`path`,{fill:`currentColor`,d:`M12 2 6.5 9h3L5 15h4.5L4 21h7v1h2v-1h7l-5.5-6H19l-4.5-6h3z`})})}),`Rowpine`]}),(0,U.jsx)(`span`,{className:`text-muted-foreground`,children:`Demos`}),(0,U.jsxs)(`nav`,{className:`ml-auto flex gap-1 text-sm`,children:[(0,U.jsx)(`a`,{href:`../docs/`,className:`rounded-md px-3 py-1.5 hover:bg-muted`,children:`Docs`}),(0,U.jsx)(`a`,{href:`../pricing.html`,className:`rounded-md px-3 py-1.5 hover:bg-muted`,children:`Pricing`})]})]})}),(0,U.jsxs)(`div`,{className:`mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[16rem_1fr]`,children:[(0,U.jsxs)(`nav`,{className:`grid content-start gap-3 md:sticky md:top-6 md:self-start`,"aria-label":`Demos`,children:[(0,U.jsx)(`div`,{className:`grid grid-cols-2 gap-1 rounded-lg bg-muted p-1 text-sm`,role:`tablist`,children:[`use`,`feature`].map(e=>(0,U.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":n===e,onClick:()=>r(e),className:o(`rounded-md px-2 py-1.5 font-medium`,n===e?`bg-background shadow-sm`:`text-muted-foreground`),children:[e===`use`?`Use cases`:`Features`,` `,(0,U.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`(`,e===`use`?rf.length:of.length,`)`]})]},e))}),(0,U.jsx)(`div`,{className:`grid gap-0.5 border-l`,children:s.map(e=>(0,U.jsx)(`a`,{href:`#/${e.route}`,className:o(`-ml-px border-l-2 px-3 py-1.5 text-sm`,e.route===t.route?`border-[#1f5b40] font-medium`:`border-transparent text-muted-foreground hover:text-foreground`),children:e.title},e.route))})]}),(0,U.jsxs)(`main`,{className:`grid min-w-0 content-start gap-4`,"data-example":t.slug,children:[(0,U.jsxs)(`header`,{className:`flex flex-wrap items-start gap-4`,children:[(0,U.jsxs)(`div`,{className:`grid min-w-0 flex-1 gap-1`,children:[(0,U.jsx)(`h1`,{className:`text-2xl font-semibold`,children:t.title}),(0,U.jsx)(`p`,{className:`max-w-3xl text-muted-foreground`,children:t.description})]}),(0,U.jsxs)(`div`,{className:`flex gap-2`,children:[t.docs&&(0,U.jsxs)(`a`,{href:`../docs/${t.docs}`,className:`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm hover:bg-muted`,children:[(0,U.jsx)(Ce,{className:`size-4`}),` Read the docs`]}),(0,U.jsxs)(`button`,{type:`button`,onClick:()=>a(e=>!e),className:`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm hover:bg-muted`,"aria-expanded":i,children:[(0,U.jsx)(Te,{className:`size-4`}),` Source code`]})]})]}),i&&(0,U.jsx)(`pre`,{className:`max-h-[480px] overflow-auto rounded-md border bg-muted/40 p-3 text-xs leading-relaxed`,children:t.source}),(0,U.jsx)(t.Component,{},t.route)]})]})]})}(0,Le.createRoot)(document.getElementById(`root`)).render((0,U.jsx)(H.StrictMode,{children:(0,U.jsx)(lf,{})}));