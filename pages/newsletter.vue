<template>
  <div>
    <v-container grid-xl class="mt-5">
      <v-layout justify-center row wrap px-5 mt-5 class="text-xs-center">
        <v-flex xs12 sm8 lg8 xl6 mt-2 py-4 >
          <h1 class="display-3 font-weight-light xxx-text-uppercase">Newsletter</h1>
<h1 class="pt-5">👇</h1>
          <!-- <v-btn large round color='primary' class='mt-5' @click="$vuetify.goTo('#features')">Read more</v-btn> -->
        </v-flex>
      </v-layout>
    </v-container>
    <!-- </v-responsive> -->
  </div>
</template>
<script>
import articlesQuery from "~/apollo/queries/articles";
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
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  },
  computed: {
    latestArticles() {
      return this.articles.slice(0, 2);
    }
  },
  data() {
    return {
      articles: [],
      strapiBaseUri: process.env.strapiBaseUri
    };
  }
};
</script>
<style type="text/css">
.repeating-gradient {
  background: linear-gradient(90deg, #ffffff 12px, transparent 1%) center,
    linear-gradient(#ffffff 12px, transparent 1%) center, #0a66ff;
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
