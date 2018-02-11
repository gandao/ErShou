import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main/main'
import home_page from '../components/home_page/home_page'
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
      }
    ]
    },
    { 
      path: '/',
      redirect: '/main/home_page'
    }
  ],
  mode: 'history'
})
