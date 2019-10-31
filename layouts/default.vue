<template>
  <v-app :dark='$store.state.dark'>
    <Toolbar></Toolbar>
    <v-content id='top-content'>
      <v-alert v-model="alert" class='pa-5' color='primary' icon='' style='margin-top:-3px;'>
        <h2 class='font-weight-thin text-xs-center'>
          📣 Hello! Join the <a class='white--text text--white' href="https://www.eventbrite.co.uk/e/speckle-community-meetup-tickets-77280460939" target="_blank">Speckle Community Meetup </a> on the 27th November, London!
        </h2>
        <p class='caption text-xs-center mt-3'>Latest news, Features, Tips & Tricks, and more! Free Attendance. Tickets available <a class='white--text text--white' href="https://www.eventbrite.co.uk/e/speckle-community-meetup-tickets-77280460939" target="_blank">here</a>.</p>
      </v-alert>
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
