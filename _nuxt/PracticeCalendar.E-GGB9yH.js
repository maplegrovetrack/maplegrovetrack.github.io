import{k as h,r as w,b as z,c as k,a2 as F,_ as j,X as q,Y as B,d as U,$ as A,a0 as S,as as N,a3 as R,E as _,G as y,M as d,a4 as E,aJ as O,U as J,I as g,S as M,W as T,J as $,L as V,a5 as l,R as x,am as s,aK as D}from"./entry.vlg8cOE7.js";import L from"./TryoutsBadge.VZOx50QO.js";import W from"./VarsityPracticeBadge.EmoTZcfs.js";import X from"./JVPracticeBadge.xH2L8y84.js";import K from"./WeightRoomBadge.aTG5_Fmm.js";import{_ as Y}from"./PracticeCalendarView.vue.BIbMzREH.js";import{_ as H}from"./PracticeCalendarListView.vue.eF9s8d2t.js";import{_ as Q}from"./Tabs.vue.NCpNC9ZM.js";import{u as Z}from"./use-practices-schedule.1gvtn5km.js";import G from"./SpringBreakPracticesBadge.JMUkOcnP.js";import P from"./OptionalPracticesBadge.-mSos4GC.js";import"./SharedCalendar.vue.1T2ybqQ5.js";import"./PracticeCallout.vue.ZW_rOK9f.js";import"./WeightRoomCallout.4GkFHhdA.js";import"./VarsityPracticeCallout.muvwJ7T1.js";import"./JVPracticeCallout.Mdol-i1S.js";import"./TryoutsCallout.OJfK28q2.js";import"./OptionalPracticeCallout.LbjeDFmK.js";import"./Callout.vue.lYva6TjB.js";import"./slot.1cgTACXb.js";import"./node.uMQX-T_c.js";import"./SpringBreakPracticeCallout.kVZOnUm2.js";import"./Divider.HoZD_RIM.js";const ee={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}};let C=0;function ae(){return C=(C+1)%Number.MAX_SAFE_INTEGER,`nuid-${C}`}const te=(e,t)=>{const o=h("form-events",void 0),a=h("form-group",void 0),n=h("form-inputs",void 0),r=w(e==null?void 0:e.id);z(()=>{r.value=(e==null?void 0:e.legend)===null||e.legend?void 0:(e==null?void 0:e.id)??ae(),a&&(a.inputId.value=r.value,n&&(n.value[a.name.value]=r))});const c=w(!1);function m(i,f){o&&o.emit({type:i,path:f})}function b(){m("blur",a==null?void 0:a.name.value),c.value=!0}function v(){m("change",a==null?void 0:a.name.value)}const p=F(()=>{(c.value||a!=null&&a.eagerValidation.value)&&m("input",a==null?void 0:a.name.value)},300);return{inputId:r,name:k(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:k(()=>{var f;const i=t.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??i??((f=t==null?void 0:t.default)==null?void 0:f.size)}),color:k(()=>{var i;return(i=a==null?void 0:a.error)!=null&&i.value?"red":e==null?void 0:e.color}),emitFormBlur:b,emitFormInput:p,emitFormChange:v}},I=q(B.ui.strategy,B.ui.checkbox,ee),le=U({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>I.default.color,validator(e){return B.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:o,attrs:a}=A("checkbox",S(e,"ui"),I,S(e,"class")),{emitFormChange:n,color:r,name:c,inputId:m}=te(e),b=k({get(){return e.modelValue},set(i){t("update:modelValue",i)}}),v=i=>{t("change",i),n()},p=k(()=>N(R(o.value.base,o.value.form,o.value.rounded,o.value.background,o.value.border,r.value&&o.value.ring.replaceAll("{color}",r.value),r.value&&o.value.color.replaceAll("{color}",r.value)),e.inputClass));return{ui:o,attrs:a,toggle:b,inputId:m,name:c,inputClass:p,onChange:v}}}),oe=["id","name","required","value","disabled","checked","indeterminate"],ne=["for"];function re(e,t,o,a,n,r){return _(),y("div",{class:g(e.ui.wrapper)},[d("div",{class:g(e.ui.container)},[E(d("input",J({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=c=>e.toggle=c),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:t[1]||(t[1]=(...c)=>e.onChange&&e.onChange(...c))}),null,16,oe),[[O,e.toggle]])],2),e.label||e.$slots.label?(_(),y("div",{key:0,class:g(e.ui.inner)},[d("label",{for:e.inputId,class:g(e.ui.label)},[M(e.$slots,"label",{},()=>[T($(e.label),1)]),e.required?(_(),y("span",{key:0,class:g(e.ui.required)},"*",2)):V("",!0)],10,ne),e.help?(_(),y("p",{key:0,class:g(e.ui.help)},$(e.help),3)):V("",!0)],2)):V("",!0)],2)}const ie=j(le,[["render",re]]),se={class:"flex items-center mb-3"},de={class:"flex items-center mb-3"},ue={class:"flex items-center mb-3"},ce={class:"flex items-center mb-3"},me={class:"flex items-center mb-3"},fe={class:"flex items-center mb-3"},ge={label:"Calendar View",icon:"i-heroicons-calendar-solid"},be={label:"List View",icon:"i-heroicons-list-bullet"},Oe=U({__name:"PracticeCalendar",setup(e){const t=Z();return(o,a)=>{const n=ie,r=L,c=W,m=X,b=K,v=Y,p=H,i=Q,f=D;return _(),y("div",null,[l(f,null,{default:x(()=>[d("div",null,[d("div",se,[l(n,{id:"tryouts",modelValue:s(t).tryouts,"onUpdate:modelValue":a[0]||(a[0]=u=>s(t).tryouts=u),color:"yellow",label:"Tryouts"},null,8,["modelValue"]),l(r)]),d("div",de,[l(n,{id:"spring-break",modelValue:s(t).springBreak,"onUpdate:modelValue":a[1]||(a[1]=u=>s(t).springBreak=u),color:"teal",label:"Spring break practice"},null,8,["modelValue"]),l(G)]),d("div",ue,[l(n,{id:"varsity-practice",modelValue:s(t).varsityPractices,"onUpdate:modelValue":a[2]||(a[2]=u=>s(t).varsityPractices=u),color:"red",label:"Varsity practice"},null,8,["modelValue"]),l(c)]),d("div",ce,[l(n,{id:"jv-practice",modelValue:s(t).jvPractices,"onUpdate:modelValue":a[3]||(a[3]=u=>s(t).jvPractices=u),color:"purple",label:"JV practice"},null,8,["modelValue"]),l(m)]),d("div",me,[l(n,{id:"optional",modelValue:s(t).optional,"onUpdate:modelValue":a[4]||(a[4]=u=>s(t).optional=u),color:"orange",label:"Optional practice"},null,8,["modelValue"]),l(P)]),d("div",fe,[l(n,{id:"weight-room",modelValue:s(t).weightRoom,"onUpdate:modelValue":a[5]||(a[5]=u=>s(t).weightRoom=u),color:"blue",label:"Weight Room"},null,8,["modelValue"]),l(b)]),l(i,null,{default:x(()=>[d("div",ge,[l(v)]),d("div",be,[l(p)])]),_:1})])]),_:1})])}}});export{Oe as default};
