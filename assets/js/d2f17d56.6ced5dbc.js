"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6386],{34236:(e,l,o)=>{o.r(l),o.d(l,{Badge:()=>h,Bullet:()=>t,Details:()=>g,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>j,frontMatter:()=>r,metadata:()=>n,toc:()=>b});const n=JSON.parse('{"id":"graphql-api/references/objects/normalized-collection-item","title":"NormalizedCollectionItem","description":"A single station-normalized item reference to a piece of content in a Collection.","source":"@site/docs/graphql-api/references/objects/normalized-collection-item.mdx","sourceDirName":"graphql-api/references/objects","slug":"/graphql-api/references/objects/normalized-collection-item","permalink":"/graphql-api/references/objects/normalized-collection-item","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"normalized-collection-item","title":"NormalizedCollectionItem"},"sidebar":"graphqlSidebar","previous":{"title":"MyList","permalink":"/graphql-api/references/objects/my-list"},"next":{"title":"NormalizedCollection","permalink":"/graphql-api/references/objects/normalized-collection"}}');var d=o(62540),a=o(43023),i=o(63696);const r={id:"normalized-collection-item",title:"NormalizedCollectionItem"},s=void 0,c={},t=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),m=e=>(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{className:e.class,children:e.text})}),g=({dataOpen:e,dataClose:l,children:o,startOpen:n=!1})=>{const[a,r]=(0,i.useState)(n);return(0,d.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:a?e:l}),a&&o]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>NormalizedCollectionItem.<b>id</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionitemidstring--",level:4},{value:'<code>NormalizedCollectionItem.<b>pinned</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionitempinnedboolean--",level:4},{value:'<code>NormalizedCollectionItem.<b>promo</b></code><Bullet></Bullet><code>NormalizedPromo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionitempromonormalizedpromo--",level:4},{value:'<code>NormalizedCollectionItem.<b>show</b></code><Bullet></Bullet><code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionitemshownormalizedshow--",level:4},{value:'<code>NormalizedCollectionItem.<b>video</b></code><Bullet></Bullet><code>NormalizedVideo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionitemvideonormalizedvideo--",level:4},{value:'<code>NormalizedCollectionItem.<b>weight</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedcollectionitemweightint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const l={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.p,{children:["A single station-normalized item reference to a piece of content in a ",(0,d.jsx)(l.code,{children:"Collection"}),"."]}),"\n",(0,d.jsx)(l.p,{children:"Only one of the content fields (promo, show, video) will be set."}),"\n",(0,d.jsx)(l.pre,{children:(0,d.jsx)(l.code,{className:"language-graphql",children:"type NormalizedCollectionItem {\n  id: String\n  pinned: Boolean\n  promo: NormalizedPromo\n  show: NormalizedShow\n  video: NormalizedVideo\n  weight: Int\n}\n"})}),"\n",(0,d.jsx)(l.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(l.h4,{id:"normalizedcollectionitemidstring--",children:[(0,d.jsx)(l.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedCollectionItem.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(t,{}),(0,d.jsx)(l.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(l.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(l.h4,{id:"normalizedcollectionitempinnedboolean--",children:[(0,d.jsx)(l.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedCollectionItem.",(0,d.jsx)("b",{children:"pinned"})]})}),(0,d.jsx)(t,{}),(0,d.jsx)(l.a,{href:"/graphql-api/references/scalars/boolean",children:(0,d.jsx)(l.code,{children:"Boolean"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(l.p,{children:['Whether this item is "pinned" in it\'s place (based on weight) in the ',(0,d.jsx)(l.code,{children:"Collection"}),"."]}),"\n",(0,d.jsxs)(l.h4,{id:"normalizedcollectionitempromonormalizedpromo--",children:[(0,d.jsx)(l.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedCollectionItem.",(0,d.jsx)("b",{children:"promo"})]})}),(0,d.jsx)(t,{}),(0,d.jsx)(l.a,{href:"/graphql-api/references/objects/normalized-promo",children:(0,d.jsx)(l.code,{children:"NormalizedPromo"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(l.h4,{id:"normalizedcollectionitemshownormalizedshow--",children:[(0,d.jsx)(l.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedCollectionItem.",(0,d.jsx)("b",{children:"show"})]})}),(0,d.jsx)(t,{}),(0,d.jsx)(l.a,{href:"/graphql-api/references/objects/normalized-show",children:(0,d.jsx)(l.code,{children:"NormalizedShow"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(l.h4,{id:"normalizedcollectionitemvideonormalizedvideo--",children:[(0,d.jsx)(l.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedCollectionItem.",(0,d.jsx)("b",{children:"video"})]})}),(0,d.jsx)(t,{}),(0,d.jsx)(l.a,{href:"/graphql-api/references/objects/normalized-video",children:(0,d.jsx)(l.code,{children:"NormalizedVideo"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(l.h4,{id:"normalizedcollectionitemweightint--",children:[(0,d.jsx)(l.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedCollectionItem.",(0,d.jsx)("b",{children:"weight"})]})}),(0,d.jsx)(t,{}),(0,d.jsx)(l.a,{href:"/graphql-api/references/scalars/int",children:(0,d.jsx)(l.code,{children:"Int"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(l.p,{children:"Order for results (lowest to highest) when selecting multiple collection items."}),"\n",(0,d.jsx)(l.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(l.p,{children:[(0,d.jsx)(l.a,{href:"/graphql-api/references/objects/normalized-collection",children:(0,d.jsx)(l.code,{children:"NormalizedCollection"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:l}={...(0,a.R)(),...e.components};return l?(0,d.jsx)(l,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},43023:(e,l,o)=>{o.d(l,{R:()=>i,x:()=>r});var n=o(63696);const d={},a=n.createContext(d);function i(e){const l=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(a.Provider,{value:l},e.children)}}}]);