## 001.如何设置一个环境常量？ process.ENV is not defined
* 1.npm i -D babel-plugin-transform-node-env-inline
* 2.在 wepy.config.js 的 babel 配置中的 plugins 数组中加入 'transform-node-env-inline'
```javascript
 babel: {
      sourceMap: !isProd,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        'transform-node-env-inline' // <--注意这行
      ]
    }
```
* 3.在你的代码中
```javascript
// 判定现在的环境
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

// development or production host
const hosts = {
  dev: 'https://dev.com',
  prod: 'https://prod.com'
}

module.exports = {
  env,
  host: hosts[env],
}
```


## 2.WePY 使用 less autoprefix
最近发现在部份机型上使用display: flex;会出现兼容性问题，经测试发现与prefix有关。使用less时，建议加上autoprefix插件，步骤如下：
* 1.安装插件
```javascript
npm install less-plugin-autoprefix --save-dev
```
* 2.配置插件
在wepy.config.js中加入
```javascript
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
compilers: {
  less: {
    compress: true,
    plugins: [new LessPluginAutoPrefix({browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6']})]
  }
```


## 3.WxNotificationCenter - 微信小程序通知广播模式类,降低小程序开发的耦合度
* [github](https://github.com/icindy/WxNotificationCenter)
* [简书](https://www.jianshu.com/p/da45f520a071)


## 4.button 控制连续多次重复点击
```javascript
data={
  isUserClick: false
}

todo() {
  var self = this;
  if (self.isUserClick) {
      return;
  }
  self.isUserClick = true;
  // 其他业务代码
  setTimeout(function() {
      self.isUserClick = false;
  }, 300)
}
```