// 入口文件
import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
// 按需导入 Mint-UI 中的组件
import {Header, Swipe, SwipeItem, Button} from 'mint-ui'
// 导入自己的 router.js 路由模块
import router from './router.js'
// App 根组件
import app from './App.vue'
// 导入 vue-resource
// import vueResource from 'vue-resource'
// 安装路由
Vue.use(VueRouter);
// 安装 vue-resource
// Vue.use(vueResource);
//导入格式化时间的插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

new Vue({
    el: '#app',
    render: c => c(app),
    router // 挂载路由对象到 VM 实例上
});