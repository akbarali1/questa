<script>
export default {
  layout    : 'login',
  middleware: 'isGuest',
  head() {
    return {
      title: this.$t('referalLink')
    };
  },
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  mounted() {
    localStorage.ref_id = this.slug
    this.$router.push('/auth/register')
  },
}
</script>

