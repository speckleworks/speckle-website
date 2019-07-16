---
title: Schema Builder
summary: "Creating Speckle kit objects in Grasshopper"
date: 2019-07-15
order: 10
---
<template lang='md'>
  The Grasshopper plugin contains components which allows you to create objects from any installed [schema and object model](../../docs/developers/objectmodels). These three components are grouped under `SpeckleKits` and perform the following functions:
    - <img src="~/assets/docs/schema-builder/SchemaBuilderIcon.png" style="height:1.5em;"/> Creates a SpeckleObject
    - <img src="~/assets/docs/schema-builder/ModifyIcon.png" style="height:1.5em;"/> Modifies the properties of a SpeckleObject
    - <img src="~/assets/docs/schema-builder/convertIcon.png" style="height:1.5em;"/> Converts to the chosen SpeckleObject
  
  <br>
  
  ## Creating Speckle objects
  You can directly create the objects you wish to send using the Schema Builder component, allowing you manually set the properties and values of the Speckle object.

  To use the component, first select the object type you wish to create by right-clicking on the component to bring up its context menu. The object types will be grouped by its Speckle kit name. After selecting a type, the inputs will then be automatically populated to expose its properties. **You can expose additional properties from the `overwrite custom properties` menu option.** Hovering over an input will bring out a tooltip which will provide information regarding what type of input it takes.

  ![schemaBuilder](~/assets/docs/schema-builder/SchemaBuilder.gif) {.my-4 .elevation-10}

  ## Modifying Speckle objects
  The modify component allows you to change the properties of a Speckle object. Similar to the object creation, default properties are automatically exposed, with additional properties hidden in the `overwrite custom properties` menu option. **The modify component will only change properties which have inputs.**

  ![modifyExample](~/assets/docs/schema-builder/modifyExample.png) {.my-4 .elevation-10}

  ## Converting Speckle objects
  Lastly, the converting components attempts to convert the input into the chosen object type. This can be used to convert Grasshopper objects such as `points`, `lines`, or `meshes` to Speckle objects or **to convert one Speckle object type to another**. 

  To select the type to convert to, right-click on the component to bring up its context menu. The object types will be grouped by its Speckle kit name. Note that in order to change type from one Speckle object to another, the input must either be a base or child class of the target type. For example, in the SpeckleElements kit, a `Mesh` can be converted to a `Floor` and vice versa. However, a `Point` cannot be converted to or from a `Wall`. The easiest way to see if a conversion is possible is to test it.

  ![convertExample](~/assets/docs/schema-builder/convertExample.png) {.my-4 .elevation-10}

  ## Conclusion
  This guide has shown how to use the Grasshopper components to convert, create, and modify Speckle objects. Using these components, you will be able to control exactly what gets sent to Speckle.

  ![combinedExample](~/assets/docs/schema-builder/combinedExample.png) {.my-4 .elevation-10}

</template>
<script>
export default {
  layout: 'docs'
}
</script>
