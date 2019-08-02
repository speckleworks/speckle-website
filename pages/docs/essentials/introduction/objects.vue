---
title: "Objects"
summary: "Data storage in Speckle"
date: 2019-08-01
order: 3
---
<template lang='md'>
  Objects are the basic unit in which data is stored within a Speckle server. You can store and organize any type of data within an object and Speckle will store that object for future use. There are minimal restrictions on what objects can be stored, as long as it has a `type` declared. This flexibility allows for a wide variety of object models to be supported by Speckle.

  ![speckle-objects](~/assets/docs/essentials/introduction/objects.png)
  The following are examples of some objects in their JSON representation which can be stored in Speckle.
  
  ```cs
    {
      "name": "My Cool Point",
      "type": "Point",
      "value": [
        10,
        10,
        10
      ]
    }
  ```
  
  <br>

  ```cs
    {
      "name": "My Beam",
      "type": "Line/Structural1DElement",
      "value": [
        0,
        0,
        0,
        10,
        0,
        0,
      ],
      "properties": {
        "structural": {
          "elementType": "Beam"
        }
      }
    }
  ```
  
  <br>

  In general, the individual plugins take care of how native data is represented as a Speckle object and users will not have to worry about how to package their data into objects.
</template>
<script>
export default {
  layout: 'docs',
}

</script>
