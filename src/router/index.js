import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/',
    name: 'indexView',
    component: () => import('@/views/layout/indexView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/login/loginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
