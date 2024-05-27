import{c as J,b as n,j as i}from"./index-dc2e80f3.js";import{a as K}from"./useCustomQuery-d19cb7d6.js";import{R as S}from"./RentalApiList-2e3f3ec6.js";import"./ApiHeader2-b363f7b8.js";function X(){var l,t,r,o,c,m,a,d,N,p,_,v,h,b,x,y,f,u,P,T,R,A,w,M,g,k,V,C,W,j,D,I,L,F,B;const{id:s}=J(),{api_list_toll_receipt:E}=S(),{data:e,isLoading:U,isError:Y}=K({key:"api_list_toll_receipt",api:E,config:{tollId:s},options:{enabled:!!s}}),O="  "+((l=e==null?void 0:e.data)==null?void 0:l.ulb_name)+`
[C](Toll Payment Receipt)
 
Circle Name: `+((t=e==null?void 0:e.data)==null?void 0:t.circle_name)+`
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
Tc Mobile: `+((y=e==null?void 0:e.data)==null?void 0:y.reciever_mobile)+`
 
******************************* 
[C]For Details Please Visit: 
[C]`+((f=e==null?void 0:e.data)==null?void 0:f.website)+` 
[C]`+((u=e==null?void 0:e.data)==null?void 0:u.toll_free_no)+`


`,z=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:O}}))};return n("div",{className:"p-4",children:[i("div",{className:" border-dashed text-[14px]   text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:i("div",{className:" text-justify font-poppins ",children:n("div",{className:" text-gray-700  text-xs",children:[i("div",{className:"text-center  font-semibold mt-5",children:((P=e==null?void 0:e.data)==null?void 0:P.ulb_name)||"NA"}),i("div",{className:"text-center ",children:(T=e==null?void 0:e.data)==null?void 0:T.circle_name}),n("div",{className:"mt-4",children:["Receipt No : ",((R=e==null?void 0:e.data)==null?void 0:R.transaction_no)||"NA"]}),n("div",{className:"",children:["Vendor Name : ",((A=e==null?void 0:e.data)==null?void 0:A.vendor_name)||"NA"]}),n("div",{className:"",children:["Toll No: ",(w=e==null?void 0:e.data)==null?void 0:w.toll_no]}),n("div",{className:"",children:["Address : ",(M=e==null?void 0:e.data)==null?void 0:M.address]}),n("div",{className:"",children:["Market : ",(g=e==null?void 0:e.data)==null?void 0:g.market_name]}),n("div",{className:"",children:["Rate : ",(k=e==null?void 0:e.data)==null?void 0:k.rate]}),n("div",{className:"",children:["Mobile : ",(V=e==null?void 0:e.data)==null?void 0:V.mobile]}),n("div",{className:"",children:["Last Payment Date : ",(C=e==null?void 0:e.data)==null?void 0:C.last_payment_date]}),n("div",{className:"",children:["Paid Amount : ",(W=e==null?void 0:e.data)==null?void 0:W.last_payment_amount]}),n("div",{className:"",children:["In Word : ",(j=e==null?void 0:e.data)==null?void 0:j.inWords]}),n("div",{className:"",children:["Mode : ",((D=e==null?void 0:e.data)==null?void 0:D.payment_mode)||"NA"]}),n("div",{className:"",children:["Paid Upto : ",(I=e==null?void 0:e.data)==null?void 0:I.payment_upto]}),i("div",{className:"text-center mt-2",children:"****************************************************"}),n("div",{className:"",children:["Tc Name : ",(L=e==null?void 0:e.data)==null?void 0:L.reciever_name]}),n("div",{className:"",children:["Tc Mobile No. : ",(F=e==null?void 0:e.data)==null?void 0:F.reciever_mobile]}),i("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),i("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),n("div",{className:"text-center font-semibold  mb-5",children:["Visit: ",((B=e==null?void 0:e.data)==null?void 0:B.website)||"NA"]})]})})}),i("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:i("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>{z()},children:"Print"})})]})}export{X as default};
