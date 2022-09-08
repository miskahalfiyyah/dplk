<template>
  <v-section
    class="section"
  >
    <router-link
      to="/informasi-peserta"
      class="text-decoration-none text-center font-weight-semibold mt-3"
    >
      <p class="mt-3">
        Back to Home
      </p>
    </router-link>
    <!-- <div class="mx-auto text-center">
      <img
        src="../../../assets/images/misc/bg.svg"
        alt=""
      >
    </div> -->
    <v-container>
      <v-card
        style="box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);"
        class="mx-auto mt-2 mb-5"
        col="6"
        width="800"
      >
        <v-form class="multi-col-validation container">
          <div class="text-center mx-auto">
            <h2 class="mt-3">
              Formulir Registrasi Peserta
            </h2>
          </div>
          <v-row>
            <v-alert
              class="mx-3 font-weight-bold mt-10"
              border="left"
              color="info"
              dark
              width="780"
            >
              Informasi Skema Peserta
            </v-alert>
            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Besarnya Iuran
              </h4>
              <div
                class="d-flex"
              >
                <p
                  style="margin-bottom: 0px !important; height: 24px !important;"
                >
                  Rp.
                </p><v-text-field
                  hide-details
                ></v-text-field><p class="m-0">
                  setiap bulannya
                </p>
              </div>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Besarnya Gaji
              </h4>
              <v-radio-group
                v-model="ex7"
                column
              >
                <v-radio
                  label="Rp. 0 s/d Rp. 5 Juta"
                  value="radio-1"
                ></v-radio>
                <v-radio
                  label="Rp. >5 s/d Rp. 10 Juta"
                  value="radio-2"
                ></v-radio>
                <v-radio
                  label="Rp. >10 s/d Rp. 50 Juta"
                  value="radio-3"
                ></v-radio>
                <v-radio
                  label="Rp. >50 Juta"
                  value="radio-4"
                ></v-radio>
              </v-radio-group>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Sumber Dana
              </h4>
              <div class="d-flex">
                <v-text-field
                  hide-details
                ></v-text-field>
              </div>
            </v-col>

            <v-alert
              class="mx-3 font-weight-bold mt-10"
              border="left"
              color="info"
              dark
              width="780"
            >
              Pilihan Investasi
            </v-alert>
            <v-col
              cols="12"
            >
              <div class="d-flex">
                <v-text-field
                  hide-details
                ></v-text-field><p class="m-0">
                  % Investasi pasar uang
                </p>
              </div>
            </v-col>
            <v-col
              cols="12"
            >
              <div class="d-flex">
                <v-text-field
                  hide-details
                ></v-text-field><p class="m-0">
                  % Investasi ekuitas (saham)
                </p>
              </div>
            </v-col>
            <v-col
              cols="12"
            >
              <div class="d-flex">
                <v-text-field
                  hide-details
                ></v-text-field><p class="m-0">
                  % Investasi pendapatan tetap
                </p>
              </div>
            </v-col>

            <v-alert
              class="mx-3 font-weight-bold mt-10"
              border="left"
              color="info"
              dark
              width="780"
            >
              Pernyataan Peserta
            </v-alert>
            <v-col
              cols="12"
            >
              <p
                class="text-justify"
                style="color: #736C7C"
              >
                Dana yang dibayarkan kepada DPLK Tugu Mandiri merupakan dana yang berasal dari hasil usaha yang sah menurut peraturan pemerintah dan ditujukan untuk kepentingan program pensiun saya.<br><br> Informasi status perkawinan dan informasi ahli waris yang saya berikan adalah benar dan apabila dikemudian hari terjadi perubahan status perkawinan maka saya akan memberitahukan secara tertulis kepada DPLK Tugu Mandiri baik melalui pemberi kerja ataupun secara lansgung kepada DPLK Tugu Mandiri
                <br><br> Apabila saya meninggal dunia dan terjadi perselisihan karena saya lalai melaporkannya, DPLK tugu Mandiri akan membayarkan manfaat pensiun tersebut kepada pihak yang berhak sesuai informasi dari pemberi kerja atau peraturan pemerintah tentang Dana Pensiun yang berlaku atau sesuai dengan perintah pengadilan Biaya administrasi maksimal sebesar 2% dari akumulasi dana pertahun.
              </p>
              <v-checkbox
                v-model="ex4"
                style="color: #736C7C"
                label="Saya telah membaca dan setuju"
                color="primary"
                value="Saya telah membaca dan setuju"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col
              cols="12"
              class="mb-3"
            >
              <router-link
                to=""
                class="text-decoration-none"
              >
                <v-btn color="primary">
                  Submit
                </v-btn>
              </router-link>
              <router-link
                to="/pages/upload-syarat"
                class="text-decoration-none"
              >
                <v-btn
                  type="reset"
                  outlined
                  class="mx-2"
                >
                  Sebelumnya
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
      <footer class="text-center">
        Copyright © 2021 pertalife.com. All rights reserved.
      </footer>
    </v-container>
  </v-section>
</template>
