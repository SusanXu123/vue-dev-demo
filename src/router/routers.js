const Merge = () => import('@/pages/merge/merge.vue')
const DataStrats = () => import('@/pages/merge/data-strats.vue')

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
    }]
  }
]
