<template>
  <div
    class="bg"
  >
    <v-row class="">
      <!-- Disclaimer -->
      <v-col
        md="10"
        cols="12"
        class="mx-auto"
      >
        <v-card
          class="d-flex align-center"
          style="margin-top: 100px"
        >
          <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
            <div class="mx-auto">
              <!-- <v-img
                style="margin-top: 100px"
                width="390"
                height="350"
                src="@/assets/images/misc/privacy-policy.svg"
              ></v-img> -->
            </div>

            <div
              class="col-lg-6 col-sm-12 col-md-12 mt-3"
              align="justify"
              style="overflow-y: scroll !important"
            >
              <v-card-text>
                <h5>Term Of Use</h5>
                <p class="text-xs">
                  Dengan mengakses dan menggunakan aplikasi SIPERDANA DPLK Tugu Mandiri (“SIPERDANA”) Pengguna  telah memahami dan menyetujui untuk terikat dengan seluruh syarat dan ketentuan yang berlaku dalam penggunaannya. Jika Pengguna tidak setuju silahkan meninggalkan aplikasi dan tidak meneruskan ke langkah berikutnya di aplikasi SIPERDANA.
                  Data dan/atau informasi yang disajikan dalam SIPERDANA hanya sebagai rujukan/referensi belaka, dan bukan merupakan suatu nasihat transaksi keuangan, akuntansi maupun investasi. DPLK Tugu Mandiri akan berusaha menyediakan data dan informasi pada aplikasi ini secara tepat dan akurat. Namun demikian tidak menutup kemungkinan terjadi kesalahan, kekurangan data dan informasi yang terjadi karena faktor teknis, faktor manusia, maupun faktor lainnya termasuk gangguan koneksi saat update informasi saldo. Kami tidak bertanggung jawab atas segala kesalahan dan keterlambatan memperbarui data atau informasi, atau segala kerugian yang timbul karena tindakan yang berkaitan dengan penggunaan data/informasi yang disajikan DPLK Tugu Mandiri
                </p>
              </v-card-text>
              <v-card-text>
                <h5>Privacy Policy</h5>
                <p class="text-xs">
                  Seluruh informasi yang tertera di dalam SIPERDANA adalah informasi rahasia yang disajikan khusus kepada peserta DPLK Tugu Mandiri. Pengguna memahami dan menyetujui untuk tidak menyebarluaskan, mendistribusikan, atau memberitahukan username, password dan informasi lain kepada pihak lain yang tidak berkepentingan dengan aplikasi ini untuk keperluan apapun juga. DPLK Tugu Mandiri tidak bertanggung-jawab atas kelalaian pelanggaran ketentuan ini untuk Pengguna.
                  Pengguna diperkenankan menggunakan seluruh informasi dalam SIPERDANA hanya untuk keperluan pribadi, bukan tujuan komersil. Pengguna dapat menggunakan konten yang diperbolehkan untuk diunduh, seperti form, buletin, brosur, dan laporan keuangan untuk keperluan pribadi namun tidak diperkenankan memproduksi ulang, menyalin, mempublikasikan, menayangkan, menyebarkan, memodifikasi, menerbitkan, mentransfer, menjual, meminjamkan atau mendistribusikan konten SIPERDANA tanpa ijin tertulis dari pengelola.
                </p>
              </v-card-text>
              <v-card-actions class="dense">
                <v-btn color="primary">
                  Setuju
                </v-btn>
                <v-btn
                  color="primary"
                  outlined
                >
                  Tidak Setuju
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
@import '@/plugins/vuetify/default-preset/preset/mixins.scss';

.bg {
  background-color: #EFF3F4 !important;
  width: 100% !important;
  height: 100% !important;
}
</style>
