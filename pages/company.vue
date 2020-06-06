<template>
  <div>
    <v-container grid-xl class="mt-5 pa-0">
      <v-layout row wrap px-5 mt-5 py-0>
        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-2 font-weight-light xxx-text-uppercase">Company</h1>
        </v-flex>

        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">
            <strong>About</strong>
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

        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">
            <strong>Team</strong>
          </h1>
        </v-flex>
     
          <v-flex xs12 md6 px-5 py-4 style="min-height:10vh">
            <v-card class="pa-3" height="100%" >
              <center>
                <v-avatar size="100" class="mt-3">
                  <img
                    src="https://strapi.speckle.works/uploads/dim_b422a05413.jpeg"
                    alt="Dimitrie"
                  />
                </v-avatar>
              </center>

              <v-card-title primary-title class="justify-center">
                <h3 class="headline mb-0">Dimitrie Stefanescu</h3>
              </v-card-title>
               <v-card-title class="justify-center"> 
                <span class="title font-weight-light">Co-Founder & Full-Stack Developer</span>
              </v-card-title>
              <v-card-text
                class="pa-4"
                style="text-align: center;"
              >Background in Architecture & Engineering and Programming. Worked @ Arup, UCL, Bogdan Van Broeck, TU Berlin, TU Delft.</v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 px-5 py-4 style="min-height:10vh">
            <v-card class="pa-3" height="100%" >
              <center>
                <v-avatar size="100" class="mt-3">
                  <img
                    src="https://strapi.speckle.works/uploads/002032440031_(1)_993f81cfbb.jpeg"
                    alt="Matteo"
                  />
                </v-avatar>
              </center>
              <v-card-title primary-title class="justify-center">
               <h3 class="headline mb-0">Matteo Cominetti</h3>
              </v-card-title>
              <v-card-title class="justify-center"> 
                <span class="title font-weight-light">Co-Founder & Full-Stack Developer</span>
              </v-card-title>         
              <v-card-text
                class="pa-4"
                style="text-align: center;"
              >Background in Architecture and Engineering. Worked @ Arup, Foster+Partners, WeWork and CASE Inc.</v-card-text>
            </v-card>
          </v-flex>


           <v-flex xs12 py-4 mb-5>
        <v-hover>
          <v-card slot-scope="{ hover }" dark color='primary' :class="`elevation-${hover ? 20 : 10} card-outer white-text text-white pa-4`" height="100%" target="_blank" href='mailto:hello@speckle.systems'>
            <v-layout align-center fill-height>
              <v-flex mb-4>
                <div class='display-1 font-weight-thin my-4'>Want to work with us?</div>
                <div class='subheading'>We are always looking for talented people who believe in our mission to join our team! Get in touch at hello@speckle.systems.</div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-hover>
      </v-flex>
 
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
        </v-flex>
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
