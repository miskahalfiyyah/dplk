<template>
  <table
    style="box-shadow: none !important; position: relative !important;"
    class="mt-5 ms-4"
  >
    <tbody
      class="font-weight-semibold elevation-0"
    >
      <tr style="height: 60px;">
        <td>
          No. Peserta
        </td>
        <td class="ps-8 data-user">
          {{ items.cer_nmbr }}
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Nama Perusahaan
        </td>
        <td class="ps-8 data-user">
          <p>{{ items.company_nm }}</p>
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Nama Pegawai
        </td>
        <td class="ps-8 data-user">
          <p>{{ items.client_nm }}</p>
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Email
        </td>
        <td class="ps-8 data-user">
          <p>{{ items.email_addr }}</p>
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          No. Handphone
        </td>
        <td class="ps-8 data-user">
          {{ items.no_hp }}
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Tanggal Lahir
        </td>
        <td class="ps-8 data-user">
          {{ items.birth_dt }}
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Nama Ibu Kandung
        </td>
        <td class="ps-8 data-user">
          {{ items.bene_nm }}
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Alamat Rumah
        </td>
        <td class="ps-8 data-user">
          <p>{{ `${items.address1} ${items.address2} ${items.address3} ${items.city} ${items.province_nm}` }}</p>
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Alamat Surat Menyurat
        </td>
        <td class="ps-8 data-user">
          <p>{{ `${items.address1} ${items.address2} ${items.address3} ${items.city} ${items.province_nm}` }}</p>
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          No. KTP
        </td>
        <td class="ps-8 data-user">
          {{ items.no_ktp }}
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          No. NPWP
        </td>
        <td class="ps-8 data-user">
          <p>{{ items.no_npwp }}</p>
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Alamat NPWP
        </td>
        <td class="ps-8 data-user">
          {{ items.address3 }}
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Tgl Mulai Kepesertaan
        </td>
        <td class="ps-8 data-user">
          <p>{{ items.efctv_dt }}</p>
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Tanggal Pensiun
        </td>
        <td class="ps-8 data-user">
          {{ items.retirement_dt }}
        </td>
      </tr>
      <tr style="height: 60px;">
        <td>
          Nama Ahli Waris
        </td>
        <td class="ps-8 data-user">
          {{ items.bene_nm }}
        </td>
      </tr>
      <!-- <tr
          v-for="(item, i) in information"
          :key="i"
        >
          <td>{{ item.data }}</td>
        </tr> -->
      <!-- <tr
          v-for="(item, i) in items"
          :key="i"
        >
          <td>{{ item.cer_nmbr }}</td>
          <td class="text-left">
            {{ item.value }}
          </td>
        </tr> -->
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

// import moment from 'moment'

export default {
  // setup() {
  //   const information = [
  //     {
  //       data: 'No. Pegawai',
  //       value: this.items.cer_nmbr,
  //     },
  //     {
  //       data: 'Nama Perusahaan',
  //       value: this.company_nm,
  //     },
  //     {
  //       data: 'Nama Lengkap',
  //       value: this.client_nm,
  //     },
  //     {
  //       data: 'Email',
  //       value: this.email_adr,
  //     },
  //     {
  //       data: 'No. Hp',
  //       value: '-',
  //     },
  //     {
  //       data: 'Tanggal Lahir',
  //       value: this.birth_dt,
  //     },
  //     {
  //       data: 'Nama Ibu Kandung',
  //       value: '-',
  //     },
  //     {
  //       data: 'Alamat Rumah',
  //       value: `${this.address1} ${this.city} ${this.province_nmbr}`,
  //     },
  //     {
  //       data: 'Alamat Surat Menyurat',
  //       value: this.address2,
  //     },
  //     {
  //       data: 'No. KTP',
  //       value: '-',
  //     },
  //     {
  //       data: 'No. NPWP',
  //       value: '-',
  //     },
  //     {
  //       data: 'Alamat NPWP',
  //       value: '-',
  //     },
  //     {
  //       data: 'Tanggal Mulai Kepesertaan',
  //       value: this.efctv_dt,
  //     },
  //     {
  //       data: 'Tanggal Pensiun',
  //       value: this.retirement_dt,
  //     },
  //     {
  //       data: 'Nama Ahli Waris',
  //       value: this.bene_nm,
  //     },
  //   ]

  //   return {
  //     information,
  //   }
  // },
  data() {
    return {
      items: [],
    }
  },
  created() {
    //  API GET DATA USER
    axios
      .get(`http://202.148.5.146:8003/api/peserta/${localStorage.getItem('cer_nmbr')}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
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
