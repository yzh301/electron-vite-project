/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-07 14:50:56
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 14:55:03
 * @FilePath: \electron-vite-project\electron\main\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { BrowserWindow, ipcMain } from "electron";

/**pinia多窗口共享 */
// storeName：更新的store的名称，对应defineStore()的第一个参数
// jsonStr：json序列化后的变化对象
ipcMain.handle(
  'pinia-store-change', ((event, storeName: string, jsonStr: string) => {
    // 遍历window执行
    for (const currentWin of BrowserWindow.getAllWindows()) {
      const webContentsId = currentWin.webContents.id;
      if (webContentsId !== event.sender.id) {
        currentWin.webContents.send("pinia-store-set", storeName, jsonStr);
      }
    }
  })
)