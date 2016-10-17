<template>
    <div class="warning">
        <div class="warning-text">
            <text-turn-component :text.sync="text"></text-turn-component>
        </div>
        <div class="warning-style">
            <span class="warning"></span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import "../../../assets/scss/base/variables";
    @import "../../../assets/scss/utils/functions/_get-index";
    @import "../../../assets/scss/utils/mixins/center";

    .warning{
        position: fixed;
        z-index: get-zIndex($z-index, dialog);
        @include center();
        .warning-style{
            display: flex;
            margin: 35px auto;
            .warning{
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

            }
        },
        props: ['text'],
        components:{
            textTurnComponent
        }
    }
</script>
