import{x as i,j as t,b as e}from"./common-569d9d4d.js";function n(){const n=i(document.visibilityState),s=t(()=>"visible"===n.value);function o(){n.value=document.visibilityState}return document.addEventListener("visibilitychange",o),e(()=>{document.removeEventListener("visibilitychange",o)}),{visibilityState:n,isVisible:s}}export{n as u};
