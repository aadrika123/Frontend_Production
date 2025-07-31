import{c as he,R as Ne,b as n,j as i,F as me}from"./index-9bb62302.js";import{a as de}from"./useCustomQuery-86e6a779.js";import{R as pe}from"./RentalApiList-e90481e3.js";import"./moment-a9aaa855.js";import"./ApiHeader2-b363f7b8.js";function Ae(){var c,r,m,o,t,l,a,h,N,d,p,_,u,v,b,y,f,x,A,k,C,P,R,D,q,g,M,T,w,B,E,L,j,F,I,S,W,U,V,z,H,O,Q,Y;const{id:s}=he(),{api_shop_receipt:oe}=pe(),{data:e,isLoading:_e,isError:ue}=de({api:oe,config:{tranId:s},options:{enabled:!!s}}),te=Ne.useCallback(()=>{var J,K,G,X,Z,$,ee,ne,ie,se,ce,re;return((J=e==null?void 0:e.data)==null?void 0:J.payment_mode)==="CHEQUE"?"Mode: "+((K=e==null?void 0:e.data)==null?void 0:K.payment_mode)+`
Cheque No: `+((G=e==null?void 0:e.data)==null?void 0:G.cheque_no)+`
Cheque Date: `+((X=e==null?void 0:e.data)==null?void 0:X.cheque_date)+`
Bank Name: `+((Z=e==null?void 0:e.data)==null?void 0:Z.bank_name)+`
Branch Name: `+(($=e==null?void 0:e.data)==null?void 0:$.branch_name):((ee=e==null?void 0:e.data)==null?void 0:ee.payment_mode)==="DD"?"DD No: "+((ne=e==null?void 0:e.data)==null?void 0:ne.cheque_no)+`
DD Date: `+((ie=e==null?void 0:e.data)==null?void 0:ie.cheque_date)+`
Bank Name: `+((se=e==null?void 0:e.data)==null?void 0:se.bank_name)+`
Branch Name: `+((ce=e==null?void 0:e.data)==null?void 0:ce.branch_name):"Mode: "+((re=e==null?void 0:e.data)==null?void 0:re.payment_mode)},[(c=e==null?void 0:e.data)==null?void 0:c.payment_mode]),le="  "+((r=e==null?void 0:e.data)==null?void 0:r.ulb_name)+`
[C](Shop Payment Receipt)
 
 
Circle Name: `+((m=e==null?void 0:e.data)==null?void 0:m.circle_name)+`
Receipt No: `+((o=e==null?void 0:e.data)==null?void 0:o.transaction_no)+`
<b>Shop no: </b><b><font size="big">`+((t=e==null?void 0:e.data)==null?void 0:t.shop_no)+`</font></b>
Allottee name: `+((l=e==null?void 0:e.data)==null?void 0:l.allottee)+`
Market name: `+((a=e==null?void 0:e.data)==null?void 0:a.market_name)+`
Address: `+((h=e==null?void 0:e.data)==null?void 0:h.address)+`
Rate: `+((N=e==null?void 0:e.data)==null?void 0:N.rate)+`
Contact no: `+((d=e==null?void 0:e.data)==null?void 0:d.contact_no)+`
Last payment date: `+((p=e==null?void 0:e.data)==null?void 0:p.last_payment_date)+`
Paid amount: `+((_=e==null?void 0:e.data)==null?void 0:_.last_payment_amount)+`
In words: `+((u=e==null?void 0:e.data)==null?void 0:u.inWords)+`
Paid Upto: `+((v=e==null?void 0:e.data)==null?void 0:v.payment_upto)+`
`+te()+`
********************************
Tc Name: `+((b=e==null?void 0:e.data)==null?void 0:b.reciever_name)+`
Tc Mobile No: `+((y=e==null?void 0:e.data)==null?void 0:y.reciever_mobile)+`

[C]Thank You!
[C]For More Details Please
[C]Visit:  `+((f=e==null?void 0:e.data)==null?void 0:f.website)+`
 
`,ae=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:le}}))};return console.log(e==null?void 0:e.data),n("div",{className:"p-4",children:[i("div",{className:" border-dashed text-[14px]   text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:i("div",{className:" text-justify font-poppins ",children:n("div",{className:" text-gray-700  text-xs",children:[i("div",{className:"text-center  font-semibold mt-5",children:((x=e==null?void 0:e.data)==null?void 0:x.ulb_name)||"NA"}),i("div",{className:"text-center ",children:(A=e==null?void 0:e.data)==null?void 0:A.circle_name}),n("div",{className:"mt-4",children:["Receipt No : ",((k=e==null?void 0:e.data)==null?void 0:k.transaction_no)||"NA"]}),n("div",{className:"",children:["Shop No: ",(C=e==null?void 0:e.data)==null?void 0:C.shop_no]}),n("div",{className:"",children:["Allottee Name : ",((P=e==null?void 0:e.data)==null?void 0:P.allottee)||"NA"]}),n("div",{className:"",children:["Market name: ",(R=e==null?void 0:e.data)==null?void 0:R.market_name]}),n("div",{className:"",children:["Address : ",(D=e==null?void 0:e.data)==null?void 0:D.address]}),n("div",{className:"",children:["Rate : ",(q=e==null?void 0:e.data)==null?void 0:q.rate]}),n("div",{className:"",children:["Mobile : ",(g=e==null?void 0:e.data)==null?void 0:g.contact_no]}),n("div",{className:"",children:["Last Payment Date : ",(M=e==null?void 0:e.data)==null?void 0:M.last_payment_date]}),n("div",{className:"",children:["Paid Amount : ",(T=e==null?void 0:e.data)==null?void 0:T.last_payment_amount]}),n("div",{className:"",children:["In Word : ",(w=e==null?void 0:e.data)==null?void 0:w.inWords]}),n("div",{className:"",children:["Mode : ",((B=e==null?void 0:e.data)==null?void 0:B.payment_mode)||"NA"]}),n("div",{className:"",children:["Paid Upto : ",(E=e==null?void 0:e.data)==null?void 0:E.payment_upto]}),((L=e==null?void 0:e.data)==null?void 0:L.payment_mode)=="CHEQUE"&&n(me,{children:[n("div",{className:"",children:["Bank name : ",((j=e==null?void 0:e.data)==null?void 0:j.bank_name)||"NA"]}),n("div",{className:"",children:["Branch name : ",((F=e==null?void 0:e.data)==null?void 0:F.branch_name)||"NA"]}),n("div",{className:"",children:["Cheque no. : ",((I=e==null?void 0:e.data)==null?void 0:I.cheque_no)||"NA"]}),n("div",{className:"",children:["Cheque date : ",((S=e==null?void 0:e.data)==null?void 0:S.cheque_date)||"NA"]})]}),((W=e==null?void 0:e.data)==null?void 0:W.payment_mode)=="DD"&&n(me,{children:[n("div",{className:"",children:["Bank name : ",((U=e==null?void 0:e.data)==null?void 0:U.bank_name)||"NA"]}),n("div",{className:"",children:["Branch name : ",((V=e==null?void 0:e.data)==null?void 0:V.branchName)||"NA"]}),n("div",{className:"",children:["Cheque no. : ",((z=e==null?void 0:e.data)==null?void 0:z.chequeNo)||"NA"]}),n("div",{className:"",children:["Cheque date : ",((H=e==null?void 0:e.data)==null?void 0:H.chequeDate)||"NA"]})]}),i("div",{className:"text-center mt-2",children:"****************************************************"}),n("div",{className:"",children:["Tc Name : ",(O=e==null?void 0:e.data)==null?void 0:O.reciever_name]}),n("div",{className:"",children:["Tc Mobile No. : ",(Q=e==null?void 0:e.data)==null?void 0:Q.reciever_mobile]}),i("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),i("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),n("div",{className:"text-center font-semibold  mb-5",children:["Visit: ",((Y=e==null?void 0:e.data)==null?void 0:Y.website)||"NA"]})]})})}),i("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:i("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:()=>ae(),children:"Print"})})]})}export{Ae as default};
