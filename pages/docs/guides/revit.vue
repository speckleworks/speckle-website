---
title: "Revit Plugin"
summary: "A brief intro to the revit connector"
date: 2017-12-29
order: 20
---
<template lang='md'>

## Intro {.headline .font-weight-thin .my-4}

The domain name for Speckle.Works was registered around March 2016. This means the end of 2017 catches us approximatively 9 months into speckle's life. As some of you may know, this is not _really_ accurate - this incarnation of speckle is built on lessons learned in the three previous ones: [speckle.xyz](http://speckle.xyz), [beta speckle](http://beta.speckle.xyz) and [speckle streams](http://streams.speckle.xyz), with the first going back to late 2015.

Below is a roundup of the last few months. This is not, by all means, an exhaustive list! There's many rumblings and churns, most of it geared towards a better user space and some technical debt elimination (coupled with, obviously, introduction of new technical debt).

## Rhino Plugin {.headline .font-weight-thin .my-4}

There has been a lot of work going towards the Rhino Plugin (5 & 6), which now needs some final polish before release. Code is shared, and in theory it should be workable on Rhino for Mac with minimal changes.

Furthermore, since the UI is a completely separate layer based on VueJS (yes, in .NET! running in a browser!), bits and pieces could be used to jumpstart development for other CAD platforms - kudos to Luis for having the courage to embark us on this road!

So far, it looks good and it feels good: we hope this will entice people in the future to share and parcel their data. Some of us don't scale well on Grasshoppers.

## Code Consolidation {.headline .font-weight-thin .my-4}

A big and invisible update: The .NET Rhino and Grasshopper plugin have been consolidated into one monorepo with the help of [@Will Pearson](https://twitter.com/pearswj) and [@Luis Fraguada](https://twitter.com/luisfraguada). They have also set up a CI build system which makes development much more *consistent* and will hopefully lead to a proper release cycle and plugin packaging.

Furthermore, as a guarantee to Speckle's openness, all code repositories have moved under a [github organisation](https://github.com/speckleworks) that is open to membership if you have something to contribute. Just ask!

## (Building) Information Modeling {.headline .font-weight-thin .my-4}

In response to industry feedback (sounds so formal - let's call them solid chats with peeps doing _real stuff_!), Speckle Core has gotten a really sweet update to support Abstract Objects of any type and nature (within reason),  thus paving the way for a truly schema agnostic future that does not compromise on transparency or flexibility. You can [read more about it here](/blog/schemasandstandards).

Furthermore, [Paul](https://twitter.com/paul_dotnet) is looking into bringing the data richness agenda into main stream Rhino, to lower the bars for efficient intelligent design data communication. Expect news soon, right @paul_dotnet? No pressure.

## Speckle Core {.headline .font-weight-thin .my-4}

Speckle Core (.NET) has steadily improved - and will most probably continue to do so. It's now more modular and accessible, and it's a good low level foundation for building plugins, to the extent you can do them straight away in [c# scripting nodes in grasshopper](/doc/specklehacks/)!

One thing that didn't make it on this list: _proper  namespacing_. But you know, naming things is hard.

## Blender! {.headline .font-weight-thin .my-4}

Just before holidays, we've seen Blender added to the future of Speckle: [Tom Svilans](https://twitter.com/spilans) has published an initial sketch of a [Speckle client](https://github.com/tsvilans/bpy_speckle)! I have no idea how it works, having never taken Blender beyond sub-d-ing a cube around, but this is definitively exciting!

## Community: 120+ people! {.headline .font-weight-thin .my-4}

The Slack group has grown from its meager beginnings when Luis set it up for me and him to coordinate better to a behemoth of **120+ people**. Thank the fortunes not everyone's talking at the same time!

Keep on ignoring the warnings that we need to start paying - we'll get there, and we will hopefully find a way to circumvent and keep on spamming each other with amazing emojis.

## Speckle 003 {.headline .font-weight-thin .my-4}

Speckle also got its first (now outdated) version release - [003](/blog/specklerelease3/), that  introduced many goodies, like a more powerful API, queries, diffing, a new stream viewer ui with sliders, etc.

## Going forward {.headline .font-weight-thin .my-4}

What has been proven so far is that it's possible: we can have an open source design communication platform that is owned by its users. It's a lot of work!

</template>
<script>
export default {
  layout: 'docs'
}
</script>
