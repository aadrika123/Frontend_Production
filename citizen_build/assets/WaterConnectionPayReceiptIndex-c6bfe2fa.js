import{j as s}from"./mui-8bd1858b.js";import{u as v,r as l,f as j}from"./router-56e993c5.js";import{x as w,W as A,z,a6 as S,A as D,y as x,a7 as h,l as R,j as P}from"./index-10c1abd5.js";import{h as f}from"./moment-a9aaa855.js";import"./axios-ab7cc016.js";import"./reactIcons-d26c0b2d.js";import"./materialTailwind-51fe8e6d.js";/* empty css                */import"./redux-a3f69129.js";import"./i18next-2edfafb0.js";const _=()=>{var d,c;const{t:r}=w(),p=v(),[$,i]=l.useState(!1),{paymentId:o}=j(),{api_waterApplicationPaymentReceipt:g,header:y}=A(),N=()=>{p(-1)},{setBreadCrumbData:n}=l.useContext(z);l.useEffect(()=>{n(["Water Dashboard","Payment History","Payment Receipt"])},[n]),l.useState(!1);const[e,u]=l.useState(),a=l.useRef(),b=S.useReactToPrint({content:()=>a.current});return l.useEffect(()=>{i(!0),D.post(g,{transactionNo:o},y).then(t=>{i(!1),console.log("Receipt Response",t.data.data),u(t.data.data)}).catch(t=>{console.log("Error while fetching receipt DATA",t),i(!1)})},[o]),console.log("asfasdasd",e),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"font-poppins",ref:a,children:[s.jsx("div",{className:"flex justify-end items-end py-4 px-4 md:px-0",children:s.jsxs("div",{className:"z-10 flex flex-wrap gap-2",children:[s.jsx("button",{onClick:N,className:"pl-4 pr-6 py-1 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out",children:"Back"}),s.jsxs("button",{onClick:()=>{var t,m;window.ReactNativeWebView?window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_TO_PRINTER",url:`
                        <div style="font-family: Tahoma, sans-serif; padding: 10px; margin: 0 auto; width: 100%; max-width: 210mm; height: auto; box-sizing: border-box; font-size: 0.8rem;">
  <div style="border: 2px dashed gray; background-color: white; padding: 2px; width: 100%; height: auto; position: relative;">
    <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
      <div style="display: flex; justify-content: center; align-items: center;">
        <img src="${(t=e==null?void 0:e.ulbDetails)==null?void 0:t.ulb_logo}" style="height: 4rem; margin-left: auto; margin-right: auto;" />
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(1, 1fr);">
      <div style="position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
        <img src="${(m=x(r))==null?void 0:m.state_logo}" alt="" style="width: 12rem; height: 12rem; margin-top: 2rem; z-index: 10; background-color: transparent; opacity: 0.2; border-radius: 50%; border: solid;" />
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(1, 1fr); padding: 2px;">
      <div>
        <h1 style="font-weight: 600; font-size: 1rem; text-align: center;">${e==null?void 0:e.ulbName}</h1>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(1, 1fr); padding: 2px;">
      <div style="margin-left: auto; margin-right: auto;">
        <h1 style="font-weight: 600; font-size: 0.8rem; text-align: center; color: #4a4a4a; border: 1px solid #4a4a4a; width: 18rem; text-transform: uppercase;">water connection charge payment receipt</h1>
      </div>
    </div>

    <div>
      <table style="width: 100%;   font-size: 0.8rem;">
        <tr>
          <td>
            <div style="display: flex;  white-space: nowrap;">
              <h1 style="font-weight: 600; font-size: 0.9rem; color: #4a4a4a; flex: 0 0 auto;">Receipt No. :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e==null?void 0:e.transactionNo}</h1>
            </div>
            <div style="display: flex;  white-space: nowrap;">
              <h1 style="font-weight: 600; font-size: 0.9rem; color: #4a4a4a; flex: 0 0 auto;">Department/Section :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e==null?void 0:e.accountDescription}</h1>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; font-size: 0.9rem; color: #4a4a4a; flex: 0 0 auto;">Account Description :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">Water User Charge</h1>
            </div>
            ${e!=null&&e.holdingNo?`
              <div style="display: flex; ">
                <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Holding No. :</h1>
                <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e!=null&&e.holdingNo?e==null?void 0:e.holdingNo:"N/A"}</h1>
              </div>
            `:""}
            ${e!=null&&e.safNo?`
              <div style="display: flex; ">
                <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">SAF No. :</h1>
                <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e!=null&&e.safNo?e==null?void 0:e.safNo:"N/A"}</h1>
              </div>
            `:""}
          </td>
          <td>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Date :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${f(e==null?void 0:e.transactionDate).format("DD/MM/yy")||"N/A"}</h1>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Ward No. :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e==null?void 0:e.WardNo}</h1>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Application No. :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e==null?void 0:e.applicationNo}</h1>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div>
      <table style="width: 100%; ">
        <tr>
          <td>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Received From Mr/Mrs/Miss :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e==null?void 0:e.customerName}</h1>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Mobile No. :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e==null?void 0:e.customerMobile}</h1>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Address :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e==null?void 0:e.address}</h1>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">A Sum of Rs. :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e==null?void 0:e.totalPaidAmount}</h1>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">(in words) :</h1>
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${e!=null&&e.paidAmtInWords?(e==null?void 0:e.paidAmtInWords)+" Only":"N/A"}</h1>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Towards :</h1>
              <span style="flex: 1 1 auto; padding-left: 5px; margin-top: 8px;  font-size: 0.9rem; font-weight: 600;">${e==null?void 0:e.towards}</span>
            </div>
            <div style="display: flex; ">
              <h1 style="font-weight: 600; color: #4a4a4a; flex: 0 0 auto; font-size: 0.9rem;">Vide :</h1>
              <span style="flex: 1 1 auto; padding-left: 5px; font-weight: 600; margin-top: 8px; font-size: 0.9rem;">${e==null?void 0:e.paymentMode}</span>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div style="display: grid; grid-template-columns: repeat(1, 1fr);  margin-top: 5px;">
      <div>
        <h1 style="font-weight: 600; text-align: left; font-size: 0.9rem;">N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation</h1>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(1, 1fr);  margin-top: -5px;">
      <div>
        <h1 style="font-weight: 600; font-size: 0.9rem; text-align: left; ">WATER CONNECTION FEE DETAILS</h1>
      </div>
    </div>

    <div>
      <table style="width: 100%; border: 1px solid gray;">
        <thead style="width: 100%;">
          <tr style="border: 1px solid gray; font-weight: 600; text-align: center;">
            <td colSpan="2" style="border-right: 1px solid gray; width: 12rem; font-size: 0.9rem;">
              <h1 style=" font-size: 0.9rem;">Description</h1>
            </td>
            <td colSpan="1" style="border: 1px solid gray; width: 12rem; font-size: 0.9rem;">
              <h1 style=" font-size: 0.9rem;">Amount</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr style="border: 1px solid gray; font-size: 0.8rem; text-align: center;">
            <td colSpan="2" style="border-right: 1px solid gray; width: 12rem;">
              <h1 style="text-align: left; margin-left: 5px; font-size: 0.9rem;">Connection Fee</h1>
            </td>
            <td colSpan="1" style="border: 1px solid gray; width: 12rem;">
              <h1 style="text-align: right; margin-right: 5px; font-size: 0.9rem;">₹ ${e!=null&&e.connectionFee?e==null?void 0:e.connectionFee:(e==null?void 0:e.connectionFee)==0?0:"N/A"}</h1>
            </td>
          </tr>
          <tr style="border: 1px solid gray; font-size: 0.8rem; text-align: center;">
            <td colSpan="2" style="border-right: 1px solid gray; width: 12rem;">
              <h1 style="text-align: left; margin-left: 5px; font-size: 0.9rem;">Penalty</h1>
            </td>
            <td colSpan="1" style="border: 1px solid gray; width: 12rem;">
              <h1 style="text-align: right; margin-right: 5px; font-size: 0.9rem;">₹ ${e!=null&&e.penaltyAmount?e==null?void 0:e.penaltyAmount:(e==null?void 0:e.penaltyAmount)==0?0:"N/A"}</h1>
            </td>
          </tr>
          <tr style="border: 1px solid gray; font-size: 0.8rem; text-align: center;">
            <td colSpan="2" style="border-right: 1px solid gray; width: 12rem;">
              <h1 style="text-align: left; margin-left: 5px; font-size: 0.9rem;">Rebate</h1>
            </td>
            <td colSpan="1" style="border: 1px solid gray; width: 12rem;">
              <h1 style="text-align: right; margin-right: 5px; font-size: 0.9rem;">₹ ${e!=null&&e.rebate?e==null?void 0:e.rebate:(e==null?void 0:e.rebate)==0?0:"N/A"}</h1>
            </td>
          </tr>
          <tr style="border: 1px solid gray; font-size: 0.8rem; text-align: center;">
            <td colSpan="2" style="border-right: 1px solid gray; width: 12rem;">
              <h1 style="text-align: left; margin-left: 5px; font-size: 0.9rem;">Payable Amount <span style="margin-left: 2.5rem;">(${e!=null&&e.paidAmtInWords?(e==null?void 0:e.paidAmtInWords)+" Only":"N/A"})</span></h1>
            </td>
            <td colSpan="1" style="border: 1px solid gray; width: 12rem;">
              <h1 style="text-align: right; margin-right: 5px; font-size: 0.9rem;">₹ ${e!=null&&e.totalPaidAmount?e==null?void 0:e.totalPaidAmount:(e==null?void 0:e.totalPaidAmount)==0?0:"N/A"}</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <table style="width: 100%; margin-top: 5px;">
        <tr>
          <td>
            <div style="display: flex;">
             
              <div style="display: flex; flex-direction: column; margin-left: 5px;">
                <h1 style="font-weight: 600; color: #4a4a4a; font-size: 0.8rem; font-size: 0.9rem;">For Details Please Visit: **********</h1>
                <h1 style="font-weight: 600; color: #4a4a4a; font-size: 0.8rem; font-size: 0.9rem;">Or Scan QR code above</h1>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div >
                  <div >
                    <img src="${h}" style="height: 4rem; margin-left: auto; margin-right: auto;" />
                  </div>
                </div>
  </div>
</div>`})):b()},className:"pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out",children:[s.jsx(R,{className:"inline text-lg mr-1"}),"print"]})]})}),s.jsx("div",{id:"printableArea",className:"",children:s.jsx("div",{children:s.jsx("div",{className:"font-tahoma pb-14 mt-5",children:s.jsxs("div",{className:"border-2 border-dashed border-gray-600 print:scale-95 bg-white p-2 sm:p-4 w-full max-w-[250mm] h-auto mx-auto container2 relative overflow-x-hidden",children:[s.jsx("div",{className:"w-full flex justify-center items-center",children:s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("img",{src:((d=e==null?void 0:e.ulbDetails)==null?void 0:d.ulb_logo)||"/placeholder.svg",className:"h-12 sm:h-16 md:h-20 mx-auto"})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12  ",children:s.jsx("div",{className:"absolute w-full h-full flex justify-center items-center",children:s.jsx("img",{src:((c=x(r))==null?void 0:c.state_logo)||"/placeholder.svg",alt:"",className:"w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[22rem] md:h-[22rem] mt-10 sm:mt-20 z-10 bg-transparent opacity-20 rounded-full border"})})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-bold text-2xl sm:text-3xl md:text-4xl text-center ",children:e==null?void 0:e.ulbName})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:s.jsx("div",{className:"mx-auto",children:s.jsx("h1",{className:"font-semibold text-xl sm:text-2xl text-center text-gray-800 border border-gray-700 w-full max-w-[24rem] mx-auto uppercase",children:"water connection charge payment receipt"})})}),s.jsx("div",{className:"w-full p-2 mt-2",children:s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:[s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"flex p-1 text-sm sm:text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Receipt No. :"}),s.jsx("h1",{className:"flex pl-2",children:e==null?void 0:e.transactionNo})]}),s.jsxs("div",{className:"flex p-1 text-sm sm:text-base whitespace-nowrap",children:[s.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Department/Section :"}),s.jsx("h1",{className:"flex pl-2 ",children:e==null?void 0:e.accountDescription})]}),s.jsxs("div",{className:"flex p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Account Description :"}),s.jsx("h1",{className:"flex pl-2 ",children:"Water User Charge"})]}),(e==null?void 0:e.holdingNo)&&s.jsxs("div",{className:"flex p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),s.jsx("h1",{className:"flex pl-2 ",children:e!=null&&e.holdingNo?e==null?void 0:e.holdingNo:"N/A"})]}),(e==null?void 0:e.safNo)&&s.jsxs("div",{className:"flex p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),s.jsx("h1",{className:"flex pl-2 ",children:e!=null&&e.safNo?e==null?void 0:e.safNo:"N/A"})]})]}),s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"flex p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Date :"}),s.jsx("h1",{className:"flex pl-2 ",children:f(e==null?void 0:e.transactionDate).format("DD/MM/yy")||"N/A"})]}),s.jsxs("div",{className:"flex p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Ward No. :"}),s.jsx("h1",{className:"flex pl-2 ",children:e==null?void 0:e.WardNo})]}),s.jsxs("div",{className:"flex p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Application No. :"}),s.jsx("h1",{className:"flex pl-2 ",children:e==null?void 0:e.applicationNo})]})]})]})}),s.jsx("div",{className:"w-full p-2 mt-2",children:s.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"flex flex-wrap p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold whitespace-nowrap",children:"Received From Mr/Mrs/Miss :"}),s.jsx("h1",{className:"flex pl-2",children:e==null?void 0:e.customerName})]}),s.jsxs("div",{className:"flex p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold",children:"Mobile No. :"}),s.jsx("h1",{className:"flex pl-2",children:e==null?void 0:e.customerMobile})]}),s.jsxs("div",{className:"flex flex-wrap p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold",children:"Address :"}),s.jsx("h1",{className:"flex pl-2",children:e==null?void 0:e.address})]}),s.jsxs("div",{className:"flex p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold",children:"A Sum of Rs. :"}),s.jsx("h1",{className:"flex pl-2",children:e==null?void 0:e.totalPaidAmount})]}),s.jsxs("div",{className:"flex flex-wrap p-1 text-sm sm:text-base",children:[s.jsx("h1",{className:"flex text-gray-900 font-semibold",children:"(in words) : "}),s.jsx("h1",{className:"flex pl-2",children:e!=null&&e.paidAmtInWords?(e==null?void 0:e.paidAmtInWords)+" Only":"N/A"})]}),s.jsx("div",{className:"flex p-1 text-sm sm:text-base",children:s.jsxs("h1",{className:"flex text-gray-900 font-semibold",children:["Towards : ",s.jsx("span",{className:"font-normal ml-1",children:e==null?void 0:e.towards})]})}),s.jsx("div",{className:"flex p-1 text-sm sm:text-base",children:s.jsxs("h1",{className:"flex text-gray-900 font-semibold",children:["Vide : ",s.jsx("span",{className:"ml-1 font-normal",children:e==null?void 0:e.paymentMode})]})})]})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 mt-3",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-bold text-sm sm:text-base text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-bold text-sm sm:text-base text-left ",children:"WATER CONNECTION FEE DETAILS"})})}),s.jsx("div",{children:s.jsxs("table",{className:"w-full border border-gray-500 text-xs sm:text-sm md:text-base",children:[s.jsx("thead",{className:" w-full",children:s.jsxs("tr",{className:"border border-gray-500 font-bold text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:" ",children:"Description "})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsx("h1",{className:"",children:"Amount "})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{className:"border border-gray-500 text-sm   ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:"text-left ml-2 ",children:" Connection Fee"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",e!=null&&e.connectionFee?e==null?void 0:e.connectionFee:(e==null?void 0:e.connectionFee)==0?0:"N/A"]})}),s.jsx("td",{className:""})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:"text-left ml-2 ",children:"Penalty"})}),s.jsx("td",{colSpan:1,className:"  border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",e!=null&&e.penaltyAmount?e==null?void 0:e.penaltyAmount:(e==null?void 0:e.penaltyAmount)==0?0:"N/A"]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsx("h1",{className:" text-left ml-2",children:"Rebate"})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",e!=null&&e.rebate?e==null?void 0:e.rebate:(e==null?void 0:e.rebate)==0?0:"N/A"]})})]}),s.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[s.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s.jsxs("h1",{className:"text-left ml-2 ",children:["Payable Amount"," ",s.jsxs("span",{className:"ml-2 sm:ml-10",children:["(",e!=null&&e.paidAmtInWords?(e==null?void 0:e.paidAmtInWords)+" Only":"N/A",")"]})]})}),s.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:s.jsxs("h1",{className:" text-right mr-2",children:[" ","₹ ",e!=null&&e.totalPaidAmount?e==null?void 0:e.totalPaidAmount:(e==null?void 0:e.totalPaidAmount)==0?0:"N/A"," "]})})]})]})]})}),s.jsx("div",{className:"w-full mt-2 px-2",children:s.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center",children:[s.jsx(P,{url:window.location.href,size:"64"}),s.jsxs("div",{className:"flex flex-col ml-0 sm:ml-4 mt-2 sm:mt-0",children:[s.jsx("h1",{className:"text-gray-900 text-sm",children:"For Details Please Visit: **********"}),s.jsx("h1",{className:"text-gray-900 text-sm",children:"Or Call us at ******* or ********* "})]})]})}),s.jsx("div",{className:"p-2 mt-2",children:s.jsx("div",{className:""})}),s.jsx("div",{className:"p-2 mt-2",children:s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-semibold text-xs sm:text-sm text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),s.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:s.jsx("div",{className:"mt-2",children:s.jsx("img",{src:h,className:"w-24 sm:w-36 mx-auto"})})})]})})})})]})})};export{_ as default};
