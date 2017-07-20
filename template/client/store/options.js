import getOptionsPageBySlug from '../api/getOptionsPageBySlug'

const state = {
  options: {
    'options': {}
  },
  loading: false
}

const mutations = {
  OPTIONS_SINGLE_LOAD (state) {
    state.loading = true
  },
  OPTIONS_SINGLE_SAVE (state, payload) {
    const { page, slug } = payload
    state.loading = false
    state.options[slug] = page
  },
  OPTIONS_CANCEL_LOAD (state) {
    state.loading = false
  }
}

const actions = {
  loadInitialData ({ dispatch }) {
    dispatch('loadOptionsPageBySlug', { slug: 'options' })
  },
  loadOptionsPageBySlug ({ commit, dispatch, state }, payload) {
    const { slug } = payload
    // if (!state.options[slug]) {
    commit('OPTIONS_SINGLE_LOAD')
    return getOptionsPageBySlug(slug).then((page) => {
      commit('OPTIONS_SINGLE_SAVE', { page, slug })
    })
    .catch((error) => {
      commit('OPTIONS_CANCEL_LOAD')
      dispatch('error', { error })
    })
    // }
  }
}

const module = {
  state,
  mutations,
  actions
}

export default module
