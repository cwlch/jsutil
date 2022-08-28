<template><div><h1 id="限制类" tabindex="-1"><a class="header-anchor" href="#限制类" aria-hidden="true">#</a> 限制类</h1>
<ul>
<li>主要用于输入框输入限制。</li>
<li>也可以用于字符串格式化，有非法字符会被剔除掉；</li>
</ul>
<h2 id="limitint" tabindex="-1"><a class="header-anchor" href="#limitint" aria-hidden="true">#</a> limitInt</h2>
<h3 id="限制只能是正整数" tabindex="-1"><a class="header-anchor" href="#限制只能是正整数" aria-hidden="true">#</a> 限制只能是正整数</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必传</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>val</td>
<td>String,Number</td>
<td>是</td>
<td>需要验证转换的值</td>
</tr>
</tbody>
</table>
</div>
<div class="custom-container tip"><p class="custom-container-title">返回值</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>num</td>
<td>number</td>
<td>转换后的值</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 限制输入框只能输入正整数 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>input<span class="token punctuation">'</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> $input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    $input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">limitInt</span><span class="token punctuation">(</span>$input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="limitintfloat" tabindex="-1"><a class="header-anchor" href="#limitintfloat" aria-hidden="true">#</a> limitIntFloat</h2>
<h3 id="限制只能是正整数和浮点数" tabindex="-1"><a class="header-anchor" href="#限制只能是正整数和浮点数" aria-hidden="true">#</a> 限制只能是正整数和浮点数</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必传</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>val</td>
<td>String,Number</td>
<td>是</td>
<td>需要验证转换的值</td>
</tr>
<tr>
<td>digit</td>
<td>Number</td>
<td>否</td>
<td>需要限制几位小数，不传则无限制</td>
</tr>
</tbody>
</table>
</div>
<div class="custom-container tip"><p class="custom-container-title">返回值</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>num</td>
<td>number</td>
<td>转换后的值</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>input<span class="token punctuation">'</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>inputFloat<span class="token punctuation">'</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> $input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $inputFloat <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#inputFloat'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 限制输入框只能输入正整数和浮点数，无小数点限制</span>
$input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    $input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">limitIntFloat</span><span class="token punctuation">(</span>$input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 限制输入框只能输入正整数和浮点数，2位小数</span>
$inputFloat<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'inputFloat'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    $inputFloat<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">limitIntFloat</span><span class="token punctuation">(</span>$inputFloat<span class="token punctuation">.</span>value<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="limitpnint" tabindex="-1"><a class="header-anchor" href="#limitpnint" aria-hidden="true">#</a> limitPNInt</h2>
<h3 id="限制只能是正负整数" tabindex="-1"><a class="header-anchor" href="#限制只能是正负整数" aria-hidden="true">#</a> 限制只能是正负整数</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必传</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>val</td>
<td>String,Number</td>
<td>是</td>
<td>需要验证转换的值</td>
</tr>
</tbody>
</table>
</div>
<div class="custom-container tip"><p class="custom-container-title">返回值</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>num</td>
<td>number</td>
<td>转换后的值</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 限制输入框只能输入正负整数--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>input<span class="token punctuation">'</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> $input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    $input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">limitInt</span><span class="token punctuation">(</span>$input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="limitpnintfloat" tabindex="-1"><a class="header-anchor" href="#limitpnintfloat" aria-hidden="true">#</a> limitPNIntFloat</h2>
<h3 id="限制只能是正负整数和浮点数" tabindex="-1"><a class="header-anchor" href="#限制只能是正负整数和浮点数" aria-hidden="true">#</a> 限制只能是正负整数和浮点数</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必传</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>val</td>
<td>String,Number</td>
<td>是</td>
<td>需要验证转换的值</td>
</tr>
<tr>
<td>digit</td>
<td>Number</td>
<td>否</td>
<td>需要限制几位小数，不传则无限制</td>
</tr>
</tbody>
</table>
</div>
<div class="custom-container tip"><p class="custom-container-title">返回值</p>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>num</td>
<td>number</td>
<td>转换后的值</td>
</tr>
</tbody>
</table>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>input<span class="token punctuation">'</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>inputFloat<span class="token punctuation">'</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> $input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $inputFloat <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#inputFloat'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 限制输入框只能输入正负整数和浮点数，无小数点限制</span>
$input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    $input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">limitPNIntFloat</span><span class="token punctuation">(</span>$input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 限制输入框只能输入正负整数和浮点数，2位小数</span>
$inputFloat<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'inputFloat'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    $inputFloat<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">limitPNIntFloat</span><span class="token punctuation">(</span>$inputFloat<span class="token punctuation">.</span>value<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


