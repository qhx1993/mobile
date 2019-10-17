<template>
    <div id="StyleTransform" class="content">
        <el-image
            class="main-image"
            :src="src"
            fit="contain"
        />
        <div class="menu">
            <van-row type="flex" justify="space-between">
                <van-col :span="6">
                    <van-uploader>
                        <van-button icon="photo-o" @click="drawer=true"/>
                    </van-uploader>
                </van-col>
                <van-col :span="6"><van-button icon="arrow-up" @click="drawer=true"/></van-col>
                <van-col :span="6"><van-button icon="down" @click="saveImage()"/></van-col>
            </van-row>

            <el-drawer ref="stDrawer"
                :visible.sync="drawer"
                direction="btt"
                size="25%"
            >
                <van-grid class="st-grid" :gutter="20" :column-num="3" square>
                    <van-grid-item v-for="(image, index) in images" :key="index" @click="choseStyle(index)">
                        <van-image :src="image.url" fit="cover"/>
                    </van-grid-item>
                </van-grid>
            </el-drawer>
        </div>

    </div>
</template>

<script>

    export default {
        name: "StyleTransform",
        data() {
            return {
                drawer: true,
                src: require('../assets/img/default.jpg'),
                images: [
                    {url: require('../assets/img/style/wave.jpg')},
                    {url: require('../assets/img/style/rain_princess.jpg')},
                    {url: require('../assets/img/style/the_scream.jpg')},
                ],
            }
        },
        methods: {
            choseStyle: function (index) {
                // eslint-disable-next-line no-console
                console.log(index, ': ', this.images[index].url);
                this.$refs.stDrawer.closeDrawer();
            },
            saveImage: function () {
                let alink = document.createElement('a');
                alink.href = this.src;
                alink.download = 'photo';
                alink.click();
            }
        },
    }
</script>

<style>
#StyleTransform .content {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 1;
}
#StyleTransform .main-image {
    position: absolute;
    height: 100%;
    width: 100%;
}
#StyleTransform .menu {
    position: absolute;
    bottom: 20px;
    width: 100%;
}
#StyleTransform .menu .el-button, #StyleTransform .menu .van-button{
    border: none;
    background: inherit;
    color: #909399;
    font-size: 21px;
    display: block;
    margin: 0 auto;
}
.el-drawer__header .el-icon-close:before {
    content: "\e6df";
}
.el-drawer__header {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 10px !important;
}
.st-grid {
    margin-top: 12%;
}
.st-grid .van-image{
    height: 100%;
    width: 100%;
    background:inherit;
}
.st-grid .van-grid-item__content{
    padding: 0;
}
.st-grid .van-grid-item__content::after {
    border: none;
}
.menu .van-uploader {
    left: 50%;
    transform: translateX(-50%);
}
</style>