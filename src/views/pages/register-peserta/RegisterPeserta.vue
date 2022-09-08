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
              Informasi Peserta
            </v-alert>
            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Nama Peserta
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
                Nama Ibu Kandung
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
                No. Pegawai
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
                No. KTP
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
                No. NPWP
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
                Tempat Lahir
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
                Tanggal Lahir
              </h4>
              <v-text-field
                outlined
                dense
                hide-details
                type="date"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Jenis Kelamin
              </h4>
              <v-select
                :items="items"
                outlined
                dense
                hide-details
              ></v-select>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Alamat Sesuai KTP
              </h4>
              <v-textarea
                outlined
                rows="1"
                row-height="10"
              ></v-textarea>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Domisili
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
                No. Handphone
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
                Email
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
                Status Perkawinan
              </h4>
              <v-select
                :items="items"
                outlined
                dense
                hide-details
              ></v-select>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Jumlah Anak
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
                Usia Pensiun Normal (Minimal 40 tahun, Maksimal 70 tahun)
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
                Tanggal Mulai Kepesertaan
              </h4>
              <v-text-field
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-alert
              class="mx-3 mt-10 font-weight-bold"
              border="left"
              color="info"
              dark
              width="780"
            >
              Informasi Dana Pensiun Awal
            </v-alert>
            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                Nama Perusahaan Peserta
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
                Alamat Perusahaan
              </h4>
              <v-textarea
                outlined
                rows="1"
                row-height="10"
              ></v-textarea>
            </v-col>

            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                No. Peserta Dana Pensiun Awal
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
                Nama Dana Pensiun Sebelumnya
              </h4>
              <div class="d-flex">
                <v-text-field
                  outlined
                  dense
                  hide-details
                >
                </v-text-field>
                <v-btn color="success">
                  Cari Daspen
                </v-btn>
              </div>
            </v-col>

            <v-alert
              class="mx-3 font-weight-bold mt-10"
              border="left"
              color="info"
              dark
              width="780"
            >
              Informasi Ahli Waris
            </v-alert>

            <v-col cols="12">
              <table
                border="1"
                class="w3-table-all"
                style="margin-top: 20px;"
              >
                <thead class="tabel">
                  <tr
                    class="w3-red"
                    style="height: 80px"
                  >
                    <th>
                      No.
                    </th>
                    <th>
                      Nama Penerima Manfaat
                    </th>
                    <th>
                      Tanggal Lahir Penerima Manfaat
                    </th>
                    <th>
                      Jenis Kelamin Penerima Manfaat
                    </th>
                    <th>
                      Hubungan dengan Tertanggung
                    </th>
                  </tr>
                </thead>
                <tbody class="text-center table">
                  <tr
                    style="height: 40px;"
                  >
                    <td>1.</td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="string"
                      >
                    </td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="date"
                      >
                    </td>
                    <td>
                      <select
                        id="jenis"
                        type="select"
                        name="jenis"
                        style="padding: 5px; margin: 8px; width: 90%;"
                      >
                        <option value="laki-laki">
                          Laki-laki
                        </option>
                        <option value="perempuan">
                          Perempuan
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="string"
                      >
                    </td>
                  </tr>

                  <tr class="">
                    <td>2.</td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="string"
                      >
                    </td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="date"
                      >
                    </td>
                    <td>
                      <select
                        id="jenis"
                        name="jenis"
                        style="padding: 5px; margin: 8px; width: 90%;"
                      >
                        <option value="laki-laki">
                          Laki-laki
                        </option>
                        <option value="perempuan">
                          Perempuan
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="string"
                      >
                    </td>
                  </tr>
                  <tr class="">
                    <td>3.</td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="string"
                      >
                    </td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="date"
                      >
                    </td>
                    <td>
                      <select
                        id="jenis"
                        name="jenis"
                        style="padding: 5px; margin: 8px; width: 90%;"
                      >
                        <option value="laki-laki">
                          Laki-laki
                        </option>
                        <option value="perempuan">
                          Perempuan
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        style="padding: 5px; margin: 8px; width: 90%;"
                        type="string"
                      >
                    </td>
                  </tr>
                <!-- and so on... -->
                </tbody>
              </table>
            </v-col>

            <v-alert
              class="mx-3 font-weight-bold mt-10"
              border="left"
              color="info"
              dark
              width="780"
            >
              Informasi Rekening
            </v-alert>
            <v-col
              cols="12"
            >
              <h4 class="mb-2">
                No. Rekening
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
                Atas Nama
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
                Nama Bank
              </h4>
              <v-text-field
                outlined
                dense
                hide-details
              ></v-text-field>
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
