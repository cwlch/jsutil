# 获取类

## _GetVarType
 获取变量类型
::: tip 参数
+ key {string} 存储名称
:::

- 示例
``` javascript
_GetSessionStorage('mySessionStorage');
```

## _GetCookie
 获取ckookie
::: tip 参数
+ key {string} 存储名称
:::

- 示例
``` javascript
_GetCookie('myCookieName') //我是cookie值
```


## _GetLocalStorage
 获取localStorage
::: tip 参数
+ key {string} 存储名称
:::

- 示例
``` javascript
_GetLocalStorage('myLocalStorage');
```

## _GetSessionStorage
 获取sessionStorage
::: tip 参数
+ key {string} 存储名称
:::

- 示例
``` javascript
_GetSessionStorage('mySessionStorage');
```

## _GetUAInfo
 获取浏览器UserAgent信息
::: tip 参数
+ key {string} 存储名称
:::

- 示例
``` javascript
_GetSessionStorage('mySessionStorage');
```

## _GetIdCardSex
 根据身份证号获取性别
::: tip 参数
+ idCard {string} 身份证号
+ sexDesc {string} 对应性别描述数组，下标0为男生描述，1为女生描述 。默认 ['男','女']
:::

- 示例
``` javascript
_GetIdCardSex('4xxxxx202101015273',['先生','女士']); //{sex:0,sexName:'先生'}
```


## _GetIdCardBrithDay
 根据身份证号获取生日
::: tip 参数
+ idCard {string} 身份证号
:::

- 示例
``` javascript
_GetIdCardBrithDay('4xxxxx202101015273'); //20210101
```
