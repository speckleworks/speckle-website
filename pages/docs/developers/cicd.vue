---
title: ".NET Releases, CI & CD"
summary: "Notes on Speckle's pipelines (.NET)"
date: 2020-03-13
order: 10
---

<template lang='md'>

## CI & CD (&Releases) for Speckle Projects

All the .NET projects in Speckle are CI'ed with Appveyor. Theoretically, whenever new code is pushed, or a PR is created, etc. the CI will run. Links to the appveyor build results should be in each project's readme.

**Kits & Core:**

- [![Build status](https://ci.appveyor.com/api/projects/status/k0n0853v26f1thl4/branch/master?svg=true)](https://ci.appveyor.com/project/SpeckleWorks/specklecore/branch/master) **SpeckleCore** {.py-2}
- [![Build status](https://ci.appveyor.com/api/projects/status/qstws3vg9wktyf5m?svg=true)](https://ci.appveyor.com/project/SpeckleWorks/specklecoregeometry) SpeckleCoreGeometry {.py-2}
- [![Build status](https://ci.appveyor.com/api/projects/status/fl47uk96qhrmo0u0?svg=true)](https://ci.appveyor.com/project/SpeckleWorks/specklestructural) SpeckleStructural {.py-2}
- [![Build status](https://ci.appveyor.com/api/projects/status/e9yeqdpjbmiv3pc4?svg=true)](https://ci.appveyor.com/project/SpeckleWorks/speckleelements) SpeckleElements {.py-2}

<br>

**Connectors:**

- [![Build status](https://ci.appveyor.com/api/projects/status/mtfs3owdpy72yuh3/branch/master?svg=true)](https://ci.appveyor.com/project/SpeckleWorks/specklerhino/branch/master) SpeckleRhino {.py-2}
- [![Build status](https://ci.appveyor.com/api/projects/status/03r7l9i2ohqqra2c?svg=true)](https://ci.appveyor.com/project/SpeckleWorks/specklerevitreboot) SpeckleRevit {.py-2}
- [![Build status](https://ci.appveyor.com/api/projects/status/lm4alrukr13lm027?svg=true)](https://ci.appveyor.com/project/SpeckleWorks/speckledynamo) SpeckleDynamo {.py-2}

<br>

## Making a release (for a single package)

When appveyor identifies a **tagged commit**, it will, where relevant, create a nuget release based on that tag too. The Nuget [feed for Speckle is here](https://www.nuget.org/profiles/speckleworks).

Consequently, to make a release that gets deployed to nuget, the steps are as follows:
- commit your code (branch is not relevant)
- go to the project's release page and create a new release
- do respect the versioning numbers - they should go up, and they should be unique, and they should NOT contain a `v` in front. Example correct version numbers:
  - `1.2.3`
  - `0.0.1-wip`

<br>

**Note:** adding a `-wip` to the version number will, if all goes well, create a _nuget prerelease_, rather than a proper release.

**Additional Note:**: Some projects, like kits, are CI'ed twice. One produces the full build artifacts, which are used by the installer, and another one (ending in `-Nuget`) creates a nuget pacakge containing just the specified projects (in the case of kits, just the class definitions).

## Getting a new installer out

To actually push changes to end users, via the auto-updater, you need to create a new installer release [here](https://github.com/speckleworks/SpeckleInstaller/releases). Just create a new release, tag it appropriately, and first **mark it as a pre-release.**

Appveyor will pick that up and create a new installer using the latest artifacts produced by the component pieces (kits & plugins). Once that is done, it will avaialble for download in the release page you've just created.

**Next steps:** test it out. Testing procedures known to work include:
- temporarily flag it as normal release until the download count reaches 100, then switch back to a pre-release (also known as coerced beta-testing).
- send it out to the user(s) you've fixed problems for recently, and politely ask for feedback.
- pray to [Cthulhu](https://i.redd.it/orfoia6fvsw21.png) that you didn't break anything major.

<br>

**Finally**, once you're sufficiently sure things are stable, mark it as a proper release (untick the prerelease checkbox). This will push it out via the auto-update mechanism to everyone.

</template>
<script>
export default {
  layout: 'docs'
}

</script>
