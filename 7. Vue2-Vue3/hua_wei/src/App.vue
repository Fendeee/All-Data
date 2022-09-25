<template>
    <div id="app">
        <Todo></Todo>
    </div>
</template>

<script>
import Todo from './components/TodoList.vue'
export default {
    name: 'App',
    components: {
        Todo,
    }
}
</script>

<style lang="less">
    * {margin: 0; padding: 0; box-sizing: border-box; }
    body { background-color: #333; }
</style>