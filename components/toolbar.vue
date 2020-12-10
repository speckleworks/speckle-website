<template>
  <v-toolbar prominent app clipped-right :class="$store.state.dark ? '' : ''" style="z-index: 20" :dark="$store.state.dark">
    <!-- NORMAL MENU -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">
        <v-img :src='require("~/assets/logo_small.png")' width="20"></v-img>&nbsp;&nbsp;
        Speckle
      </v-btn>
      <template v-for="(item, i) in menuItems">
        <v-menu open-on-hover offset-y :key="i" v-if="item.items">
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">
              {{item.name}}&nbsp;
              <v-icon small>arrow_drop_down</v-icon>
            </v-btn>
          </template>
          <v-list class="pr-3">
            <v-list-tile v-for="(subitem, ii) in item.items" :key="ii">
              <menu-item :item="subitem"></menu-item>
            </v-list-tile>
          </v-list>
        </v-menu>
        <menu-item v-else :item="item" :key="i"></menu-item>
      </template>
    </v-toolbar-items>
    <!-- MOBILE MENU -->
    <v-toolbar-items class="hidden-md-and-up">
      <v-menu offset-y :close-on-content-click="false" v-model='mobileMenu'>
        <template v-slot:activator="{ on }">
          <v-btn flat block v-on="on">
            <v-img src="https://discourse.speckle.works/uploads/default/original/1X/25cc7f19595c444b111cff766d2310034f9efa79.png" width="20"></v-img>&nbsp;&nbsp;
            Speckle
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-tile to='/' @click='mobileMenu = false'>
              <v-list-tile-content>
                <v-list-tile-title>
                  <b>Home</b>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <template v-for='item in menuItems'>
              <template v-if='item.items'>
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          <b>{{item.name}}</b>
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                  <template v-for='(subItem) in item.items'>
                    <v-list-tile :to='subItem.local ? subItem.link : ""' :href='subItem.local ? "" : subItem.link' :target="subItem.local ? '': '_blank'" @click='mobileMenu = false'>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          {{subItem.name}} <v-icon v-if="!subItem.local" small>open_in_new</v-icon>
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list-group>
              </template>
              <template v-else>
                <v-list-tile :to='item.local ? item.link : ""' :href='item.local ? "" : item.link' @click='mobileMenu = false' :target="item.local ? '': '_blank'">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <b>{{item.name}}</b>
                      <v-icon v-if="!item.local" small>open_in_new</v-icon>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </template>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn class="github-button" href="https://github.com/specklesystems/Server" data-size="large" data-show-count="false" aria-label="Star specklesystems/Server on GitHub">Star us on GitHub!</v-btn>
    <v-toolbar-side-icon @click.native="toggleNavBar()" v-if="sideIcon"></v-toolbar-side-icon>
  </v-toolbar>
</template>
<script>
import MenuItem from "~/components/menu-item.vue";

export default {
  props: {
    sideIcon: { type: Boolean, default: false }
  },
  components: {
    MenuItem
  },
  data( ) {
    return {
      navBar: true,
      speckle: [ "speckle ✨", "spackle 👷🏽‍♂️", "spock le 🖖", "speck 🥓" ],
      title: "speckle",
      mobileMenu: false,
      menuItems: [
        // {
        //   name: "Product",
        //   link: "/product",
        //   local: true
        // },
        {
          name: "About",
          link: "/about",
          local: true
        },
        {
          name: "Community",
          link: "/community",
          items: [ {
              name: "Contributors",
              link: "/contributors",
              local: true
            },
            {
              name: "Forum",
              link: "https://discourse.speckle.works",
              local: false
            },
            {
              name: "Twitter",
              link: "https://twitter.com/SpeckleSystems",
              local: false
            }
            // {
            //   name: "Slack",
            //   link: this.$store.state.slackInviteUrl,
            //   local: false
            // }
          ]
        },
        {
          name: "Resources",
          link: "/resources",
          items: [ {
              name: "Docs v1",
              link: "/docs/essentials/start",
              local: true
            },
                        {
              name: "Source code v1",
              link: "https://github.com/speckleworks",
              local: false
            },
            {
              name: "Source code v2",
              link: "https://github.com/specklesystems",
              local: false
            }
          ]
        },
        {
          name: "Blog",
          link: "/blog",
          local: true
        },
        {
          name: "Web App",
          link: "https://app.speckle.systems",
          local: false
        }
      ]
    };
  },
  methods: {
    toggleDark( ) {
      this.$store.commit( "TOGGLE_DARK" );
      localStorage.setItem( "dark", this.$store.state.dark );
    },
    toggleNavBar( ) {
      this.$bus.$emit( "toggle-nav" );
    },
    randomize( ) {
      this.title = this.speckle[
        Math.floor( Math.random( ) * this.speckle.length )
      ];
    }
  },
  mounted( ) {
    let githubscript = document.createElement( "script" );
    githubscript.setAttribute( "src", "https://buttons.github.io/buttons.js" );
    document.head.appendChild( githubscript );
  }
};

</script>
<style>
</style>
