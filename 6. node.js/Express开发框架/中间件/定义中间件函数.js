const express = require('express');
const app = express();

/* 
    多个中间件之间，共享同一份 req 和 res ，基于这样的特性，我们可以在上游中间件中，
    统一为 req 或 res对象加自定义的属性和方法，供下游中间件或路由进行使用
 */

// 形参包含 next 为中间件函数
// 定义 全局生效app.use() 简单中间件函数   ----------------------
    app.use((req, res, next)=>{
        const time = Date.now();
        req.startTime = time;
        console.log('请求到达服务器的时间：'+req.startTime);

        // 把流转关系，转交给下一个中间件函数
        next();
    });
// -----------------------------------------------------------

    app.get('/', (req, res)=>{
        console.log('调用了 / 路由');
        res.send('Home page.');
    });
    app.post('/user', (req, res)=>{
        console.log('调用了 /user 路由');
        res.send('User page.');
    });


app.listen(80, ()=>{
    console.log('http://127.0.0.1 -- 服务器已启动.... ');
});