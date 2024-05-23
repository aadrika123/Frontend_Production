import{r as s,c as K,d as O,b as W,B as X}from"./router-b87f8164.js";import{r as tt}from"./react-5403e0b7.js";import{Q as et,a as rt}from"./reactQuery-8705a202.js";import{d as ot}from"./reactQueryDevtools-9a5be7d4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();var q={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at=s,st=Symbol.for("react.element"),it=Symbol.for("react.fragment"),nt=Object.prototype.hasOwnProperty,lt=at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ct={key:!0,ref:!0,__self:!0,__source:!0};function H(t,e,o){var n,a={},r=null,l=null;o!==void 0&&(r=""+o),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)nt.call(e,n)&&!ct.hasOwnProperty(n)&&(a[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)a[n]===void 0&&(a[n]=e[n]);return{$$typeof:st,type:t,key:r,ref:l,props:a,_owner:lt.current}}D.Fragment=it;D.jsx=H;D.jsxs=H;q.exports=D;var i=q.exports,V={},C=tt;V.createRoot=C.createRoot,V.hydrateRoot=C.hydrateRoot;const dt="modulepreload",ut=function(t,e){return t[0]==="."?new URL(t,e).href:t},N={},d=function(e,o,n){if(!o||o.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=ut(r,n),r in N)return;N[r]=!0;const l=r.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!n)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===r&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":dt,l||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),l)return new Promise((m,_)=>{u.addEventListener("load",m),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})};let pt={data:""},mt=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||pt,_t=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ft=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,E=(t,e)=>{let o="",n="",a="";for(let r in t){let l=t[r];r[0]=="@"?r[1]=="i"?o=r+" "+l+";":n+=r[1]=="f"?E(l,r):r+"{"+E(l,r[1]=="k"?"":e)+"}":typeof l=="object"?n+=E(l,e?e.replace(/([^,])+/g,c=>r.replace(/(^:.*)|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,c):c?c+" "+p:p)):r):l!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=E.p?E.p(r,l):r+":"+l+";")}return o+(e&&a?e+"{"+a+"}":a)+n},x={},J=t=>{if(typeof t=="object"){let e="";for(let o in t)e+=o+J(t[o]);return e}return t},ht=(t,e,o,n,a)=>{let r=J(t),l=x[r]||(x[r]=(p=>{let u=0,m=11;for(;u<p.length;)m=101*m+p.charCodeAt(u++)>>>0;return"go"+m})(r));if(!x[l]){let p=r!==t?t:(u=>{let m,_,h=[{}];for(;m=_t.exec(u.replace(ft,""));)m[4]?h.shift():m[3]?(_=m[3].replace(F," ").trim(),h.unshift(h[0][_]=h[0][_]||{})):h[0][m[1]]=m[2].replace(F," ").trim();return h[0]})(t);x[l]=E(a?{["@keyframes "+l]:p}:p,o?"":"."+l)}let c=o&&x.g?x.g:null;return o&&(x.g=x[l]),((p,u,m,_)=>{_?u.data=u.data.replace(_,p):u.data.indexOf(p)===-1&&(u.data=m?p+u.data:u.data+p)})(x[l],e,n,c),l},yt=(t,e,o)=>t.reduce((n,a,r)=>{let l=e[r];if(l&&l.call){let c=l(o),p=c&&c.props&&c.props.className||/^go/.test(c)&&c;l=p?"."+p:c&&typeof c=="object"?c.props?"":E(c,""):c===!1?"":c}return n+a+(l??"")},"");function A(t){let e=this||{},o=t.call?t(e.p):t;return ht(o.unshift?o.raw?yt(o,[].slice.call(arguments,1),e.p):o.reduce((n,a)=>Object.assign(n,a&&a.call?a(e.p):a),{}):o,mt(e.target),e.g,e.o,e.k)}let Q,S,$;A.bind({g:1});let v=A.bind({k:1});function gt(t,e,o,n){E.p=e,Q=t,S=o,$=n}function b(t,e){let o=this||{};return function(){let n=arguments;function a(r,l){let c=Object.assign({},r),p=c.className||a.className;o.p=Object.assign({theme:S&&S()},c),o.o=/ *go\d+/.test(p),c.className=A.apply(o,n)+(p?" "+p:""),e&&(c.ref=l);let u=t;return t[0]&&(u=c.as||t,delete c.as),$&&u[0]&&$(c),Q(u,c)}return e?e(a):a}}var xt=t=>typeof t=="function",P=(t,e)=>xt(t)?t(e):t,vt=(()=>{let t=0;return()=>(++t).toString()})(),G=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Et=20,T=new Map,bt=1e3,B=t=>{if(T.has(t))return;let e=setTimeout(()=>{T.delete(t),j({type:4,toastId:t})},bt);T.set(t,e)},jt=t=>{let e=T.get(t);e&&clearTimeout(e)},k=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,Et)};case 1:return e.toast.id&&jt(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:o}=e;return t.toasts.find(r=>r.id===o.id)?k(t,{type:1,toast:o}):k(t,{type:0,toast:o});case 3:let{toastId:n}=e;return n?B(n):t.toasts.forEach(r=>{B(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===n||n===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},M=[],I={toasts:[],pausedAt:void 0},j=t=>{I=k(I,t),M.forEach(e=>{e(I)})},wt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Rt=(t={})=>{let[e,o]=s.useState(I);s.useEffect(()=>(M.push(o),()=>{let a=M.indexOf(o);a>-1&&M.splice(a,1)}),[e]);let n=e.toasts.map(a=>{var r,l;return{...t,...t[a.type],...a,duration:a.duration||((r=t[a.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||wt[a.type],style:{...t.style,...(l=t[a.type])==null?void 0:l.style,...a.style}}});return{...e,toasts:n}},Ot=(t,e="blank",o)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(o==null?void 0:o.id)||vt()}),R=t=>(e,o)=>{let n=Ot(e,t,o);return j({type:2,toast:n}),n.id},y=(t,e)=>R("blank")(t,e);y.error=R("error");y.success=R("success");y.loading=R("loading");y.custom=R("custom");y.dismiss=t=>{j({type:3,toastId:t})};y.remove=t=>j({type:4,toastId:t});y.promise=(t,e,o)=>{let n=y.loading(e.loading,{...o,...o==null?void 0:o.loading});return t.then(a=>(y.success(P(e.success,a),{id:n,...o,...o==null?void 0:o.success}),a)).catch(a=>{y.error(P(e.error,a),{id:n,...o,...o==null?void 0:o.error})}),t};var Lt=(t,e)=>{j({type:1,toast:{id:t,height:e}})},Tt=()=>{j({type:5,time:Date.now()})},Mt=t=>{let{toasts:e,pausedAt:o}=Rt(t);s.useEffect(()=>{if(o)return;let r=Date.now(),l=e.map(c=>{if(c.duration===1/0)return;let p=(c.duration||0)+c.pauseDuration-(r-c.createdAt);if(p<0){c.visible&&y.dismiss(c.id);return}return setTimeout(()=>y.dismiss(c.id),p)});return()=>{l.forEach(c=>c&&clearTimeout(c))}},[e,o]);let n=s.useCallback(()=>{o&&j({type:6,time:Date.now()})},[o]),a=s.useCallback((r,l)=>{let{reverseOrder:c=!1,gutter:p=8,defaultPosition:u}=l||{},m=e.filter(f=>(f.position||u)===(r.position||u)&&f.height),_=m.findIndex(f=>f.id===r.id),h=m.filter((f,w)=>w<_&&f.visible).length;return m.filter(f=>f.visible).slice(...c?[h+1]:[0,h]).reduce((f,w)=>f+(w.height||0)+p,0)},[e]);return{toasts:e,handlers:{updateHeight:Lt,startPause:Tt,endPause:n,calculateOffset:a}}},It=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Pt=v`
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

  animation: ${It} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Pt} 0.15s ease-out forwards;
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
`,Ft=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Bt=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ft} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ut=({toast:t})=>{let{icon:e,type:o,iconTheme:n}=t;return e!==void 0?typeof e=="string"?s.createElement(Bt,null,e):e:o==="blank"?null:s.createElement(Nt,null,s.createElement(Vt,{...n}),o!=="loading"&&s.createElement(Ct,null,o==="error"?s.createElement(At,{...n}):s.createElement(kt,{...n})))},Wt=t=>`
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
`,Yt=(t,e)=>{let o=t.includes("top")?1:-1,[n,a]=G()?[Ht,Jt]:[Wt(o),qt(o)];return{animation:e?`${v(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Zt=s.memo(({toast:t,position:e,style:o,children:n})=>{let a=t.height?Yt(t.position||e||"top-center",t.visible):{opacity:0},r=s.createElement(Ut,{toast:t}),l=s.createElement(Gt,{...t.ariaProps},P(t.message,t));return s.createElement(Qt,{className:t.className,style:{...a,...o,...t.style}},typeof n=="function"?n({icon:r,message:l}):s.createElement(s.Fragment,null,r,l))});gt(s.createElement);var Kt=({id:t,className:e,style:o,onHeightUpdate:n,children:a})=>{let r=s.useCallback(l=>{if(l){let c=()=>{let p=l.getBoundingClientRect().height;n(t,p)};c(),new MutationObserver(c).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return s.createElement("div",{ref:r,className:e,style:o},a)},Xt=(t,e)=>{let o=t.includes("top"),n=o?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:G()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(o?1:-1)}px)`,...n,...a}},te=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,L=16,ee=({reverseOrder:t,position:e="top-center",toastOptions:o,gutter:n,children:a,containerStyle:r,containerClassName:l})=>{let{toasts:c,handlers:p}=Mt(o);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:L,left:L,right:L,bottom:L,pointerEvents:"none",...r},className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},c.map(u=>{let m=u.position||e,_=p.calculateOffset(u,{reverseOrder:t,gutter:n,defaultPosition:e}),h=Xt(m,_);return s.createElement(Kt,{id:u.id,key:u.id,onHeightUpdate:p.updateHeight,className:u.visible?te:"",style:h},u.type==="custom"?P(u.message,u):a?a(u):s.createElement(Zt,{toast:u,position:m}))}))},Ye=y;const re=s.createContext("");const Ze=(t,e)=>{localStorage.setItem(t,e)},Ke=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},Xe=t=>{const e=localStorage.getItem(t);return e||null},U=t=>{const e=localStorage.getItem(t);try{return e?JSON.parse(e):null}catch{return null}},tr=t=>{localStorage.clear()},oe=s.lazy(()=>d(()=>import("./Login-a2b5d41a.js"),["/assets/Login-e4615527.css"],import.meta.url)),ae=s.lazy(()=>d(()=>import("./Home-50395671.js"),[],import.meta.url)),se=s.lazy(()=>d(()=>import("./ProtectedRoutes-4e5242f8.js"),["/assets/ProtectedRoutes-2ca5915d.css"],import.meta.url)),ie=s.lazy(()=>d(()=>import("./WorkflowSidebar-83de8b3f.js"),["/assets/ShimmerTable-9d8896e8.css","/assets/WorkflowSidebar-66cea161.css"],import.meta.url)),ne=s.lazy(()=>d(()=>import("./SpIndex-2f4d13a0.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),le=s.lazy(()=>d(()=>import("./FaqIndex-4b1e830e.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),ce=s.lazy(()=>d(()=>import("./ErrorPage-dde69815.js"),["/assets/ErrorPage-21b32a13.css"],import.meta.url)),de=s.lazy(()=>d(()=>import("./UserRole-cb022163.js"),["/assets/ShimmerTable-9d8896e8.css"],import.meta.url)),ue=s.lazy(()=>d(()=>import("./index-b66035cd.js"),[],import.meta.url)),pe=s.lazy(()=>d(()=>import("./ConstructionMaster-815683a4.js"),[],import.meta.url)),me=s.lazy(()=>d(()=>import("./FloorMaster-ee3fe302.js"),[],import.meta.url)),_e=s.lazy(()=>d(()=>import("./ObjectionMaster-e578d81f.js"),[],import.meta.url)),fe=s.lazy(()=>d(()=>import("./UsageType-1128ab0b.js"),[],import.meta.url)),he=s.lazy(()=>d(()=>import("./GbBuildingMaster-23d6f4a4.js"),[],import.meta.url)),ye=s.lazy(()=>d(()=>import("./OccupancyMaster-ea7f34e2.js"),[],import.meta.url)),ge=s.lazy(()=>d(()=>import("./PropertyMaster-535eaa81.js"),[],import.meta.url)),xe=s.lazy(()=>d(()=>import("./GbpropusageMaster-f8397ba0.js"),[],import.meta.url)),ve=s.lazy(()=>d(()=>import("./OccupancyFactorMaster-d1d2b556.js"),[],import.meta.url)),Ee=s.lazy(()=>d(()=>import("./RoadTypeMaster-05716646.js"),[],import.meta.url)),be=s.lazy(()=>d(()=>import("./OwnershipType-1646097b.js"),[],import.meta.url)),je=s.lazy(()=>d(()=>import("./UlbMaster-03e2ef89.js"),[],import.meta.url)),we=s.lazy(()=>d(()=>import("./TransferModeMaster-89501112.js"),[],import.meta.url)),Re=s.lazy(()=>d(()=>import("./RebateTypeMaster-e7796112.js"),[],import.meta.url)),Oe=s.lazy(()=>d(()=>import("./PenaltyTypeMaster-398728d3.js"),[],import.meta.url)),Le=s.lazy(()=>d(()=>import("./ForgeryTypeMaster-30d032ff.js"),[],import.meta.url)),Te=s.lazy(()=>d(()=>import("./districtMaster-228db157.js"),[],import.meta.url)),Me=s.lazy(()=>d(()=>import("./SchemeTypeMaster-4f4404ea.js"),[],import.meta.url)),Ie=s.lazy(()=>d(()=>import("./CityMaster-2478c1d7.js"),[],import.meta.url)),Pe=s.lazy(()=>d(()=>import("./WaterMaster-f4619b4b.js"),[],import.meta.url)),De=s.lazy(()=>d(()=>import("./ZoneMaster-8e5577de.js"),[],import.meta.url)),Ae=s.lazy(()=>d(()=>import("./BuildingRentalCostListMaster-674c3589.js"),[],import.meta.url)),ze=s.lazy(()=>d(()=>import("./RentalValuesListMaster-8763c746.js"),[],import.meta.url)),Ve=s.lazy(()=>d(()=>import("./RoadTypesListMaster-9f0c60d0.js"),[],import.meta.url)),Se=s.lazy(()=>d(()=>import("./VacantRentalRatesListMaster-476298e1.js"),[],import.meta.url)),$e=s.lazy(()=>d(()=>import("./CapitalValueRateListMaster-b600034e.js"),[],import.meta.url)),ke=s.lazy(()=>d(()=>import("./AssetsMaster-8224d740.js"),[],import.meta.url)),Ce=s.lazy(()=>d(()=>import("./SliderMaster-fcb650a3.js"),[],import.meta.url)),Ne=s.lazy(()=>d(()=>import("./BuildingRentalRatesListMaster-f04135ef.js"),[],import.meta.url)),Fe=s.lazy(()=>d(()=>import("./UlbWardMaster-81978f6a.js"),[],import.meta.url)),Be=s.lazy(()=>d(()=>import("./MultiFactorMaster-84f4e057.js"),[],import.meta.url));function Ue(){const[t,e]=s.useState(U("menuList")),[o,n]=s.useState(U("userDetails")),[a,r]=s.useState(""),[l,c]=s.useState(0),[p,u]=s.useState(!0),[m,_]=s.useState(1),[h,f]=s.useState(!(window.innerWidth<=763)),[w,Y]=s.useState({});window.addEventListener("resize",function(){window.innerWidth<=763&&f(!1),window.innerWidth>=1280&&f(!0)});const Z={menuList:t,setmenuList:e,userDetails:o,setuserDetails:n,titleText:a,settitleText:r,titleBarVisibility:p,settitleBarVisibility:u,heartBeatCounter:m,setheartBeatCounter:_,toggleBar:h,settoggleBar:f,refresh:l,setrefresh:c,formikInitialValues:w,setFormikInitialValues:Y},z=[{path:"/home",element:i.jsx(ae,{})},{path:"/faq-master",element:i.jsx(le,{})},{path:"/scheme-master",element:i.jsx(ne,{})},{path:"/workflow-master",element:i.jsx(ie,{})},{path:"/user-role",element:i.jsx(de,{})},{path:"/test",element:i.jsx(ue,{})},{path:"/constructionMaster",element:i.jsx(pe,{})},{path:"/floorMaster",element:i.jsx(me,{})},{path:"/objectionMaster",element:i.jsx(_e,{})},{path:"/usageTypeMaster",element:i.jsx(fe,{})},{path:"/gbBuildingMaster",element:i.jsx(he,{})},{path:"/occupancyMaster",element:i.jsx(ye,{})},{path:"/propertyMaster",element:i.jsx(ge,{})},{path:"/gbpropusageMaster",element:i.jsx(xe,{})},{path:"/occupancyFactorMaster",element:i.jsx(ve,{})},{path:"/zoneMaster",element:i.jsx(De,{})},{path:"/cityMaster",element:i.jsx(Ie,{})},{path:"/waterMaster",element:i.jsx(Pe,{})},{path:"/sliderMaster",element:i.jsx(Ce,{})},{path:"/capitalValueRateListMaster",element:i.jsx($e,{})},{path:"/buildingRentalCostListMaster",element:i.jsx(Ae,{})},{path:"/rentalValuesListMaster",element:i.jsx(ze,{})},{path:"/roadTypesListMaster",element:i.jsx(Ve,{})},{path:"/vacantRentalRatesListMaster",element:i.jsx(Se,{})},{path:"/roadTypeMaster",element:i.jsx(Ee,{})},{path:"/ownershipTypeMaster",element:i.jsx(be,{})},{path:"/ulbMaster",element:i.jsx(je,{})},{path:"/transferModeMaster",element:i.jsx(we,{})},{path:"/rebateTypeMaster",element:i.jsx(Re,{})},{path:"/penaltyTypeMaster",element:i.jsx(Oe,{})},{path:"/forgeryTypeMaster",element:i.jsx(Le,{})},{path:"/districtMaster",element:i.jsx(Te,{})},{path:"/schemeTypeMaster",element:i.jsx(Me,{})},{path:"/assetsMaster",element:i.jsx(ke,{})},{path:"/buildingrentalrate",element:i.jsx(Ne,{})},{path:"/ulbWardMaster",element:i.jsx(Fe,{})},{path:"/multiFactorMaster",element:i.jsx(Be,{})}];return i.jsxs(i.Fragment,{children:[i.jsx(ee,{}),i.jsx(re.Provider,{value:Z,children:i.jsxs(K,{children:[i.jsx(O,{index:!0,element:i.jsx(oe,{})}),i.jsx(O,{element:i.jsx(se,{}),children:z==null?void 0:z.map(g=>i.jsx(O,{path:g==null?void 0:g.path,element:g==null?void 0:g.element},g==null?void 0:g.path))}),i.jsx(O,{path:"*",element:i.jsx(ce,{})})]})})]})}class We extends W.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){var e;return this.state.hasError?i.jsx(i.Fragment,{children:i.jsx("div",{className:"w-screen h-screen flex justify-center items-center",children:i.jsx("div",{className:"w-2/3 h-60 bg-white mx-auto my-auto text-center flex justify-center items-center shadow-xl",children:i.jsxs("div",{children:[i.jsx("h1",{className:"text-red-600 text-2xl font-semibold",children:(e=this.props)==null?void 0:e.errorMsg}),i.jsxs("div",{className:"flex gap-2 items-center",children:[i.jsx("button",{onClick:()=>window.history.back(),className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-5",children:"Go Back"}),i.jsx("button",{onClick:()=>window.location.reload(),className:"cypress_next1_button px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-5",children:"Reload"})]})]})})})}):this.props.children}}const qe=new et;V.createRoot(document.getElementById("root")).render(i.jsx(W.StrictMode,{children:i.jsx(X,{basename:"/adminControl",children:i.jsx(s.Suspense,{fallback:i.jsx("div",{className:"h-screen w-screen flex items-center justify-center",children:i.jsxs("div",{class:"spinner",children:[i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{}),i.jsx("div",{})]})}),children:i.jsx(We,{children:i.jsxs(rt,{client:qe,children:[i.jsx(Ue,{}),i.jsx(ot.ReactQueryDevtools,{initialIsOpen:!1})]})})})})}));export{ee as I,Ye as _,Ke as a,re as c,Xe as g,i as j,tr as l,y as n,Ze as s};
