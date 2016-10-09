<template>
    <div class="index">
        <h3>{{msg}}</h3>
        <div class="index-list">
            <h4>工具类：</h4>
            <div class="index-tool">
                <bubble-component :list="techTool"></bubble-component>
            </div>

        </div>
    </div>
</template>
<style lang="sass" scoped>
    .index{
        padding: 20px;
        h3{
            line-height: 2;
            text-align: center;
            font-size: 16px;
            color: #333;
        }
        .index-list{
            h4{
                line-height: 1.5;
                font-size: 14px;
                color: #555;
            }
            .index-tool{
                width: 600px;
                height: 370px;
                margin: 15px auto;
                background: #eee;
            }
        }
    }

</style>
<script>

    import bubbleComponent from '../../components/animations/bubble/bubble.vue';

    export default{
        data(){
            return{
                msg:'当前系统支持如下小书',
                techTool: []
            }
        },
        props: ['index'],
        components:{
            bubbleComponent
        },
        //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
        //但是还没有开始 DOM 编译，$el 还不存在。
        created(){
            this.techTool = this.index['tech-tool'];
        },
        //在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。
        //注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。
        ready(){

        }
    }
</script>
