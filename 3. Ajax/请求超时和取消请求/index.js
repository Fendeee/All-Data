// 请求超时和异常

const express = require('express');
const app = express();
app.get('/index', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 加延时 3s 响应体
    setTimeout(()=>{
        response.send('延迟响应');
    },3000);
});
app.listen(8000, ()=>{
    console.log('服务器启动成功，端口号为：8000 端口监听中...');
});