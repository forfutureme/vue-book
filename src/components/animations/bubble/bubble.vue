<template>
    <div class="bubble">
        <ul>
            <li v-for="item in list"
                v-bubble-run:index="item"
                :data-id="item.id"
                :data-type="item.type">
                <router-link to="regex">
                    <span class="cn">{{item.cn}}</span>
                    <span class="en">{{item.en}}</span>
                </router-link>

            </li>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
    @keyframes typing{
        from{
            width: 0;
        }
    }
    .bubble{
        width: 100%;
        height: 100%;
        ul{
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid #000;
            li{
                position: absolute;
                display: block;
                width: 100px;
                height: 62px;
                border-radius: 50%;
                background-image: radial-gradient(circle at center, rgb(220, 75, 200),rgb(0, 0, 75));
                a{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    span{
                        width: 10ch;
                        overflow: hidden;
                        white-space: nowrap;
                        text-align: center;
                        animation: typing 3s steps(10) infinite;
                        &.cn{
                            margin-top: 20px;
                            font-size: 12px;
                        }
                        &.en{
                            font-size: 10px;
                        }
                    }
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
                times: []
            }
        },
        props: ['list'],
        components:{

        },
        directives:{
            'bubble-run': {
                bind(el, binding, vnode){
                    let
                            timer,
                            vm = vnode.context,
                            style = el.style,
                            stepL = Math.random() > 0.5 ? -1 : 1,
                            stepT = Math.random() > 0.5 ? -1 : 1,
                            left = Math.floor(500 * Math.random()),
                            top = Math.floor(320 * Math.random());
                    style.left = left +'px';
                    style.top = top +'px';
                    //设置计时器改变气泡位置
                    timer = setInterval(function () {
                        bubbleRun();
                    }, 30);
                    //将计数器存入数组
                    if (!vm.times.indexOf(timer) > -1){
                        vm.times.push(timer);
                    }

                    el.addEventListener('mouseover', function () {
                        clearInterval(timer);
                        vm.times.splice(vm.times.indexOf(timer), 1);
                    }, !1);

                    el.addEventListener('mouseout', function () {
                        timer = setInterval(function () {
                            bubbleRun();
                        }, 30);
                        if (!vm.times.indexOf(timer) > -1){
                            vm.times.push(timer);
                        }
                    }, !1);

                    /**
                     * 改变气泡位置
                     */
                    function bubbleRun() {
                        let
                                posL = parseInt(style.left),
                                posT = parseInt(style.top);
                        //判断气泡是否撞墙
                        if (posL === 0 || posL === 600 - 100){
                            stepL = -stepL;
                        }
                        if (posT === 0 || posT === 370 - 62){
                            stepT = -stepT;
                        }
                        style.left = posL + stepL +'px';
                        style.top = posT + stepT +'px';
                    }

                }
            }
        },
        /**
         * 卸载该组件时，清空计时器
         */
        destroyed(){
            for (let i in this.times){
                clearInterval(this.times[i]);
            }
            this.times.length = 0;
        }
    }
</script>
