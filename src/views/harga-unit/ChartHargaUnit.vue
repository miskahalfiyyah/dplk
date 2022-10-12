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
            @click="getDate"
          >
            Filter
          </v-btn>
          <v-btn
            block
            color="success"
            class="mt-6"
            @click="refresh"
          >
            Refresh
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- Table -->
    <v-card
      class="mb-10 mt-10"
      style="white-space: nowrap !important; overflow-x:auto"
    >
      <table
        :loading="loading"
        class="tb"
        style="width: 100%"
      >
        <tr>
          <th style="background-color: #002B49; color: white !important">
            Jenis Investasi
          </th>
          <th
            style="background-color: #002B49; color: white !important"
            colspan="100%"
          >
            Harga
          </th>
        </tr>
        <tr
          v-for="(title, i) in titles"
          :key="i"
        >
          <td>{{ title }}</td>
          <td
            v-for="(item, i) in items"
            :key="i"
          >
            {{ item.price }}
          </td>
        </tr>
        <!-- <tr>
          <td>2</td>
          <td>
            tes
          </td>
          <td>
            tes
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            tes
          </td>
          <td>
            tes
          </td>
        </tr> -->
      </table>
      <!-- <v-data-table
        hide-default-footer
        disable-sort
        :headers="headerInvestasi"
        :items="investasi"
        class=""
      >
      </v-data-table> -->
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
import axios from 'axios'
import moment from 'moment'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      items: [],
      titles: [],
      filter: '',

      headerInvestasi: [
        { text: 'JENIS INVESTASI', value: 'jenis_investasi' },
        { text: 'HARGA', value: 'arga' },
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
        data: [31, 40, 28, 51, 42, 60, 50, 65, 70, 80],
      },
      {
        name: 'DPLK TM - Saham',
        data: [25, 32, 35, 32, 34, 52, 41, 60, 40, 50],
      },
      {
        name: 'DPLK TM - Pendapatan Tetap',
        data: [20, 30, 40, 35, 40, 42, 30, 20, 30, 40],
      }],
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
        colors: ['#2F80ED', '#0FC6C2', '#EB5757'],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
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
            format: 'dd-MM-yy',
          },
        },
      },
      loading: false,
    }
  },

  mounted() {
    this.refresh()
  },

  methods: {
    getDate() {
      this.loading = true
      this.items = []
      this.titles = []
      axios.get(`http://202.148.5.146:8003/api/hargaunit/${101}`).then(res => {
        // this.items = res.data.data
        let title = ''
        for (let i = 0; i < res.data.data.length; i++) {
          if (moment(res.data.data[i].efctv_dt).format('DD-MM-YYYY') === this.filter) {
            this.items.push(res.data.data[i])
            title = res.data.data[i].inv_type_nm
            if (this.titles !== null) {
              if (!this.titles.includes(title)) {
                this.titles.push(title)
                this.loading = false
              }
            }
          }
        }

        return this.items

        // console.log(this.titles)
      })
    },
    refresh() {
      this.loading = true
      this.items = []
      this.titles = []
      axios.get(`http://202.148.5.146:8003/api/hargaunit/${101}`).then(res => {
        this.items = res.data.data
        let title = ''
        for (let i = 0; i < this.items.length; i++) {
          title = this.items[i].inv_type_nm
          if (!this.titles.includes(title)) {
            this.titles.push(title)
            this.loading = false
          }
        }
        console.log(this.titles)
      })
    },
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

<style scoped>
/* ::v-deep .v-data-table-header {
  color: white !important;
  background-color: #234069;
}

::v-deep .v-data-table-header span {
  color: white !important;
  background-color: #234069;
} */

.tb {
  border-collapse: collapse;
}
  .tb th, .tb td {
    padding: 15px; border: solid 0.5px rgb(223, 223, 223);
    color: black;
  }

.table {
  width: 100%;
}
/* @import'~bootstrap/dist/css/bootstrap.css'; */
</style>
