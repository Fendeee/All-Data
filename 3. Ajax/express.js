// 1. 引入 express
const express = require('express');

// 2. 创建 应用对象
const app = express();

// 3. 创建路由检测
//    request 是对请求提交报文的封装
//    response 是对响应报文的封装

// get请求，post请求，all全部类型请求
app.get('/', (request, response)=>{
    // 设置响应
    response.send('Hello Express');
});

// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log('服务器启动成功，端口号为：8000 端口监听中...');
});


// 终端 node 文件名.js + 回车，启动服务器
// 终端 ctrl + c 关闭服务器

// 终端 nodemon + 文件名 + 回车，启动服务器（nodemon 包会自动更新服务器）

// nodemon 启动服务器
// nodemon.cmd 文件名,js