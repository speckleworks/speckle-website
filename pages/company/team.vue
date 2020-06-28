<template>
  <div>
    <v-container grid-xl class="mt-5 pa-0">
      <v-layout row wrap px-5 mt-5 py-0>
        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-2 font-weight-light xxx-text-uppercase">Team</h1>
        </v-flex>
        <v-flex xs12 py-4 style="min-height:10vh" class="mt-5">
          <h1 class="title text-uppercase text-xs-center">
            <strong>Our Team 🧑‍💻</strong>
          </h1>
        </v-flex>
        <v-flex
          xs12
          md4
          px-2
          py-4
          style="min-height:10vh"
          v-for="(teamMember, index) in teamMembers"
          :key="index"
        >
          <v-card class="pa-3" height="100%">
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
            <v-card-text class="pa-4" style="text-align: center;">{{teamMember.bio}}</v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 py-4 style="min-height:10vh" class="mt-5">
          <h1 class="title text-uppercase text-xs-center">
            <strong>Advisors 👨‍🚀</strong>
          </h1>
        </v-flex>

        <v-flex
          xs12
          md4
          px-2
          py-4
          style="min-height:10vh"
          v-for="(advisor, index) in advisors"
          :key="index"
        >
          <v-card class="pa-3" height="100%">
            <center>
              <v-avatar size="100" class="mt-3">
                <img :src="strapiBaseUri+advisor.avatar.formats.thumbnail.url" :alt="advisor.name" />
              </v-avatar>
            </center>

            <v-card-title primary-title class="justify-center">
              <h3 class="headline mb-0">{{advisor.name}}</h3>
            </v-card-title>
            <v-card-title class="justify-center">
              <span class="title font-weight-light">{{advisor.title}}</span>
            </v-card-title>
            <v-card-text class="pa-4" style="text-align: center;">{{advisor.bio}}</v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 py-4 mb-5>
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
                  <div class="display-1 font-weight-thin my-4">Want to work with us?</div>
                  <div
                    class="subheading"
                  >We are always looking for talented people who believe in our mission to join our team! Get in touch at hello@speckle.systems.</div>
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
  },
  data() {
    return {
      users: [],
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
