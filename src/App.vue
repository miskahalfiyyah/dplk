<template>
  <div>
    <upgrade-to-pro></upgrade-to-pro>
    <component :is="resolveLayout">
      <!-- <Loader></Loader> -->
      <router-view></router-view>
      <upgrade-to-pro></upgrade-to-pro>
    </component>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useRouter } from '@/utils'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import UpgradeToPro from './components/UpgradeToPro.vue'
import login from './views/pages/Login.vue'

// import { createDecipheriv } from 'crypto'

// import Loader from './components/Loader.vue'

export default {
  components: {
    LayoutBlank,
    LayoutContent,
    UpgradeToPro,
    login,

    // Loader,
  },
  data() {
    return {
      token: sessionStorage.getItem('token') ?? '',
    }
  },
  computed: {
    login() {
      return this.$store.state.isLoggedIn
    },
  },
  setup() {
    const { route } = useRouter()

    const resolveLayout = computed(() => {
      // Handles initial route
      if (route.value.name === null) return null

      if (route.value.meta.layout === 'blank') return 'layout-blank'

      return 'layout-content'
    })

    return {
      resolveLayout,
    }
  },

  mounted() {
    if (this.login === false) {
      this.$router.replace({ path: '/login' })
    }
  },
}
</script>

<style lang="scss">
@import '~sweetalert2/dist/sweetalert2.css';
</style>
