"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[494],{62785:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>x,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>b});var d=a(62540),r=a(43023),n=a(63696);const c={id:"user",title:"User"},t=void 0,l={id:"graphql-api/references/objects/user",title:"User",description:"System admin user.",source:"@site/docs/graphql-api/references/objects/user.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/user",permalink:"/graphql-api/references/objects/user",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"user",title:"User"},sidebar:"graphqlSidebar",previous:{title:"Station",permalink:"/graphql-api/references/objects/station"},next:{title:"Video",permalink:"/graphql-api/references/objects/video"}},i={},o=()=>{const e={span:"span",...(0,r.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,r.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,r.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:a,startOpen:c=!1})=>{const t={details:"details",summary:"summary",...(0,r.R)()},[l,i]=(0,n.useState)(c);return(0,d.jsxs)(t.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(t.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>User.<b>active</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useractiveboolean--",level:4},{value:'<code>User.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"usercreatedatdatetime---",level:4},{value:'<code>User.<b>email</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useremailstring---",level:4},{value:'<code>User.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useridstring---",level:4},{value:'<code>User.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"usernamestring--",level:4},{value:'<code>User.<b>nickname</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"usernicknamestring--",level:4},{value:'<code>User.<b>pictureUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userpictureurlstring--",level:4},{value:'<code>User.<b>resetToken</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userresettokenstring--",level:4},{value:'<code>User.<b>resetTokenExpiresAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userresettokenexpiresatdatetime--",level:4},{value:'<code>User.<b>roles</b></code><Bullet></Bullet><code>[UserRole]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userrolesuserrole---",level:4},{value:'<code>User.<b>station</b></code><Bullet></Bullet><code>Station</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstationstation--",level:4},{value:'<code>User.<b>stationId</b></code><Bullet></Bullet><code>UUID</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userstationiduuid--",level:4},{value:'<code>User.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userupdatedatdatetime---",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function j(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"System admin user."}),"\n",(0,d.jsxs)(s.p,{children:['Separate from an end user "',(0,d.jsx)(s.code,{children:"Viewer"}),'".']}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type User {\n  active: Boolean\n  createdAt: DateTime!\n  email: String!\n  id: String!\n  name: String\n  nickname: String\n  pictureUrl: String\n  resetToken: String\n  resetTokenExpiresAt: DateTime\n  roles: [UserRole]!\n  station: Station\n  stationId: UUID\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"useractiveboolean--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"active"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/boolean",children:(0,d.jsx)(s.code,{children:"Boolean"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"usercreatedatdatetime---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"useremailstring---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"email"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"useridstring---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"id"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"usernamestring--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"name"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"usernicknamestring--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"nickname"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"userpictureurlstring--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"pictureUrl"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"userresettokenstring--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"resetToken"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"userresettokenexpiresatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"resetTokenExpiresAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"userrolesuserrole---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"roles"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/enums/user-role",children:(0,d.jsx)(s.code,{children:"[UserRole]!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"enum"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"userstationstation--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"station"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/objects/station",children:(0,d.jsx)(s.code,{children:"Station"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"userstationiduuid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"stationId"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/uuid",children:(0,d.jsx)(s.code,{children:"UUID"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsxs)(s.h4,{id:"userupdatedatdatetime---",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"scalar"})," ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,d.jsx)(s.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/graphql-api/admin-api/mutations/create-station-user",children:(0,d.jsx)(s.code,{children:"createStationUser"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/admin-api/mutations/create-user",children:(0,d.jsx)(s.code,{children:"createUser"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/admin-api/mutations/deactivate-user",children:(0,d.jsx)(s.code,{children:"deactivateUser"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/admin-api/mutations/delete-user",children:(0,d.jsx)(s.code,{children:"deleteUser"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/admin-api/mutations/update-station-user",children:(0,d.jsx)(s.code,{children:"updateStationUser"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/admin-api/mutations/update-user",children:(0,d.jsx)(s.code,{children:"updateUser"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"mutation"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/admin-api/queries/user",children:(0,d.jsx)(s.code,{children:"user"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"query"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/admin-api/queries/users",children:(0,d.jsx)(s.code,{children:"users"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/graphql-api/references/objects/content-lock",children:(0,d.jsx)(s.code,{children:"ContentLock"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/graphql-api/references/objects/station",children:(0,d.jsx)(s.code,{children:"Station"})}),"  ",(0,d.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>t});var d=a(63696);const r={},n=d.createContext(r);function c(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);