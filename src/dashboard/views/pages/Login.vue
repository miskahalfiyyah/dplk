<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <!-- login here -->
      <v-card
        class="my-auto"
      >
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-4">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="require('@/assets/images/logos/logo.png')"
              max-height="80px"
              max-width="80px"
              alt="logo"
              contain
            ></v-img>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Selamat Datang 👋
          </p>
          <p class="mb-2">
            Silahkan masukan username dan password Anda
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="cer_nmbr"
              outlined
              placeholder="Username"
              hide-details
              class="mb-3"
              required
            ></v-text-field>

            <!-- <v-text-field
              v-model="passwd"
              outlined
              type="password"
              placeholder="Password"
              hide-details
              required
            ></v-text-field> -->
            <v-text-field
              v-model="passwd"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="Password"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              required
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
            <p
              v-if="loginError"
              style="color: red"
              class="mt-3"
            >
              {{ loginErrorMessage }}
            </p>

            <!-- <p
              v-if="loginError"
              style="color: red"
              class="mt-3"
            >
              {{ loginErrorMessage }}
            </p> -->
            <div class="float-end mt-3 mb-5">
              <a
                href="/send-email"
                class="mt-1"
              >
                Lupa Password?
              </a>
            </div>
            <v-btn
              block
              color="primary"
              class="mt-6"
              :loading="loading"
              :disabled="loading"
              @click="submit()"
            >
              Login
            </v-btn>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdMkmK25cI7vjFNdH5ZI8rSmiCyy11ol6oaZEpc3Qye2-nGEw/viewform"
              class="text-decoration-none"
            >
              <v-btn
                outlined
                block
                color="primary"
                class="mt-3"
              >
                Pendaftaran Peserta Baru
              </v-btn>
            </a>
          </v-form>
        </v-card-text>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
    >

    <!-- tree -->
    <v-img
      class="auth-tree"
      src="@/assets/images/misc/illustration-section-01.svg"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/illustration-section-02.svg"
    ></v-img>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import axios from 'axios'
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import Swal from 'sweetalert2/dist/sweetalert2'

// import router from '@/router'
// import { Router } from 'express'

// import { ref } from '@vue/composition-api'

export default {
  data() {
    return {
      loader: null,
      loading: false,
      cer_nmbr: '',
      passwd: '',
      isPasswordVisible: false,
    }
  },
  setup() {
    // const username = ref('')
    // const isPasswordVisible = ref(false)
    // const password = ref('')

    return {
      // username,
      // isPasswordVisible,
      // password,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      errors: null,
      loginError: false,
      loginErrorMessage: '',
    }
  },

  // watch: {
  //   loader() {
  //     const l = this.loader
  //     this[l] = !this[l]

  //     setTimeout(() => (this[l] = false), 3000)

  //     this.loader = null
  //   },
  // },
  beforeMount() {
    this.check()
  },
  methods: {
    submit() {
      axios
        .post('http://202.148.5.146:8003/api/auth/loginpeserta', { cer_nmbr: this.cer_nmbr, passwd: this.passwd })
        .then(response => {
          const $success = response.data.success
          if ($success === true) {
            Swal.fire({
              title: 'Berhasil',
              text: 'Anda berhasil login',
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: '#41b882',
            })
            const dataUser = {
              cer_nmbr: response.data.data.cer_nmbr,
              client_nm: response.data.data.client_name,
              company_nm: response.data.data.company_nm,
              employee_code: response.data.data.employee_code,
              token: response.data.data.token,
            }
            localStorage.setItem('cer_nmbr', dataUser.cer_nmbr)
            localStorage.setItem('client_nm', dataUser.client_nm)
            localStorage.setItem('company_nm', dataUser.company_nm)
            localStorage.setItem('employe_code', dataUser.employee_code)
            localStorage.setItem('token', dataUser.token)
            this.$store.dispatch('login')
            this.$router.push({ path: '/privacy-policy' })

            // this.$router.push({ path: '/privacy-policy' })
          }
          if ($success === false) {
            Swal.fire({
              // text: store.getters.getErrors[error],
              title: 'Oops...',
              text: 'Password / username tidak sesuai!',
              icon: 'error',
              confirmButtonText: 'Try again!',
              confirmButtonColor: '#3085d6',
            })
          }
        })

        .catch(error => {
          console.log(error.message)
          Swal.fire({
            // text: store.getters.getErrors[error],
            title: 'Oops...',
            text: 'Password / username tidak sesuai!',
            icon: 'error',
            confirmButtonText: 'Try again!',
            confirmButtonColor: '#3085d6',
          })
        })
    },
    check() {
      const dataUser = {
        cer_nmbr: localStorage.getItem('cer_nmbr'),
        client_nm: localStorage.getItem('client_nm'),
        company_nm: localStorage.getItem('company_nm'),
        employee_code: localStorage.getItem('employee_code'),
      }
      if (dataUser.cer_nmbr != null) {
        axios
          .get('http://202.148.5.146:8003/api/auth',
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
          .then(response => {
            console.log(response.data)
          })
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
