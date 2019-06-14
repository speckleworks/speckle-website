export const state = ( ) => ( {
  tree: {},
  flat: []
} )

export const getters = {
  getDoc: state => slug => {
    const doc = state.flat.find( docItem => docItem.slug === slug )
    return doc
  }
}

export const mutations = {
  setTree( state, tree ) {
    state.tree = tree
  },
  setFlat( state, flat ) {
    state.flat = flat
  }
}

export const actions = {
  loadDocs( { commit }, {docsTree, flatArr} ) {
    console.log( docsTree )
    commit( "setTree", docsTree )
    commit( "setFlat", flatArr)
  }
}
