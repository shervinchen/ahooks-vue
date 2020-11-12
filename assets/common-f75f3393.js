import{x as n,J as e,i as r,b as t,d as a,e as o,q as l,A as i,c as u}from"./common-569d9d4d.js";import"./common-c500683c.js";import{u as s}from"./common-be2c848f.js";import{d}from"./common-a22be914.js";import{t as c}from"./common-2f9a21e0.js";const m={formatResult:n=>n,requestMethod:function(n){let e,r;return"string"==typeof n?e=n:(e=n.url,r=n),fetch(e,r).then(n=>{if(n.ok)return n.json();throw new Error(n.statusText)})},manual:!1,onSuccess:()=>{},onError:()=>{},defaultLoading:!1,loadingDelay:0,pollingInterval:0,pollingWhenHidden:!0,pollingSinceLastFinished:!0,defaultParams:[],debounceInterval:0,loadingWhenDebounceStart:!0,throttleInterval:0,initialData:void 0,throwOnError:!1},g=Symbol("useRequestConfig");function f(a,o={}){var l;let i={};e()&&(i=null!=(l=r(g))?l:{});const u={...m,...i,...o},{requestMethod:f,defaultLoading:v,manual:p,throwOnError:h,onSuccess:b,onError:y,formatResult:I,initialData:D,defaultParams:T,loadingDelay:w,debounceInterval:P,loadingWhenDebounceStart:S,throttleInterval:j,pollingInterval:W,pollingWhenHidden:k,pollingSinceLastFinished:C}=u;let E;E=["string","object"].includes(typeof a)?()=>f(a):(...n)=>new Promise((e,r)=>{const t=a(...n);let o=t;if(!t.then){if(!["string","object"].includes(typeof t))throw new Error("If sevice is a function, it must return a String, Object or Promise");o=f(t)}o.then(e).catch(r)});const x=n(v),N=n(D),U=n(),q=n(T),L=n(T);let A=0,H=!1;e()&&t(()=>{H=!0});let M,O,R=n(!0);function F(...n){O&&clearTimeout(O),M&&clearTimeout(M),w?M=setTimeout(()=>{x.value=!0},w):x.value=!0,A++;const e=A;q.value=n;const r=()=>H||e!==A;return E(...n).then(e=>{if(r())return;const t=I(e);return N.value=t,L.value=n,b(t,n),t}).catch(e=>{if(!r()&&(console.error(e),U.value=e,y(e,n),h))throw e}).finally(()=>{if(!r()){if(M&&clearTimeout(M),W&&C){if(k&&!R.value)return;O=setTimeout(()=>{F(...n)},W)}x.value=!1}})}e()&&(R=s().isVisible);let J,V=F;if(P){const n=d(F,P);V=(...e)=>(S&&(x.value=!0),Promise.resolve(n(...e)))}if(j){const n=c(F,j);V=(...e)=>Promise.resolve(n(...e))}return W&&!C&&(V=(...n)=>(J&&clearInterval(J),J=setInterval(()=>{k&&!R.value||F(...n)},W),F(...n))),p||V(...T),{loading:x,error:U,data:N,run:V,params:q,lastSuccessParams:L,cancel:()=>{J&&clearInterval(J),O&&clearTimeout(O),M&&clearTimeout(M),A++,x.value=!1},refresh:function(){return V(...q.value)}}}function v(n,e){return new Promise((r,t)=>{setTimeout(()=>{e?t("something error"):r(n?"T-"+n:"yexiu")},1e3)})}let p=0;function h(){return new Promise(n=>{setTimeout(()=>{n(p++)},500)})}var b={setup(){const{loading:n,run:e,data:r}=f(h,{}),{loading:t,run:a,data:o}=f(h,{loadingDelay:800});return{loading:n,data:r,loadingWithDelay:t,dataWithDelay:o,runAll:()=>{e(),a()}}}};const y=i(" normal: "),I=i(" loadingDelay: ");b.render=function(n,e,r,t,i,s){return u(),a("div",null,[o("p",null,[y,o("span",null,l(t.loading?"loading":t.data),1)]),o("p",null,[I,o("span",null,l(t.loadingWithDelay?"loading":t.dataWithDelay),1)]),o("button",{onClick:e[1]||(e[1]=(...n)=>t.runAll(...n))},"run")])};var D={setup(){const{data:n,loading:e,error:r,run:t}=f(h,{manual:!0,throttleInterval:500});return{data:n,loading:e,error:r,run:t}}};const T=i(" UserName: ");D.render=function(n,e,r,t,i,s){return u(),a("div",null,[o("p",null,[T,o("span",null,l(t.loading?"loading":t.data),1)]),o("button",{onClick:e[1]||(e[1]=n=>t.run())},"run")])};var w={setup(){const{data:n,loading:e,error:r,run:t}=f(h,{manual:!0,debounceInterval:1e3});return{data:n,loading:e,error:r,run:t}}};const P=i(" UserName: ");w.render=function(n,e,r,t,i,s){return u(),a("div",null,[o("p",null,[P,o("span",null,l(t.loading?"loading":t.data),1)]),o("button",{onClick:e[1]||(e[1]=n=>t.run())},"run")])};var S={setup(){const{data:n,loading:e,error:r,run:t,cancel:a}=f(v,{pollingInterval:1e3,pollingWhenHidden:!0});return{data:n,loading:e,error:r,run:t,cancel:a}}};const j=i(" UserName: ");S.render=function(n,e,r,t,i,s){return u(),a("div",null,[o("p",null,[j,o("span",null,l(t.loading?"loading":t.data),1)]),o("button",{onClick:e[1]||(e[1]=n=>t.run()),style:{"margin-right":"8px"}},"run"),o("button",{onClick:e[2]||(e[2]=(...n)=>t.cancel(...n))},"cancel")])};var W={setup(){const{data:n,loading:e,error:r,run:t}=f(v,{manual:!0});return{data:n,loading:e,error:r,run:t}}};const k=i(" UserName: ");function C(){return new Promise(n=>{setTimeout(()=>{n(Math.random().toString(36).slice(2))},1500)})}W.render=function(n,e,r,t,i,s){return u(),a("div",null,[o("p",null,[k,o("span",null,l(t.loading?"loading":t.data),1)]),o("button",{onClick:e[1]||(e[1]=n=>t.run())},"run")])};var E={setup(){const{data:n,error:e,loading:r}=f(C);return{data:n,error:e,loading:r}}};const x=i(" UserName: ");E.render=function(n,e,r,t,i,s){return u(),a("div",null,[x,o("span",null,l(t.loading?"loading":t.data),1)])};export{W as a,S as b,w as c,D as d,b as e,E as s};
