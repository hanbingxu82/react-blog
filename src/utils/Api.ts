/*
 * @Author: your name
 * @Date: 2021-03-15 11:07:58
 * @LastEditTime: 2021-03-17 13:52:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/utils/Api.ts
 */
import service from "./Axios";

export const imgURL: string = service.imgURL;

// 获取首页博客数据
export const blogList = (params: object = {}) => {
  return service.get("/blogList", params);
};

// 根据博客id 获取 单挑博客数据
export const blogDetail = (params: object = {}) => {
  return service.get("/blogDetail", params);
};

export const userDetail = (params: object = {}) => {
  return service.post("/userDetail", params);
};

export const userLogin = (params: object = {}) => {
  return service.post("/userLogin", params);
};
