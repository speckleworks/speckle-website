---
title: "Frontend Plugins"
summary: "Custom Frontend Plugins For Speckle!"
date: 2019-12-18
order: 10
---
<template lang='md'>

  There are two main ways to add functionality to Speckle. One is by creating a new, fully fledged front end application, like [SpeckleAdmin](link), with the stack of your choice. The other, more recent one, is to add custom components to SpeckleAdmin itself that do whatever magic you want them to do. This way you're restricted to Vuejs, but you're getting the benefits of what's already there in the speckle web app. We'll start with the latter, as it's more approachable.

  ## SpeckleAdmin Plugin Development {.headline .font-weight-thin}

  The `./src/plugins` folder is scanned for components that will be added dynamically to SpeckleAdmin's `/plugins` route.

  * Only components that have the prefix `plugin-` will be added, so it's important that your parent component follow this naming pattern!
  * We parse PascalCase to kebabCase to get the route path, so make sure your Vue component is named appropriately.
  * E.g. a Vue component with filename `plugin-FirstPlugin.vue` and a `name: 'FirstPlugin'` property will be served at `/plugins/first-plugin`

  <br>

  Here's an example plugin `.vue` file. First, the html template:

  ```
    <template>
      <div>
        <div class='display-1 ma-5 pa-5'>
          Hi, {{$store.state.user.name}}. Welcome to Plugin B.
        </div>
        <div class='headline font-weight-thin mx-5 px-5'>
          This is a sample plugin for the frontend.
        </div>
      </div>
    </template>
 ```

And then, script part: {.my-3}

 ```js
  <script>
    export default {
      name: 'Sample Plugin',
      manifest: {
        humanReadableName: "Sample Plugin",
        description: "Something witty.",
        requireAuth: false,
        icon: "flight_land", // from: https://material.io/resources/icons/
        registerInNav: true
      },
      created( ) {
        console.log( 'Plugin A created!' )
      }
    }
    </script>
  ```

  Notes: {.mt-2}
  - you have full access to the SpeckleAdmin's store, where the user is stored, as well as streams, projects, etc.
  - the custom `manifest` field describes your plugin. You can even change the icon for the side bar navigation!
  - you can control wether anonymous users can use it via the `requireAuth` flag.

  ## From Scratch Speckle Front End App {.headline .font-weight-thin .mt-4}

  This is a longer route to take, but gives you full control over what's happening. The best way to start is by forking the [SpeckleAdmin](https://github.com/speckleworks/speckleadmin) repo and looking how it's structured, how it handles multi-server authentication, etc.

  If you want to write a tutotrial, by all means go ahead and let us know!

</template>
<script>
export default {
  layout: 'docs'
}
</script>
