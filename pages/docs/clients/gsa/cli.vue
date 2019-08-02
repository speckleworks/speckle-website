---
title: "CLI"
summary: "Headless SpeckleGSA operation"
date: 2019-08-01
order: 4
---
<template lang='md'>
  The GSA plugin has a CLI interface to send and receive GSA models without the use of the interface. For detailed usage help, execute the `SpeckleGSAUI -h` command.

  Sample sending command:
  ```

  SpeckleGSAUI sender --server "https://hestia.speckle.works/api" --email mishael.nuh@arup.com --password XXX --file "C:\Speckle\Speckle Demos\GSA Demo.gwb" --layer analysis --result "2D Element Derived Force" --resultCases A1
  ```

  <br>

  Sample receiving command:
  ```

  SpeckleGSAUI receiver --server "https://hestia.speckle.works/api" --email mishael.nuh@arup.com --password XXX --file "C:\Users\Mishael.Nuh\Desktop\Received File.gwb" --layer design --nodeAllowance 0.01 --streamIDs YbtzuXrK0W
  ```
</template>
<script>
export default {
  layout: 'docs',
}

</script>
