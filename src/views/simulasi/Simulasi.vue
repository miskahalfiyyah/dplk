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
    <v-title>
      <h2
        class="font-weight-bold mb-8"
        style="color: #726B7B"
      >
        Simulasi
      </h2>
    </v-title>
    <v-form class="multi-col-validation">
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Nama Peserta
          </h4>
          <v-text-field
            v-model="namaPeserta"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Usia Saat Ini
          </h4>
          <v-text-field
            v-model="usia"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Usia Pensiun
          </h4>
          <v-text-field
            v-model="usiaPensiun"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Masa Kerja
          </h4>
          <v-text-field
            v-model="masaKerja"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Gaji
          </h4>
          <v-text-field
            v-model="gaji"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Presentasi Iuran (%)
          </h4>
          <v-text-field
            v-model="presentasiIuran"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Besar Iuran
          </h4>
          <v-text-field
            v-model="besarIuran"
            filled
            dense
            disabled
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Kenaikan Gaji (%)
          </h4>
          <v-text-field
            v-model="kenaikanGaji"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Hasil Investasi (%)
          </h4>
          <v-text-field
            v-model="hasilInvestasi"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Dana Awal
          </h4>
          <v-text-field
            v-model="danaAwal"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <h4 class="mb-2">
            Biaya per Bulan (%)
          </h4>
          <v-text-field
            v-model="biayaBulan"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-btn color="primary">
            Hitung Perkiraan
          </v-btn>
          <v-btn
            type="reset"
            outlined
            class="mx-2"
          >
            Reset
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-section>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const namaPeserta = ref('')
    const usia = ref('')
    const usiaPensiun = ref('')
    const masaKerja = ref('')
    const gaji = ref('')
    const presentasiIuran = ref('')
    const besarIuran = ref('')
    const kenaikanGaji = ref('')
    const hasilInvestasi = ref('')
    const danaAwal = ref('')
    const biayaBulan = ref('')

    return {
      namaPeserta,
      usia,
      usiaPensiun,
      masaKerja,
      gaji,
      presentasiIuran,
      besarIuran,
      kenaikanGaji,
      hasilInvestasi,
      danaAwal,
      biayaBulan,
    }
  },
}
</script>
