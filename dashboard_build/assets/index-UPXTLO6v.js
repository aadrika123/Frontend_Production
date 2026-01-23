import{r as s,j as t,N as r}from"./index-DUWZRsYS.js";import{$ as D,A as w}from"./AnimationDashboard-Co_ILPpg.js";import{J as N}from"./JharkhandMap-DhWJOsu4.js";import{P as M}from"./index-D8WoLqb8.js";import{u as v,b as L}from"./useCustomQuery-D8nGRmzF.js";function C(){const[l,u]=s.useState(null),[x,n]=s.useState(null),[o,i]=s.useState(!1),[p,b]=s.useState(0),[m,f]=s.useState(0),c=v({}),h=L(),g=async()=>{try{const a=await c.mutateAsync({api:r.getDistrictList});a.data.status&&(k(a.data.data),b(a.data.data.length))}catch{}},j=async a=>{i(!0),n(null);try{const e=await c.mutateAsync({api:r.getUlbDataByDistrict,data:{districtCode:a}});e.data.status&&n(e.data.data)}catch{}finally{i(!1)}},y=async()=>{try{const a=await h.mutateAsync({api:r.getUlbList});a.data.status&&f(a.data.data.length)}catch{}},k=a=>{const e={};a==null||a.forEach(d=>{e[d.label.toLowerCase()]=d.id}),u(e)};return s.useEffect(()=>{g(),y()},[]),t.jsx(M,{title:"Jharkhand Map",children:t.jsx("div",{className:"w-full mx-auto mb-20 space-x-3",children:t.jsxs("div",{className:`
            grid grid-cols-12 rounded-lg
            bg-background text-foreground
            shadow-xl dark:shadow-black/40
            border border-border
          `,children:[t.jsx("div",{className:"col-span-12 px-10 py-4 text-xl font-semibold",children:"Jharkhand ULB wise property count"}),t.jsxs("div",{className:"col-span-8 py-4 px-20 mr-4 flex justify-center items-center flex-col",children:[o&&t.jsx(D,{strokeColor:"currentColor",width:"48"}),t.jsx(N,{isLoadingJharkhandMap:o,districtListObjectData:l,ulbDataByDistrictData:x,fetchUlbDataByDistrict:j})]}),t.jsxs("div",{className:"col-span-4 py-4 flex justify-center items-center flex-col space-y-6",children:[t.jsx(w,{}),t.jsxs("div",{className:"space-y-4 w-full max-w-xs",children:[t.jsx("div",{className:`
                  p-4 rounded-lg border
                  bg-gradient-to-r
                  from-blue-50 to-blue-100
                  dark:from-blue-950 dark:to-blue-900
                `,children:t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("span",{className:"font-semibold text-muted-foreground",children:"Total Districts"}),t.jsx("span",{className:`
                      px-4 py-2 rounded-lg font-bold text-lg
                      bg-blue-600 text-white dark:bg-blue-500
                    `,children:p})]})}),t.jsx("div",{className:`
                  p-4 rounded-lg border
                  bg-gradient-to-r
                  from-green-50 to-green-100
                  dark:from-green-950 dark:to-green-900
                `,children:t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("span",{className:"font-semibold text-muted-foreground",children:"Total ULBs"}),t.jsx("span",{className:`
                      px-4 py-2 rounded-lg font-bold text-lg
                      bg-green-600 text-white dark:bg-green-500
                    `,children:m})]})})]})]})]})})})}function S(){return t.jsx(C,{})}export{S as default};
