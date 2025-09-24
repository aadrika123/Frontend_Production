import{r,c as X,d as O,b as q,B as tt}from"./router-b87f8164.js";import{r as et}from"./react-5403e0b7.js";import{Q as rt,a as ot}from"./reactQuery-8705a202.js";import{d as at}from"./reactQueryDevtools-9a5be7d4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();var H={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=r,it=Symbol.for("react.element"),nt=Symbol.for("react.fragment"),lt=Object.prototype.hasOwnProperty,ct=st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mt={key:!0,ref:!0,__self:!0,__source:!0};function Q(t,e,s){var n,i={},a=null,l=null;s!==void 0&&(a=""+s),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)lt.call(e,n)&&!mt.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:it,type:t,key:a,ref:l,props:i,_owner:ct.current}}A.Fragment=nt;A.jsx=Q;A.jsxs=Q;H.exports=A;var o=H.exports,V={},$=et;V.createRoot=$.createRoot,V.hydrateRoot=$.hydrateRoot;const ut="modulepreload",pt=function(t,e){return t[0]==="."?new URL(t,e).href:t},N={},c=function(e,s,n){if(!s||s.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(s.map(a=>{if(a=pt(a,n),a in N)return;N[a]=!0;const l=a.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(!!n)for(let d=i.length-1;d>=0;d--){const _=i[d];if(_.href===a&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${m}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":ut,l||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),l)return new Promise((d,_)=>{u.addEventListener("load",d),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e()).catch(a=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a})};let dt={data:""},_t=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||dt,ht=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ft=/\/\*[^]*?\*\/|  +/g,B=/\n+/g,E=(t,e)=>{let s="",n="",i="";for(let a in t){let l=t[a];a[0]=="@"?a[1]=="i"?s=a+" "+l+";":n+=a[1]=="f"?E(l,a):a+"{"+E(l,a[1]=="k"?"":e)+"}":typeof l=="object"?n+=E(l,e?e.replace(/([^,])+/g,m=>a.replace(/(^:.*)|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,m):m?m+" "+p:p)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=E.p?E.p(a,l):a+":"+l+";")}return s+(e&&i?e+"{"+i+"}":i)+n},x={},J=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+J(t[s]);return e}return t},yt=(t,e,s,n,i)=>{let a=J(t),l=x[a]||(x[a]=(p=>{let u=0,d=11;for(;u<p.length;)d=101*d+p.charCodeAt(u++)>>>0;return"go"+d})(a));if(!x[l]){let p=a!==t?t:(u=>{let d,_,f=[{}];for(;d=ht.exec(u.replace(ft,""));)d[4]?f.shift():d[3]?(_=d[3].replace(B," ").trim(),f.unshift(f[0][_]=f[0][_]||{})):f[0][d[1]]=d[2].replace(B," ").trim();return f[0]})(t);x[l]=E(i?{["@keyframes "+l]:p}:p,s?"":"."+l)}let m=s&&x.g?x.g:null;return s&&(x.g=x[l]),((p,u,d,_)=>{_?u.data=u.data.replace(_,p):u.data.indexOf(p)===-1&&(u.data=d?p+u.data:u.data+p)})(x[l],e,n,m),l},gt=(t,e,s)=>t.reduce((n,i,a)=>{let l=e[a];if(l&&l.call){let m=l(s),p=m&&m.props&&m.props.className||/^go/.test(m)&&m;l=p?"."+p:m&&typeof m=="object"?m.props?"":E(m,""):m===!1?"":m}return n+i+(l??"")},"");function M(t){let e=this||{},s=t.call?t(e.p):t;return yt(s.unshift?s.raw?gt(s,[].slice.call(arguments,1),e.p):s.reduce((n,i)=>Object.assign(n,i&&i.call?i(e.p):i),{}):s,_t(e.target),e.g,e.o,e.k)}let G,k,S;M.bind({g:1});let v=M.bind({k:1});function xt(t,e,s,n){E.p=e,G=t,k=s,S=n}function b(t,e){let s=this||{};return function(){let n=arguments;function i(a,l){let m=Object.assign({},a),p=m.className||i.className;s.p=Object.assign({theme:k&&k()},m),s.o=/ *go\d+/.test(p),m.className=M.apply(s,n)+(p?" "+p:""),e&&(m.ref=l);let u=t;return t[0]&&(u=m.as||t,delete m.as),S&&u[0]&&S(m),G(u,m)}return e?e(i):i}}var vt=t=>typeof t=="function",D=(t,e)=>vt(t)?t(e):t,Et=(()=>{let t=0;return()=>(++t).toString()})(),Y=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),bt=20,I=new Map,jt=1e3,F=t=>{if(I.has(t))return;let e=setTimeout(()=>{I.delete(t),j({type:4,toastId:t})},jt);I.set(t,e)},Rt=t=>{let e=I.get(t);e&&clearTimeout(e)},C=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,bt)};case 1:return e.toast.id&&Rt(e.toast.id),{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:s}=e;return t.toasts.find(a=>a.id===s.id)?C(t,{type:1,toast:s}):C(t,{type:0,toast:s});case 3:let{toastId:n}=e;return n?F(n):t.toasts.forEach(a=>{F(a.id)}),{...t,toasts:t.toasts.map(a=>a.id===n||n===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},w=[],P={toasts:[],pausedAt:void 0},j=t=>{P=C(P,t),w.forEach(e=>{e(P)})},Lt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ot=(t={})=>{let[e,s]=r.useState(P);r.useEffect(()=>(w.push(s),()=>{let i=w.indexOf(s);i>-1&&w.splice(i,1)}),[e]);let n=e.toasts.map(i=>{var a,l;return{...t,...t[i.type],...i,duration:i.duration||((a=t[i.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||Lt[i.type],style:{...t.style,...(l=t[i.type])==null?void 0:l.style,...i.style}}});return{...e,toasts:n}},Tt=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||Et()}),L=t=>(e,s)=>{let n=Tt(e,t,s);return j({type:2,toast:n}),n.id},y=(t,e)=>L("blank")(t,e);y.error=L("error");y.success=L("success");y.loading=L("loading");y.custom=L("custom");y.dismiss=t=>{j({type:3,toastId:t})};y.remove=t=>j({type:4,toastId:t});y.promise=(t,e,s)=>{let n=y.loading(e.loading,{...s,...s==null?void 0:s.loading});return t.then(i=>(y.success(D(e.success,i),{id:n,...s,...s==null?void 0:s.success}),i)).catch(i=>{y.error(D(e.error,i),{id:n,...s,...s==null?void 0:s.error})}),t};var It=(t,e)=>{j({type:1,toast:{id:t,height:e}})},wt=()=>{j({type:5,time:Date.now()})},Pt=t=>{let{toasts:e,pausedAt:s}=Ot(t);r.useEffect(()=>{if(s)return;let a=Date.now(),l=e.map(m=>{if(m.duration===1/0)return;let p=(m.duration||0)+m.pauseDuration-(a-m.createdAt);if(p<0){m.visible&&y.dismiss(m.id);return}return setTimeout(()=>y.dismiss(m.id),p)});return()=>{l.forEach(m=>m&&clearTimeout(m))}},[e,s]);let n=r.useCallback(()=>{s&&j({type:6,time:Date.now()})},[s]),i=r.useCallback((a,l)=>{let{reverseOrder:m=!1,gutter:p=8,defaultPosition:u}=l||{},d=e.filter(h=>(h.position||u)===(a.position||u)&&h.height),_=d.findIndex(h=>h.id===a.id),f=d.filter((h,R)=>R<_&&h.visible).length;return d.filter(h=>h.visible).slice(...m?[f+1]:[0,f]).reduce((h,R)=>h+(R.height||0)+p,0)},[e]);return{toasts:e,handlers:{updateHeight:It,startPause:wt,endPause:n,calculateOffset:i}}},Dt=v`
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
`,Bt=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ft=v`
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
  animation: ${Ft} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Wt=({toast:t})=>{let{icon:e,type:s,iconTheme:n}=t;return e!==void 0?typeof e=="string"?r.createElement(Ut,null,e):e:s==="blank"?null:r.createElement(Bt,null,r.createElement(kt,{...n}),s!=="loading"&&r.createElement(Nt,null,s==="error"?r.createElement(zt,{...n}):r.createElement($t,{...n})))},qt=t=>`
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
`,Zt=(t,e)=>{let s=t.includes("top")?1:-1,[n,i]=Y()?[Qt,Jt]:[qt(s),Ht(s)];return{animation:e?`${v(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Kt=r.memo(({toast:t,position:e,style:s,children:n})=>{let i=t.height?Zt(t.position||e||"top-center",t.visible):{opacity:0},a=r.createElement(Wt,{toast:t}),l=r.createElement(Yt,{...t.ariaProps},D(t.message,t));return r.createElement(Gt,{className:t.className,style:{...i,...s,...t.style}},typeof n=="function"?n({icon:a,message:l}):r.createElement(r.Fragment,null,a,l))});xt(r.createElement);var Xt=({id:t,className:e,style:s,onHeightUpdate:n,children:i})=>{let a=r.useCallback(l=>{if(l){let m=()=>{let p=l.getBoundingClientRect().height;n(t,p)};m(),new MutationObserver(m).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return r.createElement("div",{ref:a,className:e,style:s},i)},te=(t,e)=>{let s=t.includes("top"),n=s?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Y()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...n,...i}},ee=M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,T=16,re=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:n,children:i,containerStyle:a,containerClassName:l})=>{let{toasts:m,handlers:p}=Pt(s);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:T,left:T,right:T,bottom:T,pointerEvents:"none",...a},className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},m.map(u=>{let d=u.position||e,_=p.calculateOffset(u,{reverseOrder:t,gutter:n,defaultPosition:e}),f=te(d,_);return r.createElement(Xt,{id:u.id,key:u.id,onHeightUpdate:p.updateHeight,className:u.visible?ee:"",style:f},u.type==="custom"?D(u.message,u):i?i(u):r.createElement(Kt,{toast:u,position:d}))}))},dr=y;const oe=r.createContext("");const _r=(t,e)=>{localStorage.setItem(t,e)},hr=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},fr=t=>{const e=localStorage.getItem(t);return e||null},U=t=>{const e=localStorage.getItem(t);try{return e?JSON.parse(e):null}catch{return null}},yr=t=>{localStorage.clear()},ae=r.lazy(()=>c(()=>import("./Login-53aae7ea.js"),["/assets/Login-e4615527.css"],import.meta.url)),se=r.lazy(()=>c(()=>import("./Home-baa19fe0.js"),[],import.meta.url)),ie=r.lazy(()=>c(()=>import("./ProtectedRoutes-2b73b440.js"),["/assets/ProtectedRoutes-2ca5915d.css"],import.meta.url)),ne=r.lazy(()=>c(()=>import("./WorkflowSidebar-23f4af50.js"),["/assets/ShimmerTable-9d8896e8.css","/assets/WorkflowSidebar-66cea161.css"],import.meta.url));r.lazy(()=>c(()=>import("./SpIndex-89008988.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url));const le=r.lazy(()=>c(()=>import("./FaqIndex-ba4cf276.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),ce=r.lazy(()=>c(()=>import("./ErrorPage-a2e28dd3.js"),["/assets/ErrorPage-21b32a13.css"],import.meta.url)),me=r.lazy(()=>c(()=>import("./UserRole-a7a050fa.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),W=r.lazy(()=>c(()=>import("./Test-ddf4ead7.js"),[],import.meta.url)),ue=r.lazy(()=>c(()=>import("./ConstructionMaster-584a0985.js"),["/assets/index-8e59e50e.css"],import.meta.url)),pe=r.lazy(()=>c(()=>import("./FloorMaster-b2ae85d3.js"),["/assets/index-8e59e50e.css"],import.meta.url)),de=r.lazy(()=>c(()=>import("./ObjectionMaster-b514af72.js"),["/assets/index-8e59e50e.css"],import.meta.url)),_e=r.lazy(()=>c(()=>import("./UsageType-c78c0964.js"),["/assets/index-8e59e50e.css"],import.meta.url)),he=r.lazy(()=>c(()=>import("./GbBuildingMaster-031b9214.js"),["/assets/index-8e59e50e.css"],import.meta.url)),fe=r.lazy(()=>c(()=>import("./OccupancyMaster-0443c589.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ye=r.lazy(()=>c(()=>import("./PropertyMaster-4be837b9.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ge=r.lazy(()=>c(()=>import("./GbpropusageMaster-018c3dbf.js"),["/assets/index-8e59e50e.css"],import.meta.url)),xe=r.lazy(()=>c(()=>import("./OccupancyFactorMaster-527ec56c.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ve=r.lazy(()=>c(()=>import("./RoadTypeMaster-0a329de9.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ee=r.lazy(()=>c(()=>import("./OwnershipType-b90676d8.js"),["/assets/index-8e59e50e.css"],import.meta.url)),be=r.lazy(()=>c(()=>import("./UlbMaster-53187747.js"),["/assets/index-8e59e50e.css"],import.meta.url)),je=r.lazy(()=>c(()=>import("./TransferModeMaster-3191b3dc.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Re=r.lazy(()=>c(()=>import("./RebateTypeMaster-ba4e094b.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Le=r.lazy(()=>c(()=>import("./PenaltyTypeMaster-1054282f.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Oe=r.lazy(()=>c(()=>import("./ForgeryTypeMaster-c8e964cb.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Te=r.lazy(()=>c(()=>import("./districtMaster-7b7c3746.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ie=r.lazy(()=>c(()=>import("./CityMaster-8458b199.js"),["/assets/index-8e59e50e.css"],import.meta.url)),we=r.lazy(()=>c(()=>import("./WaterMaster-a38fe701.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Pe=r.lazy(()=>c(()=>import("./ZoneMaster-eef92be8.js"),["/assets/index-8e59e50e.css"],import.meta.url)),De=r.lazy(()=>c(()=>import("./BuildingRentalCostListMaster-7c1bf7c8.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ae=r.lazy(()=>c(()=>import("./RentalValuesListMaster-2f40c582.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Me=r.lazy(()=>c(()=>import("./RoadTypesListMaster-85137560.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ze=r.lazy(()=>c(()=>import("./VacantRentalRatesListMaster-82557a59.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ve=r.lazy(()=>c(()=>import("./CapitalValueRateListMaster-cfba464e.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ke=r.lazy(()=>c(()=>import("./AssetsMaster-e722fe3f.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Se=r.lazy(()=>c(()=>import("./BlogMaster-d50b720a.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ce=r.lazy(()=>c(()=>import("./SliderMaster-22e6d3ec.js"),["/assets/index-8e59e50e.css"],import.meta.url)),$e=r.lazy(()=>c(()=>import("./BuildingRentalRatesListMaster-e8aaa923.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ne=r.lazy(()=>c(()=>import("./UlbWardMaster-e06f6216.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Be=r.lazy(()=>c(()=>import("./MultiFactorMaster-6ed3657e.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Fe=r.lazy(()=>c(()=>import("./LandingPage-7e328aaa.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ue=r.lazy(()=>c(()=>import("./NoticeCRUD-4901d808.js"),["/assets/index-8e59e50e.css"],import.meta.url)),We=r.lazy(()=>c(()=>import("./AnnouncementCRUD-0e2ddf6b.js"),["/assets/index-8e59e50e.css"],import.meta.url)),qe=r.lazy(()=>c(()=>import("./QuickLink-07b9235d.js"),["/assets/index-8e59e50e.css"],import.meta.url)),He=r.lazy(()=>c(()=>import("./MobileApp-e20e3123.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Qe=r.lazy(()=>c(()=>import("./Scheme-ad6630ee.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Je=r.lazy(()=>c(()=>import("./WhatsNew-f27165ba.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ge=r.lazy(()=>c(()=>import("./NewEvents-27f6a522.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ye=r.lazy(()=>c(()=>import("./Eservice-3348d8db.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ze=r.lazy(()=>c(()=>import("./ImportantLink-22187960.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Ke=r.lazy(()=>c(()=>import("./UsefulLink-3ef6b1f2.js"),["/assets/index-8e59e50e.css"],import.meta.url)),Xe=r.lazy(()=>c(()=>import("./DepartmentInfo-1646e12f.js"),["/assets/index-8e59e50e.css"],import.meta.url)),tr=r.lazy(()=>c(()=>import("./ContactInfo-35ce0eb8.js"),["/assets/index-8e59e50e.css"],import.meta.url)),er=r.lazy(()=>c(()=>import("./UserManual-3a673d31.js"),[],import.meta.url)),rr=r.lazy(()=>c(()=>import("./CitizenDesk-c94b33d7.js"),[],import.meta.url)),or=r.lazy(()=>c(()=>import("./AboutUs-89b41001.js"),["/assets/index-8e59e50e.css"],import.meta.url)),ar=r.lazy(()=>c(()=>import("./ActAndRules-61cb01a2.js"),["/assets/index-8e59e50e.css"],import.meta.url)),sr=r.lazy(()=>c(()=>import("./AdministrativeCRUD-4da1a792.js"),["/assets/index-8e59e50e.css"],import.meta.url));function ir(){const[t,e]=r.useState(U("menuList")),[s,n]=r.useState(U("userDetails")),[i,a]=r.useState(""),[l,m]=r.useState(0),[p,u]=r.useState(!0),[d,_]=r.useState(1),[f,h]=r.useState(!(window.innerWidth<=763)),[R,Z]=r.useState({});window.addEventListener("resize",function(){window.innerWidth<=763&&h(!1),window.innerWidth>=1280&&h(!0)});const K={menuList:t,setmenuList:e,userDetails:s,setuserDetails:n,titleText:i,settitleText:a,titleBarVisibility:p,settitleBarVisibility:u,heartBeatCounter:d,setheartBeatCounter:_,toggleBar:f,settoggleBar:h,refresh:l,setrefresh:m,formikInitialValues:R,setFormikInitialValues:Z},z=[{path:"/home",element:o.jsx(se,{})},{path:"/faq-master",element:o.jsx(le,{})},{path:"/workflow-master",element:o.jsx(ne,{})},{path:"/user-role",element:o.jsx(me,{})},{path:"/test",element:o.jsx(W,{})},{path:"/constructionMaster",element:o.jsx(ue,{})},{path:"/floorMaster",element:o.jsx(pe,{})},{path:"/objectionMaster",element:o.jsx(de,{})},{path:"/usageTypeMaster",element:o.jsx(_e,{})},{path:"/gbBuildingMaster",element:o.jsx(he,{})},{path:"/occupancyMaster",element:o.jsx(fe,{})},{path:"/propertyMaster",element:o.jsx(ye,{})},{path:"/gbpropusageMaster",element:o.jsx(ge,{})},{path:"/occupancyFactorMaster",element:o.jsx(xe,{})},{path:"/zoneMaster",element:o.jsx(Pe,{})},{path:"/cityMaster",element:o.jsx(Ie,{})},{path:"/waterMaster",element:o.jsx(we,{})},{path:"/sliderMaster",element:o.jsx(Ce,{})},{path:"/capitalValueRateListMaster",element:o.jsx(Ve,{})},{path:"/buildingRentalCostListMaster",element:o.jsx(De,{})},{path:"/rentalValuesListMaster",element:o.jsx(Ae,{})},{path:"/roadTypesListMaster",element:o.jsx(Me,{})},{path:"/vacantRentalRatesListMaster",element:o.jsx(ze,{})},{path:"/roadTypeMaster",element:o.jsx(ve,{})},{path:"/ownershipTypeMaster",element:o.jsx(Ee,{})},{path:"/ulbMaster",element:o.jsx(be,{})},{path:"/transferModeMaster",element:o.jsx(je,{})},{path:"/rebateTypeMaster",element:o.jsx(Re,{})},{path:"/penaltyTypeMaster",element:o.jsx(Le,{})},{path:"/forgeryTypeMaster",element:o.jsx(Oe,{})},{path:"/districtMaster",element:o.jsx(Te,{})},{path:"/assetsMaster",element:o.jsx(ke,{})},{path:"/blogMaster",element:o.jsx(Se,{})},{path:"/buildingrentalrate",element:o.jsx($e,{})},{path:"/ulbWardMaster",element:o.jsx(Ne,{})},{path:"/multiFactorMaster",element:o.jsx(Be,{})},{path:"/landing-page-images",element:o.jsx(Fe,{})},{path:"/landing-page-notice",element:o.jsx(Ue,{})},{path:"/landing-page-announcement",element:o.jsx(We,{})},{path:"/landing-page-quick-link",element:o.jsx(qe,{})},{path:"/landing-page-whats-new",element:o.jsx(Je,{})},{path:"/mobile-app-master",element:o.jsx(He,{})},{path:"/schemeTypeMaster",element:o.jsx(Qe,{})},{path:"/new-event-Master",element:o.jsx(Ge,{})},{path:"/e-service-Master",element:o.jsx(Ye,{})},{path:"/important-link",element:o.jsx(Ze,{})},{path:"/useful-link",element:o.jsx(Ke,{})},{path:"/department-link",element:o.jsx(Xe,{})},{path:"/contact-link",element:o.jsx(tr,{})},{path:"/administrative-master",element:o.jsx(sr,{})},{path:"/act-and-rules-master",element:o.jsx(ar,{})},{path:"/user-manual",element:o.jsx(er,{})},{path:"/about-Us-master",element:o.jsx(or,{})},{path:"/citizen-desk-Master",element:o.jsx(rr,{})},{path:"/test",element:o.jsx(W,{})}];return o.jsxs(o.Fragment,{children:[o.jsx(re,{}),o.jsx(oe.Provider,{value:K,children:o.jsxs(X,{children:[o.jsx(O,{index:!0,element:o.jsx(ae,{})}),o.jsx(O,{element:o.jsx(ie,{}),children:z==null?void 0:z.map(g=>o.jsx(O,{path:g==null?void 0:g.path,element:g==null?void 0:g.element},g==null?void 0:g.path))}),o.jsx(O,{path:"*",element:o.jsx(ce,{})})]})})]})}class nr extends q.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){var e;return this.state.hasError?o.jsx(o.Fragment,{children:o.jsx("div",{className:"w-screen h-screen flex justify-center items-center",children:o.jsx("div",{className:"w-2/3 h-60 bg-white mx-auto my-auto text-center flex justify-center items-center shadow-xl",children:o.jsxs("div",{children:[o.jsx("h1",{className:"text-red-600 text-2xl font-semibold",children:(e=this.props)==null?void 0:e.errorMsg}),o.jsxs("div",{className:"flex gap-2 items-center",children:[o.jsx("button",{onClick:()=>window.history.back(),className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-5",children:"Go Back"}),o.jsx("button",{onClick:()=>window.location.reload(),className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-5",children:"Reload"})]})]})})})}):this.props.children}}const lr=new rt;V.createRoot(document.getElementById("root")).render(o.jsx(q.StrictMode,{children:o.jsx(tt,{basename:"/adminControl",children:o.jsx(r.Suspense,{fallback:o.jsx("div",{className:"h-screen w-screen flex items-center justify-center",children:o.jsxs("div",{class:"spinner",children:[o.jsx("div",{}),o.jsx("div",{}),o.jsx("div",{}),o.jsx("div",{}),o.jsx("div",{})]})}),children:o.jsx(nr,{children:o.jsxs(ot,{client:lr,children:[o.jsx(ir,{}),o.jsx(at.ReactQueryDevtools,{initialIsOpen:!1})]})})})})}));export{re as I,dr as _,hr as a,oe as c,fr as g,o as j,yr as l,y as n,_r as s};
