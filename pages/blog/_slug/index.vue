<template>
  <v-app :dark="$store.state.dark">
    <Toolbar></Toolbar>
    <v-content v-if="article" grid-list-xl text-xs-center>
      <v-container>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <div class="display-1 font-weight-thin mb-4">
              <v-btn round small depressed color class="mx-0 px-2" to="/blog">
                <v-icon left small>arrow_back</v-icon>Blog &nbsp;&nbsp;
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs10 offset-xs1>
            <v-card :class="`elevation-${hover ? 12 : 2} pa-5`">
              <div class="display-2 font-weight-thin mb-4">{{article.title}}</div>
              <v-chip
                color="grey"
                outline
                small
                style="margin-top:-2px;"
                v-for="category in article.categories"
                :key="category.name"
              >{{category.name}}</v-chip>
              <div class="grey--text subheading">
                <v-list two-line>
                  <!-- <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader> -->
                  <v-list-tile class="grow">
                    <v-list-tile-avatar v-if="article.author.avatar">
                      <img :src="strapiBaseUri+article.author.avatar.formats.thumbnail.url" />
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{article.author.name}}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ article.date | moment("MMMM Do YYYY") }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </div>
              <v-divider class="mt-2 mb-4"></v-divider>
              <!-- </v-flex> -->
              <!-- </v-layout> -->
              <!-- <v-layout justify-center row wrap> -->
              <div v-html="$md.render(article.content)"></div>
              <!-- <v-flex xs12></v-flex> -->
              <!-- <v-flex xs12 sm10 md8 lg6 v-if="nextPrevious.index!==-1" mb-5>
            <v-layout row wrap>
              <v-flex xs12 my-5>
              </v-flex>
              <v-flex xs6 v-if="nextPrevious.next" class="text-xs-left">
                <v-icon large>keyboard_arrow_left</v-icon>
                <div class="grey--text subheading">Next up:</div>
                <div class="grey--text headline font-weight-thin text-truncate">
                  <router-link :to="nextPrevious.next.slug">{{nextPrevious.next.attributes.title}}</router-link>
                </div>
              </v-flex>
              <v-flex xs6 v-if="nextPrevious.prev" class="text-xs-right">
                <v-icon large>keyboard_arrow_right</v-icon>
                <div class="grey--text subheading">Previous post:</div>
                <div class="grey--text headline font-weight-thin text-truncate">
                  <router-link :to="nextPrevious.prev.slug">{{nextPrevious.prev.attributes.title}}</router-link>
                </div>
              </v-flex>
            </v-layout>
            {{nextPrevious}}
              </v-flex>-->
              <!-- </v-layout> -->
            </v-card>
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
import articleQuery from "~/apollo/queries/article";

export default {
  data() {
    return {
      articles: [],
      strapiBaseUri: process.env.strapiBaseUri
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { slug: this.$route.params.slug };
      }
    }
  },
  head() {
    if (!this.article) return { title: "Speckle Blog" };
    return {
      title: `Speckle Blog / ${this.article.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.article.summary
        }
      ]
    };
  },
  components: {
    Footer,
    Toolbar
  },
  computed: {
    article() {
      return this.articles[0];
    },
    nextPrevious() {
      // return this.$store.getters["blog/getNext"](this.$route.path);
    }
    // frontmatter() {
    //   return this.$store.getters["blog/getPost"](this.$route.path);
    // },
  },
  methods: {
  }
};
</script>
<style type="text/css" scoped>
</style>
