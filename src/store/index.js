<<<<<<< HEAD
import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"


Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions
=======
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
	 state,
	 mutations,
	 getters,
	 actions
>>>>>>> cc210c6abc987026d522ba1b6dd64e8a435cb434
})