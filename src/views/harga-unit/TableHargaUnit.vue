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
          Filter Data
        </h4>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-select
            v-model="period"
            :items="selectVal"
            label="Pilih filter"
            outlined
            class=""
            @change="getDate"
          ></v-select>

          <!-- <v-btn
            block
            color="primary"
            class="mt-6"
            @click="getDate"
          >
            Filter
          </v-btn> -->
          <!-- <v-btn
            block
            color="success"
            class="mt-6"
            @click="clear"
          >
            clear
          </v-btn> -->
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
        <thead>
          <tr>
            <th
              rowspan="2"
              style="background-color: #002B49; color: white !important; font-size: 0.75rem; font-weight: 600;"
            >
              JENIS INVESTASI
            </th>
            <th
              border="0"
              colspan="100%"
              style="border: 0 !important; background-color: #002B49; color: white !important; font-size: 0.75rem; font-weight: 600;"
            >
              HARGA
            </th>
          </tr>
          <tr>
            <th
              v-for="(item, i) in date"
              :key="i"
              border="0"
              style="border: 0 !important; background-color: #002B49; color: white !important; font-size: 0.75rem; font-weight: 600;"
            >
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody v-if="items.length > 0">
          <tr
            v-for="(item, i) in items"
            :key="i"
          >
            <td style="font-size: 0.8rem; font-weight: 500;">
              {{ item.title }}
            </td>
            <td
              v-for="(price, j) in item.price"
              :key="j"
              style="font-size: 0.8rem; font-weight: 500;"
            >
              {{ price }}
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td
              colspan="2"
              style="text-align: center !important"
            >
              Data tidak ada. harap pilih filter dahulu
            </td>
          </tr>
        </tbody>
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
    <!-- <v-card class="elevation-3">
      <div
        v-if="series.length > 0"
        id="chart"
      >
        <apexchart
          type="area"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </v-card> -->
  </div>
</template>

<script>

// import VueApexCharts from 'vue-apexcharts'
import { mdiCalendarMonthOutline } from '@mdi/js'
import axios from 'axios'
import moment from 'moment'

export default {
  // components: {
  //   apexchart: VueApexCharts,
  // },
  data() {
    return {
      items: [],
      temp: [],
      titles: [],
      date: [],
      period: '',
      value: 0,
      loading: false,
      selectVal: ['1 bulan', '3 bulan', '6 bulan', '1 tahun', '3 tahun', '5 tahun'],
    }
  },

  methods: {
    getDate() {
      // filter by month & year
      if (this.period === '1 bulan') {
        this.value = 1
      }
      if (this.period === '3 bulan') {
        this.value = 2
      }
      if (this.period === '6 bulan') {
        this.value = 3
      }
      if (this.period === '1 tahun') {
        this.value = 4
      }
      if (this.period === '3 tahun') {
        this.value = 5
      }
      if (this.period === '5 tahun') {
        this.value = 6
      }
      this.$store.dispatch('filter', this.period)
      axios.get(`http://202.148.5.146:8003/api/hargaunitbyfilter/${this.value}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } }).then(res => {
        let priceVal = []
        this.items = []
        this.priceVal = []
        this.titles = []
        this.temp = []
        this.date = []
        for (let i = 0; i < res.data.data.length; i++) {
          if (this.date.length > 0) {
            if (!this.date.includes(res.data.data[i].efctv_dt)) {
              this.date.push(res.data.data[i].efctv_dt)
            }
          } else {
            this.date.push(res.data.data[i].efctv_dt)
          }
          if (this.titles !== null) {
            if (!this.titles.includes(res.data.data[i].inv_type_nm)) {
              priceVal = []
              priceVal.push(res.data.data[i].price)
              this.titles.push(res.data.data[i].inv_type_nm)
              this.temp.push({ title: res.data.data[i].inv_type_nm, price: priceVal })
            } else {
              priceVal.push(res.data.data[i].price)
            }
          } else {
            priceVal.push(res.data.data[i].price)
            this.titles.push(res.data.data[i].inv_type_nm)
            this.temp.push({ title: res.data.data[i].inv_type_nm, price: priceVal })
          }
        }

        for (let j = 0; j < this.temp.length; j++) {
          this.items.push({ title: this.temp[j].title, price: this.temp[j].price })
        }
      })
    },
    clear() {
      this.loading = true
      this.items = []
      this.temp = []
      this.titles = []

      // axios
      //   .get(`http://202.148.5.146:8003/api/hargaunit/${this.period}`).then(res => {
      //     this.items = res.data.data
      //     let title = ''
      //     for (let i = 0; i < this.items.length; i++) {
      //       title = this.items[i].inv_type_nm
      //       if (!this.temp.includes(title)) {
      //         this.temp.push(title)
      //         this.loading = false
      //       }
      //     }
      //     console.log(this.temp)
      //   })
    },

    // getData() {
    //   axios
    //     .get(`http://202.148.5.146:8003/api/hargaunit/${this.period}`)
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
