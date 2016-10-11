/**
 * Created by huweijian on 16/10/10.
 * 读取正则表达式各章节对应内容
 */

let fs = require('fs');

function content() {
    let text = fs.readFileSync('./database/tool/regex/content.json', 'utf-8');
    return JSON.parse(text);
}
module.exports = content;