<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <!--            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="this.$preview.open(index, list)" :key="item.src">-->
            <vue-preview :slides="list"></vue-preview>
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="id"/>
    </div>
</template>

<script>
    // 1. 导入评论子组件
    import comment from "../subcomponents/comment.vue";

    export default {
        data() {
            return {
                id: this.$route.params.id, // 从路由中获取到的 图片Id
                photoinfo: {}, // 图片详情
                list: [] // 缩略图的数组
            };
        },
        created() {
            this.getPhotoInfo();
            this.getThumbs();
        },
        methods: {
            getPhotoInfo() {
                // 获取图片的详情
                this.photoinfo = {
                    title: '五一假期',
                    add_time: '2020-04-28 17:16:01',
                    click: '12323',
                    content: '为期五天的五一假期即将来临，但是由于国内疫情仍处于外防输入、内防反弹的关键阶段，所以想要肆无忌惮的开心出游还是不可能的。' +
                        '健康时报记者通过不完全梳理发现，各地五一出游提示虽不完全相同，但也有共同点，除了必不可少的防护措施外，还有一个今年五一出游的关键词“预约”，为了控制游客数量，全国各地各大景区多数实行了预约制，所以，五一想要出游的小伙伴，记得提前预约，避免盲目出行。'
                };
            },
            getThumbs() {
                // 获取缩略图
                this.list = [
                    {msrc: '/src/images/muwu.jpg', src: '/src/images/muwu.jpg', w: '600', h: '400'},
                    {msrc: '/src/images/shuijiao.jpg', src: '/src/images/shuijiao.jpg', w: '600', h: '400'},
                    {msrc: '/src/images/cbd.jpg', src: '/src/images/cbd.jpg', w: '600', h: '400'},
                    {msrc: '/src/images/cbd.jpg', src: '/src/images/cbd.jpg', w: '600', h: '400'}
                ];
            }
        },
        components: {
            // 注册 评论子组件
            "cmt-box": comment
        }
    };
</script>

<style lang="scss" scoped>
    .photoinfo-container {
        padding: 3px;

        h3 {
            color: #26A2FF;
            font-size: 15px;
            text-align: center;
            margin: 15px;
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
        }

        .content {
            font-size: 13px !important;
            line-height: 30px;
        }

        .thumbs {
            /deep/ .my-gallery { //deep深层作用选择器
                display: flex;
                flex-wrap: wrap; //默认换行
                figure {
                    width: 30%;
                    margin: 5px;

                    img {
                        width: 100%;
                        box-shadow: 0 0 8px #999;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
</style>
