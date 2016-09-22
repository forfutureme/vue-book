/**
 * Created by huweijian on 16/9/22.
 */
function isEmptyObject(obj) {
    let res = true;
    for (let key in obj){
        res = false;
    }
    return res;
}

module.exports = {
    isEmptyObject: isEmptyObject
};


