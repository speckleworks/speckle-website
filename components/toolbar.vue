<template>
  <v-toolbar prominent app clipped-right :class='`${$store.state.dark ? "" : ""}`' style='z-index: 20' :dark='$store.state.dark'>
    <v-toolbar-items class="hidden-sm-and-down-xxx">
      <v-btn flat to='/' class='hidden-sm-and-down'>
        <v-img src='https://discourse.speckle.works/uploads/default/original/1X/25cc7f19595c444b111cff766d2310034f9efa79.png' width='20'></v-img>&nbsp;&nbsp;
        Speckle
      </v-btn>
      <div class='hidden-sm-and-down' style="height: 100%">
        <template v-for='item in menuItems'>
          <v-btn flat :to='item.link' v-if='item.local'>{{item.name}}</v-btn>
          <v-btn flat color='grey' :href='item.link' target="_blank" v-else>{{item.name}} &nbsp;<v-icon small>open_in_new</v-icon></v-btn>
        </template>
      </div>
      <div class='hidden-md-and-up' style="height: 100%">
        <v-menu offset-y >
          <template v-slot:activator="{ on }">
            <v-btn flat block v-on="on">
              <v-img src='https://discourse.speckle.works/uploads/default/original/1X/25cc7f19595c444b111cff766d2310034f9efa79.png' width='20'></v-img>&nbsp;&nbsp;
              Speckle
              <v-icon>arrow_drop_down</v-icon>
            </v-btn>
          </template>
          <v-card class='elevation-0' >
            <v-btn large block flat to='/'>Home</v-btn>
            <template v-for='item in menuItems'>
              <v-btn large block flat :to='item.link' v-if='item.local'>{{item.name}}</v-btn>
              <v-btn large block flat :href='item.link' target="_blank" v-else>{{item.name}}&nbsp;<v-icon small>open_in_new</v-icon></v-btn>
            </template>
          </v-card>
        </v-menu>
      </div>
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
      title: 'speckle',
      menuItems: [ {
          name: "Docs",
          link: "/docs/essentials/start",
          local: true
        },
        {
          name: "Blog",
          link: "/blog",
          local: true
        },
        {
          name: "About / Contact",
          link: "/about",
          local: true
        },
        {
          name: "Web App",
          link:  "https://app.speckle.systems",
          local: false
        },
        {
          name: "Github",
          link: "https://github.com/speckleworks",
          local: false
        },
        {
          name: "Forum",
          link: "https://discourse.speckle.works",
          local: false
        },

      ]
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
