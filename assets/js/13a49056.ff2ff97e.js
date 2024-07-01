"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4506],{66184:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>h,assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=a(62540),r=a(43023),d=a(63696);const o={id:"normalized-shows",title:"normalizedShows"},l=void 0,i={id:"graphql-api/shared-api/queries/normalized-shows",title:"normalizedShows",description:"Gets a filtered list of normalized shows for a given station and country.",source:"@site/docs/graphql-api/shared-api/queries/normalized-shows.mdx",sourceDirName:"graphql-api/shared-api/queries",slug:"/graphql-api/shared-api/queries/normalized-shows",permalink:"/graphql-api/shared-api/queries/normalized-shows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-shows",title:"normalizedShows"},sidebar:"schemaSidebar",previous:{title:"normalizedShow",permalink:"/graphql-api/shared-api/queries/normalized-show"},next:{title:"normalizedVideo",permalink:"/graphql-api/shared-api/queries/normalized-video"}},t={},c=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:s,children:a,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[i,t]=(0,d.useState)(o);return(0,n.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>normalizedShows.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowscountrycountrycode--",level:4},{value:'<code>normalizedShows.<b>filters</b></code><Bullet></Bullet><code>NormalizedShowsFilters</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowsfiltersnormalizedshowsfilters--",level:4},{value:'<code>normalizedShows.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshowsstationiduuid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedshow--",level:4}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Gets a filtered list of normalized shows for a given station and country."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"normalizedShows(\n  country: CountryCode\n  filters: NormalizedShowsFilters\n  stationId: UUID\n): [NormalizedShow!]!\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"normalizedshowscountrycountrycode--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShows.",(0,n.jsx)("b",{children:"country"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"../../../graphql-api/references/scalars/country-code",children:(0,n.jsx)(s.code,{children:"CountryCode"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"normalizedshowsfiltersnormalizedshowsfilters--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShows.",(0,n.jsx)("b",{children:"filters"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"../../../graphql-api/references/inputs/normalized-shows-filters",children:(0,n.jsx)(s.code,{children:"NormalizedShowsFilters"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"normalizedshowsstationiduuid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedShows.",(0,n.jsx)("b",{children:"stationId"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"../../../graphql-api/references/scalars/uuid",children:(0,n.jsx)(s.code,{children:"UUID"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"normalizedshow--",children:[(0,n.jsx)(s.a,{href:"../../../graphql-api/references/objects/normalized-show",children:(0,n.jsx)(s.code,{children:"NormalizedShow"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Station-normalized data for a show."}),"\n",(0,n.jsx)(s.p,{children:"The Local Streaming data model has three types repsenting a show:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"PbsShow"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Show"}),": Global show metadata overriding ",(0,n.jsx)(s.code,{children:"PbsShow"})," metadata for all stations, and"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"StationShow"}),": Station show metadata overriding ",(0,n.jsx)(s.code,{children:"Show"})," and ",(0,n.jsx)(s.code,{children:"PbsShow"})," metadata for individual stations."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"NormalizedShow"})," is a combination of all three types for a specific station and country."]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>l});var n=a(63696);const r={},d=n.createContext(r);function o(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);