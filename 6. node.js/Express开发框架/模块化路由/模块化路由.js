const express = require('express');
// 创建服务器
const app = express();

// 1. 导入路由模块
const router = require('./router');
// 2. 注册路由模块
app.use(router);


// 启动服务器
app.listen(80, ()=>{
    console.log('http://127.0.0.1');
});