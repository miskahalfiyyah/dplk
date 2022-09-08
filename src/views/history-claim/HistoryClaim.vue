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
    <v-card>
      <history-table></history-table>
    </v-card>
  </v-section>
</template>

<script>
import HistoryTable from './HistoryTable.vue'

export default {
  components: {
    HistoryTable,
  },
  setup() {

  },
}
</script>
