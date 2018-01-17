import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login', //  登录
      component: resolve => require(['@/views/Login.vue'], resolve)
    }, {
      path: '/index', //  登录
      component: resolve => require(['@/views/Index.vue'], resolve)
    }
  ]
})
