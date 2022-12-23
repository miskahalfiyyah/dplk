<template>
  <div>
    <v-card-title>
      <h4
        class="font-weight-semibold"
        color="accent"
      >
        History Claim
      </h4>
    </v-card-title>
    <v-card
      class="mt-5"
      style="box-shadow: none !important"
    >
      <v-card-title
        style="padding: 0px !important"
      >
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table
        v-if="history.length > 0"
        :loading="loading"
        :headers="headerHistory"
        :items="history"
        disable-sort
        :mobile-breakpoint="0"
        loading-text="Loading data ..."
      >
      </v-data-table>
      <v-data-table
        v-else
        :headers="headerHistory"
        :items="history"
        disable-sort
        no-data-text="Data tidak ada."
      >
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

// import moment from 'moment'

// import { response } from 'express'

export default {
  data() {
    return {
      search: '',
      headerHistory: [
        // { text: 'NO. REGITS', value: 'Kode_registrasi' },
        // { text: 'TGL TRANSAKSI', value: 'tgl_transaksi' },
        // { text: 'JUMLAH DIBAYAR', value: 'jumlah_dibayar' },
        // { text: 'LUMPSUM', value: 'Lumpsum' },
        // { text: 'ANUITAS', value: 'Anuitas' },
        // { text: 'LUMPSUM TRANSFER DATE', value: 'Lumpsum_Transfer_Date' },
        // { text: 'ANUITAS TRANSFER DATE', value: '' },
        // { text: 'JENIS TRANSAKSI', value: 'Jenis_Transaksi' },
        { text: 'NO. PEGAWAI', value: 'cer_nmbr' },
        { text: 'KODE REGISTRASI', value: 'Kode_registrasi' },
        { text: 'REGISTRASI KLAIM', value: 'register_claim' },
        { text: 'PERSETUJUAN REGISTRASI', value: 'persetujuan_registrasi' },
        { text: 'SIAP DI PROSES', value: 'siap_di_proses' },
        { text: 'PERSETUJUAN TRANSFER', value: 'persetujuan_transfer' },
        { text: 'JUMLAH BRUTO', value: 'gross_amt' },
        { text: 'JUMLAH PAJAK', value: 'tax' },
        { text: 'JUMLAH BIAYA', value: 'fee_amt' },
        { text: 'JUMLAH BERSIH', value: 'net_amt' },
        { text: 'NAMA BANK LUMPSUM', value: 'Bank_lumpsum' },
        { text: 'NO. REKENING LUMPSUM', value: 'rek_lumpsum' },
        { text: 'NAMA REKENING LUMPSUM', value: 'rek_name_lumpsum' },
        { text: 'JUMLAH LUMPSUM', value: 'Lumpsum_amt' },
        { text: 'NO. REKENING ANUITAS', value: 'rek_anuitas' },
        { text: 'NAMA REKENING ANUITAS', value: 'rek_name_anuitas' },
        { text: 'NAMA BANK ANUITAS', value: 'Bank_anuitas' },
        { text: 'JUMLAH ANUITAS', value: 'anuitas_amt' },
      ],
      history: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true

      // API
      axios

        // .get(`http://202.148.5.146:8003/api/historyclaim/${sessionStorage.getItem('login_user')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .get(`http://202.148.5.146:8003/api/claimtracker/${sessionStorage.getItem('login_user')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .then(response => {
          response.data.data.forEach(items => {
            this.history.push(items)
            this.loading = false
          })

          console.log(this.history)
        })
        .catch(error => {
          console.log('There was an error!', error)
        })
    },
    beforeMount() {
      this.getData()
    },
  },
}
</script>

<style scoped>
::v-deep .v-data-table-header {
  color: white !important;
  background-color: #234069;
}

::v-deep .v-data-table-header span {
  color: white !important;
  /* background-color: #234069; */
}
</style>
