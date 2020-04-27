// 入口文件
import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 按需导入 Mint-UI 中的组件
import {Header} from 'mint-ui'
// 导入自己的 router.js 路由模块
import router from './router.js'
// App 根组件
import app from './App.vue'
// 安装路由
Vue.use(VueRouter);

Vue.component(Header.name, Header);

new Vue({
    el: '#app',
    render: c => c(app),
    router // 挂载路由对象到 VM 实例上
});