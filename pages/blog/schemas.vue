---
title: Schemas and Standards
author: Dimitrie
tags: [ 'object models' ]
summary: "Speckle's take on object models, schemas and various standards."
date: 2017-12-27
---
<template lang='md'>
# Introduction {.headline .font-weight-thin .my-4}
**As there is no such thing in AEC as "one model", equally there is no "one standard"**: Speckle delivers your own data in your own way to other design stakeholders in a managed & curated way.

How? Speckle allows for objects of arbitrary classes to be sent in between clients. This happens with the help of the recently introduced `SpeckleAbstract` type and some extra functionalities embedded in the Speckle Core Converter class that allow for serialisation and deserialisation of standard .NET classes.

# Encoding a simple .NET class {.headline .font-weight-thin .my-4}

Take this example class of rather normal POCO:

```cs

public class Beam {
  public int weight { get; set; } = 42;
  public PolyCurve section;
  private string secretId;
  public Beam() { }
}

// You can now do this:
var mySpeckleBeam = SpeckleCore.Converter.ToAbstract( new Beam() );

```
<br>

This thereafter results in:

```js

{
  "type": "Abstract",
  "_type": "Beam",
  "_assembly": "AssemblyName, ...",
  "properties": {
    "weight": 42,
    "section": {
      "type": "PolyCurve",
      //...
    }
  }
}
```

# Decoding a simple .NET class {.headline .font-weight-thin .my-4}

On the receiving end, there are two possibilities. **If the context in which the object is received has access to the assembly that this class originates from**, the object will get serialized to its native type.

**If there is no original assembly present**, the object will remain as a transparent `SpeckleAbstract` object from which you can extract properties and so and so forth.

You can even mix and mash classes of different types and from different assemblies, the same ground rules apply, so you can essentially combine any schema you may have together. Furthermore, object references are supported, so essentially a SpeckleAbstract is its own little database.

# Conclusions: Schema Agnosticism & The Way Forward {.headline .font-weight-thin .my-4}

Existing AEC standards for data exchange are either fragmented, or too massive and complex to wield. Speckle takes a different approach: instead of enforcing a strict format, it aims to provide a framework in which data can be articulated meaningfully and shared transparently at various levels of abstraction.

In short, this approach opens up the possibility for actors involved in the design process to freely create and structure their own native data models whilst maintaining fidelity and privacy, without compromising on transparency!

<div class='text-xs-center my-4'>
  <v-btn large color='primary' outline round to='/blog/schemas-revisited'>
    2019 Update <v-icon right>arrow_right_alt</v-icon>
  </v-btn>
  </div>


</template>
<script>
export default {
  layout: 'blog'
}
</script>
