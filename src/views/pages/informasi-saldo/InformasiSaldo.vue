<template>
  <div>
    <!-- <v-card
      style="background: #BB323C !important"
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
    </v-card> -->
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
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <keuangan-peserta></keuangan-peserta>
        </v-tab-item>

        <v-tab-item>
          <pilihan-investasi></pilihan-investasi>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import { mdiCash, mdiFinance } from '@mdi/js'
import { ref } from '@vue/composition-api'

// demos
import KeuanganPeserta from './KeuanganPeserta.vue'
import PilihanInvestasi from './PilihanInvestasi.vue'

export default {
  components: {
    KeuanganPeserta,
    PilihanInvestasi,
  },
  setup() {
    const tab = ref('')

    // tabs
    const tabs = [
      { title: 'Keuangan Peserta', icon: mdiCash },
      { title: 'Pilihan Investasi', icon: mdiFinance },
    ]

    return {
      tab,
      tabs,
      icons: {
        mdiCash,
        mdiFinance,
      },
    }
  },
}
</script>
