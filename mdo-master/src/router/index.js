import home from '@/pages/home/index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/preSale',
    component: () => import('@/pages/presale/index.vue'),
  },
  {
    path: '/invitate',
    component: () => import('@/pages/invitepage/index.vue'),
  },
  {
    path: '/invitation_record',
    component: () => import('@/pages/invitation_record/index.vue'),
  },
  {
    path: '/reward',
    component: () => import('@/pages/reward/index.vue'),
  },
  {
    path: '*',
    component: () => import('@/pages/home/index.vue'),
  },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})
// 全局后置钩子
router.afterEach((to, from) => {
  document.title = to.meta.title || 'Simeta'
})

export default router
