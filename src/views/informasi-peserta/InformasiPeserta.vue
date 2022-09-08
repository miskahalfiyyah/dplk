<template>
  <v-section>
    <v-card
      color="primary"
      class="mb-8"
    >
      <v-card-title>
        <h3
          class="font-weight-semibold"
          style="color: white !important"
        >
          Selamat Datang, Eko
        </h3>
      </v-card-title>
      <v-card-subtitle>
        <h4
          class="font-weight-light"
          style="color: white !important"
        >
          Selamat beraktivitas!
        </h4>
      </v-card-subtitle>
    </v-card>

    <!-- Alert Pengkinian Data -->
    <v-alert
      class="mb-8"
      dense
      text
      type="error"
    >
      <strong>Data Anda belum lengkap.</strong> Silahkan melengkapi data terlebih dahulu untuk dapat mengakses keseluruhan aplikasi SiPerdana
      <router-link
        to="/pengkinian-data"
        class="text-decoration-none"
      >
        <v-btn
          class="mx-5"
          small
          color="error"
        >
          Pengkinian Data
        </v-btn>
      </router-link>
    </v-alert>

    <v-row>
      <v-col
        cols="12"
      >
        <detail-peserta></detail-peserta>
      </v-col>
    </v-row>
  </v-section>
</template>

<script>
// eslint-disable-next-line object-curly-newline

// demos
import DetailPeserta from './DetailPeserta.vue'

export default {
  components: {
    DetailPeserta,
  },
}
</script>
