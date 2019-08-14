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
    opponentBetting:null,
    userBetting:null
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
    opponentBetting: function(state){
      return state.opponentBetting
    },
    userBetting: function(state){
      return state.userBetting
    },
    battleResult: function (state, getters) {
      let users = [getters.userHand1, getters.userHand2]
      let opponents = [getters.opponentHand1, getters.opponentHand2]
      let jokbo = function (cardSet) {
        let cards = cardSet.sort(function(left, right) { return left-right })
        if(cards[0]===3 && cards[1]===8){
          return [102,'38광땡']
        }
        else if(cards[0]===1 && cards[1]===8|| cards[0]===1 && cards[1]===3){
          return [101,'13광땡']
        }
        else if(cards[1]-cards[0] === 10){
          return [90+cards[0],cards[0]+'땡']
        }
        else if(cards[0]===1 && cards[1]===2 || cards[0]===2 && cards[1]===11 ||
                cards[0]===11 && cards[1]===12 || cards[0]===1 && cards[1]===12){
          return [90,'알리']
        }
        else if(cards[0]===1 && cards[1]===4 || cards[0]===4 && cards[1]===11 ||
                cards[0]===11 && cards[1]===14 || cards[0]===1 && cards[1]===14){
          return [89,'독사']
        }
        else if(cards[0]===1 && cards[1]===9 || cards[0]===9 && cards[1]===11 ||
                cards[0]===11 && cards[1]===19 || cards[0]===1 && cards[1]===19){
          return [88,'구삥']
        }
        else if(cards[0]===1 && cards[1]===10 || cards[0]===10 && cards[1]===11 ||
                cards[0]===11 && cards[1]===20 || cards[0]===1 && cards[1]===20){
          return [87,'장삥']
        }
        else if(cards[0]===4 && cards[1]===10 || cards[0]===10 && cards[1]===14 ||
                cards[0]===14 && cards[1]===20 || cards[0]===4 && cards[1]===20){
          return [86,'장사']
        }
        else if(cards[0]===4 && cards[1]===6 || cards[0]===6 && cards[1]===14 ||
                cards[0]===14 && cards[1]===16 || cards[0]===4 && cards[1]===16){
          return [85,'세륙']
        }
        else{
          return [(cards[0]+cards[1])%10,(cards[0]+cards[1])%10+'끗']
        }
      }

      let userResult = jokbo(users)
      let opponentResult = jokbo(opponents)

      if (userResult[0]>opponentResult[0]){
        return [userResult[1]+'(으)로 이겼습니다', userResult[1], opponentResult[1]]
      }
      else if (userResult[0]<opponentResult[0]){
        return [opponentResult[1]+'한테 졌습니다!', userResult[1], opponentResult[1]]
      }
      else{
        return [userResult[1]+'(으)로 무승부입니다.', userResult[1], opponentResult[1]]
      }
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
    shuffle: function (state) {
      let j, x, i;
      for (i = state.deck.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = state.deck[i - 1];
        state.deck[i - 1] = state.deck[j];
        state.deck[j] = x;
      }
    },
    betOpponent:function (state, betting) {
      state.opponentBetting = betting
    },
    betUser:function (state, betting) {
      state.userBetting = betting
    },
  },
  actions: {

  }
})
