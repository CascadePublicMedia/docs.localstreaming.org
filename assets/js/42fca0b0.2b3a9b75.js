"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6677],{46788:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>g,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"graphql-api/references/inputs/watch-history-filters","title":"WatchHistoryFilters","description":"Filters for watch history entries querying.","source":"@site/docs/graphql-api/references/inputs/watch-history-filters.mdx","sourceDirName":"graphql-api/references/inputs","slug":"/graphql-api/references/inputs/watch-history-filters","permalink":"/graphql-api/references/inputs/watch-history-filters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"watch-history-filters","title":"WatchHistoryFilters"},"sidebar":"graphqlSidebar","previous":{"title":"ViewerMyListSortBy","permalink":"/graphql-api/references/inputs/viewer-my-list-sort-by"},"next":{"title":"ApiUser","permalink":"/graphql-api/references/objects/api-user"}}');var i=t(62540),a=t(43023),d=t(63696);const c={id:"watch-history-filters",title:"WatchHistoryFilters"},n=void 0,l={},o=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),h=e=>(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),g=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:e.class,children:e.text})}),f=({dataOpen:e,dataClose:s,children:t,startOpen:r=!1})=>{const[a,c]=(0,d.useState)(r);return(0,i.jsxs)("details",{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:a?e:s}),a&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>WatchHistoryFilters.<b>distinct</b></code><Bullet></Bullet><code>WatchHistoryDistinctField</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"watchhistoryfiltersdistinctwatchhistorydistinctfield--",level:4},{value:'<code>WatchHistoryFilters.<b>limit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"watchhistoryfilterslimitint--",level:4},{value:'<code>WatchHistoryFilters.<b>showId</b></code><Bullet></Bullet><code>[UUID!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"watchhistoryfiltersshowiduuid---",level:4},{value:'<code>WatchHistoryFilters.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"watchhistoryfiltersskipint--",level:4},{value:'<code>WatchHistoryFilters.<b>videoId</b></code><Bullet></Bullet><code>[UUID!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"watchhistoryfiltersvideoiduuid---",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Filters for watch history entries querying."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:"input WatchHistoryFilters {\n  distinct: WatchHistoryDistinctField\n  limit: Int\n  showId: [UUID!]!\n  skip: Int\n  videoId: [UUID!]!\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(s.h4,{id:"watchhistoryfiltersdistinctwatchhistorydistinctfield--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["WatchHistoryFilters.",(0,i.jsx)("b",{children:"distinct"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/enums/watch-history-distinct-field",children:(0,i.jsx)(s.code,{children:"WatchHistoryDistinctField"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"enum"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"Field to use for distinct watch history entry results."}),"\n",(0,i.jsxs)(s.h4,{id:"watchhistoryfilterslimitint--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["WatchHistoryFilters.",(0,i.jsx)("b",{children:"limit"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/scalars/int",children:(0,i.jsx)(s.code,{children:"Int"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"Number of entries to retrieve (default: 50, max: 200)."}),"\n",(0,i.jsxs)(s.h4,{id:"watchhistoryfiltersshowiduuid---",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["WatchHistoryFilters.",(0,i.jsx)("b",{children:"showId"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/scalars/uuid",children:(0,i.jsx)(s.code,{children:"[UUID!]!"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"Show IDs to filter records for."}),"\n",(0,i.jsxs)(s.h4,{id:"watchhistoryfiltersskipint--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["WatchHistoryFilters.",(0,i.jsx)("b",{children:"skip"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/scalars/int",children:(0,i.jsx)(s.code,{children:"Int"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"Number of entries to skip."}),"\n",(0,i.jsxs)(s.h4,{id:"watchhistoryfiltersvideoiduuid---",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["WatchHistoryFilters.",(0,i.jsx)("b",{children:"videoId"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(s.a,{href:"/graphql-api/references/scalars/uuid",children:(0,i.jsx)(s.code,{children:"[UUID!]!"})})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(s.p,{children:"Video IDs to filter records for."}),"\n",(0,i.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/graphql-api/consumer-api/queries/viewer-watch-history",children:(0,i.jsx)(s.code,{children:"viewerWatchHistory"})}),"  ",(0,i.jsx)(g,{class:"badge badge--secondary",text:"query"})]})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}},43023:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var r=t(63696);const i={},a=r.createContext(i);function d(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);