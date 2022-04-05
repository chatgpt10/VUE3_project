
<template>
    <div class="Container">
        <h2>Welcome to my project</h2>
        <h3>Vue3 + ts + js + Vite2.x + ElementPlus + Sass + Axios + VueRouter 4.x + Pinia...</h3>
        <h4 @click="goLogin" style="color:blue">go登录页</h4>
    </div>
</template>
<script setup lang="ts">
import router from '@/router/index'
function goLogin(this: any) {
    router.push('/login')
}
</script>
<style lang="scss" scoped>
.Container {
    padding: 20px;
    cursor: pointer;
}
</style>
