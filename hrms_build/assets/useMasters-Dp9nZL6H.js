import{f as s,j as a,h as n,q as h}from"./index-BUAqwvjp.js";import{u as g,C as m}from"./label-SrgL-fwq.js";import{I as M,b as i,a as x}from"./useCustomQuery-B3XmTANn.js";/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=s("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=s("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=s("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function $({name:t,label:e,isDynamic:r,isRequired:p,...c}){const{control:y,setValue:u}=g();return a.jsx(m,{name:t,control:y,render:({field:{ref:d},fieldState:{error:l}})=>a.jsxs(a.Fragment,{children:[a.jsxs("label",{className:"text-gray-700 dark:text-gray-200",htmlFor:e,children:[e," ",p&&a.jsx("span",{className:"text-red-400",children:"*"})]}),a.jsx(M,{type:"file",onChange:o=>{u(t,o.target.files?o.target.files[0]:null)},ref:d,className:`mt-1 ${l?"border-red-400":null}`,...c}),l&&a.jsx("span",{className:"text-red-400 text-xs",children:l.message})]})})}function E(){var e;return i({api:`${(e=n)==null?void 0:e.getAllEmpTypes}?page=1&limit=1000`,key:"getEmployeeTypeMaster",value:[],options:{enabled:!0}})}function B(){var e;return i({api:`${(e=n)==null?void 0:e.getAllDepartmentMstr}?page=1&limit=1000`,key:"getDepartmentMaster",value:[],options:{enabled:!0}})}function H(){var e;return i({api:`${(e=n)==null?void 0:e.getAllDesignationMstr}?page=1&limit=1000`,key:"getDesignationMastersads",value:[],options:{enabled:!0}})}function U(){var e;return i({api:`${(e=n)==null?void 0:e.getAllDocumentTypes}?page=1&limit=1000`,key:"getAllDocumentTypes",value:[],options:{enabled:!0}})}function F(t){var r;return i({api:`${(r=n)==null?void 0:r.getModuleAccessByEmpId}?emp_id=${t}`,key:"getEmployeeModuleAccess",value:[t],options:{enabled:!!t}})}function q(){var e;return x({api:`${(e=h)==null?void 0:e.getUserTypeAuth}`,key:"getUserTypeAuth",value:[],options:{enabled:!0}})}export{D as B,L as H,T as M,b as P,$ as R,j as U,H as a,q as b,v as c,B as d,U as e,F as f,E as g};
