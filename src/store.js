import Vue from 'vue'
import Vuex from 'vuex'

import UserStore from './modules/UserStore.js'
import SocketStore from './modules/SocketStore.js'
import ReviewStore from './modules/ReviewStore.js'
import toyStore from './modules/toyStore.js';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    UserStore,
    SocketStore,
    ReviewStore,
    toyStore
},
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
