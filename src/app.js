/**
 * Created by huweijian on 16/9/21.
 * 入口js
 */

//引入vue，vue-resource，vue-router依赖

import Vue from '../bower_components/vue/dist/vue.min';
import VueResource from '../bower_components/vue-resource/dist/vue-resource.min';
import VueRouter from '../bower_components/vue-router/dist/vue-router.min';

import $ from '../bower_components/jquery/dist/jquery.min';

import './assets/scss/common.scss';

//引入vue路由配置
import routerMap from './router/routerMap';

//引入app.vue
import App from './page/app.vue';

//使用VueResource
Vue.use(VueResource);

//使用VueRouter
Vue.use(VueRouter);

//初始化路由
var router = new VueRouter({
    hashbang:true,
    history:false,
    saveScrollPosition:true,
    transitionOnLoad:true
});

//使用路由
routerMap(router);

//初始化启动视图
let Star = Vue.extend(App);

//启动路由
router.start(Star, 'body');

