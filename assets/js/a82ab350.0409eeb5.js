"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5801],{13136:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>h,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>y,assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"graphql-api/references/inputs/viewer-my-list-sort-by","title":"ViewerMyListSortBy","description":"How to sort my list show results.","source":"@site/docs/graphql-api/references/inputs/viewer-my-list-sort-by.mdx","sourceDirName":"graphql-api/references/inputs","slug":"/graphql-api/references/inputs/viewer-my-list-sort-by","permalink":"/graphql-api/references/inputs/viewer-my-list-sort-by","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"viewer-my-list-sort-by","title":"ViewerMyListSortBy"},"sidebar":"graphqlSidebar","previous":{"title":"ViewerMyListFilters","permalink":"/graphql-api/references/inputs/viewer-my-list-filters"},"next":{"title":"WatchHistoryFilters","permalink":"/graphql-api/references/inputs/watch-history-filters"}}');var i=r(62540),n=r(43023),d=r(63696);const l={id:"viewer-my-list-sort-by",title:"ViewerMyListSortBy"},a=void 0,o={},c=()=>{const e={span:"span",...(0,n.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},y=e=>{const s={a:"a",...(0,n.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,n.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:s,children:r,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[a,o]=(0,d.useState)(t);return(0,i.jsxs)(l.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:a?e:s}),a&&r]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>ViewerMyListSortBy.<b>fields</b></code><Bullet></Bullet><code>[ViewerMyListResultsSortByField]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewermylistsortbyfieldsviewermylistresultssortbyfield---",level:4},{value:'<code>ViewerMyListSortBy.<b>order</b></code><Bullet></Bullet><code>[Order]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewermylistsortbyorderorder---",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"How to sort my list show results."}),"\n",(0,i.jsx)(s.p,{children:"The number of fields and order provided must be equal."}),"\n",(0,i.jsx)(s.p,{children:"Each field uses the order in the corresponding position."}),"\n",(0,i.jsxs)(s.p,{children:["E.g. a ",(0,i.jsx)(s.code,{children:"fields"})," value of ",(0,i.jsx)(s.code,{children:"[createdAt, title]"})," and ",(0,i.jsx)(s.code,{children:"order"})," value of ",(0,i.jsx)(s.code,{children:"[asc, desc]"})," indicates a sort\nof ",(0,i.jsx)(s.code,{children:"MyList.expiresAt ASC, MyList.show.title DESC"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:"input ViewerMyListSortBy {\n  fields: [ViewerMyListResultsSortByField]\n  order: [Order]\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(s.h4,{id:"viewermylistsortbyfieldsviewermylistresultssortbyfield---",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerMyListSortBy.",(0,i.jsx)("b",{children:"fields"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/enums/viewer-my-list-results-sort-by-field",children:(0,i.jsx)(s.code,{children:"[ViewerMyListResultsSortByField]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsxs)(s.p,{children:["Fields to sort by. Corresponds to same-positioned item in ",(0,i.jsx)(s.code,{children:"order"})," field."]}),"\n",(0,i.jsxs)(s.h4,{id:"viewermylistsortbyorderorder---",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerMyListSortBy.",(0,i.jsx)("b",{children:"order"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/enums/order",children:(0,i.jsx)(s.code,{children:"[Order]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsxs)(s.p,{children:["Order for sort by fields. Corresponds to same-positioned item in ",(0,i.jsx)(s.code,{children:"fields"})," field."]}),"\n",(0,i.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/graphql-api/references/inputs/viewer-my-list-filters",children:(0,i.jsx)(s.code,{children:"ViewerMyListFilters"})}),"  ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},43023:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>l});var t=r(63696);const i={},n=t.createContext(i);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);