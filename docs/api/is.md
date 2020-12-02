# 校验类
## isEmpty
### 校验一个变量是否为空
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
isEmpty(b); //true
isEmpty(c); //true
isEmpty(d); //true
isEmpty(e); //true
isEmpty(f); //false

```
## isName
### 校验是否为正常的姓名格式，支持中英文姓名格式；

::: tip 参数
+ val { string }  
:::

>- 中英文统一规则2-20,中文（中国一般限制最大6位，香港，台湾，少数名族最大的可为20位）;
>- 英文姓名支持 - 和空格;

- 示例
``` javascript
isName('欧阳张三');//true
isName('Jason Statham');//true
```
## isPhone
### 校验是否为手机号，支持13-9号段;
::: tip 参数
+ val { number | string }  
:::

- 示例
``` javascript
isPhone('13202023232'); //true
isPhone(19982023232); //true
isPhone(12882023232); //false
```
## isTel
### 判断是否为座机号码,只支持示例中的输入格式；
::: tip 参数
+ val { string }  
:::

- 示例
``` javascript
isTel('0731-1231456'); //true
```

## isEmail
### 校验邮箱格式是否正确;
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
isEmail('cwl_ch@163.com'); //true
isEmail('cwl-_ch@gjke-compay.com'); //true
isEmail('cC.wl-_ch@gjke-我是.中文.vipcn') //true
isEmail('cwl-_ch@gjke-compay.vip.cn') //true
isEmail('cC.wl-_ch@vipcn') //false
```

## isIdCard
### 校验身份证号是否正确
::: tip 参数
+ val { string }  
:::
>使用加权因子计算校验
``` javascript
isIdCard('430529202002025271') //false 非正确身份证，可以使用自己身份证改一个数字试试。
```

## isMoney
### 校验是否为金额格式
::: tip 参数
+ val { string | number}  
:::
>+ 最小到分单位
>+ 最大到万亿
>+ 如果0开头，要么单数0，否则带2位0-9小数
>+ 非0开头1-13位纯数字，可带2位0-9小数
- 示例
``` javascript
	isMoney(111.11); //true
	isMoney(0.11); //true
	isMoney(0.00); //true
	isMoney(0); //true
	isMoney(1111111111111.11); //true  
	isMoney(11111111111111); //false  
	isMoney(111.111); //false 
	isMoney('0.000'); //false 
```
::: warning 提示
参数最好使用String类型，如果是Number类型0.00000这种格式会判断为正确，因为0.00000系统识别为0
:::