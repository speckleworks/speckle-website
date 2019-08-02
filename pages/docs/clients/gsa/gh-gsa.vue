---
title: "GH Structural Models"
summary: "Constructing structural models in Grasshopper"
date: 2019-08-01
order: 2
---
<template lang='md'>
  <v-alert type='info' icon='school' :value='true' class='my-4' color='grey'>
    This tutorial assumes you are comfortable with creating, modifying, and converting Speckle objects in Grasshopper. To learn more, please read the <a href="/docs/advanced/schema-builder"> the following tutorial</a>.
  </v-alert>

  It is possible to construct a full structural model in Grasshopper using the Speckle plugin. The level of fidelity of the model can be up to the user; you can send simple meshes and lines all the way to full models with section properties, loads, and analysis tasks. For this guide, we will be assuming that the model will be sent to the `design` layer of GSA. In addition, we will be using the SpeckleElement object model. To start, create the geometry of the model using `lines` for 1D members and `meshes` for 2D members. Sending this to GSA will transfer the members.

  ![ghToGsaBasic](~/assets/docs/clients/gsa/ghToGsaBasic.png)

  Using the Grasshopper components, we will assign section properties to our members. This can be done by explicitly converting our `line` and `mesh` to `Structural1DElement` and `Structural2DElementMesh` respectively and attaching some properties to it using the modify component. `Structural2DProperty` and `Structural1DProperty` objects will also be created using the schema builder.

  Properties which includes *Ref* at the end of its name expects the application ID of the Speckle object it is referring to. For example, our `Structural2DElementMesh` expects the application ID of a `Structural2DProperty` for its `PropertyRef` input. If the `ApplicationID` input is not exposed for the `Structural2DProperty`, use the `overwrite custom properties` menu in the context menu to expose it.

  ![ghToGsaProperties](~/assets/docs/clients/gsa/ghToGsaProperties.png)

  Using this pattern, it is possible to create a full fidelity model from Grasshoper for use in GSA (and other structural programs). A demo Grasshopper file can be downloaded [here](/docs/gsa/ghdemo.gh). This model includes everything required to run the analysis: section properties, material properties, loading, analysis tasks, etc. Make sure to set your Rhino units to Millimeters before opening the file and sending the model.

  ![ghToGsaFull](~/assets/docs/clients/gsa/ghToGsaFull.png)
</template>
<script>
export default {
  layout: 'docs',
}

</script>
