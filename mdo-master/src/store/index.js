import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    account: '',
  },
  mutations: {
    changeAccount(state, playload) {
      state.account = playload
    },
  },
})
export default store
