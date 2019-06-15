---
title: Getting Started
summary: "Start using or developing for speckle"
date: 2019-07-07
order: 0
---
<template lang='md'>

  ![clients](~/assets/docs/various/screenshots.png)

  Getting started with speckle can be approached from several directions: either as an end user, where you just want to send data and geometry around, as a developer wanting to build on top of speckle, or as a maintainer deploying a server for your company or group.

  # Taking Speckle For a Spin {.font-weight-thin .display-1 .my-4}

  <v-alert type='info' :value='true' class='my-3'>
    Keep in mind, whenever you need help, ask on slack or discourse!
  </v-alert>

  In order to use speckle, you will need to have some authoring software installed on your computer. We currently have integrations for Grasshopper, Dynamo, Rhino, and a WIP Revit client - either of those should do. It also helps to have a friend next to you, as it's much more fun to send data to each other rather than play ping-pong alone!

  <!-- ### The Speckle Clients Installer {.font-weight-thin-xx .my-4} -->

  **Installation:**  You can install the latest release of [the clients from here](https://github.com/speckleworks/SpeckleInstaller/releases/latest). If you're curious about new features, you can always try out the [pre-release channel](https://github.com/speckleworks/SpeckleInstaller/releases/). Once the installation is succesful, you should be able to open the speckle plugins the software you've installed it for.

  <!-- ### Getting Started Guides {.font-weight-thin-xx .my-4} -->

  We currently have a guide only for Dynamo and Grasshopper.


  # Deploying a Speckle Server {.font-weight-thin .display-1 .my-4}

  Deploying a [speckle server](https://github.com/speckleworks/SpeckleServer) is easy, but not for the faint-hearted, as hosting one entails a certain amount of risk. There are some guidelines in the github repository's readme, as well as a set of [community-maintained instructions on the forum](https://discourse.speckle.works/t/speckle-server-debian-9-installation-notes-for-development-machines/344).

  If you just want to test speckle, to begin with you can just use [Hestia](https://hestia.speckle.works), the free server maintained by Dimitrie. To do so, just use `https://hestia.speckle.works/api` as a server url input when promted by the clients, or just head over there now and [register a new account](https://hestia.speckle.works/#/register).

  <v-alert type='warning' :value='true' class='my-1'>
    Please be aware that the test server, Hestia, comes with absolutely no guarantees of any sort. While it has had stellar uptime record so far, please do not rely on it for anyting remotely important!
  </v-alert>

  # Developing and Extending Speckle {.font-weight-thin .display-1 .my-4}

  You can do quite a bit on top of speckle. While we finesse the documentation, please have a look at the <router-link to='/docs/developers/api-specs'>developers section!</router-link>



</template>
<script>
export default {
  layout: 'docs',
}

</script>
