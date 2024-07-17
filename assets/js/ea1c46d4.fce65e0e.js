"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9135],{19723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=n(62540),s=n(43023),i=n(22752),l=n(45589);const a={title:"Activation code"},d=void 0,o={id:"http-api/activation-code",title:"Activation code",description:"OPTIONS /activationCode",source:"@site/docs/http-api/activation-code.mdx",sourceDirName:"http-api",slug:"/http-api/activation-code",permalink:"/http-api/activation-code",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Activation code"},sidebar:"httpApiSidebar",next:{title:"API Auth",permalink:"/http-api/api-auth"}},c={},h=[{value:"<code>OPTIONS /activationCode</code>",id:"options-activationcode",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Responses",id:"responses",level:3},{value:"<code>POST /activationCode</code>",id:"post-activationcode",level:2},{value:"Purpose",id:"purpose-1",level:3},{value:"Payload",id:"payload",level:3},{value:"Type",id:"type",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses-1",level:3},{value:"<code>POST /activationCode/startOAuth</code>",id:"post-activationcodestartoauth",level:2},{value:"Purpose",id:"purpose-2",level:3},{value:"Payload",id:"payload-1",level:3},{value:"Type",id:"type-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-2",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"options-activationcode",children:(0,r.jsx)(t.code,{children:"OPTIONS /activationCode"})}),"\n",(0,r.jsx)(t.h3,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsx)(t.p,{children:"Provides CORS support information for the endpoint."}),"\n",(0,r.jsx)(t.h3,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(t.p,{children:["Always ",(0,r.jsx)(t.code,{children:"200 OK"})," with ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers",children:"CORS response headers"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"post-activationcode",children:(0,r.jsx)(t.code,{children:"POST /activationCode"})}),"\n",(0,r.jsx)(t.h3,{id:"purpose-1",children:"Purpose"}),"\n",(0,r.jsx)(t.p,{children:"Generate an activation code for a device."}),"\n",(0,r.jsx)(t.h3,{id:"payload",children:"Payload"}),"\n",(0,r.jsx)(t.h4,{id:"type",children:"Type"}),"\n",(0,r.jsx)(t.p,{children:"JSON in body."}),"\n",(0,r.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Parameter"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Required"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Type"})}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"deviceId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Unique identifier of a device."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"deviceType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"../graphql-api/references/enums/device-type",children:"DeviceType"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Type of device."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"stationId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"UUID"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ID of the station associated with the device."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"responses-1",children:"Responses"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(l.A,{value:"200",label:"200 OK",default:!0,children:[(0,r.jsx)(t.p,{children:"JSON body with two properties:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"code"}),": Unique six digit code associated with the provided deviceId."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"qrCodeUrl"}),": URL to generate a QR code for a viewer to scan and access the activation form in a browser."]}),"\n"]})]}),(0,r.jsxs)(l.A,{value:"400",label:"400 Bad Request",children:[(0,r.jsx)(t.p,{children:"JSON body with one property:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"reason"}),": Code string indicating the reason for the error:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ALREADY_REGISTERED"}),": Provided ",(0,r.jsx)(t.code,{children:"deviceId"})," is already registered to a viewer."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"MISSING_PARAMETERS"}),": Required payload parameters are missing."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NO_UNIQUE_CODE"}),": The function was unable to generate a unique activation code"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"STATION_NOT_FOUND"}),": Provided ",(0,r.jsx)(t.code,{children:"stationId"})," not found."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"UNKNOWN_DEVICE_TYPE"}),": Provided ",(0,r.jsx)(t.code,{children:"deviceType"})," not valid."]}),"\n"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(l.A,{value:"403",label:"403 Forbidden",children:(0,r.jsxs)(t.p,{children:["Indicates an invalid ",(0,r.jsx)(t.code,{children:"Origin"})," header was passed in a CORS request."]})}),(0,r.jsx)(l.A,{value:"405",label:"405 Method Not Allowed",children:(0,r.jsx)(t.p,{children:"Returned for any unsupported HTTP method."})})]}),"\n",(0,r.jsx)(t.h2,{id:"post-activationcodestartoauth",children:(0,r.jsx)(t.code,{children:"POST /activationCode/startOAuth"})}),"\n",(0,r.jsx)(t.h3,{id:"purpose-2",children:"Purpose"}),"\n",(0,r.jsx)(t.p,{children:"Initiate an OAuth flow for a device activation."}),"\n",(0,r.jsx)(t.h3,{id:"payload-1",children:"Payload"}),"\n",(0,r.jsx)(t.h4,{id:"type-1",children:"Type"}),"\n",(0,r.jsx)(t.p,{children:"JSON in body."}),"\n",(0,r.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Parameter"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Required"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Type"})}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"code"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Code associated with a known device."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"stationCallSign"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Station call sign associated with the device."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"responses-2",children:"Responses"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(l.A,{value:"200",label:"200 OK",default:!0,children:[(0,r.jsx)(t.p,{children:"JSON body with one property:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"state"}),": State value to be included with the OAuth flow. See\n",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#appendix-A.5",children:"The OAuth 2.0 Authorization Framework"}),"\nfor details about how to use this value."]}),"\n"]})]}),(0,r.jsxs)(l.A,{value:"400",label:"400 Bad Request",children:[(0,r.jsx)(t.p,{children:"JSON body with one property:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"reason"}),": Code string indicating the reason for the error:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"BAD_PAYLOAD"}),": Malformed ",(0,r.jsx)(t.code,{children:"POST"})," body of missing required parameter."]}),"\n"]}),"\n"]}),"\n"]})]}),(0,r.jsx)(l.A,{value:"403",label:"403 Forbidden",children:(0,r.jsxs)(t.p,{children:["Indicates an invalid ",(0,r.jsx)(t.code,{children:"Origin"})," header was passed in a CORS request."]})}),(0,r.jsx)(l.A,{value:"404",label:"404 Not Found",default:!0,children:(0,r.jsx)(t.p,{children:"Indicates the device could not be found with the provided code parameter."})}),(0,r.jsx)(l.A,{value:"405",label:"405 Method Not Allowed",children:(0,r.jsx)(t.p,{children:"Returned for any unsupported HTTP method."})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},45589:(e,t,n)=>{n.d(t,{A:()=>l});n(63696);var r=n(11750);const s={tabItem:"tabItem_wHwb"};var i=n(62540);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},22752:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(63696),s=n(11750),i=n(90766),l=n(49519),a=n(14395),d=n(35043),o=n(44544),c=n(67454);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[o,h]=x({queryString:n,groupId:s}),[j,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=o??j;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),v(e)}),[h,v,i]),tabValues:i}}var v=n(86681);const f={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=n(62540);function y(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),s=a[n].value;s!==r&&(o(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:h,onClick:c,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function m(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function A(e){const t=(0,v.A)();return(0,b.jsx)(m,{...e,children:h(e.children)},String(t))}},43023:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(63696);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);