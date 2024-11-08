"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5356],{87845:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>p,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>f});const i=JSON.parse('{"id":"graphql-api/references/inputs/viewer-likes-filters","title":"ViewerLikesFilters","description":"Filters for the viewerLikes query.","source":"@site/docs/graphql-api/references/inputs/viewer-likes-filters.mdx","sourceDirName":"graphql-api/references/inputs","slug":"/graphql-api/references/inputs/viewer-likes-filters","permalink":"/graphql-api/references/inputs/viewer-likes-filters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"viewer-likes-filters","title":"ViewerLikesFilters"},"sidebar":"graphqlSidebar","previous":{"title":"UpsertWatchHistoryInput","permalink":"/graphql-api/references/inputs/upsert-watch-history-input"},"next":{"title":"ViewerMyListFilters","permalink":"/graphql-api/references/inputs/viewer-my-list-filters"}}');var t=r(62540),l=r(43023),a=r(63696);const n={id:"viewer-likes-filters",title:"ViewerLikesFilters"},d=void 0,c={},o=()=>{const e={span:"span",...(0,l.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,l.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,l.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:r,startOpen:i=!1})=>{const n={details:"details",summary:"summary",...(0,l.R)()},[d,c]=(0,a.useState)(i);return(0,t.jsxs)(n.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(n.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&r]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ViewerLikesFilters.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewerlikesfilterslimitint--",level:4},{value:'<code>ViewerLikesFilters.<b>showId</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewerlikesfiltersshowidstring---",level:4},{value:'<code>ViewerLikesFilters.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewerlikesfiltersskipint--",level:4},{value:'<code>ViewerLikesFilters.<b>type</b></code><Bullet></Bullet><code>LikeType</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewerlikesfilterstypeliketype--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Filters for the ",(0,t.jsx)(s.code,{children:"viewerLikes"})," query."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"input ViewerLikesFilters {\n  limit: Int\n  showId: [String]\n  skip: Int\n  type: LikeType\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"viewerlikesfilterslimitint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerLikesFilters.",(0,t.jsx)("b",{children:"limit"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/graphql-api/references/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(s.p,{children:"Number of results to retrieve (default: 200)."}),"\n",(0,t.jsxs)(s.h4,{id:"viewerlikesfiltersshowidstring---",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerLikesFilters.",(0,t.jsx)("b",{children:"showId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,t.jsx)(s.code,{children:"[String]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(s.p,{children:"List of show IDs to filter for (ANY)."}),"\n",(0,t.jsxs)(s.h4,{id:"viewerlikesfiltersskipint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerLikesFilters.",(0,t.jsx)("b",{children:"skip"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/graphql-api/references/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(s.p,{children:"Number of results to skip."}),"\n",(0,t.jsxs)(s.h4,{id:"viewerlikesfilterstypeliketype--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewerLikesFilters.",(0,t.jsx)("b",{children:"type"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/graphql-api/references/enums/like-type",children:(0,t.jsx)(s.code,{children:"LikeType"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(s.p,{children:"Like type to include (default: any)."}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/graphql-api/consumer-api/queries/viewer-likes",children:(0,t.jsx)(s.code,{children:"viewerLikes"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"query"})]})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},43023:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>n});var i=r(63696);const t={},l=i.createContext(t);function a(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);