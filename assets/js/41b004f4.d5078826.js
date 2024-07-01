"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3390],{90551:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>g,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(62540),r=a(43023),s=a(63696);const i={id:"normalized-video",title:"normalizedVideo"},o=void 0,l={id:"graphql-api/shared-api/queries/normalized-video",title:"normalizedVideo",description:"Gets a normalized video by ID for a given station and country.",source:"@site/docs/graphql-api/shared-api/queries/normalized-video.mdx",sourceDirName:"graphql-api/shared-api/queries",slug:"/graphql-api/shared-api/queries/normalized-video",permalink:"/graphql-api/shared-api/queries/normalized-video",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-video",title:"normalizedVideo"},sidebar:"schemaSidebar",previous:{title:"normalizedShows",permalink:"/graphql-api/shared-api/queries/normalized-shows"},next:{title:"normalizedVideos",permalink:"/graphql-api/shared-api/queries/normalized-videos"}},t={},c=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const d={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const d={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:d,children:a,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[l,t]=(0,s.useState)(i);return(0,n.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:l?e:d}),l&&a]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>normalizedVideo.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideocountrycountrycode--",level:4},{value:'<code>normalizedVideo.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideoidstring---",level:4},{value:'<code>normalizedVideo.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideostationiduuid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>NormalizedVideo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideo--",level:4}];function x(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.p,{children:"Gets a normalized video by ID for a given station and country."}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-graphql",children:"normalizedVideo(\n  country: CountryCode\n  id: String!\n  stationId: UUID\n): NormalizedVideo\n"})}),"\n",(0,n.jsx)(d.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(d.h4,{id:"normalizedvideocountrycountrycode--",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedVideo.",(0,n.jsx)("b",{children:"country"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(d.a,{href:"../../../graphql-api/references/scalars/country-code",children:(0,n.jsx)(d.code,{children:"CountryCode"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(d.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(d.h4,{id:"normalizedvideoidstring---",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedVideo.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(d.code,{children:"String!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(d.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(d.h4,{id:"normalizedvideostationiduuid--",children:[(0,n.jsx)(d.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["normalizedVideo.",(0,n.jsx)("b",{children:"stationId"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(d.a,{href:"../../../graphql-api/references/scalars/uuid",children:(0,n.jsx)(d.code,{children:"UUID"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(d.blockquote,{children:"\n"}),"\n",(0,n.jsx)(d.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(d.h4,{id:"normalizedvideo--",children:[(0,n.jsx)(d.a,{href:"../../../graphql-api/references/objects/normalized-video",children:(0,n.jsx)(d.code,{children:"NormalizedVideo"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(d.blockquote,{children:["\n",(0,n.jsx)(d.p,{children:"Station-normalized data for a video."}),"\n",(0,n.jsx)(d.p,{children:"The Local Streaming data model has three types repsenting a video:"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"PbsVideo"}),": Base type, read-only and synced from PBS Media Manager,"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"Video"}),": Global video metadata overriding ",(0,n.jsx)(d.code,{children:"PbsVideo"})," metadata for all stations, and"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"StationVideo"}),": Station video metadata overriding ",(0,n.jsx)(d.code,{children:"Video"})," and ",(0,n.jsx)(d.code,{children:"PbsVideo"})," metadata for individual stations."]}),"\n"]}),"\n",(0,n.jsxs)(d.p,{children:["The ",(0,n.jsx)(d.code,{children:"NormalizedVideo"})," is a combination of all three types for a specific station and country."]}),"\n"]})]})}function p(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},43023:(e,d,a)=>{a.d(d,{R:()=>i,x:()=>o});var n=a(63696);const r={},s=n.createContext(r);function i(e){const d=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:d},e.children)}}}]);