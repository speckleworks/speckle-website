---
title: "Interoperability Matrix"
summary: "What data transfer is supported between the Speckle plugins"
date: 2019-10-01
order: 6
---
<template lang='md'>

  Speckle operates on the basis of "lossy interoperability". What this means is that, for example, things might change in transit to better accomodate the host environment in which you are receiving data.

  There's a couple of more in-depth reads on how things actually work behind the scenes, namely:
  - The blog post about [Speckle Kits](/blog/schemas-revisited)
  - Developer Documenation on [schemas and object models](/docs/developers/object-models)

  Below you can find a summary of what currently works and what doesn't, based on the currently available kits:

  ### Core Geometry

  Core geometry is used for Rhino, Grasshopper, Dynamo, a bit in Revit, and threejs (webviewer).

  ![coregeometry](~/assets/docs/essentials/interop/coregeometry.png) {.text-xs-center .my-4}

  ### Elements

  Speckle Elements are used in Revit, and in Grasshopper via the [Schema Builder](/docs/clients/grasshopper/schema-builder) component.

  ![elements](~/assets/docs/essentials/interop/elements.png) {.text-xs-center .my-4}

  ### Structural

  Speckle Elements are used in GSA, and in Grasshopper via the [Schema Builder](/docs/clients/grasshopper/schema-builder) component.

  // TODO

  <br>

  <div class='text-xs-center my-4'>
  <v-btn color='primary' round large href='https://docs.google.com/spreadsheets/d/1WxZykWf32aEg6z0kN7yzpjJ6cxgg16xIZHAjC4o0eOw/edit?usp=sharing' target="_blank">
    Read more <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>

</template>
<script>
export default {
  layout: 'docs',
}

</script>
