<template>
  <v-app :dark='$store.state.dark'>
    <v-navigation-drawer app clipped right v-model='navbar'>
      <v-container mt-2 style='height:60px;' class='hidden-lg-and-up'>
      </v-container>
      <v-container mt-2>
        <v-autocomplete return-object solo hide-no-data append-icon="search" label="Search" :items='$store.state.docs.flat' item-text="name" item-value="name" :filter="searchFilter" v-on:input="$router.push($event.slug)">
          <template slot="item" slot-scope="directories">
            <div>
              {{directories.item.attributes.title}}
              <br>
              <span class="caption text-light">
                {{directories.item.attributes.summary}}
              </span>
            </div>
          </template>
        </v-autocomplete>
      </v-container>
      <v-list two-line expand class='py-0 my-0'>
        <!-- Nav pane -->
        <directory :directory='$store.state.docs.tree'></directory>
        <!-- End nav -->
      </v-list>
    </v-navigation-drawer>
    <Toolbar side-icon></Toolbar>
    <v-content>
      <v-container v-if='frontmatter'>
        <v-layout justify-center row wrap>
          <v-flex xs12 sm10 lg6 class='my-4 py-3'>
            <v-alert
            class="mb-5"
            :value="true"
              color="orange"
              dark
              icon="mdi-firework"
              
              dismissible
            >
              🎉 Speckle v2 alpha is out 🚀! Check out the announcement of <a href="https://speckle.systems/blog/speckle-2-alpha/">server</a> and <a href="https://speckle.systems/blog/2-connectors-alpha">connectors</a>.
            </v-alert>
            <div class='display-2 font-weight-thin mb-4'>
              {{frontmatter.attributes.title}}
            </div>
            <div class='grey--text subheading'>
              {{frontmatter.attributes.summary}} • Last modified on {{new Date(frontmatter.mtime).toLocaleDateString()}} • <a :href="`https://github.com/speckleworks/speckle-website/tree/master/${frontmatter.path}`" target='_blank' class=''>edit</a>
            </div>
            <v-divider class='mt-2 mb-4'></v-divider>
          </v-flex>
        </v-layout>
        <v-layout justify-center row wrap>
          <v-flex xs12 sm10 lg6>
            <!-- This is where content is injected -->
            <nuxt />
            <!-- End content injection -->
          </v-flex>
        </v-layout>
      </v-container>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>
<script>
import Footer from '~/components/footer.vue'
import Toolbar from '~/components/toolbar.vue'
import Directory from '~/components/directory.vue'

export default {
  head( ) {
    if ( !this.frontmatter ) return { title: 'Speckle Docs' }
    return {
      title: `Speckle Docs / ${this.frontmatter.attributes.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.frontmatter.attributes.summary }
      ]
    }
  },
  components: {
    Footer,
    Toolbar,
    Directory
  },
  watch: {},
  data( ) {
    return {
      navbar: false,
      alert: true
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
    },
    searchFilter( item, queryText, itemText ) {
      if ( item.name.toLocaleLowerCase( ).indexOf( queryText.toLocaleLowerCase( ) ) > -1 )
        return true
      if ( item.path.replace( /\\\//g, " " ).toLocaleLowerCase( ).indexOf( queryText.toLocaleLowerCase( ) ) > -1 )
        return true
      if ( item.attributes.summary.toLocaleLowerCase( ).indexOf( queryText.toLocaleLowerCase( ) ) > -1 )
        return true

      return false
    }
  },
  mounted( ) {
    this.$bus.$on( 'toggle-nav', ( ) => {
      this.navbar = !this.navbar
    } )
    if ( this.$vuetify.breakpoint.xs === true )
      this.navbar = false
    else
      this.navbar = true
  }
}

</script>
