---
title: "Getting Started"
summary: "Installing Speckle and getting started with the basics."
date: 2019-01-21
order: 1
---
<template lang='md'>

  <!-- ![clients](~/assets/docs/various/screenshots.png) -->
  # 1. Register {.font-weight-thin .display-1 .my-4}

  To use Speckle you'll need a Speckle server and an account on that server. If you or your company don't have <a href="/docs/developers/deploy-server">deployed your own</a>, you can just use the "community server", hestia.

  The address of hestia is:

    ```js

  "https://hestia.speckle.works"
  ```
     <v-alert type='warning' :value='true' class='my-4' color='primary'>
    Please be aware that the test server, Hestia, comes with absolutely no guarantees of any sort. While it has had stellar uptime record so far, please do not rely on it for anything remotely important!
  </v-alert>
  
  <p></p>
  Server sorted, you can use the always-up-to-date Speckle web app to register a new account, or you can do so also when using the clients for the first time (see below).


    <div class='text-xs-center my-4'>
  <v-btn color='primary' round large href='https://app.speckle.systems' target="_blank">
    Speckle Admin <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>




  # 2. Download {.font-weight-thin .display-1 .my-4}

  To send data via Speckle, you will need to have some authoring/analysis software installed on your computer. We currently have integrations for **Grasshopper, Dynamo, Rhino, GSA, Blender, Revit (beta) and Excel (beta)** - either of those should do. It also helps to have a friend next to you, as it's much more fun to send data to each other rather than play ping-pong alone!

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
