import VueRouter from 'vue-router'
// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShoppingCartContainer from './components/tabbar/ShoppingCartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'

// 创建路由对象
const router = new VueRouter({
    routes: [// 配置路由规则
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shoppingCart', component: ShoppingCartContainer},
        {path: '/search', component: SearchContainer},
        {path: '/home/NewsList', component: NewsList},
        {path: '/home/NewsInfo/:id', component: NewsInfo},
        {path: '/home/photoList', component: PhotoList},
        {path: '/home/photoinfo/:id', component: PhotoInfo},
        {path: '/home/goodsList', component: GoodsList}
    ],
    linkActiveClass: 'mui-active'// 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
});

// 把路由对象暴露出去
export default router