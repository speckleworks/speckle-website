---
title: Rhino Plugin
summary: "Rhino plugin introduction tutorial"
date: 2019-12-27
order: 30
---
<template lang='md'>

## Opening the plugin

After you've installed speckle, you'll need to initialise speckle inside Rhino by typing `SpecklePanel` in the command line. Afterwards, click `Show` and you should see the panel containing the speckle plugin show up:

![rhino](~/assets/docs/rhino/rhino.png)

## Creating an account

First off, if you haven't, create an account on the speckle server of your choice. In case you don't have one, and just want to test out speckle, you can use `https://hestia.speckle.works/api`! <v-icon small>warning</v-icon> Do be advised that this is a test server - use at your own risk. The diagram below explains most of the steps.

![accounts](~/assets/docs/rhino/accounts.png)

## Sending & Receiving

You can now create receivers and senders. To create a sender, select some geometry, click the add button and select "add sender". First select your account, then give your stream a name, and voila! With senders, remember you can access some extra options by clicking the big arrow button next to its name, specifically:
- add & remove objects: you're not limited to your original selection.
- play & pause: by default, senders automatically send data out, whenever they detect a change. You can change this behaviour by hitting the "pause" button.
- delete: you can always remove a sender for good.

![sender](~/assets/docs/rhino/sender-short.gif) {.my-4 .elevation-10}


Receivers can be created by clicking on the big plus button in the lower right hand corner, and selecting "new receiver". First select the server you want to receive a stream from, then search for one or simply directly input the streamId. In rhino, receivers do not "bake" geometry. You need to do that manually! Some things to note:
- Speckle will try and respect the original sender's layer structure
- If you bake the stream again, it will replace its previous geometry. In case you want to keep a copy, duplicate the layers first!
- Too many updates? You can always pause the receiver, and update whenever you want.


![receiver](~/assets/docs/rhino/receiving-short.gif) {.my-4 .elevation-10}


## Beyond Rhino {.my-4}

Of course, if you send something to speckle, it's going to be available in the wider speckle ecosystem. So you can:
- [view it online](https://hestia.speckle.works/#/view/KAQzY9_C6e),
- or, for example receive it in [grasshopper and dynamo](/docs/basics/grasshopper-dynamo)
- get it as raw data via the API
- and more!


[![beyond](~/assets/docs/rhino/online.png)](https://hestia.speckle.works/#/view/KAQzY9_C6e) {.my-4 }

<!-- <div class='embed-container mb-5'><iframe width="560" height="315" src="https://www.youtube.com/embed/D4Bo7u6RtYA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div> -->
<br>

If you have any ytrouble, head over to our [forum and buzz](https://discourse.speckle.works), or hit us up on slack. If you think it's a more of a bug rather than a question, [report it on github](https://github.com/speckleworks/SpeckleRhino/issues)!


</template>
<script>
export default {
  layout: 'docs'
}
</script>
