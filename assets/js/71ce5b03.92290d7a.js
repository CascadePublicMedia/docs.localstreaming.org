"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6249],{47928:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>t,default:()=>b,frontMatter:()=>r,metadata:()=>d,toc:()=>p});const d=JSON.parse('{"id":"graphql-api/shared-api/queries/schedule","title":"schedule","description":"Get schedule information and items.","source":"@site/docs/graphql-api/shared-api/queries/schedule.mdx","sourceDirName":"graphql-api/shared-api/queries","slug":"/graphql-api/shared-api/queries/schedule","permalink":"/graphql-api/shared-api/queries/schedule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"schedule","title":"schedule"},"sidebar":"graphqlSidebar","previous":{"title":"normalizedVideos","permalink":"/graphql-api/shared-api/queries/normalized-videos"}}');var n=a(62540),c=a(43023),l=a(63696);const r={id:"schedule",title:"schedule"},t=void 0,i={},o=()=>{const e={span:"span",...(0,c.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,c.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,c.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:a,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,c.R)()},[t,i]=(0,l.useState)(d);return(0,n.jsxs)(r.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:t?e:s}),t&&a]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>schedule.<b>date</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"scheduledatedate---",level:4},{value:'<code>schedule.<b>id</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"scheduleiduuid---",level:4},{value:'<code>schedule.<b>timezone</b></code><Bullet></Bullet><code>TimeZone!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"scheduletimezonetimezone---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Schedule</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"schedule--",level:4}];function x(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Get schedule information and items."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"schedule(\n  date: Date!\n  id: UUID!\n  timezone: TimeZone!\n): Schedule\n"})}),"\n",(0,n.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(s.h4,{id:"scheduledatedate---",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["schedule.",(0,n.jsx)("b",{children:"date"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/graphql-api/references/scalars/date",children:(0,n.jsx)(s.code,{children:"Date!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(s.p,{children:["Date to get schedule items for (in the provided ",(0,n.jsx)(s.code,{children:"timezone"}),")."]}),"\n",(0,n.jsxs)(s.h4,{id:"scheduleiduuid---",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["schedule.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/graphql-api/references/scalars/uuid",children:(0,n.jsx)(s.code,{children:"UUID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(s.h4,{id:"scheduletimezonetimezone---",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["schedule.",(0,n.jsx)("b",{children:"timezone"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/graphql-api/references/scalars/time-zone",children:(0,n.jsx)(s.code,{children:"TimeZone!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(s.p,{children:["Timezone of the requested ",(0,n.jsx)(s.code,{children:"date"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(s.h4,{id:"schedule--",children:[(0,n.jsx)(s.a,{href:"/graphql-api/references/objects/schedule",children:(0,n.jsx)(s.code,{children:"Schedule"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]})]})}function b(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>r});var d=a(63696);const n={},c=d.createContext(n);function l(e){const s=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(c.Provider,{value:s},e.children)}}}]);