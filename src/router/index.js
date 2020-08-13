import Vue from 'vue'
import Router from 'vue-router'

import layout from '../pages/layout/index'

Vue.use(Router)
const constantRouter = [
  {
    path: '/',
    redirect: () => {
      return '/login'
    }
  },
  {
    path: '/login',
    component: resolve => require(['../pages/login/Login'], resolve),
    meta: {
      role: ['admin', 'super_editor']
    }
  },
  {
    path: '/layout',
    // name: '首页',
    component: layout,
    children: [
      {
        path: '/mall',
        name: '管理端',
        icon: 'el-icon-goods',
        keepalive: true,
        component: () => import('../pages/layout/appMain'),
        // redirect: '/mall-list',
        children: [
          {
            path: '/forms',
            name: '表格数据',
            icon: 'el-icon-goods',
            keepalive: true,
            // redirect: '/three-1',
            component: () => import('../pages/mall/forms')
          },
          {
            path: '/mall-list2',
            name: '初选管理',
            icon: 'el-icon-goods',
            // redirect: '/three-1',
            component: () => import('../pages/mall/catalogue')
          },
          {
            path: '/commodity',
            name: '商品',
            icon: 'el-icon-goods',
            // redirect: '/three-1',
            component: () => import('../pages/mall/commodity')
          },
          {
            path: '/treeview',
            name: '树形控件',
            icon: 'el-icon-service',
            component: () => import('../pages/mall/treeview')
          },
          {
            path: '/tree',
            name: '树形控件2',
            icon: 'el-icon-service',
            component: () => import('../pages/mall/tree'),
            children: [
              {
                path: '/three-1',
                name: '三级级菜单-1',
                component: () => import('../pages/mall/catalogue'),
                children: [
                  {
                    path: '/fore-1',
                    name: '四级级菜单-1',
                    component: () => import('../pages/asideBar/fore')
                  },
                  {
                    path: '/fore-2',
                    name: '四级级菜单-2',
                    component: () => import('../pages/asideBar/fore2')
                  }
                ]
              }
            ]
          },
          {
            path: '/subassembly',
            name: '组件传值',
            icon: 'el-icon-service',
            component: () => import('../pages/mall/subassembly')
          }
        ]
      },
      {
        path: '/one-2',
        name: '富文本编辑',
        icon: 'el-icon-service',
        component: () => import('../pages/login/Login'),
        children: [
          {
            name: '二级菜单-2',
            icon: 'el-icon-service',
            path: '/one-3',
            component: () => import('../pages/login/Login')
          }
        ]
      }
    ]
  }
]

// const asyncRouter = [
//   {
//     path: '/asyncRouter',
//     name: 'asyncRouter',
//     component: ()=> import( '../pages/asyncRouter' )
//   }
// ]

export default new Router({
  mode: 'history', // 用这个模式可以把#号去掉
  routes: constantRouter
})
