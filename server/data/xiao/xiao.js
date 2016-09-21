/**
 * Created by huweijian on 16/5/9.
 */
function xiao(){
  var m = 0;
  for (var i = 0; i < 1000000000; i++){
    m += i;
  }
  return {
    "id": 0,
    "name": "佩恩",
    "ring": "零",
    "reason": "实现世界和平",
    "img": "images/xiao01.png",
    "link": "http://baike.baidu.com/view/447074.htm"
  }
}

module.exports = xiao;
