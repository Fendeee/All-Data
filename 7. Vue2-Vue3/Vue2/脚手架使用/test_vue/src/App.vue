<!--! 汇总所有的组件 !-->

<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // @@@ 引入组件
    import School from './components/MySchool.vue'
    import Student from './components/MyStudent.vue'
    export default {
        name: 'App',
        // @@@ 注册组件
        components:{
            School,
            Student
        }
    }
    
</script>

<style>

</style>