---
title: API
summary: "How to approach and interact with the speckle api"
date: 2017-09-30
order: 0
---
<template lang='md'>

Besides the server, everyting else in the Speckle platform is, at the end of the day, an API client. The Speckle REST API's documentation lives in a separate place. It covers all the essential endpoints, specifically:

- Accounts: creating new users, logging in, etc.
- Streams: creating, updating, deleting and diffing streams
- Objects: base create, read, update, delete
- Projects: grouping streams together and setting permissions
- etc.

 <!-- <v-alert type='x' :value='true' class='my-4 text-xs-center' color='primary'> -->
  <div class='text-xs-center my-4'>
  <v-btn large color='primary' depressed round href='https://speckleworks.github.io/SpeckleSpecs/#speckle' target="_blank">
    Speckle OpenAPI specs <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>
  <!-- </v-alert> -->

# Interacting & Testing the API {.headline .font-weight-thin .my-4}

The Speckle API is documented in the OpenAPI v3 format, which allows you to easily import it into an API tool of choice and start hacking. Which API tools? There's quite a few to choose from: [Postman](https://www.getpostman.com/), [Insomnia](https://insomnia.rest/), Paw, etc.

![postman](~/assets/docs/developers/apipaw.png)

If you want a leg up, you can download and import in the API tool of your choice the [raw specification file](https://github.com/speckleworks/SpeckleSpecs/blob/9e1ae90fdfdd84811fbf0bc5158abda9b5d251d9/SpeckleV1OpenApiSpecs.yaml), if it supports OpenApi specs. You can, of course, interact with Speckle straight from the command line, if you're so inclined! TIP: [jq](https://stedolan.github.io/jq/) will help you parse JSON in the command line.

```sh

curl -X POST https://hestia.speckle.works/api/streams \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'
```

</template>
<script>
export default {
  layout: 'docs'
}
</script>
