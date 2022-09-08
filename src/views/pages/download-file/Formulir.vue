<template>
  <v-section>
    <v-title>
      <h3
        class="title font-weight-bold mt-8 mx-4"
      >
        Formulir
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
        :headers="headerInvestasi"
        :items="investasi"
        class="table-rounded font-weight-semibold"
      >
        <!-- icon -->
        <template #[`item.icon`]="{item}">
          <v-icon
            small
            :color="iconDownload[icon[item.icon]]"
          >
            {{ icon[item.icon] }}
          </v-icon>
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
  </v-section>
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
        { text: 'File', value: 'file' },
        { text: 'Type', value: 'type' },
        { text: 'Download', value: 'download' },
      ],
      investasi: [
        {
          file: 'Penarikan Dana',
          type: 3,
          download: mdiDownload,
        },
        {
          file: 'Perubahan Pilihan Investasi',
          type: 3,
          download: mdiDownload,
        },
        {
          file: 'Formulir Mutasi',
          type: 3,
          download: mdiDownload,
        },
        {
          file: 'Employee Data Form',
          type: 3,
          download: mdiDownload,
        },
        {
          file: 'Formulir Manfaat PPUKP',
          type: 3,
          download: mdiDownload,
        },
        {
          file: 'Formulir Pengalihan Dana',
          type: 3,
          download: mdiDownload,
        },
        {
          file: 'Penarikan Dana (Revisi)',
          type: 3,
          download: mdiDownload,
        },
      ],
    }
  },
}
</script>
