<template lang='md'>
  <v-btn round small depressed color='' class='mx-0 px-2' to='/'>
    <v-icon left small>arrow_back</v-icon>home &nbsp;&nbsp;
  </v-btn>
  <div class='display-3 font-weight-thin'>
    Speckle Blog
  </div>
  <div class='grey--text subheading'>Blogging like it's '99.</div>
  <br>
  <!-- <v-chip label color='primary' outline v-for='topic in topics'>{{topic}}</v-chip> -->
  <div v-for='(article, index) in articles' :key='article.id' class='my-4 elevation-0'>
    <v-hover>
      <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} pa-1 pb-3`" :to="{ name: 'blog-slug', params: {slug: article.slug} }">
        <v-card-text>
          <div class='title font-weight-thin py-3'>{{article.title}}</div>
          <span class='grey--text subheading'>by {{article.author.name}} <span v-if="article.author.title">• {{article.author.title}} </span>•
             <v-chip color='primary' outline small style='margin-top:0px;' v-for='category in article.categories' :key='category.name'>{{category.name}}</v-chip>
            </span> 
          <br>&nbsp;
          <br>
          <v-img v-if="article.image && article.image.formats && article.image.formats.large" :src="strapiBaseUri+article.image.formats.large.url" aspect-ratio="2"></v-img>
          <span class='grey--text text--darken-2'>{{ article.summary }}</span>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
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
      strapiBaseUri: process.env.strapiBaseUri, 
    };
  },
  layout: "blog",
  computed: {
    // posts( ) {
    //   return this.$store.getters[ 'blog/getPosts' ]
    // },
    topics() {
      return this.$store.getters["blog/getTopics"];
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  },
  // asyncData: () => ({
  //   title: "Just a hack",
  //   description: "Nothing special.",
  //   author: "Dimitrie!",
  //   tags: ["test", "wow", "etc"]
  // })
};
</script>
