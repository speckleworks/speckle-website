<template lang='md'>
  <div class='display-3 font-weight-thin'>
    Speckle Blog
  </div>
  <div class='grey--text subheading'>The latest updates, announcements, and tutorials from the Speckle team.</div>
  <br>
  <!-- <v-chip label color='primary' outline v-for='topic in topics'>{{topic}}</v-chip> -->
  <v-layout justify-center row wrap>
  <v-flex v-for='(article, index) in articles' :key='article.id' class='xs12 sm6 md4 my-4 elevation-0'>
    <v-hover>
     <v-card v-if="article" slot-scope="{ hover }" height="100%" :class="`elevation-${hover ? 12 : 2} pa-1 card-outer`" :to="{ name: 'blog-slug', params: {slug: article.slug} }">
        <v-card-media v-if="article.image && article.image.formats && article.image.formats.large"
        :src="strapiBaseUri + article.image.formats.large.url" height="200px">
        </v-card-media>
        <v-card-text height="100%" >
          <div class='title font-weight-thin py-3'>{{article.title}}</div>
          <span class='grey--text text--darken-2'>{{ article.summary }}</span>
          <br>&nbsp;
          <br>
          <span class='grey--text subheading'>
            <v-chip color='primary' outline small style='margin-top:0px;' v-for='category in article.categories' :key='category.name'>{{category.name}}</v-chip>
          </span> 
        </v-card-text>
        <v-card-actions class="card-actions">
          <v-list two-line>
            <!-- <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader> -->
            <v-list-tile class="grow">
              <v-list-tile-avatar v-if="article.author.avatar">
                <img  :src="strapiBaseUri+article.author.avatar.formats.thumbnail.url" >
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
  </v-layout>
</template>
<!--
  frontmatter
-->
<script>
import articlesQuery from "~/apollo/queries/articles";

export default {
  data() {
    return {
      articles: [],
      strapiBaseUri: process.env.strapiBaseUri
    };
  },
  layout: "blog",
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  }
  // asyncData: () => ({
  //   title: "Just a hack",
  //   description: "Nothing special.",
  //   author: "Dimitrie!",
  //   tags: ["test", "wow", "etc"]
  // })
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
</style>
