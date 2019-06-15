<template>
</template>
<script>
export default {
 data( ) {
    return {
      navBar: false
    }
  },
  methods: {
    toggleDark( ) {
      this.$store.commit( 'TOGGLE_DARK' )
      localStorage.setItem( 'dark', this.$store.state.dark )
    },
    toggleNavBar() {
      this.$store.commit( 'TOGGLE_NAVBAR' )
    }
  }
}

</script>

<style>
</style>
