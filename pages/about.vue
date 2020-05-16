<template>
  <div>
    <v-container grid-xl class='mt-5 pa-0'>
      <v-layout row wrap px-5 mt-5 py-0>
        <v-flex xs12 mt-5 py-4 style='min-height:10vh' xxxclass='text-xs-center'>
          <h1 class='display-2 font-weight-light xxx-text-uppercase'>
            What is <span class='primary--text'>Speckle?</span>
            <!-- Speckle is </router-link></span> -->
          </h1>
          <p class='headline font-weight-light mt-4 '>
            Read the <router-link class='flink' to='/docs/essentials/introduction/what'>short version of the long story here</router-link>!
          </p>
        </v-flex>
        <v-flex xs12 py-4 style='min-height:10vh'>
          <h1 class='display-2 font-weight-light xxx-text-uppercase'>
            Still having <b>questions?</b> Send us an <span class='primary--text'><a class='link' href="mailto:hello@speckle.works">email</a></span>.
          </h1>
        </v-flex>
        <v-flex xs12 py-4 style='min-height:10vh' xxxclass='text-xs-center'>
          <h1 class='display-2 font-weight-light xxx-text-uppercase'>
            <b>Project</b> <span class='primary--text'>Contributors</span>
          </h1>
          <p class='headline font-weight-light mt-4 '>
            Speckle has received contributions from many people from all corners of the world. Here are some of them, in no particular order:
          </p>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for='member in contributors' :key='member.name' xxxstyle='min-height: 120px; max-height: 120px;' class='mb-2'>
              <v-card class='ma-2 pa-2' :href='`https://github.com/${member.login}`' target='_blank'>
                <v-avatar size="36px" class='mr-4'>
                  <img v-if="member.avatar_url" :src="member.avatar_url" alt="Avatar">
                  <v-icon v-else color="primary">person</v-icon>
                </v-avatar>
                {{member.name ? member.name : member.login}}
                <!--      <p class='small caption mt-2'>
                  {{member.bio}}
                </p> -->
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 py-4 style='min-height:10vh' xxxclass='text-xs-center'>
          <h1 class='display-2 font-weight-light xxx-text-uppercase'>
            <b>About</b> <span class='primary--text'>Speckle</span>
          </h1>
          <p class='headline font-weight-light mt-5'>
            Speckle was started by <a href="https://twitter.com/idid">Dimitrie</a> in November 2015 as instrumentation for his research in digital design communication. The rest is history.
          </p>
        </v-flex>
        <v-flex xs12 py-4 style='min-height:10vh' xxxclass='text-xs-center'>
          <h1 class='display-2 font-weight-light xxx-text-uppercase'>
            <b>Speckle</b> <span class='primary--text'>Brand Collateral</span>
          </h1>
          <p class='headline font-weight-light mt-5'>
            Spread the love! If you're building on top of Speckle, we would love for you to show that somewhere in your project 👉 <a href="https://drive.google.com/file/d/1cR2PmNdpiRpegXTAbtZCWSz3JBJoLbLB/view?usp=sharing">get here the Speckle Logo</a>!
          </p>
          <p class='caption'>Click on the download archive button in the top right corner.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
  head() {
    return {
      title: 'Speckle: Data Platform for AEC',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Speckle is the open source data platform for aec.' }
      ]
    }
  },
  data(){
    return {
      //orgUrl: 'https://api.github.com/orgs/speckleworks',
      token: 'xxx',
      members: []
    }
  },
  computed: {
    contributors() {
      return this.$store.getters['generic/getContributors']
    }
  },
  async mounted() {
    // console.log(this.context.env.GHPAT)

    // if( this.$store.state.contributors.length !== 0 ) return
    // let orgUrl = `https://api.github.com/orgs/speckleworks`
    // let token = `xxx`
    // try {
    //   let listOfMembers = await this.$axios.$get( `${orgUrl}/members`, {
    //     headers: { 'Authorization': ` token ${token}` }
    //   } )
    //   console.log( listOfMembers )
    //   listOfMembers.forEach( async mem => {
    //     let contributor = await this.$axios.$get( mem.url, { headers: { 'Authorization': ` token ${token}` } } )
    //     // console.log( contributor )
    //     this.$store.commit( 'ADD_CONTRIBUTOR', contributor )
    //   } )
    // } catch ( err ) {
    //   console.log( err )
    // }

    // console.log(this.$store.state.contributors)
  }
}
</script>
<style type="text/css">
.link {
  text-decoration: none;
  border-bottom: 2px solid #0A66FF;
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
