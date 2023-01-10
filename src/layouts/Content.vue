<template>
  <v-app>
    <vertical-nav-menu
      :is-drawer-open.sync="isDrawerOpen"
    ></vertical-nav-menu>

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
          <v-img
            :src="require('@/assets/images/misc/member.svg')"
            max-height="250px"
            max-width="250px"
            alt="member of pertamina & timah tbk"
            contain
            eager
            class="app-logo me-3"
          ></v-img>

          <v-spacer></v-spacer>

          <!-- Right Content -->
          <v-img
            :src="require('@/assets/images/logos/Logo DPLK Tugu Mandiri - landscape.png')"
            max-height="150px"
            max-width="150px"
            alt="logo"
            contain
            eager
            class="app-logo me-3"
          ></v-img>
          <!-- <v-btn
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
          </v-btn> -->
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
        class="boxed-container w-full d-flex flex-lg-row flex-xl-row space-lg-between d-flex flex-column justify-center space-between"
        style="margin-top: 200px"
      >
        <div class="d-flex justify-sm-center justify-xs-center space-between">
          <p class="d-flex align-center mb-0">
            Member of:
          </p>
          <div class="mx-6 d-flex justify-sm-center">
            <v-img
              :src="require('@/assets/images/logos/pertamina-n-timah-logo-footer.svg')"
              max-height="200px"
              max-width="200px"
              alt="pertamina-n-timah-logo-footer"
              contain
              eager
              class="app-logo me-3"
            ></v-img>
          </div>
        </div>
        <div class="d-flex justify-sm-center justify-xs-center space-between">
          <p class="d-flex align-center mb-0">
            Terdaftar dan diawasi oleh OJK
          </p>
          <div class="mx-6 d-flex">
            <v-img
              :src="require('@/assets/images/logos/logo_yuk_siapkan_pensiun.png')"
              max-height="60px"
              max-width="60px"
              alt="logo_yuk_siapkan_pensiun"
              contain
              eager
              class="app-logo mr-3"
            ></v-img>
            <v-img
              :src="require('@/assets/images/logos/logo-footer.svg')"
              max-height="60px"
              max-width="60px"
              alt="pertamina-n-timah-logo-footer"
              contain
              eager
              class="app-logo"
            ></v-img>
          </div>
        </div>

        <div
          class="mx-6 mb-3 mt-3"
        >
          <div class="mx-6 d-flex justify-center">
            <a
              href="https://www.facebook.com/people/PertaLife/100077508842602/"
              class="text-decoration-none"
              target="_blank"
            ><v-img
              :src="require('@/assets/images/logos/facebook-circle-fill.svg')"
              max-height="100px"
              max-width="100px"
              alt="logo fb"
              contain
              eager
              class="app-logo me-3"
            ></v-img></a>
            <a
              href="https://youtube.com/channel/UCa1SyFFxKZnTKAZohsJ1i_A"
              class="text-decoration-none"
              target="_blank"
            ><v-img
              :src="require('@/assets/images/logos/youtube-fill.svg')"
              max-height="100px"
              max-width="100px"
              alt="logo youtube"
              contain
              eager
              class="app-logo me-3"
            ></v-img></a>
            <a
              href="https://instagram.com/pertalife_insurance?igshid=YmMyMTA2M2Y="
              class="text-decoration-none"
              target="_blank"
            ><v-img
              :src="require('@/assets/images/logos/instagram-fill.svg')"
              max-height="100px"
              max-width="100px"
              alt="logo fb"
              contain
              eager
              class="app-logo me-3"
            ></v-img></a>
          </div>
          <div class="mx-6 d-flex justify-center">
            <span class="text-center">
              Copyright &copy; 2022 <a
                href="http://www.pertalife.com/"
                class="text-decoration-none"
                target="_blank"
              >PT. Perta Life Insurance</a></span>
          </div>
        </div>
        <!-- <div
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
        </div> -->
      </div>
    </v-footer>
  </v-app>
</template>

<script>

// import axios from 'axios'
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
  data() {
    return {
      userType: 0,
    }
  },
  async created() {
    this.scroll()
    this.userType = await sessionStorage.getItem('user_type')
  },
  methods: {
    scroll() {
      window.addEventListener('scroll', () => {
        const scroll = window.top.scrollY

        if (scroll >= 10) {
          document.getElementById('navigation').classList.add('navigasi-bar')
        } else if (scroll < 10) {
          document.getElementById('navigation').classList.remove('navigasi-bar')
        }
      })
    },

    // logout() {
    //   axios
    //     .get('http://202.148.5.146:8003/api/auth/logout', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
    //     .then(() => {
    //       sessionStorage.removeItem('cer_nmbr')
    //       sessionStorage.removeItem('client_nm')
    //       sessionStorage.removeItem('company_nm')
    //       sessionStorage.removeItem('employe_code')
    //       sessionStorage.removeItem('token')
    //       sessionStorage.clear()
    //       this.$router.push({ path: '/login' })
    //     })
    //     .catch(error => {
    //       console.log('There was an error!', error)
    //     })
    // },
  },
}
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
