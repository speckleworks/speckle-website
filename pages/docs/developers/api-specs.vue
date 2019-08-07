---
title: API
summary: "How to approach and interact with the speckle api"
date: 2017-09-30
order: 0
---
<template lang='md'>

Besides the server, everything else in the Speckle platform is, at the end of the day, an API client. The Speckle REST API's documentation lives in a separate place. It covers all the essential endpoints, specifically:

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

# Interacting & Testing the API

The Speckle API is documented in the OpenAPI v3 format, which allows you to easily import it into an API tool of choice and start hacking. Which API tools? There's quite a few to choose from: [Postman](https://www.getpostman.com/), [Insomnia](https://insomnia.rest/), Paw, etc.

![postman](~/assets/docs/developers/apipaw.png)

If you want a leg up, you can download and import in the API tool of your choice the [raw specification file](https://github.com/speckleworks/SpeckleSpecs/blob/9e1ae90fdfdd84811fbf0bc5158abda9b5d251d9/SpeckleV1OpenApiSpecs.yaml), if it supports OpenApi specs. You can, of course, interact with Speckle straight from the command line, if you're so inclined! TIP: [jq](https://stedolan.github.io/jq/) will help you parse JSON in the command line.

```sh

curl -X POST https://hestia.speckle.works/api/streams \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'
```

<br>

# Querying
The Speckle REST API supports powerful querying features. For example, below are some of the queries you could apply to the `StreamGetObjects` request.
- `limit`: maximum number of objects returned.
- `offset`: number of objects to skip (or offset) before returning.
- `omit`: which fields to omit from every object. Cannot be used in conjunction with `fields`.
- `fields`: which fields to include from every object. `_id` is always returned. Cannot be used in conjunction with `omit`.
- Filtering based on the value of a field. For example, `type=Point` will only return objects who's type is `Point` and `properties.height<10` will only return objects with `properties.height` less than 10.

<br>
You can use the tool below to test out some queries.

<v-container>
  <v-card>
    <v-card-title>
      <span class='title ma-2'>
        Query Tester
      </span>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field label="API URL" v-model="url"></v-text-field>
          <v-textarea auto-grow rows=1 label="Queries" v-model="query"></v-textarea>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-dialog>
        <template v-slot:activator="{on}">
          <v-btn flat v-on="on" v-on:click="runQuery()">Test</v-btn>
        </template>
        <v-card>
          <pre>{{ responseObject | pretty }}</pre>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</v-container>
</template>
<script>
import Axios from 'axios'

export default {
  layout: 'docs',
  data: function() {
    return {
      url: 'https://hestia.speckle.works/api/streams/qHzcdZVGk/objects',
      query: 'limit=10&fields=hash,properties.parameters.Area&properties.parameters.Area<1',
      output: ''
    }
  },
  filters: {
    pretty: function(value) {
      if (!value)
        return ""
      return JSON.stringify(value, null, 2);
    }
  },
  computed: {
    numOutput( ) {
      if (this.output == null)
        return 0
      if (typeof this.output == 'string')
        return 1
      else
        return Object.keys(this.output).length
    },
    responseObject() {
      if (this.numOutput <= 10)
        return this.removeArraysRecursive( this.output )
      else
      {
        let bar = {}
        for ( let key in this.output ) {
          bar[key] = this.output[key]
          if (Object.keys(bar).length >= 10)
            break
        }
        bar['_hidden'] = `... (${this.numOutput - 10} more objects)`
        return this.removeArraysRecursive( bar )
      }
    }
  },
  methods: {
    async runQuery () {
      try
      {
        let result = await Axios({
          method: 'GET',
          url: this.url + '?' + this.query,
          baseURL: 'https://hestia.speckle.works/api/',
        })

        this.output = result.data.resources
      }
      catch (e)
      {
        this.output = e.response
      }
    },
    removeArraysRecursive( foo ) {
      let bar = {}
      if (typeof foo == 'string')
        return foo
      for ( let key in foo ) {
        if ( !foo.hasOwnProperty( key ) ) continue
        if ( Array.isArray( foo[ key ] ) ) {
          /*DO FUCKALL */
          if( foo[key].length < 3 )
            bar[key] = foo[key]
          else {
            bar[key] = [ ...foo[key].slice(0, 3), `... (${foo[key].length - 3} more values)` ]
          }
        } else if ( typeof foo[ key ] === 'object' && foo[ key ] !== null ) {
          bar[ key ] = this.removeArraysRecursive( foo[ key ] )
        } else {
          bar[ key ] = foo[ key ]
        }
      }
      return bar
    },
  }
}
</script>
