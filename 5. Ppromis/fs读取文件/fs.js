
// * 读取封装  方法 1
/* const fs = require('fs');
const p = new Promise((resolve, reject)=>{
    fs.readFile('./古诗', (err, data)=>{
        if(err) reject(err);
        resolve(data);
    });
});

p.then((value)=>{
    console.log(value.toString());
}, (reason)=>{
    console.log(reason);
}); */

// * mineReadFile 读取封装  方法 2
/* function mineReadFile(path){
    return new Promise((resolve, reject)=>{
        require('fs').readFile(path, (err, data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
}; 
mineReadFile('./古诗').then(
    (value)=>{
        console.log(value.toString());
    }, (reason)=>{
        console.log(reason);
    }
); */

// * Uint8ClampedArray.Promisify 读取封装  方法 3
/* const util = require('util');
const fs = require('fs');
let mineReadFile = util.promisify(fs.readFile);
mineReadFile('./古诗').then((value)=>{
    console.log(value.toString());
}); */

// * 读取多个文件
// const fs = require('fs');
// const p = new Promise((resolve, reject)=>{          /* 文件 1 */
//     fs.readFile('文件路径1', (err, data)=>{
//         resolve(data);
//     })
// });
// p.then(value=>{                                     /* 文件 2 */
//     console.log(value.toString());                  /* toSting 转换字符串 方便看内容 */
//     return new Promise((resolve, reject)=>{
//         fs.readFile('文件2路径', (err, data)=>{
//             resolve[(value, data)];
//         });
//     });
// }).then(value=>{                                    /* 文件 3 */
//     console.log(value.toString());                  /* toSting 转换字符串 方便看内容 */
//     return new Promise((resolve, reject)=>{
//         fs.readFile('文件3路径', (err, data)=>{
//             // 压入
//             value.push(data);
//             resolve(value);
//         });
//     });
// }).then(value=>{
//     console.log(value.join('\r\n'));                /* 数组拼接 */
// })