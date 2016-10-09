<template>
    <div class="loading">
        <div class="loading-text">
            <text-turn-component :text.sync="text"></text-turn-component>
        </div>
        <div class="loading-style">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    @import "../../../assets/scss/base/variables";
    @import "../../../assets/scss/utils/functions/_get-index";
    @import "../../../assets/scss/utils/mixins/center";
    @keyframes rotate_half_up{
        0% {
            transform: rotate(270deg);
        }
        50% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(270deg);
        }
    }
    @keyframes rotate_half_down{
        0%{
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(90deg);
        }
    }
    @keyframes pacman-balls{
        75%{
            opacity: .7;
        }
        100%{
            transform: translate(-100px, -6.25px);
        }
    }

    .loading{
        position: fixed;
        z-index: get-zIndex($z-index, loading);
        @include center();
        .loading-text{

        }
        .loading-style{
            position: relative;
            margin-top: 5px;
            span{
                position: absolute;
                display: inline-block;
                width: 10px;
                height: 10px;
                background: #fff;
                border-color: #fff;
                border-radius: 50%;
                &:first-child,
                &:nth-child(2){
                    left: 0;
                    top: 0;
                    width: 0;
                    height: 0;
                    border: 25px solid #fff;
                    border-right-color: transparent;
                    background: transparent;
                    animation: rotate_half_up 0.5s 0s infinite;
                }
                &:nth-child(2){
                    animation: rotate_half_down 0.5s 0s infinite;
                }
                &:nth-child(3),
                &:nth-child(4),
                &:nth-child(5){
                    margin: 2px;
                    left: 100px;
                    top: 23px;
                }
                &:nth-child(3){
                    transform: translate(0, -6.25px);
                    animation: pacman-balls 1s 0s infinite linear;
                }
                &:nth-child(4){
                    transform: translate(0, -6.25px);
                    animation: pacman-balls 1s 0.33s infinite linear;
                }
                &:nth-child(5){
                    transform: translate(0, -6.25px);
                    animation: pacman-balls 1s 0.66s infinite linear;
                }
            }
        }
    }
</style>
<script>

    //引入jquery
    import $ from '../../../../bower_components/jquery/dist/jquery.min';

    //引入组件
    import textTurnComponent from '../../animations/text/turn.vue';

    export default{
        data(){
            return{

            }
        },
        props: ['text'],
        components:{
            textTurnComponent
        },
        directives: {
            'my-dir': {
                bind(){
                    console.log(this);
                }
            }
        },

    }
</script>
