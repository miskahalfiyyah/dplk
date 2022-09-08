<template>
  <v-simple-table style="box-shadow: none !important">
    <template v-slot:default>
      <tbody
        class="font-weight-semibold elevation-0"
      >
        <tr
          v-for="item in information"
          :key="item.data"
        >
          <td>{{ item.data }}</td>
          <td class="text-left">
            {{ item.value }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const information = [
      {
        data: 'No. Pegawai',
        value: '-',
      },
      {
        data: 'Nama Perusahaan',
        value: 'PT Perta Life Insurance',
      },
      {
        data: 'Nama Lengkap',
        value: 'Eko Suryo Adiguno',
      },
      {
        data: 'Email',
        value: 'eko.suryoadiguno@gmail.com',
      },
      {
        data: 'No. Hp',
        value: 'eko.suryoadiguno@gmail.com',
      },
      {
        data: 'Tanggal Lahir',
        value: '12 - May - 1976',
      },
      {
        data: 'Nama Ibu Kandung',
        value: '-',
      },
      {
        data: 'Alamat Rumah',
        value: 'Grand Depok City Sektor Anggrek 3 Blok E2/13 Depok, Jawa Barat',
      },
      {
        data: 'Alamat Surat Menyurat',
        value: 'Grand Depok City Sektor Anggrek 3 Blok E2/13 Depok, Jawa Barat',
      },
      {
        data: 'No. KTP',
        value: '-',
      },
      {
        data: 'No. NPWP',
        value: '-',
      },
      {
        data: 'Alamat NPWP',
        value: '-',
      },
      {
        data: 'Tanggal Mulai Kepesertaan',
        value: '12 - May -2021',
      },
      {
        data: 'Tanggal Pensiun',
        value: '12 - May -2021',
      },
      {
        data: 'Nama Ahli Waris',
        value: 'Taty Listiawati',
      },
    ]

    return {
      information,
    }
  },
}
</script>

<style lang="scss" scoped>

td {
  border-bottom: none !important;
}
</style>
