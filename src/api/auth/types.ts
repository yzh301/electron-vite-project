/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-07 15:33:24
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 15:46:24
 * @FilePath: \electron-vite-project\src\api\auth\types.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
// src\api\auth\types.ts
/**
 * 登录请求参数
 */
export interface LoginData {
  /**
   * 用户名
   */
  username?: string;
  /**
   * 密码
   */
  password?: string;
}

/**
 * 登录响应
 */
export interface LoginResult {
  /**
   * 访问token
   */
  accessToken?: string;
}
/**
 * 用户信息 
 */
export interface UserInfo {
  /**
   * 用户名
   */
  nickName: string;

  /**
   * 用户id
   */
  userId: string;

  /**
   * 年龄
   */
  age: number;
}
