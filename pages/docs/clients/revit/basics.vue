---
title: "Revit Basics"
summary: "Revit plugin basics"
date: 2019-08-01
order: 1
---
<template lang='md'>
  <v-alert type='error' :value='true' class='my-4' color='primary'>
    The Revit plugin is WIP. Use it, have fun, but things may break. Or in other words, HIC SVNT DRACONES.
  </v-alert>

  Currently, the Revit plugin does rather well at getting your data out of Revit. It does less well at getting data into Revit, but we're working on it! With that in mind, let's go through the basics of using it as a data extractor, and integrating it further with the wider Speckle ecosystem.

  The plugin itself should now come with the default Speckle installer. If you haven't done so already, read [here how to get started with Speckle](/docs/essentials/start). We currently support Revit 2019, 2020 and 2021, and they all can be installer from the Speckle installer.

  ## Opening the plugin

  Ok, so you want to take a stab at it! First, open a Revit project. Then, on the top tabs, select Addins, then Speckle. A new window should open containing the Speckle plugin UI!

  ![revit](~/assets/docs/clients/revit/open-revit.gif) {.my-4 .elevation-10}

  ## Sending Data

To send data, you first need to create a sender client by clicking the big friendly blue button on top. You will be promted to choose a server and provide a stream name. If you don't have any servers/accounts to choose from, at the moment you can't create them here - so follow the guides for Grasshopper or Rhino up to the account creation step, and come back.

  ![revit](~/assets/docs/clients/revit/send-revit.gif) {.my-4 .elevation-10}

  Some notes:
  - You can always add or remove your current element selection from a specific sender.
  - You'll always need to click the "push" button on a stream in order to send an update. Speckle will try and notify you when it thinks it's the right time to do so!
  - Forgot what you're sending? There's a button to focus & select the objects that are attached to the specific stream, right next to the add/remove buttons.

## Receiving Data

Receiving data in Speckle for Revit is pretty simple, just create a receiver, select the stream to receive and click pull. There's a catch though, only some native Revit element types are supported, currently these are:

- GridLine
- Level
- Floor
- Column
- Wall
- Beam
- Brace
- Shaft
- Room
- Topography
- FamilyInstance (buggy)

These elements can come from Revit, otherwise, **if you'd like to send them from Rhino/Grasshopper, have a look at how to generate them using the [Schema Builder](/docs/clients/grasshopper/schema-builder)**.

  ![revit](~/assets/docs/clients/revit/receive-revit.gif) {.my-4 .elevation-10}

  ## Onwards {.my-4 }

  Now that you've gotten this data out of Revit, you can do quite a few things with it. For example, you could receive it in Grasshopper together with all its parameters and values, and start working your magic in there.

  ![gh](~/assets/docs/clients/revit/gh.png) {.my-4}

  You can also, of course, view it online, and categorize/group it by pretty much any parameter property!

  ![revit](~/assets/docs/clients/revit/online.png) {.my-4}

  Or, if you're a hacker, start querying the API!

  ```js

  let query = 'https://hestia.speckle.works/api/streams/BBnqvGqP_e/objects?fields=properties.parameters.Elevation%20at%20Bottom&properties.beamFamily=M_Concrete-Rectangular%20Beam&limit=1'
  ```

  This will give you quite a nice bunch of JSON:
  ![revit](~/assets/docs/clients/revit/api.png) {.my-4}

  Which can then add into Excel, if you so choose - or start scaffolding your own custom automation applications on top of.

  ![revit](~/assets/docs/clients/revit/excel.gif) {.my-4 .elevation-20}

  This covered the basis of Speckle sending data out of Revit. It's still early days, but we're getting there. There are a few planned features:
  - optional geometry sending
  - better filtering (so you could, for example, send all the rooms from a project only)
  - receiving things! at the moment, only a few elements work as expected - that's why the getting data back into Revit part is not covered in this guide.

  <br>

  For more detailed instructions on how to use Speckle with Grasshopper, check out this [section](/docs/clients/grasshopper/basics). For more information on how to use the [3d viewer, read about it here](/docs/web/viewer)!
</template>

<script>
export default {
  layout: 'docs',
}

</script>
