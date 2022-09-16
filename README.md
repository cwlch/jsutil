## Jsutil 介绍
Jsutil是一个javascript功能型函数库，工具库；<br><br>
Jsutil重点是不断积累实用的功能型函数，使我们平时开发变得更快捷；<br><br>
Jsutil不会在数组，对象，字符串，这些原生对象的使用上花太多时间；<br><br>
Jsutil一直在积累的路上，如果你在Jsutil库里没找到你想要的函数。欢迎加入我们一起维护Jsutil！！！
<br/><br/>
 [发起PR→](https://github.com/cwlch/jsutil) [留言](https://github.com/cwlch/jsutil/issues)


## CDN快速开始
+ [获取最新jsutil文件](https://github.com/cwlch/jsutil/blob/v1.0.6/lib/jsutil-umd.js)
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


# [官方文档](http://jsutil.gykeji.com)