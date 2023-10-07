// src\api\auth\index.ts
import { AxiosPromise } from 'axios';
import request from '../../utils/request';
import { LoginData, LoginResult, UserInfo } from './types';

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: '/auth/login',
    method: 'post',
    params: data
  });
}

/**
 * 获取用户信息
 *
 * @param data {UserInfo}
 * @returns
 */
export function getUserInfoApi(accessToken: string): AxiosPromise<UserInfo> {
  return request({
    url: '/auth/userInfo',
    method: 'get',
    params: accessToken
  });
}

