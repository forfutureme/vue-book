/**
 * Created by huweijian on 16/5/10.
 */

var fs = require('fs');

function isHave(name, pass, arr){
    console.log(name);
    var flog = {
        name: false,
        pass: false
    };
    for (var i = 0, n = arr.length; i < n; i++){
        if (i % 2 === 0 && arr[i] === name){
            console.log(arr[i], name);
            flog.name = true;
            if (arr[i + 1] === pass){
                flog.pass = true;
            }
        }
    }
    return flog;

}
function login(query){
    var end = {};
    try {
        var users = fs.readFileSync('user.json', 'utf-8');
        //console.log('读到');
        var obj = JSON.parse(users);
        var arr = obj.info;
        //console.log(obj);
        var flog = isHave(query.username, query.password, arr);
        if (!flog.name){
            end.ok = false;
            end.msg = '用户名不存在';
        }
        if (flog.name && flog.pass){
            end.ok  = true;
            end.msg = '登陆成功';
            end.info = {
                user: query.username
            }
        }
        if (flog.name && !flog.pass){
            end.ok = false;
            end.msg = '密码不正确';
        }

    } catch (e){
        console.log('没有');
        if (e) {
            console.log(e);
            end.ok = false;
            end.msg = '用户名不存在'
        }
    }
    console.log(end);
    return end;
}
//var l = login({
//    username: 'a',
//    password: 'c4ca4238a0b923820dcc509a6f75849b'
//})

module.exports = login;