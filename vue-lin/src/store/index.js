import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    isCollapse: true
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
