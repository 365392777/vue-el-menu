module.exports = {
  // 多入口：entry是一个对象
  // entry: {
  //   // app: './src/app.js',
  //   // home: './src/home.js'
  // },
  // output: {
  //   // filename: 'bundle.js',
  //   // path: __dirname + '/dist'
  // },

  // module: {
  //   rules: [
  //     // { test: /\.txt$/, use: 'raw-loader' },
  //     {
  //       // test: /\.(png|svg|jpg|gif)$/, // 针对图片
  //       test: /\.(woff|woff2|eot|ttf|otf)$/, // 针对字体
  //       use: [
  //         'file-loader'
  //       ]
  //     }

  //   ]
  // },

  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'assets',
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: true,
  /* 代码保存时进行eslint检测 */
  lintOnSave: false,
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8099,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        // target: 'http://192.168.18.100:9001', // 插线
        // target: "http://192.168.1.103:9001",
        // target: 'http://192.168.18.114:9001', // 插线
        // target: 'http://111.230.140.55', // 外网
        target: 'https://unidemo.dcloud.net.cn/', //
        /* 允许跨域 */
        changeOrigin: true
      }
    }
  }
  // pages,
  // 修改插件选项
  // chainWebpack: config => {
  //   // 多页面处理移除prefetch插件,取消预加载
  //   Object.keys(pages).forEach(entryName => {
  //     // 移除 prefetch 插件,取消首屏加载把其他模块js预加载
  //     config.plugins.delete(`prefetch-${entryName}`)
  //   })
  // }
  // devtool: 'cheap-module-eval-source-map' //开发环境下使用,定位到错误源码的行
}
