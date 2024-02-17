import{d as S,$ as O,a0 as f,E as r,G as p,I as u,am as e,S as x,W as D,J as A,L as y,M as h,a5 as $,F as H,P as E,U as w,A as T,Q as v,Z as ee,R as I,ap as te,ah as N,c as P,as as M,at as ae,B as ne,au as se,r as B,e as re,av as oe,aw as ie,ag as le,ax as ce,ay as ue,az as de,aA as pe,aB as V,aC as ge,aD as me,a7 as F,aE as G,aF as ye,aG as J,aH as fe}from"./entry.YzgjhfdX.js";import ke from"./ContentRenderer.0LxGBewh.js";import{_ as he}from"./Divider.Q2CruGWq.js";import{_ as ve}from"./Page.vue.NyrZSUTz.js";import"./ContentRendererMarkdown.vue.yDvJkmQ8.js";const be={class:"flex flex-col lg:flex-row items-start gap-6"},xe={class:"flex-1"},_e=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const l={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},c=t,{ui:s,attrs:n}=O("page.header",f(c,"ui"),l,f(c,"class"),!0);return(a,o)=>{var g;const i=T,m=ee;return r(),p("div",w({class:e(s).wrapper},e(n)),[t.headline||a.$slots.headline?(r(),p("div",{key:0,class:u(e(s).headline)},[x(a.$slots,"headline",{},()=>[D(A(t.headline),1)])],2)):y("",!0),h("div",be,[t.icon||a.$slots.icon?(r(),p("div",{key:0,class:u(e(s).icon.wrapper)},[x(a.$slots,"icon",{},()=>[$(i,{name:t.icon,class:u(e(s).icon.base)},null,8,["name","class"])])],2)):y("",!0),h("div",xe,[h("div",{class:u(e(s).container)},[h("h1",{class:u(e(s).title)},[x(a.$slots,"title",{},()=>[D(A(t.title),1)])],2),(g=t.links)!=null&&g.length||a.$slots.links?(r(),p("div",{key:0,class:u(e(s).links)},[x(a.$slots,"links",{},()=>[(r(!0),p(H,null,E(t.links,(k,d)=>(r(),v(m,w({key:d},{...k,target:k.target||"_blank",color:k.color||"white"},{onClick:k.click}),null,16,["onClick"]))),128))])],2)):y("",!0)],2),t.description||a.$slots.description?(r(),p("p",{key:0,class:u(e(s).description)},[x(a.$slots,"description",{},()=>[D(A(t.description),1)])],2)):y("",!0),x(a.$slots,"default")])])],16)}}}),we=S({inheritAttrs:!1,__name:"DocsSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const l={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},c=t,{ui:s,attrs:n}=O("docs.surround.link",f(c,"ui"),l,f(c,"class"),!0);return(a,o)=>{const i=T,m=te;return r(),v(m,w({to:t.link._path,class:e(s).wrapper},e(n)),{default:I(()=>[t.icon||t.link.icon?(r(),p("div",{key:0,class:u(e(s).icon.wrapper)},[$(i,{name:t.icon||t.link.icon,class:u(e(s).icon.base)},null,8,["name","class"])],2)):y("",!0),h("p",{class:u(e(s).title)},A(t.link.title),3),h("p",{class:u(e(s).description)},A(t.link.description),3)]),_:1},16,["to","class"])}}}),$e={key:1,class:"hidden sm:block"},Ae=S({inheritAttrs:!1,__name:"DocsSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const l={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},c=t,{ui:s,attrs:n}=O("docs.surround",f(c,"ui"),l,f(c,"class"),!0),[a,o]=c.surround||[];return(i,m)=>{const g=we;return r(),p("div",w({class:e(s).wrapper},e(n)),[e(a)?(r(),v(g,{key:0,link:e(a),ui:e(s).link,icon:e(s).icon.prev},null,8,["link","ui","icon"])):(r(),p("span",$e," ")),e(o)?(r(),v(g,{key:2,link:e(o),ui:e(s).link,icon:e(s).icon.next,class:"text-right"},null,8,["link","ui","icon"])):y("",!0)],16)}}}),Se=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const l={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},c=t,{ui:s,attrs:n}=O("page.body",f(c,"ui"),l,f(c,"class"),!0);return(a,o)=>(r(),p("div",w({class:[e(s).wrapper,t.prose&&e(s).prose]},e(n)),[x(a.$slots,"default")],16))}}),Ce=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const l=N(),c=P(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:l.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),s=t,{ui:n,attrs:a}=O("page.links",f(s,"ui"),c,f(s,"class"),!0);return(o,i)=>{const m=T,g=ne,k=se;return r(),p("div",w({class:e(n).wrapper},e(a)),[t.title||o.$slots.title?(r(),p("p",{key:0,class:u(e(n).title)},[x(o.$slots,"title",{},()=>[D(A(t.title),1)])],2)):y("",!0),h("div",{class:u(e(n).container)},[x(o.$slots,"default",{},()=>[(r(!0),p(H,null,E(t.links,(d,b)=>(r(),v(k,w({key:b},e(ae)(d),{class:e(n).base,"active-class":e(n).active,"inactive-class":e(n).inactive,onClick:d.click}),{default:I(()=>[d.icon?(r(),v(m,{key:0,name:d.icon,class:u(e(M)(e(n).icon.base,d.iconClass))},null,8,["name","class"])):y("",!0),d.avatar?(r(),v(g,w({key:1},{size:e(n).avatar.size,...d.avatar},{class:e(M)(e(n).avatar.base,d.avatarClass)}),null,16,["class"])):y("",!0),h("span",{class:u(e(n).label)},[D(A(d.label)+" ",1),d.target==="_blank"?(r(),v(m,{key:0,name:e(n).externalIcon.name,class:u(e(n).externalIcon.base)},null,8,["name","class"])):y("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),Ue=()=>{const t=B(),l=B([]),c=B([]),s=a=>{a.forEach(o=>{const i=o.target.id;o.isIntersecting?l.value=[...l.value,i]:l.value=l.value.filter(m=>m!==i)})},n=a=>{a.forEach(o=>{t.value&&t.value.observe(o)})};return re(l,(a,o)=>{a.length===0?c.value=o:c.value=a}),oe(()=>t.value=new IntersectionObserver(s)),ie(()=>{var a;return(a=t.value)==null?void 0:a.disconnect()}),{visibleHeadings:l,activeHeadings:c,updateHeadings:n}},Oe=["href","onClick"],K=S({inheritAttrs:!1,__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:l}){const c={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},s=t,n=l,a=le(),o=ue(),{activeHeadings:i,updateHeadings:m}=Ue(),{ui:g,attrs:k}=O("docs.toc.links",f(s,"ui"),c,f(s,"class"),!0);o.hooks.hookOnce("page:finish",()=>{m([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const d=b=>{const C=encodeURIComponent(b);a.push(`#${C}`),n("move",b)};return(b,C)=>{var U;const L=K;return(U=t.links)!=null&&U.length?(r(),p("ul",w({key:0,class:e(g).wrapper},e(k)),[(r(!0),p(H,null,E(t.links,_=>(r(),p("li",{key:_.text,class:u([e(g).wrapper,_.depth===3&&e(g).depth])},[h("a",{href:`#${_.id}`,class:u([e(g).base,e(i).includes(_.id)?e(g).active:e(g).inactive]),onClick:ce(R=>d(_.id),["prevent"])},A(_.text),11,Oe),_.children?(r(),v(L,{key:0,links:_.children},null,8,["links"])):y("",!0)],2))),128))],16)):y("",!0)}}}),Ie=S({inheritAttrs:!1,__name:"DocsToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const l=N(),c=P(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:l.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),s=t,{ui:n,attrs:a}=O("docs.toc",f(s,"ui"),c,f(s,"class"),!0),o=B(!1);return(i,m)=>{var d,b;const g=T,k=K;return r(),p("nav",w({class:e(n).wrapper},e(a)),[h("div",{class:u([(d=t.links)!=null&&d.length?e(n).container.base:e(n).container.empty])},[x(i.$slots,"top"),(b=t.links)!=null&&b.length?(r(),p("button",{key:0,class:u(e(n).button.base),tabindex:"-1",onClick:m[0]||(m[0]=C=>o.value=!e(o))},[h("span",{class:u(e(n).button.label)},A(t.title),3),$(g,{name:e(n).button.trailingIcon.name,class:u(["lg:!hidden",[e(n).button.trailingIcon.base,e(o)?e(n).button.trailingIcon.active:e(n).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):y("",!0),$(k,{links:t.links,ui:e(n).links,class:u([e(o)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),x(i.$slots,"bottom")],2)],16)}}}),Le={key:1},He=S({__name:"[...slug]",async setup(t){var d,b;let l,c;const s=de(),n=pe(),{toc:a,seo:o}=N(),{data:i}=([l,c]=V(()=>G(s.path,()=>J(s.path).findOne(),"$aROEKgqrzL")),l=await l,c(),l);if(!i.value)throw ge({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:m}=([l,c]=V(()=>G(`${s.path}-surround`,()=>J().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(fe(s.path)))),l=await l,c(),l),g=P(()=>ye(i.value));n.tocLinks=((b=(d=i.value.body)==null?void 0:d.toc)==null?void 0:b.links)||[];const k=P(()=>{var C,L,U;return[((C=a==null?void 0:a.bottom)==null?void 0:C.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${a.bottom.edit}/${(L=i==null?void 0:i.value)==null?void 0:L._file}`,target:"_blank"},...((U=a==null?void 0:a.bottom)==null?void 0:U.links)||[]].filter(Boolean)});return me({titleTemplate:`%s - ${o==null?void 0:o.siteName}`,title:i.value.title,ogTitle:`${i.value.title} - ${o==null?void 0:o.siteName}`,description:i.value.description,ogDescription:i.value.description}),(C,L)=>{var q;const U=_e,_=ke,R=Ae,Q=Se,W=he,Z=Ce,X=Ie,Y=ve;return r(),v(Y,null,F({default:I(()=>[$(U,{title:e(i).title,description:e(i).description,links:e(i).links,headline:e(g)},null,8,["title","description","links","headline"]),$(Q,{prose:""},{default:I(()=>{var j;return[e(i).body?(r(),v(_,{key:0,value:e(i)},null,8,["value"])):y("",!0),(j=e(m))!=null&&j.length?(r(),p("hr",Le)):y("",!0),$(R,{surround:e(m)},null,8,["surround"])]}),_:1})]),_:2},[((q=e(i))==null?void 0:q.toc)!==!1?{name:"right",fn:I(()=>{var j,z;return[$(X,{title:(j=e(a))==null?void 0:j.title,links:e(n).tocLinks},F({_:2},[(z=e(a))!=null&&z.bottom?{name:"bottom",fn:I(()=>[h("div",{class:u(["hidden lg:block space-y-6",{"!mt-6":e(n).tocLinks.length}])},[e(n).tocLinks.length?(r(),v(W,{key:0,type:"dashed"})):y("",!0),$(Z,{title:e(a).bottom.title,links:e(k)},null,8,["title","links"])],2)]),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{He as default};