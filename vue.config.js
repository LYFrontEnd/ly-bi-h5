const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/bilibili/" : "/",
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
  }
})
