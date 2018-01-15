import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/api'
import util from './utils/util'
import Numbers from './utils/number'
import './assets/css/reset.css'

Vue.config.productionTip = false
Vue.prototype.Api = api
Vue.prototype.Util = util
Vue.prototype.Number = Numbers

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
