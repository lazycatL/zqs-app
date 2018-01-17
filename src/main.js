import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/api' // 加载接口api
import util from './utils/util' // 统一加载通用方法对象
import Numbers from './utils/number' // 统一加载数字梳理方法对象
import './assets/css/reset.css'// 初始化样式
import './utils/flexible' // 初始化HTML的font-size

Vue.config.productionTip = false
Vue.prototype.api = api
Vue.prototype.util = util
Vue.prototype.number = Numbers

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
