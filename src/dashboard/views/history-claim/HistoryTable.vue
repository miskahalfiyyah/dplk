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
        { text: 'NO. REGITS', value: 'registration_nmbr' },
        { text: 'TGL TRANSAKSI', value: 'tgl_transaksi' },
        { text: 'JUMLAH DIBAYAR', value: 'jumlah_dibayar' },
        { text: 'LUMPSUM', value: 'Lumpsum' },
        { text: 'ANUITAS', value: 'Anuitas' },
        { text: 'LUMPSUM TRANSFER DATE', value: 'Lumpsum_Transfer_Date' },
        { text: 'ANUITAS TRANSFER DATE', value: 'Anuitas_Transfer_Date' },
        { text: 'JENIS TRANSAKSI', value: 'Jenis_Transaksi' },
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
        .get(`http://202.148.5.146:8003/api/rekapmanfaat/${localStorage.getItem('cer_nmbr')}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
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
