<template>
    <div class="demo">
        <span >{{x}}</span>
    </div>
</template>

<script>
// 引入一个 mixin 混合
// import {mixin} from '../mixin'
export default {
    //*!* 组件名
    name: 'MyStudent',
    data(){                         // $$$ 组件 data 必须是函数式  $$$
        return {
            name: 'mixin 混合'
        }
    },
}
</script>

<style scoped lang="less">
    div.demo {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        background-color: greenyellow;
        border-radius: 10px;
        cursor: pointer;
    }
</style>