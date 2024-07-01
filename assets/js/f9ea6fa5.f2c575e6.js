"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[656],{27839:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>s,toc:()=>x});var d=a(62540),i=a(43023),o=a(63696);const t={id:"continue-watching-video",title:"ContinueWatchingVideo"},c=void 0,s={id:"graphql-api/references/objects/continue-watching-video",title:"ContinueWatchingVideo",description:'Watch history information for a specific video for "continue watching" features.',source:"@site/docs/graphql-api/references/objects/continue-watching-video.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/continue-watching-video",permalink:"/graphql-api/references/objects/continue-watching-video",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"continue-watching-video",title:"ContinueWatchingVideo"},sidebar:"schemaSidebar",previous:{title:"ContentLock",permalink:"/graphql-api/references/objects/content-lock"},next:{title:"CountryFlag",permalink:"/graphql-api/references/objects/country-flag"}},r={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,i.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,i.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const c={details:"details",summary:"summary",...(0,i.R)()},[s,r]=(0,o.useState)(t);return(0,d.jsxs)(c.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ContinueWatchingVideo.<b>normalizedVideo</b></code><Bullet></Bullet><code>NormalizedVideo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"continuewatchingvideonormalizedvideonormalizedvideo--",level:4},{value:'<code>ContinueWatchingVideo.normalizedVideo.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"continuewatchingvideonormalizedvideocountrycountrycode--",level:5},{value:'<code>ContinueWatchingVideo.normalizedVideo.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"continuewatchingvideonormalizedvideostationiduuid--",level:5},{value:'<code>ContinueWatchingVideo.<b>videoId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"continuewatchingvideovideoidstring---",level:4},{value:'<code>ContinueWatchingVideo.<b>watchTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"continuewatchingvideowatchtimeint--",level:4},{value:"Returned By",id:"returned-by",level:3}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:'Watch history information for a specific video for "continue watching" features.'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"type ContinueWatchingVideo {\n  normalizedVideo(\n    country: CountryCode\n    stationId: UUID\n  ): NormalizedVideo\n  videoId: String!\n  watchTime: Int\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.h4,{id:"continuewatchingvideonormalizedvideonormalizedvideo--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ContinueWatchingVideo.",(0,d.jsx)("b",{children:"normalizedVideo"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"../../../graphql-api/references/objects/normalized-video",children:(0,d.jsx)(n.code,{children:"NormalizedVideo"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.h5,{id:"continuewatchingvideonormalizedvideocountrycountrycode--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ContinueWatchingVideo.normalizedVideo.",(0,d.jsx)("b",{children:"country"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"../../../graphql-api/references/scalars/country-code",children:(0,d.jsx)(n.code,{children:"CountryCode"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n"]}),"\n",(0,d.jsxs)(n.h5,{id:"continuewatchingvideonormalizedvideostationiduuid--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ContinueWatchingVideo.normalizedVideo.",(0,d.jsx)("b",{children:"stationId"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"../../../graphql-api/references/scalars/uuid",children:(0,d.jsx)(n.code,{children:"UUID"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(n.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(n.h4,{id:"continuewatchingvideovideoidstring---",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ContinueWatchingVideo.",(0,d.jsx)("b",{children:"videoId"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"../../../graphql-api/references/scalars/string",children:(0,d.jsx)(n.code,{children:"String!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(n.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(n.h4,{id:"continuewatchingvideowatchtimeint--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ContinueWatchingVideo.",(0,d.jsx)("b",{children:"watchTime"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"../../../graphql-api/references/scalars/int",children:(0,d.jsx)(n.code,{children:"Int"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Number of seconds from the start of the video the viewer has watched to."}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"../../../graphql-api/consumer-api/queries/viewer-continue-watching-videos",children:(0,d.jsx)(n.code,{children:"viewerContinueWatchingVideos"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"query"})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},43023:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var d=a(63696);const i={},o=d.createContext(i);function t(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);