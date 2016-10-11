/**
 * Created by huweijian on 16/5/9.
 */
let xiao = require('./xiao/xiao');
let login = require('./login/login');
let register = require('./register/register');
let checkList = require('./checkList/checkList');
//正则表达相关接口
let regexIntroduce = require('./tool/regex/introduce');
let regexGrammar = require('./tool/regex/grammar');
let regexContent = require('./tool/regex/content');


function DataMethod(query) {
    this.query = query || null;

}
/**
 * 测试方法返回数据
 * @returns {{id, name, ring, reason, img, link}|*}
 */
DataMethod.prototype.xiao = function () {
    return xiao();
};

/**
 * 登陆方法
 * @returns {*}
 */
DataMethod.prototype.login = function () {
    return login(this.query);
};

/**
 * 注册方法
 * @returns {*}
 */
DataMethod.prototype.register = function () {
    return register(this.query);
};

/**
 * 查询小书列表
 * @returns {*}
 */
DataMethod.prototype.checkList = function () {
    return checkList(this.query);
};

/**
 * 查找正则介绍内容
 * @returns {*}
 */
DataMethod.prototype.regexIntroduce = function () {
    return regexIntroduce(this.query);
};

/**
 * 查找正则内容目录
 * @returns {*}
 */
DataMethod.prototype.regexGrammar = function () {
    return regexGrammar(this.query);
};

/**
 * 查找正则章节内容
 * @returns {*}
 */
DataMethod.prototype.regexContent = function () {
    return regexContent(this.query);
};


module.exports = DataMethod;