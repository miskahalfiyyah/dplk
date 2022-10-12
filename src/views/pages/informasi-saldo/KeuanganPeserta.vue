<template>
  <v-section>
    <v-title>
      <h3
        class="title font-weight-bold mt-8 mx-4 mb-5"
      >
        Informasi Akumulasi Dana Dari Awal Kepesertaan
      </h3>
    </v-title>
    <v-data-table
      :loading="loading"
      :headers="headerAkumulasi"
      :items="akumulasi"
      disable-sort
      loading-text="Loading data ..."
    >
      <template slot="body.append">
        <tr
          class="font-weight-semibold"
          style="background-color: #CECFCF !important"
        >
          <th style="font-size: 14px !important; color: #234069 !important">
            Total
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ total.total_contrib }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ total.total_distrib }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ total.total_net_contrib }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ total.total_earning }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ total.total_fee }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ total.total_acct_val }}
          </th>
        </tr>
      </template>
    </v-data-table>
    <br />
    <v-title>
      <h3
        class="title font-weight-bold mt-8 mx-5 mb-5"
      >
        Informasi Jenis Investasi
      </h3>
    </v-title>
    <v-data-table
      :loading="loading"
      :headers="headerJenis"
      :items="jenis"
      disable-sort
      loading-text="Loading data ..."
    >
      <template slot="body.append">
        <tr
          class="font-weight-semibold"
          style="background-color: #CECFCF !important"
        >
          <th style="font-size: 14px !important; color: #234069 !important">
            Total
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ }}
          </th>
          <th style="font-size: 14px !important; color: #234069 !important">
            {{ totall.percentage }}
          </th>
        </tr>
      </template>
    </v-data-table>
  </v-section>
</template>

<script>
import axios from 'axios'

// import data from '../datatable-data'

// import moment from 'moment'

export default {
  data() {
    return {

      // Table akumulasi dana
      headerAkumulasi: [
        { text: 'SOURCE', value: 'peserta' },
        { text: 'CONTRIBUTION', value: 'contrib' },
        { text: 'WITHDRAW', value: 'distrib' },
        { text: 'NET CONTRIBUTION', value: 'net_contrib' },
        { text: 'INVESTMENT RETURN', value: 'earning' },
        { text: 'FEE', value: 'fee' },
        { text: 'ASSET', value: 'acct_val' },
      ],

      akumulasi: [],

      // Table jenis investasi
      headerJenis: [
        { text: 'INVESTMENT DIRECTION', value: '' },
        { text: 'MONEY TYPE', value: '' },
        { text: 'UNIT', value: '' },
        { text: 'UNIT PRICE (Rp)', value: '' },
        { text: 'ASSET (Rp)', value: '' },
        { text: 'INVETSMENT PROPOTION', value: 'percentage' },

        // { text: 'TOTAL', value: 'percentage' },
      ],
      jenis: [],
      total: [],
      totall: [],
      loading: false,
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true

      //  API get data
      axios
        .get(`http://202.148.5.146:8003/api/infopeserta/${2000267}`)
        .then(response => {
          console.log(response.data.data)
          response.data.data.set.forEach(items => {
            this.akumulasi.push(items)

            // this.jenis.push(items)
            this.loading = false

          // response.data.data.set.forEach(items => {
          //   this.akumulasi.push(items)
          // })
          // this.akumulasi = response.data.data.total
          // this.loading = false
          })

          this.total = response.data.data.total

          // console.log(this.akumulasi)
          // console.log(this.jenis)

          // this.jenis = response.data.data

          // this.items.efctv_dt = moment(this.items.efctv_dt).format('d MMMM Y')
          // this.items.retirement_dt = moment(this.items.retirement_dt).format('d MMMM Y')
          // this.items.birth_dt = moment(this.items.birth_dt).format('d MMMM Y')

          // return this.akumulasi
        })
        .catch(error => {
          console.log('There was an error!', error)

          // console.log(error.response.data)
        })

      axios
        .get(`http://202.148.5.146:8003/api/investasi/${2000267}`)
        .then(response => {
          console.log(response.data.data)
          response.data.data.forEach(items => {
            // this.akumulasi.push(items)
            this.jenis.push(items)
            this.loading = false

          // response.data.data.set.forEach(items => {
          //   this.akumulasi.push(items)
          // })
          // this.akumulasi = response.data.data.total
          // this.loading = false
          })

          this.totall = response.data.data

          // console.log(this.akumulasi)
          // console.log(this.jenis)

          // this.jenis = response.data.data

          // this.items.efctv_dt = moment(this.items.efctv_dt).format('d MMMM Y')
          // this.items.retirement_dt = moment(this.items.retirement_dt).format('d MMMM Y')
          // this.items.birth_dt = moment(this.items.birth_dt).format('d MMMM Y')

          // return this.akumulasi
        })
        .catch(error => {
          console.log('There was an error!', error)

          // console.log(error.response.data)
        })
    },
    sumField(key) {
      return this.akumulasi.reduce((a, b) => a + (b[key] || 0), 0)
    },
    beforeMount() {
      this.getData()
    },
  },
}
</script>

<style scoped>
/* #myTable {
  background-color: #234069 !important;
} */
/* .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  background: #234069 !important;
}

::v-deep .v-data-table-header {
  background: red !important;
} */

::v-deep .v-data-table-header {
  color: white !important;
  background-color: #234069 !important;
}

::v-deep .v-data-table-header span {
  color: white !important;
  /* background-color: #234069; */
}

</style>
