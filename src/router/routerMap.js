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
        }
    });
}
