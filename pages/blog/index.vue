<template lang='md'>
  <v-layout row wrap class='mt-5'>
    <v-flex class='xs12 sm12 md8 lg8 pl-3 pb-3 elevation-0'>
      <div class='display-3 font-weight-thin'>
        Speckle Blog
      </div>
      <div class='grey--text subheading'>The latest updates, announcements, and tutorials from the Speckle team. Do you want to write something for Speckle? Get in touch with your tutorial idea/draft at hello [@] speckle [dot] sytems!</div>
      <div>
        <div class='title my-4 font-weight-thin'>Categories</div>
        <v-btn :color="`${selectedTopic === topic ? 'primary':''}`" :class="`${true ? 'ml-0' : ''}`" v-for='(topic, index) in allCategories' @click='selectTopic(topic)' :key="topic">{{topic}} <span v-if='selectedTopic===topic'>&nbsp;&nbsp;<v-icon>close</v-icon></span></v-btn>
      </div>
      <div class='my-4'>
        <div class='title my-4 font-weight-thin'>Connect</div>
        <v-btn outline small xxx-color='primary' xxx-style='width: 200px' class=' ml-0' href='https://twitter.com/speckle_works' target='_blank'>Twitter
        </v-btn>
        <v-btn outline small xxx-color='primary' xxx-style='width: 200px' class='' :href='$store.state.slackInviteUrl' target='_blank'>Slack
        </v-btn>
        <v-btn outline small xxx-color='primary' xxx-style='width: 200px' class='' href='https://discourse.speckle.works' target='_blank'>Forum
        </v-btn>
      </div>
    </v-flex>
    <template v-for='(article, index) in filteredArticles'>
      <v-flex :key='article.id' class='xs12 sm6 md4 lg4 pl-3 pb-3 elevation-0'>
        <v-hover>
          <v-card v-if="article" slot-scope="{ hover }" height="100%" :class="`elevation-${hover ? 10 : 1} card-outer`" :to="{ name: 'blog-slug', params: {slug: article.slug} }">
            <v-img v-if="article.image && article.image.formats" :src="strapiBaseUri + article.image.formats.small.url" height="200px"> </v-img>
            <!-- gif don't have 'format' -->
            <v-img v-else-if="article.image && article.image.url" :src="strapiBaseUri + article.image.url" height="200px">
            </v-img>
            <v-img v-else height="200px">
              <div class="fill-height repeating-gradient"></div>
            </v-img>
            <v-card-text class='text-left'>
              <div class='title font-weight-thin py-3'>{{article.title}}</div>
              <span class='grey--text text--darken-2'>{{ article.summary }}</span>
              <br>&nbsp;
              <br>
              <span class='grey--text subheading' v-if="article.categories">
                <v-chip color='primary' outline small style='margin-top:0px;' v-for='category in article.categories' :key='category.name'>{{category.name}}</v-chip>
              </span>
            </v-card-text>
            <v-card-actions class="card-actions" v-if="article.author">
              <v-list two-line color="transparent">
                <!-- <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader> -->
                <v-list-tile class="grow">
                  <v-list-tile-avatar v-if="article.author.avatar">
                    <img :src="strapiBaseUri+article.author.avatar.formats.thumbnail.url">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{article.author.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ article.date | moment("MMMM Do YYYY") }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex v-if='index===3' :key='article.id + "callout"' class='xs12 sm6 md4 lg4 pl-3 pb-3 elevation-0'>
        <v-hover>
          <v-card slot-scope="{ hover }" dark color='primary' :class="`elevation-${hover ? 20 : 10} card-outer white-text text-white pa-4`" height="100%" href='mailto:hello@speckle.systems'>
            <v-layout align-center fill-height>
              <v-flex>
                <div class='display-1 font-weight-thin my-4'>Psst! Have an idea for an article?</div>
                <div class='subheading'>We are keen to feature tutorials, insights, case studies! Let us know by dropping us an email at hello@speckle.systems.</div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-hover>
      </v-flex>
    </template>
  </v-layout>
</template>
<!--
  frontmatter
-->
<script>
import articlesQuery from "~/apollo/queries/articles";

export default {
  computed: {
    filteredArticles() {
      if (this.selectedTopic) {
        return this.articles.filter(
          art =>
            -1 !== art.categories.findIndex(c => c.name === this.selectedTopic)
        );
      }
      return this.articles;
    },
    allCategories() {
      let cats = [];
      this.articles.forEach(art => {
        cats.push(...art.categories.map(c => c.name));
      });

      return [...new Set(cats)];
    }
  },
  data() {
    return {
      articles: [],
      selectedTopic: null,
      strapiBaseUri: process.env.strapiBaseUri
    };
  },
  methods: {
    selectTopic(topic) {
      if (this.selectedTopic === topic) {
        this.selectedTopic = null;
        return;
      }
      this.selectedTopic = topic;
    },
    clearTopic() {
      this.selectedTopic = null;
    }
  },
  layout: "blog",
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  }
};
</script>
<style scoped>
.card-outer {
  position: relative;
  padding-bottom: 80px !important;
}

.card-actions {
  position: absolute;
  bottom: 0;
}

.repeating-gradient-22 {
  background: #bdc3c7;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #2c3e50, #bdc3c7);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #2c3e50, #bdc3c7);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: 0.2;
  /*transform: rotate( 45deg ) ;*/
}

.repeating-gradient {
  background: linear-gradient(90deg, #ffffff 12px, transparent 1%) center,
    linear-gradient(#ffffff 12px, transparent 1%) center, #0a66ff;
  background-size: 14px 14px;
}
</style>
