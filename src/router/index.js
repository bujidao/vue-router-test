import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 引入外部路由模块
import routerMovies from './movie'
import routerMusic from './music'
import routerPhoto from './photo'

// 声明公共模块
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
import Default from '@/components/default/default.vue'
import Slide from '@/components/slide/slide.vue'
import Dialog from '@/components/dialog/dialog.vue'
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Default', Default)
Vue.component('Slide', Slide)
Vue.component('Dialog', Dialog)

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   meta: {
    //     title: '首页'
    //   },
    //   children: [
    //     routerMovies,
    //     routerMusic,
    //     routerPhoto
    //   ]
    // },
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/home/home.vue'),
      meta: {
        title: '首页'
      }
    },
    routerMovies,
    routerMusic,
    routerPhoto,
    {
      path: '',
      name: '404',
      component: () => import('@/components/default/default.vue')
    }
  ]
})
