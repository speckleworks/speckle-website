---
title: "Project Management"
summary: "Collaborating and management of users and streams"
date: 2019-08-01
order: 5
---
<template lang='md'>
  Projects organize streams together and provides a platform for teams to collaborate and manage their data in Speckle. Projects can be created from the [speckle admin](/docs/web/management) interface. From there, project owners can also add users to the project with varying permission levels. Adding streams to projects will give project users automatic access to the streams.

  There are two different permissions associated with each stream:
  - Projects: users with `read` access to projects will be able to see the project while users with `write` access will be able to add and remove streams and other users from the project.
  - Streams: users will automatically have `read` or `write` access to all streams within the project accordingly. If a user has a seperate permission level in a stream, the higher permission level applies.

  <br>

  <div class='text-xs-center my-4'>
  <v-btn color='primary' round large to='/docs/web/management'>
    Read more <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>

</template>
<script>
export default {
  layout: 'docs',
}

</script>
