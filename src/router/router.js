
const routes = [
  {
    path: '/login', //  登录
    component: resolve => require(['@/components/Login/login'], resolve)
  },
  {
    path: '/zqsIndex', //  集团总览四块总页面
    component: zqsIndex
  },
  {
    path: '/test', //  测试
    component: Test
  },
  {
    path: '/',  //  默认路由
    component: Index,
    meta: {
      requireAuth: true,
      toMain: true
    },
    children: [{
      name: '',
      path: '/Overview',
      component: Overview,
      query: { index: 1 }
    }, {
      name: '',
      path: '/index',
      component: Index
    },  {
      name: '',
      path: 'main',
      component: Main
    }, {
      name: '资产概况',
      path: 'property',
      icon: '../../static/img/zcgk_icon.svg',
      component: Mainproperty
    }, {
      name: '经营业绩',
      path: 'perform',
      component: MainPerform
    }, {
      name: '经营业绩',
      path: '/Perform/Performdetails',
      component: Performdetails
    }, {
      name: '经营业绩',
      path: 'perform/Performdetails',
      component: Performdetails
    }, {
      name: '资金分析',
      path: 'analyze',
      component: MainAnalyze
    }, {
      name: '资金分析',
      path: '/Analyze/flowDetails',
      component: flowDetails
    },
    {
      name: '资金分析',
      path: '/Analyze/hlcx',
      component: hlcx
    },
    {
      name: '资金分析',
      path: '/Analyze/loanDetails',
      component: loanDetails
    }, {
      name: '税务分析',
      path: 'taxes',
      component: Taxes
    }, {
      name: '人力分析',
      path: 'manpower',
      component: Manpower
    }, {
      name: '',
      path: 'culture',
      component: MainCulture
    }, {
      name: '资产概况',
      path: '/Culture/Situation',
      component: Situation
    },
    {
      name: '年度收支',
      path: '/Culture/Income',
      component: Income
    },
    {
      name: '公益活动',
      path: '/Culture/Benefits',
      component: Benefits
    },
    {
      name: '文化基金会',
      path: '/Culture/Analysis',
      component: Analysis
    }, {
      name: '业务分析',
      path: 'fmcg',
      component: MainFmcg
    }, {
      name: '发送动态',
      path: 'dynamic',
      component: null
    }, {
      path: 'PersonDetails',
      component: PersonDetails
    }, {
      name: '考勤详情',
      path: '/PersonDetails/attendanceDetails',
      component: attendanceDetails
    }
    ]
  }
]

export default routes
