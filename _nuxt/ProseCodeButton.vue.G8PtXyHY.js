import{bs as d,bt as u,d as l,$ as b,r as m,E as _,Q as y,am as f,Z as C}from"./entry.YzgjhfdX.js";function v(n={}){const{copy:c,isSupported:i}=d(),o=u();function r(e,t={},a={}){i&&c(e).then(()=>{!t.title&&!t.description||o.add({...t,...n})},function(p){o.add({...a,description:a.description||p.message,...n})})}return{copy:r}}const k=l({__name:"ProseCodeButton",props:{code:{type:String,required:!0}},setup(n){const c=n,i={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:o}=b("content.prose.code.button",void 0,i,void 0,!0),r=v({timeout:2e3}),e=m(o.value.icon.copy);function t(){r.copy(c.code,{title:"Copied to clipboard!"}),e.value=o.value.icon.copied,setTimeout(()=>{e.value=o.value.icon.copy},2e3)}return(a,p)=>{const s=C;return _(),y(s,{icon:f(e),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:t},null,8,["icon"])}}});export{k as _};