<template>
  <div>
    <v-container
      grid-xl
      :class="`${!$vuetify.breakpoint.smAndDown ? 'mt-5' : ''} pa-0`"
    >
      <v-layout
        row
        wrap
        py-0
        :style="`${$vuetify.breakpoint.smAndDown ? '' : 'margin-top: 140px;'}`"
      >
        <v-flex xs12 sm12 md6>
          <v-card class="elevation-10 white--text pa-5" color="primary">
            <v-card-text>
              <p class="display-2 font-weight-thin">We're hiring!</p>
              <p class="display-1 font-weight-thin mt-5">
                Join our team and help us change the future of the AEC industry.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md6 xpy-4>
          <v-card
            :class="
              `elevation-20 pa-5 ${
                !$vuetify.breakpoint.smAndDown ? 'movearound-div' : ''
              }`
            "
          >
                      <p class="headline font-weight-light mt-2">
              Tired of corporate environments, endless meetings, middle management and unfulfilling tasks?
            </p>
            <p class="headline font-weight-light mt-5">
              We are looking for smart and talented individuals who believe in our
              <a href="http://localhost:3000/blog/speckle2-vision-and-faq">vision</a> and want to change AEC, for the better!
            </p>
            <p class="headline font-weight-light mt-5">
              If you fit the description, check out the positions below and get in touch at <a href="mailto:hello@speckle.systems">hello@speckle.systems</a> 👇
            </p>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          sm12
          md6
          xpy-4
          class="mt-50"
          style="margin-top: -160px"
        ></v-flex>
      </v-layout>
     
      <v-layout justify-center row wrap px-5 mt-5 class="text-xs-center">
        <v-flex xs12 sm8 lg8 xl6 mt-5 py-5 style="min-height:20vh">
          <h1 class="display-2 font-weight-light xxx-text-uppercase">
            Open positions
          </h1>
          <p class="mt-5 subheading">
            The world is full of exciting opportunities, and these are some of
            them!
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap px-5 my-5 py-0>
        <v-flex xs12 sm6 md4 px-2 py-4 v-if="positions.length == 0">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="
                `elevation-${
                  hover ? 20 : 0
                } card-outer white-text text-white pa-4 elevation-5`
              "
              height="100%"
            >
              <center>
                <v-avatar size="100" class="mt-3">
                  <img
                    src="https://miro.medium.com/max/4540/1*q9ww_u32hhpMaA-Q_s1ujw.png"
                  />
                </v-avatar>
              </center>
              <v-card-title primary-title class="justify-center">
                <h3 class="headline mb-0">Ooops!</h3>
              </v-card-title>
              <v-card-title class="justify-center">
                <span class="title font-weight-light">
                  Looks like there's no open positions at the moment
                </span>
              </v-card-title>
              <v-card-text class="justify-center">
                We update this page regularly so please come back!!
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex
          xs12
          sm6
          md4
          px-2
          py-4
          v-for="(position, index) in positions"
          :key="index"
        >
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="
                `elevation-${
                  hover ? 20 : 0
                } card-outer white-text text-white pa-4 elevation-5`
              "
              height="100%"
              :to="position.url"
            >
              <center>
                <v-avatar size="100" class="mt-3">
                  <img :src="position.image"/>
                </v-avatar>
              </center>
              <v-card-title primary-title class="justify-center">
                <h3 class="headline mb-0">{{ position.title }}</h3>
              </v-card-title>
              <v-card-title class="justify-center">
                <span class="title font-weight-light">{{
                    position.subtitle
                  }}</span>
              </v-card-title>
              <v-card-text class="justify-center">{{
                  position.description
                }}
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <!-- <v-flex xs12 sm12 md8 px-2 py-4> -->
        <v-flex xs12 sm6 md4 px-2 py-4>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              dark
              color="primary"
              :class="
                `elevation-${
                  hover ? 20 : 10
                } card-outer white-text text-white pa-4`
              "
              height="100%"
              target="_blank"
              href="mailto:hello@speckle.systems"
            >
              <v-layout align-center fill-height>
                <v-flex mb-4>
                  <div class="display-1 font-weight-thin my-4">
                    Didn't find the right position?
                  </div>
                  <div class="subheading">
                    No worries! We are always looking for talented people who
                    believe in our mission and want to change AEC.
                    <v-divider class="my-3"/>
                    If you're intrested in working at Speckle, get in touch at
                    hello@speckle.systems
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
       <v-layout justify-center row wrap px-5 mt-5 class="text-xs-center">
        <v-flex xs12 sm8 lg8 xl6 mt-5 py-5 style="min-height:20vh">
          <h1 class="display-2 mb-3 font-weight-light xxx-text-uppercase">
            Life @ Speckle
          </h1>
          <h2 class="title font-weight-light">Wondering what it's like to work with us? Here's some of our perks!</h2>
        </v-flex>
      </v-layout>
      <v-layout ma-3 justify-center row wrap v-for="(perk, index) in perks"
                :key="index" :class="index % 2 == 0 ? 'reversed' : ''">
        <v-flex xs4>
          <v-layout justify-center>
            <v-img :src="perk.image" max-height="200" aspect-ratio="1"  alt="" contain class=""/>
          </v-layout>
        </v-flex>
        <v-flex xs4>
          <v-layout fill-height row wrap align-center ma-2>
            <v-flex>
              <p :class="index % 2 == 0 ? 'text-sm-right' : ''">
              <span class="title font-weight-bold primary--text">
                {{ perk.title }}
              </span>
                <span class="subheading">{{ perk.description }}</span>
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Speckle | About`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "title",
          name: "title",
          property: "title",
          content: this.page.title
        },
        {
          hid: "description",
          name: "description",
          property: "description",
          content: this.page.description
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          property: "og:site_name",
          content: this.page.title
        },
        //FACEBOOK
        {
          hid: "og:title",
          name: "og:title",
          property: "og:title",
          content: this.page.title
        },
        {
          hid: "og:description",
          name: "og:description",
          property: "og:description",
          content: this.page.description
        },
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: this.page.image
        },
        {
          hid: "og:type",
          name: "og:type",
          property: "og:type",
          content: "website"
        },

        //TWITTER
        {
          hid: "twitter:card",
          name: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          property: "twitter:title",
          content: this.page.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          property: "twitter:description",
          content: this.page.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          property: "twitter:image",
          content: this.page.image
        }
      ]
    };
  },
  data() {
    return {
      users: [],
      page: {
        title: "Speckle | Work @ Speckle",
        description: "Come work with us!",
        image:
          process.env.strapiBaseUri +
          "/uploads/Artboard_1_copy_3_f3f7053d48.png"
      },
      strapiBaseUri: process.env.strapiBaseUri,
      perks: [
        {
          title: "Awesome company retreats",
          description: "... or at least they will be, once we are allowed to travel again!",
          image: "https://user-images.githubusercontent.com/2679513/100470777-ccaaab80-30d0-11eb-945f-594a6219994d.png"
        },
        {
          title: "No office, no commute!",
          description: "Work from home or from wherever you fancy the most, 100% of the time.",
          image: "https://media4.giphy.com/media/XymXANrzgI4k6FL6zr/giphy.gif"
        },
        {
          title: "Flexible hours",
          description: "There is no Big Brother watching you. If you need to take your bunnies to the vet, just do so.",
          image: "https://discourse.speckle.works/uploads/default/optimized/1X/e77a5e5d33d47990227ef47d418e64d386716891_2_666x500.jpeg"
        },
        {
          title: "Choose your own gear",
          description: "You'll get a generous gadget budget to spend on the hardware & software that makes you happy.",
          image: "https://expanscape.com/assets/images/A7_6.jpg"
        },
        {
          title: "No BS meetings",
          description: "Let's face it, we all hate useless meetings. PS Stand-ups don't count! 🤣",
          image: "https://i.pinimg.com/236x/ef/35/40/ef354038963cd0dec07bb62aaaa04c94.jpg"
        },
        // {
        //   title: "Loose dress code",
        //   description: "Want to NOT wear trousers? That's fine by us (as long as you don't stand up during meetings...)",
        //   image: "https://via.placeholder.com/200"
        // },
        {
          title: "Bonkers Stand-Ups",
          description: "Our morning ritual is never boring!",
          image: "https://user-images.githubusercontent.com/2679513/100470143-93257080-30cf-11eb-83ed-a3dde755c543.png"
        }
      ],
      positions: [
        {
          title: "AEC Software Engineer",
          subtitle: "C#, WPF, AEC APIs, GraphQL",
          description:
            "If software APIs are your daily bead 🍞, then this position is for you!"+
            " We're looking for an experienced developer who has tamed various authoring and analysis tools APIs (Revit, Rhino, GHrasshopper, Dynamo  APIs...)"+
            " to help us support and expand our growing list of connectors. You will be in charge of our .NET SDK. Web development / Python skills are a plus! ",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhkgNhzZVREUuVKM34OVtosBGlTCR00Ymqg&usqp=CAU",
          url: "/"
        },
        {
          title: "Frontent Engineer",
          subtitle: "Js, Vue, UX/UI, GraphQL",
          description:
            "We're looking for an experienced and talented Frontent + UX/UI engineer to look after and improve the Speckle Web app and to develop brand new specialized apps that will leverage" +
            " Speckle data (dashboards, automation & management tools and more) and experiences. AEC / Node.js / Three.js skills are a plus!",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
          url: "/"
        },
                {
          title: "3D Web Engineer",
          subtitle: "Three.js, WebGL, 3D",
          description:
            "If 3D geometry in the browser is your passion, then this position is for you! We're looking for a skilled Three.js/WebGL developer to bring our viewer to the next level." +
            " You'll be responsible of the coolest open source viewer for the AEC industry! AEC / Frontend experience are a plus!",
          image:
            "https://img.stackshare.io/service/5883/preview.png",
          url: "/"
        }
      ]
    };
  }
};
</script>
<style type="text/css">
.movearound-div {
  margin-top: 60px;
  margin-left: -50px;
}

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

.reversed {
  flex-direction: row-reverse !important;
}

.image-round {
  overflow: hidden;
  border-radius: 50%;
}
</style>
