# gjtools简介

gjtools是工匠云的javascript工具库，主要提供一些原生js的快捷方法；

# 当前版本
1.0.0

# 使用教程
#### 安装
```
//npm安装 注意版本号使用最新版本 git库的标签
npm install git+https://e.coding.net/nlossert/gjtools.git#1.1.0

//直接引入

//找到lib下的gjtools.all.js下载放到本地
//文件内使用import引入或使用script标签引入

```
#### 文件内使用
##### 全量引入
```
import * as Tools from 'gjtools';

const a = '';
Tools.isEmpty(a); // true
Tools.isPhone(a); // false

```
##### 按需引入
```
import {isEmpty,isPhone} from 'gjtools';

const a = '';
isEmpty(a); // true
isPhone(a); // false

```

###### script标签引入
```
<script src='你的存放路径.gjtools.all.js'></srcipt>

//gjtools.all.js会暴露出一个GT全局变量； 使用GT全局变量即可
const a = '';
GT.isEmpty(a); // true
GT.isPhone(a); // false

```

##### webpack配置全局变量别名

webpack.config.js
```
resolve:{
	alias :{
		Tools : ['XXX你的路径XXX/node_modules/gjtools/lib/index.js','default']
	}
}
```

page.js
```
const a = '';
Tools.isEmpty(a); // true

```
#### API
[查看API](https://nlossert.coding.net/p/gjtools/d/gjtools/git/tree/develop/API.md?tab=markdown)
