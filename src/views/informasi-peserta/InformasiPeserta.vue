<template>
  <div>
    <v-card
      style="background: #BB323C !important"
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
        <h4
          class="font-weight-light"
          style="color: white !important"
        >
          Selamat beraktivitas!
        </h4>
      </v-card-subtitle>
    </v-card>
    <v-row>
      <v-col
        cols="12"
      >
        <detail-peserta></detail-peserta>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline

// demos
// import Swal from 'sweetalert2/dist/sweetalert2'
import DetailPeserta from './DetailPeserta.vue'

export default {
  components: {
    DetailPeserta,
  },

  // mounted() {
  //   if (typeof (sessionStorage.getItem('user_type')) !== 'undefined' && sessionStorage.getItem('user_type') !== 1) {
  //     Swal.fire({
  //       title: 'Gagal akses',
  //       text: 'Anda belum melakukan login/user tidak dikenali',
  //       icon: 'danger',
  //       confirmButtonText: 'login',
  //       confirmButtonColor: '#41b882',
  //     }).then(res => {
  //       if (res.isConfirmed === true) {
  //         sessionStorage.clear()
  //         this.$router.replace({ path: '/login' })
  //       }
  //     })
  //   }
  // },

  // data: () => ({
  //   name: sessionStorage.getItem('userName'),
  // }),
}
</script>
