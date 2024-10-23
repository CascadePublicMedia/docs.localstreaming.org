"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3600],{64755:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=s(62540),d=s(43023),t=s(63696);const i={id:"new-shows",title:"newShows"},r=void 0,o={id:"graphql-api/admin-api/queries/new-shows",title:"newShows",description:"No description",source:"@site/docs/graphql-api/admin-api/queries/new-shows.mdx",sourceDirName:"graphql-api/admin-api/queries",slug:"/graphql-api/admin-api/queries/new-shows",permalink:"/graphql-api/admin-api/queries/new-shows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"new-shows",title:"newShows"},sidebar:"graphqlSidebar",previous:{title:"myLists",permalink:"/graphql-api/admin-api/queries/my-lists"},next:{title:"pbsAccountConfig",permalink:"/graphql-api/admin-api/queries/pbs-account-config"}},l={},c=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),p=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const[i,r]=(0,t.useState)(d);return(0,n.jsxs)("details",{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&s]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>newShows.<b>byDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"newshowsbydatedatetime---",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshow--",level:4}];function u(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"newShows(\n  byDate: DateTime!\n): [NormalizedShow!]!\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"newshowsbydatedatetime---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["newShows.",(0,n.jsx)("b",{children:"byDate"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,n.jsx)(a.code,{children:"DateTime!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"normalizedshow--",children:[(0,n.jsx)(a.a,{href:"/graphql-api/references/objects/normalized-show",children:(0,n.jsx)(a.code,{children:"NormalizedShow"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.p,{children:"Station-normalized data for a show."}),"\n",(0,n.jsx)(a.p,{children:"The Local Streaming data model has three types repsenting a show:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"PbsShow"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"Show"}),": Global show metadata overriding ",(0,n.jsx)(a.code,{children:"PbsShow"})," metadata for all stations, and"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"StationShow"}),": Station show metadata overriding ",(0,n.jsx)(a.code,{children:"Show"})," and ",(0,n.jsx)(a.code,{children:"PbsShow"})," metadata for individual stations."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"NormalizedShow"})," is a combination of all three types for a specific station and country."]})]})}function x(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},43023:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>r});var n=s(63696);const d={},t=n.createContext(d);function i(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);