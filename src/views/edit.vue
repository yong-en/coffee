<template>
    <div class="coffeePic">
        <van-row type="flex" justify="center" class="top">


            <div class="picBorder"></div>
            <canvas id="canvas" width="400" height="400" style="object-fit: cover"></canvas>

            <img :src="srcUrl" id="img">

        </van-row>


        <van-row type="flex" justify="center" class="bar">
            <van-col span="16">
                <van-row>
                    <van-col span="8" class="icon">
                        <van-icon name="photo" size="4em" @click="up"/>
                        <van-popup
                                v-model="show"
                                round
                                position="bottom"
                                :style="{ height: '40%' }"
                        >
                            <div>
                                <my-component :is-child="1" @url="sayHI"></my-component>
                            </div>
                        </van-popup>
                    </van-col>
                    <van-col span="8">
                        <van-icon name="comment" size="4em" @click="up2"/>
                        <van-popup id="show2"
                                   v-model="show2"
                                   round
                                   position="bottom"
                                   :style="{height: '20%' }">
                            <textarea placeholder="请输入文字内容" rows="3" cols="50" class="text" v-model="msg" ref="text">
                            </textarea><br>
                            <ul>
                                <li style="background-color: #000000  " @click="change('#000000')"></li>
                                <li style="background-color: #933500  " @click="change('#933500')"></li>
                                <li style="background-color: #ff0000  " @click="change('#ff0000')"></li>
                                <li style="background-color: #666666  " @click="change('#666666')"></li>
                                <li style="background-color: #ff00ff  " @click="change('#ff00ff')"></li>
                                <li style="background-color: #66ff66  " @click="change('#66ff66')"></li>
                                <li style="background-color: #0000ff  " @click="change('#0000ff')"></li>
                                <li style="background-color: #ffff00  " @click="change('#ffff00')"></li>
                                <li style="background-color: #ff9933  " @click="change('#ff9933')"></li>
                            </ul>
                            <van-row type="flex" justify="center" gutter="20">
                                <van-col span="4">
                                    <van-button type="primary" size="large" @click="enter">确定</van-button>
                                </van-col>
                                <van-col span="4">
                                    <van-button type="primary" size="large" @click="remove">取消</van-button>
                                </van-col>
                            </van-row>


                        </van-popup>
                    </van-col>
                    <van-col span="8">
                        <van-uploader :after-read="afterRead"/>
                    </van-col>
                </van-row>

            </van-col>
        </van-row>


        <van-button type="primary" @click="send()">OK 发送</van-button>
        <br>
        <!--<br>-->
        <!--<van-button type="primary" @click="text()">text</van-button>-->
        <!--{{list}}-{{id}}-->
        <!--{{this.$route.params.a}}-->
        <van-button type="primary" @click="rotate()">旋转</van-button>
        <van-button type="primary" @click="zoomSmall()">缩小</van-button>
        <van-button type="primary" @click="zoomBig()">扩大</van-button>
        <van-button type="primary" @click="deletePic()">删除</van-button>


    </div>
</template>

<script>
    import {fabric} from 'fabric'
    import index from './index'

    export default {
        name: "edit",
        components: {
            'my-component': index
        },
        data() {
            let a = require('../pic/coffee.jpg')

            return {
                canvas: null,

                xx: a,
                show: false,
                show2: false,
                msg: '',
                textColor: '',

                list: this.$route.query.a,
                id: this.$route.query.b,
                imgInstance: "",
                index: 1,
            }
        },
        watch: {},
        computed: {

            num(){
                return this.list + "-" + this.id
            },
            srcUrl() {
                try {
                    return require("../pic/img/icon" + this.list + -+this.id + ".jpg")

                } catch (e) {
                    return null
                }
            }
        }
        ,
        methods: {
            sayHI(a,b){
                this.show = false
                // 新建
                let url = require("../pic/img/icon" + a + "-" + b + ".jpg")
                let canvas = this.canvas
                fabric.Image.fromURL(url, function (img) {
                    img.set({
                        "centeredScaling": true,
                        "originX": "center",
                        "originY": "center"
                    });

                    let wScale = 400 / img.width;
                    let hScale = 400 / img.height;
                    let scale;
                    if (wScale < hScale) {
                        scale = wScale;
                    } else {
                        scale = hScale;
                    }
                    img.scale(scale)

                    canvas.add(img);
                    canvas.centerObject(img);
                    canvas.setActiveObject(img);
                    canvas.requestRenderAll();
                });

            },


            deletePic() {

                let o = this.canvas.getActiveObject();
                if (o != null) {
                    this.canvas.remove(o);
                    var os = this.canvas.getObjects();
                    if (os.length > 0) {
                        this.canvas.setActiveObject(os[os.length - 1]);
                    }
                    this.canvas.requestRenderAll();
                }
                return false;
                // this.canvas.clear();
            },
            zoomBig() {
                let o = this.canvas.getActiveObject();
                let scaleX = o.get("scaleX") / 0.8;
                let scaleY = o.get("scaleY") / 0.8;
                o.set({
                    "scaleX": scaleX,
                    "scaleY": scaleY
                });
                this.canvas.requestRenderAll();



                // this.index = this.index + 0.1
                // this.imgInstance.scale(this.index)
                // this.canvas.renderAll()
            },
            zoomSmall() {
                var o = this.canvas.getActiveObject();
                var scaleX = o.get("scaleX") * 0.8;
                var scaleY = o.get("scaleY") * 0.8;
                o.set({
                    "scaleX": scaleX,
                    "scaleY": scaleY
                });
                this.canvas.requestRenderAll();
                // this.index = this.index - 0.1
                // this.imgInstance.scale(this.index)
                // this.canvas.renderAll()

            },
            rotate() {
                this.imgInstance.angle = this.imgInstance.angle + 10
                this.canvas.renderAll()

            },
            text() {
                this.list = this.$route.params.a
                this.id = this.$route.params.b
            },

            change(color) {
                this.textColor = color
                this.$refs.text.style.color = color
            },

            send() {

                this.$router.push({path: '/code', query: {num: this.num}})


            },

            enter() {

                this.show2 = false


                var textbox = new fabric.Textbox(this.msg, {
                    left: 100,
                    top: 150,
                    fill: this.textColor,


                });
                this.canvas.add(textbox).setActiveObject(textbox);
            },
            remove() {
                this.show2 = false
            },
            up() {
                this.show = true
            },
            up2() {
                this.show2 = true
            },

            showPopup() {
                this.show = true;

            },

            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
            getContainer() {
                return document.querySelector('.my-container');
            }
        },
        mounted: function () {


            var canvas = new fabric.Canvas('canvas');//声明画布
            this.canvas = canvas

            canvas.clipTo = function (ctx) {
                ctx.arc(400 / 2, 400 / 2, 400 / 2, 0, Math.PI * 2, true);
            };

            // let url = require("../pic/img/icon4-11.jpg")
            // console.log(url)
            // fabric.Image.fromURL(url, function (img) {
            //     img.set({
            //         "centeredScaling": true,
            //         "originX": "center",
            //         "originY": "center"
            //     });
            //
            //     let wScale = 400 / img.width;
            //     let hScale = 400 / img.height;
            //     let scale;
            //     if (wScale < hScale) {
            //         scale = wScale;
            //     } else {
            //         scale = hScale;
            //     }
            //     img.scale(scale)
            //
            //     canvas.add(img);
            //     canvas.centerObject(img);
            //     canvas.setActiveObject(img);
            //     canvas.requestRenderAll();
            // });

            var imgElement = document.getElementById('img');//声明我们的图片
            var imgInstance = new fabric.Image(imgElement, {  //设置图片位置和样子
                left: 100,
                top: 100,
                width: 250,
                height: 250,
                angle: 0, //设置图形顺时针旋转角度
                centeredScaling: true,

            });

            this.imgInstance = imgInstance
            // canvas.setOverlayImage('', canvas.renderAll.bind(canvas));
            canvas.add(imgInstance);//加入到canvas中
            this.canvas.requestRenderAll();




            // var circle = new fabric.Circle({
            //     radius: 20, fill: 'green', left: 100, top: 100
            // });
            // var triangle = new fabric.Triangle({
            //     width: 20, height: 30, fill: 'blue', left: 50, top: 50
            // });


            // canvas.add(circle, triangle);

        },


    }
</script>

<style scoped>
    .coffeePic {
        text-align: center;
    }

    .icon {
        size: 30em;

    }

    .bar {
        margin-top: 120px;
    }

    .aaa {
        text-align: center;
    }

    #canvas {
        margin: 25px 0px 5px 10px;
        border: 1px solid red;
    }

    .top {
        position: relative;
    }

    .picBorder {
        background: url("../pic/coffee.jpg") no-repeat;

        width: 500px;
        height: 500px;
        position: absolute;
        border: 1px solid #000;
        z-index: -1
    }

    #img {
        display: none;
        z-index: 2;

    }

    .text {
        border: solid 1px #f00;
    }

    li {
        width: 4rem;
        height: 2rem;
        border: solid 1px deepskyblue;
        display: inline-block;
    }

</style>