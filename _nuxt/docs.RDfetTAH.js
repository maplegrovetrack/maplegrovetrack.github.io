import{d as h,$ as k,a0 as f,E as u,G as g,M as r,I as i,am as e,S as l,L as y,a5 as p,U as $,by as C,aB as w,Q as x,R as c,bz as A,bA as N,bB as U,bC as B}from"./entry.JTJN3PA-.js";import{_ as z}from"./Page.vue.fjq-LHVv.js";const S={class:"relative"},V=h({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(d){const a={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},o=d,{ui:t,attrs:n}=k("aside",f(o,"ui"),a,f(o,"class"),!0);return(s,_)=>{const m=C;return u(),g("aside",$({class:e(t).wrapper},e(n)),[r("div",S,[s.$slots.top?(u(),g("div",{key:0,class:i(e(t).top.wrapper)},[r("div",{class:i(e(t).top.header)},null,2),r("div",{class:i(e(t).top.body)},[l(s.$slots,"top")],2),r("div",{class:i(e(t).top.footer)},null,2)],2)):y("",!0),l(s.$slots,"links",{},()=>[p(m,{links:d.links},null,8,["links"])]),l(s.$slots,"default"),l(s.$slots,"bottom")])],16)}}}),I=h({__name:"docs",async setup(d){let a,o;const t=([a,o]=w(()=>A()),a=await a,o(),a);return(n,s)=>{const _=B,m=V,v=z,b=N;return u(),x(b,null,{default:c(()=>[p(v,null,{left:c(()=>[p(m,null,{default:c(()=>[p(_,{links:("mapContentNavigation"in n?n.mapContentNavigation:e(U))(e(t))},null,8,["links"])]),_:1})]),default:c(()=>[l(n.$slots,"default")]),_:3})]),_:3})}}});export{I as default};