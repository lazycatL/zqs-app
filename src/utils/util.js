
let util = {

};
/**
 * 对字符串进行Unicode编码
 * @param str
 * @returns {string}
 */
util.decodeStr = function (str) {
    var res = []
    for (var i = 0; i < str.length; i++)
      res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4);
    return '\\u' + res.join('\\u')
}
/**
 * 对unicode编码格式的字符串进行解码
 * @param str
 * @returns {string}
 */
util.undecodeStr = function  (str) {
    var result = []
    var strArr = str.split('\\u')//根据 \u 分割
    var len = strArr.length
    for (var i = 0; i < len; i++) {
      if (strArr[i]) {
        result.push(String.fromCharCode(parseInt(strArr[i], 16)))//16 转 10
      }
    }
    return result.join('')
}
/**
 * 根据不同组织编码，路由跳转到不同默认页
 * @param {*组织编码} orgCode 
 */
util.toDefaultPage = function (orgCode) {
  
}

export default util;
