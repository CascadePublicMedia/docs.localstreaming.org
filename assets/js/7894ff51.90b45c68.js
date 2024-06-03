"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5095],{40925:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>p,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(62540),n=r(43023),t=r(63696);const o={id:"search-promos",title:"searchPromos"},c=void 0,i={id:"graphql-api/admin-api/queries/search-promos",title:"searchPromos",description:"No description",source:"@site/docs/graphql-api/admin-api/queries/search-promos.mdx",sourceDirName:"graphql-api/admin-api/queries",slug:"/graphql-api/admin-api/queries/search-promos",permalink:"/graphql-api/admin-api/queries/search-promos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"search-promos",title:"searchPromos"},sidebar:"schemaSidebar",previous:{title:"searchCarousels",permalink:"/graphql-api/admin-api/queries/search-carousels"},next:{title:"show",permalink:"/graphql-api/admin-api/queries/show"}},d={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:r,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[i,d]=(0,t.useState)(o);return(0,a.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&r]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>searchPromos.<b>stationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchpromosstationidstring--",level:4},{value:'<code>searchPromos.<b>title</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchpromostitlestring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Promo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"promo--",level:4}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"searchPromos(\n  stationId: String\n  title: String\n): [Promo!]!\n"})}),"\n",(0,a.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(s.h4,{id:"searchpromosstationidstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["searchPromos.",(0,a.jsx)("b",{children:"stationId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"searchpromostitlestring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["searchPromos.",(0,a.jsx)("b",{children:"title"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(s.h4,{id:"promo--",children:[(0,a.jsx)(s.a,{href:"../../../graphql-api/references/objects/promo",children:(0,a.jsx)(s.code,{children:"Promo"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Promotional content to mix in with regular content."}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},43023:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var a=r(63696);const n={},t=a.createContext(n);function o(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);