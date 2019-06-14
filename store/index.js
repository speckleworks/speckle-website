import BlogFromDir from './mdFromDir.js'
import DocsFromDir from './DocsFromDir.js'

export const state = ( ) => ( {
  dark: false
} )

export const mutations = {
  TOGGLE_DARK: state => {
    state.dark = !state.dark
  },
  SET_DARK: state => status => {
    console.log( state, status )
    state.dark = status
  }
}

export const actions = {
  nuxtServerInit( ) {
    if ( process.server ) {
      this.dispatch( "blog/loadPosts", BlogFromDir( "blog" ) )
      // let test = DocsFromDir( "docs" )
      this.dispatch( "docs/loadDocs", DocsFromDir( "docs" ) )
      // console.log( test )
    }
  },
  setDark( ) {
    this.commit( 'SET_DARK' )
  }
}
