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
 * 获取某个元素的style样式值
 * @param {*} element 
 * @param {*} styleName 
 */
util.getStyle = function(element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
      styleName = 'cssFloat';
  }
  try {
      const computed = document.defaultView.getComputedStyle(element, '');
      return element.style[styleName] || computed ? computed[styleName] : null;
  } catch(e) {
      return element.style[styleName];
  }
}
/**
 * 滚动条滚动到指定位置
 * @param {*} el 
 * @param {*} from 
 * @param {*} to 
 * @param {*} duration 
 */
util.scrollTop = function (el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
              return window.setTimeout(callback, 1000/60);
          }
      );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
      if (start === end) return;

      let d = (start + step > end) ? end : start + step;
      if (start > end) {
          d = (start - step < end) ? end : start - step;
      }

      if (el === window) {
          window.scrollTo(d, d);
      } else {
          el.scrollTop = d;
      }
      window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}
/**
 * 判断某DOM是否存在某样式
 * @param {*} el 
 * @param {*} cls 
 */
util.hasClass = function (el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
      return el.classList.contains(cls);
  } else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
/**
 * 
 * @param {*} el 
 * @param {*} cls 
 */
util.addClass = function (el, cls) {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
      const clsName = classes[i];
      if (!clsName) continue;

      if (el.classList) {
          el.classList.add(clsName);
      } else {
          if (!hasClass(el, clsName)) {
              curClass += ' ' + clsName;
          }
      }
  }
  if (!el.classList) {
      el.className = curClass;
  }
}
/**
 * 根据不同组织编码，路由跳转到不同默认页
 * @param {*组织编码} orgCode 
 */
util.toDefaultPage = function (orgCode) {
  
}

export default util;
