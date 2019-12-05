import BlogFromDir from './mdFromDir.js'
import DocsFromDir from './DocsFromDir.js'

export const state = ( ) => ( {
  dark: false,
  navbar: true,
  slackInviteUrl: 'https://speckle-works.slack.com/join/shared_invite/enQtNjY5Mzk2NTYxNTA4LTU4MWI5ZjdhMjFmMTIxZDIzOTAzMzRmMTZhY2QxMmM1ZjVmNzJmZGMzMDVlZmJjYWQxYWU0MWJkYmY3N2JjNGI',
  contributors: [ ]
} )

export const mutations = {
  TOGGLE_DARK: state => {
    state.dark = !state.dark
  },
  SET_DARK: state => status => {
    console.log( state, status )
    state.dark = status
  },
  ADD_CONTRIBUTOR( state, contributor ) {
    // console.log( contributor )
    state.contributors.push( contributor )
  }
}

export const actions = {
  nuxtServerInit( ) {
    if ( process.server ) {
      this.dispatch( "blog/loadPosts", BlogFromDir( "blog" ) )
      this.dispatch( "docs/loadDocs", DocsFromDir( "docs" ) )
    }
  },

  setDark( ) {
    this.commit( 'SET_DARK' )
  },
}
