"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3592],{54610:(e,a,r)=>{r.r(a),r.d(a,{Badge:()=>h,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"graphql-api/references/inputs/create-hero-input","title":"CreateHeroInput","description":"No description","source":"@site/docs/graphql-api/references/inputs/create-hero-input.mdx","sourceDirName":"graphql-api/references/inputs","slug":"/graphql-api/references/inputs/create-hero-input","permalink":"/graphql-api/references/inputs/create-hero-input","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"create-hero-input","title":"CreateHeroInput"},"sidebar":"graphqlSidebar","previous":{"title":"CreateHeroGroupInput","permalink":"/graphql-api/references/inputs/create-hero-group-input"},"next":{"title":"CreateLikeInput","permalink":"/graphql-api/references/inputs/create-like-input"}}');var d=r(62540),t=r(43023),n=r(63696);const c={id:"create-hero-input",title:"CreateHeroInput"},l=void 0,o={},i=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:a,children:r,startOpen:s=!1})=>{const[t,c]=(0,n.useState)(s);return(0,d.jsxs)("details",{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:t?e:a}),t&&r]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>CreateHeroInput.<b>body</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputbodystring---",level:4},{value:'<code>CreateHeroInput.<b>deleted</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputdeletedboolean--",level:4},{value:'<code>CreateHeroInput.<b>endAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputendatdatetime--",level:4},{value:'<code>CreateHeroInput.<b>heroGroupId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputherogroupidstring---",level:4},{value:'<code>CreateHeroInput.<b>heroMezzanineAltText</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputheromezzaninealttextstring---",level:4},{value:'<code>CreateHeroInput.<b>heroMobileAltText</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputheromobilealttextstring---",level:4},{value:'<code>CreateHeroInput.<b>images</b></code><Bullet></Bullet><code>[JSON]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputimagesjson---",level:4},{value:'<code>CreateHeroInput.<b>pinned</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputpinnedboolean--",level:4},{value:'<code>CreateHeroInput.<b>showId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputshowidstring---",level:4},{value:'<code>CreateHeroInput.<b>startAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputstartatdatetime--",level:4},{value:'<code>CreateHeroInput.<b>targetCohorts</b></code><Bullet></Bullet><code>[EndUserCohort]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputtargetcohortsendusercohort---",level:4},{value:'<code>CreateHeroInput.<b>targetPlatformTypes</b></code><Bullet></Bullet><code>[PlatformType]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputtargetplatformtypesplatformtype---",level:4},{value:'<code>CreateHeroInput.<b>title</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputtitlestring---",level:4},{value:'<code>CreateHeroInput.<b>weight</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createheroinputweightint---",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"No description"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"input CreateHeroInput {\n  body: String!\n  deleted: Boolean\n  endAt: DateTime\n  heroGroupId: String!\n  heroMezzanineAltText: String!\n  heroMobileAltText: String!\n  images: [JSON]!\n  pinned: Boolean\n  showId: String!\n  startAt: DateTime\n  targetCohorts: [EndUserCohort]!\n  targetPlatformTypes: [PlatformType]!\n  title: String!\n  weight: Int!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputbodystring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"body"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputdeletedboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"deleted"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputendatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"endAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputherogroupidstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"heroGroupId"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputheromezzaninealttextstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"heroMezzanineAltText"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputheromobilealttextstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"heroMobileAltText"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputimagesjson---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"images"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/json",children:(0,d.jsx)(a.code,{children:"[JSON]!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputpinnedboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"pinned"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputshowidstring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"showId"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputstartatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"startAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputtargetcohortsendusercohort---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"targetCohorts"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/enums/end-user-cohort",children:(0,d.jsx)(a.code,{children:"[EndUserCohort]!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputtargetplatformtypesplatformtype---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"targetPlatformTypes"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/enums/platform-type",children:(0,d.jsx)(a.code,{children:"[PlatformType]!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputtitlestring---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"title"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(a.h4,{id:"createheroinputweightint---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateHeroInput.",(0,d.jsx)("b",{children:"weight"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/graphql-api/references/scalars/int",children:(0,d.jsx)(a.code,{children:"Int!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/graphql-api/admin-api/mutations/create-hero",children:(0,d.jsx)(a.code,{children:"createHero"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},43023:(e,a,r)=>{r.d(a,{R:()=>n,x:()=>c});var s=r(63696);const d={},t=s.createContext(d);function n(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);