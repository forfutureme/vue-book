/**
 * Created by huweijian on 16/9/22.
 */

var fs = require('fs');

function checkList() {
    let context = fs.readFileSync('database/Catalog/Catalog.json', 'utf-8');
    return JSON.parse(context)
}

module.exports = checkList;
