/**
 * Created by huweijian on 16/5/4.
 * webpack基础配置 按顺序自上而下
 *
 */
var path = require('path'),
    config = require('../config'),
    projectRoot = process.cwd(),
    webpack = require('webpack'),
    //webpack插件
    ExtractPlugin = require('extract-text-webpack-plugin');


module.exports = {
  //入口配置,可以用数组配置多个
  // todo 后面可能会改动
  entry: {
    //app: path.resolve(__dirname, projectRoot+'/src/app.js')
    app: './src/app.js'
  },

  //出口配置,
  // todo 后面可能会改动
  output: {},

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      //把用到的依赖放入名为main的文件
      name: 'main',
      //寻找所有具有功能依赖关系的子项
      children: true,
      //一个依赖被使用多少次才能被提取
      minChunks: 2
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '../src'
      },
      {
        test: /\.css/,
        loader: ExtractPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract('style', 'css!sass')
        //or
        //loaders: ['style', 'css', 'sass'],
        // include: __dirname + '/src'
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url?limit=10000'
        //另一种写法
        //loader: 'url',
        //query: {
        //  limit: 10000
        //}
      },
      {
        test: /\.html/,
        loader: 'html'
      }
    ]
  },
  resolve: {
    root: projectRoot
  }

};


