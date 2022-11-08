<template>
  <div>
    <!-- Filter Data -->
    <v-card
      class="mb-8 elevation-0"
    >
      <v-card-title>
        <h4
          class="font-weight-semibold"
          color="accent"
        >
          Harga Unit Per Jenis Investasi 1 Bulan Terakhir
        </h4>
      </v-card-title>
      <div
        id="chart"
      >
        <apexchart
          type="area"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </v-card>
  </div>
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
      temp: [],
      titles: [],
      filter: '',
      series: [],
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
          type: 'number',
        },
        tooltip: {
          x: {
            format: 'YYYY-MM-DD',
          },
        },
      },
      loading: false,
    }
  },

  created() {
    this.getDate()
  },

  methods: {
    getDate() {
      this.series = []
      this.titles = []
      axios.get(`http://202.148.5.146:8003/api/hargaunitbydays/${10}`)
        .then(res => {
        // filter by date (efctv_dt)
          const { data } = res.data

          for (let i = 0; i < data.length; i++) {
            if (this.titles.length > 0) {
              if (!this.titles.includes(data[i].inv_type_nm)) {
                this.titles.push(data[i].inv_type_nm)
                this.series.push({ name: data[i].inv_type_nm, data: [parseInt(data[i].price, 10)] })
                for (let j = 0; j < this.series.length; j++) {
                  if (this.series[j].name === data[i].inv_type_nm) {
                    this.series[j].data.push(parseInt(data[i].price, 10))
                  }
                }
              } else if (this.titles.includes(data[i].inv_type_nm)) {
                for (let j = 0; j < this.series.length; j++) {
                  if (this.series[j].name === data[i].inv_type_nm) {
                    this.series[j].data.push(parseInt(data[i].price, 10))
                  }
                }
              }
            } else {
              this.titles.push(data[i].inv_type_nm)
              this.series.push({ name: data[i].inv_type_nm, data: [parseInt(data[i].price, 10)] })
            }
          }

          console.log(this.series, res.data.data.length)

          // for (let i = 0; i < res.data.data.length; i++) {
          //   if (this.titles !== null) {
          //     if (!this.titles.includes(res.data.data[i].inv_type_nm)) {
          //       this.titles.push(res.data.data[i].inv_type_nm)
          //       this.series.push({ name: res.data.data[i].inv_type_nm, price: res.data.parseInt(data[i].price, 10) })
          //     }
          //   } else {
          //     this.titles.push(res.data.data[i].inv_type_nm)
          //     this.series.push({ name: res.data.data[i].inv_type_nm, price: res.data.parseInt(data[i].price, 10) })
          //   }
          // }

          // for (let j = 0; j < this.series.length; j++) {
          //   this.items.push({ name: this.series[j].title, price: this.series[j].price })
          //   this.series.push({ name: this.series[j].title, data: [this.series[j].price] })
          // }
          console.log(this.items)
        })
    },

    // getData() {
    //   axios
    //     .get(`http://202.148.5.146:8003/api/hargaunit/${this.filter}`)
    // },
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
    color: #2B2C3E;
  }

.table {
  width: 100%;
}
/* @import'~bootstrap/dist/css/bootstrap.css'; */
</style>
