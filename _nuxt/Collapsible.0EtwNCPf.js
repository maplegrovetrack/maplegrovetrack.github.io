import{d as m,ah as d,c as f,$ as b,E as _,Q as g,R as t,a5 as s,am as a,bd as v,I as o,M as y,J as l,be as h,bf as x,A as C}from"./entry.sPSytBV8.js";import{r as k}from"./slot.4CVFRtqI.js";import"./node.uMQX-T_c.js";const V=m({__name:"Collapsible",props:{name:{type:String,default:"properties"}},setup(i){const c=d(),p=f(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:c.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:e}=b("prose.collapsible",void 0,p,void 0,!0);return(n,w)=>{const u=C;return _(),g(a(x),null,{default:t(({open:r})=>[s(a(v),{class:o(a(e).button.base)},{default:t(()=>[s(u,{name:a(e).button.icon.name,class:o([a(e).button.icon.base,r?a(e).button.icon.active:a(e).button.icon.inactive])},null,8,["name","class"]),y("span",null,l(r?"Hide":"Show")+" "+l(i.name),1)]),_:2},1032,["class"]),s(a(h),{class:o(a(e).panel)},{default:t(()=>[k(n.$slots,"default",{unwrap:"p",use:n.$slots.default})]),_:3},8,["class"])]),_:3})}}});export{V as default};