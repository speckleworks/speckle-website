---
title: "👉 Getting Started"
summary: "Start using or developing for speckle"
date: 2019-07-07
order: 0
---
<template lang='md'>

  <!-- ![clients](~/assets/docs/various/screenshots.png) -->

  Getting started with speckle can be approached from several directions: either as an end user, where you just want to send data and geometry around, as a developer wanting to build on top of speckle, or as a maintainer deploying a server for your company or group.

  # Using Speckle {.font-weight-thin .display-1 .my-4}

  In order to use speckle, you will need to have some authoring software installed on your computer. We currently have integrations for Grasshopper, Dynamo, Rhino, and a WIP Revit client - either of those should do. It also helps to have a friend next to you, as it's much more fun to send data to each other rather than play ping-pong alone!

  <!-- ### The Speckle Clients Installer {.font-weight-thin-xx .my-4} -->

  <!-- <v-alert :value='true' class='my-4' color='primary'> -->
  <div class='text-xs-center my-4'>
  <v-btn color='primary' round large href='https://github.com/speckleworks/SpeckleInstaller/releases/latest' target="_blank">
    download speckle clients <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>
  <!-- </v-alert> -->

  <!-- ### Getting Started Guides {.font-weight-thin-xx .my-4} -->

  You will need to download and run the `SpeckleInstaller.exe` file from the link above. This will install the latest release of the clients and once it is succesful, you should be able to open the speckle plugins the software you've installed it for.

  <v-icon small>warning</v-icon> Sometimes you might get security warnings because we do not sign the installer, so check for that! {.caption}

  <v-icon small>info</v-icon> If you're curious about new features, you can always try out the [pre-release channel](https://github.com/speckleworks/SpeckleInstaller/releases/). {.caption}

  Next, check out the guides on the left hand side - Grasshopper, Dyanamo, Revit, Rhino, etc. - as they will walk you through some of the basic steps of using Speckle. We haven't yet finalised writing the docs, so please bear with us!


  # Deploying a Server {.font-weight-thin .display-1 .my-4}

  The speckle server, in a nutshell, is a stateless nodejs application that can run on pretty much anywhere. Its dependencies are a small tiny redis instance to coordinate messaging (real time updates), and a mongo database to store information.

  Deploying a [speckle server](https://github.com/speckleworks/SpeckleServer) is easy, but not for the faint-hearted, as hosting one entails a certain amount of risk. There are some guidelines in the github repository's readme, as well as a set of [community-maintained instructions on the forum](https://discourse.speckle.works/t/speckle-server-debian-9-installation-notes-for-development-machines/344).

  If you just want to test speckle, to begin with you can just use [Hestia](https://hestia.speckle.works), the free server maintained by Dimitrie. To do so, just use `https://hestia.speckle.works/api` as a server url input when promted by the clients, or just head over there now and [register a new account](https://hestia.speckle.works/#/register).

  <v-alert type='warning' :value='true' class='my-4' color='primary'>
    Please be aware that the test server, Hestia, comes with absolutely no guarantees of any sort. While it has had stellar uptime record so far, please do not rely on it for anything remotely important!
  </v-alert>

  **Location:** Hestia, the test server, is currently hosted by Digital Ocean in a data center in Frankfurt. For those of you far away - on the other side of the planet - this introduces some potentially quite high latency (upwards of 200ms). Furthermore, please be aware since data resides on European soil, European (and German) laws apply.

  # Developing and Extending {.font-weight-thin .display-1 .my-4}

  You can do quite a bit on top of speckle, and there's quite a few pieces that make speckle up. You can see most of them on the [github organisation page](https://github.com/speckleworks). While we finesse the documentation, please have a look at the <router-link to='/docs/developers/api-specs'>developers section!</router-link>



</template>
<script>
export default {
  layout: 'docs',
}

</script>
