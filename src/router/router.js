
const routes = [
  {
    path: '/login', //  登录
    component: resolve => require(['@/views/Login'], resolve)
  },
  {
    name:'集团总览',
    path: '/',  //  主页面
    component: resolve => require(['@/views/Index'], resolve),
    meta: {
      requireAuth: true,
      toMain: true
    },
    children: [{
      name: '',
      path: '/overview',
      component:  resolve => require(['@/views/Index'], resolve)
    }
    ]
  }
]

export default routes
