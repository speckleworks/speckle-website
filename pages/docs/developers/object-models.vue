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

  Below is a diagram representing a fictional speckle kit.

  ![kit diagram](~/assets/docs/developers/kitsdiagram.png)

  ## Bootstrapping a Speckle Kit

  <v-alert type='info' :value='true' class='my-4' color='grey'>
    If you have problems following along, there is a <a href="https://github.com/didimitrie/TestKitExample">sample repo containing the SuperObjectModel kit here</a>.
  </v-alert>

  Let's envision a simple example kit from scratch that would replace Speckle's default "CoreGeometry" object model. For the sake of this exercise, we'll envision only one schema (class) for a point. To make life more interesting, we're going to say our point is defined by [spherical coordinates](https://en.wikipedia.org/wiki/Spherical_coordinate_system). We want this kit to be used in Rhino and Revit, hence we'll need to implement conversion routines to and from our `SphericalPoint` class to Rhino's `Point3d` and Revit's `XYZ` classes.

  ### Specifying the Schema

  The first steps:

  - Using Visual Studio, create a new solution and project (and git repo) called "SuperObjectModel" - that's going to be our kit's name.
  - Using SourceTree or the command line, add [SpeckleCore](https://github.com/speckleworks/SpeckleCore) as a submodule (this is in lieu of a nuget package; it's on the list!).
  - Once that is done, in Visual Studio, add the newly cloned SpeckleCore project as an existing item (right click on the solution name -> add existing project).

  <br>

  Our SphericalPoint class definition would look like this:

  ```cs

    // BaseSchemas.cs / SuperObjectModel project
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

  Note the first constraints of a speckle kit class definition:
  - inheritance from the base `SpeckleObject` class
  - the class should be marked as `[Serializable]`
  - overriding the `Type` property with something descriptive and as unique as possible
  - presence of an empty constructor
  - fields should be _properties_ (ie, have getters and setters)

  <br>

  If your object model has a central base class that everything else inherits from, it is enough for that class to inherit from a `SpeckleObject`; don't forget to override the types though on each individual class.

  If you're up for a quick test, build the solution, then copy paste `bin/Debug/*.dll` into `%localappdata%/SpeckleKits/SuperObjectModel/` and start up Grasshopper.

  If you're debugging speckle for rhino, then probably SpeckleCore was built for Debug, in which case the folder you should copy paste to is `SpeckleKitsDebug`. {.caption}

  Once grasshopper is up, add a "schema builder" component on the canvas and right click on its middle. Amongst the drop down options, you should see your object model's name and the new "SphericalPoint" class!

  ![first object model test in grasshopper](~/assets/docs/developers/ghtest.png)

  That's all there is to creating the first part of a kit, schema definitions. You can already use the schema builder component from grasshopper to instantiate custom classes and pass them around through speckle. The next step is to implement this object model in our two target applications, Rhino and Revit.


  ### Schema Implementations

  To write our conversion logic to and from Rhino and Revit, we will first create two separate projects inside our existing solution to contain the conversion logic:
  - SuperObjectModelRhino, and
  - SuperObjectModelRevit.

  <br>

  We'll carry along with Rhino for the moment. Once you've created a new project, add SpeckleCore and SuperObjectModel as references, and set their "Copy Local" to false under Properties. Next, use nuget to add RhinoCommon as a dependency (v6.x.x). Once that is done, it's time for some code. Inside the project's main class:

  ```cs

  // Conversions.cs / SuperObjectModelRhino project
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

  **Second**, the `Conversions` class will contain static extension methods containing the conversion and instantiation logic between Rhino's/Revit's object model and your object model. For this reason, the class containing them needs to be marked as static.

  Here's what the conversion methods themselves actually look like:

  ```cs

  // Conversions.cs / SuperObjectModelRhino project
  using SpeckleCore;
  using SuperObjectModel;
  using Rhino.Geometry;

  namespace SuperObjectModelRhino
  {
    public class Initialiser : ISpeckleInitializer
    {
      public Initialiser( ) { }
    }

    public static partial class Conversions
    {

      // Rhino Point -> SuperSphericalPoint
      public static SuperSphericalPoint ToSpeckle(this Point3d myRhinoPoint)
      {
        var mySphPt = new SuperSphericalPoint();
        /* TODO: ADD TRIGONOMETRY; Cartesian to Polar */
        mySphPt.GenerateHash();
        return mySphPt;
      }

      // SuperSphericalPoint -> Rhino Point
      public static Point3d ToNative(this SuperSphericalPoint mySphPt)
      {
        var myRhPt = new Point3d();
        /* TODO: ADD TRIGONOMETRY; Polar to Cartesian */
        return myRhPt;
      }

    }
  }
  ```

  <br>

  Now to unpack the conventions:

  First, the **ToSpeckle()** method converts from the application native object to our schema. The **ToNative()** method does the opposite.

  Second, it's important that you call the `GenerateHash()` method in the `ToSpeckle()` method just before returning, or whenever it actually makes sense given the implementation details of the API you're dealing with. This will ensure that, when an object is sent to a speckle server, local caching can be leveraged and that preflight diffing can occur.

  These methods should return one object, but they can return as well a list of objects. For example, in Revit, a wall based on a polyline does not work; consequently, split the polyline in its "atomic" parts and generate walls based on those. Just make sure that the client implementations can deal with this, as we are a bit behind on some fronts.

  <v-alert type='info' :value='true' class='my-4' color='grey'>
  <b>SYMMETRY</b>: These two methods need not be symmetric. For example, if in your target application you have a schema that does not have a direct representation, feel free to convert to something that makes sense. This is the case with Dynamo and breps coming from Rhino: rather than not doing anything, the `ToNative` method in CoreGeometryDynamo will output a mesh.

  </v-alert>

  The `ToSpeckle` and `ToNative` methods, once loaded in the `AppDomain`, will be dynamically invoked by the SpeckleCore Converter, which will then pass on the result of that invocation to you (or the clients).

  Mainly, that's all there is to a defining a simple speckle kit. What's left now is to rinse and repeat for all the classes you have defined, and for all the applications you are planning to support!

  ### Graceful Degradation

  In order to better support inheritance, there is another **optional** convention that we implemented, namely "graceful degradation". For instance, imagine we have to define a Floor object to enable Revit to Revit workflows. Nevertheless, we still want to be able to display this Floor object in the speckle viewer, or in rhino, whithouot writing complicated methods for generating a displayable mesh.

  Consequently, since we make SpeckleElement's Floor class definition inherit from SpeckleCoreGeometry's Mesh element. We override its type in a particular way to let speckle know that, if there are no conversion methods found for the Floor object, it should attempt to try with conversion methods defined for the Mesh object. Here's how that looks like:

  ```cs

  [Serializable]
  public partial class Floor : SpeckleMesh, ISpeckleElement
  {
    public override string Type { get => base.Type + "/" + "Floor"; }
    // ...
  }
  ```

  <br>

  There's several benefits to this extra complexity:
  - **Globally**, when SpeckleCore will attempt to deserialise a JSON response from the server, if the SpeckleElements kit is not present, it will try to deserialise the object into a Mesh (this is why the `Type` property - which acts as a discriminator - needs to reflect inheritance too).
  - **At the application integration level**, if the Floor object has no `ToNative()` method defined, speckle will attempt to follow the inheritance chain and invoke the first `ToNative()` method that it finds.

  <br>

  ### Injecting Application Specific Information

  Given that the conversion routines are dynamically loaded at runtime, you cannot easily pass them state, or any other information besides the objects they are meant to convert. This was especially a problem with Revit; to overcome this limitation, you can declare in the `Intialiser` class any variables you need, and they will be accessible from the conversion routines. [For example](https://github.com/speckleworks/SpeckleElements/blob/master/SpeckleElementsRevit/ConversionsBase.cs):

  ```cs

  using SpeckleCore;
  using SpeckleElements;
  using SpeckleCoreGeometryClasses;

  namespace SpeckleElementsRevit
  {
    public class Initialiser : ISpeckleInitializer
    {
      public Initialiser() { }

      public static UIApplication RevitApp { get; set; }

      public static double RevitScale { get; set; } = 3.2808399;
      // ...
    }

    public static partial class Conversions
    {
      static double Scale { get => Initialiser.RevitScale; }
      static Document Doc { get => Initialiser.RevitApp.ActiveUIDocument; }
      // ...
    }
  }
  ```

  <br>

  Nevertheless, the client needs to explicitly inject in any kits it finds the required values. Check the [Speckle Revit connector for the implementation details](https://github.com/speckleworks/SpeckleRevitReboot/blob/master/SpeckleRevitReboot/UI/SpeckleUiBindings.cs#L107-L127).

  ### Further Notes

  Kits can reside in two places. SpeckleCore, depending on whether it's built for **Debug** or **Release**, will look for them in:
  - `%localappdata%/SpeckleKits` for **Release**
  - `%localappdata%/SpeckleKitsDebug` for **Debug**

  <br>

  This is particularly important to remember if you have built, developed or debugged your own clients, as most likely your `SpeckleCore.dll` will have been built for Debug, which means that your kits will load from `SpeckleKitsDebug`!

  ## Existing Kits

  Sometimes, code is worth 1000 words. If you found the document hard to follow, there are existing, in-use kits out there that you can poke at:
  - Speckle CoreGeometry: https://github.com/speckleworks/SpeckleCoreGeometry
  - Speckle Elements: https://github.com/speckleworks/SpeckleElements
  - The Test Kit Example (contains the code from this tutorial): https://github.com/didimitrie/TestKitExample

  ## Conclusion {.mt-4}

  Please be aware, Speckle is under continuous improvement and needs your help and input. The speckle kit concept is not new per se, and in its current implementation it does need cleanup, simplification and potentially some architectural changes. Nevertheless, for now it is stable and we have been dogfooding it in the main release channel since January 2019, or thereabouts.

  It is important to remember, *interoperability* is a wicked problem involving a mixture of technical and political factors. Speckle does not aim to solve it, but rather help manage it, one step at a time.


</template>
<script>
export default {
  layout: 'docs'
}

</script>
