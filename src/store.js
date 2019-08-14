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
    userHand1:0,
    userHand2:0,
    opponentHand1:0,
    opponentHand2:0,
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
      state.userMoney += state.userRaised
      state.userRaised = opponentRaising
      state.userMoney -= state.userRaised
    },
    half: function (state, raisedSum) {
      state.userMoney -= raisedSum/2
      state.userRaised += raisedSum/2
    },
    bbing: function (state, standardRaised) {
      state.userMoney -= standardRaised
      state.userRaised += standardRaised
    },
    ddadang: function (state, opponentRaising) {
      state.userMoney += state.userRaised
      state.userRaised = opponentRaising * 2
      state.userMoney -= state.userRaised
    },
    allIn: function (state) {
      state.userRaised += state.userMoney
      state.userMoney = 0
    },
    opponentCall: function (state, userRaising) {
      state.opponentMoney += state.opponentRaised
      state.opponentRaised = userRaising
      state.opponentMoney -= state.opponentRaised
    },
    opponentHalf: function (state, raised) {
      state.opponentMoney -= raised/2
      state.opponentRaised += raised/2
    },
    opponentDdadang: function (state, userRaising) {
      state.opponentMoney += state.opponentRaised
      state.opponentRaised = userRaising * 2
      state.opponentMoney -= state.opponentRaised
    },
    opponentAllIn: function (state) {
      state.opponentRaised += state.opponentMoney
      state.opponentMoney = 0
    },
  },
  actions: {

  }
})
