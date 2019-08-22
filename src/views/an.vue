<template>
   <div class="">

   </div>

</template>

<script>

    export default {
        name: "an",
        data(){
            return{

            }
        },
        methods:{
            go(){
                this.$refs.demo.value = '不错哦'
                console.log(this.$refs.demo.innerHTML)
                console.log(document.getElementById('demo'))
            }




        },
        mounted(){//这里必须是mouted钩子
            var myElement = document.querySelector("intro");
            document.getElementById("demo").innerHTML =
                "来自 intro 段落的文本是：" + myElement.innerHTML;
        },
    }
</script>

<style scoped>

</style>