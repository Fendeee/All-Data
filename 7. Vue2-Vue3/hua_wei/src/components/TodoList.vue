<template>
    <div class="Todo">
        <div class="nav">
            <input @keyup.enter="add" type="text" placeholder="请输入您的任务名称，按回车键确认...">
            <div class="checkbox">
                <ul ref="Ul">
                    <li v-for="Todo in TodoTings" :key="Todo.id"><span>
                            <!-- &&& 拿到数据 id，响应选框勾选、取消 勾选 -->
                        <input type="checkbox" :checked='Todo.done'  @change="handleCheck(Todo.id)"><i>{{Todo.title}}</i>
                            <!-- &&& 拿到数据 id，删除对应数据 -->
                        <button @click="btn(Todo.id)">{{Todo.Del}}</button>
                    </span></li>
                </ul>
            </div>
            <div class="footer">
                <div>
                    <input type="checkbox" v-model="isAll">
                    <i>全选</i>
                    <span>
                        已完成
                        <strong>{{doneTotal}}</strong>
                         / 
                        全部
                        <strong>{{TTL}}</strong>
                    </span>
                </div>
                <span class="Clean" @click="clearAll">清除已完成任务</span>
            </div>
        </div>
    </div>
</template>

<script>
// $$$ npm i nanoid 安装
// $$$ nanoid 生成一个全球唯一的 id字符串   *!* nanoid()函数调用
import {nanoid} from 'nanoid'
export default {
    name: 'TodoList',
    data(){
        return {
            TodoTings: [
                                        // done 标识是否完成  默认false
                {id: '001', title: '吃饭', Del: '删除', done: false},
            ]
        }
    },
    methods: {
        // 加入数据到 TodoTings
        add(e){
            // 将用户输入包装成一个 Todo 对象
            // $$$  nanoid()  函数调用，生成一个全球唯一的 id字符串
            const TodoObj = {id: nanoid(), title: e.target.value, Del: '删除', done: false}
            this.TodoTings.push(TodoObj)
            e.target.value = ''
        },
        // checkbox 勾选 或 取消勾选
        handleCheck(id){
            this.checkTodo(id)
        },
        checkTodo(id){
            // forEach() 遍历寻找 id
            this.TodoTings.forEach((todo)=>{
                // 判断 todo.id = 传进来的 id 
                if(todo.id === id) todo.done = !todo.done       /* 取反，再赋值回去 */
            })
        },
        // 删除 数据
        btn(id){
            // confirm('') 弹窗 确定 / 取消
            if(confirm('确定删除吗?')){
                // filter() 过滤不要的数据
                this.TodoTings = this.TodoTings.filter((todo)=>{
                    return todo.id !== id
                })
            }
        },
        // 全选所有
        checkAll(e){
            console.log(e.target.checked);
            this.checkAllTodo(e.target.checked)
        },
        checkAllTodo(done){
            this.TodoTings.forEach((todo)=>{
                todo.done = done
            })
        },
        // 删除所有
        clearAll(){ 
            if(confirm('确定全部删除吗?')){
                this.TodoTings = this.TodoTings.filter((todo)=>{
                    return !todo.done
                })
            }
        }
    },
    computed: {
        TTL(){
            return this.TodoTings.length
        },
        // 计算 已完成 （done为真）
        doneTotal(){
            // @@@ reduce(函数，初始值) 条件统计，数组长度是几，函数就调用多少次
            // pre 上一次的值， todo 当前的值
            return this.TodoTings.reduce((pre, todo)=>pre + (todo.done ? 1 : 0), 0)
        },
        // 计算 全选
        isAll: {
            get(){
                return this.doneTotal === this.TTL && this.TTL > 0
            },
            set(value){
                this.checkAllTodo(value)
            }
        }
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
            position: relative;
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
                overflow: hidden;
                ul {
                    position: relative;
                    width: 100%; height: 100%;
                    cursor: pointer;
                    overflow: auto;
                    list-style: none;
                    li {
                        width: 100%;
                        height: 35px;
                        border-bottom: 1px solid #999;
                        transition: all .3s ease 0s;
                        span {
                            padding: 0 15px;
                            display: flex;
                            align-items: center;
                            height: 100%;
                            i {
                                margin: 0 5px;
                                width: 70%;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                            button {
                                display: none;
                                padding: 3px 10px;
                                position: absolute;
                                right: 20px;
                                background-color: #CC1111;
                                border-radius: 5px;
                                border: 0px;
                                color: #fff;
                                font-size: 14px;
                                transition: all .3s ease 0s;
                            }
                        }
                    }
                    li:hover button { display: inline-block; }
                    button:active { transform: scale(0.9); }
                    li:hover { background-color: #f7debe; }
                }
            }
            .footer {
                position: relative;
                position: absolute;
                bottom: 0;
                display: flex;
                align-items: center;
                width: 100%; height: 40px;
                cursor: pointer;
                div {
                    position: absolute;
                    left: 23px;
                    display: flex;
                    align-content: center;
                    height: 70%;
                    text-align: center;
                    font-size: 12px;
                    i {
                        margin: 0 5px;
                        height: 100%;
                        text-align: center;
                        line-height: calc(40px * 0.6777);
                    }
                    span {
                        font-size: 12px;
                        text-align: center;
                        line-height: calc(40px * 0.6777);
                        strong {
                            color: #CC1111;
                        }
                    }
                }
                span.Clean {
                    position: absolute; 
                    right: 7px;
                    width: 130px; height: 70%;
                    background-color: rgb(204, 17, 17);
                    border-radius: 5px;
                    text-align: center;
                    line-height: calc(40px * 0.7);
                    color: #fff;
                    font-size: 14px;
                    letter-spacing: 1.5px;
                }
                span.Clean:active {
                    transform: scale(0.95);
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
