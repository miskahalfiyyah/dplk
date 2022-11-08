<template>
  <div>
    <div>
      <h3
        class="title font-weight-bold mt-8 mx-4"
      >
        Formulir
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
        <!-- <template #[`item.url`]=" { url } ">
          <a
            href="url"
            target="_blank"
          >
            <v-icon
              small
              :color="iconDownload[icon[item.icon]]"
            >
              {{ icon[item.icon] }}
            </v-icon>
          </a>
        </template> -->

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

    // const iconDownload = {
    //   icon: mdiDownload,
    // }

    return {
      type: {
        3: 'PDF',
      },
      statusColor,

      // iconDownload,
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
          file: 'Formulir Penarikan Dana',
          type: 3,
          url: 'https://drive.google.com/file/d/1AtYfz6iYybwOjEgoLz2hVW3J-eq6-T1H/view?usp=sharing',
        },
        {
          file: 'Formulir Perubahan Pilihan Investasi',
          type: 3,
          url: 'https://drive.google.com/file/d/1OzDhmvzXOgLAIzu0Y1qXB1qM4hhFHevv/view?usp=sharing',
        },
        {
          file: 'Formulir Mutasi',
          type: 3,
          url: 'https://drive.google.com/file/d/1RSIJ79uPSe8cVUlCsF0-ILS7SKBj_oey/view?usp=sharing',
        },
        {
          file: 'Formulir Data Peserta',
          type: 3,
          url: 'https://drive.google.com/file/d/1AtYfz6iYybwOjEgoLz2hVW3J-eq6-T1H/view?usp=sharing',
        },
        {
          file: 'Formulir Pembayaran Manfaat Pensiun PPUKP',
          type: 3,
          url: 'https://drive.google.com/file/d/1KgsjP0exJ5x2wv0YZvZ0lxvFDIRfj3OW/view?usp=sharing',
        },
        {
          file: 'Formulir Pengalihan Dana',
          type: 3,
          url: 'https://drive.google.com/file/d/1FxcHUiDTkv4zvlKOcZ8NmFXY3IzuZ8kl/view?usp=sharing',
        },
        {
          file: 'Formulir Pendaftaran Pemberi kerja',
          type: 3,
          url: 'https://drive.google.com/file/d/1CRJkIntkOxyTR_ZQcnx4it7MOte1dO7I/view?usp=sharing',
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
