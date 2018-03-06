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
import user_add_goods from "../components/user_add_goods/user_add_goods"
import user_feedback from "../components/user_feedback/user_feedback"
Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/main',
    component: main,
    children: [
      {
        path: 'home_page',
        component: home_page,
        name: "home_page"
      },
      {
        path: 'goods_list',
        component: goods_list,
        name: "goods_list"
      },
      {
        path: 'goods_detail',
        component: goods_detail,
        name: 'goods_detail'
      },
      {
        path: 'user_center',
        component: user_center,
        name: 'user_center',
        children: [
          {
            path: 'user_goods',
            component: user_goods,
            name: 'user_goods'
          },
          {
            path: 'user_collection',
            component: user_collection,
            name: "user_collection"
          },
          {
            path: 'user_add_goods',
            component: user_add_goods,
            name: "user_add_goods"
          },
          {
            path: 'user_feedback',
            component: user_feedback,
            name: "user_feedback"
          }
        ]
      }
    ]
    },
    {
      path: '/log_in',
      component: log_in,
      name: "log_in"
    },
    { 
      path: '/',
      redirect: '/main/user_center/user_collection'
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
