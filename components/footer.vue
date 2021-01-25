<template>
  <v-footer height="auto">
    <v-container fluid grid-list-xl pt-5>
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <v-layout align-center style="height:120px" row wrap class="mb-5 xx-text-xs-center">
            <v-flex xs8 offset-xs2 class="text-xs-center">
              <!-- NEWSLETTER START -->
              <iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/5q9H/xzG" width="100%"></iframe>
              <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
              <!-- NEWSLETTER END -->
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout justify-center row wrap>
        <v-flex xs12 md8>
          <v-layout align-top row wrap class="my-5">
            <v-flex xs6 sm6 md3 v-for="(item, i) in menuItems" :key="i">
              <template v-if='item.name!==""'>
                <p class="grey--text text--darken-1"><b>{{item.name}}</b></p>
                <v-divider class='mb-3'></v-divider>
              </template>
              <div v-for="(subitem, ii) in item.items" :key="ii">
                <template v-if='item.name!==""'>
                  <a :href='subitem.link'>{{subitem.name}}</a>&nbsp;&nbsp;<v-icon small v-if='!subitem.local'>open_in_new</v-icon>
                </template>
                <template v-else>
                  <p class="" >
                    <a :href='subitem.link' style="text-decoration: none;">
                      <b>{{subitem.name}}</b>
                    </a>
                    <v-icon small v-if='subitem.name.toLowerCase()==="home"' style='top: -2px;position: relative; margin-right: 4px;'>home</v-icon>
                  </p>
                  <v-divider class='mb-3'></v-divider>
                </template>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- </v-responsive> -->
  </v-footer>
</template>
<script>
import MenuItem from "~/components/menu-item.vue";

export default {
  components: {
    MenuItem
  },
  computed: {
    background( ) {
      if ( this.$route.path.includes( "docs" ) ) return "";
      if ( this.$store.state.dark ) return "royal-bg";
      return "super-bg";
    }
  },
  data( ) {
    return {
      menuItems: [ {
          name: "",
          link: '/',
          local: true,
          items: [ {
              name: "Home",
              link: "/",
              local: true
            }, {
              name: "About",
              link: "/about",
              local: true
            }

          ]
        },
        {
          name: "Community",
          items: [ {
              name: "Community Forum",
              link: "https://discourse.speckle.works",
              local: false
            }]
        },
        {
          name: "Resources",
          items: [ {
              name: "Docs",
              link: "/docs/essentials/start",
              local: true
            },
            {
              name: "Blog",
              link: "/blog",
              local: true
            },
            // {
            //   name: "Speckle Insider",
            //   link: "/blog/insider-speckle2",
            //   local: true
            // },
            // {
            //   name: "Write for Speckle",
            //   link: "/blog/to-do",
            //   local: true
            // },
            {
              name: "Github",
              link: "https://github.com/speckleworks",
              local: false
            }
          ]
        },
        {
          name: "Integrations",
          items: [ {
              name: "Speckle for Grasshopper",
              link: "/docs/clients/grasshopper/basics",
              local: true
            },
            {
              name: "Speckle for Rhino",
              link: "/docs/clients/rhino/basics",
              local: true
            },
            {
              name: "Speckle for Dynamo",
              link: "/docs/clients/dynamo/basics",
              local: true
            },
            {
              name: "Speckle for Revit",
              link: "/docs/clients/revit/basics",
              local: true
            },
            {
              name: "Speckle for Blender",
              link: "/docs/clients/blender/basics",
              local: true
            },
            {
              name: "Speckle for GSA",
              link: "/docs/clients/gsa/basics",
              local: true
            }
          ]
        }
      ]
    };
  }
};

</script>
<style>
.footer-link {
  color: #686868 !important;
}

.footer-list {
  background-color: transparent !important;
  justify-content: center;
  text-align: center;
  display: grid;
}

</style>
