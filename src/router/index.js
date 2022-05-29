import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/indexView'

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
        component: () => import('@/views/profile/indexView'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user',
          sidebar: true
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404View')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401View')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/indexView')
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
        component: () => import('@/views/user-manage/indexView'),
        meta: {
          title: 'userManage',
          sidebar: true
        }
      },
      {
        path: '/user/role',
        component: () => import('@/views/role-list/indexView'),
        meta: {
          title: 'roleList',
          sidebar: true
        }
      },
      {
        path: '/user/permission',
        component: () => import('@/views/permission-list/indexView'),
        meta: {
          title: 'permissionList',
          sidebar: true
        }
      },
      {
        path: '/user/info/:id',
        component: () => import('@/views/user-info/indexView'),
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        component: () => import('@/views/import/indexView'),
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
        component: () => import('@/views/article-ranking/indexView'),
        meta: {
          title: 'articleRanking',
          sidebar: true
        }
      },
      {
        path: '/article/:id',
        component: () => import('@/views/article-detail/indexView'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        component: () => import('@/views/article-create/indexView'),
        meta: {
          title: 'articleCreate',
          sidebar: true
        }
      },
      {
        path: '/article/editor/:id',
        component: () => import('@/views/article-create/indexView'),
        meta: {
          title: 'articleEditor'
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
