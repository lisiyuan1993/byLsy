const path = require('path');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
// var prod = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'show';
var prod = true;
const CDN = process.env.CDN;

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src/components'),
      '@api': path.join(__dirname, 'src/api'),
      '@cdn': path.join(__dirname, 'src'),
      '@plugins': path.join(__dirname, 'src/plugins')
    },
    aliasFields: ['wepy'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod,
      plugins: [new LessPluginAutoPrefix({browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6']})]
    },
    /*sass: {
      outputStyle: 'compressed'
    },*/
    babel: {
      sourceMap: prod,
      presets: ['env'],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        'transform-node-env-inline' // <--注意这行
      ]
    }
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 100
        },
        png: {
          quality: 100
        }
      }
    }
  }
}
