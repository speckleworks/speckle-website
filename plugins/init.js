function getDark( ) {
  if ( window.localStorage.getItem( 'dark' ) === 'true' ) {
    return true
  }
  return false
}

export default ( { app: { store, router } } ) => {
  store.state.dark = getDark( )
  // store.commit('SET_DARK', getDark())
}
