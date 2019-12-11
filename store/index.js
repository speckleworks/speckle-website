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
  let orgUrl = `https://api.github.com/orgs/speckleworks`

  try {
    let result = await axios.get( `${orgUrl}/members`, {
      headers: { 'Authorization': ` token ${token}` }
    } )

    let c = [ ]
    // console.log( result.data )
    for ( let mem of result.data ) {
      let contributor = await axios.get( mem.url, { headers: { 'Authorization': ` token ${token}` } } )
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

// let contribsString = '[{"login":"alvpickmans","id":12413808,"node_id":"MDQ6VXNlcjEyNDEzODA4","avatar_url":"https://avatars2.githubusercontent.com/u/12413808?v=4","gravatar_id":"","url":"https://api.github.com/users/alvpickmans","html_url":"https://github.com/alvpickmans","followers_url":"https://api.github.com/users/alvpickmans/followers","following_url":"https://api.github.com/users/alvpickmans/following{/other_user}","gists_url":"https://api.github.com/users/alvpickmans/gists{/gist_id}","starred_url":"https://api.github.com/users/alvpickmans/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/alvpickmans/subscriptions","organizations_url":"https://api.github.com/users/alvpickmans/orgs","repos_url":"https://api.github.com/users/alvpickmans/repos","events_url":"https://api.github.com/users/alvpickmans/events{/privacy}","received_events_url":"https://api.github.com/users/alvpickmans/received_events","type":"User","site_admin":false},{"login":"AntoineDao","id":20436635,"node_id":"MDQ6VXNlcjIwNDM2NjM1","avatar_url":"https://avatars3.githubusercontent.com/u/20436635?v=4","gravatar_id":"","url":"https://api.github.com/users/AntoineDao","html_url":"https://github.com/AntoineDao","followers_url":"https://api.github.com/users/AntoineDao/followers","following_url":"https://api.github.com/users/AntoineDao/following{/other_user}","gists_url":"https://api.github.com/users/AntoineDao/gists{/gist_id}","starred_url":"https://api.github.com/users/AntoineDao/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/AntoineDao/subscriptions","organizations_url":"https://api.github.com/users/AntoineDao/orgs","repos_url":"https://api.github.com/users/AntoineDao/repos","events_url":"https://api.github.com/users/AntoineDao/events{/privacy}","received_events_url":"https://api.github.com/users/AntoineDao/received_events","type":"User","site_admin":false},{"login":"didimitrie","id":7696515,"node_id":"MDQ6VXNlcjc2OTY1MTU=","avatar_url":"https://avatars1.githubusercontent.com/u/7696515?v=4","gravatar_id":"","url":"https://api.github.com/users/didimitrie","html_url":"https://github.com/didimitrie","followers_url":"https://api.github.com/users/didimitrie/followers","following_url":"https://api.github.com/users/didimitrie/following{/other_user}","gists_url":"https://api.github.com/users/didimitrie/gists{/gist_id}","starred_url":"https://api.github.com/users/didimitrie/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/didimitrie/subscriptions","organizations_url":"https://api.github.com/users/didimitrie/orgs","repos_url":"https://api.github.com/users/didimitrie/repos","events_url":"https://api.github.com/users/didimitrie/events{/privacy}","received_events_url":"https://api.github.com/users/didimitrie/received_events","type":"User","site_admin":false},{"login":"fraguada","id":1014562,"node_id":"MDQ6VXNlcjEwMTQ1NjI=","avatar_url":"https://avatars0.githubusercontent.com/u/1014562?v=4","gravatar_id":"","url":"https://api.github.com/users/fraguada","html_url":"https://github.com/fraguada","followers_url":"https://api.github.com/users/fraguada/followers","following_url":"https://api.github.com/users/fraguada/following{/other_user}","gists_url":"https://api.github.com/users/fraguada/gists{/gist_id}","starred_url":"https://api.github.com/users/fraguada/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/fraguada/subscriptions","organizations_url":"https://api.github.com/users/fraguada/orgs","repos_url":"https://api.github.com/users/fraguada/repos","events_url":"https://api.github.com/users/fraguada/events{/privacy}","received_events_url":"https://api.github.com/users/fraguada/received_events","type":"User","site_admin":false},{"login":"logan12358","id":1195438,"node_id":"MDQ6VXNlcjExOTU0Mzg=","avatar_url":"https://avatars2.githubusercontent.com/u/1195438?v=4","gravatar_id":"","url":"https://api.github.com/users/logan12358","html_url":"https://github.com/logan12358","followers_url":"https://api.github.com/users/logan12358/followers","following_url":"https://api.github.com/users/logan12358/following{/other_user}","gists_url":"https://api.github.com/users/logan12358/gists{/gist_id}","starred_url":"https://api.github.com/users/logan12358/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/logan12358/subscriptions","organizations_url":"https://api.github.com/users/logan12358/orgs","repos_url":"https://api.github.com/users/logan12358/repos","events_url":"https://api.github.com/users/logan12358/events{/privacy}","received_events_url":"https://api.github.com/users/logan12358/received_events","type":"User","site_admin":false},{"login":"mishaelnuh","id":45694155,"node_id":"MDQ6VXNlcjQ1Njk0MTU1","avatar_url":"https://avatars0.githubusercontent.com/u/45694155?v=4","gravatar_id":"","url":"https://api.github.com/users/mishaelnuh","html_url":"https://github.com/mishaelnuh","followers_url":"https://api.github.com/users/mishaelnuh/followers","following_url":"https://api.github.com/users/mishaelnuh/following{/other_user}","gists_url":"https://api.github.com/users/mishaelnuh/gists{/gist_id}","starred_url":"https://api.github.com/users/mishaelnuh/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/mishaelnuh/subscriptions","organizations_url":"https://api.github.com/users/mishaelnuh/orgs","repos_url":"https://api.github.com/users/mishaelnuh/repos","events_url":"https://api.github.com/users/mishaelnuh/events{/privacy}","received_events_url":"https://api.github.com/users/mishaelnuh/received_events","type":"User","site_admin":false},{"login":"mswaidan","id":5855750,"node_id":"MDQ6VXNlcjU4NTU3NTA=","avatar_url":"https://avatars3.githubusercontent.com/u/5855750?v=4","gravatar_id":"","url":"https://api.github.com/users/mswaidan","html_url":"https://github.com/mswaidan","followers_url":"https://api.github.com/users/mswaidan/followers","following_url":"https://api.github.com/users/mswaidan/following{/other_user}","gists_url":"https://api.github.com/users/mswaidan/gists{/gist_id}","starred_url":"https://api.github.com/users/mswaidan/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/mswaidan/subscriptions","organizations_url":"https://api.github.com/users/mswaidan/orgs","repos_url":"https://api.github.com/users/mswaidan/repos","events_url":"https://api.github.com/users/mswaidan/events{/privacy}","received_events_url":"https://api.github.com/users/mswaidan/received_events","type":"User","site_admin":false},{"login":"PaulPoinet","id":22736626,"node_id":"MDQ6VXNlcjIyNzM2NjI2","avatar_url":"https://avatars0.githubusercontent.com/u/22736626?v=4","gravatar_id":"","url":"https://api.github.com/users/PaulPoinet","html_url":"https://github.com/PaulPoinet","followers_url":"https://api.github.com/users/PaulPoinet/followers","following_url":"https://api.github.com/users/PaulPoinet/following{/other_user}","gists_url":"https://api.github.com/users/PaulPoinet/gists{/gist_id}","starred_url":"https://api.github.com/users/PaulPoinet/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/PaulPoinet/subscriptions","organizations_url":"https://api.github.com/users/PaulPoinet/orgs","repos_url":"https://api.github.com/users/PaulPoinet/repos","events_url":"https://api.github.com/users/PaulPoinet/events{/privacy}","received_events_url":"https://api.github.com/users/PaulPoinet/received_events","type":"User","site_admin":false},{"login":"pearswj","id":121068,"node_id":"MDQ6VXNlcjEyMTA2OA==","avatar_url":"https://avatars1.githubusercontent.com/u/121068?v=4","gravatar_id":"","url":"https://api.github.com/users/pearswj","html_url":"https://github.com/pearswj","followers_url":"https://api.github.com/users/pearswj/followers","following_url":"https://api.github.com/users/pearswj/following{/other_user}","gists_url":"https://api.github.com/users/pearswj/gists{/gist_id}","starred_url":"https://api.github.com/users/pearswj/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pearswj/subscriptions","organizations_url":"https://api.github.com/users/pearswj/orgs","repos_url":"https://api.github.com/users/pearswj/repos","events_url":"https://api.github.com/users/pearswj/events{/privacy}","received_events_url":"https://api.github.com/users/pearswj/received_events","type":"User","site_admin":false},{"login":"teocomi","id":2679513,"node_id":"MDQ6VXNlcjI2Nzk1MTM=","avatar_url":"https://avatars1.githubusercontent.com/u/2679513?v=4","gravatar_id":"","url":"https://api.github.com/users/teocomi","html_url":"https://github.com/teocomi","followers_url":"https://api.github.com/users/teocomi/followers","following_url":"https://api.github.com/users/teocomi/following{/other_user}","gists_url":"https://api.github.com/users/teocomi/gists{/gist_id}","starred_url":"https://api.github.com/users/teocomi/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/teocomi/subscriptions","organizations_url":"https://api.github.com/users/teocomi/orgs","repos_url":"https://api.github.com/users/teocomi/repos","events_url":"https://api.github.com/users/teocomi/events{/privacy}","received_events_url":"https://api.github.com/users/teocomi/received_events","type":"User","site_admin":false}]'
