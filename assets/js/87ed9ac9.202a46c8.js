"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8361],{22139:(e,l,n)=>{n.r(l),n.d(l,{Badge:()=>m,Bullet:()=>t,Details:()=>h,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(62540),o=n(43023),s=n(63696);const r={id:"normalized-collection",title:"normalizedCollection"},c=void 0,d={id:"graphql-api/consumer-api/queries/normalized-collection",title:"normalizedCollection",description:"Gets a collection with all items station-normalized.",source:"@site/docs/graphql-api/consumer-api/queries/normalized-collection.mdx",sourceDirName:"graphql-api/consumer-api/queries",slug:"/graphql-api/consumer-api/queries/normalized-collection",permalink:"/graphql-api/consumer-api/queries/normalized-collection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-collection",title:"normalizedCollection"},sidebar:"graphqlSidebar",previous:{title:"nextVideoForPlayback",permalink:"/graphql-api/consumer-api/queries/next-video-for-playback"},next:{title:"recommendedShows",permalink:"/graphql-api/consumer-api/queries/recommended-shows"}},i={},t=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),m=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),h=({dataOpen:e,dataClose:l,children:n,startOpen:o=!1})=>{const[r,c]=(0,s.useState)(o);return(0,a.jsxs)("details",{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:l}),r&&n]})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>normalizedCollection.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectioncountrycountrycode--",level:4},{value:'<code>normalizedCollection.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionidstring---",level:4},{value:'<code>normalizedCollection.<b>itemsFilters</b></code><Bullet></Bullet><code>CollectionItemsFilters</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionitemsfilterscollectionitemsfilters--",level:4},{value:'<code>normalizedCollection.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionstationiduuid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedCollection</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollection--",level:4}];function x(e){const l={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.p,{children:"Gets a collection with all items station-normalized."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-graphql",children:"normalizedCollection(\n  country: CountryCode\n  id: String!\n  itemsFilters: CollectionItemsFilters\n  stationId: UUID\n): NormalizedCollection!\n"})}),"\n",(0,a.jsx)(l.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(l.h4,{id:"normalizedcollectioncountrycountrycode--",children:[(0,a.jsx)(l.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedCollection.",(0,a.jsx)("b",{children:"country"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(l.a,{href:"/graphql-api/references/scalars/country-code",children:(0,a.jsx)(l.code,{children:"CountryCode"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(l.h4,{id:"normalizedcollectionidstring---",children:[(0,a.jsx)(l.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedCollection.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(l.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(l.code,{children:"String!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(l.h4,{id:"normalizedcollectionitemsfilterscollectionitemsfilters--",children:[(0,a.jsx)(l.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedCollection.",(0,a.jsx)("b",{children:"itemsFilters"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(l.a,{href:"/graphql-api/references/inputs/collection-items-filters",children:(0,a.jsx)(l.code,{children:"CollectionItemsFilters"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"input"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(l.h4,{id:"normalizedcollectionstationiduuid--",children:[(0,a.jsx)(l.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedCollection.",(0,a.jsx)("b",{children:"stationId"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(l.a,{href:"/graphql-api/references/scalars/uuid",children:(0,a.jsx)(l.code,{children:"UUID"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(l.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(l.h4,{id:"normalizedcollection--",children:[(0,a.jsx)(l.a,{href:"/graphql-api/references/objects/normalized-collection",children:(0,a.jsx)(l.code,{children:"NormalizedCollection"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(l.p,{children:"Station-normalized collection of items to be displayed in various ways (carousels, grids, etc.)."})]})}function p(e={}){const{wrapper:l}={...(0,o.R)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},43023:(e,l,n)=>{n.d(l,{R:()=>r,x:()=>c});var a=n(63696);const o={},s=a.createContext(o);function r(e){const l=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:l},e.children)}}}]);