"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8357],{60511:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>p,Details:()=>h,SpecifiedBy:()=>o,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var s=t(62540),a=t(43023),r=t(63696);const i={id:"update-like-input",title:"UpdateLikeInput"},d=void 0,l={id:"graphql-api/references/inputs/update-like-input",title:"UpdateLikeInput",description:"No description",source:"@site/docs/graphql-api/references/inputs/update-like-input.mdx",sourceDirName:"graphql-api/references/inputs",slug:"/graphql-api/references/inputs/update-like-input",permalink:"/graphql-api/references/inputs/update-like-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-like-input",title:"UpdateLikeInput"},sidebar:"schemaSidebar",previous:{title:"UpdateHeroInput",permalink:"/graphql-api/references/inputs/update-hero-input"},next:{title:"UpdateLivestreamInput",permalink:"/graphql-api/references/inputs/update-livestream-input"}},c={},p=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const n={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[l,c]=(0,r.useState)(i);return(0,s.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>UpdateLikeInput.<b>showId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatelikeinputshowidstring--",level:4},{value:'<code>UpdateLikeInput.<b>type</b></code><Bullet></Bullet><code>LikeType</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatelikeinputtypeliketype--",level:4},{value:'<code>UpdateLikeInput.<b>viewerId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatelikeinputvieweridstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input UpdateLikeInput {\n  showId: String\n  type: LikeType\n  viewerId: String\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"updatelikeinputshowidstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateLikeInput.",(0,s.jsx)("b",{children:"showId"})]})}),(0,s.jsx)(p,{}),(0,s.jsx)(n.a,{href:"../../../graphql-api/references/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"updatelikeinputtypeliketype--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateLikeInput.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(p,{}),(0,s.jsx)(n.a,{href:"../../../graphql-api/references/enums/like-type",children:(0,s.jsx)(n.code,{children:"LikeType"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"updatelikeinputvieweridstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateLikeInput.",(0,s.jsx)("b",{children:"viewerId"})]})}),(0,s.jsx)(p,{}),(0,s.jsx)(n.a,{href:"../../../graphql-api/references/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"../../../graphql-api/consumer-api/mutations/update-like",children:(0,s.jsx)(n.code,{children:"updateLike"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(63696);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);