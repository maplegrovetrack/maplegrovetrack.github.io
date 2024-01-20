import{u as k,d as A,c as y,h as N,r as S,o as B,a as z,b as E,e as I,f as L,g as w,i as T,j,p as U,k as V,n as D,l as F,m as P,q as H,w as M,s as O,t as $,v as G,x as g,y as _,z as Q,A as W,B as X,C as J,D as K}from"./entry.le89JK3U.js";import{u as Y}from"./vue.f36acd1f.qY6bSmjE.js";import{_ as Z}from"./_plugin-vue_export-helper.x3n3nnut.js";async function R(t,a=k()){const{path:i,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(i)))return;const n=a._preloadPromises=a._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>R(t,a));a._routePreloaded.add(i);const s=e.map(u=>{var r;return(r=u.components)==null?void 0:r.default}).filter(u=>typeof u=="function");for(const u of s){const r=Promise.resolve(u()).catch(()=>{}).finally(()=>n.splice(n.indexOf(r)));n.push(r)}await Promise.all(n)}const ee=(...t)=>t.find(a=>a!==void 0),te="noopener noreferrer";function ae(t){const a=t.componentName||"NuxtLink",i=(e,n)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return C(e,t.trailingSlash);const s="path"in e?e.path:n(e).path;return{...e,name:void 0,path:C(s,t.trailingSlash)}};return A({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:n}){const s=k(),u=F(),r=y(()=>{const o=e.to||e.href||"";return i(o,s.resolve)}),f=y(()=>typeof r.value=="string"&&N(r.value,{acceptRelative:!0})),h=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof r.value=="object"?!1:r.value===""||f.value),b=S(!1),v=S(null),q=o=>{var d;v.value=e.custom?(d=o==null?void 0:o.$el)==null?void 0:d.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!oe()){const d=P();let m,l=null;B(()=>{const x=ne();z(()=>{m=E(()=>{var p;(p=v==null?void 0:v.value)!=null&&p.tagName&&(l=x.observe(v.value,async()=>{l==null||l(),l=null;const c=typeof r.value=="string"?r.value:s.resolve(r.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",c).catch(()=>{}),!h.value&&R(r.value,s).catch(()=>{})]),b.value=!0}))})})}),I(()=>{m&&L(m),l==null||l(),l=null})}return()=>{var x,p;if(!h.value){const c={ref:q,to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(b.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),w(T("RouterLink"),c,n.default)}const o=typeof r.value=="object"?((x=s.resolve(r.value))==null?void 0:x.href)??null:r.value&&!e.external&&!f.value?i(j(u.app.baseURL,r.value),s.resolve):r.value||null,d=e.target||null,m=e.noRel?null:ee(e.rel,t.externalRelAttribute,o?te:"")||null,l=()=>H(o,{replace:e.replace});return e.custom?n.default?n.default({href:o,navigate:l,get route(){if(!o)return;const c=U(o);return{path:c.pathname,fullPath:c.pathname,get query(){return V(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:m,target:d,isExternal:h.value,isActive:!1,isExactActive:!1}):null:w("a",{ref:v,href:o,rel:m,target:d},(p=n.default)==null?void 0:p.call(n))}}})}const re=ae(D);function C(t,a){const i=a==="append"?M:O;return N(t)&&!t.startsWith("http")?t:i(t,!0)}function ne(){const t=P();if(t._observer)return t._observer;let a=null;const i=new Map,e=(s,u)=>(a||(a=new IntersectionObserver(r=>{for(const f of r){const h=i.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&h&&h()}})),i.set(s,u),a.observe(s),()=>{i.delete(s),a.unobserve(s),i.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function oe(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const se=t=>(J("data-v-ccd3db62"),t=t(),K(),t),ie={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},le=se(()=>g("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ce={class:"max-w-520px text-center z-20"},ue=["textContent"],de=["textContent"],fe={class:"w-full flex items-center justify-center"},he={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return Y({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(i,e)=>{const n=re;return $(),G("div",ie,[le,g("div",ce,[g("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:_(t.statusCode)},null,8,ue),g("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:_(t.description)},null,8,de),g("div",fe,[Q(n,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:W(()=>[X(_(t.backHome),1)]),_:1})])])])}}},ge=Z(he,[["__scopeId","data-v-ccd3db62"]]);export{ge as default};
