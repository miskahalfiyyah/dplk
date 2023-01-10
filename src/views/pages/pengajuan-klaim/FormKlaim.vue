<template>
  <div
    class="div"
  >
    <v-container>
      <v-card
        style="box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1); border: 1.5px solid #70AD46;"
        class="mx-auto mt-2 mb-5"
        col="6"
        width="800"
      >
        <v-form class="multi-col-validation container">
          <v-card-title class="d-flex align-center justify-center py-4">
            <router-link
              to="/"
              class="d-flex align-center"
            >
              <v-img
                :src="require('@/assets/images/logos/logo siperdana 1.png')"
                max-height="150px"
                max-width="150px"
                alt="logo"
                contain
              ></v-img>
            </router-link>
          </v-card-title>

          <!-- title -->
          <v-card-text>
            <h2 class="mt-4 mb-1 text-center font-weight-semibold">
              Hidup Aman dan Nyaman di Masa Depan
            </h2>
            <p class="mb-2 text-center">
              Pilihan dana pensiun untuk jelang masa tua bahagia
            </p>
          </v-card-text>

          <!-- Form -->
          <v-row>
            <v-alert
              class="mx-3 font-weight-bold mt-10"
              border="left"
              style="background-color: #C5E0B5; border: 1px solid #70AD46"
              dark
              width="780"
            >
              <span
                style="color: #736C7C; font-weight: bold;"
              >
                Pengajuan Klaim PPUKP PAP Pekerja Perbantuan
              </span>
            </v-alert>
            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Nomor Induk Pekerja
              </h4>
              <v-text-field
                style="font-size: 12px"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Nomor Handphone
              </h4>
              <v-text-field
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Email Pribadi
              </h4>
              <v-text-field
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Email Kantor
              </h4>
              <v-text-field
                outlined
                dense
                hide-details
                type="number"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Kode OTP
              </h4>
              <v-text-field
                outlined
                dense
                hide-details
                type="number"
              ></v-text-field>
            </v-col>

            <v-col class="text-center">
              <v-btn
                class="text-center mt-2 font-weight-semibold"
                style="color: red;"
              >
                Dapatkan kode OTP pada email
              </v-btn>
            </v-col>

            <v-col
              cols="12"
              class="mb-3"
            >
              <router-link
                to="/pages/upload-syarat"
                class="text-decoration-none"
              >
                <v-btn
                  color="primary"
                >
                  Selanjutnya
                </v-btn>
              </router-link>
              <v-btn
                type="reset"
                outlined
                class="mx-2"
              >
                Reset
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>

// import { ref } from '@vue/composition-api'

export default {
  data: () => ({
    kelamin: ['Pria', 'Wanita'],
    status: ['Menikah', 'Belum Menikah'],
  }),

  // setup() {
  //   const firstName = ref('')
  //   const lastName = ref('')
  //   const city = ref('')
  //   const country = ref('')
  //   const company = ref('')
  //   const email = ref('')
  //   const checkbox = ref(false)

  //   return {
  //     firstName,
  //     lastName,
  //     city,
  //     country,
  //     company,
  //     email,
  //     checkbox,
  //   }
  // },
}
</script>

<style lang="css" scoped>
.w3-table-all tr th td {
  /* background-color: #fff; */
  border: 1px solid #DCDADE;
  text-align: center;
  color: #736C7C;
}

.table tr td {
  border: 1px solid #DCDADE !important;
}

.tabel th {
  border: 1px solid #DCDADE !important;
}

table {
  border-collapse: collapse;
  border: 1px solid #DCDADE !important;
}
/* .w3-red,.w3-hover-red:hover {
  color: rgb(0, 0, 0) !important;
} */
td input, select {
  border: 1px solid #DCDADE;
  border-radius: 2px;
}

/* td input:hover {
  color: #2174EA;
} */

/* input:focus {
  border: 1px solid #2174EA !important;
}

select:focus {
  border: 1px solid #2174EA !important;
} */
</style>
