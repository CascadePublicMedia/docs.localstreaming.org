"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[416],{62285:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var s=t(62540),n=t(43023),i=t(63696);const a={id:"require-api-user-auth",title:"requireApiUserAuth"},c=void 0,o={id:"graphql-api/references/directives/require-api-user-auth",title:"requireApiUserAuth",description:"Requires API user authentication.",source:"@site/docs/graphql-api/references/directives/require-api-user-auth.mdx",sourceDirName:"graphql-api/references/directives",slug:"/graphql-api/references/directives/require-api-user-auth",permalink:"/graphql-api/references/directives/require-api-user-auth",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"require-api-user-auth",title:"requireApiUserAuth"},sidebar:"schemaSidebar",previous:{title:"requireAnyAuth",permalink:"/graphql-api/references/directives/require-any-auth"},next:{title:"requireUserAuth",permalink:"/graphql-api/references/directives/require-user-auth"}},d={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:r,children:t,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[o,d]=(0,i.useState)(a);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:r}),o&&t]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>requireApiUserAuth.<b>stationIdArg</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"requireapiuserauthstationidargstring--",level:4}];function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Requires API user authentication."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:'directive @requireApiUserAuth(\n  stationIdArg: String = "stationId"\n) on FIELD_DEFINITION\n'})}),"\n",(0,s.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(r.h4,{id:"requireapiuserauthstationidargstring--",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["requireApiUserAuth.",(0,s.jsx)("b",{children:"stationIdArg"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(r.a,{href:"../../../graphql-api/references/scalars/string",children:(0,s.jsx)(r.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Field to use for validating a Station ID to restrict API users to assigned station."}),"\n"]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},43023:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var s=t(63696);const n={},i=s.createContext(n);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);