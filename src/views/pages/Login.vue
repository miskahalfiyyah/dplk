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
              :src="require('@/assets/images/logos/logo siperdana 1.png')"
              max-height="150px"
              max-width="150px"
              alt="logo"
              contain
            ></v-img>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl text-center mt-4 font-weight-bold text--primary mb-2">
            Selamat Datang 👋
          </p>
          <p class="text-lg mt-4 mb-1 text-center font-weight-semibold">
            Hidup Aman dan Nyaman di Masa Depan
          </p>
          <p class="mb-2 text-center">
            Pilihan dana pensiun untuk jelang masa tua bahagia
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="nmbr"
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
            <!-- <form
              action="?"
              method="POST"
            >
              <div id="html_element"></div>
              <br>
              <input
                type="submit"
                value="Submit"
              >
            </form> -->
            <v-btn
              block
              color="red"
              class="mt-6 white--text"
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
                block
                color="green"
                class="mt-3 white--text"
              >
                Pendaftaran Peserta Baru
              </v-btn>
            </a>
            <!-- <a href="/form-klaim">
              <v-btn
                block
                color="primary"
                class="mt-3"
              >
                Klaim PPUKP Pekerja Perbantuan Pertamina
              </v-btn>
            </a> -->
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
      nmbr: '',
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
    localStorage.clear()
  },
  methods: {
    submit() {
      axios
        .post('http://202.148.5.146:8003/api/auth/login', { nmbr: this.nmbr, passwd: this.passwd })
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

            if (response.data.data.user_type === 1) {
              const dataUser = {
                user_type: response.data.data.user_type,
                cer_nmbr: response.data.data.cer_nmbr,
                client_nm: response.data.data.client_nm,
                company_nm: response.data.data.company_nm,
                employee_code: response.data.data.employee_code,
                token: response.data.data.token,
              }

              sessionStorage.setItem('user_type', dataUser.user_type)
              sessionStorage.setItem('login_user', dataUser.cer_nmbr)
              sessionStorage.setItem('client_nm', dataUser.client_nm)
              sessionStorage.setItem('company_nm', dataUser.company_nm)
              sessionStorage.setItem('employe_code', dataUser.employee_code)
              sessionStorage.setItem('token', dataUser.token)
            } else {
              const dataGroup = {
                user_type: response.data.data.user_type,
                group_nmbr: response.data.data.group_nmbr,
                token: response.data.data.token,
              }
              sessionStorage.setItem('user_type', dataGroup.user_type)
              sessionStorage.setItem('login_user', dataGroup.group_nmbr)
              sessionStorage.setItem('token', dataGroup.token)
            }
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
      if (sessionStorage.getItem('token') != null) {
        axios
          .get('http://202.148.5.146:8003/api/auth',
            { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
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
