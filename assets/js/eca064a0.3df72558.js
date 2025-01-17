"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8009],{21717:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>g,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>n,metadata:()=>i,toc:()=>b});const i=JSON.parse('{"id":"graphql-api/references/objects/normalized-video-watch-position","title":"NormalizedVideoWatchPosition","description":"Watch position information for a specific video and viewer based on viewer watch history.","source":"@site/docs/graphql-api/references/objects/normalized-video-watch-position.mdx","sourceDirName":"graphql-api/references/objects","slug":"/graphql-api/references/objects/normalized-video-watch-position","permalink":"/graphql-api/references/objects/normalized-video-watch-position","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"normalized-video-watch-position","title":"NormalizedVideoWatchPosition"},"sidebar":"graphqlSidebar","previous":{"title":"NormalizedVideoTrickPlayFile","permalink":"/graphql-api/references/objects/normalized-video-trick-play-file"},"next":{"title":"NormalizedVideo","permalink":"/graphql-api/references/objects/normalized-video"}}');var s=d(62540),o=d(43023),t=d(63696);const n={id:"normalized-video-watch-position",title:"NormalizedVideoWatchPosition"},r=void 0,c={},l=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),m=({dataOpen:e,dataClose:a,children:d,startOpen:i=!1})=>{const[o,n]=(0,t.useState)(i);return(0,s.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),n((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&d]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>NormalizedVideoWatchPosition.<b>completed</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositioncompletedboolean--",level:4},{value:'<code>NormalizedVideoWatchPosition.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositioncreatedatdatetime---",level:4},{value:'<code>NormalizedVideoWatchPosition.<b>eventId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositioneventidstring---",level:4},{value:'<code>NormalizedVideoWatchPosition.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositionupdatedatdatetime---",level:4},{value:'<code>NormalizedVideoWatchPosition.<b>watchTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideowatchpositionwatchtimeint--",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Watch position information for a specific video and viewer based on viewer watch history."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type NormalizedVideoWatchPosition {\n  completed: Boolean\n  createdAt: DateTime!\n  eventId: String!\n  updatedAt: DateTime!\n  watchTime: Int\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedvideowatchpositioncompletedboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,s.jsx)("b",{children:"completed"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.p,{children:"Whether the video is considered to be fully watched."}),"\n",(0,s.jsxs)(a.p,{children:["This will be true if the ",(0,s.jsx)(a.code,{children:"watchTime"})," is at least 97% of ",(0,s.jsx)(a.code,{children:"NormalizedVideo.duration"}),"."]}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedvideowatchpositioncreatedatdatetime---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedvideowatchpositioneventidstring---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,s.jsx)("b",{children:"eventId"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedvideowatchpositionupdatedatdatetime---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(a.h4,{id:"normalizedvideowatchpositionwatchtimeint--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoWatchPosition.",(0,s.jsx)("b",{children:"watchTime"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/int",children:(0,s.jsx)(a.code,{children:"Int"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.p,{children:"Number of seconds from the start of the video the viewer has watched to."}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/graphql-api/references/objects/normalized-video",children:(0,s.jsx)(a.code,{children:"NormalizedVideo"})}),"  ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},43023:(e,a,d)=>{d.d(a,{R:()=>t,x:()=>n});var i=d(63696);const s={},o=i.createContext(s);function t(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);