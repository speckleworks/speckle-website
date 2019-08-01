---
title: "Getting Started"
summary: "Getting started with Speckle"
date: 2019-08-01
order: 2
---
<template lang='md'>
  In order to get started with Speckle, you will need some authoring software installed on your computer and access to a Speckle server. Installation instructions and links can be found [here](../installation). 

  # Server {.font-weight-thin .display-1 .my-4}

  Speckle requires a Speckle server to communicate with. If you just want to test Speckle, to begin with you can just use [Hestia](https://hestia.speckle.works), the free server maintained by Dimitrie. To do so, [register a new account](https://hestia.speckle.works/#/register) and use `https://hestia.speckle.works/api` as a server url input when prompted by the clients. Otherwise, you can use other existing servers or [deploy your own Speckle server](.../developers/deploy-server).

  <v-alert type='warning' :value='true' class='my-4' color='primary'>
    Please be aware that the test server, Hestia, comes with absolutely no guarantees of any sort. While it has had stellar uptime record so far, please do not rely on it for anything remotely important!
  </v-alert>

  **Location:** Hestia, the test server, is currently hosted by Digital Ocean in a data center in Frankfurt. For those of you far away - on the other side of the planet - this introduces some potentially quite high latency (upwards of 200ms). Furthermore, please be aware since data resides on European soil, European (and German) laws apply.

</template>
<script>
export default {
  layout: 'docs',
}

</script>
