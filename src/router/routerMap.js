/**
 * Created by huweijian on 16/9/22.
 * 配置vue页面路由
 */

export default [
    {
        path: '/',
        name: 'index',
        component: function (resolve) {
            require(['../page/app.vue'], resolve);
        },
        children: [

        ]
    },
    {
        path: '/regex',
        name: 'regex',
        component: function (resolve) {
            require(['../page/regex/regex.vue'], resolve);
        }
    }

]

