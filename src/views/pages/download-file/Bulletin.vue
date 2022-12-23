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
        :mobile-breakpoint="0"
        class="font-weight-semibold"
      >
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
          file: 'Buletin SiTAMPAN Januari 2017',
          type: 3,
          url: 'https://drive.google.com/file/d/1taKCHXA47IB8AOi3leRjgSYmd0kphXqc/view?usp=share_link',
        },
        {
          file: 'Buletin SiTAMPAN Januari 2018',
          type: 3,
          url: 'https://drive.google.com/file/d/1a3sbDM-wcqW2aWeUEvQ3U5CSjbAGQ749/view?usp=share_link',
        },
        {
          file: 'Buletin SiTAMPAN Januari 2019',
          type: 3,
          url: 'https://drive.google.com/file/d/1D-gEGXlfafuhO-AJT3tH8ptTLmbudLZy/view?usp=share_link',
        },
        {
          file: 'Buletin SiTAMPAN Juli 2019',
          type: 3,
          url: 'https://drive.google.com/file/d/1slbyqHQR486Hf2SNEGKJ87tFAg7KFY16/view?usp=share_link',
        },
        {
          file: 'Buletin SiTAMPAN Juli 2020',
          type: 3,
          url: 'https://drive.google.com/file/d/17AlRS03rjFzip7SnnrSAVXhGjLrE9IU4/view?usp=share_link',
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
