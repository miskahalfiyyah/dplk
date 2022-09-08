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
        { text: 'No. Regist', value: 'no_regist' },
        { text: 'Tgl Terima Dokumen', value: 'tgl_terima_dokumen' },
        { text: 'Tgl Registrasi', value: 'tgl_registrasi' },
        { text: 'Tgl Kejadian', value: 'tgl_kejadian' },
        { text: 'Tgl Disetujui', value: 'tgl_disetujui' },
        { text: 'Jenis Klaim', value: 'jenis_klaim' },
        { text: 'Keterangan', value: 'keterangan' },
        { text: 'No. Voucher', value: 'no_voucher' },
        { text: 'Nilai Klaim', value: 'nilai_klaim' },
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
