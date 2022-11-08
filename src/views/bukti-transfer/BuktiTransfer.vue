<template>
  <div class="page-title text-center py-8">
    <h2 class="text-2xl font-weight-semibold text--primary d-flex align-center justify-center">
      <span class="me-2">Under Development</span>
      <!-- <v-icon color="warning">
        {{ icons.mdiAlert }}
      </v-icon> -->
    </h2>
    <p class="mt-2">
      Maaf, menu ini belum bisa diakses <br> karena masih dalam tahap pengembangan
    </p>

    <div class="misc-character d-flex justify-center">
      <v-img
        class="mt-5"
        max-width="500"
        src="@/assets/images/3d-characters/error.svg"
      ></v-img>
    </div>

    <!-- <v-btn
      color="primary"
      to="/"
      class="mb-4"
    >
      Back to home
    </v-btn> -->
  </div>
</template>

<script>
import { mdiAlert } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAlert,
      },
    }
  },
}
</script>

  <style lang="scss">
  @import '~@/plugins/vuetify/default-preset/preset/misc.scss';
  </style>
