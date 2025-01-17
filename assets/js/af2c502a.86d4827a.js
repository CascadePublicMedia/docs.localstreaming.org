"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7791],{74598:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>h,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"graphql-api/references/directives/require-any-auth","title":"requireAnyAuth","description":"Requires either API or admin user authentication.","source":"@site/docs/graphql-api/references/directives/require-any-auth.mdx","sourceDirName":"graphql-api/references/directives","slug":"/graphql-api/references/directives/require-any-auth","permalink":"/graphql-api/references/directives/require-any-auth","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"require-any-auth","title":"requireAnyAuth"},"sidebar":"graphqlSidebar","previous":{"title":"oneOf","permalink":"/graphql-api/references/directives/one-of"},"next":{"title":"requireApiUserAuth","permalink":"/graphql-api/references/directives/require-api-user-auth"}}');var a=t(62540),s=t(43023),i=t(63696);const c={id:"require-any-auth",title:"requireAnyAuth"},d=void 0,o={},l=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),u=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),p=({dataOpen:e,dataClose:r,children:t,startOpen:n=!1})=>{const[s,c]=(0,i.useState)(n);return(0,a.jsxs)("details",{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:s?e:r}),s&&t]})},g=[{value:"Arguments",id:"arguments",level:3},{value:'<code>requireAnyAuth.<b>stationIdArg</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"requireanyauthstationidargstring--",level:4}];function f(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Requires either API or admin user authentication."}),"\n",(0,a.jsx)(r.p,{children:"Admin roles cannot be considered by this directive because API users have no equivalent."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-graphql",children:'directive @requireAnyAuth(\n  stationIdArg: String = "stationId"\n) on FIELD_DEFINITION\n'})}),"\n",(0,a.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(r.h4,{id:"requireanyauthstationidargstring--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["requireAnyAuth.",(0,a.jsx)("b",{children:"stationIdArg"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(r.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(r.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(r.p,{children:"Field to use for validating a Station ID to restrict API users to assigned station."})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},43023:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(63696);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);