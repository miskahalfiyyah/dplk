<template>
  <div>
    <div>
      <h3
        class="title font-weight-bold mt-8 mx-4"
      >
        Bulletin
      </h3>
    </div>
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
        class="font-weight-semibold"
      >
        <!-- icon -->
        <!-- icon -->
        <template #[`item.url`]="{item}">
          <a
            :href="item.url"
            target="_blank"
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
  </div>
</template>

<script>
import { mdiDownload } from '@mdi/js'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      PDF: 'error',
      /* eslint-enable key-spacing */
    }

    const iconDownload = {
      icon: mdiDownload,
    }

    return {
      type: {
        3: 'PDF',
      },
      statusColor,
      iconDownload,
      mdiDownload,
    }
  },
  data() {
    return {
      search: '',
      headerInvestasi: [
        { text: 'FILE', value: 'file' },
        { text: 'TYPE', value: 'type' },
        { text: 'DOWNLOAD', value: 'url' },
      ],
      investasi: [
        {
          file: 'Fund Fact Sheet Desember 2021',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Juni 2021',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Desember 2020',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Desember 2020',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Desember 2019',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Juni 2019',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Juni 2018',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Desember 2018',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Desember 2017',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Factsheet Juni 2017',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Juni 2016',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Factsheet Des 2016',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Juni 2015',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Desember 2015',
          type: 3,
          url: '',
        },
      ],
    }
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
</style>e
