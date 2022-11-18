<template>
  <v-app>
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>

    <v-app-bar
      id="navigation"
      app
      flat
      fixed
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
          ></v-app-bar-nav-icon>
          <!-- <v-text-field
            rounded
            dense
            outlined
            :prepend-inner-icon="icons.mdiMagnify"
            class="app-bar-search flex-grow-0"
            hide-details
          ></v-text-field> -->

          <v-spacer></v-spacer>

          <!-- Right Content -->
          <v-btn
            style="text-decoration: none !important;"
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
          <!-- <router-link
            to="/logout"
            style="text-decoration: none !important;"
          >
            <v-icon
              size="22"
              color="error"
              class="mx-1"
            >
              {{ icons.mdiLogoutVariant }}
            </v-icon>
            <span style="color: #FF6157; font-weight: 500;">Logout</span>
          </router-link> -->
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height=""
      class="px-0"
    >
      <div
        class="boxed-container w-full mb-3"
        style="margin-top: 100px"
      >
        <div class="mx-6 d-flex justify-center">
          <span>
            Copyright &copy; 2022 <a
              href="http://www.pertalife.com/"
              class="text-decoration-none"
              target="_blank"
            >PT. Perta Life Insurance</a></span>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/composition-api'
import { mdiLogoutVariant } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'

// import ThemeSwitcher from './components/ThemeSwitcher.vue'
// import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  components: {
    VerticalNavMenu,

    // ThemeSwitcher,
    // AppBarUserMenu,
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiLogoutVariant,
      },
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem('cer_nmbr')
      sessionStorage.removeItem('client_nm')
      sessionStorage.removeItem('company_nm')
      sessionStorage.removeItem('employe_code')
      sessionStorage.removeItem('token')
      sessionStorage.clear()
      sessionStorage.clear()
      axios
        .get('http://202.148.5.146:8003/api/auth/logout', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .then(() => {
          this.$router.push({ path: '/login' })
        })
        .catch(error => {
          console.log('There was an error!', error)
        })
    },
  },
}

window.addEventListener('scroll', () => {
  const scroll = window.top.scrollY

  if (scroll >= 10) {
    document.getElementById('navigation').classList.add('navigasi-bar')
  } else if (scroll < 10) {
    document.getElementById('navigation').classList.remove('navigasi-bar')
  }
})
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.navigasi-bar {
  filter: drop-shadow(2px 2px 4px rgb(190, 190, 190))
;}
</style>
