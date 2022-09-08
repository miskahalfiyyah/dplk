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
          Selamat Datang, Eko
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
    <v-title>
      <h2
        class="font-weight-bold"
        style="color: #726B7B"
      >
        Claim Tracker
      </h2>
    </v-title>
    <v-timeline
      class="mt-10"
    >
      <v-timeline-item
        v-for="n in 4"
        :key="n"
        small
      >
        <template v-slot:opposite>
          <span style="color: #2174EA">Ida Fauzidah Laili</span>
        </template>
        <v-card class="elevation-1 card">
          <v-card-title class="text-h5">
            Claim Registration
          </v-card-title>
          <v-card-text>14 Mar 2022 9:33 AM</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-section>
</template>

<style lang="scss" scoped>
.card {
  background-color: #EFF3F4 !important;
}
</style>
