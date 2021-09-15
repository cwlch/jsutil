# 使用教程


## CDN快速开始
+ 可通过 jsutil.gykeji.com 获取到最新版本的资源，在页面上引入js即可开始使用。
+ 会暴露一个“ **jsUtil** ”全局变量

```html
<script src="http://jsutil.gykeji.com/lib/jsUtil-umd.js"></script>
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
在你要用到相关方法的页面直接引入方法即可
```javascript
import {isEmpty,isPhone} from 'js-util-all';

const a = '';
isEmpty(a); // true
isPhone(a); // false
```

##### 在文件中直接全量引入
page.js
```javascript
import * as jsUtil from 'js-util-all';

const a = '';
jsUtil.isEmpty(a); // true
jsUtil.isPhone(a); // false
```
:::warning 提示
如果要全用* as方法全量引入，记住要把babel-plugin-component的配置删掉
:::




