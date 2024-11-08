"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9147],{72386:(e,r,a)=>{a.r(r),a.d(r,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"graphql-api/admin-api/queries/hero-groups","title":"heroGroups","description":"No description","source":"@site/docs/graphql-api/admin-api/queries/hero-groups.mdx","sourceDirName":"graphql-api/admin-api/queries","slug":"/graphql-api/admin-api/queries/hero-groups","permalink":"/graphql-api/admin-api/queries/hero-groups","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"hero-groups","title":"heroGroups"},"sidebar":"graphqlSidebar","previous":{"title":"heroGroupsWithoutStation","permalink":"/graphql-api/admin-api/queries/hero-groups-without-station"},"next":{"title":"hero","permalink":"/graphql-api/admin-api/queries/hero"}}');var o=a(62540),n=a(43023),t=a(63696);const d={id:"hero-groups",title:"heroGroups"},c=void 0,l={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,n.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:r,children:a,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,n.R)()},[c,l]=(0,t.useState)(s);return(0,o.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&a]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>heroGroups.<b>autopilot</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"herogroupsautopilotboolean--",level:4},{value:'<code>heroGroups.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"herogroupsstationiduuid--",level:4},{value:'<code>heroGroups.<b>targetCountry</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"herogroupstargetcountrycountrycode--",level:4},{value:"Type",id:"type",level:3},{value:'<code>HeroGroup</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"herogroup--",level:4}];function x(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"No description"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-graphql",children:"heroGroups(\n  autopilot: Boolean\n  stationId: UUID\n  targetCountry: CountryCode\n): [HeroGroup!]!\n"})}),"\n",(0,o.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(r.h4,{id:"herogroupsautopilotboolean--",children:[(0,o.jsx)(r.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["heroGroups.",(0,o.jsx)("b",{children:"autopilot"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(r.a,{href:"/graphql-api/references/scalars/boolean",children:(0,o.jsx)(r.code,{children:"Boolean"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,o.jsxs)(r.h4,{id:"herogroupsstationiduuid--",children:[(0,o.jsx)(r.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["heroGroups.",(0,o.jsx)("b",{children:"stationId"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(r.a,{href:"/graphql-api/references/scalars/uuid",children:(0,o.jsx)(r.code,{children:"UUID"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,o.jsxs)(r.h4,{id:"herogroupstargetcountrycountrycode--",children:[(0,o.jsx)(r.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["heroGroups.",(0,o.jsx)("b",{children:"targetCountry"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(r.a,{href:"/graphql-api/references/scalars/country-code",children:(0,o.jsx)(r.code,{children:"CountryCode"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,o.jsx)(r.h3,{id:"type",children:"Type"}),"\n",(0,o.jsxs)(r.h4,{id:"herogroup--",children:[(0,o.jsx)(r.a,{href:"/graphql-api/references/objects/hero-group",children:(0,o.jsx)(r.code,{children:"HeroGroup"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,o.jsx)(r.p,{children:"Group of heroes to be displayed together."})]})}function b(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},43023:(e,r,a)=>{a.d(r,{R:()=>t,x:()=>d});var s=a(63696);const o={},n=s.createContext(o);function t(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);