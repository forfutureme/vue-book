/**
 * Created by huweijian on 16/5/9.
 */
var xiao = require('./xiao/xiao');
var login = require('./login/login');
var register = require('./register/register');
var checkList = require('./checkList/checkList');

function DataMethod(query) {
    this.query = query || null;

}

DataMethod.prototype.xiao = function () {
    return xiao();

};

DataMethod.prototype.login = function () {
    return login(this.query);
};

DataMethod.prototype.register = function () {
    return register(this.query);
};

DataMethod.prototype.checkList = function () {
    return checkList(this.query);
};


module.exports = DataMethod;