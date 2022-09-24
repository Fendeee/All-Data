const fs = require('fs');
fs.readFile('./读取.txt', 'utf8', (err, dataStr)=>{
    if(err){
        return console.log('读取失败！！' + err.message);
    }
    console.log('读取成功！！' + '\n' + dataStr);

    const arr = dataStr.split(' ');                     /* 1. 分割数组 */
    const arrNew = [];
    arr.forEach(item=>{
        arrNew.push(item.replace('=',':'));             /* 2. = 替换成 : */
    });
    const newStr = arrNew.join('\r\n');                 /* 3. 换行 拼接 */
    console.log(newStr);
    fs.writeFile('./写入.txt', newStr, err=>{           /* 写入 */
        if(err){
            return console.log('写入失败！！' + err.message);
        }
        console.log('写入成功！！');
    });
});