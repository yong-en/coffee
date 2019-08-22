<template>
    <div>
        <img id="background_image" src="${ctx}/img/coffee.jpg">
        <canvas id="canvas" width="400" height="400"></canvas>
    </div>
</template>

<script>

    import {fabric} from 'fabric'


    export default {
        name: "test",
        data(){

            return {

            }
        },
        mounted: function () {
            var canvas = new fabric.Canvas('canvas');
            var radius = 300;
            fabric.Image.fromURL('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png', function(img) {
                img.set({
                    left: 100,
                    top: 100,
                    angle: 0,
                    clipTo: function (ctx) {
                        ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
                    }
                });
                canvas.add(img).setActiveObject(img);

                fabric.util.animate({
                    startValue: 200,
                    endValue: 0,
                    duration: 2000,
                    onChange: function(value) {
                        radius = value;
                        canvas.renderAll();
                    },
                });

            });

        }
    }
</script>

<style scoped>

</style>