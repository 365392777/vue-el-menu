export default {
  path: '/admin',
  meta: {
    title: '商城'
  },
  redirect: '/catalogue',
  component: () =>
    import(/* webpackChunkName: "mall" */ '@/pages/mall/catalogue.vue'),
  children: [{
    path: 'home',
    meta: {
      title: '首页'
    },
    component: () =>
      import(/* webpackChunkName: "emrmanagement" */ '@/pages/mall/catalogue.vue')
  }
  // {
  //   path: 'classification',
  //   meta: {
  //     title: '病历分类'
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/classification.vue')
  // }
  ]
}
