<template><div><h1 id="获取类" tabindex="-1"><a class="header-anchor" href="#获取类" aria-hidden="true">#</a> 获取类</h1>
<h2 id="getvartype" tabindex="-1"><a class="header-anchor" href="#getvartype" aria-hidden="true">#</a> getVarType</h2>
<h3 id="获取变量类型" tabindex="-1"><a class="header-anchor" href="#获取变量类型" aria-hidden="true">#</a> 获取变量类型</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>key {string} 存储名称</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getSessionStorage</span><span class="token punctuation">(</span><span class="token string">'mySessionStorage'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getcookie" tabindex="-1"><a class="header-anchor" href="#getcookie" aria-hidden="true">#</a> getCookie</h2>
<h3 id="获取ckookie" tabindex="-1"><a class="header-anchor" href="#获取ckookie" aria-hidden="true">#</a> 获取ckookie</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>key {string} 存储名称</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">'myCookieName'</span><span class="token punctuation">)</span> <span class="token comment">//我是cookie值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getlocalstorage" tabindex="-1"><a class="header-anchor" href="#getlocalstorage" aria-hidden="true">#</a> getLocalStorage</h2>
<h3 id="获取localstorage" tabindex="-1"><a class="header-anchor" href="#获取localstorage" aria-hidden="true">#</a> 获取localStorage</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>key {string} 存储名称</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getLocalStorage</span><span class="token punctuation">(</span><span class="token string">'myLocalStorage'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getsessionstorage" tabindex="-1"><a class="header-anchor" href="#getsessionstorage" aria-hidden="true">#</a> getSessionStorage</h2>
<h3 id="获取sessionstorage" tabindex="-1"><a class="header-anchor" href="#获取sessionstorage" aria-hidden="true">#</a> 获取sessionStorage</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>key {string} 存储名称</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getSessionStorage</span><span class="token punctuation">(</span><span class="token string">'mySessionStorage'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getuainfo" tabindex="-1"><a class="header-anchor" href="#getuainfo" aria-hidden="true">#</a> getUAInfo</h2>
<h3 id="获取浏览器useragent信息" tabindex="-1"><a class="header-anchor" href="#获取浏览器useragent信息" aria-hidden="true">#</a> 获取浏览器UserAgent信息</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>key {string} 存储名称</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getSessionStorage</span><span class="token punctuation">(</span><span class="token string">'mySessionStorage'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getidcardsex" tabindex="-1"><a class="header-anchor" href="#getidcardsex" aria-hidden="true">#</a> getIdCardSex</h2>
<h3 id="根据身份证号获取性别" tabindex="-1"><a class="header-anchor" href="#根据身份证号获取性别" aria-hidden="true">#</a> 根据身份证号获取性别</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>idCard {string} 身份证号</li>
<li>sexDesc {string} 对应性别描述数组，下标0为男生描述，1为女生描述 。默认 ['男','女']</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getIdCardSex</span><span class="token punctuation">(</span><span class="token string">'4xxxxx202101015273'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'先生'</span><span class="token punctuation">,</span><span class="token string">'女士'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{sex:0,sexName:'先生'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getidcardbrithday" tabindex="-1"><a class="header-anchor" href="#getidcardbrithday" aria-hidden="true">#</a> getIdCardBrithDay</h2>
<h3 id="根据身份证号获取生日" tabindex="-1"><a class="header-anchor" href="#根据身份证号获取生日" aria-hidden="true">#</a> 根据身份证号获取生日</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>idCard {string} 身份证号</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">getIdCardBrithDay</span><span class="token punctuation">(</span><span class="token string">'4xxxxx202101015273'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//20210101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


