import Vue from 'vue'
import Vuex from 'vuex'

import ui from 'store/ui'
import error from 'store/error'
import demo from 'store/demo'
import options from 'store/options'
/*! scaffold:import:module */

Vue.use(Vuex)

const modules = {
  /*! scaffold:insert:module */
  ui,
  error,
  demo,
  options
}

const getters = {
}

const store = new Vuex.Store({
  modules,
  getters
})

export default store
