import home from '@/pages/home/index.vue'
import invitationRecord from '@/pages/invitation_record/index.vue'
import preSale from '@/pages/presale/index.vue'
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
    component: preSale,
  },
  {
    path: '/invitate',
    component: () => import('@/pages/invitepage/index.vue'),
  },
  {
    path: '/invitation_record',
    component: invitationRecord,
  },
  {
    path: '*',
    component: home,
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
