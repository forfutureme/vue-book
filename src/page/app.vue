<template>
    <section>
        <prompt-component v-if="promptShow"
                          :prompt.sync="prompt"></prompt-component>
        <div class="app" v-else="promptShow">
            <index-component :index="index"></index-component>

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
</style>
<script>
    //引入请求接口方法
    import api from '../api/api';

    //引入弹层组件
    import promptComponent from '../components/prompt/prompt.vue';
    //引入index
    import indexComponent from './index/index.vue';

    export default{
        //不替换根源
        replace: false,
        data(){
            return{
                promptShow: true,
                enter: false,
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
        beforeCreate(){
            let _this = this;
            api
                    .call(this, {
                        '_mt': 'vue.checkList'
                    })
                    .then(function (data) {
                        if (data.result.length){
                            _this.promptShow = false;
                            _this.index = data.result[0];
                            _this.enter = true;
                            //_this.$router.push('index');
                        } else {
                            _this.promptShow = true;
                            _this.prompt.type = 'warning';
                            _this.prompt.text = '暂无数据';
                        }
                    })
                    .catch(function (err) {
                        _this.promptShow = true;
                        _this.prompt.type = 'warning';
                        _this.prompt.text = err.msg;
                        console.log(err);
                    });
        },
        mounted(){
            this.$on('hideEnter', function (msg) {
                console.log(msg);
                this.enter = false;
            });
            this.$emit('hideEnter', 'app');
        }
    }
</script>
