<template>
    <div class="newInfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsInfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subTitle">
            <span>发表时间:{{ newsInfo.add_time }}</span>
            <span>点击:{{ newsInfo.click }}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsInfo.content"></div>

        <!-- 评论子组件区域 -->
        <comment-box :id="this.id"/>
    </div>
</template>
<script>
    //导入 评论子组件
    import comment from '../subcomponents/comment.vue'
    export default {
        data(){
            return{
                id:this.$route.params.id,// 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
                newsInfo: {} // 新闻对象
            }
        },
        created() {
            this.getNewsInfo();
        },
        methods: {
            getNewsInfo() {
                // 获取新闻详情
                this.newsInfo ={
                    title:'五一假期',
                    add_time:'2020-04-28 17:16:01',
                    click:'12323',
                    content:'<p>为期五天的五一假期即将来临，但是由于国内疫情仍处于外防输入、内防反弹的关键阶段，所以想要肆无忌惮的开心出游还是不可能的。</p><br>' +
                        '<p>4月23日国务院联防联控机制发布会上，中国疾控中心研究员冯录召表示，对于大部分近期没有病例报告的地区，出行旅游较安全。但因目前还有新增境外输入病例或本土病例，所以还是要保持警惕，而老年人、慢性病患者、孕妇等高危人群则不建议出行。</p><br>' +
                        '<p>那么，五一期间应该如何出游？各地都有什么政策呢？</p><br>' +
                        '<p>4月13日，文化和旅游部、国家卫健委联合印发通知，要求疫情防控期间，旅游景区只开放室外区域，室内场所暂不开放，接待游客量不得超过核定最大承载量的30%。</p><br>' +
                        '<p>健康时报记者通过不完全梳理发现，各地五一出游提示虽不完全相同，但也有共同点，除了必不可少的防护措施外，还有一个今年五一出游的关键词“预约”，为了控制游客数量，全国各地各大景区多数实行了预约制，所以，五一想要出游的小伙伴，记得提前预约，避免盲目出行。</p>'
                };
            }
        },
        components:{
            // 用来注册子组件的节点
            "comment-box": comment
        }
    }
</script>
<style scoped lang="scss">
    .newInfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subTitle{
            font-size: 13px;
            color: blue;
            display: flex;
            justify-content: space-between;
        }
        .content{
            white-space: pre-line;
            text-indent: 2em;
            font-size: 12px;
            img {
                width: 100%;
            }
        }
    }
</style>