"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3386],{1269:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>g,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>f});var i=r(62540),t=r(43023),l=r(63696);const n={id:"viewer-my-list-filters",title:"ViewerMyListFilters"},a=void 0,d={id:"graphql-api/references/inputs/viewer-my-list-filters",title:"ViewerMyListFilters",description:"Filters for the viewerMyList query.",source:"@site/docs/graphql-api/references/inputs/viewer-my-list-filters.mdx",sourceDirName:"graphql-api/references/inputs",slug:"/graphql-api/references/inputs/viewer-my-list-filters",permalink:"/graphql-api/references/inputs/viewer-my-list-filters",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"viewer-my-list-filters",title:"ViewerMyListFilters"},sidebar:"graphqlSidebar",previous:{title:"ViewerLikesFilters",permalink:"/graphql-api/references/inputs/viewer-likes-filters"},next:{title:"ViewerMyListSortBy",permalink:"/graphql-api/references/inputs/viewer-my-list-sort-by"}},c={},o=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),y=({dataOpen:e,dataClose:s,children:r,startOpen:t=!1})=>{const[n,a]=(0,l.useState)(t);return(0,i.jsxs)("details",{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:n?e:s}),n&&r]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ViewerMyListFilters.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewermylistfilterslimitint--",level:4},{value:'<code>ViewerMyListFilters.<b>showId</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewermylistfiltersshowidstring---",level:4},{value:'<code>ViewerMyListFilters.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewermylistfiltersskipint--",level:4},{value:'<code>ViewerMyListFilters.<b>sortBy</b></code><Bullet></Bullet><code>ViewerMyListSortBy</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewermylistfilterssortbyviewermylistsortby--",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Filters for the ",(0,i.jsx)(s.code,{children:"viewerMyList"})," query."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:"input ViewerMyListFilters {\n  limit: Int\n  showId: [String]\n  skip: Int\n  sortBy: ViewerMyListSortBy\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(s.h4,{id:"viewermylistfilterslimitint--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerMyListFilters.",(0,i.jsx)("b",{children:"limit"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/scalars/int",children:(0,i.jsx)(s.code,{children:"Int"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"Number of results to retrieve (default: 200)."}),"\n",(0,i.jsxs)(s.h4,{id:"viewermylistfiltersshowidstring---",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerMyListFilters.",(0,i.jsx)("b",{children:"showId"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,i.jsx)(s.code,{children:"[String]"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"List of show IDs to filter for (ANY)."}),"\n",(0,i.jsxs)(s.h4,{id:"viewermylistfiltersskipint--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerMyListFilters.",(0,i.jsx)("b",{children:"skip"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/scalars/int",children:(0,i.jsx)(s.code,{children:"Int"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"Number of results to skip."}),"\n",(0,i.jsxs)(s.h4,{id:"viewermylistfilterssortbyviewermylistsortby--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerMyListFilters.",(0,i.jsx)("b",{children:"sortBy"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/inputs/viewer-my-list-sort-by",children:(0,i.jsx)(s.code,{children:"ViewerMyListSortBy"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"input"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"How to sort results."}),"\n",(0,i.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/graphql-api/consumer-api/queries/viewer-my-list",children:(0,i.jsx)(s.code,{children:"viewerMyList"})}),"  ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"query"})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},43023:(e,s,r)=>{r.d(s,{R:()=>n,x:()=>a});var i=r(63696);const t={},l=i.createContext(t);function n(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);