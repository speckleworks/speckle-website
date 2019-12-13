---
title: "Speckle Roundup #3: Server & Dev"
author: Dimitrie
tags: [ 'announcement', 'community' ]
summary: "Server stuff, apis, docs, and more!"
date: 2019-12-10
---

<template lang='md'>

Heya! It's been quite a bit since we last had a speckle roundup (more than a year, I think!). As such, we've decided to make some announcement posts with the latest (by a certain defintion of latest). {.headline .font-weight-thin .my-4}

➡️ [Part 1](/blog/roundup-2019-part1) | [Part 2](/blog/roundup-2019-part2) {.headline .font-weight-thin .my-4 .text-xs-center}

This last post focuses on server-side improvements & developer docs. {.headline .font-weight-thin .my-4}

## Nuget {.font-weight-thin .my-4}

Speckle's .NET ecosystem parts are now on [nuget](https://www.nuget.org/profiles/speckleworks). See the following:

- [Speckle Core](https://www.nuget.org/packages/SpeckleCore/1.6.9)
- [Speckle Ui Base](https://www.nuget.org/packages/SpeckleUiBase/1.0.7)
- [Speckle Account Manager](https://www.nuget.org/packages/SpecklePopup/)
- and more.

## GoSpeckle, Go! {.font-weight-thin .my-4}

[Antoine Dao](https://github.com/AntoineDao) crafted a very nice [Go client](https://github.com/speckleworks/GoSpeckle) for Speckle, expanding hackability! Let rip!

## SpecklePy {.font-weight-thin .my-4}

Pythons? Snakes? Speckles? Yes! We do have a documented [python sdk](https://speckle.systems/docs/developers/python).

## .NET Starter Projects & Docs {.font-weight-thin .my-4}

Sparked off by some discussions on the forum, I have (finally, some might say!) created a small .NET Console app project that shows how to get started with SpeckleCore, the .NET "sdk" for Speckle. Check the [docs out](https://speckle.systems/docs/developers/dotnet-sdk/)! Repo is [here](https://github.com/didimitrie/SpkConsole).

For more context, head over to [this discussion on the forum](https://discourse.speckle.works/t/simple-c-example/454).

## Server Authentication Strategies {.font-weight-thin .my-4}

Speckle is seeing quite a number of internal corporate deployments. One of the main requirements towards making Speckle an exciting enterprise platform is end-user authentication. Consequently, we've re-architected the authentication flows on the server to be able to leverage multiple providers, such as Azure AD (Active Directory), Github, Auth0, etc.

Check out the [blogpost](https://speckle.systems/blog/autentication) to learn more.

## Password Resets {.font-weight-thin .my-4}

It only took several years, but if you have configured your server to send out emails, you can now reset your password! This is possible via `http://${your_server_url}/password-reset`! For example, on hestia, you can reset your password today by going at [this link](https://hestia.speckle.works/password-reset).

## .NET Speckle Kits Docs {.font-weight-thin .my-4}

Heard of SpeckleKits, the old SpeckleAbstract object, etc? Well, now there's a bit of a followup and actually some documentation on how to write your own object model to make it compatible with speckle. If you don't know what this means, check out this [blogpost](https://speckle.systems/blog/schemas-revisited), and afterwards dive into the [docs](https://speckle.systems/docs/developers/object-models)!

</template>
<script>
export default {
  layout: 'blog',
  data() {
    return {
    }
  },
  head() {
    return {
      meta: [
        { hid: 'og-image', property: 'og-image', content: '~/assets/blog/speakers.png' }
      ]
    }
  }
}
</script>
