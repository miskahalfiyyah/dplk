<template>
  <v-card>
    <v-card-title class="font-weight-semibold">
      Informasi Saldo Perusahaan
    </v-card-title>
    <v-divider></v-divider>

    <table
      style="box-shadow: none !important; position: relative !important;"
      class="ms-4"
    >
      <tbody
        class="font-weight-semibold elevation-0"
      >
        <tr style="height: 60px;">
          <td>
            Nama Perusahaan
          </td>
          <td class="ps-8">
            :
          </td>
          <td class="ps-8 data-user">
            {{ items.company_nm }}
          </td>
        </tr>
        <tr style="height: 60px;">
          <td>
            Jumlah Peserta Saat Ini
          </td>
          <td class="ps-8">
            :
          </td>
          <td class="ps-8 data-user">
            <p>{{ items.Total_Participant }}</p>
          </td>
        </tr>
        <tr style="height: 60px;">
          <td>
            Iuran Perusahaan
          </td>
          <td class="ps-8">
            :
          </td>
          <td class="ps-8 data-user">
            <p>{{ items.Iuran_perusahaan }}</p>
          </td>
        </tr>
        <tr style="height: 60px;">
          <td>
            Iuran Karyawan
          </td>
          <td class="ps-8">
            :
          </td>
          <td class="ps-8 data-user">
            <p>{{ items.Iuran_karyawan }}</p>
          </td>
        </tr>
        <tr style="height: 60px;">
          <td>
            Total Pembayaran Iuran
          </td>
          <td class="ps-8">
            :
          </td>
          <td class="ps-8 data-user">
            {{ items.Total_Pembayaran_Iuran }}
          </td>
        </tr>
        <tr style="height: 60px;">
          <td>
            Total Karyawan Pensiun
          </td>
          <td class="ps-8">
            :
          </td>
          <td class="ps-8 data-user">
            {{ items.Total_Karyawan_Pensiun }}
          </td>
        </tr>
        <tr style="height: 60px;">
          <td>
            Total Pensiun Dibayarkan
          </td>
          <td class="ps-8">
            :
          </td>
          <td class="ps-8 data-user">
            {{ items.Total_Pembayaran_Pensiun }}
          </td>
        </tr>
      </tbody>
    </table>
  </v-card>
</template>

<script>
import axios from 'axios'

// import moment from 'moment'

export default {
  data() {
    return {
      items: [],
    }
  },
  created() {
    //  API GET DATA USER
    axios
      .get('http://202.148.5.146:8003/api/corpeserta/10284')
      .then(response => {
        this.items = response.data.data[0]

        // this.items.efctv_dt = moment(this.items.efctv_dt).format('DD MM YYYY')
        // this.items.retirement_dt = moment(this.items.retirement_dt).format('DD MM YYYY')
        // this.items.birth_dt = moment(this.items.birth_dt).format('DD MM YYYY')

        return this.items
      })
      .catch(error => {
        console.log(error)

        // this.error = true
      })
  },

  // methods: {
  //   format_date(value) {
  //     if (value) {
  //       return moment(String(value)).format('dd-mm-yyyy')
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped>

td {
  border-bottom: none !important;
}

.data-user {
  font-weight: 400;
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // font-size: 14px;
}

// @media screen and (max-width: 400px) {
  // .data-user p {
//     width: 150px !important;
//     white-space: nowrap !important;
//     overflow: hidden !important;
//     text-overflow: ellipsis !important;
//   }
// }

</style>
