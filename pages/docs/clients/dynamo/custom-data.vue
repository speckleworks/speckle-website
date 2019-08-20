---
title: "Custom User Data"
summary: "Attach custom user data to objects"
date: 2019-08-01
order: 1
---
<template lang='md'>
  Custom data can be attached to most objects you send within Speckle. This allows for enriched data transfer alongside basic geometry and primitive data.

  To do this, use the "UserData.Set" node included in the Speckle plugin. This node takes in the object you with to attach the user data to and the dictionary of user data. Once you attach the dictionary, the object can now be sent along as usual.

  ![send](~/assets/docs/clients/dynamo/custom-data/send.png) {.text-xs-center .my-4}

  To unpack the data from the object, use the "UserData.Get" node included in the Speckle plugin. This will expose all the properties that were set and their values.

  ![example](~/assets/docs/clients/dynamo/custom-data/example.png) {.text-xs-center .my-4}

  If you wish to access the data elsewhere (such as through the API), all of user data is accessible under the `properties` propperty of the SpeckleObject. An example of this is shown below.

  ```

  {
    "type": "Point",
    "value": [...],
    "hash": "01cb82d81078a3cec1b138149e1d657f",
    "properties": {
      "name": "floor",
      "height": 23
    }
  }
  ```
</template>
<script>
export default {
  layout: 'docs',
}

</script>
