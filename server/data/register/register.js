/**
 * Created by huweijian on 16/5/10.
 */
var fs = require('fs');

function isHave(name, arr){
    var flog = true;
    for(var i = 0, n = arr.length; i < n; i++){
        if (i % 2 === 0 && arr[i] === name){
            flog = false;
        }
    }
    return flog;
}
function register(query){
    var users;
    var arr = [],
        end = {}
        ;

    try {
        users = fs.readFileSync('user.json', 'utf-8');
        console.log(1);
        var obj = JSON.parse(users);
        arr = obj.info;
        if (isHave(query.username, arr)) {
            arr.push(query.username);
            arr.push(query.password);
            fs.writeFile('user.json', JSON.stringify({info: arr}));
            end.msg = '注册成功!';
            end.ok = true;
            end.info = {
                user: query.username,
                pass: query.password
            }
        }else{
            end.msg = '用户名已存在';
            end.ok = false;
        }
    } catch (ex){
        console.log(2);
        arr.push(query.username);
        arr.push(query.password);
        fs.writeFileSync('user.json', JSON.stringify({info: arr}), 'utf8', function(err){
            console.log(err);
        });
        end.msg = '注册成功!';
        end.ok = true;
        end.info = {
            user: query.username,
            pass: query.password
        }
    }
    console.log(end);
    return end;
    //var users = fs.readFileSync('../json/user.json', 'utf-8');
    //console.log(typeof JSON.parse(users));
}

module.exports = register;
