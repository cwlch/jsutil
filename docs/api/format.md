# （格式化|转换）类
## _FormatDate
 时间格式化
::: tip 参数
+ date {String | Number | Date} 时间字符串，或毫秒数，或Date类型 
    - 非必传，需要传指定格式时则必传
    - 默认为当前时间
+ _FormatStr {String} 时间格式 
    - （y 年）（m 月）（d 日）（h 时）（i 分）（s 秒）（q 季）（ l毫秒-小写的L）
    - 非必传；默认格式为 yyyy/mm/dd
:::
- 示例
```javascript
    _FormatDate() //2020/12/02
    _FormatDate('2020年12月2日3时3分20秒','yyyy-mm-dd hh:ii:ss') //2020-12-02 03:03:20
    _FormatDate(1606918942000,'yyyy-mm-dd hh:ii:ss') //2020-12-02 22:22:22
    _FormatDate('2020-12-02') //2020/12/02
```




## _FormatJsonSearch
 json转URL Seach参数格式
::: tip 参数
+ json {Object} 需要转换的JSON对象 
+ connector {String} 连接符（第一位字符）
    - 默认为 “?” 
:::
- 示例
```javascript
    _FormatJsonSearch({a:'a1',b:'b1',c:'哈哈'}) //?a=a1&b=b1&c=%E5%93%88%E5%93%88
    _FormatJsonSearch({a:'a1',b:'b1',c:'哈哈'},'&') //&a=a1&b=b1&c=%E5%93%88%E5%93%88
```

## _FormatSearchJson
 URL Search参数转JSON对象
::: tip 参数
searchStr {String} search串
:::
```javascript
    //注意第一个字符 
    _FormatSearchJson('?a=a1&b=b1&c=%E5%93%88%E5%93%88') //{a: "a1", b: "b1", c: "哈哈"}
    _FormatSearchJson('a=a1&b=b1&c=%E5%93%88%E5%93%88') //{a: "a1", b: "b1", c: "哈哈"}
    _FormatSearchJson('&a=a1&b=b1&c=%E5%93%88%E5%93%88') //{a: "a1", b: "b1", c: "哈哈"}
```

## _FormatBlobUrl
 二进制文件流转成可访问的URL
 常用于图片预览，[文件下载](/api/ohter.html#downblobfile)等场景
::: tip 参数
+ blob {Blob} 二进制文件流对象
:::
::: tip return
+ Object 会返回一个自定义对象
    - url {String} 可访问的URL字符串
    - revoke {Function} 释放当前实例生成的URL对象在浏览器中所占的内存
:::
```html
    <input type="file" id="input">
    <img id="img" width="100" alt="上传图片预览处" height="100"/>
    <script>
        const $img = document.querySelector('#img');
        const $input =  document.querySelector('#input')
        $input.addEventListener('change',(e)=>{
            // 主要要代码主要要代码主要要代码
            const blobFile = e.target.files[0]; //拿到二进制文件流
            const urlObject = _FormatBlobUrl(blobFile); //生成URL对象            
            $img.setAttribute('src',urlObject.url) //给img标签赋值，预览效果生效
        })
    </script>
```

## _FormatMoneyNumCapital
 数字金额转成中文大写
::: tip 参数
+ money {Number} 数字金额
+ prefix {String} 金额为负数时的前缀
    - 非必传，默认为空串''。如 '欠贰佰圆整'，“欠”就是前缀；
:::
- 示例
```javascript
    _FormatMoneyNumCapital(200) //贰佰元整
    _FormatMoneyNumCapital(200.00) //贰佰元整
    _FormatMoneyNumCapital(200.012) //贰佰元壹分
    _FormatMoneyNumCapital(-200.012,'欠') //欠贰佰元壹分
    _FormatMoneyNumCapital(-200.012) //贰佰元壹分
```
## _FormatMoneySymbol
 金额加千位符格式化,大于等于100万时添加千位符
:::tip 参数
+ money {Number | String} 金额
    - 必传参数，如果为null 或 undefined 或空串 返回null
:::
:::tip return
{ String | Null}
:::


- 示例
```javascript
    _FormatMoneySymbol(1000000) //1,000,000.00
    _FormatMoneySymbol(1000) //1000.00
    _FormatMoneySymbol() //null
    _FormatMoneySymbol() //null
    _FormatMoneySymbol(null) //null
```