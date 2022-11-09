<template>
  <div>
    <div>
      <h3
        class="title font-weight-bold mt-8 mx-4 mb-5"
      >
        Informasi Akumulasi Dana Dari Awal Kepesertaan
      </h3>
    </div>
    <div class="table">
      <v-data-table
        v-if="akumulasi.length > 0"
        :loading="loading"
        :headers="headerAkumulasi"
        :items="akumulasi"
        :mobile-breakpoint="0"
        disable-sort
        loading-text="Loading data ..."
      >
        <template slot="body.append">
          <tr
            class="font-weight-semibold"
            style="background-color: #CECFCF !important"
          >
            <th style="font-size: 14px !important; color: #234069 !important">
              TOTAL
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
      <v-data-table
        v-else
        :headers="headerAkumulasi"
        :items="akumulasi"
        disable-sort
        no-data-text="Data tidak ada."
      ></v-data-table>
    </div>

    <br />
    <div>
      <h3
        class="title font-weight-bold mt-2 mx-5 mb-5"
      >
        Informasi Jenis Investasi
      </h3>
    </div>
    <div class="table2">
      <v-data-table
        v-if="jenis.length > 0"
        :loading="loading"
        :headers="headerJenis"
        :items="jenis"
        disable-sort
        :mobile-breakpoint="0"
        loading-text="Loading data ..."
      >
        <template slot="body.append">
          <tr
            class="font-weight-semibold"
            style="background-color: #CECFCF !important"
          >
            <th style="font-size: 14px !important; color: #234069 !important">
              TOTAL
            </th>
            <!-- <th style="font-size: 14px !important; color: #234069 !important">
            {{ }}
          </th> -->
            <th style="font-size: 14px !important; color: #234069 !important">
            <!-- {{ totall.unit }} -->
            </th>
            <th style="font-size: 14px !important; color: #234069 !important">
            <!-- {{ totall.unit_price }} -->
            </th>
            <th style="font-size: 14px !important; color: #234069 !important">
              {{ totall.aset }}
            </th>
            <th style="font-size: 14px !important; color: #234069 !important">
              100%
            </th>
          </tr>
        </template>
      </v-data-table>
      <v-data-table
        v-else
        :headers="headerJenis"
        :items="jenis"
        disable-sort
        no-data-text="Data tidak ada."
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {

      // Table akumulasi dana
      headerAkumulasi: [
        { text: 'SOURCE', value: 'money_type_nm' },
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
        { text: 'INVESTMENT DIRECTION', value: 'inv_type_nm' },

        // { text: 'MONEY TYPE', value: 'money_type_nm' },
        { text: 'UNIT', value: 'unit' },
        { text: 'UNIT PRICE (Rp)', value: 'harga' },
        { text: 'ASSET (Rp)', value: 'saldo_valuasi' },
        { text: 'INVETSMENT PROPOTION', value: 'percentage' },
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
        .get(`http://202.148.5.146:8003/api/infopeserta/${localStorage.getItem('cer_nmbr')}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then(response => {
          console.log(response.data.data)
          response.data.data.set.forEach(items => {
            this.akumulasi.push(items)
            this.loading = false
          })

          this.total = response.data.data.total
        })
        .catch(error => {
          console.log('There was an error!', error)
        })

      axios
        .get(`http://202.148.5.146:8003/api/saldopeserta/${localStorage.getItem('cer_nmbr')}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then(response => {
          console.log(response.data.data)
          response.data.data.set.forEach(items => {
            this.jenis.push(items)
            this.loading = false
          })

          this.totall = response.data.data.total
        })
        .catch(error => {
          console.log('There was an error!', error)
        })
    },

    // sumField(key) {
    //   return this.akumulasi.reduce((a, b) => a + (b[key] || 0), 0)
    // },
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
/* .table {
  width: 100%;
  overflow-x: scroll !important;

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
