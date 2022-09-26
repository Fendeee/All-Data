<template>
    <div class="Todo">
        <div class="nav">
            <input @keyup.enter="add" type="text" placeholder="请输入您的任务名称，按回车键确认...">
            <div class="checkbox">
                <ul ref="Ul">
                    <li v-for="TodoObj in TodoTings" :key="TodoObj.id"><span>
                        <input type="checkbox"><i>{{TodoObj.title}}</i>
                        <p>{{TodoObj.Del}}</p>
                    </span></li>
                </ul>
            </div>
            <div class="footer">
                <div>
                    <input type="checkbox">
                    <i>{{SelectAll}}</i>
                    <span>
                        {{Finish}}
                        <strong ref="Finish">0</strong>
                    </span>
                </div>
                <span class="Clean">{{CleanupCompleted}}</span>
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
            CleanupCompleted: '清除已完成任务',
            SelectAll: '全选',
            Finish: '已完成',
            TodoTings: [
                                        // done 标识是否完成  默认false
                // {id: '001', title: '吃饭', Del: '删除', done: true},
            ]
        }
    },
    methods: {
        add(e){
            // 将用户输入包装成一个 Todo 对象
            // $$$  nanoid()  函数调用，生成一个全球唯一的 id字符串
            const TodoObj = {id: nanoid(), title: e.target.value, Del: '删除', done: false}
            this.TodoTings.push(TodoObj)
            e.target.value = ''
        }
    },
    computed: {
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
                    li {
                        width: 100%;
                        height: 35px;
                        border-bottom: 1px solid #999;
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
                            p {
                                display: none;
                                padding: 3px 10px;
                                position: absolute;
                                right: 20px;
                                background-color: #CC1111;
                                border-radius: 5px;
                                color: #fff;
                                font-size: 14px;
                                transition: all .5s ease 0s;
                            }
                        }
                    }
                    li:hover p {
                        display: inline-block;
                    }
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
                    width: 150px; height: 70%;
                    text-align: center;
                    font-size: 12px;
                    i {
                        margin: 0 5px;
                        height: 100%;
                        text-align: center;
                        line-height: calc(40px * 0.6777);
                    }
                    span {
                        font-size: 14px;
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
