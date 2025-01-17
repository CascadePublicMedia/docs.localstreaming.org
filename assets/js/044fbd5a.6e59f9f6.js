"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[369],{65927:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"graphql-api/consumer-api/mutations/sign-out","title":"signOut","description":"Removes relationship between a Viewer and Device (sign out).","source":"@site/docs/graphql-api/consumer-api/mutations/sign-out.mdx","sourceDirName":"graphql-api/consumer-api/mutations","slug":"/graphql-api/consumer-api/mutations/sign-out","permalink":"/graphql-api/consumer-api/mutations/sign-out","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"sign-out","title":"signOut"},"sidebar":"graphqlSidebar","previous":{"title":"deleteWatchHistory","permalink":"/graphql-api/consumer-api/mutations/delete-watch-history"},"next":{"title":"updateLike","permalink":"/graphql-api/consumer-api/mutations/update-like"}}');var t=a(62540),i=a(43023),r=a(63696);const d={id:"sign-out",title:"signOut"},c=void 0,l={},o=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:s,children:a,startOpen:n=!1})=>{const[i,d]=(0,r.useState)(n);return(0,t.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>signOut.<b>deviceId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signoutdeviceidstring---",level:4},{value:'<code>signOut.<b>viewerId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signoutvieweridstring---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Device</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"device--",level:4}];function x(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Removes relationship between a ",(0,t.jsx)(s.code,{children:"Viewer"})," and ",(0,t.jsx)(s.code,{children:"Device"})," (sign out)."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"signOut(\n  deviceId: String!\n  viewerId: String!\n): Device!\n"})}),"\n",(0,t.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(s.h4,{id:"signoutdeviceidstring---",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["signOut.",(0,t.jsx)("b",{children:"deviceId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(s.h4,{id:"signoutvieweridstring---",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["signOut.",(0,t.jsx)("b",{children:"viewerId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(s.h4,{id:"device--",children:[(0,t.jsx)(s.a,{href:"/graphql-api/references/objects/device",children:(0,t.jsx)(s.code,{children:"Device"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(s.p,{children:"Device used by a viewer."})]})}function b(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>d});var n=a(63696);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);