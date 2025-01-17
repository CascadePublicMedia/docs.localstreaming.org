"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1474],{19419:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>g,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>n,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"graphql-api/references/objects/pbs-video-availability","title":"PbsVideoAvailability","description":"Availability window information for a PBS video.","source":"@site/docs/graphql-api/references/objects/pbs-video-availability.mdx","sourceDirName":"graphql-api/references/objects","slug":"/graphql-api/references/objects/pbs-video-availability","permalink":"/graphql-api/references/objects/pbs-video-availability","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"pbs-video-availability","title":"PbsVideoAvailability"},"sidebar":"graphqlSidebar","previous":{"title":"PbsShow","permalink":"/graphql-api/references/objects/pbs-show"},"next":{"title":"PbsVideo","permalink":"/graphql-api/references/objects/pbs-video"}}');var d=s(62540),l=s(43023),t=s(63696);const r={id:"pbs-video-availability",title:"PbsVideoAvailability"},n=void 0,c={},o=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),b=e=>(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:a,children:s,startOpen:i=!1})=>{const[l,r]=(0,t.useState)(i);return(0,d.jsxs)("details",{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PbsVideoAvailability.<b>countries</b></code><Bullet></Bullet><code>[String]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideoavailabilitycountriesstring---",level:4},{value:'<code>PbsVideoAvailability.<b>end</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideoavailabilityenddatetime--",level:4},{value:'<code>PbsVideoAvailability.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideoavailabilityidstring---",level:4},{value:'<code>PbsVideoAvailability.<b>pbsUpdatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideoavailabilitypbsupdatedatdatetime---",level:4},{value:'<code>PbsVideoAvailability.<b>pbsVideo</b></code><Bullet></Bullet><code>PbsVideo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideoavailabilitypbsvideopbsvideo---",level:4},{value:'<code>PbsVideoAvailability.<b>pbsVideoId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideoavailabilitypbsvideoidstring---",level:4},{value:'<code>PbsVideoAvailability.<b>start</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideoavailabilitystartdatetime--",level:4},{value:'<code>PbsVideoAvailability.<b>type</b></code><Bullet></Bullet><code>AvailabilityType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsvideoavailabilitytypeavailabilitytype---",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function x(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Availability window information for a PBS video."}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type PbsVideoAvailability {\n  countries: [String]!\n  end: DateTime\n  id: String!\n  pbsUpdatedAt: DateTime!\n  pbsVideo: PbsVideo!\n  pbsVideoId: String!\n  start: DateTime\n  type: AvailabilityType!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"pbsvideoavailabilitycountriesstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsVideoAvailability.",(0,d.jsx)("b",{children:"countries"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"[String]!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(a.p,{children:"ISO 3166-1 alpha-2 country codse of country this availability applies to."}),"\n",(0,d.jsxs)(a.h4,{id:"pbsvideoavailabilityenddatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsVideoAvailability.",(0,d.jsx)("b",{children:"end"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"pbsvideoavailabilityidstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsVideoAvailability.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"pbsvideoavailabilitypbsupdatedatdatetime---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsVideoAvailability.",(0,d.jsx)("b",{children:"pbsUpdatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"pbsvideoavailabilitypbsvideopbsvideo---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsVideoAvailability.",(0,d.jsx)("b",{children:"pbsVideo"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/objects/pbs-video",children:(0,d.jsx)(a.code,{children:"PbsVideo!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"pbsvideoavailabilitypbsvideoidstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsVideoAvailability.",(0,d.jsx)("b",{children:"pbsVideoId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"pbsvideoavailabilitystartdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsVideoAvailability.",(0,d.jsx)("b",{children:"start"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"pbsvideoavailabilitytypeavailabilitytype---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsVideoAvailability.",(0,d.jsx)("b",{children:"type"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/enums/availability-type",children:(0,d.jsx)(a.code,{children:"AvailabilityType!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"enum"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/graphql-api/admin-api/mutations/create-pbs-video-availability",children:(0,d.jsx)(a.code,{children:"createPbsVideoAvailability"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/admin-api/mutations/delete-pbs-video-availability",children:(0,d.jsx)(a.code,{children:"deletePbsVideoAvailability"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/admin-api/queries/pbs-video-availabilities",children:(0,d.jsx)(a.code,{children:"pbsVideoAvailabilities"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"query"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/admin-api/queries/pbs-video-availability",children:(0,d.jsx)(a.code,{children:"pbsVideoAvailability"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"query"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/graphql-api/admin-api/mutations/update-pbs-video-availability",children:(0,d.jsx)(a.code,{children:"updatePbsVideoAvailability"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/graphql-api/references/objects/pbs-video",children:(0,d.jsx)(a.code,{children:"PbsVideo"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},43023:(e,a,s)=>{s.d(a,{R:()=>t,x:()=>r});var i=s(63696);const d={},l=i.createContext(d);function t(e){const a=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(l.Provider,{value:a},e.children)}}}]);