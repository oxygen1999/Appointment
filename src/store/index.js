/*
 * @Author: angula
 * @Date: 2020-07-23 10:48:11
 * @LastEditTime: 2020-08-04 11:55:03
 * @FilePath: \working\Appointment\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import release from './module/release'
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    release
  }
})
