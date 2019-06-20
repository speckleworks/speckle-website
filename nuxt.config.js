import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',
  debug: true,
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: `og:image`,
        property: 'og:image',
        name: 'og:image',
        content: `/spksplash.png`
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        name: 'og:site_name',
        content: 'Speckle is the open source data platform for architecture, engineering and construction.'
      }, {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@speckle_works'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/speckle-min.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },

    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0A66FF' },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/app.styl',
    { src: '~/node_modules/highlight.js/styles/dracula.css', lang: 'css' }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify',
    { ssr: false, src: '~plugins/init' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-attrs',
      'markdown-it-meta',
      'markdown-it-highlightjs'
    ]
  },
  googleAnalytics: {
    id: 'UA-96321582-1'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [ 'vuetify/lib' ],
    plugins: [ new VuetifyLoaderPlugin( ) ],
    loaders: {
      stylus: {
        import: [ '~assets/style/variables.styl' ]
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend( config, ctx ) {
      config.node = {
        fs: "empty"
      };
    }
  },
  generate: {}
}
