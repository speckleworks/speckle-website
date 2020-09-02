import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'
import axios from 'axios'


export default {
    mode: 'universal',
    debug: true,
    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description},
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: 'Speckle is the open source data platform for architecture, engineering and construction.'
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website'
            },
            {
                hid: `og:image`,
                property: 'og:image',
                content: `https://speckle.systems/spksplash.png`
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Speckle: The open source data platform for architecture, engineering and construction.'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'A fast, web-scale base for automation, used by some of the most progressive companies in the AEC industry.'
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://speckle.systems'
            },
            {
                hid: `twitter:image`,
                property: 'twitter:image',
                name: 'twitter:image',
                content: `https://speckle.systems/spksplash.png`
            },
            {
                hid: 'twitter:title',
                property: 'twitter:title',
                name: 'twitter:title',
                content: 'Speckle: The open source data platform for architecture, engineering and construction.'
            },
            {
                hid: 'twitter:description',
                property: 'twitter:description',
                name: 'twitter:description',
                content: 'A fast, web-scale base for automation, used by some of the most progressive companies in the AEC industry.'
            },
            {
                hid: 'twitter:site',
                name: 'twitter:site',
                content: '@SpeckleSystems'
            },
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image'
            }
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/speckle-min.png'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            },
            {
                rel: 'alternate',
                type: 'application/rss+xml',
                href: 'feed.xml',
                title: 'Speckle Blog'

            },

        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#0A66FF'},

    /*
     ** Global CSS
     */
    css: [
        '~/assets/style/app.styl',
        {src: '~/node_modules/highlight.js/styles/dracula.css', lang: 'css'}
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/vuetify',
        '@/plugins/moment',
        {ssr: false, src: '~plugins/init'},
        '@/plugins/bus',
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/feed',
        '@nuxtjs/markdownit',
        '@nuxtjs/google-analytics',
        '@nuxtjs/dotenv',
        '@nuxtjs/apollo',

    ],
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: process.env.BACKEND_URL || "https://strapi.speckle.works/graphql"
            }
        }
    },
    env: {
        strapiBaseUri: process.env.API_URL || "https://strapi.speckle.works"
    },
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: false,
        injected: false,
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
        transpile: ['vuetify/lib'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ['~assets/style/variables.styl']
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.node = {
                fs: "empty"
            };
        }
    },

    generate: {
        subFolders: true,
        async routes() {
            let articlesReq = await axios.post(`https://strapi.speckle.works/graphql`, {query: "{ articles { slug } }"})
            return articlesReq.data.data.articles.map(art => `/blog/${art.slug}`)
        }
    },
    router: {
        base: '/'
    },
    feed: [{
        path: "/feed.xml",
        async create(feed) {
            const articlesReq = await axios.post(`https://strapi.speckle.works/graphql`, {
                query: `{articles(sort: "id:desc", where: { published: true }) {
                    id
                    slug
                    title
                    published
                    summary
                    content
                    date
                    image {
                        url
                    }
                    author {
                        name
                    }
                }}`
            })
            feed.options = {
                title: "Speckle Blog",
                link: "https://speckle.systems/feed.xml",
                description: "The latest updates, announcements, and tutorials from the Speckle team.",
            }
            articlesReq.data.data.articles.forEach(post => {
                feed.addItem({
                    title: post.title,
                    id: post.id,
                    link: `https://speckle.systems/blog/${post.slug}`,
                    description: post.summary,
                    content: post.content,
                    date: new Date(post.date),
                    image: post.image ?
                        "https://strapi.speckle.works" + post.image.url : "",
                    author: [{
                        name: post.author.name,
                    }]

                })
            })
        },
        cacheTime: 1000 * 60 * 15,
        type: 'rss2'
    }]
}