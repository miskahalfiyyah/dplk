<template>
  <a
    href="mailto:dplktm@pertalife.com"
    class="float"
  >
    <div class="mt-3 mx-3">
      <v-img
        max-width="60"
        src="@/assets/images/misc/cs.png"
      ></v-img>
    </div>
  </a>
</template>

<script>
import { mdiChatQuestion } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiChatQuestion,
      },
    }
  },
}
</script>

<style scoped>

.float {
  position: fixed;
    width:  60px;
    height: 60px;
    bottom: 20px;
    right: 20px;
    background-color: white;
    border-radius: 50px;
    text-align: center;
    border: 2px solid #FF6157 !important;
    /* box-shadow: 0 1px 5px 1px #FF6157 !important; */
}
</style>
