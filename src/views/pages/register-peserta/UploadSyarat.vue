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
              Upload Dokumen
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
              Upload Dokumen Peserta
            </v-alert>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Upload File Rekening
              </h4>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                @change="uploadImage($event)"
              >
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Upload File NPWP
              </h4>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                @change="uploadImage($event)"
              >
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Upload File KTP
              </h4>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                @change="uploadImage($event)"
              >
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Upload File Kartu Keluarga
              </h4>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                @change="uploadImage($event)"
              >
            </v-col>

            <div
              style="color:red"
              class="mx-3 mt-7 mb-2"
            >
              <p>
                Notes :
              </p>
              <span>*Format file upload .jpg .jpeg .png .pdf</span> <br>
              <span>*File maksimal 5MB</span>
            </div>

            <v-col
              cols="12"
              class="mb-3"
            >
              <router-link
                to="/pages/informasi-skema"
                class="text-decoration-none"
              >
                <v-btn color="primary">
                  Selanjutnya
                </v-btn>
                <router-link
                  to="/pages/register-peserta"
                  class="text-decoration-none ml-3"
                >
                  <v-btn
                    outlined
                  >
                    Sebelumnya
                  </v-btn>
                </router-link>
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

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const city = ref('')
    const country = ref('')
    const company = ref('')
    const email = ref('')
    const checkbox = ref(false)

    return {
      firstName,
      lastName,
      city,
      country,
      company,
      email,
      checkbox,
    }
  },
}
</script>

<style lang="css">
/* v-card {
  box-shadow: ;
} */
/* v-card {
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
} */
/* .section {
  background: black !important;
} */
</style>
