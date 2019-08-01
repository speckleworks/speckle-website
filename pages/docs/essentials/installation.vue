---
title: "Installation"
summary: "Installing Speckle"
date: 2019-01-21
order: 1
---
<template lang='md'>

  <!-- ![clients](~/assets/docs/various/screenshots.png) -->

  Getting started with speckle can be approached from several directions: either as an end user, where you just want to send data and geometry around, as a developer wanting to build on top of speckle, or as a maintainer deploying a server for your company or group.

  # Download {.font-weight-thin .display-1 .my-4}

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

  You will need to download and run the `SpeckleInstaller.exe` file from the link above. This will install the latest release of the clients and once it is succesful, you should be able to open the speckle plugins from the software you've installed it for.

  <v-icon small>warning</v-icon> Sometimes you might get security warnings because we do not sign the installer, so check for that! {.caption}

  <v-icon small>info</v-icon> If you're curious about new features, you can always try out the [pre-release channel](https://github.com/speckleworks/SpeckleInstaller/releases/). {.caption}

  If you are not interested in setting up your own server, feel free to continue on to the next section to learn more about the basic concepts of Speckle.
  
  # Server {.font-weight-thin .display-1 .my-4}

  Speckle requires a Speckle server to communicate with. If you just want to test Speckle, to begin with you can just use [Hestia](https://hestia.speckle.works), the free server maintained by Dimitrie. To do so, [register a new account](https://hestia.speckle.works/#/register) and use `https://hestia.speckle.works/api` as a server url input when prompted by the clients. Otherwise, you can use other existing servers or [deploy your own Speckle server](../developers/deploy-server).

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
