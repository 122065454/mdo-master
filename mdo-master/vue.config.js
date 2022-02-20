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
//   configureWebpack:{
//     module:{
//       rules:[
//       {
//       test:/\.(woff2?|eot|ttf|otf)(\?.*)$/,
//       loader:'url-loader',
//       options:{
//       limit: 10000,
//       name: assetsPath('fonrs/[name].[hash:7].[ext]')
//       }
//       }
//       ]
//   },
// },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      '/api': {
        target: 'http://54.67.81.90:8080/', //这里后台的地址模拟的;

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
