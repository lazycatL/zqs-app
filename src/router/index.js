import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '../store/index'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes,
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  //  加loading
  store.commit('isLoading', true);

//   if (to.meta.toMain == true) {
// //  判断orgcode 跳转到对应的首页
//     if (localStorage.getItem('orgcode') === '1') {
//       next({path: 'Overview'})
//     } else if (localStorage.getItem('orgcode') === '314') {
//       next({path: 'Culture'})
//     } else {
//       next({path: 'Main'})
//     }
//   }
//   if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
//     if (sessionStorage.getItem('token') && sessionStorage.getItem('token') !== '' && sessionStorage.getItem('token') !== undefined && sessionStorage.getItem('token') !== 'null' && sessionStorage.getItem('token') !== null) {// 判断是否登录
//       next()
//
//     } else {  // 没登录则跳转到登录界面
//       next({path: '/login', query: {redirect: to.fullPath}})
//     }
//   } else {
     next()
//   }
})

router.afterEach((to) => {
  setTimeout(function () {
    store.commit('isLoading', false);
  }, 500)

})

export default router
