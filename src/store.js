import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    start:'no',
    userMoney: 10000,
    opponentMoney: 10000,
    raisedSum:0,
    userRaised:0,
    opponentRaised:0,

  },
  getters: {
    userMoney: function (state) {
      return state.userMoney
    },
    opponentMoney: function (state) {
      return state.opponentMoney
    },
    raisedSum: function (state) {
      return state.userRaised + state.opponentRaised
    },
    userRaised: function (state) {
      return state.userRaised
    },
    opponentRaised: function (state) {
      return state.opponentRaised
    },
    start:function (state) {
      return state.start
    }
  },
  mutations: {
    clickStart: function (state, yes) {
      state.start = yes
      state.userMoney -= 100
      state.opponentMoney -= 100
      state.userRaised += 100
      state.opponentRaised += 100
    },

    called: function (state, opponentRaising) {

      state.userRaised = opponentRaising

    },
    half: function (state, raised) {
      state.userMoney -= raised/2
      state.userRaised += raised/2
    },
    bbing: function (state, standardRaised) {
      state.userMoney -= standardRaised
      state.userRaised += standardRaised
    }
  },
  actions: {

  }
})
