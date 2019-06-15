---
title: Grasshopper and Dynamo
summary: "How to send data to and from grasshopper and dynamo"
date: 2019-07-07
order: 10
---
<template lang='md'>

<!-- So you want to stream data between Grasshopper and Dynamo? This guide will get you started! -->

## Installation

Download the [latest installer](https://github.com/speckleworks/SpeckleInstaller/releases/latest). This installer bundles together all the stable application plugins, namely Rhino, Grasshopper and Dynamo. It does not require admin privileges, so double click with confidence!

Please note: if you have previously installed speckle for rhino via the .rhi for "all users", you will need to uninstall it manually first by deleting the rhino plugin from its installation folder. You can find the installation folder in Rhino's Plugin Options dialog.

## Account creation

To use Speckle you need a Speckle Account, the first time you use a Speckle plugin you'll be prompted for your details, but you'll also be able to create one.

You only need one Speckle Account to use Speckle, but you could have more if, for instance, your company was running a self hosted version.

Let's go ahead and create one, you can do so from the Grasshopper **or** the Dynamo client.

In **Grasshopper**, drag and drop the *Data Sender* or *Data Receiver* components on the canvas.

![1537457464215](~/assets/docs/grasshopper-dynamo/1537457464215.png) {.text-xs-center .my-4}

In **Dynamo**, click on the *Speckle Sender* or *Speckle Receiver* to place the on the graph.

![1537457525739](~/assets/docs/grasshopper-dynamo/1537457525739.png) {.text-xs-center .my-4}

(Yes, I agree with you, we need to standardize naming, but at least icons are the same!)

Now, in both cases, you'll see the following window:

![1537457889305](~/assets/docs/grasshopper-dynamo/1537457889305.png) {.text-xs-center .my-4}

For *Server Url* use: `https://hestia.speckle.works/api/v1`, unless you want to use a different deployment. Finally, fill in the other fields and click **Register**!

If everything went smooth so far, we'll be ready to start sending and receiving data. If not, **get in touch**, and we'll try to troubleshoot:

- on the [forum](https://discourse.speckle.works/), for general discussions
- on [github](https://github.com/speckleworks), to report bugs/feature requests
- on [slack](http://speckle-works.slack.com), to chat with the community

### Changing account {.mt-5}

In **Grasshopper**, each time you place a component you'll be prompted to select what account to use. In **Dynamo**, after selecting an account, it becomes the **default** one. But you can change it and add new ones at any time from *View > Speckle Accounts*:

![1537461939189](~/assets/docs/grasshopper-dynamo/1537461939189.png) {.text-xs-center .my-4}


## Hello Speckle!

Let's send and receive our first **stream**! A stream, in Speckle terms, is a set of data that can be sent and received. A stream has a unique ID (**streamId**) used to identify it, it also has **layers**, which are used to group data in the stream.

More info on streams can be found in the [Speckle docs](https://speckle.works/doc/coredatamodels/).

In **Grasshopper**, place a Sender component (or reuse the one created previously) and create a panel with some text, then connect the panel to one of the input ports of the Sender, just like so:

![1537459297992](~/assets/docs/grasshopper-dynamo/1537459297992.png) {.text-xs-center .my-4}

Now, right click on the Sender and then select to copy the streamId to clipboard:

![1537459159288](~/assets/docs/grasshopper-dynamo/1537459159288.png) {.text-xs-center .my-4}

In **Dynamo**, place a Receiver node:

![1537459420963](~/assets/docs/grasshopper-dynamo/1537459420963.png) {.text-xs-center .my-4}

Then, either paste the streamId or use the friendly *paste button*, and....

![mind blown](https://media1.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif) {.text-xs-center .my-4}


Here's a full gif of the process, it took us 4 mouse clicks, but we made it! We now  have real time data streaming between Grasshopper and Dynamo. Just try changing the text, and you'll see it update automatically.

![speckle-basic](~/assets/docs/grasshopper-dynamo/speckle-basic.gif) {.text-xs-center .my-4}



## Working with streams

Let's now go through other features and things that can be done with streams.

### Set a stream name

Optional, but good to keep our streams organized.

In **Grasshopper**, right click on the Sender and set the component Name:

![1537461209453](~/assets/docs/grasshopper-dynamo/1537461209453.png) {.text-xs-center .my-4}

In **Dynamo**, similarly, right click and select *Rename Node...*:

![1537461278786](~/assets/docs/grasshopper-dynamo/1537461278786.png) {.text-xs-center .my-4}

### Find a stream by name

In **Grasshopper**, you'll need to use a few components, more specifically the Accounts + Streams + Expand Object:

![1537461555475](~/assets/docs/grasshopper-dynamo/1537461555475.png) {.text-xs-center .my-4}

In **Dynamo**, just use the Streams node and select/search the name:

![speckle-basic2](~/assets/docs/grasshopper-dynamo/speckle-basic2.gif) {.text-xs-center .my-4}

### Add/Remove inputs

You can add and remove inputs from a Sender component/node, these correspond to the **stream layers**, in Speckle terms.

In **Grasshopper**, zoom on the component until you see these + and - signs:

![1537462182235](~/assets/docs/grasshopper-dynamo/1537462182235.png) {.text-xs-center .my-4}

In **Dynamo**, click on the + and - buttons:

![1537462250778](~/assets/docs/grasshopper-dynamo/1537462250778.png) {.text-xs-center .my-4}

### Rename inputs/layers

In **Grasshopper**, right click on the **input** itself:

![1537462494319](~/assets/docs/grasshopper-dynamo/1537462494319.png) {.text-xs-center .my-4}

In **Dynamo**, right click on the *node > Rename Inputs...*:

![1537462570526](~/assets/docs/grasshopper-dynamo/1537462570526.png) {.text-xs-center .my-4}

### Support for multiple data types

Speckle supports natively many data types like text, numbers, geometry primitives, lines, meshes etc... Here you can find a comprehensive list:

https://github.com/speckleworks/SpeckleDynamo/issues/10

![1537463244196](~/assets/docs/grasshopper-dynamo/1537463244196.png) {.text-xs-center .my-4}



### Support for nested lists / data trees

Speckle will automatically convert data trees to nested lists and vice versa:

![1537464067342](~/assets/docs/grasshopper-dynamo/1537464067342.png) {.text-xs-center .my-4}

### Add Custom User Data

Geometry sent with Speckle can have *User Data* attached to it, which is a way of adding *extra* information/properties/metadata. User Data is structured as a dictionary and you'll need ad-hoc *set* and *get* nodes/components to attach/retrieve it.

![1537464815824](~/assets/docs/grasshopper-dynamo/1537464815824.png) {.text-xs-center .my-4}


## Conclusion

This guide has shown how to get started with Speckle and its core features, now it's time for you to play around with it! Make sure to report all bugs you might encounter, and please keep in mind that while all the examples show sending from Grasshopper and Receiving in Dynamo, it's as easy to to the opposite.

</template>
<script>
export default {
  layout: 'docs'
}
</script>
