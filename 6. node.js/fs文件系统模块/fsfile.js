// Node.js 官方提供的、用来操作文件的模块，它提供了一系列方法和属性

// (1)   fs.readFile(路径, 编码格式，回调函数);                 读取文件内容
// (2)   fs.writeFile(路径， 写入内容，回调函数);                写入文件内容
// (3)   const fs = require('fs);       引入模块 到变量
// (4)   err.message;                   获取错误信息
// (5)   path.join();                   将多个路径拼接成一个完整的路径
// (6)   path.basename();               从路径字符串中，提取文件名解析出来
// (7)   http.createServer();           创建web服务器

// const { resolve } = require('dns');
const fs = require('fs');
// // fs.readFile(); 读取文件  utf8编码格式
fs.readFile('./Text.txt', 'utf8', (err, dataStr)=>{         /* err 返回失败null，dataStr 返回成功结果 */
    if(err) return console.log('读取失败！！' + err.message);    /* 失败信息 */
    console.log('读取成功！！' + '\n' + dataStr);                /* 成功结果 */
});
// fs.writeFile(); 写入文件内容
fs.writeFile('H:/Text2.txt', '古诗词', err =>{
    // 如果文件写入成功 err = null
    // 如果文件写入失败 err = 错误对象
    if(err) return console.log('写入失败!! 没有H盘'+ '\n' + err.message);
    console.log('写入成功！！');
});

// path.join();   拼接路径  ../会抵消前面的路径
const path = require('path');
let pathStr = path.join('/a', '/b' ,'../', '/r', '/y');
console.log(pathStr);

// 拆分 html css js
// 1. 定义正则匹配 style 和 script
const Style = /<style>[\s\S]*<\/style>/;
const Script = /<script>[\s\S]*<\/script>/;
// 2. 读取文件
fs.readFile(path.join(__dirname,'./8.form-wave.html'), 'utf8', (err, dataStr)=>{
    if(err) return console.log('读取失败！' + err.message);
    resolveCSS(dataStr);
});
// 3. 定义处理 CSS
function resolveCSS(htmlStr){
    // 正则提取 内容
    const r1 = Style.exec(htmlStr);
    // 提取出来的字符串进行 replace 替换
    const CSS = r1[0].replace('<style>','').replace('</style>','');
    // 提取 CSS 到 新文件
    fs.writeFile(path.join(__dirname, 'CSS.css'), CSS, err=>{
        if(err) return console.log('写入CSS失败！', err.message);
    });

    const r2 = Script.exec(htmlStr);
    const JS = r2[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname, 'JS.js'), JS, err=>{
        if(err) return console.log('写入JS失败！', err.message);
    });
}

// 创建 web 服务器