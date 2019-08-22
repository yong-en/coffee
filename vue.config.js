// vue.config.js
module.exports = {
    /******************* 修改`publicPath`，需要同时修改`src/api/config.js` *******************/
    publicPath: process.env.NODE_ENV === 'production' ? '/coffee/': '',
    outputDir: undefined,
    assetsDir: 'static',
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined,



}
