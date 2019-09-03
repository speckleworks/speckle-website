---
title: "Authentication Strategies Update"
author: Dimitrie
tags: [ 'server', 'announcement' ]
featuredimg: "~/assets/blog/auth/auth.png"
summary: "Speckle now has several authentication strategies available, including Active Directory."
date: 2019-09-03
---

<template lang='md'>

  ![auth](~/assets/blog/auth/auth.png)

  Speckle is seeing quite a number of internal corporate deployments. One of the main requirements towards making Speckle an exciting enterprise platform is end-user authentication. Consequently, we've re-architected the authentication flows on the server to be able to leverage multiple providers.

  Currently supported identity providers:
  - Azure Active Directory
  - Github
  - Auth0
  - The default email + password

  <br>

  Don't see yours there? Raise an issue on github and we'll look into adding an authentication strategy that suits, if possible.

  ### Server Configuration

  All the necessary information needs to be populated in the server's `.env` file. By default, only the standard username (email) & password strategy is enabled. All the others are opt-in, and to use them, you will first need to populate the required information for each.

  For example, to enable Azure Active Directory as identity provider, first [create an app registration](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal). Then, populate your server's `.env` file with the following:

  ```

  # Azure AD
  # https://azure.microsoft.com/en-gb/services/active-directory/
  USE_AZUREAD=true
  AZUREAD_ORG_NAME="your organization name"
  AZUREAD_CLIENT_ID="your application client id"
  AZUREAD_IDENTITY_METADATA="your identity metadata"
  AZUREAD_CLIENT_SECRET="your app's client secret"
  ```

  <br>

  If you want to have only this strategy enabled, make sure you disable the others. For other strategies, check the `.env-base` file. Here's an example of this strategy at work:

  ![auth](~/assets/blog/auth/ad.gif)

  For a full changelog, make sure to check [the releases page](https://github.com/speckleworks/SpeckleServer/releases). Thanks to [Antoine Dao](https://github.com/AntoineDao) for setting up proper semver releases!

  ## Bonus: Password Resets

  If you're using the default username + password strategy, you can now reset your password! In order for your server to support this, you will need to setup an email sending service, as described in the `.env` file. The public test server, `hestia`, already supports this.

</template>
<script>
export default {
  layout: 'blog'
}
</script>
