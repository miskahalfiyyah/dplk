<template>
  <!-- Card peserta -->
  <div
    id="capture"
    class="gretting-card"
  >
    <v-img
      v-for="item in items"
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
          <h3
            class="font-weight-semibold white--text mb-1 mt-3"
            style="letter-spacing: 2.5px; color: white !important"
          >
            {{ items.cer_nmbr }}
          </h3>
          <h6
            style="letter-spacing: 2.5px; color: white !important"
            class="font-weight-regular white--text text-xs pt-0 mb-1"
          >
            {{ items.client_nm }}
          </h6>
          <h6
            class="font-weight-regular white--text"
            style="color: white !important"
          >
            Exp {{ items.retirement_dt }}
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
      class="mt-10 mx-12"
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
</template>

<script>
import axios from 'axios'
import { mdiDownload } from '@mdi/js'
import QrcodeVue from 'qrcode.vue'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

export default {
  components: {
    QrcodeVue,

    // Loader,

    // VueQrcode,
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

  setup() {
    return {
      icons: {
        mdiDownload,
      },
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
        .get(`http://202.148.5.146:8003/api/peserta/${localStorage.getItem('cer_nmbr')}`)
        .then(response => {
          // console.log(response.data)
          this.items = response.data

          // this.items.retirement_dt = moment(this.items.retirement_dt).format('DD-MM-YYYY')

          // this.hideLoader()
        })
        .catch(error => {
          console.log(error)

          // this.error = true
        })
    },
    downloadPDF() {
      document.getElementById('btnd').remove()
      domtoimage.toBlob(document.getElementById('capture')).then(blob => {
        saveAs(blob, 'kartu-peserta-dplk.png')
      })
    },
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
  box-shadow: none !important;
  // background-color: #F0F7FF !important;
  // width: 100% !important;
  // border-radius: 50px !important;
  // width: 330px !important;
  // height: 233px !important;
}
// .bg-transparent {
//   color:  !important;
// }
</style>
