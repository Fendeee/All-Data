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
