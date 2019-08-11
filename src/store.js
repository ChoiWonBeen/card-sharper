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
      return state.raisedSum
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
      state.raisedSum += 200
    },
    call: function (state, opponentRaising) {
      state.userMoney -= opponentRaising
      state.raisedSum += opponentRaising
    },
    half: function (state, raised) {
      state.userMoney -= raised/2
      state.raisedSum += raised/2
    },
  },
  actions: {

  }
})
