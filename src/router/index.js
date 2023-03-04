import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../views/Layout.vue'
import PlayVideoDetail from '../views/PlayVideoDetail.vue'

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
            component: HomeView,
            meta: { // meta保存路由对象额外信息的
                title: "首页"
            }
        },
        {
          path: 'about',
          name: 'about',
          meta: {
            title: "关于"
          },
          component: () => import('../views/AboutView.vue')
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
