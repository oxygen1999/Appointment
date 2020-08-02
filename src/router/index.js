/*
 * @Author: angula
 * @Date: 2020-07-23 10:48:11
 * @LastEditTime: 2020-08-01 19:02:03
 * @FilePath: \working\vue-cli3 demo\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Index from '../views/Index.vue'
import login from '../views/login/login'
import bindMobile from '../views/login/bindMobile'
import release from '../views/release/release'
import activityParticipants from "../views/release/childComps/activityParticipants"
import activityTime from "../views/release/childComps/activityTime"
import activityAddress from "../views/release/childComps/activityAddress"
import activityDetail from "../views/release/childComps/activityDetail"


// 测试路径页面
import index from "../views/release/childComps/index"
Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
      { path: '', redirect: '/index' },
      { path: '/index', component: Index, meta: { title: "在线实习" } },
      { path: '/u/login', component: login, meta: { title: "登录" } },
      { path: '/u/bindMobile', component: bindMobile, meta: { title: "绑定手机" } },
      { path: '/u/release', component: release, meta: { title: "发布", keepAlive: true } },
      // 活动详情二级页面
      { path: '/u/release/detail', component: activityDetail, meta: { title: "活动详情", keepAlive: true } },
      // 活动人数二级页面
      { path: '/u/release/participants', component: activityParticipants, meta: { title: "活动人数", keepAlive: true } },
      // 活动时间二级页面
      { path: '/u/release/activityTime', component: activityTime, meta: { title: "活动时间", keepAlive: true } },
      // 活动地址二级界面
      { path: '/u/release/activityAddress', component: activityAddress, meta: { title: "活动地址", keepAlive: true } },



      // 测试路径
      { path: '/u/release/index', component: index, meta: { title: "活动时间" } },




    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
