---
title: "Custom User Data"
summary: "Attach custom user data to objects"
date: 2019-08-01
order: 1
---
<template lang='md'>
  Custom data can be attached to most objects you send within Speckle. This allows for enriched data transfer alongide basic geometry and primitive data.

  To do this, use the <img src="~/assets/docs/clients/grasshopper/custom-data/setIcon.png" style="height:1em;"/> "Set User Data" component. This component takes in the object you wish to attach the user data to and the user data itself. To create user data, use the <img src="~/assets/docs/clients/grasshopper/custom-data/createIcon.png" style="height:1em;"/> "Create Custom User Data" component. By zooming in to the inputs, you can add or remove new properties by clicking the + and - buttons. *Right-clicking* the input and renaming it also renames the property. Once you attach the user data, the object can now be sent along as usual.

  ![send](~/assets/docs/clients/grasshopper/custom-data/send.png) {.text-xs-center .my-4}

  To unpack the data of the object, use the <img src="~/assets/docs/clients/grasshopper/custom-data/getIcon.png" style="height:1em;"/> "Get User Data" component alonside the <img src="~/assets/docs/clients/grasshopper/custom-data/expandIcon.png" style="height:1em;"/> "Expand User Data" component. This will expose all the properties that were set and their values.

  ![example](~/assets/docs/clients/grasshopper/custom-data/example.png) {.text-xs-center .my-4}

  If you wish to access the data elsewhere (such as through the API), all of user data is accessible under the `properties` propperty of the SpeckleObject. An example of this is shown below.

  ```
  
  {
    "type": "Mesh",
    "vertices": [...],
    "faces": [...],
    "colors": [],
    "hash": "42dbd7e06f5ec4079a7ca5f65a565af7",
    "properties": {
      "level": "3",
      "name": "myFloor"
    }
  }
  ```

</template>
<script>
export default {
  layout: 'docs',
}

</script>
