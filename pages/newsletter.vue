<template>
  <div>
    <v-container grid-xl class="mt-5">
      <v-layout justify-center row wrap px-5 mt-5 class="text-xs-center">
        <v-flex xs12 sm8 lg8 xl6 mt-2 py-4 >
          <h1 class="display-3 font-weight-light xxx-text-uppercase">Newsletter</h1>
<h1 class="pt-5">👇</h1>
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
  },

};
</script>

