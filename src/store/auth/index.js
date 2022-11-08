export default {
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
}
