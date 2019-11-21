<template>
  <v-toolbar prominent app clipped-right :class='`${$store.state.dark ? "" : ""}`' style='z-index: 20' :dark='$store.state.dark'>
    <v-toolbar-items class="hidden-sm-and-down-xxx" >
      <v-btn flat to='/'>
        <v-img src='https://discourse.speckle.works/uploads/default/original/1X/25cc7f19595c444b111cff766d2310034f9efa79.png' width='20'></v-img>&nbsp;&nbsp;
        Speckle
      </v-btn>
      <v-btn flat to='/docs/essentials/start'>Docs</v-btn>
      <v-btn flat to='/blog'>Blog</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click.native='toggleNavBar()' :style='`opacity: ${sideIcon ? "1" :"0"}`'></v-toolbar-side-icon>
  </v-toolbar>
</template>
<script>
export default {
  props: {
    sideIcon: { type: Boolean, default: false },
  },
  data( ) {
    return {
      navBar: true,
      speckle: [ 'speckle ✨', 'spackle 👷🏽‍♂️', 'spock le 🖖', 'speck 🥓' ],
      title: 'speckle'
    }
  },
  methods: {
    toggleDark( ) {
      this.$store.commit( 'TOGGLE_DARK' )
      localStorage.setItem( 'dark', this.$store.state.dark )
    },
    toggleNavBar( ) {
      this.$bus.$emit( 'toggle-nav' )
    },
    randomize( ) {
      this.title = this.speckle[ Math.floor( Math.random( ) * this.speckle.length ) ]
    }
  }
}

</script>
<style>
</style>
