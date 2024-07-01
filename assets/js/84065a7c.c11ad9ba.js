"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8877],{73359:(e,d,r)=>{r.r(d),r.d(d,{Badge:()=>h,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>g,assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(62540),a=r(43023),s=r(63696);const n={id:"normalized-video-for",title:"NormalizedVideoFor"},i=void 0,l={id:"graphql-api/references/objects/normalized-video-for",title:"NormalizedVideoFor",description:"Information about the sources used to normalize the video data.",source:"@site/docs/graphql-api/references/objects/normalized-video-for.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/normalized-video-for",permalink:"/graphql-api/references/objects/normalized-video-for",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-video-for",title:"NormalizedVideoFor"},sidebar:"schemaSidebar",previous:{title:"NormalizedVideoFile",permalink:"/graphql-api/references/objects/normalized-video-file"},next:{title:"NormalizedVideoImage",permalink:"/graphql-api/references/objects/normalized-video-image"}},t={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const d={a:"a",...(0,a.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const d={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(d.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:d,children:r,startOpen:n=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[l,t]=(0,s.useState)(n);return(0,o.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(i.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:l?e:d}),l&&r]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>NormalizedVideoFor.<b>country</b></code><Bullet></Bullet><code>CountryCode!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideoforcountrycountrycode---",level:4},{value:'<code>NormalizedVideoFor.<b>pbsVideoId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideoforpbsvideoidstring--",level:4},{value:'<code>NormalizedVideoFor.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideoforstationiduuid--",level:4},{value:'<code>NormalizedVideoFor.<b>stationVideoId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideoforstationvideoidstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.p,{children:"Information about the sources used to normalize the video data."}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-graphql",children:"type NormalizedVideoFor {\n  country: CountryCode!\n  pbsVideoId: String\n  stationId: UUID\n  stationVideoId: String\n}\n"})}),"\n",(0,o.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(d.h4,{id:"normalizedvideoforcountrycountrycode---",children:[(0,o.jsx)(d.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFor.",(0,o.jsx)("b",{children:"country"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(d.a,{href:"../../../graphql-api/references/scalars/country-code",children:(0,o.jsx)(d.code,{children:"CountryCode!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,o.jsx)(d.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(d.h4,{id:"normalizedvideoforpbsvideoidstring--",children:[(0,o.jsx)(d.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFor.",(0,o.jsx)("b",{children:"pbsVideoId"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,o.jsx)(d.code,{children:"String"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,o.jsx)(d.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(d.h4,{id:"normalizedvideoforstationiduuid--",children:[(0,o.jsx)(d.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFor.",(0,o.jsx)("b",{children:"stationId"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(d.a,{href:"../../../graphql-api/references/scalars/uuid",children:(0,o.jsx)(d.code,{children:"UUID"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,o.jsx)(d.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(d.h4,{id:"normalizedvideoforstationvideoidstring--",children:[(0,o.jsx)(d.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFor.",(0,o.jsx)("b",{children:"stationVideoId"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(d.a,{href:"../../../graphql-api/references/scalars/string",children:(0,o.jsx)(d.code,{children:"String"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,o.jsx)(d.blockquote,{children:"\n"}),"\n",(0,o.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(d.p,{children:[(0,o.jsx)(d.a,{href:"../../../graphql-api/references/objects/normalized-video",children:(0,o.jsx)(d.code,{children:"NormalizedVideo"})}),"  ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:d}={...(0,a.R)(),...e.components};return d?(0,o.jsx)(d,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},43023:(e,d,r)=>{r.d(d,{R:()=>n,x:()=>i});var o=r(63696);const a={},s=o.createContext(a);function n(e){const d=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(s.Provider,{value:d},e.children)}}}]);