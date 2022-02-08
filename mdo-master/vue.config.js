module.exports = {
  // 选项...
  lintOnSave: false, // 关闭掉eslint的检查
  productionSourceMap: false,
  publicPath: '/',

  chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      Object.assign(args[0].terserOptions.compress, {
        // 生产模式 console.log 去除
        // warnings: false , // 默认 false
        // drop_console:  ,
        // drop_debugger: true, // 默认也是true
        pure_funcs: ['console.log'],
      })
      return args
    })
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 10000 }))
  },

  // presets: ['@vue/cli-plugin-babel/preset'],
  chainWebpack: (config) => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
}
