"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6518],{30073:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>h,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>o,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"graphql-api/admin-api/mutations/update-station-show","title":"updateStationShow","description":"No description","source":"@site/docs/graphql-api/admin-api/mutations/update-station-show.mdx","sourceDirName":"graphql-api/admin-api/mutations","slug":"/graphql-api/admin-api/mutations/update-station-show","permalink":"/graphql-api/admin-api/mutations/update-station-show","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"update-station-show","title":"updateStationShow"},"sidebar":"graphqlSidebar","previous":{"title":"updateStationCredentialSet","permalink":"/graphql-api/admin-api/mutations/update-station-credential-set"},"next":{"title":"updateStationUser","permalink":"/graphql-api/admin-api/mutations/update-station-user"}}');var s=t(62540),d=t(43023),i=t(63696);const o={id:"update-station-show",title:"updateStationShow"},r=void 0,l={},c=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),p=e=>(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("span",{className:e.class,children:e.text})}),u=({dataOpen:e,dataClose:a,children:t,startOpen:n=!1})=>{const[d,o]=(0,i.useState)(n);return(0,s.jsxs)("details",{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&t]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateStationShow.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationshowidstring---",level:4},{value:'<code>updateStationShow.<b>input</b></code><Bullet></Bullet><code>UpdateStationShowInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatestationshowinputupdatestationshowinput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>StationShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"stationshow--",level:4}];function x(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"updateStationShow(\n  id: String!\n  input: UpdateStationShowInput!\n): StationShow!\n"})}),"\n",(0,s.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(a.h4,{id:"updatestationshowidstring---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["updateStationShow.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(a.h4,{id:"updatestationshowinputupdatestationshowinput---",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["updateStationShow.",(0,s.jsx)("b",{children:"input"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/graphql-api/references/inputs/update-station-show-input",children:(0,s.jsx)(a.code,{children:"UpdateStationShowInput!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(a.h4,{id:"stationshow--",children:[(0,s.jsx)(a.a,{href:"/graphql-api/references/objects/station-show",children:(0,s.jsx)(a.code,{children:"StationShow"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsx)(a.p,{children:"Show metadata overrides for specific stations."}),"\n",(0,s.jsx)(a.p,{children:"Overrides source and global show metadata."}),"\n",(0,s.jsxs)(a.p,{children:["More detailed documentation about fields used from this type is available on the ",(0,s.jsx)(a.code,{children:"NormalizedShow"})," type."]})]})}function b(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},43023:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(63696);const s={},d=n.createContext(s);function i(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);