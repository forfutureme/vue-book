/**
 * Created by huweijian on 16/10/9.
 * 读取正则表达式介绍内容
 */
let fs = require('fs');

function introduce() {
    let context = fs.readFileSync('database/tool/regex/introduce.json', 'utf-8');
    return JSON.parse(context) ;
}

module.exports = introduce;