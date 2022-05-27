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
          icon: 'el-icon-user'
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
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage/indexView'),
        meta: {
          title: 'userManage',
          icon: 'personal-manage'
        }
      },
      {
        path: '/user/role',
        component: () => import('@/views/role-list/indexView'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        component: () => import('@/views/permission-list/indexView'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
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
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        component: () => import('@/views/article-ranking/indexView'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
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
          icon: 'article-create'
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
