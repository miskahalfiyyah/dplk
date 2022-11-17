<template>
  <v-card>
    <v-card-title class="font-weight-semibold">
      Table Master List
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
        :headers="headerMasterList"
        :items="masterList"
        class="font-weight-semibold"
      >
        <template #[`item.doc`]="{item}">
          <a
            :href="item.doc"
            download
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

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Excel: 'success',
      /* eslint-enable key-spacing */
    }

    // const iconDownload = {
    //   icon: mdiDownload,
    // }

    return {
      type: {
        3: 'Excel',
      },
      statusColor,
      mdiDownload,
    }
  },
  data() {
    return {
      search: '',
      headerMasterList: [
        { text: 'FILE', value: 'file' },
        { text: 'TYPE', value: 'type' },
        { text: 'DOWNLOAD', value: 'doc' },
      ],
      masterList: [
        {
          file: 'Table Master List',
          type: 3,
          doc: '/files/masterlist-221115.xls',
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
  </style>
