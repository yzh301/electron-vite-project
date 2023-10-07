<!--
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-07 15:36:37
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 15:36:51
 * @FilePath: \electron-vite-project\src\components\demo\goback.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<!-- 封装按钮，点击返回上一级页面 -->
<template>
  <el-button @click="goBack" type="success">
    <slot>返回</slot>
  </el-button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
let router = useRouter();
/// 返回上一页
const goBack = () => {
  router.back();
};
</script>

<style scoped></style>

