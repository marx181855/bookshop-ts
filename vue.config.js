const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  // vant组件typescript按需引入
  chainWebpack: config => {
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
  },
  configureWebpack: {
    resolve: {
      // 设置别名
      alias: {
        images: '@/assets/images',
        assets: '@/assets',
        components: '@/components',
        api: '@/api',
        views: '@/views'
      }
    }
  }
};