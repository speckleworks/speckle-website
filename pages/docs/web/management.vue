---
title: "Management Interface"
summary: "Centralised platform to manage Speckle"
date: 2019-08-01
order: 0
---
<template lang='md'>

  Speckle has an online management interface that enables you to manage your data. Specifically, you can:
  - search amongst your streams, and archive/unarchive them
  - share them with other persons, and manage their permissions
  - see who is receiving them, and where they originate from
  - check out the a stream's history
  - group them into projects to share them "in bulk"
  - add <v-chip small>tags</v-chip> to both projects and streams, as well as other metadata
  - and more...

  <br>

  This interface is called Speckle admin, and it can be found usually at the root of your Speckle server address. There is also an always-up-to-date Speckle admin web app that you can use with any Speckle server (if accessible and with https):

  <div class='text-xs-center my-4'>
  <v-btn color='primary' round href='https://app.speckle.systems' target="_blank">
    Speckle Admin <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>

  Once you login, you will be greated with your dashboard that includes a selection of news, streams, and projects. In here you, have an omni-search box that will attempt to find any stream or project by its name.

  ![stream search](~/assets/docs/essentials/introduction/management-home.png)

  ## Managing Streams

  Within in the [streams section](https://hestia.speckle.works/#/streams) you can search for and manage your streams. There's a bunch of functionality that we'll let you discover! Below there's some hints towards what you can do and what insights you can get.

  ![detail](~/assets/docs/essentials/introduction/management-streamsall.png)

  By clicking on a stream's "details" button, you will be taken to its primary information and management page. The tabs contains information and operations which you can perform on the stream.

  ### Stream Overview

  ![overview stream](~/assets/docs/essentials/introduction/management-streamoverview.gif) {.my-4 .elevation-10}

  Here you can:
  - change the stream's name,
  - edit its description (markdown is supported)
  - see its units
  - see where it's coming from
  - see who is receiving it, and where

  <br>

  ### Sharing

  Under the sharing tab, you can toggle link sharing. If link sharing is ON, anyone that knows the `streamId` can access it and read its data. **It's a useful setting to start with, but not good for sensitive information.**

  ![sharing](~/assets/docs/essentials/introduction/management-sharing.png)

  Once you've turned link sharing off, only you will be allowed to access that stream's data. To enable others to access that stream, search for their accounts using the form below, and add them to the permission tier you want (read/write):
  - `Read` permissions will allow your colleague to only read, for example, by receiving the stream somewhere.
  - `Write` permissions will allow them to open up your, for example, Grasshopper file and use your sender components.

  <v-alert type='info' :value='true' class='my-4' color='primary'>
  When you share a stream with someone, it will start showing up in their dashboard too!
  </v-alert>

  <br>

  ### History

  ![history](~/assets/docs/essentials/introduction/management-history.png)

  Under the history tab you can see previous instances of your stream (and, if the stream is a child, its parent stream too). History instances are created automatically by some plugins, and manually by some connectors. They are just like any other stream - so you can tag them, receive them, view them online, [diff them via the api](https://hestia.speckle.works/api/streams/iThe_epCVp/diff/KAQzY9_C6e), etc.

  Specifically, the following clients create history instances when:
  - **Grasshopper**: History instances are created only when the sender is in manual mode (right click on the sender component to make it a "manual" sender),
  - **Dynamo**: Similar to Grasshopper; you can set the sender to "manual" mode through the toggle present on the component itself.
  - **Revit**: Every push will create a history instance.
  - **Rhino**: I really don't remember, need to check!
  - **GSA**: Each update creates a history instance.

  <br>

  ## Managing Projects

  Within the [projects section](https://hestia.speckle.works/#/projects) you can search for and manage your projects. To create a project:
  - Go to the project overview page
  - Click the friendly blue button in the lower right corner
  - Edit the description, tags, etc. if you wish to do so
  - Add the streams you want to share with your team in the left side (search by stream name)
  - Add the people you want to share with in the right side (search by their name)

  <br>

  Here's a quick gif going through the motions:

    ![overview projects](~/assets/docs/essentials/introduction/management-newproject.gif) {.my-4 .elevation-10}

  That's it - now everyone in the right hand list will have read access to the streams in the left side. If you add a new team member, or a new stream, permissions will be propagated amongst this group.

  ## Archive

  The archive is a place where all your deleted resources go. Any projects or streams you archive will automatically appear within the [archive section](https://hestia.speckle.works/#/archive). From here, archived items can be permanently deleted.
</template>
<script>
export default {
  layout: 'docs',
}

</script>
