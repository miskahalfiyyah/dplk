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
              v-model="username"
              outlined
              placeholder="Username"
              hide-details
              class="mb-3"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="Password"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              required
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <!-- <p
              v-if="loginError"
              style="color: red"
              class="mt-3"
            >
              {{ loginErrorMessage }}
            </p> -->
            <!-- <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
                label="Ingatkan akun"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>

              <a
                href="javascript:void(0)"
                class="mt-1"
              >
                Forgot Password?
              </a>
            </div> -->
            <router-link to="/pages/privacy-policy">
              <v-btn
                block
                color="primary"
                class="mt-6"
                :loading="loading"
                :disabled="loading"
                @click="loader = 'loading'"
              >
                Login
              </v-btn>
            </router-link>
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
import { ref } from '@vue/composition-api'

export default {
  data() {
    return {
      loader: null,
      loading: false,
    }
  },
  setup() {
    const username = ref('')
    const isPasswordVisible = ref(false)
    const password = ref('')

    return {
      username,
      isPasswordVisible,
      password,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      errors: null,
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
  methods: {
    async handleSubmit() {
      axios
        .post('http://202.148.5.146:8003/api/infopeserta/2048819', { username: this.username, password: this.password })
        .then(response => {
          console.log(response)
          this.$router.push({ name: '/informasi-peserta' })
        }).catch(error => {
          this.errors = error.response.data.errors
        })
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
