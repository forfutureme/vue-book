/**
 * Created by huweijian on 16/9/23.
 * 统一请求接口方法
 * 因为使用vue的内置htp方法需要引入vue，所以调用时需要修改this: api.call(this, params)
 * @param params {object} 参数
 * @param url [string] 可选参数，接口url
 * @returns {Promise|Promise<T>} 一个promise对象
 */
export default function (params, url='http://127.0.0.1:3009/m.api') {
    let _this  = this;

    return new Promise(function (resolve, reject) {
        _this
            .$http
            .post(url, params)
            .then(function (res) {
                // console.log(res);
                //200返回正确数据
                if (res.status === 200){
                    resolve(res.data);
                }else{
                    //非200返回错误数据
                    reject({
                        error: res.status,
                        text: res.statusText,
                        msg: res.ok
                    });
                }

            })
            .catch(function (err) {
                let errMap = {
                    '0': '链接服务器失败，请确认服务端是否开启'
                };
                reject({
                    error: err.status,
                    text: err.statusText,
                    msg: errMap[err.status]
                });
            });
    });
}
