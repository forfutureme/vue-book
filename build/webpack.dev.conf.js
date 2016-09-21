/**
 * Created by huweijian on 16/9/21.
 * webpack开发环境下的配置
 */
//引入webpack基本配置
let path = require('path'),
    config = require('../config'),
    webpackBaseConfDev = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    extend = require('util')._extend;

//开启资源地图
webpackBaseConfDev.devtool = 'source-map';
webpackBaseConfDev.debug = true;
//设置开发环境插件
let devPlugins = [
    //替换html代码
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    })
];

if (webpackBaseConfDev.plugins){
    webpackBaseConfDev.plugins = webpackBaseConfDev.plugins.concat(devPlugins);
}else{
    webpackBaseConfDev.plugins = devPlugins;
}
console.log('-------------------------dev--------------------------------');
extend(webpackBaseConfDev.output, {
    path: config.build.assetsDev,
    filename: '[name].js',
    chunkFilename:'[name].js',
    publicPath: 'http://localhost:3000/',
    assetsPublicPath: config.build.assetsPublicPath
});

module.exports = webpackBaseConfDev;



