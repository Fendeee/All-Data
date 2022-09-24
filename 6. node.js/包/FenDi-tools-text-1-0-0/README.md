## 安装
```````````
npm install FenDi-tools-text-1-0-0
```````````

## 导入
```````````js
const FenDi = require('./FenDi-tools');
```````````

## 格式化时间的功能

```````````js
// 调用 dateFormat 对时间进行格式化
const dt = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(dt);
```````````

## 转义 HTML 中的特殊字符
```````````js
// 定义转换的 HTML 字符串
const textStr = '<h1 title="abc">这是一个转义的html标签</h1>';
// 调用 htmlEscape 方法进行转换
const text = FenDi.htmlEscape(textStr);
console.log(text);
```````````

## 开源协议
ISC


package.json 的属性作用：
        "name":         ---> 包名
        "version":      ---> 包版本号
        "main"          ---> 包的入口文件
        "description"   ---> 包的描述
        "keywords"      ---> 包的关键字
        "license"       ---> 包的许可证