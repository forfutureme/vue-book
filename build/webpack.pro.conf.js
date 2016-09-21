/**
 * Created by huweijian on 16/9/21.
 * webpack生产环境下的配置
 */

//引入webpack基本配置
let path = require('path'),
    config = require('../config'),
    webpack = require('webpack'),
    webpackBaseConfPro = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    extend = require('util')._extend;


//设置生产环境插件
let proPlugins = [

    //new CleanPlugin('../dist'),

    //这个插件查找相似块和文件,同时将他们合并,为用户更好的缓存
    new webpack.optimize.DedupePlugin(),

    //这个插件根据你应用中一些模块的使用情况来对这些模块进行优化
    new webpack.optimize.OccurenceOrderPlugin(),

    //这个插件压缩所有最终束的JavaScript代码
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,    //?丑化压缩
        compress: {
            //http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            warnings: false    //抑制丑化警告
        }
    }),

    //替换html代码
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        }
    })
];
if (webpackBaseConfPro.plugins){
    webpackBaseConfPro.plugins = webpackBaseConfPro.plugins.concat(proPlugins);
}else{
    webpackBaseConfPro.plugins = proPlugins;
}
console.log('------------------------pro----------------------------');
extend(webpackBaseConfPro.output, {
    path: config.build.assetsDist,
    filename: '[name]-[hash].js',
    chunkFilename:'[name]-[chunkhash].js',
    //todo 本地测试就写了这个地址了
    publicPath: 'http://localhost:3000/',
    assetsPublicPath: config.build.assetsPublicPath
});


module.exports = webpackBaseConfPro;


