import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  axios,
  moment,

  render: h => h(App, axios),
}).$mount('#app')
