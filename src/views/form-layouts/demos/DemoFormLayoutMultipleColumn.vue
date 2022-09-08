<template>
  <v-form class="multi-col-validation">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Nama Peserta"
          outlined
          dense
          placeholder="Nama Peserta"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Nama Ibu Kandung"
          outlined
          dense
          placeholder="Nama Ibu Kandung"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="No. Pegawai"
          outlined
          dense
          placeholder="No. Pegawai"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="No. KTP"
          outlined
          dense
          placeholder="No. KTP"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="No. NPWP"
          outlined
          dense
          placeholder="No> NPWP"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Tempat Lahir"
          outlined
          dense
          placeholder="Tempat Lahir"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Tanggal Lahir (dd/mm/yyyy)"
          outlined
          dense
          placeholder="Tanggal Lahir (dd/mm/yyyy/)"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-select
          :items="items"
          label="Jenis Kelamin"
          outlined
          dense
          placeholder="Jenis Kelamin"
          hide-details
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Alamat Sesuai KTP"
          outlined
          dense
          placeholder="Alamat Sesuai KTP"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Domisili"
          outlined
          dense
          placeholder="Domisili"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="No. Handphone"
          outlined
          dense
          placeholder="No. Handphone"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Email"
          outlined
          dense
          placeholder="Email"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-select
          :items="items"
          label="Status Perkawinan"
          outlined
          dense
          placeholder="Status Perkawinan"
          hide-details
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Jumlah Anak"
          outlined
          dense
          placeholder="Jumlah Anak"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Usia Pensiun Normal (Minimal 40 tahun, Maksimal 70 tahun)"
          outlined
          dense
          placeholder="Usia Pensiun Normal (Minimal 40 tahun, Maksimal 70 tahun)"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Tanggal Mulai Kepesertaan"
          outlined
          dense
          placeholder="Tanggal Mulai Kepesertaan"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Nama Perusahaan Peserta"
          outlined
          dense
          placeholder="Nama Perusahaan Peserta"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Alamat Perusahaan"
          outlined
          dense
          placeholder="Alamat Perusahaan"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="No. Peserta Dana Pensiun Awal"
          outlined
          dense
          placeholder="No. Peserta Dana Pensiun Awal"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Nama Dana Pensiun Sebelumnya"
          outlined
          dense
          placeholder="Nama Dana Pensiun Sebelumnya"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="No. Rekening"
          outlined
          dense
          placeholder="No. Rekening"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Atas Nama"
          outlined
          dense
          placeholder="Atas Nama"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Nama Bank"
          outlined
          dense
          placeholder="Nama Bank"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          class="mt-0"
          hide-details
        ></v-checkbox>
      </v-col>

      <v-col cols="12">
        <v-btn color="primary">
          Submit
        </v-btn>
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
