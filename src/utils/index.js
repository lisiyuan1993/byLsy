//Document This  连按两遍Ctrl+Alt+D
import wepy from 'wepy';
import config from '@cdn/utils/config';
/**
 * 判断对象是否为空
 * @param {any} obj 
 * @returns {boolean}
 */
function isEmptyObject(obj) {
  for (var key in obj) {
    return false;//返回false，不为空对象
  }
  return true;//返回true，为空对象
}
/**
 * 自定义暂停时间
 * @param {number} [s=config.sleepTime] 单位s
 * @returns {Promise}
 */
function sleep(s = config.sleepTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise resolved');
    }, s * 1000);
  });
}

/**
 * 轻提示
 * 
 * @param {object} obj 
 * @param {string} title 
 * @param {number} [duration=1500] 
 * @param {callback funciton} callback 
 */
function zanToast(obj, title, duration = 1500, callback) {
  obj.$invoke('toast', 'showZanToast', { title: title, timeout: duration });
  if (callback) {
    sleep(duration / 1000).then(function () {
      callback();
    });
  }
}

/**
 * 下来刷新重置数据
 * 
 * @param {object} obj 
 * @param {object} data 
 */
function resetData(obj, data) {
  for (let key in data) {
    if ((typeof data[key]) === 'object') {
      obj[key] = JSON.parse(JSON.stringify(data[key]));
    } else {
      obj[key] = data[key]
    }
  }
  obj.$apply();
}

/**
 * 
 * @param {object} obj 
 * @param {string} title 
 * @param {number} [duration=1500]  
 * @param {function} callback 
 */
// function zanToast(obj, title, duration = 1500, callback) {
//   obj.$invoke('toast', 'showZanToast', { title: title, timeout: duration });
//   if (callback) {
//     sleep(duration / 1000).then(function () {
//       callback();
//     });
//   }
// }

/**
 * 加载中动画
 * @param {string} [title='加载中'] 
 * @returns undefined
 */
function loading(title = '加载中') {
  if (config.isLoading) {
    return false;
  }
  config.isLoading = true;
  wx.showLoading({
    title: title,
    mask: true
  });
}

/**
 * 加载完成
 */
function loaded() {
  if (config.isLoading) {
    config.isLoading = false;
    wx.hideLoading();
  }
}


/* 对象的拷贝，将一个对象的所有属属性拷贝到另外一个对象。
* @param {Object} target 目标对象。 
* @param {Object} source 源对象。 
* @param {boolean} deep 是否复制(继承)对象中的对象。 
* @returns {Object} 返回继承了source对象属性的新对象。 
*/
function extend(target, /*optional*/source, /*optional*/deep) {
  target = target || {};
  var sType = typeof source, i = 1, options;
  if (sType === 'undefined' || sType === 'boolean') {
    deep = sType === 'boolean' ? source : false;
    source = target;
    target = this;
  }
  if (typeof source !== 'object' && Object.prototype.toString.call(source) !== '[object Function]')
    source = {};
  while (i <= 2) {
    options = i === 1 ? target : source;
    if (options != null) {
      for (var name in options) {
        var src = target[name], copy = options[name];
        if (target === copy)
          continue;
        if (deep && copy && typeof copy === 'object' && !copy.nodeType)
          target[name] = this.extend(src ||
            (copy.length != null ? [] : {}), copy, deep);
        else if (copy !== undefined)
          target[name] = copy;
      }
    }
    i++;
  }
  return target;
};


let utils = {
  isEmptyObject,
  sleep,
  loading,
  loaded,
  zanToast,
  resetData,
  extend
}
export default extend(utils, config);