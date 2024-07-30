"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2393],{8856:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var t=n(62540),d=n(43023),s=n(63696);const r={id:"update-role",title:"updateRole"},l=void 0,o={id:"graphql-api/admin-api/mutations/update-role",title:"updateRole",description:"No description",source:"@site/docs/graphql-api/admin-api/mutations/update-role.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/update-role",permalink:"/graphql-api/admin-api/mutations/update-role",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-role",title:"updateRole"},sidebar:"graphqlSidebar",previous:{title:"updatePromo",permalink:"/graphql-api/admin-api/mutations/update-promo"},next:{title:"updateShow",permalink:"/graphql-api/admin-api/mutations/update-show"}},i={},c=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:n,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,d.R)()},[o,i]=(0,s.useState)(r);return(0,t.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&n]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateRole.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updateroleidstring---",level:4},{value:'<code>updateRole.<b>input</b></code><Bullet></Bullet><code>UpdateRoleInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updateroleinputupdateroleinput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>Role</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"role--",level:4}];function x(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"updateRole(\n  id: String!\n  input: UpdateRoleInput!\n): Role!\n"})}),"\n",(0,t.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(a.h4,{id:"updateroleidstring---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["updateRole.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsxs)(a.h4,{id:"updateroleinputupdateroleinput---",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["updateRole.",(0,t.jsx)("b",{children:"input"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(a.a,{href:"/graphql-api/references/inputs/update-role-input",children:(0,t.jsx)(a.code,{children:"UpdateRoleInput!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(a.h4,{id:"role--",children:[(0,t.jsx)(a.a,{href:"/graphql-api/references/objects/role",children:(0,t.jsx)(a.code,{children:"Role"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,t.jsx)(a.p,{children:"Role of a person in the creation of content."}),"\n",(0,t.jsxs)(a.p,{children:["See: ",(0,t.jsx)(a.code,{children:"Person"})]})]})}function m(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},43023:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>l});var t=n(63696);const d={},s=t.createContext(d);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);