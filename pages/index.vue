<template>
  <div>
    <v-container grid-xl class='mt-5'>
      <v-layout justify-center row wrap px-5 mt-5 class='text-xs-center'>
        <v-flex xs12 sm8 lg8 xl6 mt-5 py-4 style='min-height:40vh'>
          <h1 class='display-3 font-weight-light xxx-text-uppercase'>
            <b>Speckle</b> is the open source <span class='primary--text'>data</span> platform for aec
          </h1>
          <br>
          <br>
          <h2 class='grey--text subheading'>
            a fast, web-scale base for automation in design, engineering and construction.
          </h2>
          <br>
          <!-- <v-btn large round color='primary' class='mt-5' @click="$vuetify.goTo('#features')">Read more</v-btn> -->
          <v-btn large round small color='primary' class='mt-5' to='/docs/essentials/start'>Get Started</v-btn>
          <v-btn large flat round small color='primary' class='mt-5' href='https://github.com/speckleworks' target='_blank'>Github <v-icon right>arrow_right_alt</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- </v-responsive> -->
    <v-container grid-list-xl fluid mt-5>
      <v-layout justify-center row wrap align-center class='my-5'>
        <v-flex xs12 md12 xs-center class='text-xs-center xxx-text-md-left'>
          <span class='grey--text text--lighten-0 subheading'>Speckle has been seen in the wild at some of the most progressive AEC companies</span>
        </v-flex>
        <v-flex xs12 sm12 md8 id='features'>
          <v-img :src='require("~/assets/userlogos.png")' max-height='210' contain></v-img>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center>
        <v-flex id='nada' xs12 sm12 md12 lg12 xl9 class='pt-5'>
          <!-- <v-flex class='display-3 font-weight-thin'>Blog</v-flex> -->
          <v-layout row wrap class=''>
            <v-flex v-for='(article, index) in latestArticles' :key='article.id' class='xs12 sm6 md4 lg4  pl-3 pb-3 elevation-0'>
              <v-hover>
                <pre>{{article}}</pre>
                <v-card align-end v-if="article" slot-scope="{ hover }" height="100%" :class="`elevation-${hover ? 10 : 1} card-outer`" :to="{ name: 'blog-slug', params: {slug: article.slug} }">
                  <v-img v-if="article.image && article.image.formats" :src="strapiBaseUri + article.image.formats.small.url" height="200px">
                  </v-img>
                  <v-img v-else height="200px">
                    <div class="fill-height repeating-gradient"></div>
                  </v-img>
                  <v-card-text class='text-left'>
                    <div class='title font-weight-thin py-3'>{{article.title}}</div>
                    <span class='grey--text text--darken-2'>{{ article.summary }}</span>
                    <br>&nbsp;
                    <br>
                    <span class='grey--text subheading'>
                      <v-chip color='primary' outline small style='margin-top:0px;' v-for='category in article.categories' :key='category.name'>{{category.name}}</v-chip>
                    </span>
                  </v-card-text>
                  <v-card-actions class="card-actions">
                    <v-list two-line color="transparent">
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
            <v-flex class='xs12 sm12 md4 lg4  pl-3 pb-3 elevation-0'>
              <v-hover>
                <v-card dark color='primary' slot-scope="{ hover }" height="100%" :class="`elevation-${hover ? 10 : 1} card-outer white-text text-white pa-4`" to="/blog">
                  <v-layout align-center style='height:100%' row wrap>
                    <!-- <v-card-text class='text-left'> -->
                    <v-flex class='display-1 font-weight-thin xs12'>
                      Checkout The Speckle Blog <v-icon large style='ml-0 '>arrow_forward</v-icon>
                    </v-flex>
                    <v-flex class='subheading font-weight-thin xs12'>
                      The latest updates, announcements, and tutorials from the Speckle team.
                    </v-flex>
                    <!-- </v-card-text> -->
                  </v-layout>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout justify-center class='mt-5 py-5'>
        <v-flex class='text-xs-center px-4 my-5'>
          <span class='display-3 font-weight-light xxx-text-uppercase'>
            Your design. <span class='primary--text font-weight-thin'>Your data.</span>
          </span>
          <br>Speckle is easily deployed on the cloud provider of your choice, or on premise.
          <br>
          <v-btn flat round color='primary' class='my-3 ' to='/blog/ownyourdata'>
            <v-icon left>arrow_right_alt</v-icon>Read more <v-icon right>arrow_right_alt</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import articlesQuery from "~/apollo/queries/articles"
  export default {
  head() {
    return {
      title: 'Speckle: Data Platform for AEC',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Speckle is the open source data platform for aec.' }
      ]
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  },
  computed:{
    latestArticles() {
      return this.articles.slice(0,2)
    }
  },
  data( ) {
    return {
      articles: [],
      strapiBaseUri: process.env.strapiBaseUri
    }
  }
}
</script>
<style type="text/css">
.repeating-gradient {
  background: linear-gradient(90deg, #FFFFFF 12px, transparent 1%) center, linear-gradient(#FFFFFF 12px, transparent 1%) center, #0A66FF;
  background-size: 14px 14px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0px;
  right: -100%;
  justify-content: center;
  /*opacity: 1;*/
  position: absolute;
  width: 90%;
  z-index: 100;
  background: white;
}

.v-card--reveal-btn {
  align-items: center;
  bottom: 0;
  right: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}

</style>
