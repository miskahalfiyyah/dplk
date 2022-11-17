<template>
  <v-simple-table
    height="250"
    fixed-header
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            No. Regist
          </th>
          <th class="text-center text-uppercase">
            Tgl Terima Dokumen
          </th>
          <th class="text-center text-uppercase">
            Tgl Registrasi
          </th>
          <th class="text-center text-uppercase">
            Tgl Kejadian
          </th>
          <th class="text-center text-uppercase">
            Tgl Disetujui
          </th>
          <th class="text-center text-uppercase">
            Jenis Klaim
          </th>
          <th class="text-center text-uppercase">
            No. Voucher
          </th>
          <th class="text-center text-uppercase">
            Nilai Klaim
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in history"
          :key="item.history"
        >
          <td>{{ item.history }}</td>
          <td class="text-center">
            {{ item.calories }}
          </td>
          <td class="text-center">
            {{ item.fat }}
          </td>
          <td class="text-center">
            {{ item.carbs }}
          </td>
          <td class="text-center">
            {{ item.protein }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const desserts = [
      {
        dessert: 'Frozen Yogurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Eclair',
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Cupcake',
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Gingerbread',
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
    ]

    return {
      desserts,
    }
  },
}
</script>
