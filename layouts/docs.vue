<template>
  <v-app :dark='$store.state.dark'>
    <v-navigation-drawer app v-model='navBar'>
      <v-toolbar class='elevation-0 xxxtransparent pa-0'>
        <v-toolbar-title class='text-uppercase font-weight-thin' style='margin-left:-6px;'>
          Docs
        </v-toolbar-title>
      </v-toolbar>
      <v-list two-line>
        <v-list-tile v-for='(primaryItem) in $store.state.docs.tree.children.filter(kid => kid.type==="file")' :key='primaryItem.name' :to='primaryItem.slug'>
          <v-list-tile-content>
            <v-list-tile-title class='xxx-font-weight-light'>
              {{ primaryItem.name }}
            </v-list-tile-title>
            <v-list-tile-sub-title class='caption' v-html="primaryItem.attributes.summary"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group :value="true" v-if='item.type==="directory"' v-for='(item, index) in $store.state.docs.tree.children' :key='item.name'>
          <template v-slot:activator>
            <v-list-tile :to='item.slug'>
              <v-list-tile-content>
                <v-list-tile-title class='font-weight-bold text-capitalize'>
                  {{item.name}}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for='(subItem) in item.children' :key='subItem.name' :to="`${subItem.slug}`">
            <v-list-tile-content>
              <v-list-tile-title class='font-weight-light-xxx'>{{ subItem.name }}</v-list-tile-title>
              <v-list-tile-sub-title class='caption' v-html="subItem.attributes.summary"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :scroll-threshold='0' app :scroll-off-screen='true' x-inverted-scroll class='elevation-0'>
      <v-toolbar-side-icon @click.native='navBar=!navBar'></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn small depressed round color='primary' to='/' class='xxxfont-weight-light'>SPECKLE</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon small depressed round @click='toggleDark'>
        <v-icon small>wb_sunny</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container v-if='frontmatter'>
        <v-layout justify-center row wrap>
          <v-flex xs12 sm10 lg8 class=' mb-4' xxxv-if='frontmatter'>
            <div class='display-2 font-weight-thin mb-4'>
              {{frontmatter.attributes.title}}
            </div>
            <div class='grey--text subheading'>
              {{frontmatter.attributes.summary}} • Last modified on {{new Date(frontmatter.mtime).toLocaleDateString()}}
            </div>
            <v-divider class='mt-2 mb-4'></v-divider>
          </v-flex>
          <v-flex xs11 sm10 lg8>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Footer from '~/components/footer.vue'
export default {
  head() {
    if(!this.attributes) return { title: 'Speckle'}
    return {
      title: `Speckle / ${this.frontmatter.attributes.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.frontmatter.attributes.summary }
      ]
    }
  },
  components: {
    Footer
  },
  data( ) {
    return {
      navBar: true
    }
  },
  computed: {
    frontmatter( ) {
      return this.$store.getters[ 'docs/getDoc' ]( this.$route.path )
    },
    date( ) {
      return new Date( this.frontmatter.attributes.date ).toLocaleDateString( )
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
