<template>
  <v-toolbar
    prominent
    app
    clipped-right
    :class="$store.state.dark ? '' : ''"
    style="z-index: 20"
    :dark="$store.state.dark"
  >
    <!-- NORMAL MENU -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">
        <v-img
          src="https://discourse.speckle.works/uploads/default/original/1X/25cc7f19595c444b111cff766d2310034f9efa79.png"
          width="20"
        ></v-img>&nbsp;&nbsp;
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
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat block v-on="on">
            <v-img
              src="https://discourse.speckle.works/uploads/default/original/1X/25cc7f19595c444b111cff766d2310034f9efa79.png"
              width="20"
            ></v-img>&nbsp;&nbsp;
            Speckle
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list class="pr-3">
          <v-list-tile v-for="(item, i) in menuItems" :key="i">
            <v-menu open-on-hover offset-x v-if="item.items">
              <template v-slot:activator="{ on }">
                <v-btn flat v-on="on">
                  {{item.name}}&nbsp;
                  <v-icon small>arrow_drop_down</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-tile v-for="(subitem, ii) in item.items" :key="ii">
                  <menu-item :item="subitem"></menu-item>
                </v-list-tile>
              </v-list>
            </v-menu>
            <menu-item v-else :item="item"></menu-item>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn
      class="github-button"
      href="https://github.com/speckleworks/speckleserver"
      data-size="large"
      data-show-count="true"
      aria-label="Star speckleworks/speckleserver on GitHub"
    >Star us on GitHub!</v-btn>

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
  data() {
    return {
      navBar: true,
      speckle: ["speckle ✨", "spackle 👷🏽‍♂️", "spock le 🖖", "speck 🥓"],
      title: "speckle",
      menuItems: [
        {
          name: "Product",
          link: "/product",
          local: true
        },
        // {
        //   name: "Use Cases",
        //   link: "/use-cases",
        //   local: true
        // },
        {
          name: "Company",
          link: "/company",
          items: [
            {
              name: "About",
              link: "/company/about",
              local: true
            },
            {
              name: "Team",
              link: "/company/team",
              local: true
            }
          ]
        },
        {
          name: "Community",
          link: "/community",
          items: [
            {
              name: "Contributors",
              link: "/contributors",
              local: true
            },
            {
              name: "Twitter",
              link: "https://twitter.com/speckle_works",
              local: false
            },
            {
              name: "Slack",
              link: "$store.state.slackInviteUrl",
              local: false
            },
            {
              name: "Forum",
              link: "https://discourse.speckle.works",
              local: false
            }
          ]
        },
        {
          name: "Resources",
          link: "/resources",
          items: [
            {
              name: "Docs",
              link: "/docs/essentials/start",
              local: true
            },
            {
              name: "Speckle Insider",
              link: "/blog/insider-speckle2",
              local: true
            },
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
          name: "Blog",
          link: "/blog",
          local: true
        },
        {
          name: "Web App",
          link: "https://app.speckle.systems",
          local: false
        }

        // {
        //   name: "About / Contact",
        //   link: "/about",
        //   local: true
        // },

        //
      ]
    };
  },
  methods: {
    toggleDark() {
      this.$store.commit("TOGGLE_DARK");
      localStorage.setItem("dark", this.$store.state.dark);
    },
    toggleNavBar() {
      this.$bus.$emit("toggle-nav");
    },
    randomize() {
      this.title = this.speckle[
        Math.floor(Math.random() * this.speckle.length)
      ];
    }
  },
  mounted() {
    let githubscript = document.createElement("script");
    githubscript.setAttribute("src", "https://buttons.github.io/buttons.js");
    document.head.appendChild(githubscript);
  }
};
</script>
<style>
</style>
