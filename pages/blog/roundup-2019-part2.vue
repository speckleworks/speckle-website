---
title: "Speckle Roundup #2: Web & Docs"
author: Dimitrie
tags: [ 'announcement', 'community' ]
summary: "News from SpeckleAdmin, Viewer, etc."
date: 2019-12-10
---

<template lang='md'>

Heya! It's been quite a bit since we last had a speckle roundup (more than a year, I think!). As such, we've decided to make some announcement posts with the latest (by a certain defintion of latest). {.headline .font-weight-thin .my-4}

This second post focuses on the speckle web app. {.headline .font-weight-thin .my-4}

➡️ [Part 1](/blog/roundup-2019-part1) | [Part 3](/blog/roundup-2019-part3) {.headline .font-weight-thin .my-4 .text-xs-center}


## Speckle Web App {.font-weight-thin .my-4}

In case you missed it, the speckle web app is much sweeter! There's a host of improvements that we've made:

-   Searching should work better,

-   Tag filtering is now exposed as a menu,

-   Project sharing UI is, hopefully, less confusing,

-   More mobile friendly.


## Speckle Viewer {.font-weight-thin .my-4}

The speckle viewer is part of the web app, but deserves a separate section of its own. Here's what's new:

-   better loading performance (extra improvements in the pipeline),

-   sweeter materials (again, thanks to [Matt](https://twitter.com/matthewswaidan)!),

-   when sharing a viewer link, camera and filter by are re-instantiated.


When viewing a stream online, you can group objects by any property they might have, and thereafter selectively filter them on or off. If the property is numeric (such as area, volume or time), the viewer will give you a range slider so you can

Did you know you can now colour meshes and lines by analysis results too? This feature was mostly made to support data coming out of GSA, but it works in a generic way that you can instantiate such an object from Grasshopper or Dynamo.

## Multiple Servers & Sharing Links {.font-weight-thin .my-4}

As you may know, there is a always-up-to-date [speckle web app hosted here](https://app.speckle.systems). You can use it with any servers as long as they are accessible and running https (SSL cert). The url bar always keeps track of the current server you're logged in at, making it much easier to consistently share links with others, without messing up!

## Processor {.font-weight-thin .my-4}

Written by [Mish](https://github.com/mishaelnuh), the [processor interface](https://app.speckle.systems/#/processors) within Speckle admin allows you to run operations on Speckle objects, streams, and projects from within the web application. Checkout the [docs](https://speckle.systems/docs/web/processor) here and give it a spin!

## Speckle Graph {.font-weight-thin .my-4}

Courtsey of [Paul](https://twitter.com/paul_dotnet), SpeckleViz has been created to help you getting a better understanding of the data flow of a specific Speckle Project across users, streams and documents.

Currently, it only works on streams from a projects. Check the docs [here]([https://speckle.systems/docs/web/speckleviz](https://speckle.systems/docs/web/speckleviz)!

## Documentation {.font-weight-thin .my-4}

Documentation is not fully comprehensive, but we made a start! It's split into three main categories, namely:

-   Introduction & Essentials

-   Client write-ups for Grasshopper, Rhino, Revit, etc.

-   Web: covering the main features of the speckle web app.

-   Developers: info to get you started coding with speckle.


That's it for this roundup! Stay tunded for the last one, covering the Speckle Server & Developer documentation goodies!

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
