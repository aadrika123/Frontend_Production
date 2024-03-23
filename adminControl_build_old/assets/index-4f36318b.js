import{r as a,c as K,d as O,b as W,B as X}from"./router-b87f8164.js";import{r as tt}from"./react-5403e0b7.js";import{Q as et,a as rt}from"./reactQuery-8705a202.js";import{d as ot}from"./reactQueryDevtools-9a5be7d4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();var q={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=a,at=Symbol.for("react.element"),it=Symbol.for("react.fragment"),nt=Object.prototype.hasOwnProperty,lt=st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ct={key:!0,ref:!0,__self:!0,__source:!0};function H(t,e,o){var n,s={},r=null,l=null;o!==void 0&&(r=""+o),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)nt.call(e,n)&&!ct.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:at,type:t,key:r,ref:l,props:s,_owner:lt.current}}D.Fragment=it;D.jsx=H;D.jsxs=H;q.exports=D;var i=q.exports,V={},C=tt;V.createRoot=C.createRoot,V.hydrateRoot=C.hydrateRoot;const dt="modulepreload",ut=function(t,e){return t[0]==="."?new URL(t,e).href:t},N={},p=function(e,o,n){if(!o||o.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=ut(r,n),r in N)return;N[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!n)for(let m=s.length-1;m>=0;m--){const f=s[m];if(f.href===r&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":dt,l||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),l)return new Promise((m,f)=>{d.addEventListener("load",m),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})};let pt={data:""},mt=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||pt,ft=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ht=/\/\*[^]*?\*\/|  +/g,B=/\n+/g,E=(t,e)=>{let o="",n="",s="";for(let r in t){let l=t[r];r[0]=="@"?r[1]=="i"?o=r+" "+l+";":n+=r[1]=="f"?E(l,r):r+"{"+E(l,r[1]=="k"?"":e)+"}":typeof l=="object"?n+=E(l,e?e.replace(/([^,])+/g,c=>r.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,c):c?c+" "+u:u)):r):l!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=E.p?E.p(r,l):r+":"+l+";")}return o+(e&&s?e+"{"+s+"}":s)+n},x={},J=t=>{if(typeof t=="object"){let e="";for(let o in t)e+=o+J(t[o]);return e}return t},_t=(t,e,o,n,s)=>{let r=J(t),l=x[r]||(x[r]=(u=>{let d=0,m=11;for(;d<u.length;)m=101*m+u.charCodeAt(d++)>>>0;return"go"+m})(r));if(!x[l]){let u=r!==t?t:(d=>{let m,f,_=[{}];for(;m=ft.exec(d.replace(ht,""));)m[4]?_.shift():m[3]?(f=m[3].replace(B," ").trim(),_.unshift(_[0][f]=_[0][f]||{})):_[0][m[1]]=m[2].replace(B," ").trim();return _[0]})(t);x[l]=E(s?{["@keyframes "+l]:u}:u,o?"":"."+l)}let c=o&&x.g?x.g:null;return o&&(x.g=x[l]),((u,d,m,f)=>{f?d.data=d.data.replace(f,u):d.data.indexOf(u)===-1&&(d.data=m?u+d.data:d.data+u)})(x[l],e,n,c),l},yt=(t,e,o)=>t.reduce((n,s,r)=>{let l=e[r];if(l&&l.call){let c=l(o),u=c&&c.props&&c.props.className||/^go/.test(c)&&c;l=u?"."+u:c&&typeof c=="object"?c.props?"":E(c,""):c===!1?"":c}return n+s+(l??"")},"");function A(t){let e=this||{},o=t.call?t(e.p):t;return _t(o.unshift?o.raw?yt(o,[].slice.call(arguments,1),e.p):o.reduce((n,s)=>Object.assign(n,s&&s.call?s(e.p):s),{}):o,mt(e.target),e.g,e.o,e.k)}let Q,S,$;A.bind({g:1});let v=A.bind({k:1});function gt(t,e,o,n){E.p=e,Q=t,S=o,$=n}function b(t,e){let o=this||{};return function(){let n=arguments;function s(r,l){let c=Object.assign({},r),u=c.className||s.className;o.p=Object.assign({theme:S&&S()},c),o.o=/ *go\d+/.test(u),c.className=A.apply(o,n)+(u?" "+u:""),e&&(c.ref=l);let d=t;return t[0]&&(d=c.as||t,delete c.as),$&&d[0]&&$(c),Q(d,c)}return e?e(s):s}}var xt=t=>typeof t=="function",M=(t,e)=>xt(t)?t(e):t,vt=(()=>{let t=0;return()=>(++t).toString()})(),G=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Et=20,T=new Map,bt=1e3,F=t=>{if(T.has(t))return;let e=setTimeout(()=>{T.delete(t),j({type:4,toastId:t})},bt);T.set(t,e)},jt=t=>{let e=T.get(t);e&&clearTimeout(e)},k=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,Et)};case 1:return e.toast.id&&jt(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:o}=e;return t.toasts.find(r=>r.id===o.id)?k(t,{type:1,toast:o}):k(t,{type:0,toast:o});case 3:let{toastId:n}=e;return n?F(n):t.toasts.forEach(r=>{F(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===n||n===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},I=[],P={toasts:[],pausedAt:void 0},j=t=>{P=k(P,t),I.forEach(e=>{e(P)})},wt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Rt=(t={})=>{let[e,o]=a.useState(P);a.useEffect(()=>(I.push(o),()=>{let s=I.indexOf(o);s>-1&&I.splice(s,1)}),[e]);let n=e.toasts.map(s=>{var r,l;return{...t,...t[s.type],...s,duration:s.duration||((r=t[s.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||wt[s.type],style:{...t.style,...(l=t[s.type])==null?void 0:l.style,...s.style}}});return{...e,toasts:n}},Ot=(t,e="blank",o)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(o==null?void 0:o.id)||vt()}),R=t=>(e,o)=>{let n=Ot(e,t,o);return j({type:2,toast:n}),n.id},y=(t,e)=>R("blank")(t,e);y.error=R("error");y.success=R("success");y.loading=R("loading");y.custom=R("custom");y.dismiss=t=>{j({type:3,toastId:t})};y.remove=t=>j({type:4,toastId:t});y.promise=(t,e,o)=>{let n=y.loading(e.loading,{...o,...o==null?void 0:o.loading});return t.then(s=>(y.success(M(e.success,s),{id:n,...o,...o==null?void 0:o.success}),s)).catch(s=>{y.error(M(e.error,s),{id:n,...o,...o==null?void 0:o.error})}),t};var Lt=(t,e)=>{j({type:1,toast:{id:t,height:e}})},Tt=()=>{j({type:5,time:Date.now()})},It=t=>{let{toasts:e,pausedAt:o}=Rt(t);a.useEffect(()=>{if(o)return;let r=Date.now(),l=e.map(c=>{if(c.duration===1/0)return;let u=(c.duration||0)+c.pauseDuration-(r-c.createdAt);if(u<0){c.visible&&y.dismiss(c.id);return}return setTimeout(()=>y.dismiss(c.id),u)});return()=>{l.forEach(c=>c&&clearTimeout(c))}},[e,o]);let n=a.useCallback(()=>{o&&j({type:6,time:Date.now()})},[o]),s=a.useCallback((r,l)=>{let{reverseOrder:c=!1,gutter:u=8,defaultPosition:d}=l||{},m=e.filter(h=>(h.position||d)===(r.position||d)&&h.height),f=m.findIndex(h=>h.id===r.id),_=m.filter((h,w)=>w<f&&h.visible).length;return m.filter(h=>h.visible).slice(...c?[_+1]:[0,_]).reduce((h,w)=>h+(w.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:Lt,startPause:Tt,endPause:n,calculateOffset:s}}},Pt=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Mt=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Dt=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,At=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Pt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Mt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Dt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,zt=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Vt=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${zt} 1s linear infinite;
`,St=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,$t=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,kt=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${St} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${$t} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ct=b("div")`
  position: absolute;
`,Nt=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Bt=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ft=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Bt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ut=({toast:t})=>{let{icon:e,type:o,iconTheme:n}=t;return e!==void 0?typeof e=="string"?a.createElement(Ft,null,e):e:o==="blank"?null:a.createElement(Nt,null,a.createElement(Vt,{...n}),o!=="loading"&&a.createElement(Ct,null,o==="error"?a.createElement(At,{...n}):a.createElement(kt,{...n})))},Wt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,qt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ht="0%{opacity:0;} 100%{opacity:1;}",Jt="0%{opacity:1;} 100%{opacity:0;}",Qt=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Gt=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Yt=(t,e)=>{let o=t.includes("top")?1:-1,[n,s]=G()?[Ht,Jt]:[Wt(o),qt(o)];return{animation:e?`${v(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Zt=a.memo(({toast:t,position:e,style:o,children:n})=>{let s=t.height?Yt(t.position||e||"top-center",t.visible):{opacity:0},r=a.createElement(Ut,{toast:t}),l=a.createElement(Gt,{...t.ariaProps},M(t.message,t));return a.createElement(Qt,{className:t.className,style:{...s,...o,...t.style}},typeof n=="function"?n({icon:r,message:l}):a.createElement(a.Fragment,null,r,l))});gt(a.createElement);var Kt=({id:t,className:e,style:o,onHeightUpdate:n,children:s})=>{let r=a.useCallback(l=>{if(l){let c=()=>{let u=l.getBoundingClientRect().height;n(t,u)};c(),new MutationObserver(c).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return a.createElement("div",{ref:r,className:e,style:o},s)},Xt=(t,e)=>{let o=t.includes("top"),n=o?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:G()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(o?1:-1)}px)`,...n,...s}},te=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,L=16,ee=({reverseOrder:t,position:e="top-center",toastOptions:o,gutter:n,children:s,containerStyle:r,containerClassName:l})=>{let{toasts:c,handlers:u}=It(o);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:L,left:L,right:L,bottom:L,pointerEvents:"none",...r},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(d=>{let m=d.position||e,f=u.calculateOffset(d,{reverseOrder:t,gutter:n,defaultPosition:e}),_=Xt(m,f);return a.createElement(Kt,{id:d.id,key:d.id,onHeightUpdate:u.updateHeight,className:d.visible?te:"",style:_},d.type==="custom"?M(d.message,d):s?s(d):a.createElement(Zt,{toast:d,position:m}))}))},qe=y;const re=a.createContext("");const He=(t,e)=>{localStorage.setItem(t,e)},Je=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},Qe=t=>{const e=localStorage.getItem(t);return e||null},U=t=>{const e=localStorage.getItem(t);try{return e?JSON.parse(e):null}catch{return null}},Ge=t=>{localStorage.clear()},oe=a.lazy(()=>p(()=>import("./Login-d2c7bf83.js"),["/assets/Login-e4615527.css"],import.meta.url)),se=a.lazy(()=>p(()=>import("./Home-3e692ebe.js"),[],import.meta.url)),ae=a.lazy(()=>p(()=>import("./ProtectedRoutes-b4587339.js"),["/assets/ProtectedRoutes-2ca5915d.css"],import.meta.url)),ie=a.lazy(()=>p(()=>import("./WorkflowSidebar-22618f72.js"),["/assets/ShimmerTable-9d8896e8.css","/assets/WorkflowSidebar-66cea161.css"],import.meta.url)),ne=a.lazy(()=>p(()=>import("./SpIndex-3591ac07.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),le=a.lazy(()=>p(()=>import("./FaqIndex-e3b64bd3.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),ce=a.lazy(()=>p(()=>import("./ErrorPage-ed6021a7.js"),["/assets/ErrorPage-21b32a13.css"],import.meta.url)),de=a.lazy(()=>p(()=>import("./UserRole-87aefdd2.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),ue=a.lazy(()=>p(()=>import("./index-c1a363b7.js"),[],import.meta.url)),pe=a.lazy(()=>p(()=>import("./ConstructionMaster-9bae7d99.js"),[],import.meta.url)),me=a.lazy(()=>p(()=>import("./FloorMaster-ffb02dc8.js"),[],import.meta.url)),fe=a.lazy(()=>p(()=>import("./ObjectionMaster-515bccae.js"),[],import.meta.url)),he=a.lazy(()=>p(()=>import("./UsageType-c684d913.js"),[],import.meta.url)),_e=a.lazy(()=>p(()=>import("./GbBuildingMaster-aba39f90.js"),[],import.meta.url)),ye=a.lazy(()=>p(()=>import("./OccupancyMaster-1abd156a.js"),[],import.meta.url)),ge=a.lazy(()=>p(()=>import("./PropertyMaster-8e7be218.js"),[],import.meta.url)),xe=a.lazy(()=>p(()=>import("./GbpropusageMaster-09dd148b.js"),[],import.meta.url)),ve=a.lazy(()=>p(()=>import("./OccupancyFactorMaster-9f7cc1e6.js"),[],import.meta.url)),Ee=a.lazy(()=>p(()=>import("./RoadTypeMaster-bc32b468.js"),[],import.meta.url)),be=a.lazy(()=>p(()=>import("./OwnershipType-70630536.js"),[],import.meta.url)),je=a.lazy(()=>p(()=>import("./UlbMaster-61a9aa57.js"),[],import.meta.url)),we=a.lazy(()=>p(()=>import("./TransferModeMaster-fadd7f4d.js"),[],import.meta.url)),Re=a.lazy(()=>p(()=>import("./RebateTypeMaster-0efdf1fd.js"),[],import.meta.url)),Oe=a.lazy(()=>p(()=>import("./PenaltyTypeMaster-adeb2ae6.js"),[],import.meta.url)),Le=a.lazy(()=>p(()=>import("./ForgeryTypeMaster-84f2f462.js"),[],import.meta.url)),Te=a.lazy(()=>p(()=>import("./districtMaster-db03f241.js"),[],import.meta.url)),Ie=a.lazy(()=>p(()=>import("./SchemeTypeMaster-2b2a0d89.js"),[],import.meta.url)),Pe=a.lazy(()=>p(()=>import("./CityMaster-4bc7534b.js"),[],import.meta.url)),Me=a.lazy(()=>p(()=>import("./WaterMaster-e258889d.js"),[],import.meta.url)),De=a.lazy(()=>p(()=>import("./ZoneMaster-49c90b1f.js"),[],import.meta.url)),Ae=a.lazy(()=>p(()=>import("./BuildingRentalCostListMaster-82d73532.js"),[],import.meta.url)),ze=a.lazy(()=>p(()=>import("./RentalValuesListMaster-98a4be53.js"),[],import.meta.url)),Ve=a.lazy(()=>p(()=>import("./RoadTypesListMaster-d2bff22a.js"),[],import.meta.url)),Se=a.lazy(()=>p(()=>import("./VacantRentalRatesListMaster-fc1cb83f.js"),[],import.meta.url)),$e=a.lazy(()=>p(()=>import("./CapitalValueRateListMaster-211fed93.js"),[],import.meta.url));function ke(){const[t,e]=a.useState(U("menuList")),[o,n]=a.useState(U("userDetails")),[s,r]=a.useState(""),[l,c]=a.useState(0),[u,d]=a.useState(!0),[m,f]=a.useState(1),[_,h]=a.useState(!(window.innerWidth<=763)),[w,Y]=a.useState({});window.addEventListener("resize",function(){window.innerWidth<=763&&h(!1),window.innerWidth>=1280&&h(!0)});const Z={menuList:t,setmenuList:e,userDetails:o,setuserDetails:n,titleText:s,settitleText:r,titleBarVisibility:u,settitleBarVisibility:d,heartBeatCounter:m,setheartBeatCounter:f,toggleBar:_,settoggleBar:h,refresh:l,setrefresh:c,formikInitialValues:w,setFormikInitialValues:Y},z=[{path:"/home",element:i.jsx(se,{})},{path:"/faq-master",element:i.jsx(le,{})},{path:"/scheme-master",element:i.jsx(ne,{})},{path:"/workflow-master",element:i.jsx(ie,{})},{path:"/user-role",element:i.jsx(de,{})},{path:"/test",element:i.jsx(ue,{})},{path:"/constructionMaster",element:i.jsx(pe,{})},{path:"/floorMaster",element:i.jsx(me,{})},{path:"/objectionMaster",element:i.jsx(fe,{})},{path:"/usageTypeMaster",element:i.jsx(he,{})},{path:"/gbBuildingMaster",element:i.jsx(_e,{})},{path:"/occupancyMaster",element:i.jsx(ye,{})},{path:"/propertyMaster",element:i.jsx(ge,{})},{path:"/gbpropusageMaster",element:i.jsx(xe,{})},{path:"/occupancyFactorMaster",element:i.jsx(ve,{})},{path:"/zoneMaster",element:i.jsx(De,{})},{path:"/cityMaster",element:i.jsx(Pe,{})},{path:"/waterMaster",element:i.jsx(Me,{})},{path:"/capitalValueRateListMaster",element:i.jsx($e,{})},{path:"/buildingRentalCostListMaster",element:i.jsx(Ae,{})},{path:"/rentalValuesListMaster",element:i.jsx(ze,{})},{path:"/roadTypesListMaster",element:i.jsx(Ve,{})},{path:"/vacantRentalRatesListMaster",element:i.jsx(Se,{})},{path:"/roadTypeMaster",element:i.jsx(Ee,{})},{path:"/ownershipTypeMaster",element:i.jsx(be,{})},{path:"/ulbTypeMaster",element:i.jsx(je,{})},{path:"/transferModeMaster",element:i.jsx(we,{})},{path:"/rebateTypeMaster",element:i.jsx(Re,{})},{path:"/penaltyTypeMaster",element:i.jsx(Oe,{})},{path:"/forgeryTypeMaster",element:i.jsx(Le,{})},{path:"/districtMaster",element:i.jsx(Te,{})},{path:"/schemeTypeMaster",element:i.jsx(Ie,{})}];return i.jsxs(i.Fragment,{children:[i.jsx(ee,{}),i.jsx(re.Provider,{value:Z,children:i.jsxs(K,{children:[i.jsx(O,{index:!0,element:i.jsx(oe,{})}),i.jsx(O,{element:i.jsx(ae,{}),children:z==null?void 0:z.map(g=>i.jsx(O,{path:g==null?void 0:g.path,element:g==null?void 0:g.element},g==null?void 0:g.path))}),i.jsx(O,{path:"*",element:i.jsx(ce,{})})]})})]})}class Ce extends W.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){var e;return this.state.hasError?i.jsx(i.Fragment,{children:i.jsx("div",{className:"w-screen h-screen flex justify-center items-center",children:i.jsx("div",{className:"w-2/3 h-60 bg-white mx-auto my-auto text-center flex justify-center items-center shadow-xl",children:i.jsxs("div",{children:[i.jsx("h1",{className:"text-red-600 text-2xl font-semibold",children:(e=this.props)==null?void 0:e.errorMsg}),i.jsxs("div",{className:"flex gap-2 items-center",children:[i.jsx("button",{onClick:()=>window.history.back(),className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-5",children:"Go Back"}),i.jsx("button",{onClick:()=>window.location.reload(),className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-5",children:"Reload"})]})]})})})}):this.props.children}}const Ne=new et;V.createRoot(document.getElementById("root")).render(i.jsx(W.StrictMode,{children:i.jsx(X,{basename:"/adminControl",children:i.jsx(a.Suspense,{fallback:i.jsx("div",{className:"h-screen w-screen flex items-center justify-center",children:i.jsxs("div",{class:"spinner",children:[i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{})]})}),children:i.jsx(Ce,{children:i.jsxs(rt,{client:Ne,children:[i.jsx(ke,{}),i.jsx(ot.ReactQueryDevtools,{initialIsOpen:!1})]})})})})}));export{ee as I,qe as _,Je as a,re as c,Qe as g,i as j,Ge as l,y as n,He as s};
