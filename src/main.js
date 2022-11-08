import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'

// import VueSweetalert2 from 'vue-sweetalert2'
import HighchartsVue from 'highcharts-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import 'sweetalert2/dist/sweetalert2.min.css'

// const options = {
//   confirmButtonColor: '#41b882',
//   cancelButtonColor: '#ff7674',
// }

// Vue.use(VueSweetalert2, options)

Vue.config.productionTip = false
Vue.use(HighchartsVue)

new Vue({
  router,
  store,
  vuetify,
  axios,
  moment,

  render: h => h(App, axios, moment),
}).$mount('#app')
