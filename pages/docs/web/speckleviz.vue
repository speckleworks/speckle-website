---
title: "SpeckleViz"
summary: "Speckle's data flow"
date: 2019-08-01
order: 0
---
<template lang='md'>

  ## Welcome to the <b>SPECKLEVIZ&trade;</b> interface! Δ👁️Δ

  Formerly known as the (legendary) <i>Metagraph</i>, SpeckleViz&trade; has been created to help you get a better understanding of the <b>data flow</b> between the project's users, streams and documents.
  
  <v-alert type='warning' icon='warning' :value='true' class='my-4' color='grey'>
  The same way that Microsoft is not responsible for how messy your directory structure is on your Windows account, and the same way that Google is not reponsible for how messy your Google Drive is, Speckle is not responsible for how messy your Projects and Streams are stored within your Speckle's <a href="/docs/web/management">management interface</a>. As SpeckleViz directly reflects how your Streams are organized and relate to each other within a same Project, this web app will make more sense if your Projects and Streams have been created and organized in a meaningful way.
  </v-alert>

  ### How to read the graph
  - <v-icon>fiber_manual_record</v-icon> Circle nodes represent <b>Senders</b> 🚀 and <b>Receivers</b> 📡 (a.k.a local clients)
  - <v-icon>crop_square</v-icon>Square nodes represent <b>Streams</b> 🛰️📦 (a.k.a a box of data on the cloud)
  - 🚀<v-icon>fiber_manual_record</v-icon><v-icon>arrow_right_alt</v-icon>🛰️📦<v-icon>crop_square</v-icon> This pattern represents data that has been shared to a <b>Stream</b> by a user through a <b>Sender</b>
  - 🛰️📦<v-icon>crop_square</v-icon><v-icon>arrow_right_alt</v-icon>📡<v-icon>fiber_manual_record</v-icon> This pattern represents data that has been retrieved by a user from a <b>Stream</b> through a <b>Receiver</b>
  - 🚀<v-icon>fiber_manual_record</v-icon><v-icon>arrow_right_alt</v-icon>🛰️📦<v-icon>crop_square</v-icon><v-icon>arrow_right_alt</v-icon>📡<v-icon>fiber_manual_record</v-icon> This pattern is the sum of the two patterns above
  - <v-icon>color_lens</v-icon> Generally, both nodes and edges are coloured according to their timestamps (dark blue for the newest created, light grey for the oldest).
  ![stream search](~/assets/docs/webapp/speckleviz/oldNew.png){.my-3 .elevation-10 }
  - <v-icon color="pink">group_work</v-icon> The pink clusters group the local clients per software file, or document. Below, a Grasshopper session containes two Speckle Receivers and one Speckle Sender.
  ![stream search](~/assets/docs/webapp/speckleviz/clusterDoc.png){.my-3 .elevation-10}
  - <v-icon color="blue">group_work</v-icon> The blue clusters group the local clients per user. The user's initials and company are exposed. Below, someone from UCL instantiated five Speckle Receivers and three Speckle Senders.
  ![stream search](~/assets/docs/webapp/speckleviz/clusterUser.png){.my-3 .elevation-10 }
  
  <br>
  
  ### How you can interact with the graph
  - <v-icon>gesture</v-icon> You can drag nodes around! Just hold your left click on a node and drag it around.
  ![overview stream](~/assets/docs/webapp/speckleviz/moveNode.gif){.my-3 .elevation-10 .border}
  ![overview stream](~/assets/docs/webapp/speckleviz/great.gif){.my-3 .elevation-10 .border}
  - <v-icon>group_work</v-icon><v-icon>compare_arrows</v-icon><v-icon>group_work</v-icon>The clients are grouped either by Document GUID or User GUID. You can switch between the two by using the toggle switch situated on the toolbar.
  <br />
  <v-icon>360</v-icon>Right clicking on a stream will direct you to its related viewer interface!
  <br />
  <v-icon>timeline</v-icon>Use the slider below the toolbar to select and highlight a specific timeframe of your project!
  <br />
  <v-icon>refresh</v-icon>If you add streams to your project, you might want to hit the refresh button as the graph
  <b>won't update automatically</b>.
  <br />
  <v-icon>gps_not_fixed</v-icon>
  <v-icon>gps_fixed</v-icon>It is possible to anchor/release the graph by clicking on these icons. Double clicking on specific nodes will perform these same actions locally.
  <br />
  <v-icon>trending_flat</v-icon>
  <v-icon>redo</v-icon>The graph's edges can be visualized either by arcs or straight edges.
  <br />
  <v-icon>save_alt</v-icon>Finally, you can save your graph as PNG!
  <br />
  
  

  <br>

  This interface is called Speckle admin, and it can be found usually at the root of your Speckle server address. If you have a test account on the Hestia server, you can find it here:

  <div class='text-xs-center my-4'>
  <v-btn color='primary' round href='https://hestia.speckle.works' target="_blank">
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
