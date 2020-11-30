# 校验类
## isEmpty
### 校验一个变量是否为空
#### 各类型判断说明
|类型|说明|
|----|----|
|String|空字符串返回true，其他返回false|
|Number|返回false,只要有数字则实际不为空|
|Object|{}返回true，只有有属性的对象才判断是不为空|
|Array|[]返回true，只有长度大于0的数组才判断不为空|
|Null|返回true|
|Undefined|返回true|
#### 示例
``` javascript
const a = '',
	b = null,
	c = undfined,
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
### 校验是否为正常的姓名格式，支持中英文姓名格式；<br>
- 中英文统一规则2-20,中文（中国一般限制最大6位，香港，台湾，少数名族最大的可为20位）;
- 英文姓名支持 - 和空格;

##### 示例
``` javascript
isName('欧阳张三');//true
isName('Jason Statham');//true
```
## isPhone
### 校验是否为手机号，支持13-9号段;

##### 示例
``` javascript
isPhone(13202023232); //true
isPhone(19982023232); //true
isPhone(12882023232); //false
```
## isTel
### 判断是否为座机号码

#### 示例
``` javascript
isTel('0731-1231456'); //true
```

## isEmail
### 校验邮箱格式是否正确

## isIdCard
### 校验身份证号是否正确

## isMoney
### 校验是否为金额格式