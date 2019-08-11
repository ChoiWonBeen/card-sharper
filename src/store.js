import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserMoney: 100,
    OpponentMoney: 100,
    raised: 0,
  },
  getters: {
    
  },
  mutations: {
    changeMoney : function (state) {

    }
  },
  actions: {

  }
})
