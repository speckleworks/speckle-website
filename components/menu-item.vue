<template>
  <div style="height: 100%; float:left">
    <v-btn flat :to="item.link" v-if="item.local">{{item.name}}</v-btn>
    <v-btn flat color="grey" v-if="!item.local" :href="item.link" target="_blank">
      {{item.name}} &nbsp;
      <v-icon small>open_in_new</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
<style>
</style>
