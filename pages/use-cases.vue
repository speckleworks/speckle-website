<template>
  <div>
    <v-container grid-xl class="mt-5 pa-0">
      <v-layout row wrap px-5 mt-5 py-0>
        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-2 font-weight-light xxx-text-uppercase">Use cases</h1>
          <p class="headline font-weight-light mt-4">
            Speckle has been used on a variety of situations and projects to <b>enable automation and to allow data flow between AEC software</b>.
            <!-- With Speckle, you can:
  <ul>
    <li>Connect to various platforms to extract and provide the design data you need</li>
    <li>Manage who has access to your data through link sharing, permission, and project organizations</li>
    <li>Coordinate and collaborate with others by streaming project data between people</li>
    <li>Extend the platform to create custom third party applications and workflows that works for you</li>
            </ul>-->
          </p>
          <v-img src="https://strapi.speckle.works/uploads/Untitled_66ea262a6a.png"></v-img>
        </v-flex>
        <v-flex xs12 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">
            Check some of the latest use cases on 
            <span class="primary--text">
              <a class="link" href="https://twitter.com/speckle_works">twitter</a>
            </span> and on our <span class="primary--text">
              <router-link class='flink' to='/blog'>blog</router-link>
            </span>.
          </h1>
        </v-flex>

 <v-flex xs12 py-4 mb-5>
        <v-hover>
          <v-card slot-scope="{ hover }" dark color='primary' :class="`elevation-${hover ? 20 : 10} card-outer white-text text-white pa-4`" height="100%" target="_blank" href='mailto:hello@speckle.systems'>
            <v-layout align-center fill-height>
              <v-flex mb-4>
                <div class='display-1 font-weight-thin my-4'>Have used Speckle on some cool projects?</div>
                <div class='subheading'>We are keen to feature tutorials, insights, case studies! Let us know by dropping us an email at hello@speckle.systems.</div>
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

.flink {
  text-decoration: none;
}
</style>
