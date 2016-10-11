<template>
    <div class="regex-grammar">
        <h3>这里介绍正则表达式的一些基础知识</h3>
        <div class="grammar-main">
            <div class="grammar-menu">
                <ul v-for="menu in menus" data-number="{{$index+1}})">
                    <li v-for="item in menu"
                        :class="{'h1': item.type==='h1',
                                 'h2': item.type==='h2',
                                 'h3': item.type==='h3',
                                 'hide': item.type!=='h1'}"
                        data-id="{{item.id}}"
                        @click="titleClick(item)">
                        {{item.title}}
                    </li>
                </ul>
            </div>
            <div class="grammar-content">
                <div class="content-box">
                    <div class="summary" v-back-slash="info.summary"></div>
                    <div class="example">
                        <p class="text" v-if="info.example.text">
                            <label>字符串：</label>
                            <span>{{info.example.text}}</span>
                        </p>
                        <p class="reg" v-if="info.example.reg">
                            <label>正则：</label>
                            <span v-back-slash="info.example.reg"></span>
                        </p>
                        <p class="configs" v-if="info.example.configs">
                            <label>模式：</label>
                            <span>{{info.example.configs}}</span>
                        </p>
                        <p class="result" v-if="info.example.result">
                            <label>结果：</label>
                            <span v-replace-style="info.example.result"></span>
                        </p>
                        <p class="analyse" v-if="info.example.analyse">
                            <label>分析：</label>
                            <span v-back-slash="info.example.analyse"></span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>

    @import "../../../assets/scss/utils/mixins/font-16";
    @import "../../../assets/scss/utils/mixins/font-14";
    @import "../../../assets/scss/utils/mixins/font-12";

    .regex-grammar{
        width: 100%;
        height: 100%;
        padding: 10px;
        h3{
            @include font-16();
        }
        .grammar-main{
            display: flex;
            width: 100%;
            height: 100%;
            padding: 5px;
            .grammar-menu{
                flex: 2;
                height: 100%;
                padding-left: 30px;
                overflow-y: auto;
                ul{
                    position: relative;
                    &::before{
                        position: absolute;
                        left: -15px;
                        top: 6px;
                        content: attr(data-number);
                    }
                    li{
                        overflow: hidden;
                        cursor: pointer;
                        transition: height .3s ease-in-out;
                        &.active{
                            background: #ddd;
                        }
                        &.h1{
                            height: 30px;
                            line-height: 30px;
                            font-size: 14px;
                            color: #333;
                        }
                        &.h2{
                            position: relative;
                            height: 24px;
                            line-height: 24px;
                            font-size: 12px;
                            color: #666;
                            text-indent: 2em;
                            &::before{
                                position: absolute;
                                left: 1em;
                                top: 9px;
                                content: '';
                                width: 5px;
                                height: 5px;
                                border-radius: 50%;
                                background: #666;
                            }
                            &.hide{
                                height: 0;
                            }
                        }
                        &.h3{
                            position: relative;
                            height: 20px;
                            line-height: 20px;
                            font-size: 10px;
                            color: #999;
                            text-indent: 3em;
                            &::before{
                                position: absolute;
                                left: 2em;
                                top: 6px;
                                content: '';
                                width: 4px;
                                height: 4px;
                                border: 1px solid #999;
                                border-radius: 50%;
                                background: #fff;
                            }
                            &.hide{
                                height: 0;
                            }
                        }
                    }
                }
            }
            .grammar-content{
                flex: 3;
                height: 100%;
                margin-left: 5px;
                overflow-y: auto;
                .content-box{
                    width: 100%;
                    height: 100%;
                    padding: 5px;
                    line-height: 1.5;
                    border: 1px solid #999;
                    border-radius: 5px;
                    transform: translate3d(150%, 0, 0);
                    transition: transform .3s ease-in-out;
                    &.show{
                        transform: translate3d(0, 0, 0);
                    }
                    .summary{
                        font-size: 12px;
                        color: #333;
                    }
                    .example{
                        p{
                            display: flex;
                            margin-top: 10px;
                            label{
                                display: inline-table;
                                width: 50px;
                                text-align: right;
                                font-size: 12px;
                                color: #666;
                            }
                            span{
                                display: inline-table;
                                color: #999;
                                font-size: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<script>

    //引入api
    import api from '../../../api/api';
    //引入jquery
    import $ from '../../../../bower_components/jquery/dist/jquery.min';

    export default{
        data(){
            return{
                menus: [],
                grammarContext: [],
                info: {}
            }
        },
        components:{

        },
        directives: {
            'back-slash': {
                update(value){
                    this.el.innerHTML =  value && value.replace(/_{3}/g, '\\');
                }
            },
            'replace-style':{
                update(value){
                    this.el.innerHTML = value.replace(/_(.*?)_/g, '<i style="background: #ef0;">$1</i>')
                }
            }
        },
        methods: {
           titleClick(item){
               let
                       $el = $(this.$el),
                       $li = $el.find('li'),
                       $h1 = $el.find('li.h1'),
                       $h2 = $el.find('li.h2'),
                       $h3 = $el.find('li.h3'),
                       funMap = {
                           h1(){
                               $h2.addClass('hide');
                               $h3.addClass('hide');
                               $el.find('li[data-id="'+ item.id +'"]').addClass('active');
                               $el.find('ul[data-number^="'+ item.id +'"]').find('li.h2[data-id^="'+ item.id +'"]').removeClass('hide');
                               showInfo.call(this, item.id);
                           },
                           h2(){
                               $h3.addClass('hide');
                               $el.find('li[data-id="'+ item.id +'"]').addClass('active');
                               $el.find('ul[data-number^="'+ item.id.substr(0,1) +'"]').find('li.h3[data-id^="'+ item.id +'"]').removeClass('hide');
                               showInfo.call(this, item.id);
                           },
                           h3(){
                               $el.find('li[data-id="'+ item.id +'"]').addClass('active');
                               showInfo.call(this, item.id);
                           }
                       };
               $li.removeClass('active');
               funMap[item.type] && funMap[item.type].call(this);

               /**
                * 更新章节具体内容
                * @param id
                */
               function showInfo(id) {
                   this.info = this.grammarContext[id];
                   let $box = $el.find('.content-box');
                   if ($box.hasClass('show')){
                       $box.removeClass('show');
                       setTimeout(function () {
                           $box.addClass('show');
                       }, 500)
                   }else{
                       $box.addClass('show');
                   }

               }
           }
        },
        init(){
            let _this = this;
            api
                    .call(this, {
                        _mt: 'vue.regexGrammar'
                    })
                    .then(function (data) {
                        _this.menus = data.result[0].menu;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            api
                    .call(this, {
                        _mt: 'vue.regexContent'
                    })
                    .then(function (data) {
                        _this.grammarContext = data.result[0].content;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
        }
    }
</script>
