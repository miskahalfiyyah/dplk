<template>
  <div v-if="items.length > 0">
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
        <h4
          class="font-weight-light"
          style="color: white !important"
        >
          Selamat beraktivitas!
        </h4>
      </v-card-subtitle>
    </v-card>
    <div>
      <h2
        class="font-weight-bold mb-8"
        style="color: #726B7B"
      >
        Claim Tracker
      </h2>
    </div>
    <!-- <v-timeline
      dense
      class=""
      ipyvuetify
    >
      <v-timeline-item
        v-for="message in messages"
        :key="message.tanggal"
        :color="message.color"
        small
      >
        <div class="font-weight-normal">
          <strong>{{ message.pesan }}</strong> @ {{ format_date(message.tanggal) }}
        </div>
        <div></div>
      </v-timeline-item>
    </v-timeline> -->
    <v-stepper
      v-model="items"
      vertical
    >
      <v-stepper-step
        v-for="(message, i) in messages"
        :key="i"
        :complete="message.complete"
        step="1"
        :color="message.color"
        :icon="mdiCheck"
        class="border"
      >
        <h3>{{ message.pesan }}</h3>
        <p
          class="mt-2"
          style="color: #2F80ED"
        >
          {{ message.tanggal }}
        </p>
        <!-- <v-btn @click="updateClaim(i)">
          update
        </v-btn> -->
      </v-stepper-step>

      <!-- <v-stepper-content step="1">
      <v-card
        color="grey"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content> -->

      <!-- <v-stepper-step
          v-for="message in messages"
          :key="message.tanggal"
          step="1"
        >
          <h3>{{ message.pesan }}</h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh - {{ message.tanggal }}
          </p>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 2"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step
        :complete="e6 > 2"
        step="2"
      >
        <h3>Document Completed</h3>
        <p
          class="mt-2"
          style="color: #2F80ED"
        >
          Diperiksa oleh Ida Fauzidah Laili - 14 Mar 2022 9:33 AM
        </p>
      </v-stepper-step> -->

      <!-- <v-stepper-content step="2">
        <v-card
          color="grey"
          class="mb-12"
          height="200px"
        ></v-card>
        <v-btn
          color="primary"
          @click="e6 = 3"
        >
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content> -->

      <!-- <v-stepper-step
          :complete="e6 > 3"
          step="3"
        >
          <h3>Waiting Registration Approval</h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Ida Fauzidah Laili - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 4"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="4">
          <h3>Registration Approval</h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Ida Fauzidah Laili - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="5">
          <h3>Received Document by Admin</h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Gita Indirawati - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>
        <v-stepper-content step="5">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="6">
          <h3>Requested amount From Cash Management</h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Gita Indirawati - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>
        <v-stepper-content step="6">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="7">
          <h3>Ready to Process</h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Mudji Karmawati - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>
        <v-stepper-content step="7">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="8">
          <h3>Approval for Day End Process</h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Mohamad Navis - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>
        <v-stepper-content step="8">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="9">
          <h3>Day End Process Finish</h3>
          <p
            class="mt-2"
            style="color: #EB5757"
          >
            Day End Process Finish
          </p>
        </v-stepper-step>
        <v-stepper-content step="9">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="10">
          <h3>Payout by Cash Management</h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Mudji Karmawati - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>
        <v-stepper-content step="10">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="11">
          <h3>
            Approval Payout by Cash
            Management
          </h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Mudji Karmawati - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>
        <v-stepper-content step="11">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->

      <!-- <v-stepper-step step="12">
          <h3>
            Transfer Bank by Cash
            Management
          </h3>
          <p
            class="mt-2"
            style="color: #2F80ED"
          >
            Diperiksa oleh Mudji Karmawati - 14 Mar 2022 9:33 AM
          </p>
        </v-stepper-step>
        <v-stepper-content step="12">
          <v-card
            color="grey"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content> -->
      <!-- </v-stepper> -->
      <!-- <v-timeline
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
    </v-timeline> -->
    </v-stepper>
  </div>
  <div v-else>
    <div class="page-title text-center py-12">
      <h2 class="text-2xl font-weight-semibold text--primary d-flex align-center justify-center">
        <span class="me-2">Data Tidak Ada</span>
        <!-- <v-icon color="warning">
          {{ mdiAlert }}
        </v-icon> -->
      </h2>
      <p class="mt-2">
        Maaf, data claim tracker anda tidak ada <br>
      </p>

      <div class="misc-character d-flex justify-center">
        <v-img
          class="mt-5"
          max-width="500"
          src="../../assets/images/3d-characters/no_data.svg"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import moment from 'moment'
import { mdiCheck, mdiAlert } from '@mdi/js'

// import QrcodeVue from 'qrcode.vue'
// import DemoSimpleTableBasic from '../simple-table/demos/DemoSimpleTableBasic.vue'

export default {
  components: {
    // DemoSimpleTableBasic,

    // QrcodeVue,
  },
  data() {
    return {
      items: [],
      messages: [
        {
          pesan: '', tanggal: '', color: '', complete: false,
        },
        {
          pesan: '', tanggal: '', color: '', complete: false,
        },
        {
          pesan: '', tanggal: '', color: '', complete: false,
        },
        {
          pesan: '', tanggal: '', color: '', complete: false,
        },
      ],
      mdiCheck,
      mdiAlert,
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
    //  API
      axios
        .get(`http://202.148.5.146:8003/api/claimtracker/${localStorage.getItem('cer_nmbr')}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }) // 2000001
        .then(response => {
          // Pushing data
          this.items = response.data.data
          const latest = this.items.length - 1

          this.messages = []

          if (this.items != null) {
            this.messages.push(
              {
                pesan: 'Registrasi Klaim', tanggal: this.items[latest].register_claim, color: '#9E9E9E', complete: false,
              },
            )
            this.messages.push(
              {
                pesan: 'Persetujuan Registrasi', tanggal: this.items[latest].persetujuan_registrasi, color: '#9E9E9E', complete: false,
              },
            )
            this.messages.push(
              {
                pesan: 'Siap di Proses', tanggal: this.items[latest].siap_di_proses, color: '#9E9E9E', complete: false,
              },
            )
            this.messages.push(
              {
                pesan: 'Persetujuan transfer', tanggal: this.items[latest].persetujuan_transfer, color: '#9E9E9E', complete: false,
              },
            )

            this.messages.push(
              {
                pesan: 'Selesai',
                tanggal: this.items[latest].persetujuan_transfer,

                color: '#9E9E9E',
              },
            )
          }

          if (this.items[latest].register_claim !== '') {
            this.messages[0].color = 'success'
            this.messages[0].complete = true
          }
          if (this.items[latest].persetujuan_registrasi !== '') {
            this.messages[1].color = 'success'
            this.messages[1].complete = true
          }
          if (this.items[latest].siap_di_proses !== '') {
            this.messages[2].color = 'success'
            this.messages[2].complete = true
          }
          if (this.items[latest].persetujuan_transfer !== '') {
            this.messages[3].color = 'success'
            this.messages[3].complete = true

            this.messages[4].color = 'success'
            this.messages[4].complete = true
          }

          console.log(this.messages)
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateClaim(i) {
      const date = new Date()
      this.messages[i].tanggal = moment(date).format('DD MMM YYYY HH:mm')
      this.messages[i].color = 'success'
    },
  },
}
</script>

<style lang="css" scoped>
.card {
  background-color: #EFF3F4 !important;
}

.border {
  border-left: 1px solid rgba(0, 0, 0, 0.12) !important;
}

@import '~@/plugins/vuetify/default-preset/preset/misc.scss';

</style>
