/**
 * 打包前配置文件，在此选择你需要的功能进行打包，把不需要的功能注释掉
 * 功能详细使用说明请到模块内查看
 */
const config = {
    modules : [
        'cookie',//操作cookie
        // 'js3des',//3des加密
        // 'escapeHTML',//html转为字符串输出
        // 'extend',//对象拷贝
        // 'formatNumber',//格式化数字
        // 'getURLParams',//获取URL参数并转为对象
        // 'goUrl',//url跳转
        // 'isEmpty',//判断是否为空
        // 'isVisible',//判断DOM节点是否可见
        'mresize',//设置html fon-size基数
        // 'randomString',//生成随机字符串
        // 'template',//简单模板替换
        // 'trim',//去除空格
        // 'type',//判断变量类型
        'ua',//查询浏览器，及设备类型
        // 'uuid',//生成随机id
        // 'verfiyBankCard',//检测银行卡号是否合法
        // 'verfiyID',//检测身份证号是否合法
        // 'verfiyName',//检测姓名是否合法
    ]
}
export default config;