/**
 * Created by huweijian on 16/9/21.
 * 用gulp来驱动webpack打包
 */
var gulp = require('gulp'),
    gutil = require('gutil'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack'),
    webpackConfig;

//console.log(process.env);

//判断环境引入对应的webpack配置文件
//todo 同时引入不知为何都会走，有空了在凑凑
webpackConfig = process.env.NODE_ENV === 'dev' ? require('./build/webpack.dev.conf')
                                               : require('./build/webpack.pro.conf');

//开发环境下
gulp
    .task('webpack', function(callback){
        webpack(webpackConfig, function(error, stats) {
            if (error) throw new gutil.PluginError('webpack', error);
            gutil.log('[webpack]', stats.toString());

            callback();
        });
    });



//检测变化初始化服务
gulp
    .task('change', function(){
        // 从这个项目的根目录启动服务器
        browserSync.init({
            server: 'dev'
        });

        gulp
            .watch('src/**/**', ['webpack']);

    });

//尝试清除dev缓存，貌似不行
gulp
    .task('clean', function () {
        return gulp
            .src('dev')
            .pipe(clean());
    });


//清楚pro缓存
gulp
    .task('cleanPro', function () {
       return gulp
           .src('dist')
           .pipe(clean());
    });

//生产环境下任务
gulp
    .task('pro', ['cleanPro','webpack'], function () {
        gutil.log('生产完成');
        browserSync.init({
            server: 'dist'
        });
    });

//默认运行开发环境下任务
gulp
    .task('dev', ['webpack', 'change'], function(){
        gulp.watch('dev/**/**').on("change", browserSync.reload);
    });

//只运行一次dev打包
gulp
    .task('one', ['webpack'], function () {
        gutil.log('一次执行开发完成');
    });

