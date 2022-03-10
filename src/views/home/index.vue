
<template>
    <div class="Container">
        <h1 class="text">This is world</h1>
        {{ myUserInfo.age }}
        <el-button type="primary" @click="btnChangeAge()">Change Age</el-button>
        <newYear class="svg" />
        <!-- 一级路由 -->
    </div>
</template>
<script setup lang="ts">
// 引入插件封装的svg组件
import newYear from '@/assets/images/newYear.svg'
// 引入pinia数据
import userInfo from '@/store/userInfo'
const myUserInfo = userInfo();

function btnChangeAge() {
    myUserInfo.setAge(10)
}
</script>
<style lang="scss" scoped>
.svg {
    width: 1000px;
    height: 300px;
    float: right;
}
.text {
    color: $theme-color;
}
</style>
