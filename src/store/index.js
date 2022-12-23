import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import auth from './auth/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    filter: '1 bulan',
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
    },
    filter(state, data) {
      state.filter = data
    },
  },
  actions: {
    login({ commit }) {
      commit('login')
    },
    filter({ commit }, data) {
      commit('filter', data)
    },
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

  // modules: {
  //   auth,
  // },
})
