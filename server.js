/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-09-19 11:01:14
 * @LastEditors: ch
 * @LastEditTime: 2022-11-08 22:02:34
 * @Description: file content
 */
// 引入http内置模块
const http = require('http')

// 引入chalk 用于美化后台打印

const path = require('path')
const fs = require('fs');
const shell = require('shelljs');
// 引入基本配置
const conf = {
    // 主机名称
    hostname: '127.0.0.1',
    // 端口号
    port: 6969,
    // 当前文件夹
    root: process.cwd()
}

// 创建一个server 实例
const server = http.createServer((rep, res) => {
    // 拿到路径
    const filePath = path.join(conf.root, rep.url)

    // 判断是否为文件或者文件夹
    fs.stat(filePath, (err, stats) => {
        // 设置公共头部信息
        res.writeHead(200, { 'Content-Type': '*; charset=utf-8' })
        if (err) {
            // 状态码
            res.statusCode = 404

            // 找不到提示文本
            res.end(`${filePath} is 404`)

            return
        }
        if (stats.isFile()) {
            // 如果是文件 返回文件内容
            res.statusCode = 200

            fs.createReadStream(filePath).pipe(res)
        } else if (stats.isDirectory()) {
            // 如果是文件夹，返回文件列表
            fs.readdir(filePath, (err, files) => {
                if (err) return
                res.statusCode = 200

                res.end(files.join(','))
            })
        }
    })
})
console.log(`正在监听`);

fs.watch('./src/',{recursive:true},(event,filename)=>{
    
     if (filename){
          console.log(`${filename}文件发生更新`)
        shell.exec("npm run build");
    
     }

    });
//      function (f, curr, prev) {
//     console.log('---')
//     shell.exec("npm run build");
// });
// 监听 server 实例
server.listen(conf.port, conf.hostname, () => {
    const addr = `http:// ${conf.hostname}:${conf.port}`
    console.info(`server startd at ${addr}`)
})