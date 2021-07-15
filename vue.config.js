const path = require("path");

module.exports = {
  publicPath: '/svel-need-for-drive/',
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src/styles/theme/")],
          indentedSyntax: false
        },
        prependData: `@import "~@/styles/_variables.scss"; @import "~@/styles/index.scss"; @import "~@/styles/theme/index.css";`
      }
    }
  },
  assetsDir: "@/assets/",
  // devServer: process.env.NODE_ENV === "production" ? {} : proxy()
}