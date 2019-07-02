---
title: "Schemas & Object Models (.NET)"
summary: "How speckle deals with object models and conversion logic"
date: 2019-01-21
order: 2
---

<template lang='md'>

  Speckle has evolved a "management" solution to the wicked problem of interoperability. These are speckle kits, self-contained object models and their implementations in AEC authoring software, that can grow organically, reference each other, and solve parts of the problem.

  It is important to know that, by itself, Speckle Core comes with only three default object types, namely `SpeckleObject`, `SpecklePlaceholder`, and `SpeckleAbstract` and no conversion routines (to/from authoring software). All other schemas (or object defintions) and their conversion routines are coming from dynamically loaded SpeckleKits, which should be independent assemblies that can be freely distributed and licensed.

<!--   <v-alert type='info' :value='true' class='my-4' color='primary'>
    When installing the Speckle clients, you will automatically get the "default" speckle kits for geometry, structural elements, and some archiectural objects. Speckle would otherwise not be useful out of the box :)
  </v-alert> -->

  Essentially, a speckle kit is _(1) a set of class defintions_ and _(2) separate projects with the implementation details (conversion to/from native) for authoring software_. {.headline .font-weight-thin .pa-5 .my-5 .text-xs-justify .elevation-12 }

  ## Quick Example

  Let's envision a simple example. Imagine that you pass an object to speckle for conversion and serialisation:

  ```cs

  // Hint: you can follow along by writing this code and defining
  // this simple class in a grasshopper c# component!

  var myObject = new TestObject() { foo = 10, bar = "hello" } ;
  var result = SpeckleCore.Converter.Serialise( myObject );
  ```
  <br>

  This `TestObject` can either be your own

  What will `result` be? The answer hangs on whether there is a SpeckleKit around your `TestObject` class that provides a conversion routine for the current `AppDomain`.

  Let's slow down and unpack the last statement a bit. SpeckleCore, when it's loading inside an a speckle plugin for an authoring application - let's use Grasshopper for now - will look on the users's system for any available speckle kits.

  Kits can reside in two places. SpeckleCore, depending on wether it's built for **Debug** or **Release**, will look for them in:
  - `%localappdata%/SpeckleKits` for **Release**
  - `%localappdata%/SpeckleKitsDebug` for **Debug**

  <br>

  If no kits are found, or no `ToSpeckle()` extension methods are present on our `TestObject` class, the conversion routine from SpeckleCore will return a `SpeckleAbstract` object. This is described a bit in [this blogpost](/blog/schemas). In the case of our `TestObject`, it would probably look a bit like this when serialised:

  ```js

  // Hint: if you're following along with grasshopper, set the c# component
  // output to be a new TestObject, and plug that in a speckle "Serialiser" component.

  {
    "type": "Abstract",
    "_type": "TestObject",
    "_assembly": "myAssembly ...",
    "hash": "2f71d2004d579e472cf02f714099219b",
    "geometryHash": "2f71d2004d579e472cf02f714099219b",
    "properties": {
      "foo": 10,
      "bar": "hello"
    }
  }
  ```

  <br>

  Nevertheless, if our `TestObject` class is part of a speckle kit - i.e., MyTestKit, and TestObject does have ToSpeckle() extension method, the converter will choose invoke it and return its result. For example, suppose our conversion logic from TestObject to Speckle is stored in the following method:

  ```cs

   public static SpeckleCircle ToSpeckle( this Circle circ ) {}

  ```

  ## Anatomy of a kit

  Test

  ## Debugging and Deploying a Kit

  Test

</template>
<script>
export default {
  layout: 'docs'
}

</script>
