/**
 * Created by huweijian on 16/10/10.
 * 获取正则内容的目录
 */

let fs = require('fs');

function grammar() {
    let context = fs.readFileSync('database/tool/regex/grammar.json', 'utf-8');
    return JSON.parse(context);
}

module.exports = grammar;