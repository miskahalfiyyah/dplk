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
          Selamat Datang
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
    <v-row>
      <!-- <v-col
        cols="12"
      >
        <table-harga-unit></table-harga-unit>
      </v-col> -->
      <v-col
        cols="12"
      >
        <chart-harga-unit></chart-harga-unit>
      </v-col>
    </v-row>
  </v-section>
</template>

<script>
// eslint-disable-next-line object-curly-newline

// demos
import ChartHargaUnit from './ChartHargaUnit.vue'

// import TableHargaUnit from './TableHargaUnit.vue'

export default {
  components: {
    ChartHargaUnit,

    // TableHargaUnit,
  },
}
</script>
