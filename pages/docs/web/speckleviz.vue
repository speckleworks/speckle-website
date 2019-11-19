---
title: "SpeckleViz"
summary: "Visualising data flow in Speckle for projects"
date: 2019-08-01
order: 4
---
<template lang='md'>
  SpeckleViz&trade; has been created to help you getting a better understanding of the <b>data flow</b> of a <b>specific Speckle Project</b> across users, streams and documents.

  <v-alert type='info' :value='true' class='my-4'>
    As SpeckleViz directly reflects how your Streams are organized and relate to each other within a same Speckle Project, it will make more sense if your Streams have been created, named and organized in a meaningful way.
  </v-alert>

  ## Where to find the graph
  - You can simply find the graph at the <b>bottom of your Speckle Project's page</b>.
  - Depending on how many Streams are contained within the Project and how many users have read/write access, the graph might take a few seconds to generate itself. So please be patient if you see a blank canvas at first.

  ![](~/assets/docs/webapp/speckleviz/where.png){.my-4 .elevation-5}

  ## Overview
  The SpeckeViz interface is divided into 2 main parts: the control interface (composed of the main toolbar, the time range slider and the tag query selector) and the graph canvas itself. Each of these is further explained throughout the next sections.
  ![](~/assets/docs/webapp/speckleviz/specklevizinterface2.png){.my-4 .elevation-5}

  ### Toolbar
  To interact with the graph, your main weapon of choice is the toolbar, located above the interface. Each command is further explained throughout the next sections.

  ![](~/assets/docs/webapp/speckleviz/toolbarclientgraph.png){.my-4 .elevation-5}

  ## How to read the graph
  - <v-icon>fiber_manual_record</v-icon> Circle nodes represent <b>Senders</b> 🚀 and <b>Receivers</b> 📡 (a.k.a local clients)
  - <v-icon>crop_square</v-icon>Square nodes represent <b>Streams</b> 🛰️📦 (a.k.a a box of data on the cloud)
  - 🚀<v-icon>fiber_manual_record</v-icon><v-icon>arrow_right_alt</v-icon>🛰️📦<v-icon>crop_square</v-icon> This pattern represents data that has been shared to a <b>Stream</b> by a user through a <b>Sender</b>
  - 🛰️📦<v-icon>crop_square</v-icon><v-icon>arrow_right_alt</v-icon>📡<v-icon>fiber_manual_record</v-icon> This pattern represents data that has been retrieved by a user from a <b>Stream</b> through a <b>Receiver</b>
  - 🚀<v-icon>fiber_manual_record</v-icon><v-icon>arrow_right_alt</v-icon>🛰️📦<v-icon>crop_square</v-icon><v-icon>arrow_right_alt</v-icon>📡<v-icon>fiber_manual_record</v-icon> This pattern is the sum of the two patterns above...
  - <v-icon>color_lens</v-icon> Generally, both nodes and edges are coloured according to their ```createdAt``` timestamps (dark blue for the newest created, light grey for the oldest). The edge's thickness corresponds to the number of objects being transferred through the respective stream.

  ![](~/assets/docs/webapp/speckleviz/old-new.png){.my-4 .elevation-5 }

  - <v-icon color="pink">group_work</v-icon> The pink clusters group the local clients per software file, or document. Below, a Grasshopper session contains two Speckle Receivers and one Speckle Sender.

  ![](~/assets/docs/webapp/speckleviz/clusterDoc-new.png){.my-4 .elevation-5}

  For now, each type of document is represented by a logo, such as:
      - <b>Grasshopper:</b> 🦗
      - <b>Rhino3D:</b> 🦏
      - <b>Dynamo:</b> 🔧
      - <b>GSA:</b> 💎
  - <v-icon color="blue">group_work</v-icon> The blue clusters group the local clients per user. The user's initials and company are exposed. Below, someone from UCL instantiated 5 Speckle Receivers and 3 Speckle Senders.
  ![](~/assets/docs/webapp/speckleviz/clusterUser-new.png){.my-4 .elevation-5 }

  <br>

  ## How to interact with the graph
  - <v-icon>gesture</v-icon> You can drag nodes around! Just hold left click on a node and drag it around.
  ![](~/assets/docs/webapp/speckleviz/moveNode.gif){.my-4 .elevation-5}

  - You can zoom in <v-icon>zoom_in</v-icon> and zoom out <v-icon>zoom_out</v-icon> by using the scroll wheel, and pan <v-icon>open_with</v-icon> by holding left click on the background canvas and moving your mouse around it. If your graph disappears, you can still click on the GPS button <v-icon>gps_fixed</v-icon> situated on the toolbar, which will re-center it!
  ![](~/assets/docs/webapp/speckleviz/scrollpanzooom2.gif){.my-4 .elevation-5 .border}
  - <v-icon color="pink">group_work</v-icon><v-icon>compare_arrows</v-icon><v-icon color="blue">group_work</v-icon> As mentioned above, the clients are grouped either by Document GUID or User GUID. You can switch between the two by using the toggle switch situated on left side of the toolbar.
  ![](~/assets/docs/webapp/speckleviz/switchGroups.gif){.my-4 .elevation-5 .border}
  - <v-icon>group_work</v-icon><v-icon>tune</v-icon><v-icon>zoom_out_map</v-icon> Use the slider on the right side of the toolbar to expand/collapse the clusters. This might be useful to disentangle the wires and zoom in on a particular cluster.
  ![](~/assets/docs/webapp/speckleviz/expandcollapse.gif){.my-4 .elevation-5 }
  - <v-icon>menu_open</v-icon> Right clicking on a stream will trigger a context menu from which you can:
    - view the stream within the <a href="/docs/web/viewer">viewer app</a> <v-icon>3d_rotation</v-icon>
    - view the stream within the <a href="/docs/web/management">admin app</a>
    - view the stream's raw data
    - view the stream's related client's raw data
  ![](~/assets/docs/webapp/speckleviz/streamMenu.png){.my-4 .elevation-5}

  - <v-icon>date_range</v-icon><v-icon>tune</v-icon> Use the slider below the toolbar to select and highlight a specific timeframe of your project!
  ![](~/assets/docs/webapp/speckleviz/timerange.png){.my-4 .elevation-5 }
  ![](~/assets/docs/webapp/speckleviz/inspectTimeFrame.gif){.my-4 .elevation-5 }
  When dragging the slider, a badge below it will update and inform you on the number of streams comprised within the specified time range. Clicking on the button itself will open the viewer interface within which the selected streams will be aggregated.
  ![](~/assets/docs/webapp/speckleviz/inspectTimeFrameSnap.png){.my-4 .elevation-5 }
  - <v-icon>refresh</v-icon> If you modify your project in any way (by adding/removing streams to it, for example), you might want to hit the refresh button situated on the toolbar as the graph <b>won't listen for changes and therefore won't update automatically</b>.
  ![](~/assets/docs/webapp/speckleviz/refresh.gif){.my-4 .elevation-5 }
  - <v-icon>center_focus_weak</v-icon><v-icon>filter_center_focus</v-icon> It is possible to anchor/release the graph by clicking on these icons situated on the toolbar.
  ![](~/assets/docs/webapp/speckleviz/fixrelease.gif){.my-4 .elevation-5 }
  - <v-icon>search</v-icon> You can query streams by tag(s) - that you previously entered through the <a href="/docs/web/management">management interface</a> - with the search bar situated below the time range slider.
  ![](~/assets/docs/webapp/speckleviz/queryselector.png){.my-4 .elevation-5 }
  - <v-icon>color_lens</v-icon> The graph's layout and edges display can be customized through the toolbar buttons ```EDGES DISPLAY``` and ```GRAPH LAYOUT```. Regarding the edges display, you can choose between ```Line```, ```Arc```, ```Diagonal Horizontal```, ```Diagonal Vertical``` and ```Diagonal Smart```. You can also set the overall graph's layout as ```Free```, ```Horizontal``` or ```Vertical```
  ![](~/assets/docs/webapp/speckleviz/layouts.gif){.my-4 .elevation-5 }
  - <v-icon>save_alt</v-icon> Finally, you can save your graph as .PNG and share it with your team!
  ![](~/assets/docs/webapp/speckleviz/saveaspng.gif){.my-4 .elevation-5 }

  ## Example
  The video below showcases how the graph can be deployed onto a design data set, from design to fabrication stages.

  <v-card tile height="360" class="mt-3 mb-5" width="640" :elevation="10" color="black">
  <iframe
    align="top"
    height="382"
    width="640"
    frameborder="0"
    style="border:0"
    allowfullscreen src="https://player.vimeo.com/video/373740855" allow="autoplay; fullscreen"></iframe>
  </v-card>



  ## The End
  That's it. We hope that you will find this interface useful. If you have any feedback or feature requests, please let us know on <a href="https://speckle-works.slack.com/join/shared_invite/enQtNjY5Mzk2NTYxNTA4LTU4MWI5ZjdhMjFmMTIxZDIzOTAzMzRmMTZhY2QxMmM1ZjVmNzJmZGMzMDVlZmJjYWQxYWU0MWJkYmY3N2JjNGI">Slack</a> or <a href="https://discourse.speckle.works">Discourse</a>. We are also constantly on the hunt for building data, design workflows and other case studies to deploy the graph onto, so don't hesitate to contact us if you think that you could help us on that side!



  ### Credits

  The SpeckleViz interface has been developed during the <a href="https://www.ucl.ac.uk/bartlett/construction/research/management-projects/aec-delta-mobility">"AEC Delta Mobility" project</a>.

</template>
<script>
export default {
  layout: 'docs',
}

</script>
