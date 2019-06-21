---
title: "Streams & Projects Management"
summary: "Mangaging & creating streams and projects in the speckle admin interface."
date: 2019-12-29
order: 31
---
<template lang='md'>

  Speckle has an online management interface that enables you to manage your data. Specifically, you can:
  - search amongst your streams, and archive/unarchive them
  - share them with other persons, and manage their permissions
  - see who & where is receiving them, and where they originate from
  - check out the a stream's history
  - group them into projects to share them "in bulk"
  - add <v-chip small>tags</v-chip> to both projects and streams, as well as other metadata
  - and more...

  <br>

  This interface is called speckle admin, and it can be usually found at the root of your speckle server address. If you have a test account on the hestia server, you can find it here:

  <div class='text-xs-center my-4'>
  <v-btn color='primary' round href='https://hestia.speckle.works' target="_blank">
    Speckle Admin <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>

  Once you login, you will be greated with your dashboard that includes a selection of news, streams and projects. In here you have an omni-search box that will attempt to find any stream or project by its name.

  ![rhino](~/assets/docs/manage/main-search.png)

  ## Managing Streams

  Over in the [streams section](https://hestia.speckle.works/#/streams) you can search for and manage your streams. There's a bunch of functionality that we'll let you discover! Below there's some hints towards what you can do and what insights you can get.

  ![rhino](~/assets/docs/manage/streamsall.png)

  By clicking on a stream's "details" button, you will be taken to its primary information and management page. There's a couple of tabs that separate some concerns. First off, the overview tab!

  ### Stream Overview

  ![rhino](~/assets/docs/manage/streamoverview.gif) {.my-4 .elevation-10}

  Here you can:
  - change the stream's name,
  - edit its description (you can use markdown)
  - see its units
  - see where it's coming from
  - see who is receiving it, and where

  <br>

  ### Sharing

  Under the sharing tab, you can toggle link sharing. If link sharing is ON, anyone that knows that `streamId` can access it and read its data. It's a useful setting to start with, but not good for sensitive information.

  ![rhino](~/assets/docs/manage/sharing.png)

  Once you've turned link sharing off, only you will be allowed to access that stream's data. To enable others to access that stream, search for their accounts using the form below, and add them to the permission tier you want (read/write):
  - `Read` permissions will allow your colleague to only read, for example, by receiving the stream somewhere.
  - `Write` permissions will allow them to open up your, for example, grasshopper file and use your sender components.

  <v-alert type='info' :value='true' class='my-4' color='primary'>
  When you share a stream with someone, it will start showing up in their dashboard too!
  </v-alert>


  <br>

  ## Stream Creation

  Yes, you actually can create streams online: while in the main streams page, click on the big blue plus button in the lower right corner. This is useful for simple data structures - numbers, text, booleans, etc. Specifically, it's been implemented so you can store & edit generic project paramters and then receive them throughout the ecosystem (more importantly, grasshopper and dynamo).

  The layers that you create become output ports. The values that you enter should be comma-separated, and they're parsed automatically to numbers, strings or bools. Once you create the data that you

  ## Projects

  ## Archive

</template>
<script>
export default {
  layout: 'docs'
}
</script>
