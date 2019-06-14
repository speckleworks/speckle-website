<template>
  <v-app :dark='$store.state.dark'>
    <v-toolbar :scroll-threshold='100' app :scroll-off-screen='true' inverted-scroll class='elevation-0'>
      <v-toolbar-title>
        <!-- <img src="https://speckle.works/img/logos/logo-xs.png" height='21' contain> -->
        <!-- <router-link to='/'><span class='text-uppercase font-weight-thin'>Speckle</span></router-link>
        <span class='text-uppercase font-weight-thin caption'>Speckle</span> -->
        <v-btn small depressed round color='primary' to='/' class='xxxfont-weight-light'>SPECKLE</v-btn>
        <span class='text-uppercase font-weight-thin caption'>AEC & Data</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn small depressed round color='primary' to='/'>home</v-btn> -->
      <v-btn icon small depressed round @click='toggleDark'>
        <v-icon small>wb_sunny</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <Footer></Footer>
  </v-app>
</template>
<script>
import Footer from '~/components/footer.vue'
export default {
  components: {
    Footer
  },
  data( ) {
    return {}
  },
  methods: {
    toggleDark( ) {
      this.$store.commit( 'TOGGLE_DARK' )
      localStorage.setItem( 'dark', this.$store.state.dark )
    }
  }
}

</script>
