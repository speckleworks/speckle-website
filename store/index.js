import BlogFromDir from './mdFromDir.js'
import DocsFromDir from './DocsFromDir.js'
import axios from 'axios'

export const state = ( ) => ( {
  dark: false,
  navbar: true,
  slackInviteUrl: 'https://speckle-works.slack.com/join/shared_invite/enQtNjY5Mzk2NTYxNTA4LTU4MWI5ZjdhMjFmMTIxZDIzOTAzMzRmMTZhY2QxMmM1ZjVmNzJmZGMzMDVlZmJjYWQxYWU0MWJkYmY3N2JjNGI',
  contributors: [ ] //JSON.parse( contribsString )
} )

export const mutations = {
  TOGGLE_DARK: state => {
    state.dark = !state.dark
  },
  SET_DARK: state => status => {
    console.log( state, status )
    state.dark = status
  },
}
let calledContribs = false

export const actions = {
  async nuxtServerInit( ) {
    if ( process.server ) {
      this.dispatch( "blog/loadPosts", BlogFromDir( "blog" ) )
      this.dispatch( "docs/loadDocs", DocsFromDir( "docs" ) )

      if ( calledContribs ) return

      let test = await getContributors( )
      console.log( test.length )
      this.dispatch( "generic/loadContribs", { contributors: test } )
      calledContribs = true

      // let token = process.env.GHPAT
      // let orgUrl = `https://api.github.com/orgs/speckleworks`

      // try {
      //   let listOfMembers = await this.$axios.$get( `${orgUrl}/members`, {
      //     headers: { 'Authorization': ` token ${token}` }
      //   } )
      //   listOfMembers.forEach( async mem => {
      //     let contributor = await this.$axios.$get( mem.url, { headers: { 'Authorization': ` token ${token}` } } )
      //     // this.commit( 'ADD_CONTRIBUTOR', contributor )
      //     this.dispatch( 'generic/addContrib', { contrib: contributor } )
      //   } )
      // } catch ( err ) {
      //   console.log( err )
      // }

    }

    // console.log( process.env.GHPAT )
  },

  setDark( ) {
    this.commit( 'SET_DARK' )
  },
}

let getContributors = async ( ) => new Promise( async ( resolve, reject ) => {
  console.log( 'get contribs called' )
  let token = process.env.GHPAT
  let org = "speckleworks"
  let baseUrl = "https://europe-west2-speckle-manager-api.cloudfunctions.net"

  try {
    let result = await axios.get(`${baseUrl}/members?org=${org}`)

    let c = [ ]
    // console.log( result.data )
    for ( let mem of result.data ) {
      let contributor = await axios.get(`${baseUrl}/user?user=${mem.login}`)
      c.push( contributor.data )
    }
    console.log( c.length )
    resolve( c )

    // listOfMembers.forEach( async mem => {
    //   let contributor = await this.$axios.$get( mem.url, { headers: { 'Authorization': ` token ${token}` } } )
    //   this.dispatch( 'generic/addContrib', { contrib: contributor } )
    // } )
  } catch ( err ) {
    console.log( err )
  }
} )
