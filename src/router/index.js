import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/news',
    component: Layout,
    redirect: '/news',
    name: '',
    meta: { title: '最新发布', icon: 'form' },
    children: [
      {
        path: 'swiper',
        component: () => import('@/views/news/swiper/swiper'),
        name: 'swiper',
        meta: { title: '轮播图', icon: 'nested' }
      },
      {
        path: 'survery',
        component: () => import('@/views/news/survery/survery'),
        name: 'survery',
        meta: { title: '调查问卷', icon: 'chart' }
      },
      {
        path: 'hots',
        component: () => import('@/views/news/hots/hots'),
        name: 'hots',
        meta: { title: '热门推荐(公告)', icon: 'message' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/menu1',
    name: '',
    meta: { title: '行政服务', icon: 'peoples' },
    children: [
      {
        path: 'menu1-1',
        component: () => import('@/views/nested/menu1/menu1-1'),
        name: 'menu1-1',
        meta: { title: '常用电话', icon: 'message' }
      },
      {
        path: 'menu1-2',
        component: () => import('@/views/nested/menu1/menu1-2'),
        name: 'menu1-2',
        meta: { title: '班车服务' }
      },
      {
        path: 'menu1-3',
        component: () => import('@/views/nested/menu1/menu1-3'),
        name: 'menu1-3',
        meta: { title: '失物招领' }
      },
      {
        path: 'menu1-4',
        component: () => import('@/views/nested/menu1/menu1-3'),
        name: 'menu1-4',
        meta: { title: '满意度调查' }
      },
      {
        path: 'menu1-5',
        component: () => import('@/views/nested/menu1/menu1-3'),
        name: 'menu1-5',
        meta: { title: '协议酒店' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

