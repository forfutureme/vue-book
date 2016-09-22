/**
 * Created by huweijian on 16/5/6.
 */

var express = require('express');
var urlLib = require('url');
var dataMain = require('../data/dataMain');
var method = require('../utils/method');

var routeMethod = {
    download: function (req, res) {
        console.log('尝试下载图片');
        console.log(req.baseUrl);
        var downPath = req.baseUrl.replace(/(\/.*?\/)(\d*)(\w*)/, '$1$2.$3');

        res.download('./public' + downPath, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('图片下载成功');
            }
        })
    },
    api: function (req, res) {
        console.log('请求数据');
        var query = method.isEmptyObject(req.query) ? req.body : req.query;
        if (method.isEmptyObject(query)) {
            res.json({
                meta: {
                    error: 509,
                    msg: '参数错误，参数不能为空'
                },
                result: []
            })
        }
        dataMain(query)
            .then(function (data) {
                //服务端处理了跨域
                res.json({
                    meta: {
                        error: 200,
                        msg: 'ok'
                    },
                    result: [data]
                });
                console.log(data);
            })
            .catch(function (err) {
                console.log(err);
                res.json({
                    meta: {
                        error: 501,
                        msg: err
                    },
                    result: []
                })
            });
    }
};

module.exports = routeMethod;
