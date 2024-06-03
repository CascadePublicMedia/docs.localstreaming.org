"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8315],{5837:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>g,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>m});var n=s(62540),t=s(43023),r=s(63696);const d={id:"update-promo-message",title:"updatePromoMessage"},o=void 0,i={id:"graphql-api/admin-api/mutations/update-promo-message",title:"updatePromoMessage",description:"No description",source:"@site/docs/graphql-api/admin-api/mutations/update-promo-message.mdx",sourceDirName:"graphql-api/admin-api/mutations",slug:"/graphql-api/admin-api/mutations/update-promo-message",permalink:"/graphql-api/admin-api/mutations/update-promo-message",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-promo-message",title:"updatePromoMessage"},sidebar:"schemaSidebar",previous:{title:"updatePresentingSponsor",permalink:"/graphql-api/admin-api/mutations/update-presenting-sponsor"},next:{title:"updatePromo",permalink:"/graphql-api/admin-api/mutations/update-promo"}},c={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[i,c]=(0,r.useState)(d);return(0,n.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&s]})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updatePromoMessage.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatepromomessageidstring---",level:4},{value:'<code>updatePromoMessage.<b>input</b></code><Bullet></Bullet><code>UpdatePromoMessageInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatepromomessageinputupdatepromomessageinput---",level:4},{value:"Type",id:"type",level:3},{value:'<code>PromoMessage</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"promomessage--",level:4}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"updatePromoMessage(\n  id: String!\n  input: UpdatePromoMessageInput!\n): PromoMessage!\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"updatepromomessageidstring---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updatePromoMessage.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(a.h4,{id:"updatepromomessageinputupdatepromomessageinput---",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["updatePromoMessage.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"../../../graphql-api/references/inputs/update-promo-message-input",children:(0,n.jsx)(a.code,{children:"UpdatePromoMessageInput!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"input"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"promomessage--",children:[(0,n.jsx)(a.a,{href:"../../../graphql-api/references/objects/promo-message",children:(0,n.jsx)(a.code,{children:"PromoMessage"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Promotional message and CTA for displays across platforms."}),"\n"]})]})}function x(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},43023:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>o});var n=s(63696);const t={},r=n.createContext(t);function d(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);