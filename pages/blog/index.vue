<template lang='md'>
  <v-btn round small depressed color='' class='mx-0 px-2' to='/'>
    <v-icon left small>arrow_back</v-icon>home &nbsp;&nbsp;
  </v-btn>
  <div class='display-3 font-weight-thin'>
    Speckle Blog
  </div>
  <div class='grey--text subheading'>Blogging like it's '99.</div>
  <br>
  <!-- <v-chip label color='primary' outline v-for='topic in topics'>{{topic}}</v-chip> -->
  <div v-for='(post, index) in posts' :key='post.attributes.title' class='my-4 elevation-0'>
    <v-hover>
      <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} pa-1 pb-3`" :to='post.href'>
        <v-card-text>
          <div class='title font-weight-thin py-3'>{{post.attributes.title}}</div>
          <span class='grey--text subheading'>by {{post.attributes.author}} • {{new Date(post.attributes.date).toLocaleDateString()}} •
            <v-chip color='primary' outline small style='margin-top:0px;' v-for='topic in post.attributes.tags' :key='topic'>{{topic}}</v-chip></span>
          <br>&nbsp;
          <br>
          <span class='grey--text text--darken-2'>{{post.attributes.summary}}</span>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>
<!--
  frontmatter
-->
<script>
export default {
  layout: 'blog',
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
