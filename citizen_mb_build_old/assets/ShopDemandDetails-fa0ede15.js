import{f as C,b as s,j as n}from"./index-350d2eca.js";import{a as j}from"./useCustomQuery-bf15c1d4.js";import{R as F}from"./RentalApiList-05ba5791.js";import"./ApiHeader2-b363f7b8.js";function O(){var a,r,c,d,m,h,p,N,x,v,f,u,b,y,g,R,A,w,D,P,T;const _=C(),o=new URLSearchParams(_.search),i=o.get("shop_id"),l=o.get("month"),{api_shop_generate_demand:k}=F(),{data:e,isLoading:I,isError:M}=j({key:"api_shop_generate_demand",api:k,config:{shopId:i,month:l},options:{enabled:!!i&&!!l}}),S="  "+((a=e==null?void 0:e.data)==null?void 0:a.ulbName)+`
[C]Shop Demand Receipt
 
******************************* 
Allottee Name: `+((r=e==null?void 0:e.data)==null?void 0:r.allottee)+`
Market: `+((c=e==null?void 0:e.data)==null?void 0:c.market)+`
Shop No: `+((d=e==null?void 0:e.data)==null?void 0:d.shopNo)+`
Shop Category: `+((m=e==null?void 0:e.data)==null?void 0:m.shopType)+`
Amount: `+((h=e==null?void 0:e.data)==null?void 0:h.totalAmount)+`
(In words): `+((p=e==null?void 0:e.data)==null?void 0:p.amountinWords)+`
Demand Details: 
[L]Period[R]Amount
`+((x=(N=e==null?void 0:e.data)==null?void 0:N.shopDemand)==null?void 0:x.map(t=>(t==null?void 0:t.monthly)+"[R]"+(t==null?void 0:t.amount)+`
`))+`
******************************* 
[C]For Details Please Visit: 
[C]`+((v=e==null?void 0:e.data)==null?void 0:v.website)+` 
[C]`+((f=e==null?void 0:e.data)==null?void 0:f.tollFreeNo)+`


`,L=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:S}})),console.log("printText",paymentData)};return s("div",{className:"mt-20",children:[n("div",{className:" border-dashed text-[14px]   text-gray-700  border-2 font-Lato  w-[22rem] p-3 ml-5 mt-4 border-gray-700 ",children:n("div",{className:" text-justify font-poppins ",children:s("div",{className:" text-gray-700  text-xs",children:[n("div",{className:"text-center  font-semibold",children:((u=e==null?void 0:e.data)==null?void 0:u.ulbName)||"NA"}),n("div",{className:"text-center ",children:"Municipal Rental Demand Receipt"}),s("div",{className:"mt-2",children:["Allottee name : ",((b=e==null?void 0:e.data)==null?void 0:b.allottee)||"NA"]}),s("div",{className:"",children:["Market : ",(y=e==null?void 0:e.data)==null?void 0:y.market]}),s("div",{className:"",children:["Shop no : ",(g=e==null?void 0:e.data)==null?void 0:g.shopNo]}),s("div",{className:"",children:["Shop category : ",((R=e==null?void 0:e.data)==null?void 0:R.shopType)||"NA"]}),s("div",{className:"",children:["Amount : ",((A=e==null?void 0:e.data)==null?void 0:A.totalAmount)||"NA"]}),s("div",{className:"",children:["(in words) : ",(w=e==null?void 0:e.data)==null?void 0:w.amountinWords]}),n("div",{className:"mt-2 font-semibold",children:"Demand Details :"}),s("div",{className:"flex mt-1 text-center",children:[n("div",{className:"flex-1",children:"Period"}),n("div",{className:"flex-1",children:"Amount"})]}),(P=(D=e==null?void 0:e.data)==null?void 0:D.shopDemand)==null?void 0:P.map(t=>s("div",{className:"flex mt-1 text-center",children:[n("div",{className:"flex-1",children:t==null?void 0:t.monthly}),n("div",{className:"flex-1",children:t==null?void 0:t.amount})]})),n("div",{className:"text-center mt-2 text-xs font-semibold",children:"***This is a demand generated receipt, not a payment receipt***"}),n("div",{className:"text-center mt-2 text-xs",children:"***************************************"}),n("div",{className:"text-center font-semibold capitalize mt-2",children:"For details please visit"}),n("div",{className:"text-center font-semibold  ",children:e==null?void 0:e.data.website}),n("div",{className:"text-center font-semibold  ",children:(T=e==null?void 0:e.data)==null?void 0:T.tollFreeNo})]})})}),n("div",{className:"mt-4 flex justify-center",children:n("button",{className:"bg-sky-500 px-3 py-1 text-xs  text-white ",onClick:()=>L(),children:"Print Receipt"})})]})}export{O as default};
