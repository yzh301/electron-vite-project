/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-07 13:56:29
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 15:48:10
 * @FilePath: \electron-vite-project\src\router\index.ts
 * @Description: 路由界面
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  //  hash 模式。
  history: createWebHashHistory(),
  routes: [
    // 设置首页
    {
      path: '/',
      component: () => import('../components/demo/index.vue')
    },
    // 配置helloworld页的路径
    {
      path: '/hello',
      component: () => import('../components/HelloWorld.vue')
    },
    {
      path: '/mockDemo',
      component: () => import('../components/demo/MockDemo.vue')
    },
    {
      path: '/MockApiDemo',
      component: () => import('../components/demo/MockApiDemo.vue')
    },
  ],
})

export default router
