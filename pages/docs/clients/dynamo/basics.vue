---
title: "Dynamo Basics"
summary: "Dynamo plugin basics"
date: 2019-08-01
order: 1
---
<template lang='md'>
  ## Using the plugin
  The Dynamo client is bundled as part of the [Speckle installation package](/docs/essentials/installation). Once installed, the nodes will appear under the Speckle tab of Dynamo.

 There are two nodes in the Speckle Dynamo plugin which will allow you to send and receive data:
  - <img src="~/assets/docs/clients/dynamo/sender-icon.png" style="height:1.5em;"/> Speckle Sender
  - <img src="~/assets/docs/clients/dynamo/receiver-icon.png" style="height:1.5em;"/> Speckle Receiver

  <br>

  In most cases, you will work mainly with these nodes.

  ## Sending a stream
  To send data from the Dynamo client, place a *Speckle Sender* node on the graph. If you have not already logged in from another client, a login window will appear. From here, you can login to an account or register for a new one on the Speckle server of your choice. For testing purposes, you can use the Hestia server by entering `https://hestia.speckle.works/api` for the *Server Url*. Do be advised that this is a test server - use at your own risk.

  ![login-popup](~/assets/docs/clients/dynamo/login-popup.png) {.text-xs-center .my-4}

  Once logged in, you will see the Speckle data sender on the graph initialised. To send data, attach any data you wish to send to the node. For example, let us attach a string to the node input. The text is now sent as part of the stream, ready for further use.

  ![sender](~/assets/docs/clients/dynamo/sender.png) {.my-4 .elevation-10}
  
  There are many features of the sender node which is useful for manipulating and organizing your data. The inputs of the sender are the layers of the stream; you can attach any data to an input and it will be sent within that layer of the stream. You can add or remove layers using the + and - buttons. Layers can be renamed by *right-clicking* on the node and selecting the *Rename Layers (Inputs)* option.

  ## Receiving a stream
  The process for receiving a stream is similar to the process of sending a stream. First, place a *Speckle Receiver* node onto the graph. If you have not already logged in from another client, a login window will appear which will allow you to login or register as before.

  Once you login and the receiver node is initialized, you can receive a stream by entering a stream's `streamID` into either the *ID* node input or the *Stream ID* text field.

  ![receiver](~/assets/docs/clients/dynamo/receiver.png) {.my-4 .elevation-10}

  ## Changing accounts
  The Dynamo client automatically uses your default Speckle account. To change this, select *Speckle* > *Manage Accounts* from the menu bar. From there, a login window will appear allowing you to modify the account being used, as well as the option to login to an account or register for a new one on the Speckle server of your choice.

  ## Beyond the basics
  We encourage you to play around with these nodes to get a feel for what is possible with Speckle. Outside of Dynamo, you can use the stream you sent to:
  - view it online
  - receive in other clients
  - get it as raw data via the API
  - and more!
  
  ![complex](~/assets/docs/clients/dynamo/complex.png) {.my-4 .elevation-10}

  If you have any issues or trouble, please don't hesitate to [get in touch](/docs/essentials/community/support).
  
</template>
<script>
export default {
  layout: 'docs',
}

</script>
