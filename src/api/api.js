import service from '@/utils/ajax'
import store from '../store/index'

//  测试
 const host = process.env.BASE_URL

export default {
  imageUrl: host + '/userphoto/getPhoto?usercode=', // 头像存放路径
  excelUrl: host + '/system/excel', // excel存放路径
  /*
  *   test
  * */
  test (params) {
    return service.get('../../../static/json/test.json', params)
  },
  /*
  *   指标集数据
  * */
  extract (params, indexsetcode) {
    params.orgcode = store.state.orgcode
    params.employeecode = store.state.employeecode

    return service.post(host + '/index/extract?indexSetCodes=' + indexsetcode + '&refresh=' + store.state.refresh, params)
  },
  extract2 (params, indexsetcode) {
    return this.extract(params, indexsetcode)
  },
  // 测试发表评论
  getdynamic (params, indexsetcode) {
    return service.post(host + '/dynamic/' + indexsetcode, params)
  },
  // 测试经营业绩华彬大厦
  extract4 (params, indexsetcode) {
    return this.extract(params, indexsetcode)
  },
  main (params) {
    params.orgcode = store.state.orgcode
    params.employeecode = store.state.employeecode
    return service.post(host + '/pageindexset/getData', params)
  },
  // 汇率查询
  exchangeRate (params, indexsetcode) {
    return service.post(host + '/index/extract?indexSetCodes=' + indexsetcode, params)
  },
  // 组织架构
  orgdept (params) {
    return service.post(host + '/orgdept/allEmployee', params)
  },
  // 组织架构搜索
  filterOrgdept (value, params) {
    return service.post(host + '/search/tree?keyword=' + value, params)
  },
  // 测试
  extractTest (params, indexsetcode) {
    return this.extract(params, indexsetcode)
  },
  /*
*   人单损益测试
* */
  extract5 (params, indexsetcode) {
    return this.extract(params, indexsetcode)
  },
  // 测试人单损益一级
  extract6 (params, indexsetcode) {
    return this.extract(params, indexsetcode)
  },
  /***
   * 快消品首页-红色板块-业务分析
   * @param params
   * @param indexsetcode
   * @returns {AxiosPromise}
   */
  fmcgKxp10 (params, indexsetcode) {
    return this.extract(params, indexsetcode)
  },
  /*
  *   获取帮助接口
  * */
  getDesc (params, indexsetcode) {
    return service.post(host + '/help/getDesc?pageCode=' + indexsetcode, params)
  },
  /*
  *   登录接口
  * */
  getLogin (params) {
    return service.post(host + '/login', params)
  },
}
