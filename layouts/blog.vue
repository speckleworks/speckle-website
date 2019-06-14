<template>
  <v-app :dark='$store.state.dark'>
    <v-toolbar :scroll-threshold='0' app :scroll-off-screen='true' x-inverted-scroll class='elevation-0'>
      <v-toolbar-title>
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
      <v-container>
        <v-layout justify-center row wrap>
          <v-flex xs12 sm10 lg8 class=' mb-4' v-if='frontmatter'>
            <div class='display-1 font-weight-thin mb-4'>
              <v-btn round small depressed color='' class='mx-0 px-2' to='/blog'>
                <v-icon left small>arrow_back</v-icon>Blog &nbsp;&nbsp;
              </v-btn>
            </div>
            <div class='display-2 font-weight-thin mb-4'>
              {{frontmatter.attributes.title}}
            </div>
            <div class='grey--text subheading'>
              by <b>{{frontmatter.attributes.author}}</b> • <i>{{date}}</i> •
              <v-chip color='grey' outline small style='margin-top:-2px;' v-for='topic in frontmatter.attributes.tags' :key='topic'>{{topic}}</v-chip>
            </div>
            <v-divider class='mt-2 mb-4'></v-divider>
          </v-flex>
          <v-flex xs11 sm10 lg8>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
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
  computed: {
    frontmatter( ) {
      return this.$store.getters[ 'blog/getPost' ]( this.$route.path )
    },
    date(){
      return new Date(this.frontmatter.attributes.date).toLocaleDateString()
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
<style type="text/css" scoped>
</style>
