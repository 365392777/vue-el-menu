export default {
  path: '/admin',
  meta: {
    title: '首页'
  },
  redirect: '/admin',
  component: () =>
    import(/* webpackChunkName: "index" */ '@/pages/index.vue'),
  children: [{
    path: 'catalogue',
    meta: {
      title: '商品列表'
    },
    component: () =>
      import(/* webpackChunkName: "catalogue" */ '@/pages/mall/catalogue.vue')
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
