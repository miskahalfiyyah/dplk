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
            @click="clear"
          >
            clear
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
        <thead>
          <tr>
            <th style="background-color: #002B49; color: white !important; font-size: 0.75rem; font-weight: 600;">
              JENIS INVESTASI
            </th>
            <th
              style="background-color: #002B49; color: white !important; font-size: 0.75rem; font-weight: 600;"
              colspan="100%"
            >
              HARGA
            </th>
          </tr>
        </thead>
        <tbody v-if="items.length > 0">
          <tr
            v-for="(item, i) in items"
            :key="i"
          >
            <td>{{ item.title }}</td>
            <td> {{ item.price }} </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td
              colspan="2"
              style="text-align: center !important"
            >
              Data tidak ada. harap masukan tanggal terlebih dahulu
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
      filter: '',
      loading: false,
    }
  },

  methods: {
    getDate() {
      this.items = []
      axios.get(`http://202.148.5.146:8003/api/hargaunit/${this.filter}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then(res => {

        for (let i = 0; i < res.data.data.length; i++) {
          if (moment(res.data.data[i].efctv_dt).format('YYYY-MM-DD') === this.filter) {
            if (this.titles !== null) {
              if (!this.titles.includes(res.data.data[i].inv_type_nm)) {
                this.titles.push(res.data.data[i].inv_type_nm)
                this.temp.push({ title: res.data.data[i].inv_type_nm, price: res.data.data[i].price })
              }
            } else {
              this.titles.push(res.data.data[i].inv_type_nm)
              this.temp.push({ title: res.data.data[i].inv_type_nm, price: res.data.data[i].price })
            }
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
      //   .get(`http://202.148.5.146:8003/api/hargaunit/${this.filter}`).then(res => {
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
