<template>
    <div>
        <img src="../pic/coffee.jpg" id="img"><br>
        <span>打印码：</span><span class="codeNum">{{codeNum}}</span>
        <P>这是我设计都咖啡拉花，好看吗</P>
        <van-row type="flex" justify="center" class="footer">
            <van-col span="20">
                <van-button type="primary" size="large" @click="go()">我继续要DIY</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "code",
        data() {
            return {
                codeNum: this.$router.history.current.query.num
            }

        },
        methods: {
            go() {
              this.$router.push({path:'/edit'})
            }
        },
        mounted: function () {

        }
    }
</script>

<style scoped>
    .codeNum {
        font-size: 2rem;
        color: brown;
    }
</style>