import '@/assets/css/base.css'
import '@/assets/js/set_root.js'
import mixin from '@/mixin/index.js'
import router from '@/router'
import animate from 'animate.css'
import Vue from 'vue'
import VueFullpage from 'vue-fullpage.js'
import App from './App.vue'
Vue.use(animate)
Vue.use(VueFullpage)
Vue.mixin(mixin)
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
