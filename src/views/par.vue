<template>
    <div>
        <child v-on:welcome="sayHi"></child>
        <div id="demo">
            <button v-on:click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
    </div>

</template>

<script>
    import child from './child.vue'
    export default {
        name: "par",
        components: {
            child
        },
        data(){
          return{
              show: true
          }
        },
        methods: {
            sayHi: function (a,b) {
                alert('Hi!')
                alert(a)
                alert(b)

            }
        }
    }
</script>

<style scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>