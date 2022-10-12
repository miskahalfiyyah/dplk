<template>
  <v-section>
    <v-card
      color="primary"
      class="mb-8"
    >
      <v-card-title>
        <h3
          class="font-weight-semibold"
          style="color: white !important"
        >
          Selamat Datang
        </h3>
      </v-card-title>
      <v-card-subtitle>
        <h5
          class="font-weight-light"
          style="color: white !important"
        >
          Selamat beraktivitas!
        </h5>
      </v-card-subtitle>
    </v-card>
    <v-title>
      <h2
        class="font-weight-bold mb-8"
        style="color: #726B7B"
      >
        Quesioner
      </h2>
    </v-title>
    <v-card>
      <v-card-title>
        <h3 class="title">
          <b>I. DATA KORESPODEN</b>
        </h3>

        <v-form class="multi-col-validation mt-10">
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2">
                Nama Perusahaan
              </h5>
              <v-text-field
                v-model="namaPerusahaan"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2">
                Pendidikan
              </h5>
              <v-radio-group
                v-model="pendidikan"
                row
              >
                <v-radio
                  label="SMA"
                  value="SMA"
                ></v-radio>
                <v-radio
                  label="D3"
                  value="D3"
                ></v-radio>
                <v-radio
                  label="S1/S2/S3"
                  value="S1/S2/S3"
                ></v-radio>
              </v-radio-group>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2">
                Nama Peserta
              </h5>
              <v-text-field
                v-model="namaPeserta"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2">
                No. Hp
              </h5>
              <v-text-field
                v-model="nomorHp"
                outlined
                dense
                hide-details
                type="number"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2">
                Jenis Kelamin
              </h5>
              <v-radio-group
                v-model="jenisKelamin"
                row
              >
                <v-radio
                  label="Laki-laki"
                  value="Laki-laki"
                ></v-radio>
                <v-radio
                  label="Perempuan"
                  value="Perempuan"
                ></v-radio>
              </v-radio-group>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2">
                Email
              </h5>
              <v-text-field
                v-model="email"
                type="email"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2">
                Usia
              </h5>
              <v-text-field
                v-model="usia"
                type="number"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2">
                Alamat
              </h5>
              <v-textarea
                outlined
                row-height="10"
                rows="1"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card-title>

      <v-card-title>
        <h3 class="title">
          <b>II. KARAKTERISTIK KUALITAS</b>
        </h3>
      </v-card-title>
      <v-row class="mx-2 mt-2">
        <v-col
          cols="12"
          md="6"
        >
          <h3><b>Harapan Nasabah</b></h3>
          <p class="mt-2">
            Berikut ini seberapa pentingkah berikut ini. yang seharusnya diberikan ke DPLK Tugu Mandiri kepada anda sebagai nasabah
          </p>
          <ol>
            <li>Sangat tidak diharapkan</li>
            <li>Kurang diharapkan</li>
            <li>Cukup diharapkan</li>
            <li>Diharapkan</li>
            <li>Sangat diharapkan</li>
          </ol>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <h3><b>Persepsi Nasabah</b></h3>
          <p class="mt-2">
            Menurut anda seberapa puaskah anda terhadap hal-hal berikut ini yang diberikan oleh DPLK Tugu Mandiri kepada anda sebagai nasabah
          </p>
          <ol>
            <li>Sangat tidak puas</li>
            <li>Tidak puas</li>
            <li>Ragu-ragu</li>
            <li>Puas</li>
            <li>Sangat puas</li>
          </ol>
        </v-col>
        <h5
          class="mx-3"
          style="color: red !important;"
        >
          Harap untuk memilih salah satu pilihan yang paling sesuai menurut anda pada kolom yang tersedia
        </h5>
      </v-row>

      <v-row class="mx-2 mt-10">
        <v-col
          md="12"
          sm="12"
          xs="12"
          cols="12"
          style="overflow-x:auto;"
        >
          <table
            class="tb"
            style="width: 100%"
          >
            <tr>
              <th scope="col">
                <h4
                  style="color: black !important;"
                >
                  No.
                </h4>
              </th>
              <th>
                <h4 style="color: black !important;">
                  Deskripsi
                </h4>
              </th>
              <th
                style="background-color: yellow;"
              >
                <h4
                  style="color: black !important;"
                >
                  Tingkat Harapan Nasabah
                </h4>
              </th>
              <th
                style="background-color: yellow;"
              >
                <h4
                  style="color: black !important;"
                >
                  Tingkat Persepsi Nasabah
                </h4>
              </th>
            </tr>

            <!-- Pendaftaran -->
            <tr>
              <td class="text-center">
                <b>1.</b>
              </td>
              <td><b>Pendaftaran</b></td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>a. Informasi DPLK Tugu Mandiri mudah didapat</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="optradio"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="optradio"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="optradio"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="optradio"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="optradio"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN1"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN1"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN1"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN1"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN1"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>b. Proses pendaftaran mudah dan cepat</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN2"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN2"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN2"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN2"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN2"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN3"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN3"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN3"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN3"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN3"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>c. Sosialisasi produk sudah baik</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN4"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN4"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN4"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN4"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN4"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN5"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN5"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN5"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN5"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN5"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Laporan Keuangan -->
            <tr>
              <td class="text-center">
                <b>2.</b>
              </td>
              <td><b>Laporan Keuangan Peserta</b></td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>a. Laporan diterima tepat waktu</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN6"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN6"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN6"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN6"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN6"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN7"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN7"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN7"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN7"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN7"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>b. Isi laporan jelas dan mudah dimengerti</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN8"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN8"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN8"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN8"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN8"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN9"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN9"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN9"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN9"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN9"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Bulletin -->
            <tr>
              <td class="text-center">
                <b>3.</b>
              </td>
              <td><b>Bulletin</b></td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>a. Mendapatkan informasi aktual tentang DPLK</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN10"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN10"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN10"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN10"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN10"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN11"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN11"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN11"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN11"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN11"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>b. Mendapatkan informasi terbaru</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN12"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN12"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN12"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN12"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN12"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN13"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN13"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN13"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN13"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN13"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Hasil Investasi -->
            <tr>
              <td class="text-center">
                <b>4.</b>
              </td>
              <td><b>Hasil Investasi</b></td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>a. Pilihan investasi cukup bervariasi</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN14"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN14"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN14"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN14"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN14"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN15"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN15"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN15"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN15"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN15"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>b. Hasil investasi kompetitif</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN16"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN16"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN16"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN16"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN16"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN17"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN17"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN17"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN17"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN17"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Service -->
            <tr>
              <td class="text-center">
                <b>5.</b>
              </td>
              <td><b>Service</b></td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>a. Pendapatan anda mengenai respon kami terhadap komplain</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN18"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN18"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN18"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN18"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN18"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN19"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN19"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN19"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN19"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN19"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>b. Pendapat anda mengenai pelayanan kami dalam pengurusan klaim</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN20"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN20"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN20"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN20"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN20"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN21"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN21"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN21"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN21"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN21"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>c. Kemudahan menghubungi DPLK Tugu Mandiri</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN22"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN22"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN22"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN22"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN22"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN23"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN23"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN23"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN23"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN23"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Secara Umum -->
            <tr>
              <td class="text-center">
                <b>6.</b>
              </td>
              <td><b>Secara umum, menurut anda bagaimana DPLK Tugu Mandiri</b></td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
                style="background-color: #002B49; padding: 0px !important;"
              >
                <table class="mx-auto">
                  <tr>
                    <td style="color: white; border: none !important;">
                      1
                    </td>
                    <td style="color: white; border: none !important;">
                      2
                    </td>
                    <td style="color: white; border: none !important;">
                      3
                    </td>
                    <td style="color: white; border: none !important;">
                      4
                    </td>
                    <td style="color: white; border: none !important;">
                      5
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>DPLK Tugu Mandiri</td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN24"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN24"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN24"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN24"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN24"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
              <td
                class="p-0"
              >
                <table>
                  <tr>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN25"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN25"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN25"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN25"
                        ></label>
                      </div>
                    </td>
                    <td style="color: white; border: none !important;">
                      <div class="radio">
                        <label><input
                          id="regular"
                          type="radio"
                          name="radioTHN25"
                        ></label>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-card-title>
          <h3 class="title">
            <b>III. Saran-saran Perbaikan Untuk Kami</b>
          </h3>
        </v-card-title>
        <v-col
          cols="12"
        >
          <v-textarea
            outlined
            label="Tuliskan saran anda ..."
          ></v-textarea>
        </v-col>

        <!-- Button Submit -->
        <v-col
          cols="12"
          md="12"
          sm="12"
        >
          <v-btn
            large
            class="mb-10"
            color="primary"
            @click="submit"
          >
            Submit Quesioner
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-section>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  data() {
    // const namaPerusahaan = ref('')
    // const pendidikan = ref('')
    // const namaPeserta = ref('')
    // const nomorHp = ref('')
    // const jenisKelamin = ref('')
    // const email = ref('')
    // const alamat = ref('')

    return {
      namaPerusahaan,
      pendidikan,
      namaPeserta,
      nomorHp,
      jenisKelamin,
      email,
      alamat,
    }
  },
}
</script>

<style scoped>
/* table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
} */

.tb {
  border-collapse: collapse;
}
  .tb th, .tb td {
    padding: 15px; border: solid 0.5px rgb(223, 223, 223);
    color: black;
  }
  /* .tb th { background-color: lightblue; } */

  .title b {
  color: black !important;
  }

  v-form .multi-col-validation {
    color: black !important;
  }
</style>
