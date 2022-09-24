const express = require('express');
const app = express();

// 配置 POST 解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));


// 一定要在路由之前配置 cors 中间件，解决接口跨域问题
const cors = require('cors');
app.use(cors());

// 导入路由模块 
const router = require('./apiRouter');
// 把路由模块 注册到 app
app.use('/api', router);


app.listen(80, function(){
    console.log('Express server running at http://127.0.0.1/api/get');
});