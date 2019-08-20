---
title: "Creating Custom Objects"
summary: "Generate custom objects with user data"
date: 2019-08-01
order: 3
---
<template lang='md'>
  You can create your own custom object using the <img src="~/assets/docs/clients/grasshopper/custom-objects/createIcon.png" style="height:1em;"/> "Create a Custom Speckle Object" component. This component allows you to create a Speckle object of type `object` with custom properties which you set as the input, providing a good way to organize and send your custom data over Speckle.
  
  To start, add the component to your canvas. The component has two outputs: the Speckle object itself and a dictionary representation of your object. Once placed, you can modify the inputs of the component. By zooming in to the inputs, you can add or remove new properties by clicking the + and - buttons. *Right-clicking* the input and renaming it also renames the property. The object can now be sent to Speckle just like any other objects.

  ![send](~/assets/docs/clients/grasshopper/custom-objects/send.png) {.text-xs-center .my-4}

  To unpack the data of the object, use the <img src="~/assets/docs/clients/grasshopper/custom-objects/unpackIcon.png" style="height:1em;"/> "Expand Dictionary or SpeckleObject" component. This will expose all the properties that were set and their values.

  ![example](~/assets/docs/clients/grasshopper/custom-objects/example.png) {.text-xs-center .my-4}

  # Nesting objects and properties
  Using the <img src="~/assets/docs/clients/grasshopper/custom-objects/createIcon.png" style="height:1em;"/> "Create a Custom Speckle Object" component, you can also nest objects within the properties. To do so, attach the dictionary output as the input to another Speckle object.

  ![nesting](~/assets/docs/clients/grasshopper/custom-objects/nestingObjects.png) {.text-xs-center .my-4}
  
  # Lists
  In order to attach a list to an object, you will need to use the <img src="~/assets/docs/clients/grasshopper/custom-objects/encapsulateIcon.png" style="height:1em;"/> "Encapsulate a List" component. This will collapse the list as a single object, allowing you to assign it to a single property. Without this component, the <img src="~/assets/docs/clients/grasshopper/custom-objects/createIcon.png" style="height:1em;"/> "Create a Custom Speckle Object" component will create a Speckle object for each item in a list.

  ![encapsulate list](~/assets/docs/clients/grasshopper/custom-objects/encapsulateList.png) {.text-xs-center .my-4}


</template>
<script>
export default {
  layout: 'docs',
}

</script>
