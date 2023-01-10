<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-3 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="mx-auto text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/logos/logo siperdana 1.png')"
          max-height="150px"
          max-width="150px"
          alt="logo"
          contain
          eager
          class="app-logo"
        ></v-img>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list
      v-if="userType == 1"
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
      <nav-menu-link
        title="Informasi Peserta"
        :to="{ name: 'informasi-peserta' }"
        :icon="icons.mdiAccountOutline"
      ></nav-menu-link>
      <nav-menu-link
        color="white"
        title="Pengkinian Data"
        :to="{ name: 'pengkinian-data' }"
        :icon="icons.mdiAccountEditOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Informasi Saldo"
        :to="{ name: 'informasi-saldo'}"
        :icon="icons.mdiAccountDetailsOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Harga Unit"
        :to="{ name: 'harga-unit' }"
        :icon="icons.mdiAccountCashOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Claim Tracker"
        :to="{ name: 'claim-tracker' }"
        :icon="icons.mdiChartTimelineVariant"
      ></nav-menu-link>
      <nav-menu-link
        title="History Claim"
        :to="{ name: 'history-claim' }"
        :icon="icons.mdiHistory"
      ></nav-menu-link>
      <nav-menu-link
        title="Bukti Transfer"
        :to="{ name: 'bukti-transfer' }"
        :icon="icons.mdiFileDocumentOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Bukti Potong Pajak"
        :to="{ name: 'bukti-potong-pajak' }"
        :icon="icons.mdiFileChartOutline"
      ></nav-menu-link>
      <!-- <nav-menu-link
        title="Simulasi"
        :to="{ name: 'simulasi' }"
        :icon="icons.mdiCalculator"
      ></nav-menu-link> -->
      <nav-menu-link
        title="Download"
        :to="{ name: 'download' }"
        :icon="icons.mdiFileDownloadOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Quesioner"
        :to="{ name: 'quisioner' }"
        :icon="icons.mdiFileQuestionOutline"
      ></nav-menu-link>
      <!-- <nav-menu-link
        title="Kontak Kami"
        :to="{ name: 'contact-us' }"
        :icon="icons.mdiAccountBoxOutline"
      ></nav-menu-link> -->
      <nav-menu-link
        title="Ubah Password"
        :to="{ name: 'change-passwd' }"
        :icon="icons.mdiLockOutline"
      ></nav-menu-link>
    </v-list>

    <!-- Menu Perusahaan -->
    <v-list
      v-else
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
      <!-- Menu Perusahaan -->
      <nav-menu-link
        title="Info Saldo Perusahaan"
        :to="{ name: 'informasi-saldo-perusahaan' }"
        :icon="icons.mdiAccountCashOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Rekap Manfaat"
        :to="{ name: 'rekap-manfaat' }"
        :icon="icons.mdiAccountCheckOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Master List"
        :to="{ name: 'master-list' }"
        :icon="icons.mdiAccountDetailsOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="Booking Claim"
        :to="{ name: 'booking-claim' }"
        :icon="icons.mdiAccountPlusOutline"
      ></nav-menu-link>
    </v-list>
    <v-divider></v-divider>
    <v-btn
      style="text-decoration: none !important; font-weight: 600;"
      class="mx-5"
      @click="logout()"
    >
      <v-icon
        size="22"
        color="error"
        class="mx-1"
      >
        {{ icons.mdiLogoutVariant }}
      </v-icon>
      <span style="color: #FF6157; font-weight: 500;">Logout</span>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import axios from 'axios'
import {
  mdiAccountOutline,
  mdiAccountDetailsOutline,
  mdiAccountCashOutline,
  mdiChartTimelineVariant,
  mdiHistory,
  mdiCalculator,
  mdiFileDownloadOutline,
  mdiFileQuestionOutline,
  mdiAccountBoxOutline,
  mdiLockOutline,
  mdiAccountEditOutline,
  mdiFileDocumentOutline,
  mdiFileChartOutline,
  mdiAccountPlusOutline,
  mdiAccountCheckOutline,
  mdiLogoutVariant,
} from '@mdi/js'

// import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
// import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    // NavMenuSectionTitle,
    // NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      userType: sessionStorage.getItem('user_type'),
    }
  },
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiAccountDetailsOutline,
        mdiAccountCashOutline,
        mdiChartTimelineVariant,
        mdiHistory,
        mdiCalculator,
        mdiFileDownloadOutline,
        mdiFileQuestionOutline,
        mdiAccountBoxOutline,
        mdiLockOutline,
        mdiAccountEditOutline,
        mdiFileDocumentOutline,
        mdiFileChartOutline,
        mdiAccountPlusOutline,
        mdiAccountCheckOutline,
        mdiLogoutVariant,
      },
    }
  },
  created() {
    console.log()
  },
  methods: {
    logout() {
      axios
        .get('http://202.148.5.146:8003/api/auth/logout', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .then(() => {
          // sessionStorage.removeItem('cer_nmbr')
          // sessionStorage.removeItem('client_nm')
          // sessionStorage.removeItem('company_nm')
          // sessionStorage.removeItem('employe_code')
          // sessionStorage.removeItem('token')
          sessionStorage.clear()
          localStorage.clear()
          this.$router.push({ path: '/login' })
        })
        .catch(error => {
          console.log('There was an error!', error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

.app-navigation-menu {
  background-color: #396EB3 !important;
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.nav-menu-link {
  color: white !important;
  font-weight: 600;
}

.v-application a {
  color: white !important;
  font-weight: 600;
}

.v-list-item__icon {
  color: white !important;
  font-weight: 600;
}

.v-application a:active{
  color: white !important;
  font-weight: 600;
}
</style>
