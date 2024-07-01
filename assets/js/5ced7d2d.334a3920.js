"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3887],{22805:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>b,SpecifiedBy:()=>g,assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>x});var d=a(62540),r=a(43023),c=a(63696);const n={id:"like",title:"Like"},l=void 0,i={id:"graphql-api/references/objects/like",title:"Like",description:'Viewer content reaction ("like" or "dislike").',source:"@site/docs/graphql-api/references/objects/like.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/like",permalink:"/graphql-api/references/objects/like",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"like",title:"Like"},sidebar:"schemaSidebar",previous:{title:"ItemCount",permalink:"/graphql-api/references/objects/item-count"},next:{title:"LivestreamScheduleItem",permalink:"/graphql-api/references/objects/livestream-schedule-item"}},t={},o=()=>{const e={span:"span",...(0,r.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,r.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,r.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:a,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[i,t]=(0,c.useState)(n);return(0,d.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(l.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Like.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likecreatedatdatetime---",level:4},{value:'<code>Like.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likeidstring---",level:4},{value:'<code>Like.<b>normalizedShow</b></code><Bullet></Bullet><code>NormalizedShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likenormalizedshownormalizedshow--",level:4},{value:'<code>Like.normalizedShow.<b>country</b></code><Bullet></Bullet><code>CountryCode</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likenormalizedshowcountrycountrycode--",level:5},{value:'<code>Like.normalizedShow.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likenormalizedshowstationiduuid--",level:5},{value:'<code>Like.<b>show</b></code><Bullet></Bullet><code>Show!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likeshowshow---",level:4},{value:'<code>Like.<b>showId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likeshowidstring---",level:4},{value:'<code>Like.<b>showPbsId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likeshowpbsidstring--",level:4},{value:'<code>Like.<b>type</b></code><Bullet></Bullet><code>LikeType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"liketypeliketype---",level:4},{value:'<code>Like.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likeupdatedatdatetime---",level:4},{value:'<code>Like.<b>viewer</b></code><Bullet></Bullet><code>Viewer!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likeviewerviewer---",level:4},{value:'<code>Like.<b>viewerId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likevieweridstring---",level:4},{value:'<code>Like.<b>viewerPbsAccountId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"likeviewerpbsaccountidstring--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:'Viewer content reaction ("like" or "dislike").'}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type Like {\n  createdAt: DateTime!\n  id: String!\n  normalizedShow(\n    country: CountryCode\n    stationId: UUID\n  ): NormalizedShow\n  show: Show!\n  showId: String!\n  showPbsId: String\n  type: LikeType!\n  updatedAt: DateTime!\n  viewer: Viewer!\n  viewerId: String!\n  viewerPbsAccountId: String\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"likecreatedatdatetime---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likeidstring---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likenormalizedshownormalizedshow--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"normalizedShow"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/objects/normalized-show",children:(0,d.jsx)(s.code,{children:"NormalizedShow"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.h5,{id:"likenormalizedshowcountrycountrycode--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.normalizedShow.",(0,d.jsx)("b",{children:"country"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/country-code",children:(0,d.jsx)(s.code,{children:"CountryCode"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n"]}),"\n",(0,d.jsxs)(s.h5,{id:"likenormalizedshowstationiduuid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.normalizedShow.",(0,d.jsx)("b",{children:"stationId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/uuid",children:(0,d.jsx)(s.code,{children:"UUID"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likeshowshow---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"show"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/objects/show",children:(0,d.jsx)(s.code,{children:"Show!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likeshowidstring---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"showId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likeshowpbsidstring--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"showPbsId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"liketypeliketype---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"type"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/enums/like-type",children:(0,d.jsx)(s.code,{children:"LikeType!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likeupdatedatdatetime---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likeviewerviewer---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"viewer"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/objects/viewer",children:(0,d.jsx)(s.code,{children:"Viewer!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likevieweridstring---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"viewerId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"likeviewerpbsaccountidstring--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Like.",(0,d.jsx)("b",{children:"viewerPbsAccountId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"../../../graphql-api/consumer-api/mutations/create-like",children:(0,d.jsx)(s.code,{children:"createLike"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/consumer-api/mutations/delete-like",children:(0,d.jsx)(s.code,{children:"deleteLike"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/admin-api/queries/like",children:(0,d.jsx)(s.code,{children:"like"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/admin-api/queries/likes",children:(0,d.jsx)(s.code,{children:"likes"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/consumer-api/mutations/update-like",children:(0,d.jsx)(s.code,{children:"updateLike"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"../../../graphql-api/consumer-api/queries/viewer-likes",children:(0,d.jsx)(s.code,{children:"viewerLikes"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"../../../graphql-api/references/objects/viewer",children:(0,d.jsx)(s.code,{children:"Viewer"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>n,x:()=>l});var d=a(63696);const r={},c=d.createContext(r);function n(e){const s=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(c.Provider,{value:s},e.children)}}}]);