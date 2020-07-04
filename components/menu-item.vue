<template>
  <div style="height: 100%; width:100%;">
    <v-btn flat :to="item.link" style="width:100%; justify-content:left" class="text-left" v-if="item.local">{{item.name}}</v-btn>
    <v-btn flat color="grey" style="width:100%; justify-content:left" class="text-left" v-if="!item.local" :href="item.link" target="_blank">
      {{item.name}} &nbsp;
      <v-icon small>open_in_new</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: [ "item" ]
}

</script>
<style>
</style>
