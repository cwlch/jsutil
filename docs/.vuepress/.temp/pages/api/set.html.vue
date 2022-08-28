<template><div><h1 id="设置类" tabindex="-1"><a class="header-anchor" href="#设置类" aria-hidden="true">#</a> 设置类</h1>
<h2 id="setcookie" tabindex="-1"><a class="header-anchor" href="#setcookie" aria-hidden="true">#</a> setCookie</h2>
<h3 id="设置ckookie" tabindex="-1"><a class="header-anchor" href="#设置ckookie" aria-hidden="true">#</a> 设置ckookie</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>key {string} cookie名</li>
<li>value {string} cookei值</li>
<li>option {object}
<ul>
<li>domain  默认为 window.location.hostname值</li>
<li>path  默认为 '/'</li>
<li>expires 默认为空, 设置为毫秒数（多少毫秒后失效）</li>
<li>secure  默认不设置</li>
</ul>
</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 30分钟后失效</span>
<span class="token keyword">const</span> expires <span class="token operator">=</span>   <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span>
<span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'myCookieName'</span><span class="token punctuation">,</span><span class="token string">'我是cookie值'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">expires</span><span class="token operator">:</span>expires<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setlocalstorage" tabindex="-1"><a class="header-anchor" href="#setlocalstorage" aria-hidden="true">#</a> setLocalStorage</h2>
<h3 id="设置localstorage" tabindex="-1"><a class="header-anchor" href="#设置localstorage" aria-hidden="true">#</a> 设置localStorage</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>key {string} 名称</li>
<li>value {string | JSON} 值，字符串或正常的JSON串</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setLocalStorage</span><span class="token punctuation">(</span><span class="token string">'localStorage'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">'b'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setLocalStorage</span><span class="token punctuation">(</span><span class="token string">'localStorage2'</span><span class="token punctuation">,</span><span class="token string">'localStorage2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setsessionstorage" tabindex="-1"><a class="header-anchor" href="#setsessionstorage" aria-hidden="true">#</a> setSessionStorage</h2>
<h3 id="设置sessionstorage" tabindex="-1"><a class="header-anchor" href="#设置sessionstorage" aria-hidden="true">#</a> 设置sessionStorage</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>key {string} 名称</li>
<li>value {string | JSON} 值，字符串或正常的JSON串</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setSessionStorage</span><span class="token punctuation">(</span><span class="token string">'sessionStorage'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">'b'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setSessionStorage</span><span class="token punctuation">(</span><span class="token string">'sessionStorage2'</span><span class="token punctuation">,</span><span class="token string">'sessionStorage2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


