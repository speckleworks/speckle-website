<template>
  <v-app>
    <v-snackbar
      class="mt-5 pa-5"
      :value="true"
      color="primary"
      dark
      :multi-line="true"
      top
      :timeout="0">
      <div>
        <h3 class="pa-0 ma-0">🚀 A brand new Speckle has arrived, check it out!</h3>
        <p class="pt-1 ma-0">Psss! You are browsing an old version, time to upgrgade 😉</p>
      </div>
      <v-btn
        text
        color="blue"
        href="https://speckle.systems"
      >
        Speckle v2
      </v-btn>
    </v-snackbar>
    <Toolbar></Toolbar>
    <v-content id='xxx-top-content'>
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
