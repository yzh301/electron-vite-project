<!--
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-07 10:53:01
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 15:20:10
 * @FilePath: \electron-vite-project\src\components\HelloWorld.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore } from '../store/modules/counterStore';
import langMap from '../locales/langMap'
const counterStore = useCounterStore()
const router = useRouter()
function goBack() {
  router.back()
}
defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ $t(langMap.app_title) }}</h1>
  <h1>当前的计数为：{{ counterStore.counter }} 双倍值为：{{ counterStore.doubleCounter }}</h1>
  <ul>
    <li>
      <el-button type="success" @click="goBack">返回上一页</el-button>
    </li>
    <li>
      <el-icon size="25" color="red">
        <i-ep-edit />
      </el-icon>
    </li>
    <li>
      <el-button type="warning" @click="counterStore.counter++">直接操作state去改变值</el-button>
    </li>
    <li>
      <el-button type="info" @click="counterStore.increment">increment</el-button>
    </li>
    <li>
      <Language></Language>
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
../locales/langMap