/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-07 10:53:01
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 15:53:14
 * @FilePath: \electron-vite-project\vite.config.ts
 * @Description: viteconfig配置文件
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron/simple'
import mockServer from 'vite-plugin-mock-server'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      electron({
        main: {
          // Shortcut of `build.lib.entry`.
          entry: 'electron/main.ts',
        },
        preload: {
          // Shortcut of `build.rollupOptions.input`.
          // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
          input: path.join(__dirname, 'electron/preload.ts'),
        },
        // Ployfill the Electron and Node.js built-in modules for Renderer process.
        // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
        renderer: {},
      }),
      AutoImport({
        resolvers: [ElementPlusResolver(),
        // 自动导入图标组件 
        IconsResolver({
          prefix: 'Icon',
        }),
        ],
        // 设置自动导入的路径
        dts: path.resolve(__dirname, 'types/auto-imports.d.ts')
      }),
      Components({
        resolvers: [ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),],
        // 设置自动导入的路径
        dts: path.resolve(__dirname, 'types/components.d.ts')
      }),
      //补充一个图标的导入配置
      Icons({
        autoInstall: true,
      }),
      // mock数据
      mockServer({
        logLevel: 'info',
        urlPrefixes: ['/api/'],
        mockRootDir: path.relative(__dirname, './src/api/mock'),// 模拟数据文件所放置的目录
        mockJsSuffix: '.mock.js', // js模拟数据文件的后缀
        mockTsSuffix: '.mock.ts',// js模拟数据文件的后缀
        noHandlerResponse404: true,
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        "@store": path.resolve(__dirname, "./src/store/modules"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    }
  }

})
