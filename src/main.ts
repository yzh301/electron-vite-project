/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-07 10:53:01
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 15:04:13
 * @FilePath: \electron-vite-project\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
// src\main.ts
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales'
import router from './router'
import pinia from './store'
import "./style.css"
const app = createApp(App)

// 配置路由
app.use(router)
// 配置pinia
app.use(pinia)
// 配置国际化
app.use(i18n)
app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
