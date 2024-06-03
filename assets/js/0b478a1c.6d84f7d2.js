"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8167],{6304:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>r,Details:()=>g,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var a=t(62540),l=t(43023),c=t(63696);const d={id:"update-collection",title:"updateCollection"},s=void 0,o={id:"graphql-api/admin-api/mutations/update-collection",title:"updateCollection",description:"No description",source:"@site/docs/graphql-api/admin-api/mutations/update-collection.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/update-collection",permalink:"/graphql-api/admin-api/mutations/update-collection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-collection",title:"updateCollection"},sidebar:"schemaSidebar",previous:{title:"updateCollectionItem",permalink:"/graphql-api/admin-api/mutations/update-collection-item"},next:{title:"updateContentLock",permalink:"/graphql-api/admin-api/mutations/update-content-lock"}},i={},r=()=>{const e={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,l.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const s={details:"details",summary:"summary",...(0,l.R)()},[o,i]=(0,c.useState)(d);return(0,a.jsxs)(s.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateCollection.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecollectionidstring---",level:4},{value:'<code>updateCollection.<b>input</b></code><Bullet></Bullet><code>UpdateCollectionInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecollectioninputupdatecollectioninput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Collection</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"collection--",level:4}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"updateCollection(\n  id: String!\n  input: UpdateCollectionInput!\n): Collection!\n"})}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"updatecollectionidstring---",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["updateCollection.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"../../../graphql-api/references/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"updatecollectioninputupdatecollectioninput---",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["updateCollection.",(0,a.jsx)("b",{children:"input"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"../../../graphql-api/references/inputs/update-collection-input",children:(0,a.jsx)(n.code,{children:"UpdateCollectionInput!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"collection--",children:[(0,a.jsx)(n.a,{href:"../../../graphql-api/references/objects/collection",children:(0,a.jsx)(n.code,{children:"Collection"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"})]})}function b(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var a=t(63696);const l={},c=a.createContext(l);function d(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);