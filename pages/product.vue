<template>
  <div>
    <v-container grid-xl class="mt-5 pa-0">
      <v-layout row wrap px-5 mt-5 py-0>
        <v-flex xs12 py-4 style="min-height:10vh" xxxclass="text-xs-center">
          <h1 class="display-2 font-weight-light xxx-text-uppercase">
            What is
            <span class="primary--text">Speckle?</span>
            <!-- Speckle is </router-link></span> -->
          </h1>
          <p class="headline font-weight-light mt-4">
            Speckle is an
            <b>open source data platform</b>
            for AEC. It provides a method of liberating data from one platform to another in a quick, manageable, and efficient way.
            <!-- With Speckle, you can:
  <ul>
    <li>Connect to various platforms to extract and provide the design data you need</li>
    <li>Manage who has access to your data through link sharing, permission, and project organizations</li>
    <li>Coordinate and collaborate with others by streaming project data between people</li>
    <li>Extend the platform to create custom third party applications and workflows that works for you</li>
            </ul>-->
          </p>
        </v-flex>

        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>
        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Connected</h1>
          <h3
            class="text-uppercase mt-3 subheading font-weight-medium primary--text"
          >Data Curation & Integration</h3>
          <p
            class="grey--text text--darken-1 mt-3"
          >Speckle provides a default set of connectors that help you easily curate the design data you need to share.</p>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Rhino</v-chip>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Grasshopper</v-chip>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Dynamo</v-chip>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Blender</v-chip>
          <v-chip large label outline color="xxx-primary" xxxclass="elevation-5">Revit (WIP)</v-chip>
          <v-chip large label outline color="xxx-primary" xxxclass="elevation-5">GSA (WIP)</v-chip>
          <v-chip large label outline color="xxx-primary" xxxclass="elevation-5">Unity (WIP)</v-chip>
          <v-chip large label outline color="xxx-primary" xxxclass="elevation-5">Unreal Engine (WIP)</v-chip>
        </v-flex>

        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Web-first</h1>
          <h3
            class="text-uppercase mt-3 subheading font-weight-medium primary--text"
          >Modern tech stack</h3>
          <p
            class="grey--text text--darken-1 mt-3"
          >Built from the Internet up, it's fast, scalable & extensible. Speckle is a solid base for developing third party applications that enable the workflows you need.</p>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Node.js</v-chip>
          <v-chip large label outline color="primary" xxxclass="elevation-5">PostgreSQL</v-chip>
          <v-chip large label outline color="primary" xxxclass="elevation-5">GraphQL</v-chip>
        </v-flex>
        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>

        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>

        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Open Source</h1>
          <h3
            class="text-uppercase mt-3 subheading font-weight-medium primary--text"
          >Transparency & trust</h3>
          <p
            class="grey--text text--darken-1 mt-3"
          >Speckle is easily deployed on the cloud provider of your choice, or on premise. No vendor lock-ins!</p>
          <v-chip large label outline color="primary" xxxclass="elevation-5">MIT</v-chip>
        </v-flex>

        

        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Ecosystem</h1>
          <h3
            class="text-uppercase mt-3 subheading font-weight-medium primary--text"
          >AUTOMATION & MORE</h3>
          <p
            class="grey--text text--darken-1 mt-3"
          >Enables automation and next generation pipelines for the AEC industry.</p>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Arup Carbon</v-chip>
          <v-chip large label outline color xxxclass="elevation-5">Part Tracking</v-chip>
          <v-chip large label outline color xxxclass="elevation-5">MEP Reporting</v-chip>
        </v-flex>

        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>


        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>


        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Manage</h1>
          <h3
            class="text-uppercase mt-3 subheading font-weight-medium primary--text"
          >People, Projects & Permission</h3>
          <p
            class="grey--text text--darken-1 mt-3"
          >You are in control of what you share, and with whom you share.</p>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Link Sharing</v-chip>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Projects & Teams</v-chip>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Access Permissions</v-chip>
          <v-chip large label outline>Stakeholder Network (WIP)</v-chip>
        </v-flex>

        <v-flex xs6 py-4 style="min-height:10vh">
          <h1 class="display-1 font-weight-light xxx-text-uppercase">Coordinate</h1>
          <h3
            class="text-uppercase mt-3 subheading font-weight-medium primary--text"
          >Data Informed Discussions</h3>
          <p
            class="grey--text text--darken-1 mt-3"
          >From viewing multiple data streams online to advanced querying, Speckle allows you to coordinate and gather insights on your project's data footprint.</p>
          <v-chip large label outline color="primary" xxxclass="elevation-5">Web 3D Viewer</v-chip>
          <!-- <v-chip large label outline color='primary' xxxclass='elevation-5'>Filter, Sort</v-chip> -->
          <v-chip large label outline color="primary" xxxclass="elevation-5">Queries (API)</v-chip>
          <v-chip large label outline>Data History (API)</v-chip>
          <v-chip large label outline>Mobile 3D Viewer (WIP)</v-chip>
        </v-flex>


        <v-flex xs4 py-4 mr-5 style="min-height:10vh">
          <v-img src="https://strapi.speckle.works/uploads/Artboard_1_copy_3_f3f7053d48.png"></v-img>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Speckle: Data Platform for AEC",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Speckle is the open source data platform for aec."
        }
      ]
    };
  }
};
</script>
<style type="text/css">
.link {
  text-decoration: none;
  border-bottom: 2px solid #0a66ff;
}
.v-card--reveal {
  align-items: center;
  bottom: 0px;
  right: -100%;
  justify-content: center;
  /*opacity: 1;*/
  position: absolute;
  width: 90%;
  z-index: 100;
  background: white;
}

.v-card--reveal-btn {
  align-items: center;
  bottom: 0;
  right: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}

.flink {
  text-decoration: none;
}
</style>
