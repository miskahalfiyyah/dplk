<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-3">
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Verifikasi Email 🔐
          </p>
          <p class="mb-2">
            Link akan dikirim ke email anda untuk reset password
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              outlined
              placeholder="Masukan email"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-btn
              block
              color="primary"
              class="mt-6"
              :loading="loading"
              :disabled="loading"
              @click="sendEmail"
            >
              Submit
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <router-link to="/login">
            Kembali ke login
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
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
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import Swal from 'sweetalert2/dist/sweetalert2'

// import { ref } from '@vue/composition-api'
import axios from 'axios'

// import { response } from 'express'

export default {
  data() {
    return {
      loader: null,
      loading: false,
      email: '',
      message: '',
    }
  },
  setup() {
    return {
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },

  // watch: {
  //   loader() {
  //     const l = this.loader
  //     this[l] = !this[l]

  //     setTimeout(() => (this[l] = false), 3000)

  //     this.loader = null
  //   },
  // }, // queryparameter
  methods: {
    sendEmail() {
      sessionStorage.removeItem('reset_pass_token')
      axios
        .get('http://202.148.5.146:8003/api/resetcheckemail', this.email)
        .then(res => {
          const cerNmbr = res.data.data.cer_nmbr
          const resetToken = res.data.data.pass_reset_token

          axios
            .post(`http://sendmail.pertalife.com/api/forgotpass/?cer_nmbr=${cerNmbr}&email=${this.email}&token=${resetToken}`).then(response => {
              this.message = response.data
              Swal.fire({
                title: 'Berhasil',
                text: 'Link sudah dikirim ke email untuk reset password',
                icon: 'success',
                confirmButtonText: 'Check Email Anda',
                confirmButtonColor: '#41b882',
              })
            })
        })
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
