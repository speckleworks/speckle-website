<template>
  <v-footer height="auto">
    <v-container grid-list-xl mt-5 >
<!--       <v-layout row wrap class='text-xs-center' style='position: absolute; top:0; opacity: 0.42;z-index:1000; width:100%;'>
        <v-flex xs12 sm12>
          <v-img :src='require("~/assets/splash-3.svg")' responsive></v-img>
        </v-flex>
      </v-layout> -->
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <v-layout align-center style='height:420px' row wrap class='mb-5 text-xs-center'>
            <v-flex sm12 md6>
              <strong class="display-1 font-weight-light">Want to know more? Get in touch!</strong>
            </v-flex>
            <v-flex sm12 md6>
              <v-btn large round color='primary' class='mt-1' href='https://twitter.com/speckle_works' target='_blank'>Twitter <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
              <v-btn large round color='primary' class='mt-1' href='https://slacker.speckle.works' target='_blank'>Slack <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
              <v-btn large round color='primary' class='mt-1' href='https://discourse.speckle.works' target='_blank'>Forum <v-icon right>arrow_right_alt</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm8 md6 mt-5>
          <span class='caption'>This project has previously received funding from the European Union’s Horizon 2020 research and innovation program under the Marie Sklodowska-Curie grant agreement No 642877.</span>
          <v-divider class='my-3'></v-divider>
          <span class='caption'>
            Started off by Dimitrie Stefanescu in 2015 while at The Bartlett & InnoChain. All work (c) 2015 - {{new Date().getFullYear()}} project contributors, licensed under MIT.
          </span>
          <!-- </v-card-text> -->
          <!-- </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
    <!-- </v-responsive> -->
  </v-footer>
</template>
<style>
</style>
