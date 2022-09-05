# 其他类
## _Calc
 数字计算，浮点数高精度加,减,乘,除
:::tip 参数
+ symbol {String} 计算符号字符串,支持"+，-，*，/";
+ num1 {Number | String} 计算数字1
+ num2 {Number | String} 计算数字2
+ ...numn {Number | String} 多数字顺序计算
:::

- 示例
``` javascript
// 加  
let a = 0.56 + 0.28 //原生 0.8400000000000001
let b = _Calc('+',0.56,0.28) //0.84
console.log(a,b)
// 减
let a = 0.3 - 0.1 //原生 0.19999999999999998
let b = _Calc('-',0.3,0.1) //0.2
console.log(a,b)

// 乘
let a = 0.8 * 0.51 //原生 0.40800000000000003
let b = _Calc('*',0.8,0.51) //0.408
console.log(a,b)

// 除
let a = 0.95 / 0.1 //原生 9.499999999999998
let b = _Calc('*',0.95,0.1) //9.5
console.log(a,b)

// 多位数计算
let a = 0.24 + 0.29 + 0.88 //1.4100000000000001
let b = _Calc('+',0.24,0.29,0.88) //1.41
console.log(a,b)



```


## _Extend
 对象拷贝，与JQ的_Extend类似（对象继承）
 支持(深拷贝，浅拷贝)，对象中的方法同样也会拷贝（继承）
:::tip 参数
+ target {Object | Array} 第一个对象参数，为继承者。表示后面的所有args参数都会拷贝至这个对象
+ [...args]{Object | Array} 可以为无限个对象。被继承者，后一个覆盖前一个的属性
+ deep {Blooen} 最后一位参数，如果为true或是正常的agrs参数则执行深拷贝，如果为false，则执行前拷贝
:::

- 示例
```javascript
    let myA = {
        name : 'a',
        arr : [{arr1:'arr1'},{arr2:'arr2'},{arr3:'arr3'},{arr4:'arr4'}],
        obj : {
            obj1 : 'obj1',
            obj2 : {
                obj21 : 'obj21',
                obj22 : 'obj22'
            },
            fn (){
                alert('a')
            }
        }
        
    }
    let copayA = {
        name : 'copay-a',
        age : 'copay-age',
        arr : [{arr1 : 'copay-arr1'},{arr22:'copay-arr22'},'copay-arr3'],
        obj : {
            obj2 : {
                obj22 : 'copy-obj22'
            },
            fn(){
                alert('copy-a')
            }
        }
    }
    // demo一 深拷贝
    myA.obj.fn()  //alert 'a'
    _Extend(myA,copayA);
    myA.obj.fn() //alert 'copy-a'
    console.log('myA:',myA,'copayA:',copayA)
    myA = {
        'name' : 'copay-a',
        'age' : 'copay-age',
        'arr' : [{arr1:'copay-arr1'},{arr2:'arr2',arr22:'copay-arr22'},'copay-arr3',{arr4:'arr4'}],
        'obj' : {
            obj1 : 'obj1',
            obj2 : {
                obj21 : 'obj21',
                obj22 : 'copy-obj22'
            },
            fn (){
                alert('copy-a')
            }
        }
    }
    
    // demo二 浅拷贝 每次只测试一种demo
    // myA.obj.fn();
    // _Extend(myA,copayA,false);
    // myA.obj.fn();
    // console.log('myA:',myA,'-----copayA:',copayA);
    
    // demo三 如果要想不改变原有的对象，第一个参数传个空对象或空数组即可
    // myA.obj.fn();
    // const newObj = _Extend({},myA,copayA);
    // myA.obj.fn();
    // newObj.obj.fn()
    // console.log('newObj:',newObj, '------myA:',myA,'-----copayA:',copayA);

    // demo四 多个对象拷贝,并且执行浅拷贝
    // myA.obj.fn();
    // const newObj = _Extend({},copay1,copayn2,....,copayn+,false);
    // myA.obj.fn();
    // newObj.obj.fn()
    // console.log('newObj:',newObj, '------myA:',myA,'-----copayA:',copayA);
```

## _LoadScript
 动态加载JS（并联）如果是多个js，他会同时加载
:::tip 参数
+ scriptStr {String | Array}  js地址，单个可以直接使用字符串，多个使用数组形式； 
:::
:::tip return
+ Promise 所有JS加载完成后，执行Promise成功回调
:::
- 示例
```javascript
    // a.js console.log('1') 
    // b.js console.log('2')
    // c.js console.log('3')

    // 加载多个JS
    _LoadScript(['./a.js','./b.js','./c.js']).then(res=>{
        console.log('加载成功') //此处输出一定会在其他JS都输出完才会执行
    }); //输出2,3,1 顺序不固定


    // 加载单个JS
    _LoadScript('./a.js').then(res=>{
        console.log('加载成功') //此处输出一定会在其他JS都输出完才会执行
    }); 
    _LoadScript(['./a.js']).then(res=>{
        console.log('加载成功') //此处输出一定会在其他JS都输出完才会执行
    }); 
```
## _LoadScriptAwait
 动态加载JS（串联）如果是多个js，他会按照数组顺序一个一个的加载
:::tip 参数
+ scriptStr {String | Array}  js地址，单个可以直接使用字符串，多个使用数组形式； 
:::
:::tip return
+ Promise 所有JS加载完成后，执行Promise成功回调
:::

- 示例
```javascript
    // a.js console.log('1') 
    // b.js console.log('2')
    // c.js console.log('3')

    // 加载多个JS
    _LoadScriptAwait(['./a.js','./b.js','./c.js']).then(res=>{
        console.log('加载成功') 
    }); 
    //输出1，2，3，加载成功，会按照数组顺序固定输出，最后输出then方法的回调
```
:::warning 建议
如果加载单个JS建议使用 _LoadScript
:::


## _FillZero
 小于10正整数补0
:::tip 参数
+ number {Number | String} 数字
:::
:::tip return
+ String | Number 小于10的正整数，返回带不齐0的字符串，其他原样返回参数
:::
- 示例
```javascript
    _FillZero(1)    // 01
    _FillZero(0.1)    // 0.1
    _FillZero(-0.1)    // -0.1
    _FillZero('2')  // 02
    _FillZero('11') // 11
```
## _CreatUUID
 创建一个UUID
:::tip 参数
+ len 指定长度，非必传
+ radix 基数,非必传
:::

- 示例
```javascript
    _CreatUUID() // EB4479E4-CA4A-4377-AC97-5C3424CCA6EF
    _CreatUUID(32, 2)  //  "10010100000011100011101010001011"
    _CreatUUID(32, 10) // "82841022800573848567251899801403"
    _CreatUUID(32, 16) // "F743098834031FDFCE1D8976F9769222"
```
## _DownBlobFile
 下载二进制流文件到本地
:::tip 参数
+ blob {Blob} 二进制文件流对象 
+ fileOptin {Object} 下载文件配置参数
    + name {String} 文件名，非必传。不传时自动取blob对象的name属性，如果没有name属性取当前时间戳
    + suffix {String} 扩展名，非必传。不传时从blob对象的name属性截取，如果没有name属性，则通过blob对象的type判断
:::

- 示例
```html

    <input type="file" id="input">
    <button id='btn'>下载刚上传的图片</button>
    <script>
        const $input =  document.querySelector('#input');
        const $btn =  document.querySelector('#btn');

        $btn.addEventListener('click',(e)=>{
            let myBlob = $input.files[0];
            // 下载二进制文件流到本地
            _DownBlobFile(myBlob);
            _DownBlobFile(myBlob,{name:'我的名字'});
            _DownBlobFile(myBlob,{suffix:'gif'});
            _DownBlobFile(myBlob,{name:'你的名字',suffix:'gif'});
        })
    </script>

```
## _LoactionReplace
 添加了兼容的浏览器location.replace方法
:::tip 参数
+ url {String} 跳转地址
:::
- 示例
```javascript
    _LoactionReplace('./demo.html');
    _LoactionReplace('http://www.baiud.com');
```

## _ToAsyncAwait
 async await关键字错误处理优化方法，不再需要使用try catch和then；
:::tip 参数
+ promise {Promise} promise对象
+ fromatResult {Boolean} 是否处理成统一格式，不处理则直接返回第一个参数。 true处理，false不处理，默认为true
:::
- 示例
```javascript
    const getInfo = async ()=> {
		cosnt {error,resutl} = await _ToAsyncAwait(axios.get('http://xxxxx'));
		if(error){
			//错误处理
			console.log(error);
		}else{
			// 正常业务逻辑处理
			console.log(result);
		}
    }
    // 一般不会这么用 
    _ToAsyncAwait(axios.get('http://xxxxx'),false).then((res)=>{
        // 正常业务
        console.log(res);
    }).catch(e=>{
        //错误处理
        console.log(e);
    });


```