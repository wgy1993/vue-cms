<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <label>
            <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120"/>
        </label>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === '' ? '此用户很懒，嘛都没说': item.content }}
                </div>
            </div>

        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        data() {
            return {
                comments: [] // 所有的评论数据
            };
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments() {
                // 获取评论
                this.comments=[
                    {user_name:'wgy',add_time:'2020-04-28 18:30:09',content:''},
                    {user_name:'test',add_time:'2020-04-28 18:31:09',content:''},
                    {user_name:'ygw',add_time:'2020-04-28 18:32:09',content:''},
                    {user_name:'haHa',add_time:'2020-04-28 18:33:09',content:''},
                    {user_name:'xiXi',add_time:'2020-04-28 18:34:09',content:''},
                    {user_name:'heiHei',add_time:'2020-04-28 18:35:09',content:''}
                ]
            },
            getMore(){
                Toast("没有更多内容啦")
            }
        },
        props:["id"]
    };
</script>
<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #cccccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>