---
title: GSA Plugin
summary: "GSA plugin introduction tutorial"
date: 2019-07-15
order: 40
---
<template lang='md'>
  <v-alert type='info' :value='true' class='my-4' color='primary'>
    The GSA plugin is distributed by <a class='white--text' href='https://www.oasys-software.com/' target='_blank'>Oasys</a>. To get access, <a class='white--text' href='https://www.oasys-software.com/contact-us/' target='_blank'>please get in touch</a>. The following guide assumes that you already have the SpeckleGSA plugin installed.
  </v-alert>

  # Basics

  If you haven't done so already, read [here how to get started with Speckle](/docs/start).

  ### Opening the plugin
  SpeckleGSA runs as its own standalone application. After you've installed Speckle and the GSA plugin, the client should be added to your start menu as `SpeckleGSA`.

  ![gsa](~/assets/docs/gsa/client.png) {.my-4 .elevation-10}

  ### Interface
  The plugin is separated into tabs:
  - **Server**: login or create an account in their Speckle server of choice
  - **GSA**: create or open a new GSA file
  - **Sender**: sends the GSA model
  - **Receiver**: receive streams into the GSA file
  - **Settings**: contains all settings
  <br>

  ### Creating an account or logging in
  As with most other clients, you will need an account on the Speckle server of your choice. This can be done by clicking `Login` from the server tab. If you do not have a Speckle server available and just want to test out Speckle, you can use `https://hestia.speckle.works/api`! <v-icon small>warning</v-icon> Do be advised that this is a test server - use at your own risk.

  ![login](~/assets/docs/gsa/login.png)

  ### Sending
  Once logged in, you can start sending GSA models. First, either create or open a GSA file from the GSA tab. **Only files opened through this menu are accessible by the client.** A demo GSA file can be downloaded [here](/docs/gsa/Speckle GSA Demo.gwb). Next, switch to the sender tab and click on the <v-icon small>play_circle_filled</v-icon> button to start sending. Once finished, the ID of the stream as well as the name will be displayed in the list view. Right clicking this entry will give various useful options, such as viewing the model in the [online viewer](/docs/basics/viewer), copying the stream ID, or cloning the stream.

  ![sending](~/assets/docs/gsa/sending.gif) {.my-4 .elevation-10}

  <v-alert type='error' :value='true' class='my-4' color='grey'>
      You will need to pause the sender by clicking the <v-icon small>pause_circle_filled</v-icon> button before receiving streams or changing any settings.
  </v-alert>

  Within the sender tab, there are two toggles to change how the sender operates.
    - The `Layer to Stream` toggle allows you to send either the `Design` or `Analysis` layer of GSA.
    - The `Streaming Method` toggle changes whether the plugin should watch GSA and update the stream as changes are made or whether the stream should be updated whenever the <v-icon small>play_circle_filled</v-icon> button is selected.
  <br>

  Additional options for the sender is contained within the settings tab.

  ### Receiving
  Receiving streams can be done through the receiver tab. As with sending, you will need to login and create/open a GSA file prior to receiving. To start sending, add the stream IDs of the streams you wish to receive using the `Add Receiver` button. Next, click on the <v-icon small>play_circle_filled</v-icon> button to start receiving.

  ![receiving](~/assets/docs/gsa/receiving.gif) {.my-4 .elevation-10}

  <v-alert type='error' :value='true' class='my-4' color='grey'>
      You will need to pause the receiver by clicking the <v-icon small>pause_circle_filled</v-icon> button before sending streams or changing any settings.
  </v-alert>

  Within the receiver tab, there are two toggles to change how the sender operates.
    - The `Layer to Stream` toggle allows you to write to either the `Design` or `Analysis` layer of GSA.
    - The `Streaming Method` toggle changes whether the plugin will automatically receives any stream changes or whether it will only receive and write once. **It is recommended that you do not modify the model while in continuous mode as it may cause unintended effects.**
  <br>

  Once the receiver is paused (or if in single streaming mode), you will be presented with an option to bake the objects into GSA. **Baked objects will no longer be tracked; receiving the same stream within the same model will create duplicate entities.** Chosing not to bake the objects will cause the GSA client to delete any entities it wrote while receiving the stream. Pre-existing entities will not be deleted.

  ### Conclusion
  This guide has shown how to use the GSA plugin to send and receive models with Speckle. Below are a list of more advanced features of the GSA plugin. The best way to familiarize yourself is to play around with the plugin in conjunction with other Speckle plugins. Make sure to report all bugs you might encounter.

  # Advanced
  ### Sending results
  To send analysis results from GSA, some settings must be modified within the result tab:
  - Set the GSA result cases you want to send in the `cases` field. The cases should be delimited by a new line.
  - Select which results you wish to export from the `result to send` checkbox group

  <v-alert type='error' :value='true' class='my-4' color='primary'>
    Results can only be sent from the <b>analytical</b> layer in <b>single</b> streaming mode.
  </v-alert>

  By default, the result are embedded within the object itself. If you wish to send only results, unselect `embed results in objects` and select `send only results`.

  ![results](~/assets/docs/gsa/results.gif) {.my-4 .elevation-10}

  Results can then be then be received in other clients and manipulated. Below is an example of the results being received in Grasshopper and its contour being displayed.

  ![ghcontour](~/assets/docs/gsa/ghcontour.png) {.my-4 .elevation-10}

  ### Revit to GSA
  <v-alert type='error' :value='true' class='my-4' color='primary'>
    The Revit plugin is WIP. Use it, have fun, but things may break.
  </v-alert>

  Using the Revit plugin and the GSA plugin, you can send the Revit Analytical Model and receive it in GSA. To do so, add the analytical model elements you wish to send to a sender in the Revit plugin and receive as usual in GSA. For more about the Revit plugin, click [here](/docs/basics/revit).

  ![revittogsa](~/assets/docs/gsa/revittogsa_fast.gif) {.my-4 .elevation-10}

  ### Constructing structural models in Grasshopper
  <v-alert type='info' icon='school' :value='true' class='my-4' color='grey'>
    This tutorial assumes you are comfortable with creating, modifying, and converting Speckle objects in Grasshopper. To learn more, please read the <a href="/docs/advanced/schema-builder"> the following tutorial</a>.
  </v-alert>

  It is possible to construct a full structural model in Grasshopper using the Speckle plugin. The level of fidelity of the model can be up to the user; you can send simple meshes and lines all the way to full models with section properties, loads, and analysis tasks. For this guide, we will be assuming that the model will be sent to the `design` layer of GSA. In addition, we will be using the SpeckleElement object model. To start, create the geometry of the model using `lines` for 1D members and `meshes` for 2D members. Sending this to GSA will transfer the members.

  ![ghToGsaBasic](~/assets/docs/gsa/ghToGsaBasic.png)

  Using the Grasshopper components, we will assign section properties to our members. This can be done by explicitly converting our `line` and `mesh` to `Structural1DElement` and `Structural2DElementMesh` respectively and attaching some properties to it using the modify component. `Structural2DProperty` and `Structural1DProperty` objects will also be created using the schema builder.

  Properties which includes *Ref* at the end of its name expects the application ID of the Speckle object it is referring to. For example, our `Structural2DElementMesh` expects the application ID of a `Structural2DProperty` for its `PropertyRef` input. If the `ApplicationID` input is not exposed for the `Structural2DProperty`, use the `overwrite custom properties` menu in the context menu to expose it.

  ![ghToGsaProperties](~/assets/docs/gsa/ghToGsaProperties.png)

  Using this pattern, it is possible to create a full fidelity model from Grasshoper for use in GSA (and other structural programs). A demo Grasshopper file can be downloaded [here](/docs/gsa/ghdemo.gh). This model includes everything required to run the analysis: section properties, material properties, loading, analysis tasks, etc. Make sure to set your Rhino units to Millimeters before opening the file and sending the model.

  ![ghToGsaFull](~/assets/docs/gsa/ghToGsaFull.png)

  ### Command-line interface
  The GSA plugin has a CLI interface to send and receive GSA models without the use of the interface. For detailed usage help, execute the `SpeckleGSAUI -h` command.

  Sample sending command:
  ```

  SpeckleGSAUI sender --server "https://hestia.speckle.works/api" --email mishael.nuh@arup.com --password XXX --file "C:\Speckle\Speckle Demos\GSA Demo.gwb" --layer analysis --result "2D Element Derived Force" --resultCases A1
  ```

  <br>

  Sample receiving command:
  ```

  SpeckleGSAUI receiver --server "https://hestia.speckle.works/api" --email mishael.nuh@arup.com --password XXX --file "C:\Users\Mishael.Nuh\Desktop\Received File.gwb" --layer design --nodeAllowance 0.01 --streamIDs YbtzuXrK0W
  ```

</template>
<script>
export default {
  layout: 'docs'
}
</script>
