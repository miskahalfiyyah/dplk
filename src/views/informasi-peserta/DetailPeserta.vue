<template>
  <v-section>
    <!-- <loader
      :active="loaderActive"
    /> -->
    <v-alert
      class="mb-8"
      text
      type="warning"
      outlined
    >
      <strong>Data Anda belum lengkap.</strong> Silahkan melengkapi data terlebih dahulu untuk dapat mengakses keseluruhan aplikasi SiPerdana.
      <router-link
        to="/pengkinian-data"
        class="text-decoration-none"
      >
        <v-btn
          class=""
          small
          color="warning"
        >
          Pengkinian Data
        </v-btn>
      </router-link>
    </v-alert>
    <!-- pofile Peserta -->
    <div class="profile d-flex">
      <div
        class="me-6"
      >
        <v-img
          width="120"
          class="rounded"
          src="../../assets/images/avatars/1.png"
        ></v-img>
      </div>

      <!-- upload photo -->
      <!-- <div>
        <v-btn
          small
          outlined
          color="primary"
          class="me-3 mt-5"
          @click="$refs.refInputEl.click()"
        >
          <span class="">Upload new photo</span>
        </v-btn>

        <input
          ref="refInputEl"
          type="file"
          accept=".jpeg,.png,.jpg,GIF"
          :hidden="true"
        />
      </div> -->
    </div>
    <v-row class="mt-10">
      <!-- basic -->
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title class="font-weight-semibold">
            Data Peserta
          </v-card-title>
          <v-divider></v-divider>
          <demo-simple-table-basic></demo-simple-table-basic>
        </v-card>
      </v-col>
      <!-- Card peserta -->
      <div
        id="capture"
        class="greeting-card mt-3 mx-auto"
      >
        <v-img
          v-for="item in items"
          id="member-card"
          :key="item.cer_nmbr"
          src="@/assets/images/misc/card.svg"
        >
          <v-row class="ma-0 pa-0 mt-2">
            <v-col
              cols="8"
              class=""
            >
              <v-img
                width="60"
                class="rounded"
                src="../../assets/images/avatars/1.png"
              ></v-img>
              <h4
                class="font-weight-semibold white--text mb-1 mt-3"
                style="letter-spacing: 2.5px; color: white !important; font-family: 'IBM Plex Mono', monospace;"
              >
                {{ item.cer_nmbr }}
              </h4>
              <h6
                style="letter-spacing: 2.5px; color: white !important; font-family: 'IBM Plex Mono', monospace;"
                class="font-weight-regular white--text text-xs pt-0 mb-1"
              >
                {{ item.client_nm }}
              </h6>
              <h6
                class="font-weight-regular white--text"
                style="color: white !important; font-family: 'IBM Plex Mono', monospace;"
              >
                Exp {{ item.retirement_dt }}
              </h6>
              <!-- <div class="fix-width">

              </div> -->
            </v-col>
            <v-col
              cols="4"
              style="position: relative"
            >
              <qrcode-vue
                :value="value"
                :size="size"
                level="L"
                class="qr-potition"
              ></qrcode-vue>
            </v-col>
            <!-- <a
          id="btnd"
          class="float-end white--text mt-n6 mx-3 mt-10"
          style="width: 80px;
                height: 26px;
                border: 1px solid white;
                border-radius: 5px;
                font-size: 10px;
                padding: 4px 13px 4px 13px;"
          @click="downloadPDF"
        >
          Download
        </a> -->
          </v-row>
        </v-img>
        <v-btn
          id="btnd"
          class="mt-10"
          style="margin-left: 50px"
          color="success"
          @click="downloadPDF"
        >
          <v-icon
            color="white"
            class="rounded mx-1"
          >
            {{ icons.mdiDownload }}
          </v-icon>
          Simpan Kartu
        </v-btn>
      </div>
    </v-row>
  </v-section>
</template>

<script>
import axios from 'axios'
import { mdiDownload } from '@mdi/js'

// import moment from 'moment'
import QrcodeVue from 'qrcode.vue'

// import Loader from '../../components/Loader.vue'
// import loaderMixin from '../../mixins/loader'

// import VueQrcode from 'vue-qrcode'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

// import CardPeserta from './CardPeserta.vue'
import DemoSimpleTableBasic from '../simple-table/demos/DemoSimpleTableBasic.vue'

export default {
  components: {
    DemoSimpleTableBasic,

    QrcodeVue,

    // CardPeserta,

    // Loader,

    // VueQrcode,
  },
  setup() {
    return {
      icons: {
        mdiDownload,
      },
    }
  },

  // mixins: [loaderMixin],
  data() {
    return {
      items: [],
      value: 'http://192.168.101.143:8081/informasi-peserta',
      size: 40,

      dataUrl: null,

      // loaderActive: true,
    }
  },

  created() {
    // this.showLoader()
    this.loadData()
  },
  methods: {
    //  API
    loadData() {
      axios
        .get(`http://202.148.5.146:8003/api/peserta/${2000267}`)
        .then(response => {
          // console.log(response.data)
          this.items = response.data.data

          // this.items.retirement_dt = moment(this.items.retirement_dt).format('DD-MM-YYYY')

          // this.hideLoader()
        })
        .catch(error => {
          console.log(error)

          // this.error = true
        })
    },
    downloadPDF() {
      // document.getElementById('btnd').remove()
      domtoimage.toBlob(document.getElementById('member-card')).then(blob => {
        saveAs(blob, 'kartu-peserta-dplk.png')
      })
    },

    // onDataUrlChange(dataUrl) {
    //   this.dataUrl = dataUrl
    // },
  },
}

</script>

<style lang="scss" scoped>

.qr-potition {
  width: 50% !important;
  position: absolute;
  top: 100px;
  left: 30px;
}
.greeting-card {
  // box-shadow: none !important;
  // background-color: #F0F7FF !important;
  border-radius: 30px !important;
  width: 275px !important;
  height: 175px !important;
  // width: 100% !important;
}

h3 h6 {
  font-family: 'IBM Plex Mono', monospace;
}
// .bg-transparent {
//   color:  !important;
// }
</style>
