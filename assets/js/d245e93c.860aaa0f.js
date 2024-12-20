"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3600],{33586:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"graphql-api/admin-api/queries/new-shows","title":"newShows","description":"No description","source":"@site/docs/graphql-api/admin-api/queries/new-shows.mdx","sourceDirName":"graphql-api/admin-api/queries","slug":"/graphql-api/admin-api/queries/new-shows","permalink":"/graphql-api/admin-api/queries/new-shows","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"new-shows","title":"newShows"},"sidebar":"graphqlSidebar","previous":{"title":"myLists","permalink":"/graphql-api/admin-api/queries/my-lists"},"next":{"title":"pbsAccountConfig","permalink":"/graphql-api/admin-api/queries/pbs-account-config"}}');var r=a(62540),t=a(43023),d=a(63696);const i={id:"new-shows",title:"newShows"},o=void 0,l={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,t.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:a,startOpen:n=!1})=>{const i={details:"details",summary:"summary",...(0,t.R)()},[o,l]=(0,d.useState)(n);return(0,r.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&a]})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>newShows.<b>byDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"newshowsbydatedatetime---",level:4},{value:'<code>newShows.<b>filters</b></code><Bullet></Bullet><code>FilterNewShowInput</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"newshowsfiltersfilternewshowinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshow--",level:4}];function m(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"No description"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"newShows(\n  byDate: DateTime!\n  filters: FilterNewShowInput\n): [NormalizedShow!]!\n"})}),"\n",(0,r.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(s.h4,{id:"newshowsbydatedatetime---",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["newShows.",(0,r.jsx)("b",{children:"byDate"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/date-time",children:(0,r.jsx)(s.code,{children:"DateTime!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(s.h4,{id:"newshowsfiltersfilternewshowinput--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["newShows.",(0,r.jsx)("b",{children:"filters"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/inputs/filter-new-show-input",children:(0,r.jsx)(s.code,{children:"FilterNewShowInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,r.jsxs)(s.h4,{id:"normalizedshow--",children:[(0,r.jsx)(s.a,{href:"/graphql-api/references/objects/normalized-show",children:(0,r.jsx)(s.code,{children:"NormalizedShow"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.p,{children:"Station-normalized data for a show."}),"\n",(0,r.jsx)(s.p,{children:"The Local Streaming data model has three types repsenting a show:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PbsShow"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Show"}),": Global show metadata overriding ",(0,r.jsx)(s.code,{children:"PbsShow"})," metadata for all stations, and"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"StationShow"}),": Station show metadata overriding ",(0,r.jsx)(s.code,{children:"Show"})," and ",(0,r.jsx)(s.code,{children:"PbsShow"})," metadata for individual stations."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"NormalizedShow"})," is a combination of all three types for a specific station and country."]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>d,x:()=>i});var n=a(63696);const r={},t=n.createContext(r);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);