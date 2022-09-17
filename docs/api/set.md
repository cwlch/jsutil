# 设置类

## _SetCookie
 设置ckookie
::: tip 参数
+ key {string} cookie名
+ value {string} cookei值
+ option {object}
    - domain  默认为 window.location.hostname值
    - path  默认为 '/'
    - expires 默认为空, 设置为毫秒数（多少毫秒后失效）
    - secure  默认不设置
:::

- 示例
``` javascript
// 30分钟后失效
const expires =   30 * 60 * 1000
_SetCookie('myCookieName','我是cookie值',{expires:expires});
```

## _SetLocalStorage
 设置localStorage
::: tip 参数
+ key {string} 名称
+ value {string | JSON} 值，字符串或正常的JSON串
:::

- 示例
``` javascript
_SetLocalStorage('localStorage',{a:'a',b:'b'});
_SetLocalStorage('localStorage2','localStorage2');
```

## _SetSessionStorage
 设置sessionStorage
::: tip 参数
+ key {string} 名称
+ value {string | JSON} 值，字符串或正常的JSON串
:::

- 示例
``` javascript
_SetSessionStorage('sessionStorage',{a:'a',b:'b'});
_SetSessionStorage('sessionStorage2','sessionStorage2');
```