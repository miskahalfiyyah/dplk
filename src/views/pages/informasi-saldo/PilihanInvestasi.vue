<template>
  <v-section>
    <v-title>
      <h3
        class="title font-weight-bold mt-8 mx-4"
      >
        Informasi Akumulasi Dana Dari Awal Kepesertaan
      </h3>
    </v-title>
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
  </v-section>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headerInvestasi: [
        { text: 'investment direction', value: 'investment_direction' },
        { text: 'Pemberi Kerja', value: 'pemberi_kerja' },
        { text: 'Pengalihan dana', value: 'pengalihan_dana' },
        { text: 'Peserta', value: 'peserta' },
        { text: 'Tambahan', value: 'tambahan' },
      ],
      investasi: [
        {
          investment_direction: 'DPLK TM - Pasar Uang',
          pemberi_kerja: '10%',
          pengalihan_dana: '10%',
          peserta: '10%',
          tambahan: '10%',
        },
        {
          investment_direction: 'DPLK TM - Pendapatan Tetap',
          pemberi_kerja: '10%',
          pengalihan_dana: '10%',
          peserta: '10%',
          tambahan: '10%',
        },
        {
          investment_direction: 'DPLK TM - Saham',
          pemberi_kerja: '10%',
          pengalihan_dana: '10%',
          peserta: '10%',
          tambahan: '10%',
        },
      ],
    }
  },
}
</script>
