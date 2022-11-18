<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-alert
        id="alert"
        class="mb-8"
        outlined
        type="success"
        text
        style="display: none"
      >
        <b>{{ message }}</b>
      </v-alert>
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-3">
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Ubah Password 🔐
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="items.passwd"
              outlined
              placeholder="Password Baru"
              hide-details
              class="mb-3"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              :type="isPasswordVisible ? 'text' : 'password'"
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <!-- <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="Konfirmasi Password"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field> -->

            <v-btn
              block
              color="primary"
              class="mt-6"
              :loading="loading"
              :disabled="loading"
              @click="changePass"
            >
              Ubah Password
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <router-link to="/login">
            Kembali ke Login
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
import { ref } from '@vue/composition-api'
import axios from 'axios'

export default {
  data() {
    return {
      loader: null,
      loading: false,
      passwd: '',
      items: {
        passwd: '',
        pass_reset_token: '',
      },
      message: '',
    }
  },
  setup() {
    const isPasswordVisible = ref(false)
    const passwd = ref('')

    return {
      isPasswordVisible,
      passwd,

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
  // },
  created() {
    // console.log(this.$route.params.token)
    // console.log(sessionStorage.getItem('reset_pass_token'))
  },
  methods: {
    changePass() {
      axios
        .post(`http://202.148.5.146:8003/api/resetpassword/?pass_reset_token=${this.$route.query.token}&passwd=${this.items.passwd}`).then(res => {
          if (res.data.success === true) {
            this.message = res.data.data.message
            document.getElementById('alert').style.display = ''
            setTimeout(() => {
              document.getElementById('alert').style.display = 'none'
            }, 60000)
          }
        })
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
