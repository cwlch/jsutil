---
home: true

heroImage: 
heroText: 
tagline: 
footer:  copyright © 2020-present 蓝方人 湘ICP备2020020206号-1
---


<div class="banner">
    <img class="banner--logo" title="jsutil" alt="jsutil" src="/imgs/logo.png" />
    <div>
        <h1 class="banner--title">Jsutil</h1>
        <p class="banner--desc">一个javascript功能型函数库  工具库</p>
    </div>
</div>

<style>
    .banner{
        padding: 50px 0;
        display:flex;
        align-items:flex-end;
        justify-content: center;
        font-weight:bold;
    }
    .banner--logo{
        width:200px;
        margin-right:50px
    }
    .banner--title{
        font-size:42px;
    }
    .banner--desc{
        font-size:20px;
        /* color: #6a8bad; */
        color: #999;
        margin-bottom:0;
        line-height:20px;
    }
</style>

## 介绍
Jsutil是一个javascript功能型函数库，工具库；<br><br>
Jsutil重点是不断积累实用的功能型函数，使我们平时开发变得更快捷；<br><br>
Jsutil不会在数组，对象，字符串，这些原生对象的使用上花太多时间；<br><br>
Jsutil一直在积累的路上，如果你在Jsutil库里没找到你想要的函数。欢迎加入我们一起维护Jsutil！！！
<br/><br/>
 [发起PR→](https://github.com/cwlch/jsutil) [留言](https://github.com/cwlch/jsutil/issues)


## CDN快速开始
+ [获取最新jsutil文件](https://github.com/cwlch/jsutil/blob/v1.0.6/lib/jsUtlis-umd.js)
+ 会暴露一个“ **jsutil** ”全局变量

```html
<script src="jsutil-umd.js"></script>
<script>
	jsutil._IsName('你的名字'); //true
	jsutil._IsName('你的名字12'); //false
	// jsutil....
</script>
```
## npm安装
``` sh
npm i @gykeji/jsutil -S
```

#### 按需引入
- 你可以引入整个jsutil，或是根据需要仅引入部分方法。**建议按需引入**;
- 在你要用到相关方法的页面直接引入方法即可
```javascript
import {_IsEmpty,_IsPhone} from '@gykeji/jsutil';

const a = '';
_IsEmpty(a); // true
_IsPhone(a); // false
```

##### 在文件中直接全量引入
```javascript
import jsutil from '@gykeji/jsutil';

const a = '';
jsutil._IsEmpty(a); // true
jsutil._IsPhone(a); // false
```




<!-- ## 函数集
[校验一个变量是否为空 、 ](/api/is.html#isempty)
[校验是否为正常的姓名格式 、 ](/api/is.html#isname)
[校验是否为手机号 、 ](/api/is.html#isphone)
[校验是否为座机号 、 ](/api/is.html#istel)
[校验邮箱格式是否正确 、 ](/api/is.html#isemail)
[校验身份证号是否正确 、 ](/api/is.html#isidcard)
[校验是否为金额格式 、 ](/api/is.html#ismoney)
[设置cookei 、 ](/api/set.html#setcookie)
[设置localStorage 、 ](/api/set.html#setlocalstorage)
[设置sessionStorage 、 ](/api/set.html#setsessionstorage)
[获取变量类型 、 ](/api/get.html#getvartype)
[获取cookie 、 ](/api/get.html#getcookie)
[获取localStorage 、 ](/api/get.html#getlocalstorage)
[获取sessionstorage 、 ](/api/get.html#getsessionstorage)
[获取浏览器UserAgent信息 、 ](/api/get.html#getuainfo)
[时间格式化 、 ](/api/format.html#formatdate)
[金额格式化 、 ](/api/format.html#formatmoney)
[json转URL Seach参数格式 、 ](/api/format.html#formatjsonsearch)
[URL Search参数转JSON对象 、 ](/api/format.html#formatsearchjson)
[二进制文件流转成可访问的URL 、 ](/api/format.html#formatbloburl)
[数字金额转成中文大写 、 ](/api/format.html#formatmoneynumcapital)
[对象深拷贝 、 ](/api/ohter.html#extend)
[动态加载JS（并联） 、 ](/api/ohter.html#loadscript)
[动态加载JS（串联） 、 ](/api/ohter.html#loadscriptawait)
[小于10正整数补0 、 ](/api/ohter.html#fillzero)
[创建一个UUID 、 ](/api/ohter.html#creatuuid)
[下载二进制流文件到本地 、 ](/api/ohter.html#downblobfile)
[添加了兼容的浏览器location.replace方法 、 ](/api/ohter.html#loactionreplace) -->



