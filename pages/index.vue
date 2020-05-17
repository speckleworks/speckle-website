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
    <v-container grid-list-xl xx-fluid xxxmt-5>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md6 xl4>
          <v-hover>
            <v-card slot-scope="{ hover }" class="pa-3 elevation-0">
              <v-responsive :aspect-ratio='4/2.5'>
                <v-card-text>
                  <v-icon large color='grey lighten-2'>usb</v-icon>
                  <h1 class='display-1 font-weight-light'>Connect</h1>
                  <h3 class='text-uppercase mt-3 subheading font-weight-medium primary--text'>Data Curation & Integration</h3>
                  <p class='grey--text text--darken-1 mt-3'>Speckle provides a default set of connectors that help you easily curate the design data you need to share.</p>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Rhino</v-chip>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Grasshopper</v-chip>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Dynamo</v-chip>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Blender</v-chip>
                  <v-chip large label outline color='xxx-primary' xxxclass='elevation-5'>Revit (WIP)</v-chip>
                  <v-chip large label outline color='xxx-primary' xxxclass='elevation-5'>GSA (WIP)</v-chip>
                  <v-chip large label outline color='xxx-primary' xxxclass='elevation-5'>Unity (WIP)</v-chip>
                  <v-chip large label outline color='xxx-primary' xxxclass='elevation-5'>Unreal Engine (WIP)</v-chip>
                </v-card-text>
              </v-responsive>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 sm9 md6 xl4>
          <v-hover>
            <v-card slot-scope="{ hover }" class="pa-3 elevation-0">
              <v-responsive :aspect-ratio='4/2.5'>
                <v-card-text>
                  <v-icon large color='grey lighten-2'>supervisor_account</v-icon>
                  <h1 class='display-1 font-weight-light'>Manage</h1>
                  <h3 class='text-uppercase mt-3 subheading font-weight-medium primary--text'>People, Projects & Permissions</h3>
                  <p class='grey--text text--darken-1 mt-3'>You are in control of what you share, and with whom you share.</p>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Link Sharing</v-chip>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Projects & Teams</v-chip>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Access Permissions</v-chip>
                  <v-chip large label outline>Stakeholder Network (WIP)</v-chip>
                </v-card-text>
              </v-responsive>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 style='height: 1px' class='ma-0 pa-0'></v-flex>
        <v-flex xs12 sm9 md6 xl4>
          <v-hover>
            <v-card slot-scope="{ hover }" class="pa-3 elevation-0">
              <v-responsive :aspect-ratio='4/2.5'>
                <v-card-text>
                  <v-icon large color='grey lighten-2'>multiline_chart</v-icon>
                  <h1 class='display-1 font-weight-light'>Coordinate</h1>
                  <h3 class='text-uppercase mt-3 subheading font-weight-medium primary--text'>Data Informed Discussions</h3>
                  <p class='grey--text text--darken-1 mt-3'>From viewing multiple data streams online to advanced querying, Speckle allows you to coordinate and gather insights on your project's data footprint.</p>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Web 3D Viewer</v-chip>
                  <!-- <v-chip large label outline color='primary' xxxclass='elevation-5'>Filter, Sort</v-chip> -->
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Queries (API)</v-chip>
                  <v-chip large label outline>Data History (API)</v-chip>
                  <v-chip large label outline>Mobile 3D Viewer (WIP)</v-chip>
                </v-card-text>
              </v-responsive>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 sm9 md6 xl4>
          <v-hover>
            <v-card slot-scope="{ hover }" class="pa-3 elevation-0">
              <v-responsive :aspect-ratio='4/2.5'>
                <v-card-text class='xxx-text-xs-center'>
                  <v-icon large color='grey lighten-1'>code</v-icon>
                  <h1 class='display-1 font-weight-light'>Extend</h1>
                  <h3 class='text-uppercase mt-3 subheading font-weight-medium primary--text'>Automation & More</h3>
                  <p class='grey--text text--darken-1 mt-3'>
                    Speckle is a solid base for developing third party applications that enable the workflows you need.
                  </p>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Arup Carbon</v-chip>
                  <v-chip large label outline color='' xxxclass='elevation-5'>Part Tracking</v-chip>
                  <v-chip large label outline color='' xxxclass='elevation-5'>MEP Reporting</v-chip>
                </v-card-text>
              </v-responsive>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
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
            <v-flex class='xs12 sm6 md4 lg4  pl-3 pb-3 elevation-0'>
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
        <!--         <v-flex id='gettingStarted' xs12 sm12 md12 lg12 xl9 class='text-xs-center xxmt-5 pt-5'>
          <v-hover>
            <v-card slot-scope="{ hover }" class='transparent elevation-0'>
              <v-img :style='`opacity: ${hover ? 0.42 : 1}; transition: all 1s ease;`' :src='require("@/assets/splashes/screenshots.png")'></v-img>
              <div class="d-flex v-card--reveal-btn" style="height: 100%;">
                <v-flex xs12>
                  <v-btn large color='primary' class='my-3 pa-4 elevation-5' style="height:210px; width:210px; xxxposition: relative; xxxmargin-top:-50%" to='/docs/essentials/start'>
                    <v-icon left large>local_library</v-icon>Getting Started
                  </v-btn>
                </v-flex>
              </div>
            </v-card>
          </v-hover>
        </v-flex> -->
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
      <v-layout row wrap justify-center class='py-5'>
        <v-flex xs12 md6 xl4 class='px-4 my-3 text-xs-center text-md-left'>
          <span class='display-1 font-weight-light'>Speckle Tweets</span><br>
          <span class='caption'>Promoting the community's work with speckle!</span>
          <v-card style='max-height: 760px; overflow-y: scroll;' class='mt-4'>
            <a v-if='!$store.state.dark' class="twitter-timeline" data-lang="en" data-dnt="true" href="https://twitter.com/speckle_works?ref_src=twsrc%5Etfw">Tweets by speckle_works</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <a v-if='$store.state.dark' class="twitter-timeline" data-lang="en" data-dnt="true" data-theme="dark" href="https://twitter.com/speckle_works?ref_src=twsrc%5Etfw">Tweets by speckle_works</a>
          </v-card>
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

.v-card--reveal-back {
  /*transform: translateX(-50px) translateY(-50px);*/
  /*position: relative;*/
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
