var Yt=Object.defineProperty;var lt=e=>{throw TypeError(e)};var Vt=(e,t,s)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var p=(e,t,s)=>Vt(e,typeof t!="symbol"?t+"":t,s),Ze=(e,t,s)=>t.has(e)||lt("Cannot "+s);var l=(e,t,s)=>(Ze(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?lt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),h=(e,t,s,a)=>(Ze(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),f=(e,t,s)=>(Ze(e,t,"access private method"),s);var nt=(e,t,s,a)=>({set _(r){h(e,t,r,s)},get _(){return l(e,t,a)}});import{createServer as $t}from"http";import{Http2ServerRequest as Oe}from"http2";import{Readable as dt}from"stream";import Kt from"crypto";var ct=(e,t,s)=>(a,r)=>{let i=-1;return o(0);async function o(n){if(n<=i)throw new Error("next() called multiple times");i=n;let d,c=!1,x;if(e[n]?(x=e[n][0][0],a.req.routeIndex=n):x=n===e.length&&r||void 0,x)try{d=await x(a,()=>o(n+1))}catch(g){if(g instanceof Error&&t)a.error=g,d=await t(g,a),c=!0;else throw g}else a.finalized===!1&&s&&(d=await s(a));return d&&(a.finalized===!1||c)&&(a.res=d),a}},Zt=Symbol(),Qt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,i=(e instanceof At?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Jt(e,{all:s,dot:a}):{}};async function Jt(e,t){const s=await e.formData();return s?Xt(s,t):{}}function Xt(e,t){const s=Object.create(null);return e.forEach((a,r)=>{t.all||r.endsWith("[]")?es(s,r,a):s[r]=a}),t.dot&&Object.entries(s).forEach(([a,r])=>{a.includes(".")&&(ts(s,a,r),delete s[a])}),s}var es=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},ts=(e,t,s)=>{let a=e;const r=t.split(".");r.forEach((i,o)=>{o===r.length-1?a[i]=s:((!a[i]||typeof a[i]!="object"||Array.isArray(a[i])||a[i]instanceof File)&&(a[i]=Object.create(null)),a=a[i])})},yt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},ss=e=>{const{groups:t,path:s}=as(e),a=yt(s);return rs(a,t)},as=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const r=`@${a}`;return t.push([r,s]),r}),{groups:t,path:e}},rs=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let r=e.length-1;r>=0;r--)if(e[r].includes(a)){e[r]=e[r].replace(a,t[s][1]);break}}return e},He={},is=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return He[a]||(s[2]?He[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:He[a]=[e,s[1],!0]),He[a]}return null},at=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},os=e=>at(e,decodeURI),wt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const r=t.charCodeAt(a);if(r===37){const i=t.indexOf("?",a),o=t.slice(s,i===-1?void 0:i);return os(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(r===63)break}return t.slice(s,a)},ls=e=>{const t=wt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},de=(e,t,...s)=>(s.length&&(t=de(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),kt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(r=>{if(r!==""&&!/\:/.test(r))a+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){s.length===0&&a===""?s.push("/"):s.push(a);const i=r.replace("?","");a+="/"+i,s.push(a)}else a+="/"+r}),s.filter((r,i,o)=>o.indexOf(r)===i)},Qe=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?at(e,Ct):e):e,St=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const n=e.charCodeAt(o+t.length+1);if(n===61){const d=o+t.length+2,c=e.indexOf("&",d);return Qe(e.slice(d,c===-1?void 0:c))}else if(n==38||isNaN(n))return"";o=e.indexOf(`&${t}`,o+1)}if(a=/[%+]/.test(e),!a)return}const r={};a??(a=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const o=e.indexOf("&",i+1);let n=e.indexOf("=",i);n>o&&o!==-1&&(n=-1);let d=e.slice(i+1,n===-1?o===-1?void 0:o:n);if(a&&(d=Qe(d)),i=o,d==="")continue;let c;n===-1?c="":(c=e.slice(n+1,o===-1?void 0:o),a&&(c=Qe(c))),s?(r[d]&&Array.isArray(r[d])||(r[d]=[]),r[d].push(c)):r[d]??(r[d]=c)}return t?r[t]:r},ns=St,ds=(e,t)=>St(e,t,!0),Ct=decodeURIComponent,xt=e=>at(e,Ct),he,D,F,_t,jt,tt,Y,pt,At=(pt=class{constructor(e,t="/",s=[[]]){m(this,F);p(this,"raw");m(this,he);m(this,D);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});m(this,Y,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const r=Object.keys(t)[0];return r?t[r].then(i=>(r==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,h(this,D,s),h(this,he,{})}param(e){return e?f(this,F,_t).call(this,e):f(this,F,jt).call(this)}query(e){return ns(this.url,e)}queries(e){return ds(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Qt(this,e))}json(){return l(this,Y).call(this,"text").then(e=>JSON.parse(e))}text(){return l(this,Y).call(this,"text")}arrayBuffer(){return l(this,Y).call(this,"arrayBuffer")}blob(){return l(this,Y).call(this,"blob")}formData(){return l(this,Y).call(this,"formData")}addValidatedData(e,t){l(this,he)[e]=t}valid(e){return l(this,he)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Zt](){return l(this,D)}get matchedRoutes(){return l(this,D)[0].map(([[,e]])=>e)}get routePath(){return l(this,D)[0].map(([[,e]])=>e)[this.routeIndex].path}},he=new WeakMap,D=new WeakMap,F=new WeakSet,_t=function(e){const t=l(this,D)[0][this.routeIndex][1][e],s=f(this,F,tt).call(this,t);return s&&/\%/.test(s)?xt(s):s},jt=function(){const e={},t=Object.keys(l(this,D)[0][this.routeIndex][1]);for(const s of t){const a=f(this,F,tt).call(this,l(this,D)[0][this.routeIndex][1][s]);a!==void 0&&(e[s]=/\%/.test(a)?xt(a):a)}return e},tt=function(e){return l(this,D)[1]?l(this,D)[1][e]:e},Y=new WeakMap,pt),cs={Stringify:1},Tt=async(e,t,s,a,r)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(r?r[0]+=e:r=[e],Promise.all(i.map(n=>n({phase:t,buffer:r,context:a}))).then(n=>Promise.all(n.filter(Boolean).map(d=>Tt(d,t,!1,a,r))).then(()=>r[0]))):Promise.resolve(e)},xs="text/plain; charset=UTF-8",Je=(e,t)=>({"Content-Type":e,...t}),je,Te,z,pe,H,T,Re,me,be,se,De,Ee,V,ce,mt,gs=(mt=class{constructor(e,t){m(this,V);m(this,je);m(this,Te);p(this,"env",{});m(this,z);p(this,"finalized",!1);p(this,"error");m(this,pe);m(this,H);m(this,T);m(this,Re);m(this,me);m(this,be);m(this,se);m(this,De);m(this,Ee);p(this,"render",(...e)=>(l(this,me)??h(this,me,t=>this.html(t)),l(this,me).call(this,...e)));p(this,"setLayout",e=>h(this,Re,e));p(this,"getLayout",()=>l(this,Re));p(this,"setRenderer",e=>{h(this,me,e)});p(this,"header",(e,t,s)=>{this.finalized&&h(this,T,new Response(l(this,T).body,l(this,T)));const a=l(this,T)?l(this,T).headers:l(this,se)??h(this,se,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});p(this,"status",e=>{h(this,pe,e)});p(this,"set",(e,t)=>{l(this,z)??h(this,z,new Map),l(this,z).set(e,t)});p(this,"get",e=>l(this,z)?l(this,z).get(e):void 0);p(this,"newResponse",(...e)=>f(this,V,ce).call(this,...e));p(this,"body",(e,t,s)=>f(this,V,ce).call(this,e,t,s));p(this,"text",(e,t,s)=>!l(this,se)&&!l(this,pe)&&!t&&!s&&!this.finalized?new Response(e):f(this,V,ce).call(this,e,t,Je(xs,s)));p(this,"json",(e,t,s)=>f(this,V,ce).call(this,JSON.stringify(e),t,Je("application/json",s)));p(this,"html",(e,t,s)=>{const a=r=>f(this,V,ce).call(this,r,t,Je("text/html; charset=UTF-8",s));return typeof e=="object"?Tt(e,cs.Stringify,!1,{}).then(a):a(e)});p(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});p(this,"notFound",()=>(l(this,be)??h(this,be,()=>new Response),l(this,be).call(this,this)));h(this,je,e),t&&(h(this,H,t.executionCtx),this.env=t.env,h(this,be,t.notFoundHandler),h(this,Ee,t.path),h(this,De,t.matchResult))}get req(){return l(this,Te)??h(this,Te,new At(l(this,je),l(this,Ee),l(this,De))),l(this,Te)}get event(){if(l(this,H)&&"respondWith"in l(this,H))return l(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(l(this,H))return l(this,H);throw Error("This context has no ExecutionContext")}get res(){return l(this,T)||h(this,T,new Response(null,{headers:l(this,se)??h(this,se,new Headers)}))}set res(e){if(l(this,T)&&e){e=new Response(e.body,e);for(const[t,s]of l(this,T).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=l(this,T).headers.getSetCookie();e.headers.delete("set-cookie");for(const r of a)e.headers.append("set-cookie",r)}else e.headers.set(t,s)}h(this,T,e),this.finalized=!0}get var(){return l(this,z)?Object.fromEntries(l(this,z)):{}}},je=new WeakMap,Te=new WeakMap,z=new WeakMap,pe=new WeakMap,H=new WeakMap,T=new WeakMap,Re=new WeakMap,me=new WeakMap,be=new WeakMap,se=new WeakMap,De=new WeakMap,Ee=new WeakMap,V=new WeakSet,ce=function(e,t,s){const a=l(this,T)?new Headers(l(this,T).headers):l(this,se)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,n]of i)o.toLowerCase()==="set-cookie"?a.append(o,n):a.set(o,n)}if(s)for(const[i,o]of Object.entries(s))if(typeof o=="string")a.set(i,o);else{a.delete(i);for(const n of o)a.append(i,n)}const r=typeof t=="number"?t:(t==null?void 0:t.status)??l(this,pe);return new Response(e,{status:r,headers:a})},mt),w="ALL",hs="all",ps=["get","post","put","delete","options","patch"],Rt="Can not add a route since the matcher is already built.",Dt=class extends Error{},ms="__COMPOSED_HANDLER",bs=e=>e.text("404 Not Found",404),gt=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},E,k,Et,I,J,Be,Fe,fe,fs=(fe=class{constructor(t={}){m(this,k);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");m(this,E,"/");p(this,"routes",[]);m(this,I,bs);p(this,"errorHandler",gt);p(this,"onError",t=>(this.errorHandler=t,this));p(this,"notFound",t=>(h(this,I,t),this));p(this,"fetch",(t,...s)=>f(this,k,Fe).call(this,t,s[1],s[0],t.method));p(this,"request",(t,s,a,r)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,r):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${de("/",t)}`,s),a,r)));p(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(f(this,k,Fe).call(this,t.request,t,void 0,t.request.method))})});[...ps,hs].forEach(i=>{this[i]=(o,...n)=>(typeof o=="string"?h(this,E,o):f(this,k,J).call(this,i,l(this,E),o),n.forEach(d=>{f(this,k,J).call(this,i,l(this,E),d)}),this)}),this.on=(i,o,...n)=>{for(const d of[o].flat()){h(this,E,d);for(const c of[i].flat())n.map(x=>{f(this,k,J).call(this,c.toUpperCase(),l(this,E),x)})}return this},this.use=(i,...o)=>(typeof i=="string"?h(this,E,i):(h(this,E,"*"),o.unshift(i)),o.forEach(n=>{f(this,k,J).call(this,w,l(this,E),n)}),this);const{strict:a,...r}=t;Object.assign(this,r),this.getPath=a??!0?t.getPath??wt:ls}route(t,s){const a=this.basePath(t);return s.routes.map(r=>{var o;let i;s.errorHandler===gt?i=r.handler:(i=async(n,d)=>(await ct([],s.errorHandler)(n,()=>r.handler(n,d))).res,i[ms]=r.handler),f(o=a,k,J).call(o,r.method,r.path,i)}),this}basePath(t){const s=f(this,k,Et).call(this);return s._basePath=de(this._basePath,t),s}mount(t,s,a){let r,i;a&&(typeof a=="function"?i=a:(i=a.optionHandler,a.replaceRequest===!1?r=d=>d:r=a.replaceRequest));const o=i?d=>{const c=i(d);return Array.isArray(c)?c:[c]}:d=>{let c;try{c=d.executionCtx}catch{}return[d.env,c]};r||(r=(()=>{const d=de(this._basePath,t),c=d==="/"?0:d.length;return x=>{const g=new URL(x.url);return g.pathname=g.pathname.slice(c)||"/",new Request(g,x)}})());const n=async(d,c)=>{const x=await s(r(d.req.raw),...o(d));if(x)return x;await c()};return f(this,k,J).call(this,w,de(t,"*"),n),this}},E=new WeakMap,k=new WeakSet,Et=function(){const t=new fe({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,h(t,I,l(this,I)),t.routes=this.routes,t},I=new WeakMap,J=function(t,s,a){t=t.toUpperCase(),s=de(this._basePath,s);const r={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,r]),this.routes.push(r)},Be=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Fe=function(t,s,a,r){if(r==="HEAD")return(async()=>new Response(null,await f(this,k,Fe).call(this,t,s,a,"GET")))();const i=this.getPath(t,{env:a}),o=this.router.match(r,i),n=new gs(t,{path:i,matchResult:o,env:a,executionCtx:s,notFoundHandler:l(this,I)});if(o[0].length===1){let c;try{c=o[0][0][0][0](n,async()=>{n.res=await l(this,I).call(this,n)})}catch(x){return f(this,k,Be).call(this,x,n)}return c instanceof Promise?c.then(x=>x||(n.finalized?n.res:l(this,I).call(this,n))).catch(x=>f(this,k,Be).call(this,x,n)):c??l(this,I).call(this,n)}const d=ct(o[0],this.errorHandler,l(this,I));return(async()=>{try{const c=await d(n);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return f(this,k,Be).call(this,c,n)}})()},fe),It=[];function us(e,t){const s=this.buildAllMatchers(),a=((r,i)=>{const o=s[r]||s[w],n=o[2][i];if(n)return n;const d=i.match(o[0]);if(!d)return[[],It];const c=d.indexOf("",1);return[o[1][c],d]});return this.match=a,a(e,t)}var Ue="[^/]+",Ce=".*",Ae="(?:|/.*)",xe=Symbol(),vs=new Set(".\\+*[^]$()");function ys(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Ce||e===Ae?1:t===Ce||t===Ae?-1:e===Ue?1:t===Ue?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ae,re,M,le,ws=(le=class{constructor(){m(this,ae);m(this,re);m(this,M,Object.create(null))}insert(t,s,a,r,i){if(t.length===0){if(l(this,ae)!==void 0)throw xe;if(i)return;h(this,ae,s);return}const[o,...n]=t,d=o==="*"?n.length===0?["","",Ce]:["","",Ue]:o==="/*"?["","",Ae]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(d){const x=d[1];let g=d[2]||Ue;if(x&&d[2]&&(g===".*"||(g=g.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(g))))throw xe;if(c=l(this,M)[g],!c){if(Object.keys(l(this,M)).some(b=>b!==Ce&&b!==Ae))throw xe;if(i)return;c=l(this,M)[g]=new le,x!==""&&h(c,re,r.varIndex++)}!i&&x!==""&&a.push([x,l(c,re)])}else if(c=l(this,M)[o],!c){if(Object.keys(l(this,M)).some(x=>x.length>1&&x!==Ce&&x!==Ae))throw xe;if(i)return;c=l(this,M)[o]=new le}c.insert(n,s,a,r,i)}buildRegExpStr(){const s=Object.keys(l(this,M)).sort(ys).map(a=>{const r=l(this,M)[a];return(typeof l(r,re)=="number"?`(${a})@${l(r,re)}`:vs.has(a)?`\\${a}`:a)+r.buildRegExpStr()});return typeof l(this,ae)=="number"&&s.unshift(`#${l(this,ae)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},ae=new WeakMap,re=new WeakMap,M=new WeakMap,le),Ye,Ie,bt,ks=(bt=class{constructor(){m(this,Ye,{varIndex:0});m(this,Ie,new ws)}insert(e,t,s){const a=[],r=[];for(let o=0;;){let n=!1;if(e=e.replace(/\{[^}]+\}/g,d=>{const c=`@\\${o}`;return r[o]=[c,d],o++,n=!0,c}),!n)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=r.length-1;o>=0;o--){const[n]=r[o];for(let d=i.length-1;d>=0;d--)if(i[d].indexOf(n)!==-1){i[d]=i[d].replace(n,r[o][1]);break}}return l(this,Ie).insert(i,t,a,l(this,Ye),s),a}buildRegExp(){let e=l(this,Ie).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,i,o)=>i!==void 0?(s[++t]=Number(i),"$()"):(o!==void 0&&(a[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,a]}},Ye=new WeakMap,Ie=new WeakMap,bt),Ss=[/^$/,[],Object.create(null)],We=Object.create(null);function Mt(e){return We[e]??(We[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Cs(){We=Object.create(null)}function As(e){var c;const t=new ks,s=[];if(e.length===0)return Ss;const a=e.map(x=>[!/\*|\/:/.test(x[0]),...x]).sort(([x,g],[b,y])=>x?1:b?-1:g.length-y.length),r=Object.create(null);for(let x=0,g=-1,b=a.length;x<b;x++){const[y,R,W]=a[x];y?r[R]=[W.map(([j])=>[j,Object.create(null)]),It]:g++;let v;try{v=t.insert(R,g,y)}catch(j){throw j===xe?new Dt(R):j}y||(s[g]=W.map(([j,q])=>{const Ne=Object.create(null);for(q-=1;q>=0;q--){const[ze,P]=v[q];Ne[ze]=P}return[j,Ne]}))}const[i,o,n]=t.buildRegExp();for(let x=0,g=s.length;x<g;x++)for(let b=0,y=s[x].length;b<y;b++){const R=(c=s[x][b])==null?void 0:c[1];if(!R)continue;const W=Object.keys(R);for(let v=0,j=W.length;v<j;v++)R[W[v]]=n[R[W[v]]]}const d=[];for(const x in o)d[x]=s[o[x]];return[i,d,r]}function ne(e,t){if(e){for(const s of Object.keys(e).sort((a,r)=>r.length-a.length))if(Mt(s).test(t))return[...e[s]]}}var $,K,Ve,Pt,ft,_s=(ft=class{constructor(){m(this,Ve);p(this,"name","RegExpRouter");m(this,$);m(this,K);p(this,"match",us);h(this,$,{[w]:Object.create(null)}),h(this,K,{[w]:Object.create(null)})}add(e,t,s){var n;const a=l(this,$),r=l(this,K);if(!a||!r)throw new Error(Rt);a[e]||[a,r].forEach(d=>{d[e]=Object.create(null),Object.keys(d[w]).forEach(c=>{d[e][c]=[...d[w][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const d=Mt(t);e===w?Object.keys(a).forEach(c=>{var x;(x=a[c])[t]||(x[t]=ne(a[c],t)||ne(a[w],t)||[])}):(n=a[e])[t]||(n[t]=ne(a[e],t)||ne(a[w],t)||[]),Object.keys(a).forEach(c=>{(e===w||e===c)&&Object.keys(a[c]).forEach(x=>{d.test(x)&&a[c][x].push([s,i])})}),Object.keys(r).forEach(c=>{(e===w||e===c)&&Object.keys(r[c]).forEach(x=>d.test(x)&&r[c][x].push([s,i]))});return}const o=kt(t)||[t];for(let d=0,c=o.length;d<c;d++){const x=o[d];Object.keys(r).forEach(g=>{var b;(e===w||e===g)&&((b=r[g])[x]||(b[x]=[...ne(a[g],x)||ne(a[w],x)||[]]),r[g][x].push([s,i-c+d+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(l(this,K)).concat(Object.keys(l(this,$))).forEach(t=>{e[t]||(e[t]=f(this,Ve,Pt).call(this,t))}),h(this,$,h(this,K,void 0)),Cs(),e}},$=new WeakMap,K=new WeakMap,Ve=new WeakSet,Pt=function(e){const t=[];let s=e===w;return[l(this,$),l(this,K)].forEach(a=>{const r=a[e]?Object.keys(a[e]).map(i=>[i,a[e][i]]):[];r.length!==0?(s||(s=!0),t.push(...r)):e!==w&&t.push(...Object.keys(a[w]).map(i=>[i,a[w][i]]))}),s?As(t):null},ft),Z,L,ut,js=(ut=class{constructor(e){p(this,"name","SmartRouter");m(this,Z,[]);m(this,L,[]);h(this,Z,e.routers)}add(e,t,s){if(!l(this,L))throw new Error(Rt);l(this,L).push([e,t,s])}match(e,t){if(!l(this,L))throw new Error("Fatal error");const s=l(this,Z),a=l(this,L),r=s.length;let i=0,o;for(;i<r;i++){const n=s[i];try{for(let d=0,c=a.length;d<c;d++)n.add(...a[d]);o=n.match(e,t)}catch(d){if(d instanceof Dt)continue;throw d}this.match=n.match.bind(n),h(this,Z,[n]),h(this,L,void 0);break}if(i===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(l(this,L)||l(this,Z).length!==1)throw new Error("No active router has been determined yet.");return l(this,Z)[0]}},Z=new WeakMap,L=new WeakMap,ut),Se=Object.create(null),Q,_,ie,ue,C,O,X,ve,Ts=(ve=class{constructor(t,s,a){m(this,O);m(this,Q);m(this,_);m(this,ie);m(this,ue,0);m(this,C,Se);if(h(this,_,a||Object.create(null)),h(this,Q,[]),t&&s){const r=Object.create(null);r[t]={handler:s,possibleKeys:[],score:0},h(this,Q,[r])}h(this,ie,[])}insert(t,s,a){h(this,ue,++nt(this,ue)._);let r=this;const i=ss(s),o=[];for(let n=0,d=i.length;n<d;n++){const c=i[n],x=i[n+1],g=is(c,x),b=Array.isArray(g)?g[0]:c;if(b in l(r,_)){r=l(r,_)[b],g&&o.push(g[1]);continue}l(r,_)[b]=new ve,g&&(l(r,ie).push(g),o.push(g[1])),r=l(r,_)[b]}return l(r,Q).push({[t]:{handler:a,possibleKeys:o.filter((n,d,c)=>c.indexOf(n)===d),score:l(this,ue)}}),r}search(t,s){var d;const a=[];h(this,C,Se);let i=[this];const o=yt(s),n=[];for(let c=0,x=o.length;c<x;c++){const g=o[c],b=c===x-1,y=[];for(let R=0,W=i.length;R<W;R++){const v=i[R],j=l(v,_)[g];j&&(h(j,C,l(v,C)),b?(l(j,_)["*"]&&a.push(...f(this,O,X).call(this,l(j,_)["*"],t,l(v,C))),a.push(...f(this,O,X).call(this,j,t,l(v,C)))):y.push(j));for(let q=0,Ne=l(v,ie).length;q<Ne;q++){const ze=l(v,ie)[q],P=l(v,C)===Se?{}:{...l(v,C)};if(ze==="*"){const U=l(v,_)["*"];U&&(a.push(...f(this,O,X).call(this,U,t,l(v,C))),h(U,C,P),y.push(U));continue}const[Ut,ot,ke]=ze;if(!g&&!(ke instanceof RegExp))continue;const N=l(v,_)[Ut],Gt=o.slice(c).join("/");if(ke instanceof RegExp){const U=ke.exec(Gt);if(U){if(P[ot]=U[0],a.push(...f(this,O,X).call(this,N,t,l(v,C),P)),Object.keys(l(N,_)).length){h(N,C,P);const Ke=((d=U[0].match(/\//))==null?void 0:d.length)??0;(n[Ke]||(n[Ke]=[])).push(N)}continue}}(ke===!0||ke.test(g))&&(P[ot]=g,b?(a.push(...f(this,O,X).call(this,N,t,P,l(v,C))),l(N,_)["*"]&&a.push(...f(this,O,X).call(this,l(N,_)["*"],t,P,l(v,C)))):(h(N,C,P),y.push(N)))}}i=y.concat(n.shift()??[])}return a.length>1&&a.sort((c,x)=>c.score-x.score),[a.map(({handler:c,params:x})=>[c,x])]}},Q=new WeakMap,_=new WeakMap,ie=new WeakMap,ue=new WeakMap,C=new WeakMap,O=new WeakSet,X=function(t,s,a,r){const i=[];for(let o=0,n=l(t,Q).length;o<n;o++){const d=l(t,Q)[o],c=d[s]||d[w],x={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),a!==Se||r&&r!==Se))for(let g=0,b=c.possibleKeys.length;g<b;g++){const y=c.possibleKeys[g],R=x[c.score];c.params[y]=r!=null&&r[y]&&!R?r[y]:a[y]??(r==null?void 0:r[y]),x[c.score]=!0}}return i},ve),oe,vt,Rs=(vt=class{constructor(){p(this,"name","TrieRouter");m(this,oe);h(this,oe,new Ts)}add(e,t,s){const a=kt(t);if(a){for(let r=0,i=a.length;r<i;r++)l(this,oe).insert(e,a[r],s);return}l(this,oe).insert(e,t,s)}match(e,t){return l(this,oe).search(e,t)}},oe=new WeakMap,vt),Nt=class extends fs{constructor(e={}){super(e),this.router=e.router??new js({routers:[new _s,new Rs]})}},Ds=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(i=>typeof i=="string"?i==="*"?()=>i:o=>i===o?o:null:typeof i=="function"?i:o=>i.includes(o)?o:null)(s.origin),r=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(o,n){var x;function d(g,b){o.res.headers.set(g,b)}const c=await a(o.req.header("origin")||"",o);if(c&&d("Access-Control-Allow-Origin",c),s.credentials&&d("Access-Control-Allow-Credentials","true"),(x=s.exposeHeaders)!=null&&x.length&&d("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&d("Vary","Origin"),s.maxAge!=null&&d("Access-Control-Max-Age",s.maxAge.toString());const g=await r(o.req.header("origin")||"",o);g.length&&d("Access-Control-Allow-Methods",g.join(","));let b=s.allowHeaders;if(!(b!=null&&b.length)){const y=o.req.header("Access-Control-Request-Headers");y&&(b=y.split(/\s*,\s*/))}return b!=null&&b.length&&(d("Access-Control-Allow-Headers",b.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await n(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};const A=(e,t,s,a)=>`
    <section class="relative h-[40vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="${s}" alt="${e}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            ${a?`
            <nav class="mb-6">
                <div class="flex items-center justify-center space-x-2 text-sm text-white/80">
                    <a href="/" class="hover:text-white transition">Home</a>
                    <i class="fas fa-chevron-right text-xs"></i>
                    <span class="text-white">${a}</span>
                </div>
            </nav>
            `:""}
            
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">${e}</h1>
            <p class="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">${t}</p>
            
            <!-- Decorative Element -->
            <div class="mt-8 flex justify-center">
                <div class="w-24 h-1 bg-orange-500 rounded-full"></div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i class="fas fa-chevron-down text-white/60 text-2xl"></i>
        </div>
    </section>
    `,S=(e,t,s="home")=>`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${t} | SNS College of Allied Health Science - India's First Design Thinking Institution</title>
        <meta name="description" content="SNS College of Allied Health Science (SNSCAHS) - India's first Design Thinking Allied Health Science college in Coimbatore. Offering B.Sc. Cardiac Technology, Physician Assistant, and more.">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"><\/script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            primary: {
                                50: '#f0f9ff',
                                100: '#e0f2fe',
                                200: '#bae6fd',
                                300: '#7dd3fc',
                                400: '#38bdf8',
                                500: '#00A0E3',
                                600: '#0284c7',
                                700: '#0369a1',
                                800: '#075985',
                                900: '#0c4a6e',
                            },
                            orange: {
                                50: '#f0f9ff',
                                100: '#e0f2fe',
                                200: '#bae6fd',
                                300: '#7dd3fc',
                                400: '#38bdf8',
                                500: '#00A0E3',
                                600: '#0284c7',
                                700: '#0369a1',
                                800: '#075985',
                                900: '#0c4a6e',
                            }
                        }
                    }
                }
            }
        <\/script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
        
        <style>
            * { font-family: 'Inter', sans-serif; }
            h1, h2, h3, h4, h5, h6 { font-family: 'Poppins', sans-serif; }
            html { scroll-behavior: smooth; }
            
            .gradient-bg {
                background: linear-gradient(-45deg, #00A0E3, #0085bd, #33b3e9, #b2e3f7);
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
            }
            
            /* Gradient Text Effect */
            .gradient-text {
                background: linear-gradient(135deg, #00A0E3 0%, #0085bd 50%, #33b3e9 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .gradient-text-blue {
                background: linear-gradient(135deg, #00A0E3 0%, #0085bd 50%, #0077a8 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            /* Softer Hero Gradients */
            .hero-gradient-warm {
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #00A0E3 100%);
            }
            
            .hero-gradient-cool {
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%);
            }
            
            /* Better Card Shadows */
            .card-shadow-sm {
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            }
            
            .card-shadow {
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            
            .card-shadow-lg {
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            
            .card-shadow-xl {
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .float {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            
            .card-hover {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .card-hover:hover {
                transform: translateY(-10px) scale(1.02);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
            
            .pulse-slow {
                animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            
            @keyframes swing {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(3deg); }
            }
            
            .swing {
                animation: swing 2s ease-in-out infinite;
                transform-origin: top center;
            }
            
            /* Badge/Tag Styles */
            .badge-glow {
                box-shadow: 0 0 20px rgba(0, 160, 227, 0.5);
                animation: glow 2s ease-in-out infinite;
            }
            
            @keyframes glow {
                0%, 100% { box-shadow: 0 0 20px rgba(0, 160, 227, 0.5); }
                50% { box-shadow: 0 0 30px rgba(0, 160, 227, 0.8); }
            }
            
            /* Smooth Transitions */
            .transition-smooth {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            /* Better Line Heights */
            body {
                line-height: 1.6;
            }
            
            h1 { line-height: 1.2; letter-spacing: -0.02em; }
            h2 { line-height: 1.3; letter-spacing: -0.01em; }
            h3 { line-height: 1.4; }

            /* WhatsApp Floating Button */
            .whatsapp-float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 40px;
                right: 40px;
                background-color: #25d366;
                color: #FFF;
                border-radius: 50%;
                text-align: center;
                font-size: 32px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: pulse-whatsapp 2s infinite;
            }

            .whatsapp-float:hover {
                transform: scale(1.1) translateY(-5px);
                background-color: #128c7e;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                color: white;
            }

            /* Instagram Floating Button */
            .instagram-float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 110px;
                right: 40px;
                background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                color: #FFF;
                border-radius: 50%;
                text-align: center;
                font-size: 32px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: pulse-instagram 2s infinite;
            }

            .instagram-float:hover {
                transform: scale(1.1) translateY(-5px);
                background: linear-gradient(45deg, #e6683c 0%, #dc2743 25%, #cc2366 50%, #bc1888 75%, #f09433 100%);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                color: white;
            }

            @keyframes pulse-whatsapp {
                0% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
                }
            }

            @keyframes pulse-instagram {
                0% {
                    box-shadow: 0 0 0 0 rgba(225, 48, 108, 0.5);
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(225, 48, 108, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(225, 48, 108, 0);
                }
            }

            @media screen and (max-width: 768px) {
                .whatsapp-float {
                    width: 50px;
                    height: 50px;
                    bottom: 25px;
                    right: 25px;
                    font-size: 28px;
                }
                .instagram-float {
                    width: 50px;
                    height: 50px;
                    bottom: 85px;
                    right: 25px;
                    font-size: 28px;
                }
            }
        </style>
    </head>
    <body class="antialiased bg-gray-50">
        
        <!-- Hanging Tag 1: Affiliation -->
        <div class="fixed top-[22%] right-0 z-50 swing">
            <div class="bg-gradient-to-br from-green-600 to-emerald-600 text-white px-4 py-6 rounded-l-2xl shadow-2xl">
                <span class="font-extrabold text-sm uppercase tracking-widest" style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">MGR UNIV</span>
            </div>
        </div>
        
        <!-- Hanging Tag 2: Brochure -->
        <div class="fixed top-[36%] right-0 z-50 swing" style="animation-delay: 0.3s;">
            <a href="https://snsacademy.org/brochure/" target="_blank" class="bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-8 rounded-l-2xl shadow-2xl flex flex-col items-center space-y-3 group transition-all">
                <i class="fas fa-file-pdf text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                <span class="font-extrabold text-sm uppercase tracking-widest" style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">BROCHURE</span>
            </a>
        </div>
        
        <!-- Floating CTA Button (Mobile) -->
        <div class="fixed bottom-6 left-6 z-50 lg:hidden">
            <a href="/admissions" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 pulse-slow">
                <i class="fas fa-pen-to-square"></i>
                <span class="font-bold">Apply Now</span>
            </a>
        </div>

        <!-- Navigation -->
        <nav class="bg-white shadow-md sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vc25zLWNvbGxlZ2Utb2YtYWxsaWVkLWhlYWx0aC1zY2llbmNlcy1vcmlnaW5hbC5qcGc.png" alt="SNS Allied Health Science Logo" class="h-16 w-auto">
                        <div>
                            <h1 class="text-xl font-bold text-gray-900 leading-tight">SNS College of <br/> Allied Health Sciences</h1>
                        </div>
                    </a>
                    
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="/" class="${s==="home"?"text-orange-600 font-bold":"text-gray-700 hover:text-orange-600"} font-medium">Home</a>
                        
                        <!-- Programs Dropdown -->
                        <div class="relative group">
                            <button class="${s.startsWith("courses")||s==="stanford-pathway"?"text-orange-600 font-bold":"text-gray-700 hover:text-orange-600"} font-medium flex items-center">
                                Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-64 mt-0 z-50">
                                <a href="/courses/cardiac-technology" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Cardiac Technology</a>
                                <a href="/courses/physician-assistant" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Physician Assistant</a>
                                <a href="/courses/radiography" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Radiography & Imaging</a>
                                <a href="/courses/operation-theatre" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">OT & Anesthesia Technology</a>
                                <div class="border-t my-2"></div>
                            </div>
                        </div>
                        
                        <!-- Infrastructure Dropdown -->
                        <div class="relative group">
                            <button class="${["facilities","gallery","transport"].includes(s)?"text-orange-600 font-bold":"text-gray-700 hover:text-orange-600"} font-medium flex items-center">
                                Infrastructure <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50">
                                <a href="/facilities" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Facilities</a>
                                <a href="/gallery" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Gallery</a>
                                <a href="/transport" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Transport</a>
                            </div>
                        </div>
                        
                        <!-- Beyond Programs Dropdown -->
                        <div class="relative group">
                            <button class="${["sports-clubs","innovation","events","success-stories"].includes(s)?"text-orange-600 font-bold":"text-gray-700 hover:text-orange-600"} font-medium flex items-center">
                                Beyond Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                                <a href="/sports-clubs" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Sports & Clubs</a>
                                <a href="/innovation" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Innovation Hub</a>
                                <a href="/events" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Events & Celebrations</a>
                                <a href="/success-stories" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Success Stories</a>
                            </div>
                        </div>
                        
                        <!-- Meet Us Dropdown -->
                        <div class="relative group">
                            <button class="${["about","contact","mandatory-disclosure"].includes(s)?"text-orange-600 font-bold":"text-gray-700 hover:text-orange-600"} font-medium flex items-center">
                                Meet Us <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                                <a href="/about" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">About Us</a>
                                <a href="/contact" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Contact Us</a>
                                <a href="/mandatory-disclosure" class="block px-4 py-2 hover:bg-orange-50 text-gray-700">Mandatory Disclosure</a>
                            </div>
                        </div>
                        
                        <a href="/admissions" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition">
                            Apply Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <button id="mobile-menu-btn" class="md:hidden text-gray-700">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
                <div class="px-4 py-4 space-y-3">
                    <a href="/" class="block text-gray-700 hover:text-orange-600 font-medium py-2">Home</a>
                    
                    <!-- Programs -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-academics').classList.toggle('hidden')">
                            Programs <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-academics" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/courses/cardiac-technology" class="block text-gray-600 hover:text-orange-600 py-1">Cardiac Technology</a>
                            <a href="/courses/physician-assistant" class="block text-gray-600 hover:text-orange-600 py-1">Physician Assistant</a>
                            <a href="/courses/radiography" class="block text-gray-600 hover:text-orange-600 py-1">Radiography & Imaging</a>
                            <a href="/courses/operation-theatre" class="block text-gray-600 hover:text-orange-600 py-1">OT & Anesthesia Technology</a>
                            <div class="border-t my-2"></div>
                            <a href="/courses" class="block text-gray-600 hover:text-orange-600 py-1 font-semibold">
                                <i class="fas fa-list text-orange-600 mr-2"></i>View All Courses
                            </a>
                        </div>
                    </div>
                    
                    <!-- Infrastructure -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-infrastructure').classList.toggle('hidden')">
                            Infrastructure <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-infrastructure" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/facilities" class="block text-gray-600 hover:text-orange-600 py-1">Facilities</a>
                            <a href="/gallery" class="block text-gray-600 hover:text-orange-600 py-1">Gallery</a>
                            <a href="/transport" class="block text-gray-600 hover:text-orange-600 py-1">Transport</a>
                        </div>
                    </div>
                    
                    <!-- Beyond Programs -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-beyond').classList.toggle('hidden')">
                            Beyond Programs <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-beyond" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/sports-clubs" class="block text-gray-600 hover:text-orange-600 py-1">Sports & Clubs</a>
                            <a href="/innovation" class="block text-gray-600 hover:text-orange-600 py-1">Innovation Hub</a>
                            <a href="/events" class="block text-gray-600 hover:text-orange-600 py-1">Events & Celebrations</a>
                            <a href="/success-stories" class="block text-gray-600 hover:text-orange-600 py-1">Success Stories</a>
                        </div>
                    </div>
                    
                    <!-- Meet Us -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-meetus').classList.toggle('hidden')">
                            Meet Us <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-meetus" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/about" class="block text-gray-600 hover:text-orange-600 py-1">About Us</a>
                            <a href="/contact" class="block text-gray-600 hover:text-orange-600 py-1">Contact Us</a>
                            <a href="/mandatory-disclosure" class="block text-gray-600 hover:text-orange-600 py-1">Mandatory Disclosure</a>
                        </div>
                    </div>
                    
                    <a href="/admissions" class="block bg-orange-500 text-white text-center px-6 py-3 rounded-lg font-bold">
                        Apply Now <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </nav>

        <!-- Content -->
        ${e}

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-300 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div class="flex items-center space-x-3 mb-4">
                            <img src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vc25zLWNvbGxlZ2Utb2YtYWxsaWVkLWhlYWx0aC1zY2llbmNlcy1vcmlnaW5hbC5qcGc.png" alt="SNS Allied Health Science Logo" class="h-12 w-auto bg-white rounded p-1">
                            <div>
                                <h3 class="text-white font-bold leading-tight">SNS College of Allied Health Sciences</h3>
                            </div>
                        </div>
                        <p class="text-sm leading-relaxed">
                            SNS Kalvi Nagar, Sathy Main Road (NH-209), Kurumbapalayam, Saravanampatti Post, Coimbatore - 641 035.
                        </p>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Quick Links</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/" class="hover:text-white transition">Home</a></li>
                            <li><a href="/about" class="hover:text-white transition">About Us</a></li>
                            <li><a href="/facilities" class="hover:text-white transition">Facilities</a></li>
                            <li><a href="/gallery" class="hover:text-white transition">Gallery</a></li>
                            <li><a href="/sports-clubs" class="hover:text-white transition">Sports & Clubs</a></li>
                            <li><a href="/events" class="hover:text-white transition">Events & Celebrations</a></li>
                            <li><a href="/success-stories" class="hover:text-white transition">Success Stories</a></li>
                            <li><a href="/transport" class="hover:text-white transition">Transport</a></li>
                            <li><a href="/innovation" class="hover:text-white transition">Innovation Hub</a></li>
                            <li><a href="/brochure" class="hover:text-white transition">Download Brochure</a></li>
                            <li><a href="/admissions" class="hover:text-white transition">Admissions</a></li>
                            <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Academics</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/academics/pre-primary" class="hover:text-white transition">Pre-Primary</a></li>
                            <li><a href="/academics/primary" class="hover:text-white transition">Primary</a></li>
                            <li><a href="/academics/middle" class="hover:text-white transition">Middle School</a></li>
                            <li><a href="/academics/secondary" class="hover:text-white transition">Secondary & Senior Secondary</a></li>
                            <li><a href="/stanford-pathway" class="hover:text-white transition">Pathway to Stanford</a></li>
                            <li><a href="/mandatory-disclosure" class="hover:text-white transition">Mandatory Disclosure</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Connect</h4>
                        <ul class="space-y-2 text-sm mb-4">
                            <li><i class="fas fa-map-marker-alt mr-2"></i>SNS Kalvi Nagar, Sathy Main Road (NH-209), Coimbatore - 641 035.</li>
                            <li><a href="tel:+919940956789" class="hover:text-white transition"><i class="fas fa-phone mr-2"></i>Admission: +91 99409 56789</a></li>
                            <li><a href="tel:+917550316701" class="hover:text-white transition"><i class="fas fa-phone mr-2"></i>Office: +91 75503 16701</a></li>
                            <li><a href="mailto:office@snscahs.org" class="hover:text-white transition"><i class="fas fa-envelope mr-2"></i>office@snscahs.org</a></li>
                            <li><a href="mailto:job@snsgroups.com" class="hover:text-white transition"><i class="fas fa-briefcase mr-2"></i>Career: job@snsgroups.com</a></li>
                        </ul>
                        <div class="flex space-x-3">
                            <a href="https://www.facebook.com/snsinstitutions" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/snsacademyorg" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@snsinstitutions" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.linkedin.com/school/snsinstitutions/" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; 2026 SNS College of Allied Health Sciences. All rights reserved.</p>
                    <p class="mt-2 text-orange-400 font-semibold">Redesigning Common Minds | We are Design Thinkers</p>
                    <p class="mt-1 text-xs">SNS Core Value: Sincerity, Nobility, Service</p>
                    <p class="mt-3 text-orange-400 font-bold"><i class="fas fa-headset mr-2"></i>Helpline: 95644 23456</p>
                </div>
            </div>
        </footer>

        <!-- JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        <\/script>
        <!-- Instagram Floating Icon -->
        <a href="https://www.instagram.com/snsinstitutions" class="instagram-float" target="_blank" rel="noopener noreferrer"
            title="Follow us on Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <!-- WhatsApp Floating Icon -->
        <a href="https://wa.me/919940956789" class="whatsapp-float" target="_blank" rel="noopener noreferrer"
            title="Chat with us on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    </body>
    </html>
  `,zt=()=>{const e=`
    <svg aria-hidden="true" viewBox="0 0 24 24" class="w-9 h-9 text-white/95">
      <path fill="currentColor" d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-3.866 0-7 3.134-7 7v1h14v-1c0-3.866-3.134-7-7-7Z" />
    </svg>
  `;return`
    <!-- Parents Testimonials Section -->
    <section class="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hear from the students and parents who trust SNS Allied Health Science with their future
                </p>
            </div>

            <!-- Carousel Container -->
            <div class="relative">
                <div id="testimonials-carousel" class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out" id="testimonials-track">
                        
                        <!-- Testimonial 1 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${e}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">John Samuel</h4>
                                        <p class="text-gray-600">B.Sc. Cardiac Technology Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "The clinical training at SNS Allied Health Science is truly world-class. Being able to observe live cardiac procedures at partnered hospitals while learning the theory in class has been amazing. The Design Thinking workshops helped me understand patient anxiety and how to provide better care."
                                </p>
                                <div class="flex items-center text-orange-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Student Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 2 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${e}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Meera Krishnan</h4>
                                        <p class="text-gray-600">B.Sc. Physician Assistant Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "Choosing SNSCAHS was the best decision for my healthcare career. The faculty are extremely knowledgeable and the hospital connect programs are excellent. The emphasis on 'Empathy' in our Design Thinking curriculum has shaped the way I interact with patients during my clinical rounds."
                                </p>
                                <div class="flex items-center text-orange-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Student Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 3 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${e}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Dr. Arul Prakash</h4>
                                        <p class="text-gray-600">Alumnus, SNSCAHS</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "The technical expertise I gained at SNS College of Allied Health Sciences was instrumental in my career progression. The focus on RADICAL technologies and real-world clinical problem solving sets this institution apart from traditional colleges. I am proud to be an alumnus."
                                </p>
                                <div class="flex items-center text-orange-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Alumni Review</span>
                                </div>
                            </div>
                        </div>

                        <!-- Testimonial 4 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${e}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Mrs. Kavitha Murthy</h4>
                                        <p class="text-gray-600">Parent of B.Sc. Radiography Student</p>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6">
                                    "Highly impressed with the infrastructure and the quality of teaching at SNS College of Allied Health Sciences. The college provides a perfect blend of academic rigor and practical industry exposure. My son is thriving in this environment and is very excited about his future in medical imaging."
                                </p>
                                <div class="flex items-center text-orange-600 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Verified Parent Review</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Navigation Buttons -->
                <button id="prev-testimonial" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-orange-600 text-gray-900 hover:text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all z-10">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button id="next-testimonial" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-orange-600 text-gray-900 hover:text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all z-10">
                    <i class="fas fa-chevron-right"></i>
                </button>

                <!-- Dots Indicator -->
                <div class="flex justify-center mt-8 space-x-2">
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-orange-600 transition-all" data-index="0"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-orange-400 transition-all" data-index="1"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-orange-400 transition-all" data-index="2"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-orange-400 transition-all" data-index="3"></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Carousel Script -->
    <script>
        (function() {
            let currentIndex = 0;
            const track = document.getElementById('testimonials-track');
            const dots = document.querySelectorAll('.testimonial-dot');
            const totalSlides = 4;

            function updateCarousel() {
                track.style.transform = \`translateX(-\${currentIndex * 100}%)\`;
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.remove('bg-gray-300');
                        dot.classList.add('bg-orange-600');
                    } else {
                        dot.classList.remove('bg-orange-600');
                        dot.classList.add('bg-gray-300');
                    }
                });
            }

            document.getElementById('next-testimonial').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            });

            document.getElementById('prev-testimonial').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });

            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    currentIndex = parseInt(dot.dataset.index);
                    updateCarousel();
                });
            });

            // Auto-advance every 5 seconds
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }, 5000);
        })();
    <\/script>
  `},Es=()=>`
    <!-- Hero Section with Real SNS Content -->
    <section class="relative text-white py-24 lg:py-32 overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="/static/images/hero.png" alt="SNSCAHS Campus" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                        <i class="fas fa-trophy text-yellow-400 mr-2"></i>
                        <span class="text-sm font-semibold tracking-wide">First Indian Institute to Implement Design Thinking in Education</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight font-display">
                        <a href="/about" class="hover:text-orange-400 transition duration-300">
                            SNS College of <br/>
                            <span class="text-orange-500 text-4xl lg:text-5xl uppercase block mt-2">Allied Health Science</span>
                        </a>
                    </h1>
                    
                    <div class="h-1 w-24 bg-orange-500 mb-8 rounded-full"></div>

                    <p class="text-xl lg:text-2xl mb-6 text-gray-200 leading-relaxed max-w-xl">
                        Affiliated to <strong class="text-white">The Tamil Nadu Dr.MGR Medical University, Chennai</strong>. Redesigning health science education through clinical excellence and innovation.
                    </p>

                    <p class="text-sm lg:text-base mb-8 text-gray-200 leading-relaxed max-w-xl">
                        Empowering future healthcare professionals with cutting-edge clinical training and a Design Thinking mindset at Coimbatore's premier health science institution.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="/admissions" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition transform hover:-translate-y-1 flex items-center justify-center">
                            Apply for 2026-27
                            <i class="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                        <a href="/about" class="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
                            <i class="fas fa-play mr-2 text-sm"></i>
                            About Us
                        </a>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 text-xs text-gray-200">
                        <div class="inline-flex items-center">
                            <i class="fas fa-circle-check text-green-400 mr-2"></i>
                            Dr.MGR Medical University Affiliated
                        </div>
                        <div class="inline-flex items-center">
                            <i class="fas fa-hospital text-green-400 mr-2"></i>
                            Clinical Hospital Connect
                        </div>
                        <div class="inline-flex items-center">
                            <i class="fas fa-calendar text-green-400 mr-2"></i>
                            Innovative Learning
                        </div>
                    </div>
                </div>
                
                <div class="hidden lg:block relative">
                    <!-- Optional: Add a floated refined card or keep clean to show the background image -->
                    <!-- Keeping it clean to showcase the 'Real' image -->
                    <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">10:1</div>
                                <div class="text-xs text-gray-200 mt-1">Student Teacher Ratio</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">60%</div>
                                <div class="text-xs text-gray-200 mt-1">10+ Years Experience</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">25+</div>
                                <div class="text-xs text-gray-200 mt-1">Extra Curricular</div>
                            </div>
                            <div class="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                <div class="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">100%</div>
                                <div class="text-xs text-gray-200 mt-1">Placement Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Bar -->
    <section class="py-10 bg-white border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-gray-100">
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">100%</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Clinical Training</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">5+</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Specialized B.Sc. Programs</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">MoUs</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">with Leading Hospitals</div>
                </div>
                <div class="p-4">
                    <div class="text-4xl font-bold text-gray-900 mb-2">SNS iHub</div>
                    <div class="text-sm text-gray-500 font-medium uppercase tracking-wide">Tech & Innovation Lab</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why SNS Academy -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-orange-600">Why Aspirants Choose SNS Allied Health Science</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We don't just teach subjects—we redesign professional minds through design thinking, preparing you for clinical challenges.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-lightbulb text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">India's 1st Design Thinking Institute</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Redesigning health science education through <strong>Empathy</strong>. Our students learn to identify clinical problems and develop human-centric solutions through advanced healthcare technologies.
                    </p>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-users text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Clinical Hospital Connect</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Collaborative partnerships with premier multi-specialty hospitals for intensive hands-on clinical training, ensuring graduates are workforce-ready.
                    </p>
                </div>
                
                <!-- Card 3 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-hand-holding-heart text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Expert Medical Faculty</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Learn from experienced healthcare professionals and researchers dedicated to nurturing the next generation of allied health specialists.
                    </p>
                </div>
                
                <!-- Card 4 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-rocket text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">SNS Innovation Hub</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Access to SNS iHub—India's Y-Combinator equivalent. Students work with AI, IoT, Robotics, AR/VR labs preparing them for future careers.
                    </p>
                </div>
                
                <!-- Card 5 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-building text-3xl text-pink-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">World-Class SPINE Center</h3>
                    <p class="text-gray-600 leading-relaxed">
                        5-level activity center with swimming pool, indoor cricket, gym, music studio, dance studio, theater, and more—everything under one roof.
                    </p>
                </div>
                
                <!-- Card 6 -->
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                    <div class="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <i class="fas fa-layer-group text-3xl text-indigo-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">5 Pillars Development</h3>
                    <p class="text-gray-600 leading-relaxed">
                        <strong>Learning, Upskilling, Innovation, Networking, Character Building</strong>—comprehensive development for future leaders.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Academic Programs Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                 <span class="text-orange-600">Excellence in Health Science Education</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    World-class curriculum enhanced with design thinking, clinical excellence, and innovation in health science education.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Course 1 -->
                <a href="/courses/cardiac-technology" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-56 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                        <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Cardiac-Technology.jpg" alt="Cardiac Technology" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-1">Cardiac Technology</h3>
                        <p class="text-orange-600 font-semibold text-sm mb-3">4-Year Degree Program</p>
                        <p class="text-gray-600 text-sm line-clamp-3">
                            Specialized training in invasive and non-invasive cardiovascular procedures and diagnosis.
                        </p>
                    </div>
                </a>
                
                <!-- Course 2 -->
                <a href="/courses/physician-assistant" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-56 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                        <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Physicia-Assistant.jpg" alt="Physician Assistant" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-1">Physician Assistant</h3>
                        <p class="text-blue-600 font-semibold text-sm mb-3">4-Year Degree Program</p>
                        <p class="text-gray-600 text-sm line-clamp-3">
                            Comprehensive clinical practice training to support physicians in diverse medical environments.
                        </p>
                    </div>
                </a>
                
                <!-- Course 3 -->
                <a href="/courses/radiography" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-56 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                        <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Radiography-and-Imaging-Technology.jpg" alt="Radiography" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-1">Radiography & Imaging</h3>
                        <p class="text-purple-600 font-semibold text-sm mb-3">4-Year Degree Program</p>
                        <p class="text-gray-600 text-sm line-clamp-3">
                            Training in medical imaging technologies including X-Ray, CT, and MRI for accurate diagnosis.
                        </p>
                    </div>
                </a>
                
                <!-- Course 4 -->
                <a href="/courses/operation-theatre" class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-56 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                        <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Operation-Theater-and-Anaesthesia-Technology.jpg" alt="OT & Anesthesia" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-1">OT & Anesthesia</h3>
                        <p class="text-green-600 font-semibold text-sm mb-3">4-Year Degree Program</p>
                        <p class="text-gray-600 text-sm line-clamp-3">
                            Specialized training in surgical assistance, sterilization, and anesthesia equipment management.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    ${zt()}

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl lg:text-5xl font-bold mb-4">
                Ready to Shape Your Medical Career?
            </h2>
            <p class="text-xl opacity-90 mb-8">
                Admissions open for Academic Year 2026-27. Secure your future in healthcare.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                    <i class="fas fa-pen-to-square mr-2"></i>
                    Apply Now
                </a>
                <a href="/contact" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                    <i class="fas fa-phone mr-2"></i>
                    Schedule Campus Visit
                </a>
            </div>
        </div>
    </section>
  `,Is=()=>`
    ${A("B.Sc. Cardiac Technology","Specialized undergraduate program focusing on invasive and non-invasive cardiovascular procedures","https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Cardiac-Technology.jpg","B.Sc. Cardiac Technology (4 Years)")}

    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Program Focus</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Mastering Cardiac Care</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Cardiac Technology is an area of specialization for allied health professionals who assist physicians in the diagnosis and treatment of cardiac (heart) and peripheral vascular (blood vessel) conditions.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        At SNSCAHS, students gain hands-on experience in cardiac catheterization laboratories and non-invasive diagnostic centers, learning to operate complex equipment and provide critical support during life-saving procedures.
                    </p>
                </div>
                <div class="relative">
                    <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Cardiac-Technology.jpg" alt="Cardiac Technology Lab" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                </div>
            </div>
        </div>
    </section>

    <!-- Key Learning Areas -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Course Framework</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive curriculum covering anatomy, physiology, and advanced cardiac care.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-heart-pulse text-3xl text-red-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Diagnostics</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Mastery of ECG, Holter monitoring, and Treadmill Test (TMT) protocols for heart evaluation.
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-file-medical text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Echocardiography</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Comprehensive training in 2D and 3D Echo, Doppler studies, and ultrasound imaging of the heart.
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                    <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-stethoscope text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Clinical Support</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed text-sm">
                        Assisting in Angioplasty, Pacemaker implantation, and other invasive cardiac interventions.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-red-900 text-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Secure Your Future in Cardiac Care</h2>
            <p class="text-xl mb-10 text-red-100 font-light">
                Join the B.Sc. Cardiac Technology program at SNS College of Allied Health Sciences.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-red-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
            </div>
        </div>
    </section>
  `,Ms=()=>`
    ${A("B.Sc. Physician Assistant","Preparing skilled clinical professionals to support physicians in diverse medical environments","https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Physicia-Assistant.jpg","B.Sc. Physician Assistant (4 Years)")}

    <!-- Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Clinical Excellence</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Versatile Healthcare Support</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Physician Assistants are healthcare professionals licensed to practice medicine with physician supervision. Our program at SNSCAHS provides a broad medical education that enables graduates to work in various medical and surgical specialties.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Students are trained to perform physical exams, diagnose and treat illnesses, order and interpret tests, counsel on preventive health care, and assist in surgery.
                    </p>
                </div>
                <div class="relative">
                    <img src="https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Physicia-Assistant.jpg" alt="Physician Assistant Clinical Training" class="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]">
                </div>
            </div>
        </div>
    </section>

    <!-- Program Goals -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold text-gray-900">Program Outcomes</h2>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 text-2xl"><i class="fas fa-stethoscope"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Clinical Skills</h3>
                        <p class="text-sm text-gray-500">Expertise in patient assessment and diagnosis</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600 text-2xl"><i class="fas fa-notes-medical"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Medical Knowledge</h3>
                        <p class="text-sm text-gray-500">Deep understanding of medical sciences</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-600 text-2xl"><i class="fas fa-user-md"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Professionalism</h3>
                        <p class="text-sm text-gray-500">Ethical practice and empathetic care</p>
                    </div>
                     <div class="text-center">
                        <div class="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600 text-2xl"><i class="fas fa-hospital-user"></i></div>
                        <h3 class="font-bold text-gray-900 mb-2">Collaborative Care</h3>
                        <p class="text-sm text-gray-500">Working effectively in healthcare teams</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA -->
    <section class="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Become a Skilled Physician Assistant</h2>
            <p class="text-xl mb-10 text-blue-100 font-light">
                Join our industry-aligned program and start your medical career.
            </p>
             <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
            </div>
        </div>
    </section>
  `,Ps=()=>`
    ${A("B.Sc. Radiography & Imaging Technology","Advanced training in medical imaging modalities for accurate diagnosis and clinical insights","https://snscahs.org/wp-content/uploads/2023/11/B.Sc-Radiography-and-Imaging-Technology.jpg","B.Sc. Radiography & Imaging (4 Years)")}

    <!-- Program Overview -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <span class="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Imaging Vertical</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Visualizing Health</h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        Radiography and Imaging Technology is essential in modern medicine for diagnosing and treating various diseases and injuries. Our program provides in-depth knowledge of radiology imaging techniques and equipment.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        At SNSCAHS, we emphasize safe radiation practices and patient care, training students to produce high-quality diagnostic images using state-of-the-art modalities.
                    </p>
                </div>
                <div class="bg-emerald-50 rounded-3xl p-10">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Key Modalities</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-emerald-700 text-xs"></i></div>
                            <span class="text-gray-700">Digital X-Ray Systems</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-emerald-700 text-xs"></i></div>
                            <span class="text-gray-700">Computed Tomography (CT)</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-emerald-700 text-xs"></i></div>
                            <span class="text-gray-700">Magnetic Resonance Imaging (MRI)</span>
                        </li>
                        <li class="flex items-start">
                             <div class="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mr-3 mt-0.5"><i class="fas fa-check text-emerald-700 text-xs"></i></div>
                            <span class="text-gray-700">Ultrasound & Mammography</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Design Thinking in Medicine -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Design Thinking in Imaging</h2>
                <p class="text-gray-600">Enhancing patient experience and accuracy through clinical empathy.</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-heart text-3xl text-orange-500 mb-3"></i>
                    <h4 class="font-bold">1. Empathize</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-crosshairs text-3xl text-blue-500 mb-3"></i>
                    <h4 class="font-bold">2. Define</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-lightbulb text-3xl text-yellow-500 mb-3"></i>
                    <h4 class="font-bold">3. Ideate</h4>
                </div>
                <div class="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-tools text-3xl text-green-500 mb-3"></i>
                    <h4 class="font-bold">4. Prototype</h4>
                </div>
                 <div class="col-span-2 md:col-span-1 bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                    <i class="fas fa-vial text-3xl text-purple-500 mb-3"></i>
                    <h4 class="font-bold">5. Test</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl font-bold mb-6">Expertise in Medical Imaging</h2>
            <p class="text-xl mb-10 text-emerald-100 font-light">
                Launch your career in radiology with our specialized B.Sc. program.
            </p>
             <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="bg-white text-emerald-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                    Apply for Admission
                </a>
            </div>
        </div>
    </section>
  `,Ns=()=>`
    ${A("World-Class Infrastructure","Professional-grade facilities designed to foster clinical expertise, innovation, and holistic wellness","/static/images/hero5.png","Facilities")}

    <!-- SPINE Center -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Student Life</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">SNS SPINE Activity Center</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    A 5-level premier activity center for sports, wellness, and recreation, ensuring a balanced student life. 
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Swimming Pool -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/Swim.png" alt="Swimming Pool" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Swimming Pool</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Professional-grade swimming pool with trained coaches. Swimming regularly lowers stress, reduces anxiety, and builds physical endurance.
                        </p>
                    </div>
                </div>

                <!-- Cricket Center -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/Indoor.png" alt="Indoor Cricket Center" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Indoor Cricket</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            All-weather cricket pitch with bowling machines and nets. Professional coaching available for all skill levels, day or night.
                        </p>
                    </div>
                </div>

                <!-- Fitness Center -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/Fitness.png" alt="Fitness Center" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Fitness Center</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Fully-equipped gym with treadmills, strength machines, weights, and boxing kits to ensure students stay healthy and toned.
                        </p>
                    </div>
                </div>

                <!-- Music Studio -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/Music.png" alt="Music Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Music Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Professional music studio with recording equipment and instruments. A space for students to compose, practice, and create.
                        </p>
                    </div>
                </div>

                <!-- Dance Studio -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/Dance.png" alt="Beats Dance Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Dance Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Dedicated space for various dance styles—from classical to contemporary. Enriching life through movement and expression.
                        </p>
                    </div>
                </div>

                <!-- Art Room -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/Art Studio.png" alt="Art Room" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Art Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Creative space for drawing, painting, and sculpting. Allowing students to visualize concepts and express emotions.
                        </p>
                    </div>
                </div>

                <!-- Theater -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/The.png" alt="Bioskop Theater" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Bioskop Theater</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Compact digital theater with superior sound and projection. A unique venue for educational films and entertainment.
                        </p>
                    </div>
                </div>

                <!-- Gaming Arena -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/Gaming Area.png" alt="Gaming Arena" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Gaming Arena</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            State-of-the-art gaming space for recreational and competitive esports, fostering strategic thinking and teamwork.
                        </p>
                    </div>
                </div>

                <!-- Rooftop Restaurant -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/SNS Academy Web/TopRoof Dinning.png" alt="Rooftop Restaurant" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Rooftop Dining</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Fine dining experience with healthy, seasonal meals. A perfect setting for community interaction and relaxation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Academic Facilities -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-bold text-gray-900 mb-6">Academic Infrastructure</h2>
                 <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Modern learning spaces designed to foster innovation and collaboration.
                 </p>
            </div>
            
            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-chalkboard-teacher text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Smart Classrooms</h3>
                    <p class="text-sm text-gray-600">Interactive learning with smart boards</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-flask text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Science Labs</h3>
                    <p class="text-sm text-gray-600">Physics, Chemistry & Biology labs</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-desktop text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Computer Labs</h3>
                    <p class="text-sm text-gray-600">State-of-the-art computing facilities</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-book text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Library</h3>
                    <p class="text-sm text-gray-600">Comprehensive resource collection</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Visit Our Campus</h2>
            <p class="text-xl lg:text-2xl mb-10 text-white/90 font-light">
                Experience our professional environment and state-of-the-art clinical laboratories in person.
            </p>
            <a href="/contact" class="bg-white text-pink-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-block">
                Schedule Campus Tour
            </a>
        </div>
    </section>
  `,zs=()=>`
    ${A("SNS Innovation Hub","Redesigning Health Science Education through Design Thinking and Clinical Innovation","/static/images/pillar_industry.jpg","Innovation Hub")}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-4xl font-bold mb-6">About SNS iHub</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        SNS iHub is our dedicated space for fostering innovation in healthcare. We combine medical expertise with our <strong>Design Thinking framework</strong> to solve complex clinical problems.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        From developing assistive medical devices to optimizing hospital workflows, our students use the iHub to turn empathetic insights into tangible healthcare solutions.
                    </p>
                </div>
                <div class="bg-purple-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6">RADICAL Technologies</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start"><i class="fas fa-robot text-orange-600 mr-3 mt-1"></i><span>Robotics & Automation</span></li>
                        <li class="flex items-start"><i class="fas fa-vr-cardboard text-orange-600 mr-3 mt-1"></i><span>AR/VR Technology</span></li>
                        <li class="flex items-start"><i class="fas fa-brain text-orange-600 mr-3 mt-1"></i><span>Data Science/AI/ML</span></li>
                        <li class="flex items-start"><i class="fas fa-network-wired text-orange-600 mr-3 mt-1"></i><span>IoT/Cybersecurity</span></li>
                        <li class="flex items-start"><i class="fas fa-wifi text-orange-600 mr-3 mt-1"></i><span>Communication Tech</span></li>
                        <li class="flex items-start"><i class="fas fa-cube text-orange-600 mr-3 mt-1"></i><span>Additive Manufacturing</span></li>
                        <li class="flex items-start"><i class="fas fa-code text-orange-600 mr-3 mt-1"></i><span>Low Code/No Code</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- SHAAARP Industry Verticals -->
    <section class="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">SHAAARP Industry Verticals</h2>
                <p class="text-xl text-gray-600">Focus areas for innovation and startup development</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-city text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Smart City & Manufacturing</h3>
                    <p class="text-sm text-gray-600 text-center">IoT, automation, smart infrastructure</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-heartbeat text-3xl text-red-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Healthcare</h3>
                    <p class="text-sm text-gray-600 text-center">AI diagnostics, telemedicine, digital health</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-seedling text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Agriculture & Food</h3>
                    <p class="text-sm text-gray-600 text-center">Precision farming, food tech, supply chain</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-shopping-cart text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Retail FMCG</h3>
                    <p class="text-sm text-gray-600 text-center">E-commerce, consumer goods, retail analytics</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-car text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Automotive & Aerospace</h3>
                    <p class="text-sm text-gray-600 text-center">Autonomous vehicles, aerospace engineering</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-shield-alt text-3xl text-indigo-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Defense, Government, Legal</h3>
                    <p class="text-sm text-gray-600 text-center">Security, compliance, legal tech</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-building text-3xl text-pink-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Real Estate</h3>
                    <p class="text-sm text-gray-600 text-center">PropTech, smart buildings, analytics</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-futbol text-3xl text-yellow-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Sports, Media & Entertainment</h3>
                    <p class="text-sm text-gray-600 text-center">Content creation, gaming, sports tech</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-university text-3xl text-teal-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">BFSI - Fintech/Banking</h3>
                    <p class="text-sm text-gray-600 text-center">Financial services, banking technology</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-bolt text-3xl text-cyan-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Power, Oil, Energy</h3>
                    <p class="text-sm text-gray-600 text-center">Energy management, renewables, utilities</p>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover col-span-full md:col-span-1 lg:col-start-3">
                    <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-user-circle text-3xl text-rose-600"></i>
                    </div>
                    <h3 class="font-bold text-lg text-center mb-3">Personal Services</h3>
                    <p class="text-sm text-gray-600 text-center">EdTech, Dating/Marriage, HR Tech</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Innovation Labs</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl p-8">
                    <h3 class="text-2xl font-bold mb-4">I-TECH Labs</h3>
                    <p class="text-gray-700">Inter-disciplinary research space for AR/VR, AI, IoT, Robotics, and 3D printing innovations.</p>
                </div>
                <div class="bg-white rounded-xl p-8">
                    <h3 class="text-2xl font-bold mb-4">BOT Lab</h3>
                    <p class="text-gray-700">Coimbatore's first Center-of-Excellence in Robotics Process Automation with Automation Anywhere.</p>
                </div>
                <div class="bg-white rounded-xl p-8">
                    <h3 class="text-2xl font-bold mb-4">Piston Factory</h3>
                    <p class="text-gray-700">Real-time project workspace and vehicle fabrication for national competitions.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Mango Big7 Clubs -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Mango Big7 Clubs</h2>
                <p class="text-xl text-gray-600 mb-2">Student clubs focused on industry leaders and career pathways</p>
                <p class="text-lg text-orange-600 font-semibold">Exposure to world's leading companies and consulting firms</p>
            </div>
            
            <!-- Tech Giants -->
            <div class="mb-12">
                <h3 class="text-3xl font-bold text-center mb-8 text-orange-600">Tech Giants Club</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <!-- Meta -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Meta</h4>
                        <p class="text-xs text-gray-600 mt-1">Social Media & VR</p>
                    </div>
                    
                    <!-- Microsoft -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 0h11.377v11.372H0V0zm12.623 0H24v11.372H12.623V0zM0 12.623h11.377V24H0V12.623zm12.623 0H24V24H12.623V12.623z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Microsoft</h4>
                        <p class="text-xs text-gray-600 mt-1">Cloud & Software</p>
                    </div>
                    
                    <!-- Apple -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Apple</h4>
                        <p class="text-xs text-gray-600 mt-1">Hardware & Design</p>
                    </div>
                    
                    <!-- Amazon -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.548.41-3.156.615-4.83.615-3.268 0-6.306-.756-9.116-2.268-.44-.236-.81-.46-1.11-.67-.18-.124-.3-.22-.36-.29-.09-.11-.12-.21-.07-.31zm23.696-3.017c-.225-.183-.506-.244-.84-.244-.334 0-.664.061-.99.183-.327.122-.61.244-.85.366-.24.122-.45.214-.63.275-.18.061-.33.092-.45.092-.12 0-.21-.031-.27-.092-.06-.061-.09-.153-.09-.275 0-.122.03-.244.09-.366.06-.122.15-.244.27-.366.12-.122.27-.244.45-.366.18-.122.39-.214.63-.275.24-.061.51-.092.81-.092.3 0 .6.031.9.092.3.061.57.153.81.275.24.122.45.244.63.366.18.122.33.244.45.366.12.122.21.244.27.366.06.122.09.244.09.366 0 .122-.03.214-.09.275-.06.061-.15.092-.27.092-.12 0-.27-.031-.45-.092-.18-.061-.39-.153-.63-.275-.24-.122-.52-.244-.84-.366-.32-.122-.65-.183-.99-.183z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Amazon</h4>
                        <p class="text-xs text-gray-600 mt-1">E-commerce & AWS</p>
                    </div>
                    
                    <!-- Netflix -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c2.873-.41 5.398-.82 8.489-.82V9.63L9.191 1.05z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Netflix</h4>
                        <p class="text-xs text-gray-600 mt-1">Streaming & Content</p>
                    </div>
                    
                    <!-- NVIDIA -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.764 0c-.473 0-.857.384-.857.857v22.286c0 .473.384.857.857.857h8.472c.473 0 .857-.384.857-.857V.857c0-.473-.384-.857-.857-.857H7.764zm4.236 2.571c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">NVIDIA</h4>
                        <p class="text-xs text-gray-600 mt-1">GPUs & AI Chips</p>
                    </div>
                    
                    <!-- Google -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Google</h4>
                        <p class="text-xs text-gray-600 mt-1">Search & AI</p>
                    </div>
                    
                    <!-- Oracle -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-red-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Oracle</h4>
                        <p class="text-xs text-gray-600 mt-1">Database & Cloud</p>
                    </div>
                    
                    <!-- Tesla -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 5.362L8.16 15h7.68L12 5.362zM12 0l8.485 21H3.515L12 0z"/>
                            </svg>
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Tesla</h4>
                        <p class="text-xs text-gray-600 mt-1">EV & Innovation</p>
                    </div>
                </div>
            </div>
            
            <!-- Consulting & Finance -->
            <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-indigo-100">
                <h3 class="text-3xl font-bold text-center mb-8 text-indigo-600">Consulting & Finance Club</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <!-- KPMG -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/KPMG_blue_logo.svg/500px-KPMG_blue_logo.svg.png" alt="KPMG" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">KPMG</h4>
                        <p class="text-xs text-gray-600 mt-1">Big 4 Audit</p>
                    </div>
                    
                    <!-- EY -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">EY</h4>
                        <p class="text-xs text-gray-600 mt-1">Big 4 Advisory</p>
                    </div>
                    
                    <!-- Deloitte -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" alt="Deloitte" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Deloitte</h4>
                        <p class="text-xs text-gray-600 mt-1">Big 4 Consulting</p>
                    </div>
                    
                    <!-- JP Morgan -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg" alt="JP Morgan" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">JP Morgan</h4>
                        <p class="text-xs text-gray-600 mt-1">Investment Banking</p>
                    </div>
                    
                    <!-- PwC -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/PwC_Logo_2010.svg" alt="PwC" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">PwC</h4>
                        <p class="text-xs text-gray-600 mt-1">Big 4 Tax & Advisory</p>
                    </div>
                    
                    <!-- BCG -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Boston_Consulting_Group_2020_logo.svg" alt="BCG" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">BCG</h4>
                        <p class="text-xs text-gray-600 mt-1">Strategy Consulting</p>
                    </div>
                    
                    <!-- Bain -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Bain_%26_Company_logo.svg" alt="Bain" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">Bain</h4>
                        <p class="text-xs text-gray-600 mt-1">Management Consulting</p>
                    </div>
                    
                    <!-- McKinsey -->
                    <div class="bg-white rounded-xl p-6 text-center card-hover shadow-lg border border-gray-100">
                        <div class="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/McKinsey_%26_Company_Script_Mark_Logo.svg" alt="McKinsey" class="w-full h-full object-contain">
                        </div>
                        <h4 class="font-bold text-lg text-gray-900">McKinsey</h4>
                        <p class="text-xs text-gray-600 mt-1">Top-tier Consulting</p>
                    </div>
                </div>
            </div>
            
            <!-- Club Benefits -->
            <div class="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 class="text-2xl font-bold text-center mb-6">What Students Learn</h3>
                <div class="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                        <i class="fas fa-users-cog text-4xl mb-3"></i>
                        <h4 class="font-bold mb-2">Industry Insights</h4>
                        <p class="text-sm opacity-90">Deep dive into business models</p>
                    </div>
                    <div>
                        <i class="fas fa-project-diagram text-4xl mb-3"></i>
                        <h4 class="font-bold mb-2">Case Studies</h4>
                        <p class="text-sm opacity-90">Real-world problem solving</p>
                    </div>
                    <div>
                        <i class="fas fa-handshake text-4xl mb-3"></i>
                        <h4 class="font-bold mb-2">Networking</h4>
                        <p class="text-sm opacity-90">Connect with alumni & professionals</p>
                    </div>
                    <div>
                        <i class="fas fa-graduation-cap text-4xl mb-3"></i>
                        <h4 class="font-bold mb-2">Career Prep</h4>
                        <p class="text-sm opacity-90">Internship & placement guidance</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,Hs=()=>`
    ${A("About SNSCAHS","India's First Institute to Implement Design Thinking in Education","/static/images/hero.png","About Us")}

    <!-- Vision & Philosophy Section -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <div class="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <img src="/static/images/secondary.png" alt="Students Learning" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                    <div class="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg max-w-xs">
                        <p class="text-orange-600 font-bold text-lg mb-1">Our Tagline</p>
                        <p class="text-gray-800 text-sm font-medium">Redesigning Common Minds & Business Towards Excellence</p>
                    </div>
                </div>
                
                <div>
                    <div class="mb-12">
                        <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Vision</span>
                        <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                            Pioneering <span class="text-orange-600">Allied Health Education</span>
                        </h2>
                        <p class="text-lg text-gray-600 leading-relaxed mb-6">
                            SNS College of Allied Health Sciences is dedicated to producing world-class healthcare professionals through our unique <strong>Design Thinking Framework</strong>. We prioritize clinical excellence, empathy-driven care, and innovative research.
                        </p>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            Affiliated to <strong>The Tamil Nadu Dr.MGR Medical University</strong>, we ensure our students are trained at the highest standards of medical education and ethics.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                <i class="fas fa-brain text-xl text-orange-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 text-lg">Design Thinking</h4>
                                <p class="text-gray-600 text-sm">Solving real-world problems with empathy.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                <i class="fas fa-users text-xl text-blue-600"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 text-lg">3P Culture</h4>
                                <p class="text-gray-600 text-sm">Purpose, Process, People driving holistic growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            <!-- 5 Pillars Mission (Visual Grid) -->
            <section class="py-24 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
                        <h2 class="text-4xl font-bold mb-6 text-gray-900">5 Pillars of Excellence</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comprehensive framework designed to nurture well-rounded global citizens.
                        </p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Pillar 1 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/Learning.png" alt="Learning" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">1. Learning & Teaching</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Practice Design Thinking-Based Academic Learning & Teaching. We move from rote memorization to active understanding.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pillar 2 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/Skill.png" alt="Skill Development" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">2. Skill & Career Development</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Build life skills through various clubs and contests. Preparing students for careers that don't even exist yet.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pillar 3 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/Creativity.png" alt="Creativity" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">3. Centre for Creativity</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Hands-on experience solving key industrial problems with latest technologies in our Innovation Hub.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pillar 4 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/IIPC.png" alt="Industry Partnership" class="w-full h-full object-cover transform group-hover:scale-100 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">4. Industry Partnership</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Connecting classrooms with boardrooms. Students learn business sense directly from industry leaders.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Pillar 5 -->
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition duration-300">
                            <div class="h-48 overflow-hidden">
                                <img src="/static/images/SRI.png" alt="Social Responsibility" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <h3 class="text-xl font-bold mb-3 text-gray-900">5. Social Responsibility</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Cultivating compassion. Giving back to society through impactful social service initiatives.
                                </p>
                            </div>
                        </div>
                        
                        <!-- 3P Summary Card with Image Overlay -->
                            <div class="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-8 text-center text-white">

                                <!-- Background Image -->
                                <img 
                                    src="/static/images/3P.jpg"
                                    alt="3P Culture"
                                    class="absolute inset-0 w-full h-full object-cover"
                                />

                                <!-- Dark Overlay -->
                                <div class="absolute inset-0 bg-black/80"></div>

                                <!-- Content -->
                                <div class="relative z-10">
                                    <h3 class="text-2xl font-bold mb-4">3P Culture</h3>

                                    <div class="flex justify-center space-x-4 mb-6">
                                        <span class="bg-white/10 px-3 py-1 rounded text-sm">Purpose</span>
                                        <span class="bg-white/10 px-3 py-1 rounded text-sm">Process</span>
                                        <span class="bg-white/10 px-3 py-1 rounded text-sm">People</span>
                                    </div>

                                    <p class="text-gray-300 text-sm">
                                        Our holistic operating system for educational excellence.
                                    </p>
                                </div>

                            </div>

                    </div>
                </div>
            </section>

    <!-- Leadership Team Section -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Leadership</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Visionaries Behind SNS</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Guiding the institution with wisdom, innovation, and a commitment to excellence.
                </p>
            </div>

            <div class="grid lg:grid-cols-3 gap-10">
                <!-- Founder Chairman -->
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                    <div class="flex items-center mb-6">
                        <img src="/static/images/chairman.png" alt="Dr. S.N. Subbramanian" class="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900"><span class="text-[70%]">Deiva Thiru</span><br/><span class="text-[90%] font-[900]">Dr. S.N. Subbramanian</span></h3>
                            <p class="text-orange-600 text-sm font-semibold mt-1">Founder Chairman</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <p class="text-gray-600 text-sm leading-relaxed italic">
                            "We believe that every child is a design thinker. Through our unique Design Thinking framework and 3P Culture, we prepare students not just for exams, but for life."
                        </p>
                    </div>
                </div>

                <!-- Correspondent -->
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                    <div class="flex items-center mb-6">
                        <img src="/static/images/correspondent.png" alt="Dr. S. Rajalakshmi" class="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">Dr. S. Rajalakshmi</h3>
                            <p class="text-orange-600 text-sm font-semibold mt-1">Chairman / Correspondent</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <p class="text-gray-600 text-sm leading-relaxed italic">
                            "We focus on holistic development through our 5 Pillars Mission. Our experienced faculty nurtures each child's unique potential, preparing them for global opportunities."
                        </p>
                    </div>
                </div>

                <!-- Technical Director -->
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300">
                    <div class="flex items-center mb-6">
                        <img src="/static/images/td.png" alt="Nalin SNS" class="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white shadow-sm">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">Nalin SNS</h3>
                            <p class="text-orange-600 text-sm font-semibold mt-1">Technical Director</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <p class="text-gray-600 text-sm leading-relaxed italic">
                            "We aim to build <strong class='text-gray-900'>1000 AI startups in 10 years</strong>. SNS iHub serves as India's Y-Combinator, focused on SHAAARP industries and RADICAL technologies."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,Ls=()=>`
    ${A("Contact Us","We'd love to hear from you. Visit us or get in touch today!","/static/images/hero.png","Contact Us")}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <i class="fas fa-map-marker-alt text-3xl text-orange-600 mr-4"></i>
                            <div>
                                <h3 class="font-bold text-xl mb-2">Address</h3>
                                <p class="text-gray-700">SNS College of Allied Health Sciences,<br>SNS Kalvi Nagar, Sathy Main Road (NH-209),<br>Vazhiyampalayam, Saravanampatti Post,<br>Coimbatore - 641 035.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-phone text-3xl text-orange-600 mr-4"></i>
                            <div>
                                <h3 class="font-bold text-xl mb-2">Phone</h3>
                                <p class="text-gray-700">Admission: +91 99409 56789<br>Office: +91 75503 16701</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-envelope text-3xl text-green-600 mr-4"></i>
                            <div>
                                <h3 class="font-bold text-xl mb-2">Email</h3>
                                <p class="text-gray-700">General: office@snscahs.org<br>Admissions: snsadmission@snsgroups.com</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-clock text-3xl text-orange-600 mr-4"></i>
                            <div>
                                <h3 class="font-bold text-xl mb-2">Visit Us</h3>
                                <p class="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM<br>Saturday: 9:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 rounded-2xl p-8">
                    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center">Admission and Enquiry Form</h3>
                    
                    <!-- Bitrix24 Form with Custom Styling -->
                    <style>
                        /* Bitrix Form Custom Styles */
                        .b24-form-wrapper {
                            background: transparent !important;
                            border: none !important;
                            padding: 0 !important;
                            box-shadow: none !important;
                        }
                        
                        .b24-form-header {
                            display: none !important;
                        }
                        
                        .b24-form-field {
                            margin-bottom: 24px !important;
                        }
                        
                        /* Remove Bitrix auto separators */
                        .b24-form-separator,
                        .b24-form-field-separator,
                        .b24-form-field::before,
                        .b24-form-field::after {
                            display: none !important;
                            content: none !important;
                            height: 0 !important;
                            border: none !important;
                        }
                        
                        /* Hide labels visually but keep for Bitrix logic */
                        .b24-form-control-label {
                            position: absolute !important;
                            opacity: 0 !important;
                            pointer-events: none !important;
                        }
                        
                        /* Input styling */
                        .b24-form-control {
                            width: 100% !important;
                            background: #ffffff !important;
                            border: 1px solid #dfe3e8 !important;
                            border-radius: 14px !important;
                            padding: 16px 18px !important;
                            font-size: 15px !important;
                            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                            color: #111 !important;
                            box-shadow: none !important;
                        }
                        
                        .b24-form-control::placeholder {
                            color: #9aa0a6 !important;
                            font-weight: 400;
                        }
                        
                        .b24-form-control:focus {
                            border-color: #111 !important;
                            outline: none !important;
                        }
                        
                        /* Dropdown styling */
                        .b24-form-dropdown {
                            border-radius: 14px !important;
                            border: 1px solid #fcfcfc !important;
                            box-shadow: 0 12px 28px rgba(0,0,0,0.12) !important;
                        }
                        
                        .b24-form-dropdown-item {
                            padding: 14px 18px !important;
                            font-size: 15px !important;
                            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                        }
                        
                        .b24-form-dropdown-item:hover {
                            background: #f5f6f8 !important;
                        }
                        
                        /* Submit button */
                        .b24-form-btn {
                            width: 100% !important;
                            margin-top: 28px !important;
                            padding: 18px !important;
                            border-radius: 16px !important;
                            background: #e94a28 !important;
                            color: #000 !important;
                            font-size: 18px !important;
                            font-weight: 600 !important;
                            border: none !important;
                            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                            cursor: pointer !important;
                            transition: all 0.3s ease !important;
                        }
                        
                        .b24-form-btn:hover {
                            background: #d43d1f !important;
                            transform: translateY(-1px);
                        }
                        
                        /* Footer text */
                        .b24-form-sign {
                            margin-top: 20px !important;
                            font-size: 13px !important;
                            color: #9aa0a6 !important;
                        }
                    </style>
                    
                    <script data-b24-form="inline/18/m4ecvi" data-skip-moving="true">
                    (function(w,d,u){
                        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                    })(window,document,'https://cdn.bitrix24.com/b11752903/crm/form/loader_18.js');
                    <\/script>
                    
                    <script>
                    /* Placeholder + Asterisk Fix */
                    setTimeout(function () {
                        document.querySelectorAll('.b24-form-field').forEach(function (field) {
                            const label = field.querySelector('.b24-form-control-label');
                            const input = field.querySelector('.b24-form-control');
                            
                            if (label && input) {
                                let text = label.textContent.replace(/\\s*\\*$/, '').trim();
                                let required = label.textContent.includes('*');
                                input.placeholder = required ? text + ' *' : text;
                            }
                        });
                    }, 500);
                    <\/script>
                </div>
            </div>
        </div>
    </section>
  `,Os=()=>`
    ${A("Admissions 2026-27","Begin Your Professional Healthcare Journey","/static/images/hero.png","Admissions")}

    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Admission Process</h2>
            <div class="space-y-8">
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                        <span class="text-2xl font-bold text-orange-600">1</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Register</h3>
                        <p class="text-gray-700">Visit campus on any working day between 9:00 AM to 5:00 PM and register for your admission.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                        <span class="text-2xl font-bold text-orange-600">2</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Assessment</h3>
                        <p class="text-gray-700">Aptitude assessment in English, Basic Science, and General Knowledge according to University entrance standards.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                        <span class="text-2xl font-bold text-green-600">3</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Interview</h3>
                        <p class="text-gray-700">Detailed interview to determine alignment of aspirant views with clinical excellence and healthcare ethics.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                        <span class="text-2xl font-bold text-orange-600">4</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Selection</h3>
                        <p class="text-gray-700">Results compiled on merit by the Admissions Committee. Seats offered in order of merit and clinical aptitude.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg">
                <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center">Admission and Enquiry Form</h3>
                
                <!-- Bitrix24 Form with Custom Styling -->
                <style>
                    /* Bitrix Form Custom Styles */
                    .b24-form-wrapper {
                        background: transparent !important;
                        border: none !important;
                        padding: 0 !important;
                        box-shadow: none !important;
                    }
                    
                    .b24-form-header {
                        display: none !important;
                    }
                    
                    .b24-form-field {
                        margin-bottom: 24px !important;
                    }
                    
                    /* Remove Bitrix auto separators */
                    .b24-form-separator,
                    .b24-form-field-separator,
                    .b24-form-field::before,
                    .b24-form-field::after {
                        display: none !important;
                        content: none !important;
                        height: 0 !important;
                        border: none !important;
                    }
                    
                    /* Hide labels visually but keep for Bitrix logic */
                    .b24-form-control-label {
                        position: absolute !important;
                        opacity: 0 !important;
                        pointer-events: none !important;
                    }
                    
                    /* Input styling */
                    .b24-form-control {
                        width: 100% !important;
                        background: #ffffff !important;
                        border: 1px solid #dfe3e8 !important;
                        border-radius: 14px !important;
                        padding: 16px 18px !important;
                        font-size: 15px !important;
                        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                        color: #111 !important;
                        box-shadow: none !important;
                    }
                    
                    .b24-form-control::placeholder {
                        color: #9aa0a6 !important;
                        font-weight: 400;
                    }
                    
                    .b24-form-control:focus {
                        border-color: #111 !important;
                        outline: none !important;
                    }
                    
                    /* Dropdown styling */
                    .b24-form-dropdown {
                        border-radius: 14px !important;
                        border: 1px solid #fcfcfc !important;
                        box-shadow: 0 12px 28px rgba(0,0,0,0.12) !important;
                    }
                    
                    .b24-form-dropdown-item {
                        padding: 14px 18px !important;
                        font-size: 15px !important;
                        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                    }
                    
                    .b24-form-dropdown-item:hover {
                        background: #f5f6f8 !important;
                    }
                    
                    /* Submit button */
                    .b24-form-btn {
                        width: 100% !important;
                        margin-top: 28px !important;
                        padding: 18px !important;
                        border-radius: 16px !important;
                        background: #e94a28 !important;
                        color: #000 !important;
                        font-size: 18px !important;
                        font-weight: 600 !important;
                        border: none !important;
                        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                        cursor: pointer !important;
                        transition: all 0.3s ease !important;
                    }
                    
                    .b24-form-btn:hover {
                        background: #d43d1f !important;
                        transform: translateY(-1px);
                    }
                    
                    /* Footer text */
                    .b24-form-sign {
                        margin-top: 20px !important;
                        font-size: 13px !important;
                        color: #9aa0a6 !important;
                    }
                </style>
                
                <script data-b24-form="inline/18/m4ecvi" data-skip-moving="true">
                (function(w,d,u){
                    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                })(window,document,'https://cdn.bitrix24.com/b11752903/crm/form/loader_18.js');
                <\/script>
                
                <script>
                /* Placeholder + Asterisk Fix */
                setTimeout(function () {
                    document.querySelectorAll('.b24-form-field').forEach(function (field) {
                        const label = field.querySelector('.b24-form-control-label');
                        const input = field.querySelector('.b24-form-control');
                        
                        if (label && input) {
                            let text = label.textContent.replace(/\\s*\\*$/, '').trim();
                            let required = label.textContent.includes('*');
                            input.placeholder = required ? text + ' *' : text;
                        }
                    });
                }, 500);
                <\/script>
            </div>
        </div>
    </section>
  `,Bs=()=>`
    ${A("Mandatory Public Disclosure","Institutional Details & Regulatory Compliance","/static/images/hero.png","Mandatory Disclosure")}

    <!-- A: General Information -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">A. General Information</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">NAME OF THE INSTITUTION</td>
                            <td class="border border-gray-300 px-4 py-3 uppercase">SNS College of Allied Health Sciences</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">AFFILIATION</td>
                            <td class="border border-gray-300 px-4 py-3">The Tamil Nadu Dr.MGR Medical University, Chennai</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">COLLEGE CODE</td>
                            <td class="border border-gray-300 px-4 py-3">A0701</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">COMPLETE ADDRESS</td>
                            <td class="border border-gray-300 px-4 py-3">SNS Kalvi Nagar, Sathy Main Road (NH-209), Coimbatore - 641035, Tamil Nadu</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">PRINCIPAL / DEAN</td>
                            <td class="border border-gray-300 px-4 py-3">Dr. S. Rajalakshmi</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">QUALIFICATION</td>
                            <td class="border border-gray-300 px-4 py-3">Ph.D., M.Sc., (Relevant Clinical Domain)</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">OFFICE EMAIL ID</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="mailto:office@snscahs.org" class="text-orange-600 hover:underline">office@snscahs.org</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">8</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">CONTACT DETAILS</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="tel:+917550316701" class="text-orange-600 hover:underline">+91 75503 16701</a> / <a href="tel:+919940956789" class="text-orange-600 hover:underline">+91 99409 56789</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- B: Documents and Information -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">B. Documents and Information</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300 bg-white">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DOCUMENTS/INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">LINKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3">Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/affiliationUpgradation/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3">Copies of Trust Registration/Renewal Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/TRUST_DEED/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3">Copy of No Objection Certificate (NOC) Issued by State Govt.</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/noc/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3">Copies of Recognition Certificate Under RTE Act, 2009</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/recognitionCertificate/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3">Copy of Valid Building Safety Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://cbse.snsacademy.org/Building%20Safety%20certificate.pdf" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3">Copy of Valid Fire Safety Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/FireSafetyCertificate/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3">Copy of DEO Certificate / Self Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/SelfCertification/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">8</td>
                            <td class="border border-gray-300 px-4 py-3">Copies of Valid Water, Health and Sanitation Certificates</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/WaterHealthSanitationCertificates/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p class="text-sm text-gray-700"><strong>NOTE:</strong> The institution uploads self-attested copies of above listed documents by Chairman/Manager/Secretary and Principal. If it is noticed at a later stage that uploaded documents are not genuine, the institution shall be liable for action as per norms.</p>
            </div>
        </div>
    </section>

    <!-- C: Result and Academics -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">C. Result and Academics</h2>
            
            <div class="overflow-x-auto mb-8">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DOCUMENTS/INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">LINKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Fee Structure of the College</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/FeeStructure/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Annual Academic Calendar</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/AcademicCalender/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">List of Governing Council</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/SchoolManagementCommittee/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">List of Parents Teachers Association (PTA) Members</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/ParentsTeachersAssociation/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Last Three-Year Result of University Examination</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/Three-YearResult/" target="_blank" class="text-orange-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold mb-6 text-gray-900">University Results - B.Sc. Programs</h3>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-blue-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Academic Year</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Registered Students</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Students Passed</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Pass Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2021-2022</td>
                            <td class="border border-gray-300 px-4 py-3">35</td>
                            <td class="border border-gray-300 px-4 py-3">35</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2022-2023</td>
                            <td class="border border-gray-300 px-4 py-3">45</td>
                            <td class="border border-gray-300 px-4 py-3">45</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2023-2024</td>
                            <td class="border border-gray-300 px-4 py-3">50</td>
                            <td class="border border-gray-300 px-4 py-3">50</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- D: Staff (Teaching) -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">D. Staff (Teaching)</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300 bg-white">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Principal / Dean</td>
                            <td class="border border-gray-300 px-4 py-3">Dr. S. Rajalakshmi</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Total Number of Faculty</td>
                            <td class="border border-gray-300 px-4 py-3">
                                <div class="space-y-1">
                                    <div><strong>Total:</strong> 25</div>
                                    <div>Professors: 05</div>
                                    <div>Associate Professors: 08</div>
                                    <div>Assistant Professors / Tutors: 12</div>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Student Faculty Ratio</td>
                            <td class="border border-gray-300 px-4 py-3">1:10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- E: Institutional Infrastructure -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">E. Institutional Infrastructure</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-orange-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Total Campus Area (in sq mtr)</td>
                            <td class="border border-gray-300 px-4 py-3">9,176 sq mtr</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">No. and Size of Classrooms (in sq mtr)</td>
                            <td class="border border-gray-300 px-4 py-3">36 Classrooms | 589 sq mtr</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">No. and Size of Laboratories including Computer Labs (in sq mtr)</td>
                            <td class="border border-gray-300 px-4 py-3">5 Laboratories | 669 sq mtr</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Internet Facility</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">YES</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">No. of Girls Toilets</td>
                            <td class="border border-gray-300 px-4 py-3">53</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">No. of Boys Toilets</td>
                            <td class="border border-gray-300 px-4 py-3">36</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">YouTube Video of Institutional Inspection</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://youtu.be/rrJq-eqWxSc" target="_blank" class="text-orange-600 hover:underline font-semibold">Watch Video</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- F: Regulatory Compliance -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">F. Regulatory Compliance</h2>
            
            <div class="bg-white rounded-xl shadow-lg p-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Complete Mandatory Disclosure PDF</h3>
                        <p class="text-gray-600">Download the complete mandatory disclosure document as per University guidelines</p>
                    </div>
                    <a href="https://snsacademy.org/MandatoryDisclosurePDF/" target="_blank" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition inline-flex items-center">
                        <i class="fas fa-download mr-2"></i>
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Questions About Our Disclosures?</h2>
            <p class="text-xl mb-8">Contact our office for any queries regarding mandatory disclosures and documentation</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
                    <i class="fas fa-envelope mr-2"></i>
                    Contact Us
                </a>
                <a href="tel:+917550316701" class="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition">
                    <i class="fas fa-phone mr-2"></i>
                    Call: +91 75503 16701
                </a>
            </div>
        </div>
    </section>
  `,Fs=()=>`
    ${A("Campus Gallery","Explore our world-class infrastructure and vibrant campus life","/static/images/hero5.png","Gallery")}

    <!-- Life at SNSCAHS -->
    <section class="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Life @ SNSCAHS</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Where clinical excellence meets academic brilliance!</p>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/pre-primary.png" alt="Little Graduates" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-graduation-cap text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Graduation Ceremony</h3>
                        <p class="text-gray-600">Celebrating the academic clinical success of our future healthcare leaders</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/SNS Academy Web/Colla Work.png" alt="Collaborative Work" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-users text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Collaborative Work</h3>
                        <p class="text-gray-600">Students working together on innovative projects and problem-solving</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                    <div class="h-64 relative overflow-hidden">
                        <img src="/static/images/SNS Academy Web/Happy Envirn.png" alt="Happy Environment" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                            <i class="fas fa-smile-beam text-3xl mb-2"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Nurturing Excellence</h3>
                        <p class="text-gray-600">Fostering a professional and supportive atmosphere where every aspirant thrives</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- School Blocks -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">College Campus</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Advanced campus facilities with specialized clinical labs and research centers</p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-building text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">A Block</h3>
                    <p class="text-gray-700 text-center">Primary academic block with smart classrooms</p>
                </div>
                
                <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-school text-4xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">B Block</h3>
                    <p class="text-gray-700 text-center">Secondary education wing with advanced facilities</p>
                </div>
                
                <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-landmark text-4xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">C Block</h3>
                    <p class="text-gray-700 text-center">Senior secondary and administrative block</p>
                </div>
            </div>

            <div class="grid md:grid-cols-4 gap-6">
                <div class="bg-white rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-hospital-user text-4xl text-indigo-600 mb-3"></i>
                    <h4 class="font-bold">Clinical Reception</h4>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-microscope text-4xl text-blue-600 mb-3"></i>
                    <h4 class="font-bold">Advanced Bio-Labs</h4>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-stethoscope text-4xl text-pink-600 mb-3"></i>
                    <h4 class="font-bold">Diagnostic Wing</h4>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md text-center">
                    <i class="fas fa-search-plus text-4xl text-purple-600 mb-3"></i>
                    <h4 class="font-bold">Research Center</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- Laboratories -->
    <section class="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">State-of-the-Art Laboratories</h2>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-flask text-3xl text-red-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Chemistry Lab</h3>
                    <p class="text-gray-600">Fully-equipped with modern apparatus for hands-on experiments</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-atom text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Physics Lab</h3>
                    <p class="text-gray-600">Advanced equipment for scientific exploration and discovery</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-microscope text-3xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Biology Lab</h3>
                    <p class="text-gray-600">Complete setup for life sciences and biological studies</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-laptop-code text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Computer Lab</h3>
                    <p class="text-gray-600">Latest computers with modern software and internet connectivity</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-calculator text-3xl text-yellow-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Maths Lab</h3>
                    <p class="text-gray-600">Interactive learning tools for mathematical concepts</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-language text-3xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Language Lab</h3>
                    <p class="text-gray-600">Multimedia resources for language skill development</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Other Facilities -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Premium Facilities</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                    <i class="fas fa-briefcase text-4xl text-amber-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Board Room</h3>
                    <p class="text-gray-600 text-sm">Professional meeting space for important discussions</p>
                </div>
                
                <div class="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
                    <i class="fas fa-utensils text-4xl text-rose-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">VIP Dining</h3>
                    <p class="text-gray-600 text-sm">Premium dining facility for guests and special events</p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                    <i class="fas fa-bus text-4xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Transport</h3>
                    <p class="text-gray-600 text-sm">Safe and comfortable school bus service</p>
                </div>
                
                <div class="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6">
                    <i class="fas fa-video text-4xl text-red-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">CCTV Security</h3>
                    <p class="text-gray-600 text-sm">24/7 monitoring for student safety</p>
                </div>
                
                <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
                    <i class="fas fa-solar-panel text-4xl text-yellow-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Solar Powered</h3>
                    <p class="text-gray-600 text-sm">Eco-friendly campus with solar energy</p>
                </div>
                
                <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                    <i class="fas fa-wifi text-4xl text-purple-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Wi-Fi Enabled</h3>
                    <p class="text-gray-600 text-sm">Complete campus connectivity</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Executive Lounge -->
    <section class="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">SLUSH - Executive Lounge</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Premium space for top-performing students</p>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <i class="fas fa-gamepad text-6xl text-indigo-600 mb-6"></i>
                    <h3 class="text-2xl font-bold mb-4">Video Gaming</h3>
                    <p class="text-gray-600">Latest gaming consoles and equipment</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <i class="fas fa-star text-6xl text-yellow-500 mb-6"></i>
                    <h3 class="text-2xl font-bold mb-4">Awe Inspiring</h3>
                    <p class="text-gray-600">Motivational and inspiring environment</p>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <i class="fas fa-film text-6xl text-pink-600 mb-6"></i>
                    <h3 class="text-2xl font-bold mb-4">Entertainment</h3>
                    <p class="text-gray-600">Movies, music, and recreational activities</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Play Area -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Happy Trails - Play Area</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Where imagination comes to life!</p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-gradient-to-br from-pink-100 to-red-100 rounded-xl p-6 text-center">
                    <i class="fas fa-home text-5xl text-pink-600 mb-4"></i>
                    <h3 class="font-bold text-lg">Play Houses</h3>
                </div>
                
                <div class="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 text-center">
                    <i class="fas fa-water text-5xl text-blue-600 mb-4"></i>
                    <h3 class="font-bold text-lg">Aquatics</h3>
                </div>
                
                <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                    <i class="fas fa-puzzle-piece text-5xl text-green-600 mb-4"></i>
                    <h3 class="font-bold text-lg">Mazes</h3>
                </div>
                
                <div class="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-6 text-center">
                    <i class="fas fa-tree text-5xl text-purple-600 mb-4"></i>
                    <h3 class="font-bold text-lg">Jungle Gym</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-4">Experience Our Campus</h2>
            <p class="text-xl mb-8">Schedule a visit to see our world-class infrastructure in person!</p>
            <a href="/contact" class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-block">
                <i class="fas fa-calendar-check mr-2"></i>
                Book Campus Tour
            </a>
        </div>
    </section>
  `,Ws=()=>`
    ${A("Sports & Clubs","Building champions in sports, arts, and life skills","/static/images/gym.jpg","Sports & Clubs")}

    <!-- Sports for Life -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Sports For Life</h2>
            <p class="text-center text-xl text-gray-600 mb-12">
                Well-developed play fields with specialized physical instructors to bring out the best in every student
            </p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-futbol text-4xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Football</h3>
                    <p class="text-gray-600 text-center">Full-sized field with professional coaching</p>
                </div>
                
                <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-table-tennis text-4xl text-yellow-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Tennis & TT</h3>
                    <p class="text-gray-600 text-center">Professional tennis court and table tennis facility</p>
                </div>
                
                <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-baseball-ball text-4xl text-red-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Cricket</h3>
                    <p class="text-gray-600 text-center">All-weather indoor cricket center with nets</p>
                </div>
                
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-basketball-ball text-4xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Basketball</h3>
                    <p class="text-gray-600 text-center">Full court with modern equipment</p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-volleyball-ball text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Volleyball</h3>
                    <p class="text-gray-600 text-center">Indoor and outdoor courts available</p>
                </div>
                
                <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-running text-4xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Athletics</h3>
                    <p class="text-gray-600 text-center">Track events and field sports training</p>
                </div>
                
                <div class="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-swimmer text-4xl text-teal-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Swimming</h3>
                    <p class="text-gray-600 text-center">Ozonized pool with trained coaches</p>
                </div>
                
                <div class="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-dumbbell text-4xl text-pink-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Gym & Fitness</h3>
                    <p class="text-gray-600 text-center">Modern equipment with fitness trainers</p>
                </div>
                
                <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-medal text-4xl text-amber-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-center mb-4">Kabaddi & Kho-Kho</h3>
                    <p class="text-gray-600 text-center">Traditional Indian sports training</p>
                </div>
            </div>

            <div class="bg-green-50 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-center mb-6">Scouts & Guides</h3>
                <div class="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <i class="fas fa-campground text-4xl text-green-600 mb-4"></i>
                        <h4 class="font-bold mb-2">Outdoor Activities</h4>
                        <p class="text-sm text-gray-600">Camping, hiking, and nature exploration</p>
                    </div>
                    <div>
                        <i class="fas fa-hands-helping text-4xl text-blue-600 mb-4"></i>
                        <h4 class="font-bold mb-2">Community Service</h4>
                        <p class="text-sm text-gray-600">Social responsibility and leadership</p>
                    </div>
                    <div>
                        <i class="fas fa-certificate text-4xl text-purple-600 mb-4"></i>
                        <h4 class="font-bold mb-2">Skill Development</h4>
                        <p class="text-sm text-gray-600">Badges, certifications, and achievements</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Clubs & Activities -->
    <section class="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Clubs & Activities</h2>
            <p class="text-center text-xl text-gray-600 mb-12">
                25+ extra-curricular options for holistic development
            </p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-music text-5xl text-purple-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Music Club</h3>
                    <p class="text-sm text-gray-600">Vocal & instrumental training</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-theater-masks text-5xl text-pink-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Dance Club</h3>
                    <p class="text-sm text-gray-600">Classical, western, and folk forms</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-palette text-5xl text-yellow-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Art Club</h3>
                    <p class="text-sm text-gray-600">Painting, drawing, and crafts</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-drama text-5xl text-red-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Drama Club</h3>
                    <p class="text-sm text-gray-600">Theater and public speaking</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-robot text-5xl text-blue-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Robotics Club</h3>
                    <p class="text-sm text-gray-600">STEM and innovation projects</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-chess text-5xl text-gray-700 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Chess Club</h3>
                    <p class="text-sm text-gray-600">Strategic thinking and tournaments</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-book-reader text-5xl text-green-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Literary Club</h3>
                    <p class="text-sm text-gray-600">Reading, writing, and debates</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-flask text-5xl text-orange-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Science Club</h3>
                    <p class="text-sm text-gray-600">Experiments and exhibitions</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-leaf text-5xl text-green-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Eco Club</h3>
                    <p class="text-sm text-gray-600">Environmental awareness activities</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-language text-5xl text-indigo-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Language Club</h3>
                    <p class="text-sm text-gray-600">Hindi, Tamil, French learning</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-camera text-5xl text-purple-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Photography Club</h3>
                    <p class="text-sm text-gray-600">Visual arts and documentation</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-users text-5xl text-blue-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Student Council</h3>
                    <p class="text-sm text-gray-600">Leadership and governance</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-microphone-alt text-5xl text-red-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Toastmasters Club</h3>
                    <p class="text-sm text-gray-600">Public speaking & leadership skills</p>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                    <i class="fas fa-globe-americas text-5xl text-teal-600 mb-4"></i>
                    <h3 class="font-bold text-lg mb-2">Model United Nations</h3>
                    <p class="text-sm text-gray-600">Diplomacy, debate & global issues</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-4">Discover Your Passion</h2>
            <p class="text-xl mb-8">Join our sports teams and clubs to unlock your potential!</p>
            <a href="/admissions" class="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-block">
                <i class="fas fa-trophy mr-2"></i>
                Join SNSCAHS
            </a>
        </div>
    </section>
  `,qs=()=>`
    ${A("Digital Brochure","Download our complete prospectus and learn more about SNS Academy","/static/images/hero.png","Brochure")}

    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center shadow-xl">
                <i class="fas fa-file-pdf text-8xl text-red-600 mb-8"></i>
                <h2 class="text-4xl font-bold mb-4">SNS Academy Prospectus</h2>
                <p class="text-xl text-gray-700 mb-8">
                    Comprehensive guide with complete information about our programs, facilities, admission process, and fees structure.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <a href="https://snsacademy.org/brochure/" target="_blank" class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-download mr-2"></i>
                        Download Brochure
                    </a>
                    <a href="https://snsacademy.org/brochure/" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-external-link-alt mr-2"></i>
                        View Online
                    </a>
                </div>
                
                <p class="text-sm text-gray-600">
                    For printed copies, contact us at <a href="tel:+919629937861" class="text-blue-600 hover:underline">+91 96299 37861</a>
                </p>
            </div>
            
            <div class="mt-12 grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-graduation-cap text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Academic Programs</h3>
                    <p class="text-sm text-gray-600">Nursery to Grade XII curriculum details</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-building text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Facilities Tour</h3>
                    <p class="text-sm text-gray-600">Complete infrastructure overview</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-rupee-sign text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2">Fee Structure</h3>
                    <p class="text-sm text-gray-600">Transparent pricing and payment options</p>
                </div>
            </div>
        </div>
    </section>
  `,Us=()=>`
    ${A("College Transport Services","Safe, comfortable, and punctual transportation for our students","/static/images/hero.png","Transport")}

    <!-- Key Features -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Why Aspirants Trust Our Transport</h2>
                <p class="text-xl text-gray-600">Fleet of 20 buses covering major areas of Coimbatore</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i class="fas fa-bus text-4xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">20 Buses</h3>
                    <p class="text-gray-600">Full fleet of air-conditioned buses</p>
                </div>
                
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i class="fas fa-map-marked-alt text-4xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">GPS Tracking</h3>
                    <p class="text-gray-600">Real-time location monitoring</p>
                </div>
                
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i class="fas fa-shield-alt text-4xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">RFID Cards</h3>
                    <p class="text-gray-600">Safe boarding system</p>
                </div>
                
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center card-hover">
                    <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i class="fas fa-snowflake text-4xl text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Air Conditioned</h3>
                    <p class="text-gray-600">All buses fully AC</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Bus Route Coverage -->
    <section class="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Bus Route Coverage Areas</h2>
                <p class="text-xl text-gray-600 mb-2">We cover major areas across Coimbatore</p>
                <p class="text-lg text-orange-600 font-semibold">🚨 Check if your area is covered before admission!</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                        <i class="fas fa-map-marker-alt mr-3"></i>
                        Central Coimbatore
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>RS Puram</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Race Course</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Town Hall</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Gandhipuram</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Saibaba Colony</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-purple-600 flex items-center">
                        <i class="fas fa-map-marker-alt mr-3"></i>
                        East Coimbatore
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Peelamedu</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Hopes College</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Singanallur</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Ramanathapuram</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Ganapathy</span>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-green-600 flex items-center">
                        <i class="fas fa-map-marker-alt mr-3"></i>
                        West & South
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Vadavalli</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Thudiyalur</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Podanur</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Ukkadam</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span>Kuniyamuthur</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Check Your Area CTA -->
            <div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
                <i class="fas fa-exclamation-circle text-5xl mb-4"></i>
                <h3 class="text-3xl font-bold mb-4">Not Sure If Your Area Is Covered?</h3>
                <p class="text-xl mb-6">Contact our transport coordinator to check route availability for your specific location</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+917550316701" class="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-phone mr-2"></i>
                        Call: +91 75503 16701
                    </a>
                    <a href="/contact" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                        <i class="fas fa-envelope mr-2"></i>
                        Send Inquiry
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Safety Features -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Safety Features</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                    <i class="fas fa-tachometer-alt text-4xl text-red-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">Speed Governor</h3>
                    <p class="text-gray-600">All buses fitted with speed limiters for safety</p>
                </div>
                
                <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                    <i class="fas fa-satellite-dish text-4xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">GPS Tracking</h3>
                    <p class="text-gray-600">Real-time location monitoring system</p>
                </div>
                
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                    <i class="fas fa-id-card text-4xl text-purple-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">RFID System</h3>
                    <p class="text-gray-600">Smart cards for secure boarding</p>
                </div>
                
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <i class="fas fa-first-aid text-4xl text-green-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">First Aid Box</h3>
                    <p class="text-gray-600">Fully equipped medical kit in every bus</p>
                </div>
                
                <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                    <i class="fas fa-user-shield text-4xl text-yellow-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">Trained Staff</h3>
                    <p class="text-gray-600">Caretakers on every bus for student safety</p>
                </div>
                
                <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                    <i class="fas fa-video text-4xl text-indigo-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-3">CCTV Cameras</h3>
                    <p class="text-gray-600">Video surveillance for complete security</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Transport Rules -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-4">Transport Guidelines</h2>
            <p class="text-center text-xl text-gray-600 mb-12">Important information for parents</p>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-blue-600">General Guidelines</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-clock text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Punctuality:</strong> Students must report 5 minutes before bus arrival
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-map-marked-alt text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Designated Stops:</strong> Boarding and deboarding only at authorized stops
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-calendar-alt text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Changes:</strong> Route/stop changes require 1 month advance notice
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-envelope text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Communication:</strong> All requests via official office email only
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 class="text-2xl font-bold mb-6 text-purple-600">For Students</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-user-tie text-purple-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Uniform:</strong> Proper college uniform mandatory
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-id-badge text-purple-600 mt-1 mr-3"></i>
                            <div>
                                <strong>ID Card:</strong> College ID with bus number required
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-ban text-purple-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Prohibited:</strong> Eating, drinking, or loud music in bus
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-users text-purple-600 mt-1 mr-3"></i>
                            <div>
                                <strong>Behavior:</strong> Maintain discipline; misbehavior may cancel service
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Schedule Information -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 text-center">
                <i class="fas fa-clock text-6xl text-blue-600 mb-6"></i>
                <h2 class="text-4xl font-bold mb-4">College Timings</h2>
                <p class="text-xl text-gray-700 mb-6">
                    Buses are scheduled to ensure students arrive by <strong class="text-blue-600">8:15 AM</strong> daily
                </p>
                <p class="text-gray-600 mb-8">
                    Routes are designed to minimize transit time and provide comfortable journeys
                </p>
                <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center">
                    <i class="fas fa-info-circle mr-2"></i>
                    Get Route Schedule
                </a>
            </div>
        </div>
    </section>

    <!-- Contact for Transport -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-4">Need Transport Information?</h2>
            <p class="text-xl mb-8">
                Contact our transport coordinator for route details, availability, and fees
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+917550316701" class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                    <i class="fas fa-phone mr-2"></i>
                    +91 75503 16701
                </a>
                <a href="mailto:office@snscahs.org" class="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                    <i class="fas fa-envelope mr-2"></i>
                    office@snscahs.org
                </a>
            </div>
        </div>
    </section>
  `,Gs=()=>`
    ${A("Events & Celebrations","Experience the vibrant campus life at SNSCAHS through our memorable events and academic clinical meets","/static/images/SNS Academy Web/Events.webp","Events")}

    <!-- Instagram-Style Gallery -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Gallery Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Event 1: Pongal Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-1.cdninstagram.com/v/t51.82787-15/615988042_18341067322235871_4506448674383653617_n.webp?_nc_cat=106&ig_cache_key=MzgxMDI1ODMyOTE2ODcyOTA5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=xNNLWsTZ02YQ7kNvwEu3a_8&_nc_oc=AdnE2Jz4idXUR2xLd8Sv7r4-oDwxPYO34herU5UHNpe3mpxkaWXXhvvY0meI3mu_4Uc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-1.cdninstagram.com&_nc_gid=TxLpu_55NmXdHJ4GP2aRpQ&oh=00_AfvhXQWUUMuamrG7McrkuhqOzxceK1YUqduf40lVqACcDA&oe=69876BAB" alt="Pongal Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Pongal Celebration</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Pongal Celebration</h3>
                            <p class="text-white/90 text-sm mb-3">உங்கள் இல்லங்களிலும் மகிழ்ச்சியும், மனங்களில் நன்றியுணர்வும், வாழ்வில் வளமும் நிறையட்டும். பாரம்பரியமும் பண்பாடும் போற்றப்படும் இந்த நன்னாளில், புதிய நம்பிக்கைகளும் நல்ல தொடக்கங்களும் மலரட்டும். SNS கல்வி நிறுவனங்கள் சார்பாக இனிய பொங்கல் திருநாள் நல்வாழ்த்துகள்!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Jan 2026</span>
                                <span><i class="fas fa-star mr-1"></i> Festival</span>
                            </div>
                            <a href="https://www.instagram.com/p/DTgwcNEk1QH/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                    </div>
                </div>

                <!-- Event 2: Green Day Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-1.cdninstagram.com/v/t51.82787-15/611728039_17911953312271418_5225745699396843246_n.webp?_nc_cat=106&ig_cache_key=MzgwNjY5MDI0MTg3NzYzNTY4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzIwLnNkci5DMyJ9&_nc_ohc=xGaUyz2YMlwQ7kNvwHR9QsT&_nc_oc=Adm3ek1R3q64eopEjFdURx7ZSsSdUSz8b7nqM1IBToWDI0XL-k0mq54F5hiIKmodbZk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-1.cdninstagram.com&_nc_gid=eBHSSBXLsiP3Fka5gDdNAw&oh=00_AftD9HwAS4fNAE1LcVxurYxSvIeqdzrO4_IwQuyUxZL1QQ&oe=698757F0" alt="Green Day Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Green Day Celebration</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Green Day Celebration</h3>
                            <p class="text-white/90 text-sm mb-3">Our students took a step towards sustainability during our Green Day celebrations. Exploring the importance of environmental responsibility in healthcare settings and beyond, we continue to nurture a greener future together.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Jan 2026</span>
                                <span><i class="fas fa-leaf mr-1"></i> Environment</span>
                            </div>
                            <a href="https://www.instagram.com/p/DTUFJ3ID1Ys/?img_index=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Environment</span>
                    </div>
                </div>

                <!-- Event 3: Little Chef -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa3-4.cdninstagram.com/v/t51.82787-15/612048914_18340162762235871_4589295776461399701_n.webp?_nc_cat=102&ig_cache_key=MzgwMzczNDU2NjQyMzk5Nzg0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzIwLnNkci5DMyJ9&_nc_ohc=SwoO0anUKZgQ7kNvwEHAjv7&_nc_oc=AdlC_Uqv_FiZKiEzwi762K48ex6vOXRjieKviXApXfKnCdjMK5tGDm5QzNUoPKqs050&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-4.cdninstagram.com&_nc_gid=mVC0gIw4aY5kbTMyjoe5MA&oh=00_AfsFFHCh3RLa_9-7AKNCISkZjzdzzalBvPIMPLUFawZlZw&oe=69877F45" alt="Little Chef Activity" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Little Chef</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Culinary Meets</h3>
                            <p class="text-white/90 text-sm mb-3">Promoting health and nutrition, our students engaged in culinary workshops focusing on balanced diets and clinical nutrition. Engaging in hands-on learning, they explored the intersection of food and healthcare excellence.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Jan 2026</span>
                                <span><i class="fas fa-utensils mr-1"></i> Nutrition</span>
                            </div>
                            <a href="https://www.instagram.com/p/DTJlHSKExme/?img_index=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">Activity</span>
                    </div>
                </div>

                <!-- Event 4: Happy New Year -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-2.cdninstagram.com/v/t51.82787-15/608763132_18339603499235871_232124846933807831_n.webp?_nc_cat=108&ig_cache_key=MzgwMDA2NTYxNjY0MTIwNDg3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=MgP7BhFMCiEQ7kNvwHjUq7Q&_nc_oc=AdmWZQS89EIXg4arDrqUqPWAZfcKsOg6359mmUheylwKnCOOqe2kAw9iX47C9oOvU24&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-2.cdninstagram.com&_nc_gid=eBHSSBXLsiP3Fka5gDdNAw&oh=00_Afs6gR-NS9dM3eqL5tlIEmNMw8QouFbpeUUehiraw8mwog&oe=6987788F" alt="Happy New Year" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Happy New Year</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Happy New Year</h3>
                            <p class="text-white/90 text-sm mb-3">Happy New Year from SNS Institutions! "Empowering Minds. Shaping Futures. Welcome to New Beginnings." Wishing everyone a year filled with growth, excellence, and positivity.</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Jan 2026</span>
                                <span><i class="fas fa-star mr-1"></i> Celebration</span>
                            </div>
                            <a href="https://www.instagram.com/p/DS8i4tzEyKO/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">Celebration</span>
                    </div>
                </div>

                <!-- Event 5: Christmas Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa3-1.cdninstagram.com/v/t51.82787-15/605713373_18338808703235871_6262506903073291867_n.webp?_nc_cat=101&ig_cache_key=Mzc5NTAwMDEzNzUyMjI5NzU5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=tPHRHvy0ZdUQ7kNvwHjYL5H&_nc_oc=AdkEZVRvbsnFllt4znon8-m4kjJAC9kjtUcNBQLLjfFY3MmN97bGj2ljTjTqO3lX0_M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-1.cdninstagram.com&_nc_gid=SMeZyFwDQ6zdYvow83ynIw&oh=00_Afsxm20KSAvu0pQGczXsW754UTbufIywSaXeeuI4EqSvSg&oe=6987ADA1" alt="Christmas Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Christmas Celebration</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Christmas Celebration</h3>
                            <p class="text-white/90 text-sm mb-3">May this festive season fill your hearts with joy, peace, and goodwill. Wishing everyone a Christmas filled with love, happiness, and new beginnings. Warm Christmas wishes from SNS Institutions!!!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Dec 2025</span>
                                <span><i class="fas fa-gift mr-1"></i> Festival</span>
                            </div>
                            <a href="https://www.instagram.com/p/DSqjISvkzr3/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                    </div>
                </div>

                <!-- Event 6: Educational Tour -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://scontent-maa5-2.cdninstagram.com/v/t51.82787-15/600926622_18338297017235871_4661934839550693_n.webp?_nc_cat=108&ig_cache_key=Mzc5MTQ0MDEwMzUyOTk3OTM2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNzl4NzE5LnNkci5DMyJ9&_nc_ohc=hj6nIL29W-gQ7kNvwH6fa6p&_nc_oc=Adn2izmgrMj0wJvaoenoDA4Z8oVyZEYWScjV9qu9RYkMwMa4dymbXpg6j5aqtsYdwus&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-2.cdninstagram.com&_nc_gid=SMeZyFwDQ6zdYvow83ynIw&oh=00_AftllX9COVfNADSiq96pbuZ3I7MCjUEczOw5dRbT4Vt8Nw&oe=6987A25D" alt="Educational Tour" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <!-- Always visible title -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 class="text-white font-bold text-2xl">Educational Tour</h3>
                    </div>
                    <!-- Hover overlay with full details -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <h3 class="text-white font-bold text-2xl mb-2">Educational Tour</h3>
                            <p class="text-white/90 text-sm mb-3">Our Mid Wing students of SNS Academy enjoyed an enriching educational tour to Thekkady, where learning met nature and adventure. From exploring the Periyar Wildlife Sanctuary to understanding biodiversity and conservation firsthand, the experience went beyond textbooks. Filled with teamwork, joy, and unforgettable memories!</p>
                            <div class="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                <span><i class="fas fa-calendar mr-1"></i> Dec 2025</span>
                                <span><i class="fas fa-hiking mr-1"></i> Thekkady</span>
                            </div>
                            <a href="https://www.instagram.com/p/DSd5rGBEwpi/?img_index=1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                <i class="fas fa-arrow-right mr-2"></i> Read More
                            </a>
                        </div>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Educational Tour</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Be Part of Our Vibrant Community</h2>
            <p class="text-xl text-gray-600 mb-8">
                Join SNS College of Allied Health Sciences and create professional networks and lifelong memories!
            </p>
            <a href="/admissions" class="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition">
                <i class="fas fa-pen-to-square mr-2"></i>
                Apply for Admission
            </a>
        </div>
    </section>
  `,Ys=()=>`
    ${A("Success Stories","Celebrating the achievements, breakthroughs, and inspiring journeys of our students who are making their mark in the world","/static/images/SNS Academy Web/Success.webp","Success Stories")}

    <!-- Featured Story -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden shadow-2xl">
                <div class="grid lg:grid-cols-2 gap-8">
                    <div class="h-96 lg:h-auto relative overflow-hidden">
                        <img src="https://scontent-maa3-2.cdninstagram.com/v/t51.82787-15/618548952_17913080631271418_4275555023929199059_n.webp?_nc_cat=110&ig_cache_key=MzgxNDEzNTM1MDc3MjYyMjE5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=qL3MgYlQMwsQ7kNvwFRBblW&_nc_oc=Adnyply_5YwqDHFFfjCmwR3y9kdAaViAA18ZLBpmiNAJ8OKMSlQHOWWq8obsflCUyno&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-2.cdninstagram.com&_nc_gid=Ub07e9jp45HNLRXJHY7Zmw&oh=00_AfucDmHsYEG1wNs0iP4NQkOwDav0Oap6l_ndXzK01eckrA&oe=698790DD" alt="Book of Record" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-award mr-2"></i>
                                <span class="text-sm font-semibold">Book of Record</span>
                            </div>
                            <p class="text-xs opacity-90">Dinamalar Pattam - Final Round</p>
                        </div>
                    </div>
                    <div class="p-8 lg:p-12 flex flex-col justify-center">
                        <div class="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                            <i class="fas fa-star mr-2"></i>
                            Featured Story
                        </div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-4">Book of Record Achievement</h2>
                        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                            The Dinamalar Pattam – Final Round was successfully held at SNS College of Allied Health Sciences. The event concluded on a high note with prizes presented by Pavan Kumar, District Collector, Coimbatore, along with Dr. Nalin, Technical Director, SNS Institutions.
                        </p>
                        <div class="flex items-center text-sm text-gray-600 mb-6">
                            <span class="font-semibold mr-4">SNSCAHS</span>
                            <span class="mr-4">•</span>
                            <span>Award Ceremony</span>
                            <span class="mr-4 ml-4">•</span>
                            <span>Jan 2026</span>
                        </div>
                        <a href="https://www.instagram.com/p/DTuh-S0D-N0/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-purple-600 hover:text-purple-700 font-bold">
                            Read Full Story <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Story Categories -->
    <section class="py-8 bg-gray-50 border-y">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-center gap-4">
                <button id="tab-all" class="tab-button px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">All Stories</button>
                <button id="tab-academic" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Academic Excellence</button>
                <button id="tab-sports" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Sports Champions</button>
                <button id="tab-innovation" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Innovation Leaders</button>
                <button id="tab-community" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Community Impact</button>
                <button id="tab-arts" class="tab-button px-6 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition border">Arts Excellence</button>
            </div>
        </div>
    </section>

    <!-- Stories Grid (Edutopia-style) -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div id="stories-container" class="grid lg:grid-cols-3 gap-8">
            <div id="stories-container" class="grid lg:grid-cols-3 gap-8">
                <!-- Stories will be dynamically loaded here -->
            </div>
        </div>
    </section>

    <script>
        // Story data organized by categories
        const stories = {
            academic: [
                {
                    title: "Award Ceremony - Dinamalar Pattam",
                    description: "The Dinamalar Pattam – Final Round was successfully held at SNS Academy. The event concluded on a high note with prizes presented by Pavan Kumar, District Collector, Coimbatore, along with Dr. Nalin, Technical Director, SNS Institutions.",
                    image: "https://scontent-maa3-2.cdninstagram.com/v/t51.82787-15/626891271_18344067850235871_1200955119167657763_n.webp?_nc_cat=110&ig_cache_key=MzgyNDA2ODExMTg0NzYwNDczNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNzl4NzE5LnNkci5DMyJ9&_nc_ohc=imXjG4cdVmsQ7kNvwGqq_yg&_nc_oc=AdnK4WzY-XG-lSMFN_S34f7N4fb3U3JLWATVPcI8wsZ5y8r_uqjbRsT4WKT62ncWDdk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-2.cdninstagram.com&_nc_gid=Ub07e9jp45HNLRXJHY7Zmw&oh=00_AfuoX1uSIlRO_7mn6t9MhTY8K2_KnHizCmIHqR9wTTso8A&oe=6987641B",
                    date: "January 2026",
                    category: "Academic",
                    color: "blue",
                    link: "https://www.instagram.com/p/DUR0kWYE8Zr/?img_index=1"
                },
                {
                    title: "Book of Record - Dinamalar Pattam Final",
                    description: "The Dinamalar Pattam – Final Round was successfully held at SNS Academy. The event concluded on a high note with prizes presented by Pavan Kumar, District Collector, Coimbatore, along with Dr. Nalin, Technical Director, SNS Institutions.",
                    image: "https://scontent-maa3-2.cdninstagram.com/v/t51.82787-15/618548952_17913080631271418_4275555023929199059_n.webp?_nc_cat=110&ig_cache_key=MzgxNDEzNTM1MDc3MjYyMjE5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=qL3MgYlQMwsQ7kNvwFRBblW&_nc_oc=Adnyply_5YwqDHFFfjCmwR3y9kdAaViAA18ZLBpmiNAJ8OKMSlQHOWWq8obsflCUyno&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-2.cdninstagram.com&_nc_gid=Ub07e9jp45HNLRXJHY7Zmw&oh=00_AfucDmHsYEG1wNs0iP4NQkOwDav0Oap6l_ndXzK01eckrA&oe=698790DD",
                    date: "January 2026",
                    category: "Academic",
                    color: "blue",
                    link: "https://www.instagram.com/p/DTuh-S0D-N0/"
                },
                {
                    title: "Chess Championship - District Level Winner",
                    description: "Hats off to S. Lakshan of Grade III, of SNS Academy for dominating the board and emerging as the Champion at the District Level Children's Chess Tournament! His strategic mind and focus are truly remarkable. We are thrilled to celebrate his brilliant victory! Way to go, Lakshan!",
                    image: "https://scontent-maa3-4.cdninstagram.com/v/t51.82787-15/604081912_17909866551271418_8637630666294558801_n.webp?_nc_cat=102&ig_cache_key=Mzc5MzU1NTQyNjMwMzQ4MDc5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=juJrhcGP48kQ7kNvwFv4eM2&_nc_oc=Adm2H91h59iGs5TJJAs5_OghcuzC8nC70bzV9PD3SbpNSsDo0Xu-Ud6wld_LxUB-UPw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-4.cdninstagram.com&_nc_gid=92vzA0E3IgpdlBU0520mWg&oh=00_AftWtCfBAdbctc3bHfZ9sHfOiqR_xAPyZZZBmifqM4x4Dg&oe=69878C70",
                    date: "December 2025",
                    category: "Academic",
                    color: "blue",
                    link: "https://www.instagram.com/p/DSlao-kkxPY/"
                }
            ],
            sports: [
                {
                    title: "Silambam Championship - State Level Silver",
                    description: "We are proud to applaud D. Akshara of Grade IV for her remarkable achievement at the State Level Silambam Championship 2025, securing 2nd place! Her dedication, disciplined training, and skill in this ancient martial art truly inspire us. Congratulations, Akshara — keep shining and making SNS Academy proud.",
                    image: "https://scontent-maa3-4.cdninstagram.com/v/t51.82787-15/602266882_18338402344235871_1239359804105916608_n.webp?_nc_cat=102&ig_cache_key=Mzc5MjE5MTY3OTA4NTQwMDI5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=FYu6kqQ4dEIQ7kNvwFCkC6p&_nc_oc=AdmFZumBH2qv0pFb5gcotrpZBQiGrkCD7n9vT8lvFBS6G-x_1e6bymbELm-12zG9G8g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-4.cdninstagram.com&_nc_gid=92vzA0E3IgpdlBU0520mWg&oh=00_Afticl9DSlYbAKkNqhH7L25gE_6Ejw_i7xFebb54EQr6Vg&oe=6987892D",
                    date: "December 2025",
                    category: "Sports",
                    color: "green",
                    link: "https://www.instagram.com/p/DSgkj2AE9Dk/"
                }
            ],
            innovation: [],
            community: [
                {
                    title: "Advanced clinical Meet - Healthy Living Initiative",
                    description: "Our aspirants from SNSCAHS, joyfully stepped into the role of clinical experts during a health awareness drive. This delightful activity encouraged creativity, teamwork, and awareness about clinical nutrition—making learning both professional and meaningful. A truly heartwarming experience where healthcare met community wellbeing!",
                    image: "https://scontent-maa3-4.cdninstagram.com/v/t51.82787-15/612048914_18340162762235871_4589295776461399701_n.webp?_nc_cat=102&ig_cache_key=MzgwMzczNDU2NjQyMzk5Nzg0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzIwLnNkci5DMyJ9&_nc_ohc=SwoO0anUKZgQ7kNvwEHAjv7&_nc_oc=AdlC_Uqv_FiZKiEzwi762K48ex6vOXRjieKviXApXfKnCdjMK5tGDm5QzNUoPKqs050&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa3-4.cdninstagram.com&_nc_gid=mVC0gIw4aY5kbTMyjoe5MA&oh=00_AfsFFHCh3RLa_9-7AKNCISkZjzdzzalBvPIMPLUFawZlZw&oe=69877F45",
                    date: "January 2026",
                    category: "Community",
                    color: "orange",
                    link: "https://www.instagram.com/p/DTJlHSKExme/?img_index=1"
                }
            ],
            arts: [],
            leadership: [
                {
                    title: "Young Changemakers Program - IIM Ranchi",
                    description: "Heartfelt congratulations to S. Prithvi Kumar for representing SNS Institutions at Young Changemakers Program (YCP 4.0), IIM Ranchi. Selected among the top 100 students worldwide, this is a step towards impactful leadership and innovation in healthcare. Keep inspiring!",
                    image: "https://scontent-maa5-1.cdninstagram.com/v/t51.82787-15/589723456_18338450581235871_1039230672173446056_n.webp?_nc_cat=105&ig_cache_key=Mzc5MjUxODkyMDg3Mjg1ODU3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=vcsfKL74i8oQ7kNvwECSgZD&_nc_oc=AdlUt4RZ_zNsZfqsoOdnhHO6SWMnGxREOfukW1XNuNeF6ntrtL77o7wVtggCcwr1Odg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-maa5-1.cdninstagram.com&_nc_gid=92vzA0E3IgpdlBU0520mWg&oh=00_AfuLq9WKsZiCwkC0m8Rb-O3ZzDQJGrbsta7665UIMEXcMg&oe=69878A90",
                    date: "December 2025",
                    category: "Leadership",
                    color: "indigo",
                    link: "https://www.instagram.com/p/DShu91qkxPO/"
                }
            ]
        };

        // Function to create story HTML
        function createStoryHTML(story) {
            const readMoreLink = story.link || '#';
            const linkTarget = story.link ? 'target="_blank" rel="noopener noreferrer"' : '';
            return \`
                <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div class="h-56 relative overflow-hidden">
                        <img src="\${story.image}" alt="\${story.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute top-4 left-4">
                            <span class="bg-\${story.color}-600 text-white px-3 py-1 rounded-full text-xs font-bold">\${story.category}</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-\${story.color}-600 transition">\${story.title}</h3>
                        <p class="text-gray-600 mb-4 leading-relaxed">
                            \${story.description}
                        </p>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <i class="fas fa-calendar mr-2"></i>
                            <span>\${story.date}</span>
                        </div>
                        <a href="\${readMoreLink}" \${linkTarget} class="text-\${story.color}-600 hover:text-\${story.color}-700 font-semibold flex items-center">
                            Read More <i class="fas fa-arrow-right ml-2 text-sm"></i>
                        </a>
                    </div>
                </article>
            \`;
        }

        // Function to display stories
        function displayStories(category = 'all') {
            const container = document.getElementById('stories-container');
            let storiesToShow = [];

            if (category === 'all') {
                // Show all stories from all categories
                Object.values(stories).forEach(categoryStories => {
                    storiesToShow = storiesToShow.concat(categoryStories);
                });
            } else {
                storiesToShow = stories[category] || [];
            }

            container.innerHTML = storiesToShow.map(story => createStoryHTML(story)).join('');
        }

        // Function to handle tab switching
        function switchTab(activeTab) {
            // Update tab buttons
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('bg-blue-600', 'text-white');
                button.classList.add('bg-white', 'text-gray-700', 'border');
            });

            const activeButton = document.getElementById(\`tab-\${activeTab}\`);
            activeButton.classList.remove('bg-white', 'text-gray-700', 'border');
            activeButton.classList.add('bg-blue-600', 'text-white');

            // Display stories for the selected category
            displayStories(activeTab);
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Display all stories initially
            displayStories('all');

            // Add event listeners to tab buttons
            document.getElementById('tab-all').addEventListener('click', () => switchTab('all'));
            document.getElementById('tab-academic').addEventListener('click', () => switchTab('academic'));
            document.getElementById('tab-sports').addEventListener('click', () => switchTab('sports'));
            document.getElementById('tab-innovation').addEventListener('click', () => switchTab('innovation'));
            document.getElementById('tab-community').addEventListener('click', () => switchTab('community'));
            document.getElementById('tab-arts').addEventListener('click', () => switchTab('arts'));
        });
    <\/script>

    ${zt()}

    <!-- CTA Section -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Write Your Own Success Story</h2>
            <p class="text-xl text-gray-600 mb-8">
                Join SNS College of Allied Health Sciences and become part of our legacy of excellence, innovation, and healthcare achievement!
            </p>
            <a href="/admissions" class="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition">
                <i class="fas fa-pen-to-square mr-2"></i>
                Start Your Journey
            </a>
        </div>
    </section>
  `,Vs=()=>`
    ${A("Your Pathway to Stanford","We equip students with our patented GenAI-powered Design Thinking framework and the mindset to excel at elite universities worldwide","/static/images/stanford_workshop.jpg","Stanford Pathway")}

    <!-- Stanford-Trained Faculty -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <div class="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                     <div class="rounded-2xl overflow-hidden shadow-2xl relative">
                        <img src="/static/images/SNS Academy Web/Stanford-Trained Faculty.png" alt="Stanford Trained Faculty" class="w-full h-full object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                            <p class="text-white font-bold text-lg">World-Class Mentorship</p>
                            <p class="text-gray-300 text-sm">Direct guidance from industry experts</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Stanford-Trained Faculty</h2>
                    <p class="text-xl text-gray-600 leading-relaxed mb-8">
                        Our educators have been directly trained by Stanford University alumni in design thinking, innovation, and entrepreneurial mindset development. They bring world-class methodologies directly to the classroom.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start group">
                            <div class="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-orange-600 transition duration-300">
                                <i class="fas fa-chalkboard-teacher text-2xl text-orange-600 group-hover:text-white transition duration-300"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Design Thinking Mastery</h3>
                                <p class="text-gray-600">Stanford's proven 5-stage process: Empathize, Define, Ideate, Prototype, Test.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start group">
                            <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-blue-600 transition duration-300">
                                <i class="fas fa-lightbulb text-2xl text-blue-600 group-hover:text-white transition duration-300"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Innovation Labs</h3>
                                <p class="text-gray-600">Hands-on projects using Stanford's d.school methodology for creative problem-solving.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start group">
                            <div class="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:bg-green-600 transition duration-300">
                                <i class="fas fa-rocket text-2xl text-green-600 group-hover:text-white transition duration-300"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Entrepreneurial Mindset</h3>
                                <p class="text-gray-600">Startup thinking and lean methodology for young innovators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Roadmap -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">The Roadmap</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Your Journey to Excellence</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    A structured 4-year undergraduate journey, building the foundation for global clinical excellence and research.
                </p>
            </div>

            <div class="space-y-12">
                <!-- Stage 1 -->
                 <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                    <div class="grid md:grid-cols-12 gap-8 relative z-10">
                        <div class="md:col-span-4">
                            <div class="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold mb-4">Stage 1</div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">Immersion Stage</h3>
                            <p class="text-lg text-gray-500 font-medium mb-6">Year 1 - Year 2</p>
                            <p class="text-gray-600 leading-relaxed">
                                Diving deep into clinical fundamentals and design thinking applications in healthcare systems.
                            </p>
                        </div>
                        <div class="md:col-span-8 grid sm:grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-bullseye text-orange-600 mr-2"></i> Objectives</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Curiosity & Wonder Development</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Creative Thinking & Exploration</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Collaboration & Communication</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-cogs text-orange-600 mr-2"></i> Methods</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Project-Based Learning</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Storytelling & Creative Arts</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Hands-On STEM Activities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stage 2 -->
                <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                     <div class="grid md:grid-cols-12 gap-8 relative z-10">
                        <div class="md:col-span-4">
                            <div class="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4">Stage 2</div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">Specialization Stage</h3>
                            <p class="text-lg text-gray-500 font-medium mb-6">Year 3</p>
                            <p class="text-gray-600 leading-relaxed">
                                Mastering advanced clinical procedures and leading innovation projects to solve complex medical challenges.
                            </p>
                        </div>
                        <div class="md:col-span-8 grid sm:grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-bullseye text-blue-600 mr-2"></i> Objectives</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Design Thinking Framework Mastery</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Critical Thinking & Analysis</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Leadership & Teamwork</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-cogs text-blue-600 mr-2"></i> Methods</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Stanford Design Challenges</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Innovation Labs & Prototyping</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Hackathons & Competitions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stage 3 -->
                <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                     <div class="grid md:grid-cols-12 gap-8 relative z-10">
                        <div class="md:col-span-4">
                            <div class="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-bold mb-4">Stage 3</div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">Leadership Stage</h3>
                            <p class="text-lg text-gray-500 font-medium mb-6">Year 4 (Internship)</p>
                            <p class="text-gray-600 leading-relaxed">
                                Demonstrating clinical leadership, finalizing patents, and launching healthcare innovations on a global scale.
                            </p>
                        </div>
                        <div class="md:col-span-8 grid sm:grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-8">
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-bullseye text-red-600 mr-2"></i> Objectives</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Advanced Research & Innovation</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Entrepreneurial Mindset</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Global Competency</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 mb-4 flex items-center"><i class="fas fa-cogs text-red-600 mr-2"></i> Methods</h4>
                                <ul class="space-y-3 text-gray-600 text-sm">
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Real-World Startup Projects</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Patents & Publications</li>
                                    <li class="flex items-start"><span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>Alumni Mentorship</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- OKR Framework -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-bold text-gray-900 mb-6">OKRs (Objectives & Key Results)</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    We use Stanford-style goal-setting frameworks to track student progress and ensure excellence.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition duration-300 group text-center">
                    <div class="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                        <i class="fas fa-graduation-cap text-3xl text-red-600"></i>
                    </div>
                    <div class="text-4xl font-bold text-gray-900 mb-2">95%+</div>
                    <p class="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Clinical Excellence</p>
                    <p class="text-gray-500 text-sm">Target Proficiency in Diagnostics</p>
                </div>

                <div class="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition duration-300 group text-center">
                    <div class="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                        <i class="fas fa-lightbulb text-3xl text-orange-600"></i>
                    </div>
                    <div class="text-4xl font-bold text-gray-900 mb-2">5+</div>
                    <p class="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">Innovation Projects</p>
                    <p class="text-gray-500 text-sm">Real-World Solutions Per Year</p>
                </div>

                <div class="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition duration-300 group text-center">
                    <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                        <i class="fas fa-trophy text-3xl text-blue-600"></i>
                    </div>
                    <div class="text-4xl font-bold text-gray-900 mb-2">3+</div>
                    <p class="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Key Competitions</p>
                    <p class="text-gray-500 text-sm">National & International Awards</p>
                </div>

                <div class="p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition duration-300 group text-center">
                    <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                        <i class="fas fa-users text-3xl text-green-600"></i>
                    </div>
                    <div class="text-4xl font-bold text-gray-900 mb-2">100%</div>
                    <p class="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">Leadership</p>
                    <p class="text-gray-500 text-sm">Student Council or Club Role</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Design Thinking Playbook & BMC -->
    <section class="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">The Toolkit</span>
                    <h2 class="text-4xl font-bold mb-6">Mastering the Tools of Innovation</h2>
                    <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                        We don't just teach theory. We equip students with powerful frameworks like the Design Thinking Playbook and Business Model Canvas (BMC) to deconstruct problems and build viable ventures.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                             <i class="fas fa-book-reader text-2xl text-orange-500 mt-1 mr-4"></i>
                             <div>
                                 <h4 class="text-xl font-bold mb-2">Design Thinking Playbook</h4>
                                 <p class="text-gray-400 text-sm">A comprehensive guide covering Empathize, Define, Ideate, Prototype, and Test phases with actionable worksheets.</p>
                             </div>
                        </div>
                        <div class="flex items-start">
                             <i class="fas fa-chart-pie text-2xl text-blue-500 mt-1 mr-4"></i>
                             <div>
                                 <h4 class="text-xl font-bold mb-2">Business Model Canvas</h4>
                                 <p class="text-gray-400 text-sm">A strategic management template for developing new business models: Value Props, Customer Segments, Revenue Streams, and more.</p>
                             </div>
                        </div>
                    </div>

                    <div class="mt-10">
                         <a href="/contact" class="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg border border-transparent hover:border-orange-400">
                            <i class="fas fa-download mr-2"></i>
                            Request Complete Playbook
                        </a>
                    </div>
                </div>
                
                <div class="relative">
                    <!-- abstract visual representation of BMC -->
                    <div class="grid grid-cols-3 gap-2 p-4 bg-white/10 backdrop-blur rounded-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition duration-500">
                        <div class="col-span-1 bg-blue-500/20 rounded-lg p-4 h-24 flex items-center justify-center"><i class="fas fa-handshake text-2xl text-blue-400"></i></div>
                        <div class="col-span-1 bg-green-500/20 rounded-lg p-4 h-24 flex items-center justify-center"><i class="fas fa-tasks text-2xl text-green-400"></i></div>
                        <div class="row-span-2 bg-orange-500/20 rounded-lg p-4 flex items-center justify-center"><i class="fas fa-gift text-4xl text-orange-400"></i></div>
                        <div class="col-span-1 bg-purple-500/20 rounded-lg p-4 h-24 flex items-center justify-center"><i class="fas fa-users text-2xl text-purple-400"></i></div>
                        <div class="col-span-1 bg-pink-500/20 rounded-lg p-4 h-24 flex items-center justify-center"><i class="fas fa-heart text-2xl text-pink-400"></i></div>
                        <div class="col-span-1 bg-yellow-500/20 rounded-lg p-4 h-20 flex items-center justify-center"><i class="fas fa-tag text-2xl text-yellow-400"></i></div>
                        <div class="col-span-2 bg-red-500/20 rounded-lg p-4 h-20 flex items-center justify-center"><i class="fas fa-chart-line text-2xl text-red-400"></i></div>
                    </div>
                     <p class="text-center text-gray-500 text-sm mt-4">Interactive Business Model Canvas Framework</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-white relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Begin Your Stanford Pathway Today</h2>
            <p class="text-xl lg:text-2xl mb-12 text-gray-600 font-light max-w-2xl mx-auto">
                Join India's first Design Thinking Allied Health Sciences college and get trained by industry experts to achieve your professional dreams.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/admissions" class="inline-flex items-center justify-center bg-orange-600 text-white hover:bg-orange-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                    Apply for Admission
                </a>
                <a href="/contact" class="inline-flex items-center justify-center bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-900 hover:text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition">
                    Schedule Visit
                </a>
            </div>
        </div>
    </section>
  `;var ee=class extends Error{constructor(e,t){super(e,t),this.name="RequestError"}},$s=e=>e instanceof ee?e:new ee(e.message,{cause:e}),Ks=global.Request,_e=class extends Ks{constructor(t,s){var a;typeof t=="object"&&we in t&&(t=t[we]()),typeof((a=s==null?void 0:s.body)==null?void 0:a.getReader)<"u"&&(s.duplex??(s.duplex="half")),super(t,s)}},Zs=e=>{const t=[],s=e.rawHeaders;for(let a=0;a<s.length;a+=2){const{[a]:r,[a+1]:i}=s;r.charCodeAt(0)!==58&&t.push([r,i])}return new Headers(t)},Ht=Symbol("wrapBodyStream"),Qs=(e,t,s,a,r)=>{const i={method:e,headers:s,signal:r.signal};if(e==="TRACE"){i.method="GET";const o=new _e(t,i);return Object.defineProperty(o,"method",{get(){return"TRACE"}}),o}if(!(e==="GET"||e==="HEAD"))if("rawBody"in a&&a.rawBody instanceof Buffer)i.body=new ReadableStream({start(o){o.enqueue(a.rawBody),o.close()}});else if(a[Ht]){let o;i.body=new ReadableStream({async pull(n){try{o||(o=dt.toWeb(a).getReader());const{done:d,value:c}=await o.read();d?n.close():n.enqueue(c)}catch(d){n.error(d)}}})}else i.body=dt.toWeb(a);return new _e(t,i)},we=Symbol("getRequestCache"),Xe=Symbol("requestCache"),qe=Symbol("incomingKey"),Ge=Symbol("urlKey"),et=Symbol("headersKey"),G=Symbol("abortControllerKey"),Js=Symbol("getAbortController"),$e={get method(){return this[qe].method||"GET"},get url(){return this[Ge]},get headers(){return this[et]||(this[et]=Zs(this[qe]))},[Js](){return this[we](),this[G]},[we](){return this[G]||(this[G]=new AbortController),this[Xe]||(this[Xe]=Qs(this.method,this[Ge],this.headers,this[qe],this[G]))}};["body","bodyUsed","cache","credentials","destination","integrity","mode","redirect","referrer","referrerPolicy","signal","keepalive"].forEach(e=>{Object.defineProperty($e,e,{get(){return this[we]()[e]}})});["arrayBuffer","blob","clone","formData","json","text"].forEach(e=>{Object.defineProperty($e,e,{value:function(){return this[we]()[e]()}})});Object.setPrototypeOf($e,_e.prototype);var Xs=(e,t)=>{const s=Object.create($e);s[qe]=e;const a=e.url||"";if(a[0]!=="/"&&(a.startsWith("http://")||a.startsWith("https://"))){if(e instanceof Oe)throw new ee("Absolute URL for :path is not allowed in HTTP/2");try{const n=new URL(a);s[Ge]=n.href}catch(n){throw new ee("Invalid absolute URL",{cause:n})}return s}const r=(e instanceof Oe?e.authority:e.headers.host)||t;if(!r)throw new ee("Missing host header");let i;if(e instanceof Oe){if(i=e.scheme,!(i==="http"||i==="https"))throw new ee("Unsupported scheme")}else i=e.socket&&e.socket.encrypted?"https":"http";const o=new URL(`${i}://${r}${a}`);if(o.hostname.length!==r.length&&o.hostname!==r.replace(/:\d+$/,""))throw new ee("Invalid host header");return s[Ge]=o.href,s},Le=Symbol("responseCache"),ge=Symbol("getResponseCache"),te=Symbol("cache"),rt=global.Response,Me,B,ye,Pe=(ye=class{constructor(t,s){m(this,Me);m(this,B);let a;if(h(this,Me,t),s instanceof ye){const r=s[Le];if(r){h(this,B,r),this[ge]();return}else h(this,B,l(s,B)),a=new Headers(l(s,B).headers)}else h(this,B,s);(typeof t=="string"||typeof(t==null?void 0:t.getReader)<"u"||t instanceof Blob||t instanceof Uint8Array)&&(a||(a=(s==null?void 0:s.headers)||{"content-type":"text/plain; charset=UTF-8"}),this[te]=[(s==null?void 0:s.status)||200,t,a])}[ge](){return delete this[te],this[Le]||(this[Le]=new rt(l(this,Me),l(this,B)))}get headers(){const t=this[te];return t?(t[2]instanceof Headers||(t[2]=new Headers(t[2])),t[2]):this[ge]().headers}get status(){var t;return((t=this[te])==null?void 0:t[0])??this[ge]().status}get ok(){const t=this.status;return t>=200&&t<300}},Me=new WeakMap,B=new WeakMap,ye);["body","bodyUsed","redirected","statusText","trailers","type","url"].forEach(e=>{Object.defineProperty(Pe.prototype,e,{get(){return this[ge]()[e]}})});["arrayBuffer","blob","clone","formData","json","text"].forEach(e=>{Object.defineProperty(Pe.prototype,e,{value:function(){return this[ge]()[e]()}})});Object.setPrototypeOf(Pe,rt);Object.setPrototypeOf(Pe.prototype,rt.prototype);async function ea(e){return Promise.race([e,Promise.resolve().then(()=>Promise.resolve(void 0))])}function Lt(e,t,s){const a=n=>{e.cancel(n).catch(()=>{})};return t.on("close",a),t.on("error",a),(s??e.read()).then(o,r),e.closed.finally(()=>{t.off("close",a),t.off("error",a)});function r(n){n&&t.destroy(n)}function i(){e.read().then(o,r)}function o({done:n,value:d}){try{if(n)t.end();else if(!t.write(d))t.once("drain",i);else return e.read().then(o,r)}catch(c){r(c)}}}function ta(e,t){if(e.locked)throw new TypeError("ReadableStream is locked.");return t.destroyed?void 0:Lt(e.getReader(),t)}var Ot=e=>{const t={};e instanceof Headers||(e=new Headers(e??void 0));const s=[];for(const[a,r]of e)a==="set-cookie"?s.push(r):t[a]=r;return s.length>0&&(t["set-cookie"]=s),t["content-type"]??(t["content-type"]="text/plain; charset=UTF-8"),t},sa="x-hono-already-sent";typeof global.crypto>"u"&&(global.crypto=Kt);var it=Symbol("outgoingEnded"),aa=()=>new Response(null,{status:400}),Bt=e=>new Response(null,{status:e instanceof Error&&(e.name==="TimeoutError"||e.constructor.name==="TimeoutError")?504:500}),st=(e,t)=>{const s=e instanceof Error?e:new Error("unknown error",{cause:e});s.code==="ERR_STREAM_PREMATURE_CLOSE"?console.info("The user aborted a request."):(console.error(e),t.headersSent||t.writeHead(500,{"Content-Type":"text/plain"}),t.end(`Error: ${s.message}`),t.destroy(s))},Ft=e=>{"flushHeaders"in e&&e.writable&&e.flushHeaders()},Wt=async(e,t)=>{var i,o;let[s,a,r]=e[te];r instanceof Headers&&(r=Ot(r)),typeof a=="string"?r["Content-Length"]=Buffer.byteLength(a):a instanceof Uint8Array?r["Content-Length"]=a.byteLength:a instanceof Blob&&(r["Content-Length"]=a.size),t.writeHead(s,r),typeof a=="string"||a instanceof Uint8Array?t.end(a):a instanceof Blob?t.end(new Uint8Array(await a.arrayBuffer())):(Ft(t),await((i=ta(a,t))==null?void 0:i.catch(n=>st(n,t)))),(o=t[it])==null||o.call(t)},ra=e=>typeof e.then=="function",ia=async(e,t,s={})=>{var r;if(ra(e))if(s.errorHandler)try{e=await e}catch(i){const o=await s.errorHandler(i);if(!o)return;e=o}else e=await e.catch(Bt);if(te in e)return Wt(e,t);const a=Ot(e.headers);if(e.body){const i=e.body.getReader(),o=[];let n=!1,d;if(a["transfer-encoding"]!=="chunked"){let c=2;for(let x=0;x<c;x++){d||(d=i.read());const g=await ea(d).catch(b=>{console.error(b),n=!0});if(!g){if(x===1){await new Promise(b=>setTimeout(b)),c=3;continue}break}if(d=void 0,g.value&&o.push(g.value),g.done){n=!0;break}}n&&!("content-length"in a)&&(a["content-length"]=o.reduce((x,g)=>x+g.length,0))}t.writeHead(e.status,a),o.forEach(c=>{t.write(c)}),n?t.end():(o.length===0&&Ft(t),await Lt(i,t,d))}else a[sa]||(t.writeHead(e.status,a),t.end());(r=t[it])==null||r.call(t)},oa=(e,t={})=>{const s=t.autoCleanupIncoming??!0;return t.overrideGlobalObjects!==!1&&global.Request!==_e&&(Object.defineProperty(global,"Request",{value:_e}),Object.defineProperty(global,"Response",{value:Pe})),async(a,r)=>{let i,o;try{o=Xs(a,t.hostname);let n=!s||a.method==="GET"||a.method==="HEAD";if(n||(a[Ht]=!0,a.on("end",()=>{n=!0}),a instanceof Oe&&(r[it]=()=>{n||setTimeout(()=>{n||setTimeout(()=>{a.destroy(),r.destroy()})})})),r.on("close",()=>{o[G]&&(a.errored?o[G].abort(a.errored.toString()):r.writableFinished||o[G].abort("Client connection prematurely closed.")),n||setTimeout(()=>{n||setTimeout(()=>{a.destroy()})})}),i=e(o,{incoming:a,outgoing:r}),te in i)return Wt(i,r)}catch(n){if(i)return st(n,r);if(t.errorHandler){if(i=await t.errorHandler(o?n:$s(n)),!i)return}else o?i=Bt(n):i=aa()}try{return await ia(i,r,t)}catch(n){return st(n,r)}}},la=e=>{const t=e.fetch,s=oa(t,{hostname:e.hostname,overrideGlobalObjects:e.overrideGlobalObjects,autoCleanupIncoming:e.autoCleanupIncoming});return(e.createServer||$t)(e.serverOptions||{},s)},na=(e,t)=>{const s=la(e);return s.listen((e==null?void 0:e.port)??3e3,e.hostname,()=>{s.address()}),s},da={};const u=new Nt;u.get("/health",e=>e.text("Hono is running!"));u.get("/api/test",e=>e.json({status:"ok",runtime:"edge"}));u.use("/api/*",Ds());u.post("/api/admission-inquiry",async e=>{const t=await e.req.json();return console.log("Admission Inquiry:",t),e.json({success:!0,message:"Thank you! Our admissions team will contact you within 24 hours."})});u.get("/",e=>e.html(S(Es(),"Home","home")));u.get("/courses/cardiac-technology",e=>e.html(S(Is(),"B.Sc. Cardiac Technology","courses-cardiac")));u.get("/courses/physician-assistant",e=>e.html(S(Ms(),"B.Sc. Physician Assistant","courses-physician")));u.get("/courses/radiography",e=>e.html(S(Ps(),"B.Sc. Radiography & Imaging Technology","courses-radiography")));u.get("/courses/operation-theatre",e=>{const t=`
    ${A("B.Sc. Operation Theatre & Anesthesia Technology","Specialized training in surgical assistance, sterilization protocols, and anesthesia equipment management for clinical excellence.","/static/images/secondary.png","B.Sc. OT & Anesthesia Technology (4 Years)")}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold mb-6">Program Excellence</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        The B.Sc. in Operation Theatre and Anesthesia Technology program at SNS College of Allied Health Sciences prepares students to become highly skilled professionals who support surgical teams and manage anesthesia protocols in specialized medical environments.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our curriculum integrates Design Thinking to foster empathy and innovative problem-solving in the high-stakes environment of the operating room, ensuring patient safety and clinical efficiency.
                    </p>
                </div>
                <div class="bg-green-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6">Program Objectives</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Mastery of Surgical Sterilization & Hygiene</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Anesthesia Equipment Management</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Clinical Excellence in PT Monitoring</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Emergency & Trauma Care Protocols</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;return e.html(S(t,"B.Sc. Operation Theatre & Anesthesia Technology","courses-operation-theatre"))});u.get("/facilities",e=>e.html(S(Ns(),"Facilities","facilities")));u.get("/innovation",e=>e.html(S(zs(),"Innovation Hub","innovation")));u.get("/about",e=>e.html(S(Hs(),"About Us","about")));u.get("/contact",e=>e.html(S(Ls(),"Contact Us","contact")));u.get("/mandatory-disclosure",e=>e.html(S(Bs(),"Mandatory Disclosure","mandatory-disclosure")));u.get("/admissions",e=>e.html(S(Os(),"Admissions","admissions")));u.get("/gallery",e=>e.html(S(Fs(),"Campus Gallery","gallery")));u.get("/sports-clubs",e=>e.html(S(Ws(),"Sports & Clubs","sports-clubs")));u.get("/brochure",e=>e.html(S(qs(),"Digital Brochure","brochure")));u.get("/transport",e=>e.html(S(Us(),"Transport Services","transport")));u.get("/events",e=>e.html(S(Gs(),"Events & Celebrations","events")));u.get("/success-stories",e=>e.html(S(Ys(),"Success Stories","success-stories")));u.get("/stanford-pathway",e=>e.html(S(Vs(),"Pathway to Stanford","stanford-pathway")));{const e=Number(da.PORT)||3e3;console.log(`Server is running on port ${e}`),na({fetch:u.fetch,port:e})}const ht=new Nt,ca=Object.assign({"/src/index.tsx":u});let qt=!1;for(const[,e]of Object.entries(ca))e&&(ht.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ht.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),qt=!0);if(!qt)throw new Error("Can't import modules from ['/src/index.tsx']");export{ht as default};
