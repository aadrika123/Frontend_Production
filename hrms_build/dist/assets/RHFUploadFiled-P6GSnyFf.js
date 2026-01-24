import{k as e,j as a}from"./index-pyCvve81.js";import{u as s,C as t}from"./yup-C9jKbjb2.js";import{I as r}from"./input-DWARB5Y9.js";
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=e("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]),n=e("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),i=e("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),y=e("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);
/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function x({name:e,label:l,isDynamic:n,isRequired:i,...y}){const{control:x,setValue:o}=s();return a.jsx(t,{name:e,control:x,render:({field:{ref:s},fieldState:{error:t}})=>a.jsxs(a.Fragment,{children:[a.jsxs("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:l,children:[l," ",i&&a.jsx("span",{className:"text-red-400",children:"*"})]}),a.jsx(r,{type:"file",onChange:a=>{o(e,a.target.files?a.target.files[0]:null)},ref:s,className:`mt-1 ${t?"border-red-400":null}`,...y}),t&&a.jsx("span",{className:"text-red-400 text-xs",children:t.message})]})})}export{l as H,n as M,i as P,x as R,y as S};
