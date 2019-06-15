---
title: API
summary: "How to approach and interact with the speckle api"
date: 2017-09-30
order: 0
---
<template lang='md'>

Besides the server, everyting else in the speckle platform is, at the end of the day, an API client. The Speckle REST API's documentation lives in a separate place - [check it out](https://speckleworks.github.io/SpeckleSpecs/#speckle)! It covers all the essential endpoints, specifically:

- Accounts: creating new users, logging in, etc.
- Streams: creating, updating, deleting and diffing streams
- Objects: base create, read, update, delete
- Projects: grouping streams together and setting permissions
- etc.

# Interacting and Testing the API {.headline .font-weight-thin .my-4}

The speckle api is documented in the OpenAPI v3 format, which allows you to easily import it into an API tool of choice and start hacking. Which api tools? There's quite a few to choose from: [Postman](https://www.getpostman.com/), [Insomnia](https://insomnia.rest/), Paw, etc.

![postman](~/assets/docs/various/apipaw.png)

If you want a leg up, you can download and import in the api tool of your choice the [raw specification file](https://github.com/speckleworks/SpeckleSpecs/blob/9e1ae90fdfdd84811fbf0bc5158abda9b5d251d9/SpeckleV1OpenApiSpecs.yaml), if it supports OpenApi specs. You can, of course, interact with speckle straight from the command line, if you're so inclined! TIP: [jq](https://stedolan.github.io/jq/) will help you parse json in the command line.

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
