<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content v-if="article" grid-list-xl text-xs-center class="blogpost">
      <v-container>
        <v-layout row wrap>
          <v-flex sm10 offset-sm1>
            <div class="display-1 font-weight-thin mb-4">
              <v-btn round small depressed color class="mx-0 px-2" to="/blog">
                <v-icon left small>arrow_back</v-icon>Blog &nbsp;&nbsp;
              </v-btn>
            </div>
          </v-flex>
          <v-flex sm10 offset-sm1>
            <v-card
              :class="{'pa-5': $vuetify.breakpoint.smAndUp,'pa-3': $vuetify.breakpoint.xs, 'elevation-4 mb-3':''}"
            >
              <div class="display-2 font-weight-thin mb-4">{{article.title}}</div>
              <div class="grey--text subheading author" v-if="article.author">
                <v-list two-line>
                  <!-- <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader> -->
                  <v-list-tile class="grow">
                    <v-list-tile-avatar v-if="article.author.avatar">
                      <img :src="strapiBaseUri+article.author.avatar.formats.thumbnail.url" />
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{article.author.name}}</v-list-tile-title>
                      <v-list-tile-sub-title>
                        {{ article.date | moment("MMMM Do YYYY") }}
                        <span v-if="article.categories">
                          <v-chip
                            color="grey"
                            outline
                            small
                            style="margin-top:-2px;"
                            v-for="category in article.categories"
                            :key="category.name"
                          >{{category.name}}</v-chip>
                        </span>
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </div>

              <v-divider class="mt-2 mb-4"></v-divider>

              <!-- </v-flex> -->
              <!-- </v-layout> -->
              <!-- <v-layout justify-center row wrap> -->
              <v-card-text v-html="content"></v-card-text>
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

          <v-flex class="xs10 offset-xs1 elevation-0 mb-5">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                dark
                color="primary"
                :class="`elevation-${hover ? 20 : 10} card-outer white-text text-white pa-4`"
                height="100%"
              >
                <v-layout align-center fill-height>
                  <v-flex>
                    <div class="display-1 font-weight-thin my-4">Psst! Have an idea for an article?</div>
                    <div
                      class="subheading"
                    >We are keen to feature tutorials, insights, case studies! Have something you'd like to share? Get in touch!</div>
                    <v-flex class="mt-4 mb-3">
                      <v-btn
                        outline
                        small
                        xxx-color="primary"
                        xxx-style="width: 200px"
                        class="ml-0"
                        href="mailto:speckle.systems"
                        target="_blank"
                      >Email</v-btn>
                      <v-btn
                        outline
                        small
                        xxx-color="primary"
                        xxx-style="width: 200px"
                        class="ml-0"
                        href="https://twitter.com/speckle_works"
                        target="_blank"
                      >Twitter</v-btn>
                      <v-btn
                        outline
                        small
                        xxx-color="primary"
                        xxx-style="width: 200px"
                        class
                        :href="$store.state.slackInviteUrl"
                        target="_blank"
                      >Slack</v-btn>
                      <v-btn
                        outline
                        small
                        xxx-color="primary"
                        xxx-style="width: 200px"
                        class
                        href="https://discourse.speckle.works"
                        target="_blank"
                      >Forum</v-btn>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Footer from "~/components/footer.vue";
import Toolbar from "~/components/toolbar.vue";
import articleQuery from "~/apollo/queries/article";
const attrs = require("markdown-it-attrs");
const highlight = require("markdown-it-highlightjs");
const markdownStyle = require('markdown-it-style');
const md = require("markdown-it")()
  .use(attrs)
  .use(highlight)
  .use(markdownStyle, {
    h1: "font-weight: 100;margin-top: 24px; margin-bottom: 24px;",
    h2: "font-weight: 100;margin-top: 24px; margin-bottom: 24px;",
    h3: "font-weight: 100;margin-top: 20px; margin-bottom: 20px;",
    h4: "font-weight: 100;margin-top: 16px; margin-bottom: 16px;",
    pre: "margin-bottom: 16px;",
    ul: "margin-bottom: 16px;",
  });

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
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.article.title
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.article.summary
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.article.image
            ? process.env.strapiBaseUri + this.article.image.formats.small.url
            : "/spksplash.png"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Speckle, The AEC Data Platform"
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
    content() {
      return md.render(this.articles[0].content);
    },
    nextPrevious() {
      // return this.$store.getters["blog/getNext"](this.$route.path);
    }
    // frontmatter() {
    //   return this.$store.getters["blog/getPost"](this.$route.path);
    // },
  },
  methods: {}
};
</script>
<style type="text/css" scoped>
.blogpost {
  margin-top: -50px;
}
.author {
  margin-top: -20px;
  margin-left: -15px;
}
.author .v-chip {
  margin-top: 1px !important;
}
.author .v-chip:first-child {
  margin-left: 20px;
}
.v-list__tile__sub-title {
  height: 25px;
}
</style>
