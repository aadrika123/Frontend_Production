import{j as t}from"./mui-8e804a04.js";import{a as b,u as R,r as a,f as $}from"./router-87042356.js";import"./index-90c6ecf6.js";import{W as D}from"./WaterApiList-be7bc924.js";import{k as P,l as W,A as C,U as j,r as k}from"./index-b08c1470.js";import{l as E}from"./index-51d8014a.js";import{t as O}from"./materialTailwind-0734a71a.js";import{h as v}from"./moment-fbc5633a.js";import{S as w}from"./SwachBharat-9ffc7e11.js";import{Q as F}from"./QrCode-5d49e353.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";import"./index-8289c3ab.js";var M=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],I=M,A=Symbol("isTwElement?"),T=(s,i)=>s.reduce((d,o,l)=>d.concat(o||[],i[l]||[]),[]),B=(s,i="")=>{let d=s.join(" ").trim().replace(/\n/g," ").replace(/\s{2,}/g," ").split(" ").filter(l=>l!==","),o=i?i.split(" "):[];return O(...d.concat(o).filter(l=>l!==" "))},_=([s])=>s.charAt(0)!=="$",u=s=>s[A]===!0,z=s=>(i,...d)=>{let o=(l=[])=>{let n=b.forwardRef((c,g)=>{let{$as:x=s,style:e={},...m}=c,f=u(s)?s:x,y=l?l.reduce((h,r)=>Object.assign(h,typeof r=="function"?r(c):r),{}):{},p=u(f)?m:Object.fromEntries(Object.entries(m).filter(_));return b.createElement(f,{...p,style:{...y,...e},ref:g,className:B(T(i,d.map(h=>h({...m,$as:x}))),m.className),...u(s)?{$as:x}:{}})});return n[A]=!0,typeof s!="string"?n.displayName=s.displayName||s.name||"tw.Component":n.displayName="tw."+s,n.withStyle=c=>o(l.concat(c)),n};return o()},q=I.reduce((s,i)=>({...s,[i]:z(i)}),{}),V=Object.assign(z,q),S=V;S.button`py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md`;S.div`p-4 rounded-md`;const oe=()=>{var p,h;const{t:s}=P(),i=R(),[d,o]=a.useState(!1),{paymentId:l}=$(),{api_waterApplicationPaymentReceipt:n,header:c}=D(),g=()=>{i(-1)},{setBreadCrumbData:x}=a.useContext(W);a.useEffect(()=>{x(["Water Dashboard","Payment History","Payment Receipt"])},[]),a.useState(!1);const[e,m]=a.useState(),f=a.useRef(),y=E.useReactToPrint({content:()=>f.current});return a.useEffect(()=>{o(!0),C.post(n,{transactionNo:l},c).then(r=>{o(!1),console.log("Receipt Response",r.data.data),m(r.data.data)}).catch(r=>{console.log("Error while fetching receipt DATA",r),o(!1)})},[l]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"font-poppins",ref:f,children:[t.jsx("div",{className:"flex justify-end items-end py-4",children:t.jsxs("div",{className:"md:px-0 absolute top-2  z-10  ",children:[t.jsx("button",{onClick:g,className:"float-right pl-4 pr-6 py-1 gap-2 ml-2  bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-blue-500 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:"Back"}),t.jsxs("button",{onClick:()=>{var r,N;window.ReactNativeWebView?window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_TO_PRINTER",url:`
                        <div style="font-family: Tahoma, sans-serif; padding: 10px; margin: 0 auto; width: 100%; max-width: 210mm; height: auto; box-sizing: border-box; font-size: 0.8rem;">
  <div style="border: 2px dashed gray; background-color: white; padding: 2px; width: 100%; height: auto; position: relative;">
    <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
      <div style="display: flex; justify-content: center; align-items: center;">
        <img src="${(r=e==null?void 0:e.ulbDetails)==null?void 0:r.ulb_logo}" style="height: 4rem; margin-left: auto; margin-right: auto;" />
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(1, 1fr);">
      <div style="position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
        <img src="${(N=j(s))==null?void 0:N.state_logo}" alt="" style="width: 12rem; height: 12rem; margin-top: 2rem; z-index: 10; background-color: transparent; opacity: 0.2; border-radius: 50%; border: solid;" />
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
              <h1 style="flex: 1 1 auto; padding-left: 5px; font-size: 0.9rem;">${v(e==null?void 0:e.transactionDate).format("DD/MM/yy")||"N/A"}</h1>
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
                    <img src="${w}" style="height: 4rem; margin-left: auto; margin-right: auto;" />
                  </div>
                </div>
  </div>
</div>`})):y()},className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-sky-500 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[t.jsx(k,{className:"inline text-lg"}),"print"]})]})}),t.jsx("div",{id:"printableArea",className:"",children:t.jsx("div",{children:t.jsx("div",{className:"font-tahoma pb-14 mt-5",children:t.jsxs("div",{className:"border-2 border-dashed border-gray-600 print:scale-95  bg-white p-2 w-[250mm] h-auto md:mx-auto lg:mx-auto  container2 relative ",children:[t.jsx("div",{className:"w-full flex justify-center items-center",children:t.jsx("div",{className:"flex justify-center items-center",children:t.jsx("img",{src:(p=e==null?void 0:e.ulbDetails)==null?void 0:p.ulb_logo,className:"h-20 mx-auto"})})}),t.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:t.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12  ",children:t.jsx("div",{className:"absolute w-full h-full flex justify-center items-center",children:t.jsx("img",{src:(h=j(s))==null?void 0:h.state_logo,alt:"",className:"w-[22rem] h-[22rem] mt-20 z-10 bg-transparent opacity-20 rounded-full border"})})})}),t.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:t.jsx("div",{className:"",children:t.jsx("h1",{className:"font-bold text-4xl text-center ",children:e==null?void 0:e.ulbName})})}),t.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:t.jsx("div",{className:"mx-auto",children:t.jsx("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:"water connection charge payment receipt"})})}),t.jsx("div",{children:t.jsx("table",{className:"w-full  p-2 mt-2 text-md",children:t.jsxs("tr",{className:"",children:[t.jsxs("td",{className:" ",children:[t.jsxs("div",{className:"flex p-1  whitespace-nowrap",children:[t.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Receipt No. :"}),t.jsx("h1",{className:"flex   pl-2",children:e==null?void 0:e.transactionNo})]}),t.jsxs("div",{className:"flex p-1  whitespace-nowrap",children:[t.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Department/Section :"}),t.jsx("h1",{className:"flex  pl-2 ",children:e==null?void 0:e.accountDescription})]}),t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Account Description :"}),t.jsx("h1",{className:"flex  pl-2 ",children:"Water User Charge"})]}),(e==null?void 0:e.holdingNo)&&t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),t.jsx("h1",{className:"flex  pl-2 ",children:e!=null&&e.holdingNo?e==null?void 0:e.holdingNo:"N/A"})]}),(e==null?void 0:e.safNo)&&t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),t.jsx("h1",{className:"flex  pl-2 ",children:e!=null&&e.safNo?e==null?void 0:e.safNo:"N/A"})]})]}),t.jsxs("td",{className:" ",children:[t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Date :"}),t.jsx("h1",{className:"flex  pl-2 ",children:v(e==null?void 0:e.transactionDate).format("DD/MM/yy")||"N/A"})]}),t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Ward No. :"}),t.jsx("h1",{className:"flex  pl-2 ",children:e==null?void 0:e.WardNo})]}),t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Application No. :"}),t.jsx("h1",{className:"flex  pl-2 ",children:e==null?void 0:e.applicationNo})]})]})]})})}),t.jsx("div",{children:t.jsx("table",{className:"w-full  p-2 ",children:t.jsx("tr",{className:"",children:t.jsxs("td",{className:" ",children:[t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900  font-semibold whitespace-nowrap",children:"Received From Mr/Mrs/Miss :"}),t.jsx("h1",{className:"flex   pl-2",children:e==null?void 0:e.customerName})]}),t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Mobile No. :"}),t.jsx("h1",{className:"flex   pl-2",children:e==null?void 0:e.customerMobile})]}),t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"Address :"}),t.jsx("h1",{className:"flex  pl-2 ",children:e==null?void 0:e.address})]}),t.jsxs("div",{className:"flex p-1 ",children:[t.jsx("h1",{className:"flex text-gray-900  font-semibold",children:"A Sum of Rs. :"}),t.jsx("h1",{className:"flex  pl-2 ",children:e==null?void 0:e.totalPaidAmount})]}),t.jsxs("div",{className:"flex p-1 ",children:[t.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["(in words) :"," "]}),t.jsx("h1",{className:"flex  pl-2 ",children:e!=null&&e.paidAmtInWords?(e==null?void 0:e.paidAmtInWords)+" Only":"N/A"})]}),t.jsx("div",{className:"flex p-1 ",children:t.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Towards :"," ",t.jsx("span",{className:"  font-normal ml-1",children:e==null?void 0:e.towards})]})}),t.jsx("div",{className:"flex p-1 ",children:t.jsxs("h1",{className:"flex text-gray-900   font-semibold",children:["Vide :"," ",t.jsx("span",{className:"  ml-1 font-normal",children:e==null?void 0:e.paymentMode})]})})]})})})}),t.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 mt-3",children:t.jsx("div",{className:"",children:t.jsx("h1",{className:"font-bold  text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),t.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:t.jsx("div",{className:"",children:t.jsx("h1",{className:"font-bold  text-left ",children:"WATER CONNECTION FEE DETAILS"})})}),t.jsx("div",{children:t.jsxs("table",{className:"w-full border border-gray-500 ",children:[t.jsx("thead",{className:" w-full",children:t.jsxs("tr",{className:"border border-gray-500   font-bold text-center ",children:[t.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:t.jsx("h1",{className:" ",children:"Description "})}),t.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:t.jsx("h1",{className:"",children:"Amount "})})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{className:"border border-gray-500 text-sm   ",children:[t.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:t.jsx("h1",{className:"text-left ml-2 ",children:" Connection Fee"})}),t.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:t.jsxs("h1",{className:" text-right mr-2",children:[" ","₹"," ",e!=null&&e.connectionFee?e==null?void 0:e.connectionFee:(e==null?void 0:e.connectionFee)==0?0:"N/A"]})}),t.jsx("td",{className:""})]}),t.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[t.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:t.jsx("h1",{className:"text-left ml-2 ",children:"Penalty"})}),t.jsx("td",{colSpan:1,className:"  border-gray-500 w-72",children:t.jsxs("h1",{className:" text-right mr-2",children:[" ","₹"," ",e!=null&&e.penaltyAmount?e==null?void 0:e.penaltyAmount:(e==null?void 0:e.penaltyAmount)==0?0:"N/A"]})})]}),t.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[t.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:t.jsx("h1",{className:" text-left ml-2",children:"Rebate"})}),t.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:t.jsxs("h1",{className:" text-right mr-2",children:[" ","₹"," ",e!=null&&e.rebate?e==null?void 0:e.rebate:(e==null?void 0:e.rebate)==0?0:"N/A"]})})]}),t.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[t.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:t.jsxs("h1",{className:"text-left ml-2 ",children:["Payable Amount"," ",t.jsxs("span",{className:"ml-10",children:["(",e!=null&&e.paidAmtInWords?(e==null?void 0:e.paidAmtInWords)+" Only":"N/A",")"]})]})}),t.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:t.jsxs("h1",{className:" text-right mr-2",children:[" ","₹"," ",e!=null&&e.totalPaidAmount?e==null?void 0:e.totalPaidAmount:(e==null?void 0:e.totalPaidAmount)==0?0:"N/A"," "]})})]})]})]})}),t.jsx("div",{children:t.jsx("table",{className:"w-full mt-2 ",children:t.jsx("tr",{className:"",children:t.jsx("td",{className:"",children:t.jsxs("div",{className:"flex",children:[t.jsx(F,{url:window.location.href,size:"64"}),t.jsxs("div",{className:"flex flex-col ml-4",children:[t.jsx("h1",{className:"text-gray-900 text-sm",children:"For Details Please Visit: **********"}),t.jsxs("h1",{className:"text-gray-900 text-sm",children:["Or Call us at ******* or *********"," "]})]})]})})})})}),t.jsx("div",{className:" ",children:t.jsx("div",{className:"",children:t.jsx("h1",{className:"font-semibold text-sm text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),t.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:t.jsx("div",{className:"mt-2",children:t.jsx("img",{src:w,className:"w-36 mx-auto"})})})]})})})})]})})};export{oe as default};
