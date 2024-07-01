"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8735],{37005:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=a(62540),n=a(43023),r=a(63696);const i={id:"station-livestreams",title:"stationLivestreams"},o=void 0,l={id:"graphql-api/consumer-api/queries/station-livestreams",title:"stationLivestreams",description:"Gets all livestreams for a station (order by Livestream.weight).",source:"@site/docs/graphql-api/consumer-api/queries/station-livestreams.mdx",sourceDirName:"graphql-api/consumer-api/queries",slug:"/graphql-api/consumer-api/queries/station-livestreams",permalink:"/graphql-api/consumer-api/queries/station-livestreams",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"station-livestreams",title:"stationLivestreams"},sidebar:"schemaSidebar",previous:{title:"searchVideos",permalink:"/graphql-api/consumer-api/queries/search-videos"},next:{title:"stationPresentingSponsor",permalink:"/graphql-api/consumer-api/queries/station-presenting-sponsor"}},d={},c=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:s,children:a,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,n.R)()},[l,d]=(0,r.useState)(i);return(0,t.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&a]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>stationLivestreams.<b>stationId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationlivestreamsstationiduuid---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Livestream</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"livestream--",level:4}];function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Gets all livestreams for a station (order by ",(0,t.jsx)(s.code,{children:"Livestream.weight"}),")."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"stationLivestreams(\n  stationId: UUID!\n): [Livestream!]!\n"})}),"\n",(0,t.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(s.h4,{id:"stationlivestreamsstationiduuid---",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["stationLivestreams.",(0,t.jsx)("b",{children:"stationId"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"../../../graphql-api/references/scalars/uuid",children:(0,t.jsx)(s.code,{children:"UUID!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(s.h4,{id:"livestream--",children:[(0,t.jsx)(s.a,{href:"../../../graphql-api/references/objects/livestream",children:(0,t.jsx)(s.code,{children:"Livestream"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Livestream metadata and technical details."}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>o});var t=a(63696);const n={},r=t.createContext(n);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);