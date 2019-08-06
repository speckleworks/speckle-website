---
title: "Online Data Stream Creation"
summary: "Create custom data streams"
date: 2019-08-01
order: 2
---
<template lang='md'>
  <v-alert type='info' icon='school' :value='true' class='my-4' color='grey'>
  This small tutorial is assuming you're comfortable around the online interface of Speckle. If you haven't even heard about it, then please read <a href="/docs/essentials/introduction/management"> the following tutorial.</a>
  </v-alert>

  Creating streams online is useful for various purposes, such as centralising in one place project parameters and pulling them out afterwards in Grasshopper or Dynamo to drive your parametric models. You can do this from the online interface!

  <div class='text-xs-center my-4'>
  <v-btn color='primary' round href='https://hestia.speckle.works' target="_blank">
    Speckle Admin <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>

  ## Stream Creation & The Data Tab

  To create a stream, while in the stream overview page, click on the big blue plus button in the lower right corner. Give it a name, add some tags, then head over to the **data** tab. Generally, creating a stream online is useful for simple data structures - numbers, text, booleans, etc. Specifically, it's been implemented so you can store & edit generic project paramters and then receive them throughout the ecosystem (more importantly, grasshopper and dynamo).

  ### Manual Data Input

  You can add stream "layers" (they will become output ports), and then type in values manually using commas to separate them from each other.

  ![create a stream](~/assets/docs/web-app/create-stream-main.gif) {.my-4 .elevation-10}

  <v-alert type='info' :value='true' class='my-4' color='primary'>
  The "Data Tab" is enabled only for streams that have been created online.
  </v-alert>

  ### From Excel

  Inputing any CSV values is rather easy. Just Click the **Import CSV** button in the top right corner and paste in your data. Here's a short animation showing how you can copy and paste some excel data into a stream (remember the big blue button in the lower right corner):

  ![create a stream](~/assets/docs/web-app/createstream.gif) {.my-4 .elevation-10}

  ## Saving Your Changes

  The layers that you create become output ports - you can rename them. The values that you enter should be comma-separated, and they're parsed automatically to numbers, strings or bools. Once you are happy with the way the data is looking, you will need to click on the "save" button (and enter a commit message - this will make your reading of the history easier). Once saving is done, you can now receive that data in grasshopper, dynamo, or via the API. Congratulations, you've created your first online stream - see below how this stream looks like in grasshopper:

  ![receive a stream](~/assets/docs/web-app/ghreceiver.png)
</template>
<script>
export default {
  layout: 'docs',
}

</script>
