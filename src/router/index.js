import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/indexView.vue'

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/',
    redirect: '/profile',
    component: layout,
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/indexView.vue'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user',
          sidebar: true
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404View.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401View.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/indexView.vue')
  }
]

const privateRoutes = [
  {
    path: '/user',
    redirect: '/user/manage',
    component: layout,
    meta: {
      title: 'user',
      icon: 'personnel',
      sidebar: true
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage/indexView.vue'),
        meta: {
          title: 'userManage',
          sidebar: true
        }
      },
      {
        path: '/user/role',
        component: () => import('@/views/role-list/indexView.vue'),
        meta: {
          title: 'roleList',
          sidebar: true
        }
      },
      {
        path: '/user/permission',
        component: () => import('@/views/permission-list/indexView.vue'),
        meta: {
          title: 'permissionList',
          sidebar: true
        }
      },
      {
        path: '/user/info/:id',
        component: () => import('@/views/user-info/indexView.vue'),
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        component: () => import('@/views/import/indexView.vue'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    component: layout,
    meta: {
      title: 'article',
      icon: 'article',
      sidebar: true
    },
    children: [
      {
        path: '/article/ranking',
        component: () => import('@/views/article-ranking/indexView.vue'),
        meta: {
          title: 'articleRanking',
          sidebar: true
        }
      },
      {
        path: '/article/:id',
        component: () => import('@/views/article-detail/indexView.vue'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        component: () => import('@/views/article-create/indexView.vue'),
        meta: {
          title: 'articleCreate',
          sidebar: true
        }
      },
      {
        path: '/article/editor/:id',
        component: () => import('@/views/article-create/indexView.vue'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  },
  {
    path: '/setting',
    redirect: '/setting/theme',
    component: layout,
    meta: {
      title: 'setting',
      icon: 'setting',
      sidebar: true
    },
    children: [
      {
        path: '/setting/theme',
        name: 'theme',
        component: () => import('@/views/setting/themeView.vue'),
        meta: {
          title: 'theme',
          icon: 'el-icon-setting',
          sidebar: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
