<template>
    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>

        <hr>

        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info: {} // 图文数据
            };
        },
        created() {
            this.getGoodsDesc();
        },
        methods: {
            getGoodsDesc() {
                this.info = {title: '苹果Apple', content: '<p>北京时间2015年9月10日，美国苹果公司发布了iPhone 6S。北京时间2015年9月25日发售。iPhone 6s有金色、银色、深空灰色、玫瑰金色。屏幕采用高强度的Ion-X玻璃，处理器采用A9处理器，CPU性能比A8提升70%，图形性能提升90%，后置摄像头1200万像素，前置摄像头500万像素。摄像头对焦更加准确，CMOS为了降噪采用“深槽隔离”技术，支持4K视频摄录。数据连接方面，支持23个频段的LTE网络，和2倍速度的WIFI连接。</p>' +
                        '<p>全新的iPhone 6S 和iPhone 6S Plus拥有多处升级，外壳采用7000系列铝合金，强度比上一代大为增强；处理器升级至更快速的A9系列，触摸屏采用了Macbook上的Force Touch技术，并被命名为“3D触控（3D touch）”，可以区分轻击、按压和深度按压三种操作方式，由于压力触控技术的加入，新iPhone的厚度有所增加。</p>'};
            }
        }
    };
</script>

<style lang="scss">
    .goodsdesc-container {
        padding: 4px;

        h3 {
            font-size: 16px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }

        .content {
            img {
                width: 100%;
            }
        }
    }
</style>
