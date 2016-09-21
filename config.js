/**
 * Created by huweijian on 16/9/21.
 * * config文件对整个项目资源做统一配置,按顺序自上而下
 * ** 压缩后文件夹名dist
 * ** 静态资源路径
 * ** 公共资源路径
 * ** 生产环境是否包含资源地图
 */

var path = require('path');
module.exports = {
    build: {
        indexDist: path.resolve(__dirname, 'dist/index.html'),
        indexDev: path.resolve(__dirname, 'dev/index.html'),
        assetsDist: path.resolve(__dirname, 'dist'),
        assetsDev: path.resolve(__dirname, 'dev'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true
    },
    dev: {
        port: 8972,
        proxyTable: {}
    }
};
