<template>
  <div>
    <div>
      <h3
        class="title font-weight-bold mt-8 mx-4 mb-5"
      >
        Informasi Akumulasi Dana Dari Awal Kepesertaan
      </h3>
    </div>
    <v-data-table
      :loading="loading"
      :headers="headerAkumulasi"
      :items="akumulasi"
      hide-default-footer
      disable-sort
      fixed-header
      height="500px"
    >
      <template slot="body.append">
        <tr
          class="font-weight-semibold"
          color="error"
        >
          <th>
            Total
          </th>
          <th>{{ sumField('total_contrib') }}</th>
          <th>{{ sumField('total_distrib') }}</th>
          <th>{{ sumField('total_net_contrib') }}</th>
          <th>{{ sumField('total_earning') }}</th>
          <th>{{ sumField('total_fee') }}</th>
          <th>{{ sumField('total_acct_val') }}</th>
          <th>{{ sumField('total_unit') }}</th>
        </tr>
      </template>
    </v-data-table>
    <br />
    <div>
      <h3
        class="title font-weight-bold mt-8 mx-5 mb-5"
      >
        Informasi Jenis Investasi
      </h3>
    </div>
    <v-data-table
      :loading="loading"
      :headers="headerJenis"
      :items="jenis"
      disable-sort
      fixed-header
      height="500px"
    >
    </v-data-table>
  </div>
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
        // { text: 'SOURCE', value: 'source' },
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
        { text: 'INVESTMENT DIRECTION', value: 'inv_type' },

        // { text: 'MONEY TYPE', value: 'money_type' },
        { text: 'UNIT', value: 'unit' },
        { text: 'UNIT PRICE (Rp)', value: '' },
        { text: 'ASSET (Rp)', value: 'acct_val' },
        { text: 'INVETSMENT PROPOTION', value: 'investment_propotion' },
        { text: 'TOTAL', value: 'total' },
      ],
      jenis: [],
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
        .get(`http://202.148.5.146:8003/api/infopeserta/${sessionStorage.getItem('cer_nmbr')}`)
        .then(response => {
          response.data.data.set.forEach(items => {
            this.akumulasi.push(items)
            this.jenis.push(items)
            this.loading = false
          })

          console.log(this.akumulasi)
          console.log(this.jenis)

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
    beforeMount() {
      this.getData()
    },
    sumField(key) {
      return this.akumulasi.reduce((a, b) => a + (b[key] || 0), 0)
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
  background-color: #234069;
}

::v-deep .v-data-table-header span {
  color: white !important;
  /* background-color: #234069; */
}

</style>
