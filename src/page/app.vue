<template>
    <section>
        <div class="app">
            <h3>{{msg}}</h3>
        </div>
    </section>

</template>
<style lang="sass">
    .app{
        background: #000;
        h3{
            font-size: 12px;
        }
    }
</style>
<script>
    export default{
        replace: false,
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        },
        ready(){
            console.log(123);
            this.$http.post('http://127.0.0.1:3009/m.api', {
                '_mt': 'vue.checkList'
            })
                    .then(function (data) {
                        console.log(data);
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
        }
    }
</script>
