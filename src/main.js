/*
 * @Author: angula
 * @Date: 2020-07-23 10:48:11
 * @LastEditTime: 2020-08-05 10:47:27
 * @FilePath: \working\Appointment\src\main.js
 */
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'



import axios from 'axios'
import qs from 'qs';
Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
Vue.prototype.$qs = qs;

import "lib-flexible/flexible"
import { Toast } from 'vant'
Vue.use(Toast)



// vant相关组件的引入;
import { Cell, CellGroup } from "vant";
import { Popup } from "vant";
import { Picker } from "vant";
import { Form } from 'vant';
import { Field } from 'vant';
import { Uploader } from 'vant';
import { DatetimePicker } from 'vant';
import { Button } from 'vant';
import { Area } from 'vant';
import { RadioGroup, Radio } from 'vant';





Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
// 底部弹出组件
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Form);
Vue.use(Uploader);
Vue.use(DatetimePicker);
Vue.use(Button);
Vue.use(Area);
Vue.use(Radio);
Vue.use(RadioGroup);




import { post, get } from './plugins/http.js'
import { api } from './plugins/api.js';   //接口

// 定义为全局变量
Vue.prototype.$api = api;
Vue.prototype.$get = get;
Vue.prototype.$post = post;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
