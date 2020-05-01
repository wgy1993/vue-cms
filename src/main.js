// 入口文件
import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
// 按需导入 Mint-UI 中的组件
// import {Button, Header, Lazyload, Swipe, SwipeItem} from 'mint-ui'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入自己的 router.js 路由模块
import router from './router.js'
// App 根组件
import app from './App.vue'
//导入格式化时间的插件
import moment from 'moment'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
// 安装 图片预览插件
import VuePreview from 'vue-preview'

Vue.use(MintUi);
// 导入 vue-resource
// import vueResource from 'vue-resource'
// 安装路由
Vue.use(VueRouter);
// 安装 vue-resource
// Vue.use(vueResource);
// 设置请求的根路径
// Vue.http.options.root = 'http://vue.studyit.io';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;
// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});
Vue.use(VuePreview);
new Vue({
    el: '#app',
    render: c => c(app),
    router // 挂载路由对象到 VM 实例上
});