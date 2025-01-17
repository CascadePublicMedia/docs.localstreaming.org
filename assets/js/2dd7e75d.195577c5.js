"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[513],{52392:(e,a,r)=>{r.r(a),r.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"graphql-api/admin-api/mutations/update-collection-group-order","title":"updateCollectionGroupOrder","description":"No description","source":"@site/docs/graphql-api/admin-api/mutations/update-collection-group-order.mdx","sourceDirName":"graphql-api/admin-api/mutations","slug":"/graphql-api/admin-api/mutations/update-collection-group-order","permalink":"/graphql-api/admin-api/mutations/update-collection-group-order","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"update-collection-group-order","title":"updateCollectionGroupOrder"},"sidebar":"graphqlSidebar","previous":{"title":"updateApiUser","permalink":"/graphql-api/admin-api/mutations/update-api-user"},"next":{"title":"updateCollectionGroup","permalink":"/graphql-api/admin-api/mutations/update-collection-group"}}');var n=r(62540),o=r(43023),d=r(63696);const s={id:"update-collection-group-order",title:"updateCollectionGroupOrder"},l=void 0,c={},i=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),u=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:a,children:r,startOpen:t=!1})=>{const[o,s]=(0,d.useState)(t);return(0,n.jsxs)("details",{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&r]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateCollectionGroupOrder.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecollectiongrouporderidstring---",level:4},{value:'<code>updateCollectionGroupOrder.<b>itemsSort</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatecollectiongrouporderitemssortstring---",level:4},{value:"Type",id:"type",level:3},{value:'<code>CollectionGroup</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"collectiongroup--",level:4}];function x(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"updateCollectionGroupOrder(\n  id: String!\n  itemsSort: [String!]!\n): CollectionGroup!\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"updatecollectiongrouporderidstring---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateCollectionGroupOrder.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(a.h4,{id:"updatecollectiongrouporderitemssortstring---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updateCollectionGroupOrder.",(0,n.jsx)("b",{children:"itemsSort"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,n.jsx)(a.code,{children:"[String!]!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"collectiongroup--",children:[(0,n.jsx)(a.a,{href:"/graphql-api/references/objects/collection-group",children:(0,n.jsx)(a.code,{children:"CollectionGroup"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.p,{children:"Group of collections to be displayed together."})]})}function m(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},43023:(e,a,r)=>{r.d(a,{R:()=>d,x:()=>s});var t=r(63696);const n={},o=t.createContext(n);function d(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);