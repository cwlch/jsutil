#安装使用

切换分支到master
node 版本 8.9.4 及以上
安装yarn
`npm install yarn`
项目初始化
`yarn install`

打开package_config，把不需要的方法进行注释。然后终端执行`webpack || npm run start`即可；
最终输出文件为`/dist/Utils.js`  输出变量名为 `Utils`;
    注意：`Utils.js`文件相当于一个第三方插件，对外暴露`Utils`对象。正常怎么使用三方插件，就怎么使用Utils;
    demo位置`src/index.html`


#添加功能方法
拉取新分支，分支以扩展方法命名;
统一添加至modules目录，`文件名以功能方法命名`。
如添加获取URL参数方法，文件则命名为getURLParams.js；
统一使用`es6语法`，使用export输了功能；
完成后需要在package_config.js文件里把你的方法添加到modlues列表里，并进行说明；
提交代码，找负责人审核代码，合并至master分支





