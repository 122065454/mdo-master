import home from '@/pages/home/index.vue'
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
