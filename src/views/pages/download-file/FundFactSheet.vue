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
          file: 'Fund Fact Sheet Desember 2017',
          type: 3,
          url: 'https://drive.google.com/file/d/1PV3EzNV7rwJR-0wGa6blFEkYR-49jnFi/view?usp=share_link',
        },
        {
          file: 'Fund Fact Sheet Juni 2017',
          type: 3,
          url: 'https://drive.google.com/file/d/1A4VinHc03jpuZs5XAsM2_r2vmqs3eZq1/view?usp=share_link',
        },
        {
          file: 'Fund Fact Sheet Desember 2018',
          type: 3,
          url: 'https://drive.google.com/file/d/1c9bAKyEBEb4DaKt06S2DxW6U7XalK6fU/view?usp=share_link',
        },
        {
          file: 'Fund Fact Sheet Juni 2018',
          type: 3,
          url: 'https://drive.google.com/file/d/1JSCdELs5_fbb0zTNw6_UuBHqRbH42Js5/view?usp=share_link',
        },
        {
          file: 'Fund Fact Sheet Desember 2019',
          type: 3,
          url: 'https://drive.google.com/file/d/14VwUtb1wEmGzfOWTcH9KpPBLxILMCg11/view?usp=share_link',
        },
        {
          file: 'Fund Fact Sheet Juni 2019',
          type: 3,
          url: 'https://drive.google.com/file/d/1wE7Dq5obml3kayKatbLM0ETYP6HiGvwC/view?usp=share_link',
        },
        {
          file: 'Fund Fact Sheet Desember 2020',
          type: 3,
          url: 'https://drive.google.com/file/d/1bD5mm_9sBcdXvJ-1EBkmeVwonwjyEZJx/view?usp=share_link',
        },
        {
          file: 'Fund Fact Sheet September 2020',
          type: 3,
          url: '',
        },
        {
          file: 'Fund Fact Sheet Desember 2021',
          type: 3,
          url: 'https://drive.google.com/file/d/16V4bnUNY7D5GRDJFlf9oDxrRrhySyLVS/view?usp=share_link',
        },
        {
          file: 'Fund Factsheet Juni 2021',
          type: 3,
          url: 'https://drive.google.com/file/d/1yBgL887DpfqWZHykyA53g6PTbXFqPulc/view?usp=share_link',
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
