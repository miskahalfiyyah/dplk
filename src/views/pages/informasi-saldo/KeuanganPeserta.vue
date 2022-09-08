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
        :headers="headerAkumulasi"
        :items="akumulasi"
        class="table-rounded"
      >
      </v-data-table>
    </v-card>
    <br />
    <v-title>
      <h3
        class="title font-weight-bold mt-8 mx-5"
      >
        Informasi Jenis Investasi
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
        :headers="headerJenis"
        :items="jenis"
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
      headerAkumulasi: [
        { text: 'Source', value: 'source' },
        { text: 'Contribution', value: 'contribution' },
        { text: 'Withdraw', value: 'withdraw' },
        { text: 'Net Contribution', value: 'net_contribution' },
        { text: 'Investment Return', value: 'investment_return' },
        { text: 'Fee', value: 'fee' },
        { text: 'Asset', value: 'asset' },
      ],
      headerJenis: [
        { text: 'Investment direction', value: 'investment_direction' },
        { text: 'Money Type', value: 'money_type' },
        { text: 'Unit', value: 'unit' },
        { text: 'Unit Price (Rp)', value: 'unit_price' },
        { text: 'Asset (Rp)', value: 'asset' },
        { text: 'Investment Propotion', value: 'investment_propotion' },
        { text: 'Total', value: 'total' },
      ],
      akumulasi: [
        {
          source: 'Peserta',
          contribution: '105,100,000.00',
          withdraw: '0.00',
          net_contribution: '105,000,000.00',
          investment_return: '20,323,337.24',
          fee: '10,134,826.29',
          asset: '115,288,510.95',
        },
        {
          source: 'Peserta',
          contribution: '105,100,000.00',
          withdraw: '0.00',
          net_contribution: '105,000,000.00',
          investment_return: '20,323,337.24',
          fee: '10,134,826.29',
          asset: '115,288,510.95',
        },
      ],
      jenis: [
        {
          investment_direction: 'Total',
          money_type: 'Rp',
          unit: '-',
          unit_price: '-',
          asset: '-',
          investment_propotion: '100%',
        },
      ],
    }
  },
}
</script>
