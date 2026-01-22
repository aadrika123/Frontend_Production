import{c as J,b as n,j as i}from"./index-d234e753.js";import{a as K}from"./useCustomQuery-6fc50d1c.js";import{R as S}from"./RentalApiList-91990935.js";import"./ApiHeader2-b363f7b8.js";function X(){var t,r,o,c,m,a,d,N,p,_,v,h,b,x,y,f,u,P,T,R,g,w,A,M,k,V,C,D,W,j,I,L,F;const{id:s}=J(),{api_list_toll_receipt:E}=S(),{data:e,isLoading:U,isError:Y}=K({key:"api_list_toll_receipt",api:E,config:{tollId:s},options:{enabled:!!s}}),l=((t=e==null?void 0:e.data)==null?void 0:t.website)||"https://egov.rsccl.in",O="  "+((r=e==null?void 0:e.data)==null?void 0:r.ulb_name)+`
[C](Toll Payment Receipt)
 
Circle Name: `+((o=e==null?void 0:e.data)==null?void 0:o.circle_name)+`
Receipt no: `+((c=e==null?void 0:e.data)==null?void 0:c.transaction_no)+`
******************************* 
Vendor Name: `+((m=e==null?void 0:e.data)==null?void 0:m.vendor_name)+`
Toll no: `+((a=e==null?void 0:e.data)==null?void 0:a.toll_no)+`
Address: `+((d=e==null?void 0:e.data)==null?void 0:d.address)+`
Vendor Name: `+((N=e==null?void 0:e.data)==null?void 0:N.vendor_name)+`
Mobile No: `+((p=e==null?void 0:e.data)==null?void 0:p.mobile)+`
Market name: `+((_=e==null?void 0:e.data)==null?void 0:_.market_name)+`
Rate: `+((v=e==null?void 0:e.data)==null?void 0:v.rate)+`
Mode: `+((h=e==null?void 0:e.data)==null?void 0:h.payment_mode)+`
Payment Date: `+((b=e==null?void 0:e.data)==null?void 0:b.last_payment_date)+`
Amount: `+((x=e==null?void 0:e.data)==null?void 0:x.last_amount)+`
(In Words): `+((y=e==null?void 0:e.data)==null?void 0:y.inWords)+`
 
*******************************
Tc Name: `+((f=e==null?void 0:e.data)==null?void 0:f.reciever_name)+`
Tc Mobile: `+((u=e==null?void 0:e.data)==null?void 0:u.reciever_mobile)+`
 
******************************* 
[C]For Details Please Visit: 
[C]`+l+` 
[C]`+((P=e==null?void 0:e.data)==null?void 0:P.toll_free_no)+`


`,z=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:O}}))};return console.log(e==null?void 0:e.data),n("div",{className:"p-4",children:[i("div",{className:" border-dashed text-[14px]   text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:i("div",{className:" text-justify font-poppins ",children:n("div",{className:" text-gray-700  text-xs",children:[i("div",{className:"text-center  font-semibold mt-5",children:((T=e==null?void 0:e.data)==null?void 0:T.ulb_name)||"NA"}),i("div",{className:"text-center ",children:"(Toll Payment Receipt)"}),n("div",{className:"mt-4",children:["Receipt No : ",((R=e==null?void 0:e.data)==null?void 0:R.transaction_no)||"NA"]}),n("div",{className:"",children:["Vendor Name : ",((g=e==null?void 0:e.data)==null?void 0:g.vendor_name)||"NA"]}),n("div",{className:"",children:["Toll No: ",(w=e==null?void 0:e.data)==null?void 0:w.toll_no]}),n("div",{className:"",children:["Address : ",(A=e==null?void 0:e.data)==null?void 0:A.address]}),n("div",{className:"",children:["Market : ",(M=e==null?void 0:e.data)==null?void 0:M.market_name]}),n("div",{className:"",children:["Rate : ",(k=e==null?void 0:e.data)==null?void 0:k.rate]}),n("div",{className:"",children:["Mobile : ",(V=e==null?void 0:e.data)==null?void 0:V.mobile]}),n("div",{className:"",children:["Last Payment Date : ",(C=e==null?void 0:e.data)==null?void 0:C.last_payment_date]}),n("div",{className:"",children:["Paid Amount : ",(D=e==null?void 0:e.data)==null?void 0:D.last_payment_amount]}),n("div",{className:"",children:["In Word : ",(W=e==null?void 0:e.data)==null?void 0:W.inWords]}),n("div",{className:"",children:["Mode : ",((j=e==null?void 0:e.data)==null?void 0:j.payment_mode)||"NA"]}),n("div",{className:"",children:["Paid Upto : ",(I=e==null?void 0:e.data)==null?void 0:I.payment_upto]}),i("div",{className:"text-center mt-2",children:"****************************************************"}),n("div",{className:"",children:["Tc Name : ",(L=e==null?void 0:e.data)==null?void 0:L.reciever_name]}),n("div",{className:"",children:["Tc Mobile No. : ",(F=e==null?void 0:e.data)==null?void 0:F.reciever_mobile]}),i("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),i("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),n("div",{className:"text-center font-semibold  mb-5",children:["Visit: ",l]})]})})}),i("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:i("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>{var B;z(),console.log((B=e.data)==null?void 0:B.receiptDtls)},children:"Print"})})]})}export{X as default};
