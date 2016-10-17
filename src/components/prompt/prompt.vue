<template>
    <div class="prompt">
        <component :is="prompt.type"
                   :text.sync="prompt.text"></component>
    </div>
</template>
<style>

</style>
<script>
    import warningComponent from './warning/warning.vue'
    import loadingComponent from './loading/loading.vue'
    export default{
        data(){
            return{

            }
        },
        props: ['prompt'],
        components:{
            'warning': warningComponent,
            'loading': loadingComponent,
        }

    }
</script>
