<template>
    <div class="turn">
        <ul>
            <li v-for="letter in letters" track-by="$index">
                {{letter}}
            </li>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
    @keyframes turn{
        0%{
            transform: rotate(0deg);
        }

        100%{
            transform: rotate(-360deg);
        }
    }
    @keyframes up{
        0%{
           transform: translate3d(0, 0, 0);
        }
        100%{
            transform: translate3d(0, -10px, 0);
        }
    }

    .turn{
        ul{
            display: flex;
            li{
                flex: 1;
                width: 16px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                font-size: 12px;
                color: #0077a2;
                &.turn{
                    animation: turn 1s 0s ease-in-out;
                }
                &.up{
                    animation: up .5s 0s ease-in-out;
                }
            }
        }
    }

</style>
<script>

    import $ from '../../../../bower_components/jquery/dist/jquery.min';

    export default{
        data(){
            return{
                letters: []
            }
        },
        props: ['text'],
        components:{

        },
        /**
         * 组件dom被首次插入到页面中调用
         */
        mounted(){
            let
                    $li = $(this.$el).find('li'),
                    n = $li.length,
                    eq = 0,
                    way = Math.random() > .5 ? 'turn' : 'up';
            this.rollMove = setInterval(function () {
                $li.removeClass(way);
                $li.eq(eq).addClass(way);
                eq++;
                if (eq === n){
                    eq = 0;
                }
            }, 1100);
        },
        /**
         * 组件被卸载时调用
         */
        destroyed(){
            clearInterval(this.rollMove);
        },
        /**
         * 渲染页面之前格式化数据
         */
        created(){
            this.letters = this.text.split('');
        }
    }
</script>
