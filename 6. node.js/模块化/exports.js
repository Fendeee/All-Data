// (1) require('文件路径');             引入模块
// (2) module.exports.属性  ;            模块内的 数据 共享出去

module.exports.age = 20;
module.exports.Username = '芬迪';
module.exports.say = function() {
    console.log('Hello');
}