import wepy from 'wepy'
import utils from './index';
const get = (key, defaults = null) => {
    try {
        const version = wepy.getStorageSync('__VERSION__' );
        if (utils.__VERSION__ !== version) {
            // console.log('storage版本更新');
            clear();
            // wepy.reLaunch({
            //     url: '/pages/login'
            // })
            // return null;
        } else {
            return wepy.getStorageSync(key);
        }
    } catch (e) {
        console.log('获取storage失败');
        return defaults
    }
}

const set = (key, data = null) => {
    try {
        return wepy.setStorageSync(key, data)
    } catch (e) {
        console.log('设置storage失败');
        return false
    }
}

const remove = (key) => {
    try {
        return wepy.removeStorageSync(key);
    } catch (e) {
        console.log('删除storage失败');
        return false
    }
}

const clear = () => {
    try {
        return wepy.clearStorageSync();
    } catch (e) {
        console.log('清空storage失败');
        return false
    }
}
export default {
    get,
    set,
    remove,
    clear
}