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
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="mx-auto text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/logos/logo.png')"
          max-height="80px"
          max-width="80px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
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
        :to="{ name: 'form-layouts' }"
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
        title="Pengajuan Klaim"
        :to="{ name: 'pengajuan-klaim' }"
        :icon="icons.mdiAccountPlusOutline"
      ></nav-menu-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
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
      },
    }
  },
  created() {
    console.log()
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
  background-color: #002B49 !important;
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
}

.v-application a {
  color: white !important;
}

.v-list-item__icon {
  color: white !important;
}

.v-application a:active{
  color: #2174EA !important;
}
</style>
