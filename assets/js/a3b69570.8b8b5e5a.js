"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5536],{29378:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>n,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var t=r(62540),c=r(43023),a=r(63696);const l={id:"livestream-schedule",title:"LivestreamSchedule"},n=void 0,d={id:"graphql-api/references/objects/livestream-schedule",title:"LivestreamSchedule",description:"Livestream schedule data from PBS TV Schedules Service API.",source:"@site/docs/graphql-api/references/objects/livestream-schedule.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/livestream-schedule",permalink:"/graphql-api/references/objects/livestream-schedule",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"livestream-schedule",title:"LivestreamSchedule"},sidebar:"schemaSidebar",previous:{title:"LivestreamScheduleItem",permalink:"/graphql-api/references/objects/livestream-schedule-item"},next:{title:"LivestreamSource",permalink:"/graphql-api/references/objects/livestream-source"}},i={},o=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:s,children:r,startOpen:l=!1})=>{const n={details:"details",summary:"summary",...(0,c.R)()},[d,i]=(0,a.useState)(l);return(0,t.jsxs)(n.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(n.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&r]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>LivestreamSchedule.<b>current</b></code><Bullet></Bullet><code>LivestreamScheduleItem</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"livestreamschedulecurrentlivestreamscheduleitem--",level:4},{value:'<code>LivestreamSchedule.<b>upcoming</b></code><Bullet></Bullet><code>[LivestreamScheduleItem!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"livestreamscheduleupcominglivestreamscheduleitem---",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Livestream schedule data from PBS TV Schedules Service API."}),"\n",(0,t.jsx)(s.p,{children:"Includes current and upcoming programsm (up to two hours in the future)."}),"\n",(0,t.jsx)(s.p,{children:"Results come directly from the PBS TV Schedule Service API and are cache for a period."}),"\n",(0,t.jsxs)(s.p,{children:["See: ",(0,t.jsx)(s.code,{children:"Livestream.pbsTvssFeedCid"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type LivestreamSchedule {\n  current: LivestreamScheduleItem\n  upcoming: [LivestreamScheduleItem!]\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"livestreamschedulecurrentlivestreamscheduleitem--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["LivestreamSchedule.",(0,t.jsx)("b",{children:"current"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"../../../graphql-api/references/objects/livestream-schedule-item",children:(0,t.jsx)(s.code,{children:"LivestreamScheduleItem"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Metdata for currently playing content"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"livestreamscheduleupcominglivestreamscheduleitem---",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["LivestreamSchedule.",(0,t.jsx)("b",{children:"upcoming"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"../../../graphql-api/references/objects/livestream-schedule-item",children:(0,t.jsx)(s.code,{children:"[LivestreamScheduleItem!]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Metadata for upcoming shows for the next two hours."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../../../graphql-api/references/objects/livestream",children:(0,t.jsx)(s.code,{children:"Livestream"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},43023:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>n});var t=r(63696);const c={},a=t.createContext(c);function l(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);