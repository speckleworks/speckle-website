---
title: "Speckle Roundup #1: App Clients"
author: Dimitrie
tags: [ 'announcement', 'community' ]
summary: "Latest news from Speckle's current and planned client integrations"
date: 2019-12-10
---

<template lang='md'>

Heya! It's been quite a bit since we last had a speckle roundup (more than a year, I think!). As such, we've decided to make some announcement posts with the latest (by a certain defintion of latest). This first post focuses on the client integrations. {.headline .font-weight-thin .my-4}

There's two more coming with info about the speckle web app, documentation, and - last but not least - server side improvements & developer docs. {.headline .font-weight-thin .my-4}

➡️ [Part 2](/blog/roundup-2019-part2) | [Part 3](/blog/roundup-2019-part3) {.headline .font-weight-thin .my-4 .text-xs-center}


## Speckle Revit {.headline .font-weight-thin .my-4}

The [Revit client](https://speckle.systems/docs/clients/revit/basics) got some really cool improvements. It's still early days though! When you send data, you can now select your elements by filtering them by category, type, and other custom filters, straight from the plugin!

Speckle Revit works quite well for extracting data out of Revit; all parameters are extracted together with their correct units. This allows you to scaffold downstream automation, such as scheduling and quantity takeoffs, straight from the speckle API.

And, by the way, baking things in Revit is now 10x faster. Wowzers! Check out the latest release: [https://github.com/speckleworks/SpeckleInstaller/releases/tag/1.8.2](https://github.com/speckleworks/SpeckleInstaller/releases/tag/1.8.2).

## Speckle Grasshopper {.headline .font-weight-thin .my-4}

There's quite a few extra components that made their way into the [speckle grasshopper plugin](https://speckle.systems/docs/clients/grasshopper/basics)! Specifically:

-   The [Schema Builder Component](https://speckle.systems/docs/clients/grasshopper/schema-builder) allows you to instantiate custom speckle objects.

-   The [Create Custom Speckle Object / Dictionary Component](https://speckle.systems/docs/clients/grasshopper/custom-objects)

-   [Matt](https://twitter.com/matthewswaidan) added a bunch of components that allow you to add streams created in grasshopper into a project, without leaving Gh. Thanks!

## Speckle Blender {.headline .font-weight-thin .my-4}

Finally - not sure why it took us so long - we have a page for the Blender Client made by [Tom Svillans](https://github.com/tsvilans)! [Check it out, and give it a spin](https://speckle.systems/docs/clients/blender/basics)!

## Speckle Excel {.headline .font-weight-thin .my-4}

We have a WIP Excel Plugin, courtsey of [Mishael Nuh](https://twitter.com/MishaelNuh). We still need to publish it on Microsoft's AppStore so as to make it available for everyone.

If you want to beta-test it, please go ahead! There's instructions in the [project readme](https://github.com/speckleworks/SpeckleExcel) on how to install it locally.


</template>
<script>
export default {
  layout: 'blog',
  data() {
    return {
    }
  },
  head() {
    return {
      meta: [
        { hid: 'og-image', property: 'og-image', content: '~/assets/blog/speakers.png' }
      ]
    }
  }
}
</script>
