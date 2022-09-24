// 1. 引入 express
const express = require('express');

const app = express();
app.get('/axios-index', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('HELLO axios GET');
});
app.post('/axios-index', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('HELLO axios POST');
});
app.listen(8000, ()=>{
    console.log('服务器启动成功，端口号为：8000 端口监听中...');
});



// 终端 node 文件名.js + 回车，启动服务器
// 终端 ctrl + c 关闭服务器

// nodemon 启动服务器
// nodemon.cmd 文件名,js