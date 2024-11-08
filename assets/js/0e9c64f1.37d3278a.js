"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5155],{12667:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>u,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"graphql-api/admin-api/mutations/update-livestream","title":"updateLivestream","description":"No description","source":"@site/docs/graphql-api/admin-api/mutations/update-livestream.mdx","sourceDirName":"graphql-api/admin-api/mutations","slug":"/graphql-api/admin-api/mutations/update-livestream","permalink":"/graphql-api/admin-api/mutations/update-livestream","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"update-livestream","title":"updateLivestream"},"sidebar":"graphqlSidebar","previous":{"title":"updateHero","permalink":"/graphql-api/admin-api/mutations/update-hero"},"next":{"title":"updatePbsAccountConfig","permalink":"/graphql-api/admin-api/mutations/update-pbs-account-config"}}');var n=t(62540),d=t(43023),r=t(63696);const i={id:"update-livestream",title:"updateLivestream"},l=void 0,c={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,d.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:t,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,d.R)()},[l,c]=(0,r.useState)(s);return(0,n.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateLivestream.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatelivestreamidstring---",level:4},{value:'<code>updateLivestream.<b>input</b></code><Bullet></Bullet><code>UpdateLivestreamInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatelivestreaminputupdatelivestreaminput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Livestream</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"livestream--",level:4}];function h(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"updateLivestream(\n  id: String!\n  input: UpdateLivestreamInput!\n): Livestream!\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"updatelivestreamidstring---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateLivestream.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(a.h4,{id:"updatelivestreaminputupdatelivestreaminput---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateLivestream.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/graphql-api/references/inputs/update-livestream-input",children:(0,n.jsx)(a.code,{children:"UpdateLivestreamInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"livestream--",children:[(0,n.jsx)(a.a,{href:"/graphql-api/references/objects/livestream",children:(0,n.jsx)(a.code,{children:"Livestream"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.p,{children:"Livestream metadata and technical details."})]})}function x(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},43023:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>i});var s=t(63696);const n={},d=s.createContext(n);function r(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);