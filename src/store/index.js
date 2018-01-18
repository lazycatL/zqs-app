import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    isLoading: false,
    user: {}
  },
  mutations: {
    isLogin: function (state, data) {
      state.isLogin = data
    },
    isLoading (state, data) {
      state.isLoading = data
    },
    user: function (state, data) {
      state.user = data
    }
  }
})

export default store
