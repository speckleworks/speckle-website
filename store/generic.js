export const state = ( ) => ( {
  contributors: [ ]
} )

export const getters = {
  getContributors: state => {
    return state.contributors
  }
}

export const mutations = {
  setContributors( state, contributors ) {
    state.contributors = contributors
  },
  addContributor( state, contrib ) {
    state.contributors.push( contrib )
  }
}

export const actions = {
  loadContribs( { commit }, { contributors } ) {
    commit( "setContributors", contributors )
  },
  addContrib( { commit }, { contrib } ) {
    commit( "addContributor", contrib )
  }
}
