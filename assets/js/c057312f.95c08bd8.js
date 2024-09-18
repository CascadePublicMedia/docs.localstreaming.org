"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9922],{78002:(e,c,r)=>{r.r(c),r.d(c,{Badge:()=>p,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var n=r(62540),a=r(43023),s=r(63696);const t={id:"cache-control",title:"cacheControl"},o=void 0,l={id:"graphql-api/references/directives/cache-control",title:"cacheControl",description:"Controls GraphQL response cache behaviors of a field or object.",source:"@site/docs/graphql-api/references/directives/cache-control.mdx",sourceDirName:"graphql-api/references/directives",slug:"/graphql-api/references/directives/cache-control",permalink:"/graphql-api/references/directives/cache-control",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"cache-control",title:"cacheControl"},sidebar:"graphqlSidebar",previous:{title:"station",permalink:"/graphql-api/public-api/queries/station"},next:{title:"deprecated",permalink:"/graphql-api/references/directives/deprecated"}},d={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const c={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(c.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const c={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:c,children:r,startOpen:t=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[l,d]=(0,s.useState)(t);return(0,n.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:c}),l&&r]})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>cacheControl.<b>maxAge</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cachecontrolmaxageint--",level:4},{value:'<code>cacheControl.<b>scope</b></code><Bullet></Bullet><code>CacheControlScope</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cachecontrolscopecachecontrolscope--",level:4}];function x(e){const c={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.p,{children:"Controls GraphQL response cache behaviors of a field or object."}),"\n",(0,n.jsxs)(c.p,{children:["@see ",(0,n.jsxs)(c.a,{href:"https://the-guild.dev/graphql/yoga-server/docs/features/response-caching#using-schema-directive-cachecontrol",children:["Using Schema directive ",(0,n.jsx)(c.code,{children:"@cacheControl"})]})]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-graphql",children:"directive @cacheControl(\n  maxAge: Int\n  scope: CacheControlScope\n) on \r\n  | FIELD_DEFINITION\r\n  | OBJECT\n"})}),"\n",(0,n.jsx)(c.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(c.h4,{id:"cachecontrolmaxageint--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["cacheControl.",(0,n.jsx)("b",{children:"maxAge"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(c.a,{href:"/graphql-api/references/scalars/int",children:(0,n.jsx)(c.code,{children:"Int"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(c.h4,{id:"cachecontrolscopecachecontrolscope--",children:[(0,n.jsx)(c.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["cacheControl.",(0,n.jsx)("b",{children:"scope"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(c.a,{href:"/graphql-api/references/enums/cache-control-scope",children:(0,n.jsx)(c.code,{children:"CacheControlScope"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"references"})]})]})}function f(e={}){const{wrapper:c}={...(0,a.R)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},43023:(e,c,r)=>{r.d(c,{R:()=>t,x:()=>o});var n=r(63696);const a={},s=n.createContext(a);function t(e){const c=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(s.Provider,{value:c},e.children)}}}]);