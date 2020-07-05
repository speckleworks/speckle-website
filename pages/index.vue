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
      <v-layout justify-center class='mt-5 px-5' row wrap>
        <v-flex sx12 class='text-xs-center px-4 mt-5'>
          <span class='display-3 font-weight-light'>
            Your design. <span class='primary--text font-weight-thin'>Your data.</span>
          </span>
        </v-flex>
        <v-flex xs6 class='text-xs-center'>
          <p class='subheading grey--text'>
            Speckle is Open Source, so you always have a choice and can adapt it to any data sovereignty requirements. You can deploy it on your favourite cloud provider's infrastructure, or on premise, under your supervision.
          </p>
          <v-btn flat round color='primary' class='my-3 ' to='/blog/ownyourdata'>
            <v-icon left>arrow_right_alt</v-icon>Read more <v-icon right>arrow_right_alt</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row wrap align-center>
        <v-flex sm6 xs12>
          <v-card class='align-center elevation-0 transparent text-xs-center text-lg-right'>
            <v-card-text class='display-2 font-weight-light text-xs-center text-lg-right'>
              Connect & Curate
            </v-card-text>
            <v-card-text>
              <p class='subheading grey--text'>Speckle integrates with some of the most popular AEC software tools:</p>
              <v-chip v-for='item in integrations' :to='item.link'>{{item.name}}</v-chip>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12>
          <v-img height='500' contain :src='require("~/assets/main/interop.svg")'></v-img>
        </v-flex>
        <v-flex sm6>
          <v-card class='align-center elevation-0 transparent text-xs-center text-md-right'>
            <v-card-text class="display-2 font-weight-light text-xs-center text-md-right">
              Object Based
            </v-card-text>
            <v-card-text>
              <p class='subheading grey--text'>
                Say goodbye to files. Speckle gives you object-level control of what you share, infinite versioning history & changelogs.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm6>
          <v-img height='500' contain :src='require("~/assets/main/datanotfiles.svg")'></v-img>
        </v-flex>
        <v-flex sm6 xs12>
          <v-card class='align-center elevation-0 transparent text-xs-center text-lg-right'>
            <v-card-text class='display-2 font-weight-light text-xs-center text-lg-right'>
              Web Native
            </v-card-text>
            <v-card-text>
              <p class='subheading grey--text'>
                Speckle has been built from the internet up. Wether you want to view your models in the browser, or control access permissions and review changes, we've got you covered.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12>
          <v-img height='500' contain :src='require("~/assets/main/webfirst.svg")'></v-img>
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
      strapiBaseUri: process.env.strapiBaseUri,
      integrations: [ {
              name: "Speckle for Grasshopper",
              link: "/docs/clients/grasshopper/basics",
              local: true
            },
            {
              name: "Speckle for Rhino",
              link: "/docs/clients/rhino/basics",
              local: true
            },
            {
              name: "Speckle for Dynamo",
              link: "/docs/clients/dynamo/basics",
              local: true
            },
            {
              name: "Speckle for Revit",
              link: "/docs/clients/revit/basics",
              local: true
            },
            {
              name: "Speckle for Blender",
              link: "/docs/clients/blender/basics",
              local: true
            },
            {
              name: "Speckle for GSA",
              link: "/docs/clients/gsa/basics",
              local: true
            }
          ]
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
