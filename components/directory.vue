<template>
  <div>
  <v-list-group :value="show"  class='elevation-0' v-if="directory.name !== 'docs'">
    <template v-slot:activator>
      <v-list-tile :class='`${nestlevel >= 2 ? "pl-4" : ""}`'>
        <v-list-tile-content>
          <v-list-tile-title :class='`${nestlevel<2?"font-weight-bold":""} text-capitalize subheading`'>
            {{directory.name}}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
    <template v-for='(subItem) in directory.children'>
      <v-list-tile v-if='subItem.type==="file"' :key='subItem.name' :to="`${subItem.slug}`">
        <v-list-tile-content  :class='`${nestlevel >= 2 ? "pl-4" : ""}`'>
          <v-list-tile-title class='font-weight-light'>{{ subItem.name }}</v-list-tile-title>
          <v-list-tile-sub-title class='caption' v-html="subItem.attributes.summary"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <directory-nav v-else :directory='subItem' :key='subItem.name' :nestlevel='nestlevel+1'></directory-nav>
    </template>
  </v-list-group>
    <directory-nav v-else v-for='(subItem) in directory.children' :directory='subItem' :key='subItem.name' :nestlevel='nestlevel+1'></directory-nav>
  </div>
</template>
<script>
export default {
  props: {
    directory: Object,
    nestlevel: {
      type: Number,
      default: 0,
    },
    subgroup: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    show() {
      if (this.directory.name === "docs")
        return true
      else
        return ("pages" + this.$router.currentRoute.path).includes(this.directory.path.replace(/\\/g, "/"))
    }
  },
  name: 'directory-nav'
}

</script>
<style type="text/css" scoped>
  .v-list__tile--active *{
    font-weight: 800 !important;
  }
</style>
