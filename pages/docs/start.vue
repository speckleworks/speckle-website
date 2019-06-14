---
title: Getting Started
summary: "Speckle's take on object models, schemas and various standards."
date: 2019-07-07
---
<template lang='md'>
  <div>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm12>
          <p>To start playing with speckle, the first thing you need to do is download the plugins from our release channel on github.</p>
          <div class='display-3 font-weight-light'>
            Developers
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<!--
  frontmatter
-->
<script>
export default {
  layout: 'docs',
  computed: {
    posts( ) {
      return this.$store.getters[ 'blog/getPosts' ]
    },
    topics( ) {
      return this.$store.getters[ 'blog/getTopics' ]
    }
  },
  asyncData: ( ) => ( {
    title: "Just a hack",
    description: "Nothing special.",
    author: "Dimitrie!",
    tags: [ 'test', 'wow', 'etc' ]
  } )
}

</script>
