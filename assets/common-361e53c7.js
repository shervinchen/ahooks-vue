import{j as n,x as o,B as u,d as t,e as a,q as e,A as l,c}from"./common-569d9d4d.js";import"./common-c500683c.js";import{d as s}from"./common-a22be914.js";var d={setup(){const t=o(0),a=function(t,a){var e;let l;l="function"==typeof t?n(t):t;const c=o(l.value),d=s(()=>{c.value=l.value},null!=(e=null==a?void 0:a.wait)?e:1e3,a);return u(l,d),c}(t,{wait:2e3});return{count:t,debouncedValue:a,addCount:function(){t.value++}}}};const r=l(" count: "),i=l(" debouncedValue: ");d.render=function(n,o,u,l,s,d){return c(),t("div",null,[a("p",null,[r,a("span",null,e(l.count),1)]),a("p",null,[i,a("span",null,e(l.debouncedValue),1)]),a("button",{onClick:o[1]||(o[1]=(...n)=>l.addCount(...n))},"++count")])};export{d as s};
