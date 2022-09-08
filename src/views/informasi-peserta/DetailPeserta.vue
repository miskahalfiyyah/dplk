<template>
  <v-section>
    <!-- pofile Peserta -->
    <div class="profile d-flex">
      <div
        class="me-6"
      >
        <v-img
          width="120"
          class="rounded"
          src="../../assets/images/avatars/1.png"
        ></v-img>
      </div>

      <!-- upload photo -->
      <div>
        <v-btn
          outlined
          color="primary"
          class="me-3 mt-5"
          @click="$refs.refInputEl.click()"
        >
          <span class="">Upload new photo</span>
        </v-btn>

        <input
          ref="refInputEl"
          type="file"
          accept=".jpeg,.png,.jpg,GIF"
          :hidden="true"
        />
      </div>
    </div>
    <v-row class="mt-10">
      <!-- basic -->
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title class="font-weight-semibold">
            Data Peserta
          </v-card-title>
          <v-divider></v-divider>
          <demo-simple-table-basic></demo-simple-table-basic>
        </v-card>
      </v-col>
      <v-card
        class="greeting-card mx-auto mt-4"
        style="box-shadow: none !important"
      >
        <v-img src="@/assets/images/misc/card.svg">
          <v-row class="ma-0 pa-0 mt-2">
            <v-col
              cols="12"
              class=""
            >
              <v-img
                width="60"
                class="rounded"
                src="../../assets/images/avatars/1.png"
              ></v-img>
              <h3
                class="font-weight-semibold white--text text-no-wrap mb-1 mt-3"
                style="letter-spacing: 2.5px; color: white !important"
              >
                2051267
              </h3>
              <h6
                style="letter-spacing: 2.5px; color: white !important"
                class="font-weight-regular white--text text-xs text-no-wrap pt-0 mb-1"
              >
                Eko Suryo Adiguno
              </h6>
              <h6
                class="font-weight-regular text-no-wrap white--text"
                style="color: white !important"
              >
                Exp 12/05/21
              </h6>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
  </v-section>
</template>

<script>
import DemoSimpleTableBasic from '../simple-table/demos/DemoSimpleTableBasic.vue'

export default {
  components: {
    DemoSimpleTableBasic,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
</style>
