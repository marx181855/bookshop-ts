const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/bookshop-ts/dist/' : '/',
  chainWebpack: config => {
    // vant组件typescript按需引入
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
    // 生产模式去除console
    config.optimization
      .minimizer('terser')
      .tap(args => {
        Object.assign(args[0].terserOptions.compress, { // 生产模式 console.log 去除
          // warnings: false , // 默认 false
          // drop_console:  ,
          // drop_debugger: true, // 默认也是true
          pure_funcs: ['console.log']
        })
        return args
      })
  },
  configureWebpack: {
    resolve: {
      // 设置别名
      alias: {
        images: '@/assets/images',
        assets: '@/assets',
        components: '@/components',
        api: '@/api',
        views: '@/views',
        hooks: '@/hooks'
      }
    }
  },

};