<template>
  <v-section>
    <!-- Filter Data -->
    <v-card
      class="mb-8 elevation-0"
    >
      <v-card-title>
        <h4
          class="font-weight-semibold"
          color="accent"
        >
          Filter Data
        </h4>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="filter"
            type="date"
            outlined
            hide-details
            class="mb-3"
          >
          </v-text-field>

          <v-btn
            block
            color="primary"
            class="mt-6"
          >
            Filter
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- Table -->
    <v-card class="elevation-3 mb-10 mt-10">
      <v-data-table
        hide-default-footer
        disable-sort
        :headers="headerInvestasi"
        :items="investasi"
        class="table-rounded"
      >
      </v-data-table>
    </v-card>

    <!-- Chart -->
    <v-card class="elevation-3">
      <div id="chart">
        <apexchart
          type="area"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </v-card>
  </v-section>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
import { mdiCalendarMonthOutline } from '@mdi/js'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      search: '',
      headerInvestasi: [
        { text: 'Jenis Investasi', value: 'jenis_investasi' },
        { text: 'Harga', value: 'arga' },
      ],
      investasi: [
        {
          jenis_investasi: 'DPLK TM - Pasar Uang',
          harga: '30.387.990.00',
        },
        {
          jenis_investasi: 'DPLK TM - Saham',
          harga: '30.387.990.00',
        },
        {
          jenis_investasi: 'DPLK TM - Pendapatan Tetap',
          harga: '30.387.990.00',
        },
      ],
      series: [{
        name: 'DPLK TM - Pasar Uang',
        data: [31, 40, 28, 51, 42, 109, 100, 60, 80, 50],
      },
      {
        name: 'DPLK TM - Saham',
        data: [11, 32, 45, 32, 34, 52, 41, 60, 80, 50],
      },
      {
        name: 'DPLK TM - Pendapatan Tetap',
        data: [20, 12, 50, 35, 40, 52, 55, 60, 80, 50],
      }],
      colors: ['#2F80ED', '#EB5757', '#0FC6C2'],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 0,
            opacityFrom: 0.8,
            opacityTo: 0.1,
            stops: [0, 90, 100],
          },
        },
        xaxis: {
          categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    }
  },

  setup() {
    return {
      icons: {
        mdiCalendarMonthOutline,
      },
    }
  },
}
</script>
