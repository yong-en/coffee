<template >
    <div class="content" >
        <van-row type="flex" justify="center">
            <van-col >
                <van-tabs v-model="active" @click="onClick" animated>
                    <van-tab :title=item v-for="(item,key) in navList" :key="key">

                            <van-row  gutter="20"  >
                                <van-col span="8"  v-for="aa in totalPic" :key="aa">

                                        <van-image :src="picUrl(key,aa)" height="15em" fit="cover" lazy-load @click="getUrl(key,aa)"></van-image>

                                </van-col>
                            </van-row>


                    </van-tab>


                </van-tabs>
            </van-col>
        </van-row>

        <van-row  class="footer" style="max-width:1334px; min-width:320px; margin:0 auto; position:relative;height:100%;">
            <van-col span="24">
                <van-button type="info" size="large" width="80%" @click="go()">我要DIY</van-button>
            </van-col>
        </van-row>

    </div>

</template>

<script>


    export default {

        name: 'index',
        components: {},
        props: {
            isChild: {
                type: Number,
                default: 0
            },
        },
        data() {

            return {

                active:0,
                navList: ["全部", "奶茶", "咖啡", "彩色", "咖啡色"],
                totalPic:8,
                xx: require('../pic/coffee.jpg'),
                url: [],
                name: '小明',
                a: "",


            }
        },
        methods: {
            go() {
                this.$router.push({path: '/edit'})

            },

            onClick(index, title) {
                this.$toast(title)



            },
            getUrl(a,b){
                if(this.isChild === 0) {
                    this.$router.push({
                        path: '/edit',
                        query: {
                            a: a,
                            b: b
                        }
                    })
                } else {
                    this.$emit('url',a,b)
                }
            },



            // picUrl(index,row,col,) {
            //     // return require('../pic/img/icon' + a + '.jpg')this.$toast(index)
            //      if (index == 0){
            //          let picId =(row -1)*3 +col
            //
            //
            //              return require('../pic/img/icon4-'+ picId + '.jpg')
            //
            //
            //      }
            //      else {
            //          let picId =(row -1)*3 +col
            //
            //          return require('../pic/img/icon'+ 1+'-'+ 1 + '.jpg')
            //      }

            picUrl(index,aa) {


                    return require('../pic/img/icon'+ index+'-'+ aa + '.jpg')

            },

        },
    }
</script>
<style>
    .van-tabs__line {

        background-color: blue ;

    }
</style>
<style scoped>
    * {
        margin: 0;
        padding: 0;

    }

    .content {
        position: relative;
        text-align: center;
        height: 1000px;

    }

    .footer {
        position: fixed;
        bottom: 0px;

        width: 100%;

        z-index: 7;

    }



</style>