---
title: "Speckle 1.0.0"
author: Dimitrie
tags: [ 'announcement' ]
summary: "Two and half years in, Speckle's ready for a 1.0.0."
date: 2018-04-02
---
<template lang='md'>
# Introduction

While some are closing shop, we're just getting started 🙌 Today marks the release of the 1.0.0-beta version of the Speckle API & Server. It includes, besides easter eggs and bugs, a mature & enriched API that lays the groundwork for future functionality to be grown, specifically in regards with comments, history/versioning and project management.

Going forward, all 1.\*.\* releases will be backwards compatible. {.display-1 .pa-5 .text-xs-center .font-weight-thin}

## The Admin App

![server](~/assets/blog/versionone/admin.png)
A long since needed ecosystem piece, current features are the following:

- search & filter your streams & the streams shared with you.
- manage stream permissions: share & grant read/write access to coworkers.
- edit stream names and other properties
- archive & delete streams, and more...

&nbsp;

## The Viewer App

![server](~/assets/blog/versionone/viewer.png)

Thanks to the hard steady work of [@mswaidan](https://twitter.com/matthewswaidan)'s commits squeezed in between milling [the world's best vinyl cabinets](https://www.simplewoodgoods.com/), the viewer got revamped:

- improved ui
- better login flow
- searching through your streams
- more supported geometries (almost all!) and more...

&nbsp;

## The Server & API

![server](~/assets/blog/versionone/server.png)

The API has been simplified and cleaned up. Before we had ±36 endpoints dealing with essentially three models (accounts, streams and objects). Now we have ±34 endpoints dealing with 5 models (accounts, streams, objects, comments and projects). The [docs have been updated](https://speckleworks.github.io/SpeckleSpecs/).

Server side api versioning is now also in place, which means that going forward, different api versions can be concurrently served. So you're looking at api/v1 and api/v0, for example.

I've eliminated the silly payloads for POST/PUT endpoints and opted for direct provision of a ${object} in the request body. Furthermore, responses have been simplified and unified: any server response inherits from a [ResponseBase](https://speckleworks.github.io/SpeckleSpecs/#responsebase), and results will be either in the resource or resources key, depending on the request (get one/get multiple).

### Permissions

The biggest changes here are the introduction of a simple permissions system that can be controlled on streams via the admin app.

Permissions are not limited to streams though, they have been extended to [all models besides users](https://speckleworks.github.io/SpeckleSpecs/#resourcebase). Furthermore, you can explicitly turn on "anonymous comments" for easier input gathering without forcing outside users to register.

Resources can be marked as "private", in which case only the persons that have access can get to. You can explicitly share a stream with someone, in which case this stream will show up in that user's stream list too. You can grant read or write access.


### Comments

Streams, objects, projects and comments themselves can now receive [comments](https://speckleworks.github.io/SpeckleSpecs/#comments). The comments model has been rethought and some scaffolding is there for the future, namely:

- you can assign comments to other users
- comments can be resolved or not
- comments can have labels
- comments can have saved views attached to them
- comments can have a url to a screenshot (for graphical annotations)

&nbsp;

### Projects

[Projects](https://speckleworks.github.io/SpeckleSpecs/#projects) are essentially a collection of streams and users (and, uh, other projects - yes, you can have sub-projects!). They should help organise your workflow easier in the future once they are exposed through a ui in the admin app and various plugins.

They can receive comments, which should allow you to create multiple stream-wide issues and generally have wider discussions.

## The .NET SDK

[SpeckleCore](https://github.com/speckleworks/SpeckleCore) and all its dependents (namely [SpeckleRhino](https://github.com/speckleworks/SpeckleRhino) and [SpeckleView](https://github.com/speckleworks/SpeckleView)) have been updated, and the new api methods and models have been generated and incorporated. Do report any bugs or inconsistencies you might find!

## Migration & Testing

I've deployed **hestia.speckle.works** as a test server for all of you to use. To  start playing:

1. Download the latest version of the [Rhino & Gh plugins](https://github.com/speckleworks/SpeckleRhino) (breaks backwards compatibility!)
2. Create an account using **[https://hestia.speckle.works/api/v1](https://hestia.speckle.works/api/v1)** as the server url.
3. You're good to go. The admin app is at [/admin](https://hestia.speckle.works/admin/) and the viewer at [/view](https://hestia.speckle.works/view/).

&nbsp;

⚠️ s003.speckle.works is still operational with the pre 1.0.0 update. Do not update your plugins if you want to maintain using s003!

~~Please be aware though that s003 will be retired at one point.~~ [update] s003 has been retired now.

## Kudos
This would have been impossible without the support and hard work of [@mswaidan](https://twitter.com/matthewswaidan), [@luis](https://twitter.com/luisfraguada), [@will](https://twitter.com/pearswj), the brave beta-testers at [HENN](http://www.henn.com/en#design) & that nice company that makes [Rhino](https://www.rhino3d.com/).


</template>
<script>
export default {
  layout: 'blog'
}
</script>
