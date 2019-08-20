---
title: "Clients"
summary: "Plug-ins to various platforms"
date: 2019-08-01
order: 1
---
<template lang='md'>
  Clients are applications which are responsible either for sending and/or receiving data streams. They are the main method by which users will interact with Speckle.

  A common type of client is a connector which sends and receives data from an application. Existing connectors include Grasshopper, Dynamo, and Rhino, with many more being developed. As the Speckle ecosystem of clients continue to develop and mature, users will have increased flexibility of which software they wish to use within their workflow. To learn more about a client, head over to the client's respective doc section.

  ![speckle-clients](~/assets/docs/essentials/introduction/speckle-clients.png)

  However, clients can also take the form of **scripts** and **web applications**. In fact, Speckle's own [management interface](/docs/web/management) is also a client. Another example of a web application based client is the ArupCarbon tool which calculates the embodied carbon of a model sent from Revit, as shown below.

  ![arup-carbon](~/assets/docs/essentials/introduction/carbon.png) {.my-4 .elevation-10}

</template>
<script>
export default {
  layout: 'docs',
}

</script>
