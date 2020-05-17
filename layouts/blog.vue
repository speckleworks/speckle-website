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
