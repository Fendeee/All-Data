// 使用 Express ，我们可以更方便，快速的创建 web网站服务器和 API接口服务器

// Express 使用 (1，2，3，4)
// =============================================================================
// ----( 1 )-----------安装：npm i express---------(1)----->
    // 导入 Express 模块
    const { request } = require('express');
    const express = require('express');
// ----( 1 )-----------安装：npm i express---------(1)----->


// ----( 2 )-------创建基本的 web 服务器------------(2)----->
    const app = express();
// ----( 2 )--------创建基本的 web 服务器-----------(2)----->


// ----(4)--监听客户端的 GET 和 POST 请求，并向客户端响应具体内容--(4)----->
    app.get('/user', (req, res)=>{
        // 调用 express 提供的 res.send() 方法，向客户端响应一个JSON对象
        res.send({name:'FenDi', age:'18', gender:'男'});
    });
    app.post('/user', (req, res)=>{
        // 调用 express 提供的 res.send() 方法，向客户端响应一个字符串
        res.send('POST 请求成功');
    });
// ----(4)--监听客户端的 GET 和 POST 请求，并向客户端响应具体内容--(4)----->



// Express 获取 URL 中携带的查询参数  (I，II)
/* ( I )
    req.query 默认是一个空对象
    客户端使用 ?name=zs&age=18这种查询字符串方式，发送到服务器的参数,
    可以通过 req.query 对象访问到，例如： req.query.name    req.query.age
*/
    app.get('/', (req, res)=>{
        console.log(req.query);
        res.send(req.query);
    });
/* ( II )
    req.params 是动态匹配到的 URL 参数，默认是一个空对象
 */         /* : 匹配动态参数,  id 参数名称可设置 */
    app.get('/user/:id', (req, res)=>{
        console.log(req.params);
        res.send(req.params);
    });



// ----( 3 )-----------启动 web 服务器--------------(3)----->
    app.listen(80, ()=>{        /* 80端口号 */
        console.log('express web server is running at http://127.0.0.1');
    })
// ----( 3 )-----------启动 web 服务器--------------(3)----->

// Express 使用 (1，2，3，4)
// =============================================================================