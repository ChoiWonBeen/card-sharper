import Vue from 'vue'
import Vuex from 'vuex'
import playing from './modules/playing'
import betting from './modules/betting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    playing,
    betting
  }
})
