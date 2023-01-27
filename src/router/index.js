import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/pages/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/com-page',
    name: 'compage',
    component: () => import('@/views/pages/comPage.vue')
  },

  {
    path: '/com-page-2',
    name: 'compage2',
    component: () => import('@/views/pages/comPage2.vue')
  },

  {
    path: '/com-page-3',
    name: 'compage3',
    component: () => import('@/views/pages/comPage3.vue')
  },

  {
    path: '/calendar-3',
    name: 'calendar3',
    component: () => import('@/views/pages/Calendar/CalendarPage.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
