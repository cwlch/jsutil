# 校验类
## _IsEmpty
 校验一个变量是否为空
::: tip 参数
+ val { string | number | object | array | null | undefined }  
:::

- 各类型判断说明

|类型|说明|
|----|----|
|String|空字符串返回true，其他返回false|
|Number|返回false,只要有数字则实际不为空|
|Object|{}返回true，只有有属性的对象才判断是不为空|
|Array|[]返回true，只有长度大于0的数组才判断不为空|
|Null|返回true|
|Undefined|返回true|

- 示例
``` javascript
const a = '',
	b = null,
	c = undefined,
	d = [],
	e = {},
	f = 0;
_IsEmpty(b); //true
_IsEmpty(c); //true
_IsEmpty(d); //true
_IsEmpty(e); //true
_IsEmpty(f); //false

```
## _IsName
 校验是否为正常的姓名格式，支持中英文姓名格式；

::: tip 参数
+ val { string }  
:::

>- 中英文统一规则2-20,中文（中国一般限制最大6位，香港，台湾，少数名族最大的可为20位）;
>- 英文姓名支持 - 和空格;

- 示例
``` javascript
_IsName('欧阳张三');//true
_IsName('Jason Statham');//true
```
## _IsPhone
 校验是否为手机号，支持13-9号段;
::: tip 参数
+ val { number | string }  
:::

- 示例
``` javascript
_IsPhone('13202023232'); //true
_IsPhone(19982023232); //true
_IsPhone(12882023232); //false
```
## _IsTel
 判断是否为座机号码,只支持示例中的输入格式；
::: tip 参数
+ val { string }  
:::

- 示例
``` javascript
_IsTel('0731-1231456'); //true
```

## _IsEmail
 校验邮箱格式是否正确;
::: tip 参数
+ val { string }  
:::
- 验证规则
>+ 邮箱 = 邮箱名 + @ + 域名
>+ 邮箱名 =（中文，字母，数字 开头）（中间可包含_-.+但不能连续多个）（中文，字母，数字 结尾） 
>+ 域名 = 前缀 + . +后缀
>+ 域名前缀 =（中文，字母，数字 开头）（中间可包含_-.+但不能连续多个）（中文，字母，数字 结尾） 
>+ 域名后缀 =（中文，字母，数字） 
- 示例
``` javascript
_IsEmail('cwl_ch@163.com'); //true
_IsEmail('cwl-_ch@gjke-compay.com'); //true
_IsEmail('cC.wl-_ch@gjke-我是.中文.vipcn') //true
_IsEmail('cwl-_ch@gjke-compay.vip.cn') //true
_IsEmail('cC.wl-_ch@vipcn') //false
```

## _IsIdCard
 校验身份证号是否正确
::: tip 参数
+ val { string }  
:::
>使用加权因子计算校验
``` javascript
_IsIdCard('430529202002025271') //false 非正确身份证，可以使用自己身份证改一个数字试试。
```

## _IsMoney
 校验是否为金额格式
::: tip 参数
+ val { string | number}  
:::
>+ 最小到分单位
>+ 最大到万亿
>+ 如果0开头，要么单数0，否则带2位0-9小数
>+ 非0开头1-13位纯数字，可带2位0-9小数
- 示例
``` javascript
	_IsMoney(111.11); //true
	_IsMoney(0.11); //true
	_IsMoney(0.00); //true
	_IsMoney(0); //true
	_IsMoney(1111111111111.11); //true  
	_IsMoney(11111111111111); //false  
	_IsMoney(111.111); //false 
	_IsMoney('0.000'); //false 
```
::: warning 提示
参数最好使用String类型，如果是Number类型0.00000这种格式会判断为正确，因为0.00000系统识别为0
:::