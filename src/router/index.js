import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
const layout = () => import('@/pages/layout.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: routers
    }
  ]
})
