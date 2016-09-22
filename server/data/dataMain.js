/**
 * Created by huweijian on 16/5/9.
 * 一个解析接口类型的方法
 */
var DataMethod = require('./dataMethod');

function dataMain(query, callback){
  if (query){
    var _mt = query['_mt'].split('.')[1];
    var method = new DataMethod(query);
    if (method[_mt]){
      callback(null, method[_mt]());
    }else{
      console.log('无对应方法');
      callback({
        error: '500',
        msg: '无对应方法'
      }, null)
    }
  }else{
    console.log('没有参数');
    callback('没有参数')
  }

}
module.exports = function(query){
  return new Promise(function(resolve, reject){
    dataMain(query, function(err, data){
      if (err){
        reject(err)
      } else{
        resolve(data);
      }
    });
  });
};