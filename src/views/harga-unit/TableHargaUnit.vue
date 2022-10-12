<template>
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
      hide-default-footer
      disable-sort
      :headers="headerInvestasi"
      :items="investasi"
      class="table-rounded"
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headerInvestasi: [
        { text: 'NO. REGITS', value: 'no_regist' },
        { text: 'TGL TERIMA DOKUMEN', value: 'tgl_terima_dokumen' },
        { text: 'TGL REGISTRASI', value: 'tgl_registrasi' },
        { text: 'TGL KEJADIAN', value: 'tgl_kejadian' },
        { text: 'TGL DISETUJUI', value: 'tgl_disetujui' },
        { text: 'JENIS KLAIM', value: 'jenis_klaim' },
        { text: 'KETERANGAN', value: 'keterangan' },
        { text: 'NO. VOUCHER', value: 'no_voucher' },
        { text: 'NILAI KLAIM', value: 'nilai_klaim' },
      ],
      investasi: [
        {
          no_regist: '4010291',
          tgl_terima_dokumen: '18/11/2020',
          tgl_registrasi: '20/11/2020',
          tgl_kejadian: '24/01/2020',
          tgl_disetujui: '20/11/2020',
          jenis_klaim: 'Employee Benefit',
          keterangan: 'blablabla',
          no_voucher: '2048653147',
          nilai_klaim: '30.387.990.00',
        },
        {
          no_regist: '4010291',
          tgl_terima_dokumen: '18/11/2020',
          tgl_registrasi: '20/11/2020',
          tgl_kejadian: '24/01/2020',
          tgl_disetujui: '20/11/2020',
          jenis_klaim: 'Employee Benefit',
          keterangan: 'blablabla',
          no_voucher: '2048653147',
          nilai_klaim: '30.387.990.00',
        },
      ],
    }
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
