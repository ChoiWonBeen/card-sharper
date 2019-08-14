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
    deck:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  },
  getters: {
    userMoney: function (state) {
      return Math.round(state.userMoney)
    },
    opponentMoney: function (state) {
      return Math.round(state.opponentMoney)
    },
    raisedSum: function (state) {
      return Math.round(state.userRaised + state.opponentRaised)
    },
    userRaised: function (state) {
      return Math.round(state.userRaised)
    },
    opponentRaised: function (state) {
      return Math.round(state.opponentRaised)
    },
    start:function (state) {
      return state.start
    },
    userHand1: function (state) {
      return state.deck[0]
    },
    userHand2: function (state) {
      return state.deck[1]
    },
    opponentHand1: function (state) {
      return state.deck[2]
    },
    opponentHand2: function (state) {
      return state.deck[3]
    },
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
    shuffle: function (state) {
      let j, x, i;
      for (i = state.deck.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = state.deck[i - 1];
        state.deck[i - 1] = state.deck[j];
        state.deck[j] = x;
      }
    }
  },
  actions: {

  }
})
