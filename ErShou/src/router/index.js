import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main/main'
import home_page from '../components/home_page/home_page'
import goods_list from "../components/goods_list/goods_list"
import log_in from "../components/log_in/log_in"
import goods_detail from "../components/goods_detail/goods_detail"
import user_center from "../components/user_center/user_center"
import user_goods from "../components/user_goods/user_goods"
import user_collection from "../components/user_collection/user_collection"
Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/main',
    component: main,
    children: [
      {
        path: 'home_page',
        component: home_page
      },
      {
        path: 'goods_list',
        component: goods_list
      },
      {
        path: 'goods_detail',
        component: goods_detail
      },
      {
        path: 'user_center',
        component: user_center,
        children: [
          {
            path: 'user_goods',
            component: user_goods
          },
          {
            path: 'user_collection',
            component: user_collection
          }
        ]
      }
    ]
    },
    {
      path: '/log_in',
      component: log_in
    },
    { 
      path: '/',
      redirect: '/main/user_center/user_collection'
    }
  ],
  mode: 'history'
})
