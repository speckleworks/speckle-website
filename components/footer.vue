<template>
  <v-footer height="auto" :dark='background === "" ? false : true'>
    <v-container fluid grid-list-xl pt-5 :class="`${background}`">
      <v-layout justify-center row wrap>
        <v-flex xs8>
          <v-layout align-center style='height:520px' row wrap class='mb-5 xx-text-xs-center'>
            <v-flex xs12 class='text-xs-center'>
              <div class='subheading mb-5'>
                Speckle has an active community - get in touch via the channels below!
              </div>
              <v-btn large round color='' style='width: 200px' class='mt-1' href='https://twitter.com/speckle_works' target='_blank'>Twitter <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
              <v-btn large round color='' style='width: 200px' class='mt-1' href='https://slacker.speckle.works' target='_blank'>Slack <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
              <v-btn large round color='' style='width: 200px' class='mt-1' href='https://discourse.speckle.works' target='_blank'>Forum <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
              <div class='subheading mt-5 pt-5 text-none text--white'>
                <router-link :class='background==="" ? "":"footer-link"' to='/'>Home</router-link> •
                <router-link :class='background==="" ? "":"footer-link"' to='/docs/start'>Docs</router-link> •
                <router-link :class='background==="" ? "":"footer-link"' to='/blog'>Blog</router-link> •
                <a :class='background==="" ? "":"footer-link"' href='https://github.com/speckleworks' target="_blank">Github</a>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 class='text-xs-center'>
          <span class='caption'>This project has previously received funding from the European Union’s Horizon 2020 research and innovation program under the Marie Sklodowska-Curie grant agreement No 642877. Started off by Dimitrie Stefanescu in 2015 while at The Bartlett & InnoChain. All work (c) 2015 - {{new Date().getFullYear()}} project contributors, licensed under MIT.
          </span>
          <!-- </v-card-text> -->
          <!-- </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
    <!-- </v-responsive> -->
  </v-footer>
</template>
<script>
export default {
  computed: {
    background( ) {
      if ( this.$route.path.includes( 'docs' ) ) return ''
      if ( this.$store.state.dark ) return 'royal-bg'
      return 'super-bg'
    }
  }
}

</script>
<style>
.footer-link {
  color: #D8D8D8 !important;
}

</style>
