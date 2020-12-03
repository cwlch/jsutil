# 使用教程


## CDN快速开始
+ 可通过 jsutil.gykeji.com 获取到最新版本的资源，在页面上引入js即可开始使用。
+ 会暴露一个“ **jsUtil** ”全局变量

```html
<script src="http://jsutil.gykeji.com/lib/jsUtil.all.js"></script>
<script>
	jsUtil.isName('你的名字'); //true
	jsUtil.isName('你的名字12'); //false
	// jsUtil....
</script>
```
## npm安装
``` sh
npm i js-util-all -S
```


## 引入
你可以引入整个jsUtil，或是根据需要仅引入部分方法。**建议按需引入**;
#### 按需引入
借助 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)，我们可以只引入需要的方法，减少没必要代码。

首先，安装 babel-plugin-component：
``` sh
npm install babel-plugin-component -D
```
然后，将 .babelrc文件 或package.json文件中的presets，plugins属性添加如下配置：
```javascript
{
	 //这里的是2015或evn看你之前的配置是啥就是啥
	"presets": [["es2015|| evn", { "modules": false }]]
	"plugins": [
    [
      "component",
      {
        "libraryName": "js-util-all",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
接下来，你在你要用到相关方法的页面直接引入方法即可
```javascript
import {isEmpty,isPhone} from 'js-util-all';

const a = '';
isEmpty(a); // true
isPhone(a); // false
```

#### 全量引入
如果全量引入可以在webpack中配置全局变量，也可以在使用文件中全部引入
##### webpack中配置全局变量
webpack.config.js
```javascript
resolve:{
	alias :{
		jsUtil : ['XXX你的路径XXX/node_modules/js-util-all/lib/index.js','default']
	}
}
```
page.js
```javascript
const a = '';
jsUtil.isEmpty(a); // true
```
<br>

##### 在文件中直接全量引入
page.js
```javascript
import * as jsUtil from 'js-util-all';

const a = '';
jsUtil.isEmpty(a); // true
jsUtil.isPhone(a); // false
```




