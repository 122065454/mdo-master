import '@/assets/css/base.css'
import '@/assets/js/set_root.js'
import router from '@/router'
import Vue from 'vue'
import VueFullpage from 'vue-fullpage.js'
import App from './App.vue'
import animate from 'animate.css'
Vue.use(animate);
Vue.use(VueFullpage)
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
