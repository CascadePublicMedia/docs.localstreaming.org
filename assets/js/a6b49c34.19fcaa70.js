"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[637],{35818:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>g,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>t,default:()=>j,frontMatter:()=>o,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"graphql-api/consumer-api/queries/search-shows","title":"searchShows","description":"Searches shows for a given search term.","source":"@site/docs/graphql-api/consumer-api/queries/search-shows.mdx","sourceDirName":"graphql-api/consumer-api/queries","slug":"/graphql-api/consumer-api/queries/search-shows","permalink":"/graphql-api/consumer-api/queries/search-shows","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"search-shows","title":"searchShows"},"sidebar":"graphqlSidebar","previous":{"title":"schedule","permalink":"/graphql-api/consumer-api/queries/schedule"},"next":{"title":"searchVideos","permalink":"/graphql-api/consumer-api/queries/search-videos"}}');var n=a(62540),d=a(43023),c=a(63696);const o={id:"search-shows",title:"searchShows"},t=void 0,l={},i=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:s,children:a,startOpen:r=!1})=>{const[d,o]=(0,c.useState)(r);return(0,n.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&a]})},x=[{value:"Arguments",id:"arguments",level:3},{value:'<code>searchShows.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchshowscountrycountrycode--",level:4},{value:'<code>searchShows.<b>filters</b></code><Bullet></Bullet><code>FilterShowInput</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchshowsfiltersfiltershowinput--",level:4},{value:'<code>searchShows.<b>search</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchshowssearchstring---",level:4},{value:'<code>searchShows.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchshowsstationiduuid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshow--",level:4}];function p(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Searches shows for a given search term."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"searchShows(\n  country: CountryCode\n  filters: FilterShowInput\n  search: String!\n  stationId: UUID\n): [NormalizedShow!]!\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"searchshowscountrycountrycode--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["searchShows.",(0,n.jsx)("b",{children:"country"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/graphql-api/references/scalars/country-code",children:(0,n.jsx)(s.code,{children:"CountryCode"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(s.p,{children:"Country to use for results normalization."}),"\n",(0,n.jsxs)(s.h4,{id:"searchshowsfiltersfiltershowinput--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["searchShows.",(0,n.jsx)("b",{children:"filters"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/graphql-api/references/inputs/filter-show-input",children:(0,n.jsx)(s.code,{children:"FilterShowInput"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"input"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(s.h4,{id:"searchshowssearchstring---",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["searchShows.",(0,n.jsx)("b",{children:"search"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(s.p,{children:"Search term."}),"\n",(0,n.jsxs)(s.h4,{id:"searchshowsstationiduuid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["searchShows.",(0,n.jsx)("b",{children:"stationId"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/graphql-api/references/scalars/uuid",children:(0,n.jsx)(s.code,{children:"UUID"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(s.p,{children:"ID of station to use for results normalization."}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"normalizedshow--",children:[(0,n.jsx)(s.a,{href:"/graphql-api/references/objects/normalized-show",children:(0,n.jsx)(s.code,{children:"NormalizedShow"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(s.p,{children:"Station-normalized data for a show."}),"\n",(0,n.jsx)(s.p,{children:"The Local Streaming data model has three types repsenting a show:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"PbsShow"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Show"}),": Global show metadata overriding ",(0,n.jsx)(s.code,{children:"PbsShow"})," metadata for all stations, and"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"StationShow"}),": Station show metadata overriding ",(0,n.jsx)(s.code,{children:"Show"})," and ",(0,n.jsx)(s.code,{children:"PbsShow"})," metadata for individual stations."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"NormalizedShow"})," is a combination of all three types for a specific station and country."]})]})}function j(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>o});var r=a(63696);const n={},d=r.createContext(n);function c(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);