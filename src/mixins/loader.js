export default {
  data: () => ({
    loaderActive: false,
  }),
  methods: {
    showLoader() {
      this.loaderActive = true
    },
    hideLoader() {
      this.loaderActive = false
    },
  },
}
