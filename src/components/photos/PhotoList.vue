<template>
    <div>
        <!-- 顶部滑动条区域-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id === 0 ? 'mui-active' : '']" v-for="item in cateList"
                       :key="item.id" @tap="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.img_url" alt="">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    // 1. 导入 mui 的js文件
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {
                cateList: [], // 所有分类的列表数组
                list: [] // 图片列表的数组
            }
        },
        created() {
            this.getAllCategory();
            // 默认进入页面，就主动请求 所有图片列表的数据
            this.getPhotoListByCateId(0);
        },
        mounted() {
            // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
            // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
            // 2. 初始化滑动控件
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getAllCategory() {
                // 获取所有的图片分类
                this.cateList = [
                    {title: "全部", id: 0},
                    {title: "推荐", id: 1},
                    {title: "热点", id: 2},
                    {title: "北京", id: 3},
                    {title: "社会", id: 4},
                    {title: "娱乐", id: 5},
                    {title: "科技", id: 6}
                ];
            },
            getPhotoListByCateId(cateId) {
                // 根据 分类Id，获取图片列表
                console.log(cateId);
                this.list = [
                    {
                        id: '0',
                        img_url: '/src/images/shuijiao.jpg',
                        title: '能和心爱的人一起',
                        zhaiyao: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                    },
                    {
                        id: '1',
                        img_url: '/src/images/shuijiao.jpg',
                        title: '能和心爱的人一起',
                        zhaiyao: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                    },
                    {
                        id: '2',
                        img_url: '/src/images/shuijiao.jpg',
                        title: '能和心爱的人一起',
                        zhaiyao: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                    },
                    {
                        id: '3',
                        img_url: '/src/images/shuijiao.jpg',
                        title: '能和心爱的人一起',
                        zhaiyao: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                    },
                    {
                        id: '4',
                        img_url: '/src/images/shuijiao.jpg',
                        title: '能和心爱的人一起',
                        zhaiyao: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                    },
                    {
                        id: '5',
                        img_url: '/src/images/shuijiao.jpg',
                        title: '能和心爱的人一起',
                        zhaiyao: '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                    }
                ];
            }
        }
    }
</script>
<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px 10px 0;

        li {
            text-align: center;
            background-color: #cccccc;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;

            img {
                width: 100%;
                vertical-align: middle;
            }

            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }

            .info {
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 84px;
                width: 100%;

                .info-title {
                    font-size: 14px;
                }

                .info-body {
                    font-size: 13px;
                }
            }
        }
    }
</style>