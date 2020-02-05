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
      <v-layout row wrap justify-center xxxid='features'>
        <v-flex xs12 sm9 md6 xl4>
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`${hover ? '' : 'xxxtransparent'} elevation-${hover ? 0 : 0} pa-3`">
              <v-responsive :aspect-ratio='4/2.5'>
                <v-card-text>
                  <v-icon large color='grey lighten-2'>usb</v-icon>
                  <h1 class='display-1 font-weight-light'>Connect</h1>
                  <h3 class='text-uppercase mt-3 subheading font-weight-medium primary--text'>Data Curation & Integration</h3>
                  <p class='grey--text text--darken-1 mt-3'>Speckle provides a default set of connectors that help you easily curate the design data you need to share.</p>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Rhino</v-chip>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Grasshopper</v-chip>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Dynamo</v-chip>
                  <v-chip large label outline color='xxx-primary' xxxclass='elevation-5'>Revit (WIP)</v-chip>
                  <v-chip large label outline color='xxx-primary' xxxclass='elevation-5'>GSA (WIP)</v-chip>
                  <v-chip large label outline color='xxx-primary' xxxclass='elevation-5'>Blender</v-chip>
                </v-card-text>
              </v-responsive>
<!--               <v-slide-x-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out lighten-2 v-card--reveal display-3 white--text" style="height: 100%; z-index: 1000">
                  <v-img :src='require("@/assets/splashes/better-interop.png")' contain></v-img>
                </div>
              </v-slide-x-transition> -->
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 sm9 md6 xl4>
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`${hover ? '' : 'xxxtransparent'} elevation-${hover ? 0 : 0} pa-3`">
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
<!--               <v-slide-x-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out lighten-2 v-card--reveal display-3 white--text" style="height: 100%; z-index: 1000">
                  <v-img :src='$store.state.dark ? require("@/assets/splashes/manage-dark.png") : require("@/assets/splashes/manage.png")' contain></v-img>
                </div>
              </v-slide-x-transition> -->
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 style='height: 1px' class='ma-0 pa-0'></v-flex>
        <v-flex xs12 sm9 md6 xl4>
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`${hover ? 'v-card--reveal-back' : ''} elevation-${hover ? 0 : 0} pa-3`">
              <v-responsive :aspect-ratio='4/2.5'>
                <v-card-text>
                  <v-icon large color='grey lighten-2'>multiline_chart</v-icon>
                  <h1 class='display-1 font-weight-light'>Coordinate</h1>
                  <h3 class='text-uppercase mt-3 subheading font-weight-medium primary--text'>Data Informed Discussions</h3>
                  <p class='grey--text text--darken-1 mt-3'>From viewing multiple data streams online to advanced querying, Speckle allows you to coordinate and gather insights on your project's data footprint.</p>
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Online 3d Viewer</v-chip>
                  <!-- <v-chip large label outline color='primary' xxxclass='elevation-5'>Filter, Sort</v-chip> -->
                  <v-chip large label outline color='primary' xxxclass='elevation-5'>Queries (API)</v-chip>
                  <v-chip large label outline>Data History (API)</v-chip>
                </v-card-text>
              </v-responsive>
  <!--             <v-slide-x-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out lighten-2 v-card--reveal display-3 white--text" style="height: 100%; z-index: 1000">
                  <v-img :src='$store.state.dark ? require("@/assets/splashes/coordinate-dark.png") : require("@/assets/splashes/coordinate.png")' contain></v-img>
                </div>
              </v-slide-x-transition> -->
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 sm9 md6 xl4>
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`${hover ? '' : 'xxxtransparent'} elevation-${hover ? 0 : 0} pa-3`">
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
<!--               <v-slide-x-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out lighten-2 v-card--reveal display-3 white--text" style="height: 100%; z-index: 1000">
                  <v-img :src='require("@/assets/splashes/carbon.png")' contain></v-img>
                </div>
              </v-slide-x-transition> -->
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex id='gettingStarted' xs12 sm12 md12 lg12 xl9 class='text-xs-center xxmt-5 pt-5' >
          <v-hover>
            <v-card slot-scope="{ hover }" class='transparent elevation-0'>
              <!-- <v-parallax xxxheight='800' :src='$store.state.dark ? require("@/assets/splashes/viewer-dark.png") : require("@/assets/splashes/viewer-light.png")'></v-parallax> -->
              <!-- <v-img :style='`opacity: ${hover ? 0.42 : 0.84}; transition: all 1s ease;`'  :src='$store.state.dark ? require("@/assets/splashes/viewer-dark.png") : require("@/assets/splashes/viewer-light.png")'></v-img> -->
              <v-img :style='`opacity: ${hover ? 0.42 : 1}; transition: all 1s ease;`' :src='require("@/assets/splashes/screenshots.png")'></v-img>
                <div class="d-flex v-card--reveal-btn" style="height: 100%;">
                  <v-flex xs12>
                    <v-btn large color='primary' class='my-3 pa-4 elevation-5' style="height:210px; width:210px; xxxposition: relative; xxxmargin-top:-50%" to='/docs/essentials/start'>
                      <v-icon left large>local_library</v-icon>Getting Started
                    </v-btn>
<!--                     <div class='caption'>
                      <v-btn icon small href='https://hestia.speckle.works/#/view/qHzcdZVGk' target="_blank">
                        <v-icon small>open_in_new</v-icon>
                      </v-btn>
                    </div> -->
                  </v-flex>
                </div>
            </v-card>
          </v-hover>
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
      <v-layout row wrap justify-center class='py-5'>
        <v-flex xs12 md6 xl4>
          <v-layout row wrap>
            <v-flex xs12 md12 class='px-4 my-3 text-xs-center text-md-left'>
              <span class='display-1 font-weight-light'>Blog</span><br>
              <span class='caption'>Infrequent updates from Speckle HQ</span>
            </v-flex>
            <v-flex xs12 v-for='post in posts' :key='post.attributes.title' class='px-4'>
              <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 0} pa-3`" :to='post.href'>
                  <v-card-text>
                    <span class='title font-weight-thin'>{{post.attributes.title}}</span><br>
                    by {{post.attributes.author}} on <b>{{new Date(post.attributes.date).toLocaleDateString()}}</b>
                    <br>&nbsp;
                    <br>
                    <span class='grey--text text--darken-2'>{{post.attributes.summary}}</span>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-flex>
            <v-flex xs12>
              <v-card class='transparent elevation-0'>
                <v-card-text>
                  <v-btn flat round small color='primary' class='my-3' to='/blog'>older news</v-btn>
                  <v-btn flat round small color='primary' class='my-3' href='https://mailchi.mp/8cc51c53d86d/speckle' target='_blank'>
                    newsletter
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
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
  computed: {
    posts( ) {
      return this.$store.getters[ 'blog/getPosts' ].slice(0,3)
    },
  }
}
</script>
<style type="text/css">
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
