---
title: "Developing Speckle Clients"
summary: "Guidance for creating a new client, and its expected behaviour"
date: 2019-01-26
order: 2
---

<template lang='md'>

# Expected Client behaviour

Clients should have the following behaviour

## Definitions

Native Application: an editing application that will receive SpeckleStream info (e.g. Revit, Rhino, etc...)

Client: a plugin to a native application that communicates with the SpeckleServer

Element: an individual Speckle object (e.g. a surfage, a wall, a beam, etc...)

## General


* Client must allow end users to choose a speckle server to connect to, and provide a means
for the users to authenticate with the server.
* Clients should persist server information in a secure way in the file (do not assume the file is a safe storage area!)\
* Clients should be able to create new streams and specify the project that they stream belongs to.

## Sending


* Initial send is easy: send it all! The client may provide a means for the user to 
select certain elements to send, or provide a filter to only send matching elements.
* On subsequent sends, the client should only send added, modified or removed elements to the speckle server.
* The client should keep track of what it has sent between native application session (e.g. after closing
and re-openning the file).
* Each Speckle element sent should have the application_id set. If an element in the 
native application has a specified speckle application_id, it must be preserved on send. 
If the object has no tagged application id, the sending client can assign one.

## Receiving


* The client must tag all objects it creates with the stream ID that it came from and the element application_id.
These tags must be persistent in the native application file and persist across file closing and openings.
* The client is responsible for keeping the elements in the application in sync with each update to the stream.
* When an incoming object already exists in the native application (as determined by a matching application_id), 
the client should whenever possible update the object’s properties - *not* delete and recreate the object. 
This is to preserve any changes made downstream in the native application to properties not set by the incoming speckle stream. 
* When an object is deleted from a speckle stream, the client must delete that object from the application
* The client should only modify the objects it has created.
* The client may provide an option for the user to specify that only certain properties of the elements be
updated into the native application (e.g. only update section sizes of a beam, not geometry).


</template>
<script>
export default {
  layout: 'docs'
}

</script>
