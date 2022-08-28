<template><div><h1 id="其他类" tabindex="-1"><a class="header-anchor" href="#其他类" aria-hidden="true">#</a> 其他类</h1>
<h2 id="calc" tabindex="-1"><a class="header-anchor" href="#calc" aria-hidden="true">#</a> calc</h2>
<h3 id="数字计算-浮点数高精度加-减-乘-除" tabindex="-1"><a class="header-anchor" href="#数字计算-浮点数高精度加-减-乘-除" aria-hidden="true">#</a> 数字计算，浮点数高精度加,减,乘,除</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>symbol {String} 计算符号字符串,支持&quot;+，-，*，/&quot;;</li>
<li>num1 {Number | String} 计算数字1</li>
<li>num2 {Number | String} 计算数字2</li>
<li>...numn {Number | String} 多数字顺序计算</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 加  </span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0.56</span> <span class="token operator">+</span> <span class="token number">0.28</span> <span class="token comment">//原生 0.8400000000000001</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">'+'</span><span class="token punctuation">,</span><span class="token number">0.56</span><span class="token punctuation">,</span><span class="token number">0.28</span><span class="token punctuation">)</span> <span class="token comment">//0.84</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
<span class="token comment">// 减</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0.3</span> <span class="token operator">-</span> <span class="token number">0.1</span> <span class="token comment">//原生 0.19999999999999998</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">,</span><span class="token number">0.3</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span> <span class="token comment">//0.2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>

<span class="token comment">// 乘</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0.8</span> <span class="token operator">*</span> <span class="token number">0.51</span> <span class="token comment">//原生 0.40800000000000003</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span><span class="token number">0.8</span><span class="token punctuation">,</span><span class="token number">0.51</span><span class="token punctuation">)</span> <span class="token comment">//0.408</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>

<span class="token comment">// 除</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0.95</span> <span class="token operator">/</span> <span class="token number">0.1</span> <span class="token comment">//原生 9.499999999999998</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">,</span><span class="token number">0.95</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span> <span class="token comment">//9.5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>

<span class="token comment">// 多位数计算</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0.24</span> <span class="token operator">+</span> <span class="token number">0.29</span> <span class="token operator">+</span> <span class="token number">0.88</span> <span class="token comment">//1.4100000000000001</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token string">'+'</span><span class="token punctuation">,</span><span class="token number">0.24</span><span class="token punctuation">,</span><span class="token number">0.29</span><span class="token punctuation">,</span><span class="token number">0.88</span><span class="token punctuation">)</span> <span class="token comment">//1.41</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> extend</h2>
<h3 id="对象拷贝-与jq的extend类似-对象继承" tabindex="-1"><a class="header-anchor" href="#对象拷贝-与jq的extend类似-对象继承" aria-hidden="true">#</a> 对象拷贝，与JQ的extend类似（对象继承）</h3>
<h3 id="支持-深拷贝-浅拷贝-对象中的方法同样也会拷贝-继承" tabindex="-1"><a class="header-anchor" href="#支持-深拷贝-浅拷贝-对象中的方法同样也会拷贝-继承" aria-hidden="true">#</a> 支持(深拷贝，浅拷贝)，对象中的方法同样也会拷贝（继承）</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>target {Object | Array} 第一个对象参数，为继承者。表示后面的所有args参数都会拷贝至这个对象</li>
<li>[...args]{Object | Array} 可以为无限个对象。被继承者，后一个覆盖前一个的属性</li>
<li>deep {Blooen} 最后一位参数，如果为true或是正常的agrs参数则执行深拷贝，如果为false，则执行前拷贝</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> myA <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">arr</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">arr1</span><span class="token operator">:</span><span class="token string">'arr1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">arr2</span><span class="token operator">:</span><span class="token string">'arr2'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">arr3</span><span class="token operator">:</span><span class="token string">'arr3'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">arr4</span><span class="token operator">:</span><span class="token string">'arr4'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">obj</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">obj1</span> <span class="token operator">:</span> <span class="token string">'obj1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">obj2</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">obj21</span> <span class="token operator">:</span> <span class="token string">'obj21'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">obj22</span> <span class="token operator">:</span> <span class="token string">'obj22'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> copayA <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">'copay-a'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token string">'copay-age'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">arr</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">arr1</span> <span class="token operator">:</span> <span class="token string">'copay-arr1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">arr22</span><span class="token operator">:</span><span class="token string">'copay-arr22'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'copay-arr3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">obj</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">obj2</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">obj22</span> <span class="token operator">:</span> <span class="token string">'copy-obj22'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'copy-a'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// demo一 深拷贝</span>
    myA<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//alert 'a'</span>
    <span class="token function">extend</span><span class="token punctuation">(</span>myA<span class="token punctuation">,</span>copayA<span class="token punctuation">)</span><span class="token punctuation">;</span>
    myA<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//alert 'copy-a'</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'myA:'</span><span class="token punctuation">,</span>myA<span class="token punctuation">,</span><span class="token string">'copayA:'</span><span class="token punctuation">,</span>copayA<span class="token punctuation">)</span>
    myA <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'name'</span> <span class="token operator">:</span> <span class="token string">'copay-a'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'age'</span> <span class="token operator">:</span> <span class="token string">'copay-age'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'arr'</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">arr1</span><span class="token operator">:</span><span class="token string">'copay-arr1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">arr2</span><span class="token operator">:</span><span class="token string">'arr2'</span><span class="token punctuation">,</span><span class="token literal-property property">arr22</span><span class="token operator">:</span><span class="token string">'copay-arr22'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'copay-arr3'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">arr4</span><span class="token operator">:</span><span class="token string">'arr4'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">'obj'</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">obj1</span> <span class="token operator">:</span> <span class="token string">'obj1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">obj2</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">obj21</span> <span class="token operator">:</span> <span class="token string">'obj21'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">obj22</span> <span class="token operator">:</span> <span class="token string">'copy-obj22'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'copy-a'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// demo二 浅拷贝 每次只测试一种demo</span>
    <span class="token comment">// myA.obj.fn();</span>
    <span class="token comment">// extend(myA,copayA,false);</span>
    <span class="token comment">// myA.obj.fn();</span>
    <span class="token comment">// console.log('myA:',myA,'-----copayA:',copayA);</span>
    
    <span class="token comment">// demo三 如果要想不改变原有的对象，第一个参数传个空对象或空数组即可</span>
    <span class="token comment">// myA.obj.fn();</span>
    <span class="token comment">// const newObj = extend({},myA,copayA);</span>
    <span class="token comment">// myA.obj.fn();</span>
    <span class="token comment">// newObj.obj.fn()</span>
    <span class="token comment">// console.log('newObj:',newObj, '------myA:',myA,'-----copayA:',copayA);</span>

    <span class="token comment">// demo四 多个对象拷贝,并且执行浅拷贝</span>
    <span class="token comment">// myA.obj.fn();</span>
    <span class="token comment">// const newObj = extend({},copay1,copayn2,....,copayn+,false);</span>
    <span class="token comment">// myA.obj.fn();</span>
    <span class="token comment">// newObj.obj.fn()</span>
    <span class="token comment">// console.log('newObj:',newObj, '------myA:',myA,'-----copayA:',copayA);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="loadscript" tabindex="-1"><a class="header-anchor" href="#loadscript" aria-hidden="true">#</a> loadScript</h2>
<h3 id="动态加载js-并联-如果是多个js-他会同时加载" tabindex="-1"><a class="header-anchor" href="#动态加载js-并联-如果是多个js-他会同时加载" aria-hidden="true">#</a> 动态加载JS（并联）如果是多个js，他会同时加载</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>scriptStr {String | Array}  js地址，单个可以直接使用字符串，多个使用数组形式；</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">return</p>
<ul>
<li>Promise 所有JS加载完成后，执行Promise成功回调</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// a.js console.log('1') </span>
    <span class="token comment">// b.js console.log('2')</span>
    <span class="token comment">// c.js console.log('3')</span>

    <span class="token comment">// 加载多个JS</span>
    <span class="token function">loadScript</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'./a.js'</span><span class="token punctuation">,</span><span class="token string">'./b.js'</span><span class="token punctuation">,</span><span class="token string">'./c.js'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'加载成功'</span><span class="token punctuation">)</span> <span class="token comment">//此处输出一定会在其他JS都输出完才会执行</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出2,3,1 顺序不固定</span>


    <span class="token comment">// 加载单个JS</span>
    <span class="token function">loadScript</span><span class="token punctuation">(</span><span class="token string">'./a.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'加载成功'</span><span class="token punctuation">)</span> <span class="token comment">//此处输出一定会在其他JS都输出完才会执行</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token function">loadScript</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'./a.js'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'加载成功'</span><span class="token punctuation">)</span> <span class="token comment">//此处输出一定会在其他JS都输出完才会执行</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="loadscriptawait" tabindex="-1"><a class="header-anchor" href="#loadscriptawait" aria-hidden="true">#</a> loadScriptAwait</h2>
<h3 id="动态加载js-串联-如果是多个js-他会按照数组顺序一个一个的加载" tabindex="-1"><a class="header-anchor" href="#动态加载js-串联-如果是多个js-他会按照数组顺序一个一个的加载" aria-hidden="true">#</a> 动态加载JS（串联）如果是多个js，他会按照数组顺序一个一个的加载</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>scriptStr {String | Array}  js地址，单个可以直接使用字符串，多个使用数组形式；</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">return</p>
<ul>
<li>Promise 所有JS加载完成后，执行Promise成功回调</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// a.js console.log('1') </span>
    <span class="token comment">// b.js console.log('2')</span>
    <span class="token comment">// c.js console.log('3')</span>

    <span class="token comment">// 加载多个JS</span>
    <span class="token function">loadScriptAwait</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'./a.js'</span><span class="token punctuation">,</span><span class="token string">'./b.js'</span><span class="token punctuation">,</span><span class="token string">'./c.js'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'加载成功'</span><span class="token punctuation">)</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">//输出1，2，3，加载成功，会按照数组顺序固定输出，最后输出then方法的回调</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">建议</p>
<p>如果加载单个JS建议使用 loadScript</p>
</div>
<h2 id="fillzero" tabindex="-1"><a class="header-anchor" href="#fillzero" aria-hidden="true">#</a> fillZero</h2>
<h3 id="小于10正整数补0" tabindex="-1"><a class="header-anchor" href="#小于10正整数补0" aria-hidden="true">#</a> 小于10正整数补0</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>number {Number | String} 数字</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">return</p>
<ul>
<li>String | Number 小于10的正整数，返回带不齐0的字符串，其他原样返回参数</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">fillZero</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>    <span class="token comment">// 01</span>
    <span class="token function">fillZero</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>    <span class="token comment">// 0.1</span>
    <span class="token function">fillZero</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">)</span>    <span class="token comment">// -0.1</span>
    <span class="token function">fillZero</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">)</span>  <span class="token comment">// 02</span>
    <span class="token function">fillZero</span><span class="token punctuation">(</span><span class="token string">'11'</span><span class="token punctuation">)</span> <span class="token comment">// 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creatuuid" tabindex="-1"><a class="header-anchor" href="#creatuuid" aria-hidden="true">#</a> creatUuid</h2>
<h3 id="创建一个uuid" tabindex="-1"><a class="header-anchor" href="#创建一个uuid" aria-hidden="true">#</a> 创建一个UUID</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>len 指定长度，非必传</li>
<li>radix 基数,非必传</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">creatUuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// EB4479E4-CA4A-4377-AC97-5C3424CCA6EF</span>
    <span class="token function">creatUuid</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">//  "10010100000011100011101010001011"</span>
    <span class="token function">creatUuid</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// "82841022800573848567251899801403"</span>
    <span class="token function">creatUuid</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// "F743098834031FDFCE1D8976F9769222"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="downblobfile" tabindex="-1"><a class="header-anchor" href="#downblobfile" aria-hidden="true">#</a> downBlobFile</h2>
<h3 id="下载二进制流文件到本地" tabindex="-1"><a class="header-anchor" href="#下载二进制流文件到本地" aria-hidden="true">#</a> 下载二进制流文件到本地</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>blob {Blob} 二进制文件流对象</li>
<li>fileOptin {Object} 下载文件配置参数
<ul>
<li>name {String} 文件名，非必传。不传时自动取blob对象的name属性，如果没有name属性取当前时间戳</li>
<li>suffix {String} 扩展名，非必传。不传时从blob对象的name属性截取，如果没有name属性，则通过blob对象的type判断</li>
</ul>
</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>btn<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>下载刚上传的图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> $input <span class="token operator">=</span>  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> $btn <span class="token operator">=</span>  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        $btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> myBlob <span class="token operator">=</span> $input<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// 下载二进制文件流到本地</span>
            <span class="token function">downBlobFile</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">downBlobFile</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'我的名字'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">downBlobFile</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">suffix</span><span class="token operator">:</span><span class="token string">'gif'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">downBlobFile</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'你的名字'</span><span class="token punctuation">,</span><span class="token literal-property property">suffix</span><span class="token operator">:</span><span class="token string">'gif'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="loactionreplace" tabindex="-1"><a class="header-anchor" href="#loactionreplace" aria-hidden="true">#</a> loactionReplace</h2>
<h3 id="添加了兼容的浏览器location-replace方法" tabindex="-1"><a class="header-anchor" href="#添加了兼容的浏览器location-replace方法" aria-hidden="true">#</a> 添加了兼容的浏览器location.replace方法</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>url {String} 跳转地址</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">loactionReplace</span><span class="token punctuation">(</span><span class="token string">'./demo.html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">loactionReplace</span><span class="token punctuation">(</span><span class="token string">'http://www.baiud.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toasyncawait" tabindex="-1"><a class="header-anchor" href="#toasyncawait" aria-hidden="true">#</a> toAsyncAwait</h2>
<h3 id="async-await关键字错误处理优化方法-不再需要使用try-catch和then" tabindex="-1"><a class="header-anchor" href="#async-await关键字错误处理优化方法-不再需要使用try-catch和then" aria-hidden="true">#</a> async await关键字错误处理优化方法，不再需要使用try catch和then；</h3>
<div class="custom-container tip"><p class="custom-container-title">参数</p>
<ul>
<li>promise {Promise} promise对象</li>
<li>fromatResult {Boolean} 是否处理成统一格式，不处理则直接返回第一个参数。 true处理，false不处理，默认为true</li>
</ul>
</div>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> <span class="token function-variable function">getInfo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
		cosnt <span class="token punctuation">{</span>error<span class="token punctuation">,</span>resutl<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">toAsyncAwait</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://xxxxx'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//错误处理</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token comment">// 正常业务逻辑处理</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 一般不会这么用 </span>
    <span class="token function">toAsyncAwait</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://xxxxx'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token comment">// 正常业务</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token comment">//错误处理</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


