<template>
  <v-app :dark="$store.state.dark">
    <Toolbar></Toolbar>
    <v-content>
      <v-container grid-list-md>
        <v-layout justify-center row wrap>
        </v-layout>
        <v-layout justify-center row wrap>
          <v-flex>
            <nuxt />
          </v-flex>
          <!-- <v-flex xs12 sm10 md8 lg6 v-if='nextPrevious.index!==-1' mb-5>
            <v-layout row wrap>
              <v-flex xs12 my-5>
              </v-flex>
              <v-flex xs6 v-if='nextPrevious.next' class='text-xs-left'>
                <v-icon large>keyboard_arrow_left</v-icon>
                <div class='grey--text subheading'>Next up:</div>
                <div class='grey--text headline font-weight-thin text-truncate'>
                  <router-link :to='nextPrevious.next.slug'>
                    {{nextPrevious.next.attributes.title}}
                  </router-link>
                </div>
              </v-flex>
              <v-flex xs6 v-if='nextPrevious.prev' class='text-xs-right'>
                <v-icon large>keyboard_arrow_right</v-icon>
                <div class='grey--text subheading'>Previous post:</div>
                <div class='grey--text headline font-weight-thin text-truncate'>
                  <router-link :to='nextPrevious.prev.slug'>
                    {{nextPrevious.prev.attributes.title}}
                  </router-link>
                </div>
              </v-flex>
            </v-layout>
           {{nextPrevious}}
         </v-flex>
          -->
        </v-layout>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>
<script>
  import Footer from "~/components/footer.vue";
import Toolbar from "~/components/toolbar.vue";
export default {
  head() {
    if (!this.frontmatter) return { title: "Speckle Blog" };
    return {
      title: `Speckle Blog / ${this.frontmatter.attributes.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.frontmatter.attributes.summary
        }
      ]
    };
  },
  components: {
    Footer,
    Toolbar
  },
  computed: {
    nextPrevious() {
      //return this.$store.getters[ 'blog/getNext' ]( this.$route.path )
    },
    frontmatter() {
      // return this.$store.getters[ 'blog/getPost' ]( this.$route.path )
    }
  },
  methods: {
    toggleDark() {
      this.$store.commit("TOGGLE_DARK");
      localStorage.setItem("dark", this.$store.state.dark);
    }
  }
};
</script>
<style type="text/css" scoped>
</style>
