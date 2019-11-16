---
title: "SpeckleViz"
summary: "Speckle's data flow in a nutshell"
date: 2019-08-01
order: 0
---
<template lang='md'>

  ## Welcome to the SPECKLEVIZ&trade; interface! 

  Formerly known as the (legendary) <i>Metagraph</i>, SpeckleViz&trade; has been created to help you get a better understanding of the <b>data flow</b> of a <b>specific Speckle Project</b> across users, streams and documents.
  
  <v-alert type='info' :value='true' class='my-4'>
  The same way that Microsoft is not responsible for how messy your directory structure is on your Windows account, and the same way that Google is not reponsible for how messy your Google Drive is, Speckle is not responsible for how messy your Projects and Streams are stored within your Speckle's <a href="/docs/web/management">management interface</a>. As SpeckleViz directly reflects how your Streams are organized and relate to each other within a same Speckle Project, this web app will make more sense if your Projects and Streams have been created and organized in a meaningful way.
  </v-alert>

  ## Where to find the graph
  You can simply find the graph at the bottom of your project's page.
  <img src="~/assets/docs/webapp/speckleviz/where.png" width="400" height="400" class="my-3 elevation-10">

  ## How to read the graph
  - <v-icon>fiber_manual_record</v-icon> Circle nodes represent <b>Senders</b> 🚀 and <b>Receivers</b> 📡 (a.k.a local clients)
  - <v-icon>crop_square</v-icon>Square nodes represent <b>Streams</b> 🛰️📦 (a.k.a a box of data on the cloud)
  - 🚀<v-icon>fiber_manual_record</v-icon><v-icon>arrow_right_alt</v-icon>🛰️📦<v-icon>crop_square</v-icon> This pattern represents data that has been shared to a <b>Stream</b> by a user through a <b>Sender</b>
  - 🛰️📦<v-icon>crop_square</v-icon><v-icon>arrow_right_alt</v-icon>📡<v-icon>fiber_manual_record</v-icon> This pattern represents data that has been retrieved by a user from a <b>Stream</b> through a <b>Receiver</b>
  - 🚀<v-icon>fiber_manual_record</v-icon><v-icon>arrow_right_alt</v-icon>🛰️📦<v-icon>crop_square</v-icon><v-icon>arrow_right_alt</v-icon>📡<v-icon>fiber_manual_record</v-icon> This pattern is the sum of the two patterns above
  - <v-icon>color_lens</v-icon> Generally, both nodes and edges are coloured according to their ```createdAt``` timestamps (dark blue for the newest created, light grey for the oldest).
  ![](~/assets/docs/webapp/speckleviz/oldNew.png){.my-3 .elevation-10 }
  - <v-icon color="pink">group_work</v-icon> The pink clusters group the local clients per software file, or document. Below, a Grasshopper session contains two Speckle Receivers and one Speckle Sender.
  ![](~/assets/docs/webapp/speckleviz/clusterDoc.png){.my-3 .elevation-10}
  For now, each type of document is represented by a logo, such as:
      - <b>Grasshopper:</b> 🦗
      - <b>Rhino3D:</b> 🦏
      - <b>Dynamo:</b> 🔧
      - <b>GSA:</b> 💎
  - <v-icon color="blue">group_work</v-icon> The blue clusters group the local clients per user. The user's initials and company are exposed. Below, someone from UCL instantiated 5 Speckle Receivers and 3 Speckle Senders.
  ![](~/assets/docs/webapp/speckleviz/clusterUser.png){.my-3 .elevation-10 }
  
  <br>
  
  ## How to interact with the graph
  - You can zoom in <v-icon>zoom_in</v-icon> and zoom out <v-icon>zoom_out</v-icon> by using the scroll wheel, and pan <v-icon>pan_tool</v-icon> by holding left click on the background canvas and moving your mouse around it. If your graph disappears, you can still click on the GPS button <v-icon>gps_fixed</v-icon> situated on the toolbar, which will re-center the graph!
  ![](~/assets/docs/webapp/speckleviz/scrollpanzooom2.gif){.my-3 .elevation-10 .border}
  - <v-icon>gesture</v-icon> You can drag nodes around! Just hold left click on a node and drag it around.
  ![](~/assets/docs/webapp/speckleviz/moveNode.gif){.my-3 .elevation-10}
  ![](~/assets/docs/webapp/speckleviz/great.gif){.my-3 .elevation-10 .border}
  - <v-icon color="pink">group_work</v-icon><v-icon>compare_arrows</v-icon><v-icon color="blue">group_work</v-icon> As mentioned above, the clients are grouped either by Document GUID or User GUID. You can switch between the two by using the toggle switch situated on left side of the toolbar.
  ![](~/assets/docs/webapp/speckleviz/switchGroups.gif){.my-3 .elevation-10 .border}
  - <v-icon>menu_open</v-icon> Right clicking on a stream will trigger a context menu from which you can:
    - view the stream within the <a href="/docs/web/viewer">viewer app</a> <v-icon>3d_rotation</v-icon>
    - view the stream within the <a href="/docs/web/management">admin app</a>
    - view the stream's raw data
    - view the stream's related client's raw data
  ![](~/assets/docs/webapp/speckleviz/streamMenu.png){.my-3 .elevation-10}

  - <v-icon>date_range</v-icon><v-icon>tune</v-icon> Use the slider below the toolbar to select and highlight a specific timeframe of your project!
  ![](~/assets/docs/webapp/speckleviz/inspectTimeFrame.gif){.my-3 .elevation-10 }
  When dragging the slider, a badge below it will update and inform you on the number of streams comprised within the specified time range. Clicking on the button itself will open the viewer interface within which the selected streams will be aggregated.
  ![](~/assets/docs/webapp/speckleviz/inspectTimeFrameSnap.png){.my-3 .elevation-10 }
  - <v-icon>refresh</v-icon> If you modify your project in any way (by adding/removing streams to it, for example), you might want to hit the refresh button as the graph <b>won't listen for changes and therefore won't update automatically</b>.
  - <v-icon>center_focus_weak</v-icon><v-icon>filter_center_focus</v-icon> It is possible to anchor/release the graph by clicking on these icons. Double clicking on specific nodes will perform these same actions locally.
  - <v-icon>search</v-icon> Search by tags
  - <v-icon>color_lens</v-icon> The graph's edges can be visualized either by arcs or straight edges.
  - <v-icon>save_alt</v-icon> Finally, you can save your graph as PNG!
  
  

</template>
<script>
export default {
  layout: 'docs',
}

</script>
