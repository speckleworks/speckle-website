---
title: "Data Streams"
summary: "Collecting objects in Speckle"
date: 2019-08-01
order: 4
---
<template lang='md'>
  Data streams provide a way to collect objects in a manageable and organised way. Each stream is automatically given a `stream ID` which uniquely identifies the stream in a server. In addition, streams contains information regarding other properties such as units, layers, the owner of the stream, and who has access to the stream. This is the main way that data is shared and transferred **from one client** to another; a client can package its data into one stream and other clients are free to 'listen' to the stream and receive its data. It is up to the client to determine what each stream contains. For example they could be:
  - a layer in a GIS db
  - a layer in a CAD application
  - a workset in Revit
  - a selection of objects from Grasshopper
  - a structural model
  
  <br> 

  **It is good practice to always consider streams to be single directional flows of data**. This reduces conflicts arising from various sources updating a stream with conflicting information. If you wish to pass data back to another platform upstream of your workflow, it is advisable to pass this data back as a new stream which will need to be handled by the platform.

  ![speckle-streams](~/assets/docs/essentials/introduction/speckle-streams.png)

  To facilitate collaboration between users, streams have modifiable permission settings to give other users access to the stream. The two levels of permissions are:
  - `Read` permission which will allow users to receive data from the stream.
  - `Write` access which will allow users to write to the stream from their account. For example, if you were to share your Grasshopper script with another user, they will be able to use your sender components.

</template>
<script>
export default {
  layout: 'docs',
}

</script>