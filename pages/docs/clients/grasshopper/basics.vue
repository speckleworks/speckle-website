---
title: "Grasshopper Basics"
summary: "Grasshopper plugin basics"
date: 2019-08-01
order: 1
---
<template lang='md'>
  <v-alert type='error' :value='true' class='my-4' color='primary'>
    If you have previously installed Speckle for Rhino via the .rhi for "all users", you will need to uninstall it manually first by deleting the Rhino plugin from its installation folder. You can find the installation folder in Rhino's Plugin Options dialog.
  </v-alert>

  ## Using the plugin
  The Grasshopper client is bundled as part of the [Speckle installation package](/docs/essentials/installation). Once installed, the components will appear under the Speckle tab of Grasshopper.

  Within the Grasshopper tab, there are a number of components there to help you control how you use Speckle. The two key main compoments are:
  - <img src="~/assets/docs/clients/grasshopper/sender-icon.png" style="height:1.5em;"/> Data Sender
  - <img src="~/assets/docs/clients/grasshopper/receiver-icon.png" style="height:1.5em;"/> Data Receiver

  <br>

  In most cases, you will work mainly with these components.

  ## Sending a stream
  To send data from the Grashopper client, place a *Data Sender* component onto the canvas. Once you do so, a login window will appear. From here, you can login to an account or register for a new one on the Speckle server of your choice. For testing purposes, you can use the Hestia server by entering `https://hestia.speckle.works/api` for the *Server Url*. Do be advised that this is a test server - use at your own risk.

  ![login-popup](~/assets/docs/clients/grasshopper/login-popup.png) {.text-xs-center .my-4}

  Once logged in, you will see the Speckle data sender on the canvas initialised. To send data, attach any data you wish to send to the component. For example, let us send attach a panel component with some text to the component. The text is now sent as part of the stream, ready for further use.

  ![sender](~/assets/docs/clients/grasshopper/sender.png) {.my-4 .elevation-10}
  
  There are many features of the sender component which is useful for manipulating and organizing your data. The inputs of the sender are the layers of the stream; you can attach any data to an input and it will be sent within that layer of the stream. By zooming in, you can add or remove layers using the + and - buttons. Layers can be renamed by *right-clicking* the input and renaming the input itself.
  
  *Right-clicking* on the component will bring up its context menu. From there, you can modify the name of the stream, control whether the stream should automatically update, or perform a force refresh.

  ## Receiving a stream
  The process for receiving a stream is similar to the process of sending a stream. First, place a *Data Receiver* component onto the canvas. A login window will appear which will allow you to login or register as before.

  Once you login and the receiver component is initialized, you can receive a stream by entering a stream's `streamID` as the ID input.  *Right-clicking* on the component will bring up its context menu. From there, you can control whether the stream should automatically update or perform a force refresh.

  ![receiver](~/assets/docs/clients/grasshopper/receiver.png) {.my-4 .elevation-10}

  ## Beyond the basics
  We encourage you to play around with these components to get a feel for what is possible with Speckle. Outside of Grasshopper, you can use the stream you sent to:
  - view it online
  - receive in other clients
  - get it as raw data via the API
  - and more!
  
  ![complex](~/assets/docs/clients/grasshopper/complex.png) {.my-4 .elevation-10}

  In addition to these two base components featured in this doc, the Grasshopper client has many other features and components which will allow you to have finer control over your data. If you wish to learn more about these features, please view the other Grasshopper documentation pages.
  
  If you have any issues or trouble, please don't hesitate to [get in touch](/docs/essentials/community/support).
  
</template>
<script>
export default {
  layout: 'docs',
}

</script>
