---
title: "Basics"
summary: "Grasshopper plugin basics"
date: 2019-08-01
order: 1
---
<template lang='md'>
  <v-alert type='error' :value='true' class='my-4' color='primary'>
    If you have previously installed speckle for rhino via the .rhi for "all users", you will need to uninstall it manually first by deleting the rhino plugin from its installation folder. You can find the installation folder in Rhino's Plugin Options dialog.
  </v-alert>

  ## Account login

  In order to use either the Grasshopper or Dynamo plugin, you will need to login to your account. Registration can be done from the [Speckle admin](../../essentials/introduction/management) interface

  To use Speckle you need a Speckle Account. the first time you use a Speckle plugin you'll be prompted for your details, but you'll also be able to create one.

  You only need one Speckle Account to use Speckle, but you could have more if, for instance, your company was running a self hosted version.

  Let's go ahead and create one, you can do so from the Grasshopper **or** the Dynamo client.

  In **Grasshopper**, drag and drop the *Data Sender* or *Data Receiver* components on the canvas.

  ![gh-components](~/assets/docs/clients/grasshopper-dynamo/gh-components.png) {.text-xs-center .my-4}

  In **Dynamo**, click on the *Speckle Sender* or *Speckle Receiver* to place the on the graph.

  ![dynamo-nodes](~/assets/docs/clients/grasshopper-dynamo/dynamo-nodes.png) {.text-xs-center .my-4}

  (Yes, I agree with you, we need to standardize naming, but at least icons are the same!)

  Now, in both cases, you'll see the following window:

  ![login-popup](~/assets/docs/clients/grasshopper-dynamo/login-popup.png) {.text-xs-center .my-4}

  For *Server Url* use: `https://hestia.speckle.works/api/v1`, unless you want to use a different deployment. Finally, fill in the other fields and click **Register**!

  If everything went smooth so far, we'll be ready to start sending and receiving data. If not, **get in touch**, and we'll try to troubleshoot:

  - on the [forum](https://discourse.speckle.works/), for general discussions
  - on [github](https://github.com/speckleworks), to report bugs/feature requests
  - on [slack](https://speckle-works.slack.com/join/shared_invite/enQtNjY5Mzk2NTYxNTA4LTU4MWI5ZjdhMjFmMTIxZDIzOTAzMzRmMTZhY2QxMmM1ZjVmNzJmZGMzMDVlZmJjYWQxYWU0MWJkYmY3N2JjNGI), to chat with the community

  ### Changing account {.mt-5}

  In **Grasshopper**, each time you place a component you'll be prompted to select what account to use. In **Dynamo**, after selecting an account, it becomes the **default** one. But you can change it and add new ones at any time from *View > Speckle Accounts*:

  ![change-login](~/assets/docs/clients/grasshopper-dynamo/change-login.png) {.text-xs-center .my-4}


  ## Hello Speckle!

  Let's send and receive our first **stream**! A stream, in Speckle terms, is a set of data that can be sent and received. A stream has a unique ID (**streamId**) used to identify it, it also has **layers**, which are used to group data in the stream.

  More info on streams can be found in the [Speckle docs](https://speckle.works/doc/coredatamodels/).

  In **Grasshopper**, place a Sender component (or reuse the one created previously) and create a panel with some text, then connect the panel to one of the input ports of the Sender, just like so:

  ![gh-myfirstpanel](~/assets/docs/clients/grasshopper-dynamo/gh-myfirstpanel.png) {.text-xs-center .my-4}

  Now, right click on the Sender and then select to copy the streamId to clipboard:

  ![gh-copystreamid](~/assets/docs/clients/grasshopper-dynamo/gh-copystreamid.png) {.text-xs-center .my-4}

  In **Dynamo**, place a Receiver node:

  ![dynamo-receiver](~/assets/docs/clients/grasshopper-dynamo/dynamo-receiver.png) {.text-xs-center .my-4}

  Then, either paste the streamId or use the friendly *paste button*, and....

  ![mind blown](https://media1.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif) {.text-xs-center .my-4}


  Here's a full gif of the process, it took us 4 mouse clicks, but we made it! We now  have real time data streaming between Grasshopper and Dynamo. Just try changing the text, and you'll see it update automatically.

  ![gh-dynamo-anim](~/assets/docs/clients/grasshopper-dynamo/gh-dynamo-anim.gif) {.text-xs-center .my-4}



  ## Working with streams

  Let's now go through other features and things that can be done with streams.

  ### Set a stream name

  Optional, but good to keep our streams organized.

  In **Grasshopper**, right click on the Sender and set the component Name:

  ![gh-changename](~/assets/docs/clients/grasshopper-dynamo/gh-changename.png) {.text-xs-center .my-4}

  In **Dynamo**, similarly, right click and select *Rename Node...*:

  ![dynamo-changename](~/assets/docs/clients/grasshopper-dynamo/dynamo-changename.png) {.text-xs-center .my-4}

  ### Find a stream by name

  In **Grasshopper**, you'll need to use a few components, more specifically the Accounts + Streams + Expand Object:

  ![gh-streamname](~/assets/docs/clients/grasshopper-dynamo/gh-streamname.png) {.text-xs-center .my-4}

  In **Dynamo**, just use the Streams node and select/search the name:

  ![dynamo-specklesearch](~/assets/docs/clients/grasshopper-dynamo/dynamo-specklesearch.gif) {.text-xs-center .my-4}

  ### Add/Remove inputs

  You can add and remove inputs from a Sender component/node, these correspond to the **stream layers**, in Speckle terms.

  In **Grasshopper**, zoom on the component until you see these + and - signs:

  ![gh-layers](~/assets/docs/clients/grasshopper-dynamo/gh-layers.png) {.text-xs-center .my-4}

  In **Dynamo**, click on the + and - buttons:

  ![dynamo-layers](~/assets/docs/clients/grasshopper-dynamo/dynamo-layers.png) {.text-xs-center .my-4}

  ### Rename inputs/layers

  In **Grasshopper**, right click on the **input** itself:

  ![gh-renamelayer](~/assets/docs/clients/grasshopper-dynamo/gh-renamelayer.png) {.text-xs-center .my-4}

  In **Dynamo**, right click on the *node > Rename Inputs...*:

  ![dynamo-renamelayer](~/assets/docs/clients/grasshopper-dynamo/dynamo-renamelayer.png) {.text-xs-center .my-4}

  ### Support for multiple data types

  Speckle supports natively many data types like text, numbers, geometry primitives, lines, meshes etc... Here you can find a comprehensive list:

  https://github.com/speckleworks/SpeckleDynamo/issues/10

  ![multiple-data-types](~/assets/docs/clients/grasshopper-dynamo/multiple-data-types.png) {.text-xs-center .my-4}

  ### Support for nested lists / data trees

  Speckle will automatically convert data trees to nested lists and vice versa:

  ![data-trees](~/assets/docs/clients/grasshopper-dynamo/data-trees.png) {.text-xs-center .my-4}

  ## Conclusion

  This guide has shown how to get started with Speckle and its core features, now it's time for you to play around with it! Make sure to report all bugs you might encounter, and please keep in mind that while all the examples show sending from Grasshopper and Receiving in Dynamo, it's as easy to to the opposite.
</template>
<script>
export default {
  layout: 'docs',
}

</script>
