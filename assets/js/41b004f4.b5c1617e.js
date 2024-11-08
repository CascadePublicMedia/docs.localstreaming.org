"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3390],{78995:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>g,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"graphql-api/shared-api/queries/normalized-video","title":"normalizedVideo","description":"Gets a normalized video by ID for a given station and country.","source":"@site/docs/graphql-api/shared-api/queries/normalized-video.mdx","sourceDirName":"graphql-api/shared-api/queries","slug":"/graphql-api/shared-api/queries/normalized-video","permalink":"/graphql-api/shared-api/queries/normalized-video","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"normalized-video","title":"normalizedVideo"},"sidebar":"graphqlSidebar","previous":{"title":"normalizedShows","permalink":"/graphql-api/shared-api/queries/normalized-shows"},"next":{"title":"normalizedVideos","permalink":"/graphql-api/shared-api/queries/normalized-videos"}}');var r=d(62540),s=d(43023),i=d(63696);const o={id:"normalized-video",title:"normalizedVideo"},l=void 0,t={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:a,children:d,startOpen:n=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[l,t]=(0,i.useState)(n);return(0,r.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&d]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>normalizedVideo.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideocountrycountrycode--",level:4},{value:'<code>normalizedVideo.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideoidstring---",level:4},{value:'<code>normalizedVideo.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideostationiduuid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedVideo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideo--",level:4}];function p(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Gets a normalized video by ID for a given station and country."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-graphql",children:"normalizedVideo(\n  country: CountryCode\n  id: String!\n  stationId: UUID\n): NormalizedVideo\n"})}),"\n",(0,r.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedvideocountrycountrycode--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedVideo.",(0,r.jsx)("b",{children:"country"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(a.a,{href:"/graphql-api/references/scalars/country-code",children:(0,r.jsx)(a.code,{children:"CountryCode"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedvideoidstring---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedVideo.",(0,r.jsx)("b",{children:"id"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedvideostationiduuid--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedVideo.",(0,r.jsx)("b",{children:"stationId"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(a.a,{href:"/graphql-api/references/scalars/uuid",children:(0,r.jsx)(a.code,{children:"UUID"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedvideo--",children:[(0,r.jsx)(a.a,{href:"/graphql-api/references/objects/normalized-video",children:(0,r.jsx)(a.code,{children:"NormalizedVideo"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.p,{children:"Station-normalized data for a video."}),"\n",(0,r.jsx)(a.p,{children:"The Local Streaming data model has three types repsenting a video:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"PbsVideo"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"Video"}),": Global video metadata overriding ",(0,r.jsx)(a.code,{children:"PbsVideo"})," metadata for all stations, and"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"StationVideo"}),": Station video metadata overriding ",(0,r.jsx)(a.code,{children:"Video"})," and ",(0,r.jsx)(a.code,{children:"PbsVideo"})," metadata for individual stations."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.code,{children:"NormalizedVideo"})," is a combination of all three types for a specific station and country."]})]})}function x(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},43023:(e,a,d)=>{d.d(a,{R:()=>i,x:()=>o});var n=d(63696);const r={},s=n.createContext(r);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);