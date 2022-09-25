<template>
    <div class="Todo">
        <div class="nav">
            <input @click="Write" type="text" placeholder="请输入您的任务名称，按回车键确认...">
            <div class="checkbox">
                <ul></ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data(){
        return {
        }
    },
    methods: {
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    div.Todo {
        position: relative;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 500px; height: 300px;
        background-color: #d1af82;
        border-radius: 10px;
        box-shadow: 2px 2px 15px 2px #8a7457;
        overflow: hidden;
        .nav {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 93%; height: 85%;
            background-color: #faebd7;
            border-radius: 10px;
            overflow: hidden;
            input[type='text']{
                padding-left: 20px;
                width: 100%; height: 35px;
                border-radius: 10px 10px 0 0;
                border: 1px #999 solid;
                font-size: 14px;
                letter-spacing: 1.5px;
                outline: none;
            }
            div.checkbox {
                margin: 7px auto;
                width: 97%; height: 67%;
                border-radius: 10px;
                border: 1px #999 solid;
                ul {
                    width: 100%; height: 100%;
                }
            }
        }
    }
    div.Todo::before {
        content: '';
        position: absolute;
        width: 100%; height: 5px;
        background-color: #c08c48;
        box-shadow: 0px 0px 12px 1px #211402;
    }
</style>
