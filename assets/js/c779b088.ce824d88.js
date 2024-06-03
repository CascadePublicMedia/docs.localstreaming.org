"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6787],{68252:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var s=r(62540),i=r(43023),n=r(63696);const a={id:"watch-history-filter",title:"WatchHistoryFilter"},c=void 0,l={id:"graphql-api/references/inputs/watch-history-filter",title:"WatchHistoryFilter",description:"Filters for watch history entries querying.",source:"@site/docs/graphql-api/references/inputs/watch-history-filter.mdx",sourceDirName:"graphql-api/references/inputs",slug:"/graphql-api/references/inputs/watch-history-filter",permalink:"/graphql-api/references/inputs/watch-history-filter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"watch-history-filter",title:"WatchHistoryFilter"},sidebar:"schemaSidebar",previous:{title:"UpsertWatchHistoryInput",permalink:"/graphql-api/references/inputs/upsert-watch-history-input"},next:{title:"ApiUser",permalink:"/graphql-api/references/objects/api-user"}},o={},d=()=>{const e={span:"span",...(0,i.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,i.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,i.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:r,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,i.R)()},[l,o]=(0,n.useState)(a);return(0,s.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&r]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>WatchHistoryFilter.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"watchhistoryfilterlimitint--",level:4},{value:'<code>WatchHistoryFilter.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"watchhistoryfilterskipint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Filters for watch history entries querying."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input WatchHistoryFilter {\n  limit: Int\n  skip: Int\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"watchhistoryfilterlimitint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WatchHistoryFilter.",(0,s.jsx)("b",{children:"limit"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"../../../graphql-api/references/scalars/int",children:(0,s.jsx)(t.code,{children:"Int"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Number of entries to retrieve."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"watchhistoryfilterskipint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["WatchHistoryFilter.",(0,s.jsx)("b",{children:"skip"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"../../../graphql-api/references/scalars/int",children:(0,s.jsx)(t.code,{children:"Int"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Number of entries to skip."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"../../../graphql-api/consumer-api/queries/viewer-watch-history",children:(0,s.jsx)(t.code,{children:"viewerWatchHistory"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"query"})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},43023:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var s=r(63696);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);