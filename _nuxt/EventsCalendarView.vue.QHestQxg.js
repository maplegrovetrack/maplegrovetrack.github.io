import{_ as D}from"./SharedCalendar.vue.yKnSEnf2.js";import{_ as S}from"./EventCallout.vue.6DSvkDXK.js";import{d as k,aJ as e,r as J,c as u,E as s,G as n,M as f,a5 as m,am as a,J as g,L as E,F as _,P as C}from"./entry.7uwzeHLW.js";import{u as b}from"./use-event-schedule.MSrm-xlb.js";const w=f("h2",null,"Events",-1),O={key:0},q=k({__name:"EventsCalendarView",setup(T){const r=e.now().startOf("day"),l=r.toJSDate(),o=J(l),c=b(),h=u(()=>[{key:"today",highlight:{fillMode:"solid"},dates:[l]},!e.fromJSDate(o.value).startOf("day").equals(r)&&{key:"selected",highlight:{fillMode:"outline"},dates:[o.value]},{key:"events",dot:"blue",dates:[...c.map(t=>t.date)]}]),d=u(()=>[...c.filter(t=>e.fromJSDate(t.date).startOf("day").equals(e.fromJSDate(o.value)))]),p=({event:t})=>{o.value=e.fromJSDate(t.date).startOf("day").toJSDate()};return(t,V)=>{const v=D,y=S;return s(),n(_,null,[f("div",null,[m(v,{attributes:a(h),onDayclick:p},null,8,["attributes"])]),w,a(d).length<1?(s(),n("div",O," There are no events for "+g(a(e).fromJSDate(a(o)).toLocaleString(a(e).DATE_HUGE))+". ",1)):E("",!0),(s(!0),n(_,null,C(a(d),i=>(s(),n("div",{key:i.id},[m(y,{event:i},null,8,["event"])]))),128))],64)}}});export{q as _};
