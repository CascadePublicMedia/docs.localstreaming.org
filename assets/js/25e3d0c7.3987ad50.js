"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2414],{8448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"http-api/roku-search-feed","title":"Roku Search Feed","description":"GET /rokuSearchFeed","source":"@site/docs/http-api/roku-search-feed.mdx","sourceDirName":"http-api","slug":"/http-api/roku-search-feed","permalink":"/http-api/roku-search-feed","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Roku Search Feed"},"sidebar":"httpApiSidebar","previous":{"title":"PBS Account","permalink":"/http-api/pbs-account"}}');var s=r(62540),a=r(43023),l=r(88256),o=r(55764);const i={title:"Roku Search Feed"},c=void 0,u={},d=[{value:"<code>GET /rokuSearchFeed</code>",id:"get-rokusearchfeed",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Payload",id:"payload",level:3},{value:"Type",id:"type",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"get-rokusearchfeed",children:(0,s.jsx)(t.code,{children:"GET /rokuSearchFeed"})}),"\n",(0,s.jsx)(t.h3,{id:"purpose",children:"Purpose"}),"\n",(0,s.jsx)(t.p,{children:"Provide a search feed for Roku app content to be ingested by Roku."}),"\n",(0,s.jsxs)(t.p,{children:["The output of this endpoint conforms to the ",(0,s.jsx)(t.a,{href:"https://developer.roku.com/docs/specs/search/search-feed.md",children:"Roku Search feed 2.0 (JSON)"})," schema."]}),"\n",(0,s.jsxs)(t.p,{children:["The results are paginated and there will be a next page of the ",(0,s.jsx)(t.code,{children:"nextPageUrl"})," property is present in the response."]}),"\n",(0,s.jsxs)(t.p,{children:["Only ",(0,s.jsx)(t.em,{children:"local"})," shows for the provided stations are included with the search feeds. PBS National content cannot be included."]}),"\n",(0,s.jsx)(t.h3,{id:"payload",children:"Payload"}),"\n",(0,s.jsx)(t.h4,{id:"type",children:"Type"}),"\n",(0,s.jsx)(t.p,{children:"JSON in body."}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"callSign"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The four letter station call sign to generate the feed for."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"page"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Number"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Page number to load (items for 100 shows per page)."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"responses",children:"Responses"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(o.A,{value:"200",label:"200 OK",default:!0,children:[(0,s.jsx)(t.p,{children:"JSON page for the page of results requested."}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://developer.roku.com/docs/specs/search/search-feed.md#sample-feeds",children:"Roku Search sample feeds"})," for expected output properties."]})]}),(0,s.jsx)(o.A,{value:"400",label:"400 Bad Request",children:(0,s.jsxs)(t.p,{children:["Indicates the ",(0,s.jsx)(t.code,{children:"callSign"})," parameter is missing from the URL request."]})}),(0,s.jsx)(o.A,{value:"404",label:"404 Not Found",children:(0,s.jsx)(t.p,{children:"Indicates no results found for the requested page."})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},55764:(e,t,r)=>{r.d(t,{A:()=>l});r(63696);var n=r(11750);const s={tabItem:"tabItem_wHwb"};var a=r(62540);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},88256:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(63696),s=r(11750),a=r(90766),l=r(49519),o=r(14395),i=r(35043),c=r(44544),u=r(67454);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:r,groupId:s}),[x,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),m=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=r(86681);const m={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=r(62540);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),s=o[r].value;s!==n&&(c(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},43023:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(63696);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);