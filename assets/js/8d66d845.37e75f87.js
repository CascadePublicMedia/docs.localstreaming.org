"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6374],{33380:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>p,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"graphql-api/references/inputs/upsert-watch-history-input","title":"UpsertWatchHistoryInput","description":"Data to add or updated a watch history entry based on a video and device ID.","source":"@site/docs/graphql-api/references/inputs/upsert-watch-history-input.mdx","sourceDirName":"graphql-api/references/inputs","slug":"/graphql-api/references/inputs/upsert-watch-history-input","permalink":"/graphql-api/references/inputs/upsert-watch-history-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"upsert-watch-history-input","title":"UpsertWatchHistoryInput"},"sidebar":"graphqlSidebar","previous":{"title":"UpsertMyListInput","permalink":"/graphql-api/references/inputs/upsert-my-list-input"},"next":{"title":"ViewerLikesFilters","permalink":"/graphql-api/references/inputs/viewer-likes-filters"}}');var r=t(62540),n=t(43023),d=t(63696);const i={id:"upsert-watch-history-input",title:"UpsertWatchHistoryInput"},c=void 0,l={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,n.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:t,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,n.R)()},[c,l]=(0,d.useState)(a);return(0,r.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&t]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>UpsertWatchHistoryInput.<b>deviceId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"upsertwatchhistoryinputdeviceidstring---",level:4},{value:'<code>UpsertWatchHistoryInput.<b>eventId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"upsertwatchhistoryinputeventidstring--",level:4},{value:'<code>UpsertWatchHistoryInput.<b>stationId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"upsertwatchhistoryinputstationiduuid---",level:4},{value:'<code>UpsertWatchHistoryInput.<b>videoId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"upsertwatchhistoryinputvideoidstring---",level:4},{value:'<code>UpsertWatchHistoryInput.<b>watchTime</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"upsertwatchhistoryinputwatchtimeint---",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Data to add or updated a watch history entry based on a video and device ID."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"input UpsertWatchHistoryInput {\n  deviceId: String!\n  eventId: String\n  stationId: UUID!\n  videoId: String!\n  watchTime: Int!\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(s.h4,{id:"upsertwatchhistoryinputdeviceidstring---",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UpsertWatchHistoryInput.",(0,r.jsx)("b",{children:"deviceId"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,r.jsx)(s.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(s.h4,{id:"upsertwatchhistoryinputeventidstring--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UpsertWatchHistoryInput.",(0,r.jsx)("b",{children:"eventId"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,r.jsx)(s.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.p,{children:"Existing watch history event ID."}),"\n",(0,r.jsx)(s.p,{children:"If provided, an update will be performed. If not provided, a create will be peformed."}),"\n",(0,r.jsxs)(s.h4,{id:"upsertwatchhistoryinputstationiduuid---",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UpsertWatchHistoryInput.",(0,r.jsx)("b",{children:"stationId"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/uuid",children:(0,r.jsx)(s.code,{children:"UUID!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(s.h4,{id:"upsertwatchhistoryinputvideoidstring---",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UpsertWatchHistoryInput.",(0,r.jsx)("b",{children:"videoId"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,r.jsx)(s.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(s.h4,{id:"upsertwatchhistoryinputwatchtimeint---",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UpsertWatchHistoryInput.",(0,r.jsx)("b",{children:"watchTime"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(s.a,{href:"/graphql-api/references/scalars/int",children:(0,r.jsx)(s.code,{children:"Int!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(s.p,{children:"Number of seconds from the start of the video the viewer has watched to."}),"\n",(0,r.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/graphql-api/consumer-api/mutations/upsert-watch-history",children:(0,r.jsx)(s.code,{children:"upsertWatchHistory"})}),"  ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},43023:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>i});var a=t(63696);const r={},n=a.createContext(r);function d(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);