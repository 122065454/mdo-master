import '@/assets/css/base.css'
import '@/assets/css/font.less'
import '@/assets/js/set_root.js'
import mixin from '@/mixin/index.js'
import router from '@/router'
import animate from 'animate.css'
import axios from 'axios'
import { Icon, Notify, Popup } from 'vant'
import 'vant/lib/index.css'
import Vue from 'vue'
import VueFullpage from 'vue-fullpage.js'
import App from './App.vue'
Vue.prototype.$axios = axios

Vue.use(Icon)
// 全局注册
Vue.use(Notify)
Vue.use(Popup)
Vue.use(animate)
Vue.use(VueFullpage)
Vue.mixin(mixin)

// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
