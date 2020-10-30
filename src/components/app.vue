<template>
<!--template 定义组件的ui结构 -->
    <div>
        <h1>thi is App root component</h1>
    </div>
</template>

<script>
// script 定义行为
// 向外暴露一个配置对象
export default {
    data(){

    }
}
</script>

<style scoped>
/* scoped 每个组件的样式都是只有自己可以用的，防止样式冲突 */
h1{
    color: gray;
}

</style>