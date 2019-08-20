---
title: "Getting Started"
summary: "Installing Speckle and getting started with the basics."
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

  # 2. Register {.font-weight-thin .display-1 .my-4}

  When you first use Speckle you will be prompted to create an account with a speckle server.


  Speckle can be deployed by anybody anywhere they want. Hence, there's no single Speckle where you can register an account; perhaps your company already runs a server - ask around! Nevertheless, in case you just want to test things out, you can register with the "community server", hestia.

  ```js

  "https://hestia.speckle.works"
  ```

   <v-alert type='warning' :value='true' class='my-4' color='primary'>
    Please be aware that the test server, Hestia, comes with absolutely no guarantees of any sort. While it has had stellar uptime record so far, please do not rely on it for anything remotely important!
  </v-alert>

  # 3. Read The Docs {.font-weight-thin .display-1 .my-4}

  We've written some quick tutorials to get you started with the basic clients:

  <div class='xxxtext-xs-center my-4'>
  <v-btn xxxcolor='primary' round to='/docs/clients/grasshopper/basics'>
    Grasshopper <v-icon right>arrow_right_alt</v-icon>
  </v-btn>

  <v-btn xxxcolor='primary' round to='/docs/clients/dynamo/basics'>
    Dynamo <v-icon right>arrow_right_alt</v-icon>
  </v-btn>

  <v-btn xxxcolor='primary' round to='/docs/clients/rhino/basics'>
    Rhino <v-icon right>arrow_right_alt</v-icon>
  </v-btn>

  <v-btn xxxcolor='primary' round to='/docs/clients/revit/basics'>
    Revit <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>

  Furthermore, do read the introduction section on the right hand side. It will allow you to understand what Speckle is, how it operates, what we understand by clients, etc. It covers some basics that are useful for new starters. It will also let you know how you can ask for help if you're stuck!

</template>
<script>
export default {
  layout: 'docs',
}

</script>
