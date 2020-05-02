<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :image-list="imageList" :isfull="true"/>
        <!-- 九宫格 到 6宫格 的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/photoList">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodsList">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import swiper from "../subcomponents/swiper.vue";
    export default {
        data() {
            return {
                imageList: [] // 保存轮播图的数组
            };
        },
        created() {
            this.getImages();
        },
        methods: {
            getImages() {
                this.imageList = [
                    {img: 'src/images/1.jpg', url: '1'},
                    {img: 'src/images/2.jpg', url: '2'},
                    {img: 'src/images/3.jpg', url: '3'}
                ]
            }
        },
        components:{
            swiper
        }
    };
</script>
<style lang="scss" scoped>

    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: none;

        img {
            width: 60px;
            height: 60px;
        }

        .mui-media-body {
            font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>