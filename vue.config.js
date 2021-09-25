module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: `@import "src/scss/_variables.scss";`
      }
    }
  }
}