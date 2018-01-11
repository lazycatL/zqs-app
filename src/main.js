import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/api'
import ajax from './utils/ajax'
import './assets/css/reset.css'

Vue.config.productionTip = false
Vue.prototype.ajax = ajax
Vue.prototype.api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
