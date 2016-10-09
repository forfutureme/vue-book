<template>
    <div class="dialog">
        <div class="dialog-text">
            <text-turn-component :text.sync="text"></text-turn-component>
        </div>
        <div class="dialog-style">
            <span class="warn"></span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import "../../../assets/scss/base/variables";
    @import "../../../assets/scss/utils/functions/_get-index";
    @import "../../../assets/scss/utils/mixins/center";

    .dialog{
        position: fixed;
        z-index: get-zIndex($z-index, dialog);
        @include center();
        .dialog-style{
            display: flex;
            margin: 35px auto;
            .warn{
                display: inline-block;
                width: 50px;
                height: 50px;
                margin: 0 auto;
                line-height: 50px;
                text-align: center;
                font-size: 30px;
                border-radius: 50%;
                border: 1px solid red;
                &::after{
                    content: '!';
                    color: red;
                }
            }
        }
    }
</style>
<script>

    import textTurnComponent from '../../animations/text/turn.vue';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        props: ['text'],
        components:{
            textTurnComponent
        }
    }
</script>
