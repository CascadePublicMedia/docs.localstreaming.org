"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6495],{80089:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>r,Details:()=>u,SpecifiedBy:()=>m,assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var l=n(62540),s=n(43023),d=n(63696);const o={id:"delete-collection-items",title:"deleteCollectionItems"},c=void 0,i={id:"graphql-api/admin-api/mutations/delete-collection-items",title:"deleteCollectionItems",description:"Deletes all items beloning to a Collection by Collection.id.",source:"@site/docs/graphql-api/admin-api/mutations/delete-collection-items.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/delete-collection-items",permalink:"/graphql-api/admin-api/mutations/delete-collection-items",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"delete-collection-items",title:"deleteCollectionItems"},sidebar:"graphqlSidebar",previous:{title:"deleteCollectionItem",permalink:"/graphql-api/admin-api/mutations/delete-collection-item"},next:{title:"deleteCollection",permalink:"/graphql-api/admin-api/mutations/delete-collection"}},a={},r=()=>{const e={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,s.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[i,a]=(0,d.useState)(o);return(0,l.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(c.summary,{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>deleteCollectionItems.<b>collectionId</b></code><Bullet></Bullet><code>UUID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"deletecollectionitemscollectioniduuid---",level:4},{value:'<code>deleteCollectionItems.<b>contentIds</b></code><Bullet></Bullet><code>DeleteCollectionItemsContentIds</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"deletecollectionitemscontentidsdeletecollectionitemscontentids--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeletedItemsCount</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"deleteditemscount--",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["Deletes all items beloning to a ",(0,l.jsx)(t.code,{children:"Collection"})," by ",(0,l.jsx)(t.code,{children:"Collection.id"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["If ",(0,l.jsx)(t.code,{children:"contentIds"})," input is provided, the deleted items will be limited to items\nwith matching content IDs."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"deleteCollectionItems(\n  collectionId: UUID!\n  contentIds: DeleteCollectionItemsContentIds\n): DeletedItemsCount!\n"})}),"\n",(0,l.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(t.h4,{id:"deletecollectionitemscollectioniduuid---",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["deleteCollectionItems.",(0,l.jsx)("b",{children:"collectionId"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/graphql-api/references/scalars/uuid",children:(0,l.jsx)(t.code,{children:"UUID!"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,l.jsxs)(t.h4,{id:"deletecollectionitemscontentidsdeletecollectionitemscontentids--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["deleteCollectionItems.",(0,l.jsx)("b",{children:"contentIds"})]})}),(0,l.jsx)(r,{}),(0,l.jsx)(t.a,{href:"/graphql-api/references/inputs/delete-collection-items-content-ids",children:(0,l.jsx)(t.code,{children:"DeleteCollectionItemsContentIds"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"input"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,l.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,l.jsxs)(t.h4,{id:"deleteditemscount--",children:[(0,l.jsx)(t.a,{href:"/graphql-api/references/objects/deleted-items-count",children:(0,l.jsx)(t.code,{children:"DeletedItemsCount"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,l.jsx)(t.p,{children:"Represents number of items deleted by a mutation."})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var l=n(63696);const s={},d=l.createContext(s);function o(e){const t=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(d.Provider,{value:t},e.children)}}}]);