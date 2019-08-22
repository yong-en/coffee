<template>
    <div>
        <button v-on:click="$emit('welcome',1,2)">
            click me to be welcome!!
        </button>


    </div>
</template>

<script>
    export default {
        name: "child",
        props: {
            isChild: {
                type: Number,
                default: 0
            }

        },

    }
</script>

<style scoped>

</style>