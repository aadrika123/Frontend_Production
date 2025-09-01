import{j as s}from"./mui-13e90ce6.js";import{u as b,r as i,f as j}from"./router-56e993c5.js";import"./index-a188d691.js";import{s as u,W as v,S as w,A,V as M,U as Y,X as R}from"./index-607a6b42.js";import{h as l}from"./moment-a9aaa855.js";import"./axios-ab7cc016.js";import"./reactIcons-d26c0b2d.js";import"./materialTailwind-5e750622.js";/* empty css                */import"./redux-4c679fbc.js";import"./i18next-2edfafb0.js";function O(){var t,c;const{t:x}=u(),a=b(),[e,h]=i.useState(),{transactionId:d}=j();console.log("param payment id ..",d);const{api_waterConsumerPaymentReceipt:N,header:g}=v();i.useEffect(()=>{f()},[]),i.useState();const o=i.useRef(),m=w.useReactToPrint({content:()=>o.current}),p=()=>{a(-1)},f=()=>{A.post(N,{transactionNo:d},g).then(r=>{r.data.status?(console.log("Consumer Payment Data for receipt",r.data.data),h(r.data.data)):console.log("Error while getting consumer data for receipt")}).catch(r=>{console.log("Exception while getting consumer receipt",r)})};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"font-poppins",ref:o,children:[s.jsx("div",{children:s.jsxs("div",{className:"md:px-0 flex-1 ",children:[s.jsx("button",{onClick:p,className:"float-right pl-4 pr-6 py-1 gap-2 ml-2  bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-blue-500 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:"Back"}),s.jsxs("button",{onClick:()=>{var r,n;window.ReactNativeWebView?window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_TO_PRINTER",url:` <div style="width: 100%; max-width: 800px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; position: relative;">
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.1; width: 300px; height: 300px; z-index: -1;">
        <img src="${((r=e==null?void 0:e.ulbDetails)==null?void 0:r.state_logo)||"/placeholder.svg"}" alt="" style="width: 100%; height: 100%;" />
      </div>

      <div style="text-align: center; margin-bottom: 20px;">
        <img src="${((n=e==null?void 0:e.ulbDetails)==null?void 0:n.ulb_logo)||"/placeholder.svg"}" alt="Municipal Logo" style="width: 80px; height: 80px; margin: 0 auto;" />
        <h1 style="font-size: 24px; font-weight: bold; margin: 15px 0;">${e==null?void 0:e.ulbName}</h1>
        <div style="border: 1px solid #000; padding: 10px; text-align: center; margin: 15px auto; max-width: 400px; text-transform: uppercase;">
          Water User Charge<br />Payment Receipt
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
        <div style="flex: 1 1 300px;">
          <div style="display: flex; margin: 5px 0; font-size: 14px;">
            <span style="font-weight: bold; min-width: 150px;">Receipt No.:</span>
            <span>${(e==null?void 0:e.transactionNo)||"N/A"}</span>
          </div>
          <div style="display: flex; margin: 5px 0; font-size: 14px;">
            <span style="font-weight: bold; min-width: 150px;">Department/Section:</span>
            <span>${(e==null?void 0:e.accountDescription)||"N/A"}</span>
          </div>
          <div style="display: flex; margin: 5px 0; font-size: 14px;">
            <span style="font-weight: bold; min-width: 150px;">Consumer No.:</span>
            <span>${(e==null?void 0:e.consumerNo)||"N/A"}</span>
          </div>
          ${e!=null&&e.holdingNo?`
            <div style="display: flex; margin: 5px 0; font-size: 14px;">
              <span style="font-weight: bold; min-width: 150px;">Holding No.:</span>
              <span>${e==null?void 0:e.holdingNo}</span>
            </div>
          `:""}
        </div>
        <div style="flex: 1 1 300px;">
          <div style="display: flex; margin: 5px 0; font-size: 14px;">
            <span style="font-weight: bold; min-width: 150px;">Date:</span>
            <span>${e!=null&&e.transactionDate?l(e==null?void 0:e.transactionDate).format("DD/MM/YYYY"):"N/A"}</span>
          </div>
          <div style="display: flex; margin: 5px 0; font-size: 14px;">
            <span style="font-weight: bold; min-width: 150px;">Ward No.:</span>
            <span>${(e==null?void 0:e.WardNo)||"N/A"}</span>
          </div>
          <div style="display: flex; margin: 5px 0; font-size: 14px;">
            <span style="font-weight: bold; min-width: 150px;">Mobile No.:</span>
            <span>${(e==null?void 0:e.customerMobile)||"N/A"}</span>
          </div>
          <div style="display: flex; margin: 5px 0; font-size: 14px;">
            <span style="font-weight: bold; min-width: 150px;">Meter No.:</span>
            <span>${(e==null?void 0:e.meterNo)||"N/A"}</span>
          </div>
        </div>
      </div>

      <div style="margin: 20px 0;">
        <div style="display: flex; margin: 5px 0; font-size: 14px;">
          <span style="font-weight: bold; min-width: 200px;">Received From Mr/Mrs/Miss:</span>
          <span>${(e==null?void 0:e.customerName)||"N/A"}</span>
        </div>
        <div style="display: flex; margin: 5px 0; font-size: 14px;">
          <span style="font-weight: bold; min-width: 200px;">Address:</span>
          <span>${(e==null?void 0:e.address)||"N/A"}</span>
        </div>
      </div>

      <div style="margin: 20px 0;">
        <div style="display: flex; margin: 5px 0; font-size: 14px;">
          <span style="font-weight: bold; min-width: 200px;">Last Meter Reading:</span>
          <span>${(e==null?void 0:e.lastMeterReading)||"N/A"} (${e!=null&&e.lastMeterReadingDate?l(e==null?void 0:e.lastMeterReadingDate).format("DD/MM/YYYY"):"N/A"})</span>
        </div>
        <div style="display: flex; margin: 5px 0; font-size: 14px;">
          <span style="font-weight: bold; min-width: 200px;">Current Meter Reading:</span>
          <span>${(e==null?void 0:e.currentMeterReading)||"N/A"} (${e!=null&&e.currentMeterReadingDate?l(e==null?void 0:e.currentMeterReadingDate).format("DD/MM/YYYY"):"N/A"})</span>
        </div>
      </div>

      <div style="margin: 20px 0;">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">WATER CONNECTION FEE DETAILS</h2>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
          <thead>
            <tr>
              <th style="border: 1px solid #000; padding: 8px; text-align: left;">Description</th>
              <th style="border: 1px solid #000; padding: 8px; text-align: right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;">
                Period: From ${e!=null&&e.paidFrom?l(e==null?void 0:e.paidFrom).format("DD/MM/YYYY"):"N/A"} 
                To ${e!=null&&e.paidUpto?l(e==null?void 0:e.paidUpto).format("DD/MM/YYYY"):"N/A"}
              </td>
              <td style="border: 1px solid #000; padding: 8px; text-align: right;">₹ ${e==null?void 0:e.totalPaidAmount}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;">Penalty</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: right;">₹ ${e==null?void 0:e.penaltyAmount}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;">Rebate</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: right;">₹ ${e==null?void 0:e.rebate}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;">
                Paid Amount (${e==null?void 0:e.paidAmtInWords} Only)
              </td>
              <td style="border: 1px solid #000; padding: 8px; text-align: right;">₹ ${e==null?void 0:e.totalPaidAmount}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 8px;">Due Amount</td>
              <td style="border: 1px solid #000; padding: 8px; text-align: right;">₹ ${e==null?void 0:e.dueAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top: 20px; text-align: center;">
       
        <p style="font-size: 12px; margin: 5px 0;">For Details Please Visit: www.jharkhandegovernance.com</p>
        <p style="font-size: 12px; margin: 5px 0;">Or Call us at ********** or **********</p>
        <p style="font-size: 14px; font-weight: bold; margin: 20px 0;">
          **This is a computer-generated receipt and it does not require a physical signature.**
        </p>
      </div>
    </div>`})):m()},className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-sky-500 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[s.jsx(M,{className:"inline text-lg"}),"print"]})]})}),s.jsx("div",{id:"printableArea",className:"font-poppins ",children:s.jsx("div",{children:s.jsxs("div",{className:"mt-10 mb-12 border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-16 md:mx-auto lg:mx-auto container ",children:[s.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[s.jsx("div",{className:"",children:s.jsx("img",{src:(t=e==null?void 0:e.ulbDetails)==null?void 0:t.ulb_logo,className:"h-20 mx-auto"})}),s.jsx("div",{className:"flex justify-center items-center h-auto w-full mt-72 absolute ",children:s.jsx("div",{children:s.jsx("img",{src:(c=Y(x))==null?void 0:c.state_logo,alt:"",className:" w-[22rem] h-[22rem]   opacity-20   rounded-full "})})})]}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-bold text-3xl text-center ",children:e==null?void 0:e.ulbName})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:s.jsx("div",{className:"mx-auto",children:s.jsxs("h1",{className:"font-semibold text-1xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:["water user charge ",s.jsx("br",{})," payment receipt"]})})}),s.jsx("div",{children:s.jsx("table",{className:"w-full  p-2 mt-2",children:s.jsxs("div",{className:"grid grid-cols-12",children:[s.jsx("div",{className:"col-span-7",children:s.jsx("tr",{className:"",children:s.jsxs("td",{className:" ",children:[s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Receipt No. :"}),s.jsx("h1",{className:"flex   pl-2",children:(e==null?void 0:e.transactionNo)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Department/Section :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.accountDescription)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Consumer No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.consumerNo)||"N/A"})]}),(e==null?void 0:e.holdingNo)&&s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.holdingNo)||"N/A"})]}),(e==null?void 0:e.safNo)&&s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.safNo)||"N/A"})]})]})})}),s.jsx("div",{className:"col-span-5",children:s.jsxs("td",{className:" ",children:[s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Date :"}),s.jsx("h1",{className:"flex  pl-2 ",children:e!=null&&e.transactionDate?l(e==null?void 0:e.transactionDate).format("DD/MM/YYYY"):"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Ward No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.WardNo)||"N/A"})]}),s.jsx("div",{className:"flex p-1 text-base whitespace-nowrap",children:s.jsx("div",{children:s.jsxs("h1",{className:"flex text-gray-900 font-semibold  ",children:["Mobile No. :"," ",s.jsx("span",{className:"  font-normal ml-1",children:(e==null?void 0:e.customerMobile)||"N/A"})]})})}),s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Meter No. :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.meterNo)||"N/A"})]})]})})]})})}),s.jsx("div",{children:s.jsxs("table",{className:"w-full  p-2",children:[s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Received From Mr/Mrs/Miss :"}),s.jsx("h1",{className:"flex   pl-2",children:(e==null?void 0:e.customerName)||"N/A"})]}),s.jsx("tr",{className:"",children:s.jsxs("td",{className:" ",children:[s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Address :"}),s.jsx("h1",{className:"flex  pl-2 ",children:e==null?void 0:e.address})]}),s.jsxs("div",{className:"grid grid-cols-12",children:[s.jsxs("div",{className:"col-span-7",children:[s.jsx("div",{className:"flex p-1 text-base whitespace-nowrap",children:s.jsxs("h1",{className:"flex text-gray-900  font-semibold   ",children:["Last Meter Reading :",s.jsxs("span",{className:"  font-normal ml-1",children:[s.jsx("span",{children:(e==null?void 0:e.lastMeterReading)||"N/A"}),s.jsxs("span",{className:"text-base",children:["(",e!=null&&e.lastMeterReadingDate?l(e==null?void 0:e.lastMeterReadingDate).format("DD/MM/YYYY"):"N/A",")"]})]})]})}),s.jsx("div",{className:"flex p-1 text-base whitespace-nowrap",children:s.jsxs("h1",{className:"flex text-gray-900  font-semibold  ",children:["Current Meter Reading :",s.jsxs("span",{className:"  font-normal ml-1",children:[s.jsx("span",{children:(e==null?void 0:e.currentMeterReading)||"N/A"}),s.jsxs("span",{className:"text-base",children:["(",e!=null&&e.currentMeterReadingDate?l(e==null?void 0:e.currentMeterReadingDate).format("DD/MM/YYYY"):"N/A",")"]})]})]})}),s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Water Consumed (in K.L.) :"}),s.jsx("h1",{className:"flex  pl-2 ",children:(e==null?void 0:e.waterConsumed)||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Fixed :"}),s.jsxs("h1",{className:"flex  pl-2 ",children:["Period from :"," ",e!=null&&e.fixedPaidFrom?l(e==null?void 0:e.fixedPaidFrom).format("DD/MM/YYYY"):"N/A"," ","to :"," ",e!=null&&e.fixedPaidUpto?l(e==null?void 0:e.fixedPaidUpto).format("DD/MM/YYYY"):"N/A"," "]})]})]}),s.jsxs("div",{className:"col-span-5",children:[s.jsx("div",{className:"flex p-1 text-base",children:s.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Towards :"," ",s.jsx("span",{className:"  font-normal ml-1",children:(e==null?void 0:e.towards)||"N/A"})]})}),s.jsx("div",{className:"flex p-1  text-base whitespace-nowrap",children:s.jsxs("h1",{className:"flex text-gray-900  font-semibold  ",children:["Vide :"," ",s.jsx("span",{className:"  font-normal ml-1",children:(e==null?void 0:e.paymentMode)||"N/A"})]})})]})]}),(e==null?void 0:e.chequeNo)&&s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Cheque No :"," ",s.jsx("span",{className:" w-24  font-normal ml-1 border-b border-dashed border-gray-600",children:(e==null?void 0:e.chequeNo)||"N/A"})]}),s.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Dated :"," ",s.jsx("span",{className:"w-24  font-normal ml-1 border-b border-dashed border-gray-600",children:(e==null?void 0:e.chequeDate)||"N/A"})]})]}),(e==null?void 0:e.bankName)&&s.jsxs("div",{className:"flex p-1 text-base",children:[s.jsxs("h1",{className:"flex text-gray-900 font-semibold ",children:["Drawn on :"," "]}),s.jsx("h1",{className:"flex w-72  ml-1 border-b border-dashed border-gray-600",children:(e==null?void 0:e.bankName)||"N/A"}),s.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Branch Name :"}),s.jsx("h1",{className:"flex w-40  ml-1 border-b border-dashed border-gray-600",children:(e==null?void 0:e.branchName)||"N/A"})]})]})})]})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-bold text-base text-left ",children:"WATER CONNECTION FEE DETAILS"})})}),s.jsx("div",{children:s.jsxs("table",{className:"w-full border border-gray-500 ",children:[s.jsx("thead",{className:" w-full",children:s.jsxs("tr",{className:"border border-gray-500 text-base  font-bold text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:" ",children:"Description "})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsx("h1",{className:"",children:"Amount "})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border border-gray-500 text-sm   ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsxs("h1",{className:"text-left ml-2 ",children:[" ","Period: From"," ",s.jsxs("span",{className:"font-semibold",children:[" ",e!=null&&e.paidFrom?l(e==null?void 0:e.paidFrom).format("DD/MM/YYYY"):"N/A"]})," ","To"," ",s.jsxs("span",{className:"font-semibold",children:[" ",e!=null&&e.paidUpto?l(e==null?void 0:e.paidUpto).format("DD/MM/YYYY"):"N/A"]})]})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",e==null?void 0:e.totalPaidAmount," "]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:"text-left ml-2 ",children:"Penalty"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",e==null?void 0:e.penaltyAmount]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:" text-left ml-2",children:"Rebate"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",e==null?void 0:e.rebate]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 ",children:s.jsxs("div",{className:"flex justify-between",children:[s.jsx("h1",{className:"ml-2",children:"Paid Amount"}),s.jsxs("h1",{className:"mr-2",children:[" ","(",e==null?void 0:e.paidAmtInWords," Only)"," "]})]})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:"text-right mr-2",children:[" ","₹ ",e==null?void 0:e.totalPaidAmount]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:"text-left ml-2 ",children:"Due Amount"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",e==null?void 0:e.dueAmount]})})]})]})]})}),s.jsx("div",{children:s.jsx("table",{className:"w-full mt-2 ",children:s.jsx("tr",{className:"",children:s.jsxs("td",{className:" ",children:[s.jsx("div",{className:""}),s.jsx("div",{className:"flex",children:s.jsx("h1",{className:"flex text-gray-900  text-sm",children:"For Details Please Visit : www.jharkhandegovernance.com"})}),s.jsx("div",{className:"flex ",children:s.jsx("h1",{className:"flex text-gray-900  text-sm",children:"Or Call us at ********** or **********"})})]})})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-semibold text-base text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:s.jsx("div",{className:"",children:s.jsx("img",{src:R,className:"w-36 mx-auto"})})})]})})})]})})}export{O as default};
