# 华彬战情室

> 华彬战情室项目V2.0
  参与该项目开发，请认真阅读开发规范，并严格遵守本项目前端开发规范
##### 开发前需要注意的内容
    > 继承在VUE原型上的对象，在组件或页面中可直接调用无需引用，主要在main.js中引用：
         1、this.$api  接口
         2、this.$util  一部分通用的处理方法，可新增，但要写注释
         3、this.$number  继承Number对象，并扩展了一些方法
         4、公共组件注册，参考下方公共组件列表
## 环境依赖
 > - node: >= 4.0.0
 > - npm: >= 3.0.0

## 组件依赖
##### 基本组件
   > - vue
   > - vue-router
   > - vue-scroller
   > - vuex

##### 处理ajax请求
  > -  axios

##### 图表组件
 > - echarts

##### UI组件
 > - element-ui
 > - vux
 > - fastclick  //消除点击延时

##### 样式管理
 > - less-loader
 > - style-loader
 > - stylus


## 部署步骤
  npm install   // 安装node运行环境

  npm run dev  // 本地开启调试

  npm run build // 编译发布

  ### 测试访问

  用户名：zhanghaiyu 密码：Hb@2017

  本地调试地址：[http://127.0.0.1:8088](http://127.0.0.1:8088)

  测试版本地址：[http://q.zqs.reignwood.com/](http://q.zqs.reignwood.com/)

  正式版本地址：[http://zqs.reignwood.com/](http://zqs.reignwood.com/)

***
## 目录结构
<pre>
├── build
├── config
├── static         		    // 静态文件存放
├── index.html         		// 项目入口文件
├── package.json       		// 项目配置文件
├── src                		// 生产目录
│   ├── assets         		// css js 和图片资源
│   ├── common         		// 公用组件
│   ├── components     		// 各种Vue组件
│   │   ├── Analyze         		//资金分析
│   │   ├── Culture         		// 文化基金会
│   │   ├── Dynamic     		// 发表动态
│   │   ├── Fmcg         		// 快消品
│   │   ├── Main         		//  组织架构主页面
│   │   ├── Manpower     		//人力分析二级页面
│   │   ├── Overview         		// 集团总览主页面
│   │   ├── Perform         		// 经营业绩
│   │   ├── PersonDetails               // 人单损益
│   │   ├── Property         		//资产负债
│   │   ├── Search     		        // 搜索，组织架构树
│   │   ├── Taxes                       //税务分析
│   │   └── Test.vue                    // 测试页面
│   ├── config     		    // 公用处理方法
│   ├── router            // 路由配置
│   ├── service           // 后端接口配置
│   ├── store          		// vuex状态管理器
│   ├── App.vue        		// 项目中全局Vue
│   ├── main.js        		// Webpack 预编译入口
│   └── routers.js        // vue路由配置文件
</pre>


### 公共组件说明

>存放路径：src/common

  组件名称  | 组件说明
  ---:| :---
  barChart.vue          | 柱状图
  barEcharts.vue        | 柱状图
  barecharts2.vue       | 柱状图
  budget.vue            |
  capital.vue           | 详细文字
  culBing2.vue          | 饼图
  dateTime_month.vue    | 选择月
  dateTime_quarter.vue  |
  dateTime_week.vue     | 选择周
  dateTime_year.vue     | 选择年
  detail.vue            |
  flowDate.vue          |
  hb-header.vue         | 系统头部header
  hb-table.vue          | 表格
  hb-title.vue          | 面板标题
  hb-transverseBar.vue  | 横向柱状图
  information.vue       |
  lineChart.vue         | 折线图
  linecharts.vue        | 折线图2
  tabTime.vue           | 选择时间标签
  tabTime_total.vue     | 选择时间标签
  total.vue             | 合计

###########V1.0.0 版本内容更新
2017/7/31
优化：
  #####  折线图横坐标增加缩放功能 竖屏下横坐标可自由缩放
  #####  echarts图表按需引入
  如：
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    mode_modules中require引入了，只需留下项目中需要的
  ##### echart饼图增加选中状态默认一个颜色
    这里把颜色写死了
    每次点击tab的时候会重绘一次canvas 设置对应的selected 突出显示
    color 也是对应显示的 不能通过选中某个饼状显示一个颜色
    这里把饼状图设置为不可点击，否则颜色不会对应表变化。饼图只是显示作用 echarts有 normal 和 emphasis（高亮）可设置点击之后的。 但是不会重绘 和之前设置的重绘改变会有冲突.
  #####  svg横屏竖屏切换可自适应


##### 2017/9/8
  丑晴 --- 新增Main文件夹 放置所有的首页的子组件 包括main组件

  main文件夹下增预算budget 子组件


  ##### 2017/9/9 ---- 新增折线图  discount.vue
                   应纳税总额(万) total.vue
                   进度条       budget.vue

