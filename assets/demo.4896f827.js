var t=Object.assign;import{D as a,o as r,c as e,b as s,t as o,d as n}from"./app.16821295.js";import"./type.3c860e08.js";import{u as i}from"./index.62270bb6.js";var u={setup(){const{data:r,error:e,loading:s}=function(r,e={}){return i(r,t(t({},e),{requestMethod:a.request}))}((()=>({url:"https://api.apishop.net/common/jieqi/Get24Jieqi"})),{formatResult:t=>t.data});return{data:r,error:e,loading:s}}};const d=n(" Result: ");u.render=function(t,a,n,i,u,p){return r(),e("div",null,[d,s("span",null,o(i.loading?"loading":i.data),1)])};export{u as _};
