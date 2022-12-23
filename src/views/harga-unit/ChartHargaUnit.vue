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
          {{ `Harga Unit Per Jenis Investasi ${filter} Terakhir` }}
        </h4>
      </v-card-title>
      <div
        id="chart"
      >
        <apexchart
          type="line"
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

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      items: [],
      temp: [],
      titles: [],
      filter: this.$store.state.filter,
      value: 0,
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        colors: ['#2F80ED', '#0FC6C2', '#EB5757'],

        // markers: {
        //   size: 5,
        //   strokeColors: '#fff',
        //   shape: 'circle',
        //   hover: {
        //     size: 5,
        //   },
        // },
        xaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          x: {
            format: 'YYYY MM DD',
            show: true,
          },
        },
      },
      loading: false,
    }
  },
  watch: {
    '$store.state.filter': function () {
      console.log(this.$store.state.filter)
      this.series = []
      this.titles = []
      this.filter = this.$store.state.filter
      this.getDate()
    },
  },

  created() {
    this.getDate()
  },

  methods: {
    getDate() {
      if (this.filter === '1 bulan') {
        this.value = 1
      }
      if (this.filter === '3 bulan') {
        this.value = 2
      }
      if (this.filter === '6 bulan') {
        this.value = 3
      }
      if (this.filter === '1 tahun') {
        this.value = 4
      }
      if (this.filter === '3 tahun') {
        this.value = 5
      }
      if (this.filter === '5 tahun') {
        this.value = 6
      }
      this.series = []
      this.titles = []
      axios.get(`http://202.148.5.146:8003/api/hargaunitbyfilter/${this.value}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .then(res => {
        // filter by date (efctv_dt)
          const { data } = res.data

          for (let i = 0; i < data.length; i++) {
            if (this.titles.length > 0) {
              if (!this.titles.includes(data[i].inv_type_nm)) {
                this.titles.push(data[i].inv_type_nm)
                this.series.push({ name: data[i].inv_type_nm, data: [parseFloat(data[i].price.replace(',', ''), 31)] })
                for (let j = 0; j < this.series.length; j++) {
                  if (this.series[j].name === data[i].inv_type_nm) {
                    this.series[j].data.push(parseFloat(data[i].price.replace(',', ''), 31))
                  }
                }
              } else if (this.titles.includes(data[i].inv_type_nm)) {
                for (let j = 0; j < this.series.length; j++) {
                  if (this.series[j].name === data[i].inv_type_nm) {
                    this.series[j].data.push(parseFloat(data[i].price.replace(',', ''), 31))
                  }
                }
              }
            } else {
              this.titles.push(data[i].inv_type_nm)
              this.series.push({ name: data[i].inv_type_nm, data: [parseFloat(data[i].price.replace(',', ''), 31)] })
            }
          }
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
