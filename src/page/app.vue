<template>
    <section>
        <prompt-component v-if="promptShow"
                          :prompt.sync="prompt"></prompt-component>
        <div class="app" v-else="promptShow">
            <router-view class="router"
                         :index="index"
                         transition="fade"
                         transition-mode="out-in"></router-view>
        </div>
    </section>

</template>
<style lang="sass" scoped>
    section{
        height: 100%;
        .app{
            height: 100%;
        }
    }
        .fade-transition {
            transition: opacity .3s ease;
        }
        .fade-enter, .fade-leave {
            opacity: 0;
        }
</style>
<script>
    //引入请求接口方法
    import api from '../api/api';

    //引入弹层组件
    import promptComponent from '../components/prompt/prompt.vue';
    //引入首页内容组件
    import indexComponent from  './index/index.vue';

    export default{
        //不替换根源
        replace: false,
        data(){
            return{
                view: indexComponent,
                promptShow: true,
                prompt: {
                    type: 'loading',
                    text: '玩命加载中...'
                },
                index: []
            }
        },
        components:{
            promptComponent,
            indexComponent
        },
        ready(){
            let _this = this;
            api
                    .call(this, {
                        '_mt': 'vue.checkList'
                    })
                    .then(function (data) {
                        if (data.result.length){
                            _this.promptShow = false;
                            _this.index = data.result[0];
                            _this.$router.go({
                                name: 'index'
                            })
                        } else {
                            _this.promptShow = true;
                            _this.prompt.type = 'dialog';
                            _this.prompt.text = '暂无数据';
                        }
                    })
                    .catch(function (err) {
                        _this.promptShow = true;
                        _this.prompt.type = 'dialog';
                        _this.prompt.text = err.msg;
                        console.log(err);
                    });
        }
    }
</script>
