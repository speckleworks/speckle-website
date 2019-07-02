---
title: "BYO Schemas & Object Models"
author: Dimitrie
tags: [ 'object models', 'announcement' ]
featuredimg: woot.jpg
summary: "Update on how speckle deals with schemas and standards."
date: 2019-01-21
---

<template lang='md'>
  Since the end of 2017, a few things have improved and changed in the way Speckle deals with object models and their implementation details in various CAD applications.

  Originally, Speckle embedded its own extensbile object model and allowed for end-user defined data structures (classes) to pass through natively if the receiving party had access to original assembly. You can read more about this in this [early blogpost](/blog/schemas).

  This approach worked well so far, but due to the needs coming out from the community, many of which had existing object models, or were developing others internally, we have changed the architecture of how speckle deals with this aspect of interoperability to allow for more flexibility. **Essentially, we've adopted a management solution to the wicked problem of aec data interoperability.**

  The big news is that you can fully replace speckle's "default" object model with your own. We only enforce minimal conventions to make sure speckle can still efficiently round trip objects and work its other magic. We call these speckle kits, and you can read more about them below:


  <div class='text-xs-center my-4'>
  <v-btn large color='primary' depressed round to='/docs/developers/objectmodels'>
    Speckle Kit Documentation <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>

  Kits are essentially a set of schema defintions coupled with a series of "implementations" in the software applications where they're relevant. They are dynamically loaded at runtime by speckle core. You can distribute them separately from the Speckle plugins themselves, and you have full rights to license and develop them as you see fit.

</template>
<script>
export default {
  layout: 'blog'
}

</script>
