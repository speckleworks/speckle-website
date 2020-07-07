<template>
  <div>
    <v-container grid-xl :class="`${ !$vuetify.breakpoint.smAndDown ? 'mt-5' : ''} pa-0`">
      <v-layout
        row
        wrap
        py-0
        :style="`${$vuetify.breakpoint.smAndDown ? '' : 'margin-top: 140px;'}`"
      >
        <v-flex xs12 sm12 md6>
          <v-card class="elevation-10 white--text pa-5" color="primary">
            <v-card-text>
              <p class="display-2 font-weight-thin">Our Mission</p>
              <p class="display-1 font-weight-thin">
                We want
                <b>Speckle</b> to become the de-facto data platform that liberates AEC from proprietary file formats & closed source software.&nbsp;&nbsp;&nbsp;
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md6 xpy-4>
          <v-card
            :class="`elevation-20 pa-5 ${ !$vuetify.breakpoint.smAndDown ? 'movearound-div' : ''}`"
          >
            <p class="display-2 font-weight-thin">About</p>
            <p class="headline font-weight-light mt-4">
              <a class="flink" href="https://twitter.com/idid">Dimitrie</a> wrote the first line of Speckle code in late 2015, as part of a research project at UCL into digital design communication.
            </p>
            <p class="headline font-weight-light mt-4">
              Since then, the project has matured into a
              <b>solid, open-source, data platform for automation in AEC</b> with a vibrant community of
              <a class="flink" href="/contributors">contributors</a> and happy hackers.
            </p>
            <p class="headline font-weight-light mt-4">
              In early 2020, against all odds, Dimitrie and
              <a
                class="flink"
                href="https://twitter.com/teocomi"
              >Matteo</a> founded a company that would
              <router-link class="flink" to="/blog/goodnews">focus exclusively on developing Speckle</router-link>.
            </p>
            <p class="headline font-weight-light mt-5">
              What's next? Read more about our vision in our post
              <a
                class="flink"
                href="/blog/speckle2-vision-and-faq"
              >Speckle 2.0 Vision and FAQ</a>!
            </p>
            <v-divider class="my-4"></v-divider>
            <p class="headline font-weight-thin">
              <v-icon style="position: relative;top:-3px;">email</v-icon>&nbsp;Want to know more? Get in touch
              <a
                href="mailto:hello@speckle.systems"
                style="text-decoration: none;"
              >here</a>.
            </p>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md6 xpy-4 class="mt-50" style="margin-top: -160px"></v-flex>
        <!--         <v-flex xs12 py-4 style="min-height:10vh" class="mt-5 mb-5">
          <h1 class="title text-uppercase text-xs-center">
            <strong>Contact ✉️</strong>
          </h1>
          <p class="headline font-weight-light mt-5">You can reach us at <a href="mailto:hello@speckle.systems">hello@speckle.systems</a></p>
        </v-flex>-->
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
        </v-flex>-->
      </v-layout>
      <v-layout justify-center row wrap px-5 mt-5 class="text-xs-center">
        <v-flex xs12 sm8 lg8 xl6 mt-5 py-5 style="min-height:20vh">
          <h1 class="display-2 font-weight-light xxx-text-uppercase">Team</h1>
          <p
            class="mt-5 subheading"
          >Meet the Full Time Specklers: We pay taxes, write code and docs. Oh - almost forgot - and we're on a mission to transform the digital future of AEC 🤘</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap px-5 my-5 py-0>
        <v-flex
          xs12
          sm6
          md4
          px-2
          py-4
          style="min-height:10vh"
          v-for="(teamMember, index) in teamMembers"
          :key="index"
        >
          <v-card class="py-4 elevation-5" height="100%" v-if="teamMember">
            <center>
              <v-avatar size="100" class="mt-3">
                <img
                  :src="strapiBaseUri+teamMember.avatar.formats.thumbnail.url"
                  :alt="teamMember.name"
                />
              </v-avatar>
            </center>
            <v-card-title primary-title class="justify-center">
              <h3 class="headline mb-0">{{teamMember.name}}</h3>
            </v-card-title>
            <v-card-title class="justify-center">
              <span class="title font-weight-light">{{teamMember.title}}</span>
            </v-card-title>
            <v-card-text class="pa-4 justify-center">{{teamMember.bio}}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 px-2 py-4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`card-outer white-text text-white pa-4 elevation-5`"
              height="100%"
              to="/contributors"
            >
              <center>
                <v-avatar size="100" class="mt-3">
                  <img src="https://strapi.speckle.works/uploads/thumbnail_speckle_3096476c32.jpeg" />
                </v-avatar>
              </center>
              <v-card-title primary-title class="justify-center">
                <h3 class="headline mb-0">The Speckle Community</h3>
              </v-card-title>
              <v-card-title class="justify-center">
                <span class="title font-weight-light">We're shaping the future together!</span>
              </v-card-title>
              <v-card-text
                class="justify-center"
              >We're ever happy to receive contributions - code, usecases, feature requests, suggestions, workshops, meetups, etc.!</v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 sm12 md8 px-2 py-4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              dark
              color="primary"
              :class="`elevation-${hover ? 20 : 10} card-outer white-text text-white pa-4`"
              height="100%"
              target="_blank"
              href="mailto:hello@speckle.systems"
            >
              <v-layout align-center fill-height>
                <v-flex mb-4>
                  <div class="display-1 font-weight-thin my-4">Psst! Want to work with us?</div>
                  <div class="subheading">
                    We are always looking for talented people who believe in our mission and want to change AEC.
                    <v-divider class="my-3"></v-divider>We're currently looking for (c) sharp programmers with AEC experience, and sprinkles of full stack unicorn glitter.
                    <v-divider class="my-3"></v-divider>If you think that's you, get in touch at hello@speckle.systems.
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import teamQuery from "~/apollo/queries/team";
export default {
  head() {
    return {
      title: `Speckle | About`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "title",
          name: "title",
          property: "title",
          content: this.page.title
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: this.page.description
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          property: "og:site_name",
          content: this.page.title
        },
        //FACEBOOK
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.page.title
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: this.page.description
        },
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: this.page.image
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "website"
        },

        //TWITTER
        {
          hid: "twitter:card",
          name: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          property: "twitter:title",
          content: this.page.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          property: "twitter:description",
          content: this.page.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          property: "twitter:image",
          content: this.page.image
        }
      ]
    };
  },
  data() {
    return {
      users: [],
      page: {
        title: "Speckle | About",
        description:
          "About the open-source data platform for automation in AEC and its team.",
        image: process.env.strapiBaseUri + "/uploads/Artboard_1_copy_3_f3f7053d48.png"
      },

      strapiBaseUri: process.env.strapiBaseUri
    };
  },
  computed: {
    teamMembers() {
      let teamMembers = this.users.filter(x => x.title != "Advisor");
      try {
        let dim = teamMembers[1];
        teamMembers.splice(1, 1);
        teamMembers.unshift(dim);
        return teamMembers;
      } catch {}
      return teamMembers;
    },
    advisors() {
      return this.users.filter(x => x.title == "Advisor");
    }
  },
  apollo: {
    users: {
      prefetch: true,
      query: teamQuery
    }
  }
};
</script>
<style type="text/css">
.movearound-div {
  margin-top: 60px;
  margin-left: -50px;
}

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
