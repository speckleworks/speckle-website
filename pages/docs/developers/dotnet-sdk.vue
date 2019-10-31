---
title: ".NET SDK"
summary: "Using Speckle in .NET environments"
date: 2019-01-21
order: 1
---

<template lang='md'>
  The [.NET SDK (SpeckleCore)](https://github.com/speckleworks/specklecore) lies at the base of the Grasshopper, Dynamo, Rhino, Gsa, and Revit connectors. It provides:

  - async methods for calling the Speckle [API](https://speckleworks.github.io/SpeckleOpenApi/)
  - methods for interacting with the Speckle's websocket API
  - the core conversion methods (`Serialise` and `Deserialise`) & other helper methods
  - a base SpeckleObject from which you can inherit to create your own [Speckle kits](/docs/developers/object-models)
  - methods for getting local accounts
  - methods for passing things through a local cache

  <br>

  ## Nuget {.font-weight-thin .headline .my-4}

  If you want to reference SpeckleCore, the preffered way to do it is via the [NuGet Package Manager](https://www.nuget.org/packages/SpeckleCore/). Please note that the prereleases might be unstable.

  ## Getting Started {.font-weight-thin .headline .my-4}

  There's a console application starter project that implements a couple of useful methods. Check [it out here](https://github.com/didimitrie/SpkConsole).

  The code samples below are snippets from the above project!

  ## Sample Usage {.font-weight-thin .headline .my-4}

  ### Initialisation {.my-3}

  Before you use SpeckleCore in any way, it's important to initialise it; this will make sure any [kits](/docs/developers/object-models) are loaded and ready to use.

  ```cs

  SpeckleCore.SpeckleInitializer.Initialize();
  ```

  ### Accounts {.my-3}

  To create a client, you'll need to provide some info first. This is stored, on a per-user basis, in the accounts parts of Speckle's local database.

  You can get the default account, or search for other accounts, like this:

  ```cs

  var account = LocalContext.GetDefaultAccount(); // gets the default account if any; throws an error otherwise

  var account = LocalContext.GetAccountsByEmail( email ); // gets all  the accounts the user has associated with the input email
  ```


  ### Create an api client {.my-3}

  ```cs
  var client = new SpeckleApiClient( account.RestApi, false, "console_app" );
  client.AuthToken = account.Token;

  var stream = client.StreamGetAsync( streamId, "" ).Result.Resource;
  var objects = client.StreamGetObjectsAsync( streamId, "fields=hash,type" ).Result;
  ```

  ### Get a stream {.my-3}

   ```cs
  // Get a stream
  var stream = client.StreamGetAsync( streamId, "" ).Result.Resource;

  // Get the stream's objects
  // Please note, this is not a good approach for large streams.
  var objects = client.StreamGetObjectsAsync( streamId, "fields=hash,type" ).Result;
  ```

  ### Create & Save a Stream {.my-3}

  There are two "main" ways to create and save a stream.
  - if the payload is small, just use [this simple approach](https://github.com/didimitrie/SpkConsole/blob/master/Basics.cs#L57-L129);
  - if the payload is large, and you need to save thousands of objects, you will need to orchestrate the api calls. This is done [like this](https://github.com/didimitrie/SpkConsole/blob/master/Advanced.cs).
  <br>

  Orchestration stands for "don't send everything at once, you'll clog the interweb pipes". The best approach so far is to split things up in managable payloads, and send those sequentially. It's actually not that difficult:

  ```cs

      var objectUpdatePayloads = new List<List<SpeckleObject>>();
      long totalBucketSize = 0, currentBucketSize = 0;
      var currentBucketObjects = new List<SpeckleObject>();
      var allObjects = new List<SpeckleObject>();

      foreach ( var obj in objects )
      {
        long size = Converter.getBytes( obj ).Length;
        currentBucketSize += size;
        totalBucketSize += size;
        currentBucketObjects.Add( obj );

        if ( currentBucketSize > 5e5 ) // restrict max to ~500kb;
        {
          objectUpdatePayloads.Add( currentBucketObjects );
          currentBucketObjects = new List<SpeckleObject>();
          currentBucketSize = 0;
        }
      }

      // add in the last bucket
      if ( currentBucketObjects.Count > 0 )
      {
        objectUpdatePayloads.Add( currentBucketObjects );
      }
  ```

  Subsequently, you can send those payloads out using the `ObjectCreateAsync` api call: {.py-3}

  ```cs

      foreach ( var payload in objectUpdatePayloads )
      {
        totalObjs += payload.Count;
        Console.Write( String.Format( "Sending payload #{0} ({1} objects, total saved {2}) ...", i++, payload.Count, totalObjs ) );

        var result = client.ObjectCreateAsync( payload ).Result.Resources;
        foreach ( var placehholder in result )
          yield return placehholder as SpecklePlaceholder;

        Console.Write( " done." );
        Console.CursorLeft = 0;
      }

  ```

  `ObjectCreateAsync` returns a list of object placeholders, with their databaseIds. You can set these in a stream's objects field, and then save the stream. {.py-3}

  ```cs

      var myStream = new SpeckleStream()
      {
        Objects = savedObjects.Cast<SpeckleObject>().ToList(),
        Name = name != "" ? name : "Console test stream",
        Description = "This stream was created from a .net console program. Easy peasy.",
        Tags = new List<string> { "example", "console-test" },
      };

      var result = client.StreamCreateAsync( myStream ).Result;
  ```

  Please keep in mind that orchestration is really important for large payloads, and it's a requirement for clients in any other languages. {.py-3}


</template>
<script>
export default {
  layout: 'docs'
}

</script>
