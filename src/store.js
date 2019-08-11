import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    start:'no',
    userMoney: 100,
    opponentMoney: 100,
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
    }
  },
  actions: {

  }
})
