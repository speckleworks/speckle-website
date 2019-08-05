---
title: "Processor"
summary: "Perform operations on Speckle"
date: 2019-08-01
order: 3
---
<template lang='md'>
  The processor interface within the Speckle admin interface allows you to run operations on Speckle objects, streams, and projects from within the web application.

  Each processor is composed of **blocks**. Each block takes the input of the previous block, passes it through a function, and returns the output for further use. Note that you do not need any programming knowledge to use processor, only to add new blocks to it.

  <v-alert type='error' :value='true' class='my-4' color='grey'>
    Processor currently only works from the Speckle admin found in <a href="https://app.speckle.systems/">https://app.speckle.systems/</a>. Additionally, all processors are saved locally in your browser's local storage. This means that if you will not see the processors you've assembled when you login from another computer.
  </v-alert>

  ## Creating your first processor
  Our first processor will take stream, filter objects based on its proximity to a location, and create a new stream based on its objects.
  
  To start, create a new processor by pressing the blue + button in the lower right corner of the processor page. You will then be taken to the processor details page. From here, you can change its name, add tags, create a description, share you processor, and assemble your blocks.

  Using the *add new block* list box, you can select a new block to add to your processor. You can delete blocks by clicking on the button on the top left of each block.
  
  ![addblock](~/assets/docs/web-app/processor-addblock.gif) {.my-4 .elevation-10}

  For our processor, we will use the following built in blocks:
  1. **Speckle Stream Receiver**: returns the ID of the objects contained in the streams.
  2. **Download Speckle Objects**: gets the objects from the ID given in the input.
  3. **Proximity Filter**: filters objects based on its distance from a point.
  4. **Upload Speckle Objects**: creates new Speckle objects in the server from the input. *This is needed when you modify objects which you have received from a stream.* Returns a list of ID of the objects which was uploaded.
  5. **Speckle Stream Sender**: creates a new stream based on the list of object IDs.
  <br>

  Generally, you will always use the **Speckle Stream Receiver** block in conjunction with the **Download Speckle Objects** block and likewise with the **Upload Speckle Objects** block and the **Speckle Stream Sender** block.

  Once added, the parameters for the input can be added. For this section, we will be using stream [`LqyefJKXG`](https://app.speckle.systems/#/view/LqyefJKXG) found on the Hestia server containing some boxes in 3D space. For the inputs of our proximity filter, we will take all objects within a 10 unit radius from the point (0, 0, 0).
  
  ![assembledblocks](~/assets/docs/web-app/processor-assembledblocks.gif) {.my-4 .elevation-10}

  To run the processor, click the blue play buttom on the bottom right. As the processor is running, you can see the output of each intermediate step by clicking on the **view output** button below each block. The output of the full processor is displayed at the bottom of the page. In our case, the output will be the stream ID.
  
  ![running](~/assets/docs/web-app/processor-running.gif) {.my-4 .elevation-10}

  To rerun, click the blue button on the bottom right again. You can also choose to rerun from a specific block by clicking the **re-run** button on that block. Processor will also automatically detect when you make changes to a block and un-runs any blocks affected by the change.

  You have now successfully created and ran your first processor. To see the results of the processor, you can view stream [`rVrsg-FDi`](https://app.speckle.systems/#/view/rVrsg-FDi) found on the Hestia server.

  ![streams](~/assets/docs/web-app/processor-streams.jpeg){.my-4 .elevation-10}

  ## Writing your own blocks

  To write your own block, you will only need to create a [lambda function](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) for the Speckle admin and add your function to the list of loaded functions [here](https://github.com/speckleworks/SpeckleAdmin/blob/master/src/lambda/_lambdaSettings.js). Each function needs to support both GET and POST API calls:
  - The GET API call will return information regarding the function:
    - `name`: name of block
    - `description`: description of block
    - `icon`: [material icon](https://material.io/resources/icons/) description
    - `allowBucketing`: boolean flag which indicates whether the function call can be split. This only works if the input is an array.
    - `customComponent`: boolean flag which allows for custom UI as opposed to the default generated UI
    - `parameters`: array of parameters which users can add from the UI. Each parameter object has a *name* and *type* property.
  - The POST API call will take the inputs of the previous block and perform the required operations. The function's body parameter will contain four fields:
    - `baseURL`: base URL of the server
    - `token`: Speckle server access token
    - `input`: input from the previous block
    - `parameters`: user input parameters from the UI.
  
  <br>
  <br>

  Processor will automatically generate the UI given the body of the GET API call. It is possible to override the UI of the block (see [here](https://github.com/speckleworks/SpeckleAdmin/blob/master/src/lambda/component/arupCompute.vue) for an example). The vue component must take two properties:
  - `block`: the body of the GET request
  - `params`: an object who's keys are the block parameter names and the value is the input which will be passed to the lambda function when run
  
  <br>
  
  Additionally, it is the responsibility of the component to emit an `update-param` event when a value in the `params` object is updated.

  For examples of lambda functions, please see the [GitHub source code](https://github.com/speckleworks/SpeckleAdmin/tree/master/src/lambda). 
</template>
<script>
export default {
  layout: 'docs',
}

</script>
