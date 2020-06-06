<template>
  <v-footer height="auto">
    <v-container fluid grid-list-xl pt-5>
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <v-layout align-center style="height:120px" row wrap class="mb-5 xx-text-xs-center">
            <v-flex xs8 offset-xs2 class="text-xs-center">
              <!-- NEWSLETTER START -->
              <iframe
                class="mj-w-res-iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://app.mailjet.com/widget/iframe/5q9H/xzG"
                width="100%"
              ></iframe>
              <script
                type="text/javascript"
                src="https://app.mailjet.com/statics/js/iframeResizer.min.js"
              ></script>
              <!-- NEWSLETTER END -->
            </v-flex>

            <!-- <v-flex xs12 class='text-xs-center'>
              <div class='subheading mb-5'>
                And join the Speckle Community via the channels below!
              </div>
              <v-btn large round color='' style='width: 200px' class='mt-1' href='https://twitter.com/speckle_works' target='_blank'>Twitter <v-icon right>share</v-icon>
              </v-btn>
              <v-btn large round color='' style='width: 200px' class='mt-1' :href='$store.state.slackInviteUrl' target='_blank'>Slack <v-icon right>question_answer</v-icon>
              </v-btn>
              <v-btn large round color='' style='width: 200px' class='mt-1' href='https://discourse.speckle.works' target='_blank'>Forum <v-icon right>speaker_notes</v-icon>
              </v-btn>
              <div class='subheading mt-5 pt-5 text-none'>
                <router-link :class='background==="" ? "":"footer-link"' to='/'>Home</router-link> •
                <router-link :class='background==="" ? "":"footer-link"' to='/docs/essentials/introduction/what'>Docs</router-link> •
                <router-link :class='background==="" ? "":"footer-link"' to='/blog'>Blog</router-link> •
                <a :class='background==="" ? "":"footer-link"' href='https://github.com/speckleworks' target="_blank">Github</a>
              </div>
            </v-flex>-->
          </v-layout>
        </v-flex>
        <v-flex xs12 md8>
          <v-layout align-top row wrap class="mb-5">
            <v-flex xs12 sm6 md3 v-for="(item, i) in menuItems" :key="i" style="height:100%">
              <v-list class="footer-list">
                <v-subheader class="ml-4" >{{item.name}}</v-subheader>
                <v-list-tile v-for="(subitem, ii) in item.items" :key="ii">
                  <menu-item :item="subitem"></menu-item>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="text-xs-center">
          <span
            class="caption"
          >This project has previously received funding from the European Union’s Horizon 2020 research and innovation program under the Marie Sklodowska-Curie grant agreement No 642877. Started off by Dimitrie Stefanescu in 2015 while at The Bartlett & InnoChain. All work (c) 2015 - {{new Date().getFullYear()}} project contributors, licensed under MIT.</span>
          <!-- </v-card-text> -->
          <!-- </v-card> -->
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
    background() {
      if (this.$route.path.includes("docs")) return "";
      if (this.$store.state.dark) return "royal-bg";
      return "super-bg";
    }
  },
  data() {
    return {
      menuItems: [
        {
          name: "Company",
          items: [
            {
              name: "About",
              link: "/company#about",
              local: true
            },
            {
              name: "Team",
              link: "/company#team",
              local: true
            }
          ]
        },
        {
          name: "Community",
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
          items: [
            {
              name: "Docs",
              link: "/docs/essentials/start",
              local: true
            },
            {
              name: "Blog",
              link: "/blog",
              local: true
            },
            {
              name: "Github",
              link: "https://github.com/speckleworks",
              local: false
            }
          ]
        },
        {
          name: "Integrations",
          items: [
            {
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
