<template>
  <v-form>
    <v-alert
      id="alert"
      class="mb-8"
      outlined
      type="success"
      text
      style="display: none"
    >
      <b>Data berhasil disimpan.</b> Data yang berhasil disimpan akan dilakukan konfirmasi terlebih dahulu dan akan di verifikasi H+1.
    </v-alert>
    <!-- pofile Peserta -->
    <div class="profile d-flex">
      <div
        class="me-6"
      >
        <v-img
          v-if="url == null"
          width="120"
          class="rounded"
          src="../../assets/images/avatars/1.png"
        ></v-img>
        <v-img
          v-else
          width="120"
          class="rounded"
          :src="url"
        ></v-img>
      </div>

      <!-- upload photo -->
      <div>
        <v-btn
          small
          outlined
          color="primary"
          class="me-3 mt-5"
        >
          <label
            for="foto_profil"
            class="btn btn--primary"
          >Select Image</label>
        </v-btn>

        <input
          id="foto_profil"
          type="file"
          style="visibility:hidden; width: 130px !important;"
          accept=".jpeg,.png,.jpg,GIF"
          :hidden="false"
          @change="onFileChange"
        />
      </div>
    </div>

    <!-- Form Peserta -->
    <v-row class="mt-10">
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-title class="font-weight-semibold">
            Data Peserta
          </v-card-title>
          <v-divider></v-divider>
          <div class="mx-5 mt-5">
            <v-row>
              <!-- No. Pegawai -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="noPegawai"
                >No. Pegawai</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="noPegawai"
                  v-model="items.cer_nmbr"
                  :value="`${items.cer_nmbr}`"
                  outlined
                  dense
                  hide-details
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Nama Perusahaan -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="namaPerusahaan"
                >Nama Perusahaan</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="namaPerusahaan"
                  v-model="items.company_nm"
                  :value="`${items.company_nm}`"
                  outlined
                  dense
                  hide-details
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Nama Lengkap -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="namaLengkap"
                >Nama Lengkap</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="namaLengkap"
                  v-model="items.client_nm"
                  :value="`${items.client_nm}`"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Email -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="email"
                >Email</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="email"
                  v-model="items.email_addr"
                  :value="`${items.email_addr}`"
                  outlined
                  dense
                  hide-details
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- No Handphone -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="noHp"
                >No. Handphone</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="noHp"
                  v-model="items.no_hp"
                  :value="`${items.no_hp}`"
                  type="number"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- No. KTP -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="noKTP"
                >No. KTP</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="noKTP"
                  v-model="items.no_ktp"
                  :value="`${items.no_ktp}`"
                  type="number"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- No. NPWP -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="noNPWP"
                >No. NPWP</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="noNPWP"
                  v-model="items.no_npwp"
                  :value="`${items.no_npwp}`"
                  type="number"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Tanggal Lahir -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="tglLahir"
                >Tanggal Lahir</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="tglLahir"
                  v-model="items.birth_dt"
                  :value="`${items.birth_dt}`"
                  type="date"
                  outlined
                  dense
                  disabled
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Nama Ibu Kandung -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="namaIbu"
                >Nama Ibu Kandung</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="namaIbu"
                  v-model="items.nm_ibu"
                  :value="`${items.nm_ibu}`"
                  type="text"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Alamat Rumah -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="alamatRumah"
                >Alamat Rumah</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-textarea
                  id="alamatRumah"
                  v-model="items.address1"
                  :value="`${items.address1}, ${items.city}, ${items.province_nm}, ${items.province_nmbr}`"
                  type="text"
                  outlined
                  dense
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <!-- Alamat Surat Menyurat -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="alamatSurat"
                >Alamat Surat Menyurat</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-textarea
                  id="alamatSurat"
                  v-model="items.address2"
                  :value="`${items.address2}`"
                  type="text"
                  outlined
                  dense
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <!-- Alamat NPWP -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="alamatNPWP"
                >Alamat NPWP</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-textarea
                  id="alamatNPWP"
                  type="text"
                  outlined
                  dense
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <!-- Tanggal Mulai Kepesertaan -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="tglMulai"
                >Tanggal Mulai Kepesertaan</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="tglMulai"
                  disabled
                  :value="`${items.efctv_dt}`"
                  type="date"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Tanggal Pensiun -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="tglPensiun"
                >Tanggal Pensiun</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
              >
                <v-text-field
                  id="tglPensiun"
                  disabled
                  :value="`${items.retirement_dt}`"
                  type="date"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <!-- Nama Ahli Waris -->
              <v-col
                cols="6"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="namaAhli"
                >Nama Ahli Waris</label>
              </v-col>

              <v-col
                cols="6"
                md="9"
                class="mb-10"
              >
                <v-text-field
                  id="namaAhli"
                  v-model="items.bene_nm"
                  disabled
                  :value="`${items.bene_nm}`"
                  type="text"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
                <span style="color: red; font-size: 14px;">*Untuk pengisian <b>ahli waris</b> perlu menghubungi pihak admin melalui email.</span>
              </v-col>
            </v-row>

            <!-- Button Simpan -->
            <v-btn
              class="mt-10 mb-10 float-right"
              color="primary"
              @click="postData()"
            >
              Simpan
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
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
      if (file.size > 1048576) {
        Swal.fire({
          title: 'Error!',
          text: 'Ukuran gambar tidak boleh melebihi 1 MB',
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
