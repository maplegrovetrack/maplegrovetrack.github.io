import{d as _,ba as k,$ as w,a0 as C,r as I,c as B,E as s,G as o,M as u,I as l,am as e,F as v,P as y,U as S,Q as f,L as A,J as D,a4 as N,a6 as U,aY as $,A as z}from"./entry.sPSytBV8.js";const E=["onClick"],L=_({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(g){const h={wrapper:"relative my-5 space-y-6",header:"flex items-center relative",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},m=g,i=k(),{ui:r,attrs:x}=w("content.codeGroup",void 0,h,C(m,"class"),!0),p=I(m.selectedIndex||0),b=B(()=>{var d;return((d=i.default)==null?void 0:d.call(i).map((n,c)=>{var t,a;return{index:c,label:((t=n.props)==null?void 0:t.label)||`${c}`,icon:(a=n.props)==null?void 0:a.icon,component:n}}))||[]});return(d,n)=>{const c=z;return s(),o("div",S({class:e(r).wrapper},e(x)),[u("div",{class:l(e(r).header)},[u("div",{class:l(e(r).border)},null,2),(s(!0),o(v,null,y(e(b),(t,a)=>(s(),o("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:F=>p.value=a},[t.icon?(s(),f(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):A("",!0),u("span",null,D(t.label),1)],10,E))),128))],2),(s(!0),o(v,null,y(e(b),(t,a)=>N((s(),o("div",{key:a},[(s(),f($(t.component)))])),[[U,e(p)===a]])),128))],16)}}});export{L as default};