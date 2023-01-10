<template>
  <v-card>
    <v-card-title class="font-weight-semibold">
      Rekap Manfaat
    </v-card-title>
    <v-card
      class="mt-1"
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
        :headers="headerRekapManfaat"
        :items="rekapManfaat"
        class="font-weight-semibold"
      >
        <template #[`item.doc`]="{item}">
          <a
            href="#"
            @click="excel"
          ><v-icon color="primary">{{ mdiDownload }}</v-icon></a>
          <!-- <div v-html="item.url"></div> -->
        </template>

        <!-- status -->
        <template #[`item.type`]="{item}">
          <v-chip
            small
            :color="statusColor[type[item.type]]"
            class="font-weight-medium"
          >
            {{ type[item.type] }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script>
import { mdiDownload } from '@mdi/js'
import axios from 'axios'
import { Renderer } from 'xlsx-renderer'
import { saveAs } from 'file-saver'
import moment from 'moment'

// import * as XLSX from 'xlsx'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Excel: 'success',
      /* eslint-enable key-spacing */
    }

    return {
      type: {
        3: 'Excel',
      },
      statusColor,
      mdiDownload,

      // viewModel: {
      //   excel: [],
      //   tgl: [],
      // },
    }
  },
  data() {
    return {
      search: '',
      headerRekapManfaat: [
        { text: 'FILE', value: 'file' },
        { text: 'TYPE', value: 'type' },
        { text: 'DOWNLOAD', value: 'doc' },
      ],
      rekapManfaat: [
        {
          file: 'Rekap Manfaat',
          type: 3,
          doc: '/files/rekapmanfaat-template.xlsx',
        },
      ],
    }
  },
  methods: {
    async excel() {
      await axios
        .get(`http://202.148.5.146:8003/api/rekapmanfaat/${sessionStorage.getItem('login_user')}`)
        .then(async res => {
          const viewModel = { tgl: moment(Date.now()).format('D M Y'), data: res.data.data }

          fetch('/files/rekapmanfaat-template.xlsx')

          // 2. Get template as ArrayBuffer.
            .then(response => response.arrayBuffer())

          // 3. Fill the template with data (generate a report).
            .then(buffer => new Renderer().renderFromArrayBuffer(buffer, viewModel))

          // 4. Get a report as buffer.
            .then(report => report.xlsx.writeBuffer())

          // 5. Use `saveAs` to download on browser site.
            .then(buffer => saveAs(new Blob([buffer]), `${moment(Date.now()).format('Y-M-D')}_report.xlsx`))

          // Handle errors.
            .catch(err => console.log('Error writing excel export', err))
        })
    },
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
