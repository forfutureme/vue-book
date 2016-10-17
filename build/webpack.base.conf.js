/**
 * Created by huweijian on 16/5/4.
 * webpack基础配置 按顺序自上而下
 *
 */
var path = require('path'),
    config = require('../config'),
    webpack = require('webpack'),
    //webpack插件
    ExtractPlugin = require('extract-text-webpack-plugin'),
    projectRoot = path.resolve(__dirname, '../src');


module.exports = {
    //入口配置,可以用数组配置多个
    // todo 后面可能会改动
    entry: {
        //app: path.resolve(__dirname, projectRoot+'/src/app.js')
        app: './src/app.js'
    },

    //出口配置,
    // todo 后面可能会改动
    output: {
        path: config.build.assetsDev,
        filename: '[name].js',
        // chunkFilename:'[name].js',
        publicPath: 'http://localhost:3000/',
        assetsPublicPath: config.build.assetsPublicPath
    },

    plugins: [
        new ExtractPlugin('[name].css',{allChunks: true}),
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
            // {
            //     test: /\.js/,
            //     loader: 'eslint',
            //     include: './src',
            //     exclude: ['../node_modules', '../bower_components']
            // },
            // {
            //     test: /\.vue$/,
            //     loader: 'eslint',
            //     include: './src',
            //     exclude: ['../node_modules', '../bower_components']
            // }

        ],
        loaders: [
            {
                test: /\.vue$/i,
                loader: 'vue',
                //include: __dirname + '../src'
                exclude: ['../node_modules', '../bower_components']
            },
            {
                test: /\.js/,
                loader: 'babel',
                include: projectRoot,
                exclude: ['../node_modules', '../bower_components']
            },
            {
                test: /\.css/,
                loader: ExtractPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url?limit=10000'
            },
            {
                test: /\.html/,
                loader: 'html'
            }
        ]
    },
    externals: [
        {
            'vue.min': 'Vue',
            'jquery.min': '$'
        }
    ],
    vue: {
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        },
        extensions: ['', '.webpack.js', '.web.js', '.js', '.vue'],
        root: [
            projectRoot
        ]
    }
};


