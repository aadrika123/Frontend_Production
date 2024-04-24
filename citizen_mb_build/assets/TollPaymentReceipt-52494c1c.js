import{c as K,b as n,j as i}from"./index-edad28b0.js";import{a as S}from"./useCustomQuery-f6799d9f.js";import{R as U}from"./RentalApiList-82cf3775.js";import"./ApiHeader2-b363f7b8.js";function Z(){var l,t,r,o,c,m,a,d,N,p,_,v,h,b,x,f,u,y,P,T,R,g,A,w,M,k,V,D,W,j,I,L,C,F,B;const{id:s}=K(),{api_list_toll_receipt:O}=U(),{data:e,isLoading:Y,isError:q}=S({key:"api_list_toll_receipt",api:O,config:{tollId:s},options:{enabled:!!s}}),z="  "+((l=e==null?void 0:e.data)==null?void 0:l.ulb_name)+`
`+((t=e==null?void 0:e.data)==null?void 0:t.circle_name)+`
Receipt no: `+((r=e==null?void 0:e.data)==null?void 0:r.transaction_no)+`
******************************* 
Vendor Name: `+((o=e==null?void 0:e.data)==null?void 0:o.vendor_name)+`
Toll no: `+((c=e==null?void 0:e.data)==null?void 0:c.toll_no)+`
Address: `+((m=e==null?void 0:e.data)==null?void 0:m.address)+`
Vendor Name: `+((a=e==null?void 0:e.data)==null?void 0:a.vendor_name)+`
Mobile No: `+((d=e==null?void 0:e.data)==null?void 0:d.mobile)+`
Market name: `+((N=e==null?void 0:e.data)==null?void 0:N.market_name)+`
Rate: `+((p=e==null?void 0:e.data)==null?void 0:p.rate)+`
Mode: `+((_=e==null?void 0:e.data)==null?void 0:_.payment_mode)+`
Payment Date: `+((v=e==null?void 0:e.data)==null?void 0:v.last_payment_date)+`
Amount: `+((h=e==null?void 0:e.data)==null?void 0:h.last_amount)+`
(In Words): `+((b=e==null?void 0:e.data)==null?void 0:b.inWords)+`
 
*******************************
Tc Name: `+((x=e==null?void 0:e.data)==null?void 0:x.reciever_name)+`
Tc Mobile: `+((f=e==null?void 0:e.data)==null?void 0:f.reciever_mobile)+`
 
******************************* 
[C]For Details Please Visit: 
[C]`+((u=e==null?void 0:e.data)==null?void 0:u.website)+` 
[C]`+((y=e==null?void 0:e.data)==null?void 0:y.toll_free_no)+`


`,J=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:z}}))};return console.log(e==null?void 0:e.data),n("div",{className:"p-4",children:[i("div",{className:" border-dashed text-[14px]   text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:i("div",{className:" text-justify font-poppins ",children:n("div",{className:" text-gray-700  text-xs",children:[i("div",{className:"text-center  font-semibold mt-5",children:((P=e==null?void 0:e.data)==null?void 0:P.ulb_name)||"NA"}),i("div",{className:"text-center ",children:(T=e==null?void 0:e.data)==null?void 0:T.circle_name}),n("div",{className:"mt-4",children:["Receipt No : ",((R=e==null?void 0:e.data)==null?void 0:R.transaction_no)||"NA"]}),n("div",{className:"",children:["Vendor Name : ",((g=e==null?void 0:e.data)==null?void 0:g.vendor_name)||"NA"]}),n("div",{className:"",children:["Toll No: ",(A=e==null?void 0:e.data)==null?void 0:A.toll_no]}),n("div",{className:"",children:["Address : ",(w=e==null?void 0:e.data)==null?void 0:w.address]}),n("div",{className:"",children:["Market : ",(M=e==null?void 0:e.data)==null?void 0:M.market_name]}),n("div",{className:"",children:["Rate : ",(k=e==null?void 0:e.data)==null?void 0:k.rate]}),n("div",{className:"",children:["Mobile : ",(V=e==null?void 0:e.data)==null?void 0:V.mobile]}),n("div",{className:"",children:["Last Payment Date : ",(D=e==null?void 0:e.data)==null?void 0:D.last_payment_date]}),n("div",{className:"",children:["Paid Amount : ",(W=e==null?void 0:e.data)==null?void 0:W.last_payment_amount]}),n("div",{className:"",children:["In Word : ",(j=e==null?void 0:e.data)==null?void 0:j.inWords]}),n("div",{className:"",children:["Mode : ",((I=e==null?void 0:e.data)==null?void 0:I.payment_mode)||"NA"]}),n("div",{className:"",children:["Paid Upto : ",(L=e==null?void 0:e.data)==null?void 0:L.payment_upto]}),i("div",{className:"text-center mt-2",children:"****************************************************"}),n("div",{className:"",children:["Tc Name : ",(C=e==null?void 0:e.data)==null?void 0:C.reciever_name]}),n("div",{className:"",children:["Tc Mobile No. : ",(F=e==null?void 0:e.data)==null?void 0:F.reciever_mobile]}),i("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),i("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),n("div",{className:"text-center font-semibold  mb-5",children:["Visit: ",((B=e==null?void 0:e.data)==null?void 0:B.website)||"NA"]})]})})}),i("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:i("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>{var E;J(),console.log((E=e.data)==null?void 0:E.receiptDtls)},children:"Print"})})]})}export{Z as default};
