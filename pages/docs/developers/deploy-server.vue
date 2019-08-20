---
title: "Deploying a Server"
summary: "Deploy your own Speckle server"
date: 2019-01-21
order: 1
---
<template lang='md'>
  The Speckle server, in a nutshell, is a stateless Nodes.js application that can run on pretty much anywhere. Its dependencies are a small tiny redis instance to coordinate messaging (real time updates), and a mongo database to store information.

  Deploying a [Speckle server](https://github.com/speckleworks/SpeckleServer) is easy, but not for the faint-hearted, as hosting one entails a certain amount of risk. There are some guidelines in the GitHub repository's readme, as well as a set of [community-maintained instructions on the forum](https://discourse.speckle.works/t/speckle-server-debian-9-installation-notes-for-development-machines/344).
</template>
<script>
export default {
  layout: 'docs',
}

</script>
