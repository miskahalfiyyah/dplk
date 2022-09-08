<template>
  <v-section>
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
      <div>
        <v-btn
          outlined
          color="primary"
          class="me-3 mt-5"
          @click="$refs.refInputEl.click()"
        >
          <span class="d-none d-sm-block">Upload new photo</span>
        </v-btn>

        <input
          ref="refInputEl"
          type="file"
          accept=".jpeg,.png,.jpg"
          :hidden="true"
        />
      </div>
    </div>

    <!-- Form Peserta -->
    <v-row class="mt-10">
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title class="font-weight-semibold">
            Data Peserta
          </v-card-title>
          <v-divider></v-divider>
          <v-form class="mx-5 mt-5">
            <v-row>
              <!-- No. Pegawai -->
              <v-col
                cols="3"
                md="3"
              >
                <label
                  class="font-weight-semibold"
                  for="firstname"
                >No. Pegawai</label>
              </v-col>

              <v-col
                cols="4"
                md="9"
              >
                <v-text-field
                  id="noPegawai"
                  v-model="noPegawai"
                  value="-"
                  outlined
                  dense
                  hide-details
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
                  v-model="namaPerusahaan"
                  value="PT Perta Life Insurance"
                  outlined
                  dense
                  hide-details
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
                  v-model="namaLengkap"
                  value="Eko Suryo Adiguno"
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
                  v-model="email"
                  value="eko.suryoadiguno@gmail.com"
                  outlined
                  dense
                  hide-details
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
                  v-model="noHp"
                  value="08129939839"
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
                  v-model="noKTP"
                  value="300000000018989"
                  type="text"
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
                  v-model="noNPWP"
                  type="text"
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
                  v-model="tglLahir"
                  type="text"
                  outlined
                  dense
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
                  v-model="namaIbu"
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
                  v-model="alamatRumah"
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
                  v-model="alamatSurat"
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
                  v-model="alamatNPWP"
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
                  v-model="tglMulai"
                  type="text"
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
                  v-model="tglPensiun"
                  type="text"
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
                  v-model="namaAhli"
                  type="text"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Button Simpan -->
            <v-btn
              class="mt-10 mb-10 float-right"
              color="primary"
            >
              Simpan
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <!-- Card -->
      <v-card
        class="greeting-card mx-auto mt-1"
        style="box-shadow: none !important"
      >
        <v-img src="@/assets/images/misc/card.svg">
          <v-row class="ma-0 pa-0 mt-2">
            <v-col
              cols="12"
              class=""
            >
              <v-img
                width="60"
                class="rounded"
                src="../../assets/images/avatars/1.png"
              ></v-img>
              <h3
                class="font-weight-semibold white--text text-no-wrap mb-1 mt-3"
                style="letter-spacing: 2.5px; color: white !important"
              >
                2051267
              </h3>
              <h6
                style="letter-spacing: 2.5px; color: white !important"
                class="font-weight-regular white--text text-xs text-no-wrap pt-0 mb-1"
              >
                Eko Suryo Adiguno
              </h6>
              <h6
                class="font-weight-regular text-no-wrap white--text"
                style="color: white !important"
              >
                Exp 12/05/21
              </h6>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
  </v-section>
</template>

<script>

import { ref } from '@vue/composition-api'

// import DemoSimpleTable from '../simple-table/demos/DemoSimpleTable.vue'

export default {
  components: {
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
}
</script>

<style lang="scss" scoped>
</style>
