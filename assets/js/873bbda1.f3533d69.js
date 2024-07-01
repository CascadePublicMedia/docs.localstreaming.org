"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4331],{92260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=n(62540),i=n(43023),s=n(22752),l=n(45589);const d={title:"Device Init"},a=void 0,c={id:"http-api/device-init",title:"Device Init",description:"POST /deviceInit",source:"@site/docs/http-api/device-init.mdx",sourceDirName:"http-api",slug:"/http-api/device-init",permalink:"/http-api/device-init",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Device Init"},sidebar:"httpApiSidebar",previous:{title:"API Auth",permalink:"/http-api/api-auth"},next:{title:"HTTP API",permalink:"/http-api/"}},o={},h=[{value:"<code>POST /deviceInit</code>",id:"post-deviceinit",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Payload",id:"payload",level:3},{value:"Type",id:"type",level:4},{value:"Parameters",id:"parameters",level:4},{value:"<code>ipAddress</code> parameter",id:"ipaddress-parameter",level:5},{value:"Responses",id:"responses",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"post-deviceinit",children:(0,r.jsx)(t.code,{children:"POST /deviceInit"})}),"\n",(0,r.jsx)(t.h3,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsx)(t.p,{children:"Retrieve contextual parameters for content normalization and user context based on a device. This\nendpoint should be use during the initialization process of API consumers to get information that\nwill required for other API queries. The following actions are performed:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"A device is selected or created based on the provided deviceId,"}),"\n",(0,r.jsx)(t.li,{children:"country location of device is determined based on IP address,"}),"\n",(0,r.jsx)(t.li,{children:"livestream access is determined based on IP address and PBS station localization, and"}),"\n",(0,r.jsx)(t.li,{children:"Passport status is determined based on PBS Account associated with the device's viewer."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Geolocation (country) and localization (station livestream access) is determined using the\n",(0,r.jsx)(t.a,{href:"https://docs.pbs.org/display/localization",children:"PBS Localization API"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"payload",children:"Payload"}),"\n",(0,r.jsx)(t.h4,{id:"type",children:"Type"}),"\n",(0,r.jsx)(t.p,{children:"JSON in body."}),"\n",(0,r.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Parameter"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Required"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"Type"})}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"deviceId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Unique identifier of a device."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"deviceModel"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Device model."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"deviceName"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Device name."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"deviceType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"../graphql-api/references/enums/device-type",children:"DeviceType"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Type of device."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"stationId"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"UUID"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ID of the station associated with the device."})]})]})]}),"\n",(0,r.jsxs)(t.h5,{id:"ipaddress-parameter",children:[(0,r.jsx)(t.code,{children:"ipAddress"})," parameter"]}),"\n",(0,r.jsx)(t.admonition,{title:"Test parameter only",type:"warning",children:(0,r.jsxs)(t.p,{children:["There is an additional parameter ",(0,r.jsx)(t.code,{children:"ipAddress"})," avialable in non-production environments only. If set, it\nwill be used instead of the detected IP address. It can be used in local development environmments\nwhere it is not possible to retrieve an external IP address for a request."]})}),"\n",(0,r.jsx)(t.h3,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"200",label:"200 OK",default:!0,children:[(0,r.jsx)(t.p,{children:"JSON body with the following properties:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"country"}),": ",(0,r.jsx)(t.a,{href:"https://www.iso.org/obp/ui/",children:"ISO 3661-1 alpha-2"})," of geolocated IP address."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"device"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"deviceId"}),": Unique device ID (matches deviceId from payload)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"type"}),": Device type (matches deviceType from payload -- does not update)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"model"}),": Device model."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"name"}),": Device name."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ipAddress"}),": IP addressed used for geolocation and localization."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"stationId"}),": Unique station ID (matches stationId from payload)."]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"viewer"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"id"}),": Unique viewer ID."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"pbsAccount"}),": PBS Account and membership properties (if available).","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"accountId"}),": PBS Account ID."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"emailAddress"}),": PBS Account email address (",(0,r.jsx)(t.strong,{children:"not"})," membership email address)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hasLivestreamAccess"}),": Whether the device can access PBS livestreams."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hasPassport"}),": Whether the viewer has an active PBS Passport benefit."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"membershipId"}),": Membership ID from PBS Membership Vault."]}),"\n"]}),"\n"]}),"\n"]})]}),(0,r.jsxs)(l.A,{value:"400",label:"400 Bad Request",children:[(0,r.jsx)(t.p,{children:"JSON body with one property:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"reason"}),": Code string indicating the reason for the error:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"BAD_PAYLOAD"}),": Invalid or malformed payload."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"IP_ADDRESS_NOT_FOUND"}),": IP address could not be obtained from request."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"LOCALIZATION_ERROR"}),": Upstream localization provider error."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"MISSING_PARAMETERS"}),": Required payload parameters are missing."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"MVAULT_ERROR"}),": Upstream PBS Membership Vault API error."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"STATION_NOT_FOUND"}),": Provided stationId not found."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"UNKNOWN_DEVICE_TYPE"}),": Provided deviceType not valid."]}),"\n"]}),"\n"]}),"\n"]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},45589:(e,t,n)=>{n.d(t,{A:()=>l});n(63696);var r=n(11750);const i={tabItem:"tabItem_wHwb"};var s=n(62540);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:n,children:t})}},22752:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(63696),i=n(11750),s=n(90766),l=n(49519),d=n(14395),a=n(35043),c=n(44544),o=n(67454);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=u(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,h]=x({queryString:n,groupId:i}),[j,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,o.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),v=(()=>{const e=c??j;return p({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{v&&a(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=n(86681);const v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=n(62540);function b(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),o=e=>{const t=e.currentTarget,n=a.indexOf(t),i=d[n].value;i!==r&&(c(t),l(i))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:h,onClick:o,...s,className:(0,i.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function g(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(y,{...t,...e})]})}function A(e){const t=(0,m.A)();return(0,f.jsx)(g,{...e,children:h(e.children)},String(t))}},43023:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(63696);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);