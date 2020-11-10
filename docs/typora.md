# API 

#### isEmpty【判断变量是否为空】
##### 各类型判断返回值
|类型|说明|
|----|----|
|String|空字符串返回true，其他返回false|
|Number|返回false,只要有数字则实际不为空|
|Object|{}返回true，只有有属性的对象才判断是不为空|
|Array|[]返回true，只有长度大于0的数组才判断不为空|
|Null|返回true|
|Undefined|返回true|

##### 示例
>``` javascript
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
>```


#### isIdCard【身份证号校验】
##### 描述
>只有完全符合17位字体本码，1位校验码规则的才会判断正确：
排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位校验码

##### 示例
```
isIdCard(123456789012345678); //false  有18位，但完全不符合身份证格式
```

#### isMoney【金额格式校验】
##### 描述
>开头必须是**非0数字**
最大**两位小数**
最大数值到**万亿**
允许参数为字符串和数字

##### 示例
```javascript
isMoney(123);//true
isMoney(123.01);//true
isMoney(123.0);//true
isMoney(123.00);//true
isMoney('123.00');//true

isMoney(0123);//false
isMoney(123.001);//false
isMoney(12345678901230);//false
```
#### isName【校验姓名格式】
##### 描述
>支持中英文姓名格式；

##### 示例
```javascript
isName('欧阳张三');//true
isName('Jason Statham');//true
```
#### isPhone【验证手机号码】
##### 描述
>支持13-9号段

##### 示例
```
isPhone(13202023232); //true
isPhone(19982023232); //true
isPhone(12882023232); //false
```
#### getVarType【获取变量类型】
##### 描述
>支持类型：Null,Undefined,Object,Array,String,Number,Boolean,Function,RegExp,NaN,Infinite
返回小写类型名称

##### 示例
```javascript
getVarType(123); //number
getVarType('123')； //string
const a;
getVarType(a);//undefined
...
```

#### getUaInfo【获取浏览器信息】
##### 描述
>返回一个包含浏览器名称，系统名称的对象

##### 示例
```javascript
getUaInfo();//{browser:'chrome',system:'windows'}

```

#### trimSpace【去除字符串俩头空格】
##### 描述
>删除字符串俩头部必要的空格

##### 示例
```
const str = '  我的中  间有空格   ';
trimSpace(str); //我的中  间有空格
```

#### stipulateExtend【重新指定继承】
##### 描述
>指定args1对象中的属性重新使用args2对象进行赋值

##### 参数
>方法接收两个参数

- @param args1 {Object} 需要重新赋值的对象
- @param args2 {Object} 继承来源对象

##### 示例
```
const args1 = {
	a : 'a',
	b : 'b',
	c : 'c',
	d : 'd'
};
const args2 = {
	a : '1',
	b : '2',
	f : '3'
}
const res = stipulateExtend(args1,args2);
console.log(res);//{a:'a', b:'b', f:'3'}

```
#### formatDate【时间格式化】
##### 描述
>时间格式处理

##### 参数
- @param args1 {Date | Number | String} 时间对象,可以是时间对象，可以被Date构造函数识别的字符串时间格式，或者数字类型的毫秒，秒；
+ @param args2 {String} 需要的格式 默认为 yyyy/MM/dd
	* y 年
	* M 月
	* d 日
	* h 时
	* m 分
	* s 秒

##### 示例
```
formatDate(new Date()); //2020/01/01
formatDate(new Date(),'yyyy/MM/dd hh:mm:ss'); //2020/01/01 00:00:00
formatDate(new Date().getTime()); //2020/01/01
formatDate('2020-01-01 00:00:00','yyyy年M月d日 h时m分s秒'); //2020年1月1日 0时0分0秒
```

#### cookie【cookie操作】
##### 描述
>获取和设置cookie操作
只传cookie名则默认为获取cookie
带上其他参数则为设置cookie

##### 参数
- args1 {String} cookie名，必传
- args2 {String} cookie value值，设置cookie时传递
- args3 {String} cookie domain值，设置cookie时传递
- args4 {String} cookie path值，设置cookie时传递
- args5 {String} cookie expires值，设置cookie时传递



##### 设置cookie
```
//设置了一个有效时间为1天的cookie
cookie('myCookie','我的cookie','www.baidu.com','/',24 * 60 * 60 * 1000)
```

##### 获取cookie
```
//获取已存的cookie
cookie('myCookie'); //我的cookie

```
#### loadScript【动态加载JS】
##### 描述
>动态加载JS文件支持同步和异步加载

##### 并联加载[同步]同时加载，不管上个是否加载完成，直接加载全部
```
//加载单个js
loadScript('http://xxx.xxx.com/js/xx.js');
//加载多个js
loadScript(['http://xxx.xxx.com/js/xx.js','http://xx.xxx.com/xxx.js']);
```

##### 串联加载[异步]逐个加载，每个加载完成后加载下一个
```
//加载单个js
loadScript.asyncLoad('http://xxx.xxx.com/js/xx.js');
//加载多个js
loadScript.asyncLoad(['http://xxx.xxx.com/js/xx.js','http://xx.xxx.com/xxx.js']);
```

#### jsBridge【与APP交互桥梁】


##### 描述
>与APP的交互桥梁,支持以下两种方式：
>H5请求APP（APP注册事件，H5调用APP事件）
>H5注册APP请求接口(H5注册事件，APP掉用H5事件）

##### adndroid,iOS对应使用的库
https://github.com/lzyzsd/JsBridge 
https://github.com/marcuswestin/WebViewJavascriptBridge

##### H5请求APP（调用APP事件） 
```
//第一个参数为APP提供的请求地址（事件名）
//第二参数为需要传给APP的参数数据，可以为空
//第三个参为请求处理完成后的回调函数

jsBrodge.callhandler('eventName',{par:1,parame:2},(reslut)=>{
	//reslut 与APP协议的请求反馈结果
	//处理结果
})
```

##### H5注册APP请求接口（H5注册事件） 
```
//第一个参数为提供的请求地址（事件名）
//第三个参为接收到请求后的处理函数（回调函数）

//回调函数接口两个参数
//第一个参数为APP传过来的参数数据
//第二个参数为处理完成后通知APP的函数，这个函数可以与APP协商传递什么样的反馈结果给他

jsBrodge.registerhandler('eventName',(params,responseCallback)=>{
	//处理业务逻辑
	console.log(params);
	//处理完成后通知APP
	responseCallback('我处理完了这里可以是JSON或其他格式数据')
})
```

#### extend【对象与数组扩展】
##### 描述
>参照Jquery的extend暂只支持数组和Obeject对象的扩展
>会改变第一位被扩展者的原数据

##### 参数
- @param [target] {Object | Array} 第一个参数为被扩展对象，中间可传多个扩展对象，后一个覆盖前一个的逻辑扩展。最后一个参数为deep {Boolean} 是否深拷贝，true/是，false/否 不传为默认true会改变其原变量数据；

- @return {Object | Array} 返回扩展后的数据结果



##### 示例
```
	var a = {
            a : 'a',
            b : {
                c : 'c',
                d : function(){},
                f : { e : 'e'}
            },
            e: ['1','2',{'x' : 'xxx',y:'yyy'}]
        },
		b = {
			a : 'saaaaaaaaaaaaaaaa',
			b : {
				c : 'cccccc',
				d : 'ddd',
				f : {
					g : 'ggggggg',
					e : 'eeeeeeeeee'
				}
			},
			e:[1,2,{x:3,y:'y',z:'zzz'},4,5,6,7],
			h : 'hhhhh'
		},
		c = extend(b,a);

    console.log(c)

	//输出结果为   变量c 和 b会是同样结果
	{
		a : 'a',
		b : {
			c : 'c',
			d : function(){},
			f : {
				g : 'ggggggg',
				e : 'e'
			}
		},
		e:['1','2',{x:'xxx,y:'yyy',z:'zzz'},4,5,6,7],
		h : 'hhhhh'
	}


```
#### toJsonSearch【url参数操作】
##### 描述
>浏览器地址栏search参数获取以及拼接

##### 参数
- @param [url] {String} 第一个参数为url字符串，只要是（?a=b&c=d）都可以使用；
- @param [object] {Object | String} 第二个参数，参数类型为string时获取URL对应参数值；参数为Object时为URL添加参数；参数为空时获取整个URL参数并以对象形式返回；

##### 示例
```
	const url  =  http://www.baidu.com/index.html?a=1&b=2&c=3

	//获取参数a的值
	const a = toJsonSearch(url,'a'); // 1;

	//获取url整个参数对象
	const params = toJsonSearch(url); //{a:'1',b:'2',c:'3'}

	//扩展url参数 
	const newSearch = toJsonSearch(url,{c:'XXL',d:4,e:5}); //  a=1&b=2&c=XXL&d=4&e=5

```

#### toCapitalMoney【金额大写转换】
##### 描述
>金额数字转换为大写

##### 参数
- @param [money] {Number} 必填，需要转换的金额；
- @param [header] {String} 可选，转换金额为负数时的前缀，默认为空；

##### 示例
```
	toCapitalMoney(100.02);//壹佰元贰分
	toCapitalMoney(100);//壹佰元整
	toCapitalMoney(-100.02);//壹佰元贰分
	toCapitalMoney(100.02,'欠');//壹佰元贰分
	toCapitalMoney(-100.02,'欠');//欠壹佰元贰分

```

#### toBlobURL【Blob转可访问URL】
##### 描述
>Blob转可访问URL，可用于上传预览等

##### 参数
- @param [Blob] {Blob} 必填，需要转换的金额；

##### 返回
- @return [url] {string} 返回可访问URL

##### 示例
```
	
	<input type="file" id="input">
	const $input = document.getElementById('input');
	$input.onchange = async ()=>{
		const url = await toBlobURL($input.files[0]);
		console.log(url);
		
	}

```

#### toImgBase64【图片转成Base64格式】
##### 描述
>主要用于图片格式转换，图片尺寸修改

##### 参数
- @param [img] {object} 需要转换的图片对象
- @param [params:{width}]] {object:{number}} 非必传参数 新图片宽度 不传为当前图片宽度
- @param [params:{height}]] {object:{number}} 非必传参数 新图片高度 不传为当前图片高度
- @param [params:{type}]] {object:{string}} 非必传参数 新图片格式 不传为当前图片格式
- @param [params:{position}]] {object:{string}} 非必传参数 从原图片的哪个位置开始裁剪：'leftTop':左上角，'rightTop':右上角，'leftBottom':左下角，'rightBottom':右下角，不传为中心位置；
- @param [params:{scale}]] {object:{boolean}} 非必传参数 是否等比例缩小或放大 默认为true

##### 返回
- @return [url] {string} 返回可访问URL

##### 示例
```
	<!-- 继续上个荔枝 -->
	<input type="file" id="input">
	const $input = document.getElementById('input'),
		$img = new Image(),
        img = new Image();
        document.body.append($img)

	$input.onchange = async ()=>{
		const url = await GT.toBlobURL($input.files[0]);
		img.src = url;		
		console.log(url);		
	}
	document.body.append($img)
	//图片加载完成
	img.onload = ()=>{
		//重画图片
		$img.src = GT.toImgBase64(img,{
			width : 200,
            height : 200,
            position:'leftBottom',
			scale: false
		})
	}

```