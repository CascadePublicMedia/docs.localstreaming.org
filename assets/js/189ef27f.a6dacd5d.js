"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6405],{77353:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>m,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>g,assets:()=>t,contentTitle:()=>l,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>b});var r=d(62540),s=d(43023),o=d(63696);const n={id:"normalized-promo",title:"NormalizedPromo"},l=void 0,c={id:"graphql-api/references/objects/normalized-promo",title:"NormalizedPromo",description:"Normalized promo data for use in home screen data.",source:"@site/docs/graphql-api/references/objects/normalized-promo.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/normalized-promo",permalink:"/graphql-api/references/objects/normalized-promo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-promo",title:"NormalizedPromo"},sidebar:"schemaSidebar",previous:{title:"NormalizedPbsVideoPlaybackFiles",permalink:"/graphql-api/references/objects/normalized-pbs-video-playback-files"},next:{title:"NormalizedShowCreator",permalink:"/graphql-api/references/objects/normalized-show-creator"}},t={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:d,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[c,t]=(0,o.useState)(n);return(0,r.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&d]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>NormalizedPromo.<b>backgroundImageUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromobackgroundimageurlstring--",level:4},{value:'<code>NormalizedPromo.<b>body</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromobodystring---",level:4},{value:'<code>NormalizedPromo.<b>campaignName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromocampaignnamestring---",level:4},{value:'<code>NormalizedPromo.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromocreatedatdatetime---",level:4},{value:'<code>NormalizedPromo.<b>destinationShowId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromodestinationshowidstring--",level:4},{value:'<code>NormalizedPromo.<b>destinationType</b></code><Bullet></Bullet><code>PromoDestinationType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromodestinationtypepromodestinationtype---",level:4},{value:'<code>NormalizedPromo.<b>endAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromoendatdatetime--",level:4},{value:'<code>NormalizedPromo.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromoidstring---",level:4},{value:'<code>NormalizedPromo.<b>normalizedShow</b></code><Bullet></Bullet><code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromonormalizedshownormalizedshow--",level:4},{value:'<code>NormalizedPromo.normalizedShow.<b>country</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromonormalizedshowcountrystring--",level:5},{value:'<code>NormalizedPromo.normalizedShow.<b>stationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromonormalizedshowstationidstring--",level:5},{value:'<code>NormalizedPromo.<b>startAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromostartatdatetime--",level:4},{value:'<code>NormalizedPromo.<b>stationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromostationidstring--",level:4},{value:'<code>NormalizedPromo.<b>targetCohorts</b></code><Bullet></Bullet><code>[EndUserCohort]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromotargetcohortsendusercohort---",level:4},{value:'<code>NormalizedPromo.<b>title</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromotitlestring---",level:4},{value:'<code>NormalizedPromo.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedpromoupdatedatdatetime---",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Normalized promo data for use in home screen data."}),"\n",(0,r.jsxs)(a.p,{children:["See: ",(0,r.jsx)(a.code,{children:"HomeScreenData"})]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-graphql",children:"type NormalizedPromo {\n  backgroundImageUrl: String\n  body: String!\n  campaignName: String!\n  createdAt: DateTime!\n  destinationShowId: String\n  destinationType: PromoDestinationType!\n  endAt: DateTime\n  id: String!\n  normalizedShow(\n    country: String\n    stationId: String\n  ): NormalizedShow\n  startAt: DateTime\n  stationId: String\n  targetCohorts: [EndUserCohort]!\n  title: String!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,r.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromobackgroundimageurlstring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"backgroundImageUrl"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromobodystring---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"body"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromocampaignnamestring---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"campaignName"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromocreatedatdatetime---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"createdAt"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,r.jsx)(a.code,{children:"DateTime!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromodestinationshowidstring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"destinationShowId"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromodestinationtypepromodestinationtype---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"destinationType"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/enums/promo-destination-type",children:(0,r.jsx)(a.code,{children:"PromoDestinationType!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"enum"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromoendatdatetime--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"endAt"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,r.jsx)(a.code,{children:"DateTime"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromoidstring---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"id"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromonormalizedshownormalizedshow--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"normalizedShow"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/objects/normalized-show",children:(0,r.jsx)(a.code,{children:"NormalizedShow"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"object"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.h5,{id:"normalizedpromonormalizedshowcountrystring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.normalizedShow.",(0,r.jsx)("b",{children:"country"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n"]}),"\n",(0,r.jsxs)(a.h5,{id:"normalizedpromonormalizedshowstationidstring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.normalizedShow.",(0,r.jsx)("b",{children:"stationId"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromostartatdatetime--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"startAt"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,r.jsx)(a.code,{children:"DateTime"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromostationidstring--",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"stationId"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromotargetcohortsendusercohort---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"targetCohorts"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/enums/end-user-cohort",children:(0,r.jsx)(a.code,{children:"[EndUserCohort]!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"enum"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromotitlestring---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"title"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/string",children:(0,r.jsx)(a.code,{children:"String!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(a.h4,{id:"normalizedpromoupdatedatdatetime---",children:[(0,r.jsx)(a.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedPromo.",(0,r.jsx)("b",{children:"updatedAt"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(a.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,r.jsx)(a.code,{children:"DateTime!"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,r.jsx)(a.blockquote,{children:"\n"}),"\n",(0,r.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"../../../graphql-api/shared-api/queries/normalized-promo",children:(0,r.jsx)(a.code,{children:"normalizedPromo"})}),"  ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,r.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"../../../graphql-api/references/objects/normalized-collection-item",children:(0,r.jsx)(a.code,{children:"NormalizedCollectionItem"})}),"  ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},43023:(e,a,d)=>{d.d(a,{R:()=>n,x:()=>l});var r=d(63696);const s={},o=r.createContext(s);function n(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);