---
title: Own Your Data
author: Dimitrie
tags: [ 'opinion' ]
featuredimg: woot.jpg
summary: A federated future you can own.
date: 2017-09-30
---
<template lang='md'>

_updated on 16th June 2019_ {.caption}

Data ownership requirements in the AEC industry's complex projects is an issue that does not lend itself easily to centralization. Compounding the problem, these requirements also stifle the informational exchanges that underpin communication: you give up sharing if you have to read a _n_ page long EIR document. Add project specific requirements regarding data safety guarantees, non-disclosure agreements, etc. and the result is an industry in which data flows are stifled, slow and clogged.

To match this, Speckle was designed and licensed with a federated architecture in mind. There is no "Speckle Cloud" - choose your own! Or, in other words, you are absolutely free to deploy a Speckle Server as you see fit. Below we're outlining a few of these scenarios.

# Deployment Scenarios {.headline .font-weight-thin .my-4}

### Internal Local Deployments {.my-3}

Internal deployments are speckle servers that run behind a company firewall, or within your local network. They are not accessible from the  outside world, nevertheless designers, engineers and project managers can use Speckle for their day-to-day work. They're safe, as no one from outside can access them, yet you can use them for day-to-day work.

### Company Wide Open Deployments {.my-3}

Let's face it: you have client facing work and you probably exchange data with a host of other, external consultancies and specialists. In that case, you might want to consider hosting a company-wide speckle server, that is open to the Internet and properly secured by your IT team. In this manner, you can either invite your collaborators to use your server, or you can use theirs. Data that you produce will still be yours, and you will explicitly need to share it with the right persons via Speckle's Discretionary Access Control permission system.


### Speckle As A Service {.my-3}

Maybe you're a BIM consultancy company with a lot of clients. You're helping to solve their interoperability needs and are nudging them gently into the digital future. In this case, you might want to offer Speckle Server(s) as a service. Speckle is MIT licensed, which means that hey - go ahead and start your startup with it!

# Data Ownership {.headline .font-weight-thin .my-4}

**At a local level**, data that goes to a speckle server is not automatically available to everyone. Whatever information you produced is owned by you, and you can choose how to share it and with whom. There are several levels of privacy that allow you to fine tune access (link sharing, read/write and project teams).

![permissions](~/assets/blog/data/permissions.png)

**At a global level**, you always choose where your data is stored. Cloud providers are present in numerous locations, so you can choose your data's residency based on latency as well as jurisdiction. Unlike other CAD software providers, you get to decide, for free, what you do with your data - it's yours in the first place, isn't it?

At the end of the day, if you're a small office with a spare computer, you're good to go. If you're ready to go next level, rent a £20/month virtual machine on the cloud provider of your choice and unleash the fun of sharing design data around. Things getting slow? The speckle server is stateless and ready to be scaled. **No matter the scenario, you always choose where your data resides.**

## Final Words {.headline .font-weight-thin .my-4}

This leads to a different landscape where information is not centralised in files or service providers. Project information can be spread organically around stakeholders and Speckle deployments and selectively opened up based on needs arising from collaboration models, thus opening up new avenues for looking at the _social and information architecture_ of collaboration in complex - or simple - design projects.
</template>
<script>
export default {
  layout: 'blog'
}
</script>
