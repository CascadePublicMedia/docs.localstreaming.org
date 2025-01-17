"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9395],{69155:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>h,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>t,default:()=>v,frontMatter:()=>r,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"graphql-api/admin-api/queries/device","title":"device","description":"No description","source":"@site/docs/graphql-api/admin-api/queries/device.mdx","sourceDirName":"graphql-api/admin-api/queries","slug":"/graphql-api/admin-api/queries/device","permalink":"/graphql-api/admin-api/queries/device","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"device","title":"device"},"sidebar":"graphqlSidebar","previous":{"title":"contentLocks","permalink":"/graphql-api/admin-api/queries/content-locks"},"next":{"title":"devices","permalink":"/graphql-api/admin-api/queries/devices"}}');var c=a(62540),i=a(43023),n=a(63696);const r={id:"device",title:"device"},t=void 0,l={},o=()=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:d,children:a,startOpen:s=!1})=>{const[i,r]=(0,n.useState)(s);return(0,c.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:d}),i&&a]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>device.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"devicecodestring--",level:4},{value:'<code>device.<b>deviceId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"devicedeviceidstring--",level:4},{value:'<code>device.<b>id</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"deviceidstring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Device</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"device--",level:4}];function u(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.p,{children:"No description"}),"\n",(0,c.jsx)(d.pre,{children:(0,c.jsx)(d.code,{className:"language-graphql",children:"device(\n  code: String\n  deviceId: String\n  id: String\n): Device\n"})}),"\n",(0,c.jsx)(d.h3,{id:"arguments",children:"Arguments"}),"\n",(0,c.jsxs)(d.h4,{id:"devicecodestring--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["device.",(0,c.jsx)("b",{children:"code"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(d.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(d.h4,{id:"devicedeviceidstring--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["device.",(0,c.jsx)("b",{children:"deviceId"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(d.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(d.h4,{id:"deviceidstring--",children:[(0,c.jsx)(d.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["device.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(d.code,{children:"String"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsx)(d.h3,{id:"type",children:"Type"}),"\n",(0,c.jsxs)(d.h4,{id:"device--",children:[(0,c.jsx)(d.a,{href:"/graphql-api/references/objects/device",children:(0,c.jsx)(d.code,{children:"Device"})})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,c.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsx)(d.p,{children:"Device used by a viewer."})]})}function v(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,c.jsx)(d,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},43023:(e,d,a)=>{a.d(d,{R:()=>n,x:()=>r});var s=a(63696);const c={},i=s.createContext(c);function n(e){const d=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),s.createElement(i.Provider,{value:d},e.children)}}}]);