import{k as t,d as e,e as o,C as r,E as a,c as s}from"./common-569d9d4d.js";import"./common-4c62520c.js";import"./common-c500683c.js";import"./common-9d66b5b9.js";import"./common-15f58852.js";import{s as d}from"./common-2de7df53.js";var i={components:{demo13:d}};const n='{"title":"useInViewport","frontmatter":{},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"传入 DOM 元素","slug":"传入-dom-元素"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"参数","slug":"参数"},{"level":3,"title":"结果","slug":"结果"}],"relativePath":"packages/vhooks/src/useInViewport/index.zh-CN.md","lastUpdated":1603360120573.9998}',l=a('<h1 id="useinviewport"><a class="header-anchor" href="#useinviewport" aria-hidden="true">#</a> useInViewport</h1><p>一个用于判断 dom 元素是否在可视范围之内的 Hook</p><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>',4),p=a('<h3 id="传入-dom-元素"><a class="header-anchor" href="#传入-dom-元素" aria-hidden="true">#</a> 传入 DOM 元素</h3><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-ts"><pre><code><span class="token keyword">const</span> inViewPort <span class="token operator">=</span> <span class="token function">useInViewport</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>DOM element or Ref Object</td><td>HTMLElement | (() =&gt; HTMLElement) | React.MutableRefObject</td><td>-</td></tr></tbody></table><h3 id="结果"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>inViewPort</td><td>判断 dom 元素是否在可视范围之内的标志</td><td>boolean</td></tr></tbody></table>',7);i.render=function(a,d,i,n,A,h){const c=t("demo13"),B=t("demo");return s(),e("div",null,[l,o("p",null,[o(B,{src:"./demo/demo1.vue",title:"基本用法",desc:"使用 ref 监听节点在视图变化或者滚动时是否在可视范围之内",componentName:"demo13",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%26lt%3Btemplate%26gt%3B%0A%20%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%26lt%3Bdiv%0A%20%20%20%20%20%20ref%3D%26quot%3BdivRef%26quot%3B%0A%20%20%20%20%20%20style%3D%26quot%3B%0A%20%20%20%20%20%20%20%20width%3A%20100px%3B%0A%20%20%20%20%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20%20%20%20%20background%3A%20rgba(0%2C%200%2C%200%2C%200.1)%3B%0A%20%20%20%20%20%20%20%20margin-bottom%3A%20300px%3B%0A%20%20%20%20%20%20%26quot%3B%0A%20%20%20%20%26gt%3B%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20isInViewport%3A%20%26lt%3Bspan%20style%3D%26quot%3Bcolor%3A%20blue%26quot%3B%26gt%3B%7B%7B%20isInViewport%20%7D%7D%26lt%3B%2Fspan%26gt%3B%0A%20%20%26lt%3B%2Fdiv%26gt%3B%0A%26lt%3B%2Ftemplate%26gt%3B%0A%0A%26lt%3Bscript%20lang%3D%26quot%3Bts%26quot%3B%26gt%3B%0Aimport%20%7B%20useInViewport%20%7D%20from%20%26%2339%3B%40dewfall%2Fvhooks%26%2339%3B%3B%0Aimport%20%7B%20ref%20%7D%20from%20%26%2339%3Bvue%26%2339%3B%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20divRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20isInViewport%20%3D%20useInViewport(divRef)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20divRef%2C%0A%20%20%20%20%20%20isInViewport%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%26lt%3B%2Fscript%26gt%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20ref%3D%22divRef%22%0A%20%20%20%20%20%20style%3D%22%0A%20%20%20%20%20%20%20%20width%3A%20100px%3B%0A%20%20%20%20%20%20%20%20height%3A%20100px%3B%0A%20%20%20%20%20%20%20%20background%3A%20rgba(0%2C%200%2C%200%2C%200.1)%3B%0A%20%20%20%20%20%20%20%20margin-bottom%3A%20300px%3B%0A%20%20%20%20%20%20%22%0A%20%20%20%20%3E%3C%2Fdiv%3E%0A%20%20%20%20isInViewport%3A%20%3Cspan%20style%3D%22color%3A%20blue%22%3E%7B%7B%20isInViewport%20%7D%7D%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useInViewport%20%7D%20from%20'%40dewfall%2Fvhooks'%3B%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20divRef%20%3D%20ref(null)%3B%0A%20%20%20%20const%20isInViewport%20%3D%20useInViewport(divRef)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20divRef%2C%0A%20%20%20%20%20%20isInViewport%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:r(()=>[o(c)]),_:1})]),p])};export default i;export{n as __pageData};
