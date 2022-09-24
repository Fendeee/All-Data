// ! 整个项目的入口文件   注册 vm

//? 1.引入 APP组件 —— 所有组件的父组件
import App from './App.vue'
//? 2.创建 vue实例对象 —— vm
new Vue({
    el: '.root',
    template: `<App></App>`,
    components:{App},
})