---
title: "3D Viewer"
summary: "Display streams online"
date: 2019-08-01
order: 1
---
<template lang='md'>
  <v-alert type='info' icon='school' :value='true' class='my-4' color='grey'>
  This small tutorial is assuming you're comfortable around the online interface of Speckle. If you haven't even heard about it, then please read <a href="/docs/essentials/introduction/management"> the following section.</a>
  </v-alert>

  <div class='text-xs-center my-4'>
  <v-btn large color='primary' depressed round href='https://app.speckle.systems/#/view/BCiZ-ggPn?s=eyJzZXJ2ZXIiOiJodHRwczovL2hlc3RpYS5zcGVja2xlLndvcmtzL2FwaSIsImNhbWVyYSI6eyJ0YXJnZXQiOlszMy40MDYwMDcwODEyNzAyMiwyMS44MjEyNTM4MDYzNTI2MTUsMjcuMjAwMDAwNzYyOTM5NDUzXSwicG9zaXRpb24iOls1Ny43MjczNjg4NjkyODEyOCw5Ni44NzAzMjkyMDk2Nzg0MywzNy42MTE1NjYxNjgxMjA1OTZdLCJyb3RhdGlvbiI6Wy0xLjQzMjk0NjA5NDYyNjY5MTYsMC4zMTA2MDg0NDgxMDgyMjI0NywzLjA5OTIxNjg0NDIwMzg1Ml19LCJncm91cHMiOnsia2V5IjoiQTEudmFsdWUuMkQgRWxlbWVudCBEaXNwbGFjZW1lbnRfdmVydGV4Lnx1fCJ9fQ' target='_blank'>
    Example <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>

  ## Loading Streams

  If you have a bunch of geometry that you're passing around with Speckle, you can most probably view it online in the 3d viewer. It's quite easy:
  - under the viewer section, search for a stream and click add
  - from the stream overview / stream details section click on the rotate icon

  ![3d viewer start](~/assets/docs/webapp/viewer/viewer-start.gif) {.my-4 .elevation-10}

  Furthermore, once in the 3d viewer, you can load as many streams as you want or need. Just search for them and click on the plus sign! To remove a stream, just click the remove button.

  Here's a few navigation basics:
  - `spacebar` will zoom to the current scene's extents
  - `double click` on a mouse-overed object to zoom to it
  - `right click` and drag to pan
  - `left click` and drag to rotate
  - `scrollwheel` to zoom in and out

  <br>

  ## Grouping & Filtering

  Speckle allows you to group your objects by any common property. This adds a bit of legibility to the default gray view. To do so, in the viewer controls, go to the middle tab. Here you will be able to select by filed or property to group your objects.

  Some of the predefined filters are:
  - `speckle_type`: what type of object this is, within the Speckle worldview
  - `layer_name` and `layer_guid`: if the stream contains layers, these will be used to group objects

  <br>

  All other fields are populated based on your the properties of the objects currently loaded. In the example below, the stream comes from Revit.

  ![3d viewer groups](~/assets/docs/webapp/viewer/grouping.gif) {.my-4 .elevation-10}

  You will notice that if an object does not have the property you want to filter by, it will be included in the **Orphaned Objects** group. All other objects will be randomly grouped (and coloured) by that specific field.

  Next to each group, there are two buttons:
  - one allows you to isolate the objects in that group (hides all other objects),
  - or simply toggle that specific layer's visibility.

  <br>

  If the property value you want to group objects by is numeric, you will see something else happening:

  ![3d viewer groups](~/assets/docs/webapp/viewer/filtering.gif) {.my-4 .elevation-10}

  Specifically, a different type of UI will pop up, which allows you to filter objects based on a specified numeric range. So, for example, if your objects have a `volume` property, or an `Air Flow` property, which is expressed by a number, the viewer will allow you to filter the current objects in a way that feels more appropriate given the nature of the property.

  ## Inspecting objects

  Finally, you can inspect any object's properties and fields, one by one. First, go to the last tab in the viewer controls. Next, select an object from the viewer by simply... clicking on it! If you want to look at multiple objects at the same time, hold down left shift and click some more objects!

  ![3d viewer groups](~/assets/docs/webapp/viewer/object-properties.png)

  You can now unfold in the tree view to the left to inspect whatever metadata and other properties are associated with this object. That's it - this covers pretty much all the things the Speckle viewer can do for you (so far).
</template>
<script>
export default {
  layout: 'docs',
}

</script>
