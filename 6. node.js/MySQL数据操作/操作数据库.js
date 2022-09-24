// 导入 MySQL 模块     数据库 8.0 以上请导入 mysql2 模块
const mysql = require('mysql2');
// 建立 MySQL 数据库连接关系
const db = mysql.createPool({
    host: '127.0.0.1',          /* 数据库 IP 地址 */
    user: 'root',               /* 数据库 账号 */
    password: '666666',         /* 数据库 密码 */
    database: 'fen'             /* 指定操作数据库 */
});

        // 如果执行的是 select 语句，则result返回的是 数组
        //  如果执行 Insert into 语句，则result返回的是 对象


// 测试 MySQL 模块是否正常工作 -------------------------- 用完记得 ctrl + c 关闭
        // 'select 1' 是一个 SQL 语句，用于测试数据库是否正常工作
        // db.query('select 1', (err, result)=>{
        //     if(err) return console.log(err.message);             /* mysql  模块工作期间报错 */
        //     console.log(result);                                 /* 能够成功的执行 SQL 语句 */
        // });

// 查询 表 数据库中的所有数据
        const sqlStr = 'select * from vs_code_test';
        db.query(sqlStr, (err, result)=>{
            if(err) return console.log(err.message);             /* mysql  模块工作期间报错 */
            console.log(result);                                 /* 能够成功的执行 SQL 语句 */
        })

// 插入 表中 数据
        // (1)  向 vs_code_test 表中新增一条数据
        // const vs_code_test = {
        //     id: '004',
        //     name: '小明',
        //     age: 20,
        //     sex: '男',
        //     date_of_birth: '2000-01-01'
        // };
        // // (2)  定义待执行 SQL 语句  ----- ? 表示占位符
        // const insertStr = 'insert into vs_code_test set ?';
        // // (3)  执行 SQL 语句
        // db.query(insertStr, vs_code_test, (err, result)=>{
        //         if(err) return console.log(err.message);            /* 执行失败 */
        //         // 判断数据是否插入到数据库 ---- result.affectedRows = 1 表示插入成功
        //         if(result.affectedRows === 1){
        //             console.log('插入成功!!');
        //         }
        //     });

// 更新 表中 数据
        // (1)  更新id为 004 的用户数据
        // const update = {
        //     id: '004',
        //     name: '小红',                       /* 原：小明 */
        //     age: 19,                            /* 原：20 */
        //     sex: '女',                          /* 原：男 */
        //     date_of_birth: '2004-02-02'         /* 原：2000-01-01 */
        // };
        // // (2)  定义 SQL 语句 ---- where id=? 指定 id
        // const updateStr = 'update vs_code_test set ? where id=?';
        // // (3)  执行 SQL 语句
        // db.query(updateStr, [update, update.id], (err, result)=>{
        //     if(err) return console.log(err.message);
        //     if(result.affectedRows === 1){
        //         console.log('更新成功!!');
        //     }
        // });

// 删除 表中 数据
        // (1)  删除 id 为 004 的用户数据
        // const deleteStr = 'delete from vs_code_test where id=?';
        // db.query(deleteStr, 004, (err, result)=>{
        //     if(err) return console.log(err.message);
        //     if(result.affectedRows === 1){
        //         console.log('删除成功!!');
        //     }
        // });