# 其他类
## extend
### 对象拷贝
### 支持(深拷贝，浅拷贝)，对象中的方法同样也会拷贝

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
    jTools.extend(myA,copayA);
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
    // jTools.extend(myA,copayA,false);
    // myA.obj.fn();
    // console.log('myA:',myA,'-----copayA:',copayA);
    
    // demo三 不改变原有的对象
    // myA.obj.fn();
    // const newObj = jTools.extend({},myA,copayA);
    // myA.obj.fn();
    // newObj.obj.fn()
    // console.log('newObj:',newObj, '------myA:',myA,'-----copayA:',copayA);
```

## loadScript
### 动态加载JS（并联）

## loadScriptAwait
### 动态加载JS（串联）

## follZero
### 个位数补0

## creatUUID
### 创建一个UUID

## downBlobFile
### 下载二进制流文件到本地

## loactionReplace
### 浏览器replace方法，不计入历史记录跳转