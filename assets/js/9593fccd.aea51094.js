"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[805],{8731:(e,d,s)=>{s.r(d),s.d(d,{Badge:()=>h,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>n,default:()=>f,frontMatter:()=>c,metadata:()=>t,toc:()=>x});var a=s(62540),o=s(43023),r=s(63696);const c={id:"video",title:"Video"},n=void 0,t={id:"graphql-api/references/objects/video",title:"Video",description:"Global video metadata.",source:"@site/docs/graphql-api/references/objects/video.mdx",sourceDirName:"graphql-api/references/objects",slug:"/graphql-api/references/objects/video",permalink:"/graphql-api/references/objects/video",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"video",title:"Video"},sidebar:"graphqlSidebar",previous:{title:"User",permalink:"/graphql-api/references/objects/user"},next:{title:"Viewer",permalink:"/graphql-api/references/objects/viewer"}},i={},l=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})}),g=e=>(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]}),h=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:e.class,children:e.text})}),b=({dataOpen:e,dataClose:d,children:s,startOpen:o=!1})=>{const[c,n]=(0,r.useState)(o);return(0,a.jsxs)("details",{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)("summary",{onClick:e=>{e.preventDefault(),n((e=>!e))},style:{listStyle:"none"},children:c?e:d}),c&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Video.<b>contentAdvisory</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videocontentadvisorystring--",level:4},{value:'<code>Video.<b>contentDescriptors</b></code><Bullet></Bullet><code>[ContentDescriptor]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videocontentdescriptorscontentdescriptor---",level:4},{value:'<code>Video.<b>contentRating</b></code><Bullet></Bullet><code>ContentRating</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videocontentratingcontentrating--",level:4},{value:'<code>Video.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videocreatedatdatetime---",level:4},{value:'<code>Video.<b>featuredPublicVideoForShow</b></code><Bullet></Bullet><code>Show</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videofeaturedpublicvideoforshowshow--",level:4},{value:'<code>Video.<b>featuredPublicVideoForStationShow</b></code><Bullet></Bullet><code>StationShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videofeaturedpublicvideoforstationshowstationshow--",level:4},{value:'<code>Video.<b>featuredVideoForShow</b></code><Bullet></Bullet><code>Show</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videofeaturedvideoforshowshow--",level:4},{value:'<code>Video.<b>featuredVideoForStationShow</b></code><Bullet></Bullet><code>StationShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videofeaturedvideoforstationshowstationshow--",level:4},{value:'<code>Video.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videoidstring---",level:4},{value:'<code>Video.<b>images</b></code><Bullet></Bullet><code>[JSON]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videoimagesjson---",level:4},{value:'<code>Video.<b>longDescription</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videolongdescriptionstring--",level:4},{value:'<code>Video.<b>pbsVideo</b></code><Bullet></Bullet><code>PbsVideo</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videopbsvideopbsvideo--",level:4},{value:'<code>Video.<b>pbsVideoPbsId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videopbsvideopbsidstring--",level:4},{value:'<code>Video.<b>shortDescription</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videoshortdescriptionstring--",level:4},{value:'<code>Video.<b>show</b></code><Bullet></Bullet><code>Show!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videoshowshow---",level:4},{value:'<code>Video.<b>showId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videoshowidstring---",level:4},{value:'<code>Video.<b>stationVideos</b></code><Bullet></Bullet><code>[StationVideo]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videostationvideosstationvideo---",level:4},{value:'<code>Video.<b>title</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videotitlestring--",level:4},{value:'<code>Video.<b>trailerForShow</b></code><Bullet></Bullet><code>Show</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videotrailerforshowshow--",level:4},{value:'<code>Video.<b>trailerForStationShow</b></code><Bullet></Bullet><code>StationShow</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videotrailerforstationshowstationshow--",level:4},{value:'<code>Video.<b>tvScheduleIds</b></code><Bullet></Bullet><code>[String]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videotvscheduleidsstring---",level:4},{value:'<code>Video.<b>upNextDuration</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videoupnextdurationint--",level:4},{value:'<code>Video.<b>upNextStart</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videoupnextstartint--",level:4},{value:'<code>Video.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"videoupdatedatdatetime---",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function j(e){const d={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.p,{children:"Global video metadata."}),"\n",(0,a.jsx)(d.p,{children:"Overrides source metadata."}),"\n",(0,a.jsxs)(d.p,{children:["More detailed documentation about fields used from this type is available on the ",(0,a.jsx)(d.code,{children:"NormalizedVideo"})," type."]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-graphql",children:"type Video {\n  contentAdvisory: String\n  contentDescriptors: [ContentDescriptor]!\n  contentRating: ContentRating\n  createdAt: DateTime!\n  featuredPublicVideoForShow: Show\n  featuredPublicVideoForStationShow: StationShow\n  featuredVideoForShow: Show\n  featuredVideoForStationShow: StationShow\n  id: String!\n  images: [JSON]!\n  longDescription: String\n  pbsVideo: PbsVideo\n  pbsVideoPbsId: String\n  shortDescription: String\n  show: Show!\n  showId: String!\n  stationVideos: [StationVideo]!\n  title: String\n  trailerForShow: Show\n  trailerForStationShow: StationShow\n  tvScheduleIds: [String]!\n  upNextDuration: Int\n  upNextStart: Int\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,a.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(d.h4,{id:"videocontentadvisorystring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"contentAdvisory"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videocontentdescriptorscontentdescriptor---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"contentDescriptors"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/enums/content-descriptor",children:(0,a.jsx)(d.code,{children:"[ContentDescriptor]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videocontentratingcontentrating--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"contentRating"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/enums/content-rating",children:(0,a.jsx)(d.code,{children:"ContentRating"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videocreatedatdatetime---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videofeaturedpublicvideoforshowshow--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"featuredPublicVideoForShow"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/show",children:(0,a.jsx)(d.code,{children:"Show"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videofeaturedpublicvideoforstationshowstationshow--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"featuredPublicVideoForStationShow"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/station-show",children:(0,a.jsx)(d.code,{children:"StationShow"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videofeaturedvideoforshowshow--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"featuredVideoForShow"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/show",children:(0,a.jsx)(d.code,{children:"Show"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videofeaturedvideoforstationshowstationshow--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"featuredVideoForStationShow"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/station-show",children:(0,a.jsx)(d.code,{children:"StationShow"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videoidstring---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videoimagesjson---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"images"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/json",children:(0,a.jsx)(d.code,{children:"[JSON]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videolongdescriptionstring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"longDescription"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videopbsvideopbsvideo--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"pbsVideo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/pbs-video",children:(0,a.jsx)(d.code,{children:"PbsVideo"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(d.p,{children:"Source video from PBS Media Manager."}),"\n",(0,a.jsxs)(d.h4,{id:"videopbsvideopbsidstring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"pbsVideoPbsId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videoshortdescriptionstring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"shortDescription"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videoshowshow---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"show"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/show",children:(0,a.jsx)(d.code,{children:"Show!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videoshowidstring---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"showId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videostationvideosstationvideo---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"stationVideos"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/station-video",children:(0,a.jsx)(d.code,{children:"[StationVideo]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videotitlestring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"title"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videotrailerforshowshow--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"trailerForShow"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/show",children:(0,a.jsx)(d.code,{children:"Show"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videotrailerforstationshowstationshow--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"trailerForStationShow"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/station-show",children:(0,a.jsx)(d.code,{children:"StationShow"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videotvscheduleidsstring---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"tvScheduleIds"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/string",children:(0,a.jsx)(d.code,{children:"[String]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videoupnextdurationint--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"upNextDuration"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/int",children:(0,a.jsx)(d.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videoupnextstartint--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"upNextStart"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/int",children:(0,a.jsx)(d.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsxs)(d.h4,{id:"videoupdatedatdatetime---",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Video.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"references"})]}),"\n",(0,a.jsx)(d.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/graphql-api/admin-api/mutations/create-video",children:(0,a.jsx)(d.code,{children:"createVideo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/admin-api/mutations/delete-video",children:(0,a.jsx)(d.code,{children:"deleteVideo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/admin-api/mutations/update-video",children:(0,a.jsx)(d.code,{children:"updateVideo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"mutation"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/admin-api/queries/video",children:(0,a.jsx)(d.code,{children:"video"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"query"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/admin-api/queries/videos",children:(0,a.jsx)(d.code,{children:"videos"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,a.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/collection-item",children:(0,a.jsx)(d.code,{children:"CollectionItem"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/pbs-video",children:(0,a.jsx)(d.code,{children:"PbsVideo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/show",children:(0,a.jsx)(d.code,{children:"Show"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/station-show",children:(0,a.jsx)(d.code,{children:"StationShow"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/station-video",children:(0,a.jsx)(d.code,{children:"StationVideo"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(d.a,{href:"/graphql-api/references/objects/watch-history",children:(0,a.jsx)(d.code,{children:"WatchHistory"})}),"  ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:d}={...(0,o.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},43023:(e,d,s)=>{s.d(d,{R:()=>c,x:()=>n});var a=s(63696);const o={},r=a.createContext(o);function c(e){const d=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function n(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(r.Provider,{value:d},e.children)}}}]);