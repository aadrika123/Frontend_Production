import{f as L,b as s,j as n}from"./index-d234e753.js";import{a as S}from"./useCustomQuery-6fc50d1c.js";import{R as j}from"./RentalApiList-91990935.js";import"./ApiHeader2-b363f7b8.js";function B(){var l,r,c,d,m,h,p,N,x,v,f,u,b,y,R,g,w,A,D;const P=L(),i=new URLSearchParams(P.search),o=i.get("shop_id"),a=i.get("month"),{api_shop_generate_demand:_}=j(),{data:e,isLoading:C,isError:F}=S({key:"api_shop_generate_demand",api:_,config:{shopId:o,month:a},options:{enabled:!!o&&!!a}}),T="  "+((l=e==null?void 0:e.data)==null?void 0:l.ulbName)+`
[C]Shop Demand Receipt
 
******************************* 
Allottee Name: `+((r=e==null?void 0:e.data)==null?void 0:r.allottee)+`
Market: `+((c=e==null?void 0:e.data)==null?void 0:c.market)+`
Shop No: `+((d=e==null?void 0:e.data)==null?void 0:d.shopNo)+`
Amount: `+((m=e==null?void 0:e.data)==null?void 0:m.totalAmount)+`
(In words): `+((h=e==null?void 0:e.data)==null?void 0:h.amountinWords)+`
Demand Details: 
[L]Period[R]Amount
`+((N=(p=e==null?void 0:e.data)==null?void 0:p.shopDemand)==null?void 0:N.map(t=>(t==null?void 0:t.monthly)+"[R]"+(t==null?void 0:t.amount)+`
`))+`
******************************* 
[C]For Details Please Visit: 
[C]`+((x=e==null?void 0:e.data)==null?void 0:x.website)+` 
[C]`+((v=e==null?void 0:e.data)==null?void 0:v.tollFreeNo)+`


`,k=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:T}})),console.log("printText",paymentData)};return s("div",{className:"mt-20",children:[n("div",{className:" border-dashed text-[14px]   text-gray-700  border-2 font-Lato  w-[22rem] p-3 ml-5 mt-4 border-gray-700 ",children:n("div",{className:" text-justify font-poppins ",children:s("div",{className:" text-gray-700  text-xs",children:[n("div",{className:"text-center  font-semibold",children:((f=e==null?void 0:e.data)==null?void 0:f.ulbName)||"NA"}),n("div",{className:"text-center ",children:"Municipal Rental Demand Receipt"}),s("div",{className:"mt-2",children:["Allottee name : ",((u=e==null?void 0:e.data)==null?void 0:u.allottee)||"NA"]}),s("div",{className:"",children:["Market : ",(b=e==null?void 0:e.data)==null?void 0:b.market]}),s("div",{className:"",children:["Shop no : ",(y=e==null?void 0:e.data)==null?void 0:y.shopNo]}),s("div",{className:"",children:["Amount : ",((R=e==null?void 0:e.data)==null?void 0:R.totalAmount)||"NA"]}),s("div",{className:"",children:["(in words) : ",(g=e==null?void 0:e.data)==null?void 0:g.amountinWords]}),n("div",{className:"mt-2 font-semibold",children:"Demand Details :"}),s("div",{className:"flex mt-1 text-center",children:[n("div",{className:"flex-1",children:"Period"}),n("div",{className:"flex-1",children:"Amount"})]}),(A=(w=e==null?void 0:e.data)==null?void 0:w.shopDemand)==null?void 0:A.map(t=>s("div",{className:"flex mt-1 text-center",children:[n("div",{className:"flex-1",children:t==null?void 0:t.monthly}),n("div",{className:"flex-1",children:t==null?void 0:t.amount})]})),n("div",{className:"text-center mt-2 text-xs font-semibold",children:"***This is a demand generated receipt, not a payment receipt***"}),n("div",{className:"text-center mt-2 text-xs",children:"***************************************"}),n("div",{className:"text-center font-semibold capitalize mt-2",children:"For details please visit"}),n("div",{className:"text-center font-semibold  ",children:e==null?void 0:e.data.website}),n("div",{className:"text-center font-semibold  ",children:(D=e==null?void 0:e.data)==null?void 0:D.tollFreeNo})]})})}),n("div",{className:"mt-4 flex justify-center",children:n("button",{className:"bg-sky-500 px-3 py-1 text-xs  text-white ",onClick:()=>k(),children:"Print Receipt"})})]})}export{B as default};
