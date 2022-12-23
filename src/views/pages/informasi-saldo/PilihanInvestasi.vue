<template>
  <div>
    <div>
      <h3
        class="title font-weight-bold mt-8 mx-4 mb-5"
      >
        Informasi Akumulasi Dana Dari Awal Kepesertaan
      </h3>
    </div>
    <!-- <v-card
      class="mt-5"
      style="box-shadow: none !important"
    >
      <v-card-title
        style="padding: 0px !important"
      >
        <v-spacer></v-spacer>
      </v-card-title> -->
    <v-data-table
      v-if="investasi.length > 0"
      :loading="loading"
      disable-sort
      :headers="headerInvestasi"
      :items="investasi"
      :mobile-breakpoint="0"
      class=""
      loading-text="Loading data ..."
    >
    </v-data-table>
    <v-data-table
      v-else
      :headers="headerInvestasi"
      :items="investasi"
      disable-sort
      no-data-text="Data tidak ada."
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      headerInvestasi: [
        { text: 'INVESTMENT DIRECTION', value: 'inv_type_nm' },
        { text: 'PEMBERI KERJA (%)', value: 'pemberi_kerja' },
        { text: 'PENGALIHAN DANA (%)', value: 'pengalihan_dana' },
        { text: 'PESERTA (%)', value: 'peserta' },
        { text: 'TAMBAHAN (%)', value: 'tambahan' },
      ],
      investasi: [],
      loading: false,
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true

      //  API
      axios
        .get(`http://202.148.5.146:8003/api/pilihaninvestasi/${sessionStorage.getItem('login_user')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .then(response => {
          response.data.data.forEach(items => {
            this.investasi.push(items)
            this.loading = false
          })

          console.log(this.investasi)

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

    // format_price(value) {
    //   const val = (value / 1).toFixed(2).replace('.', ',')

    //   return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    // },
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
