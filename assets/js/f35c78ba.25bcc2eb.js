"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7016],{73388:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=a(62540),d=a(43023),s=a(63696);const i={id:"update-station-video-input",title:"UpdateStationVideoInput"},o=void 0,r={id:"graphql-api/references/inputs/update-station-video-input",title:"UpdateStationVideoInput",description:"No description",source:"@site/docs/graphql-api/references/inputs/update-station-video-input.mdx",sourceDirName:"graphql-api/references/inputs",slug:"/graphql-api/references/inputs/update-station-video-input",permalink:"/graphql-api/references/inputs/update-station-video-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-station-video-input",title:"UpdateStationVideoInput"},sidebar:"schemaSidebar",previous:{title:"UpdateStationShowInput",permalink:"/graphql-api/references/inputs/update-station-show-input"},next:{title:"UpdateUserInput",permalink:"/graphql-api/references/inputs/update-user-input"}},c={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const t={a:"a",...(0,d.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:a,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,d.R)()},[r,c]=(0,s.useState)(i);return(0,n.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>UpdateStationVideoInput.<b>contentAdvisory</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputcontentadvisorystring--",level:4},{value:'<code>UpdateStationVideoInput.<b>contentDescriptors</b></code><Bullet></Bullet><code>[ContentDescriptor]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputcontentdescriptorscontentdescriptor---",level:4},{value:'<code>UpdateStationVideoInput.<b>contentRating</b></code><Bullet></Bullet><code>ContentRating</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputcontentratingcontentrating--",level:4},{value:'<code>UpdateStationVideoInput.<b>exclude</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputexcludeboolean--",level:4},{value:'<code>UpdateStationVideoInput.<b>images</b></code><Bullet></Bullet><code>[JSON]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputimagesjson---",level:4},{value:'<code>UpdateStationVideoInput.<b>longDescription</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputlongdescriptionstring--",level:4},{value:'<code>UpdateStationVideoInput.<b>shortDescription</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputshortdescriptionstring--",level:4},{value:'<code>UpdateStationVideoInput.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputstationiduuid--",level:4},{value:'<code>UpdateStationVideoInput.<b>title</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputtitlestring--",level:4},{value:'<code>UpdateStationVideoInput.<b>tvScheduleIds</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputtvscheduleidsstring---",level:4},{value:'<code>UpdateStationVideoInput.<b>upNextDuration</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputupnextdurationint--",level:4},{value:'<code>UpdateStationVideoInput.<b>upNextStart</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputupnextstartint--",level:4},{value:'<code>UpdateStationVideoInput.<b>videoId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationvideoinputvideoidstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input UpdateStationVideoInput {\n  contentAdvisory: String\n  contentDescriptors: [ContentDescriptor]\n  contentRating: ContentRating\n  exclude: Boolean\n  images: [JSON]\n  longDescription: String\n  shortDescription: String\n  stationId: UUID\n  title: String\n  tvScheduleIds: [String]\n  upNextDuration: Int\n  upNextStart: Int\n  videoId: String\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputcontentadvisorystring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"contentAdvisory"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputcontentdescriptorscontentdescriptor---",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"contentDescriptors"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/enums/content-descriptor",children:(0,n.jsx)(t.code,{children:"[ContentDescriptor]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputcontentratingcontentrating--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"contentRating"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/enums/content-rating",children:(0,n.jsx)(t.code,{children:"ContentRating"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputexcludeboolean--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"exclude"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputimagesjson---",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"images"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/json",children:(0,n.jsx)(t.code,{children:"[JSON]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputlongdescriptionstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"longDescription"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputshortdescriptionstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"shortDescription"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputstationiduuid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"stationId"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/uuid",children:(0,n.jsx)(t.code,{children:"UUID"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputtitlestring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"title"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputtvscheduleidsstring---",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"tvScheduleIds"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(t.code,{children:"[String]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputupnextdurationint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"upNextDuration"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputupnextstartint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"upNextStart"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatestationvideoinputvideoidstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateStationVideoInput.",(0,n.jsx)("b",{children:"videoId"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"../../../graphql-api/admin-api/mutations/update-station-video",children:(0,n.jsx)(t.code,{children:"updateStationVideo"})}),"  ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},43023:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(63696);const d={},s=n.createContext(d);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);