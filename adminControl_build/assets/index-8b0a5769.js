import{r,c as X,d as O,b as q,B as tt}from"./router-b87f8164.js";import{r as et}from"./react-5403e0b7.js";import{Q as rt,a as at}from"./reactQuery-8705a202.js";import{d as ot}from"./reactQueryDevtools-9a5be7d4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();var H={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=r,it=Symbol.for("react.element"),nt=Symbol.for("react.fragment"),lt=Object.prototype.hasOwnProperty,ct=st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ut={key:!0,ref:!0,__self:!0,__source:!0};function Q(t,e,s){var n,i={},o=null,l=null;s!==void 0&&(o=""+s),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)lt.call(e,n)&&!ut.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:it,type:t,key:o,ref:l,props:i,_owner:ct.current}}A.Fragment=nt;A.jsx=Q;A.jsxs=Q;H.exports=A;var a=H.exports,V={},$=et;V.createRoot=$.createRoot,V.hydrateRoot=$.hydrateRoot;const mt="modulepreload",pt=function(t,e){return t[0]==="."?new URL(t,e).href:t},N={},c=function(e,s,n){if(!s||s.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=pt(o,n),o in N)return;N[o]=!0;const l=o.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!n)for(let d=i.length-1;d>=0;d--){const _=i[d];if(_.href===o&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":mt,l||(m.as="script",m.crossOrigin=""),m.href=o,document.head.appendChild(m),l)return new Promise((d,_)=>{m.addEventListener("load",d),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})};let dt={data:""},_t=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||dt,ht=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ft=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,E=(t,e)=>{let s="",n="",i="";for(let o in t){let l=t[o];o[0]=="@"?o[1]=="i"?s=o+" "+l+";":n+=o[1]=="f"?E(l,o):o+"{"+E(l,o[1]=="k"?"":e)+"}":typeof l=="object"?n+=E(l,e?e.replace(/([^,])+/g,u=>o.replace(/(^:.*)|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,u):u?u+" "+p:p)):o):l!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=E.p?E.p(o,l):o+":"+l+";")}return s+(e&&i?e+"{"+i+"}":i)+n},x={},J=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+J(t[s]);return e}return t},yt=(t,e,s,n,i)=>{let o=J(t),l=x[o]||(x[o]=(p=>{let m=0,d=11;for(;m<p.length;)d=101*d+p.charCodeAt(m++)>>>0;return"go"+d})(o));if(!x[l]){let p=o!==t?t:(m=>{let d,_,f=[{}];for(;d=ht.exec(m.replace(ft,""));)d[4]?f.shift():d[3]?(_=d[3].replace(F," ").trim(),f.unshift(f[0][_]=f[0][_]||{})):f[0][d[1]]=d[2].replace(F," ").trim();return f[0]})(t);x[l]=E(i?{["@keyframes "+l]:p}:p,s?"":"."+l)}let u=s&&x.g?x.g:null;return s&&(x.g=x[l]),((p,m,d,_)=>{_?m.data=m.data.replace(_,p):m.data.indexOf(p)===-1&&(m.data=d?p+m.data:m.data+p)})(x[l],e,n,u),l},gt=(t,e,s)=>t.reduce((n,i,o)=>{let l=e[o];if(l&&l.call){let u=l(s),p=u&&u.props&&u.props.className||/^go/.test(u)&&u;l=p?"."+p:u&&typeof u=="object"?u.props?"":E(u,""):u===!1?"":u}return n+i+(l??"")},"");function M(t){let e=this||{},s=t.call?t(e.p):t;return yt(s.unshift?s.raw?gt(s,[].slice.call(arguments,1),e.p):s.reduce((n,i)=>Object.assign(n,i&&i.call?i(e.p):i),{}):s,_t(e.target),e.g,e.o,e.k)}let G,k,S;M.bind({g:1});let v=M.bind({k:1});function xt(t,e,s,n){E.p=e,G=t,k=s,S=n}function b(t,e){let s=this||{};return function(){let n=arguments;function i(o,l){let u=Object.assign({},o),p=u.className||i.className;s.p=Object.assign({theme:k&&k()},u),s.o=/ *go\d+/.test(p),u.className=M.apply(s,n)+(p?" "+p:""),e&&(u.ref=l);let m=t;return t[0]&&(m=u.as||t,delete u.as),S&&m[0]&&S(u),G(m,u)}return e?e(i):i}}var vt=t=>typeof t=="function",D=(t,e)=>vt(t)?t(e):t,Et=(()=>{let t=0;return()=>(++t).toString()})(),Y=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),bt=20,w=new Map,jt=1e3,B=t=>{if(w.has(t))return;let e=setTimeout(()=>{w.delete(t),j({type:4,toastId:t})},jt);w.set(t,e)},Rt=t=>{let e=w.get(t);e&&clearTimeout(e)},C=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,bt)};case 1:return e.toast.id&&Rt(e.toast.id),{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:s}=e;return t.toasts.find(o=>o.id===s.id)?C(t,{type:1,toast:s}):C(t,{type:0,toast:s});case 3:let{toastId:n}=e;return n?B(n):t.toasts.forEach(o=>{B(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===n||n===void 0?{...o,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},I=[],P={toasts:[],pausedAt:void 0},j=t=>{P=C(P,t),I.forEach(e=>{e(P)})},Lt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ot=(t={})=>{let[e,s]=r.useState(P);r.useEffect(()=>(I.push(s),()=>{let i=I.indexOf(s);i>-1&&I.splice(i,1)}),[e]);let n=e.toasts.map(i=>{var o,l;return{...t,...t[i.type],...i,duration:i.duration||((o=t[i.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||Lt[i.type],style:{...t.style,...(l=t[i.type])==null?void 0:l.style,...i.style}}});return{...e,toasts:n}},Tt=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||Et()}),L=t=>(e,s)=>{let n=Tt(e,t,s);return j({type:2,toast:n}),n.id},y=(t,e)=>L("blank")(t,e);y.error=L("error");y.success=L("success");y.loading=L("loading");y.custom=L("custom");y.dismiss=t=>{j({type:3,toastId:t})};y.remove=t=>j({type:4,toastId:t});y.promise=(t,e,s)=>{let n=y.loading(e.loading,{...s,...s==null?void 0:s.loading});return t.then(i=>(y.success(D(e.success,i),{id:n,...s,...s==null?void 0:s.success}),i)).catch(i=>{y.error(D(e.error,i),{id:n,...s,...s==null?void 0:s.error})}),t};var wt=(t,e)=>{j({type:1,toast:{id:t,height:e}})},It=()=>{j({type:5,time:Date.now()})},Pt=t=>{let{toasts:e,pausedAt:s}=Ot(t);r.useEffect(()=>{if(s)return;let o=Date.now(),l=e.map(u=>{if(u.duration===1/0)return;let p=(u.duration||0)+u.pauseDuration-(o-u.createdAt);if(p<0){u.visible&&y.dismiss(u.id);return}return setTimeout(()=>y.dismiss(u.id),p)});return()=>{l.forEach(u=>u&&clearTimeout(u))}},[e,s]);let n=r.useCallback(()=>{s&&j({type:6,time:Date.now()})},[s]),i=r.useCallback((o,l)=>{let{reverseOrder:u=!1,gutter:p=8,defaultPosition:m}=l||{},d=e.filter(h=>(h.position||m)===(o.position||m)&&h.height),_=d.findIndex(h=>h.id===o.id),f=d.filter((h,R)=>R<_&&h.visible).length;return d.filter(h=>h.visible).slice(...u?[f+1]:[0,f]).reduce((h,R)=>h+(R.height||0)+p,0)},[e]);return{toasts:e,handlers:{updateHeight:wt,startPause:It,endPause:n,calculateOffset:i}}},Dt=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,At=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Mt=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,zt=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Dt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${At} 0.15s ease-out forwards;
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
    animation: ${Mt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Vt=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,kt=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Vt} 1s linear infinite;
`,St=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ct=v`
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
}`,$t=b("div")`
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
    animation: ${Ct} 0.2s ease-out forwards;
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
`,Nt=b("div")`
  position: absolute;
`,Ft=b("div")`
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
}`,Ut=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Bt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Wt=({toast:t})=>{let{icon:e,type:s,iconTheme:n}=t;return e!==void 0?typeof e=="string"?r.createElement(Ut,null,e):e:s==="blank"?null:r.createElement(Ft,null,r.createElement(kt,{...n}),s!=="loading"&&r.createElement(Nt,null,s==="error"?r.createElement(zt,{...n}):r.createElement($t,{...n})))},qt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ht=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Qt="0%{opacity:0;} 100%{opacity:1;}",Jt="0%{opacity:1;} 100%{opacity:0;}",Gt=b("div")`
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
`,Yt=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Zt=(t,e)=>{let s=t.includes("top")?1:-1,[n,i]=Y()?[Qt,Jt]:[qt(s),Ht(s)];return{animation:e?`${v(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Kt=r.memo(({toast:t,position:e,style:s,children:n})=>{let i=t.height?Zt(t.position||e||"top-center",t.visible):{opacity:0},o=r.createElement(Wt,{toast:t}),l=r.createElement(Yt,{...t.ariaProps},D(t.message,t));return r.createElement(Gt,{className:t.className,style:{...i,...s,...t.style}},typeof n=="function"?n({icon:o,message:l}):r.createElement(r.Fragment,null,o,l))});xt(r.createElement);var Xt=({id:t,className:e,style:s,onHeightUpdate:n,children:i})=>{let o=r.useCallback(l=>{if(l){let u=()=>{let p=l.getBoundingClientRect().height;n(t,p)};u(),new MutationObserver(u).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return r.createElement("div",{ref:o,className:e,style:s},i)},te=(t,e)=>{let s=t.includes("top"),n=s?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Y()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...n,...i}},ee=M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,T=16,re=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:n,children:i,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:p}=Pt(s);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:T,left:T,right:T,bottom:T,pointerEvents:"none",...o},className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},u.map(m=>{let d=m.position||e,_=p.calculateOffset(m,{reverseOrder:t,gutter:n,defaultPosition:e}),f=te(d,_);return r.createElement(Xt,{id:m.id,key:m.id,onHeightUpdate:p.updateHeight,className:m.visible?ee:"",style:f},m.type==="custom"?D(m.message,m):i?i(m):r.createElement(Kt,{toast:m,position:d}))}))},pr=y;const ae=r.createContext("");const dr=(t,e)=>{localStorage.setItem(t,e)},_r=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},hr=t=>{const e=localStorage.getItem(t);return e||null},U=t=>{const e=localStorage.getItem(t);try{return e?JSON.parse(e):null}catch{return null}},fr=t=>{localStorage.clear()},oe=r.lazy(()=>c(()=>import("./Login-775daa5f.js"),["/assets/Login-e4615527.css"],import.meta.url)),se=r.lazy(()=>c(()=>import("./Home-fc2b2114.js"),[],import.meta.url)),ie=r.lazy(()=>c(()=>import("./ProtectedRoutes-9d3b22e8.js"),["/assets/ProtectedRoutes-2ca5915d.css"],import.meta.url)),ne=r.lazy(()=>c(()=>import("./WorkflowSidebar-7d06ec76.js"),["/assets/ShimmerTable-9d8896e8.css","/assets/WorkflowSidebar-66cea161.css"],import.meta.url));r.lazy(()=>c(()=>import("./SpIndex-9b4e2130.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url));const le=r.lazy(()=>c(()=>import("./FaqIndex-c17a93fd.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),ce=r.lazy(()=>c(()=>import("./ErrorPage-14ec524e.js"),["/assets/ErrorPage-21b32a13.css"],import.meta.url)),ue=r.lazy(()=>c(()=>import("./UserRole-3d4fcbac.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),W=r.lazy(()=>c(()=>import("./Test-d4c2e203.js"),[],import.meta.url)),me=r.lazy(()=>c(()=>import("./ConstructionMaster-178c243d.js"),["/assets/index-8e59e50e.css"],import.meta.url)),pe=r.lazy(()=>c(()=>import("./FloorMaster-294a1b88.js"),["/assets/index-8e59e50e.css"],import.meta.url)),de=r.lazy(()=>c(()=>import("./ObjectionMaster-9c5f2266.js"),["/assets/index-8e59e50e.css"],import.meta.url)),_e=r.lazy(()=>c(()=>import("./UsageType-f7ecd598.js"),["/assets/index-8e59e50e.css"],import.meta.url)),he=r.lazy(()=>c(()=>import("./GbBuildingMaster-a943a152.js"),["/assets/index-8e59e50e.css"],import.meta.url)),fe=r.lazy(()=>c(()=>import("./OccupancyMaster-4babb6b8.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ye=r.lazy(()=>c(()=>import("./PropertyMaster-5d331767.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ge=r.lazy(()=>c(()=>import("./GbpropusageMaster-00709c47.js"),["/assets/index-8e59e50e.css"],import.meta.url)),xe=r.lazy(()=>c(()=>import("./OccupancyFactorMaster-7d5fc6a8.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ve=r.lazy(()=>c(()=>import("./RoadTypeMaster-f3518112.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ee=r.lazy(()=>c(()=>import("./OwnershipType-cfd5b07d.js"),["/assets/index-8e59e50e.css"],import.meta.url)),be=r.lazy(()=>c(()=>import("./UlbMaster-d0a2f537.js"),["/assets/index-8e59e50e.css"],import.meta.url)),je=r.lazy(()=>c(()=>import("./TransferModeMaster-36a22910.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Re=r.lazy(()=>c(()=>import("./RebateTypeMaster-bb48ea98.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Le=r.lazy(()=>c(()=>import("./PenaltyTypeMaster-b3382bf0.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Oe=r.lazy(()=>c(()=>import("./ForgeryTypeMaster-f01486f6.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Te=r.lazy(()=>c(()=>import("./districtMaster-d346dab1.js"),["/assets/index-8e59e50e.css"],import.meta.url)),we=r.lazy(()=>c(()=>import("./CityMaster-fbf10f79.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ie=r.lazy(()=>c(()=>import("./WaterMaster-79698d61.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Pe=r.lazy(()=>c(()=>import("./ZoneMaster-f7e823ab.js"),["/assets/index-8e59e50e.css"],import.meta.url)),De=r.lazy(()=>c(()=>import("./BuildingRentalCostListMaster-fb47763a.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ae=r.lazy(()=>c(()=>import("./RentalValuesListMaster-c076e217.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Me=r.lazy(()=>c(()=>import("./RoadTypesListMaster-e6e28fdd.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ze=r.lazy(()=>c(()=>import("./VacantRentalRatesListMaster-f2ab4b43.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ve=r.lazy(()=>c(()=>import("./CapitalValueRateListMaster-3b46a5e0.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ke=r.lazy(()=>c(()=>import("./AssetsMaster-68f4a17e.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Se=r.lazy(()=>c(()=>import("./SliderMaster-b9089f55.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ce=r.lazy(()=>c(()=>import("./BuildingRentalRatesListMaster-6453f268.js"),["/assets/index-8e59e50e.css"],import.meta.url)),$e=r.lazy(()=>c(()=>import("./UlbWardMaster-90d96b4e.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ne=r.lazy(()=>c(()=>import("./MultiFactorMaster-c67e210f.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Fe=r.lazy(()=>c(()=>import("./LandingPage-2993cab4.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Be=r.lazy(()=>c(()=>import("./NoticeCRUD-b5fbca66.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ue=r.lazy(()=>c(()=>import("./AnnouncementCRUD-3cfd08cf.js"),["/assets/index-8e59e50e.css"],import.meta.url)),We=r.lazy(()=>c(()=>import("./QuickLink-06e00657.js"),["/assets/index-8e59e50e.css"],import.meta.url)),qe=r.lazy(()=>c(()=>import("./MobileApp-36e61843.js"),["/assets/index-8e59e50e.css"],import.meta.url)),He=r.lazy(()=>c(()=>import("./Scheme-2eed0265.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Qe=r.lazy(()=>c(()=>import("./WhatsNew-47fc7f9a.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Je=r.lazy(()=>c(()=>import("./NewEvents-af785adb.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ge=r.lazy(()=>c(()=>import("./Eservice-d0e7aee0.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ye=r.lazy(()=>c(()=>import("./ImportantLink-f925350e.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ze=r.lazy(()=>c(()=>import("./UsefulLink-4dc10ef5.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ke=r.lazy(()=>c(()=>import("./DepartmentInfo-408b8f60.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Xe=r.lazy(()=>c(()=>import("./ContactInfo-05dd28d2.js"),["/assets/index-8e59e50e.css"],import.meta.url)),tr=r.lazy(()=>c(()=>import("./UserManual-241ff2c1.js"),[],import.meta.url)),er=r.lazy(()=>c(()=>import("./CitizenDesk-d3b604e0.js"),[],import.meta.url)),rr=r.lazy(()=>c(()=>import("./AboutUs-65833d34.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ar=r.lazy(()=>c(()=>import("./ActAndRules-4628a243.js"),["/assets/index-8e59e50e.css"],import.meta.url)),or=r.lazy(()=>c(()=>import("./AdministrativeCRUD-80db9cf1.js"),["/assets/index-8e59e50e.css"],import.meta.url));function sr(){const[t,e]=r.useState(U("menuList")),[s,n]=r.useState(U("userDetails")),[i,o]=r.useState(""),[l,u]=r.useState(0),[p,m]=r.useState(!0),[d,_]=r.useState(1),[f,h]=r.useState(!(window.innerWidth<=763)),[R,Z]=r.useState({});window.addEventListener("resize",function(){window.innerWidth<=763&&h(!1),window.innerWidth>=1280&&h(!0)});const K={menuList:t,setmenuList:e,userDetails:s,setuserDetails:n,titleText:i,settitleText:o,titleBarVisibility:p,settitleBarVisibility:m,heartBeatCounter:d,setheartBeatCounter:_,toggleBar:f,settoggleBar:h,refresh:l,setrefresh:u,formikInitialValues:R,setFormikInitialValues:Z},z=[{path:"/home",element:a.jsx(se,{})},{path:"/faq-master",element:a.jsx(le,{})},{path:"/workflow-master",element:a.jsx(ne,{})},{path:"/user-role",element:a.jsx(ue,{})},{path:"/test",element:a.jsx(W,{})},{path:"/constructionMaster",element:a.jsx(me,{})},{path:"/floorMaster",element:a.jsx(pe,{})},{path:"/objectionMaster",element:a.jsx(de,{})},{path:"/usageTypeMaster",element:a.jsx(_e,{})},{path:"/gbBuildingMaster",element:a.jsx(he,{})},{path:"/occupancyMaster",element:a.jsx(fe,{})},{path:"/propertyMaster",element:a.jsx(ye,{})},{path:"/gbpropusageMaster",element:a.jsx(ge,{})},{path:"/occupancyFactorMaster",element:a.jsx(xe,{})},{path:"/zoneMaster",element:a.jsx(Pe,{})},{path:"/cityMaster",element:a.jsx(we,{})},{path:"/waterMaster",element:a.jsx(Ie,{})},{path:"/sliderMaster",element:a.jsx(Se,{})},{path:"/capitalValueRateListMaster",element:a.jsx(Ve,{})},{path:"/buildingRentalCostListMaster",element:a.jsx(De,{})},{path:"/rentalValuesListMaster",element:a.jsx(Ae,{})},{path:"/roadTypesListMaster",element:a.jsx(Me,{})},{path:"/vacantRentalRatesListMaster",element:a.jsx(ze,{})},{path:"/roadTypeMaster",element:a.jsx(ve,{})},{path:"/ownershipTypeMaster",element:a.jsx(Ee,{})},{path:"/ulbMaster",element:a.jsx(be,{})},{path:"/transferModeMaster",element:a.jsx(je,{})},{path:"/rebateTypeMaster",element:a.jsx(Re,{})},{path:"/penaltyTypeMaster",element:a.jsx(Le,{})},{path:"/forgeryTypeMaster",element:a.jsx(Oe,{})},{path:"/districtMaster",element:a.jsx(Te,{})},{path:"/assetsMaster",element:a.jsx(ke,{})},{path:"/buildingrentalrate",element:a.jsx(Ce,{})},{path:"/ulbWardMaster",element:a.jsx($e,{})},{path:"/multiFactorMaster",element:a.jsx(Ne,{})},{path:"/landing-page-images",element:a.jsx(Fe,{})},{path:"/landing-page-notice",element:a.jsx(Be,{})},{path:"/landing-page-announcement",element:a.jsx(Ue,{})},{path:"/landing-page-quick-link",element:a.jsx(We,{})},{path:"/landing-page-whats-new",element:a.jsx(Qe,{})},{path:"/mobile-app-master",element:a.jsx(qe,{})},{path:"/schemeTypeMaster",element:a.jsx(He,{})},{path:"/new-event-Master",element:a.jsx(Je,{})},{path:"/e-service-Master",element:a.jsx(Ge,{})},{path:"/important-link",element:a.jsx(Ye,{})},{path:"/useful-link",element:a.jsx(Ze,{})},{path:"/department-link",element:a.jsx(Ke,{})},{path:"/contact-link",element:a.jsx(Xe,{})},{path:"/administrative-master",element:a.jsx(or,{})},{path:"/act-and-rules-master",element:a.jsx(ar,{})},{path:"/user-manual",element:a.jsx(tr,{})},{path:"/about-Us-master",element:a.jsx(rr,{})},{path:"/citizen-desk-Master",element:a.jsx(er,{})},{path:"/test",element:a.jsx(W,{})}];return a.jsxs(a.Fragment,{children:[a.jsx(re,{}),a.jsx(ae.Provider,{value:K,children:a.jsxs(X,{children:[a.jsx(O,{index:!0,element:a.jsx(oe,{})}),a.jsx(O,{element:a.jsx(ie,{}),children:z==null?void 0:z.map(g=>a.jsx(O,{path:g==null?void 0:g.path,element:g==null?void 0:g.element},g==null?void 0:g.path))}),a.jsx(O,{path:"*",element:a.jsx(ce,{})})]})})]})}class ir extends q.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){var e;return this.state.hasError?a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-screen h-screen flex justify-center items-center",children:a.jsx("div",{className:"w-2/3 h-60 bg-white mx-auto my-auto text-center flex justify-center items-center shadow-xl",children:a.jsxs("div",{children:[a.jsx("h1",{className:"text-red-600 text-2xl font-semibold",children:(e=this.props)==null?void 0:e.errorMsg}),a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx("button",{onClick:()=>window.history.back(),className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-5",children:"Go Back"}),a.jsx("button",{onClick:()=>window.location.reload(),className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-5",children:"Reload"})]})]})})})}):this.props.children}}const nr=new rt;V.createRoot(document.getElementById("root")).render(a.jsx(q.StrictMode,{children:a.jsx(tt,{basename:"/adminControl",children:a.jsx(r.Suspense,{fallback:a.jsx("div",{className:"h-screen w-screen flex items-center justify-center",children:a.jsxs("div",{class:"spinner",children:[a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{}),a.jsx("div",{})]})}),children:a.jsx(ir,{children:a.jsxs(at,{client:nr,children:[a.jsx(sr,{}),a.jsx(ot.ReactQueryDevtools,{initialIsOpen:!1})]})})})})}));export{re as I,pr as _,_r as a,ae as c,hr as g,a as j,fr as l,y as n,dr as s};
