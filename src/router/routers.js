const Merge = () => import('@/pages/merge/merge.vue')
const DataStrats = () => import('@/pages/merge/data-strats.vue')
const HooksStrats = () => import('@/pages/merge/hooks-strats.vue')
const AssetsStrats = () => import('@/pages/merge/assets-strats.vue')
const Apis = () => import('@/pages/apis/apis.vue')
const vModel = () => import('@/pages/apis/v-model.vue')
const vSlot = () => import('@/pages/v-slot/index.vue')

export default [
  {
    path: '/merge',
    name: 'merge',
    meta: {
      title: 'Vue选项的合并'
    },
    component: Merge,
    children: [{
      path: 'dataStrats',
      name: 'dataStrats',
      meta: {
        title: 'data 的合并策略'
      },
      component: DataStrats
    }, {
      path: 'hooksStrats',
      name: 'hooksStrats',
      meta: {
        title: '钩子函数的合并策略'
      },
      component: HooksStrats
    }, {
      path: 'assetsStrats',
      name: 'assetsStrats',
      meta: {
        title: '资源的合并策略'
      },
      component: AssetsStrats
    }]
  },
  {
    path: '/apis',
    name: 'apis',
    meta: {
      title: 'apis'
    },
    component: Apis,
    children: [{
      path: 'vModel',
      name: 'vModel',
      meta: {
        title: '组件的双向绑定'
      },
      component: vModel
    }]
  },
  {
    path: '/v-slot',
    name: 'v-slot',
    meta: {
      title: 'v-slot'
    },
    component: vSlot
  }
]
