/*
 * @Author: angula
 * @Date: 2020-08-05 10:14:34
 * @LastEditTime: 2020-08-05 10:45:46
 * @FilePath: \working\Appointment\src\plugins\http.js
 */
import axios from 'axios';
// 5秒请求超时
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
})


//添加相应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
})

// 判断是否为空
export function isEmpty(str) {
  if (str === '' || str === null || str === undefined) {
    return true;
  }
  return false;
}

/**
 * @description: get  get请求
 * @param {String} url  请求的url地址 
 * @return {Object} params 请求时携带的参数
 *  
 */

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

export function deletes(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}


