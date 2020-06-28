<template>
  <div>
    <v-container grid-xl class="mt-5 pa-0">
      <v-layout row wrap px-5 mt-5 py-0>
        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-2 font-weight-light xxx-text-uppercase">About</h1>
        </v-flex>

        <v-flex xs12 py-4 style="min-height:10vh" class="mt-5">
          <h1 class="title text-uppercase text-xs-center">
            <strong>Vision 🔭</strong>
          </h1>
        </v-flex>
        <v-flex xs12 >
          <v-card class="mx-5">
          <v-card-text>
               <p class=" ma-5 display-2 font-weight-thin">We want Speckle to become the de-facto data platform that liberates AEC from proprietary file formats & closed source software.</p>
         
          </v-card-text>
          </v-card>
           <p class="headline font-weight-light mt-5">
            Read more about our vision in our post
            <a href="https://speckle.systems/blog/speckle2-vision-and-faq">Speckle 2.0 Vision and FAQ</a>!
          </p>
        </v-flex>

      

        <v-flex xs12 py-4 style="min-height:10vh" class="mt-5">
           <h1 class="title text-uppercase text-xs-center">
            <strong>History 📜</strong>
          </h1>
          <p class="headline font-weight-light mt-5">
            Speckle was started by
            <a href="https://twitter.com/idid">Dimitrie</a> in November 2015 as instrumentation for his research in digital design communication.
          </p>
          <p class="headline font-weight-light mt-5">
            The project has then grown a lot, thanks to the help and support of the many
            <router-link class="flink" to="/contributors">contributors</router-link>,
            active
            <router-link class="flink" to="/community">community</router-link>and most notably,
            <a class="link" href="https://arup.com">Arup</a>.
          </p>
          <p class="headline font-weight-light mt-5">
            In January 2020, despite the imminent world pandemic and crisis, Dimitrie and
            <a
              href="https://twitter.com/teocomi"
            >Matteo</a> founded a company that would
            <router-link class="flink" to="/blog/goodnews">focus exclusively on developing Speckle</router-link>.
          </p>
        </v-flex>

          <v-flex xs12 py-4 style="min-height:10vh" class="mt-5 mb-5">
           <h1 class="title text-uppercase text-xs-center">
            <strong>Contact ✉️</strong>
          </h1>
          <p class="headline font-weight-light mt-5">You can reach us at <a href="mailto:hello@speckle.systems">hello@speckle.systems</a></p>
        </v-flex>
<!-- 
        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">
            <strong>Brand Collateral</strong>
          </h1>
          <p class="headline font-weight-light mt-5">
            Spread the love! If you're building on top of Speckle, we would love for you to show that somewhere in your project 👉
            <a
              href="https://drive.google.com/file/d/1cR2PmNdpiRpegXTAbtZCWSz3JBJoLbLB/view?usp=sharing"
            >get here the Speckle Logo</a>!
          </p>
          <p class="caption">Click on the download archive button in the top right corner.</p>
        </v-flex> -->
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Speckle: Data Platform for AEC",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Speckle is the open source data platform for aec."
        }
      ]
    };
  }
};
</script>
<style type="text/css">
.link {
  text-decoration: none;
  border-bottom: 2px solid #0a66ff;
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

.flink {
  text-decoration: none;
}
</style>
