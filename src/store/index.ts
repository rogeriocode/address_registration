import Vue from 'vue';
import Vuex from 'vuex';
import addressStore from './modules/address.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { addressStore },
});
