export default {
  computed: {
    isPC() {
      return !navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)
    },
  },
}
