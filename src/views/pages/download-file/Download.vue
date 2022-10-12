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

    <v-card id="informasi-saldo">
      <!-- tabs -->
      <v-tabs
        v-model="tab"
        show-arrows
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <v-icon
            size="20"
            class="me-3"
          >
            {{ tab.icon }}
          </v-icon>
          <span>{{ tab.title }}</span>
        </v-tab>
      </v-tabs>

      <!-- tabs item -->

      <!-- Form -->
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <formulir></formulir>
        </v-tab-item>

        <!-- Bulletin -->
        <v-tab-item>
          <bulletin></bulletin>
        </v-tab-item>

        <!-- Brosur -->
        <v-tab-item>
          <brosur></brosur>
        </v-tab-item>

        <!-- laporan Keuangan -->
        <v-tab-item>
          <laporan-keuangan></laporan-keuangan>
        </v-tab-item>

        <!-- Fun Fact Sheet -->
        <v-tab-item>
          <fund-fact-sheet></fund-fact-sheet>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-section>
</template>

<script>
import {
  mdiFileDocumentOutline, mdiFileTableOutline, mdiFileImageOutline, mdiFileChartOutline, mdiFileCheckOutline,
} from '@mdi/js'
import { ref } from '@vue/composition-api'

// demos
import Formulir from './Formulir.vue'
import Bulletin from './Bulletin.vue'
import Brosur from './Brosur.vue'
import LaporanKeuangan from './LaporanKeuangan.vue'
import FundFactSheet from './FundFactSheet.vue'

export default {
  components: {
    Formulir,
    Bulletin,
    Brosur,
    LaporanKeuangan,
    FundFactSheet,
  },
  setup() {
    const tab = ref('')

    // tabs
    const tabs = [
      { title: 'Formulir', icon: mdiFileDocumentOutline },
      { title: 'Bulletin', icon: mdiFileTableOutline },
      { title: 'Brosur', icon: mdiFileImageOutline },
      { title: 'Laporan Keuangan', icon: mdiFileChartOutline },
      { title: 'Fun Fact Sheet', icon: mdiFileCheckOutline },
    ]

    return {
      tab,
      tabs,
      icons: {
        mdiFileDocumentOutline,
        mdiFileTableOutline,
        mdiFileImageOutline,
        mdiFileChartOutline,
        mdiFileCheckOutline,
      },
    }
  },
}
</script>
