<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content id='top-content'>
      <nuxt />
    </v-content>
    <Footer></Footer>
  </v-app>
</template>
<script>
import Footer from '~/components/footer.vue'
import Toolbar from '~/components/toolbar.vue'

export default {
  components: {
    Footer,
    Toolbar
  },
  data( ) {
    return {
      navbar: false,
      alert: true
    }
  },
  methods: {
    toggleDark( ) {
      this.$store.commit( 'TOGGLE_DARK' )
      localStorage.setItem( 'dark', this.$store.state.dark )
    }
  },
  mounted( ) {
    this.$bus.$on( 'toggle-nav', ( ) => {
      this.navbar = !this.navbar
    } )


  }
}

</script>
