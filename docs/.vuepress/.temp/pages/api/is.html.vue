<template><div><h1 id="校验类" tabindex="-1"><a class="header-anchor" href="#校验类" aria-hidden="true">#</a> 校验类</h1>
<h2 id="isempty" tabindex="-1"><a class="header-anchor" href="#isempty" aria-hidden="true">#</a> isEmpty</h2>
<h3 id="校验一个变量是否为空" tabindex="-1"><a class="header-anchor" href="#校验一个变量是否为空" aria-hidden="true">#</a> 校验一个变量是否为空</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>val { string | number | object | array | null | undefined }</li>
</ul>
</div>
<ul>
<li>各类型判断说明</li>
</ul>
<table>
<thead>
<tr>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>String</td>
<td>空字符串返回true，其他返回false</td>
</tr>
<tr>
<td>Number</td>
<td>返回false,只要有数字则实际不为空</td>
</tr>
<tr>
<td>Object</td>
<td>{}返回true，只有有属性的对象才判断是不为空</td>
</tr>
<tr>
<td>Array</td>
<td>[]返回true，只有长度大于0的数组才判断不为空</td>
</tr>
<tr>
<td>Null</td>
<td>返回true</td>
</tr>
<tr>
<td>Undefined</td>
<td>返回true</td>
</tr>
</tbody>
</table>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">,</span>
	b <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	c <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
	d <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	e <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	f <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isname" tabindex="-1"><a class="header-anchor" href="#isname" aria-hidden="true">#</a> isName</h2>
<h3 id="校验是否为正常的姓名格式-支持中英文姓名格式" tabindex="-1"><a class="header-anchor" href="#校验是否为正常的姓名格式-支持中英文姓名格式" aria-hidden="true">#</a> 校验是否为正常的姓名格式，支持中英文姓名格式；</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>val { string }</li>
</ul>
</div>
<blockquote>
<ul>
<li>中英文统一规则2-20,中文（中国一般限制最大6位，香港，台湾，少数名族最大的可为20位）;</li>
<li>英文姓名支持 - 和空格;</li>
</ul>
</blockquote>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isName</span><span class="token punctuation">(</span><span class="token string">'欧阳张三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
<span class="token function">isName</span><span class="token punctuation">(</span><span class="token string">'Jason Statham'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isphone" tabindex="-1"><a class="header-anchor" href="#isphone" aria-hidden="true">#</a> isPhone</h2>
<h3 id="校验是否为手机号-支持13-9号段" tabindex="-1"><a class="header-anchor" href="#校验是否为手机号-支持13-9号段" aria-hidden="true">#</a> 校验是否为手机号，支持13-9号段;</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>val { number | string }</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isPhone</span><span class="token punctuation">(</span><span class="token string">'13202023232'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token function">isPhone</span><span class="token punctuation">(</span><span class="token number">19982023232</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token function">isPhone</span><span class="token punctuation">(</span><span class="token number">12882023232</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="istel" tabindex="-1"><a class="header-anchor" href="#istel" aria-hidden="true">#</a> isTel</h2>
<h3 id="判断是否为座机号码-只支持示例中的输入格式" tabindex="-1"><a class="header-anchor" href="#判断是否为座机号码-只支持示例中的输入格式" aria-hidden="true">#</a> 判断是否为座机号码,只支持示例中的输入格式；</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>val { string }</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isTel</span><span class="token punctuation">(</span><span class="token string">'0731-1231456'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="isemail" tabindex="-1"><a class="header-anchor" href="#isemail" aria-hidden="true">#</a> isEmail</h2>
<h3 id="校验邮箱格式是否正确" tabindex="-1"><a class="header-anchor" href="#校验邮箱格式是否正确" aria-hidden="true">#</a> 校验邮箱格式是否正确;</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>val { string }</li>
</ul>
</div>
<ul>
<li>验证规则</li>
</ul>
<blockquote>
<ul>
<li>邮箱 = 邮箱名 + @ + 域名</li>
<li>邮箱名 =（中文，字母，数字 开头）（中间可包含_-.+但不能连续多个）（中文，字母，数字 结尾）</li>
<li>域名 = 前缀 + . +后缀</li>
<li>域名前缀 =（中文，字母，数字 开头）（中间可包含_-.+但不能连续多个）（中文，字母，数字 结尾）</li>
<li>域名后缀 =（中文，字母，数字）</li>
</ul>
</blockquote>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token string">'cwl_ch@163.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token string">'cwl-_ch@gjke-compay.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token string">'cC.wl-_ch@gjke-我是.中文.vipcn'</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
<span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token string">'cwl-_ch@gjke-compay.vip.cn'</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
<span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token string">'cC.wl-_ch@vipcn'</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isidcard" tabindex="-1"><a class="header-anchor" href="#isidcard" aria-hidden="true">#</a> isIdCard</h2>
<h3 id="校验身份证号是否正确" tabindex="-1"><a class="header-anchor" href="#校验身份证号是否正确" aria-hidden="true">#</a> 校验身份证号是否正确</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>val { string }</li>
</ul>
</div>
<blockquote>
<p>使用加权因子计算校验</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isIdCard</span><span class="token punctuation">(</span><span class="token string">'430529202002025271'</span><span class="token punctuation">)</span> <span class="token comment">//false 非正确身份证，可以使用自己身份证改一个数字试试。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ismoney" tabindex="-1"><a class="header-anchor" href="#ismoney" aria-hidden="true">#</a> isMoney</h2>
<h3 id="校验是否为金额格式" tabindex="-1"><a class="header-anchor" href="#校验是否为金额格式" aria-hidden="true">#</a> 校验是否为金额格式</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>val { string | number}</li>
</ul>
</div>
<blockquote>
<ul>
<li>最小到分单位</li>
<li>最大到万亿</li>
<li>如果0开头，要么单数0，否则带2位0-9小数</li>
<li>非0开头1-13位纯数字，可带2位0-9小数</li>
</ul>
</blockquote>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token function">isMoney</span><span class="token punctuation">(</span><span class="token number">111.11</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
	<span class="token function">isMoney</span><span class="token punctuation">(</span><span class="token number">0.11</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
	<span class="token function">isMoney</span><span class="token punctuation">(</span><span class="token number">0.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
	<span class="token function">isMoney</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
	<span class="token function">isMoney</span><span class="token punctuation">(</span><span class="token number">1111111111111.11</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true  </span>
	<span class="token function">isMoney</span><span class="token punctuation">(</span><span class="token number">11111111111111</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false  </span>
	<span class="token function">isMoney</span><span class="token punctuation">(</span><span class="token number">111.111</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false </span>
	<span class="token function">isMoney</span><span class="token punctuation">(</span><span class="token string">'0.000'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">提示</p>
<p>参数最好使用String类型，如果是Number类型0.00000这种格式会判断为正确，因为0.00000系统识别为0</p>
</div>
</div></template>


