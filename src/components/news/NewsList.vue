<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/NewsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" alt="">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        newsList:[]
      }
    },
    created() {
      this.getNewsList()
    },
    methods:{
      //获取新闻列表
      getNewsList(){
        this.newsList=[
          {id:'1',img_url:'/src/images/shuijiao.jpg',title:'能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',add_time:'2020-04-28 16:38:00',click:'2'},
          {id:'2',img_url:'/src/images/muwu.jpg',title:'想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.',add_time:'2020-04-28 15:38:00',click:'22'},
          {id:'3',img_url:'/src/images/cbd.jpg',title:'烤炉模式的城，到黄昏，如同打翻的调色盘一般.',add_time:'2020-04-28 17:38:00',click:'54'},
          {id:'4',img_url:'/src/images/shuijiao.jpg',title:'能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',add_time:'2020-04-28 16:38:00',click:'2'},
          {id:'5',img_url:'/src/images/muwu.jpg',title:'想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.',add_time:'2020-04-28 15:38:00',click:'22'},
          {id:'6',img_url:'/src/images/cbd.jpg',title:'烤炉模式的城，到黄昏，如同打翻的调色盘一般.',add_time:'2020-04-28 17:38:00',click:'54'},
          {id:'7',img_url:'/src/images/shuijiao.jpg',title:'能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',add_time:'2020-04-28 16:38:00',click:'2'},
          {id:'8',img_url:'/src/images/muwu.jpg',title:'想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.',add_time:'2020-04-28 15:38:00',click:'22'},
          {id:'9',img_url:'/src/images/cbd.jpg',title:'烤炉模式的城，到黄昏，如同打翻的调色盘一般.',add_time:'2020-04-28 17:38:00',click:'54'},
          {id:'10',img_url:'/src/images/shuijiao.jpg',title:'能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？',add_time:'2020-04-28 16:38:00',click:'2'},
          {id:'11',img_url:'/src/images/muwu.jpg',title:'想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.',add_time:'2020-04-28 15:38:00',click:'22'},
          {id:'12',img_url:'/src/images/cbd.jpg',title:'烤炉模式的城，到黄昏，如同打翻的调色盘一般.',add_time:'2020-04-28 17:38:00',click:'54'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mui-table-view{
    li{
      h1{
        font-size: 14px;
      }
      .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
