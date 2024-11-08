"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3500],{74605:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>b,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"graphql-api/references/objects/pbs-account-config","title":"PbsAccountConfig","description":"Configuration data for station PBS Account integrations.","source":"@site/docs/graphql-api/references/objects/pbs-account-config.mdx","sourceDirName":"graphql-api/references/objects","slug":"/graphql-api/references/objects/pbs-account-config","permalink":"/graphql-api/references/objects/pbs-account-config","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"pbs-account-config","title":"PbsAccountConfig"},"sidebar":"graphqlSidebar","previous":{"title":"NormalizedVideo","permalink":"/graphql-api/references/objects/normalized-video"},"next":{"title":"PbsShow","permalink":"/graphql-api/references/objects/pbs-show"}}');var c=s(62540),d=s(43023),t=s(63696);const r={id:"pbs-account-config",title:"PbsAccountConfig"},o=void 0,i={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,d.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const a={span:"span",...(0,d.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:s,startOpen:n=!1})=>{const r={details:"details",summary:"summary",...(0,d.R)()},[o,i]=(0,t.useState)(n);return(0,c.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PbsAccountConfig.<b>akamiClientId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigakamiclientidstring---",level:4},{value:'<code>PbsAccountConfig.<b>applicationId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigapplicationidstring---",level:4},{value:'<code>PbsAccountConfig.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigcreatedatdatetime---",level:4},{value:'<code>PbsAccountConfig.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigidstring---",level:4},{value:'<code>PbsAccountConfig.<b>oidcClientId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigoidcclientidstring---",level:4},{value:'<code>PbsAccountConfig.<b>oidcClientSecret</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigoidcclientsecretstring---",level:4},{value:'<code>PbsAccountConfig.<b>registerFlowName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigregisterflownamestring---",level:4},{value:'<code>PbsAccountConfig.<b>registerFlowVersion</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigregisterflowversionstring---",level:4},{value:'<code>PbsAccountConfig.<b>station</b></code><Bullet></Bullet><code>Station!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigstationstation---",level:4},{value:'<code>PbsAccountConfig.<b>stationId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigstationidstring---",level:4},{value:'<code>PbsAccountConfig.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pbsaccountconfigupdatedatdatetime---",level:4},{value:"Returned By",id:"returned-by",level:3}];function u(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.p,{children:"Configuration data for station PBS Account integrations."}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-graphql",children:"type PbsAccountConfig {\n  akamiClientId: String!\n  applicationId: String!\n  createdAt: DateTime!\n  id: String!\n  oidcClientId: String!\n  oidcClientSecret: String!\n  registerFlowName: String!\n  registerFlowVersion: String!\n  station: Station!\n  stationId: String!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,c.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigakamiclientidstring---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"akamiClientId"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigapplicationidstring---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"applicationId"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigcreatedatdatetime---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"createdAt"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,c.jsx)(a.code,{children:"DateTime!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigidstring---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"id"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigoidcclientidstring---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"oidcClientId"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigoidcclientsecretstring---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"oidcClientSecret"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigregisterflownamestring---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"registerFlowName"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigregisterflowversionstring---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"registerFlowVersion"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigstationstation---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"station"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/objects/station",children:(0,c.jsx)(a.code,{children:"Station!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigstationidstring---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"stationId"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsxs)(a.h4,{id:"pbsaccountconfigupdatedatdatetime---",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PbsAccountConfig.",(0,c.jsx)("b",{children:"updatedAt"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,c.jsx)(a.code,{children:"DateTime!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,c.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.a,{href:"/graphql-api/admin-api/mutations/create-pbs-account-config",children:(0,c.jsx)(a.code,{children:"createPbsAccountConfig"})}),"  ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"mutation"}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/admin-api/mutations/delete-pbs-account-config",children:(0,c.jsx)(a.code,{children:"deletePbsAccountConfig"})}),"  ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"mutation"}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/admin-api/queries/pbs-account-config",children:(0,c.jsx)(a.code,{children:"pbsAccountConfig"})}),"  ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"query"}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/admin-api/queries/pbs-account-configs",children:(0,c.jsx)(a.code,{children:"pbsAccountConfigs"})}),"  ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"query"}),(0,c.jsx)(l,{}),(0,c.jsx)(a.a,{href:"/graphql-api/admin-api/mutations/update-pbs-account-config",children:(0,c.jsx)(a.code,{children:"updatePbsAccountConfig"})}),"  ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"mutation"})]})]})}function f(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},43023:(e,a,s)=>{s.d(a,{R:()=>t,x:()=>r});var n=s(63696);const c={},d=n.createContext(c);function t(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);