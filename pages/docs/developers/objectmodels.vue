---
title: "Schemas & Object Models (.NET)"
summary: "How speckle deals with object models and conversion logic"
date: 2019-01-21
order: 2
---

<template lang='md'>

  Speckle is evolving a "management" solution to the wicked problem of interoperability. These are speckle kits, self-contained object models and their implementations in AEC authoring software, that can grow organically, reference each other, and solve parts of the problem.

  It is important to know that, by itself, Speckle Core comes with only three default object types, namely `SpeckleObject`, `SpecklePlaceholder`, and `SpeckleAbstract` and no conversion routines (to/from authoring software). All other schemas (or object defintions) and their conversion routines are coming from dynamically loaded SpeckleKits, which should be independent assemblies that can be freely distributed and licensed.

<!--   <v-alert type='info' :value='true' class='my-4' color='primary'>
    When installing the Speckle clients, you will automatically get the "default" speckle kits for geometry, structural elements, and some archiectural objects. Speckle would otherwise not be useful out of the box :)
  </v-alert> -->

  Essentially, a speckle kit is _(1) a set of class defintions_ and _(2) separate projects with the implementation details (conversion to/from native) for authoring software_. {.headline .font-weight-thin .pa-5 .my-5 .text-xs-justify .elevation-5 }

  ## Bootstrapping a Speckle Kit

  <v-alert type='info' :value='true' class='my-4' color='primary'>
    If you have problems following along, there is a [sample repo containing the SuperObjectModel kit here](/todo).
  </v-alert>

  Let's envision a simple example kit from scratch that would replace Speckle's default "CoreGeometry" object model. For the sake of this exercise, we'll envision only one schema (class) for a point. To make life more interesting, we're going to say our point is defined by [spherical coordinates](https://en.wikipedia.org/wiki/Spherical_coordinate_system). We want this kit to be used in Rhino and Revit, hence we'll need to implement conversion routines to and from our `SphericalPoint` class to Rhino's `Point3d` and Revit's `XYZ` classes.

  ### Specifying the Schema

  The first steps:

  - Using Visual Studio, create a new solution and project (and git repo) called "SuperObjectModel" - that's going to be our kit's name.
  - Using SourceTree or the command line, add [SpeckleCore](https://github.com/speckleworks/SpeckleCore) as a submodule (this is in lieu of a nuget package; it's on the list!).
  - Once that is done, in Visual Studio, add the newly cloned SpeckleCore project as an existing item (right click on the solution name -> add existing project).

  <br>

  Our SphericalPoint class defintion would look like this:

  ```cs

    // BaseSchemas.cs
    using SpeckleCore;

    namespace SuperObjectModel
    {
      [Serializable]
      public class SuperSphericalPoint : SpeckleObject
      {
        public override string Type { get; set; } = "SphericalPoint";

        public double radius { get; set; } = 1;

        public double inclination { get; set; } = 0;

        public double azimuth { get; set; } = 0;

        public SuperSphericalPoint() { }
      }
    }
  ```

  <br>

  Note the first constraints of a speckle kit class defintion:
  - inheritance from the base `SpeckleObject` class
  - the class should be marked as `[Serializable]`
  - overrding the `Type` property with something descriptive and as unique as possible
  - presence of an empty constructor
  - fields should be _properties_ (ie, have getters and setters)

  <br>

  If your object model has a central base class that everything else inherits from, it is enough for that class to inehrit from a `SpeckleObject`; don't forget to override the types though on each individual class.

  If you're up for a quick test, build the solution, then copy paste `bin/Debug/*.dll` into `%localappdata%/SpeckleKits/SuperObjectModel/` and start up Grasshopper.

  If you're debugging speckle for rhino, then probably SpeckleCore was built for Debug, in which case the folder you should copy paste to is `SpeckleKitsDebug`. {.caption}

  Once grasshopper is up, add a "schema builder" component on the canvas and right click on its middle. Amongst the drop down options, you should see your object model's name and the new "SphericalPoint" class!

  ![first object model test in grasshopper](~/assets/docs/objectmodels/ghtest.png)

  That's all there is to creating the first part of a kit, schema defintions. You can already use the schema builder component from grasshopper to instantiate custom classes and pass them around through speckle. The next step is to implement this object model in our two target applications, Rhino and Revit.


  ### Schema Implementations

  To write our conversion logic to and from Rhino and Revit, we will first create two separate projects inside our existing solution to contain the conversion logic:
  - SuperObjectModelRhino, and
  - SuperObjectModelRevit.

  <br>

  We'll carry along with Rhino for the moment. Once you've created a new project, add SpeckleCore and SuperObjectModel as references, and set their "Copy Local" to false under Properties. Next, use nuget to add RhinoCommon as a dependency (v6.x.x). Once that is done, it's time for some code. Inside the project's main class:

  ```cs

  // Conversions.cs
  using SpeckleCore;

  namespace SuperObjectModelRhino
  {
    public class Initialiser : ISpeckleInitializer
    {
      public Initialiser( ) { }
    }

    public static partial class Conversions
    {
      // TODO
    }
  }
  ```

  <br>

  There's a few things to note before we move to the conversion routines themselves.

  **First**, notice the `Initialiser` class: it's important that all namespaces containing speckle kit application implementations contain one. This is because SpeckleCore loads kits dynamically at runtime (notice there's no references inside SpeckleCore to your object model, nor should they ever be), and this ensures that, against the best efforts of the CLR, the assembly containing your conversion routines is actually loaded in the AppDomain. This class has other uses - as we shall see in the case of our Revit implementation - but for now, it can stay empty.

  **Second**, the `Conversions` class will contain static extension methods containing the conversion and instantiation logic between Rhino's/Revit's object model and your object model. For this reason





  ## Further Notes

  Kits can reside in two places. SpeckleCore, depending on wether it's built for **Debug** or **Release**, will look for them in:
  - `%localappdata%/SpeckleKits` for **Release**
  - `%localappdata%/SpeckleKitsDebug` for **Debug**

  <br>
  Test

  ## Debugging and Deploying a Kit

  Test

</template>
<script>
export default {
  layout: 'docs'
}

</script>
