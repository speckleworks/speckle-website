export const state = () => ({
    posts: [],
    topics: []
})

export const getters = {
    getNext: state => slug => {
        let sortedPosts = state.posts.slice().sort((a, b) => { return new Date(a.attributes.date) - new Date(b.attributes.date) }).reverse()
        const index = sortedPosts.findIndex(p => p.href === slug)
        return {
            index: index,
            next: index > 0 ? sortedPosts[index - 1] : null,
            prev: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null
        }
    },
    getPost: state => slug => {
        const post = state.posts.find(p => p.href === slug)
        return post
    },
    getPosts: state => {
        return state.posts.slice().sort((a, b) => { return new Date(a.attributes.date) - new Date(b.attributes.date) }).reverse()
    },
    getTopics: state => {
        return state.topics
    }
}

export const mutations = {
    // updatePosts( state, posts ) {
    //   state.posts = posts
    //   let topicSet = new Set( )
    //   posts.forEach( p => topicSet = new Set( [ ...topicSet, ...p.attributes.tags ] ) )
    //   state.topics = [ ...topicSet ]
    // }
}

export const actions = {
    // loadPosts({ commit }, posts) {
    //     commit("updatePosts", posts)
    // }
};

function sortByPublished(a, b) {
    if (a === b) {
        return 0;
    }
    return a.attributes.published < b.attributes.published ? 1 : -1;
}