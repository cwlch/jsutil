# 限制类
- 主要用于输入框输入限制。
- 也可以用于字符串格式化，有非法字符会被剔除掉；

## limitInt
### 限制只能是正整数
::: tip 参数
|参数名|类型|是否必传|说明|
|-----|-----|-----|-----|
|val|String,Number|是|需要验证转换的值|
:::
::: tip 返回值
|参数名|类型|说明|
|-----|-----|-----|
|num|number|转换后的值|
:::


- 示例
``` html
<!-- 限制输入框只能输入正整数 -->
<input id='input'/>
<script>
const $input = document.querySelector('#input');
$input.addEventListener('input',()=>{
    $input.value = limitInt($input.value);
})
</script>

```

## limitIntFloat
### 限制只能是正整数和浮点数
::: tip 参数
|参数名|类型|是否必传|说明|
|-----|-----|-----|-----|
|val|String,Number|是|需要验证转换的值|
|digit|Number|否|需要限制几位小数，不传则无限制|
:::
::: tip 返回值
|参数名|类型|说明|
|-----|-----|-----|
|num|number|转换后的值|
:::


- 示例
``` html

<input id='input'/>
<input id='inputFloat'/>
<script>
const $input = document.querySelector('#input');
const $inputFloat = document.querySelector('#inputFloat');
// 限制输入框只能输入正整数和浮点数，无小数点限制
$input.addEventListener('input',()=>{
    $input.value = limitIntFloat($input.value);
})
// 限制输入框只能输入正整数和浮点数，2位小数
$inputFloat.addEventListener('inputFloat',()=>{
    $inputFloat.value = limitIntFloat($inputFloat.value,2);
})
</script>

```

## limitPNInt
### 限制只能是正负整数
::: tip 参数
|参数名|类型|是否必传|说明|
|-----|-----|-----|-----|
|val|String,Number|是|需要验证转换的值|
:::
::: tip 返回值
|参数名|类型|说明|
|-----|-----|-----|
|num|number|转换后的值|
:::


- 示例
``` html
<!-- 限制输入框只能输入正负整数-->
<input id='input'/>
<script>
const $input = document.querySelector('#input');
$input.addEventListener('input',()=>{
    $input.value = limitInt($input.value);
})
</script>

```


## limitPNIntFloat
### 限制只能是正负整数和浮点数
::: tip 参数
|参数名|类型|是否必传|说明|
|-----|-----|-----|-----|
|val|String,Number|是|需要验证转换的值|
|digit|Number|否|需要限制几位小数，不传则无限制|
:::
::: tip 返回值
|参数名|类型|说明|
|-----|-----|-----|
|num|number|转换后的值|
:::


- 示例
``` html

<input id='input'/>
<input id='inputFloat'/>
<script>
const $input = document.querySelector('#input');
const $inputFloat = document.querySelector('#inputFloat');
// 限制输入框只能输入正负整数和浮点数，无小数点限制
$input.addEventListener('input',()=>{
    $input.value = limitPNIntFloat($input.value);
})
// 限制输入框只能输入正负整数和浮点数，2位小数
$inputFloat.addEventListener('inputFloat',()=>{
    $inputFloat.value = limitPNIntFloat($inputFloat.value,2);
})
</script>

```