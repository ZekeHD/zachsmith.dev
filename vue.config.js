module.exports = {
  publicPath: '/PortfolioWebsite/',
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: `@import "src/scss/_variables.scss";@import "src/scss/_classes.scss";`
      }
    }
  }
}