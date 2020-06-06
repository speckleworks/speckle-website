<template>
  <div>
    <v-container grid-xl class="mt-5 pa-0">
      <v-layout row wrap px-5 mt-5 py-0>
        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-2 font-weight-light xxx-text-uppercase">
            What is
            <span class="primary--text">Speckle?</span>
            <!-- Speckle is </router-link></span> -->
          </h1>
          <p class="headline font-weight-light mt-4">
            Speckle is an
            <b>open source data platform</b>
            for AEC. It provides a method of liberating data from one platform to another in a quick, manageable, and efficient way.
            <!-- With Speckle, you can:
  <ul>
    <li>Connect to various platforms to extract and provide the design data you need</li>
    <li>Manage who has access to your data through link sharing, permission, and project organizations</li>
    <li>Coordinate and collaborate with others by streaming project data between people</li>
    <li>Extend the platform to create custom third party applications and workflows that works for you</li>
            </ul>-->
          </p>
        </v-flex>

        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>
        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Connectivity & collaboration</h1>
          <p class="headline font-weight-light mt-4">
            <b>Curate and consolidate</b> design data across digital silos.
          </p>
        </v-flex>

        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Web-first</h1>
          <p class="headline font-weight-light mt-4">
            <b>Built from the Internet up:</b> fast, scalable & extensible.
          </p>
        </v-flex>
        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>

        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>
        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weiht-light xxx-text-uppercase">Open source</h1>
          <p class="headline font-weight-light mt-4">
            <b>Transparency & trust</b> create value for all and win hearts and minds
          </p>
        </v-flex>

        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Ecosystem</h1>
          <p class="headline font-weight-light mt-4">
            <b>Enables</b> automation and next generation pipelines for the AEC industry.
          </p>
        </v-flex>
        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
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
