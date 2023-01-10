<template>
  <!-- <div class="page-title text-center py-8">
    <h2 class="text-2xl font-weight-semibold text--primary d-flex align-center justify-center">
      <span class="me-2">Under Development</span>
      <v-icon color="warning">
        {{ icons.mdiAlert }}
      </v-icon>
    </h2>
    <p class="mt-2">
      Maaf, menu ini belum bisa diakses <br> karena masih dalam tahap pengembangan
    </p>

    <div class="misc-character d-flex justify-center">
      <v-img
        class="mt-5"
        max-width="500"
        src="@/assets/images/3d-characters/error.svg"
      ></v-img>
    </div>

    <v-btn
      color="primary"
      to="/"
      class="mb-4"
    >
      Back to home
    </v-btn>
  </div> -->
  <div>
    <div class="logo-pertamina">
    </div>

    <!-- Form -->
    <v-form>
      <v-row class="">
        <v-col
          cols="12"
        >
          <v-card>
            <div
              class="d-flex"
              style="justify-content: space-between"
            >
              <v-card-title class="font-weight-semibold">
                List Peserta Booking Claim
              </v-card-title>
              <v-card-title>
                <v-img
                  class="mt-5"
                  max-width="200"
                  src="@/assets/images/misc/logo-pertamina.png"
                ></v-img>
              </v-card-title>
            </div>

            <!-- Field Form -->
            <v-divider></v-divider>
            <v-data-table
              v-if="booking.length > 0"
              :loading="loading"
              :headers="headerBooking"
              :items="booking"
              disable-sort
              :mobile-breakpoint="0"
              loading-text="Loading data ..."
            >
            </v-data-table>
            <v-data-table
              v-else
              :headers="headerBooking"
              :items="booking"
              disable-sort
              no-data-text="Data tidak ada."
            >
            </v-data-table>
            <!-- <div class="mx-5 mt-5">
              <v-row>
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
                    for="tipeKlaim"
                  >Tipe Klaim</label>
                </v-col>

                <v-col
                  cols="6"
                  md="9"
                >
                  <v-select
                    id="tipeKlaim"
                    :items="items"
                    outlined
                    dense
                    hide-details
                  ></v-select>
                </v-col>
              </v-row>

              <v-row>
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
                    :items="items"
                    outlined
                    dense
                    hide-details
                  ></v-select>
                </v-col>
              </v-row>

              <v-row>
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
                    type="text"
                    outlined
                    dense
                    hide-details
                  ></v-textarea>
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
                  >Status</label>
                </v-col>

                <v-col
                  cols="6"
                  md="9"
                  class="mb-10"
                >
                  <v-text-field
                    id="status"
                    disabled
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
            </div> -->
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-btn
        class="mt-10 mb-10 float-left"
        color="primary"
        @click="postData()"
      >
        Submit
      </v-btn> -->
    </v-form>
  </div>
</template>

<script>

// import axios from 'axios'

// import QrcodeVue from 'qrcode.vue'
// import moment from 'moment'
// import { ref } from '@vue/composition-api'
// import Swal from 'sweetalert2/dist/sweetalert2'

// import DemoSimpleTable from '../simple-table/demos/DemoSimpleTable.vue'

export default {
  components: {
    // QrcodeVue,

    // DemoSimpleTable,
  },
  data() {
    return {
      search: '',
      headerBooking: [
        { text: 'NO. PEGAWAI', value: 'cer_nmbr' },
        { text: 'NAMA PESERTA', value: 'Kode_registrasi' },
        { text: 'TANGGAL LAHIR', value: 'Kode_registrasi' },
        { text: 'NAMA PERUSAHAAN', value: 'Kode_registrasi' },
        { text: 'SALDO', value: 'Kode_registrasi' },
        { text: 'UPLOAD DOKUMEN', value: 'Kode_registrasi' },
        { text: 'KLASIFIKASI', value: 'Kode_registrasi' },
        { text: 'AJUKAN KLAIM', value: 'Kode_registrasi' },
      ],
      booking: [
        {
          cer_nmbr: '021389',
          Kode_registrasi: '10220',
        },
      ],
    }
  },

  // data() {
  //   return {
  //     items: [],
  //     value: 'http://192.168.101.143:8081/informasi-peserta',
  //     size: 40,

  //     dataUrl: null,
  //     url: null,
  //   }
  // },
  // created() {
  //   //  GET information
  //   axios
  //     .get(`http://202.148.5.146:8003/api/peserta/${sessionStorage.getItem('login_user')}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
  //     .then(response => {
  //       this.items = response.data.data[0]

  //       if (this.items.foto_profil !== '') {
  //         this.url = this.items.foto_profil
  //       }
  //       this.generateDate()

  //       return this.items
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  // methods: {
  //   generateDate() {
  //     const splitBirthDt = this.items.birth_dt.split('-')
  //     const splitRetireDt = this.items.retirement_dt.split('-')
  //     const efctvDt = this.items.efctv_dt.split('-')

  //     // create a new date from the splitted string
  //     const myBirthDate = new Date(splitBirthDt[2], splitBirthDt[1], splitBirthDt[0])
  //     const myRetireDate = new Date(splitRetireDt[2], splitRetireDt[1], splitRetireDt[0])
  //     const myEfctvDate = new Date(efctvDt[2], efctvDt[1], efctvDt[0])

  //     this.items.birth_dt = moment(myBirthDate).format('yyyy-MM-DD')
  //     this.items.retirement_dt = moment(myRetireDate).format('yyyy-MM-DD')
  //     this.items.efctv_dt = moment(myEfctvDate).format('yyyy-MM-DD')
  //   },

  //     postData() {
  //       // Generate date
  //       this.generateDate()

  //       // For sending data image
  //       const data = new FormData()
  //       // eslint-disable-next-line no-restricted-syntax
  //       for (const [key, value] of Object.entries(this.items)) {
  //         data.append(`${key}`, value)
  //         console.log(`${key}: ${value}`)
  //       }

//       // POST update data
//       axios
//         .post(`http://202.148.5.146:8003/api/peserta/update/${this.items.cer_nmbr}`, data, {
//           // header: {
//           //   'Content-Type': 'multipart/form-data',
//           // },
//         })
//         .then(response => {
//           console.log(response)
//           document.getElementById('alert').style.display = ''
//           setTimeout(() => {
//             document.getElementById('alert').style.display = 'none'
//           }, 60000)
//           console.log(response.data)
//         }).catch(error => {
//           this.errors = error.response.data.errors
//         })
//     },
//     onFileChange(e) {
//       const file = e.target.files[0]
//       if (file.size > 10000000) {
//         Swal.fire({
//           title: 'Error!',
//           text: 'Ukuran file tidak boleh melebihi 10 MB',
//           icon: 'error',
//           confirmButtonText: 'Ok',
//         }).then(res => {
//           if (res.isConfirmed) {
//             this.url = ''
//             this.items.foto_profil = ''
//           }
//         })
//       } else {
//         this.url = URL.createObjectURL(file)
//         this.items.foto_profil = e.target.files[0]
//       }
//     },
//   },
// }
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
