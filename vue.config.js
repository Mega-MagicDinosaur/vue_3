/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
*/

const path = require('path');

module.exports = {
    publicPath: '/static/js/home/',
    outputDir: path.resolve(__dirname, '../static/js/home/'),
    filenameHashing: false,
    runtimeCompiler: true,
    devServer: {
      devMiddleware: {
        writeToDisk: true, 
      }
    },
};
