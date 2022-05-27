const isProduction = process.env.NODE_ENV === 'production'
const CompressionPlugin = require('compression-webpack-plugin')
const plugins = ['@vue/babel-plugin-transform-vue-jsx']
// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  plugins: plugins,
  presets: ['@vue/cli-plugin-babel/preset'],
  // 选项...
  lintOnSave: false, // 关闭掉eslint的检查
  productionSourceMap: false,
  publicPath: '/',
  // 关闭 souremap
  productionSourceMap: !isProduction, //关闭生产环境下的SourceMap映射文件
  css: {
    sourceMap: !isProduction, // css sourceMap 配置
  },

  chainWebpack: (config) => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    if (isProduction) {
      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          test: /\.(js)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8,
          deleteOriginalAssets: true, // 删除源文件
        })
      )
    }
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) =>
        Object.assign(options, {
          limit: 10000,
        })
      )
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  configureWebpack: {
    externals: {
      'element-ui': 'ELEMENT',
      vue: 'Vue',
      echarts: 'echarts',
    },
  },
  // presets: ['@vue/cli-plugin-babel/preset'],
  chainWebpack: (config) => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8091,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      '/api': {
        target: 'http://5i01j19762.zicp.vip/simeta/', //这里后台的地址模拟的;

        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': '', //请求的时候使用这个api就可以
        },
      },
    },
    // proxy: 'https://api.mdex.network/admin/'
  },

  // proxy: 'https://api.mdex.network/admin/'
}
