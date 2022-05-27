const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack() {
    return {
      resolve: {
        fallback: {
          path: require.resolve('path-browserify')
        }
      }
    }
  },
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club',
        changeOrigin: true
      }
    }
  }
})
