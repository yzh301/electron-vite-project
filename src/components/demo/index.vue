<template>
  <h1>
    这是demo页,当前计数:{{ counterStore.counter }},
  </h1>
  <ul>
    <li><router-link to="/hello">链接跳转helloworld页</router-link></li>
    <li><a @click="goTo('/hello')">点击事件跳转helloWorld页</a></li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore } from '../../store/modules/counterStore';
const counterStore = useCounterStore()

const router = useRouter()

// 点击事件跳转对应页面
function goTo(path: string) {
  router.push(path)
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
  

  