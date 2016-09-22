# vue-book

> 尝试使用node+express搭建简易后台，配合vue做前端展示，
创建一个技术笔记小书

## 依赖环境

* node环境
* npm(cnpm)
* bower

###--安装服务端依赖

* 进入`vue-book->server`目录执行`npm install`或者`cnpm install`

###--安装前端依赖

* 进入`vue-book`目录执行`npm install`或者`cnpm install`，以及`bower install`

## 启动node服务

* 进入`vue-book->server`目录执行
`node node ./bin/www`
* 默认后台服务端口为3009

## 构建前端页面

* 进入`vue-book`执行`npm run dev`(开发环境) 
* 若要压缩执行`npm run pro`
* 默认前端页面服务端口为3000

##更新进度

###2016-09-22

####--服务端
* 设置服务端跨域
* 增加类目查询服务

####--前端
* 修复webpack建构不成功的bug
* 测试http请求


###2016-09-21

* 首次创建
* 建立服务端环境
* 建立前端构建环境


