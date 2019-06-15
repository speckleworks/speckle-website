<template>
  <v-app :dark='$store.state.dark'>
    <v-toolbar :scroll-threshold='300' app :scroll-off-screen='true' inverted-scroll class='elevation-0'>
      <v-toolbar-items>
        <v-btn small flat class='hidden-xs' @click="$vuetify.goTo('#top-content')">
          &nbsp;
          <img src='/speckle-min.png' style="width: 21px">
          &nbsp;
        </v-btn>
      </v-toolbar-items>
      <v-spacer class='hidden-sm-and-down'></v-spacer>
      <v-toolbar-items>
        <v-btn small flat to='/' class='xxxfont-weight-light'>HOME</v-btn>
        <v-btn small flat to='/docs/start' class='xxxfont-weight-light'>DOCS</v-btn>
        <v-btn small flat to='/blog' class='xxxfont-weight-light'>BLOG</v-btn>
      </v-toolbar-items>
      <v-btn icon small depressed round @click='toggleDark' class='hidden-sm-and-down'>
        <v-icon small>wb_sunny</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content id='top-content'>
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
    return {
      navBar: false
    }
  },
  methods: {
    toggleDark( ) {
      this.$store.commit( 'TOGGLE_DARK' )
      localStorage.setItem( 'dark', this.$store.state.dark )
    }
  }
}

</script>
