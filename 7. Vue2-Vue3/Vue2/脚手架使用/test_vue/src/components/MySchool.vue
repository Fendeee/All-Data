<template>
    <div class="demo">
        <ul>
            <li v-for="(p, index) in persons" :key='p.id' @click="lis(index)">{{p.plate}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    //*!* 组件名
    name: 'MySchool',
    data(){                         // $$$ 组件 data 必须是函数式  $$$
        return {
            persons: [
                {plate: '目录'},
                {plate: '商品'},
                {plate: '信息'},
                {plate: '作者'},
            ],
            // MyAge: this.age
        }
    },
    methods: {
        lis(index){
            console.log(index);
        }
    },
    // 接受的同时对数据进行类型限制，默认值指定，必要性的限制
    props: {
    }
}
</script>

<style scoped>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    .demo {
        position: absolute;
        top: 0px; left: 50%;
        transform: translateX(-50%);
        width: 500px; height: 300px;
        background-color: pink;
        text-align: center;
        line-height: 35px;
    }
    ul {
        display: flex;
        width: 100%; height: 20%;
    }
    li {
        flex: 4;
        list-style: none;
        border: 1px #333 solid;
        line-height: calc(300px * 0.2);
        cursor: pointer;
        transition: all .3s ease 0s;
    }
    li:hover {
        background-color: tomato;
        color: #FFF;
        border-color: tomato;
    }
</style>