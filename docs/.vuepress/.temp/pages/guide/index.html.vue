<template><div><h1 id="使用教程" tabindex="-1"><a class="header-anchor" href="#使用教程" aria-hidden="true">#</a> 使用教程</h1>
<h2 id="cdn快速开始" tabindex="-1"><a class="header-anchor" href="#cdn快速开始" aria-hidden="true">#</a> CDN快速开始</h2>
<ul>
<li>可通过 jsutil.gykeji.com 获取到最新版本的资源，在页面上引入js即可开始使用。</li>
<li>会暴露一个“ <strong>jsUtil</strong> ”全局变量</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://jsutil.gykeji.com/lib/jsUtil-umd.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	jsUtil<span class="token punctuation">.</span><span class="token function">isName</span><span class="token punctuation">(</span><span class="token string">'你的名字'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
	jsUtil<span class="token punctuation">.</span><span class="token function">isName</span><span class="token punctuation">(</span><span class="token string">'你的名字12'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
	<span class="token comment">// jsUtil....</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm安装" tabindex="-1"><a class="header-anchor" href="#npm安装" aria-hidden="true">#</a> npm安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i js-util-all <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2>
<p>你可以引入整个jsUtil，或是根据需要仅引入部分方法。<strong>建议按需引入</strong>;</p>
<h4 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h4>
<p>在你要用到相关方法的页面直接引入方法即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>isEmpty<span class="token punctuation">,</span>isPhone<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'js-util-all'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isPhone</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="在文件中直接全量引入" tabindex="-1"><a class="header-anchor" href="#在文件中直接全量引入" aria-hidden="true">#</a> 在文件中直接全量引入</h5>
<p>page.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> jsUtil <span class="token keyword">from</span> <span class="token string">'js-util-all'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
jsUtil<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
jsUtil<span class="token punctuation">.</span><span class="token function">isPhone</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>如果要全用* as方法全量引入，记住要把babel-plugin-component的配置删掉</p>
</div>
</div></template>


