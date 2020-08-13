export default {
  path: '/emrmanagement',
  meta: {
    title: 'EMR管理'
  },
  redirect: '/emrmanagement/home',
  component: () =>
    import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/link.vue'),
  children: [{
    path: 'home',
    meta: {
      title: 'EMR管理'
    },
    component: () =>
      import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/index.vue')
  },
  {
    path: 'classification',
    meta: {
      title: '病历分类'
    },
    component: () =>
      import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/classification.vue')
  }
  // {
  //   path: 'templateclass',
  //   meta: {
  //     title: '模板类名'
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/templateClass.vue')
  // },
  // {
  //   path: 'datumUnit',
  //   meta: {
  //     title: '数据集合'
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/datumUnit.vue')
  // },
  // {
  //   path: 'controlForm',
  //   meta: {
  //     title: '控件模板'
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/controlForm.vue')
  // },
  // {
  //   path: 'redact',
  //   meta: {
  //     title: '电子遍历'
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/redact.vue')
  // },
  // {
  //   path: 'reprography',
  //   meta: {
  //     title: '打印'
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "emrmanagement" */ '@/pages/emr_management/views/reprography.vue')
  // }
  ]
}
