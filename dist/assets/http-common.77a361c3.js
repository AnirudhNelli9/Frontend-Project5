var nt=Object.defineProperty,at=Object.defineProperties;var it=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var st=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var ce=(t,e,r)=>e in t?nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,R=(t,e)=>{for(var r in e||(e={}))st.call(e,r)&&ce(t,r,e[r]);if(fe)for(var r of fe(e))ot.call(e,r)&&ce(t,r,e[r]);return t},g=(t,e)=>at(t,it(e));import{g as K,h as Ae,m as ge,i as xe,j as Ne}from"./index.565fc2ce.js";const Q=["sm","md","lg","xl","xxl"],$e=(()=>Q.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),Pe=(()=>Q.reduce((t,e)=>(t["offset"+K(e)]={type:[String,Number],default:null},t),{}))(),Te=(()=>Q.reduce((t,e)=>(t["order"+K(e)]={type:[String,Number],default:null},t),{}))(),de={col:Object.keys($e),offset:Object.keys(Pe),order:Object.keys(Te)};function ut(t,e,r){let a=t;if(!(r==null||r===!1))return e&&(a+=`-${e.replace(t,"")}`),t==="col"&&(a="v-"+a),t==="col"&&(r===""||r===!0)||(a+=`-${r}`),a.toLowerCase()}const Br=Ae({name:"VCol",props:R(g(R(g(R(g(R({cols:{type:[Boolean,String,Number],default:!1}},$e),{offset:{type:[String,Number],default:null}}),Pe),{order:{type:[String,Number],default:null}}),Te),{alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)}}),ge()),setup(t,e){let{slots:r}=e;const a=xe(()=>{const n=[];let i;for(i in de)de[i].forEach(u=>{const l=t[u],c=ut(i,u,l);c&&n.push(c)});const s=n.some(u=>u.startsWith("v-col-"));return n.push({"v-col":!s||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return Ne(t.tag,{class:a.value},(n=r.default)==null?void 0:n.call(r))}}}),lt=["sm","md","lg","xl","xxl"],Y=["start","end","center"];function Z(t,e){return lt.reduce((r,a)=>(r[t+K(a)]=e(),r),{})}const _e=t=>[...Y,"baseline","stretch"].includes(t),De=Z("align",()=>({type:String,default:null,validator:_e})),Be=t=>[...Y,"space-between","space-around"].includes(t),Le=Z("justify",()=>({type:String,default:null,validator:Be})),Ue=t=>[...Y,"space-between","space-around","stretch"].includes(t),je=Z("alignContent",()=>({type:String,default:null,validator:Ue})),he={align:Object.keys(De),justify:Object.keys(Le),alignContent:Object.keys(je)},ft={align:"align",justify:"justify",alignContent:"align-content"};function ct(t,e,r){let a=ft[t];if(r!=null)return e&&(a+=`-${e.replace(t,"")}`),a+=`-${r}`,a.toLowerCase()}const Lr=Ae({name:"VRow",props:R(R(g(R(g(R({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_e}},De),{justify:{type:String,default:null,validator:Be}}),Le),{alignContent:{type:String,default:null,validator:Ue}}),je),ge()),setup(t,e){let{slots:r}=e;const a=xe(()=>{const n=[];let i;for(i in he)he[i].forEach(s=>{const u=t[s],l=ct(i,s,u);l&&n.push(l)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return Ne(t.tag,{class:["v-row",a.value]},(n=r.default)==null?void 0:n.call(r))}}});var ee={exports:{}},ke=function(e,r){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(r,n)}},dt=ke,te=Object.prototype.toString,re=function(t){return function(e){var r=te.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function C(t){return t=t.toLowerCase(),function(r){return re(r)===t}}function ne(t){return Array.isArray(t)}function j(t){return typeof t=="undefined"}function ht(t){return t!==null&&!j(t)&&t.constructor!==null&&!j(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Fe=C("ArrayBuffer");function pt(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Fe(t.buffer),e}function mt(t){return typeof t=="string"}function vt(t){return typeof t=="number"}function qe(t){return t!==null&&typeof t=="object"}function L(t){if(re(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var Et=C("Date"),yt=C("File"),bt=C("Blob"),Rt=C("FileList");function ae(t){return te.call(t)==="[object Function]"}function wt(t){return qe(t)&&ae(t.pipe)}function Ot(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||te.call(t)===e||ae(t.toString)&&t.toString()===e)}var St=C("URLSearchParams");function Ct(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function At(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ie(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),ne(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function X(){var t={};function e(n,i){L(t[i])&&L(n)?t[i]=X(t[i],n):L(n)?t[i]=X({},n):ne(n)?t[i]=n.slice():t[i]=n}for(var r=0,a=arguments.length;r<a;r++)ie(arguments[r],e);return t}function gt(t,e,r){return ie(e,function(n,i){r&&typeof n=="function"?t[i]=dt(n,r):t[i]=n}),t}function xt(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function Nt(t,e,r,a){t.prototype=Object.create(e.prototype,a),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function $t(t,e,r){var a,n,i,s={};e=e||{};do{for(a=Object.getOwnPropertyNames(t),n=a.length;n-- >0;)i=a[n],s[i]||(e[i]=t[i],s[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function Pt(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var a=t.indexOf(e,r);return a!==-1&&a===r}function Tt(t){if(!t)return null;var e=t.length;if(j(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var _t=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:ne,isArrayBuffer:Fe,isBuffer:ht,isFormData:Ot,isArrayBufferView:pt,isString:mt,isNumber:vt,isObject:qe,isPlainObject:L,isUndefined:j,isDate:Et,isFile:yt,isBlob:bt,isFunction:ae,isStream:wt,isURLSearchParams:St,isStandardBrowserEnv:At,forEach:ie,merge:X,extend:gt,trim:Ct,stripBOM:xt,inherits:Nt,toFlatObject:$t,kindOf:re,kindOfTest:C,endsWith:Pt,toArray:Tt,isTypedArray:_t,isFileList:Rt},x=h;function pe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ie=function(e,r,a){if(!r)return e;var n;if(a)n=a(r);else if(x.isURLSearchParams(r))n=r.toString();else{var i=[];x.forEach(r,function(l,c){l===null||typeof l=="undefined"||(x.isArray(l)?c=c+"[]":l=[l],x.forEach(l,function(f){x.isDate(f)?f=f.toISOString():x.isObject(f)&&(f=JSON.stringify(f)),i.push(pe(c)+"="+pe(f))}))}),n=i.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Dt=h;function k(){this.handlers=[]}k.prototype.use=function(e,r,a){return this.handlers.push({fulfilled:e,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};k.prototype.forEach=function(e){Dt.forEach(this.handlers,function(a){a!==null&&e(a)})};var Bt=k,Lt=h,Ut=function(e,r){Lt.forEach(e,function(n,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[i])})},Me=h;function $(t,e,r,a,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),a&&(this.request=a),n&&(this.response=n)}Me.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var He=$.prototype,Ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Ve[t]={value:t}});Object.defineProperties($,Ve);Object.defineProperty(He,"isAxiosError",{value:!0});$.from=function(t,e,r,a,n,i){var s=Object.create(He);return Me.toFlatObject(t,s,function(l){return l!==Error.prototype}),$.call(s,t.message,e,r,a,n),s.name=t.name,i&&Object.assign(s,i),s};var _=$,Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},b=h;function jt(t,e){e=e||new FormData;var r=[];function a(i){return i===null?"":b.isDate(i)?i.toISOString():b.isArrayBuffer(i)||b.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,s){if(b.isPlainObject(i)||b.isArray(i)){if(r.indexOf(i)!==-1)throw Error("Circular reference detected in "+s);r.push(i),b.forEach(i,function(l,c){if(!b.isUndefined(l)){var o=s?s+"."+c:c,f;if(l&&!s&&typeof l=="object"){if(b.endsWith(c,"{}"))l=JSON.stringify(l);else if(b.endsWith(c,"[]")&&(f=b.toArray(l))){f.forEach(function(v){!b.isUndefined(v)&&e.append(o,a(v))});return}}n(l,o)}}),r.pop()}else e.append(s,a(i))}return n(t),e}var We=jt,V=_,kt=function(e,r,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):r(new V("Request failed with status code "+a.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))},B=h,Ft=B.isStandardBrowserEnv()?function(){return{write:function(r,a,n,i,s,u){var l=[];l.push(r+"="+encodeURIComponent(a)),B.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),B.isString(i)&&l.push("path="+i),B.isString(s)&&l.push("domain="+s),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),qt=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},It=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Mt=qt,Ht=It,ze=function(e,r){return e&&!Mt(r)?Ht(e,r):r},J=h,Vt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Jt=function(e){var r={},a,n,i;return e&&J.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=J.trim(u.substr(0,i)).toLowerCase(),n=J.trim(u.substr(i+1)),a){if(r[a]&&Vt.indexOf(a)>=0)return;a==="set-cookie"?r[a]=(r[a]?r[a]:[]).concat([n]):r[a]=r[a]?r[a]+", "+n:n}}),r},me=h,Wt=me.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function n(i){var s=i;return e&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=n(window.location.href),function(s){var u=me.isString(s)?n(s):s;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}(),G=_,zt=h;function Xe(t){G.call(this,t==null?"canceled":t,G.ERR_CANCELED),this.name="CanceledError"}zt.inherits(Xe,G,{__CANCEL__:!0});var F=Xe,Xt=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""},D=h,Gt=kt,Kt=Ft,Qt=Ie,Yt=ze,Zt=Jt,er=Wt,tr=Je,w=_,rr=F,nr=Xt,ve=function(e){return new Promise(function(a,n){var i=e.data,s=e.headers,u=e.responseType,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}D.isFormData(i)&&D.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(f+":"+v)}var p=Yt(e.baseURL,e.url);o.open(e.method.toUpperCase(),Qt(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ue(){if(!!o){var y="getAllResponseHeaders"in o?Zt(o.getAllResponseHeaders()):null,A=!u||u==="text"||u==="json"?o.responseText:o.response,S={data:A,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};Gt(function(H){a(H),c()},function(H){n(H),c()},S),o=null}}if("onloadend"in o?o.onloadend=ue:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ue)},o.onabort=function(){!o||(n(new w("Request aborted",w.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var A=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",S=e.transitional||tr;e.timeoutErrorMessage&&(A=e.timeoutErrorMessage),n(new w(A,S.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,o)),o=null},D.isStandardBrowserEnv()){var le=(e.withCredentials||er(p))&&e.xsrfCookieName?Kt.read(e.xsrfCookieName):void 0;le&&(s[e.xsrfHeaderName]=le)}"setRequestHeader"in o&&D.forEach(s,function(A,S){typeof i=="undefined"&&S.toLowerCase()==="content-type"?delete s[S]:o.setRequestHeader(S,A)}),D.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!o||(n(!y||y&&y.type?new rr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),i||(i=null);var M=nr(p);if(M&&["http","https","file"].indexOf(M)===-1){n(new w("Unsupported protocol "+M+":",w.ERR_BAD_REQUEST,e));return}o.send(i)})},ar=null,d=h,Ee=Ut,ye=_,ir=Je,sr=We,or={"Content-Type":"application/x-www-form-urlencoded"};function be(t,e){!d.isUndefined(t)&&d.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function ur(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ve),t}function lr(t,e,r){if(d.isString(t))try{return(e||JSON.parse)(t),d.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(t)}var q={transitional:ir,adapter:ur(),transformRequest:[function(e,r){if(Ee(r,"Accept"),Ee(r,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return be(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var a=d.isObject(e),n=r&&r["Content-Type"],i;if((i=d.isFileList(e))||a&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return sr(i?{"files[]":e}:e,s&&new s)}else if(a||n==="application/json")return be(r,"application/json"),lr(e);return e}],transformResponse:[function(e){var r=this.transitional||q.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(i)throw s.name==="SyntaxError"?ye.from(s,ye.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ar},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(e){q.headers[e]={}});d.forEach(["post","put","patch"],function(e){q.headers[e]=d.merge(or)});var se=q,fr=h,cr=se,dr=function(e,r,a){var n=this||cr;return fr.forEach(a,function(s){e=s.call(n,e,r)}),e},Ge=function(e){return!!(e&&e.__CANCEL__)},Re=h,W=dr,hr=Ge,pr=se,mr=F;function z(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new mr}var vr=function(e){z(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=Re.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Re.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||pr.adapter;return r(e).then(function(n){return z(e),n.data=W.call(e,n.data,n.headers,e.transformResponse),n},function(n){return hr(n)||(z(e),n&&n.response&&(n.response.data=W.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,Ke=function(e,r){r=r||{};var a={};function n(o,f){return E.isPlainObject(o)&&E.isPlainObject(f)?E.merge(o,f):E.isPlainObject(f)?E.merge({},f):E.isArray(f)?f.slice():f}function i(o){if(E.isUndefined(r[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function s(o){if(!E.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(E.isUndefined(r[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function l(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var c={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return E.forEach(Object.keys(e).concat(Object.keys(r)),function(f){var v=c[f]||i,p=v(f);E.isUndefined(p)&&v!==l||(a[f]=p)}),a},Qe={version:"0.27.2"},Er=Qe.version,O=_,oe={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){oe[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var we={};oe.transitional=function(e,r,a){function n(i,s){return"[Axios v"+Er+"] Transitional option '"+i+"'"+s+(a?". "+a:"")}return function(i,s,u){if(e===!1)throw new O(n(s," has been removed"+(r?" in "+r:"")),O.ERR_DEPRECATED);return r&&!we[s]&&(we[s]=!0,console.warn(n(s," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,s,u):!0}};function yr(t,e,r){if(typeof t!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(t),n=a.length;n-- >0;){var i=a[n],s=e[i];if(s){var u=t[i],l=u===void 0||s(u,i,t);if(l!==!0)throw new O("option "+i+" must be "+l,O.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new O("Unknown option "+i,O.ERR_BAD_OPTION)}}var br={assertOptions:yr,validators:oe},Ye=h,Rr=Ie,Oe=Bt,Se=vr,I=Ke,wr=ze,Ze=br,N=Ze.validators;function P(t){this.defaults=t,this.interceptors={request:new Oe,response:new Oe}}P.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=I(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&Ze.assertOptions(a,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(i=i&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var u;if(!i){var l=[Se,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(s),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var c=r;n.length;){var o=n.shift(),f=n.shift();try{c=o(c)}catch(v){f(v);break}}try{u=Se(c)}catch(v){return Promise.reject(v)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};P.prototype.getUri=function(e){e=I(this.defaults,e);var r=wr(e.baseURL,e.url);return Rr(r,e.params,e.paramsSerializer)};Ye.forEach(["delete","get","head","options"],function(e){P.prototype[e]=function(r,a){return this.request(I(a||{},{method:e,url:r,data:(a||{}).data}))}});Ye.forEach(["post","put","patch"],function(e){function r(a){return function(i,s,u){return this.request(I(u||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}P.prototype[e]=r(),P.prototype[e+"Form"]=r(!0)});var Or=P,Sr=F;function T(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(a){if(!!r._listeners){var n,i=r._listeners.length;for(n=0;n<i;n++)r._listeners[n](a);r._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(s){r.subscribe(s),n=s}).then(a);return i.cancel=function(){r.unsubscribe(n)},i},t(function(n){r.reason||(r.reason=new Sr(n),e(r.reason))})}T.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};T.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};T.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};T.source=function(){var e,r=new T(function(n){e=n});return{token:r,cancel:e}};var Cr=T,Ar=function(e){return function(a){return e.apply(null,a)}},gr=h,xr=function(e){return gr.isObject(e)&&e.isAxiosError===!0},Ce=h,Nr=ke,U=Or,$r=Ke,Pr=se;function et(t){var e=new U(t),r=Nr(U.prototype.request,e);return Ce.extend(r,U.prototype,e),Ce.extend(r,e),r.create=function(n){return et($r(t,n))},r}var m=et(Pr);m.Axios=U;m.CanceledError=F;m.CancelToken=Cr;m.isCancel=Ge;m.VERSION=Qe.version;m.toFormData=We;m.AxiosError=_;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=Ar;m.isAxiosError=xr;ee.exports=m;ee.exports.default=m;var Tr=ee.exports,tt="";tt="/api/";var Ur=Tr.create({baseURL:tt,headers:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",crossDomain:!0}});export{Br as V,Lr as a,Ur as h};
