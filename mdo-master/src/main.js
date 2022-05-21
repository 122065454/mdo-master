import '@/assets/css/base.css'
// import '@/assets/css/font.less'
import '@/assets/js/set_root.js'
import mixin from '@/mixin/index.js'
import router from '@/router'
import store from '@/store'
import animate from 'animate.css'
import myPlugin from '@/utils/islogin'
Vue.use(myPlugin)
import {
  Collapse,
  message,
  Progress,
  Select,
  Tooltip,
  Table
} from 'ant-design-vue';

import axios from 'axios'
import qs from 'qs'
import {
  Icon,
  Notify,
  Popup
} from 'vant'
import 'vant/lib/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$message = message
Vue.use(ElementUI);
Vue.use(Icon)
Vue.use(Table)
// 全局注册
Vue.use(Notify)
Vue.use(Popup)
Vue.use(Collapse)
Vue.use(Select)
Vue.use(Tooltip)
Vue.use(animate)
Vue.mixin(mixin)

Vue.component(Progress.name, Progress)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)

// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
