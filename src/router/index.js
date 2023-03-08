import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Layout from '../views/Layout.vue'
import PlayVideoDetail from '../views/playvideodetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: Layout,
    redirect: '/layout/home',
    children: [
        {
            path: 'home',
            component: Home,
            meta: { // meta保存路由对象额外信息的
                title: "首页"
            }
        },
        {
          path: 'radio',
          name: 'radio',
          meta: {
            title: "电台"
          },
          component: () => import('../views/radio/RadioHome.vue')
        },
        {
          path: 'music',
          name: 'music',
          meta: {
            title: "音乐"
          },
          component: () => import('../views/music/MusicHome.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          meta: {
            title: "我的"
          },
          component: () => import('../views/mine/MineHome.vue')
        }
    ]
  },
  {
    path: '/playvideo',
    component: PlayVideoDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
