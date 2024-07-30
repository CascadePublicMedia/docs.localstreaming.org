"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6493],{86770:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>h,Bullet:()=>t,Details:()=>f,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>b});var i=d(62540),r=d(43023),l=d(63696);const s={id:"normalized-video-file",title:"NormalizedVideoFile"},n=void 0,c={id:"graphql-api/references/objects/normalized-video-file",title:"NormalizedVideoFile",description:"Information about video source file.",source:"@site/docs/graphql-api/references/objects/normalized-video-file.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/normalized-video-file",permalink:"/graphql-api/references/objects/normalized-video-file",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"normalized-video-file",title:"NormalizedVideoFile"},sidebar:"graphqlSidebar",previous:{title:"NormalizedVideoCaptionFile",permalink:"/graphql-api/references/objects/normalized-video-caption-file"},next:{title:"NormalizedVideoFor",permalink:"/graphql-api/references/objects/normalized-video-for"}},o={},t=()=>{const e={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,r.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:a,children:d,startOpen:s=!1})=>{const n={details:"details",summary:"summary",...(0,r.R)()},[c,o]=(0,l.useState)(s);return(0,i.jsxs)(n.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&d]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>NormalizedVideoFile.<b>bitrate</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofilebitrateint--",level:4},{value:'<code>NormalizedVideoFile.<b>fairplayCertificate</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofilefairplaycertificatestring--",level:4},{value:'<code>NormalizedVideoFile.<b>fairplayLicense</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofilefairplaylicensestring--",level:4},{value:'<code>NormalizedVideoFile.<b>isDrmProtected</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofileisdrmprotectedboolean--",level:4},{value:'<code>NormalizedVideoFile.<b>playreadyLicense</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofileplayreadylicensestring--",level:4},{value:'<code>NormalizedVideoFile.<b>profile</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofileprofilestring--",level:4},{value:'<code>NormalizedVideoFile.<b>type</b></code><Bullet></Bullet><code>NormalizedVideoFileType</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofiletypenormalizedvideofiletype--",level:4},{value:'<code>NormalizedVideoFile.<b>url</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofileurlstring--",level:4},{value:'<code>NormalizedVideoFile.<b>widevineLicense</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"normalizedvideofilewidevinelicensestring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Information about video source file."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-graphql",children:"type NormalizedVideoFile {\n  bitrate: Int\n  fairplayCertificate: String\n  fairplayLicense: String\n  isDrmProtected: Boolean\n  playreadyLicense: String\n  profile: String\n  type: NormalizedVideoFileType\n  url: String\n  widevineLicense: String\n}\n"})}),"\n",(0,i.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofilebitrateint--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"bitrate"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/int",children:(0,i.jsx)(a.code,{children:"Int"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"Video bitrate. Only set for MP4 files."}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofilefairplaycertificatestring--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"fairplayCertificate"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,i.jsx)(a.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"Apple FairPlay encryption certificate URL."}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofilefairplaylicensestring--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"fairplayLicense"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,i.jsx)(a.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"Apple FairPlay license URL."}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofileisdrmprotectedboolean--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"isDrmProtected"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/boolean",children:(0,i.jsx)(a.code,{children:"Boolean"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"Whether the video source file is DRM protected."}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofileplayreadylicensestring--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"playreadyLicense"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,i.jsx)(a.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"PlayReady DRM license URL."}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofileprofilestring--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"profile"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,i.jsx)(a.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofiletypenormalizedvideofiletype--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"type"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/enums/normalized-video-file-type",children:(0,i.jsx)(a.code,{children:"NormalizedVideoFileType"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofileurlstring--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"url"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,i.jsx)(a.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"Video source file URL."}),"\n",(0,i.jsxs)(a.h4,{id:"normalizedvideofilewidevinelicensestring--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["NormalizedVideoFile.",(0,i.jsx)("b",{children:"widevineLicense"})]})}),(0,i.jsx)(t,{}),(0,i.jsx)(a.a,{href:"/graphql-api/references/scalars/string",children:(0,i.jsx)(a.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,i.jsx)(a.p,{children:"Widevine DRM license URL."}),"\n",(0,i.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/graphql-api/references/objects/normalized-pbs-video-playback-files",children:(0,i.jsx)(a.code,{children:"NormalizedPbsVideoPlaybackFiles"})}),"  ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},43023:(e,a,d)=>{d.d(a,{R:()=>s,x:()=>n});var i=d(63696);const r={},l=i.createContext(r);function s(e){const a=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:a},e.children)}}}]);