<template>
    <div class="regex">
        <div class="regex-title" :class="{'up': titleUp}">
            <h3>正则表达式</h3>
            <p>{{regex.introduce}}</p>
            <div class="maxim">
                <h4>箴言</h4>
                <ul>
                    <li v-for="item in regex.maxim">{{item}}</li>
                </ul>
            </div>
            <span>下面我们分俩个方向介绍它，一是知识概念，二是实例用法。(无默认选中，点击查看之。)</span>
            <i @click="toShowPoint">点我查看元字符</i>
            <strong @click="toTry">试一试</strong>
        </div>
        <div class="regex-content">
            <ul>
                <li class="{{pos}}" data-type="标志位"></li>
                <li @click="changeIntro('grammar')">知识概念</li>
                <li @click="changeIntro('case')">具体实例</li>
            </ul>
            <div class="regex-introduce">
                <component :is="view"
                           transition="fade"
                           transition-mode="out-in"></component>
            </div>
        </div>
        <div class="regex-point" :class="{'show': pointShow}">
            <h4>元字符一览</h4>
            <span class="close" @click="toShowPoint">关闭</span>
            <meta-character-component :character="regex.metaCharacter"></meta-character-component>
        </div>
        <div class="regex-try" :class="{'show': showTry}">
            <span @click="toTry">关闭</span>
            <regex-try-component></regex-try-component>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import "../../assets/scss/utils/mixins/font-16";
    @import "../../assets/scss/utils/mixins/font-14";
    @import "../../assets/scss/utils/mixins/font-12";
    @import "../../assets/scss/base/variables";
    @import "../../assets/scss/utils/functions/get-index";
    @import "../../assets/scss/utils/mixins/close";
    .regex{
        position: relative;
        height: 100%;
        padding: 10px;
        .regex-title{
            position: relative;
            overflow: hidden;
            transition: height .3s ease-in-out;
            &.up{
                height: 32px;
            }
            h3{
                @include font-16();
            }
            p{
                position: relative;
                padding: 20px 0;
                @include font-14();
                &::after{
                    content: '“';
                    position: absolute;
                    left: -20px;
                    top: 0;
                    font-size: 32px;
            }
                &::before{
                    content: '”';
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    font-size: 32px;
                }
            }
            .maxim{
                padding-bottom: 15px;
                h4{
                    padding: 5px 0;
                }
                ul{
                    li{
                        padding: 5px 0;
                        line-height: 1.5;
                        text-indent: 2em;
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
            span{
                display: inline-block;
                @include font-12();
            }
            i{
                position: absolute;
                left: 25px;
                top: 10px;
                @include font-12();
                cursor: pointer;
            }
            strong{
                position: absolute;
                right: 25px;
                top: 10px;
                @include font-12();
                cursor: pointer;
            }
        }
        .regex-content{
            margin-top: 10px;
            ul{
                display: flex;
                position: relative;
                li{
                    position: relative;
                    width: 100px;
                    height: 38px;
                    line-height: 30px;
                    text-align: center;
                    z-index: get-zIndex($z-index, up);
                    cursor: pointer;
                    &:first-child{
                        position: absolute;
                        left: -150px;
                        top: 0;
                        z-index: get-zIndex($z-index, down);
                        height: 40px;
                        border-bottom: 2px solid blue;
                        transition: left .3s ease-in-out;
                        &.grammar{
                            left: 0;
                        }
                        &.case{
                            left: 100px;
                        }
                    }
                }
            }
        }
        .regex-introduce{
            padding: 10px;
        }
        .regex-point{
            position: absolute;
            top: 100px;
            right: -2000px;
            width: 95%;
            height: 100%;
            padding-bottom: 30px;
            background: #58a;
            background: linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, .4) 0) no-repeat 100% 0 / 2em 2em,
                        linear-gradient(-135deg, transparent 1.5em, #58a 0);
            z-index: get-zIndex($z-index, up);
            transition: right 1s ease-in-out;
            &.show{
                right: 20px;
            }
            h4{
                @include font-16();
                color: #fff;
            }
            .close{
                position: absolute;
                top: 5px;
                left: 5px;
                @include close();
            }
        }
        .regex-try{
            position: absolute;
            left: 10%;
            top: 20px;
            z-index: get-zIndex($z-index, up);
            transform: translate3d(-150%, 0, 0);
            width: 80%;
            height: 200px;
            background: hsla(0,0%,100%,.9);
            overflow: hidden;
            transition: transform .3s ease-in-out;
            &.show{
                transform: translate3d(0, 0, 0);
            }
            &::before{
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                filter: blur(20px);
                margin: -30px;
                background: rgba(10, 20, 30, .2);
            }
            span{
                position: absolute;
                top: 10px;
                right: 10px;
                @include close();
            }
        }
    }
</style>
<script>

    //引入api方法
    import api from '../../api/api';

    //引入相关组件
    import metaCharacterComponent from '../../components/regex/metaCharacter/metaCharacter.vue';
    import regexTryComponent from '../../components/regex/regexTry/regexTry.vue';
    import regexGrammarComponent from '../../components/regex/regexGrammar/regexGrammar.vue';
    import regexCaseComponent from '../../components/regex/regexCase/regexCase.vue';

    export default{
        data(){
            return{
                titleUp: false,
                pointShow: false,
                showTry: false,
                view: '',
                regex: {},
                pos: ''
            }
        },
        components:{
            metaCharacterComponent,
            regexTryComponent,
            'grammar': regexGrammarComponent,
            'case': regexCaseComponent
        },
        methods:{
            changeIntro(way){
                this.titleUp = true;
                this.pos = way;
                this.view = way;
            },
            toShowPoint(){
                this.pointShow = !this.pointShow;
            },
            toTry(){
                this.showTry = !this.showTry;
            }
        },
        init(){
            let _this = this;
            api
                    .call(this, {
                        _mt: 'vue.regexIntroduce'
                    })
                    .then(function (data) {
                        console.log(data);
                        _this.regex = data.result[0];
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
        }
    }
</script>
