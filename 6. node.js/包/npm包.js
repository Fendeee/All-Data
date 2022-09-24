// 包必须以单独的目录存在，包的顶级目录下必须包含 package.json 包管理配置文件，
// package.json 中必须包含 name, version, main 这三个属性

// 下载包 -->   npm i 完整的包名称
// 卸载包 -->   npm uninstall 包名称
// 查看包 -->   npm list 包名称
// 一次性安装所有包  -->   npm i

// 创建包管理配置文件 -->    npm init -y
/* 项目包 1 2
    开发依赖包 -->  npm i 包名称 -D             被记录到 devDependencies 节点中
    核心依赖包 -->  npm i 包名称                被记录到 dependencies 节点中
*/
// 全局包 -->  npm i 包名称 -g                  会被安装到 C:\User\用户目录\AppData\Roaming\npm\node_modules  目录下


/*  (1) 使用 npm 包管理工具，在项目中安装格式化时间的包 moment
    (2) 使用 require() 导入格式化时间的包
    (3) 参考 moment 的官方 API文档对时间进行格式化 */
// (2) 导入包
const moment = require('moment');

// (3) 时间格式化
const dt = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(dt);


/* 开发自定义 -- 包
    (1) 新建一个文件
    (2) 文件中新建三个文件
        index.js        --> 包的入口文件
        package.json    --> 包的配置文件
        README.md       --> 包的说明文件
 */

// 引入自定义包  FenDi文件
// const FenDi = require('./FenDi-tools-text-1-0-0');
// const textStr = '<h1 title="abc">这是一个转义的html标签</h1>';
// const text = FenDi.htmlEscape(textStr);
// console.log(text);
// console.log(textStr);


// 发布包 ------------------------->
// (1) 下载 nrm 包
// (2) 查看所有服务器       npx nrm ls
// (2.1) 查看在用服务器     npm config get registry
// (3) 切换至 npm 服务器    npx nrm user npm
// (4) 登录 npm 服务器      nrm login
// (5) 输入登录用户名、密码(盲打)、邮箱
// (6) 输入 one-time       密钥
// (7) 返回到包的根目录     cd 包名称
// (8) 发布包              npm publish
// (9) 删除已发布的包       npm unpublish 包名称(name) --force
// (9.1) npm unpublish 只能删除72小时以内发布的包，24小时内不能发布同一个包
// ------------------------------->