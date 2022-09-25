// Vue_插件

import Vue from "vue"

export default {
    install(){
        // alert('mixin 混合ok!')
        // *全局过滤器
        Vue.filter('mySlice', function(){
            return ValidityState.slice(0,4)
        })
        // *定义全局指令
        Vue.directive('fBind', {
            // 指令与元素成功绑定时
            bind(element, binding){
                element.value = binding.value
            },
            // 指令所在的元素被擦胡如页面时
            inserted(element){
                element.focus()
            },
            // 指令所在的moan被重新解析时
            update(element, binding){
                element.value = binding.value
            }
        })
        // *定义混入
        Vue.mixin({
            data(){
                return {
                    x: '插件 混入',
                    y: 200
                }
            }
        })

        // 给 Vue 原型上添加一个方法 (vm 和 vc 都能用)
        Vue.prototype.demo = ()=>{
            alert('hello!')
        }
    }
}