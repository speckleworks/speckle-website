---
title: "Installation"
summary: "Installing Speckle"
date: 2019-01-21
order: 1
---
<template lang='md'>

  <!-- ![clients](~/assets/docs/various/screenshots.png) -->

  # 1. Download {.font-weight-thin .display-1 .my-4}

  In order to use speckle, you will need to have some authoring software installed on your computer. We currently have integrations for **Grasshopper, Dynamo, Rhino, and Revit (early alpha!)** - either of those should do. It also helps to have a friend next to you, as it's much more fun to send data to each other rather than play ping-pong alone!

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

  # 2. Register {.font-weight-thin .display-1 .my-4}

  Speckle can be deployed by anybody anywhere they want. Hence, there's no single Speckle where you can register an account; perhaps your company already runs a server - ask around! Nevertheless, in case you just want to test things out, you can register with the "community server", hestia.

</template>
<script>
export default {
  layout: 'docs',
}

</script>
