import{_ as S}from"./SharedCalendar.vue.TzWCKm8U.js";import{_ as k}from"./PracticeCallout.vue.s5sfD1ES.js";import{d as v,aI as e,r as J,c as u,E as s,G as r,M as f,a5 as _,am as t,J as w,L as C,F as P,P as b}from"./entry.YzgjhfdX.js";import{a as h,u as E}from"./use-practices-store.4tWh2Gus.js";const O=()=>({key:"weight-room-schedule",dot:"blue",dates:[...h().map(n=>n.date)]}),R=f("h2",null,"Practices",-1),T={key:0},q=v({__name:"PracticeCalendarView",setup(n){const c=E(),i=e.now().startOf("day"),l=i.toJSDate(),a=J(l),p=u(()=>[{key:"today",highlight:{fillMode:"solid"},dates:l},!e.fromJSDate(a.value).startOf("day").equals(i)&&{key:"selected",highlight:{fillMode:"outline"},dates:a.value},c.weightRoom&&O()]),d=u(()=>[...(c.weightRoom?h():[]).filter(o=>e.fromJSDate(o.date).startOf("day").equals(e.fromJSDate(a.value)))]),y=({event:o})=>{a.value=e.fromJSDate(o.date).startOf("day").toJSDate()};return(o,V)=>{const g=S,D=k;return s(),r("div",null,[f("div",null,[_(g,{attributes:t(p),onDayclick:y},null,8,["attributes"])]),R,t(d).length<1?(s(),r("div",T," There are no practices for "+w(t(e).fromJSDate(t(a)).toLocaleString(t(e).DATE_HUGE))+". ",1)):C("",!0),(s(!0),r(P,null,b(t(d),m=>(s(),r("div",{key:m.key},[_(D,{practice:m},null,8,["practice"])]))),128))])}}});export{q as _};