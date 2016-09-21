/**
 * Created by huweijian on 16/5/6.
 */

var express = require('express');
var urlLib = require('url');
var dataMain = require('../data/dataMain');

var routeMethod = {
  download: function(req, res){
    console.log('尝试下载图片');
    console.log(req.baseUrl);
    var downPath = req.baseUrl.replace(/(\/.*?\/)(\d*)(\w*)/, '$1$2.$3');

    res.download('./public'+ downPath, function(err){
      if (err){
        console.log(err);
      }else{
        console.log('图片下载成功');
      }
    })
  },
  api: function(req, res){
    console.log('请求数据');
    var query = req.query;
    dataMain(query).then(function(data){
      if (query.callback){
        //跨域请求
        res.jsonp(data);
      }else{
        //同域请求
        res.json(data);
      }
    })
    .catch(function(err){
      console.log(err);
    });
  }
};

module.exports = routeMethod;
