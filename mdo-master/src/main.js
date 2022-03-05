import '@/assets/css/base.css'
// import '@/assets/css/font.less'
import '@/assets/js/set_root.js'
import mixin from '@/mixin/index.js'
import router from '@/router'
import animate from 'animate.css'
import axios from 'axios'
import { Icon, Notify, Popup } from 'vant'
// import { Menu,Submenu ,MenuItem} from 'element-ui';
import 'vant/lib/index.css'
// import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App.vue'
import qs from 'qs'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

Vue.use(Icon)
// 全局注册
Vue.use(Notify)
Vue.use(Popup)
Vue.use(animate)

Vue.mixin(mixin)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)

// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
