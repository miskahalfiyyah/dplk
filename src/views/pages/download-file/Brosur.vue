<template>
  <div>
    <div>
      <h3
        class="title font-weight-bold mt-8 mx-4"
      >
        Brosur DPLK
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
          file: 'Brosur PPIP',
          type: 3,
          url: 'https://drive.google.com/file/d/1gy-dVH1I5DhvbxqydZe3yHFGBb6qM-1i/view?usp=share_link',
        },
        {
          file: 'Brosur PPUKP',
          type: 3,
          url: 'https://drive.google.com/file/d/1EkPJBWdtsJ_agROCH3zYXT2BEONlgH_k/view?usp=share_link',
        },
        {
          file: 'Brosur PPC',
          type: 3,
          url: 'https://drive.google.com/file/d/1eVt8oX7OuvZm5URUVeFRQJ-INa65LdZl/view?usp=share_link',
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
