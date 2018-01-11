import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    userPower: []
  },
  mutations: {
    isLogin: function (state, data) {
      state.isLogin = data
    },
    userPower: function (state, data) {
      state.userPower = data
    }
  }
})

export default store
