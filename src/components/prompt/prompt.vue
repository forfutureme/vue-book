<template>
    <div class="prompt">
        <component :is="prompt.type"
                   :text.sync="prompt.text"></component>
    </div>
</template>
<style>

</style>
<script>
    import dialogComponent from './dialog/dialog.vue'
    import loadingComponent from './loading/loading.vue'
    export default{
        data(){
            return{

            }
        },
        props: ['prompt'],
        components:{
            'dialog': dialogComponent,
            'loading': loadingComponent,
        },
        ready(){
//            this.promptView = this.prompt.type || 'loading';
//            this.text = this.prompt.text || '玩命加载中...';
        }
    }
</script>
