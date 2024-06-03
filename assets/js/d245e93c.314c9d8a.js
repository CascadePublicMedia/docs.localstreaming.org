"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3600],{64755:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=s(62540),t=s(43023),r=s(63696);const d={id:"new-shows",title:"newShows"},i=void 0,o={id:"graphql-api/admin-api/queries/new-shows",title:"newShows",description:"No description",source:"@site/docs/graphql-api/admin-api/queries/new-shows.mdx",sourceDirName:"graphql-api/admin-api/queries",slug:"/graphql-api/admin-api/queries/new-shows",permalink:"/graphql-api/admin-api/queries/new-shows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"new-shows",title:"newShows"},sidebar:"schemaSidebar",previous:{title:"myLists",permalink:"/graphql-api/admin-api/queries/my-lists"},next:{title:"pbsShow",permalink:"/graphql-api/admin-api/queries/pbs-show"}},l={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,t.R)()},[o,l]=(0,r.useState)(d);return(0,n.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>newShows.<b>byDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"newshowsbydatedatetime---",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshow--",level:4}];function g(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"newShows(\n  byDate: DateTime!\n): [NormalizedShow!]!\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"newshowsbydatedatetime---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["newShows.",(0,n.jsx)("b",{children:"byDate"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,n.jsx)(a.code,{children:"DateTime!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"normalizedshow--",children:[(0,n.jsx)(a.a,{href:"../../../graphql-api/references/objects/normalized-show",children:(0,n.jsx)(a.code,{children:"NormalizedShow"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Station-normalized data for a show."}),"\n",(0,n.jsx)(a.p,{children:"The Local Streaming data model has three types repsenting a show:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"PbsShow"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"Show"}),": Global show metadata overriding ",(0,n.jsx)(a.code,{children:"PbsShow"})," metadata for all stations, and"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"StationShow"}),": Station show metadata overriding ",(0,n.jsx)(a.code,{children:"Show"})," and ",(0,n.jsx)(a.code,{children:"PbsShow"})," metadata for individual stations."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"NormalizedShow"})," is a combination of all three types for a specific station and country."]}),"\n"]})]})}function x(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},43023:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>i});var n=s(63696);const t={},r=n.createContext(t);function d(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);