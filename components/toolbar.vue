<template>
  <v-toolbar app :class='`${$store.state.dark ? "royal-bg" : ""}`' :dark='$store.state.dark'>
    <v-toolbar-side-icon @click.native='toggleNavBar()' :style='`opacity: ${sideIcon ? "1" :"0"}`'></v-toolbar-side-icon>
    <v-toolbar-title class="hidden-sm-and-down font-weight-light text-uppercase" @click='randomize()'><span style="user-select: none;">{{title}}</span></v-toolbar-title>
    <v-spacer class='xxxhidden-sm-and-down'></v-spacer>
    <v-toolbar-items>
      <v-btn small flat to='/'>HOME</v-btn>
      <v-btn small flat to='/docs/essentials/introduction/what'>DOCS</v-btn>
      <v-btn small flat to='/blog'>BLOG</v-btn>
      <v-btn icon small depressed round @click='toggleDark'>
        <v-icon small>wb_sunny</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  props: {
    sideIcon: { type: Boolean, default: false },
  },
  data( ) {
    return {
      navBar: false,
      speckle: [ 'speckle', 'spackle', 'schmeckle', 'spockle', '🍔 speck 🥓', 'spleckle', 'fluxckle 🙊' ],
      title: 'speckle'
    }
  },
  methods: {
    toggleDark( ) {
      this.$store.commit( 'TOGGLE_DARK' )
      localStorage.setItem( 'dark', this.$store.state.dark )
    },
    toggleNavBar( ) {
      this.$store.commit( 'TOGGLE_NAVBAR' )
    },
    randomize( ) {
      this.title = this.speckle[ Math.floor( Math.random( ) * this.speckle.length ) ]
    }
  }
}

</script>
<style>
</style>
