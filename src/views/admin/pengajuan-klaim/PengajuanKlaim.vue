<template>
  <v-form>
    <!-- Form Pengajuan Klaim -->
    <v-row class="">
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title class="font-weight-semibold">
            Formulir Pengajuan Klaim
          </v-card-title>
          <v-divider></v-divider>
          <div class="mx-5 mt-5">
            <v-row>
              <!-- Register Date -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="registDate"
                >Tanggal Register</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="registDate"
                  value="dd/mm/yyyy"
                  type="date"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Nomor Peserta -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="nomorPeserta"
                >Nomor Peserta</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="nomorPeserta"
                  v-model="items.company_nm"
                  :value="`${items.company_nm}`"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Tipe Klaim -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="tipeKlaim"
                >Tipe Klaim</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-select
                  id="tipeKlaim"
                  v-model="items.client_nm"
                  :items="items"
                  :value="`${items.client_nm}`"
                  outlined
                  dense
                  hide-details
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <!-- Dokumen Diterima -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="dokDiterima"
                >Dokumen Diterima</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-select
                  id="dokDiterima"
                  v-model="items.client_nm"
                  :items="items"
                  :value="`${items.client_nm}`"
                  outlined
                  dense
                  hide-details
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <!-- Deskripsi -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="deskripsi"
                >Deskripsi</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-textarea
                  id="deskripsi"
                  v-model="items.address1"
                  :value="`${items.address1}`"
                  type="text"
                  outlined
                  dense
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <!-- Status -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="status"
                >Status</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
                class="mb-10"
              >
                <v-text-field
                  id="status"
                  v-model="items.bene_nm"
                  disabled
                  :value="`${items.bene_nm}`"
                  type="text"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="status"
                >Semua Kelengkapan Dokumen</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
                class="mb-10"
              >
                <input
                  id="file"
                  type="file"
                  style="width: 130px !important;"
                  accept=".pdf"
                  :hidden="false"
                  @change="onFileChange"
                />
              </v-col>

              <!-- Notes -->
              <div class="note">
                <h4 class="mt-3">
                  Notes
                </h4>
                <p class="mb-0 mt-2">
                  * Format Upload Dokumen .PDF
                </p>
                <p>
                  * File Size Maksimal 10 MB
                </p>
              </div>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Button Simpan -->
    <v-btn
      class="mt-10 mb-10 float-left"
      color="primary"
      @click="postData()"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import axios from 'axios'

// import QrcodeVue from 'qrcode.vue'
import moment from 'moment'
import { ref } from '@vue/composition-api'
import Swal from 'sweetalert2/dist/sweetalert2'

// import DemoSimpleTable from '../simple-table/demos/DemoSimpleTable.vue'

export default {
  components: {
    // QrcodeVue,

    // DemoSimpleTable,
  },
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,
    }
  },
  data() {
    return {
      items: [],
      value: 'http://192.168.101.143:8081/informasi-peserta',
      size: 40,

      dataUrl: null,
      url: null,
    }
  },
  created() {
    //  GET information
    axios
      .get(`http://202.148.5.146:8003/api/peserta/${sessionStorage.getItem('cer_nmbr')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      .then(response => {
        this.items = response.data.data[0]

        if (this.items.foto_profil !== '') {
          this.url = this.items.foto_profil
        }
        this.generateDate()

        return this.items
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    generateDate() {
      const splitBirthDt = this.items.birth_dt.split('-')
      const splitRetireDt = this.items.retirement_dt.split('-')
      const efctvDt = this.items.efctv_dt.split('-')

      // create a new date from the splitted string
      const myBirthDate = new Date(splitBirthDt[2], splitBirthDt[1], splitBirthDt[0])
      const myRetireDate = new Date(splitRetireDt[2], splitRetireDt[1], splitRetireDt[0])
      const myEfctvDate = new Date(efctvDt[2], efctvDt[1], efctvDt[0])

      this.items.birth_dt = moment(myBirthDate).format('yyyy-MM-DD')
      this.items.retirement_dt = moment(myRetireDate).format('yyyy-MM-DD')
      this.items.efctv_dt = moment(myEfctvDate).format('yyyy-MM-DD')
    },

    postData() {
      // Generate date
      this.generateDate()

      // For sending data image
      const data = new FormData()
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(this.items)) {
        data.append(`${key}`, value)
        console.log(`${key}: ${value}`)
      }

      // POST update data
      axios
        .post(`http://202.148.5.146:8003/api/peserta/update/${this.items.cer_nmbr}`, data, {
          // header: {
          //   'Content-Type': 'multipart/form-data',
          // },
        })
        .then(response => {
          console.log(response)
          document.getElementById('alert').style.display = ''
          setTimeout(() => {
            document.getElementById('alert').style.display = 'none'
          }, 60000)
          console.log(response.data)
        }).catch(error => {
          this.errors = error.response.data.errors
        })
    },
    onFileChange(e) {
      const file = e.target.files[0]
      if (file.size > 10000000) {
        Swal.fire({
          title: 'Error!',
          text: 'Ukuran file tidak boleh melebihi 10 MB',
          icon: 'error',
          confirmButtonText: 'Ok',
        }).then(res => {
          if (res.isConfirmed) {
            this.url = ''
            this.items.foto_profil = ''
          }
        })
      } else {
        this.url = URL.createObjectURL(file)
        this.items.foto_profil = e.target.files[0]
      }
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
    background-color: #F0F7FF !important;
    // width: 100% !important;
  }
  </style>
