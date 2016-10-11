<template>
    <div class="regex-test">
        <div class="input">
            <textarea placeholder="输入待匹配的字符串" v-model="text"></textarea>
            <div class="rule">
                <ul>
                    <li><input type="text" placeholder="输入正则表达式" v-model="rule"></li>
                    <li>
                        <input id="global" type="checkbox" v-model="configs" value="g">
                        <label for="global">全局匹配（选中全局）</label>
                        <input id="caps" type="checkbox" v-model="configs" value="i">
                        <label>区分大小写（选中不区分）</label>
                    </li>
                    <li>
                        <button @click="test">匹配</button>
                        <button @click="clear">清空</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="result" v-html="result"></div>
    </div>
</template>
<style lang="sass" scoped>

    @import "../../../assets/scss/utils/mixins/button";

    .regex-test{
        display: flex;
        height: 100%;
        font-size: 10px;
        .input{
            flex: 3;
            textarea{
                display: inline-block;
                width: 100%;
                height: 120px;
                background: #eee;
                color: #000;
            }
            .rule{
                width: 100%;
                ul{
                    display: block;
                    width: 100%;
                    li{
                        display: block;
                        width: 100%;
                        padding: 2px 0;
                        input{
                            &[type="text"]{
                                width: 100%;
                            }
                        }
                        label{
                        }
                        button{
                            display: inline-block;
                            margin: 0 10px;
                            @include button();
                            background-color: #c00;
                            &:first-child{
                                background-color: #6b0;
                            }
                        }
                    }
                }
            }
        }
        .result{
            flex: 2;
            padding: 5px;
            margin-left: 2px;
            border: 1px solid #999;
            background: #180;
        }
    }
</style>
<script>

    export default{
        data(){
            return{
                text: '',
                result: '',
                rule: '',
                configs: []
            }
        },
        methods: {
            test(){
                let
                        regexRule = this.rule,
                        regexConfigs = this.configs.toString(),
                        regexp = new RegExp(regexRule, regexConfigs);
                this.result = this.text.replace(regexp, function (str) {
                    return '<i style="background: #f00; color: #fff;">'+ str + '</i>';
                });
            },
            clear(){
                this.text = '';
                this.result = '';
                this.rule = '';
                this.configs = [];
            }
        },
        components:{

        }
    }
</script>
