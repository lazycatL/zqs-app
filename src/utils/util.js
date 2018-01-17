let util = {

};

/**
 * 对字符串进行Unicode编码
 * @param str
 * @returns {string}
 */
util.decodeStr = function (str) {
    let res = []
    for (let i = 0; i < str.length; i++)
      res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4);
    return '\\u' + res.join('\\u')
}
/**
 * 对unicode编码格式的字符串进行解码
 * @param str
 * @returns {string}
 */
util.undecodeStr = function  (str) {
    let result = []
    let strArr = str.split('\\u')//根据 \u 分割
    let len = strArr.length
    for (let i = 0; i < len; i++) {
      if (strArr[i]) {
        result.push(String.fromCharCode(parseInt(strArr[i], 16)))//16 转 10
      }
    }
    return result.join('')
}
/**
 * 判断传入对象的数据类型,返回对象字符串
 * String
 * Number
 * Array
 * Date
 * Function
 * Function
 * @param {*} obj 
 */
util.typeOfObj = function(obj) {
    let objType = Object.prototype.toString.call(obj)
    return objType.replace('[object ','').replace(']','')
}
/**
 * 根据不同组织编码，路由跳转到不同默认页
 * @param {*组织编码} orgCode 
 */
util.toDefaultPage = function (orgCode) {
  
}

export default util;
