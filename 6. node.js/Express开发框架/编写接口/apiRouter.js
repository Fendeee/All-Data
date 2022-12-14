// 路由模块
const express = require('express');
const router = express.Router();

// 挂载对应路由     GET
router.get('/get', (req, res)=>{
    // 通过 req 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query;
    // 通过 res 方法，向客户端响应处理的结果
    res.send({
        status: 0,               /* 0 表示处理成功，1 表示处理失败 */
        mag: 'GET 请求成功!',     /* 状态描述 */
        data: query              /* 需要响应给客户的数据 */
    });
});

// 挂载对应路由     POST
router.post('/post', (req, res)=>{
    // 通过 req,body 获取请求体中包含的 url-encoded 格式的数据
    const body = req.body;
    // 调用 res.send() 方法，向客户端响应结果
    res.send({
        status: 0,                /* 0 表示处理成功，1 表示处理失败 */
        msg: 'POST 请求成功!',     /* 状态描述 */
        data: body                /* 需要响应给客户的数据 */
    });
});


module.exports = router;