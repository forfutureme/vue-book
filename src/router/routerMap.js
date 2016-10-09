/**
 * Created by huweijian on 16/9/22.
 * 配置vue页面路由
 */

export default function (router) {
    router.map({
        '/': {
            //默认页面
            component: function (resolve) {
                require(['../page/app.vue'], resolve);
            }
        },
        '/index': {
            name: 'index',
            component: function (resolve) {
                require(['../page/index/index.vue'], resolve);
            }
        },
        '/regex': {
            name: 'regex',
            component: function (resolve) {
                require(['../page/regex/regex.vue'], resolve);
            }
        }
    });
}
