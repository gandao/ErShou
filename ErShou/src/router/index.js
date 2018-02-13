import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main/main'
import home_page from '../components/home_page/home_page'
import goods_list from "../components/goods_list/goods_list"
import log_in from "../components/log_in/log_in"
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
      }
    ]
    },
    {
      path: '/log_in',
      component: log_in
    },
    { 
      path: '/',
      redirect: '/log_in'
    }
  ],
  mode: 'history'
})
