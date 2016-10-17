/**
 * Created by huweijian on 16/9/21.
 * 入口js
 */

//引入vue，vue-resource，vue-router依赖

import Vue from '../bower_components/vue/dist/vue';
import VueResource from '../bower_components/vue-resource/dist/vue-resource';
import VueRouter from '../bower_components/vue-router/dist/vue-router';

import $ from '../bower_components/jquery/dist/jquery.min';

import './assets/scss/common.scss';

//引入vue路由配置
import routerMap from './router/routerMap';

//引入app.vue
//import App from './page/app.vue';


//使用VueResource
Vue.use(VueResource);

//使用VueRouter
Vue.use(VueRouter);

//初始化路由
const router = new VueRouter({
    //mode: 'history',
    routes: routerMap
});

// router.beforeEach((to, from, next) => {
//     "use strict";
//     if (to.path !== '/'){
//         $('#app').find('.enter').css('display', 'none');
//     }else {
//         $('#app').find('.enter').css('display', 'block');
//     }
//     next();
// })

//初始化启动视图
//let Star = Vue.extend(App);

//启动路由
//router.start(Star, 'body');
const app = new Vue({
    router
}).$mount('#app');

