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
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              placeholder="Password"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
                label="Ingatkan akun"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>

              <!-- forgot link -->
              <a
                href="javascript:void(0)"
                class="mt-1"
              >
                Forgot Password?
              </a>
            </div>

            <v-btn
              block
              color="primary"
              class="mt-6"
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
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const password = ref('')

    return {
      isPasswordVisible,
      password,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
