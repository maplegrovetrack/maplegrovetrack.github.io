import{k as y,r as V,b as F,c as h,a2 as q,_ as A,X as N,Y as w,d as z,$ as R,a0 as S,as as E,a3 as x,E as b,G as v,M as d,a4 as M,aJ as U,U as j,I as u,S as O,W as D,J as $,L as _,a5 as c,R as p,am as B,aK as J}from"./entry.YzgjhfdX.js";import L from"./WeightRoomBadge.UIJc6xYW.js";import{_ as T}from"./PracticeCalendarView.vue.XY73HZgg.js";import{_ as W}from"./PracticeCalendarListView.vue.gOujEUcq.js";import{_ as X}from"./Tabs.vue.PM4yMlYI.js";import{u as K}from"./use-practices-store.4tWh2Gus.js";import"./SharedCalendar.vue.TzWCKm8U.js";import"./PracticeCallout.vue.s5sfD1ES.js";import"./WeightRoomCallout.LqgFZO2k.js";import"./Callout.vue.XWlU6vB2.js";import"./slot.BqNSofH6.js";import"./node.uMQX-T_c.js";import"./Divider.Q2CruGWq.js";const Y={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}};let C=0;function H(){return C=(C+1)%Number.MAX_SAFE_INTEGER,`nuid-${C}`}const Q=(e,l)=>{const t=y("form-events",void 0),a=y("form-group",void 0),i=y("form-inputs",void 0),n=V(e==null?void 0:e.id);F(()=>{n.value=(e==null?void 0:e.legend)===null||e.legend?void 0:(e==null?void 0:e.id)??H(),a&&(a.inputId.value=n.value,i&&(i.value[a.name.value]=n))});const o=V(!1);function s(r,k){t&&t.emit({type:r,path:k})}function m(){s("blur",a==null?void 0:a.name.value),o.value=!0}function f(){s("change",a==null?void 0:a.name.value)}const g=q(()=>{(o.value||a!=null&&a.eagerValidation.value)&&s("input",a==null?void 0:a.name.value)},300);return{inputId:n,name:h(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:h(()=>{var k;const r=l.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??r??((k=l==null?void 0:l.default)==null?void 0:k.size)}),color:h(()=>{var r;return(r=a==null?void 0:a.error)!=null&&r.value?"red":e==null?void 0:e.color}),emitFormBlur:m,emitFormInput:g,emitFormChange:f}},I=N(w.ui.strategy,w.ui.checkbox,Y),Z=z({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>I.default.color,validator(e){return w.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:l}){const{ui:t,attrs:a}=R("checkbox",S(e,"ui"),I,S(e,"class")),{emitFormChange:i,color:n,name:o,inputId:s}=Q(e),m=h({get(){return e.modelValue},set(r){l("update:modelValue",r)}}),f=r=>{l("change",r),i()},g=h(()=>E(x(t.value.base,t.value.form,t.value.rounded,t.value.background,t.value.border,n.value&&t.value.ring.replaceAll("{color}",n.value),n.value&&t.value.color.replaceAll("{color}",n.value)),e.inputClass));return{ui:t,attrs:a,toggle:m,inputId:s,name:o,inputClass:g,onChange:f}}}),G=["id","name","required","value","disabled","checked","indeterminate"],P=["for"];function ee(e,l,t,a,i,n){return b(),v("div",{class:u(e.ui.wrapper)},[d("div",{class:u(e.ui.container)},[M(d("input",j({id:e.inputId,"onUpdate:modelValue":l[0]||(l[0]=o=>e.toggle=o),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:l[1]||(l[1]=(...o)=>e.onChange&&e.onChange(...o))}),null,16,G),[[U,e.toggle]])],2),e.label||e.$slots.label?(b(),v("div",{key:0,class:u(e.ui.inner)},[d("label",{for:e.inputId,class:u(e.ui.label)},[O(e.$slots,"label",{},()=>[D($(e.label),1)]),e.required?(b(),v("span",{key:0,class:u(e.ui.required)},"*",2)):_("",!0)],10,P),e.help?(b(),v("p",{key:0,class:u(e.ui.help)},$(e.help),3)):_("",!0)],2)):_("",!0)],2)}const ae=A(Z,[["render",ee]]),le={class:"flex items-center mb-3"},te={label:"Calendar View",icon:"i-heroicons-calendar-solid"},ne={label:"List View",icon:"i-heroicons-list-bullet"},ke=z({__name:"PracticeCalendar",setup(e){const l=K();return(t,a)=>{const i=ae,n=L,o=T,s=W,m=X,f=J;return b(),v("div",null,[c(f,null,{default:p(()=>[d("div",null,[d("div",le,[c(i,{id:"weight-room",modelValue:B(l).weightRoom,"onUpdate:modelValue":a[0]||(a[0]=g=>B(l).weightRoom=g),color:"blue",label:"Weight Room"},null,8,["modelValue"]),c(n)]),c(m,null,{default:p(()=>[d("div",te,[c(o)]),d("div",ne,[c(s)])]),_:1})])]),_:1})])}}});export{ke as default};
