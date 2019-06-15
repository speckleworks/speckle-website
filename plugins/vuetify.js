import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: "#0A66FF",
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.blue.lighten1,
    warning: colors.amber.darken2,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
