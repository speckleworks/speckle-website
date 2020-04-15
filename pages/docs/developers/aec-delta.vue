---
title: "Delta Endpoints"
summary: "AEC Delta Compliance"
date: 2020-04-15
order: 1
---

<template lang='md'>
  In the context of the [AEC Delta Mobility research project](https://www.ucl.ac.uk/bartlett/construction/research/management-projects/aec-delta-mobility), two new endpoints have been implemented on the Speckle server: `StreamGetDelta` and `StreamApplyDelta`.

  - [StreamGetDelta.js](https://github.com/speckleworks/SpeckleServer/blob/master/app/api/streams/StreamGetDelta.js) is similar to the existing [StreamDiff.js endpoint](https://github.com/speckleworks/SpeckleServer/blob/master/app/api/streams/StreamDiff.js) (in the sense that one can inspect the created, deleted and common objects between two Streams or revisions), but its reponse matches specifically the [AEC Delta Specifications](https://github.com/aecdeltas/aec-deltas-spec/wiki/REST-API#get-delta-between-two-revisions-diff-revisions). You can call `StreamGetDelta` like so:
  
  <br>
  
  ```js

 `https://hestia.speckle.works/api/streams/${StreamA}/delta/${StreamB}`
  ```
  <br>

  - [StreamApplyDelta.js](https://github.com/speckleworks/SpeckleServer/blob/master/app/api/streams/StreamApplyDelta.js) enables the application of a delta onto an existing Stream. The delta response resulting from `StreamGetDelta` - a diffing between Stream A and Stream B - can be "applied" onto Stream A. In other words, the newly created objects (between both Streams) will be added to Stream A, the deleted objects (between both Streams) will be deleted from Stream A, and the common objects (between both Streams) will remain untouched. As a result, Stream A contains the same objects than Stream B (if the delta has been calculated between both Streams, of course). You can call `StreamApplyDelta` like so:

  <br>

  ```js

 `https://hestia.speckle.works/api/streams/${StreamA}/delta`
  ```

  <br>

  The picture below serves just here as illustration. There aren't any implementation of these endpoints on any client yet, so stay tuned for further updates.

  <br>

  [![](~/assets/docs/developers/diffingdelta.png)](https://github.com/aecdeltas/aec-deltas-spec/wiki/Server-Architecture#3d-diff-in-speckle) 


</template>
<script>
export default {
  layout: 'docs'
}

</script>
