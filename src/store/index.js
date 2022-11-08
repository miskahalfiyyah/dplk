import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import auth from './auth/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
    },
  },
  actions: {
    login({ commit }) {
      commit('login')
    },
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

  // modules: {
  //   auth,
  // },
})
