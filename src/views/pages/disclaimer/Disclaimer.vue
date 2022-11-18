<template>
  <v-card
    style="margin-top: 50px"
    class="mx-auto"
    max-width="80%"
  >
    <div
      align="justify"
      style="overflow-y: scroll !important"
    >
      <v-card-text>
        <h3 class="mt-3 text-lg">
          Term Of Use
        </h3>
        <p class="text-lg font-weight-medium">
          Dengan mengakses dan menggunakan aplikasi SIPERDANA DPLK Tugu Mandiri (“SIPERDANA”) Pengguna  telah memahami dan menyetujui untuk terikat dengan seluruh syarat dan ketentuan yang berlaku dalam penggunaannya. Jika Pengguna tidak setuju silahkan meninggalkan aplikasi dan tidak meneruskan ke langkah berikutnya di aplikasi SIPERDANA.
          Data dan/atau informasi yang disajikan dalam SIPERDANA hanya sebagai rujukan/referensi belaka, dan bukan merupakan suatu nasihat transaksi keuangan, akuntansi maupun investasi. DPLK Tugu Mandiri akan berusaha menyediakan data dan informasi pada aplikasi ini secara tepat dan akurat. Namun demikian tidak menutup kemungkinan terjadi kesalahan, kekurangan data dan informasi yang terjadi karena faktor teknis, faktor manusia, maupun faktor lainnya termasuk gangguan koneksi saat update informasi saldo. Kami tidak bertanggung jawab atas segala kesalahan dan keterlambatan memperbarui data atau informasi, atau segala kerugian yang timbul karena tindakan yang berkaitan dengan penggunaan data/informasi yang disajikan DPLK Tugu Mandiri
        </p>
      </v-card-text>
      <v-card-text>
        <h3 class="text-lg">
          Privacy Policy
        </h3>
        <p class="text-lg font-weight-medium">
          Seluruh informasi yang tertera di dalam SIPERDANA adalah informasi rahasia yang disajikan khusus kepada peserta DPLK Tugu Mandiri. Pengguna memahami dan menyetujui untuk tidak menyebarluaskan, mendistribusikan, atau memberitahukan username, password dan informasi lain kepada pihak lain yang tidak berkepentingan dengan aplikasi ini untuk keperluan apapun juga. DPLK Tugu Mandiri tidak bertanggung-jawab atas kelalaian pelanggaran ketentuan ini untuk Pengguna.
          Pengguna diperkenankan menggunakan seluruh informasi dalam SIPERDANA hanya untuk keperluan pribadi, bukan tujuan komersil. Pengguna dapat menggunakan konten yang diperbolehkan untuk diunduh, seperti form, buletin, brosur, dan laporan keuangan untuk keperluan pribadi namun tidak diperkenankan memproduksi ulang, menyalin, mempublikasikan, menayangkan, menyebarkan, memodifikasi, menerbitkan, mentransfer, menjual, meminjamkan atau mendistribusikan konten SIPERDANA tanpa ijin tertulis dari pengelola.
        </p>
      </v-card-text>
      <v-card-actions class="dense">
        <v-btn color="primary">
          <router-link
            :to="userType == 1 ? '/informasi-peserta' : '/perusahaan/informasi-saldo-perusahaan'"
            style="color: white; text-decoration: none;"
          >
            Setuju
          </router-link>
        </v-btn>
        <v-btn
          color="primary"
          outlined
        >
          <router-link
            to="/login"
            style="text-decoration: none;"
          >
            Tidak Setuju
          </router-link>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      userType: sessionStorage.getItem('user_type'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/plugins/vuetify/default-preset/preset/mixins.scss';

// .bg {
//   background-color: #EFF3F4 !important;
//   width: 100% !important;
//   height: 100% !important;
// }
</style>
