<template>
  <!-- <v-app :dark='$store.state.dark'> -->
  <v-container >
    <v-layout justify-center align-center style='height: 400px;'>
      <v-flex xs12 class='text-xs-center'>
        <span class='display-3 font-weight-thin'>Oops! You deleted speckle.</span>
        <br>
        <span class=''>We're joking, we just can't find that page.</span>
        <br>
        <v-btn to='/' large color='black' class='mt-4' outline round>Home</v-btn>
        <v-btn to='/docs/essentials/start' large color='black' class='mt-4' outline round>Documentation</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <Footer></Footer> -->
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
