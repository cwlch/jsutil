<template><div><h1 id="格式化-转换-类" tabindex="-1"><a class="header-anchor" href="#格式化-转换-类" aria-hidden="true">#</a> （格式化|转换）类</h1>
<h2 id="formatdate" tabindex="-1"><a class="header-anchor" href="#formatdate" aria-hidden="true">#</a> formatDate</h2>
<h3 id="时间格式化" tabindex="-1"><a class="header-anchor" href="#时间格式化" aria-hidden="true">#</a> 时间格式化</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>date {String | Number | Date} 时间字符串，或毫秒数，或Date类型
<ul>
<li>非必传，需要传指定格式时则必传</li>
<li>默认为当前时间</li>
</ul>
</li>
<li>formatStr {String} 时间格式
<ul>
<li>（y 年）（m 月）（d 日）（h 时）（i 分）（s 秒）（q 季）（ l毫秒-小写的L）</li>
<li>非必传；默认格式为 yyyy/mm/dd</li>
</ul>
</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//2020/12/02</span>
    <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token string">'2020年12月2日3时3分20秒'</span><span class="token punctuation">,</span><span class="token string">'yyyy-mm-dd hh:ii:ss'</span><span class="token punctuation">)</span> <span class="token comment">//2020-12-02 03:03:20</span>
    <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token number">1606918942000</span><span class="token punctuation">,</span><span class="token string">'yyyy-mm-dd hh:ii:ss'</span><span class="token punctuation">)</span> <span class="token comment">//2020-12-02 22:22:22</span>
    <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token string">'2020-12-02'</span><span class="token punctuation">)</span> <span class="token comment">//2020/12/02</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formatjsonsearch" tabindex="-1"><a class="header-anchor" href="#formatjsonsearch" aria-hidden="true">#</a> formatJsonSearch</h2>
<h3 id="json转url-seach参数格式" tabindex="-1"><a class="header-anchor" href="#json转url-seach参数格式" aria-hidden="true">#</a> json转URL Seach参数格式</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>json {Object} 需要转换的JSON对象</li>
<li>connector {String} 连接符（第一位字符）
<ul>
<li>默认为 “?”</li>
</ul>
</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">formatJsonSearch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">'b1'</span><span class="token punctuation">,</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token string">'哈哈'</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//?a=a1&amp;b=b1&amp;c=%E5%93%88%E5%93%88</span>
    <span class="token function">formatJsonSearch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">'a1'</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">'b1'</span><span class="token punctuation">,</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token string">'哈哈'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span> <span class="token comment">//&amp;a=a1&amp;b=b1&amp;c=%E5%93%88%E5%93%88</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formatsearchjson" tabindex="-1"><a class="header-anchor" href="#formatsearchjson" aria-hidden="true">#</a> formatSearchJson</h2>
<h3 id="url-search参数转json对象" tabindex="-1"><a class="header-anchor" href="#url-search参数转json对象" aria-hidden="true">#</a> URL Search参数转JSON对象</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<p>searchStr {String} search串</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">//注意第一个字符 </span>
    <span class="token function">formatSearchJson</span><span class="token punctuation">(</span><span class="token string">'?a=a1&amp;b=b1&amp;c=%E5%93%88%E5%93%88'</span><span class="token punctuation">)</span> <span class="token comment">//{a: "a1", b: "b1", c: "哈哈"}</span>
    <span class="token function">formatSearchJson</span><span class="token punctuation">(</span><span class="token string">'a=a1&amp;b=b1&amp;c=%E5%93%88%E5%93%88'</span><span class="token punctuation">)</span> <span class="token comment">//{a: "a1", b: "b1", c: "哈哈"}</span>
    <span class="token function">formatSearchJson</span><span class="token punctuation">(</span><span class="token string">'&amp;a=a1&amp;b=b1&amp;c=%E5%93%88%E5%93%88'</span><span class="token punctuation">)</span> <span class="token comment">//{a: "a1", b: "b1", c: "哈哈"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formatbloburl" tabindex="-1"><a class="header-anchor" href="#formatbloburl" aria-hidden="true">#</a> formatBlobUrl</h2>
<h3 id="二进制文件流转成可访问的url" tabindex="-1"><a class="header-anchor" href="#二进制文件流转成可访问的url" aria-hidden="true">#</a> 二进制文件流转成可访问的URL</h3>
<h3 id="常用于图片预览-文件下载等场景" tabindex="-1"><a class="header-anchor" href="#常用于图片预览-文件下载等场景" aria-hidden="true">#</a> 常用于图片预览，<RouterLink to="/api/ohter.html#downblobfile">文件下载</RouterLink>等场景</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>blob {Blob} 二进制文件流对象</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">return</p>
<ul>
<li>Object 会返回一个自定义对象
<ul>
<li>url {String} 可访问的URL字符串</li>
<li>revoke {Function} 释放当前实例生成的URL对象在浏览器中所占的内存</li>
</ul>
</li>
</ul>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上传图片预览处<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> $img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#img'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> $input <span class="token operator">=</span>  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#input'</span><span class="token punctuation">)</span>
        $input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token comment">// 主要要代码主要要代码主要要代码</span>
            <span class="token keyword">const</span> blobFile <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//拿到二进制文件流</span>
            <span class="token keyword">const</span> urlObject <span class="token operator">=</span> <span class="token function">formatBlobUrl</span><span class="token punctuation">(</span>blobFile<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//生成URL对象            </span>
            $img<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span>urlObject<span class="token punctuation">.</span>url<span class="token punctuation">)</span> <span class="token comment">//给img标签赋值，预览效果生效</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formatmoneynumcapital" tabindex="-1"><a class="header-anchor" href="#formatmoneynumcapital" aria-hidden="true">#</a> formatMoneyNumCapital</h2>
<h3 id="数字金额转成中文大写" tabindex="-1"><a class="header-anchor" href="#数字金额转成中文大写" aria-hidden="true">#</a> 数字金额转成中文大写</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>money {Number} 数字金额</li>
<li>prefix {String} 金额为负数时的前缀
<ul>
<li>非必传，默认为空串''。如 '欠贰佰圆整'，“欠”就是前缀；</li>
</ul>
</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">formatMoneyNumCapital</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">//贰佰元整</span>
    <span class="token function">formatMoneyNumCapital</span><span class="token punctuation">(</span><span class="token number">200.00</span><span class="token punctuation">)</span> <span class="token comment">//贰佰元整</span>
    <span class="token function">formatMoneyNumCapital</span><span class="token punctuation">(</span><span class="token number">200.012</span><span class="token punctuation">)</span> <span class="token comment">//贰佰元壹分</span>
    <span class="token function">formatMoneyNumCapital</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">200.012</span><span class="token punctuation">,</span><span class="token string">'欠'</span><span class="token punctuation">)</span> <span class="token comment">//欠贰佰元壹分</span>
    <span class="token function">formatMoneyNumCapital</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">200.012</span><span class="token punctuation">)</span> <span class="token comment">//贰佰元壹分</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formatmoneysymbol" tabindex="-1"><a class="header-anchor" href="#formatmoneysymbol" aria-hidden="true">#</a> formatMoneySymbol</h2>
<h3 id="金额加千位符格式化-大于等于100万时添加千位符" tabindex="-1"><a class="header-anchor" href="#金额加千位符格式化-大于等于100万时添加千位符" aria-hidden="true">#</a> 金额加千位符格式化,大于等于100万时添加千位符</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>money {Number | String} 金额
<ul>
<li>必传参数，如果为null 或 undefined 或空串 返回null</li>
</ul>
</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">return</p>
<p>{ String | Null}</p>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">formatMoneySymbol</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span> <span class="token comment">//1,000,000.00</span>
    <span class="token function">formatMoneySymbol</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">//1000.00</span>
    <span class="token function">formatMoneySymbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//null</span>
    <span class="token function">formatMoneySymbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//null</span>
    <span class="token function">formatMoneySymbol</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">//null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


