/*
 * @Author: angula
 * @Date: 2020-08-05 09:21:02
 * @LastEditTime: 2020-08-05 11:32:46
 * @FilePath: \working\Appointment\src\plugins\api.js
 */
const base = {
  // naoffer: 'http://localhost:8080/api/',
  noffer: 'http://127.0.0.1:8080/api'
}

export const api = {
  // 活动发布页面数据获取接口
  'active_data_Initialize': base.naoffer + 'yue/activity/info/submit/ajax/init',
  // 'active_data_Initialize': 'http://app1.naoffer.com/yue/activity/info/submit/ajax/init',
  // 活动信息发布
  'active_info_submit': base.noffer + 'yue/activity/info/submit/ajax/submit'
}