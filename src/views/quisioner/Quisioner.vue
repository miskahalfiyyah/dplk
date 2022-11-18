<template>
  <v-form class="multi-col-validation mt-10">
    <div>
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
      <div>
        <h2
          class="font-weight-bold mb-8"
          style="color: #726B7B"
        >
          Quesioner
        </h2>
      </div>
      <v-card>
        <v-card-title>
          <h3 class="title">
            <b>I. DATA KORESPODEN</b>
          </h3>

          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2 mt-5">
                Nomor Peserta
              </h5>
              <v-text-field
                v-model="items.nomorPeserta"
                outlined
                dense
                hide-details
                hidden
                disabled
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2 mt-5">
                Nama Perusahaan
              </h5>
              <v-text-field
                v-model="items.namaPerusahaan"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <h5 class="mb-2 mt-5">
                Pendidikan
              </h5>
              <v-radio-group
                v-model="items.pendidikan"
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
                v-model="items.namaPeserta"
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
                v-model="items.noHp"
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
                v-model="items.jenisKelamin"
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
                v-model="items.email"
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
                v-model="items.usia"
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
                Pekerjaan
              </h5>
              <v-text-field
                v-model="items.pekerjaan"
                type="text"
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
                v-model="items.alamat"
                outlined
                row-height="10"
                rows="1"
              ></v-textarea>
            </v-col>
          </v-row>
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
                    style="color: #2B2C3E !important;"
                  >
                    No.
                  </h4>
                </th>
                <th>
                  <h4 style="color: #2B2C3E !important;">
                    Deskripsi
                  </h4>
                </th>
                <th
                  style="background-color: yellow;"
                >
                  <h4
                    style="color: #2B2C3E !important;"
                  >
                    Tingkat Harapan Nasabah
                  </h4>
                </th>
                <th
                  style="background-color: yellow;"
                >
                  <h4
                    style="color: #2B2C3E !important;"
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
                            v-model="items.mudahDidapatA"
                            name="mudahDidapatA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.mudahDidapatA"
                            name="mudahDidapatA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.mudahDidapatA"
                            name="mudahDidapatA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.mudahDidapatA"
                            name="mudahDidapatA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.mudahDidapatA"
                            name="mudahDidapatA"
                            value="5"
                            type="radio"
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
                            v-model="items.mudahDidapatB"
                            name="mudahDidapatB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.mudahDidapatB"
                            name="mudahDidapatB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.mudahDidapatB"
                            name="mudahDidapatB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.mudahDidapatB"
                            name="mudahDidapatB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.mudahDidapatB"
                            name="mudahDidapatB"
                            value="5"
                            type="radio"
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
                            v-model="items.prosesMudahCepatA"
                            name="prosesMudahCepatA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.prosesMudahCepatA"
                            name="prosesMudahCepatA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.prosesMudahCepatA"
                            name="prosesMudahCepatA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.prosesMudahCepatA"
                            name="prosesMudahCepatA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.prosesMudahCepatA"
                            name="prosesMudahCepatA"
                            value="5"
                            type="radio"
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
                            v-model="items.prosesMudahCepatB"
                            name="prosesMudahCepatB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.prosesMudahCepatB"
                            name="prosesMudahCepatB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.prosesMudahCepatB"
                            name="prosesMudahCepatB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.prosesMudahCepatB"
                            name="prosesMudahCepatB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.prosesMudahCepatB"
                            name="prosesMudahCepatB"
                            value="5"
                            type="radio"
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
                            v-model="items.sosialisasiBaikA"
                            name="sosialisasiBaikA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.sosialisasiBaikA"
                            name="sosialisasiBaikA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.sosialisasiBaikA"
                            name="sosialisasiBaikA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.sosialisasiBaikA"
                            name="sosialisasiBaikA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.sosialisasiBaikA"
                            name="sosialisasiBaikA"
                            value="5"
                            type="radio"
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
                            v-model="items.sosialisasiBaikB"
                            name="sosialisasiBaikB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.sosialisasiBaikB"
                            name="sosialisasiBaikB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.sosialisasiBaikB"
                            name="sosialisasiBaikB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.sosialisasiBaikB"
                            name="sosialisasiBaikB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.sosialisasiBaikB"
                            name="sosialisasiBaikB"
                            value="5"
                            type="radio"
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
                            v-model="items.tepatWaktuA"
                            name="tepatWaktuA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.tepatWaktuA"
                            name="tepatWaktuA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.tepatWaktuA"
                            name="tepatWaktuA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.tepatWaktuA"
                            name="tepatWaktuA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.tepatWaktuA"
                            name="tepatWaktuA"
                            value="5"
                            type="radio"
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
                            v-model="items.tepatWaktuB"
                            name="tepatWaktuB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.tepatWaktuB"
                            name="tepatWaktuB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.tepatWaktuB"
                            name="tepatWaktuB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.tepatWaktuB"
                            name="tepatWaktuB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.tepatWaktuB"
                            name="tepatWaktuB"
                            value="5"
                            type="radio"
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
                            v-model="items.jelasMudahA"
                            name="jelasMudahA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.jelasMudahA"
                            name="jelasMudahA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.jelasMudahA"
                            name="jelasMudahA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.jelasMudahA"
                            name="jelasMudahA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.jelasMudahA"
                            name="jelasMudahA"
                            value="5"
                            type="radio"
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
                            v-model="items.jelasMudahB"
                            name="jelasMudahB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.jelasMudahB"
                            name="jelasMudahB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.jelasMudahB"
                            name="jelasMudahB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.jelasMudahB"
                            name="jelasMudahB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.jelasMudahB"
                            name="jelasMudahB"
                            value="5"
                            type="radio"
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
                            v-model="items.informasiAktualA"
                            name="informasiAktualA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiAktualA"
                            name="informasiAktualA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiAktualA"
                            name="informasiAktualA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiAktualA"
                            name="informasiAktualA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiAktualA"
                            name="informasiAktualA"
                            value="5"
                            type="radio"
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
                            v-model="items.informasiAktualB"
                            name="informasiAktualB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiAktualB"
                            name="informasiAktualB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiAktualB"
                            name="informasiAktualB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiAktualB"
                            name="informasiAktualB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiAktualB"
                            name="informasiAktualB"
                            value="5"
                            type="radio"
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
                            v-model="items.informasiTerbaruA"
                            name="informasiTerbaruA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiTerbaruA"
                            name="informasiTerbaruA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiTerbaruA"
                            name="informasiTerbaruA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiTerbaruA"
                            name="informasiTerbaruA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiTerbaruA"
                            name="informasiTerbaruA"
                            value="5"
                            type="radio"
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
                            v-model="items.informasiTerbaruB"
                            name="informasiTerbaruB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiTerbaruB"
                            name="informasiTerbaruB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiTerbaruB"
                            name="informasiTerbaruB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiTerbaruB"
                            name="informasiTerbaruB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.informasiTerbaruB"
                            name="informasiTerbaruB"
                            value="5"
                            type="radio"
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
                            v-model="items.bervariasiA"
                            name="bervariasiA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.bervariasiA"
                            name="bervariasiA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.bervariasiA"
                            name="bervariasiA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.bervariasiA"
                            name="bervariasiA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.bervariasiA"
                            name="bervariasiA"
                            value="5"
                            type="radio"
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
                            v-model="items.bervariasiB"
                            name="bervariasiB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.bervariasiB"
                            name="bervariasiB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.bervariasiB"
                            name="bervariasiB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.bervariasiB"
                            name="bervariasiB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.bervariasiB"
                            name="bervariasiB"
                            value="5"
                            type="radio"
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
                            v-model="items.kompetitifA"
                            name="kompetitifA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kompetitifA"
                            name="kompetitifA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kompetitifA"
                            name="kompetitifA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kompetitifA"
                            name="kompetitifA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kompetitifA"
                            name="kompetitifA"
                            value="5"
                            type="radio"
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
                            v-model="items.kompetitifB"
                            name="kompetitifB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kompetitifB"
                            name="kompetitifB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kompetitifB"
                            name="kompetitifB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kompetitifB"
                            name="kompetitifB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kompetitifB"
                            name="kompetitifB"
                            value="5"
                            type="radio"
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
                            v-model="items.responKomplainA"
                            name="responKomplainA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.responKomplainA"
                            name="responKomplainA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.responKomplainA"
                            name="responKomplainA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.responKomplainA"
                            name="responKomplainA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.responKomplainA"
                            name="responKomplainA"
                            value="5"
                            type="radio"
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
                            v-model="items.responKomplainB"
                            name="responKomplainB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.responKomplainB"
                            name="responKomplainB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.responKomplainB"
                            name="responKomplainB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.responKomplainB"
                            name="responKomplainB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.responKomplainB"
                            name="responKomplainB"
                            value="5"
                            type="radio"
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
                            v-model="items.pelayananPengurusanKlaimA"
                            name="pelayananPengurusanKlaimA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.pelayananPengurusanKlaimA"
                            name="pelayananPengurusanKlaimA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.pelayananPengurusanKlaimA"
                            name="pelayananPengurusanKlaimA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.pelayananPengurusanKlaimA"
                            name="pelayananPengurusanKlaimA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.pelayananPengurusanKlaimA"
                            name="pelayananPengurusanKlaimA"
                            value="5"
                            type="radio"
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
                            v-model="items.pelayananPengurusanKlaimB"
                            name="pelayananPengurusanKlaimB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.pelayananPengurusanKlaimB"
                            name="pelayananPengurusanKlaimB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.pelayananPengurusanKlaimB"
                            name="pelayananPengurusanKlaimB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.pelayananPengurusanKlaimB"
                            name="pelayananPengurusanKlaimB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.pelayananPengurusanKlaimB"
                            name="pelayananPengurusanKlaimB"
                            value="5"
                            type="radio"
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
                            v-model="items.kemudahanMenghubungiA"
                            name="kemudahanMenghubungiA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kemudahanMenghubungiA"
                            name="kemudahanMenghubungiA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kemudahanMenghubungiA"
                            name="kemudahanMenghubungiA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kemudahanMenghubungiA"
                            name="kemudahanMenghubungiA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kemudahanMenghubungiA"
                            name="kemudahanMenghubungiA"
                            value="5"
                            type="radio"
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
                            v-model="items.kemudahanMenghubungiB"
                            name="kemudahanMenghubungiB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kemudahanMenghubungiB"
                            name="kemudahanMenghubungiB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kemudahanMenghubungiB"
                            name="kemudahanMenghubungiB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kemudahanMenghubungiB"
                            name="kemudahanMenghubungiB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.kemudahanMenghubungiB"
                            name="kemudahanMenghubungiB"
                            value="5"
                            type="radio"
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
                            v-model="items.dplkTmA"
                            name="dplkTmA"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.dplkTmA"
                            name="dplkTmA"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.dplkTmA"
                            name="dplkTmA"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.dplkTmA"
                            name="dplkTmA"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.dplkTmA"
                            name="dplkTmA"
                            value="5"
                            type="radio"
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
                            v-model="items.dplkTmB"
                            name="dplkTmB"
                            value="1"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.dplkTmB"
                            name="dplkTmB"
                            value="2"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.dplkTmB"
                            name="dplkTmB"
                            value="3"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.dplkTmB"
                            name="dplkTmB"
                            value="4"
                            type="radio"
                          ></label>
                        </div>
                      </td>
                      <td style="color: white; border: none !important;">
                        <div class="radio">
                          <label><input
                            id="regular"
                            v-model="items.dplkTmB"
                            name="dplkTmB"
                            value="5"
                            type="radio"
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
              v-model="items.saranPerbaikan"
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
              @click="postData"
            >
              Submit Quesioner
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-form>
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/composition-api'
import Swal from 'sweetalert2/dist/sweetalert2'

// import { response } from 'express'

export default {
  setup() {
    const namaPerusahaan = ref('')
    const pendidikan = ref('')
    const namaPeserta = ref('')
    const noHp = ref('')
    const jenisKelamin = ref('')
    const email = ref('')
    const alamat = ref('')
    const usia = ref('')

    return {
      namaPerusahaan,
      pendidikan,
      namaPeserta,
      noHp,
      jenisKelamin,
      email,
      alamat,
      usia,

    }
  },
  data() {
    return {
      items: {
        // Data peserta
        nomorPeserta: '',
        namaPerusahaan: '',
        pendidikan: '',
        namaPeserta: '',
        noHp: '',
        jenisKelamin: '',
        email: '',
        alamat: '',
        usia: '',
        pekerjaan: '',

        // pertanyaan
        mudahDidapatA: '',
        mudahDidapatB: '',
        prosesMudahCepatA: '',
        prosesMudahCepatB: '',
        sosialisasiBaikA: '',
        sosialisasiBaikB: '',
        tepatWaktuA: '',
        tepatWaktuB: '',
        jelasMudahA: '',
        jelasMudahB: '',
        informasiAktualA: '',
        informasiAktualB: '',
        informasiTerbaruA: '',
        informasiTerbaruB: '',
        bervariasiA: '',
        bervariasiB: '',
        kompetitifA: '',
        kompetitifB: '',
        responKomplainA: '',
        responKomplainB: '',
        pelayananPengurusanKlaimA: '',
        pelayananPengurusanKlaimB: '',
        kemudahanMenghubungiA: '',
        kemudahanMenghubungiB: '',
        dplkTmA: '',
        dplkTmB: '',
        saranPerbaikan: '',

      },
    }
  },
  methods: {
    postData() {
      this.items.namaPeserta = sessionStorage.getItem('cer_nmbr')
      axios
        .post('http://sendmail.pertalife.com/api/mailkuesioner', this.items)
        .then(response => {
          // console.log(response)
          console.log(response.data)
          if (response.data.success === true) {
            Swal.fire({
              title: 'Berhasil',
              text: 'Terima kasih kepada responden yang telah meluangkan waktunya untuk ikut berpartisipasi dalam meningkatkan pelayanan DPLK yang menjadi lebih baik lagi.',
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: '#50CD89',
            })
          } else {
            Swal.fire({
              title: 'Berhasil',
              text: 'Terima kasih kepada responden yang telah meluangkan waktunya untuk ikut berpartisipasi dalam meningkatkan pelayanan DPLK yang menjadi lebih baik lagi.',
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: '#50CD89',
            })
          }
        })
    },
  },
}
</script>

<style scoped>
/* table, th, td {
  border: 1px solid #2B2C3E;
  border-collapse: collapse;
} */

.tb {
  border-collapse: collapse;
}
  .tb th, .tb td {
    padding: 15px; border: solid 0.5px rgb(223, 223, 223);
    color: #2B2C3E;
  }
  /* .tb th { background-color: lightblue; } */

  .title b {
  color: #2B2C3E !important;
  }

  v-form .multi-col-validation {
    color: #2B2C3E !important;
  }
</style>
